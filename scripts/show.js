// Dev helper: print verses (zh + en) from data/<book>.text.js
//   node scripts/show.js 1:1-7 6:10            → Daniel (default)
//   node scripts/show.js ruth 1:1-22 4:13-17   → another book
global.window = {};
const args = process.argv.slice(2);
const zhOnly = args.includes("--zh");   // --zh: Chinese only, trimmed to 200 chars per verse
if (zhOnly) args.splice(args.indexOf("--zh"), 1);
const book = /^\d/.test(args[0] || "") ? "daniel" : args.shift();
require(`../data/${book}.text.js`);
const T = window.BIBLE_TEXT[book];
for (const arg of args) {
  const [ch, rng] = arg.split(":");
  const [a, b] = rng.split("-").map(Number);
  for (let v = a; v <= (b || a); v++) {
    const x = T[ch][v];
    console.log(zhOnly ? `${ch}:${v} ${x.zh.slice(0, 200)}` : `${ch}:${v} ZH ${x.zh}\n      EN ${x.en}`);
  }
  console.log();
}
