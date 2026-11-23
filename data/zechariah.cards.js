// 聖經人物卡 · 撒迦利亞書 (Zechariah) — book info + cards.
// Verse text comes from data/zechariah.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/zechariah.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Ezra 5:1-2, 6:14; Jer 23:5, 29:10; Deut 32:10; Jude 9; Matt 21:4-5, 26:31, 27:3-10; John 12:14-15, 19:37;
// Rev 1:7; Ezek 47:1; 2 Kgs 23:29; Zeph 1:11) were checked against the 和合本 text and appear in prose only.
// Flagged rather than decided: who the "two anointed" (4:14), the "three shepherds" (11:8) and "my shepherd" (13:7) are,
// the stone with seven eyes (3:9), the woman in the basket (5:7-8), how Joshua's crowning (6:11) relates to "the Branch",
// "me/him whom they pierced" (12:10), the mourning at Hadad-rimmon (12:11), the "Canaanite" of 14:21, how chs 9-14 are
// to be read (near history, a future day, or symbolic), and why Matthew 27:9 names Jeremiah.

window.BOOKS.push({
  id: "zechariah",
  zh: "撒迦利亞書", en: "Zechariah", abbr: { zh: "亞", en: "Zech" },
  order: 38, section: { zh: "先知書", en: "Prophets" },
  chapters: 14,
  fan: ["by_my_spirit", "zechariah", "humble_king"],
  summary: {
    zh: "撒迦利亞與哈該同時，在波斯王大利烏第二年（1:1）對重建的百姓說話。書的前半（1-6 章）是八個夜間的異象：騎馬的人與番石榴樹（1:7-17）、四角與四個匠人（1:18-21）、拿準繩的人（2:1-5）、大祭司約書亞換衣服（3 章）、金燈臺（4 章）、飛行書卷與量器（5 章）、四輛車（6:1-8）；中間（7-8 章）是禁食的問題和對耶路撒冷的應許；後半（9-14 章）是兩段「默示」：謙和的君王騎驢而來（9:9）、兩根杖與三十塊錢（11 章）、「仰望我，就是他們所扎的」（12:10）、被擊的牧人（13:7），最後是耶和華的日子，活水從耶路撒冷流出，連馬的鈴鐺上都寫著「歸耶和華為聖」（14 章）。",
    en: "Zechariah is a contemporary of Haggai, speaking to the rebuilding people in the second year of Darius of Persia (1:1). The first half (chs 1–6) is eight night visions: the rider among the myrtles (1:7–17), the four horns and four craftsmen (1:18–21), the man with the measuring line (2:1–5), Joshua’s change of clothes (ch 3), the golden lampstand (ch 4), the flying scroll and the basket (ch 5), the four chariots (6:1–8). The middle (chs 7–8) is the question about fasting and promises for Jerusalem. The second half (chs 9–14) is two “oracles”: the humble king on a donkey (9:9), the two staffs and thirty pieces of silver (ch 11), “they will look to me whom they have pierced” (12:10), the struck shepherd (13:7), and finally the day of Yahweh, with living water flowing from Jerusalem and even the horses’ bells inscribed “Holy to Yahweh” (ch 14)."
  },
  outline: [
    { zh: "轉向我；夜間異象一：番石榴樹中的人、四角與匠人", en: "Return to me; night visions one and two: the rider among the myrtles, the horns and craftsmen" },
    { zh: "準繩與火城；眼中的瞳人", en: "The measuring line and the wall of fire; the apple of his eye" },
    { zh: "大祭司約書亞的新衣；苗裔與七眼的石頭", en: "Joshua’s new clothes; the Branch and the stone with seven eyes" },
    { zh: "金燈臺；「不是倚靠勢力，乃是倚靠我的靈」", en: "The golden lampstand; “not by might, but by my Spirit”" },
    { zh: "飛行的書卷；量器中的婦人", en: "The flying scroll; the woman in the basket" },
    { zh: "四輛車；給約書亞的冠冕與苗裔", en: "The four chariots; the crown for Joshua and the Branch" },
    { zh: "禁食的問題；公平、慈愛、不欺壓", en: "The question about fasting; justice, kindness, no oppression" },
    { zh: "老人與小孩在街上；禁食變節期；十個人拉住衣襟", en: "Old and young in the streets; fasts become feasts; ten men take hold of a hem" },
    { zh: "謙和的王騎驢；被囚而有指望的人", en: "The humble king on a donkey; prisoners of hope" },
    { zh: "流離的羊群；耶和華眷顧自己的羊", en: "The scattered flock; Yahweh visits his sheep" },
    { zh: "榮美與聯索兩根杖；三十塊錢；無用的牧人", en: "The staffs Favor and Union; thirty pieces of silver; the worthless shepherd" },
    { zh: "重石頭與昏醉的杯；仰望所扎的；為獨生子悲哀", en: "The heavy stone and the cup of reeling; looking on the pierced; mourning an only son" },
    { zh: "洗除罪惡的泉源；被擊的牧人；經火煉的三分之一", en: "The cleansing spring; the struck shepherd; the third refined by fire" },
    { zh: "橄欖山裂開；活水；馬鈴鐺上的「歸耶和華為聖」", en: "The Mount of Olives splits; living water; “Holy to Yahweh” on the horses’ bells" }
  ],
  notes: {
    zh: "小提示：撒迦利亞書分兩半：1-8 章有確定的日期（大利烏第二年八月、十一月；第四年九月），多是異象與鼓勵建殿；9-14 章沒有日期，寫法更像「默示」，解經者怎麼讀（近期的歷史、末後的日子，或象徵）差別很大。新約多處引用或呼應這卷書，如馬太福音 21:4-5、26:31、27:9-10，約翰福音 12:14-15、19:37；引用的用意和上下文各不相同，讀時可回頭看原文的處境。",
    en: "Good to know: the book falls into two halves. Chapters 1–8 carry firm dates (the eighth and eleventh months of Darius’s second year; the ninth month of his fourth) and mostly concern visions and the building of the house; chapters 9–14 are undated and read more like “oracles,” and how to read them (near history, the latter days, or symbolically) varies widely. The New Testament cites or echoes the book often, as in Matthew 21:4–5, 26:31 and 27:9–10 and John 12:14–15 and 19:37; each use has its own purpose and context, so it helps to go back to the original setting."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "zechariah", book: "zechariah", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "撒迦利亞", en: "Zechariah",
    meaning: { zh: "常被解作「耶和華記念」", en: "Often explained as “Yahweh remembers”" },
    tag: { zh: "夜間看見異象的先知", en: "The Prophet of the Night Visions" },
    role: { zh: "易多的孫子・先知", en: "Prophet, grandson of Iddo" },
    ch: [1, 7, 11],
    passages: ["1:1", "7:1", "11:4"],
    moves: [
      { zh: "大利烏王第二年", en: "In Darius’s Second Year", ref: "1:1",
        dzh: "耶和華的話臨到易多的孫子、比利家的兒子先知撒迦利亞。",
        den: "Yahweh’s word came to Zechariah, the son of Berechiah, the son of Iddo, the prophet." },
      { zh: "牧養將宰的群羊", en: "Feed the Flock of Slaughter", ref: "11:4",
        dzh: "耶和華吩咐他：你要牧養這將宰的群羊。",
        den: "Yahweh tells him, “Feed the flock of slaughter.”" }
    ],
    traits: [
      { k: "strength", zh: "用異象說話，並把異象的意思問個明白", en: "Speaks in visions and keeps asking what they mean" },
      { k: "identity", zh: "拉 5:1 只提他是「易多的孫子」", en: "Ezra 5:1 names only “the son of Iddo”" }
    ],
    lesson: {
      zh: "撒迦利亞看見異象時常問「主啊，這是甚麼意思？」（1:9；4:4；6:4）；他也有不知道的時候（4:5、13）。先知不是甚麼都懂，而是肯問，並肯把答案轉達給百姓。",
      en: "When Zechariah sees a vision he often asks, “What is this, my lord?” (1:9; 4:4; 6:4); and sometimes he does not know (4:5, 13). A prophet does not understand everything; he asks, and passes the answer on to the people."
    },
    quote: { ref: "1:1",
      zh: "易多的孫子、比利家的兒子先知撒迦利亞",
      en: "Zechariah the son of Berechiah, the son of Iddo, the prophet" },
    keyVerses: ["1:1", "1:7", "7:1", "11:4"],
    intro: {
      zh: "撒迦利亞書開頭的日期是「大利烏王第二年八月」（1:1），與哈該同時；日期還有十一月二十四日（1:7）和第四年九月初四日（7:1）。書裡說他是「比利家的兒子、易多的孫子」；以斯拉記 5:1、6:14 只稱他「易多的孫子撒迦利亞」，並說哈該和他的勸勉使猶大長老建殿，凡事亨通。書分兩半：1-8 章是異象與勸勉，9-14 章是兩段沒有日期的「默示」。他的名字常被解作「耶和華記念」，和書中的盼望相合，但這是一種常見的解釋。",
      en: "Zechariah opens with a date, “the eighth month, in the second year of Darius” (1:1), the same time as Haggai; other dates are the twenty-fourth of the eleventh month (1:7) and the fourth of the ninth month in the fourth year (7:1). He is “the son of Berechiah, the son of Iddo”; Ezra 5:1 and 6:14 call him only “Zechariah the son of Iddo,” and say the exhortations of Haggai and Zechariah got the elders of the Jews building and prospering. The book falls in two halves: chapters 1–8 are visions and exhortation, chapters 9–14 two undated “oracles.” His name is often explained as “Yahweh remembers,” which suits the hope of the book, but that is just one common explanation."
    },
    tip: {
      zh: "「耶和華記念」是名字的一種常見解釋。以斯拉記只提「易多的孫子」，書中則說「比利家的兒子」，兩處都是同一人的稱呼方式。",
      en: "“Yahweh remembers” is one common explanation of the name. Ezra gives only “son of Iddo” while the book says “son of Berechiah”; both are ways of naming the same man."
    },
    related: ["return_to_me", "night_visions", "by_my_spirit", "humble_king", "two_staffs"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "return_to_me", book: "zechariah", no: 2, kind: "other", type: "faith", rarity: 4,
    zh: "你們要轉向我，我就轉向你們", en: "Return to Me, and I Will Return to You",
    tag: { zh: "不要效法你們列祖", en: "Do Not Be Like Your Fathers" },
    role: { zh: "開場的呼籲（1:1-6）", en: "The opening call (1:1–6)" },
    ch: [1],
    passages: ["1:1-6"],
    moves: [
      { zh: "轉向我", en: "Return to Me", ref: "1:3",
        dzh: "你們要轉向我，我就轉向你們。這是萬軍之耶和華說的。",
        den: "“Return to me,” says Yahweh of Armies, “and I will return to you.”" },
      { zh: "不要效法列祖", en: "Not Like Your Fathers", ref: "1:4-5",
        dzh: "從前的先知呼叫他們回頭，他們卻不聽；列祖在哪裡呢？先知能永遠存活嗎？",
        den: "The former prophets called them to turn, but they would not listen; where are your fathers now, and do the prophets live forever?" }
    ],
    traits: [
      { k: "strength", zh: "邀請先於警告", en: "The invitation comes before the warning" },
      { k: "weakness", zh: "列祖不聽，後來卻承認神的話都應驗了（1:6）", en: "The fathers would not listen, yet later admitted God’s words had come true (1:6)" }
    ],
    lesson: {
      zh: "「你們要轉向我，我就轉向你們」（1:3）是全書的第一個呼召，先講「轉向」，才講異象。列祖不聽，但先知的話並沒有落空（1:6）：話比人活得長。",
      en: "“Return to me, and I will return to you” (1:3) is the book’s first call, and “return” comes before any vision. The fathers did not listen, yet the prophets’ words did not fail (1:6): the word outlives the people."
    },
    quote: { ref: "1:3",
      zh: "你們要轉向我，我就轉向你們",
      en: "Return to me,’ says Yahweh of Armies, ‘and I will return to you" },
    keyVerses: ["1:2", "1:3", "1:4", "1:5", "1:6"],
    intro: {
      zh: "第一次的話在 1:1 的日期之後：「耶和華曾向你們列祖大大發怒」（1:2）。然後是這句：「所以你要對以色列人說，萬軍之耶和華如此說：你們要轉向我，我就轉向你們」（1:3）。「不要效法你們列祖」（1:4）：從前的先知呼叫他們回頭離開惡道，他們卻不聽。1:5 問：「你們的列祖在哪裡呢？那些先知能永遠存活嗎？」1:6 的回答：「我的言語和律例……豈不臨到你們列祖嗎？他們就回頭，說：萬軍之耶和華定意按我們的行動作為向我們怎樣行，他已照樣行了。」這是在放逐之後的人回頭看，認出神的話確實成就了。",
      en: "The first message follows the date of 1:1: “Yahweh was very angry with your fathers” (1:2). Then this line: “Therefore tell them: Yahweh of Armies says: ‘Return to me,’ says Yahweh of Armies, ‘and I will return to you’” (1:3). “Don’t be like your fathers” (1:4): the former prophets called them to turn from their evil ways, and they would not listen. Verse 5 asks: “Your fathers, where are they? And the prophets, do they live forever?” The answer in 6: “my words and my statutes… didn’t they overtake your fathers? Then they repented and said, ‘As Yahweh of Armies determined to do to us… so he has dealt with us.’” It is the people after the exile looking back and recognizing that God’s word had indeed come to pass."
    },
    tip: {
      zh: "1:4 的「從前的先知」沒有指名；1:6 的「他們就回頭」是列祖在災禍之後的承認，不一定是被擄之前的悔改。",
      en: "The “former prophets” of 1:4 are not named; the “they repented” of 1:6 is the fathers’ admission after the disaster, not necessarily repentance before the exile."
    },
    related: ["zechariah", "night_visions", "fasting_question", "wall_of_fire"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "night_visions", book: "zechariah", no: 3, kind: "other", type: "vision", rarity: 3,
    zh: "番石榴樹中的騎馬者與四角", en: "The Myrtles, the Riders and the Four Horns",
    tag: { zh: "「你不施憐憫要到幾時呢？」", en: "“How Long Will You Not Have Mercy?”" },
    role: { zh: "第一、第二個異象（1:7-21）", en: "The first two visions (1:7–21)" },
    ch: [1],
    passages: ["1:7-21"],
    moves: [
      { zh: "要到幾時呢", en: "How Long?", ref: "1:8-12",
        dzh: "一人騎紅馬站在番石榴樹中；使者問：你不施憐憫要到幾時呢？",
        den: "A man on a red horse stands among the myrtles; Yahweh’s angel asks, “How long will you not have mercy on Jerusalem?”" },
      { zh: "四角與四個匠人", en: "Four Horns, Four Craftsmen", ref: "1:18-21",
        dzh: "四角是打散猶大的；四個匠人來打掉列國的角。",
        den: "Four horns have scattered Judah; four craftsmen come to cast down the horns of the nations." }
    ],
    traits: [
      { k: "strength", zh: "神的回答是「美善的安慰話」（1:13）", en: "God’s answer is “good and comfortable words” (1:13)" },
      { k: "identity", zh: "「四角」是誰，經文沒有指名", en: "The “four horns” are not named" }
    ],
    lesson: {
      zh: "異象一的問題，和哈巴谷的「要到幾時」同一個：耶和華已經惱恨耶路撒冷七十年，「你不施憐憫要到幾時呢？」（1:12）答案是：「我為耶路撒冷為錫安，心裡極其火熱」（1:14）。",
      en: "The question of the first vision is the same as Habakkuk’s “how long”: Yahweh has been indignant for seventy years, “how long will you not have mercy?” (1:12). The answer: “I am jealous for Jerusalem and for Zion with a great jealousy” (1:14)."
    },
    quote: { ref: "1:12",
      zh: "你惱恨耶路撒冷和猶大的城邑已經七十年，你不施憐憫要到幾時呢",
      en: "how long will you not have mercy on Jerusalem and on the cities of Judah" },
    keyVerses: ["1:8", "1:11", "1:12", "1:16", "1:18", "1:21"],
    intro: {
      zh: "1:8：「我夜間觀看，見一人騎著紅馬，站在窪地番石榴樹中間。在他身後又有紅馬、黃馬，和白馬。」他們是「奉耶和華差遣在遍地走來走去的」（1:10），回報「全地都安息平靜」（1:11）——也就是外邦安逸，耶路撒冷仍未重建。使者問：「你不施憐憫要到幾時呢？」（1:12）「七十年」與耶利米書 29:10 所說「為巴比倫所定的七十年」相合。回答是安慰：「我回到耶路撒冷，仍施憐憫，我的殿必重建在其中」（1:16）。1:18-21 是第二個異象：四個角打散猶大，四個匠人來打掉這些角；「角」是誰、匠人是誰，經文沒有指明。",
      en: "Verse 8: “I had a vision in the night, and behold, a man riding on a red horse, and he stood among the myrtle trees that were in a ravine; and behind him there were red, brown, and white horses.” They are those “Yahweh has sent to walk back and forth through the earth” (1:10) and report “all the earth is at rest, and is quiet” (1:11) — the nations at ease while Jerusalem is still unbuilt. The angel asks, “how long will you not have mercy?” (1:12). The “seventy years” fits Jeremiah 29:10, “seventy years are accomplished for Babylon.” The answer is comfort: “I have returned to Jerusalem with mercy. My house shall be built in it” (1:16). Verses 18–21 are the second vision: four horns have scattered Judah, and four craftsmen come to cast down the horns; who the horns and the craftsmen are the text does not say."
    },
    tip: {
      zh: "「四角」和「四個匠人」指誰，經文沒有說明；注釋書常把角讀作壓迫猶大的列國，匠人讀作使它們敗落的力量。",
      en: "The “four horns” and “four craftsmen” are not identified; commentaries often read the horns as the nations that oppressed Judah and the craftsmen as the forces that bring them down."
    },
    related: ["return_to_me", "wall_of_fire", "four_chariots", "zechariah"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "wall_of_fire", book: "zechariah", no: 4, kind: "other", type: "power", rarity: 4,
    zh: "耶路撒冷四圍的火城", en: "A Wall of Fire Around Jerusalem",
    tag: { zh: "無城牆的鄉村，卻有火作牆", en: "No Walls, Yet a Wall of Fire" },
    role: { zh: "第三個異象（2:1-5）", en: "The third vision (2:1–5)" },
    ch: [2],
    passages: ["2:1-5"],
    moves: [
      { zh: "拿準繩的人", en: "The Man with a Measuring Line", ref: "2:1-2",
        dzh: "一個人手拿準繩，要去量耶路撒冷，看有多寬多長。",
        den: "A man with a measuring line goes to measure Jerusalem, to see how wide and long it is." },
      { zh: "火城與榮耀", en: "Wall of Fire, Glory Within", ref: "2:5",
        dzh: "我要作耶路撒冷四圍的火城，並要作其中的榮耀。",
        den: "“I will be to her a wall of fire around it, and I will be the glory in the middle of her.”" }
    ],
    traits: [
      { k: "strength", zh: "保護不靠城牆，而靠神自己", en: "Protection comes not from walls but from God himself" },
      { k: "identity", zh: "人多得城牆裝不下（2:4）", en: "So many people that no wall could hold them (2:4)" }
    ],
    lesson: {
      zh: "人拿準繩去量城，另一位天使卻說：不用量，耶路撒冷必像「無城牆的鄉村」，因為人民牲畜太多；耶和華自己是火城和城中的榮耀（2:4-5）。",
      en: "A man goes to measure the city, but another angel says there is no need: Jerusalem will be like “villages without walls” because of the multitude of people and livestock; Yahweh himself is the wall of fire and the glory within (2:4–5)."
    },
    quote: { ref: "2:5",
      zh: "我要作耶路撒冷四圍的火城，並要作其中的榮耀",
      en: "will be to her a wall of fire around it, and I will be the glory in the middle of her" },
    keyVerses: ["2:1", "2:2", "2:4", "2:5"],
    intro: {
      zh: "異象三：「我又舉目觀看，見一人手拿準繩。」（2:1）他要量耶路撒冷（2:2）。與先知說話的天使去的時候，另一位天使迎著他說：「你跑去告訴那少年人說，耶路撒冷必有人居住，好像無城牆的鄉村，因為人民和牲畜甚多。耶和華說：我要作耶路撒冷四圍的火城，並要作其中的榮耀。」（2:4-5）重建中的城常會想：先把城牆修好；這個異象說：城的邊界不靠人來定，也不靠牆來守。1:16 已說「準繩必拉在耶路撒冷之上」，這裡是它的具體畫面。",
      en: "Vision three: “I lifted up my eyes, and saw a man with a measuring line in his hand” (2:1). He is going to measure Jerusalem (2:2). As the angel who speaks with the prophet goes out, another angel meets him and says, “Run, speak to this young man, saying, ‘Jerusalem will be inhabited as villages without walls, because of the multitude of men and livestock in it. For I will be to her a wall of fire around it, and I will be the glory in the middle of her’” (2:4–5). A city being rebuilt tends to think: first repair the walls; this vision says the city’s bounds are not set by human hands nor guarded by walls. 1:16 already said “a line shall be stretched out over Jerusalem”; here is the picture of it."
    },
    tip: {
      zh: "「那少年人」指拿準繩的人，還是先知撒迦利亞，經文沒有說明。",
      en: "Whether “this young man” is the man with the line or Zechariah himself the text does not say."
    },
    related: ["night_visions", "apple_of_eye", "old_men_children", "zechariah"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "apple_of_eye", book: "zechariah", no: 5, kind: "other", type: "love", rarity: 4,
    zh: "眼中的瞳人", en: "The Apple of His Eye",
    tag: { zh: "摸你們的就是摸他眼中的瞳人", en: "Whoever Touches You Touches the Apple of His Eye" },
    role: { zh: "從巴比倫逃回（2:6-13）", en: "Flee from Babylon (2:6–13)" },
    ch: [2],
    passages: ["2:6-13"],
    moves: [
      { zh: "逃脫巴比倫", en: "Escape from Babylon", ref: "2:6-7",
        dzh: "與巴比倫人同住的錫安民哪，你們要從北方之地逃回。",
        den: "You who live with Babylon’s daughter, escape, Zion; flee back from the land of the north." },
      { zh: "我來要住在你中間", en: "I Will Dwell Among You", ref: "2:10-11",
        dzh: "錫安城啊，應當歡樂歌唱，因為我來要住在你中間。",
        den: "Sing and rejoice, daughter of Zion; for I come, and I will dwell within you." }
    ],
    traits: [
      { k: "strength", zh: "保護的細緻：如護眼中的瞳人", en: "Protection as delicate as guarding the pupil of an eye" },
      { k: "identity", zh: "許多國歸附耶和華（2:11）", en: "Many nations join themselves to Yahweh (2:11)" }
    ],
    lesson: {
      zh: "對尚留在巴比倫的人，呼召是「逃脫」（2:7）；對已在錫安的人，應許是「我來要住在你中間」（2:10）。申命記 32:10 也用「眼中的瞳人」形容神對雅各的看顧。",
      en: "To those still in Babylon the call is “escape” (2:7); to those in Zion the promise is “I come, and I will dwell within you” (2:10). Deuteronomy 32:10 also uses “the apple of his eye” for God’s care of Jacob."
    },
    quote: { ref: "2:8",
      zh: "摸你們的就是摸他眼中的瞳人",
      en: "he who touches you touches the apple of his eye" },
    keyVerses: ["2:6", "2:7", "2:8", "2:10", "2:11", "2:13"],
    intro: {
      zh: "2:6-7 對還在北方的人說：「我從前分散你們在天的四方，現在你們要從北方之地逃回。……與巴比倫人同住的錫安民哪，應當逃脫。」2:8 說差遣「我」去懲罰擄掠你們的列國：「摸你們的就是摸他眼中的瞳人」。「瞳人」在申命記 32:10 也用來形容耶和華看顧雅各。2:10-11 是歡呼：「錫安城啊，應當歡樂歌唱，因為我來要住在你中間」，那時必有許多國歸附耶和華。2:13 以靜默結束：「凡有血氣的都當在耶和華面前靜默無聲；因為他興起，從聖所出來了。」這段話裡「我」是誰（使者、先知，或耶和華自己）時有轉換，解經者看法不一。",
      en: "Verses 6–7 speak to those still in the north: “I have spread you abroad as the four winds of the sky… flee from the land of the north… Escape, Zion, you who dwell with the daughter of Babylon.” Verse 8 says “he” has sent “me” against the nations that plundered you: “he who touches you touches the apple of his eye.” Deuteronomy 32:10 also uses “the apple of his eye” of Yahweh’s care for Jacob. Verses 10–11 are a shout: “Sing and rejoice, daughter of Zion; for, behold, I come, and I will dwell within you,” and many nations will join themselves to Yahweh. Verse 13 ends in silence: “Be silent, all flesh, before Yahweh; for he has roused himself out of his holy habitation.” Who “I” is in this section (the angel, the prophet, or Yahweh himself) shifts, and interpreters differ."
    },
    tip: {
      zh: "2:8-11 的「差遣我」，「我」是耶和華的使者、先知或耶和華自己，經文沒有明說。",
      en: "In 2:8–11 the “me” who is “sent” may be the angel, the prophet or Yahweh himself; the text does not say."
    },
    related: ["wall_of_fire", "joshua_clothes", "humble_king", "zechariah"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "joshua_clothes", book: "zechariah", no: 6, kind: "other", type: "faith", rarity: 5,
    zh: "污穢的衣服換成華美的衣服", en: "Filthy Garments Exchanged",
    tag: { zh: "「這不是從火中抽出來的一根柴嗎？」", en: "“Isn’t This a Burning Stick Plucked Out of the Fire?”" },
    role: { zh: "第四個異象（3:1-5）", en: "The fourth vision (3:1–5)" },
    ch: [3],
    passages: ["3:1-5"],
    moves: [
      { zh: "撒但與耶和華的責備", en: "Satan and the Rebuke", ref: "3:1-2",
        dzh: "撒但站在約書亞的右邊與他作對；耶和華說：撒但哪，耶和華責備你！",
        den: "Satan stands at Joshua’s right hand to accuse him; Yahweh says, “Yahweh rebuke you, Satan!”" },
      { zh: "脫去污穢，穿上華美", en: "Filthy Off, Rich Clothing On", ref: "3:3-5",
        dzh: "我使你脫離罪孽，要給你穿上華美的衣服；又戴上潔淨的冠冕。",
        den: "“I have caused your iniquity to pass from you, and I will clothe you with rich clothing”; a clean turban is set on his head." }
    ],
    traits: [
      { k: "strength", zh: "被控告者不用自己辯護，神替他說話", en: "The accused does not defend himself; God speaks for him" },
      { k: "weakness", zh: "穿著污穢的衣服站在使者面前（3:3）", en: "Stands in filthy garments before the angel (3:3)" }
    ],
    lesson: {
      zh: "約書亞沒有為自己辯護；責備撒但的是耶和華（3:2），除去罪孽的也是祂：「我使你脫離罪孽」（3:4）。他只是站著，被換上新衣。",
      en: "Joshua does not defend himself; it is Yahweh who rebukes Satan (3:2) and Yahweh who removes the iniquity: “I have caused your iniquity to pass from you” (3:4). He only stands there and is given new clothes."
    },
    quote: { ref: "3:4",
      zh: "我使你脫離罪孽，要給你穿上華美的衣服",
      en: "I have caused your iniquity to pass from you" },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:5"],
    intro: {
      zh: "第四個異象：「大祭司約書亞站在耶和華的使者面前；撒但也站在約書亞的右邊，與他作對。」（3:1）「撒但」在原文帶冠詞，有學者譯為「那控告者」。耶和華責備他：「這不是從火中抽出來的一根柴嗎？」（3:2）約書亞「穿著污穢的衣服」（3:3）；使者吩咐「脫去他污穢的衣服」，並說「我使你脫離罪孽，要給你穿上華美的衣服」（3:4）；先知還說：「要將潔淨的冠冕戴在他頭上」（3:5）。猶大書 9 節記天使長米迦勒說的也是「主責備你吧」。這裡的約書亞是哈該書的同一位大祭司（該 1:1），代表百姓站在神面前。",
      en: "The fourth vision: “He showed me Joshua the high priest standing before Yahweh’s angel, and Satan standing at his right hand to be his adversary” (3:1). In the Hebrew “Satan” has the article, and some scholars translate it “the accuser.” Yahweh rebukes him: “Isn’t this a burning stick plucked out of the fire?” (3:2). Joshua is “clothed with filthy garments” (3:3); the angel orders “Take the filthy garments off him” and says, “I have caused your iniquity to pass from you, and I will clothe you with rich clothing” (3:4); the prophet adds, “Let them set a clean turban on his head” (3:5). Jude 9 records the archangel Michael saying in a different setting, “May the Lord rebuke you!” This Joshua is the same high priest as in Haggai (Hag 1:1), standing for the people before God."
    },
    tip: {
      zh: "「撒但」原文帶冠詞，意思是「那控告者」；約書亞的污穢衣服代表他自己，還是代表百姓的罪，經文沒有明說。",
      en: "“Satan” has the article in Hebrew, meaning “the accuser”; whether Joshua’s filthy garments stand for himself or for the people’s sin the text does not say."
    },
    related: ["the_branch", "crowned_branch", "apple_of_eye", "zechariah"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "the_branch", book: "zechariah", no: 7, kind: "other", type: "harvest", rarity: 4,
    zh: "苗裔與七眼的石頭", en: "The Branch and the Seven-Eyed Stone",
    tag: { zh: "一日之間除掉這地的罪孽", en: "The Iniquity of the Land Removed in One Day" },
    role: { zh: "給約書亞的應許（3:6-10）", en: "A promise to Joshua (3:6–10)" },
    ch: [3],
    passages: ["3:6-10"],
    moves: [
      { zh: "我僕人苗裔", en: "My Servant, the Branch", ref: "3:8",
        dzh: "你和你的同伴都當聽：我必使我僕人大衛的苗裔發出。",
        den: "“Hear now, Joshua the high priest… for, behold, I will bring out my servant, the Branch.”" },
      { zh: "七眼的石頭", en: "A Stone with Seven Eyes", ref: "3:9",
        dzh: "在約書亞面前所立的石頭有七眼；我要在一日之間除掉這地的罪孽。",
        den: "On the stone set before Joshua are seven eyes; “I will remove the iniquity of that land in one day.”" }
    ],
    traits: [
      { k: "strength", zh: "罪孽「在一日之間」被除掉", en: "Iniquity removed “in one day”" },
      { k: "identity", zh: "「苗裔」是一個稱號", en: "“Branch” is a title" }
    ],
    lesson: {
      zh: "對約書亞的條件是「遵行我的道」（3:7），但應許超出他一人：「我僕人苗裔」將要出現（3:8），罪孽將在一日之間除掉（3:9），結果是各人請鄰舍坐在葡萄樹和無花果樹下（3:10）。",
      en: "The condition for Joshua is “walk in my ways” (3:7), but the promise goes beyond him: “my servant, the Branch” will appear (3:8), iniquity will be removed in one day (3:9), and the result is neighbors invited under vine and fig tree (3:10)."
    },
    quote: { ref: "3:8",
      zh: "我必使我僕人大衛的苗裔發出",
      en: "I will bring out my servant, the Branch" },
    keyVerses: ["3:7", "3:8", "3:9", "3:10"],
    intro: {
      zh: "使者告誡約書亞：「你若遵行我的道，謹守我的命令，你就可以管理我的家，看守我的院宇」（3:7）。3:8 說約書亞和他的同伴「是作預兆的」：「我必使我僕人大衛的苗裔發出。」和合本加了「大衛的」，WEB 只作「my servant, the Branch」。耶利米書 23:5 也說「我要給大衛興起一個公義的苗裔」。3:9 的石頭「有七眼」，是甚麼，經文沒有解釋；4:10 說「這七眼乃是耶和華的眼睛，遍察全地」，可能相關，但那是另一個異象。3:10 以一幅日常的畫面結束：「你們各人要請鄰舍坐在葡萄樹和無花果樹下」。",
      en: "The angel charges Joshua: “If you will walk in my ways, and if you will follow my instructions, then you also shall judge my house and shall also keep my courts” (3:7). Verse 8 says Joshua and his fellows “are men who are a sign: for, behold, I will bring out my servant, the Branch.” The CUV adds “of David”; the WEB has only “my servant, the Branch.” Jeremiah 23:5 also says “I will raise to David a righteous Branch.” The stone in 3:9 “has seven eyes”; the text does not explain what it is; 4:10 says “these are Yahweh’s eyes, which run back and forth through the whole earth,” which may be related, but that is another vision. Verse 10 ends with an everyday picture: “you will invite every man his neighbor under the vine and under the fig tree.”"
    },
    tip: {
      zh: "和合本把 3:8 的「苗裔」寫成「大衛的苗裔」，WEB 沒有「大衛」；「七眼的石頭」指甚麼，經文沒有解釋。",
      en: "The CUV reads “the Branch of David” in 3:8, while the WEB has no “David”; the text does not explain the stone with seven eyes."
    },
    related: ["joshua_clothes", "crowned_branch", "by_my_spirit", "zechariah"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "by_my_spirit", book: "zechariah", no: 8, kind: "other", type: "power", rarity: 5,
    zh: "不是倚靠勢力，乃是倚靠我的靈", en: "Not by Might, but by My Spirit",
    tag: { zh: "純金的燈臺與兩棵橄欖樹", en: "The Golden Lampstand and the Two Olive Trees" },
    role: { zh: "第五個異象（4:1-14）", en: "The fifth vision (4:1–14)" },
    ch: [4],
    passages: ["4:1-14"],
    moves: [
      { zh: "燈臺與橄欖樹", en: "Lampstand and Olive Trees", ref: "4:2-3",
        dzh: "一個純金的燈臺，頂上有燈盞，旁邊有兩棵橄欖樹。",
        den: "A lampstand all of gold with a bowl on its top and seven lamps, with two olive trees beside it." },
      { zh: "倚靠我的靈", en: "By My Spirit", ref: "4:6",
        dzh: "不是倚靠勢力，不是倚靠才能，乃是倚靠我的靈方能成事。",
        den: "“Not by might, nor by power, but by my Spirit,” says Yahweh of Armies." }
    ],
    traits: [
      { k: "strength", zh: "油不斷地從橄欖樹流進燈臺", en: "Oil flows steadily from the olive trees into the lampstand" },
      { k: "identity", zh: "「兩個受膏者」（4:14）", en: "“The two anointed ones” (4:14)" }
    ],
    lesson: {
      zh: "異象的答案是給所羅巴伯的：「不是倚靠勢力，不是倚靠才能，乃是倚靠我的靈方能成事」（4:6）。大山必在他面前成為平地（4:7）；「誰藐視這日的事為小呢？」（4:10）",
      en: "The vision’s answer is for Zerubbabel: “Not by might, nor by power, but by my Spirit” (4:6). The great mountain will become a plain before him (4:7); “who despises the day of small things?” (4:10)."
    },
    quote: { ref: "4:6",
      zh: "不是倚靠勢力，不是倚靠才能，乃是倚靠我的靈方能成事",
      en: "Not by might, nor by power, but by my Spirit" },
    keyVerses: ["4:2", "4:6", "4:7", "4:9", "4:10", "4:14"],
    intro: {
      zh: "異象五：天使把先知叫醒，問他看見了甚麼：「一個純金的燈臺，頂上有燈盞，燈臺上有七盞燈，每盞有七個管子。旁邊有兩棵橄欖樹」（4:2-3）。先知兩次說「主啊，我不知道」（4:5、13），這是先知很誠實的地方。答案先給所羅巴伯：「不是倚靠勢力，不是倚靠才能，乃是倚靠我的靈方能成事」（4:6）；他的手立了殿的根基，他的手也必完成（4:9）；「誰藐視這日的事為小呢？」（4:10）。「兩個受膏者」（4:14）常被讀作所羅巴伯和約書亞，經文沒有指名。",
      en: "Vision five: the angel wakes the prophet and asks what he sees: “a lampstand all of gold, with its bowl on the top of it, and its seven lamps on it; there are seven pipes to each of the lamps which are on the top of it; and two olive trees by it” (4:2–3). The prophet twice says “My lord, I don’t know” (4:5, 13), which is honest. The answer comes first to Zerubbabel: “Not by might, nor by power, but by my Spirit” (4:6); his hands laid the foundation and will finish it (4:9); “who despises the day of small things?” (4:10). The “two anointed ones” (4:14) are often read as Zerubbabel and Joshua, but the text does not name them."
    },
    tip: {
      zh: "「兩個受膏者」常被讀作所羅巴伯與約書亞，經文沒有指名；燈臺各部分的象徵，只有 4:10 說七眼是耶和華的眼睛。",
      en: "The “two anointed ones” are often read as Zerubbabel and Joshua, but the text does not name them; of the lampstand’s parts only 4:10 says what they mean (the seven eyes are Yahweh’s eyes)."
    },
    related: ["the_branch", "crowned_branch", "zechariah", "joshua_clothes"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "scroll_and_basket", book: "zechariah", no: 9, kind: "other", type: "scheme", rarity: 3,
    zh: "飛行的書卷與量器中的婦人", en: "The Flying Scroll and the Woman in the Basket",
    tag: { zh: "咒詛進入偷竊人的家；罪惡被送往示拿", en: "A Curse Enters the Thief’s House; Wickedness Sent to Shinar" },
    role: { zh: "第六、第七個異象（5:1-11）", en: "The sixth and seventh visions (5:1–11)" },
    ch: [5],
    passages: ["5:1-11"],
    moves: [
      { zh: "飛行的書卷", en: "The Flying Scroll", ref: "5:2-4",
        dzh: "飛行的書卷長二十肘寬十肘，是遍地的咒詛，進入偷竊人和起假誓人的家。",
        den: "A flying scroll twenty cubits by ten is the curse over the land, entering the house of the thief and of him who swears falsely." },
      { zh: "量器中的婦人", en: "The Woman in the Basket", ref: "5:7-8",
        dzh: "量器中坐著一個婦人，天使說：這是罪惡，把她扔進去，用鉛片蓋住。",
        den: "A woman sits in the measuring basket; the angel says “This is Wickedness,” throws her in and weights the opening with lead." }
    ],
    traits: [
      { k: "strength", zh: "罪惡被「蓋住」並運走", en: "Wickedness is sealed in and carried away" },
      { k: "weakness", zh: "咒詛連「房屋帶木石」都毀滅", en: "The curse destroys the house “with its timber and its stones”" }
    ],
    lesson: {
      zh: "兩個異象一前一後：先是咒詛臨到偷竊和假誓的家（5:3-4），後是「罪惡」被裝進量器、運離這地，往示拿去（5:8-11）。先處理看得見的罪，再處理整個地的罪。",
      en: "The two visions come one after the other: first a curse falls on homes of theft and false oaths (5:3–4), then “Wickedness” is packed into a basket and carried from the land to Shinar (5:8–11). First the visible sins, then the sin of the whole land."
    },
    quote: { ref: "5:3",
      zh: "這是發出行在遍地上的咒詛",
      en: "This is the curse that goes out over the surface of the whole land" },
    keyVerses: ["5:2", "5:3", "5:4", "5:6", "5:8", "5:11"],
    intro: {
      zh: "異象六：「我看見一飛行的書卷，長二十肘，寬十肘」（5:2），約九公尺乘四點五公尺，大得人人看得見。這是「發出行在遍地上的咒詛」：偷竊的和起假誓的，必按卷上兩面的話除滅（5:3）。異象七：出來的是「量器」（原文 ephah），裡面坐著一個婦人，天使說：「這是罪惡」（5:6-8），一片圓鉛蓋在口上。兩個有鸛鳥翅膀的婦人把量器抬起，懸在天地中間，要往「示拿地」去，在那裡為它蓋房屋（5:9-11）。示拿地通常指巴比倫一帶。婦人與量器的象徵，經文沒有再解釋。",
      en: "Vision six: “I saw a flying scroll; its length was twenty cubits, and its breadth ten cubits” (5:2), about nine meters by four and a half, big enough for all to see. It is “the curse that goes out over the surface of the whole land”: thieves and those who swear falsely will be cut off according to the words on either side (5:3). Vision seven: what comes out is an “ephah” (a measuring basket), with a woman sitting in it; the angel says “This is Wickedness” (5:6–8), and a round lead cover is thrown over its mouth. Two women with stork-like wings lift the basket between earth and heaven, to the “land of Shinar,” to build it a house there (5:9–11). Shinar usually refers to the Babylon region. The symbolism of the woman and the basket is not explained further."
    },
    tip: {
      zh: "「示拿地」通常指巴比倫一帶；婦人與量器（5:5-11）的象徵，經文沒有進一步解釋，注釋書看法不一。",
      en: "“Shinar” usually means the Babylon region; the symbolism of the woman and basket (5:5–11) is not further explained, and commentaries differ."
    },
    related: ["by_my_spirit", "four_chariots", "fasting_question", "zechariah"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "four_chariots", book: "zechariah", no: 10, kind: "other", type: "power", rarity: 3,
    zh: "四輛車", en: "The Four Chariots",
    tag: { zh: "天的四風，從普天下的主面前出來", en: "The Four Winds from Before the Lord of All the Earth" },
    role: { zh: "第八個異象（6:1-8）", en: "The eighth vision (6:1–8)" },
    ch: [6],
    passages: ["6:1-8"],
    moves: [
      { zh: "從銅山中出來", en: "Out from Between Bronze Mountains", ref: "6:1-3",
        dzh: "四輛車從兩座銅山中間出來，套著紅馬、黑馬、白馬和有斑點的壯馬。",
        den: "Four chariots come out from between two mountains of bronze, with red, black, white and dappled horses." },
      { zh: "在遍地走來走去", en: "Walking Through the Earth", ref: "6:5-7",
        dzh: "天使說：這是天的四風，從普天下的主面前出來的；往北方去的使我心安慰。",
        den: "The angel says these are the four winds of the sky going out from the Lord of all the earth; those going north have given rest to his spirit." }
    ],
    traits: [
      { k: "strength", zh: "往北方去的，使耶和華的靈安息（6:8）", en: "Those going north have quieted Yahweh’s spirit (6:8)" },
      { k: "identity", zh: "與第一個異象的四色馬呼應（1:8）", en: "Echoes the colored horses of the first vision (1:8)" }
    ],
    lesson: {
      zh: "第一個異象的馬在地上走一圈回報「全地安息平靜」（1:11）；最後一個異象的馬是出去執行的（6:7）。八個異象，從回報開始，以出發收結。",
      en: "In the first vision the horses walk the earth and report that it is “at rest and quiet” (1:11); in the last vision the horses go out to carry out his purposes (6:7). The eight visions begin with a report and end with a sending out."
    },
    quote: { ref: "6:5",
      zh: "這是天的四風，是從普天下的主面前出來的",
      en: "These are the four winds of the sky" },
    keyVerses: ["6:1", "6:5", "6:6", "6:7", "6:8"],
    intro: {
      zh: "最後一個異象：「見有四輛車從兩山中間出來；那山是銅山」（6:1）。第一輛車套著紅馬，第二輛黑馬，第三輛白馬，第四輛有斑點的壯馬（6:2-3）。天使說：「這是天的四風，是從普天下的主面前出來的」（6:5）。黑馬往北方去，白馬跟隨，有斑點的往南方（6:6）；他們出來要在遍地走來走去（6:7）。6:8 說：「往北方去的已在北方安慰我的心」，北方在這卷書裡是巴比倫與擄掠者的方向（2:6）。馬的顏色、銅山的象徵，經文沒有解釋。",
      en: "The last vision: “I lifted up my eyes again, and saw four chariots come out from between two mountains; and the mountains were mountains of brass” (6:1). The first chariot has red horses, the second black, the third white, the fourth dappled, strong horses (6:2–3). The angel says: “These are the four winds of the sky, which go out from standing before the Lord of all the earth” (6:5). The black horses go north, the white follow, the dappled go south (6:6); they are to walk back and forth through the earth (6:7). Verse 8 says: “Behold, those who go toward the north country have quieted my spirit in the north country,” and north in this book is the direction of Babylon and the captors (2:6). The meaning of the horses’ colors and the bronze mountains is not explained."
    },
    tip: {
      zh: "馬的顏色、「兩座銅山」的象徵，經文沒有解釋；「往北方去的已在北方安慰我的心」，是指對巴比倫的審判已完成，但書沒有進一步說明。",
      en: "The colors of the horses and the “two mountains of bronze” are not explained; “those going north have quieted my spirit” suggests judgment on Babylon is settled, but the book says no more."
    },
    related: ["night_visions", "scroll_and_basket", "crowned_branch", "zechariah"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "crowned_branch", book: "zechariah", no: 11, kind: "other", type: "power", rarity: 4,
    zh: "給約書亞的冠冕", en: "A Crown for Joshua",
    tag: { zh: "兩職之間籌定和平", en: "Peace Between the Two Offices" },
    role: { zh: "異象之後的行動（6:9-15）", en: "An act after the visions (6:9–15)" },
    ch: [6],
    passages: ["6:9-15"],
    moves: [
      { zh: "取金銀做冠冕", en: "Silver and Gold for a Crown", ref: "6:10-11",
        dzh: "從被擄的人取金銀做冠冕，戴在大祭司約書亞頭上。",
        den: "Take silver and gold from the exiles, make a crown, and set it on Joshua the high priest’s head." },
      { zh: "名為苗裔的人", en: "The Man Named the Branch", ref: "6:12-13",
        dzh: "那名稱為苗裔的要建造耶和華的殿，擔負尊榮，坐在位上掌王權。",
        den: "The man whose name is the Branch will build Yahweh’s temple, bear the glory, and sit and rule on his throne." }
    ],
    traits: [
      { k: "strength", zh: "王權與祭司職分在一人身上合一", en: "Kingship and priesthood come together in one" },
      { k: "identity", zh: "冠冕歸在殿裡作記念（6:14）", en: "The crown is kept in the temple as a memorial (6:14)" }
    ],
    lesson: {
      zh: "這是書中少見的行動：先知取金銀做冠冕，戴在大祭司約書亞頭上（6:11）。可是話的對象轉到「名稱為苗裔的」（6:12），他要同時「坐在位上掌王權」，又「在位上作祭司」，「使兩職之間籌定和平」（6:13）。",
      en: "A rare action in the book: the prophet takes silver and gold, makes a crown and sets it on Joshua the high priest’s head (6:11). Yet the words turn to “the man whose name is the Branch” (6:12), who will both “sit and rule on his throne” and “be a priest on his throne,” with “the counsel of peace between them both” (6:13)."
    },
    quote: { ref: "6:13",
      zh: "並擔負尊榮，坐在位上掌王權",
      en: "he shall bear the glory, and shall sit and rule on his throne" },
    keyVerses: ["6:10", "6:11", "6:12", "6:13", "6:14", "6:15"],
    intro: {
      zh: "異象之後有一個行動：耶和華吩咐先知，從回來的被擄之人黑玳、多比雅、耶大雅那裡取金銀，到西番雅的兒子約西亞的家，「做冠冕，戴在約撒答的兒子大祭司約書亞的頭上」（6:10-11）。接著話轉了：「看哪，那名稱為大衛苗裔的，他要在本處長起來，並要建造耶和華的殿」（6:12；和合本作「大衛苗裔」）。他是被戴冠的約書亞本人，還是另一位將來的人，是這段最有爭議的地方：約書亞是祭司，不是大衛的後裔，所以戴冠的行動可能是預表。6:14 說冠冕要放在殿裡作記念；6:15 說遠方的人也要來建殿。",
      en: "After the visions comes an act: Yahweh tells the prophet to take silver and gold from the returned exiles Heldai, Tobijah and Jedaiah, go to the house of Josiah the son of Zephaniah, and “make crowns, and set them on the head of Joshua the son of Jehozadak, the high priest” (6:10–11). Then the words turn: “Behold, the man whose name is the Branch: and he shall grow up out of his place; and he shall build Yahweh’s temple” (6:12). Whether he is Joshua himself, crowned, or a future figure is the most debated point here: Joshua is a priest, not a descendant of David, so the crowning may be a sign pointing ahead. Verse 14 says the crown will be kept in the temple as a memorial; verse 15 says those far off will come and help build."
    },
    tip: {
      zh: "被戴冠的是約書亞，話裡的「苗裔」卻是「他」；兩者是否同一人，解經者看法不一。",
      en: "It is Joshua who is crowned, but the “Branch” in the words is “he”; whether they are the same person interpreters differ."
    },
    related: ["the_branch", "joshua_clothes", "by_my_spirit", "four_chariots"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "fasting_question", book: "zechariah", no: 12, kind: "other", type: "wisdom", rarity: 4,
    zh: "你們禁食，豈是向我禁食嗎？", en: "Did You Fast for Me?",
    tag: { zh: "按至理判斷，慈愛憐憫，不可欺壓寡婦孤兒", en: "Judge Truly, Show Mercy, Don’t Oppress the Widow and Orphan" },
    role: { zh: "禁食的問題（7:1-14）", en: "The question about fasting (7:1–14)" },
    ch: [7],
    passages: ["7:1-14"],
    moves: [
      { zh: "豈是向我禁食嗎", en: "Did You Fast to Me?", ref: "7:5-6",
        dzh: "你們這七十年禁食悲哀，豈是絲毫向我禁食嗎？你們吃喝不是為自己嗎？",
        den: "When you fasted and mourned for these seventy years, did you at all fast to me, really to me? Don’t you eat and drink for yourselves?" },
      { zh: "公平與憐憫", en: "Justice and Compassion", ref: "7:9-10",
        dzh: "要按至理判斷，各人以慈愛憐憫弟兄；不可欺壓寡婦、孤兒、寄居的和貧窮人。",
        den: "Execute true judgment and show kindness and compassion; don’t oppress the widow, the fatherless, the foreigner or the poor." }
    ],
    traits: [
      { k: "strength", zh: "先知把答案轉到「以前的先知」說過的話", en: "The prophet turns the answer back to what the former prophets said" },
      { k: "weakness", zh: "「使心硬如金鋼石」（7:12）", en: "“They made their hearts as hard as flint” (7:12)" }
    ],
    lesson: {
      zh: "伯特利人問：五月的禁食還要繼續嗎？（7:3）答覆沒有說「要」或「不要」，而是問禁食的對象：「豈是絲毫向我禁食嗎？」（7:5）真正的要求早已說過：公平、慈愛、不欺壓（7:9-10）。",
      en: "Bethel asks whether the fast of the fifth month should continue (7:3). The answer does not say “yes” or “no”; it asks who the fast is for: “did you at all fast to me?” (7:5). The real requirement had been stated long ago: justice, kindness, no oppression (7:9–10)."
    },
    quote: { ref: "7:5",
      zh: "你們這七十年，在五月、七月禁食悲哀，豈是絲毫向我禁食嗎",
      en: "did you at all fast to me, really to me?" },
    keyVerses: ["7:3", "7:5", "7:7", "7:9", "7:10", "7:12", "7:14"],
    intro: {
      zh: "大利烏王第四年九月初四日（7:1），伯特利人差人到殿裡問祭司和先知：「我歷年以來，在五月間哭泣齋戒，現在還當這樣行嗎？」（7:3）耶和華的回答（7:5-7）：你們這七十年在五月、七月禁食，是向我禁食嗎？你們吃喝不是為自己嗎？這些話不是新的，是從前的先知宣告過的。7:9-10 重述：「要按至理判斷，各人以慈愛憐憫弟兄。不可欺壓寡婦、孤兒、寄居的，和貧窮人。」列祖卻扭轉肩頭，塞耳不聽，使心硬如金鋼石（7:11-12）。五月、七月的禁食紀念甚麼，書中沒有寫；傳統上與殿被焚和基大利被殺有關。",
      en: "On the fourth day of the ninth month in the fourth year of Darius (7:1), Bethel sends men to the temple to ask the priests and prophets: “Should I weep in the fifth month, separating myself, as I have done these so many years?” (7:3). Yahweh’s answer (7:5–7): when you fasted in the fifth and seventh months these seventy years, did you fast to me? Don’t you eat and drink for yourselves? These words are not new; the former prophets already proclaimed them. Verses 9–10 repeat: “Execute true judgment, and show kindness and compassion every man to his brother. Don’t oppress the widow, nor the fatherless, the foreigner, nor the poor.” The fathers turned their shoulders and stopped their ears, making their hearts as hard as flint (7:11–12). What the fasts of the fifth and seventh months commemorate the book does not say; tradition links them to the burning of the temple and the murder of Gedaliah."
    },
    tip: {
      zh: "五月、七月禁食紀念甚麼，書中沒有說；「與殿被焚、基大利被殺有關」是傳統上的解釋。",
      en: "The book does not say what the fasts of the fifth and seventh months commemorate; the link to the burning of the temple and the killing of Gedaliah is the traditional explanation."
    },
    related: ["return_to_me", "fasts_to_feasts", "scroll_and_basket", "old_men_children"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "old_men_children", book: "zechariah", no: 13, kind: "other", type: "love", rarity: 5,
    zh: "街上的老人與孩子", en: "Old Men and Children in the Streets",
    tag: { zh: "耶路撒冷必稱為誠實的城", en: "Jerusalem Will Be Called the City of Truth" },
    role: { zh: "對耶路撒冷的應許（8:1-8）", en: "Promises for Jerusalem (8:1–8)" },
    ch: [8],
    passages: ["8:1-8"],
    moves: [
      { zh: "我回到錫安", en: "I Return to Zion", ref: "8:2-3",
        dzh: "我為錫安心裡極其火熱；我要住在耶路撒冷中，她必稱為誠實的城。",
        den: "“I am jealous for Zion with great jealousy… I will dwell in Jerusalem; Jerusalem will be called the city of truth.”" },
      { zh: "老人與孩子", en: "Old and Young", ref: "8:4-5",
        dzh: "年老的男女坐在耶路撒冷街上，手拿柺杖；街上滿有男孩女孩玩耍。",
        den: "Old men and old women dwell in the streets, each with a staff for age; the streets are full of boys and girls playing." }
    ],
    traits: [
      { k: "strength", zh: "平安說得很具體：街上、柺杖、玩耍", en: "Peace made concrete: streets, staffs, children at play" },
      { k: "identity", zh: "「誠實的城」「聖山」（8:3）", en: "“The city of truth,” “the holy mountain” (8:3)" }
    ],
    lesson: {
      zh: "耶和華對耶路撒冷的盼望，沒有用戰爭或建築說，而是用兩種人：年老的坐著，孩子玩耍（8:4-5）。城的安全，在日常的街道上才看得見。",
      en: "Yahweh’s hope for Jerusalem is not told in war or buildings but in two kinds of people: the old sitting, the children playing (8:4–5). A city’s safety shows in its ordinary streets."
    },
    quote: { ref: "8:5",
      zh: "城中街上必滿有男孩女孩玩耍",
      en: "The streets of the city will be full of boys and girls playing in its streets." },
    keyVerses: ["8:2", "8:3", "8:4", "8:5", "8:6", "8:7", "8:8"],
    intro: {
      zh: "第 8 章是一連串「萬軍之耶和華如此說」。8:3：「我現在回到錫安，要住在耶路撒冷中。耶路撒冷必稱為誠實的城，萬軍之耶和華的山必稱為聖山。」8:4-5 是全書最溫柔的一幅畫：年老的男女坐在街上，手拿柺杖；街上滿有男孩女孩玩耍。8:6 問：這事在餘剩的民眼中看為希奇，在我眼中也看為希奇嗎？8:7-8：我要從東方從西方救回我的民，使他們住在耶路撒冷中；「他們要作我的子民，我要作他們的神，都憑誠實和公義。」",
      en: "Chapter 8 is a string of “Yahweh of Armies says.” Verse 3: “I have returned to Zion, and will dwell in the middle of Jerusalem. Jerusalem shall be called the city of truth; and the mountain of Yahweh of Armies, the holy mountain.” Verses 4–5 are the book’s gentlest picture: old men and old women sitting in the streets, each with a staff; the streets full of boys and girls playing. Verse 6 asks: if it is marvelous in the eyes of the remnant, should it also be marvelous in mine? Verses 7–8: I will save my people from the east and the west, and bring them to dwell in Jerusalem; “they shall be my people, and I will be their God, in truth and in righteousness.”"
    },
    tip: {
      zh: "8:6 的問句沒有答案寫出來；它的語氣是「人覺得太難的事，在我眼中也算希奇嗎？」",
      en: "The question of 8:6 has no written answer; its tone is: what seems too hard to the remnant, is it also too hard in my eyes?"
    },
    related: ["wall_of_fire", "fasts_to_feasts", "fasting_question", "humble_king"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "fasts_to_feasts", book: "zechariah", no: 14, kind: "other", type: "harvest", rarity: 4,
    zh: "禁食變為節期", en: "Fasts Become Feasts",
    tag: { zh: "十個人拉住一個猶大人的衣襟", en: "Ten Men Take Hold of a Jew’s Robe" },
    role: { zh: "從強壯的手到萬國來歸（8:9-23）", en: "From strong hands to nations coming (8:9–23)" },
    ch: [8],
    passages: ["8:9-23"],
    moves: [
      { zh: "禁食變為歡喜", en: "Fasts Turn to Joy", ref: "8:19",
        dzh: "四月、五月、七月、十月禁食的日子，必變為猶大家歡喜快樂的節期。",
        den: "The fasts of the fourth, fifth, seventh and tenth months will be joy, gladness and cheerful feasts for the house of Judah." },
      { zh: "拉住衣襟", en: "Taking Hold of the Hem", ref: "8:23",
        dzh: "必有十個人從列國出來，拉住一個猶大人的衣襟：我們要與你們同去。",
        den: "Ten men from all languages will take hold of a Jew’s skirt, saying, “We will go with you, for we have heard that God is with you.”" }
    ],
    traits: [
      { k: "strength", zh: "回答了第 7 章禁食的問題", en: "Answers the fasting question of chapter 7" },
      { k: "identity", zh: "「手要強壯」（8:9、13）", en: "“Let your hands be strong” (8:9, 13)" }
    ],
    lesson: {
      zh: "第 7 章的問題「禁食還要繼續嗎」，在這裡得到完整的答覆：四個禁食的月份要變成歡喜的節期（8:19），條件是「喜愛誠實與和平」，各人說誠實話、在城門口按至理判斷（8:16、19）。",
      en: "The question of chapter 7, whether to keep fasting, is fully answered here: the four fasts will become joyful feasts (8:19), on condition of “love truth and peace,” speaking truth and judging truly in the gates (8:16, 19)."
    },
    quote: { ref: "8:19",
      zh: "必變為猶大家歡喜快樂的日子和歡樂的節期",
      en: "shall be for the house of Judah joy and gladness, and cheerful feasts" },
    keyVerses: ["8:9", "8:12", "8:13", "8:16", "8:19", "8:22", "8:23"],
    intro: {
      zh: "8:9 和 8:13 叫百姓「手裡強壯」，與哈該書的「剛強做工」相呼應。8:12 描寫將來：平安撒種，葡萄樹結果子，天降甘露；8:16-17 提出當行的事：各人與鄰舍說話誠實，在城門口按至理判斷，使人和睦，不謀害鄰舍，不喜愛起假誓。8:19 回答第 7 章的禁食問題：「四月、五月禁食的日子，七月、十月禁食的日子，必變為猶大家歡喜快樂的日子和歡樂的節期；所以你們要喜愛誠實與和平。」本章結尾是 8:23：十個人從列國出來，拉住一個猶大人的衣襟，說：「我們要與你們同去，因為我們聽見神與你們同在了。」",
      en: "Verses 9 and 13 tell the people to let their hands be strong, echoing Haggai’s “be strong and work.” Verse 12 describes the future: peaceful sowing, vines giving fruit, the heavens giving dew; verses 16–17 say what to do: speak truth to your neighbor, judge truly in your gates for peace, devise no evil against a neighbor, love no false oath. Verse 19 answers the fasting question of chapter 7: “The fasts of the fourth, fifth, seventh, and tenth months shall be for the house of Judah joy and gladness, and cheerful feasts. Therefore love truth and peace.” The chapter closes with 8:23: ten men from all the languages of the nations take hold of a Jew’s skirt, saying, “We will go with you, for we have heard that God is with you.”"
    },
    tip: {
      zh: "「十個人」是一個整數的說法，表示「許多人」；「猶大人」在這裡是以色列人的代表。",
      en: "“Ten men” is a round number meaning “many”; the “Jew” here stands for Israel."
    },
    related: ["fasting_question", "old_men_children", "humble_king", "zechariah"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "humble_king", book: "zechariah", no: 15, kind: "other", type: "heaven", rarity: 5,
    zh: "騎著驢的王", en: "The King on a Donkey",
    tag: { zh: "公義的，施行拯救，謙謙和和", en: "Righteous, Having Salvation, Lowly" },
    role: { zh: "第二部分的開場（9:9-17）", en: "The center of the first oracle (9:9–17)" },
    ch: [9],
    passages: ["9:9-17"],
    moves: [
      { zh: "你的王來了", en: "Your King Comes", ref: "9:9-10",
        dzh: "你的王來到你這裡！他是公義的，施行拯救，謙謙和和地騎著驢。",
        den: "“Behold, your King comes to you! He is righteous, and having salvation; lowly, and riding on a donkey.”" },
      { zh: "被囚而有指望的人", en: "Prisoners of Hope", ref: "9:11-12",
        dzh: "你們被囚而有指望的人，都要轉回保障；我必加倍賜福給你們。",
        den: "Turn to the stronghold, you prisoners of hope; even today I declare that I will restore double to you." }
    ],
    traits: [
      { k: "strength", zh: "他要除滅戰車、戰馬，向列國講和平（9:10）", en: "He will cut off chariot and horse and speak peace to the nations (9:10)" },
      { k: "identity", zh: "新約的引用：太 21:4-5；約 12:14-15", en: "New Testament citations: Matt 21:4–5; John 12:14–15" }
    ],
    lesson: {
      zh: "這位王的樣子：公義，施行拯救，謙和，騎驢，而不是戰馬（9:9）。他要除滅戰車與弓，向列國講和平，權柄從這海到那海（9:10）。馬太福音 21:4-5 與約翰福音 12:14-15 引用這節來說明耶穌進耶路撒冷。",
      en: "This king’s look: righteous, saving, lowly, on a donkey rather than a warhorse (9:9). He cuts off chariot and bow and speaks peace to the nations, his rule from sea to sea (9:10). Matthew 21:4–5 and John 12:14–15 cite the verse for Jesus’s entry into Jerusalem."
    },
    quote: { ref: "9:9",
      zh: "你的王來到你這裡！他是公義的，並且施行拯救",
      en: "Behold, your King comes to you! He is righteous, and having salvation" },
    keyVerses: ["9:9", "9:10", "9:11", "9:12", "9:16"],
    intro: {
      zh: "9:1-8 先說對鄰近城邑的審判：哈得拉、大馬士革、哈馬、泰爾、西頓、非利士的四城；然後 9:9 是全章的核心：「錫安的民哪，應當大大喜樂；耶路撒冷的民哪，應當歡呼。看哪，你的王來到你這裡！他是公義的，並且施行拯救，謙謙和和地騎著驢，就是騎著驢的駒子。」9:10 說他要除滅戰車、戰馬、戰弓，向列國講和平。9:11-12 是「被囚而有指望的人」：憑立約的血，被囚的人從無水的坑中被釋放。後面（9:13-15）卻又出現弓、箭和戰爭的語言，與 9:10 的和平並列，這兩種畫面如何對得上，解經者看法不一。",
      en: "Verses 1–8 first announce judgment on neighboring cities: Hadrach, Damascus, Hamath, Tyre, Sidon and four Philistine cities; then 9:9 is the heart of the chapter: “Rejoice greatly, daughter of Zion! Shout, daughter of Jerusalem! Behold, your King comes to you! He is righteous, and having salvation; lowly, and riding on a donkey, even on a colt, the foal of a donkey.” Verse 10 says he cuts off the chariot, horse and battle bow and speaks peace to the nations. Verses 11–12 are the “prisoners of hope”: by the blood of the covenant, prisoners are freed from the waterless pit. Later (9:13–15) bow, arrows and war language appear alongside the peace of 9:10; how the two pictures fit, interpreters differ."
    },
    tip: {
      zh: "9:13 的「希臘」（原文是雅完），年代與背景有不同的解釋；9:9 在新約的引用（太 21:4-5；約 12:14-15）各自有上下文。",
      en: "“Greece” (Hebrew Javan) in 9:13 is explained in different ways as to date and setting; the New Testament citations of 9:9 (Matt 21:4–5; John 12:14–15) each have their own context."
    },
    related: ["apple_of_eye", "scattered_flock", "fasts_to_feasts", "struck_shepherd", "zechariah"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "scattered_flock", book: "zechariah", no: 16, kind: "other", type: "beast", rarity: 3,
    zh: "如羊流離，無牧人受苦", en: "Sheep Without a Shepherd",
    tag: { zh: "耶和華眷顧自己的羊群", en: "Yahweh Visits His Flock" },
    role: { zh: "對假牧人的怒與對羊群的眷顧（10:1-12）", en: "Anger at false shepherds, care for the flock (10:1–12)" },
    ch: [10],
    passages: ["10:1-12"],
    moves: [
      { zh: "虛空的家神", en: "Idols Speak Vanity", ref: "10:2",
        dzh: "家神所言的是虛空，卜士所見的是虛假，所以眾人如羊流離，因無牧人就受苦。",
        den: "The household gods speak vanity and the diviners see a lie, so the people go their way like sheep, oppressed because there is no shepherd." },
      { zh: "眷顧自己的羊群", en: "He Visits His Flock", ref: "10:3-6",
        dzh: "我的怒氣向牧人發作；我眷顧自己的羊群，要堅固猶大家，拯救約瑟家。",
        den: "My anger burns against the shepherds; I have visited my flock, and will strengthen the house of Judah and save the house of Joseph." }
    ],
    traits: [
      { k: "strength", zh: "他要像出埃及一樣領他們回來（10:10-11）", en: "He will bring them back as in the Exodus (10:10–11)" },
      { k: "weakness", zh: "假牧人用虛假的安慰", en: "False shepherds comfort in vain" }
    ],
    lesson: {
      zh: "羊的苦不是因為羊太弱，而是「因無牧人」（10:2）。耶和華的回應有兩面：向牧人發怒，向羊群眷顧，並把牠們變成「陣上的駿馬」（10:3）。",
      en: "The sheep suffer not because they are weak but “because there is no shepherd” (10:2). Yahweh’s response has two sides: anger toward the shepherds and care for the flock, which he makes “as his majestic horse in the battle” (10:3)."
    },
    quote: { ref: "10:2",
      zh: "因無牧人就受苦",
      en: "They are oppressed, because there is no shepherd." },
    keyVerses: ["10:1", "10:2", "10:3", "10:6", "10:8", "10:10"],
    intro: {
      zh: "10:1 勸人「當春雨的時候，你們要向發閃電的耶和華求雨」。10:2 說原因：「家神所言的是虛空；卜士所見的是虛假；做夢者所說的是假夢。他們白白地安慰人，所以眾人如羊流離，因無牧人就受苦。」10:3 說祂向牧人發怒，眷顧自己的羊群，使猶大如駿馬在陣上。10:6-10 是回來的應許：堅固猶大家，拯救約瑟家，「我已經救贖他們」，也要把他們從埃及、亞述招聚歸回。10:11 用出埃及的畫面：耶和華必經過苦海，擊打海浪。這裡的「牧人」指統治者，常見於古代近東對王的稱呼。",
      en: "Verse 1 urges, “Ask of Yahweh rain in the spring time, even of Yahweh who makes storm clouds.” Verse 2 gives the reason: “For the teraphim have spoken vanity, and the diviners have seen a lie; and they have told false dreams. They comfort in vain. Therefore they go their way like sheep. They are oppressed, because there is no shepherd.” Verse 3 says his anger burns against the shepherds, he visits his flock and makes Judah like a majestic horse in battle. Verses 6–10 promise a return: strengthen Judah, save Joseph, “I have redeemed them,” and gather them from Egypt and Assyria. Verse 11 uses the Exodus picture: Yahweh passes through the sea of affliction and strikes the waves. The “shepherds” here are rulers, a common ancient Near Eastern title for kings."
    },
    tip: {
      zh: "「牧人」在這裡指統治者；「公山羊」（10:3）指領頭的人，是比喻。",
      en: "“Shepherds” here means rulers; the “male goats” (10:3) are leaders, a figure of speech."
    },
    related: ["humble_king", "two_staffs", "struck_shepherd", "zechariah"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "two_staffs", book: "zechariah", no: 17, kind: "other", type: "wisdom", rarity: 5,
    zh: "兩根杖與三十塊錢", en: "Two Staffs and Thirty Pieces of Silver",
    tag: { zh: "「榮美」與「聯索」；丟給窯戶", en: "“Favor” and “Union”; Thrown to the Potter" },
    role: { zh: "牧人的記號行動（11:1-17）", en: "The shepherd’s sign-acts (11:1–17)" },
    ch: [11],
    passages: ["11:1-17"],
    moves: [
      { zh: "榮美與聯索", en: "Favor and Union", ref: "11:7",
        dzh: "我牧養這將宰的群羊，拿著兩根杖，一根稱「榮美」，一根稱「聯索」。",
        den: "I fed the flock of slaughter, and took two staffs: one I called “Favor,” the other “Union.”" },
      { zh: "三十塊錢", en: "Thirty Pieces of Silver", ref: "11:12-13",
        dzh: "他們給了三十塊錢作我的工價；我在耶和華的殿中丟給窯戶了。",
        den: "They weighed for my wages thirty pieces of silver; I threw them to the potter in Yahweh’s house." }
    ],
    traits: [
      { k: "strength", zh: "做牧人，也承擔被輕看的工價", en: "Acts as shepherd and bears the low wages" },
      { k: "weakness", zh: "折斷兩根杖——約與情誼都廢棄（11:10、14）", en: "Both staffs are broken — covenant and brotherhood annulled (11:10, 14)" }
    ],
    lesson: {
      zh: "先知被叫去演一個牧人：牧養將宰的羊，卻被厭煩，最後只得三十塊錢（11:7-13）。馬太福音 27:3-10 把猶大賣耶穌的三十塊錢，和這裡的「丟給窯戶」連起來。",
      en: "The prophet is told to play a shepherd: to feed sheep marked for slaughter, be loathed, and receive only thirty pieces of silver (11:7–13). Matthew 27:3–10 links the thirty pieces Judas took to the “thrown to the potter” here."
    },
    quote: { ref: "11:12",
      zh: "於是他們給了三十塊錢作為我的工價",
      en: "So they weighed for my wages thirty pieces of silver" },
    keyVerses: ["11:4", "11:7", "11:8", "11:10", "11:12", "11:13", "11:14"],
    intro: {
      zh: "11:1-3 先是黎巴嫩的香柏樹傾倒、牧人哀號、獅子咆哮。然後耶和華吩咐撒迦利亞：「你要牧養這將宰的群羊」（11:4），買他們的宰了他們，賣他們的說「耶和華是應當稱頌的，因我成為富足」（11:5）。先知拿兩根杖：「榮美」和「聯索」（11:7）。他在一月之內除滅三個牧人（11:8，「三個牧人」是誰，歷來有許多說法，經文沒有指名），折斷「榮美」表示廢棄與萬民所立的約（11:10），折斷「聯索」表示廢棄猶大與以色列的情誼（11:14）。工價是三十塊錢，耶和華吩咐「丟給窯戶」（11:12-13）。馬太福音 27:9-10 說這「應了先知耶利米的話」，原文引句與撒迦利亞書的用字最接近，為何寫耶利米，歷來有不同解釋。11:15-17 是一個無用的牧人。",
      en: "Verses 1–3 open with cedars of Lebanon falling, shepherds wailing and lions roaring. Then Yahweh tells Zechariah: “Feed the flock of slaughter” (11:4), whose buyers slaughter them and whose sellers say “Blessed be Yahweh, for I am rich” (11:5). The prophet takes two staffs: “Favor” and “Union” (11:7). In one month he cuts off three shepherds (11:8; who the “three shepherds” are has had many answers; the text names none), breaks “Favor” to show the annulling of his covenant with all the peoples (11:10), breaks “Union” to annul the brotherhood between Judah and Israel (11:14). His wages are thirty pieces of silver, and Yahweh says, “Throw it to the potter” (11:12–13). Matthew 27:9–10 says this “was fulfilled through Jeremiah the prophet”; the quoted wording is closest to Zechariah, and why Jeremiah is named has had different explanations. Verses 15–17 describe a worthless shepherd."
    },
    tip: {
      zh: "「三個牧人」是誰，經文沒有指名；馬太福音 27:9 稱引句是「先知耶利米的話」，與撒迦利亞書的對應和原因，各有不同解釋。",
      en: "Who the “three shepherds” are the text does not say; Matthew 27:9 calls the quotation “Jeremiah’s,” and how it corresponds to Zechariah and why has different explanations."
    },
    related: ["scattered_flock", "struck_shepherd", "humble_king", "zechariah"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "heavy_stone", book: "zechariah", no: 18, kind: "other", type: "power", rarity: 3,
    zh: "重石頭與昏醉的杯", en: "A Burdensome Stone and a Cup of Reeling",
    tag: { zh: "凡舉起的必受重傷", en: "All Who Lift It Will Be Wounded" },
    role: { zh: "那日耶路撒冷的保護（12:1-9）", en: "Jerusalem’s protection in that day (12:1–9)" },
    ch: [12],
    passages: ["12:1-9"],
    moves: [
      { zh: "昏醉的杯", en: "A Cup of Reeling", ref: "12:2",
        dzh: "我必使耶路撒冷被圍困的時候，向四圍列國成為令人昏醉的杯。",
        den: "I will make Jerusalem a cup of reeling to all the surrounding peoples when it is besieged." },
      { zh: "一塊重石頭", en: "A Burdensome Stone", ref: "12:3",
        dzh: "我必使耶路撒冷向聚集攻擊他的萬民當作一塊重石頭；凡舉起的必受重傷。",
        den: "I will make Jerusalem a burdensome stone for all the peoples; all who burden themselves with it will be severely wounded." }
    ],
    traits: [
      { k: "strength", zh: "馬匹驚惶，騎馬的顛狂（12:4）", en: "Horses panic and riders go mad (12:4)" },
      { k: "identity", zh: "軟弱的必如大衛（12:8）", en: "The weakest will be like David (12:8)" }
    ],
    lesson: {
      zh: "耶路撒冷在這裡不是被圍困的受害者，而是一塊搬不動的石頭、一杯讓攻擊者昏醉的酒（12:2-3）。保護的來源是耶和華，所以猶大的族長說：「耶路撒冷的居民倚靠萬軍之耶和華，就作我們的能力」（12:5）。",
      en: "Jerusalem is here not a besieged victim but a stone that cannot be shifted and a cup that makes attackers reel (12:2–3). The protection comes from Yahweh, so the clan chiefs of Judah say, “The inhabitants of Jerusalem are my strength in Yahweh of Armies, their God” (12:5)."
    },
    quote: { ref: "12:3",
      zh: "我必使耶路撒冷向聚集攻擊他的萬民當作一塊重石頭",
      en: "I will make Jerusalem a burdensome stone for all the peoples" },
    keyVerses: ["12:1", "12:2", "12:3", "12:4", "12:6", "12:8", "12:9"],
    intro: {
      zh: "第二段「默示」是「論以色列」（12:1），開頭是創造者的名號：鋪張諸天、建立地基、造人裡面之靈的耶和華。12:2-3：耶路撒冷被圍困的時候，成為令人昏醉的杯，也成為一塊重石頭，凡舉起的必受重傷。12:4 說馬匹驚惶、騎馬的顛狂；12:6 說猶大的族長如火盆在木柴中、火把在禾捆裡。12:7 說耶和華先拯救猶大的帳棚，免得大衛家的榮耀勝過猶大；12:8 說軟弱的必如大衛，大衛的家必如神。這些畫面的時間，是近期的歷史、末後的日子，或兩者，注釋家看法不一。",
      en: "The second “oracle” is “concerning Israel” (12:1), opening with the creator’s titles: Yahweh who stretches out the heavens, lays the foundation of the earth and forms the spirit of man within him. Verses 2–3: when Jerusalem is besieged it becomes a cup of reeling and a burdensome stone, and all who lift it are wounded. Verse 4 says horses panic and riders go mad; verse 6 says Judah’s clan chiefs are like a fire pan in wood and a torch among sheaves. Verse 7 says Yahweh will save Judah’s tents first, so that David’s house and Jerusalem’s inhabitants do not glory over Judah; verse 8 says the feeble will be like David and David’s house like God. Whether these pictures concern near history, the latter days or both, commentators differ."
    },
    tip: {
      zh: "12 到 14 章的「那日」指甚麼時候，解經者有近期歷史、末後的日子、象徵三種主要讀法。",
      en: "Interpreters read “that day” in chapters 12–14 as near history, the latter days or symbolically."
    },
    related: ["pierced_one", "mount_of_olives", "scattered_flock", "zechariah"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "pierced_one", book: "zechariah", no: 19, kind: "other", type: "love", rarity: 5,
    zh: "仰望所扎的", en: "They Will Look on the One They Pierced",
    tag: { zh: "為獨生子悲哀", en: "Mourning as for an Only Son" },
    role: { zh: "恩典的靈與悲哀（12:10-14）", en: "The spirit of grace and the mourning (12:10–14)" },
    ch: [12],
    passages: ["12:10-14"],
    moves: [
      { zh: "施恩叫人懇求的靈", en: "The Spirit of Grace", ref: "12:10",
        dzh: "我必將那施恩叫人懇求的靈，澆灌大衛家和耶路撒冷的居民。",
        den: "“I will pour on David’s house, and on the inhabitants of Jerusalem, the spirit of grace and of supplication.”" },
      { zh: "仰望所扎的", en: "Look on the Pierced", ref: "12:10",
        dzh: "他們必仰望我，就是他們所扎的；必為我悲哀，如喪獨生子。",
        den: "They will look to me whom they have pierced, and mourn as one mourns for an only son." }
    ],
    traits: [
      { k: "strength", zh: "悲哀是被恩典的靈帶出來的", en: "The mourning is brought out by the spirit of grace" },
      { k: "identity", zh: "約 19:37、啟 1:7 引用這句", en: "Quoted in John 19:37 and Revelation 1:7" }
    ],
    lesson: {
      zh: "悲哀不是被迫的，而是先有「施恩叫人懇求的靈」澆灌，然後才有仰望與悲哀（12:10）。家家戶戶男女分開悲哀（12:12-14），沒有人被略過。",
      en: "The mourning is not forced: first the spirit of grace and supplication is poured out, then comes the looking and mourning (12:10). Household by household, men and women apart (12:12–14), no one is passed over."
    },
    quote: { ref: "12:10",
      zh: "他們必仰望我，就是他們所扎的",
      en: "they will look to me whom they have pierced" },
    keyVerses: ["12:10", "12:11", "12:12", "12:13", "12:14"],
    intro: {
      zh: "12:10 是全書最受矚目的一句：「我必將那施恩叫人懇求的靈，澆灌大衛家和耶路撒冷的居民。他們必仰望我（和合本註：或譯，他；本節同），就是他們所扎的；必為我悲哀，如喪獨生子，又為我愁苦，如喪長子。」「我」與「他」的差別：WEB 是「me」，說話的是耶和華，所以「所扎的」是耶和華自己；有版本與註作「他」。約翰福音 19:37 引用「他們要仰望自己所扎的人」，啟示錄 1:7 也呼應這句，都用在耶穌身上。12:11 的「哈達臨門的悲哀」在米吉多平原，有人連到約西亞在米吉多被殺（王下 23:29），也有人連到迦南神明的哀悼儀式；經文沒有說明。",
      en: "Verse 10 is the book’s most noticed line: “I will pour on David’s house, and on the inhabitants of Jerusalem, the spirit of grace and of supplication; and they will look to me whom they have pierced; and they shall mourn for him, as one mourns for his only son, and will grieve bitterly for him, as one grieves for his firstborn.” The difference between “me” and “him”: the WEB has “me,” with Yahweh speaking, so the pierced one is Yahweh himself; some versions and the CUV note have “him.” John 19:37 quotes “They will look on him whom they pierced,” and Revelation 1:7 echoes it, both applying it to Jesus. The “mourning of Hadad-rimmon” in the plain of Megiddo (12:11) has been linked to Josiah’s death at Megiddo (2 Kgs 23:29) and to the mourning rites of a Canaanite deity; the text does not say."
    },
    tip: {
      zh: "「仰望我／他，就是他們所扎的」的人稱有兩種讀法（和合本註：或譯他）；「哈達臨門」的悲哀指甚麼，經文沒有說明。",
      en: "The pronoun in “look to me/him whom they have pierced” has two readings (the CUV note: “or him”); what the “Hadad-rimmon” mourning refers to the text does not say."
    },
    related: ["heavy_stone", "fountain_cleansing", "struck_shepherd", "zechariah"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "fountain_cleansing", book: "zechariah", no: 20, kind: "other", type: "love", rarity: 4,
    zh: "洗除罪惡的泉源", en: "A Spring for Sin and Uncleanness",
    tag: { zh: "偶像的名不再被記念", en: "Idols’ Names Remembered No More" },
    role: { zh: "那日的潔淨（13:1-6）", en: "Cleansing in that day (13:1–6)" },
    ch: [13],
    passages: ["13:1-6"],
    moves: [
      { zh: "開一個泉源", en: "A Spring Opened", ref: "13:1",
        dzh: "那日，必給大衛家和耶路撒冷的居民開一個泉源，洗除罪惡與污穢。",
        den: "In that day there will be a spring opened to David’s house and to the inhabitants of Jerusalem, for sin and for uncleanness." },
      { zh: "假先知不再", en: "False Prophets Gone", ref: "13:2-5",
        dzh: "我必除滅偶像的名，使這地不再有假先知與污穢的靈；他們說：我不是先知，我是耕地的。",
        den: "I will cut off the names of the idols and remove the prophets and the spirit of uncleanness; one will say, “I am no prophet; I am a tiller of the ground.”" }
    ],
    traits: [
      { k: "strength", zh: "潔淨是被「開」出來的，不是自己洗的", en: "Cleansing is “opened,” not self-made" },
      { k: "weakness", zh: "對假預言的處罰極重（13:3）", en: "The penalty for false prophecy is severe (13:3)" }
    ],
    lesson: {
      zh: "「泉源」是被開的（13:1），是神給的洗除。接著是對偶像和假先知的清除：偶像的名不再被記念（13:2），假先知羞愧地承認自己只是耕地的（13:4-5）。",
      en: "The spring is “opened” (13:1), a cleansing God gives. Then comes the removal of idols and false prophets: idols’ names no longer remembered (13:2), false prophets ashamed, admitting they are only farmers (13:4–5)."
    },
    quote: { ref: "13:1",
      zh: "必給大衛家和耶路撒冷的居民開一個泉源，洗除罪惡與污穢",
      en: "there will be a spring opened to David’s house and to the inhabitants of Jerusalem" },
    keyVerses: ["13:1", "13:2", "13:3", "13:4", "13:5", "13:6"],
    intro: {
      zh: "13:1 以「那日」開始：給大衛家和耶路撒冷的居民開一個泉源，洗除罪惡與污穢。13:2 說要從地上除滅偶像的名，也使這地不再有假先知與污穢的靈。13:3 的處罰很重：若再有人說預言，生他的父母要把他刺透；這是在假預言被完全禁止、連父母也不能包庇的背景下說的，是一句難讀的經文。13:4-5 說假先知不再穿毛衣哄騙人，並說「我不是先知，我是耕地的」。13:6 有人問他兩臂中間是甚麼傷，他說是在親友家中所受的；這傷是偶像崇拜的自傷、還是別的，經文沒有說明。",
      en: "Verse 1 begins “In that day”: a spring opened to David’s house and to the inhabitants of Jerusalem, for sin and for uncleanness. Verse 2 says the names of the idols will be cut off and the land will no longer have prophets and the spirit of uncleanness. Verse 3’s penalty is severe: if anyone still prophesies, his father and mother who bore him will pierce him through; it is said against a background where false prophecy is wholly forbidden even by parents, and is a hard verse to read. Verses 4–5 say prophets will no longer wear a hairy cloak to deceive, and one will say, “I am no prophet, I am a tiller of the ground.” In 6 someone asks what the wounds between his arms are, and he says he got them in his friends’ house; whether these are self-inflicted wounds of idolatry or something else the text does not say."
    },
    tip: {
      zh: "13:3 是難讀的經文；13:6 的「傷」指甚麼，經文沒有說明。",
      en: "13:3 is a hard text; what the “wounds” of 13:6 refer to the text does not say."
    },
    related: ["pierced_one", "struck_shepherd", "joshua_clothes", "zechariah"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "struck_shepherd", book: "zechariah", no: 21, kind: "other", type: "faith", rarity: 4,
    zh: "被擊的牧人", en: "The Struck Shepherd",
    tag: { zh: "經火熬煉的三分之一", en: "The Third Refined Through Fire" },
    role: { zh: "牧人與餘民（13:7-9）", en: "The shepherd and the remnant (13:7–9)" },
    ch: [13],
    passages: ["13:7-9"],
    moves: [
      { zh: "擊打牧人", en: "Strike the Shepherd", ref: "13:7",
        dzh: "刀劍哪，應當興起，攻擊我的牧人；擊打牧人，羊就分散。",
        den: "“Awake, sword, against my shepherd… Strike the shepherd, and the sheep will be scattered.”" },
      { zh: "經火熬煉", en: "Refined by Fire", ref: "13:8-9",
        dzh: "三分之二必剪除，三分之一經火熬煉如銀子，他們必求告我的名。",
        den: "Two parts are cut off and die, but the third is brought into the fire and refined as silver; they will call on my name." }
    ],
    traits: [
      { k: "strength", zh: "試煉後的對話：「這是我的子民」「耶和華是我們的神」", en: "The post-trial exchange: “It is my people” and “Yahweh is my God”" },
      { k: "weakness", zh: "「我的牧人」被擊，羊分散", en: "“My shepherd” struck and the sheep scattered" }
    ],
    lesson: {
      zh: "「我的牧人」是誰，經文沒有說。馬太福音 26:31 引用「我要擊打牧人，羊就分散了」（耶穌在門徒四散之前）。結局不是毀滅，而是三分之一經火後說出一句最簡單的話：「耶和華是我們的神」（13:9）。",
      en: "Who “my shepherd” is the text does not say. Matthew 26:31 quotes “I will strike the shepherd, and the sheep of the flock will be scattered” (Jesus, before the disciples’ scattering). The end is not destruction but one third who, after the fire, say the simplest line: “Yahweh is my God” (13:9)."
    },
    quote: { ref: "13:7",
      zh: "擊打牧人，羊就分散",
      en: "Strike the shepherd, and the sheep will be scattered" },
    keyVerses: ["13:7", "13:8", "13:9"],
    intro: {
      zh: "13:7：「萬軍之耶和華說：刀劍哪，應當興起，攻擊我的牧人和我的同伴。擊打牧人，羊就分散；我必反手加在微小者的身上。」這位「我的牧人」「我的同伴」是誰，經文沒有說明；與第 11 章的無用牧人不同。13:8-9：全地的人三分之二必剪除而死，三分之一仍必存留；耶和華要使這三分之一經火，「熬煉他們，如熬煉銀子；試煉他們，如試煉金子。他們必求告我的名，我必應允他們。我要說：這是我的子民。他們也要說：耶和華是我們的神。」馬太福音 26:31 在耶穌被捕之前，引用了 13:7 的前半句。",
      en: "Verse 7: “Awake, sword, against my shepherd, and against the man who is close to me,” says Yahweh of Armies. “Strike the shepherd, and the sheep will be scattered; and I will turn my hand against the little ones.” Who this “my shepherd,” “the man close to me,” is the text does not say; he differs from the worthless shepherd of chapter 11. Verses 8–9: in all the land two parts will be cut off and die, but the third will be left; Yahweh will bring this third into the fire, “refine them as silver is refined, and will test them like gold is tested. They will call on my name, and I will hear them. I will say, ‘It is my people;’ and they will say, ‘Yahweh is my God.’” Matthew 26:31 quotes the first half of 13:7 just before Jesus’s arrest."
    },
    tip: {
      zh: "「我的牧人」是誰，經文沒有說明；馬太福音 26:31 的引用有它自己的上下文。",
      en: "Who “my shepherd” is the text does not say; the citation in Matthew 26:31 has its own context."
    },
    related: ["two_staffs", "pierced_one", "scattered_flock", "zechariah"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "mount_of_olives", book: "zechariah", no: 22, kind: "other", type: "power", rarity: 4,
    zh: "橄欖山裂開", en: "The Mount of Olives Splits",
    tag: { zh: "他的腳必站在橄欖山上", en: "His Feet Will Stand on the Mount of Olives" },
    role: { zh: "耶和華的日子（14:1-5）", en: "The day of Yahweh (14:1–5)" },
    ch: [14],
    passages: ["14:1-5"],
    moves: [
      { zh: "萬國與耶路撒冷爭戰", en: "Nations Against Jerusalem", ref: "14:1-3",
        dzh: "耶和華的日子臨近；萬國聚集與耶路撒冷爭戰，城被攻取，剩下的民不致剪除。",
        den: "The day of Yahweh is near; the nations gather against Jerusalem and take the city, yet the rest of the people are not cut off." },
      { zh: "站在橄欖山上", en: "On the Mount of Olives", ref: "14:4",
        dzh: "他的腳必站在橄欖山上；這山從中間分裂，成為極大的谷。",
        den: "His feet will stand on the Mount of Olives, and it will split in two from east to west, making a very great valley." }
    ],
    traits: [
      { k: "strength", zh: "耶和華親自出去爭戰（14:3）", en: "Yahweh himself goes out to fight (14:3)" },
      { k: "identity", zh: "如烏西雅年間的大地震（14:5）", en: "Like the earthquake in Uzziah’s days (14:5)" }
    ],
    lesson: {
      zh: "全書結尾的畫面在 14 章開始：城被攻取，但「剩下的民仍在城中，不致剪除」（14:2）；然後耶和華親自出去爭戰，腳站在橄欖山上，山裂成谷，給逃走的人一條路（14:3-5）。",
      en: "The book’s closing picture begins in chapter 14: the city is taken, yet “the rest of the people won’t be cut off from the city” (14:2); then Yahweh himself goes out to fight, his feet on the Mount of Olives, the mountain splitting into a valley that gives the fleeing a way (14:3–5)."
    },
    quote: { ref: "14:4",
      zh: "他的腳必站在耶路撒冷前面朝東的橄欖山上",
      en: "His feet will stand in that day on the Mount of Olives" },
    keyVerses: ["14:1", "14:2", "14:3", "14:4", "14:5"],
    intro: {
      zh: "14:1：「耶和華的日子臨近，你的財物必被搶掠，在你中間分散。」14:2 說耶和華聚集萬國與耶路撒冷爭戰，城被攻取，一半的民被擄，剩下的仍在城中。14:3：「那時，耶和華必出去與那些國爭戰，好像從前爭戰一樣。」14:4 是全章的畫面：祂的腳站在朝東的橄欖山上，山從中間分裂，一半向北、一半向南挪移，成為極大的谷；14:5 說逃跑的人要從這谷中逃，「如猶大王烏西雅年間的人逃避大地震一樣」（阿摩司書 1:1 也提到這次地震）。這段是字面的末後事件、近期的歷史，或是象徵，解經者有不同讀法。",
      en: "Verse 1: “Behold, a day of Yahweh comes, when your plunder will be divided within you.” Verse 2 says Yahweh gathers all nations against Jerusalem to battle; the city is taken, half the people go into captivity, the rest stay in the city. Verse 3: “Then Yahweh will go out and fight against those nations, as when he fought in the day of battle.” Verse 4 is the picture of the chapter: his feet stand on the Mount of Olives on the east, the mountain splits in two, half moving north and half south, making a very great valley; verse 5 says the fleeing will flee through this valley “as you fled from before the earthquake in the days of Uzziah king of Judah” (Amos 1:1 also mentions that earthquake). Whether this is a literal future event, near history or symbolic, interpreters read differently."
    },
    tip: {
      zh: "14 章是字面的末後事件、近期歷史，還是象徵，解經者有不同讀法；烏西雅年間的地震也見於阿摩司書 1:1。",
      en: "Whether chapter 14 is a literal future event, near history or symbolic, interpreters read differently; the earthquake in Uzziah’s days is also in Amos 1:1."
    },
    related: ["heavy_stone", "living_water", "holy_to_yahweh", "zechariah"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "living_water", book: "zechariah", no: 23, kind: "other", type: "harvest", rarity: 4,
    zh: "活水從耶路撒冷流出", en: "Living Waters from Jerusalem",
    tag: { zh: "耶和華必作全地的王", en: "Yahweh Will Be King over All the Earth" },
    role: { zh: "那日的新景象（14:6-11）", en: "The new scene of that day (14:6–11)" },
    ch: [14],
    passages: ["14:6-11"],
    moves: [
      { zh: "活水流出", en: "Living Waters", ref: "14:8",
        dzh: "那日，必有活水從耶路撒冷出來，一半往東海流，一半往西海流；冬夏都是如此。",
        den: "In that day living waters will go out from Jerusalem, half toward the eastern sea and half toward the western sea, in summer and in winter." },
      { zh: "耶和華作全地的王", en: "King over All the Earth", ref: "14:9",
        dzh: "耶和華必作全地的王；那日耶和華必為獨一無二的，他的名也是獨一無二的。",
        den: "Yahweh will be King over all the earth; in that day Yahweh will be one, and his name one." }
    ],
    traits: [
      { k: "strength", zh: "水不分冬夏", en: "The water flows winter and summer alike" },
      { k: "identity", zh: "與結 47:1 的殿的水相呼應", en: "Echoes the temple waters of Ezekiel 47:1" }
    ],
    lesson: {
      zh: "「活水」從耶路撒冷出來，不分冬夏（14:8），與以西結書 47:1 從殿門檻下流出的水相呼應。耶和華作全地的王，祂的名獨一無二（14:9）。",
      en: "“Living waters” go out from Jerusalem, summer and winter (14:8), echoing the water from beneath the temple threshold in Ezekiel 47:1. Yahweh is King over all the earth and his name one (14:9)."
    },
    quote: { ref: "14:8",
      zh: "必有活水從耶路撒冷出來",
      en: "living waters will go out from Jerusalem" },
    keyVerses: ["14:6", "14:7", "14:8", "14:9", "14:10", "14:11"],
    intro: {
      zh: "14:6-7 先描寫那日的光：沒有光，三光退縮；那日是耶和華所知道的，不是白晝，也不是黑夜，到了晚上才有光明。14:8：「那日，必有活水從耶路撒冷出來，一半往東海流，一半往西海流；冬夏都是如此。」東海通常指死海，西海指地中海。以西結書 47:1 的殿的水也往東流，兩處的畫面相近，兩者關係，經文沒有說明。14:9：「耶和華必作全地的王。那日耶和華必為獨一無二的，他的名也是獨一無二的。」14:10-11 說全地變為亞拉巴（平原），耶路撒冷仍居高位，人必住在其中，不再有咒詛。",
      en: "Verses 6–7 first describe the light of that day: no light, the luminaries dwindle; the day is known to Yahweh, neither day nor night, and at evening time there is light. Verse 8: “It will happen in that day, that living waters will go out from Jerusalem; half of them toward the eastern sea, and half of them toward the western sea; in summer and in winter will it be.” The eastern sea is usually the Dead Sea, the western the Mediterranean. The waters of the temple in Ezekiel 47:1 also flow east; the pictures are similar, and the text does not explain the relation. Verse 9: “Yahweh will be King over all the earth. In that day Yahweh will be one, and his name one.” Verses 10–11 say the whole land becomes like the Arabah (a plain), Jerusalem remains lifted up, people live in her, and there is no more curse."
    },
    tip: {
      zh: "14:6-7 的「不是白晝，也不是黑夜」，經文沒有進一步解釋；「東海」通常指死海，「西海」指地中海。",
      en: "“Neither day nor night” in 14:6–7 is not explained further; the “eastern sea” is usually the Dead Sea and the “western sea” the Mediterranean."
    },
    related: ["mount_of_olives", "holy_to_yahweh", "fountain_cleansing", "zechariah"]
  },

  // ── 024 ──────────────────────────────────────────────────────────────────
  {
    id: "holy_to_yahweh", book: "zechariah", no: 24, kind: "other", type: "faith", rarity: 4,
    zh: "馬的鈴鐺上寫著「歸耶和華為聖」", en: "“Holy to Yahweh” on the Horses’ Bells",
    tag: { zh: "連鍋都歸耶和華為聖", en: "Even the Cooking Pots Are Holy" },
    role: { zh: "全書的結尾（14:12-21）", en: "The book’s close (14:12–21)" },
    ch: [14],
    passages: ["14:12-21"],
    moves: [
      { zh: "年年上來守棚節", en: "Up Each Year for Booths", ref: "14:16",
        dzh: "列國剩下的人必年年上來敬拜大君王，並守住棚節。",
        den: "Everyone left of all the nations will go up from year to year to worship the King, Yahweh of Armies, and to keep the feast of tents." },
      { zh: "歸耶和華為聖", en: "Holy to Yahweh", ref: "14:20-21",
        dzh: "馬的鈴鐺上必有「歸耶和華為聖」；耶路撒冷和猶大的鍋都歸耶和華為聖。",
        den: "On the horses’ bells will be “HOLY TO YAHWEH,” and every pot in Jerusalem and Judah will be holy to Yahweh of Armies." }
    ],
    traits: [
      { k: "strength", zh: "「聖」進入最日常的東西", en: "“Holy” reaches the most ordinary things" },
      { k: "identity", zh: "棚節與雨水（14:16-19）", en: "The feast of tents and the rain (14:16–19)" }
    ],
    lesson: {
      zh: "全書的終點不是最聖的地方變得更聖，而是最日常的東西——馬的鈴鐺、廚房的鍋——都歸耶和華為聖（14:20-21）；聖與俗的界線在這裡被推到最外面。",
      en: "The book ends not with the holiest place becoming holier but with the most ordinary things — horses’ bells, kitchen pots — all “holy to Yahweh” (14:20–21); the line between holy and common is pushed outward."
    },
    quote: { ref: "14:20",
      zh: "馬的鈴鐺上必有歸耶和華為聖的這句話",
      en: "there will be on the bells of the horses, “HOLY TO YAHWEH”" },
    keyVerses: ["14:12", "14:16", "14:17", "14:20", "14:21"],
    intro: {
      zh: "14:12-15 說攻擊耶路撒冷的列國受災殃，大大擾亂，彼此攻擊；這幾節很沉重。14:16 轉向：列國中剩下的人要年年上來敬拜大君王──萬軍之耶和華，並守住棚節。14:17-19 說不上來的族，必無雨降在他們的地上，埃及也在其中。14:20-21 是全書的結尾：「當那日，馬的鈴鐺上必有歸耶和華為聖的這句話。耶和華殿內的鍋必如祭壇前的碗一樣。凡耶路撒冷和猶大的鍋都必歸萬軍之耶和華為聖。……當那日，在萬軍之耶和華的殿中必不再有迦南人。」「迦南人」也可譯作「商人」（參西番雅書 1:11 的「迦南的商民」），經文沒有說明在這裡取哪個意思。",
      en: "Verses 12–15 say the nations that attacked Jerusalem suffer a plague, are thrown into confusion, and strike one another; these verses are heavy. Verse 16 turns: everyone left of the nations will go up year by year to worship the King, Yahweh of Armies, and keep the feast of tents. Verses 17–19 say the families who do not go up will have no rain, Egypt included. Verses 20–21 close the book: “In that day there will be on the bells of the horses, ‘HOLY TO YAHWEH’; and the pots in Yahweh’s house will be like the bowls before the altar. Yes, every pot in Jerusalem and in Judah will be holy to Yahweh of Armies… In that day there will no longer be a Canaanite in the house of Yahweh of Armies.” “Canaanite” can also be rendered “trader” (compare “the people of Canaan” in Zephaniah 1:11); the text does not say which sense is meant here."
    },
    tip: {
      zh: "14:21 的「迦南人」也可譯作「商人」（參西番雅書 1:11），經文沒有說明在這裡取哪一個意思；14:12-15 的災殃，是當地描寫戰爭的語言。",
      en: "“Canaanite” in 14:21 can also mean “trader” (compare Zephaniah 1:11); the text does not say which is meant; the plague of 14:12–15 is war language of that setting."
    },
    related: ["mount_of_olives", "living_water", "humble_king", "zechariah"]
  }

);
