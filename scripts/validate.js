// Checks every data/<book>.cards.js against data/<book>.text.js:
//   • every ref ("6:10", "3:16-18") exists
//   • every quote.zh / quote.en is an exact excerpt of its verse
//   • every card has art, related ids exist, required fields are present, card numbers are 1..N per book
// Usage: node scripts/validate.js            (all books)      node scripts/validate.js ruth   (one book)
const fs = require("fs");
const path = require("path");
global.window = {};
const dataDir = path.join(__dirname, "..", "data");
require(path.join(dataDir, "common.js"));
const only = process.argv[2];
for (const f of fs.readdirSync(dataDir).sort()) {
  if (/\.cards\.js$/.test(f) || /\.text\.js$/.test(f) || /\.ccb\.js$/.test(f)) require(path.join(dataDir, f));
}
const { TYPES, KINDS } = window;
const CARDS = window.CARDS.filter((c) => !only || c.book === only);
const TEXT = window.BIBLE_TEXT;
const BOOKIDS = new Set(window.BOOKS.map((b) => b.id));
window.BOOKS.forEach((b) => {
  if (!TEXT[b.id]) { console.log(`  ✗ [${b.id}] no data/${b.id}.text.js`); process.exitCode = 1; }
  if (!b.fan || b.fan.length !== 3 || b.fan.some((id) => !window.CARDS.find((c) => c.id === id && c.book === b.id))) { console.log(`  ✗ [${b.id}] book.fan must list 3 of its own card ids`); process.exitCode = 1; }
  if (typeof b.order !== "number" || !b.section || !b.section.zh || !b.section.en) { console.log(`  ✗ [${b.id}] book needs order (canon position 1-66) and section {zh,en}`); process.exitCode = 1; }
  if (!b.outline || b.outline.length !== b.chapters) { console.log(`  ✗ [${b.id}] outline must have ${b.chapters} entries`); process.exitCode = 1; }
});
let errors = 0, warnings = 0;
const err = (id, msg) => { errors++; console.log(`  ✗ [${id}] ${msg}`); };
const warn = (id, msg) => { warnings++; console.log(`  ! [${id}] ${msg}`); };

// editorial footnotes inside 和合本 verses, e.g. （原文是大君）（或譯：皇后） — keep in sync with js/app.js
const stripNotes = (s) => s.replace(/（[^）]*(?:：|節同|下同|同義|或譯|原文|別名|看第|又名|又作|見上節|章.{0,6}節名|見.{1,4}章)[^）]*）/g, "");
const normEn = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ");
const normZh = (s) => stripNotes(s).replace(/\s+/g, "");

// 當代譯本 (data/<book>.ccb.js, Biblica Open Chinese Contemporary Bible, CC BY-SA 4.0) is an optional layer. When a file exists it must
// line up verse-for-verse with the 和合本 text, be plain text, and keep the licence notice at its top (CC BY-SA requires it).
let ccbBooks = 0, ccbVerses = 0;
window.BOOKS.filter((b) => !only || b.id === only).forEach((b) => {
  const file = path.join(dataDir, `${b.id}.ccb.js`);
  if (!fs.existsSync(file)) { warn(b.id, `no data/${b.id}.ccb.js — the 當代譯本 line will not show for this book (scripts/fetch_ccb.py ${b.id})`); return; }
  const head = fs.readFileSync(file, "utf8").split("\n").slice(0, 10).join("\n");
  for (const need of ["Biblica", "CC BY-SA", "open.bible", "Changes made"])
    if (!head.includes(need)) err(b.id, `${b.id}.ccb.js header lost its licence notice (missing "${need}")`);
  const cc = (window.BIBLE_CCB || {})[b.id] || {};
  for (const [ch, vs] of Object.entries(TEXT[b.id] || {})) {
    for (const v of Object.keys(vs)) {
      const s = cc[ch] && cc[ch][v];
      if (typeof s !== "string" || !s.trim()) err(b.id, `當代譯本 missing ${ch}:${v}`);
      else { ccbVerses++; if (/[<>&* \u0001]/.test(s)) err(b.id, `當代譯本 ${ch}:${v} has stray markup`); }
    }
    for (const v of Object.keys(cc[ch] || {})) if (!(v in vs)) err(b.id, `當代譯本 has extra verse ${ch}:${v}`);
  }
  for (const ch of Object.keys(cc)) if (!TEXT[b.id][ch]) err(b.id, `當代譯本 has extra chapter ${ch}`);
  ccbBooks++;
});

function verses(book, ref) {
  const m = /^(\d+):(\d+)(?:-(\d+))?$/.exec(ref);
  if (!m) return null;
  const [, ch, a, b] = m; const out = [];
  for (let v = +a; v <= +(b || a); v++) {
    const x = TEXT[book]?.[ch]?.[v]; if (!x) return null; out.push(x);
  }
  return out;
}

