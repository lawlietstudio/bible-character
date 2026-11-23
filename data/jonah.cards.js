// 聖經人物卡 · 約拿書 (Jonah) — book info + cards.
// Verse text comes from data/jonah.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/jonah.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (2 Kgs 14:23-25; Gen 10:11; Exod 34:6; Ps 3:8, 31:6, 120:1; Jer 18:7-10; Joel 2:13-14; Nah 1:1, 3:1; Matt 12:39-41;
// Acts 9:36) were checked against the 和合本 text and appear in prose only. The book does not date itself, never says
// "Assyria", and scholars differ on whether it is history or a pointed parable; the cards say so rather than choose. The
// 4:11 "who cannot tell their right hand from their left" and the plant of 4:6 are flagged as debated.

window.BOOKS.push({
  id: "jonah",
  zh: "約拿書", en: "Jonah", abbr: { zh: "拿", en: "Jonah" },
  order: 32, section: { zh: "先知書", en: "Prophets" },
  chapters: 4,
  fan: ["great_fish", "jonah", "gods_question"],
  summary: {
    zh: "約拿書只有四章，卻是十二小先知書裡最像「故事」的一卷。耶和華差約拿往尼尼微大城去，他卻搭船逃往相反方向的他施（1:1-3）；大風、水手、掣籤、被拋進海裡、大魚吞了他（1 章）。他在魚腹中禱告，神吩咐魚把他吐在旱地上（2 章）。耶和華第二次差他，這次他去了，尼尼微人從王到牲畜都披麻悔改，神就不降所說的災（3 章）。約拿卻大大不悅，說出自己當初逃跑的原因：「我知道你是有恩典、有憐憫的神」；神用蓖麻、蟲子和東風教他，最後問了一句沒有記下回答的話：「我豈能不愛惜尼尼微呢？」（4 章）",
    en: "Jonah has only four chapters, and it is the most story-like of the Twelve. Yahweh sends Jonah to the great city of Nineveh, but he boards a ship for Tarshish, the opposite way (1:1–3); then come the storm, the sailors, the lot, being thrown into the sea, and the great fish (ch 1). From inside the fish he prays, and God tells the fish to put him on dry land (ch 2). Yahweh sends him a second time, and this time he goes; Nineveh, from the king to the livestock, puts on sackcloth, and God does not bring the disaster he had spoken (ch 3). Jonah is furious and says why he had fled — “I knew that you are a gracious God” — and God teaches him with a plant, a worm and an east wind, ending with a question whose answer is never recorded: “Shouldn’t I be concerned for Nineveh?” (ch 4)."
  },
  outline: [
    { zh: "逃往他施；風浪與水手；被拋進海中", en: "Flight to Tarshish; the storm and the sailors; thrown into the sea" },
    { zh: "魚腹中的禱告", en: "The prayer from the fish" },
    { zh: "第二次的呼召；尼尼微人悔改，神後悔", en: "The second call; Nineveh repents and God relents" },
    { zh: "約拿發怒；蓖麻、蟲子與東風；神的最後一問", en: "Jonah’s anger; the plant, the worm and the east wind; God’s last question" }
  ],
  notes: {
    zh: "小提示：約拿書沒有標明年代，也沒有提到亞述；列王紀下 14:25 說，約拿是以色列王耶羅波安時代的先知。學者對本書的文體看法不一：有人視為歷史敘事，有人視為帶諷刺的寓言式故事。本站依經文所寫呈現，不替你決定。留意全書的結尾：最後的話是神的問句，經文沒有記下約拿的回答。",
    en: "Good to know: the book gives no date and never mentions Assyria; 2 Kings 14:25 places a prophet Jonah in the days of Jeroboam of Israel. Scholars differ on the genre — history, or a pointed parable. The cards follow the text as written and do not choose for you. Note the ending: the last word is God’s question, and Jonah’s answer is never recorded."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "jonah", book: "jonah", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "約拿", en: "Jonah",
    meaning: { zh: "「鴿子」", en: "“Dove”" },
    tag: { zh: "逃跑的先知", en: "The Prophet Who Ran Away" },
    role: { zh: "亞米太的兒子・先知", en: "Prophet, son of Amittai" },
    ch: [1, 2, 3, 4],
    names: ["約拿"],
    enNames: ["Jonah"],
    moves: [
      { zh: "往反方向逃", en: "The Wrong Direction", ref: "1:3",
        dzh: "神叫他往尼尼微去，他卻往他施逃，下到約帕上了船。",
        den: "God sends him to Nineveh; he buys a fare to Tarshish instead, going down to Joppa and boarding a ship." },
      { zh: "第二次的呼召", en: "The Second Call", ref: "3:1-3",
        dzh: "耶和華的話二次臨到他，他這次起來，往尼尼微去了。",
        den: "Yahweh’s word comes to him a second time, and this time Jonah gets up and goes to Nineveh." }
    ],
    traits: [
      { k: "strength", zh: "清楚知道神是怎樣的神", en: "Knows exactly what God is like" },
      { k: "weakness", zh: "不願看那城得憐憫", en: "Resents mercy shown to Nineveh" }
    ],
    lesson: {
      zh: "神的恩典也臨到逃跑的人：約拿被救，又再次受差遣（1:17；3:1）；但他仍要學會，那份恩典也包括尼尼微（4:2、11）。",
      en: "God’s grace reaches the one who runs: Jonah is rescued and sent again (1:17; 3:1) — yet he still has to learn that the same grace includes Nineveh (4:2, 11)."
    },
    quote: { ref: "1:2",
      zh: "你起來往尼尼微大城去，向其中的居民呼喊",
      en: "Arise, go to Nineveh, that great city, and preach against it" },
    keyVerses: ["1:1-3", "2:10", "3:1-3", "4:1-4"],
    intro: {
      zh: "約拿是亞米太的兒子（1:1）。列王紀下 14:25 說，在以色列王耶羅波安的時代，迦特希弗人亞米太的兒子先知約拿曾說預言（王下 14:23-25）。約拿書卻不是他的預言集，而是一個關於他的故事：神差他往尼尼微大城去，他逃往他施（1:3）；風浪、大魚、尼尼微人的悔改，以及一棵蓖麻，一路追著他。全書結束在神的一句問話，沒有寫約拿怎樣回答（4:11）。尼尼微在歷史上是亞述的大城，但書中沒有提「亞述」兩個字。",
      en: "Jonah is the son of Amittai (1:1). 2 Kings 14:25 mentions a prophet Jonah son of Amittai of Gath-hepher who spoke in the days of Jeroboam of Israel (2 Kgs 14:23–25). But the book of Jonah is not a collection of his oracles; it is a story about him: God sends him to the great city of Nineveh and he runs to Tarshish (1:3), and a storm, a great fish, Nineveh’s repentance and a plant chase him down. It ends on a question from God, with no recorded answer (4:11). Nineveh was historically a great Assyrian city, but the book never uses the word “Assyria.”"
    },
    tip: {
      zh: "學者對本書的文體看法不一：有人視為歷史敘事，有人視為帶諷刺的寓言式故事。耶穌也提到約拿在魚腹中三日三夜，以及尼尼微人聽了約拿所傳的就悔改（太 12:39-41）。",
      en: "Scholars differ on the genre: some read it as history, others as a pointed parable. Jesus also speaks of Jonah’s three days and nights in the fish and of Nineveh repenting at Jonah’s preaching (Matt 12:39–41)."
    },
    related: ["flight_tarshish", "great_fish", "jonah_psalm", "nineveh_repents", "jonah_anger", "gods_question"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "flight_tarshish", book: "jonah", no: 2, kind: "other", type: "scheme", rarity: 2,
    zh: "逃往他施", en: "Flight to Tarshish",
    tag: { zh: "往反方向，一路向下", en: "The Wrong Direction, Always Down" },
    role: { zh: "逃跑的決定（1:1-3）", en: "The decision to flee (1:1–3)" },
    ch: [1],
    passages: ["1:1-3"],
    moves: [
      { zh: "起來，往尼尼微去", en: "Arise, Go to Nineveh", ref: "1:2",
        dzh: "耶和華吩咐他向尼尼微居民呼喊，因為他們的惡達到神面前。",
        den: "Yahweh tells him to cry out against Nineveh, because its wickedness has come up before him." },
      { zh: "逃往他施", en: "Off to Tarshish", ref: "1:3",
        dzh: "約拿起來，下到約帕，上了往他施的船，要躲避耶和華。",
        den: "Jonah gets up, goes down to Joppa and boards a ship for Tarshish to get away from Yahweh." }
    ],
    traits: [
      { k: "strength", zh: "說走就走，連船價都付了", en: "Acts at once — even pays the fare" },
      { k: "weakness", zh: "想躲開神的面", en: "Tries to escape God’s presence" }
    ],
    lesson: {
      zh: "逃跑也是一種回應：經文用「下」字記下約拿的方向——下到約帕（1:3）、下到底艙（1:5）、下到山根（2:6）。",
      en: "Running is also a response: the text tracks Jonah’s direction with “down” — down to Joppa (1:3), down into the ship (1:5), down to the roots of the mountains (2:6)."
    },
    quote: { ref: "1:3",
      zh: "約拿卻起來，逃往他施去躲避耶和華",
      en: "But Jonah rose up to flee to Tarshish from the presence of Yahweh" },
    keyVerses: ["1:1-2", "1:3"],
    intro: {
      zh: "「耶和華的話臨到亞米太的兒子約拿」（1:1），吩咐他往尼尼微大城去，向其中的居民呼喊，因為他們的惡達到神面前（1:2）。約拿的反應只有一個字：逃。他逃往他施，「去躲避耶和華」，經文在 1:3 把這句話說了兩次。他下到約帕，遇見一隻船，付了船價，上船同往。他施的位置不能確定，多數說法認為在地中海西面，與東邊的尼尼微正好相反。",
      en: "“Yahweh’s word came to Jonah the son of Amittai” (1:1) and told him to go to Nineveh, that great city, and cry out against it, because its wickedness had come up before God (1:2). Jonah’s response is one word: flee. He runs to Tarshish “from the presence of Yahweh” — a phrase verse 3 says twice. He goes down to Joppa, finds a ship, pays the fare and boards. Where Tarshish was is uncertain; most take it to be far to the west on the Mediterranean, the opposite way from Nineveh in the east."
    },
    tip: {
      zh: "約帕是地中海邊的港口，就是使徒行傳 9:36 的約帕。約拿逃跑的決定，在原文只花了一句話。",
      en: "Joppa is the Mediterranean port of Acts 9:36. Jonah’s whole decision to flee takes just one sentence in the text."
    },
    related: ["jonah", "storm_at_sea", "sailors", "nineveh"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "storm_at_sea", book: "jonah", no: 3, kind: "other", type: "power", rarity: 3,
    zh: "大風與沉睡的先知", en: "The Storm and the Sleeping Prophet",
    tag: { zh: "水手各求自己的神，約拿卻在睡覺", en: "Sailors Pray to Their Gods — Jonah Sleeps" },
    role: { zh: "海上的風浪（1:4-6、11-15）", en: "The storm at sea (1:4–6, 11–15)" },
    ch: [1],
    passages: ["1:4-6", "1:11-15"],
    moves: [
      { zh: "耶和華使海中起大風", en: "Yahweh Sends a Great Wind", ref: "1:4-5",
        dzh: "狂風大作，船幾乎破壞；水手各人哀求自己的神，把貨物拋進海中。",
        den: "A mighty storm threatens to break up the ship; the sailors each cry to their own god and throw the cargo overboard." },
      { zh: "拋進海中，海就平靜", en: "Thrown In — and the Sea Calms", ref: "1:12-15",
        dzh: "水手竭力盪槳仍不能攏岸，終於把約拿抬起拋進海中，狂浪就平息了。",
        den: "The men row hard but cannot reach land; at last they lift Jonah and throw him into the sea, and its raging stops." }
    ],
    traits: [
      { k: "strength", zh: "風與海都聽耶和華", en: "Wind and sea answer to Yahweh" },
      { k: "weakness", zh: "約拿睡在船底，沒有求告", en: "Jonah sleeps below deck, not calling on God" }
    ],
    lesson: {
      zh: "災難臨到時，外邦水手比先知更急著求告；神用風浪攔住約拿的去路，也帶出了船上人的敬畏（1:5、16）。",
      en: "When disaster hit, foreign sailors were quicker to call on God than the prophet; God used the storm to block Jonah’s way and to draw out the sailors’ reverence (1:5, 16)."
    },
    quote: { ref: "1:4",
      zh: "耶和華使海中起大風，海就狂風大作，甚至船幾乎破壞",
      en: "there was a mighty storm on the sea, so that the ship was likely to break up" },
    keyVerses: ["1:4-6", "1:11-12", "1:13-15"],
    intro: {
      zh: "耶和華使海中起大風，船幾乎破壞（1:4）。水手害怕，各人哀求自己的神，並把貨物拋進海中（1:5）。約拿卻已經下到底艙，躺臥沉睡（1:5）。船主叫醒他，要他求告自己的神（1:6）。後來水手竭力盪槳想攏岸，海浪卻越發翻騰（1:13）；他們把約拿抬起，拋進海中，海的狂浪就平息了（1:15）。經文把風浪放在耶和華手裡：是「耶和華使海中起大風」。",
      en: "Yahweh sends a great wind and the ship is likely to break up (1:4). The sailors are afraid, every man cries to his own god, and they throw the cargo into the sea (1:5). Jonah has gone down into the innermost part of the ship and is fast asleep (1:5). The ship master wakes him and tells him to call on his God (1:6). Later the men row hard for land but the sea grows worse (1:13); they take Jonah up and throw him in, and the sea ceases its raging (1:15). The text puts the storm in Yahweh’s hand: it is “Yahweh” who “sent out a great wind.”"
    },
    tip: {
      zh: "細看動詞：耶和華「使」海中起大風（1:4）、「安排」一條大魚（1:17）、「安排」蓖麻、蟲子和東風（4:6-8）——自然界的東西一件件被神調度。",
      en: "Watch the verbs: Yahweh “sent” a great wind (1:4), “prepared” a great fish (1:17), “prepared” the plant, the worm and the east wind (4:6–8) — one natural thing after another is directed by God."
    },
    related: ["flight_tarshish", "sailors", "lots_confession", "great_fish"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "sailors", book: "jonah", no: 4, kind: "person", type: "faith", rarity: 3,
    zh: "水手與船主", en: "The Sailors",
    tag: { zh: "外邦人敬畏耶和華", en: "Foreigners Who Feared Yahweh" },
    role: { zh: "船上的人（1:5-16）", en: "The men aboard (1:5–16)" },
    ch: [1],
    passages: ["1:5-16"],
    moves: [
      { zh: "不願流無辜的血", en: "No Innocent Blood", ref: "1:13-14",
        dzh: "他們不肯馬上拋下約拿，竭力盪槳，又求耶和華：不要使流無辜血的罪歸與我們。",
        den: "They row hard rather than throw Jonah over, and cry to Yahweh: “don’t lay on us innocent blood.”" },
      { zh: "敬畏耶和華", en: "They Feared Yahweh", ref: "1:16",
        dzh: "海平靜後，他們大大敬畏耶和華，向祂獻祭，並且許願。",
        den: "When the sea calms, they fear Yahweh exceedingly, offer a sacrifice and make vows." }
    ],
    traits: [
      { k: "strength", zh: "先盡力保住約拿的命", en: "Try to save Jonah’s life first" },
      { k: "identity", zh: "經文沒有說他們是哪一國人", en: "The text doesn’t say what nation they were" }
    ],
    lesson: {
      zh: "外邦人的敬畏來得很快：他們一看見神的作為，就向耶和華獻祭許願（1:16）。",
      en: "These foreigners’ reverence comes quickly: seeing what God did, they sacrifice to Yahweh and make vows (v. 16)."
    },
    quote: { ref: "1:16",
      zh: "那些人便大大敬畏耶和華，向耶和華獻祭，並且許願",
      en: "the men feared Yahweh exceedingly; and they offered a sacrifice to Yahweh, and made vows" },
    keyVerses: ["1:5", "1:10", "1:13-14", "1:15-16"],
    intro: {
      zh: "船上的人是約拿書第一批外邦人。水手「各人哀求自己的神」（1:5），所以他們並不是同一個信仰；他們掣籤找出災禍的原因（1:7），聽了約拿的告白後大大懼怕（1:10）。他們沒有急著拋下約拿，而是先竭力盪槳想攏岸（1:13），又求告耶和華（1:14）；把約拿拋進海中、風浪平息後，「那些人便大大敬畏耶和華，向耶和華獻祭，並且許願」（1:16）。經文沒有說他們以後怎樣。",
      en: "The men aboard are the book’s first foreigners. Each sailor “cried to his god” (1:5), so they did not share one faith; they cast lots to find the cause (1:7) and were terrified at Jonah’s confession (1:10). They did not hurry to throw Jonah over but first rowed hard for land (1:13) and cried to Yahweh (1:14); after Jonah is thrown in and the storm stops, “the men feared Yahweh exceedingly; and they offered a sacrifice to Yahweh, and made vows” (1:16). The text does not say what became of them."
    },
    tip: {
      zh: "留意他們稱呼的變化：起初「各人哀求自己的神」（1:5），到 1:14 他們直呼「耶和華啊」，1:16 敬畏獻祭的對象也是耶和華。",
      en: "Notice how their address changes: at first each “cried to his god” (1:5), but by 1:14 they call out “Yahweh,” and in 1:16 it is Yahweh they fear and sacrifice to."
    },
    related: ["storm_at_sea", "lots_confession", "flight_tarshish"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "lots_confession", book: "jonah", no: 5, kind: "other", type: "wisdom", rarity: 3,
    zh: "掣籤與告白", en: "The Lot and the Confession",
    tag: { zh: "「我是希伯來人，我敬畏耶和華」", en: "“I Am a Hebrew, and I Fear Yahweh”" },
    role: { zh: "船上的審問（1:7-12）", en: "The inquiry on deck (1:7–12)" },
    ch: [1],
    passages: ["1:7-12"],
    moves: [
      { zh: "籤掣出約拿來", en: "The Lot Falls on Jonah", ref: "1:7",
        dzh: "眾人掣籤，要知道這災臨到是因誰的緣故；籤掣出的是約拿。",
        den: "The men cast lots to learn who is responsible for the evil on them — and the lot falls on Jonah." },
      { zh: "我是希伯來人", en: "I Am a Hebrew", ref: "1:9",
        dzh: "他說：我是希伯來人，我敬畏耶和華，就是那創造滄海旱地的神。",
        den: "“I am a Hebrew, and I fear Yahweh, the God of heaven, who has made the sea and the dry land.”" }
    ],
    traits: [
      { k: "strength", zh: "說出自己是誰，也說出神是誰", en: "Says who he is and who God is" },
      { k: "weakness", zh: "嘴上敬畏，腳下逃跑", en: "Fears Yahweh in word, flees him in deed" }
    ],
    lesson: {
      zh: "約拿的告白是真的，卻與他的行動不相稱：他口說敬畏創造海洋的神，人卻坐在船上逃離祂（1:9-10）；到了 1:12，他承認風浪是因自己而起。",
      en: "Jonah’s confession is true but does not match what he is doing: he says he fears the God who made the sea, while sailing away from him (vv. 9–10); by verse 12 he admits the storm is because of him."
    },
    quote: { ref: "1:9",
      zh: "我是希伯來人。我敬畏耶和華",
      en: "I am a Hebrew, and I fear Yahweh" },
    keyVerses: ["1:7", "1:8", "1:9-10", "1:11-12"],
    intro: {
      zh: "水手掣籤，籤掣出約拿來（1:7）。他們連串發問：這災因誰而來？你以何事為業？從哪裡來？是哪一國、屬哪一族？（1:8）約拿的回答只有一句：「我是希伯來人。我敬畏耶和華──那創造滄海旱地之天上的神」（1:9）。水手聽了大大懼怕，因為他們已經知道他在躲避耶和華（1:10）。海浪越發翻騰時，約拿說：把我抬起來拋在海中，海就平靜了；我知道你們遭這大風是因我的緣故（1:12）。",
      en: "The sailors cast lots and the lot falls on Jonah (1:7). They fire off questions: whose fault is this, what is your work, where do you come from, what country, what people? (1:8). Jonah’s answer is one sentence: “I am a Hebrew, and I fear Yahweh, the God of heaven, who has made the sea and the dry land” (1:9). The men are terrified, for they knew he was fleeing from Yahweh (1:10). As the sea grows worse Jonah says: throw me into the sea and it will be calm; I know this storm is on you because of me (1:12)."
    },
    tip: {
      zh: "約拿的自我介紹只有兩項：民族（希伯來人）和信仰（敬畏創造海與旱地的耶和華）；他沒有提自己是先知。",
      en: "Jonah introduces himself with just two things: his people (a Hebrew) and his faith (he fears Yahweh, maker of sea and dry land); he never says he is a prophet."
    },
    related: ["sailors", "storm_at_sea", "jonah"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "great_fish", book: "jonah", no: 6, kind: "other", type: "beast", rarity: 4,
    zh: "大魚", en: "The Great Fish",
    tag: { zh: "耶和華安排的魚", en: "The Fish Yahweh Prepared" },
    role: { zh: "約拿的三日三夜（1:17；2:10）", en: "Jonah’s three days and nights (1:17; 2:10)" },
    ch: [1, 2],
    passages: ["1:17", "2:10"],
    moves: [
      { zh: "耶和華安排一條大魚", en: "Yahweh Prepares a Fish", ref: "1:17",
        dzh: "耶和華安排一條大魚吞了約拿，他在魚腹中三日三夜。",
        den: "Yahweh prepares a great fish to swallow Jonah, and he is in its belly three days and three nights." },
      { zh: "吐在旱地上", en: "Onto Dry Land", ref: "2:10",
        dzh: "耶和華一吩咐，魚就把約拿吐在旱地上。",
        den: "Yahweh speaks to the fish, and it vomits Jonah out onto dry land." }
    ],
    traits: [
      { k: "strength", zh: "聽從耶和華的吩咐", en: "Obeys Yahweh’s word" },
      { k: "identity", zh: "經文沒有說是哪種魚", en: "The text doesn’t say what kind of fish" }
    ],
    lesson: {
      zh: "全書裡，風、魚、蓖麻、蟲子、東風都聽神的話，最難聽話的是先知；魚比約拿更快順服（1:17；2:10）。",
      en: "Throughout the book the wind, the fish, the plant, the worm and the east wind all obey God; the hardest to obey is the prophet — the fish obeys faster than Jonah (1:17; 2:10)."
    },
    quote: { ref: "1:17",
      zh: "耶和華安排一條大魚吞了約拿",
      en: "Yahweh prepared a great fish to swallow up Jonah" },
    keyVerses: ["1:17", "2:1-2", "2:10"],
    intro: {
      zh: "1:17 說「耶和華安排一條大魚」吞了約拿，他在魚腹中三日三夜；2:10 說耶和華吩咐魚，魚就把約拿吐在旱地上。經文只說「大魚」，沒有說是哪一種。魚在經文裡的作用是拯救：約拿被拋進海中，沒有沉下去，而是被魚吞住，才有第 2 章的禱告。耶穌提到約拿三日三夜在大魚肚腹中（太 12:40）。",
      en: "Verse 1:17 says “Yahweh prepared a great fish” to swallow Jonah, who is in its belly three days and three nights; 2:10 says Yahweh spoke to the fish and it vomited Jonah onto dry land. The text says only “great fish,” not what kind. Its role in the story is rescue: thrown into the sea, Jonah does not sink but is held by the fish, which makes the prayer of chapter 2 possible. Jesus refers to Jonah’s three days and three nights in the belly of the great fish (Matt 12:40)."
    },
    tip: {
      zh: "2:1 說約拿在「魚腹中」禱告，2:2 他說自己「從陰間的深處呼求」——他用死亡的語言描述處境，卻在魚腹中被神保住。",
      en: "Verse 2:1 has Jonah praying “out of the fish’s belly,” and 2:2 says he cried “out of the belly of Sheol” — he describes his plight in the language of death, yet he is being kept by God inside the fish."
    },
    related: ["jonah_psalm", "jonah", "storm_at_sea"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "jonah_psalm", book: "jonah", no: 7, kind: "other", type: "faith", rarity: 4,
    zh: "魚腹中的禱告", en: "The Prayer From the Fish",
    tag: { zh: "救恩出於耶和華", en: "Salvation Belongs to Yahweh" },
    role: { zh: "感謝的詩（2:1-9）", en: "A psalm of thanks (2:1–9)" },
    ch: [2],
    passages: ["2:1-9"],
    moves: [
      { zh: "從陰間的深處呼求", en: "Out of the Depths", ref: "2:2-3",
        dzh: "他說：我遭遇患難求告耶和華，你就應允我；你將我投下深淵。",
        den: "He says he called in his affliction and Yahweh answered — and that it was Yahweh who threw him into the depths." },
      { zh: "用感謝的聲音獻祭", en: "A Sacrifice of Thanks", ref: "2:9",
        dzh: "我必用感謝的聲音獻祭，我所許的願必償還；救恩出於耶和華。",
        den: "“I will sacrifice to you with the voice of thanksgiving. I will pay that which I have vowed. Salvation belongs to Yahweh.”" }
    ],
    traits: [
      { k: "strength", zh: "在魚腹中還想念耶和華", en: "Remembers Yahweh even inside the fish" },
      { k: "identity", zh: "與詩篇相近的禱告", en: "A prayer that echoes the Psalms" }
    ],
    lesson: {
      zh: "這篇禱告感謝的是「已經」得救（2:2、6）：約拿還在魚腹中，就先感謝了（2:9）。",
      en: "This prayer thanks God for a rescue already given (2:2, 6): Jonah is still inside the fish when he gives thanks (2:9)."
    },
    quote: { ref: "2:9",
      zh: "救恩出於耶和華",
      en: "Salvation belongs to Yahweh" },
    keyVerses: ["2:1-3", "2:4-6", "2:7-9"],
    intro: {
      zh: "第 2 章整章是約拿在魚腹中的禱告（2:1-9）。他回顧自己的遭遇：在患難中求告，耶和華應允（2:2）；是耶和華把他投下深淵（2:3）；他以為自己被逐出神的眼前，仍要仰望聖殿（2:4）；水、海草、山根、地的門都圍困他（2:5-6）；然而神把他的性命從坑中救出來（2:6）。他在發昏的時候想念耶和華（2:7），最後說要用感謝的聲音獻祭，並償還所許的願（2:9）。",
      en: "All of chapter 2 is Jonah’s prayer from the fish (2:1–9). He looks back: he called in affliction and Yahweh answered (2:2); it was Yahweh who threw him into the deep (2:3); he thought he was banished from God’s sight yet would look again toward his holy temple (2:4); water, weeds, the roots of the mountains and the bars of the earth closed in (2:5–6); yet God brought his life up from the pit (2:6). When his soul fainted he remembered Yahweh (2:7), and he ends by promising to sacrifice with thanksgiving and pay his vows (2:9)."
    },
    tip: {
      zh: "2:8 有兩種讀法：和合本作「那信奉虛無之神的人，離棄憐愛他們的主」，WEB 作 “Those who regard lying vanities forsake their own mercy”。另外，這篇禱告和詩篇的句子相近（2:2 與詩 120:1、2:8 與詩 31:6、2:9 與詩 3:8），但沒有認罪，也沒有提到尼尼微。",
      en: "Verse 2:8 reads differently: the 和合本 has “those who put their trust in worthless gods leave the Lord who loves them,” the WEB “those who regard lying vanities forsake their own mercy.” The prayer also echoes the Psalms (2:2 with Ps 120:1, 2:8 with Ps 31:6, 2:9 with Ps 3:8), but it contains no confession of sin and no mention of Nineveh."
    },
    related: ["great_fish", "jonah", "storm_at_sea"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "nineveh", book: "jonah", no: 8, kind: "person", type: "power", rarity: 3,
    zh: "尼尼微", en: "Nineveh",
    tag: { zh: "惡達到神面前的大城", en: "The Great City Whose Wickedness Rose Before God" },
    role: { zh: "約拿被差往的城", en: "The city Jonah is sent to" },
    ch: [1, 3, 4],
    names: ["尼尼微"],
    enNames: ["Nineveh"],
    moves: [
      { zh: "他們的惡達到我面前", en: "Its Wickedness Has Come Up", ref: "1:2",
        dzh: "神說這城的惡達到祂面前，差約拿去向其中的居民呼喊。",
        den: "God says the city’s wickedness has come up before him and sends Jonah to cry out against it." },
      { zh: "極大的城", en: "An Exceedingly Great City", ref: "3:3",
        dzh: "這尼尼微是極大的城，有三日的路程；約拿進城走了一日就宣告。",
        den: "Nineveh is an exceedingly great city, three days’ journey across; Jonah enters a day’s journey and cries out." }
    ],
    traits: [
      { k: "strength", zh: "極大的城", en: "An exceedingly great city" },
      { k: "weakness", zh: "惡達到神面前", en: "Its wickedness reached God" }
    ],
    lesson: {
      zh: "神關心的不只是以色列：尼尼微的惡達到祂面前，祂差人警告，並在他們悔改時施憐憫（1:2；3:10；4:11）。",
      en: "God’s concern is not only Israel’s: Nineveh’s wickedness came up before him, he sent a warning, and he showed mercy when they turned (1:2; 3:10; 4:11)."
    },
    quote: { ref: "1:2",
      zh: "因為他們的惡達到我面前",
      en: "for their wickedness has come up before me" },
    keyVerses: ["1:2", "3:2-4", "4:11"],
    intro: {
      zh: "尼尼微在歷史上是亞述的大城（創 10:11 說有人「建造尼尼微」），但約拿書沒有提「亞述」，只稱它為「尼尼微大城」（1:2；3:2；4:11），說它「極大」，有三日的路程（3:3）。神說這城的惡達到祂面前（1:2）。這是約拿不想去的地方，他逃往相反方向的他施（1:3）。後來尼尼微人信服神，神也沒有降下所說的災（3:5、10）。聖經另有一卷專論尼尼微的先知書：那鴻書（鴻 1:1；3:1）。",
      en: "Nineveh was historically a great Assyrian city (Gen 10:11 speaks of someone who “built Nineveh”), but Jonah never says “Assyria”; it calls it “Nineveh, that great city” (1:2; 3:2; 4:11) and says it is exceedingly great, three days’ journey across (3:3). God says its wickedness has come up before him (1:2). It is where Jonah does not want to go, so he flees the other way to Tarshish (1:3). Later the Ninevites believe God and he does not bring the disaster he had spoken (3:5, 10). The Bible has a whole prophecy on Nineveh too: Nahum (Nah 1:1; 3:1)."
    },
    tip: {
      zh: "「三日的路程」（3:3）是指城的規模，還是走遍全城所需的時間，經文沒有說明；3:4 說約拿進城走了一日就開始宣告。",
      en: "Whether “three days’ journey” (3:3) describes the city’s size or the time to cross it the text does not say; 3:4 says Jonah entered a day’s journey and began to cry out."
    },
    related: ["nineveh_repents", "gods_question", "jonah"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "nineveh_repents", book: "jonah", no: 9, kind: "person", type: "wisdom", rarity: 4,
    zh: "尼尼微人的悔改", en: "Nineveh Repents",
    tag: { zh: "從王到牲畜，披上麻布", en: "From the King to the Livestock, in Sackcloth" },
    role: { zh: "尼尼微的回應（3:4-10）", en: "Nineveh’s response (3:4–10)" },
    ch: [3],
    passages: ["3:4-10"],
    moves: [
      { zh: "再等四十日", en: "Forty Days", ref: "3:4-5",
        dzh: "約拿宣告再等四十日尼尼微必傾覆；尼尼微人信服神，宣告禁食、穿麻衣。",
        den: "Jonah cries, “In forty days, Nineveh will be overthrown!” The people believe God, proclaim a fast and put on sackcloth." },
      { zh: "王下了寶座", en: "The King Steps Down", ref: "3:6-9",
        dzh: "王脫下朝服，披上麻布坐在灰中，下令人畜禁食，各人回頭離開惡道。",
        den: "The king leaves his throne and sits in ashes, and decrees that people and animals fast and everyone turn from evil and violence." }
    ],
    traits: [
      { k: "strength", zh: "從最大的到至小的都回應", en: "Everyone responds, greatest to least" },
      { k: "identity", zh: "帶著「也未可知」的盼望", en: "A hope that comes with “who knows?”" }
    ],
    lesson: {
      zh: "悔改不是向神討價還價，而是回頭：尼尼微人不知道神會不會後悔，仍然離開惡道（3:8-9）；結果神察看他們的行為，不降所說的災（3:10）。",
      en: "Repentance is not bargaining with God but turning: the Ninevites do not know whether God will relent, yet they leave their evil ways (3:8–9); God sees their works and does not send the disaster (3:10)."
    },
    quote: { ref: "3:5",
      zh: "尼尼微人信服神，便宣告禁食，從最大的到至小的都穿麻衣",
      en: "The people of Nineveh believed God; and they proclaimed a fast, and put on sackcloth" },
    keyVerses: ["3:4-5", "3:6-9", "3:10"],
    intro: {
      zh: "約拿在尼尼微只講了一句短短的話：「再等四十日，尼尼微必傾覆了！」（3:4）這句話沒有提悔改的條件，也沒有說神會後悔。然而「尼尼微人信服神」，宣告禁食，從最大的到至小的都穿麻衣（3:5）。王下了寶座，披上麻布，坐在灰中（3:6），下令人與牲畜都禁食披麻，各人回頭離開惡道和強暴（3:7-8），又說：「或者神轉意後悔……也未可知」（3:9）。結果「神察看他們的行為，見他們離開惡道，他就後悔，不把所說的災禍降與他們了」（3:10）。",
      en: "Jonah says just one short thing in Nineveh: “In forty days, Nineveh will be overthrown!” (3:4). It names no condition for repentance and does not say God might relent. Yet “the people of Nineveh believed God,” proclaimed a fast and put on sackcloth, greatest to least (3:5). The king leaves his throne, covers himself with sackcloth and sits in ashes (3:6), decrees that people and animals fast and that everyone turn from evil and violence (3:7–8), and says, “Who knows whether God will not turn and relent…?” (3:9). The result: “God saw their works, that they turned from their evil way. God relented of the disaster which he said he would do to them” (3:10)."
    },
    tip: {
      zh: "耶利米書 18:7-8 有一條原則：論到一邦若轉意離開惡，神就必後悔，不降所想要施行的災禍；3:10 正是這原則的實例。約珥書 2:13-14 也說「或者他轉意後悔……也未可知」。",
      en: "Jeremiah 18:7–8 states a principle: if a nation turns from its evil, God will relent of the disaster he planned; 3:10 is that principle at work. Joel 2:13–14 also says, “Who knows? He may turn and relent…”"
    },
    related: ["nineveh", "jonah", "jonah_anger", "gods_question"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "jonah_anger", book: "jonah", no: 10, kind: "person", type: "scheme", rarity: 4,
    zh: "發怒的先知", en: "The Angry Prophet",
    tag: { zh: "「我知道你是有恩典的神，所以我逃」", en: "“I Knew You Were Gracious — So I Fled”" },
    role: { zh: "約拿的不悅（4:1-5）", en: "Jonah’s displeasure (4:1–5)" },
    ch: [4],
    passages: ["4:1-5"],
    moves: [
      { zh: "我急速逃往他施", en: "That Is Why I Fled", ref: "4:2",
        dzh: "他禱告說：我知道你有恩典、有憐憫，所以我急速逃往他施去。",
        den: "He prays: I knew you are gracious and merciful, slow to anger — that is why I hurried to flee to Tarshish." },
      { zh: "取我的命吧", en: "Take My Life", ref: "4:3-4",
        dzh: "他求耶和華取他的命，因為死比活著還好；耶和華問：你這樣發怒合乎理嗎？",
        den: "He asks Yahweh to take his life; Yahweh answers, “Is it right for you to be angry?”" }
    ],
    traits: [
      { k: "strength", zh: "清楚知道神是怎樣的神", en: "Knows exactly what God is like" },
      { k: "weakness", zh: "不能接受神憐憫尼尼微", en: "Cannot accept God’s mercy on Nineveh" }
    ],
    lesson: {
      zh: "約拿對神的認識沒有錯（4:2）；經文讓人看見的是，知道神是憐憫的神，與喜歡神憐憫別人，是兩回事。",
      en: "Jonah’s knowledge of God is not wrong (4:2); the text shows that knowing God is merciful and being glad that he is merciful to others are two different things."
    },
    quote: { ref: "4:2",
      zh: "我知道你是有恩典、有憐憫的神，不輕易發怒，有豐盛的慈愛",
      en: "I knew that you are a gracious God, and merciful, slow to anger, and abundant in loving kindness" },
    keyVerses: ["4:1-3", "4:4-5"],
    intro: {
      zh: "尼尼微得了憐憫，「這事約拿大大不悅，且甚發怒」（4:1）。他向耶和華禱告，說出當初逃跑的原因：他知道神是「有恩典、有憐憫的神，不輕易發怒，有豐盛的慈愛，並且後悔不降所說的災」（4:2），這和出埃及記 34:6、約珥書 2:13 的話很接近。他求神取他的命，因為死比活著還好（4:3）。耶和華只問了一句：「你這樣發怒合乎理嗎？」（4:4）約拿沒有回答，出城坐在東邊，搭了一座棚，要看那城究竟如何（4:5）。",
      en: "Nineveh is shown mercy, and “it displeased Jonah exceedingly, and he was angry” (4:1). He prays and says why he fled in the first place: he knew God is “a gracious God, and merciful, slow to anger, and abundant in loving kindness, and you relent of doing harm” (4:2) — words close to Exodus 34:6 and Joel 2:13. He asks God to take his life, for death is better than life (4:3). Yahweh asks just one thing: “Is it right for you to be angry?” (4:4). Jonah does not answer; he goes out to the east of the city, makes a booth and waits to see what becomes of it (4:5)."
    },
    tip: {
      zh: "4:2 的字句和出埃及記 34:6（「有憐憫有恩典的神，不輕易發怒，並有豐盛的慈愛」）很接近：約拿把神的自我介紹，當成了自己逃跑的理由。",
      en: "The wording of 4:2 is close to Exodus 34:6 (“a merciful and gracious God, slow to anger, and abundant in loving kindness”): Jonah takes God’s own self-description and makes it his reason for running."
    },
    related: ["jonah", "nineveh_repents", "plant_worm_wind", "gods_question"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "plant_worm_wind", book: "jonah", no: 11, kind: "other", type: "harvest", rarity: 3,
    zh: "蓖麻、蟲子與東風", en: "The Plant, the Worm and the East Wind",
    tag: { zh: "神安排的三件事", en: "Three Things God Prepared" },
    role: { zh: "第二個教訓（4:5-8）", en: "The second lesson (4:5–8)" },
    ch: [4],
    passages: ["4:5-8"],
    moves: [
      { zh: "約拿因蓖麻大大喜樂", en: "Glad Over a Plant", ref: "4:6",
        dzh: "耶和華神安排一棵蓖麻長高，遮蓋約拿的頭；約拿因這棵蓖麻大大喜樂。",
        den: "God prepares a plant that grows up over Jonah to shade his head, and Jonah is exceedingly glad because of it." },
      { zh: "蟲子與東風", en: "The Worm and the Wind", ref: "4:7-8",
        dzh: "次日神安排蟲子咬枯蓖麻，又安排炎熱的東風；約拿發昏，又求死。",
        den: "Next day God prepares a worm that withers the plant, then a sultry east wind; Jonah faints and asks to die." }
    ],
    traits: [
      { k: "strength", zh: "神一步一步地安排", en: "God prepares each step" },
      { k: "weakness", zh: "為一棵蓖麻喜樂，也為它發怒", en: "Glad over a plant, furious over its loss" }
    ],
    lesson: {
      zh: "神讓約拿親身嘗到失去一棵蓖麻的痛，為的是接下來的問題：你為蓖麻動怒，我豈不為尼尼微動心？（4:6-11）",
      en: "God lets Jonah feel the loss of one plant so that the next question lands: you care about the plant — shouldn’t I care about Nineveh? (4:6–11)"
    },
    quote: { ref: "4:7",
      zh: "次日黎明，神卻安排一條蟲子咬這蓖麻，以致枯槁",
      en: "God prepared a worm at dawn the next day, and it chewed on the vine, so that it withered" },
    keyVerses: ["4:5", "4:6", "4:7-8", "4:9"],
    intro: {
      zh: "尼尼微得救後，約拿出城，坐在城的東邊搭了一座棚，要看那城究竟如何（4:5）。耶和華神安排一棵蓖麻，使它長高過約拿，遮蓋他的頭，救他脫離苦楚，約拿因這棵蓖麻大大喜樂（4:6）。次日黎明，神安排一條蟲子咬這蓖麻，以致枯槁（4:7）；日頭出來時，神又安排炎熱的東風，日頭曝曬約拿的頭，他發昏，就為自己求死（4:8）。神問：「你因這棵蓖麻發怒合乎理嗎？」他說：「我發怒以至於死，都合乎理！」（4:9）",
      en: "After Nineveh is spared, Jonah goes out to the east of the city, makes a booth and sits to see what becomes of it (4:5). Yahweh God prepares a plant that grows up over Jonah to shade his head and ease his discomfort, and Jonah is exceedingly glad (4:6). At dawn the next day God prepares a worm that chews the plant until it withers (4:7); when the sun rises God prepares a sultry east wind, the sun beats on Jonah’s head, he faints and asks to die (4:8). God asks, “Is it right for you to be angry about the vine?” and he answers, “I am right to be angry, even to death” (4:9)."
    },
    tip: {
      zh: "4:6 的「蓖麻」，WEB 作 “vine”（藤蔓）；這種植物究竟是哪一種，翻譯和解釋不一。",
      en: "The “plant” of 4:6 is “gourd” or “castor plant” in some versions and “vine” in the WEB; exactly which plant is meant is debated."
    },
    related: ["jonah_anger", "gods_question", "jonah"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "gods_question", book: "jonah", no: 12, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "神的最後一問", en: "God’s Last Question",
    tag: { zh: "我豈能不愛惜尼尼微呢？", en: "Shouldn’t I Be Concerned for Nineveh?" },
    role: { zh: "全書的結尾（4:9-11）", en: "The book’s ending (4:9–11)" },
    ch: [4],
    passages: ["4:9-11"],
    moves: [
      { zh: "你尚且愛惜蓖麻", en: "You Cared for the Plant", ref: "4:10",
        dzh: "這蓖麻不是你栽種的，一夜發生，一夜乾死，你尚且愛惜。",
        den: "“You have been concerned for the vine, for which you have not labored… which came up in a night, and perished in a night.”" },
      { zh: "我豈能不愛惜呢", en: "Shouldn’t I Be Concerned?", ref: "4:11",
        dzh: "何況這尼尼微大城，有十二萬多不能分辨左右的人和許多牲畜？",
        den: "“Shouldn’t I be concerned for Nineveh, that great city,” with more than 120,000 people and much livestock?" }
    ],
    traits: [
      { k: "strength", zh: "以憐憫作結，不是審判", en: "Ends on compassion, not judgment" },
      { k: "identity", zh: "沒有記下約拿的回答", en: "Jonah’s answer is never recorded" }
    ],
    lesson: {
      zh: "全書最後的不是答案，而是問題：神把約拿（和讀者）留在「我豈能不愛惜呢」面前，要人自己回答（4:11）。",
      en: "The book ends not with an answer but a question: God leaves Jonah — and the reader — facing “shouldn’t I be concerned?” and lets them answer (v. 11)."
    },
    quote: { ref: "4:11",
      zh: "我豈能不愛惜呢",
      en: "Shouldn’t I be concerned for Nineveh, that great city" },
    keyVerses: ["4:9", "4:10-11"],
    intro: {
      zh: "全書結束在神的話，不在約拿的話。耶和華指出：這蓖麻不是你栽種的，一夜發生，一夜乾死，你尚且愛惜（4:10）；「何況這尼尼微大城，其中不能分辨左手右手的有十二萬多人，並有許多牲畜，我豈能不愛惜呢？」（4:11）經文沒有記下約拿的回答。「不能分辨左手右手」的是誰，解釋不一：有人讀作年幼的孩童，有人讀作不認識神旨意的人；兩種讀法都強調這城的居民需要憐憫。",
      en: "The book ends on God’s words, not Jonah’s. Yahweh points out: you did not labor for the plant, it came up in a night and perished in a night, yet you were concerned for it (4:10); “Shouldn’t I be concerned for Nineveh, that great city, in which are more than one hundred twenty thousand persons who can’t discern between their right hand and their left hand; and also much livestock?” (4:11). Jonah’s answer is not recorded. Who “can’t discern between their right hand and their left” is debated — some read young children, others people who do not know God’s will; either way it stresses how much the city’s people need mercy."
    },
    tip: {
      zh: "神在第 4 章連問三次（4:4、9、11）：4:9 約拿回答了（我發怒都合乎理），而 4:11 這一問，經文沒有記錄他的回應。",
      en: "God asks three times in chapter 4 (vv. 4, 9, 11): in verse 9 Jonah answers (“I am right to be angry”), but after verse 11 the text records no response."
    },
    related: ["jonah_anger", "plant_worm_wind", "nineveh", "nineveh_repents", "jonah"]
  }

);
