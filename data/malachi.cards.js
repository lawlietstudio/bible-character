// 聖經人物卡 · 瑪拉基書 (Malachi) — book info + cards.
// Verse text comes from data/malachi.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/malachi.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Rom 9:13; Gen 25:23; Matt 11:10, 11:14, 17:10-13; Mark 1:2; Luke 1:17; Neh 13:10-12; Lev 22:20-22;
// Num 25:12-13; Ezra 6:15; Zech 1:3) were checked against the 和合本 text and appear in prose only.
// Flagged rather than decided: whether "Malachi" is a personal name or the title "my messenger" (3:1), the book's date (the
// text names no king), the obscure Hebrew of 2:15-16, who the "messenger of the covenant" of 3:1 is, whether 3:10 is a general
// rule or a word for that setting, and how the New Testament applies 3:1 and 4:5.

window.BOOKS.push({
  id: "malachi",
  zh: "瑪拉基書", en: "Malachi", abbr: { zh: "瑪", en: "Mal" },
  order: 39, section: { zh: "先知書", en: "Prophets" },
  chapters: 4,
  fan: ["sun_of_righteousness", "malachi", "messenger_before_me"],
  summary: {
    zh: "瑪拉基書是舊約的最後一卷，寫法像一連串的對話：耶和華說一句話，百姓回一句「你在何事上……呢？」。第 1 章：「我曾愛你們」「你在何事上愛我們呢？」（1:2）；祭司把瞎眼的、瘸腿的獻為祭物，卻說「我們在何事上藐視你的名呢？」（1:6-8）。第 2 章：祭司背棄利未的約（2:1-9），猶大人以詭詐待弟兄，也待幼年所娶的妻（2:10-16），並說「公義的神在哪裡呢？」（2:17）。第 3 章：耶和華要差遣使者預備道路，主必忽然進入他的殿（3:1），如煉金之人的火（3:2-3）；「你們要轉向我，我就轉向你們」（3:7）；敬畏耶和華的有紀念冊（3:16）。第 4 章：公義的日頭要出現，光線有醫治之能（4:2）；耶和華要差遣先知以利亞（4:5-6）。",
    en: "Malachi, the last book of the Old Testament, reads like a string of dialogues: Yahweh says something, and the people reply, “How have we…?” Chapter 1: “I have loved you” — “How have you loved us?” (1:2); the priests offer the blind and lame, yet ask, “How have we despised your name?” (1:6–8). Chapter 2: the priests have abandoned the covenant with Levi (2:1–9), Judah deals treacherously with brothers and with the wife of their youth (2:10–16), and says, “Where is the God of justice?” (2:17). Chapter 3: Yahweh will send a messenger to prepare the way, and the Lord will suddenly come to his temple (3:1), like a refiner’s fire (3:2–3); “Return to me, and I will return to you” (3:7); those who fear Yahweh have a book of memory (3:16). Chapter 4: the sun of righteousness will rise with healing in its wings (4:2); Yahweh will send Elijah the prophet (4:5–6)."
  },
  outline: [
    { zh: "「我曾愛你們」；雅各與以掃；祭司獻瞎眼的；我的名在外邦中必尊為大", en: "“I have loved you”; Jacob and Esau; the priests’ blind offerings; my name great among the nations" },
    { zh: "利未的約；一位父；幼年所娶的妻；「公義的神在哪裡」", en: "The covenant with Levi; one father; the wife of your youth; “Where is the God of justice?”" },
    { zh: "預備道路的使者；煉金的火；十分之一；紀念冊", en: "The messenger who prepares the way; the refiner’s fire; the tithe; the book of memory" },
    { zh: "公義的日頭；摩西的律法；以利亞和父子的心", en: "The sun of righteousness; the law of Moses; Elijah and the hearts of fathers and children" }
  ],
  notes: {
    zh: "小提示：瑪拉基書的結構是六、七次「爭辯」，每次都是「耶和華說 → 百姓問『何事上』→ 耶和華回答」。書中沒有寫年份，沒有提王，只提到「省長」（1:8）；殿已重建（1:7-10；拉 6:15），十分之一被拖欠，與尼希米記 13:10-12 的情形相近，所以常被放在尼希米前後。中文與英文聖經的第 4 章，在希伯來文聖經是 3:19-24（全書只有 3 章）。",
    en: "Good to know: the book is built from six or seven “disputes,” each running “Yahweh says → the people ask ‘how?’ → Yahweh answers.” It gives no date and names no king, only a “governor” (1:8); the temple has been rebuilt (1:7–10; Ezra 6:15) and tithes are withheld, like the situation of Nehemiah 13:10–12, so it is often placed around Nehemiah’s time. Chapter 4 in Chinese and English Bibles is 3:19–24 in the Hebrew Bible (which has only 3 chapters)."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "malachi", book: "malachi", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "瑪拉基", en: "Malachi",
    meaning: { zh: "「我的使者」", en: "“My messenger”" },
    tag: { zh: "用問答向百姓說話的先知", en: "The Prophet Who Speaks in Question and Answer" },
    role: { zh: "舊約最後一位先知", en: "The last prophet of the Old Testament" },
    ch: [1, 2, 3],
    passages: ["1:1", "2:7", "3:1"],
    moves: [
      { zh: "耶和華藉瑪拉基傳給以色列", en: "By Malachi to Israel", ref: "1:1",
        dzh: "耶和華藉瑪拉基傳給以色列的默示，沒有提父親、家鄉或年代。",
        den: "Yahweh’s word to Israel by Malachi — with no father, hometown or date given." },
      { zh: "「你在何事上……呢？」", en: "“How Have We…?”", ref: "1:2",
        dzh: "耶和華說「我曾愛你們」，百姓回問：你在何事上愛我們呢？",
        den: "Yahweh says, “I have loved you,” and the people reply, “How have you loved us?”" }
    ],
    traits: [
      { k: "strength", zh: "把百姓心裡的話說出來，並一一回答", en: "Says aloud what the people think and answers each" },
      { k: "identity", zh: "名字的意思是「我的使者」（參 3:1）", en: "His name means “my messenger” (compare 3:1)" }
    ],
    lesson: {
      zh: "瑪拉基的講法很特別：他不先宣告，而是引用百姓的反問——「你在何事上愛我們呢？」（1:2）、「我們在何事上藐視你的名呢？」（1:6）——然後回答。對話式的先知書，把百姓的疑問說得很坦白。",
      en: "Malachi’s method is unusual: instead of announcing first, he quotes the people’s counter-questions — “How have you loved us?” (1:2), “How have we despised your name?” (1:6) — and then answers. A dialogue-style prophecy that states the people’s doubts candidly."
    },
    quote: { ref: "1:1",
      zh: "耶和華藉瑪拉基傳給以色列的默示",
      en: "Yahweh’s word to Israel by Malachi" },
    keyVerses: ["1:1", "1:2", "3:1", "4:5"],
    intro: {
      zh: "瑪拉基書只有一句開場：「耶和華藉瑪拉基傳給以色列的默示」（1:1）。沒有父名、家鄉，也沒有王的年號。「瑪拉基」的意思是「我的使者」，和 3:1 的「我要差遣我的使者」是同一個字，所以有人認為它是人名，也有人認為是一個稱號；經文沒有決定。書中提到「省長」（1:8），殿已經重建並在運作（1:7-10），十分之一被拖欠（3:8-10）。這些與以斯拉記 6:15 之後、尼希米記 13:10-12 的情形相近，所以書常被放在尼希米前後，但書本身沒有寫年份。",
      en: "Malachi opens with a single line: “A revelation, Yahweh’s word to Israel by Malachi” (1:1). No father, no hometown, no king’s year. “Malachi” means “my messenger,” the same word as in 3:1, “I send my messenger,” so some take it as a personal name and some as a title; the text does not decide. The book mentions a “governor” (1:8), a temple that has been rebuilt and is working (1:7–10), and tithes withheld (3:8–10). These resemble the situation after Ezra 6:15 and in Nehemiah 13:10–12, so the book is often placed around Nehemiah’s time, but the book itself gives no date."
    },
    tip: {
      zh: "「瑪拉基」是人名還是稱號（「我的使者」），經文沒有決定；書的年代是從內容推算的。",
      en: "Whether “Malachi” is a personal name or a title (“my messenger”) the text does not decide; the book’s date is inferred from its content."
    },
    related: ["loved_jacob", "father_master", "messenger_before_me", "sun_of_righteousness", "elijah_hearts"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "loved_jacob", book: "malachi", no: 2, kind: "other", type: "love", rarity: 4,
    zh: "我曾愛你們", en: "I Have Loved You",
    tag: { zh: "「你在何事上愛我們呢？」", en: "“How Have You Loved Us?”" },
    role: { zh: "第一個爭辯（1:2-5）", en: "The first dispute (1:2–5)" },
    ch: [1],
    passages: ["1:2-5"],
    moves: [
      { zh: "你在何事上愛我們", en: "How Have You Loved Us?", ref: "1:2",
        dzh: "耶和華說：我曾愛你們。你們卻說：你在何事上愛我們呢？",
        den: "“I have loved you,” says Yahweh. Yet you say, “How have you loved us?”" },
      { zh: "愛雅各，惡以掃", en: "Jacob Loved, Esau Hated", ref: "1:2-3",
        dzh: "以掃不是雅各的哥哥嗎？我卻愛雅各，惡以掃，使他的山嶺荒涼。",
        den: "“Wasn’t Esau Jacob’s brother? Yet I loved Jacob; but Esau I hated, and made his mountains a desolation.”" }
    ],
    traits: [
      { k: "strength", zh: "用兩兄弟的歷史回答，不用新理由", en: "Answers with the history of two brothers, not a new argument" },
      { k: "identity", zh: "羅 9:13 引用「雅各是我所愛的」", en: "Romans 9:13 quotes “Jacob I loved”" }
    ],
    lesson: {
      zh: "神說「我曾愛你們」，百姓問證據。祂的回答不是列舉恩惠，而是回到一個起點：同一對兄弟，祂揀選了雅各（1:2）；創世記 25:23 已說「大的要服事小的」。",
      en: "God says, “I have loved you,” and the people ask for proof. His answer is not a list of favors but a return to a beginning: of one pair of brothers, he chose Jacob (1:2); Genesis 25:23 had already said “the elder will serve the younger.”"
    },
    quote: { ref: "1:2",
      zh: "我曾愛你們。」你們卻說：「你在何事上愛我們呢",
      en: "I have loved you,” says Yahweh. Yet you say, “How have you loved us?" },
    keyVerses: ["1:2", "1:3", "1:4", "1:5"],
    intro: {
      zh: "書的第一個爭辯就是最基本的問題：「耶和華說：我曾愛你們。你們卻說：你在何事上愛我們呢？」（1:2）回答是：「以掃不是雅各的哥哥嗎？我卻愛雅各，惡以掃，使他的山嶺荒涼，把他的地業交給曠野的野狗。」（1:2-3）羅馬書 9:13 引用了這句。「惡」在這裡是與「愛」對比的揀選用語，意思是沒有被揀選，不一定等於情感上的憎恨，這是不少注釋書的看法。以東想重建荒廢之處，耶和華說：任他們建造，我必拆毀（1:4）；以東人的下場在俄巴底亞書也有一整卷。1:5：「願耶和華在以色列境界之外被尊為大！」",
      en: "The book’s first dispute is the most basic question: “‘I have loved you,’ says Yahweh. Yet you say, ‘How have you loved us?’” (1:2). The answer: “‘Wasn’t Esau Jacob’s brother?’ says Yahweh, ‘Yet I loved Jacob; but Esau I hated, and made his mountains a desolation, and gave his heritage to the jackals of the wilderness’” (1:2–3). Romans 9:13 quotes this line. “Hated” is here a choosing-language contrasted with “loved,” meaning not chosen, and not necessarily emotional hatred — the view of many commentaries. Edom wants to rebuild its ruins; Yahweh says, let them build, I will tear down (1:4); Edom’s fate also fills the whole book of Obadiah. Verse 5: “Yahweh be magnified beyond the border of Israel!”"
    },
    tip: {
      zh: "「惡以掃」的「惡」常被讀作「不揀選」的對比用語，但各解不一；以東的下場另見俄巴底亞書。",
      en: "“Hated” in “Esau I hated” is often read as the contrast-term for “not chosen,” though readings differ; Edom’s fate is also in Obadiah."
    },
    related: ["malachi", "father_master", "name_great_nations", "one_father"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "father_master", book: "malachi", no: 3, kind: "other", type: "wisdom", rarity: 3,
    zh: "我既為父親，尊敬我的在哪裡呢", en: "If I Am a Father, Where Is My Honor?",
    tag: { zh: "把瞎眼的、瘸腿的獻給省長試試", en: "Try Offering the Blind and Lame to Your Governor" },
    role: { zh: "對祭司的責備（1:6-9）", en: "The rebuke of the priests (1:6–9)" },
    ch: [1],
    passages: ["1:6-9"],
    moves: [
      { zh: "父親與主人", en: "Father and Master", ref: "1:6",
        dzh: "兒子尊敬父親，僕人敬畏主人；我既為父親，尊敬我的在哪裡呢？",
        den: "“A son honors his father, and a servant his master. If I am a father, then where is my honor?”" },
      { zh: "獻給你的省長", en: "Offer It to Your Governor", ref: "1:8",
        dzh: "你們將瞎眼的、瘸腿的獻為祭物；獻給你的省長，他豈喜悅你嗎？",
        den: "“When you offer the blind and the lame… Present it now to your governor! Will he be pleased with you?”" }
    ],
    traits: [
      { k: "strength", zh: "用省長來對照，不用新的律法", en: "Argues from a governor’s standards, not a new law" },
      { k: "weakness", zh: "「我們在何事上藐視你的名呢？」", en: "“How have we despised your name?”" }
    ],
    lesson: {
      zh: "耶和華沒有先搬出利未記，而是問一個人人懂的問題：這樣的禮物你拿去給省長，他會高興嗎？（1:8）利未記 22:20-22 其實早已說瞎眼的、殘廢的都不可獻。",
      en: "Yahweh does not start with Leviticus but with a question anyone understands: would your governor be pleased with such a gift? (1:8). Leviticus 22:20–22 had long said the blind and maimed may not be offered."
    },
    quote: { ref: "1:6",
      zh: "我既為父親，尊敬我的在哪裡呢",
      en: "If I am a father, then where is my honor?" },
    keyVerses: ["1:6", "1:7", "1:8", "1:9"],
    intro: {
      zh: "「兒子尊敬父親，僕人敬畏主人；我既為父親，尊敬我的在哪裡呢？我既為主人，敬畏我的在哪裡呢？」（1:6）這句是對「藐視我名的祭司」說的。祭司問：「我們在何事上藐視你的名呢？」（1:6）答案是壇上污穢的食物（1:7），和瞎眼的、瘸腿的、有病的祭物（1:8）。「你獻給你的省長，他豈喜悅你嗎？」利未記 22:20-22 明說有殘疾的不可獻給耶和華。1:9 勸他們懇求神施恩，但「這妄獻的事，既由你們經手」，神豈能看他們的情面。",
      en: "“A son honors his father, and a servant his master. If I am a father, then where is my honor? And if I am a master, where is the respect due me?” (1:6). This is said to “you, priests, who despise my name.” The priests ask, “How have we despised your name?” (1:6). The answer: polluted food on the altar (1:7), and blind, lame and sick animals as sacrifices (1:8). “Present it now to your governor! Will he be pleased with you?” Leviticus 22:20–22 says plainly that what has a defect may not be offered to Yahweh. Verse 9 urges them to plead for God’s favor, but “this has been by your hand,” so how could he show them favor?"
    },
    tip: {
      zh: "「省長」是波斯派的地方官；1:8 的比喻是用他們自己的標準來對照祭物。",
      en: "The “governor” is the Persian-appointed local official; the figure in 1:8 uses their own standards to measure the sacrifices."
    },
    related: ["loved_jacob", "name_great_nations", "levi_covenant", "malachi"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "name_great_nations", book: "malachi", no: 4, kind: "other", type: "heaven", rarity: 5,
    zh: "我的名在外邦中必尊為大", en: "My Name Is Great Among the Nations",
    tag: { zh: "從日出之地到日落之處", en: "From the Rising of the Sun to Its Setting" },
    role: { zh: "祭司的對比（1:10-14）", en: "The contrast with the priests (1:10–14)" },
    ch: [1],
    passages: ["1:10-14"],
    moves: [
      { zh: "關上殿門", en: "Shut the Temple Doors", ref: "1:10",
        dzh: "甚願你們中間有一人關上殿門，免得你們徒然在我壇上燒火。",
        den: "“Oh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain.”" },
      { zh: "從日出到日落", en: "Sunrise to Sunset", ref: "1:11",
        dzh: "從日出之地到日落之處，我的名在外邦中必尊為大；各處必獻潔淨的供物。",
        den: "From the rising of the sun to its going down my name is great among the nations; in every place a pure offering is offered." }
    ],
    traits: [
      { k: "strength", zh: "外邦人也「獻潔淨的供物」", en: "Even the nations offer “a pure offering”" },
      { k: "weakness", zh: "祭司說「這些事何等煩瑣！」（1:13）", en: "The priests say, “What a weariness it is!” (1:13)" }
    ],
    lesson: {
      zh: "神寧可有人關上殿門，也不要敷衍的祭（1:10）；因為「我的名在外邦中必尊為大」（1:11），祂不缺人敬拜。這是全書最大的一幅畫：整個世界，從日出到日落。",
      en: "God would rather someone shut the temple doors than have half-hearted sacrifice (1:10); “my name is great among the nations” (1:11), so he does not lack worshipers. It is the book’s widest picture: the whole world, from sunrise to sunset."
    },
    quote: { ref: "1:11",
      zh: "我的名在外邦中必尊為大",
      en: "my name is great among the nations" },
    keyVerses: ["1:10", "1:11", "1:12", "1:13", "1:14"],
    intro: {
      zh: "1:10：「甚願你們中間有一人關上殿門，免得你們徒然在我壇上燒火。萬軍之耶和華說：我不喜悅你們，也不從你們手中收納供物。」緊接著是 1:11：「從日出之地到日落之處，我的名在外邦中必尊為大。在各處，人必奉我的名燒香，獻潔淨的供物，因為我的名在外邦中必尊為大。」這句話的時態有爭議：是當時外邦人已在以自己的方式敬拜真神，還是指將來。1:12-13 回到祭司：他們說「耶和華的桌子是污穢的」，說「這些事何等煩瑣！」，把搶奪的、瘸腿的、有病的拿來獻上；1:14 咒詛那許願卻用有殘疾的獻給主的人。",
      en: "Verse 10: “Oh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain. I have no pleasure in you,” says Yahweh of Armies, “neither will I accept an offering at your hand.” Then 1:11: “For from the rising of the sun even to the going down of the same, my name is great among the nations, and in every place incense will be offered to my name, and a pure offering: for my name is great among the nations.” The tense is disputed: whether nations are already worshiping the true God in their own way, or this points to the future. Verses 12–13 return to the priests: they call Yahweh’s table polluted, say “What a weariness it is!” and bring what is stolen, lame and sick; verse 14 curses the one who vows and then offers a blemished animal."
    },
    tip: {
      zh: "1:11 的動詞是「必」（將來）還是現在已經如此，原文可有兩種讀法，注釋書看法不一。",
      en: "Whether 1:11 speaks in the present or the future is open in the Hebrew, and commentaries differ."
    },
    related: ["father_master", "loved_jacob", "levi_covenant", "malachi"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "levi_covenant", book: "malachi", no: 5, kind: "other", type: "faith", rarity: 4,
    zh: "與利未立的約", en: "The Covenant with Levi",
    tag: { zh: "祭司的嘴裡當存知識", en: "A Priest’s Lips Should Keep Knowledge" },
    role: { zh: "對祭司的誡命（2:1-9）", en: "The command to the priests (2:1–9)" },
    ch: [2],
    passages: ["2:1-9"],
    moves: [
      { zh: "生命和平安的約", en: "A Covenant of Life and Peace", ref: "2:5-6",
        dzh: "我曾與他立生命和平安的約；真實的律法在他口中，他使多人回頭離開罪孽。",
        den: "“My covenant was with him of life and peace… The law of truth was in his mouth, and he turned many away from iniquity.”" },
      { zh: "祭司當存知識", en: "Knowledge on the Lips", ref: "2:7-8",
        dzh: "祭司的嘴裡當存知識，因為他是萬軍之耶和華的使者；你們卻使許多人在律法上跌倒。",
        den: "The priest’s lips should keep knowledge, for he is the messenger of Yahweh of Armies; yet you made many stumble at the law." }
    ],
    traits: [
      { k: "strength", zh: "理想的祭司：口中有真實的律法，與神同行", en: "The ideal priest: truth in his mouth, walking with God" },
      { k: "weakness", zh: "偏離正道，瞻徇情面（2:8-9）", en: "Turned from the way, showing partiality (2:8–9)" }
    ],
    lesson: {
      zh: "「使者」這個詞，在這裡用在祭司身上：「他是萬軍之耶和華的使者」（2:7）。祭司的責任是傳遞知識，而不只是主持祭祀；民數記 25:12-13 的「平安的約」也賜給祭司的家。",
      en: "The word “messenger” is here applied to the priest: “he is the messenger of Yahweh of Armies” (2:7). A priest’s duty is to pass on knowledge, not only to run sacrifices; the “covenant of peace” of Numbers 25:12–13 was likewise given to a priestly line."
    },
    quote: { ref: "2:7",
      zh: "祭司的嘴裡當存知識，人也當由他口中尋求律法",
      en: "the priest’s lips should keep knowledge" },
    keyVerses: ["2:1", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9"],
    intro: {
      zh: "「眾祭司啊，這誡命是傳給你們的。」（2:1）若不聽從，福分要變為咒詛（2:2）；2:3 的話很粗，說要把犧牲的糞抹在他們臉上，意思是他們要像祭物的穢物一樣被除掉。2:4-6 回顧「我與利未所立的約」：「生命和平安的約」，利未存敬畏的心，「真實的律法在他口中，他嘴裡沒有不義的話。他以平安和正直與我同行，使多人回頭離開罪孽。」2:7：「祭司的嘴裡當存知識……因為他是萬軍之耶和華的使者。」2:8-9：你們卻偏離正道，使許多人在律法上跌倒，所以我使你們被眾人藐視。2:4 的「利未」，和合本註作「利未人」，指整個支派還是特定的祭司，經文沒有說明。",
      en: "“Now, you priests, this commandment is for you” (2:1). If they will not listen, their blessings will become curses (2:2); 2:3 is blunt, saying dung from the sacrifices will be smeared on their faces, meaning they will be removed like the refuse of the offerings. Verses 4–6 look back to “my covenant with Levi”: “a covenant of life and peace,” Levi was reverent, “The law of truth was in his mouth… He walked with me in peace and uprightness, and turned many away from iniquity.” Verse 7: “the priest’s lips should keep knowledge… for he is the messenger of Yahweh of Armies.” Verses 8–9: but you have turned from the way and made many stumble at the law, so I have made you despised. “Levi” in 2:4 (the CUV note: “the Levites”) may mean the whole tribe or a particular priestly line; the text does not say."
    },
    tip: {
      zh: "2:3 的「糞抹在臉上」是強烈的比喻；2:4 的「利未」指整個支派還是祭司的一脈，經文沒有說明。",
      en: "“Dung on your faces” in 2:3 is a strong figure; whether “Levi” in 2:4 means the whole tribe or a priestly line the text does not say."
    },
    related: ["father_master", "name_great_nations", "refiners_fire", "malachi"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "one_father", book: "malachi", no: 6, kind: "other", type: "love", rarity: 4,
    zh: "我們豈不都是一位父嗎？", en: "Do We Not All Have One Father?",
    tag: { zh: "不可以詭詐待幼年所娶的妻", en: "Do Not Deal Treacherously with the Wife of Your Youth" },
    role: { zh: "對背約的責備（2:10-16）", en: "The rebuke for breaking faith (2:10–16)" },
    ch: [2],
    passages: ["2:10-16"],
    moves: [
      { zh: "一位父，一位神", en: "One Father, One God", ref: "2:10",
        dzh: "我們豈不都是一位父嗎？豈不是一位神所造的嗎？為何以詭詐待弟兄？",
        den: "Don’t we all have one father? Hasn’t one God created us? Why do we deal treacherously every man against his brother?" },
      { zh: "前妻的眼淚", en: "The Tears of the First Wife", ref: "2:13-14",
        dzh: "你們使前妻歎息哭泣的眼淚遮蓋耶和華的壇；耶和華在你和你幼年所娶的妻中間作見證。",
        den: "You cover Yahweh’s altar with tears; Yahweh has been witness between you and the wife of your youth, your companion and the wife of your covenant." }
    ],
    traits: [
      { k: "strength", zh: "把婚姻也放在「約」的底下", en: "Puts marriage too under the heading of “covenant”" },
      { k: "weakness", zh: "「不再看顧那供物」（2:13）", en: "God “doesn’t regard the offering any more” (2:13)" }
    ],
    lesson: {
      zh: "從「一位父」說到「幼年所娶的妻」：弟兄之間的背約（2:10）與夫妻之間的背約（2:14）被放在同一個標題下——「約」。敬拜與日常信實不能分開。",
      en: "From “one father” to “the wife of your youth”: breaking faith between brothers (2:10) and between husband and wife (2:14) are put under one heading — “covenant.” Worship and everyday faithfulness cannot be separated."
    },
    quote: { ref: "2:10",
      zh: "我們豈不都是一位父嗎？豈不是一位神所造的嗎",
      en: "Don’t we all have one father? Hasn’t one God created us?" },
    keyVerses: ["2:10", "2:11", "2:13", "2:14", "2:15", "2:16"],
    intro: {
      zh: "2:10 問：「我們豈不都是一位父嗎？豈不是一位神所造的嗎？我們各人怎麼以詭詐待弟兄，背棄了神與我們列祖所立的約呢？」2:11 說猶大人行了「一件可憎的事」：娶事奉外邦神的女子為妻。2:13-14 說另一件事：他們使前妻歎息哭泣的眼淚遮蓋耶和華的壇；「耶和華在你和你幼年所娶的妻中間作見證。她雖是你的配偶，又是你盟約的妻，你卻以詭詐待她。」2:15 的原文非常難讀，各譯本差別很大；2:16 和合本作「休妻的事和以強暴待妻的人都是我所恨惡的」，WEB 作「I hate divorce」；有些現代譯本把這節的原文讀成「那恨惡妻子而休她的人」，也有人讀作別的意思。這是舊約少數難定的經文之一。",
      en: "Verse 10 asks: “Don’t we all have one father? Hasn’t one God created us? Why do we deal treacherously every man against his brother, profaning the covenant of our fathers?” Verse 11 says Judah has done “an abomination”: marrying the daughter of a foreign god. Verses 13–14 speak of another matter: they cover Yahweh’s altar with the tears of the first wife; “Yahweh has been witness between you and the wife of your youth, against whom you have dealt treacherously, though she is your companion, and the wife of your covenant.” The Hebrew of 2:15 is very hard, and translations differ widely; 2:16 in the CUV reads “divorce and him who covers his garment with violence are what I hate,” the WEB “I hate divorce”; some modern translations read the Hebrew as “the man who hates and divorces,” and others read it differently. It is one of the few verses of the Old Testament that is hard to fix."
    },
    tip: {
      zh: "2:15-16 的原文非常難讀，各譯本差別很大，這兩節不宜單獨拿來下結論；2:11 的「聖潔」，和合本註作「聖地」。",
      en: "The Hebrew of 2:15–16 is very hard and translations differ widely, so these two verses should not be used alone to draw conclusions; the CUV note renders “holiness” in 2:11 as “holy place.”"
    },
    related: ["levi_covenant", "loved_jacob", "messenger_before_me", "malachi"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "messenger_before_me", book: "malachi", no: 7, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "預備道路的使者", en: "The Messenger Who Prepares the Way",
    tag: { zh: "主必忽然進入他的殿", en: "The Lord Will Suddenly Come to His Temple" },
    role: { zh: "對「公義的神在哪裡」的回答（2:17-3:1）", en: "The answer to “Where is the God of justice?” (2:17–3:1)" },
    ch: [3],
    passages: ["3:1"],
    moves: [
      { zh: "公義的神在哪裡", en: "Where Is the God of Justice?", ref: "2:17",
        dzh: "你們用言語煩瑣耶和華，說：凡行惡的耶和華眼看為善；公義的神在哪裡呢？",
        den: "You have wearied Yahweh with your words, saying, “Everyone who does evil is good in Yahweh’s sight,” and “Where is the God of justice?”" },
      { zh: "我要差遣我的使者", en: "I Send My Messenger", ref: "3:1",
        dzh: "我要差遣我的使者在我前面預備道路；你們所尋求的主必忽然進入他的殿。",
        den: "“I send my messenger, and he will prepare the way before me; and the Lord, whom you seek, will suddenly come to his temple.”" }
    ],
    traits: [
      { k: "strength", zh: "回答「在哪裡」的是「他來了」", en: "To “where is he?” the answer is “he comes”" },
      { k: "identity", zh: "太 11:10、可 1:2、路 1:17 的引用", en: "Cited in Matt 11:10, Mark 1:2, Luke 1:17" }
    ],
    lesson: {
      zh: "百姓問「公義的神在哪裡呢？」（2:17），回答是一個來臨：「你們所尋求的主必忽然進入他的殿」（3:1）。祂來，不是給期待的人安慰，而是先潔淨（3:2-3）。馬太福音 11:10 與馬可福音 1:2 引用「我要差遣我的使者」，指施洗約翰。",
      en: "To “Where is the God of justice?” (2:17), the answer is an arrival: “the Lord, whom you seek, will suddenly come to his temple” (3:1). He comes not to comfort those who waited but first to cleanse (3:2–3). Matthew 11:10 and Mark 1:2 cite “I send my messenger” of John the Baptist."
    },
    quote: { ref: "3:1",
      zh: "我要差遣我的使者在我前面預備道路",
      en: "I send my messenger, and he will prepare the way before me" },
    keyVerses: ["2:17", "3:1"],
    intro: {
      zh: "2:17 的抱怨：「你們用言語煩瑣耶和華……你們說：凡行惡的，耶和華眼看為善，並且他喜悅他們；或說：公義的神在哪裡呢？」3:1 是回答：「我要差遣我的使者在我前面預備道路。你們所尋求的主必忽然進入他的殿；立約的使者，就是你們所仰慕的，快要來到。」這裡有兩位：「我的使者」，和「主」／「立約的使者」。這兩位是誰、是否同一位，經文沒有說明。馬太福音 11:10 和馬可福音 1:2 引用前半句，馬太福音 11:14 又說「這人就是那應當來的以利亞」，把使者與 4:5 的以利亞連起來。",
      en: "The complaint of 2:17: “You have wearied Yahweh with your words… In that you say, ‘Everyone who does evil is good in Yahweh’s sight, and he delights in them;’ or ‘Where is the God of justice?’” The answer is 3:1: “Behold, I send my messenger, and he will prepare the way before me; and the Lord, whom you seek, will suddenly come to his temple; and the messenger of the covenant, whom you desire, behold, he comes!” Here are two figures: “my messenger,” and “the Lord” / “the messenger of the covenant.” Who they are, and whether they are the same, the text does not say. Matthew 11:10 and Mark 1:2 cite the first half, and Matthew 11:14 adds “this is Elijah, who is to come,” linking the messenger to the Elijah of 4:5."
    },
    tip: {
      zh: "3:1 的「我的使者」與「立約的使者」是誰，經文沒有指明；新約把前者用在施洗約翰身上。",
      en: "Who “my messenger” and “the messenger of the covenant” are in 3:1 the text does not say; the New Testament applies the first to John the Baptist."
    },
    related: ["refiners_fire", "malachi", "elijah_hearts", "sun_of_righteousness"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "refiners_fire", book: "malachi", no: 8, kind: "other", type: "power", rarity: 4,
    zh: "煉金人的火", en: "The Refiner’s Fire",
    tag: { zh: "「他顯現的時候，誰能立得住呢？」", en: "“Who Can Stand When He Appears?”" },
    role: { zh: "使者來臨的日子（3:2-5）", en: "The day of his coming (3:2–5)" },
    ch: [3],
    passages: ["3:2-5"],
    moves: [
      { zh: "誰能當得起", en: "Who Can Endure?", ref: "3:2",
        dzh: "他來的日子，誰能當得起呢？因為他如煉金之人的火，如漂布之人的鹼。",
        den: "Who can endure the day of his coming? For he is like a refiner’s fire, and like launderers’ soap." },
      { zh: "煉淨銀子", en: "Refining Silver", ref: "3:3",
        dzh: "他必坐下如煉淨銀子的，必潔淨利未人，他們就憑公義獻供物。",
        den: "He will sit as a refiner and purifier of silver, and purify the sons of Levi; and they will offer offerings in righteousness." }
    ],
    traits: [
      { k: "strength", zh: "坐下來慢慢煉，不是一燒了事", en: "He sits and refines slowly, not burning and leaving" },
      { k: "weakness", zh: "除了祭司，連行邪術、姦淫、假誓的也在內（3:5）", en: "Beyond priests, sorcerers, adulterers and perjurers too (3:5)" }
    ],
    lesson: {
      zh: "兩個比喻：煉金的火和漂布的鹼（3:2），都是為了去掉雜質。祂「坐下」（3:3）：煉的人要守在爐邊，直到銀子清了。目的是祭司「憑公義獻供物」（3:3），使供物重新蒙悅納（3:4）。",
      en: "Two figures: the refiner’s fire and the launderers’ soap (3:2), both to remove impurities. He “sits” (3:3): the refiner stays by the furnace until the silver is clear. The aim is that the priests “offer offerings in righteousness” (3:3), so the offerings are again pleasing (3:4)."
    },
    quote: { ref: "3:3",
      zh: "他必坐下如煉淨銀子的，必潔淨利未人",
      en: "he will sit as a refiner and purifier of silver" },
    keyVerses: ["3:2", "3:3", "3:4", "3:5"],
    intro: {
      zh: "「他來的日子，誰能當得起呢？他顯現的時候，誰能立得住呢？因為他如煉金之人的火，如漂布之人的鹼。」（3:2）「漂布之人的鹼」是洗淨布料的肥皂或鹼。3:3：「他必坐下如煉淨銀子的，必潔淨利未人，熬煉他們像金銀一樣；他們就憑公義獻供物給耶和華。」這和 2:1-9 的利未之約連在一起：祭司被潔淨，供物才被悅納，「彷彿古時之日、上古之年」（3:4）。3:5 把範圍擴大：耶和華要作見證警戒行邪術的、犯姦淫的、起假誓的、虧負人之工價的、欺壓寡婦孤兒的、屈枉寄居的，和不敬畏我的。",
      en: "“But who can endure the day of his coming? And who will stand when he appears? For he is like a refiner’s fire, and like launderers’ soap” (3:2). “Launderers’ soap” is the lye or soap used to clean cloth. Verse 3: “He will sit as a refiner and purifier of silver, and he will purify the sons of Levi, and refine them as gold and silver; and they shall offer to Yahweh offerings in righteousness.” This ties back to the covenant with Levi in 2:1–9: when the priests are purified the offerings are accepted, “as in the days of old, and as in ancient years” (3:4). Verse 5 widens the scope: Yahweh will be a swift witness against sorcerers, adulterers, perjurers, those who oppress the hireling in his wages, the widow and the fatherless, who deprive the foreigner of justice, and don’t fear him."
    },
    tip: {
      zh: "「漂布之人的鹼」是洗淨布料用的鹼；3:2 用兩個比喻，一個用火，一個用水。",
      en: "“Launderers’ soap” is the lye used to clean cloth; 3:2 uses two figures, one of fire and one of water."
    },
    related: ["messenger_before_me", "levi_covenant", "tithe_test", "malachi"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "tithe_test", book: "malachi", no: 9, kind: "other", type: "harvest", rarity: 4,
    zh: "以此試試我", en: "Test Me in This",
    tag: { zh: "我─耶和華是不改變的", en: "I, Yahweh, Do Not Change" },
    role: { zh: "「轉向我」與十分之一（3:6-12）", en: "“Return to me” and the tithe (3:6–12)" },
    ch: [3],
    passages: ["3:6-12"],
    moves: [
      { zh: "你們要轉向我", en: "Return to Me", ref: "3:6-7",
        dzh: "我─耶和華是不改變的，所以你們雅各之子沒有滅亡；你們要轉向我，我就轉向你們。",
        den: "“I, Yahweh, don’t change; therefore you, sons of Jacob, are not consumed… Return to me, and I will return to you.”" },
      { zh: "全然送入倉庫", en: "Bring the Whole Tithe", ref: "3:10",
        dzh: "將當納的十分之一全然送入倉庫，以此試試我，是否為你們敞開天上的窗戶。",
        den: "“Bring the whole tithe into the storehouse… and test me now in this, if I will not open you the windows of heaven.”" }
    ],
    traits: [
      { k: "strength", zh: "神的不改變是百姓沒有滅亡的原因", en: "God’s unchanging nature is why Jacob’s sons are not consumed" },
      { k: "weakness", zh: "「人豈可奪取神之物呢？」（3:8）", en: "“Will a man rob God?” (3:8)" }
    ],
    lesson: {
      zh: "「你們要轉向我，我就轉向你們」（3:7）和撒迦利亞書 1:3 是同一句話。這裡的具體例子是十分之一：尼希米記 13:10-12 記著利未人的分無人供給，供職的各自回田間去，猶大眾人後來才把十分之一送入庫房。",
      en: "“Return to me, and I will return to you” (3:7) is the same line as Zechariah 1:3. The concrete example here is the tithe: Nehemiah 13:10–12 records the Levites’ portions not being given so they went back to their fields, until all Judah brought the tithe to the storehouses."
    },
    quote: { ref: "3:10",
      zh: "以此試試我，是否為你們敞開天上的窗戶，傾福與你們",
      en: "if I will not open you the windows of heaven, and pour you out a blessing" },
    keyVerses: ["3:6", "3:7", "3:8", "3:9", "3:10", "3:11", "3:12"],
    intro: {
      zh: "3:6 是整卷書的支點：「因我─耶和華是不改變的，所以你們雅各之子沒有滅亡。」3:7：「現在你們要轉向我，我就轉向你們。你們卻問說：我們如何才是轉向呢？」回答是 3:8：「人豈可奪取神之物呢？你們竟奪取我的供物。……就是你們在當納的十分之一和當獻的供物上。」3:10：「你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。」3:11 說祂要斥責蝗蟲（和合本註：吞噬者）；3:12 說萬國必稱你們為有福的。3:10 是一般的原則，還是針對當時殿裡供應被拖欠的處境說的，注釋書看法不一。",
      en: "Verse 6 is the book’s pivot: “For I, Yahweh, don’t change; therefore you, sons of Jacob, are not consumed.” Verse 7: “Return to me, and I will return to you.” But you say, ‘How shall we return?’” The answer is 3:8: “Will a man rob God? Yet you rob me. But you say, ‘How have we robbed you?’ In tithes and offerings.” Verse 10: “Bring the whole tithe into the storehouse, that there may be food in my house, and test me now in this,” says Yahweh of Armies, “if I will not open you the windows of heaven, and pour you out a blessing, that there will not be room enough for.” Verse 11 says he will rebuke the devourer (the CUV note: locust); verse 12 says all nations will call you blessed. Whether 3:10 is a general principle or addressed to that setting of overdue supply for the temple, commentaries differ."
    },
    tip: {
      zh: "3:10 是一般原則，還是針對當時殿的供應被拖欠的處境，注釋書看法不一；上下文是祭司與殿的供應。",
      en: "Whether 3:10 is a general principle or addressed to that setting of overdue temple supply commentaries differ; the context is the priests and the support of the temple."
    },
    related: ["refiners_fire", "remembrance_scroll", "malachi", "levi_covenant"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "remembrance_scroll", book: "malachi", no: 10, kind: "other", type: "faith", rarity: 5,
    zh: "紀念冊", en: "The Book of Memory",
    tag: { zh: "敬畏耶和華的彼此談論，耶和華側耳而聽", en: "Those Who Feared Yahweh Spoke, and Yahweh Listened" },
    role: { zh: "對「事奉神是徒然的」的回答（3:13-18）", en: "The answer to “It is vain to serve God” (3:13–18)" },
    ch: [3],
    passages: ["3:13-18"],
    moves: [
      { zh: "事奉神是徒然的", en: "“It Is Vain to Serve God”", ref: "3:14-15",
        dzh: "你們說：事奉神是徒然的；如今我們稱狂傲的人為有福，行惡的人得建立。",
        den: "You say, “It is vain to serve God… Now we call the proud happy; those who work wickedness are built up.”" },
      { zh: "紀念冊", en: "A Book of Memory", ref: "3:16",
        dzh: "敬畏耶和華的彼此談論，耶和華側耳而聽，且有紀念冊記錄思念他名的人。",
        den: "Those who feared Yahweh spoke one with another; Yahweh listened and heard, and a book of memory was written for those who honored his name." }
    ],
    traits: [
      { k: "strength", zh: "神側耳聽小小的談話", en: "God leans in to hear a small conversation" },
      { k: "identity", zh: "「特特歸我」的子民（3:17）", en: "A people “my own possession” (3:17)" }
    ],
    lesson: {
      zh: "百姓的抱怨是真誠的：事奉神有甚麼益處？狂傲的人反而過得好（3:14-15）。答案不是理論，而是一個畫面：一小群敬畏耶和華的人彼此談論，耶和華側耳聽，並寫進紀念冊（3:16）。",
      en: "The people’s complaint is honest: what profit is there in serving God, when the proud seem to prosper (3:14–15)? The answer is not a theory but a picture: a small group who fear Yahweh speak together, Yahweh listens, and a book of memory is written (3:16)."
    },
    quote: { ref: "3:16",
      zh: "敬畏耶和華的彼此談論，耶和華側耳而聽，且有紀念冊在他面前",
      en: "Yahweh listened, and heard, and a book of memory was written before him" },
    keyVerses: ["3:13", "3:14", "3:15", "3:16", "3:17", "3:18"],
    intro: {
      zh: "3:13-15 是第六個爭辯：「你們用話頂撞我……你們說：事奉神是徒然的，遵守神所吩咐的……有甚麼益處呢？如今我們稱狂傲的人為有福，並且行惡的人得建立；他們雖然試探神，卻得脫離災難。」3:16 轉向另一群人：「那時，敬畏耶和華的彼此談論，耶和華側耳而聽，且有紀念冊在他面前，記錄那敬畏耶和華、思念他名的人。」3:17：「在我所定的日子，他們必屬我，特特歸我。我必憐恤他們，如同人憐恤服事自己的兒子。」3:18：那時你們必歸回，將善人和惡人，事奉神的和不事奉神的，分別出來。「紀念冊」的畫面，常見於波斯宮廷記錄功臣的習慣（參以斯帖記 6:1），這是背景說法，經文沒有這樣說。",
      en: "Verses 13–15 are the sixth dispute: “Your words have been stout against me… You have said, ‘It is vain to serve God;’ and ‘What profit is it that we have followed his instructions…? Now we call the proud happy; yes, those who work wickedness are built up; yes, they tempt God, and escape.’” Verse 16 turns to another group: “Then those who feared Yahweh spoke one with another; and Yahweh listened, and heard, and a book of memory was written before him, for those who feared Yahweh, and who honored his name.” Verse 17: “They shall be mine… in the day that I make, my own possession. I will spare them, as a man spares his own son who serves him.” Verse 18: then you shall return and discern between the righteous and the wicked, between him who serves God and him who doesn’t. The “book of memory” image resembles the Persian court’s practice of recording the deeds of benefactors (compare Esther 6:1); that is background, and the text does not say so."
    },
    tip: {
      zh: "「紀念冊」與波斯宮廷記錄功臣的習慣相似，是背景說法；經文只說有紀念冊在耶和華面前。",
      en: "The “book of memory” resembles the Persian court’s record of benefactors — a background note; the text only says a book of memory is before Yahweh."
    },
    related: ["tithe_test", "sun_of_righteousness", "malachi", "messenger_before_me"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "sun_of_righteousness", book: "malachi", no: 11, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "公義的日頭", en: "The Sun of Righteousness",
    tag: { zh: "其光線有醫治之能", en: "With Healing in Its Wings" },
    role: { zh: "那日臨近（4:1-3）", en: "The day that comes (4:1–3)" },
    ch: [4],
    passages: ["4:1-3"],
    moves: [
      { zh: "如燒著的火爐", en: "Burning Like a Furnace", ref: "4:1",
        dzh: "那日臨近，勢如燒著的火爐，凡狂傲的和行惡的必如碎秸。",
        den: "The day comes, it burns as a furnace; all the proud and all who work wickedness will be stubble." },
      { zh: "公義的日頭", en: "The Sun of Righteousness", ref: "4:2",
        dzh: "向你們敬畏我名的人必有公義的日頭出現，其光線有醫治之能。",
        den: "To you who fear my name the sun of righteousness will arise with healing in its wings." }
    ],
    traits: [
      { k: "strength", zh: "同一個日子，對兩種人是兩個結果", en: "One day, two outcomes for two kinds of people" },
      { k: "identity", zh: "「跳躍如圈裡的肥犢」（4:2）", en: "“Leap like calves of the stall” (4:2)" }
    ],
    lesson: {
      zh: "同一個「日子」，對狂傲的人是火爐，對敬畏耶和華名的人是日頭（4:1-2）。「日頭」帶來的不只是光，而是「醫治」；得釋放的人像圈裡的肥犢，跳躍著出來。",
      en: "The same “day” is a furnace to the proud and a sun to those who fear Yahweh’s name (4:1–2). The sun brings not only light but “healing”; those released are like calves from the stall, leaping out."
    },
    quote: { ref: "4:2",
      zh: "但向你們敬畏我名的人必有公義的日頭出現，其光線有醫治之能",
      en: "the sun of righteousness arise with healing in its wings" },
    keyVerses: ["4:1", "4:2", "4:3"],
    intro: {
      zh: "「萬軍之耶和華說：那日臨近，勢如燒著的火爐，凡狂傲的和行惡的必如碎秸，在那日必被燒盡，根本枝條一無存留。」（4:1）這是對 3:15 那些「稱狂傲的人為有福」的回答。接著是轉折：「但向你們敬畏我名的人必有公義的日頭出現，其光線（和合本註：原文是翅膀）有醫治之能。你們必出來跳躍如圈裡的肥犢。」（4:2）「翅膀」的畫面可能來自古近東常見的帶翅日輪。「日頭」是誰或是甚麼，注釋書有不同讀法（神的公義本身，或一位將來的人）；新約的作者如何使用，需看各處上下文。4:3：惡人必如灰塵在你們腳掌之下。",
      en: "“For, behold, the day comes, it burns as a furnace; and all the proud, and all who work wickedness, will be stubble; and the day that comes will burn them up,” says Yahweh of Armies, “that it shall leave them neither root nor branch” (4:1). It answers those in 3:15 who “call the proud happy.” Then the turn: “But to you who fear my name shall the sun of righteousness arise with healing in its wings. You will go out, and leap like calves of the stall” (4:2). The “wings” image may come from the winged sun-disk common in the ancient Near East. What or who the “sun” is commentaries read differently (God’s righteousness itself, or a future figure); how New Testament writers use it depends on each context. Verse 3: the wicked will be ashes under the soles of your feet."
    },
    tip: {
      zh: "「公義的日頭」指甚麼，注釋書有不同讀法；「翅膀」（和合本譯「光線」）的畫面可能來自古近東的帶翅日輪。",
      en: "What the “sun of righteousness” is, commentaries read differently; the “wings” (the CUV renders “rays”) may come from the ancient Near Eastern winged sun-disk."
    },
    related: ["remembrance_scroll", "elijah_hearts", "messenger_before_me", "malachi"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "elijah_hearts", book: "malachi", no: 12, kind: "other", type: "wisdom", rarity: 4,
    zh: "以利亞與父子的心", en: "Elijah and the Hearts of Fathers and Children",
    tag: { zh: "當記念摩西的律法", en: "Remember the Law of Moses" },
    role: { zh: "舊約的最後幾句（4:4-6）", en: "The last lines of the Old Testament (4:4–6)" },
    ch: [4],
    passages: ["4:4-6"],
    moves: [
      { zh: "記念摩西的律法", en: "Remember Moses’s Law", ref: "4:4",
        dzh: "你們當記念我僕人摩西的律法，就是我在何烈山為以色列眾人所吩咐他的。",
        den: "“Remember the law of Moses my servant, which I commanded to him in Horeb for all Israel.”" },
      { zh: "差遣先知以利亞", en: "I Will Send Elijah", ref: "4:5-6",
        dzh: "耶和華大而可畏之日未到以前，我必差遣先知以利亞；他必使父親的心轉向兒女。",
        den: "Before the great and terrible day of Yahweh comes, “I will send you Elijah the prophet”; he will turn the hearts of fathers to children." }
    ],
    traits: [
      { k: "strength", zh: "以回頭與和好作預備", en: "Prepares by turning back and reconciling" },
      { k: "identity", zh: "太 11:14、17:10-13；路 1:17", en: "Matt 11:14, 17:10–13; Luke 1:17" }
    ],
    lesson: {
      zh: "舊約以兩句話收結：記念摩西的律法（4:4），並等候以利亞（4:5-6）。馬太福音 11:14 說「這人就是那應當來的以利亞」，17:13 說門徒明白指的是施洗約翰；路加福音 1:17 說約翰「有以利亞的心志能力」。",
      en: "The Old Testament closes on two lines: remember the law of Moses (4:4) and wait for Elijah (4:5–6). Matthew 11:14 says “this is Elijah, who is to come,” 17:13 says the disciples understood he meant John the Baptist; Luke 1:17 says John will go “in the spirit and power of Elijah.”"
    },
    quote: { ref: "4:5",
      zh: "我必差遣先知以利亞到你們那裡去",
      en: "I will send you Elijah the prophet" },
    keyVerses: ["4:4", "4:5", "4:6"],
    intro: {
      zh: "全書和舊約的最後幾句：「你們當記念我僕人摩西的律法，就是我在何烈山為以色列眾人所吩咐他的律例典章。」（4:4）「看哪，耶和華大而可畏之日未到以前，我必差遣先知以利亞到你們那裡去。他必使父親的心轉向兒女，兒女的心轉向父親，免得我來咒詛遍地。」（4:5-6）以利亞是列王紀裡的先知，也沒有死而離去（王下 2 章）；這裡說他要在「大而可畏之日」之前再來。新約把這應許與施洗約翰連起來（太 11:14；17:10-13；路 1:17）。最後一句以「咒詛」結尾，有些猶太抄本的傳統在誦讀時會重複前一句，讓結尾不停在咒詛上。英文與中文聖經的 4:5-6，在希伯來文聖經是 3:23-24。",
      en: "The last lines of the book, and of the Old Testament: “Remember the law of Moses my servant, which I commanded to him in Horeb for all Israel, even statutes and ordinances” (4:4). “Behold, I will send you Elijah the prophet before the great and terrible day of Yahweh comes. He will turn the hearts of the fathers to the children, and the hearts of the children to their fathers, lest I come and strike the earth with a curse” (4:5–6). Elijah is the prophet of the Kings stories, who departed without dying (2 Kings 2); here he is to come again before “the great and terrible day.” The New Testament links this promise to John the Baptist (Matt 11:14; 17:10–13; Luke 1:17). The last word is “curse”; in some Jewish reading traditions the preceding line is repeated so the reading does not end on a curse. 4:5–6 in the Chinese and English Bibles is 3:23–24 in the Hebrew Bible."
    },
    tip: {
      zh: "「以利亞」是以利亞本人再來，還是有他心志能力的人（路 1:17），舊約經文本身沒有說明；新約的引用各有上下文。",
      en: "Whether “Elijah” means Elijah himself or one with his spirit and power (Luke 1:17), the Old Testament text does not say; each New Testament citation has its own context."
    },
    related: ["sun_of_righteousness", "messenger_before_me", "malachi", "tithe_test"]
  }

);