CARDS.forEach((c) => {
  const id = c.id;
  for (const f of ["zh", "en", "tag", "role", "moves", "traits", "lesson", "quote", "keyVerses", "intro", "tip", "related", "ch"])
    if (!c[f]) err(id, `missing field ${f}`);
  if (!TYPES[c.type]) err(id, `bad type ${c.type}`);
  if (!KINDS[c.kind]) err(id, `bad kind ${c.kind}`);
  if (!(c.names || c.passages)) err(id, "needs names or passages");
  if (!fs.existsSync(path.join(__dirname, "..", "assets", "art", c.book, `${id}.webp`))) err(id, "art missing");
  if (!BOOKIDS.has(c.book)) err(id, `unknown book ${c.book}`);
  if (window.CARDS.filter((x) => x.id === id).length > 1) err(id, "card id is not unique across books");
  const bk = window.BOOKS.find((b) => b.id === c.book);
  if (bk && (c.ch || []).some((x) => x < 1 || x > bk.chapters)) err(id, `ch out of range 1..${bk.chapters}`);
  (c.related || []).forEach((r) => {
    const o = window.CARDS.find((x) => x.id === r);
    if (!o) err(id, `related id not found: ${r}`); else if (o.book !== c.book) err(id, `related card ${r} belongs to another book`);
  });
  // the card face has limited room — long text gets clipped
  (c.moves || []).forEach((m) => {
    if (m.dzh.length > 62) warn(id, `move "${m.zh}" zh desc is ${m.dzh.length} chars (>62) — may not fit on the card`);
    if (m.den.length > 165) warn(id, `move "${m.zh}" en desc is ${m.den.length} chars (>165) — may not fit on the card`);
  });
  if (c.quote.zh.length > 36) warn(id, `quote.zh is ${c.quote.zh.length} chars (>36)`);
  if (c.quote.en.length > 125) warn(id, `quote.en is ${c.quote.en.length} chars (>125)`);
  (c.moves || []).forEach((m) => {
    if (m.ref.includes(":") && /^[a-z]/.test(m.ref)) return; // external ref e.g. ezra:1:1-4
    if (!verses(c.book, m.ref)) err(id, `move ref not found: ${m.ref}`);
  });
  (c.keyVerses || []).forEach((r) => { if (!verses(c.book, r)) err(id, `keyVerse not found: ${r}`); });
  (c.passages || []).forEach((r) => { if (!verses(c.book, r)) err(id, `passage not found: ${r}`); });
  // quote excerpts must be exact substrings
  const vs = verses(c.book, c.quote.ref);
  if (!vs) err(id, `quote ref not found: ${c.quote.ref}`);
  else {
    const zh = normZh(vs.map((v) => v.zh).join("")), en = normEn(vs.map((v) => v.en).join(" "));
    if (!zh.includes(normZh(c.quote.zh))) err(id, `quote.zh not an exact excerpt of ${c.quote.ref}: 「${c.quote.zh}」`);
    if (!en.includes(normEn(c.quote.en))) err(id, `quote.en not an exact excerpt of ${c.quote.ref}: "${c.quote.en}"`);
  }
  // verse counts shown on the card
  let n = 0;
  if (c.names) {
    const seen = new Set();
    for (const [chNo, chap] of Object.entries(TEXT[c.book]))
      for (const v of Object.values(chap)) if (c.names.some((nm) => v.zh.includes(nm))) { n++; seen.add(+chNo); }
    const missing = [...seen].filter((x) => !c.ch.includes(x));
    if (missing.length) warn(id, `name appears in chapters ${missing.join(",")} but card.ch is ${c.ch.join(",")}`);
  } else {
    (c.passages).forEach((r) => (n += verses(c.book, r).length));
  }
  console.log(`  ${String(c.no).padStart(3, "0")} ${c.zh.padEnd(8, "　")} mentions: ${String(n).padStart(3)}  rarity ${c.rarity}  chapters ${c.ch.join(",")}`);
  if (n === 0) err(id, "0 verse matches — check names/passages");
});
for (const b of BOOKIDS) {
  const nos = CARDS.filter((c) => c.book === b).map((c) => c.no).sort((x, y) => x - y);
  nos.forEach((n, i) => { if (n !== i + 1) err(b, `card numbers not contiguous at ${n}`); });
}
console.log(`\n${CARDS.length} cards · 當代譯本 ${ccbVerses} verses in ${ccbBooks} books · ${errors} errors · ${warnings} warnings`);
process.exit(errors ? 1 : 0);
