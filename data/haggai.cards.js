// 聖經人物卡 · 哈該書 (Haggai) — book info + cards.
// Verse text comes from data/haggai.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/haggai.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Ezra 3:10-13, 5:1-2, 6:14-15; Heb 12:26-27; Jer 22:24; Matt 1:12; 1 Chr 3:17-19) were checked against the 和合本
// text and appear in prose only.
// Flagged rather than decided: the "latter glory" and "precious things / desired of all nations" of 2:7-9, who "this people
// and this nation" are in 2:14, which foundation day 2:18 means, how the "signet" of 2:23 is to be read, and the two
// genealogies of Zerubbabel (Shealtiel in Haggai, Ezra, Matthew; Pedaiah in 1 Chr 3:19).

window.BOOKS.push({
  id: "haggai",
  zh: "哈該書", en: "Haggai", abbr: { zh: "該", en: "Hag" },
  order: 37, section: { zh: "先知書", en: "Prophets" },
  chapters: 2,
  fan: ["i_am_with_you", "haggai", "shake_nations"],
  summary: {
    zh: "哈該書只有兩章，四次「耶和華的話臨到」，每次都記下日期（1:1；2:1；2:10、20）。第一次：百姓說「建造耶和華殿的時候尚未來到」，自己卻住天花板的房屋；耶和華說「你們要省察自己的行為」（1:2-11）。他們聽從了，耶和華說：「我與你們同在」，並激動他們的心，他們就開始做工（1:12-15）。第二次：現在的殿在眼中「如無有」，但「你們都當剛強做工」，後來的榮耀必大過先前的（2:1-9）。第三次：祭司的答案說明污穢會傳染，聖潔不會；耶和華說「從今日起，我必賜福與你們」（2:10-19）。第四次：給省長所羅巴伯的應許——「我必以你為印，因我揀選了你」（2:20-23）。",
    en: "Haggai has two chapters and four times “Yahweh’s word came,” each with a date (1:1; 2:1; 2:10, 20). First: the people say “the time hasn’t yet come for Yahweh’s house to be built,” while living in paneled houses; Yahweh says, “Consider your ways” (1:2–11). They obey, and Yahweh says, “I am with you,” and stirs their spirit, and they begin work (1:12–15). Second: the present house is “as nothing” in their eyes, but “be strong… and work”; the latter glory will be greater than the former (2:1–9). Third: the priests’ answers show that uncleanness spreads and holiness does not; Yahweh says, “From today I will bless you” (2:10–19). Fourth: a promise to the governor Zerubbabel — “I will make you as a signet, for I have chosen you” (2:20–23)."
  },
  outline: [
    { zh: "省察自己的行為；我與你們同在；百姓動工", en: "Consider your ways; I am with you; the people begin work" },
    { zh: "從前的榮耀；再一次震動；聖與污穢；從今日起賜福；以所羅巴伯為印", en: "The former glory; one more shaking; holy and unclean; blessing from today; Zerubbabel as signet" }
  ],
  notes: {
    zh: "小提示：哈該書的四次話都有日期，從波斯王大利烏第二年六月初一日（1:1）到九月二十四日（2:20），只有約四個月。以斯拉記 5:1-2、6:14-15 記著哈該和撒迦利亞的勸勉使停頓的工程重新開始，殿在大利烏王第六年修成。",
    en: "Good to know: all four of Haggai’s words are dated, from the first day of the sixth month in the second year of Darius of Persia (1:1) to the twenty-fourth day of the ninth month (2:20) — about four months. Ezra 5:1–2 and 6:14–15 record that the exhortations of Haggai and Zechariah got the stalled work moving again and that the house was finished in the sixth year of Darius."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "haggai", book: "haggai", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "哈該", en: "Haggai",
    meaning: { zh: "常被解作「節日的」", en: "Often explained as “festal”" },
    tag: { zh: "帶著日期說話的先知", en: "The Prophet Who Speaks With Dates" },
    role: { zh: "「耶和華的使者」・先知", en: "“Yahweh’s messenger” — prophet" },
    ch: [1, 2],
    passages: ["1:1", "1:13", "2:4"],
    moves: [
      { zh: "大利烏王第二年", en: "In the Second Year of Darius", ref: "1:1",
        dzh: "耶和華的話藉先知哈該，向省長所羅巴伯和大祭司約書亞說。",
        den: "Yahweh’s word came by Haggai the prophet to Zerubbabel the governor and Joshua the high priest." },
      { zh: "耶和華的使者", en: "Yahweh’s Messenger", ref: "1:13",
        dzh: "他被稱為「耶和華的使者」，帶來一句話：我與你們同在。",
        den: "Called “Yahweh’s messenger,” he brings one line: “I am with you.”" }
    ],
    traits: [
      { k: "strength", zh: "話短而明確，每次都有日期", en: "Short, clear words, each one dated" },
      { k: "identity", zh: "全書四次「耶和華的話臨到」", en: "Four times “Yahweh’s word came” in the book" }
    ],
    lesson: {
      zh: "哈該的話短，卻有結果：從 1:1 的六月初一日到 1:15 的六月二十四日，同一個月內，百姓就動工了。他是「耶和華的使者」（1:13），他的信息可以用一句話概括：我與你們同在。",
      en: "Haggai’s words are short but effective: from the first day of the sixth month (1:1) to the twenty-fourth (1:15), within one month, the people were at work. He is “Yahweh’s messenger” (1:13), and his message can be put in one line: I am with you."
    },
    quote: { ref: "1:13",
      zh: "耶和華的使者哈該奉耶和華差遣對百姓說",
      en: "Haggai, Yahweh’s messenger, spoke Yahweh’s message to the people" },
    keyVerses: ["1:1", "1:13", "2:4"],
    intro: {
      zh: "哈該書沒有說哈該的父親、家鄉或年齡，只記下他說話的時間：「大利烏王第二年六月初一日」（1:1）。大利烏是波斯王；換算為主前 520 年，是歷史上的推算，經文只寫了波斯王的年份。他的對象是猶大省長所羅巴伯和大祭司約書亞，以及「剩下的百姓」（1:1、12）。以斯拉記 5:1-2 記著，先知哈該和撒迦利亞勸勉猶大人，所羅巴伯和約書亞就起來動手建殿；6:14 說猶大長老因這兩位先知的話建殿，凡事亨通。",
      en: "Haggai does not give Haggai’s father, hometown or age, only the time of speaking: “in the second year of Darius the king, in the sixth month, in the first day of the month” (1:1). Darius is the Persian king; converting that to 520 BC is a historical calculation, as the text gives only the king’s regnal year. His audience is Zerubbabel the governor of Judah, Joshua the high priest and “the remnant of the people” (1:1, 12). Ezra 5:1–2 records that Haggai and Zechariah prophesied to the Jews, and Zerubbabel and Jeshua rose up and began to build; 6:14 says the elders of the Jews built and prospered through the prophesying of these two prophets."
    },
    tip: {
      zh: "「主前 520 年」是歷史換算；經文只說「大利烏王第二年」。「哈該」的意思也只是常見的解釋。",
      en: "“520 BC” is a historical conversion; the text says only “the second year of Darius.” The meaning of “Haggai” is just a common explanation."
    },
    related: ["zerubbabel", "joshua_high_priest", "paneled_houses", "i_am_with_you", "shake_nations"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "zerubbabel", book: "haggai", no: 2, kind: "person", type: "faith", rarity: 5,
    zh: "所羅巴伯", en: "Zerubbabel",
    tag: { zh: "被揀選為印的省長", en: "The Governor Chosen as a Signet" },
    role: { zh: "猶大省長・撒拉鐵的兒子", en: "Governor of Judah, son of Shealtiel" },
    ch: [1, 2],
    passages: ["1:1", "1:14", "2:4", "2:21-23"],
    moves: [
      { zh: "耶和華激動他的心", en: "Spirit Stirred", ref: "1:14",
        dzh: "耶和華激動他的心，他就來為萬軍之耶和華的殿做工。",
        den: "Yahweh stirred up his spirit, and he came and worked on the house of Yahweh of Armies." },
      { zh: "以你為印", en: "Made as a Signet", ref: "2:23",
        dzh: "到那日，我必以你為印，因我揀選了你。",
        den: "“I will make you as a signet, for I have chosen you.”" }
    ],
    traits: [
      { k: "strength", zh: "帶頭動工，也被神激動", en: "Leads the work and is stirred by God" },
      { k: "identity", zh: "耶哥尼雅的孫子（太 1:12）", en: "Jeconiah’s grandson (Matt 1:12)" }
    ],
    lesson: {
      zh: "耶利米書 22:24 說耶哥尼雅雖是耶和華右手上的印，也要被摘下來；哈該 2:23 把印交給他的後代所羅巴伯（太 1:12：耶哥尼雅生撒拉鐵，撒拉鐵生所羅巴伯）。",
      en: "Jeremiah 22:24 says that though Coniah were the signet on Yahweh’s right hand, he would be plucked from there; Haggai 2:23 gives the signet to his descendant Zerubbabel (Matt 1:12: Jechoniah became the father of Shealtiel, Shealtiel of Zerubbabel)."
    },
    quote: { ref: "2:23",
      zh: "我必以你為印，因我揀選了你",
      en: "will make you as a signet, for I have chosen you" },
    keyVerses: ["1:1", "1:12", "1:14", "2:4", "2:23"],
    intro: {
      zh: "所羅巴伯是「撒拉鐵的兒子」，「猶大省長」（1:1）。他在書中有三個時刻：和大祭司約書亞一同聽從耶和華的話（1:12）；被耶和華激動心，來為殿做工（1:14）；在最後一個預言中被稱為「我僕人」，並得到「以你為印」的應許（2:23）。「印」是蓋印、代表權柄的戒指；這個應許是對所羅巴伯本人，還是指向更後來的大衛後裔，解經者看法不一。歷代志上 3:19 把所羅巴伯列為毗大雅的兒子，與哈該書、以斯拉記、馬太福音的「撒拉鐵的兒子」不同，兩處家譜如何對得上，經文沒有說明。",
      en: "Zerubbabel is “the son of Shealtiel, governor of Judah” (1:1). He has three moments in the book: obeying Yahweh’s voice with Joshua the high priest (1:12); having his spirit stirred to work on the house (1:14); and in the last prophecy being called “my servant” and promised “I will make you as a signet” (2:23). A signet is a seal ring that stands for authority; whether the promise is to Zerubbabel himself or points toward a later descendant of David, interpreters differ. 1 Chronicles 3:19 lists Zerubbabel as a son of Pedaiah, unlike the “son of Shealtiel” of Haggai, Ezra and Matthew; how the two genealogies fit the text does not say."
    },
    tip: {
      zh: "「以你為印」是對所羅巴伯本人，還是指向後來的大衛後裔，各解不一；歷代志上 3:19 與哈該書對他父親的記載不同。",
      en: "Whether “a signet” is for Zerubbabel himself or points to a later descendant of David is disputed; 1 Chronicles 3:19 and Haggai differ on his father."
    },
    related: ["haggai", "joshua_high_priest", "signet_ring", "i_am_with_you"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "joshua_high_priest", book: "haggai", no: 3, kind: "person", type: "faith", rarity: 3,
    zh: "約書亞（大祭司）", en: "Joshua the High Priest",
    tag: { zh: "與省長並肩的大祭司", en: "The High Priest Beside the Governor" },
    role: { zh: "約撒答的兒子・大祭司", en: "Son of Jehozadak, high priest" },
    ch: [1, 2],
    passages: ["1:1", "1:12", "1:14", "2:2", "2:4"],
    moves: [
      { zh: "聽從耶和華的話", en: "Obeying the Voice", ref: "1:12",
        dzh: "他和省長並剩下的百姓都聽從耶和華的話，存敬畏的心。",
        den: "He, with Zerubbabel and the remnant, obeyed Yahweh’s voice, and the people feared Yahweh." },
      { zh: "你也當剛強", en: "Be Strong", ref: "2:4",
        dzh: "耶和華說：約撒答的兒子大祭司約書亞啊，你也當剛強！",
        den: "“Be strong, Joshua, son of Jehozadak, the high priest.”" }
    ],
    traits: [
      { k: "strength", zh: "與省長一同被激動、一同被鼓勵", en: "Stirred and encouraged together with the governor" },
      { k: "identity", zh: "拉 5:2 作「約薩達的兒子耶書亞」", en: "Ezra 5:2 has “Jeshua the son of Jozadak”" }
    ],
    lesson: {
      zh: "哈該的話每次都同時對省長和大祭司說（1:1；2:2、4）：建殿的事，一位管政，一位管敬拜，兩人一起被叫「剛強」。",
      en: "Each of Haggai’s words is addressed to both governor and high priest (1:1; 2:2, 4): the building of the house calls the one who governs and the one who leads worship, and both are told to “be strong.”"
    },
    quote: { ref: "2:4",
      zh: "約撒答的兒子大祭司約書亞啊，你也當剛強",
      en: "Be strong, Joshua, son of Jehozadak, the high priest." },
    keyVerses: ["1:1", "1:12", "1:14", "2:2", "2:4"],
    intro: {
      zh: "約書亞是「約撒答的兒子大祭司」（1:1）。他在哈該書裡幾乎總是和所羅巴伯一起出現：一起被點名（1:1）、一起聽從（1:12）、一起被激動（1:14）、一起被叫剛強（2:4）。和合本在以斯拉記 5:2 把同一個人的名字寫作「耶書亞」，父名作「約薩達」，是同一人的不同拼法。哈該書後面的第三次預言（2:10-14）是向祭司「問律法」，祭司的回答成了論證的基礎。",
      en: "Joshua is “the son of Jehozadak, the high priest” (1:1). In Haggai he nearly always appears with Zerubbabel: named together (1:1), obeying together (1:12), stirred together (1:14), told to be strong together (2:4). The CUV writes the same man’s name “耶書亞” (Jeshua) and his father’s “約薩達” (Jozadak) in Ezra 5:2 — different spellings of the same person. In Haggai’s third message (2:10–14) the priests are asked for a ruling on the law, and their answers become the basis of the argument."
    },
    tip: {
      zh: "「約書亞」和「耶書亞」、「約撒答」和「約薩達」是同一個人的不同拼法，在哈該書和以斯拉記中分別出現。",
      en: "“Joshua”/“Jeshua” and “Jehozadak”/“Jozadak” are different spellings of the same man, in Haggai and Ezra respectively."
    },
    related: ["haggai", "zerubbabel", "holy_unclean", "i_am_with_you"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "paneled_houses", book: "haggai", no: 4, kind: "other", type: "wisdom", rarity: 3,
    zh: "天花板的房屋", en: "Paneled Houses",
    tag: { zh: "「建造耶和華殿的時候尚未來到」", en: "“The Time Hasn’t Yet Come”" },
    role: { zh: "第一次的話（1:2-4）", en: "The first message (1:2–4)" },
    ch: [1],
    passages: ["1:2-4"],
    moves: [
      { zh: "時候未到", en: "“Not Yet”", ref: "1:2",
        dzh: "這百姓說：建造耶和華殿的時候尚未來到。",
        den: "These people say, ‘The time hasn’t yet come, the time for Yahweh’s house to be built.’" },
      { zh: "你們自己還住天花板的房屋嗎", en: "In Your Paneled Houses?", ref: "1:4",
        dzh: "這殿仍然荒涼，你們自己還住天花板的房屋嗎？",
        den: "Is it a time for you yourselves to dwell in your paneled houses, while this house lies waste?" }
    ],
    traits: [
      { k: "strength", zh: "一個問句就把順序擺正", en: "One question puts the order right" },
      { k: "weakness", zh: "「時候未到」成了藉口", en: "“Not yet” has become an excuse" }
    ],
    lesson: {
      zh: "這不是說不許有好房子，而是順序顛倒：自己的房子有天花板，神的殿荒涼（1:4）。「時候未到」是百姓的話（1:2），不是耶和華的話。",
      en: "This is not a ban on good houses but an order reversed: their own houses have paneling while God’s house lies waste (1:4). “The time hasn’t yet come” is the people’s saying (1:2), not Yahweh’s."
    },
    quote: { ref: "1:4",
      zh: "這殿仍然荒涼，你們自己還住天花板的房屋嗎",
      en: "Is it a time for you yourselves to dwell in your paneled houses" },
    keyVerses: ["1:2", "1:3", "1:4"],
    intro: {
      zh: "第一次的話以引用百姓的話開始：「這百姓說，建造耶和華殿的時候尚未來到。」（1:2）耶和華的回應是一個問句：「這殿仍然荒涼，你們自己還住天花板的房屋嗎？」（1:4）「天花板的房屋」指鑲有木板（多為香柏木）的房子，是較好的居所。重點不在房子的好壞，而在對比：一邊有天花板，一邊是荒涼。以斯拉記 5:1-2 記著，在哈該和撒迦利亞勸勉之後，所羅巴伯和約書亞起來動手建殿；書中沒有說明百姓說「時候未到」的原因。",
      en: "The first message begins by quoting the people: “These people say, ‘The time hasn’t yet come, the time for Yahweh’s house to be built’” (1:2). Yahweh answers with a question: “Is it a time for you yourselves to dwell in your paneled houses, while this house lies waste?” (1:4). “Paneled houses” are houses with wood paneling (usually cedar), better dwellings. The point is not the quality of the houses but the contrast: paneling on one side, waste on the other. Ezra 5:1–2 records that after the prophecies of Haggai and Zechariah Zerubbabel and Joshua rose up and began to build; the book does not say why the people said “the time hasn’t come.”"
    },
    tip: {
      zh: "「天花板的房屋」在原文指鑲木板的房屋；書中沒有交代百姓為何說「時候未到」。",
      en: "“Paneled houses” are houses with wooden paneling in the original; the book does not say why the people said “the time hasn’t come.”"
    },
    related: ["consider_ways", "haggai", "i_am_with_you", "former_glory"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "consider_ways", book: "haggai", no: 5, kind: "other", type: "wisdom", rarity: 4,
    zh: "省察自己的行為", en: "Consider Your Ways",
    tag: { zh: "撒的種多，收的卻少", en: "You Have Sown Much, and Bring in Little" },
    role: { zh: "第一次的話（1:5-11）", en: "The first message, continued (1:5–11)" },
    ch: [1],
    passages: ["1:5-11"],
    moves: [
      { zh: "破漏的囊", en: "A Bag with Holes", ref: "1:6",
        dzh: "你們撒的種多，收的卻少；得工錢的，將工錢裝在破漏的囊中。",
        den: "You have sown much and bring in little; he who earns wages puts them in a bag with holes in it." },
      { zh: "上山取木料", en: "Bring Wood", ref: "1:8",
        dzh: "你們要上山取木料，建造這殿，我就因此喜樂，且得榮耀。",
        den: "“Go up to the mountain, bring wood, and build the house. I will take pleasure in it, and I will be glorified.”" }
    ],
    traits: [
      { k: "strength", zh: "診斷簡單：先看自己的行為", en: "A simple diagnosis: look at your own ways first" },
      { k: "weakness", zh: "越努力，所得越少（1:6、9）", en: "The harder they work, the less they have (1:6, 9)" }
    ],
    lesson: {
      zh: "「省察自己的行為」說了兩次（1:5、7）：先看現狀，再給一個很具體的任務——上山取木料（1:8）。努力沒有錯，錯在先後。",
      en: "“Consider your ways” is said twice (1:5, 7): first look at the situation, then a very concrete task — go up and bring wood (1:8). Effort is not wrong; the order is."
    },
    quote: { ref: "1:6",
      zh: "你們撒的種多，收的卻少；你們吃，卻不得飽",
      en: "You have sown much, and bring in little. You eat, but you don’t have enough." },
    keyVerses: ["1:5", "1:6", "1:8", "1:9", "1:10", "1:11"],
    intro: {
      zh: "「現在萬軍之耶和華如此說：你們要省察自己的行為。」（1:5）接著是一連串的「卻」：撒的種多，收的卻少；吃卻不得飽，喝卻不得足，穿衣服卻不得暖，得工錢的，將工錢裝在破漏的囊中（1:6）。1:7 再說一次「省察自己的行為」，然後是任務：上山取木料，建造這殿（1:8）。1:9 的原因是：「我的殿荒涼，你們各人卻顧（和合本註：原文是奔）自己的房屋」；1:10-11 說天不降甘露，乾旱臨到地土、五穀、新酒和油，是耶和華所命的。",
      en: "“Now therefore this is what Yahweh of Armies says: Consider your ways” (1:5). Then a string of “but”s: sown much, brought in little; eat but not enough, drink but not filled, clothe but not warm, wages put into a bag with holes (1:6). Verse 7 says “Consider your ways” again, then the task: go up to the mountain, bring wood, build the house (1:8). Verse 9 gives the reason: “because of my house that lies waste, while each of you is busy (the CUV note: literally ‘running’) with his own house”; verses 10–11 say the heavens withhold dew and drought is on the land, grain, new wine and oil, at Yahweh’s call."
    },
    tip: {
      zh: "1:9 的「顧」，和合本註原文是「奔」：各人急急忙忙跑回自己的房屋。",
      en: "“Busy” in 1:9 is literally “running” (the CUV note): each running to his own house."
    },
    related: ["paneled_houses", "i_am_with_you", "from_today_bless", "haggai"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "i_am_with_you", book: "haggai", no: 6, kind: "other", type: "love", rarity: 5,
    zh: "我與你們同在", en: "I Am With You",
    tag: { zh: "耶和華激動他們的心", en: "Yahweh Stirred Up Their Spirit" },
    role: { zh: "百姓的回應（1:12-15）", en: "The people’s response (1:12–15)" },
    ch: [1],
    passages: ["1:12-15"],
    moves: [
      { zh: "他們都聽從", en: "They Obeyed", ref: "1:12",
        dzh: "省長、大祭司和剩下的百姓都聽從耶和華的話，存敬畏的心。",
        den: "Zerubbabel, Joshua and all the remnant obeyed Yahweh’s voice, and the people feared Yahweh." },
      { zh: "我與你們同在", en: "I Am With You", ref: "1:13-14",
        dzh: "耶和華說：我與你們同在；祂激動他們的心，他們就來做工。",
        den: "“I am with you,” says Yahweh; he stirred up their spirit, and they came and worked on the house." }
    ],
    traits: [
      { k: "strength", zh: "一句話之後，百姓當月就動工", en: "One sentence, and the people were at work within the month" },
      { k: "identity", zh: "「剩下的百姓」（1:12、14）", en: "“The remnant of the people” (1:12, 14)" }
    ],
    lesson: {
      zh: "動力有兩樣：人聽從（1:12），耶和華「激動」他們的心（1:14）。哈該先給的是「我與你們同在」（1:13），然後才是工作。",
      en: "The impulse has two parts: people obey (1:12), and Yahweh “stirs up” their spirit (1:14). What Haggai gives first is “I am with you” (1:13), and then comes the work."
    },
    quote: { ref: "1:13",
      zh: "耶和華說：我與你們同在",
      en: "“I am with you,” says Yahweh" },
    keyVerses: ["1:12", "1:13", "1:14", "1:15"],
    intro: {
      zh: "這是全書唯一一次百姓有回應的地方：省長所羅巴伯、大祭司約書亞和剩下的百姓，都聽從耶和華的話和哈該的話，並「存敬畏的心」（1:12）。哈該稱為「耶和華的使者」，傳了一句只有六個字的話：「我與你們同在」（1:13）。1:14 說耶和華「激動」省長、大祭司和百姓的心，他們就來做工；1:15 記下日期：六月二十四日，離第一次的話（六月初一日，1:1）還不到一個月。",
      en: "This is the only place in the book where the people respond: Zerubbabel the governor, Joshua the high priest and the remnant of the people obeyed Yahweh’s voice and the words of Haggai, and “the people feared Yahweh” (1:12). Haggai, called “Yahweh’s messenger,” brings one short line: “I am with you” (1:13). Verse 14 says Yahweh “stirred up the spirit” of the governor, the high priest and the people, and they came and worked; verse 15 records the date: the twenty-fourth of the sixth month, less than a month after the first message (the first of the sixth month, 1:1)."
    },
    tip: {
      zh: "1:13 的「我與你們同在」是全書第一句應許；1:12 的「聽從」和 1:14 的「激動」，都被寫成事實，沒有說明是怎樣發生的。",
      en: "“I am with you” in 1:13 is the book’s first promise; the “obeying” of 1:12 and the “stirring” of 1:14 are both stated as facts, without saying how they happened."
    },
    related: ["haggai", "zerubbabel", "joshua_high_priest", "former_glory", "consider_ways"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "former_glory", book: "haggai", no: 7, kind: "other", type: "faith", rarity: 4,
    zh: "從前的榮耀", en: "The Former Glory",
    tag: { zh: "你們都當剛強做工，因為我與你們同在", en: "Be Strong and Work, for I Am With You" },
    role: { zh: "第二次的話（2:1-5）", en: "The second message (2:1–5)" },
    ch: [2],
    passages: ["2:1-5"],
    moves: [
      { zh: "如無有", en: "As Nothing", ref: "2:3",
        dzh: "有誰見過這殿從前的榮耀呢？現在你們看著如何？",
        den: "Who is left among you who saw this house in its former glory? How do you see it now?" },
      { zh: "剛強做工", en: "Be Strong and Work", ref: "2:4",
        dzh: "你們都當剛強做工，因為我與你們同在。",
        den: "“Be strong, all you people of the land, and work, for I am with you.”" }
    ],
    traits: [
      { k: "strength", zh: "先承認現實，再鼓勵", en: "Admits the reality first, then encourages" },
      { k: "identity", zh: "「我的靈住在你們中間」（2:5）", en: "“My Spirit lived among you” (2:5)" }
    ],
    lesson: {
      zh: "耶和華沒有否認新殿比不上舊殿：「豈不在眼中看如無有嗎？」（2:3）祂的鼓勵不是「其實不差」，而是「你當剛強」（2:4）。",
      en: "Yahweh does not deny that the new house cannot match the old: “Isn’t it in your eyes as nothing?” (2:3). His encouragement is not “it’s not bad” but “be strong” (2:4)."
    },
    quote: { ref: "2:4",
      zh: "你們都當剛強做工，因為我與你們同在",
      en: "and work, for I am with you" },
    keyVerses: ["2:1", "2:3", "2:4", "2:5"],
    intro: {
      zh: "第二次的話在七月二十一日，距動工不到一個月（1:15；2:1）。對象仍是所羅巴伯、約書亞和百姓。2:3 的問題很現實：你們中間存留的，有誰見過這殿從前的榮耀？現在你們看著如何？以斯拉記 3:10-13 記著立殿根基的時候，見過舊殿的老年人大聲哭號，也有許多人大聲歡呼，百姓不能分辨歡呼的聲音和哭號的聲音。2:4 的回答是三個「當剛強」，對象依次是所羅巴伯、約書亞和這地的百姓；2:5 說這是照著出埃及時立約的話，神的靈住在他們中間，不要懼怕。",
      en: "The second message comes on the twenty-first of the seventh month, less than a month after work began (1:15; 2:1). The audience is again Zerubbabel, Joshua and the people. The question of 2:3 is realistic: who is left among you who saw this house in its former glory? How do you see it now? Ezra 3:10–13 records that when the foundation was laid, old men who had seen the first house wept loudly while many shouted for joy, so that the people could not tell the noise of joy from the noise of weeping. The answer of 2:4 is three “be strong”s, to Zerubbabel, to Joshua and to the people of the land; 2:5 says this is the word covenanted when they came out of Egypt, and his Spirit lived among them: don’t be afraid."
    },
    tip: {
      zh: "「從前的殿」是指所羅門的殿（在數十年前被毀）；書中沒有寫年數，這是歷史推算。",
      en: "“The former house” is Solomon’s temple (destroyed some decades earlier); the book gives no number of years — that is a historical inference."
    },
    related: ["i_am_with_you", "shake_nations", "paneled_houses", "haggai"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "shake_nations", book: "haggai", no: 8, kind: "other", type: "power", rarity: 5,
    zh: "再一次震動天地", en: "Yet Once More I Will Shake",
    tag: { zh: "後來的榮耀必大過先前的榮耀", en: "The Latter Glory Will Be Greater Than the Former" },
    role: { zh: "第二次的話（2:6-9）", en: "The second message, continued (2:6–9)" },
    ch: [2],
    passages: ["2:6-9"],
    moves: [
      { zh: "震動天地萬國", en: "Shaking All", ref: "2:6-7",
        dzh: "過不多時，我必震動天地、萬國，使這殿滿了榮耀。",
        den: "In a little while I will shake the heavens, the earth and all nations, and fill this house with glory." },
      { zh: "金銀是我的", en: "The Silver Is Mine", ref: "2:8-9",
        dzh: "銀子是我的，金子也是我的；後來的榮耀必大過先前的。",
        den: "The silver is mine, and the gold is mine; the latter glory will be greater than the former." }
    ],
    traits: [
      { k: "strength", zh: "金銀都是祂的，不靠人籌款", en: "All the silver and gold are his; no fundraising needed" },
      { k: "identity", zh: "希伯來書 12:26-27 引用這「再一次」", en: "Hebrews 12:26–27 cites this “yet once more”" }
    ],
    lesson: {
      zh: "殿的榮耀不靠建材：「銀子是我的，金子也是我的」（2:8）。「後來的榮耀必大過先前的」，並且「在這地方我必賜平安」（2:9）。",
      en: "The house’s glory does not rest on building materials: “The silver is mine, and the gold is mine” (2:8). “The latter glory will be greater than the former,” and “in this place will I give peace” (2:9)."
    },
    quote: { ref: "2:9",
      zh: "這殿後來的榮耀必大過先前的榮耀；在這地方我必賜平安",
      en: "The latter glory of this house will be greater than the former" },
    keyVerses: ["2:6", "2:7", "2:8", "2:9"],
    intro: {
      zh: "2:6-7：「過不多時，我必再一次震動天地、滄海，與旱地；我必震動萬國；萬國的珍寶必都運來（和合本註：或譯，萬國所羨慕的必來到），我就使這殿滿了榮耀。」「珍寶」還是「所羨慕的」，是原文詞義的問題，兩種譯法都有人採用；後者在不少傳統中被讀作彌賽亞，但這需要另外的解經理由。希伯來書 12:26-27 引用「再一次……震動天地」，意思是被震動的受造之物要挪去，使不被震動的常存。2:9 的「後來的榮耀」指甚麼（這座殿、後來擴建的殿，或更遠的），經文沒有說明。",
      en: "Verses 6–7: “Yet once, it is a little while, and I will shake the heavens, the earth, the sea, and the dry land; and I will shake all nations. The precious things of all nations will come (the CUV note: or ‘the desired of all nations will come’), and I will fill this house with glory.” “Precious things” or “the desired” is a question of the Hebrew word, and both are used; the latter has been read as the Messiah in many traditions, but that needs separate reasons. Hebrews 12:26–27 cites “yet once more… shake the heavens,” meaning that shaken created things are removed so that what cannot be shaken remains. What “the latter glory” of 2:9 means (this house, a later enlargement, or something further) the text does not say."
    },
    tip: {
      zh: "2:7 的「珍寶」或「所羨慕的」是原文詞義問題；2:9 的「後來的榮耀」指甚麼，經文沒有說明。",
      en: "“Precious things” or “the desired” in 2:7 is a question of the Hebrew word; what “the latter glory” of 2:9 is the text does not say."
    },
    related: ["former_glory", "signet_ring", "holy_unclean", "haggai"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "holy_unclean", book: "haggai", no: 9, kind: "other", type: "wisdom", rarity: 3,
    zh: "聖與污穢", en: "Holy and Unclean",
    tag: { zh: "聖潔不傳染，污穢卻會", en: "Holiness Does Not Spread; Uncleanness Does" },
    role: { zh: "第三次的話（2:10-14）", en: "The third message (2:10–14)" },
    ch: [2],
    passages: ["2:10-14"],
    moves: [
      { zh: "聖肉不傳聖", en: "Holy Meat Doesn’t Pass On Holiness", ref: "2:12",
        dzh: "用衣襟兜聖肉，挨著餅或酒，那食物算為聖嗎？祭司說：不算。",
        den: "Holy meat carried in a garment’s fold and touching bread, wine or oil — does it become holy? The priests answered, “No.”" },
      { zh: "污穢會傳", en: "Uncleanness Does", ref: "2:13",
        dzh: "因摸死屍染了污穢的挨著食物，這物算污穢嗎？祭司說：必算污穢。",
        den: "If one unclean by a dead body touches any of these, will it be unclean? The priests answered, “It will be unclean.”" }
    ],
    traits: [
      { k: "strength", zh: "用祭司自己的答案作論證", en: "Argues from the priests’ own answers" },
      { k: "weakness", zh: "「他們手下的各樣工作都是如此」", en: "“Every work of their hands” is the same" }
    ],
    lesson: {
      zh: "兩個祭司的答案合在一起（2:12-13）：聖潔不會傳給別人，污穢卻會。所以光是把殿重建起來，不會使百姓自動成為聖潔（2:14）。",
      en: "The two priestly answers together (2:12–13): holiness does not pass on to others, but uncleanness does. So merely rebuilding the house will not make the people automatically holy (2:14)."
    },
    quote: { ref: "2:14",
      zh: "這民這國，在我面前也是如此；他們手下的各樣工作都是如此",
      en: "So is this people, and so is this nation before me" },
    keyVerses: ["2:10", "2:11", "2:12", "2:13", "2:14"],
    intro: {
      zh: "第三次的話在九月二十四日（2:10）。耶和華叫哈該「向祭司問律法」。第一個問題（2:12）：有人用衣襟兜聖肉，這衣襟挨著餅、湯、酒、油或別的食物，這些算為聖嗎？祭司說：不算。第二個問題（2:13）：有人因摸死屍染了污穢，然後挨著這些東西，算污穢嗎？祭司說：必算污穢。2:14 的結論：「這民這國，在我面前也是如此。」「這民這國」指誰（回來的猶大人，或別的民族，如以斯拉記 4 章的對手），注釋家看法不一。2:15-17 接著回顧：殿的根基立定之前，收成減少，天災臨到，「你們仍不歸向我」。",
      en: "The third message comes on the twenty-fourth of the ninth month (2:10). Yahweh tells Haggai to “ask the priests concerning the law.” First question (2:12): if someone carries holy meat in the fold of his garment, and the fold touches bread, stew, wine, oil or any food, will it become holy? The priests said, No. Second question (2:13): if one made unclean by a dead body touches any of these, will it be unclean? The priests said, It will be unclean. The conclusion in 2:14: “So is this people, and so is this nation before me.” Who “this people and this nation” are (the returned Judahites, or other peoples such as the opponents of Ezra 4) commentators differ. Verses 15–17 go on to look back: before the foundation, harvests shrank and disasters struck, “yet you didn’t turn to me.”"
    },
    tip: {
      zh: "2:14 的「這民這國」是指回歸的猶大人，還是另一民族，各解不一。",
      en: "Whether “this people and this nation” in 2:14 means the returned Judahites or another people is disputed."
    },
    related: ["joshua_high_priest", "from_today_bless", "shake_nations", "haggai"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "from_today_bless", book: "haggai", no: 10, kind: "other", type: "harvest", rarity: 4,
    zh: "從今日起，我必賜福", en: "From Today I Will Bless You",
    tag: { zh: "倉裡還沒有穀種，但從今日起", en: "The Barn Is Still Empty — But From Today" },
    role: { zh: "第三次的話（2:15-19）", en: "The third message, continued (2:15–19)" },
    ch: [2],
    passages: ["2:15-19"],
    moves: [
      { zh: "想得二十斗，只得十斗", en: "Twenty Measures, Ten Found", ref: "2:16-17",
        dzh: "想得二十斗只得十斗；我以旱風、霉爛、冰雹攻擊你們，你們仍不歸向我。",
        den: "One came to a heap of twenty measures and found ten; I struck you with blight, mildew and hail, yet you didn’t turn to me." },
      { zh: "從今日起", en: "From Today", ref: "2:18-19",
        dzh: "倉裡還沒有穀種，樹也沒有結果子；但從今日起，我必賜福與你們。",
        den: "Is the seed yet in the barn? The vine, fig, pomegranate and olive haven’t produced. From today I will bless you." }
    ],
    traits: [
      { k: "strength", zh: "賜福的宣告在收成之前", en: "The blessing is declared before the harvest" },
      { k: "identity", zh: "日期：九月二十四日（2:18）", en: "The date: the twenty-fourth of the ninth month (2:18)" }
    ],
    lesson: {
      zh: "賜福的日子放在行動之後、收成之前：倉裡沒有穀種，樹也沒有結果，但耶和華說「從今日起」（2:19）。信的人要先相信這句話，才看見收成。",
      en: "The day of blessing is set after the action and before the harvest: the barn has no seed and the trees have no fruit, yet Yahweh says “from today” (2:19). One must first believe the word before seeing the harvest."
    },
    quote: { ref: "2:19",
      zh: "從今日起，我必賜福與你們",
      en: "From today I will bless you" },
    keyVerses: ["2:15", "2:16", "2:17", "2:18", "2:19"],
    intro: {
      zh: "2:15 說「你們要追想，此日以前，耶和華的殿沒有一塊石頭壘在石頭上的光景」。那些日子：想得二十斗只得十斗，想得五十桶只得二十桶（2:16）；旱風、霉爛、冰雹攻擊，「你們仍不歸向我」（2:17）。2:18 再叫他們從這一天追想到「立耶和華殿根基的日子」。這「根基」是哪一天，經文沒有說明：以斯拉記 3:10 記著早先已立過根基，有人認為此處指在九月二十四日的重新奠基儀式。2:19 以反問開始：「倉裡有穀種嗎？」——沒有；然後是轉折：「從今日起，我必賜福與你們。」",
      en: "Verse 15 says, “consider from this day and backward, before a stone was laid on a stone in Yahweh’s temple.” Those days: one came to a heap of twenty measures and found ten, to the vat for fifty and found twenty (2:16); blight, mildew and hail struck, “yet you didn’t turn to me” (2:17). Verse 18 says to consider from this day back to “the day that the foundation of Yahweh’s temple was laid.” Which day that was the text does not say: Ezra 3:10 records that a foundation had been laid earlier, and some take this as a refounding ceremony on the twenty-fourth of the ninth month. Verse 19 begins with a question: “Is the seed yet in the barn?” — no; then the turn: “From today I will bless you.”"
    },
    tip: {
      zh: "2:18 的「立根基的日子」是哪一天，經文沒有說明；以斯拉記 3:10 記著更早已立過根基。",
      en: "Which “day the foundation was laid” 2:18 means is not stated; Ezra 3:10 records an earlier foundation."
    },
    related: ["consider_ways", "holy_unclean", "i_am_with_you", "signet_ring"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "signet_ring", book: "haggai", no: 11, kind: "other", type: "power", rarity: 4,
    zh: "列國的寶座與那枚印", en: "Thrones Overturned, and a Signet",
    tag: { zh: "我必震動天地，傾覆列國的寶座", en: "I Will Shake the Heavens and the Earth" },
    role: { zh: "第四次的話（2:20-23）", en: "The fourth message (2:20–23)" },
    ch: [2],
    passages: ["2:20-23"],
    moves: [
      { zh: "傾覆寶座", en: "Thrones Overthrown", ref: "2:21-22",
        dzh: "我必傾覆列國的寶座，除滅列邦的勢力，並傾覆戰車。",
        den: "I will overthrow the throne of kingdoms and destroy their strength; I will overthrow the chariots." },
      { zh: "弟兄的刀", en: "A Brother’s Sword", ref: "2:22",
        dzh: "馬必跌倒，騎馬的敗落，各人被弟兄的刀所殺。",
        den: "The horses and their riders will come down, everyone by the sword of his brother." }
    ],
    traits: [
      { k: "strength", zh: "最後一句留給一個人：所羅巴伯", en: "The last word is for one person: Zerubbabel" },
      { k: "identity", zh: "「印」——戒指，代表權柄（2:23）", en: "A signet — a seal ring, a sign of authority (2:23)" }
    ],
    lesson: {
      zh: "全書以震動列國的宏大畫面開始收結，最後卻停在一個名字：「我僕人撒拉鐵的兒子所羅巴伯」，印是給他的（2:23）。大事件裡，神也看見一個人。",
      en: "The book moves to a vast picture of shaken nations and then ends on a name: “Zerubbabel, my servant, the son of Shealtiel,” to whom the signet is given (2:23). In the midst of great events God also sees one person."
    },
    quote: { ref: "2:22",
      zh: "我必傾覆列國的寶座，除滅列邦的勢力",
      en: "I will overthrow the throne of kingdoms." },
    keyVerses: ["2:20", "2:21", "2:22", "2:23"],
    intro: {
      zh: "最後一次的話臨到哈該，日期與上一次同一天，九月二十四日（2:20）。這次只對所羅巴伯一個人說：「我必震動天地。我必傾覆列國的寶座，除滅列邦的勢力，並傾覆戰車和坐在其上的。馬必跌倒，騎馬的敗落，各人被弟兄的刀所殺。」（2:21-22）「各人被弟兄的刀所殺」是列國互相攻殺，沒有指明哪個年代。2:23 以「到那日」開始：「我僕人撒拉鐵的兒子所羅巴伯啊，我必以你為印，因我揀選了你。」耶利米書 22:24 的印（耶哥尼雅）被摘下，這裡的印被賜給他的後代，書本身沒有解釋兩者的關係。",
      en: "The last message comes on the same date as the previous one, the twenty-fourth of the ninth month (2:20). This time it is to Zerubbabel alone: “I will shake the heavens and the earth. I will overthrow the throne of kingdoms. I will destroy the strength of the kingdoms of the nations. I will overthrow the chariots, and those who ride in them. The horses and their riders will come down, everyone by the sword of his brother” (2:21–22). “By the sword of his brother” means nations turning on one another, with no particular era named. Verse 23 begins “In that day”: “will I take you, Zerubbabel, my servant, the son of Shealtiel… and will make you as a signet, for I have chosen you.” The signet of Jeremiah 22:24 (Coniah) was plucked off; here the signet is given to his descendant; the book itself does not explain the relation."
    },
    tip: {
      zh: "「到那日」指甚麼時候，經文沒有說明；這段預言在歷史上如何應驗，各解不一。",
      en: "What “in that day” points to the text does not say; how the prophecy is fulfilled in history is read in different ways."
    },
    related: ["zerubbabel", "shake_nations", "from_today_bless", "haggai"]
  }

);
