/* 聖經人物卡 · Bible Character Cards — vanilla JS, no build step. */
"use strict";
(function () {
  const { BOOKS, TYPES, KINDS } = window;
  const ALL_CARDS = window.CARDS;
  BOOKS.sort((a, b) => (a.order || 999) - (b.order || 999));            // canon order (Ruth 8, Jeremiah 24, Daniel 27 …)
  // The book being shown. setBook() swaps these; everything below reads them as "the current book".
  // Verse text is loaded on demand (data/<book>.text.js) — see loadText().
  let BOOK = BOOKS[0], TEXT = {}, CARDS = [], TOTAL_VERSES = 0;
  const COMPACT = () => BOOK.chapters > 16;                              // long books get a compact chapter map / chapter jumper

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const byId = Object.fromEntries(ALL_CARDS.map((c) => [c.id, c]));

  /* ── small stores ──────────────────────────────────────────────────────── */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("bcc." + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("bcc." + k, JSON.stringify(v)); } catch { /* private mode */ } }
  };
  const state = {
    lang: store.get("lang", "both"),
    view: "cards", readCh: 1,
    kind: "all", chapter: 0, q: "", sort: "book",
    collected: new Set(store.get("collected", [])),
    fs: Math.min(3, Math.max(0, +store.get("fs", 1) || 0)),          // text-size step, see FS below
    ttsLang: store.get("ttsLang", "auto"),                            // auto | zh | en | both
    rate: +store.get("rate", 1) || 1,
    voiceZh: store.get("voiceZh", ""), voiceEn: store.get("voiceEn", ""),
    book: store.get("book", BOOKS[0].id), renderedBook: null,
    visible: [],
    openId: null
  };
  function attachText() {
    TEXT = (window.BIBLE_TEXT || {})[BOOK.id] || {};
    TOTAL_VERSES = Object.values(TEXT).reduce((n, ch) => n + Object.keys(ch).length, 0);
  }
  const textLoads = {};
  function loadText(id) {                                  // inject data/<id>.text.js once
    if ((window.BIBLE_TEXT || {})[id]) return Promise.resolve();
    return (textLoads[id] = textLoads[id] || new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `data/${id}.text.js`; s.onload = resolve;
      s.onerror = () => { delete textLoads[id]; reject(new Error("cannot load " + id)); };
      document.head.appendChild(s);
    }));
  }
  function setBook(id) {
    BOOK = BOOKS.find((b) => b.id === id) || BOOKS[0];
    attachText();
    CARDS = ALL_CARDS.filter((c) => c.book === BOOK.id);
    state.book = BOOK.id; store.set("book", BOOK.id);
    state.visible = CARDS.map((c) => c.id);
    state.kind = "all"; state.chapter = 0; state.q = ""; state.readCh = 1;      // filters belong to one book
  }
  setBook(state.book);

  /* ── helpers ───────────────────────────────────────────────────────────── */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bi = (o) => `<span class="zh">${esc(o.zh)}</span><span class="en">${esc(o.en)}</span>`;
  // `?style=<variant>` previews an alternative art style (assets/art-variants/<variant>/…); cards without
  // a variant image fall back to the normal art (see the capture-phase error listener below).
  const STYLE = new URLSearchParams(location.search).get("style") || "";
  const art = (c) => (STYLE ? `assets/art-variants/${encodeURIComponent(STYLE)}/${c.book}/${c.id}.webp` : `assets/art/${c.book}/${c.id}.webp`);
  if (STYLE) document.addEventListener("error", (e) => {
    const im = e.target;
    if (im && im.tagName === "IMG" && /\/art-variants\//.test(im.src) && !im.dataset.fell) {
      im.dataset.fell = "1"; im.src = im.src.replace(/assets\/art-variants\/[^/]+\//, "assets/art/");
    }
  }, true);
  // editorial footnotes inside 和合本 verses, e.g. （原文是大君）— shown muted. Keep in sync with scripts/validate.js
  const NOTE_RE = /（[^）]*(?:：|節同|下同|同義|或譯|原文|別名|看第|又名|又作|見上節|章.{0,6}節名|見.{1,4}章)[^）]*）/g;
  const zhHTML = (s) => esc(s).replace(NOTE_RE, (m) => `<span class="note">${m}</span>`);

  const TRAIT = {
    strength: { zh: "強項", en: "Strength" },
    weakness: { zh: "弱點", en: "Weakness" },
    identity: { zh: "身份", en: "Identity" }
  };
  const RARITY = {
    1: { zh: "常見", en: "Common" }, 2: { zh: "少見", en: "Uncommon" }, 3: { zh: "稀有", en: "Rare" },
    4: { zh: "珍稀", en: "Super Rare" }, 5: { zh: "傳奇", en: "Legendary" }, 6: { zh: "至尊", en: "Crown" }
  };
  const rarityGlyph = (r) => (r <= 4 ? "◆".repeat(r) : r === 5 ? "★" : "♛");
  const EXT = { ezra: { zh: "拉", en: "Ezra" } };

  function refLabel(ref) {
    const dash = (s) => s.replace("-", "–");
    const m = /^([a-z]+):(.+)$/.exec(ref);
    if (m) return { zh: `${EXT[m[1]].zh} ${dash(m[2])}`, en: `${EXT[m[1]].en} ${dash(m[2])}` };
    return { zh: `${BOOK.abbr.zh} ${dash(ref)}`, en: `${BOOK.abbr.en} ${dash(ref)}` };
  }
  function getVerses(ref) {
    const m = /^(\d+):(\d+)(?:-(\d+))?$/.exec(ref);
    if (!m) return [];
    const [, ch, a, b] = m, out = [];
    for (let v = +a; v <= +(b || a); v++) { const x = TEXT[ch] && TEXT[ch][v]; if (x) out.push({ n: v, ...x }); }
    return out;
  }
  function chRange(arr) {
    const a = [...arr].sort((x, y) => x - y), out = [];
    let s = a[0], p = a[0];
    for (let i = 1; i <= a.length; i++) {
      if (a[i] === p + 1) { p = a[i]; continue; }
      out.push(s === p ? `${s}` : `${s}–${p}`); s = p = a[i];
    }
    return out.join(", ");
  }
  const mentionCache = {};
  function mentions(c) {
    if (c.id in mentionCache) return mentionCache[c.id];
    let n = 0;
    if (c.names) { for (const ch of Object.values(TEXT)) for (const v of Object.values(ch)) if (c.names.some((x) => v.zh.includes(x))) n++; }
    else for (const r of c.passages) n += getVerses(r).length;
    return (mentionCache[c.id] = n);
  }
  const cardsInChapter = (n) => CARDS.filter((c) => c.ch.includes(n));

  /* ── the card ──────────────────────────────────────────────────────────── */
  function cardHTML(c, { eager = false } = {}) {
    const t = TYPES[c.type], tr = c.traits.slice(0, 2);
    return `
<div class="card-wrap" data-id="${c.id}" data-type="${c.type}" data-rarity="${c.rarity}" data-collected="${state.collected.has(c.id)}" role="button" tabindex="0" aria-label="${esc(c.zh)} ${esc(c.en)}">
  <div class="card">
    <div class="card-frame"><div class="card-body">
      <header class="c-head">
        <div>
          <div class="c-role">${bi(c.role)}</div>
          <div class="c-name"><span class="zh">${esc(c.zh)}</span><span class="en">${esc(c.en)}</span></div>
        </div>
        <div class="c-hp">
          <div class="c-hp-box"><small><span class="zh">出場</span><span class="en">VERSES</span></small><b>${mentions(c)}<i class="zh">節</i></b></div>
          <div class="c-type" title="${esc(t.zh)} ${esc(t.en)}">${t.icon}</div>
        </div>
      </header>
      <figure class="c-art" style="margin-inline:0;margin-bottom:0">
        <img src="${art(c)}" alt="${esc(c.zh)} ${esc(c.en)}" width="1100" height="733" ${eager ? "" : 'loading="lazy"'} decoding="async" draggable="false">
        <span class="c-ch"><span class="zh">${esc(BOOK.abbr.zh)} ${chRange(c.ch)}</span><span class="en">${esc(BOOK.abbr.en)} ${chRange(c.ch)}</span></span>
        <figcaption class="c-ribbon">${bi(c.tag)}</figcaption>
      </figure>
      <div class="c-moves">
        ${c.moves.map((m) => `
        <div class="move">
          <div class="move-name"><span class="zh">${esc(m.zh)}</span><span class="en">${esc(m.en)}</span></div>
          <span class="ref">${bi(refLabel(m.ref))}</span>
          <p class="move-desc"><span class="zh">${esc(m.dzh)}</span><span class="en">${esc(m.den)}</span></p>
        </div>`).join("")}
      </div>
      <div class="c-traits">
        ${tr.map((x) => `<div class="trait"><b class="lbl">${bi(TRAIT[x.k])}</b>${bi(x)}</div>`).join("")}
      </div>
      <blockquote class="c-quote">
        <cite>${bi(refLabel(c.quote.ref))}</cite>
        <span class="zh">「${esc(c.quote.zh)}」</span><span class="en">“${esc(c.quote.en)}”</span>
      </blockquote>
      <footer class="c-foot">
        <span class="rar" title="${esc(RARITY[c.rarity].zh)} ${esc(RARITY[c.rarity].en)}">${rarityGlyph(c.rarity)}</span>
        <span class="ai">AI Art</span>
        <span class="no">${String(c.no).padStart(3, "0")} / ${String(CARDS.length).padStart(3, "0")}</span>
      </footer>
      <span class="stamp" aria-hidden="true">✓</span>
    </div></div>
    <div class="card-shine"></div><div class="card-glare"></div>
  </div>
</div>`;
  }

  /* ── cards view ────────────────────────────────────────────────────────── */
  function cardsViewHTML() {
    const fan = BOOK.fan.map((id) => cardHTML(byId[id], { eager: true })).join("");
    const setNo = BOOK.order;                    // position in the canon (Ruth = 8, Jeremiah = 24 …)
    return `
<section class="hero">
  <div>
    <p class="eyebrow"><span class="zh">聖經第 ${setNo} 卷 · 人物卡</span><span class="en">Bible book ${setNo} · Character Cards</span></p>
    <h1><span class="zh">${esc(BOOK.zh)}</span><span class="en">The Book of ${esc(BOOK.en)}</span></h1>
    <p class="lead stack"><span class="zh">${esc(BOOK.summary.zh)}</span><span class="en">${esc(BOOK.summary.en)}</span></p>
    <div class="hero-meta">
      <span class="pill">${BOOK.chapters} <span class="zh">章</span><span class="en">chapters</span></span>
      <span class="pill">${TOTAL_VERSES} <span class="zh">節</span><span class="en">verses</span></span>
      <span class="pill">${CARDS.length} <span class="zh">張人物卡</span><span class="en">cards</span></span>
    </div>
    <div class="hero-actions">
      <button class="btn primary" type="button" data-act="random">🎴 <span class="zh">隨機抽一張</span><span class="en">Draw a random card</span></button>
      <a class="btn" href="#read/${BOOK.id}/1">📖 <span class="zh">開始讀經</span><span class="en">Start reading</span></a>
    </div>
  </div>
  <div class="fan">${fan}</div>
</section>

<div class="section-title" id="chmap-title">
  <h2 class="zh">章節地圖</h2><h2 class="en" style="font-family:var(--en-serif)">Chapter map</h2>
  <span class="hint"><span class="zh">點選章節，看該章出現的人物</span><span class="en">Tap a chapter to see who appears in it</span></span>
</div>
${COMPACT() ? `
<div class="chmap chmap--compact" id="chmap">
  ${BOOK.outline.map((o, i) => {
    const n = cardsInChapter(i + 1).length;
    return `<button class="chtile${n ? "" : " none"}" type="button" data-ch="${i + 1}" aria-pressed="false" title="${esc(o.zh)} · ${esc(o.en)}">
      <b>${i + 1}</b>${n ? `<i>${n}</i>` : ""}</button>`;
  }).join("")}
</div>
<p class="chmap-cap" id="chmap-cap"></p>` : `
<div class="chmap" id="chmap">
  ${BOOK.outline.map((o, i) => {
    const cs = cardsInChapter(i + 1), shown = cs.slice(0, 5);
    return `<button class="chtile" type="button" data-ch="${i + 1}" aria-pressed="false">
      <span class="no"><span class="zh">第 ${i + 1} 章</span><span class="en">Chapter ${i + 1}</span></span>
      <span class="ttl"><span class="zh">${esc(o.zh)}</span><span class="en">${esc(o.en)}</span></span>
      <span class="avatars">${shown.map((c) => `<img src="${art(c)}" alt="" loading="lazy" title="${esc(c.zh)}">`).join("")}${cs.length > 5 ? `<span class="more">+${cs.length - 5}</span>` : ""}</span>
    </button>`;
  }).join("")}
</div>`}

<div class="section-title" id="cards-title"><h2 class="zh">人物卡</h2><h2 class="en" style="font-family:var(--en-serif)">The cards</h2></div>
<div class="toolbar">
  <label class="search"><input id="q" type="search" placeholder="搜尋人物… Search cards…" autocomplete="off" aria-label="搜尋 Search"></label>
  <div class="chips" id="kinds" role="group" aria-label="類別">
    <button class="chip" type="button" data-kind="all" aria-pressed="true"><span class="zh">全部</span><span class="en">All</span></button>
    ${Object.entries(KINDS).filter(([k]) => CARDS.some((c) => c.kind === k)).map(([k, v]) => `<button class="chip" type="button" data-kind="${k}" aria-pressed="false">${bi(v)}</button>`).join("")}
  </div>
  <select id="sort" aria-label="排序 Sort">
    <option value="book">按書中次序 · Book order</option>
    <option value="rarity">按稀有度 · Rarity</option>
    <option value="verses">按出場節數 · Verses</option>
  </select>
  <span class="count" id="count"></span>
</div>
<div class="grid" id="grid"></div>`;
  }

  function filteredCards() {
    const q = state.q.trim().toLowerCase();
    let list = CARDS.filter((c) => {
      if (state.kind !== "all" && c.kind !== state.kind) return false;
      if (state.chapter && !c.ch.includes(state.chapter)) return false;
      if (q) {
        const hay = [c.zh, c.en, c.alt && c.alt.zh, c.alt && c.alt.en, c.tag.zh, c.tag.en, c.role.zh, c.role.en].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (state.sort === "rarity") list = [...list].sort((a, b) => b.rarity - a.rarity || a.no - b.no);
    if (state.sort === "verses") list = [...list].sort((a, b) => mentions(b) - mentions(a) || a.no - b.no);
    return list;
  }
  function updateGrid() {
    const list = filteredCards();
    state.visible = list.map((c) => c.id);
    const grid = $("#grid");
    if (!grid) return;
    grid.innerHTML = list.length
      ? list.map((c, i) => cardHTML(c).replace('class="card-wrap"', `class="card-wrap" style="animation-delay:${Math.min(i, 12) * 40}ms"`)).join("")
      : `<p class="empty"><span class="zh">找不到符合的卡片。</span><span class="en">No cards match.</span></p>`;
    $("#count").innerHTML = `<span class="zh">顯示 ${list.length} / ${CARDS.length} 張</span><span class="en">${list.length} / ${CARDS.length} cards</span>`;
    $$("#chmap .chtile").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.ch === state.chapter)));
    const cap = $("#chmap-cap");                       // compact chapter map: say which chapter is selected
    if (cap) {
      const o = BOOK.outline[state.chapter - 1];
      cap.innerHTML = o
        ? `<b><span class="zh">第 ${state.chapter} 章</span><span class="en">Chapter ${state.chapter}</span></b> <span class="zh">${esc(o.zh)}</span><span class="en">${esc(o.en)}</span> <a href="#read/${BOOK.id}/${state.chapter}"><span class="zh">讀這章 →</span><span class="en">Read it →</span></a>`
        : `<span class="zh">點選章節數字，看該章出現的人物（數字旁是卡數）</span><span class="en">Tap a chapter number to see who appears in it (the small number is the card count)</span>`;
    }
    $$("#kinds .chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.kind === state.kind)));
    // clear-chapter chip
    const old = $("#chclear"); if (old) old.remove();
    if (state.chapter) {
      const b = document.createElement("button");
      b.id = "chclear"; b.type = "button"; b.className = "chip filter-ch";
      b.innerHTML = `<span class="zh">第 ${state.chapter} 章</span><span class="en">Chapter ${state.chapter}</span> ✕`;
      $("#kinds").appendChild(b);
    }
  }

  /* ── reader view ───────────────────────────────────────────────────────── */
  function linkNames(chNo, zh, en) {
    const terms = []; // [term, id, lang]
    cardsInChapter(chNo).forEach((c) => {
      (c.names || []).forEach((n) => terms.push([n, c.id, "zh"]));
      (c.enNames || []).forEach((n) => terms.push([n, c.id, "en"]));
    });
    const run = (html, lang) => {
      const ts = terms.filter((t) => t[2] === lang).sort((a, b) => b[0].length - a[0].length);
      if (!ts.length) return html;
      const map = Object.fromEntries(ts.map((t) => [t[0].toLowerCase(), t[1]]));
      const re = new RegExp("(" + ts.map((t) => t[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
      return html.replace(re, (m) => `<a class="name" data-card="${map[m.toLowerCase()]}" tabindex="0">${m}</a>`);
    };
    return [run(zhHTML(zh), "zh"), run(esc(en), "en")];
  }
  function readerHTML() {
    const n = state.readCh, ch = TEXT[n] || {}, o = BOOK.outline[n - 1];
    const cs = cardsInChapter(n);
    const verses = Object.entries(ch).map(([v, t]) => {
      const [z, e] = linkNames(n, t.zh, t.en);
      return `<div class="v" id="v${v}"><div class="vcol"><span class="vn">${v}</span><button class="vplay" type="button" data-play="verse" data-v="${v}" aria-label="從第 ${v} 節開始朗讀 Read aloud from verse ${v}" title="從這節開始朗讀 · Read from here">▶</button></div><p class="vz zh">${z}</p><p class="ve en">${e}</p></div>`;
    }).join("");
    return `
<section class="reader">
  ${COMPACT() ? `
  <div class="chjump" role="navigation" aria-label="章節 Chapters">
    ${n > 1 ? `<a class="btn" href="#read/${BOOK.id}/${n - 1}" aria-label="上一章 Previous chapter">←</a>` : `<span class="btn ghost">←</span>`}
    <select id="ch-select" aria-label="跳到章節 Jump to chapter">${BOOK.outline.map((x, i) => `<option value="${i + 1}" ${i + 1 === n ? "selected" : ""}>${i + 1}. ${esc(x.zh)} · ${esc(x.en)}</option>`).join("")}</select>
    ${n < BOOK.chapters ? `<a class="btn" href="#read/${BOOK.id}/${n + 1}" aria-label="下一章 Next chapter">→</a>` : `<span class="btn ghost">→</span>`}
  </div>` : `
  <div class="chpills" role="navigation" aria-label="章節">
    ${Array.from({ length: BOOK.chapters }, (_, i) => `<a class="chpill" href="#read/${BOOK.id}/${i + 1}" ${i + 1 === n ? 'aria-current="true"' : ""}>${i + 1}</a>`).join("")}
  </div>`}
  <p class="eyebrow"><span class="zh">${esc(BOOK.zh)} · 第 ${n} 章</span><span class="en">${esc(BOOK.en)} · Chapter ${n}</span></p>
  <h1><span class="zh">${esc(o.zh)}</span><span class="en">${esc(o.en)}</span></h1>
  <div class="in-ch">
    <span class="lab"><span class="zh">本章人物</span><span class="en">In this chapter</span></span>
    ${cs.length ? cs.map((c) => `<button class="rel" type="button" data-open="${c.id}"><img src="${art(c)}" alt=""><span><span class="zh">${esc(c.zh)}</span><span class="en">${esc(c.en)}</span></span></button>`).join("") : "—"}
  </div>
  <div class="reader-tools">
    <button class="btn primary" type="button" data-play="chapter">🔊 <span class="zh">朗讀本章</span><span class="en">Listen to this chapter</span></button>
    <button class="btn" type="button" data-act="settings">Aa <span class="zh">文字大小與朗讀設定</span><span class="en">Text size &amp; voice</span></button>
  </div>
  <div class="verses">${verses}</div>
  <div class="chnav">
    ${n > 1 ? `<a class="btn" href="#read/${BOOK.id}/${n - 1}">← <span class="zh">第 ${n - 1} 章</span><span class="en">Chapter ${n - 1}</span></a>` : "<span></span>"}
    ${n < BOOK.chapters ? `<a class="btn" href="#read/${BOOK.id}/${n + 1}"><span class="zh">第 ${n + 1} 章</span><span class="en">Chapter ${n + 1}</span> →</a>` : "<span></span>"}
  </div>
</section>`;
  }

  /* ── modal ─────────────────────────────────────────────────────────────── */
  function verseBlock(ref) {
    const vs = getVerses(ref);
    if (!vs.length) return "";
    const ch = ref.split(":")[0];
    return `<div class="vblock" data-ref="${ref}">
      <div class="vref"><span class="ref">${bi(refLabel(ref))}</span><a href="#read/${BOOK.id}/${ch}"><span class="zh">在第 ${ch} 章閱讀 →</span><span class="en">Read in chapter ${ch} →</span></a></div>
      ${vs.map((v) => `<div class="vpair"><span class="vn">${v.n}</span><p class="zh">${zhHTML(v.zh)}</p><p class="en">${esc(v.en)}</p></div>`).join("")}
    </div>`;
  }
  const spBtn = (sec) => `<button class="sp" type="button" data-play="sec" data-sec="${sec}" aria-label="朗讀這部分 Read this part aloud" title="朗讀這部分 · Read this part aloud">🔊</button>`;
  function detailHTML(c) {
    const t = TYPES[c.type], k = KINDS[c.kind], r = RARITY[c.rarity];
    const firstCh = c.ch[0];
    const facts = [];
    if (c.alt) facts.push(["別名", "Also known as", `<span class="zh">${esc(c.alt.zh)}</span><span class="en">${esc(c.alt.en)}</span>${c.alt.ref ? ` <span class="ref">${bi(refLabel(c.alt.ref))}</span>` : ""}`]);
    if (c.meaning) facts.push(["名字含義", "Meaning", bi(c.meaning)]);
    facts.push(["出場章節", "Appears in", `<span class="zh">${esc(BOOK.abbr.zh)} ${chRange(c.ch)} 章</span><span class="en">${esc(BOOK.en)} ${chRange(c.ch)}</span>`]);
    facts.push(["經文出現", "Verses", `<span class="zh">${mentions(c)} 節${c.names ? "提及其名" : "（相關經文）"}</span><span class="en">${mentions(c)} verses${c.names ? " mention the name" : " (related passages)"}</span>`]);
    return `
<div class="meta">
  <span class="badge">${t.icon} ${bi(t)}</span>
  <span class="badge">${bi(k)}</span>
  <span class="badge r" title="${esc(r.zh)} ${esc(r.en)}">${rarityGlyph(c.rarity)} <span style="letter-spacing:0;color:var(--ink)">${bi(r)}</span></span>
  <span class="badge">No. ${String(c.no).padStart(3, "0")}</span>
</div>
<p class="tagline stack"><span class="zh">${esc(c.tag.zh)}</span><span class="en">${esc(c.tag.en)}</span></p>
<dl class="facts">${facts.map(([z, e, v]) => `<div class="fact"><dt><span class="zh">${z}</span><span class="en">${e}</span></dt><dd class="stack">${v}</dd></div>`).join("")}</dl>

<section class="dsec prose" data-sec="intro"><h3><span class="zh">簡介</span><span class="en">Introduction</span>${spBtn("intro")}</h3>
  <p class="zh">${esc(c.intro.zh)}</p><p class="en">${esc(c.intro.en)}</p></section>

<section class="dsec"><h3><span class="zh">關鍵事蹟</span><span class="en">Key moments</span>${spBtn("moves")}</h3>
  ${c.moves.map((m) => `<div class="mv"><div class="mv-h"><b><span class="zh">${esc(m.zh)}</span><span class="en">${esc(m.en)}</span></b><span class="ref">${bi(refLabel(m.ref))}</span></div>
    <p class="zh">${esc(m.dzh)}</p><p class="en">${esc(m.den)}</p></div>`).join("")}
</section>

<section class="dsec"><h3><span class="zh">經文對照</span><span class="en">Key verses</span>${spBtn("verses")}</h3>
  ${c.keyVerses.map(verseBlock).join("")}
</section>

<section class="dsec"><h3><span class="zh">特質與教訓</span><span class="en">Traits &amp; lesson</span>${spBtn("lesson")}</h3>
  <div class="take">${c.traits.map((x) => `<div class="fact"><dt><span class="zh">${TRAIT[x.k].zh}</span><span class="en">${TRAIT[x.k].en}</span></dt><dd class="stack">${bi(x)}</dd></div>`).join("")}</div>
  <div class="lesson"><b><span class="zh">生命教訓 · Lesson</span><span class="en">Lesson</span></b><p class="zh">${esc(c.lesson.zh)}</p><p class="en">${esc(c.lesson.en)}</p></div>
</section>

<section class="dsec"><h3><span class="zh">讀經小貼士</span><span class="en">Reading tip</span>${spBtn("tip")}</h3>
  <div class="tip"><span class="ico">💡</span><div><p class="zh">${esc(c.tip.zh)}</p><p class="en">${esc(c.tip.en)}</p></div></div></section>

<section class="dsec"><h3><span class="zh">相關人物</span><span class="en">Related cards</span></h3>
  <div class="related">${c.related.map((id) => byId[id]).filter(Boolean).map((x) => `<button class="rel" type="button" data-open="${x.id}"><img src="${art(x)}" alt=""><span><span class="zh">${esc(x.zh)}</span><span class="en">${esc(x.en)}</span></span></button>`).join("")}</div></section>

<div class="actions">
  <button class="btn primary" type="button" data-play="sec" data-sec="all">🔊 <span class="zh">朗讀整張卡</span><span class="en">Read the whole card aloud</span></button>
  <button class="btn known" type="button" data-act="known" data-id="${c.id}" aria-pressed="${state.collected.has(c.id)}">✓ <span class="zh">${state.collected.has(c.id) ? "已認識這位" : "我已認識這位"}</span><span class="en">${state.collected.has(c.id) ? "Known" : "Mark as known"}</span></button>
  <a class="btn" href="#read/${BOOK.id}/${firstCh}" data-close-first>📖 <span class="zh">在第 ${firstCh} 章讀經文</span><span class="en">Read it in chapter ${firstCh}</span></a>
</div>`;
  }
  function openModal(id) {
    const c = byId[id]; if (!c) return;
    state.openId = id;
    const idx = state.visible.indexOf(id), many = state.visible.length > 1 && idx >= 0;
    $("#modal-root").innerHTML = `
<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(c.zh)} ${esc(c.en)}">
  <div class="modal-backdrop" data-close></div>
  <div class="modal-panel" id="modal-panel">
    <button class="modal-close" type="button" data-close aria-label="關閉 Close">✕</button>
    <div class="modal-grid">
      <div class="modal-card">
        ${cardHTML(c, { eager: true })}
        ${many ? `<div class="nav-row"><button class="modal-nav" type="button" data-nav="-1" aria-label="上一張 Previous">‹</button><span>${idx + 1} / ${state.visible.length}</span><button class="modal-nav" type="button" data-nav="1" aria-label="下一張 Next">›</button></div>` : ""}
      </div>
      <div class="modal-detail">
        <h2><span class="zh">${esc(c.zh)}</span><span class="en">${esc(c.en)}</span></h2>
        ${detailHTML(c)}
      </div>
    </div>
  </div>
</div>`;
    document.body.classList.add("modal-open");
    const p = $("#modal-panel"); p.scrollTop = 0; $(".modal-close", p).focus({ preventScroll: true });
  }
  function closeModal() {
    state.openId = null;
    $("#modal-root").innerHTML = "";
    document.body.classList.remove("modal-open");
  }
  function navModal(d) {
    const i = state.visible.indexOf(state.openId); if (i < 0) return;
    const n = (i + d + state.visible.length) % state.visible.length;
    location.hash = "#card/" + state.visible[n];
  }

  /* ── routing ───────────────────────────────────────────────────────────── */
  // Routes:  #cards  #cards/<book>  ·  #read  #read/<n>  #read/<book>/<n>  ·  #card/<card id>
  const hasBook = (id) => BOOKS.some((b) => b.id === id);
  let routeSeq = 0;
  async function route() {
    TTS.stop();                                  // anything being read belongs to the page we are leaving
    const seq = ++routeSeq;
    const [a, b, c] = location.hash.replace(/^#\/?/, "").split("/");
    // which book does this URL need?
    let want = BOOK.id, n = null;
    if (a === "card" && byId[b]) want = byId[b].book;
    else if (a === "read") { if (b && Number.isNaN(+b)) { if (hasBook(b)) want = b; n = c; } else n = b; }   // #read/<book>/<n> | #read/<n>
    else if (a === "cards" && hasBook(b)) want = b;

    if (!(window.BIBLE_TEXT || {})[want]) {      // first visit to this book: fetch its verse text
      if (state.openId) closeModal();
      $("#app").innerHTML = `<p class="loading"><span class="zh">載入中…</span><span class="en">Loading…</span></p>`;
      try { await loadText(want); }
      catch { $("#app").innerHTML = `<p class="loading">⚠ 無法載入 data/${esc(want)}.text.js · Could not load the verse text.</p>`; return; }
      if (seq !== routeSeq) return;              // the user already navigated somewhere else
    }
    if (want !== BOOK.id) setBook(want); else if (!Object.keys(TEXT).length) attachText();

    const stale = !$("#app").children.length || $("#app").querySelector(".loading") || state.renderedBook !== BOOK.id;
    if (a === "card" && byId[b]) {
      if (stale) renderView(state.view);
      openModal(b);
      return;
    }
    if (state.openId) closeModal();
    if (a === "read") {
      state.readCh = Math.min(BOOK.chapters, Math.max(1, parseInt(n, 10) || 1));
      renderView("read"); window.scrollTo({ top: 0 });
    } else if (state.view !== "cards" || stale || $("#app").querySelector(".reader")) {
      renderView("cards"); if (a === "cards" || !a) window.scrollTo({ top: 0 });
    }
  }
  function renderView(view) {
    state.view = view; state.renderedBook = BOOK.id;
    document.body.dataset.view = view;
    document.title = `${BOOK.zh} ${BOOK.en} · 聖經人物卡 Bible Character Cards`;
    $("#nav-cards").setAttribute("aria-current", view === "cards" ? "page" : "false");
    $("#nav-read").setAttribute("aria-current", view === "read" ? "page" : "false");
    $("#nav-cards").setAttribute("href", "#cards/" + BOOK.id);
    $("#nav-read").setAttribute("href", `#read/${BOOK.id}/${state.readCh}`);
    const sel = $("#book-select");
    const groups = [];                           // <optgroup> per section (歷史書 / 先知書 …), in canon order
    BOOKS.forEach((b) => {
      const key = b.section ? b.section.zh : "";
      let g = groups.find((x) => x.key === key);
      if (!g) groups.push((g = { key, sec: b.section, items: [] }));
      g.items.push(b);
    });
    sel.innerHTML = groups.map((g) => {
      const opts = g.items.map((b) => `<option value="${b.id}">${esc(b.zh)} · ${esc(b.en)}</option>`).join("");
      return g.sec ? `<optgroup label="${esc(g.sec.zh)} · ${esc(g.sec.en)}">${opts}</optgroup>` : opts;
    }).join("");
    sel.value = BOOK.id;
    $("#app").innerHTML = view === "read" ? readerHTML() : cardsViewHTML();
    if (view === "cards") { $("#sort").value = state.sort; $("#q").value = state.q; updateGrid(); }
    updateProgress();
  }
  function closeToView() { location.hash = state.view === "read" ? `#read/${BOOK.id}/${state.readCh}` : `#cards/${BOOK.id}`; }

  /* ── progress + language ───────────────────────────────────────────────── */
  function updateProgress() {
    const known = CARDS.filter((c) => state.collected.has(c.id)).length;
    $("#progress").innerHTML = `<span class="zh">${esc(BOOK.zh)}已認識</span><span class="en">${esc(BOOK.en)} known</span> <b>${known}</b> / ${CARDS.length}`;
  }
  function setLang(l) {
    state.lang = l; store.set("lang", l);
    document.body.dataset.lang = l;
    $$("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === l)));
    document.documentElement.lang = l === "en" ? "en" : "zh-Hant";
  }
  function toggleKnown(id) {
    state.collected.has(id) ? state.collected.delete(id) : state.collected.add(id);
    store.set("collected", [...state.collected]);
    $$(`.card-wrap[data-id="${id}"]`).forEach((w) => (w.dataset.collected = String(state.collected.has(id))));
    const b = $(`[data-act="known"][data-id="${id}"]`);
    if (b) {
      const on = state.collected.has(id);
      b.setAttribute("aria-pressed", String(on));
      b.innerHTML = `✓ <span class="zh">${on ? "已認識這位" : "我已認識這位"}</span><span class="en">${on ? "Known" : "Mark as known"}</span>`;
    }
    updateProgress();
  }

  /* ── text size + settings panel ────────────────────────────────────────── */
  const FS = [
    { zh: "小", en: "Small", v: 0.9 }, { zh: "標準", en: "Standard", v: 1 },
    { zh: "大", en: "Large", v: 1.2 }, { zh: "特大", en: "X-Large", v: 1.45 }
  ];
  const TTS_LANGS = [
    { k: "auto", zh: "跟隨顯示語言", en: "Match display" }, { k: "both", zh: "中英輪流", en: "Both, in turn" },
    { k: "zh", zh: "只讀中文", en: "Chinese only" }, { k: "en", zh: "只讀英文", en: "English only" }
  ];
  const SAMPLE = { zh: "但以理卻立志不以王的膳和王所飲的酒玷污自己。", en: "But Daniel purposed in his heart that he would not defile himself." };
  const RATES = [0.7, 0.85, 1, 1.15, 1.3, 1.5];
  const fmtRate = (r) => `${+r.toFixed(2)}×`;
  const applyFs = () => document.documentElement.style.setProperty("--fs", FS[state.fs].v);

  function voiceOptions(kind, selected) {
    const auto = TTS.pick(kind), list = TTS.voices(kind);
    const short = (n) => n.replace(/^Microsoft /, "").replace(/ - .*$/, "");
    return `<option value="">自動 · Auto${auto ? " — " + esc(short(auto.name)) + " (" + esc(auto.lang) + ")" : ""}</option>` +
      list.map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === selected ? "selected" : ""}>${esc(short(v.name))} · ${esc(v.lang)}</option>`).join("");
  }
  function settingsHTML() {
    const tts = TTS.supported, noZh = tts && !TTS.voices("zh").length;
    return `
<div class="set-head"><b><span class="zh">設定</span><span class="en">Settings</span></b><button type="button" class="set-x" data-act="settings-close" aria-label="關閉 Close">✕</button></div>
<section class="set-sec">
  <h4><span class="zh">文字大小</span><span class="en">Text size</span></h4>
  <div class="fs-row" role="group" aria-label="文字大小 Text size">
    ${FS.map((f, i) => `<button type="button" data-fs="${i}" aria-pressed="${i === state.fs}" style="--s:${[0.85, 1, 1.2, 1.45][i]}"><b>Aa</b><small><span class="zh">${f.zh}</span><span class="en">${f.en}</span></small></button>`).join("")}
  </div>
  <p class="set-sample"><span class="zh">${SAMPLE.zh}</span><span class="en">${SAMPLE.en}</span></p>
  <p class="set-note"><span class="zh">套用於經文、簡介、詳情視窗和讀經頁。卡面文字大小固定，想看大字請點開卡片。</span><span class="en">Applies to scripture, intros, card details and the reader. Card faces stay fixed — open a card to read it larger.</span></p>
</section>
<section class="set-sec set-tts">
  <h4>🔊 <span class="zh">朗讀</span><span class="en">Read aloud</span></h4>
  ${tts ? `
  <div class="set-row"><span class="lab"><span class="zh">朗讀語言</span><span class="en">Language</span></span>
    <div class="seg4" role="group">${TTS_LANGS.map((l) => `<button type="button" data-ttslang="${l.k}" aria-pressed="${l.k === state.ttsLang}"><span class="zh">${l.zh}</span><span class="en">${l.en}</span></button>`).join("")}</div></div>
  <div class="set-row"><label for="set-rate"><span><span class="zh">速度</span><span class="en">Speed</span></span><output id="rate-out">${fmtRate(state.rate)}</output></label>
    <input type="range" id="set-rate" min="0.6" max="1.6" step="0.05" value="${state.rate}"></div>
  <div class="set-row"><label for="set-voice-zh"><span class="zh">中文語音</span><span class="en">Chinese voice</span></label>
    <div class="pair"><select id="set-voice-zh">${voiceOptions("zh", state.voiceZh)}</select><button type="button" class="mini" data-preview="zh">▶ 試聽 <span class="en">Test</span></button></div></div>
  <div class="set-row"><label for="set-voice-en"><span class="zh">英文語音</span><span class="en">English voice</span></label>
    <div class="pair"><select id="set-voice-en">${voiceOptions("en", state.voiceEn)}</select><button type="button" class="mini" data-preview="en">▶ 試聽 <span class="en">Test</span></button></div></div>
  ${noZh ? `<p class="warn"><span class="zh">找不到中文語音。可在系統設定加入中文（香港／台灣）語音，再重新整理頁面。</span><span class="en">No Chinese voice found. Add a Chinese (Hong Kong / Taiwan) voice in your system settings, then reload.</span></p>` : ""}
  <p class="set-note"><span class="zh">語音由你的瀏覽器／系統提供。想聽廣東話，請揀 zh-HK 語音。</span><span class="en">Voices come from your browser / system. Pick a zh-HK voice for Cantonese.</span></p>`
  : `<p class="warn"><span class="zh">此瀏覽器不支援語音朗讀，請改用 Chrome、Edge 或 Safari。</span><span class="en">This browser has no speech synthesis. Try Chrome, Edge or Safari.</span></p>`}
</section>`;
  }
  function openSettings() {
    const el = $("#settings"); el.innerHTML = settingsHTML(); el.hidden = false;
    $("#settings-btn").setAttribute("aria-expanded", "true");
  }
  function closeSettings() {
    $("#settings").hidden = true; $("#settings-btn").setAttribute("aria-expanded", "false");
  }
  const settingsOpen = () => !$("#settings").hidden;
  function setFs(i) {
    state.fs = i; store.set("fs", i); applyFs();
    $$("[data-fs]").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.fs === i)));
  }
  function syncTts() {
    TTS.prefs.rate = state.rate; TTS.prefs.voiceZh = state.voiceZh; TTS.prefs.voiceEn = state.voiceEn;
  }

  /* ── read aloud: build the things to speak ─────────────────────────────── */
  const plain = (s) => s.replace(NOTE_RE, "");            // drop 和合本 footnotes
  function parts(zh, en) {
    const mode = state.ttsLang === "auto" ? state.lang : state.ttsLang;
    const z = { lang: "zh", text: zh }, e = { lang: "en", text: en };
    return mode === "zh" ? [z] : mode === "en" ? [e] : [z, e];
  }
  function refSpeech(ref) {
    const [, ch, a, b] = /^(\d+):(\d+)(?:-(\d+))?$/.exec(ref);
    return {
      zh: `${BOOK.zh} ${ch}章${a}${b ? "至" + b : ""}節`,
      en: `${BOOK.en} chapter ${ch}, verse${b ? "s " + a + " to " + b : " " + a}`
    };
  }
  function chapterItems(n, from) {
    const out = [], o = BOOK.outline[n - 1];
    if (from <= 1) out.push({
      el: $(".reader h1"), label: { zh: `${BOOK.zh} 第 ${n} 章`, en: `${BOOK.en} ${n}` },
      parts: parts(`${BOOK.zh}，第${n}章。${o.zh}。`, `${BOOK.en}, chapter ${n}. ${o.en}.`)
    });
    for (const [v, t] of Object.entries(TEXT[n] || {})) {
      if (+v < from) continue;
      out.push({
        el: document.getElementById("v" + v), label: { zh: `${BOOK.zh} ${n}:${v}`, en: `${BOOK.en} ${n}:${v}` },
        parts: parts(plain(t.zh), t.en)
      });
    }
    return out;
  }
  function cardItems(c) {
    const root = $(".modal-detail"); if (!root) return [];
    const L = (zh, en) => ({ zh, en }), items = [];
    items.push({ sec: "head", el: $("h2", root), label: L(c.zh, c.en), parts: parts(`${c.zh}。${c.tag.zh}。`, `${c.en}. ${c.tag.en}.`) });
    items.push({ sec: "intro", el: $('[data-sec="intro"]', root), label: L("簡介", "Introduction"), parts: parts(c.intro.zh, c.intro.en) });
    $$(".mv", root).forEach((el, i) => {
      const m = c.moves[i];
      items.push({ sec: "moves", el, label: L(m.zh, m.en), parts: parts(`${m.zh}。${m.dzh}`, `${m.en}. ${m.den}`) });
    });
    c.keyVerses.forEach((ref) => {
      const el = root.querySelector(`.vblock[data-ref="${ref}"]`), vs = getVerses(ref); if (!el || !vs.length) return;
      const rs = refSpeech(ref), rl = refLabel(ref);
      items.push({ sec: "verses", el, label: L(rl.zh, rl.en), parts: parts(`${rs.zh}。${vs.map((v) => plain(v.zh)).join("")}`, `${rs.en}. ${vs.map((v) => v.en).join(" ")}`) });
    });
    items.push({ sec: "lesson", el: $(".lesson", root), label: L("生命教訓", "Lesson"), parts: parts(`生命教訓。${c.lesson.zh}`, `Lesson. ${c.lesson.en}`) });
    items.push({ sec: "tip", el: $(".tip", root), label: L("讀經小貼士", "Reading tip"), parts: parts(`讀經小貼士。${c.tip.zh}`, `Reading tip. ${c.tip.en}`) });
    return items.filter((x) => x.el);
  }

  /* ── read aloud: player bar ────────────────────────────────────────────── */
  let speakingEl = null;
  TTS.on((st) => {
    if (speakingEl) speakingEl.classList.remove("speaking");
    const pl = $("#player");
    if (st.status === "idle") {
      pl.hidden = true; speakingEl = null; document.body.classList.remove("has-player"); return;
    }
    pl.hidden = false; document.body.classList.add("has-player");
    $(".pl-title", pl).innerHTML = st.item ? bi(st.item.label) : "";
    $(".pl-sub", pl).textContent = `${st.index + 1} / ${st.total}`;
    $('[data-tts="toggle"]', pl).textContent = st.status === "playing" ? "⏸" : "▶";
    $('[data-tts="speed"]', pl).textContent = fmtRate(state.rate);
    const el = st.item && st.item.el;
    if (el && el.isConnected) {
      el.classList.add("speaking");
      if (el !== speakingEl) el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    speakingEl = el && el.isConnected ? el : null;
  });
  function cycleRate() {
    const next = RATES.find((r) => r > state.rate + 0.01) || RATES[0];
    state.rate = next; store.set("rate", next); syncTts(); TTS.setRate(next);
    $('[data-tts="speed"]').textContent = fmtRate(next);
    const rg = $("#set-rate"); if (rg) { rg.value = next; $("#rate-out").textContent = fmtRate(next); }
  }
  function startReading(kind, el) {
    if (kind === "chapter") return TTS.play(chapterItems(state.readCh, 1));
    if (kind === "verse") return TTS.play(chapterItems(state.readCh, +el.dataset.v));
    if (kind === "sec") {
      const c = byId[state.openId]; if (!c) return;
      const all = cardItems(c), sec = el.dataset.sec;
      TTS.play(sec === "all" ? all : all.filter((x) => x.sec === sec));
    }
  }
  TTS.onVoices(() => { if (settingsOpen()) { const y = $("#settings").scrollTop; openSettings(); $("#settings").scrollTop = y; } });
  if (!TTS.supported) document.body.classList.add("no-tts");

  /* ── events ────────────────────────────────────────────────────────────── */
  document.addEventListener("click", (e) => {
    const t = e.target;
    // settings panel + read-aloud controls
    if (t.closest("#settings-btn")) return settingsOpen() ? closeSettings() : openSettings();
    if (t.closest('[data-act="settings"]')) return openSettings();
    if (t.closest('[data-act="settings-close"]')) return closeSettings();
    if (settingsOpen() && !t.closest("#settings")) closeSettings();       // click outside closes it, then carry on
    const fsb = t.closest("[data-fs]"); if (fsb) return setFs(+fsb.dataset.fs);
    const tl = t.closest("[data-ttslang]"); if (tl) {
      state.ttsLang = tl.dataset.ttslang; store.set("ttsLang", state.ttsLang);
      $$("[data-ttslang]").forEach((b) => b.setAttribute("aria-pressed", String(b === tl))); return;
    }
    const pv = t.closest("[data-preview]"); if (pv) { syncTts(); return TTS.preview(pv.dataset.preview, SAMPLE[pv.dataset.preview]); }
    const pb = t.closest("[data-play]"); if (pb) { syncTts(); return startReading(pb.dataset.play, pb); }
    const tc = t.closest("[data-tts]"); if (tc) {
      const a = tc.dataset.tts;
      if (a === "toggle") TTS.toggle(); else if (a === "next") TTS.next(); else if (a === "prev") TTS.prev();
      else if (a === "stop") TTS.stop(); else if (a === "speed") cycleRate();
      return;
    }

    const lb = t.closest("[data-lang-btn]"); if (lb) return setLang(lb.dataset.langBtn);
    if (t.closest("[data-close-first]")) { state.openId = null; return; }       // let the #read link navigate
    if (t.closest("[data-close]")) return closeToView();
    const nav = t.closest("[data-nav]"); if (nav) return navModal(+nav.dataset.nav);
    const kn = t.closest('[data-act="known"]'); if (kn) return toggleKnown(kn.dataset.id);
    if (t.closest('[data-act="random"]')) { location.hash = "#card/" + CARDS[Math.floor(Math.random() * CARDS.length)].id; return; }
    const op = t.closest("[data-open]"); if (op) { location.hash = "#card/" + op.dataset.open; return; }
    const nm = t.closest("a.name"); if (nm) { location.hash = "#card/" + nm.dataset.card; return; }
    const kind = t.closest("[data-kind]"); if (kind) { state.kind = kind.dataset.kind; return updateGrid(); }
    if (t.closest("#chclear")) { state.chapter = 0; return updateGrid(); }
    const tile = t.closest(".chtile");
    if (tile) {
      state.chapter = state.chapter === +tile.dataset.ch ? 0 : +tile.dataset.ch; updateGrid();
      if (state.chapter) $("#cards-title").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const cw = t.closest(".card-wrap"); if (cw && !state.openId) { location.hash = "#card/" + cw.dataset.id; }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "q") { state.q = e.target.value; updateGrid(); }
    if (e.target.id === "set-rate") {
      state.rate = +e.target.value; store.set("rate", state.rate); syncTts();
      $("#rate-out").textContent = fmtRate(state.rate);
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.id === "book-select") {
      location.hash = state.view === "read" ? `#read/${e.target.value}/1` : `#cards/${e.target.value}`; return;
    }
    if (e.target.id === "ch-select") { location.hash = `#read/${BOOK.id}/${e.target.value}`; return; }
    if (e.target.id === "sort") { state.sort = e.target.value; updateGrid(); }
    if (e.target.id === "set-rate") TTS.setRate(state.rate);                // apply once the slider is released
    if (e.target.id === "set-voice-zh") { state.voiceZh = e.target.value; store.set("voiceZh", state.voiceZh); syncTts(); }
    if (e.target.id === "set-voice-en") { state.voiceEn = e.target.value; store.set("voiceEn", state.voiceEn); syncTts(); }
  });
  document.addEventListener("keydown", (e) => {
    if (settingsOpen() && e.key === "Escape") { closeSettings(); $("#settings-btn").focus(); return; }
    if (state.openId) {
      if (e.key === "Escape") closeToView();
      else if (e.key === "ArrowLeft") navModal(-1);
      else if (e.key === "ArrowRight") navModal(1);
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card-wrap, a.name")) {
      e.preventDefault();
      location.hash = "#card/" + (e.target.dataset.id || e.target.dataset.card);
    }
  });
  window.addEventListener("hashchange", route);

  /* 3D tilt + holo — mouse / pen only */
  let raf = 0;
  document.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    const w = e.target.closest && e.target.closest(".card-wrap"); if (!w) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = w.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      w.classList.add("tilting");
      w.style.setProperty("--rx", ((0.5 - py) * 14).toFixed(2) + "deg");
      w.style.setProperty("--ry", ((px - 0.5) * 16).toFixed(2) + "deg");
      w.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      w.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      w.style.setProperty("--bx", (px * 100).toFixed(1) + "%");
      w.style.setProperty("--by", (py * 100).toFixed(1) + "%");
    });
  });
  document.addEventListener("pointerout", (e) => {
    const w = e.target.closest && e.target.closest(".card-wrap");
    if (!w || (e.relatedTarget && w.contains(e.relatedTarget))) return;
    cancelAnimationFrame(raf);
    w.classList.remove("tilting");
    ["--rx", "--ry"].forEach((p) => w.style.removeProperty(p));
  });

  /* ── go ────────────────────────────────────────────────────────────────── */
  applyFs();
  syncTts();
  setLang(state.lang);
  updateProgress();
  route();                                       // loads the verse text of the current book, then renders
})();
