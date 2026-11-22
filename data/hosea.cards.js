// 聖經人物卡 · 何西阿書 (Hosea) — book info + cards.
// Verse text comes from data/hosea.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Num 13:16, Deut 29:23, Josh 7:24-26,
// 1 Kings 12:28-29, Exod 21:32, Jer 4:3, Matt 2:15, 9:13, 12:7, Rom 9:25-26, 1 Cor 15:54-55) were checked against the
// 和合本 text and appear in prose only. Where the 和合本 and the World English Bible read a verse differently
// (6:6 “良善／憐恤”, 13:14, 13:2) the card says so.

window.BOOKS.push({
  id: "hosea",
  zh: "何西阿書", en: "Hosea", abbr: { zh: "何", en: "Hos" },
  order: 28, section: { zh: "先知書", en: "Prophets" },
  chapters: 14,
  fan: ["gomer", "hosea", "father_heart"],
  summary: {
    zh: "何西阿是北國以色列的先知。神吩咐他娶歌篾為妻、為孩子起特別的名字，又吩咐他把離開的妻子買回來——用他自己的家，說出神與以色列的關係：百姓離棄祂去拜巴力，祂卻仍要「聘」她永遠歸己（2:19）。書中有嚴厲的審判（無知識、牛犢、種風收暴風），也有父親般的心腸（11 章），最後以悔改的邀請和如甘露的醫治作結（14 章）。",
    en: "Hosea prophesies to the northern kingdom of Israel. God tells him to marry Gomer, to give his children striking names, and to buy back a wife who has left — using his own household to show how Yahweh stands with Israel: they have forsaken him for Baal, yet he will “betroth” her to himself forever (2:19). The book holds stern judgment (no knowledge of God, the calf, sowing the wind), a father’s heart (ch 11), and ends with an invitation to return and healing like dew (ch 14)."
  },
  outline: [
    { zh: "何西阿的婚姻與三個孩子的名字", en: "Hosea’s marriage and his three children’s names" },
    { zh: "神的控訴與復合的應許", en: "Yahweh’s charge and the promise of restoration" },
    { zh: "買回妻子；以色列要多日獨居", en: "Buying back the wife; Israel to wait many days" },
    { zh: "神與這地的居民爭辯：無人認識神", en: "Yahweh’s case against the land: no knowledge of God" },
    { zh: "祭司、王家與以法蓮的罪", en: "Priests, royal house and Ephraim’s guilt" },
    { zh: "「來吧，我們歸向耶和華」與「我喜愛良善」", en: "“Come, let us return” and “I desire mercy”" },
    { zh: "沒有翻過的餅，愚蠢的鴿子", en: "The unturned cake and the silly dove" },
    { zh: "吹角：種的是風，收的是暴風", en: "Sound the trumpet: sow the wind, reap the whirlwind" },
    { zh: "流亡的警告", en: "A warning of exile" },
    { zh: "茂盛的葡萄樹；開墾荒地", en: "The luxuriant vine; break up the fallow ground" },
    { zh: "以色列年幼的時候，我愛他", en: "When Israel was a child, I loved him" },
    { zh: "雅各的往事與以法蓮的詭詐", en: "Jacob’s story and Ephraim’s deceit" },
    { zh: "如早晨的雲霧；救贖脫離陰間", en: "Like the morning mist; ransom from Sheol" },
    { zh: "歸向耶和華；如甘露的醫治", en: "Return to Yahweh; healing like dew" }
  ],
  notes: {
    zh: "小提示：何西阿書的比喻很集中——婚姻、孩子、葡萄樹、甘露。先抓住「神的愛與以色列的不忠」這條線；書中常用「以法蓮」指整個北國以色列。審判與安慰常常在同一章交錯出現，不必覺得突兀。",
    en: "Good to know: the book’s images are tightly clustered — marriage, children, vines, dew. Follow the thread of God’s love and Israel’s unfaithfulness; “Ephraim” often stands for the whole northern kingdom. Judgment and comfort often alternate within one chapter, so don’t be surprised by the swings."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "hosea", book: "hosea", no: 1, kind: "person", type: "love", rarity: 6,
    zh: "何西阿", en: "Hosea",
    meaning: { zh: "「拯救」", en: "“Salvation”" },
    tag: { zh: "用自己的家說神的愛", en: "He Lived God’s Love in His Own Home" },
    role: { zh: "備利的兒子・北國的先知", en: "Prophet to the north, son of Beeri" },
    ch: [1, 2, 3],
    passages: ["1:1-3", "3:1-5"],
    moves: [
      { zh: "去娶歌篾", en: "Go, Take a Wife", ref: "1:2-3",
        dzh: "神吩咐他去娶淫婦為妻，因為這地離棄了耶和華；他就娶了滴拉音的女兒歌篾。",
        den: "God told him to take a wife of prostitution, for the land had forsaken Yahweh; he married Gomer, daughter of Diblaim." },
      { zh: "再去愛她", en: "Go Again, Love Her", ref: "3:1-2",
        dzh: "神又說「你再去愛」；他用十五舍客勒銀子和大麥買她歸他。",
        den: "God said, “Go again, love her”; he bought her for fifteen pieces of silver and a homer and a half of barley." }
    ],
    traits: [
      { k: "strength", zh: "愛，不放手", en: "Loves without letting go" },
      { k: "identity", zh: "在傷痛裡傳神的話", en: "Speaks God’s word from his own pain" }
    ],
    lesson: {
      zh: "神的愛不只是感覺，更是持續的委身；何西阿的家，讓人看見被背棄的愛仍然去尋回。",
      en: "God’s love is not only a feeling but a lasting commitment; Hosea’s home shows a love that is betrayed and still goes to bring someone back."
    },
    quote: { ref: "3:1",
      zh: "你再去愛一個淫婦",
      en: "Go again, love a woman loved by another, and an adulteress" },
    keyVerses: ["1:1-3", "3:1-3", "14:1-2"],
    intro: {
      zh: "何西阿是備利的兒子；書首列出的王名（猶大的烏西雅、約坦、亞哈斯、希西家，以色列的耶羅波安）顯示他事奉的年日很長（1:1），書中多數時候是向北國（以色列、以法蓮、撒馬利亞）說話。耶和華「初次」與他說話，就吩咐他娶淫婦為妻、收淫亂所生的兒女，因為「這地大行淫亂，離棄耶和華」（1:2）；後來又吩咐他再去愛一個淫婦，並買她歸己（3:1-2）。他的家成了全國的活比喻。對 1:2 的命令，有人按字面理解為真實的婚姻，有人視為異象或象徵；但不論怎樣讀，全書都把他的家當作神與以色列關係的鏡子。",
      en: "Hosea was the son of Beeri; the kings named at the start — Uzziah, Jotham, Ahaz and Hezekiah of Judah, Jeroboam of Israel — suggest a long ministry (1:1), and most of the book speaks to the northern kingdom (Israel, Ephraim, Samaria). Yahweh’s first word to him was to take a wife of prostitution and children of unfaithfulness, “for the land commits great adultery, forsaking Yahweh” (1:2); later he is told to love an adulteress again and buy her for himself (3:1–2). His household becomes a living parable for the whole nation. Whether the command in 1:2 describes a literal marriage, a vision or a symbol is debated, but however it is read the book treats his home as a mirror of God and Israel."
    },
    tip: {
      zh: "「何西阿」就是民數記 13:16 裡，摩西改名為約書亞之前的名字，意思是「拯救」。",
      en: "“Hosea” is the name Moses changed to Joshua in Numbers 13:16; it means “salvation.”"
    },
    related: ["gomer", "hosea_children", "redemption", "father_heart", "dew"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "gomer", book: "hosea", no: 2, kind: "person", type: "love", rarity: 4,
    zh: "歌篾", en: "Gomer",
    tag: { zh: "離開又被尋回的妻子", en: "The Wife Who Left and Was Sought" },
    role: { zh: "滴拉音的女兒・何西阿的妻子", en: "Daughter of Diblaim, Hosea’s wife" },
    ch: [1, 2, 3],
    names: ["歌篾"],
    enNames: ["Gomer"],
    moves: [
      { zh: "滴拉音的女兒", en: "Daughter of Diblaim", ref: "1:3-9",
        dzh: "何西阿娶了她；她生了一個兒子、一個女兒，後來又生了一個兒子。",
        den: "Hosea married her; she bore a son, then a daughter, and later another son." },
      { zh: "被買回的女子", en: "The Woman Bought Back", ref: "3:1-3",
        dzh: "第 3 章那個被用銀子和大麥買回的女子，不少人認為就是歌篾，經文沒有點名。",
        den: "The woman bought back with silver and barley in ch 3 is often thought to be Gomer; the text does not name her." }
    ],
    traits: [
      { k: "identity", zh: "神與以色列故事的縮影", en: "Israel’s story in miniature" },
      { k: "weakness", zh: "追逐別的愛人（第 2 章）", en: "Chasing other lovers (ch 2)" }
    ],
    lesson: {
      zh: "不論歌篾本人的細節如何，這個畫面要說的是：神的百姓離開祂，祂仍然回頭去尋找（2:14；3:1）。",
      en: "Whatever the details of Gomer’s own story, the picture says: when God’s people leave him, he still turns back to look for them (2:14; 3:1)."
    },
    quote: { ref: "1:3",
      zh: "何西阿去娶了滴拉音的女兒歌篾",
      en: "So he went and took Gomer the daughter of Diblaim" },
    keyVerses: ["1:2-3", "2:5-7", "2:14-15", "3:1-3"],
    intro: {
      zh: "歌篾是滴拉音的女兒，何西阿所娶的妻子（1:3）。第 2 章裡，「你們的母親」離開丈夫，說：「我要隨從所愛的；我的餅、水、羊毛、麻、油、酒都是他們給的」（2:5），神卻要「勸導她，領她到曠野」（2:14），又要再聘她（2:19）；第 3 章則有一個被買回的女子（3:1-3）。這些畫面把何西阿的家與神和以色列的關係交織在一起；經文沒有描寫歌篾自己的想法和感受，不要替她加上太多細節。",
      en: "Gomer, daughter of Diblaim, is the wife Hosea marries (1:3). In chapter 2 “your mother” leaves her husband and says, “I will go after my lovers, who give me my bread and my water, my wool and my flax, my oil and my drink” (2:5), yet God will “allure her” into the wilderness (2:14) and betroth her again (2:19); chapter 3 shows a woman bought back (3:1–3). These scenes interweave Hosea’s home with God’s relationship to Israel; the text never describes Gomer’s own thoughts or feelings, so avoid adding too many details for her."
    },
    tip: {
      zh: "「歌篾」在經文裡只出現一次（1:3）；第 2、3 章的畫面是否特指她，經文沒有點名，要小心。",
      en: "“Gomer” appears by name only once (1:3); whether the pictures in chapters 2 and 3 refer to her specifically is not stated, so read with care."
    },
    related: ["hosea", "hosea_children", "redemption", "betrothal"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "hosea_children", book: "hosea", no: 3, kind: "person", type: "vision", rarity: 3,
    zh: "三個孩子的名字", en: "The Three Children’s Names",
    tag: { zh: "名字本身就是信息", en: "Names That Preach" },
    role: { zh: "耶斯列、羅‧路哈瑪、羅‧阿米", en: "Jezreel, Lo-Ruhamah, Lo-Ammi" },
    ch: [1, 2],
    names: ["耶斯列", "羅‧路哈瑪", "羅‧阿米"],
    enNames: ["Jezreel", "Lo-Ruhamah", "Lo-Ammi"],
    moves: [
      { zh: "耶斯列", en: "Jezreel", ref: "1:4-5",
        dzh: "長子叫耶斯列：神要討耶戶家在耶斯列流血的罪，並折斷以色列的弓。",
        den: "The firstborn, Jezreel: God will avenge the blood of Jezreel on the house of Jehu and break the bow of Israel." },
      { zh: "不蒙憐憫、非我民", en: "No Mercy, Not My People", ref: "1:6-9",
        dzh: "女兒叫「不蒙憐憫」，小兒子叫「非我民」——名字宣告神要收回憐憫和關係。",
        den: "The daughter “No Mercy” and the youngest son “Not My People” announce God withdrawing mercy and relationship." }
    ],
    traits: [
      { k: "identity", zh: "名字就是信息", en: "Their names are the message" },
      { k: "strength", zh: "名字終必翻轉", en: "Names that get reversed" }
    ],
    lesson: {
      zh: "神不是永遠說「不」：同樣這幾個名字，後來都變成「你們是永生神的兒子」「蒙憐憫」（1:10；2:1、23）。",
      en: "God does not say “no” forever: these same names are later turned into “sons of the living God” and “shown mercy” (1:10; 2:1, 23)."
    },
    quote: { ref: "2:23",
      zh: "素不蒙憐憫的，我必憐憫；本非我民的，我必對他說：你是我的民",
      en: "I will have mercy on her who had not obtained mercy; and I will tell those who were not my people, ‘You are my people;’" },
    keyVerses: ["1:4-5", "1:6-9", "1:10", "2:1", "2:22-23"],
    intro: {
      zh: "何西阿的三個孩子，名字本身就是神的信息（1:4-9）。長子耶斯列（「神栽種」，2:22 注明）：神要討耶戶家在耶斯列流血的罪，並在耶斯列平原折斷以色列的弓（1:4-5）。女兒羅‧路哈瑪（「不蒙憐憫」）：神不再憐憫以色列家（1:6）。幼子羅‧阿米（「非我民」）：「你們不作我的子民，我也不作你們的神」（1:9）。但緊接著就有轉機：「你們是永生神的兒子」（1:10），人要改稱他們「阿米」「路哈瑪」（2:1）。保羅和彼得後來都引用這些話，說明神向外邦人施憐憫（羅 9:25-26；彼前 2:10）。",
      en: "Hosea’s three children carry God’s message in their very names (1:4–9). The firstborn, Jezreel (“God sows,” per 2:22): God will avenge the blood of Jezreel on the house of Jehu and break Israel’s bow in the valley of Jezreel (1:4–5). The daughter, Lo-Ruhamah (“no mercy”): God will no longer have mercy on the house of Israel (1:6). The youngest, Lo-Ammi (“not my people”): “you are not my people, and I will not be yours” (1:9). Then comes the turn: “sons of the living God” (1:10), and people are to call them “My people” and “My loved one” (2:1). Paul and Peter later use these words of God’s mercy to the nations (Rom 9:25–26; 1 Pet 2:10)."
    },
    tip: {
      zh: "「羅」是「不」的意思：羅‧路哈瑪＝「不蒙憐憫」，羅‧阿米＝「非我民」；去掉「羅」就是「路哈瑪」「阿米」（2:1）。",
      en: "“Lo” means “not”: drop it and Lo-Ruhamah and Lo-Ammi become Ruhamah (“shown mercy”) and Ammi (“my people”) — see 2:1."
    },
    related: ["gomer", "hosea", "wilderness_courtship", "betrothal"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "wilderness_courtship", book: "hosea", no: 4, kind: "other", type: "harvest", rarity: 3,
    zh: "曠野裡的安慰話", en: "Tender Words in the Wilderness",
    tag: { zh: "亞割谷，成為指望的門", en: "The Valley of Achor, a Door of Hope" },
    role: { zh: "神要重新挽回以色列", en: "God wins Israel back" },
    ch: [2],
    passages: ["2:14-15"],
    moves: [
      { zh: "領她到曠野", en: "Into the Wilderness", ref: "2:14",
        dzh: "神說：我要勸導她，領她到曠野，在那裡對她說安慰的話。",
        den: "God says: I will allure her, bring her into the wilderness, and speak tenderly to her." },
      { zh: "指望的門", en: "A Door of Hope", ref: "2:15",
        dzh: "賜她葡萄園，又賜亞割谷作指望的門；她要像出埃及的日子那樣回應。",
        den: "Vineyards, and the Valley of Achor as a door of hope; she will answer as in the days when she came out of Egypt." }
    ],
    traits: [
      { k: "identity", zh: "憂患之谷變成指望", en: "Trouble turned into hope" },
      { k: "strength", zh: "像一次新的出埃及", en: "A kind of new exodus" }
    ],
    lesson: {
      zh: "神挽回的方式是勸導、是安慰，也是重新開始；連最苦的地方，祂也能變成指望的門。",
      en: "God wins people back by allurement and comfort and a fresh start; even the bitterest place can become a door of hope."
    },
    quote: { ref: "2:14",
      zh: "我必勸導她，領她到曠野，對她說安慰的話",
      en: "I will allure her, and bring her into the wilderness, and speak tenderly to her." },
    keyVerses: ["2:6-7", "2:14-15", "2:16-17"],
    intro: {
      zh: "第 2 章先是控訴：以色列「隨從所愛的」，以為五穀、新酒、油都是別的愛人給的，卻不知道是神賜的（2:5, 8）。神要用荊棘堵她的道（2:6），收回祂的賞賜（2:9）。但接著是轉折：「後來我必勸導她，領她到曠野，對她說安慰的話」（2:14）。曠野讓人想起出埃及之後的日子；神要在那裡賜她葡萄園，又把亞割谷變成「指望的門」（2:15）。",
      en: "Chapter 2 begins with an accusation: Israel runs after her lovers, thinking they give her grain, wine and oil, and does not know it was God who gave them (2:5, 8). God will block her way with thorns (2:6) and take back his gifts (2:9). Then comes the turn: “I will allure her, and bring her into the wilderness, and speak tenderly to her” (2:14). The wilderness recalls the days after the exodus; there God will give her vineyards and make the Valley of Achor “a door of hope” (2:15)."
    },
    tip: {
      zh: "「亞割」的意思是「連累」（書 7:26）——亞干被石頭打死的地方；神說這憂患之地要變成指望的門。",
      en: "“Achor” means “trouble” (Josh 7:26) — the place where Achan was stoned; God says that valley of trouble will become a door of hope."
    },
    related: ["betrothal", "gomer", "hosea_children", "dew"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "betrothal", book: "hosea", no: 5, kind: "other", type: "love", rarity: 4,
    zh: "永遠的聘禮", en: "The Forever Betrothal",
    tag: { zh: "聘你歸我：五樣聘禮", en: "Betrothed Forever: Five Gifts" },
    role: { zh: "神與以色列的新婚約", en: "God’s new covenant of love with Israel" },
    ch: [2],
    passages: ["2:16-20"],
    moves: [
      { zh: "永遠歸我為妻", en: "Mine Forever", ref: "2:19",
        dzh: "「我必聘你永遠歸我為妻」——聘禮是仁義、公平、慈愛、憐憫。",
        den: "“I will betroth you to me forever” — with righteousness, justice, loving kindness and compassion." },
      { zh: "伊施，不是巴力", en: "“My Husband,” Not “My Baal”", ref: "2:16",
        dzh: "那日她要稱神為「伊施」（我夫），不再稱「巴力」（我主）。",
        den: "On that day she will call him “my husband” and no more call him “my Baal” (“my master”)." }
    ],
    traits: [
      { k: "strength", zh: "聘禮是神自己的品格", en: "The bride-price is God’s own character" },
      { k: "identity", zh: "為了讓她「認識耶和華」", en: "So that she will “know Yahweh”" }
    ],
    lesson: {
      zh: "神給的聘禮不是金銀，而是祂自己的仁義、公平、慈愛、憐憫和誠實；目的是讓人真正認識祂（2:20）。",
      en: "God’s bride-gift is not gold but his own righteousness, justice, kindness, compassion and faithfulness — so that his people truly know him (2:20)."
    },
    quote: { ref: "2:19",
      zh: "我必聘你永遠歸我為妻",
      en: "I will betroth you to me forever." },
    keyVerses: ["2:16-17", "2:18", "2:19-20", "2:23"],
    intro: {
      zh: "在許多控訴之後，神說出全書最溫柔的話之一：「我必聘你永遠歸我為妻」（2:19）。聘禮不是金銀，而是神自己的品格：仁義、公平、慈愛、憐憫（2:19），還有誠實（2:20）；目的是「你就必認識我──耶和華」（2:20）。那日她要稱神為「伊施」（我夫），不再稱「巴力」（我主）（2:16），神也要從她口中除掉諸巴力的名號（2:17）。",
      en: "After many accusations God speaks some of the book’s tenderest words: “I will betroth you to me forever” (2:19). The bride-price is not silver or gold but God’s own character — righteousness, justice, loving kindness and compassion (2:19), and faithfulness (2:20) — so that “you shall know Yahweh” (2:20). On that day she will call him “my husband,” no more “my Baal” (2:16), and the names of the Baals will be removed from her mouth (2:17)."
    },
    tip: {
      zh: "「聘」是訂婚的動詞；在 2:19-20 連續出現三次，像是一句一句鄭重地許下承諾。",
      en: "“Betroth” is the engagement verb; it appears three times in 2:19–20, like a vow made line by line."
    },
    related: ["wilderness_courtship", "redemption", "dew", "father_heart"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "redemption", book: "hosea", no: 6, kind: "other", type: "love", rarity: 4,
    zh: "買回妻子", en: "Buying Her Back",
    tag: { zh: "十五舍客勒銀子和大麥", en: "Fifteen Pieces of Silver and Barley" },
    role: { zh: "愛，付上代價", en: "Love that pays the price" },
    ch: [3],
    passages: ["3:1-5"],
    moves: [
      { zh: "再去愛她", en: "Go Again, Love Her", ref: "3:1",
        dzh: "神說：「你再去愛一個淫婦」，好像耶和華仍愛偏向別神的以色列人。",
        den: "God says, “Go again, love a woman loved by another, and an adulteress,” as Yahweh loves Israel though they turn to other gods." },
      { zh: "買她歸我", en: "Bought for Myself", ref: "3:2-3",
        dzh: "他付了十五舍客勒銀子和大麥，又對她說：你當多日為我獨居。",
        den: "He paid fifteen pieces of silver and a homer and a half of barley, and told her: stay with me many days." }
    ],
    traits: [
      { k: "strength", zh: "付代價的愛", en: "Love that pays the price" },
      { k: "identity", zh: "愛，也有界線", en: "Love — with boundaries" }
    ],
    lesson: {
      zh: "愛不是假裝沒有受傷，而是付上代價把人帶回來；「多日獨居」也提醒我們，修復需要時間（3:3-5）。",
      en: "Love does not pretend nothing hurt; it pays to bring someone back — and “many days” of waiting reminds us that mending takes time (3:3–5)."
    },
    quote: { ref: "3:2",
      zh: "我便用銀子十五舍客勒，大麥一賀梅珥半，買她歸我",
      en: "So I bought her for myself for fifteen pieces of silver and a homer and a half of barley." },
    keyVerses: ["3:1", "3:2-3", "3:4-5"],
    intro: {
      zh: "神對何西阿說：「你再去愛一個淫婦，就是她情人所愛的」，好像耶和華仍然愛那偏向別神的以色列人（3:1）。他便用十五舍客勒銀子和一賀梅珥半大麥買她歸他（3:2），並對她說：「你當多日為我獨居，不可行淫，不可歸別人為妻，我向你也必這樣」（3:3）。這也是以色列的圖畫：無君王、無祭祀、無偶像的日子之後，他們要歸回，尋求耶和華和他們的王大衛（3:4-5）。這位女子，不少人認為就是歌篾，但經文沒有點名。",
      en: "God tells Hosea, “Go again, love a woman loved by another, and an adulteress,” just as Yahweh loves Israel though they turn to other gods (3:1). He buys her for fifteen pieces of silver and a homer and a half of barley (3:2) and tells her: “You shall stay with me many days. You shall not play the prostitute… I will also be so toward you” (3:3). It pictures Israel too: after many days without king, sacrifice or idols, they will return and seek Yahweh and David their king (3:4–5). Many think the woman is Gomer, but the text does not name her."
    },
    tip: {
      zh: "三十舍客勒是出埃及記 21:32 中奴僕的賠償額；有人推算銀子加大麥約合這個數目，只是推算，經文沒有點明。",
      en: "Thirty shekels is the compensation for a servant in Exodus 21:32; some estimate the silver plus barley comes to about that, but it is only an estimate — the text does not say."
    },
    related: ["gomer", "hosea", "betrothal", "father_heart"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "no_knowledge", book: "hosea", no: 7, kind: "other", type: "wisdom", rarity: 3,
    zh: "神的控訴：無知識", en: "God’s Charge: No Knowledge",
    tag: { zh: "「我的民因無知識而滅亡」", en: "“My People Are Destroyed for Lack of Knowledge”" },
    role: { zh: "耶和華與這地的居民爭辯", en: "Yahweh’s case against the land" },
    ch: [4, 5],
    passages: ["4:1-6", "5:4"],
    moves: [
      { zh: "無人認識神", en: "No Knowledge of God", ref: "4:1-2",
        dzh: "神與這地的居民爭辯：沒有誠實、良善，也沒有人認識神，卻有假誓、殺害和偷盜。",
        den: "Yahweh has a charge against the land: no truth, no goodness, no knowledge of God — only false oaths, killing and stealing." },
      { zh: "因無知識而滅亡", en: "Destroyed for Lack of Knowledge", ref: "4:6",
        dzh: "祭司棄掉知識，神就棄掉他們；民也因無知識而滅亡。",
        den: "The priests rejected knowledge, so God rejects them; and the people are destroyed for lack of knowledge." }
    ],
    traits: [
      { k: "weakness", zh: "祭司反而靠民的罪過活", en: "Priests who feed on the people’s sin" },
      { k: "identity", zh: "一場全國性的控訴", en: "A charge against the whole land" }
    ],
    lesson: {
      zh: "這裡的「知識」是「認識神」（4:1）：不是多讀資料，而是活在與神的關係裡，並讓這關係影響生活。",
      en: "Here “knowledge” means knowing God (4:1) — not gathering information but living in relationship with him, and letting that shape how you live."
    },
    quote: { ref: "4:6",
      zh: "我的民因無知識而滅亡",
      en: "My people are destroyed for lack of knowledge." },
    keyVerses: ["4:1-3", "4:6", "4:8-9", "5:4"],
    intro: {
      zh: "第 4 章像一場法庭上的控訴：「耶和華與這地的居民爭辯」，因為「無誠實，無良善，無人認識神」（4:1）。接著列出假誓、殺害、偷盜、姦淫（4:2），連田野的獸和空中的鳥也跟著衰微（4:3）。矛頭特別指向祭司：他們棄掉知識（4:6），反而吃民的贖罪祭，滿心願意民犯罪（4:8）。「我的民因無知識而滅亡」（4:6）。",
      en: "Chapter 4 is like a courtroom charge: “Yahweh has a charge against the inhabitants of the land,” for there is “no truth, nor goodness, nor knowledge of God” (4:1). It lists false oaths, killing, stealing and adultery (4:2), and even the animals and birds languish (4:3). The sharpest edge falls on the priests: they have rejected knowledge (4:6) and feed on the people’s sin offerings, longing for their sin (4:8). “My people are destroyed for lack of knowledge” (4:6)."
    },
    tip: {
      zh: "「認識（神）」是全書的關鍵字：2:20、4:1、5:4、6:3、6:6 都出現。",
      en: "“Knowing (God)” is a key theme of the book: it appears in 2:20, 4:1, 5:4, 6:3 and 6:6."
    },
    related: ["desire_mercy", "morning_mist", "ephraim"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "morning_mist", book: "hosea", no: 8, kind: "other", type: "faith", rarity: 2,
    zh: "早晨的雲霧", en: "The Morning Mist",
    tag: { zh: "來得快、去得更快的悔改", en: "Repentance Here Today, Gone Tomorrow" },
    role: { zh: "漂亮的話，不持久的心", en: "Fine words, a fleeting heart" },
    ch: [6, 13],
    passages: ["6:1-4", "13:3"],
    moves: [
      { zh: "來吧，我們歸向耶和華", en: "Come, Let Us Return", ref: "6:1-3",
        dzh: "百姓說：他撕裂也必醫治；過兩天使我們甦醒，第三天使我們興起。",
        den: "The people say: he tore us and will heal us; after two days he will revive us, on the third raise us up." },
      { zh: "我可向你怎樣行呢？", en: "What Shall I Do With You?", ref: "6:4",
        dzh: "神嘆息：你們的良善如同早晨的雲霧，又如速散的甘露。",
        den: "God sighs: your love is like a morning cloud, like the dew that disappears early." }
    ],
    traits: [
      { k: "identity", zh: "說得動聽的悔改", en: "Repentance with fine words" },
      { k: "weakness", zh: "來得快，去得更快", en: "Quick to come, quicker to go" }
    ],
    lesson: {
      zh: "神看的不只是說出口的話，而是良善能不能持久；真悔改要像「開墾荒地」（10:12）一樣下功夫。",
      en: "God looks beyond the words spoken to whether love lasts; real repentance takes work, like breaking up fallow ground (10:12)."
    },
    quote: { ref: "6:4",
      zh: "你們的良善如同早晨的雲霧，又如速散的甘露",
      en: "your love is like a morning cloud, and like the dew that disappears early" },
    keyVerses: ["6:1-3", "6:4", "13:3"],
    intro: {
      zh: "6 章開頭是一段動聽的呼籲：「來吧，我們歸向耶和華！他撕裂我們，也必醫治」（6:1），「過兩天他必使我們甦醒，第三天他必使我們興起」（6:2），「我們務要認識耶和華」（6:3）。但神的回應卻帶著嘆息：「以法蓮哪，我可向你怎樣行呢？……因為你們的良善如同早晨的雲霧，又如速散的甘露」（6:4）。13:3 再用同樣的比喻說他們「如早晨的雲霧，又如速散的甘露」。",
      en: "Chapter 6 opens with a moving appeal: “Come, and let us return to Yahweh; for he has torn us to pieces, and he will heal us” (6:1), “After two days he will revive us. On the third day he will raise us up” (6:2), “Let us press on to know Yahweh” (6:3). But God’s answer is a sigh: “Ephraim, what shall I do to you? … For your love is like a morning cloud, and like the dew that disappears early” (6:4). Hosea 13:3 uses the same image: “like the morning mist, and like the dew that passes away early.”"
    },
    tip: {
      zh: "6:1-3 是百姓的話，6:4 是神的反應。解釋不一，可以對照 5:15 和 7:14 自己判斷這段悔改有多真誠。",
      en: "6:1–3 is the people’s speech and 6:4 is God’s reaction. Interpretations differ; compare 5:15 and 7:14 to judge how sincere this repentance was."
    },
    related: ["desire_mercy", "no_knowledge", "fallow_ground", "dew"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "desire_mercy", book: "hosea", no: 9, kind: "other", type: "wisdom", rarity: 3,
    zh: "良善（憐恤），不是祭祀", en: "Mercy, Not Sacrifice",
    tag: { zh: "耶穌兩次引用的一句話", en: "The Line Jesus Quoted Twice" },
    role: { zh: "敬拜的重點在心意", en: "Worship starts from the heart" },
    ch: [6],
    passages: ["6:6"],
    moves: [
      { zh: "喜愛良善，不喜愛祭祀", en: "Mercy, Not Sacrifice", ref: "6:6",
        dzh: "神說：我喜愛良善（或譯憐恤），不喜愛祭祀；喜愛認識神，勝於燔祭。",
        den: "God says: I desire mercy, not sacrifice; the knowledge of God more than burnt offerings." },
      { zh: "耶穌的引用", en: "Jesus Quotes It", ref: "6:6",
        dzh: "耶穌兩次對法利賽人引用這句話（太 9:13；12:7），提醒他們別把禮儀看得比人更重。",
        den: "Jesus quotes it twice to the Pharisees (Matt 9:13; 12:7), reminding them not to put ritual above people." }
    ],
    traits: [
      { k: "strength", zh: "把敬拜拉回心意", en: "Pulls worship back to the heart" },
      { k: "identity", zh: "不是廢祭祀，而是排優先", en: "Not abolishing ritual but ordering priorities" }
    ],
    lesson: {
      zh: "神不是不要祭祀，而是不要「只有祭祀」；重點在良善與認識祂（「勝於燔祭」）。",
      en: "God is not rejecting sacrifice but sacrifice alone; what matters most is mercy and knowing him (“more than burnt offerings”)."
    },
    quote: { ref: "6:6",
      zh: "我喜愛良善，不喜愛祭祀；喜愛認識神，勝於燔祭",
      en: "I desire mercy, and not sacrifice; and the knowledge of God more than burnt offerings." },
    keyVerses: ["6:4", "6:6", "6:7"],
    intro: {
      zh: "「我喜愛良善（或譯：憐恤），不喜愛祭祀；喜愛認識神，勝於燔祭」（6:6）。這是在人民說了漂亮的悔改話、行為卻不持久（6:4）之後，神說出的重點。「勝於」兩個字顯示：神不是不要祭祀，而是不要只有祭祀、沒有良善和認識祂。耶穌在馬太福音裡兩次引用這句話：一次是在祂與稅吏和罪人同席、被人批評的時候（太 9:13），一次是在門徒安息日掐麥穗、被人指責的時候（太 12:7）。",
      en: "“For I desire mercy, and not sacrifice; and the knowledge of God more than burnt offerings” (6:6). God says this after the people’s fine words of repentance have proved short-lived (6:4). “More than” shows that God is not rejecting sacrifice but sacrifice without kindness and without knowing him. Jesus quotes the line twice in Matthew: once when criticized for eating with tax collectors and sinners (Matt 9:13), once when his disciples are accused over plucking grain on the Sabbath (Matt 12:7)."
    },
    tip: {
      zh: "和合本在何西阿書 6:6 寫「良善」，旁注「或譯：憐恤」；馬太福音的和合本則直接寫「憐恤」。",
      en: "In Hosea 6:6 the 和合本 reads “goodness” with a margin note “or: mercy”; in Matthew it simply reads “mercy.”"
    },
    related: ["morning_mist", "no_knowledge", "fallow_ground", "father_heart"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "ephraim", book: "hosea", no: 10, kind: "person", type: "scheme", rarity: 3,
    zh: "以法蓮", en: "Ephraim",
    tag: { zh: "沒有翻過的餅，愚蠢的鴿子", en: "The Unturned Cake and the Silly Dove" },
    role: { zh: "北國以色列的代稱", en: "A name for the northern kingdom" },
    ch: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    names: ["以法蓮"],
    enNames: ["Ephraim"],
    moves: [
      { zh: "沒有翻過的餅", en: "A Cake Not Turned Over", ref: "7:8-9",
        dzh: "他與列邦人攙雜，像一塊沒翻過的餅；外邦人吞吃他的勞力，他連頭髮斑白也不覺得。",
        den: "He mixes himself among the nations, a cake not turned over; strangers devour his strength and he doesn’t even notice his gray hairs." },
      { zh: "愚蠢的鴿子", en: "The Silly Dove", ref: "7:11",
        dzh: "他們一時求告埃及，一時投奔亞述，像沒有主見的鴿子。",
        den: "Calling to Egypt, then running to Assyria — like a dove without understanding." }
    ],
    traits: [
      { k: "weakness", zh: "到處倚靠，唯獨不倚靠神", en: "Leans on every power but God" },
      { k: "identity", zh: "神教他走路的孩子", en: "The child God taught to walk" }
    ],
    lesson: {
      zh: "倚靠大國換來的安全是假的；真正的出路是轉向神——「我們不向亞述求救，不騎埃及的馬」（14:3）。",
      en: "Security bought from great powers is false; the real way out is to turn to God — “Assyria can’t save us. We won’t ride on horses” (14:3)."
    },
    quote: { ref: "7:11",
      zh: "以法蓮好像鴿子愚蠢無知",
      en: "Ephraim is like an easily deceived dove, without understanding." },
    keyVerses: ["7:8-9", "7:11-12", "11:3-4", "11:8"],
    intro: {
      zh: "在何西阿書裡，「以法蓮」常用來稱整個北國以色列（有時與「以色列」並列，如 5:5；11:8）。他被描寫得很不聰明：「與列邦人攙雜」，像「沒有翻過的餅」（7:8），外邦人吞吃他的勞力，連頭髮斑白也不覺得（7:9）；又像愚蠢的鴿子，一時求告埃及，一時投奔亞述（7:11；12:1）。可是神記得更早的事：「我原教導以法蓮行走，用膀臂抱著他們」（11:3），最後也說「以法蓮哪，我怎能捨棄你？」（11:8）。",
      en: "In Hosea “Ephraim” often stands for the whole northern kingdom (sometimes alongside “Israel,” as in 5:5 and 11:8). He is drawn as foolish: he “mixes himself among the nations,” a cake not turned over (7:8); strangers devour his strength and he doesn’t notice his gray hairs (7:9); like a silly dove he calls to Egypt, then goes to Assyria (7:11; 12:1). But God remembers earlier days: “I taught Ephraim to walk. I took them by his arms” (11:3) — and in the end, “How can I give you up, Ephraim?” (11:8)."
    },
    tip: {
      zh: "「沒有翻過的餅」常被解釋為一面烤焦、一面還生的餅——半吊子的信仰與處境。",
      en: "A cake not turned over is often explained as burnt on one side and raw on the other — a half-baked faith and policy."
    },
    related: ["samaria_calf", "father_heart", "morning_mist", "dew"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "samaria_calf", book: "hosea", no: 11, kind: "other", type: "scheme", rarity: 2,
    zh: "撒馬利亞的牛犢", en: "The Calf of Samaria",
    tag: { zh: "匠人做的，並不是神", en: "A Workman Made It — It Is No God" },
    role: { zh: "北國敬拜裡的偶像", en: "The idol in the north’s worship" },
    ch: [8, 10],
    passages: ["8:4-6", "10:5-6"],
    moves: [
      { zh: "並不是神", en: "It Is No God", ref: "8:5-6",
        dzh: "神丟棄了撒馬利亞的牛犢：它是匠人做的，並不是神，必被打碎。",
        den: "God has thrown out Samaria’s calf: a workman made it, it is no God, and it will be broken in pieces." },
      { zh: "被當作禮物送走", en: "Carried Off as a Gift", ref: "10:5-6",
        dzh: "牛犢要被帶到亞述，當作禮物獻給王；拜它的人要為它悲哀、蒙羞。",
        den: "The calf will be carried to Assyria as a gift for the king; those who worshiped it will mourn and be ashamed." }
    ],
    traits: [
      { k: "weakness", zh: "連自己也被當禮物送走", en: "Even carried off as a gift" },
      { k: "identity", zh: "手做的「神」", en: "A hand-made “god”" }
    ],
    lesson: {
      zh: "人造的替代品，最後連自己也保護不了；神要的是人認識祂，而不是敬拜自己的作品（8:6；10:5-6）。",
      en: "A man-made substitute cannot even protect itself; God wants to be known, not for people to worship their own handiwork (8:6; 10:5–6)."
    },
    quote: { ref: "8:6",
      zh: "這牛犢出於以色列，是匠人所造的，並不是神",
      en: "For this is even from Israel! The workman made it, and it is no God" },
    keyVerses: ["8:4-6", "10:5-6", "13:2"],
    intro: {
      zh: "北國的敬拜中有牛犢像：何西阿提到「撒馬利亞的牛犢」（8:5-6）和「伯‧亞文的牛犢」（10:5）。「伯‧亞文」意思是「罪惡之家」，一般認為是對「伯特利」（「神的家」）的諷刺，10:15 也提到伯特利。牛犢的由來可追到北國第一位王耶羅波安所鑄的兩個金牛犢，一隻安在伯特利，一隻安在但（王上 12:28-29）。何西阿批評得很直接：「這牛犢出於以色列，是匠人所造的，並不是神」（8:6）；它最後還要被帶到亞述，當作禮物獻給王（10:6）。",
      en: "Calf images stood at the heart of the north’s worship: Hosea speaks of “the calf of Samaria” (8:5–6) and “the calves of Beth-aven” (10:5). Beth-aven means “house of wickedness” and is generally taken as a barb at Bethel (“house of God”); 10:15 names Bethel. The calves go back to the two golden calves Jeroboam, the north’s first king, set up at Bethel and Dan (1 Kings 12:28–29). Hosea’s critique is blunt: “The workman made it, and it is no God” (8:6), and it will end up carried to Assyria as a gift for the king (10:6)."
    },
    tip: {
      zh: "13:2 說到「向牛犢親嘴」：和合本與英文 WEB 的譯法不同（WEB 寫成「獻人為祭，向牛犢親嘴」），這處經文的原文有不同讀法。",
      en: "13:2 speaks of “kissing the calves”; the 和合本 and the WEB translate the line differently (the WEB reads “offer human sacrifice and kiss the calves”), so the underlying text has more than one reading."
    },
    related: ["ephraim", "no_knowledge", "whirlwind"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "whirlwind", book: "hosea", no: 12, kind: "other", type: "harvest", rarity: 2,
    zh: "種風收暴風", en: "Sow the Wind, Reap the Whirlwind",
    tag: { zh: "種下什麼，收回什麼", en: "You Reap What You Sow" },
    role: { zh: "選擇有後果", en: "Choices have consequences" },
    ch: [8, 10],
    passages: ["8:7", "10:13"],
    moves: [
      { zh: "種的是風", en: "They Sow the Wind", ref: "8:7",
        dzh: "他們所種的是風，所收的是暴風；就算結實，也被外邦人吞吃。",
        den: "They sow the wind and reap the whirlwind; and if the grain does ripen, strangers swallow it up." },
      { zh: "耕種奸惡", en: "Plowing Wickedness", ref: "10:13",
        dzh: "他們耕種的是奸惡，收割的是罪孽，吃的是謊話的果子。",
        den: "You have plowed wickedness, reaped iniquity, and eaten the fruit of lies." }
    ],
    traits: [
      { k: "identity", zh: "農夫的警句", en: "A farmer’s proverb" },
      { k: "weakness", zh: "倚靠自己的路和眾多勇士", en: "Trusting his own way and many warriors" }
    ],
    lesson: {
      zh: "種下的已經是虛空，收回來的更大；但同一個比喻也能反過來——「栽種公義，就能收割慈愛」（10:12）。",
      en: "What is sown is already empty, and what returns is greater — but the image can be turned around: “Sow to yourselves in righteousness, reap according to kindness” (10:12)."
    },
    quote: { ref: "8:7",
      zh: "他們所種的是風，所收的是暴風",
      en: "they sow the wind, and they will reap the whirlwind" },
    keyVerses: ["8:7", "10:12", "10:13"],
    intro: {
      zh: "8:7 是個農夫的警句：「他們所種的是風，所收的是暴風」——種下去的已經是虛空，收回來的就更大；就算有收成，外邦人也要吞吃。同一個比喻在 10:13 再出現：「你們耕種的是奸惡，收割的是罪孽，吃的是謊話的果子」。他們以為倚靠自己的行為和眾多的勇士就安全（10:13），其實是在為自己累積後果。",
      en: "Hosea 8:7 is a farmer’s proverb: “they sow the wind, and they will reap the whirlwind” — what was sown was already empty, and the harvest is far bigger; even any grain would be swallowed by strangers. The image returns in 10:13: “You have plowed wickedness. You have reaped iniquity. You have eaten the fruit of lies.” They trusted their own way and the multitude of their warriors (10:13), but were storing up consequences."
    },
    tip: {
      zh: "「種風收暴風」（sow the wind and reap the whirlwind）今天仍是常用的成語，出處就是這裡。",
      en: "“Sow the wind and reap the whirlwind” is still a common saying today, and this verse is its source."
    },
    related: ["fallow_ground", "samaria_calf", "ephraim"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "fallow_ground", book: "hosea", no: 13, kind: "other", type: "harvest", rarity: 2,
    zh: "開墾荒地", en: "Break Up the Fallow Ground",
    tag: { zh: "現今正是尋求耶和華的時候", en: "It Is Time to Seek Yahweh" },
    role: { zh: "審判之中的一句邀請", en: "An invitation inside judgment" },
    ch: [10],
    passages: ["10:11-12"],
    moves: [
      { zh: "栽種公義", en: "Sow Righteousness", ref: "10:12",
        dzh: "神呼籲：為自己栽種公義，就能收割慈愛；因為現今正是尋求耶和華的時候。",
        den: "God urges: sow righteousness for yourselves and reap kindness — for it is time to seek Yahweh." },
      { zh: "開墾荒地", en: "Break Up Fallow Ground", ref: "10:12",
        dzh: "翻開未耕過的地，等耶和華臨到，使公義如雨降在你們身上。",
        den: "Break up the unplowed ground until Yahweh comes and rains righteousness on you." }
    ],
    traits: [
      { k: "strength", zh: "還有一個「現今」", en: "There is still a “now”" },
      { k: "identity", zh: "農夫的比喻", en: "A farmer’s parable" }
    ],
    lesson: {
      zh: "悔改像農夫：要先翻開土地、才能等雨；但雨（公義）最終是神降下的。",
      en: "Repentance is like farming: you break the ground first and then wait for the rain — and the rain of righteousness is finally God’s to send."
    },
    quote: { ref: "10:12",
      zh: "你們要為自己栽種公義，就能收割慈愛",
      en: "Sow to yourselves in righteousness, reap according to kindness." },
    keyVerses: ["10:11-12", "10:13"],
    intro: {
      zh: "在 10 章的審判當中，忽然出現一句邀請：「你們要為自己栽種公義，就能收割慈愛。現今正是尋求耶和華的時候；你們要開墾荒地，等他臨到，使公義如雨降在你們身上」（10:12）。前面神把以法蓮比作「馴良的母牛犢」，喜愛踹穀，卻要被套上軛去耕田（10:11）。「荒地」是未曾耕過的土，要先翻開，雨才能滲進去。",
      en: "In the middle of chapter 10’s judgment comes a sudden invitation: “Sow to yourselves in righteousness, reap according to kindness. Break up your fallow ground; for it is time to seek Yahweh, until he comes and rains righteousness on you” (10:12). Just before, God likened Ephraim to a trained heifer that loved to thresh, now put under the yoke to plow (10:11). “Fallow ground” is soil never plowed; it must be broken open before the rain can soak in."
    },
    tip: {
      zh: "耶利米書 4:3 有幾乎一樣的話：「要開墾你們的荒地，不要撒種在荊棘中。」",
      en: "Jeremiah 4:3 has nearly the same words: “Break up your fallow ground, and do not sow among thorns.”"
    },
    related: ["whirlwind", "morning_mist", "dew", "desire_mercy"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "father_heart", book: "hosea", no: 14, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "父親的心腸", en: "A Father’s Heart",
    tag: { zh: "「我怎能捨棄你？」", en: "“How Can I Give You Up?”" },
    role: { zh: "全書的中心（11 章）", en: "The heart of the book (ch 11)" },
    ch: [11],
    passages: ["11:1-9"],
    moves: [
      { zh: "教他走路", en: "Teaching Him to Walk", ref: "11:1-4",
        dzh: "以色列年幼時，神愛他，教他行走，用膀臂抱著他，用慈繩愛索牽引他。",
        den: "When Israel was a child, God loved him, taught him to walk, took him by the arms, and drew him with ties of love." },
      { zh: "我怎能捨棄你？", en: "How Can I Give You Up?", ref: "11:8-9",
        dzh: "神心中掙扎：「我怎能捨棄你？」祂不發猛烈的怒氣，因為「我是神，並非世人」。",
        den: "God’s heart turns within him: “How can I give you up?” He will not act in fierce anger, for “I am God, and not man.”" }
    ],
    traits: [
      { k: "strength", zh: "憐愛勝過怒氣", en: "Compassion outweighs wrath" },
      { k: "identity", zh: "「我是神，並非世人」", en: "“I am God, and not man”" }
    ],
    lesson: {
      zh: "審判的結局不是放棄：神的憐愛「大大發動」；祂不像人，不會在怒中毀滅所愛的（11:8-9）。",
      en: "Judgment does not end in abandonment: God’s compassion is “aroused,” and unlike a man he will not destroy what he loves in wrath (11:8–9)."
    },
    quote: { ref: "11:8",
      zh: "以法蓮哪，我怎能捨棄你？以色列啊，我怎能棄絕你",
      en: "How can I give you up, Ephraim? How can I hand you over, Israel?" },
    keyVerses: ["11:1-4", "11:5-7", "11:8-9", "11:10-11"],
    intro: {
      zh: "第 11 章是全書的中心：神回顧以色列「年幼」時祂怎樣愛他、教他走路（11:1-4），然後在宣告審判（11:5-7）之後，轉過身來問自己：「我怎能捨棄你？」（11:8）。祂不在怒中毀滅，因為「我是神，並非世人，是你們中間的聖者」（11:9）。馬太福音 2:15 把 11:1「我從埃及召出我的兒子來」用在耶穌從埃及回來的事上。",
      en: "Chapter 11 is the heart of the book: God recalls how he loved Israel as a child and taught him to walk (11:1–4); then, after announcing judgment (11:5–7), he turns and asks himself, “How can I give you up?” (11:8). He will not destroy in anger, “for I am God, and not man; the Holy One among you” (11:9). Matthew 2:15 applies 11:1, “out of Egypt I called my son,” to Jesus’ return from Egypt."
    },
    tip: {
      zh: "11:8 的「押瑪」「洗扁」是和所多瑪、蛾摩拉一同被傾覆的城（申 29:23）——神說：我不要把你變成那樣。",
      en: "Admah and Zeboiim (11:8) were overthrown along with Sodom and Gomorrah (Deut 29:23) — God says: I will not make you like that."
    },
    related: ["ephraim", "hosea", "betrothal", "ransom", "dew"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "ransom", book: "hosea", no: 15, kind: "other", type: "power", rarity: 3,
    zh: "救贖脫離陰間", en: "Ransom From Sheol",
    tag: { zh: "「死亡啊，你的災害在哪裡呢？」", en: "“Death, Where Are Your Plagues?”" },
    role: { zh: "審判章節裡的一線光", en: "A shaft of light in a chapter of judgment" },
    ch: [13],
    passages: ["13:12-14"],
    moves: [
      { zh: "我必救贖他們", en: "I Will Ransom Them", ref: "13:14",
        dzh: "神說：「我必救贖他們脫離陰間，救贖他們脫離死亡。」",
        den: "God says: “I will ransom them from the power of Sheol. I will redeem them from death!”" },
      { zh: "向死亡挑戰", en: "Death, Where Are Your Plagues?", ref: "13:14",
        dzh: "接著向死亡和陰間挑戰；保羅在林前 15:55 用類似的話宣告復活的得勝。",
        den: "He then taunts Death and Sheol; Paul echoes these words in 1 Cor 15:55 to celebrate the resurrection victory." }
    ],
    traits: [
      { k: "strength", zh: "神向死亡挑戰", en: "God defies death" },
      { k: "identity", zh: "解釋有分歧的一節", en: "A verse read in more than one way" }
    ],
    lesson: {
      zh: "即使在最嚴厲的審判之中，神仍留下一句關於救贖與死亡的話；保羅把它與復活連在一起（林前 15:54-55）。",
      en: "Even inside the sternest judgment God leaves a word about redemption and death; Paul ties it to the resurrection (1 Cor 15:54–55)."
    },
    quote: { ref: "13:14",
      zh: "我必救贖他們脫離陰間，救贖他們脫離死亡",
      en: "I will ransom them from the power of Sheol. I will redeem them from death!" },
    keyVerses: ["13:12-13", "13:14", "13:15-16"],
    intro: {
      zh: "13 章大部分是嚴厲的審判：以法蓮得了飽足就心高傲、忘記神（13:6），所以神向他們「如獅子，又如豹」（13:7）。但在 13:14，和合本出現一句突然的轉折：「我必救贖他們脫離陰間，救贖他們脫離死亡。死亡啊，你的災害在哪裡呢？陰間哪，你的毀滅在哪裡呢？」保羅在林前 15:55 用類似的話慶祝復活：「死啊！你得勝的權勢在哪裡？死啊！你的毒鉤在哪裡？」要留意，這節有不同讀法：WEB 的句尾是「Compassion will be hidden from my eyes」，有些譯本也把前半讀成問句，整段仍在審判的脈絡裡。",
      en: "Most of chapter 13 is stern judgment: Ephraim, once fed, grew proud and forgot God (13:6), so God comes at them “like a lion, like a leopard” (13:7). Then in 13:14 the 和合本 has a sudden turn: “I will ransom them from the power of Sheol. I will redeem them from death! Death, where are your plagues? Sheol, where is your destruction?” Paul echoes these words in 1 Cor 15:55 to celebrate the resurrection: “O death, where is your victory? O death, where is your sting?” Note that the verse is read more than one way: the WEB ends “Compassion will be hidden from my eyes,” and some translations take the first half as a question, keeping the whole passage inside the judgment."
    },
    tip: {
      zh: "「陰間」（Sheol）是舊約對死人去處的稱呼；救贖「脫離陰間」就是從死亡的權勢下被贖回。",
      en: "Sheol is the Old Testament name for the realm of the dead; being ransomed “from Sheol” means being bought back from death’s power."
    },
    related: ["father_heart", "dew", "whirlwind"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "dew", book: "hosea", no: 16, kind: "other", type: "harvest", rarity: 4,
    zh: "如甘露，如百合花", en: "Like the Dew, Like the Lily",
    tag: { zh: "歸回的邀請，醫治的應許", en: "An Invitation to Return, a Promise of Healing" },
    role: { zh: "全書的結尾", en: "The close of the book" },
    ch: [14],
    passages: ["14:1-9"],
    moves: [
      { zh: "醫治背道的病", en: "Healing Their Waywardness", ref: "14:4",
        dzh: "神說：我必醫治他們背道的病，甘心愛他們，因為我的怒氣向他們轉消。",
        den: "God says: I will heal their waywardness and love them freely, for my anger has turned away from them." },
      { zh: "我必向以色列如甘露", en: "Like the Dew to Israel", ref: "14:5-7",
        dzh: "以色列要如百合花開放，如黎巴嫩的樹木扎根，枝條延長，香氣如香柏樹。",
        den: "Israel will blossom like the lily and root like Lebanon’s trees; his branches will spread and his fragrance rise." }
    ],
    traits: [
      { k: "strength", zh: "甘心愛他們", en: "Loves them freely" },
      { k: "identity", zh: "歸回的邀請", en: "An invitation to return" }
    ],
    lesson: {
      zh: "全書最後的話不是審判，而是歸回的邀請和醫治的應許；「我如青翠的松樹，你的果子從我而得」（14:8）。",
      en: "The book’s last word is not judgment but an invitation to return and a promise of healing; “from me your fruit is found” (14:8)."
    },
    quote: { ref: "14:4",
      zh: "我必醫治他們背道的病，甘心愛他們",
      en: "I will heal their waywardness. I will love them freely" },
    keyVerses: ["14:1-3", "14:4", "14:5-7", "14:8-9"],
    intro: {
      zh: "全書最後一章是邀請：「以色列啊，你要歸向耶和華──你的神」，並且給了他們可以說的話（14:1-3）：不向亞述求救、不騎埃及的馬、不再對手所造的說「你是我們的神」。神的回應是：「我必醫治他們背道的病，甘心愛他們；因為我的怒氣向他們轉消」（14:4）。「我必向以色列如甘露」——他必如百合花開放，如黎巴嫩的樹木扎根，如橄欖樹，如葡萄樹（14:5-7）。最後神說：「我如青翠的松樹；你的果子從我而得」（14:8）。",
      en: "The last chapter is an invitation: “Israel, return to Yahweh your God” — and God supplies the words to say (14:1–3): no more asking Assyria to save us, no more riding Egyptian horses, no more calling the work of our hands “our god.” God’s reply: “I will heal their waywardness. I will love them freely; for my anger is turned away” (14:4). “I will be like the dew to Israel” — he will blossom like the lily, root like the trees of Lebanon, be beautiful like the olive and blossom like the vine (14:5–7). Finally God says, “I am like a green cypress tree; from me your fruit is found” (14:8)."
    },
    tip: {
      zh: "全書最後一節（14:9）是對讀者的問題：「誰是智慧人？可以明白這些事。」",
      en: "The book’s final verse (14:9) is a question to the reader: “Who is wise, that he may understand these things?”"
    },
    related: ["father_heart", "betrothal", "wilderness_courtship", "ransom", "fallow_ground"]
  }

);
