// ─────────────────────────────────────────────────────────────────────────────
// 聖經人物卡 · Bible Character Cards — shared data. Every book adds itself in data/<book>.cards.js:
//   window.BOOKS.push({ id, zh, en, abbr, chapters, fan: [3 card ids], summary, outline, notes });
//   window.CARDS.push({ id, book, no, kind, type, rarity, ... });      (card ids are unique across all books)
// Rarity: 1–4 = ◆, 5 = ★, 6 = ♛.
// ─────────────────────────────────────────────────────────────────────────────

window.BOOKS = [];
window.CARDS = [];

// 屬性 (card type) — drives the card colour and the symbol in the corner
window.TYPES = {
  wisdom: { zh: "智慧", en: "Wisdom",   icon: "📜" },
  faith:  { zh: "信心", en: "Faith",    icon: "🔥" },
  power:  { zh: "權勢", en: "Power",    icon: "👑" },
  heaven: { zh: "天上", en: "Heavenly", icon: "✨" },
  vision: { zh: "異象", en: "Vision",   icon: "👁️" },
  beast:  { zh: "猛獸", en: "Beast",    icon: "🦁" },
  scheme: { zh: "詭計", en: "Scheming", icon: "🎭" },
  love:    { zh: "慈愛", en: "Kindness",  icon: "💗" },
  harvest: { zh: "供應", en: "Provision", icon: "🌾" }
};

// 類別 (kind) — the filter chips
window.KINDS = {
  person:   { zh: "人物", en: "People" },
  heavenly: { zh: "天上", en: "Heavenly" },
  other:    { zh: "場景・異象・生物", en: "Scenes, Visions & Creatures" }
};
