/* Read-aloud engine: a small queue player on top of the Web Speech API (speechSynthesis).
 *
 *   TTS.play(items, startIndex)   items = [{ el, label, parts: [{ lang: "zh" | "en", text }] }]
 *   TTS.toggle() / next() / prev() / stop() / setRate(r)
 *   TTS.on(fn)  → fn({ status: "idle" | "playing" | "paused", index, total, item })
 *
 * Notes on the browser quirks this works around:
 *  - long utterances are cut off by some voices, so text is split into short chunks;
 *  - cancel() followed straight away by speak() can be swallowed, hence the small delay;
 *  - pause()/resume() is unreliable, so "pause" = cancel and "resume" = replay the current chunk.
 */
"use strict";
window.TTS = (function () {
  const synth = window.speechSynthesis;
  const supported = !!(synth && window.SpeechSynthesisUtterance);
  const stateFns = new Set(), voiceFns = new Set();
  const prefs = { rate: 1, voiceZh: "", voiceEn: "" };
  let voices = [];
  let items = [], i = 0, c = 0, chunks = null, status = "idle", gen = 0;

  /* ── voices ─────────────────────────────────────────────────────────────── */
  function loadVoices() {
    if (!supported) return;
    voices = synth.getVoices() || [];
    voiceFns.forEach((fn) => fn());
  }
  if (supported) {
    loadVoices();
    if (synth.addEventListener) synth.addEventListener("voiceschanged", loadVoices);
    else synth.onvoiceschanged = loadVoices;
    synth.cancel(); // drop anything left over from a previous page load
    window.addEventListener("pagehide", () => synth.cancel());
  }
  const norm = (v) => v.lang.toLowerCase().replace("_", "-");
  const voicesFor = (kind) => voices.filter((v) => (kind === "zh" ? /^(zh|yue)/.test(norm(v)) : /^en/.test(norm(v))));
  function rank(v, kind) {
    const l = norm(v);
    let s = 0;
    if (kind === "zh") s += l.startsWith("zh-hk") || l.startsWith("yue") ? 30 : l.startsWith("zh-tw") ? 20 : l.startsWith("zh-cn") ? 10 : 0;
    else s += l === "en-us" ? 20 : l === "en-gb" ? 18 : 10;
    if (/natural|online/i.test(v.name)) s += 5;   // higher-quality neural voices (Edge)
    if (v.localService) s += 1;
    return s;
  }
  function pick(kind) {
    const pref = kind === "zh" ? prefs.voiceZh : prefs.voiceEn;
    const list = voicesFor(kind);
    return list.find((v) => v.voiceURI === pref || v.name === pref) || [...list].sort((a, b) => rank(b, kind) - rank(a, kind))[0] || null;
  }

  /* ── text → short chunks ────────────────────────────────────────────────── */
  function chunkText(text) {
    const pieces = text.replace(/\s+/g, " ").trim().split(/(?<=[。！？；!?;])\s*|(?<=[.:])\s+/).filter(Boolean);
    const out = [];
    let buf = "";
    const join = (a, b) => (a ? a + (/[㐀-鿿]/.test(b[0]) ? "" : " ") + b : b);
    for (const p of pieces) {
      if (p.length > 180) {                       // very long sentence: break at commas
        if (buf) { out.push(buf); buf = ""; }
        let cur = "";
        for (const q of p.split(/(?<=[，,、])/)) {
          if (cur && (cur + q).length > 140) { out.push(cur); cur = q; } else cur += q;
        }
        if (cur) out.push(cur);
      } else if (buf && (buf + p).length > 100) { out.push(buf); buf = p; }
      else buf = join(buf, p);
    }
    if (buf) out.push(buf);
    return out;
  }

  /* ── playback ───────────────────────────────────────────────────────────── */
  const snapshot = () => ({ status, index: i, total: items.length, item: items[i] || null });
  const emit = () => stateFns.forEach((fn) => fn(snapshot()));

  function run() {
    if (status !== "playing") return;
    const my = gen;
    if (!chunks) {
      chunks = [];
      items[i].parts.forEach((p) => chunkText(p.text).forEach((t) => chunks.push({ lang: p.lang, text: t })));
    }
    if (c >= chunks.length) return advance();
    const { lang, text } = chunks[c];
    const u = new SpeechSynthesisUtterance(text);
    const v = pick(lang);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = lang === "zh" ? "zh-HK" : "en-US";
    u.rate = prefs.rate;
    u.onend = () => { if (my === gen) { c++; run(); } };
    u.onerror = (e) => {
      if (my !== gen || e.error === "canceled" || e.error === "interrupted") return;
      c++; run();                                  // skip a chunk the voice could not speak
    };
    synth.speak(u);
  }
  function advance() {
    i++; c = 0; chunks = null;
    if (i >= items.length) return stop();
    emit(); run();
  }
  function restartSoon() {
    const my = gen;
    setTimeout(() => { if (my === gen) run(); }, 70);
  }
  function play(list, from) {
    if (!supported || !list || !list.length) return;
    gen++; synth.cancel();
    items = list; i = from || 0; c = 0; chunks = null; status = "playing";
    emit(); restartSoon();
  }
  function seek(n) {
    gen++; synth.cancel();
    i = Math.max(0, Math.min(items.length - 1, n)); c = 0; chunks = null; status = "playing";
    emit(); restartSoon();
  }
  function pause() {
    if (status !== "playing") return;
    status = "paused"; gen++; synth.cancel(); emit();
  }
  function resume() {
    if (status !== "paused") return;
    status = "playing"; emit(); restartSoon();
  }
  function stop() {
    gen++; if (supported) synth.cancel();
    items = []; i = 0; c = 0; chunks = null; status = "idle"; emit();
  }
  function setRate(r) {
    prefs.rate = r;
    if (status === "playing") { gen++; synth.cancel(); restartSoon(); }   // re-speak the current chunk at the new speed
  }
  function preview(kind, text) {
    if (!supported) return;
    stop();
    const u = new SpeechSynthesisUtterance(text), v = pick(kind);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = kind === "zh" ? "zh-HK" : "en-US";
    u.rate = prefs.rate;
    setTimeout(() => synth.speak(u), 70);
  }

  return {
    supported, prefs, pick, preview, play, pause, resume, stop, setRate,
    voices: voicesFor,
    toggle() { status === "playing" ? pause() : resume(); },
    next() { if (status !== "idle") (i + 1 < items.length ? seek(i + 1) : stop()); },
    prev() { if (status !== "idle") seek(c > 0 ? i : i - 1); },
    get status() { return status; },
    on(fn) { stateFns.add(fn); return () => stateFns.delete(fn); },
    onVoices(fn) { voiceFns.add(fn); return () => voiceFns.delete(fn); }
  };
})();
