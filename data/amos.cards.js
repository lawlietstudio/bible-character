// 聖經人物卡 · 阿摩司書 (Amos) — book info + cards.
// Verse text comes from data/amos.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Acts 7:42-43, 15:15-18, Isa 1:11-17,
// Mic 6:8, Zech 14:5, Joel 2:32 / 3:18, Hos 6:6) were checked against the 和合本 text and appear in prose only. Where the
// 和合本 and the World English Bible read a verse differently (3:2 “認識／chosen”, 5:26 “摩洛的帳幕／tent of your king”)
// the card says so.

window.BOOKS.push({
  id: "amos",
  zh: "阿摩司書", en: "Amos", abbr: { zh: "摩", en: "Amos" },
  order: 30, section: { zh: "先知書", en: "Prophets" },
  chapters: 9,
  fan: ["plumb_line", "amos", "justice_river"],
  summary: {
    zh: "阿摩司是提哥亞的牧人，也修理桑樹，在猶大王烏西雅、以色列王耶羅波安的日子被神差到北國說預言。他先宣告周圍列國的罪（1–2 章），然後轉向以色列自己：富人欺壓窮人，宗教興旺卻沒有公義（2–6 章）。他看見蝗蟲、烈火、準繩、一筐夏天的果子，以及站在祭壇旁的主（7–9 章），也與伯特利的祭司亞瑪謝對峙。全書以「建立大衛倒塌的帳幕」和被擄的歸回作結。",
    en: "Amos, a herdsman and dresser of sycamore figs from Tekoa, is sent to prophesy to the northern kingdom in the days of Uzziah of Judah and Jeroboam of Israel. He first announces judgment on the surrounding nations (chs 1–2), then turns on Israel itself: the rich crush the poor and worship thrives without justice (chs 2–6). He sees locusts, fire, a plumb line, a basket of summer fruit and the Lord beside the altar (chs 7–9), and clashes with Amaziah, the priest of Bethel. The book ends with David’s fallen tent rebuilt and the exiles brought home."
  },
  outline: [
    { zh: "阿摩司的身份；神對列國的審判", en: "Who Amos is; judgment on the surrounding nations" },
    { zh: "論摩押、猶大與以色列：為一雙鞋賣了窮人", en: "Moab, Judah and Israel: the poor sold for a pair of sandals" },
    { zh: "「我只認識你們」；獅子吼叫，誰不懼怕", en: "“You only have I known”; the lion has roared" },
    { zh: "巴珊母牛；「你們仍不歸向我」", en: "Cows of Bashan; “yet you have not returned to me”" },
    { zh: "哀歌：尋求我就必存活；公平如大水滾滾", en: "A lament: seek me and live; let justice roll on like waters" },
    { zh: "安逸的人有禍了", en: "Woe to those at ease" },
    { zh: "蝗蟲、烈火、準繩；亞瑪謝與阿摩司", en: "Locusts, fire, the plumb line; Amaziah and Amos" },
    { zh: "一筐夏天的果子；聽不到神話語的饑荒", en: "A basket of summer fruit; a famine of hearing God’s word" },
    { zh: "主站在祭壇旁；大衛倒塌的帳幕要重建", en: "The Lord beside the altar; David’s fallen tent restored" }
  ],
  notes: {
    zh: "小提示：阿摩司書寫於烏西雅與耶羅波安的日子，風格很直接，常用日常畫面（獅子、網羅、籃子、準繩）說公義。重點不是反對敬拜，而是問：敬拜神的人，怎樣對待身邊的窮人？書中的「約瑟」「雅各」「以撒」都是指北國以色列。",
    en: "Good to know: Amos speaks in the days of Uzziah and Jeroboam, plainly, using everyday pictures (lions, snares, baskets, plumb lines) to speak about justice. The point is not against worship but a question: how do those who worship God treat the poor next to them? “Joseph,” “Jacob” and “Isaac” in the book all mean the northern kingdom."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "amos", book: "amos", no: 1, kind: "person", type: "harvest", rarity: 6,
    zh: "阿摩司", en: "Amos",
    tag: { zh: "放羊的人，說公義的話", en: "A Shepherd Who Spoke of Justice" },
    role: { zh: "提哥亞的牧人，修理桑樹的", en: "Herdsman of Tekoa, dresser of sycamore figs" },
    ch: [1, 3, 7],
    passages: ["1:1-2", "3:7-8", "7:10-15"],
    moves: [
      { zh: "牧人中的阿摩司", en: "Among the Herdsmen", ref: "1:1-2",
        dzh: "他是提哥亞牧人中的一個，在大地震前二年得默示論以色列。",
        den: "He was among the herdsmen of Tekoa and received his vision for Israel two years before the earthquake." },
      { zh: "耶和華選召我", en: "Yahweh Took Me", ref: "7:14-15",
        dzh: "他說自己原不是先知，也不是先知的門徒；耶和華從羊群中選召了他。",
        den: "He says he was no prophet nor a prophet’s son — Yahweh took him from following the flock." }
    ],
    traits: [
      { k: "strength", zh: "說話直接，不看人情", en: "Speaks plainly, whoever is offended" },
      { k: "identity", zh: "平民出身，不是職業先知", en: "A layman, not a professional prophet" }
    ],
    lesson: {
      zh: "神可以呼召任何人：不必是祭司或先知門徒，只要是祂選召的（7:14-15）。",
      en: "God can call anyone: no need to be a priest or a prophet’s son — only to be the one he takes (7:14–15)."
    },
    quote: { ref: "7:15",
      zh: "耶和華選召我，使我不跟從羊群",
      en: "Yahweh took me from following the flock" },
    keyVerses: ["1:1-2", "3:7-8", "7:14-15"],
    intro: {
      zh: "阿摩司是提哥亞的牧人（1:1），也是「修理桑樹的」（7:14），不是祭司，也不是先知的門徒。他在猶大王烏西雅、以色列王耶羅波安的日子，「大地震前二年」得默示論以色列（1:1）。他被神從羊群中選召，差到北國說預言（7:15）：伯特利和撒馬利亞表面上興旺，在他眼中卻滿是欺壓和不公。結果他與伯特利的祭司亞瑪謝對峙（7:10-17）。",
      en: "Amos was among the herdsmen of Tekoa (1:1) and a “farmer of sycamore figs” (7:14) — not a priest, nor a prophet’s son. He received his vision concerning Israel in the days of Uzziah and Jeroboam, “two years before the earthquake” (1:1). Yahweh took him from the flock and sent him to prophesy to the northern kingdom (7:15): Bethel and Samaria looked prosperous, but he saw oppression and injustice. He ended up in a clash with Amaziah, the priest of Bethel (7:10–17)."
    },
    tip: {
      zh: "全書的語言常取材於他熟悉的生活：獅子、網羅、牧人從獅口搶回羊腿（3:4-5, 12）、夏天的果子（8:1）。",
      en: "His language draws on the world he knew: lions, snares, a shepherd rescuing legs from a lion’s mouth (3:4–5, 12), summer fruit (8:1)."
    },
    related: ["amaziah", "lion_roars", "plumb_line", "justice_river", "fallen_tent"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "three_four", book: "amos", no: 2, kind: "other", type: "scheme", rarity: 3,
    zh: "三番四次地犯罪", en: "For Three Transgressions, Yes Four",
    tag: { zh: "列國的罪，一一被點名", en: "The Nations Named One by One" },
    role: { zh: "第 1–2 章的審判", en: "The judgments of chapters 1–2" },
    ch: [1, 2],
    passages: ["1:3-15", "2:1-5"],
    moves: [
      { zh: "三番四次", en: "Three, Yes Four", ref: "1:3",
        dzh: "大馬士革三番四次地犯罪，神必不免去她的刑罰——她以鐵器打過基列。",
        den: "For three transgressions of Damascus, yes for four, God will not turn back its punishment — it threshed Gilead with iron." },
      { zh: "輪到猶大和以色列", en: "Then Judah and Israel", ref: "2:4-6",
        dzh: "神一國一國數過去，連猶大也被點名；最後輪到以色列。",
        den: "God names nation after nation — even Judah — and last of all Israel." }
    ],
    traits: [
      { k: "strength", zh: "連戰時的殘暴也被記下", en: "Even wartime cruelty is recorded" },
      { k: "identity", zh: "審判由四圍收緊到自己", en: "Judgment closes in from the nations to Israel" }
    ],
    lesson: {
      zh: "神是萬國的審判者：列國的暴行，祂都記著；但最嚴厲的話，留給自己的百姓（2:4-6）。",
      en: "God judges all nations and remembers their cruelty — but the sternest words are kept for his own people (2:4–6)."
    },
    quote: { ref: "1:3",
      zh: "大馬士革三番四次地犯罪，我必不免去她的刑罰",
      en: "For three transgressions of Damascus, yes, for four, I will not turn away its punishment" },
    keyVerses: ["1:3-5", "1:13-15", "2:1-3", "2:4-6"],
    intro: {
      zh: "第 1–2 章像一圈越收越緊的審判：大馬士革（1:3）、迦薩（1:6）、泰爾（1:9）、以東（1:11）、亞捫（1:13）、摩押（2:1），每次都用同一句開頭：「某某三番四次地犯罪，我必不免去她的刑罰」，再列出一項罪行，並宣告降火。接著連猶大也被點名（2:4-5），因為他們厭棄耶和華的訓誨。最後才輪到以色列自己（2:6）。",
      en: "Chapters 1–2 are a tightening circle of judgment: Damascus (1:3), Gaza (1:6), Tyre (1:9), Edom (1:11), Ammon (1:13), Moab (2:1). Each opens the same way — “For three transgressions of…, yes, for four, I will not turn away its punishment” — names one crime and announces fire. Then even Judah is named (2:4–5) for despising Yahweh’s law. Only last does Israel itself come under the charge (2:6)."
    },
    tip: {
      zh: "「三番四次」通常理解為「犯了又犯」，每一節只舉出其中一項罪行。",
      en: "“For three… yes, for four” is usually read as “again and again”; each oracle names just one of the crimes."
    },
    related: ["amos", "sold_for_sandals", "yet_not_returned"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "sold_for_sandals", book: "amos", no: 3, kind: "other", type: "scheme", rarity: 3,
    zh: "為一雙鞋賣了窮人", en: "The Poor Sold for a Pair of Sandals",
    tag: { zh: "城門口與市場上的不公", en: "Injustice at the Gate and in the Market" },
    role: { zh: "阿摩司最常責備的罪", en: "Amos’s most frequent charge" },
    ch: [2, 5, 8],
    passages: ["2:6-8", "5:11-12", "8:4-6"],
    moves: [
      { zh: "賣了義人，賣了窮人", en: "Sold the Righteous, Sold the Needy", ref: "2:6-7",
        dzh: "他們為銀子賣了義人，為一雙鞋賣了窮人，連窮人頭上的灰也垂涎。",
        den: "They sold the righteous for silver and the needy for a pair of sandals, and even covet the dust on the poor’s heads." },
      { zh: "詭詐的天平", en: "Balances of Deceit", ref: "8:5-6",
        dzh: "賣出用小升斗，收銀用大戥子，用詭詐的天平欺哄人。",
        den: "Making the measure small and the price large, cheating with false scales — even selling the sweepings with the wheat." }
    ],
    traits: [
      { k: "weakness", zh: "盼著聖日快過，好繼續做生意", en: "Impatient for the holy days to end so trade can resume" },
      { k: "identity", zh: "信仰與生意分家", en: "Religion and business kept apart" }
    ],
    lesson: {
      zh: "敬拜的日子過了，生意場上怎樣待人，才顯出對神的態度（8:5-6）。",
      en: "When the holy days are over, how people deal in the marketplace shows what they think of God (8:5–6)."
    },
    quote: { ref: "2:6",
      zh: "他們為銀子賣了義人，為一雙鞋賣了窮人",
      en: "they have sold the righteous for silver, and the needy for a pair of shoes" },
    keyVerses: ["2:6-8", "5:11-12", "8:4-6"],
    intro: {
      zh: "「為銀子賣了義人，為一雙鞋賣了窮人」（2:6）是阿摩司指責以色列的第一句。後面的章節一再回到這個主題：窮人被踐踏、被勒索麥子（5:11），在城門口被屈枉（5:12），在市場上被詭詐的天平欺哄（8:5）；更糟的是，他們盼著月朔和安息日快點過去，好賣糧、擺開麥子（8:5）。一雙鞋價錢極小，顯出窮人的性命被看得多輕。",
      en: "“They have sold the righteous for silver, and the needy for a pair of shoes” (2:6) is Amos’s first charge against Israel, and later chapters keep returning to it: the poor are trampled and taxed for wheat (5:11), denied justice in the gate (5:12), cheated by false balances (8:5) — and the dealers can’t wait for the new moon and the Sabbath to pass so they can sell grain (8:5). A pair of sandals is a tiny price; it shows how cheaply the lives of the poor were held."
    },
    tip: {
      zh: "「城門口」是古代城市審案的地方（5:10, 12, 15）；阿摩司說，連在那裡，窮人也得不到公道。",
      en: "The city gate was where cases were heard in ancient towns (5:10, 12, 15); Amos says that even there the poor found no justice."
    },
    related: ["justice_river", "ivory_beds", "word_famine"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "lion_roars", book: "amos", no: 4, kind: "other", type: "beast", rarity: 3,
    zh: "獅子吼叫，誰不懼怕", en: "The Lion Has Roared",
    tag: { zh: "一連串的問題", en: "A Chain of Questions" },
    role: { zh: "阿摩司為什麼不能不說", en: "Why Amos cannot keep silent" },
    ch: [3],
    passages: ["3:1-8", "3:12"],
    moves: [
      { zh: "二人若不同心，豈能同行", en: "Do Two Walk Together?", ref: "3:3-6",
        dzh: "他連問：獅子無獵物豈會咆哮？網羅無所得豈會彈起？城中吹角，百姓豈不驚恐？",
        den: "Does a lion roar with no prey? A snare spring with nothing to catch? A trumpet sound and the people not tremble?" },
      { zh: "誰能不說預言", en: "Who Can But Prophesy?", ref: "3:7-8",
        dzh: "主若不將奧祕指示眾先知，就一無所行；獅子吼叫，誰不懼怕？",
        den: "The Lord Yahweh does nothing unless he reveals his secret to his servants the prophets; the lion has roared — who will not fear?" }
    ],
    traits: [
      { k: "strength", zh: "用日常的問題問出因果", en: "Plain questions about cause and effect" },
      { k: "identity", zh: "不是想說，是不能不說", en: "Compelled to speak, not volunteering" }
    ],
    lesson: {
      zh: "有因必有果：阿摩司用日常的問題，說明審判不是偶然，先知說話，是因為神先說了（3:3-8）。",
      en: "Cause and effect: Amos uses everyday questions to show that judgment is no accident, and that the prophet speaks because God has first spoken (3:3–8)."
    },
    quote: { ref: "3:8",
      zh: "獅子吼叫，誰不懼怕呢？主耶和華發命，誰能不說預言呢",
      en: "The lion has roared. Who will not fear? The Lord Yahweh has spoken. Who can but prophesy?" },
    keyVerses: ["3:2", "3:3-6", "3:7-8", "3:12"],
    intro: {
      zh: "第 3 章先說神對以色列的特別關係：「在地上萬族中，我只認識你們；因此，我必追討你們的一切罪孽」（3:2）。接著是一連串日常的問題：二人若不同心豈能同行（3:3）、獅子、網羅、吹角（3:4-6）。這些問題一步步帶出結論：「主耶和華若不將奧祕指示他的僕人──眾先知，就一無所行」（3:7），「獅子吼叫，誰不懼怕呢？主耶和華發命，誰能不說預言呢？」（3:8）。3:12 又用牧人從獅口搶回兩條羊腿或半個耳朵，形容撒馬利亞人「得救也不過如此」。",
      en: "Chapter 3 begins with Israel’s special relationship: “You only have I known of all the families of the earth; therefore I will punish you for all your iniquities” (3:2). Then comes a run of everyday questions — do two walk together unless they agree (3:3), a lion, a snare, a trumpet (3:4–6) — leading to the conclusion: “Surely the Lord Yahweh will do nothing unless he reveals his secret to his servants the prophets” (3:7); “The lion has roared. Who will not fear? The Lord Yahweh has spoken. Who can but prophesy?” (3:8). Verse 12 likens the rescue of those in Samaria to a shepherd saving two legs or a piece of an ear from a lion’s mouth."
    },
    tip: {
      zh: "3:2 的「認識」是有關係的認識，與何西阿書的「認識神」可以對照；WEB 把這句譯作「chosen」（揀選）。",
      en: "“Known” in 3:2 is relational knowing, to compare with “knowing God” in Hosea; the WEB renders the line “chosen.”"
    },
    related: ["amos", "yet_not_returned", "day_of_darkness"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "ivory_beds", book: "amos", no: 5, kind: "other", type: "scheme", rarity: 2,
    zh: "象牙床上的安逸", en: "At Ease on Ivory Beds",
    tag: { zh: "不為約瑟的苦難擔憂", en: "Not Grieved for the Affliction of Joseph" },
    role: { zh: "撒馬利亞的富足階層", en: "The well-off of Samaria" },
    ch: [4, 6],
    passages: ["4:1-3", "6:1-7"],
    moves: [
      { zh: "巴珊母牛", en: "Cows of Bashan", ref: "4:1",
        dzh: "住撒馬利亞山如巴珊母牛的人，欺負貧寒的，還對家主說：拿酒來！",
        den: "Those on Samaria’s mountain, like cows of Bashan, oppress the poor and tell their husbands, “Bring us drinks!”" },
      { zh: "躺臥在象牙床上", en: "On Beds of Ivory", ref: "6:4-6",
        dzh: "他們躺象牙床、吃羊羔牛犢、用大碗喝酒，卻不為約瑟的苦難擔憂。",
        den: "They lie on ivory beds, eat lambs and calves, drink wine from bowls — but are not grieved for the affliction of Joseph." }
    ],
    traits: [
      { k: "weakness", zh: "安逸無慮，對苦難麻木", en: "At ease and numb to suffering" },
      { k: "identity", zh: "自以為是「列國之首」", en: "Proud of being “chief of the nations”" }
    ],
    lesson: {
      zh: "問題不在享用本身，而在對鄰舍的苦難毫不在乎（6:6）；安逸使人以為降禍的日子還遠（6:3）。",
      en: "The problem is not enjoyment itself but indifference to a neighbor’s suffering (6:6); ease makes people think the day of disaster is far off (6:3)."
    },
    quote: { ref: "6:6",
      zh: "以大碗喝酒，用上等的油抹身，卻不為約瑟的苦難擔憂",
      en: "who drink wine in bowls, and anoint themselves with the best oils; but they are not grieved for the affliction of Joseph." },
    keyVerses: ["4:1-3", "6:1", "6:3-7"],
    intro: {
      zh: "阿摩司對撒馬利亞的上層人說了兩次責備。4:1 稱他們為「巴珊母牛」（一般理解為出產肥壯牲畜的地方），「欺負貧寒的，壓碎窮乏的，對家主說：拿酒來，我們喝吧」。6:1 說「在錫安和撒馬利亞山安逸無慮的，有禍了」，6:4-6 描寫他們躺在象牙床上，吃羊羔牛犢，彈琴，用大碗喝酒，「卻不為約瑟的苦難擔憂」。結局是「在被擄的人中首先被擄」（6:7）。",
      en: "Amos rebukes Samaria’s upper class twice. In 4:1 he calls them “cows of Bashan” (generally understood as a region known for fat cattle) “who oppress the poor, who crush the needy, who tell their husbands, ‘Bring us drinks!’” In 6:1 he says “Woe to those who are at ease in Zion, and to those who are secure on the mountain of Samaria,” and 6:4–6 pictures them on beds of ivory, eating lambs and calves, strumming harps, drinking wine in bowls — “but they are not grieved for the affliction of Joseph.” The outcome: they “will go captive with the first who go captive” (6:7)."
    },
    tip: {
      zh: "「約瑟」在這裡指北國以色列（5:6, 6:6）。",
      en: "“Joseph” here means the northern kingdom (5:6, 6:6)."
    },
    related: ["sold_for_sandals", "day_of_darkness", "amos"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "yet_not_returned", book: "amos", no: 6, kind: "other", type: "wisdom", rarity: 3,
    zh: "你們仍不歸向我", en: "Yet You Did Not Return",
    tag: { zh: "五次管教，一句嘆息", en: "Five Disasters, One Refrain" },
    role: { zh: "神一再管教，百姓不回頭", en: "God disciplined, the people never turned" },
    ch: [4],
    passages: ["4:6-13"],
    moves: [
      { zh: "饑荒、無雨、霉爛、瘟疫", en: "Famine, Drought, Blight, Plague", ref: "4:6-10",
        dzh: "糧食缺乏、無雨、霉爛、瘟疫……每次之後都是同一句：你們仍不歸向我。",
        den: "Lack of bread, rain withheld, blight, plague — and after each the same line: “yet you haven’t returned to me.”" },
      { zh: "預備迎見你的神", en: "Prepare to Meet Your God", ref: "4:11-12",
        dzh: "神傾覆城邑如所多瑪、蛾摩拉；以色列啊，你當預備迎見你的神。",
        den: "God overthrew cities like Sodom and Gomorrah — “prepare to meet your God, Israel.”" }
    ],
    traits: [
      { k: "strength", zh: "管教的目的是讓人回頭", en: "Discipline aims at return" },
      { k: "identity", zh: "同一句話重複五次", en: "One refrain, five times" }
    ],
    lesson: {
      zh: "災禍可以是神的呼召，卻可以被人一次又一次地忽略；問題不在神沒有說話，而在人不歸向（4:6-11）。",
      en: "Hardship can be a call from God yet be ignored again and again; the problem is not that God was silent but that people would not turn (4:6–11)."
    },
    quote: { ref: "4:12",
      zh: "以色列啊，我既這樣行，你當預備迎見你的神",
      en: "prepare to meet your God, Israel." },
    keyVerses: ["4:6", "4:9", "4:11-12", "4:13"],
    intro: {
      zh: "4:6-11 把五次管教排成一串：糧食缺乏（4:6）、雨水停止（4:7-8）、旱風霉爛與剪蟲（4:9）、瘟疫與刀劍（4:10）、城邑傾覆如所多瑪蛾摩拉（4:11）。每一次都以同一句作結：「你們仍不歸向我。這是耶和華說的。」最後是 4:12：「以色列啊，我既這樣行，你當預備迎見你的神。」4:13 接著描述這位神：創山、造風、將心意指示人、使晨光變為幽暗的耶和華。",
      en: "Amos 4:6–11 lines up five disciplines: lack of bread (4:6), rain withheld (4:7–8), blight, mildew and caterpillars (4:9), plague and the sword (4:10), cities overthrown like Sodom and Gomorrah (4:11). Each ends with the same line: “yet you haven’t returned to me,” says Yahweh. Then 4:12: “Prepare to meet your God, Israel.” And 4:13 describes this God: he who forms the mountains, creates the wind, reveals his thoughts to people, and makes the morning darkness."
    },
    tip: {
      zh: "4:13 是三段頌讚（4:13；5:8-9；9:5-6）中的第一段，在審判之中稱頌創造的神。",
      en: "4:13 is the first of three hymn-like passages (4:13; 5:8–9; 9:5–6) that praise the Creator in the midst of judgment."
    },
    related: ["lion_roars", "seek_and_live", "word_famine"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "seek_and_live", book: "amos", no: 7, kind: "other", type: "faith", rarity: 3,
    zh: "尋求我，就必存活", en: "Seek Me and Live",
    tag: { zh: "不要往伯特利、吉甲", en: "Not to Bethel, Not to Gilgal" },
    role: { zh: "阿摩司給的出路", en: "Amos’s way out" },
    ch: [5],
    passages: ["5:4-9", "5:14-15"],
    moves: [
      { zh: "尋求我，就必存活", en: "Seek Me and Live", ref: "5:4-6",
        dzh: "神說：你們要尋求我，就必存活；不要往伯特利、吉甲、別是巴去。",
        den: "God says: “Seek me, and you will live” — not at Bethel, Gilgal or Beersheba." },
      { zh: "求善，不求惡", en: "Seek Good, Not Evil", ref: "5:14-15",
        dzh: "你們要求善，不要求惡，就必存活；要惡惡好善，在城門口秉公行義。",
        den: "Seek good, not evil, that you may live; hate evil, love good, and establish justice in the courts." }
    ],
    traits: [
      { k: "strength", zh: "出路清楚：回到神自己", en: "A clear way out: return to God himself" },
      { k: "identity", zh: "帶著「或者」的盼望", en: "Hope with an “it may be”" }
    ],
    lesson: {
      zh: "神要的是人尋求祂自己，而不是去某個聖地、守某個節期；尋求神與「求善」是連在一起的（5:4, 14）。",
      en: "God wants to be sought himself, not a shrine or a festival; seeking God and seeking good go together (5:4, 14)."
    },
    quote: { ref: "5:4",
      zh: "你們要尋求我，就必存活",
      en: "Seek me, and you will live" },
    keyVerses: ["5:4-6", "5:8-9", "5:14-15"],
    intro: {
      zh: "第 5 章是一首哀歌（5:1）。中間有一句出路：「你們要尋求我，就必存活」（5:4）。人們習慣去的聖地——伯特利、吉甲、別是巴——不是神要他們去尋求的地方（5:5）。5:8 把這位神介紹出來：造昴星和參星、使死蔭變為晨光、使白日變為黑夜的耶和華是他的名。5:14-15 再說：「你們要求善，不要求惡，就必存活……或者耶和華──萬軍之神向約瑟的餘民施恩。」",
      en: "Chapter 5 is a lament (5:1), and in the middle stands a way out: “Seek me, and you will live” (5:4). The shrines people were used to — Bethel, Gilgal, Beersheba — were not where God wanted to be sought (5:5). Verse 8 introduces him: the one who made the Pleiades and Orion, turns the shadow of death into morning and makes the day dark as night — Yahweh is his name. Verses 14–15 say: “Seek good, and not evil, that you may live… It may be that Yahweh, the God of Armies, will be gracious to the remnant of Joseph.”"
    },
    tip: {
      zh: "5:4 與 5:6 重複「尋求…就必存活」，一次對象是「我」，一次是「耶和華」——要尋求的是神自己，而不是地方。",
      en: "5:4 and 5:6 repeat “seek… and live,” once with “me” and once with “Yahweh” — what is to be sought is God himself, not a place."
    },
    related: ["justice_river", "yet_not_returned", "day_of_darkness"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "day_of_darkness", book: "amos", no: 8, kind: "other", type: "vision", rarity: 3,
    zh: "耶和華的日子：黑暗沒有光明", en: "The Day of Yahweh: Darkness, Not Light",
    tag: { zh: "想望那日的有禍了", en: "Woe to Those Who Long for It" },
    role: { zh: "對「盼望神介入」的警告", en: "A warning to those who long for God to step in" },
    ch: [5],
    passages: ["5:18-20"],
    moves: [
      { zh: "想望那日的有禍了", en: "Woe to Those Who Desire It", ref: "5:18",
        dzh: "想望耶和華日子來到的有禍了！那日黑暗沒有光明。",
        den: "“Woe to you who desire the day of Yahweh! It is darkness, and not light.”" },
      { zh: "躲獅子，遇見熊", en: "Fleeing a Lion, Meeting a Bear", ref: "5:19-20",
        dzh: "好像人躲避獅子又遇見熊，進房屋以手靠牆，就被蛇咬。",
        den: "As if a man fled from a lion and met a bear, or leaned his hand on the wall of his house and a snake bit him." }
    ],
    traits: [
      { k: "identity", zh: "反轉人的期望", en: "Overturns the popular hope" },
      { k: "weakness", zh: "以為神必站在自己這邊", en: "Assuming God must be on their side" }
    ],
    lesson: {
      zh: "盼望「神的日子」是一回事，預備好自己面對那日是另一回事；沒有公義的敬拜，換來的不是光，而是黑暗（5:18-24）。",
      en: "Longing for God’s day is one thing; being ready to face it is another. Worship without justice brings darkness, not light (5:18–24)."
    },
    quote: { ref: "5:20",
      zh: "耶和華的日子不是黑暗沒有光明嗎",
      en: "Won’t the day of Yahweh be darkness, and not light?" },
    keyVerses: ["5:18", "5:19", "5:20"],
    intro: {
      zh: "當時的人似乎盼望「耶和華的日子」來到，大概以為那日必替他們伸冤。阿摩司卻說：「想望耶和華日子來到的有禍了！你們為何想望耶和華的日子呢？那日黑暗沒有光明」（5:18）。接著用幾個令人心驚的畫面形容：躲避獅子又遇見熊，進房屋以手靠牆，就被蛇咬（5:19）——躲過一難，又遇一難，連最安全的地方也不安全。",
      en: "Some in Amos’s day seem to have longed for “the day of Yahweh,” probably expecting it to vindicate them. Amos says: “Woe to you who desire the day of Yahweh! Why do you long for the day of Yahweh? It is darkness, and not light” (5:18). He paints it in alarming pictures: a man flees a lion and a bear meets him, or goes into his house, leans a hand on the wall and a snake bites him (5:19) — one danger escaped, another found, even the safest place not safe."
    },
    tip: {
      zh: "對照約珥書：約珥說耶和華的日子對求告祂的人有出路（珥 2:32）；阿摩司則警告那些只是「想望」的人。",
      en: "Compare Joel: for him the day has a way out for those who call on Yahweh (Joel 2:32); Amos warns those who merely “long” for it."
    },
    related: ["justice_river", "lion_roars", "seek_and_live"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "justice_river", book: "amos", no: 9, kind: "other", type: "power", rarity: 5,
    zh: "公平如大水滾滾", en: "Let Justice Roll On Like Rivers",
    tag: { zh: "我厭惡你們的節期", en: "I Hate Your Feasts" },
    role: { zh: "阿摩司書最著名的一句", en: "Amos’s best-known line" },
    ch: [5],
    passages: ["5:21-27"],
    moves: [
      { zh: "我厭惡你們的節期", en: "I Hate, I Despise Your Feasts", ref: "5:21-23",
        dzh: "神說：我厭惡你們的節期，不悅納燔祭素祭，不聽你們的歌聲。",
        den: "God says: “I hate, I despise your feasts… I will not accept your offerings… Take away from me the noise of your songs!”" },
      { zh: "公平如大水滾滾", en: "Justice Like Rivers", ref: "5:24",
        dzh: "「惟願公平如大水滾滾，使公義如江河滔滔。」",
        den: "“But let justice roll on like rivers, and righteousness like a mighty stream.”" }
    ],
    traits: [
      { k: "strength", zh: "把敬拜與公義連在一起", en: "Joins worship to justice" },
      { k: "identity", zh: "對空洞敬拜最尖銳的責備之一", en: "One of the sharpest rebukes of empty worship" }
    ],
    lesson: {
      zh: "神不是不要敬拜，而是不要沒有公義的敬拜；公義要像大水一樣不斷流動，不是偶爾一次的儀式（5:21-24）。",
      en: "God is not against worship but against worship without justice; justice is to flow like a river, not appear as an occasional ceremony (5:21–24)."
    },
    quote: { ref: "5:24",
      zh: "惟願公平如大水滾滾，使公義如江河滔滔",
      en: "But let justice roll on like rivers, and righteousness like a mighty stream." },
    keyVerses: ["5:21-23", "5:24", "5:25-27"],
    intro: {
      zh: "「我厭惡你們的節期，也不喜悅你們的嚴肅會。你們雖然向我獻燔祭和素祭，我卻不悅納……要使你們歌唱的聲音遠離我，因為我不聽你們彈琴的響聲」（5:21-23）——這是向熱心敬拜的人說的話。接著是全書最著名的一句：「惟願公平如大水滾滾，使公義如江河滔滔」（5:24）。這與何西阿書 6:6、以賽亞書 1:11-17、彌迦書 6:8 的信息互相呼應：神要的是活出來的公義與憐憫。5:25-27 又提起曠野的日子與偶像——使徒行傳 7:42-43 引用了這段。",
      en: "“I hate, I despise your feasts, and I can’t stand your solemn assemblies. Yes, though you offer me your burnt offerings and meal offerings, I will not accept them… Take away from me the noise of your songs! I will not listen to the music of your harps” (5:21–23) — said to enthusiastic worshipers. Then the book’s best-known line: “But let justice roll on like rivers, and righteousness like a mighty stream” (5:24). It echoes Hosea 6:6, Isaiah 1:11–17 and Micah 6:8: God wants lived justice and mercy. Verses 25–27 recall the wilderness years and idols — Acts 7:42–43 quotes the passage."
    },
    tip: {
      zh: "5:26 在和合本寫作「摩洛的帳幕」，WEB 作「你們君王的帳幕」（tent of your king）——原文有不同讀法；使徒行傳 7:43 引用時寫作「摩洛的帳幕」。",
      en: "5:26 reads “the tent of Moloch” in the 和合本 but “the tent of your king” in the WEB — the underlying text is read in more than one way; Acts 7:43 quotes it as “the tent of Moloch.”"
    },
    related: ["sold_for_sandals", "seek_and_live", "day_of_darkness", "amos"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "amos_intercession", book: "amos", no: 10, kind: "other", type: "love", rarity: 4,
    zh: "雅各微弱，他怎能站立得住呢", en: "“How Could Jacob Stand?”",
    tag: { zh: "蝗蟲與烈火：先知的代求", en: "Locusts and Fire — the Prophet Intercedes" },
    role: { zh: "第一、第二個異象", en: "The first two visions" },
    ch: [7],
    passages: ["7:1-6"],
    moves: [
      { zh: "蝗蟲：求你赦免", en: "Locusts: Forgive", ref: "7:1-3",
        dzh: "蝗蟲吃盡青物；他求：求你赦免，雅各微弱，怎能站立得住？耶和華就後悔。",
        den: "Locusts strip the land; he pleads, “Forgive… How could Jacob stand? For he is small.” Yahweh relents." },
      { zh: "烈火：求你止息", en: "Fire: Stop", ref: "7:4-6",
        dzh: "烈火險些燒滅大地；他再求，耶和華又後悔：這災也可免了。",
        den: "A great fire nearly consumes the land; he pleads again, and again Yahweh relents." }
    ],
    traits: [
      { k: "strength", zh: "為百姓代求，不為自己", en: "Pleads for the people, not himself" },
      { k: "identity", zh: "先知也是代求的人", en: "A prophet who also intercedes" }
    ],
    lesson: {
      zh: "先知不只是宣告審判，也站在神面前為百姓求赦免；而神聽了（7:2-3, 5-6）。",
      en: "A prophet does not only announce judgment but stands before God to ask forgiveness for the people — and God listens (7:2–3, 5–6)."
    },
    quote: { ref: "7:2",
      zh: "主耶和華啊，求你赦免；因為雅各微弱，他怎能站立得住呢",
      en: "Lord Yahweh, forgive, I beg you! How could Jacob stand? For he is small." },
    keyVerses: ["7:1-3", "7:4-6"],
    intro: {
      zh: "前兩個異象是災害：蝗蟲吃盡那地的青物（7:1-2），然後是烈火，吞滅深淵，險些將地燒滅（7:4）。兩次阿摩司都為百姓求告：「主耶和華啊，求你赦免；因為雅各微弱，他怎能站立得住呢？」（7:2；7:5 作「求你止息」），耶和華就「後悔」，說這災可以免了（7:3, 6）。",
      en: "The first two visions are disasters: locusts eat the land’s greenery (7:1–2), then a fire devours the great deep and nearly the land itself (7:4). Both times Amos pleads: “Lord Yahweh, forgive, I beg you! How could Jacob stand? For he is small” (7:2; in 7:5 “cease”), and Yahweh “relents,” saying it shall not be (7:3, 6)."
    },
    tip: {
      zh: "兩次代求都有效；到了第三個異象（準繩，7:7-9），神說「不再寬恕」，經文也沒有記載阿摩司再代求。",
      en: "Both intercessions work; in the third vision (the plumb line, 7:7–9) God says he will not pass by again, and the text records no further intercession."
    },
    related: ["plumb_line", "amos", "summer_fruit"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "plumb_line", book: "amos", no: 11, kind: "other", type: "power", rarity: 4,
    zh: "準繩", en: "The Plumb Line",
    tag: { zh: "「我必不再寬恕他們」", en: "“I Will Not Again Pass By Them”" },
    role: { zh: "第三個異象", en: "The third vision" },
    ch: [7],
    passages: ["7:7-9"],
    moves: [
      { zh: "主手拿準繩", en: "A Plumb Line in His Hand", ref: "7:7-8",
        dzh: "主手拿準繩站在牆旁，問阿摩司：你看見甚麼？他說：看見準繩。",
        den: "The Lord stands beside a wall with a plumb line in his hand: “Amos, what do you see?” “A plumb line.”" },
      { zh: "吊起準繩", en: "Set the Plumb Line", ref: "7:8-9",
        dzh: "神要把準繩吊在以色列中，不再寬恕；邱壇與聖所必荒廢。",
        den: "God will set a plumb line among his people and not spare them again; the high places will be desolate." }
    ],
    traits: [
      { k: "strength", zh: "標準不變，不看人情", en: "An unchanging standard" },
      { k: "identity", zh: "量出歪斜的牆", en: "Measures what is crooked" }
    ],
    lesson: {
      zh: "神用一條不變的標準衡量；牆是否歪斜，不由人的感覺決定，而是看準繩（7:7-8）。",
      en: "God measures by one fixed standard; whether a wall leans is settled not by feelings but by the plumb line (7:7–8)."
    },
    quote: { ref: "7:8",
      zh: "我要吊起準繩在我民以色列中，我必不再寬恕他們",
      en: "I will set a plumb line in the middle of my people Israel. I will not again pass by them any more." },
    keyVerses: ["7:7-8", "7:9"],
    intro: {
      zh: "第三個異象是一道牆，和主手中的準繩（7:7）。準繩是建築工人用來檢查牆是否垂直的工具。神問：「阿摩司啊，你看見甚麼？」他答：「看見準繩。」主說：「我要吊起準繩在我民以色列中，我必不再寬恕他們」（7:8），並預告以撒的邱壇與以色列的聖所必荒廢，又要用刀攻擊耶羅波安的家（7:9）。與前兩個異象不同，這次經文沒有記載阿摩司代求。",
      en: "The third vision is a wall and the plumb line in the Lord’s hand (7:7) — a builder’s tool for checking that a wall is true. God asks, “Amos, what do you see?” “A plumb line.” Then: “I will set a plumb line in the middle of my people Israel. I will not again pass by them any more” (7:8), and the high places of Isaac and the sanctuaries of Israel will be laid waste, with the sword against the house of Jeroboam (7:9). Unlike the first two visions, the text records no intercession from Amos."
    },
    tip: {
      zh: "「準繩」這個詞在聖經裡很罕見（7:7-8），意思有不同理解；多數譯本照上下文譯作準繩（鉛垂線）。",
      en: "The word for “plumb line” is very rare in the Bible (7:7–8) and its meaning is debated; most translations follow the context and render it plumb line."
    },
    related: ["amos_intercession", "amaziah", "summer_fruit"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "amaziah", book: "amos", no: 12, kind: "person", type: "scheme", rarity: 3,
    zh: "亞瑪謝", en: "Amaziah",
    tag: { zh: "趕走先知的伯特利祭司", en: "The Priest Who Told Amos to Leave" },
    role: { zh: "伯特利的祭司", en: "Priest of Bethel" },
    ch: [7],
    names: ["亞瑪謝"],
    enNames: ["Amaziah"],
    moves: [
      { zh: "向王告狀", en: "Reporting to the King", ref: "7:10-11",
        dzh: "他向王告狀：阿摩司圖謀背叛，說王必被刀殺、以色列必被擄。",
        den: "He reports to King Jeroboam: Amos has conspired against you, saying you will die by the sword and Israel will be exiled." },
      { zh: "逃往猶大去", en: "Go, Flee to Judah", ref: "7:12-13",
        dzh: "他叫阿摩司逃往猶大去：不要在伯特利說預言，這是王的聖所。",
        den: "He tells Amos: “Flee to Judah… don’t prophesy again at Bethel; it is the king’s sanctuary.”" }
    ],
    traits: [
      { k: "weakness", zh: "把聖所當成王的產業", en: "Treats the sanctuary as the king’s property" },
      { k: "identity", zh: "官方宗教的聲音", en: "The voice of official religion" }
    ],
    lesson: {
      zh: "當聖所成了「王的聖所」（7:13），敬拜就容易淪為替權力服務，容不下說真話的人；而阿摩司的回答是：我是耶和華選召的（7:14-15）。",
      en: "When the sanctuary becomes “the king’s sanctuary” (7:13), worship easily serves power and has no room for truth-tellers; Amos’s answer is that Yahweh called him (7:14–15)."
    },
    quote: { ref: "7:13",
      zh: "不要在伯特利再說預言；因為這裡有王的聖所，有王的宮殿",
      en: "don’t prophesy again any more at Bethel; for it is the king’s sanctuary, and it is a royal house!" },
    keyVerses: ["7:10-11", "7:12-13", "7:14-15", "7:16-17"],
    intro: {
      zh: "亞瑪謝是伯特利的祭司（7:10），向王耶羅波安報告阿摩司「圖謀背叛」，並說他預言王必被刀殺、以色列必被擄（7:10-11）。他又直接叫阿摩司「逃往猶大地去」，「不要在伯特利再說預言；因為這裡有王的聖所，有王的宮殿」（7:12-13）。阿摩司回答說自己原不是職業先知，是耶和華把他從羊群中選召出來（7:14-15），並向亞瑪謝宣告審判（7:16-17）。",
      en: "Amaziah is the priest of Bethel (7:10). He reports to King Jeroboam that Amos has “conspired” against him, saying the king will die by the sword and Israel be led captive (7:10–11). He tells Amos directly, “Go, flee away into the land of Judah… don’t prophesy again any more at Bethel; for it is the king’s sanctuary, and it is a royal house!” (7:12–13). Amos answers that he is no professional prophet — Yahweh took him from the flock (7:14–15) — and pronounces judgment on Amaziah (7:16–17)."
    },
    tip: {
      zh: "亞瑪謝轉述的話與 7:9 略有出入：阿摩司說的是神要用刀攻擊「耶羅波安的家」，亞瑪謝卻說「耶羅波安必被刀殺」。",
      en: "Amaziah’s report differs slightly from 7:9: Amos said God would rise against “the house of Jeroboam” with the sword, but Amaziah says “Jeroboam will die by the sword.”"
    },
    related: ["amos", "plumb_line", "word_famine"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "summer_fruit", book: "amos", no: 13, kind: "other", type: "harvest", rarity: 2,
    zh: "一筐夏天的果子", en: "A Basket of Summer Fruit",
    tag: { zh: "「我民以色列的結局到了」", en: "“The End Has Come on My People”" },
    role: { zh: "第四個異象", en: "The fourth vision" },
    ch: [8],
    passages: ["8:1-3", "8:7-10"],
    moves: [
      { zh: "看見一筐夏天的果子", en: "A Basket of Summer Fruit", ref: "8:1-2",
        dzh: "阿摩司看見一筐夏天的果子；神說：我民以色列的結局到了。",
        den: "Amos sees a basket of summer fruit; Yahweh says: “The end has come on my people Israel.”" },
      { zh: "歌曲變為哀歌", en: "Songs Turned to Lament", ref: "8:3",
        dzh: "殿中的詩歌要變為哀號，節期變為悲哀，如喪獨生子。",
        den: "The temple songs become wailing and the feasts turn to mourning, as for an only son." }
    ],
    traits: [
      { k: "identity", zh: "熟透的果子：時候到了", en: "Ripe fruit: the time has come" },
      { k: "weakness", zh: "熟透就留不住", en: "Ripeness that cannot be kept" }
    ],
    lesson: {
      zh: "一筐熟透的果子是個簡單的畫面：時候已經到了，不會再等（8:2）。",
      en: "A basket of ripe fruit is a simple picture: the time has come, and there is no more waiting (8:2)."
    },
    quote: { ref: "8:2",
      zh: "我民以色列的結局到了，我必不再寬恕他們",
      en: "The end has come on my people Israel. I will not again pass by them any more." },
    keyVerses: ["8:1-2", "8:3", "8:9-10"],
    intro: {
      zh: "第四個異象是「一筐夏天的果子」（8:1）。神問：「阿摩司啊，你看見甚麼？」他答：「看見一筐夏天的果子」，耶和華就說：「我民以色列的結局到了，我必不再寬恕他們」（8:2）。隨後預告殿中的詩歌變為哀號（8:3）、日頭在午間落下（8:9）、節期變為悲哀，如喪獨生子（8:10）。",
      en: "The fourth vision is “a basket of summer fruit” (8:1). God asks, “Amos, what do you see?” He answers, “A basket of summer fruit,” and Yahweh says, “The end has come on my people Israel. I will not again pass by them any more” (8:2). Then follow the temple songs turned to wailing (8:3), the sun going down at noon (8:9) and the feasts turned to mourning, like mourning for an only son (8:10)."
    },
    tip: {
      zh: "有人指出，「夏天的果子」與「結局」在希伯來文發音相近，是一個文字遊戲；從中文看不出來。",
      en: "Some point out that “summer fruit” and “end” sound alike in Hebrew — a wordplay that does not show in translation."
    },
    related: ["plumb_line", "word_famine", "amos_intercession"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "word_famine", book: "amos", no: 14, kind: "other", type: "wisdom", rarity: 3,
    zh: "聽神話語的饑荒", en: "A Famine of Hearing God’s Word",
    tag: { zh: "飢餓非因無餅", en: "Hungry — Not for Bread" },
    role: { zh: "最嚴重的饑荒", en: "The worst kind of famine" },
    ch: [8],
    passages: ["8:11-14"],
    moves: [
      { zh: "不是無餅，乃因不聽神的話", en: "Not Bread, but God’s Words", ref: "8:11",
        dzh: "人飢餓非因無餅，乾渴非因無水，乃因不聽耶和華的話。",
        den: "A famine in the land — not of bread nor of water, but of hearing Yahweh’s words." },
      { zh: "從這海到那海", en: "From Sea to Sea", ref: "8:12-13",
        dzh: "他們從這海到那海，往來奔跑，尋求耶和華的話，卻尋不著。",
        den: "They wander from sea to sea, running back and forth to seek Yahweh’s word — and do not find it." }
    ],
    traits: [
      { k: "identity", zh: "最後要找的，是神的話", en: "What they finally search for is God’s word" },
      { k: "weakness", zh: "先前叫先知閉口", en: "They had told the prophets to be silent" }
    ],
    lesson: {
      zh: "神的話不是理所當然：先前叫先知「不要說預言」（2:12；7:13），後來想聽也聽不到（8:11-12）。",
      en: "God’s word cannot be taken for granted: people who told the prophets “Don’t prophesy!” (2:12; 7:13) later cannot hear it when they seek it (8:11–12)."
    },
    quote: { ref: "8:11",
      zh: "人飢餓非因無餅，乾渴非因無水，乃因不聽耶和華的話",
      en: "not a famine of bread, nor a thirst for water, but of hearing Yahweh’s words" },
    keyVerses: ["2:12", "8:11-12", "8:13-14"],
    intro: {
      zh: "「主耶和華說：日子將到，我必命饑荒降在地上。人飢餓非因無餅，乾渴非因無水，乃因不聽耶和華的話」（8:11）。他們要「從這海到那海，從北邊到東邊，往來奔跑，尋求耶和華的話，卻尋不著」（8:12），連年輕人也因乾渴發昏（8:13）。這個畫面特別沉重，因為這些人先前正是叫先知「不要說預言」的人（2:12；7:13）。",
      en: "“Behold, the days come,” says the Lord Yahweh, “that I will send a famine in the land, not a famine of bread, nor a thirst for water, but of hearing Yahweh’s words” (8:11). They will “wander from sea to sea, and from the north even to the east; they will run back and forth to seek Yahweh’s word, and will not find it” (8:12), and even the young will faint with thirst (8:13). The picture is especially heavy because these are the people who earlier told the prophets, “Don’t prophesy!” (2:12; 7:13)."
    },
    tip: {
      zh: "第 8 章後半連續用了天象（8:9）、節期（8:10）和饑荒（8:11-12）三個畫面來說「失去」。",
      en: "The second half of chapter 8 uses three images of loss in a row: the sky (8:9), the feasts (8:10) and famine (8:11–12)."
    },
    related: ["summer_fruit", "amaziah", "yet_not_returned"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "sieve", book: "amos", no: 15, kind: "other", type: "vision", rarity: 2,
    zh: "篩子與古實人", en: "The Sieve and the Cushites",
    tag: { zh: "「我豈不看你們如古實人嗎？」", en: "“Are You Not Like the Ethiopians to Me?”" },
    role: { zh: "審判與保守並存", en: "Judgment and preservation together" },
    ch: [9],
    passages: ["9:1-10"],
    moves: [
      { zh: "我豈不看你們如古實人嗎", en: "Like the Cushites to Me", ref: "9:7",
        dzh: "神說：我豈不看你們如古實人嗎？我也領非利士人出迦斐託。",
        den: "“Are you not like the Ethiopians to me, children of Israel?” — he also brought up the Philistines from Caphtor." },
      { zh: "用篩子篩穀", en: "Sifted Like Grain", ref: "9:8-9",
        dzh: "神要滅絕有罪的國，卻不滅絕淨盡雅各家；像篩穀，一粒也不落地。",
        den: "He will destroy the sinful kingdom but not utterly the house of Jacob; he sifts Israel like grain and not a kernel falls." }
    ],
    traits: [
      { k: "strength", zh: "審判裡仍保住餘民", en: "Judgment that still keeps a remnant" },
      { k: "identity", zh: "打破「被揀選就免審」的想法", en: "Breaks the idea that being chosen means being exempt" }
    ],
    lesson: {
      zh: "蒙揀選不等於可以免受審判，但也不等於被丟棄；神既審判，也保守（9:7-9）。",
      en: "Being chosen does not mean exemption from judgment, nor does judgment mean being cast off; God both judges and preserves (9:7–9)."
    },
    quote: { ref: "9:9",
      zh: "好像用篩子篩穀，連一粒也不落在地上",
      en: "as grain is sifted in a sieve, yet not the least kernel will fall on the earth" },
    keyVerses: ["9:1-4", "9:7", "9:8-10"],
    intro: {
      zh: "第 9 章先說審判無人能逃：即使挖透陰間、爬上天去、藏在迦密山頂或海底，神都要捉出他們來（9:2-4）。9:7 提醒以色列：神也領非利士人出迦斐託、領亞蘭人出吉珥，「我豈不看你們如古實人嗎？」——出埃及並不使他們免於責備。但審判不是全盤滅絕：「必將這國從地上滅絕，卻不將雅各家滅絕淨盡」（9:8），神像篩穀一樣篩他們，連一粒也不落在地上（9:9）。",
      en: "Chapter 9 begins by saying no one escapes: even if they dig into Sheol, climb to heaven, hide on Carmel’s top or the sea floor, God will find them (9:2–4). Verse 7 reminds Israel that God also brought the Philistines from Caphtor and the Syrians from Kir — “Are you not like the Ethiopians to me?” — so the exodus does not exempt them from rebuke. Yet judgment is not total: “I will destroy it from off the surface of the earth, except that I will not utterly destroy the house of Jacob” (9:8); he sifts them like grain so that not a kernel falls to the earth (9:9)."
    },
    tip: {
      zh: "「迦斐託」和「吉珥」是非利士人與亞蘭人的來處（9:7）；1:5 也說亞蘭人必被擄到吉珥，兩處呼應。",
      en: "Caphtor and Kir are the origins of the Philistines and the Arameans (9:7); 1:5 also says the Arameans will be taken captive to Kir, and the two verses echo each other."
    },
    related: ["fallen_tent", "three_four", "plumb_line"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "fallen_tent", book: "amos", no: 16, kind: "other", type: "heaven", rarity: 4,
    zh: "大衛倒塌的帳幕", en: "David’s Fallen Tent",
    tag: { zh: "被擄的歸回，園子重新結果", en: "Exiles Return, Vineyards Bear Fruit" },
    role: { zh: "全書的盼望", en: "The book’s closing hope" },
    ch: [9],
    passages: ["9:11-15"],
    moves: [
      { zh: "重新修造", en: "Rebuilt", ref: "9:11",
        dzh: "我必建立大衛倒塌的帳幕，堵住破口，重新修造，像古時一樣。",
        den: "“I will raise up the tent of David who is fallen, and close up its breaches… as in the days of old.”" },
      { zh: "栽於本地，不再拔出", en: "Planted, Never Uprooted", ref: "9:13-15",
        dzh: "被擄的要歸回，重修城邑，栽種葡萄園；神把他們栽於本地，不再拔出。",
        den: "The exiles return, rebuild their cities and plant vineyards; God plants them on their land, never to be uprooted again." }
    ],
    traits: [
      { k: "strength", zh: "最後一句是栽種，不是拔出", en: "The last word is planting, not uprooting" },
      { k: "identity", zh: "從倒塌的帳幕重新建立", en: "Restored from ruins" }
    ],
    lesson: {
      zh: "全書嚴厲的審判，以建立、歸回、栽種作結；神對自己的百姓，最後的話是恢復（9:11-15）。",
      en: "A book of stern judgment ends with building, returning and planting; God’s last word to his people is restoration (9:11–15)."
    },
    quote: { ref: "9:11",
      zh: "到那日，我必建立大衛倒塌的帳幕，堵住其中的破口",
      en: "In that day I will raise up the tent of David who is fallen, and close up its breaches" },
    keyVerses: ["9:11-12", "9:13", "9:14-15"],
    intro: {
      zh: "阿摩司書最後轉向盼望：「到那日，我必建立大衛倒塌的帳幕，堵住其中的破口，把那破壞的建立起來，重新修造，像古時一樣」（9:11）。接著是豐收的圖畫：「耕種的必接續收割的；踹葡萄的必接續撒種的；大山要滴下甜酒」（9:13），被擄的歸回，重修荒廢的城邑，栽種葡萄園（9:14），「我要將他們栽於本地，他們不再從我所賜給他們的地上拔出來」（9:15）。使徒行傳 15:15-18 引用這段（9:11-12），談到外邦人也要尋求主。",
      en: "Amos ends with hope: “In that day I will raise up the tent of David who is fallen, and close up its breaches, and I will raise up its ruins, and I will build it as in the days of old” (9:11). Then a picture of abundance: “the plowman shall overtake the reaper, and the one treading grapes him who sows seed; and sweet wine will drip from the mountains” (9:13); the exiles return, rebuild ruined cities and plant vineyards (9:14); “I will plant them on their land, and they will no more be plucked up out of their land which I have given them” (9:15). Acts 15:15–18 quotes 9:11–12 in speaking of the nations seeking the Lord."
    },
    tip: {
      zh: "9:13 的「大山要滴下甜酒」與約珥書 3:18 幾乎相同，和合本還在旁注指出「見約珥三章十八節」。",
      en: "“The mountains will drip sweet wine” (9:13) is nearly the same as Joel 3:18, and the 和合本 notes “see Joel 3:18.”"
    },
    related: ["sieve", "amos", "justice_river"]
  }

);
