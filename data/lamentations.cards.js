// 聖經人物卡 · 耶利米哀歌 (Lamentations) — book info + cards.
// Verse text comes from data/lamentations.text.js (和合本 + World English Bible, both public domain); `quote.zh` /
// `quote.en` are excerpts that scripts/validate.js checks against it. Lamentations has few "characters", so besides
// personified Zion and groups of people the set includes scenes and themes (the sanctuary, the mercies, the acrostic).

window.BOOKS.push({
  id: "lamentations",
  zh: "耶利米哀歌", en: "Lamentations", abbr: { zh: "哀", en: "Lam" },
  order: 25, section: { zh: "先知書", en: "Prophets" },
  chapters: 5,
  fan: ["sanctuary", "zion", "mercies"],
  summary: {
    zh: "耶路撒冷被巴比倫攻陷、聖殿被毀之後，詩人用五首悲歌為這座城哀哭：飢餓、羞辱、失去和罪，一樣一樣都不迴避。然而在最黑暗的地方，他說出「耶和華的慈愛每早晨都是新的」。書中沒有署名，傳統上歸於耶利米。",
    en: "After Babylon takes Jerusalem and destroys the temple, a poet mourns the city in five laments — hunger, shame, loss and sin, none of it avoided. Yet in the darkest place he says Yahweh’s mercies are “new every morning.” The book is anonymous; tradition attributes it to Jeremiah."
  },
  outline: [
    { zh: "孤城獨坐，無人安慰", en: "The city sits alone, with no one to comfort her" },
    { zh: "耶和華的怒氣傾倒在錫安", en: "Yahweh’s anger poured out on Zion" },
    { zh: "受苦的人與「每早晨都是新的」", en: "The afflicted man — “new every morning”" },
    { zh: "昔日的榮美，今日的荒涼", en: "Former glory, present ruin" },
    { zh: "求主記念，使我們回轉", en: "Remember us, Lord, and restore us" }
  ],
  notes: {
    zh: "小提示：第 1–4 章是「字母詩」，第 5 章不是；這在翻譯裡看不見。這是詩，不是敘事——語氣常在責備、哭訴與盼望之間轉換。第 2:20 和 4:10 描寫圍城中最駭人的饑荒情景，讀的時候請有心理準備。",
    en: "Good to know: chapters 1–4 are acrostic poems and chapter 5 is not, which translations don’t show. This is poetry, not narrative — the tone moves between accusation, lament and hope. Verses 2:20 and 4:10 describe the most horrifying scenes of the siege famine; read them prepared."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "zion", book: "lamentations", no: 1, kind: "person", type: "love", rarity: 6,
    zh: "錫安的女子", en: "Daughter Zion",
    alt: { zh: "耶路撒冷城（擬人）", en: "Jerusalem, personified" },
    tag: { zh: "獨坐哭泣的城", en: "The City That Sits Alone" },
    role: { zh: "被擬人化的耶路撒冷", en: "Jerusalem personified as a woman" },
    ch: [1, 2, 4, 5],
    names: ["錫安", "耶路撒冷"],
    enNames: ["Zion", "Jerusalem"],
    moves: [
      { zh: "「何竟獨坐！」", en: "“How She Sits Alone!”", ref: "1:1",
        dzh: "先前滿有人民的城，現在獨坐；先前在列國中為大，現在竟如寡婦。",
        den: "The city once full of people now sits alone; once great among the nations, she has become like a widow." },
      { zh: "無人安慰", en: "No One to Comfort", ref: "1:2",
        dzh: "她夜間痛哭，淚流滿腮；在一切所親愛的中間，沒有一個安慰她。",
        den: "She weeps bitterly in the night, tears on her cheeks; among all her lovers there is no one to comfort her." }
    ],
    traits: [
      { k: "strength", zh: "道出全城的哀痛", en: "Voices a whole city’s grief" },
      { k: "weakness", zh: "無人安慰", en: "No one to comfort her" }
    ],
    lesson: {
      zh: "把痛苦說出來，是哀歌教我們的第一步——而且是對神說：「耶和華啊，求你看我的苦難」（1:9）。",
      en: "Saying the pain out loud is Lamentations’ first lesson — and saying it to God: “Yahweh, see my affliction” (1:9)."
    },
    quote: { ref: "1:1",
      zh: "先前滿有人民的城，現在何竟獨坐！",
      en: "How the city sits solitary, that was full of people!" },
    keyVerses: ["1:1-2", "1:9", "1:16", "1:18"],
    intro: {
      zh: "「錫安的女子」是哀歌用來稱呼耶路撒冷城的擬人說法。第 1 章開頭，她像一個失去一切的寡婦：獨坐、流淚、沒有人安慰（1:1-2）。她一面承認自己的罪（1:18），一面向耶和華呼求：「求你看我的苦難」（1:9）。第 1 章後半（1:12-22），是她自己開口說話。",
      en: "“Daughter Zion” is Lamentations’ personification of the city of Jerusalem. At the start of chapter 1 she is like a widow who has lost everything: alone, weeping, with no one to comfort her (1:1–2). She admits her guilt (1:18) and cries to Yahweh, “See my affliction” (1:9). In the second half of the chapter (1:12–22) she speaks for herself."
    },
    tip: {
      zh: "「安慰」是第 1 章反覆出現的字眼（1:2, 9, 16, 17, 21）——整章都在說「沒有人安慰」。",
      en: "“Comfort” keeps coming back in chapter 1 (1:2, 9, 16, 17, 21) — the whole chapter is about having no one to comfort her."
    },
    related: ["sanctuary", "passersby", "children", "prayer"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "sanctuary", book: "lamentations", no: 2, kind: "other", type: "power", rarity: 3,
    zh: "荒涼的聖所", en: "The Ruined Sanctuary",
    tag: { zh: "被丟棄的祭壇", en: "The Altar Cast Off" },
    role: { zh: "耶路撒冷的聖殿", en: "The temple at Jerusalem" },
    ch: [1, 2, 4, 5],
    passages: ["1:10", "2:6-7", "4:1", "5:18"],
    moves: [
      { zh: "外邦人進了聖所", en: "Foreigners in the Sanctuary", ref: "1:10",
        dzh: "敵人伸手奪取她的美物；她眼見外邦人進入她的聖所。",
        den: "The enemy stretched out a hand over all her treasures; she saw the nations enter her sanctuary." },
      { zh: "丟棄自己的祭壇", en: "Yahweh Rejects His Altar", ref: "2:6-7",
        dzh: "耶和華使聖節和安息日在錫安被忘記，丟棄自己的祭壇，憎惡自己的聖所。",
        den: "Yahweh made festival and sabbath forgotten in Zion; he rejected his altar and spurned his sanctuary." }
    ],
    traits: [
      { k: "strength", zh: "曾是榮耀的所在", en: "Once the place of glory" },
      { k: "weakness", zh: "狐狸行走其上", en: "Foxes now walk on it" }
    ],
    lesson: {
      zh: "有神的殿，不等於有神的保護；哀歌承認：耶和華自己也可以丟棄祂的聖所（2:7）。",
      en: "Having God’s house is not the same as having God’s protection; Lamentations admits that Yahweh himself can cast off his sanctuary (2:7)."
    },
    quote: { ref: "2:7",
      zh: "耶和華丟棄自己的祭壇，憎惡自己的聖所",
      en: "The Lord has cast off his altar. He has abhorred his sanctuary." },
    keyVerses: ["1:10", "2:6-7", "4:1", "5:18"],
    intro: {
      zh: "哀歌多次提到聖所的毀壞：外邦人進入原本不可進入的聖會（1:10）、聖節和安息日被忘記（2:6）、祭壇被丟棄（2:7）、聖所的石頭倒在各市口上（4:1），錫安山荒涼、有狐狸行走（5:18）。這與耶利米書 52:13 記載聖殿被火焚燒互相對應。",
      en: "Lamentations returns again and again to the destruction of the sanctuary: foreigners entering an assembly they were forbidden to join (1:10), festival and sabbath forgotten (2:6), the altar rejected (2:7), the sanctuary’s stones lying at every street corner (4:1), and Mount Zion desolate, with foxes walking on it (5:18). It corresponds to Jeremiah 52:13, which records the temple burned with fire."
    },
    tip: {
      zh: "2:7 說「他們在耶和華的殿中喧嚷，像在聖會之日一樣」——敵人的喊叫，取代了原本敬拜的聲音。",
      en: "2:7 says “they have made a noise in Yahweh’s house, as in the day of a solemn assembly” — the enemy’s shouting replaces the sound of worship."
    },
    related: ["zion", "prayer", "passersby"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "passersby", book: "lamentations", no: 3, kind: "person", type: "scheme", rarity: 2,
    zh: "過路的人", en: "The Passersby",
    tag: { zh: "旁觀的人，嗤笑的人", en: "Onlookers Who Mocked" },
    role: { zh: "路過耶路撒冷的人", en: "Travelers passing the ruined city" },
    ch: [1, 2],
    passages: ["1:12", "2:15-16"],
    moves: [
      { zh: "「你們不介意嗎？」", en: "“Is It Nothing to You?”", ref: "1:12",
        dzh: "城向過路的人呼求：「這事你們不介意嗎？要觀看：有像我這樣的痛苦沒有？」",
        den: "The city cries to those who pass by: “Is it nothing to you? Look and see if there is any sorrow like my sorrow.”" },
      { zh: "拍掌、搖頭", en: "Clapping and Wagging Heads", ref: "2:15",
        dzh: "凡過路的都向她拍掌、嗤笑、搖頭，說：這就是人稱為全美的城嗎？",
        den: "All who pass by clap their hands, hiss and wag their heads: “Is this the city that was called the perfection of beauty?”" }
    ],
    traits: [
      { k: "strength", zh: "看熱鬧", en: "Quick to look on" },
      { k: "weakness", zh: "沒有同情", en: "No compassion" }
    ],
    lesson: {
      zh: "旁觀別人的災難，最容易變成嗤笑和事不關己；哀歌的第一個呼求，就是請過路的人停下來看。",
      en: "Watching other people’s disaster easily turns into mockery and indifference; Lamentations’ first plea is for the passersby to stop and look."
    },
    quote: { ref: "1:12",
      zh: "你們一切過路的人哪，這事你們不介意嗎？",
      en: "Is it nothing to you, all you who pass by?" },
    keyVerses: ["1:12", "2:15-16"],
    intro: {
      zh: "「過路的人」在哀歌出現兩次：1:12 是城向他們呼求，請他們停下來看她的痛苦；2:15 是他們向城拍掌、嗤笑、搖頭。兩處形成對比：求同情的人，遇到的卻是嘲笑。",
      en: "The “passersby” appear twice in Lamentations: in 1:12 the city begs them to stop and look at her pain; in 2:15 they clap, hiss and shake their heads at her. The two verses form a contrast: she asks for sympathy and meets mockery."
    },
    tip: {
      zh: "留意 2:16：嘲笑的人說「這真是我們所盼望的日子」——他們不只旁觀，還樂見其成。",
      en: "Note 2:16: the mockers say “this is the day we hoped for” — they are not just watching but glad it happened."
    },
    related: ["zion", "sanctuary", "edom"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "children", book: "lamentations", no: 4, kind: "person", type: "love", rarity: 3,
    zh: "孩童與嬰孩", en: "The Children and Infants",
    tag: { zh: "最小的最先受苦", en: "The Smallest Suffer First" },
    role: { zh: "圍城中飢餓的孩子", en: "Children in the starving city" },
    ch: [1, 2, 4, 5],
    passages: ["1:5", "2:11-12", "2:19", "4:4", "5:13"],
    moves: [
      { zh: "在街上發昏", en: "Fainting in the Streets", ref: "2:11-12",
        dzh: "孩童和吃奶的在城內街上發昏，在母親懷裡問：「穀、酒在哪裡呢？」",
        den: "Children and infants faint in the city streets; in their mothers’ arms they ask, “Where is the grain and wine?”" },
      { zh: "求餅，無人擘給", en: "No One Breaks the Bread", ref: "4:4",
        dzh: "吃奶孩子的舌頭因乾渴貼住上膛；孩童求餅，無人擘給他們。",
        den: "The nursing child’s tongue sticks to the roof of its mouth for thirst; the children ask for bread and no one breaks it for them." }
    ],
    traits: [
      { k: "strength", zh: "最弱小的見證", en: "The weakest witnesses" },
      { k: "weakness", zh: "飢餓與口渴", en: "Hunger and thirst" }
    ],
    lesson: {
      zh: "戰亂與饑荒，最先受害的往往是最小的；哀歌要百姓為他們的性命「向主舉手禱告」（2:19）。",
      en: "In war and famine the smallest are often hurt first; Lamentations tells the people to lift their hands to the Lord “for the lives of your young children” (2:19)."
    },
    quote: { ref: "4:4",
      zh: "吃奶孩子的舌頭因乾渴貼住上膛；孩童求餅，無人擘給他們",
      en: "The young children ask bread, and no one breaks it for them." },
    keyVerses: ["2:11-12", "2:19", "4:4", "5:13"],
    intro: {
      zh: "哀歌反覆把鏡頭拉到最小的孩子身上：他們在街上發昏（2:11-12）、渴得舌頭貼著上膛、求餅卻無人擘給（4:4）。詩人也吩咐百姓：為孩子們的性命向主舉手禱告（2:19）。孩童被擄（1:5）、孩童背木柴絆跌（5:13），也一併記在書中。",
      en: "Again and again Lamentations turns its eyes to the smallest children: they faint in the streets (2:11–12), their tongues stick to their mouths for thirst, and they ask for bread that no one breaks for them (4:4). The poet tells the people to lift their hands to the Lord for the children’s lives (2:19). Children carried off (1:5) and boys stumbling under loads of wood (5:13) are recorded too."
    },
    tip: {
      zh: "2:20 和 4:10 描寫圍城中最駭人的饑荒情景；讀的時候請有心理準備。",
      en: "2:20 and 4:10 describe the most horrifying scenes of the siege famine; please be prepared when you read them."
    },
    related: ["zion", "elders_young", "prayer"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "false_visions", book: "lamentations", no: 5, kind: "person", type: "scheme", rarity: 2,
    zh: "先知與祭司", en: "The Prophets and Priests",
    tag: { zh: "沒有顯露罪孽的先知", en: "Prophets Who Never Exposed Her Sin" },
    role: { zh: "耶路撒冷的宗教領袖", en: "Jerusalem’s religious leaders" },
    ch: [2, 4],
    passages: ["2:14", "4:13-15"],
    moves: [
      { zh: "虛假愚昧的異象", en: "False and Foolish Visions", ref: "2:14",
        dzh: "先知為你看見虛假愚昧的異象，沒有顯露你的罪孽，好使你被擄的人歸回。",
        den: "Your prophets saw false and foolish visions for you and did not uncover your iniquity to reverse your captivity." },
      { zh: "流義人的血", en: "Blood on Their Hands", ref: "4:13-14",
        dzh: "這都因先知的罪惡和祭司的罪孽：他們在城中流了義人的血，在街上如瞎子亂走。",
        den: "It was for the sins of her prophets and the iniquities of her priests, who shed the blood of the righteous in her midst, wandering blind in the streets." }
    ],
    traits: [
      { k: "strength", zh: "說得動聽", en: "Smooth talkers" },
      { k: "weakness", zh: "沒有顯露罪孽", en: "Never exposed the sin" }
    ],
    lesson: {
      zh: "只說安慰話、不說真話的人，哀歌說他們也有責任（2:14；4:13）；這和耶利米書 6:14、23:16 遙遙呼應。",
      en: "Those who offered only comfort and not truth share the blame, says Lamentations (2:14; 4:13) — an echo of Jeremiah 6:14 and 23:16."
    },
    quote: { ref: "2:14",
      zh: "你的先知為你見虛假和愚昧的異象，並沒有顯露你的罪孽",
      en: "Your prophets have seen false and foolish visions for you. They have not uncovered your iniquity" },
    keyVerses: ["2:14", "4:13-15"],
    intro: {
      zh: "耶路撒冷淪陷之後，詩人指出原因之一：她的先知看見虛假愚昧的異象，沒有指出百姓的罪（2:14）；先知與祭司的罪，也被點名（4:13）。這與耶利米書對假先知的指責互相呼應（耶 6:14；23:16）。",
      en: "After Jerusalem’s fall the poet names one cause: her prophets saw false and foolish visions and did not expose the people’s sin (2:14); the sins of prophets and priests are singled out (4:13). This matches Jeremiah’s charges against false prophets (Jer 6:14; 23:16)."
    },
    tip: {
      zh: "2:14 說先知「沒有顯露你的罪孽」——真先知的工作，包括說出不受歡迎的真話。",
      en: "2:14 says the prophets “did not uncover your iniquity” — a true prophet’s work includes saying the unwelcome truth."
    },
    related: ["zion", "sanctuary", "afflicted_man"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "afflicted_man", book: "lamentations", no: 6, kind: "person", type: "faith", rarity: 4,
    zh: "遭遇困苦的人", en: "The Man Who Has Seen Affliction",
    tag: { zh: "在黑暗中說話的人", en: "The Voice Speaking Out of the Dark" },
    role: { zh: "第 3 章的說話者", en: "The speaker of chapter 3" },
    ch: [3],
    passages: ["3:1-20"],
    moves: [
      { zh: "圍在黑暗中", en: "Walled In, in the Dark", ref: "3:6-9",
        dzh: "他說自己住在幽暗中、被圍住、銅鍊沉重，連哀號求救，禱告也「不得上達」。",
        den: "He says he lives in darkness, hedged in and in heavy chains, and that even when he cries for help his prayer is shut out." },
      { zh: "想起這事，就有指望", en: "Hope Returns", ref: "3:20-21",
        dzh: "他心裡憂悶，卻說：「我想起這事，心裡就有指望。」",
        den: "Troubled within, he says: “This I recall to my mind; therefore I have hope.”" }
    ],
    traits: [
      { k: "strength", zh: "誠實面對痛苦", en: "Honest about his pain" },
      { k: "weakness", zh: "覺得神與他為敵", en: "Feels God is against him" }
    ],
    lesson: {
      zh: "他沒有用漂亮的話掩蓋痛苦，卻在最黑暗的地方，轉身想起神的慈愛（3:21）。",
      en: "He doesn’t cover his pain with fine words, yet in the darkest place he turns and remembers God’s mercy (3:21)."
    },
    quote: { ref: "3:21",
      zh: "我想起這事，心裡就有指望。",
      en: "This I recall to my mind; therefore I have hope." },
    keyVerses: ["3:1-6", "3:7-9", "3:17-18", "3:19-21"],
    intro: {
      zh: "第 3 章的說話者以「我」的身份，自稱是「因耶和華忿怒的杖，遭遇困苦的人」（3:1）。他的描寫極其沉重：黑暗、圍牆、鍊子，又被當作箭靶（3:2-13）。到了 3:21 語氣忽然轉向：「我想起這事，心裡就有指望。」這個人是誰，經文沒有說——有人認為他代表耶路撒冷的百姓，也有人認為是詩人自己。",
      en: "The speaker of chapter 3 calls himself “the man who has seen affliction by the rod of his wrath” (3:1). His description is crushing: darkness, walls, chains, being made a target (3:2–13). At 3:21 the tone suddenly turns: “This I recall to my mind; therefore I have hope.” The text doesn’t say who he is — some see him as representing Jerusalem’s people, others as the poet himself."
    },
    tip: {
      zh: "第 3 章是「三倍字母詩」：每三節的開頭都用同一個希伯來字母，共 66 節（3×22）。",
      en: "Chapter 3 is a “triple acrostic”: every three verses begin with the same Hebrew letter, 66 verses in all (3 × 22)."
    },
    related: ["mercies", "zion", "prayer"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "mercies", book: "lamentations", no: 7, kind: "other", type: "heaven", rarity: 5,
    zh: "每早晨都是新的", en: "New Every Morning",
    tag: { zh: "慈愛不致斷絕", en: "Mercies That Do Not End" },
    role: { zh: "哀歌的轉捩點（3:21-33）", en: "The turning point of the book (3:21–33)" },
    ch: [3],
    passages: ["3:22-33"],
    moves: [
      { zh: "我們不致消滅", en: "We Are Not Consumed", ref: "3:22-23",
        dzh: "我們不致消滅，是出於耶和華的慈愛；祂的憐憫不致斷絕，每早晨都是新的。",
        den: "It is of Yahweh’s loving kindnesses that we are not consumed; his compassion doesn’t fail — they are new every morning." },
      { zh: "「耶和華是我的分」", en: "“Yahweh Is My Portion”", ref: "3:24-26",
        dzh: "我心裡說：耶和華是我的分，因此我要仰望他；靜默等候他的救恩，這原是好的。",
        den: "My soul says, “Yahweh is my portion,” so I will hope in him; it is good to wait quietly for his salvation." }
    ],
    traits: [
      { k: "strength", zh: "每天重新開始", en: "A fresh start each morning" },
      { k: "identity", zh: "哀歌中間的轉折", en: "The turning point of the book" }
    ],
    lesson: {
      zh: "慈愛不是沒有痛苦，而是痛苦之中仍然有祂的憐憫；「每早晨都是新的」（3:23）。",
      en: "Mercy is not the absence of pain but his compassion within it; “they are new every morning” (3:23)."
    },
    quote: { ref: "3:23",
      zh: "每早晨，這都是新的；你的誠實極其廣大！",
      en: "They are new every morning. Great is your faithfulness." },
    keyVerses: ["3:21-23", "3:24-26", "3:31-33"],
    intro: {
      zh: "第 3 章的中心是 3:21-24：在最黑暗的描寫之中，詩人忽然說「我想起這事，心裡就有指望」，並說出耶和華的慈愛與憐憫「每早晨都是新的」。這幾節廣為人知，但它們的力量來自前後文：前面是 3:1-20 的哀號，後面是 3:27-39 的等候與反省。",
      en: "The heart of chapter 3 is 3:21–24: in the middle of the darkest descriptions the poet suddenly says “this I recall to my mind; therefore I have hope,” and speaks of Yahweh’s love and compassion as “new every morning.” These verses are well known, but their force comes from the context: the cries of 3:1–20 before them and the waiting and self-examination of 3:27–39 after."
    },
    tip: {
      zh: "「慈愛」（希伯來文 hesed）和路得記的關鍵詞相同——可以和路得記對照著讀。",
      en: "“Loving kindness” (Hebrew hesed) is the same key word as in Ruth — read the two books side by side."
    },
    related: ["afflicted_man", "prayer", "zion"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "nazirites", book: "lamentations", no: 8, kind: "person", type: "wisdom", rarity: 2,
    zh: "錫安的貴冑", en: "Zion’s Nobles",
    tag: { zh: "從比雪純淨到比煤炭更黑", en: "From Purer Than Snow to Blacker Than Soot" },
    role: { zh: "昔日的貴冑（有譯本作「拿細耳人」）", en: "Once-noble young men (“Nazirites” in some translations)" },
    ch: [4],
    passages: ["4:7-8"],
    moves: [
      { zh: "比雪純淨", en: "Purer Than Snow", ref: "4:7",
        dzh: "錫安的貴冑素來比雪純淨，比奶更白；身體比紅寶玉更紅。",
        den: "Zion’s nobles were purer than snow and whiter than milk, their bodies ruddier than coral." },
      { zh: "比煤炭更黑", en: "Blacker Than Soot", ref: "4:8",
        dzh: "現在他們的面貌比煤炭更黑，在街上無人認識，皮膚緊貼骨頭。",
        den: "Now their faces are blacker than soot; no one knows them in the streets, and their skin clings to their bones." }
    ],
    traits: [
      { k: "strength", zh: "昔日的榮美", en: "Former splendor" },
      { k: "weakness", zh: "飢荒下面目全非", en: "Unrecognizable after famine" }
    ],
    lesson: {
      zh: "地位和外貌，在災難中都不是保障；哀歌提醒人，不要倚靠這些。",
      en: "Status and appearance are no protection in disaster; Lamentations warns us not to rely on them."
    },
    quote: { ref: "4:8",
      zh: "現在他們的面貌比煤炭更黑，以致在街上無人認識",
      en: "Their appearance is blacker than a coal. They are not known in the streets." },
    keyVerses: ["4:1-2", "4:5", "4:7-8"],
    intro: {
      zh: "4:7-8 用強烈的對比描寫錫安的貴冑：從前他們比雪純淨、比奶更白、像光潤的藍寶石；現在面貌比煤炭更黑，在街上無人認得。這個詞在英文 World English Bible 譯作「拿細耳人」（Nazirites），和合本譯作「貴冑」。",
      en: "4:7–8 paints a sharp contrast: once Zion’s nobles were purer than snow, whiter than milk, like polished sapphire; now their faces are blacker than soot and no one recognizes them in the streets. The Hebrew word is rendered “Nazirites” in the World English Bible and “nobles” in the 和合本."
    },
    tip: {
      zh: "4:1-2 先用金子、寶石作比喻，4:8 再說現在連面貌都無人認識——前後對比極強。",
      en: "4:1–2 first uses gold and jewels as images, then 4:8 says now no one even recognizes their faces — a very strong contrast."
    },
    related: ["elders_young", "zion", "children"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "edom", book: "lamentations", no: 9, kind: "person", type: "scheme", rarity: 2,
    zh: "以東的女子", en: "Daughter Edom",
    tag: { zh: "歡喜的鄰國，苦杯在等她", en: "The Gloating Neighbor — the Cup Is Coming" },
    role: { zh: "猶大的鄰國以東", en: "Judah’s neighbor Edom" },
    ch: [4],
    passages: ["4:21-22"],
    moves: [
      { zh: "「只管歡喜快樂」", en: "“Rejoice and Be Glad”", ref: "4:21",
        dzh: "住烏斯地的以東民哪，只管歡喜快樂；苦杯也必傳到你那裡。",
        den: "Rejoice and be glad, Edom, you who live in the land of Uz — the cup will pass to you too." },
      { zh: "刑罰有盡頭", en: "A Limit to the Punishment", ref: "4:22",
        dzh: "對錫安說：你罪孽的刑罰受足了，不再被擄；對以東說：祂必追討你的罪孽。",
        den: "To Zion: your punishment is complete and you will not be exiled again; to Edom: he will visit your iniquity." }
    ],
    traits: [
      { k: "strength", zh: "站在安全的高處", en: "Watching from a safe height" },
      { k: "weakness", zh: "苦杯將傳到她那裡", en: "The cup is coming to her" }
    ],
    lesson: {
      zh: "在別人的災難上歡喜的，不要以為自己不會輪到；而對受苦的人，這裡有一個應許：刑罰有盡頭（4:22）。",
      en: "Those who gloat over another’s disaster should not assume their turn will not come; and for the sufferer there is a promise here: the punishment has an end (4:22)."
    },
    quote: { ref: "4:22",
      zh: "錫安的民哪，你罪孽的刑罰受足了，耶和華必不使你再被擄去",
      en: "The punishment of your iniquity is accomplished, daughter of Zion. He will no more carry you away into captivity." },
    keyVerses: ["4:21-22"],
    intro: {
      zh: "以東是猶大的鄰國。4:21 帶著諷刺說「只管歡喜快樂」，緊接著說「苦杯也必傳到你那裡」；4:22 把兩個命運並列：錫安的刑罰有盡頭，不再被擄；以東的罪卻要被追討。聖經另有專論以東的俄巴底亞書。",
      en: "Edom was Judah’s neighbor. 4:21 says ironically “rejoice and be glad,” and at once adds “the cup will pass to you also”; 4:22 sets the two fates side by side: Zion’s punishment is over and she will not be exiled again, while Edom’s sin will be dealt with. The Bible also has a whole book on Edom, Obadiah."
    },
    tip: {
      zh: "留意 4:22 的轉向：全卷到這裡，第一次出現「刑罰受足了」的宣告——哀歌的結尾因此不全是黑暗。",
      en: "Note the turn in 4:22: for the first time the book declares that the punishment is complete — so the ending is not wholly dark."
    },
    related: ["zion", "passersby"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "elders_young", book: "lamentations", no: 10, kind: "person", type: "harvest", rarity: 1,
    zh: "長老與少年人", en: "The Elders and the Young",
    tag: { zh: "城門口不再有人", en: "No One Left at the Gate" },
    role: { zh: "城中的老年人和少年人", en: "The city’s old and young" },
    ch: [2, 5],
    passages: ["2:10", "5:12-14"],
    moves: [
      { zh: "默默無聲", en: "Silent in the Dust", ref: "2:10",
        dzh: "錫安城的長老坐在地上默默無聲，把塵土撒在頭上，腰束麻布。",
        den: "The elders of Zion sit on the ground in silence, throw dust on their heads and wear sackcloth." },
      { zh: "少年人扛磨石", en: "Boys Under Heavy Loads", ref: "5:13-14",
        dzh: "少年人扛磨石，孩童背木柴，都絆跌了；老年人不再坐城門，少年人不再作樂。",
        den: "Young men carry the grinding stones and boys stagger under loads of wood; the elders have left the gate, the young men their music." }
    ],
    traits: [
      { k: "strength", zh: "老少同在", en: "Old and young together" },
      { k: "weakness", zh: "失去了尊榮", en: "Lost their dignity" }
    ],
    lesson: {
      zh: "一個社會的崩潰，是老年人失去尊榮、少年人失去喜樂；哀歌把這些都記了下來。",
      en: "A society breaking down looks like elders losing their honor and the young losing their joy; Lamentations records it all."
    },
    quote: { ref: "5:14",
      zh: "老年人在城門口斷絕；少年人不再作樂",
      en: "The elders have ceased from the gate, and the young men from their music." },
    keyVerses: ["2:10", "5:12-14"],
    intro: {
      zh: "哀歌描寫城中每個年齡的人：長老坐在地上默然無聲（2:10）；少年人扛磨石、孩童背木柴，都絆跌了（5:13）；老年人不再坐在城門口，少年人不再作樂（5:14）。",
      en: "Lamentations shows every age in the city: the elders sit silently on the ground (2:10); young men carry grinding stones and boys stumble under wood (5:13); the elders no longer sit at the gate and the young no longer make music (5:14)."
    },
    tip: {
      zh: "「城門口」是古代城市裁決和聚談的地方（參得 4:1-2）；老人離開城門，是公共生活的崩潰。",
      en: "The city gate was where decisions were made and people met (compare Ruth 4:1–2); the elders leaving it marks the collapse of public life."
    },
    related: ["children", "nazirites", "zion"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "prayer", book: "lamentations", no: 11, kind: "other", type: "faith", rarity: 4,
    zh: "最後的禱告", en: "The Closing Prayer",
    tag: { zh: "求主記念，使我們回轉", en: "Remember Us — Turn Us Back" },
    role: { zh: "第 5 章：全體百姓的禱告", en: "Chapter 5: the whole community’s prayer" },
    ch: [5],
    passages: ["5:1", "5:19-22"],
    moves: [
      { zh: "「求你記念我們」", en: "“Remember Us”", ref: "5:1",
        dzh: "耶和華啊，求你記念我們所遭遇的事，觀看我們所受的凌辱。",
        den: "Yahweh, remember what has come on us; look and see our disgrace." },
      { zh: "「使我們向你回轉」", en: "“Turn Us to Yourself”", ref: "5:21",
        dzh: "求你使我們向你回轉，我們便得回轉；求你復新我們的日子，像古時一樣。",
        den: "Turn us to yourself, Yahweh, and we will be turned; renew our days as of old." }
    ],
    traits: [
      { k: "strength", zh: "把一切交給神", en: "Brings everything to God" },
      { k: "weakness", zh: "結尾沒有答案", en: "Ends without an answer" }
    ],
    lesson: {
      zh: "哀歌的結尾沒有圓滿的答案，卻仍然轉向神：禱告，就是在還沒有答案的時候說話。",
      en: "Lamentations ends without a neat answer, yet still turns to God: prayer is speaking when the answer hasn’t come."
    },
    quote: { ref: "5:21",
      zh: "求你使我們向你回轉，我們便得回轉。求你復新我們的日子，像古時一樣。",
      en: "Turn us to yourself, Yahweh, and we will be turned. Renew our days as of old." },
    keyVerses: ["5:1-3", "5:19-20", "5:21-22"],
    intro: {
      zh: "第 5 章是整卷的結尾：一篇全體百姓的禱告。它從「求你記念」開始（5:1），述說產業歸了外人、孤兒寡婦、出錢才得水喝（5:2-4），承認「我們犯罪了」（5:16），最後求主使他們回轉、復新日子（5:21）。結尾卻是一個問句：「你竟全然棄絕我們嗎？」（5:22）",
      en: "Chapter 5 closes the book as a prayer of the whole community. It begins with “remember” (5:1), describes inheritance handed to strangers, orphans and widows, and paying for water (5:2–4), confesses “we have sinned” (5:16), and finally asks to be turned back and renewed (5:21). It ends on a question: “Have you utterly rejected us?” (5:22)"
    },
    tip: {
      zh: "猶太人公開誦讀這卷書時，有重複 5:21 作結的傳統（這是後來的習慣，不在經文裡），好讓人不是以疑問收場。",
      en: "In public readings Jews traditionally repeat 5:21 at the end (a later custom, not part of the text) so the book does not close on the question."
    },
    related: ["zion", "mercies", "afflicted_man"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "acrostic", book: "lamentations", no: 12, kind: "other", type: "wisdom", rarity: 3,
    zh: "字母詩", en: "An Alphabet of Grief",
    tag: { zh: "給悲傷一個秩序", en: "Giving Grief an Order" },
    role: { zh: "全卷的詩體結構", en: "The poetic structure of the whole book" },
    ch: [1, 2, 3, 4, 5],
    passages: ["1:1-22", "2:1-22", "3:1-66", "4:1-22", "5:1-22"],
    moves: [
      { zh: "二十二節，二十二個字母", en: "Twenty-Two Letters", ref: "1:1",
        dzh: "第 1、2、4 章各 22 節，每節依希伯來字母順序開頭；第 3 章每三節同一字母，共 66 節。",
        den: "Chapters 1, 2 and 4 have 22 verses each, each starting with the next Hebrew letter; chapter 3 gives each letter three verses — 66 in all." },
      { zh: "第 5 章沒有字母", en: "No Alphabet at the End", ref: "5:1",
        dzh: "第 5 章也是 22 節，卻不再按字母排列——像是悲痛到了盡頭，連詩的秩序也鬆開了。",
        den: "Chapter 5 also has 22 verses but drops the alphabet — as if grief at its end loosens even the poem’s order." }
    ],
    traits: [
      { k: "strength", zh: "給悲傷一個容器", en: "Gives grief a container" },
      { k: "weakness", zh: "翻譯裡看不見", en: "Invisible in translation" }
    ],
    lesson: {
      zh: "有人認為，字母詩的格式讓悲痛有個「從頭到尾」的容器：能把話說完，而不被淹沒。",
      en: "Some think the acrostic form gives grief a container with a beginning and an end: you can say it all without being swallowed by it."
    },
    quote: { ref: "3:1",
      zh: "我是因耶和華忿怒的杖，遭遇困苦的人。",
      en: "I am the man who has seen affliction by the rod of his wrath." },
    keyVerses: ["1:1", "2:1", "3:1-3", "4:1", "5:1"],
    intro: {
      zh: "哀歌是以詩寫成的。第 1、2、4 章各 22 節，每節的第一個字母依希伯來字母表的順序排列（「字母詩」）；第 3 章每三節用同一字母，共 66 節；第 5 章也是 22 節，卻不再按字母排列。這些在中文和英文翻譯裡都看不出來，卻是這卷書的骨架。",
      en: "Lamentations is poetry. Chapters 1, 2 and 4 have 22 verses each, with the first letters following the Hebrew alphabet (“acrostics”); chapter 3 uses each letter for three verses, 66 in all; chapter 5 also has 22 verses but is not alphabetical. None of this shows in Chinese or English translation, yet it is the book’s skeleton."
    },
    tip: {
      zh: "留意 3:1-3 這三節：在希伯來文裡，它們都以同一個字母（aleph）開頭。",
      en: "Look at 3:1–3: in Hebrew all three begin with the same letter (aleph)."
    },
    related: ["afflicted_man", "zion", "prayer"]
  }
);
