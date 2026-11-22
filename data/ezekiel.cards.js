// 聖經人物卡 · 以西結書 (Ezekiel) — book info + cards.
// Verse text comes from data/ezekiel.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Rev 7:3, 10:9-10, 20:8, 22:1-2,
// John 3:5, 10:11) were checked against the 和合本 text and appear in prose only. Where the 和合本 and the World English
// Bible disagree on a term (e.g. “untempered mortar” vs “whitewash”) the card says so.

window.BOOKS.push({
  id: "ezekiel",
  zh: "以西結書", en: "Ezekiel", abbr: { zh: "結", en: "Ezek" },
  order: 26, section: { zh: "先知書", en: "Prophets" },
  chapters: 48,
  fan: ["wheels", "ezekiel", "dry_bones"],
  summary: {
    zh: "以西結是被擄到巴比倫的祭司，在迦巴魯河邊看見神榮耀的異象，被立為守望的人。前半（1–24 章）宣告耶路撒冷將要陷落，並用畫磚、側臥、挖牆搬行李等行動當預兆；中段（25–32 章）是對列國的審判；後半（33–48 章）轉向盼望：牧人、新心、枯骨復活、新殿與流出的活水，最後一句是「耶和華的所在」。",
    en: "Ezekiel, a priest exiled to Babylon, sees the glory of Yahweh by the Kebar River and is made a watchman. The first half (chs 1–24) announces Jerusalem’s fall, with sign-acts such as the brick, lying on his sides and the baggage through the wall; the middle (25–32) judges the nations; the second half (33–48) turns to hope — the shepherd, a new heart, dry bones raised, a new temple and a river of life — ending with “Yahweh is there.”"
  },
  outline: [
    { zh: "迦巴魯河邊的異象：四活物與輪子", en: "The vision by the Kebar: living creatures and wheels" },
    { zh: "蒙召，被差往悖逆之家", en: "Called and sent to a rebellious house" },
    { zh: "吃書卷；立為守望的人", en: "Eating the scroll; made a watchman" },
    { zh: "磚上圍城，左右側臥", en: "The siege on a brick; lying on his sides" },
    { zh: "剃髮與審判的預兆", en: "The shaved hair and the sign of judgment" },
    { zh: "向以色列的山發預言", en: "Prophecy against the mountains of Israel" },
    { zh: "結局到了", en: "The end has come" },
    { zh: "聖殿裡的可憎之事", en: "Abominations in the temple" },
    { zh: "額上有記號的人", en: "The mark on the forehead" },
    { zh: "榮耀開始離開聖殿", en: "The glory begins to leave the temple" },
    { zh: "榮耀離開耶路撒冷", en: "The glory leaves Jerusalem" },
    { zh: "被擄的預兆：行李與挖牆", en: "The sign of exile: baggage and the wall" },
    { zh: "假先知與抹灰的牆", en: "False prophets and the plastered wall" },
    { zh: "偶像，與「挪亞、但以理、約伯」", en: "Idols — and “Noah, Daniel and Job”" },
    { zh: "無用的葡萄樹", en: "The useless vine" },
    { zh: "耶路撒冷：被棄的女嬰與不忠的妻", en: "Jerusalem: the foundling and the faithless wife" },
    { zh: "兩隻大鷹與香柏樹", en: "Two eagles and the cedar" },
    { zh: "各人為自己的罪負責", en: "Each answers for his own sin" },
    { zh: "給君王的哀歌", en: "A lament for the princes" },
    { zh: "以色列的歷史與背叛", en: "Israel’s history of rebellion" },
    { zh: "刀劍已出鞘", en: "The sword is drawn" },
    { zh: "城中的罪行", en: "The city’s sins" },
    { zh: "兩姊妹：阿荷拉與阿荷利巴", en: "Two sisters: Oholah and Oholibah" },
    { zh: "燒開的鍋；先知之妻去世", en: "The boiling pot; the death of the prophet’s wife" },
    { zh: "論亞捫、摩押、以東、非利士", en: "Against Ammon, Moab, Edom and Philistia" },
    { zh: "論泰爾（一）", en: "Against Tyre (1)" },
    { zh: "泰爾的大船（哀歌）", en: "The ship of Tyre (a lament)" },
    { zh: "論泰爾王與西頓", en: "Against the king of Tyre and Sidon" },
    { zh: "論埃及：河中的大魚", en: "Against Egypt: the great monster of the Nile" },
    { zh: "埃及的日子", en: "The day of Egypt" },
    { zh: "倒下的香柏樹", en: "The felled cedar" },
    { zh: "為法老作的哀歌", en: "A lament for Pharaoh" },
    { zh: "守望者再受命；耶路撒冷陷落的消息", en: "The watchman recommissioned; news of Jerusalem’s fall" },
    { zh: "以色列的牧人與羊", en: "The shepherds and the sheep" },
    { zh: "論以東", en: "Against Edom" },
    { zh: "新心與新靈", en: "A new heart and a new spirit" },
    { zh: "枯骨復活；兩根木杖", en: "Dry bones live; the two sticks" },
    { zh: "論歌革（一）", en: "Against Gog (1)" },
    { zh: "論歌革（二）", en: "Against Gog (2)" },
    { zh: "新殿異象開始：量度的人", en: "The new temple vision begins: the man with the measuring rod" },
    { zh: "殿的規格", en: "The temple’s dimensions" },
    { zh: "聖屋", en: "The priests’ chambers" },
    { zh: "榮耀回到殿中", en: "The glory returns to the temple" },
    { zh: "東門與祭司的職責", en: "The east gate and the priests’ duties" },
    { zh: "聖地的分配與節期", en: "The sacred allotment and the festivals" },
    { zh: "君王、祭物與敬拜的規矩", en: "The prince, offerings and rules of worship" },
    { zh: "殿中流出的水", en: "The water flowing from the temple" },
    { zh: "土地的分配；「耶和華的所在」", en: "The division of the land; “Yahweh is there”" }
  ],
  notes: {
    zh: "小提示：以西結書最大的主線是「耶和華的榮耀」——看見祂（1 章）、離開（10–11 章）、回來（43 章）。很多段落是異象和象徵，不必急著對號入座；先讀懂畫面，再看解釋。",
    en: "Good to know: the book’s main thread is “the glory of Yahweh” — seen (ch 1), departing (chs 10–11), returning (ch 43). Much of it is vision and symbol; don’t rush to decode it — see the picture first, then the interpretation."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "ezekiel", book: "ezekiel", no: 1, kind: "person", type: "faith", rarity: 6,
    zh: "以西結", en: "Ezekiel",
    meaning: { zh: "「神使人堅強」", en: "“God strengthens”" },
    tag: { zh: "被擄的祭司，被立為守望的人", en: "The Exiled Priest Made a Watchman" },
    role: { zh: "布西的兒子・祭司・先知", en: "Priest and prophet, son of Buzi" },
    ch: [1, 2, 3, 24, 33],
    passages: ["1:1-3", "2:1-10", "3:14-27", "24:15-27", "33:21-22"],
    moves: [
      { zh: "「人子啊，你站起來」", en: "“Son of Man, Stand Up”", ref: "2:1-2",
        dzh: "他伏在地上，聽見聲音說：「你站起來，我要和你說話。」靈就使他站起來。",
        den: "Face down, he heard: “Stand on your feet, and I will speak with you” — and the Spirit set him on his feet." },
      { zh: "走動的預兆", en: "A Walking Sign", ref: "24:24",
        dzh: "他用自己的行動傳話：被綁側臥、搬行李、喪妻不哭，讓被擄的人看見將要發生的事。",
        den: "He acted out his messages — lying bound, carrying baggage, not mourning his wife — so the exiles could see what was coming." }
    ],
    traits: [
      { k: "strength", zh: "用整個人傳信息", en: "Delivers it with his whole life" },
      { k: "weakness", zh: "被當作表演來聽", en: "Heard like a performance" }
    ],
    lesson: {
      zh: "神的話不只用口講，也用生命活出來；而聽的人最危險的反應，是欣賞而不去行（33:31-32）。",
      en: "God’s word is lived as well as spoken, and the most dangerous response is to enjoy it without doing it (33:31–32)."
    },
    quote: { ref: "2:1",
      zh: "人子啊，你站起來，我要和你說話。",
      en: "Son of man, stand on your feet, and I will speak with you." },
    keyVerses: ["1:1-3", "2:1-5", "3:14-15", "33:30-32"],
    intro: {
      zh: "以西結是布西的兒子，是祭司（1:3）。他在約雅斤王被擄後第五年，於迦巴魯河邊被擄的人中看見神的異象（1:1-2）。神稱他「人子」，差他到悖逆之家以色列人那裡（2:1-3）。他的事奉很特別：常用行動而不只是言語傳信息——畫磚圍城、側臥多日、挖牆搬行李，甚至不為去世的妻子哀哭（4；12；24 章）。",
      en: "Ezekiel, son of Buzi, was a priest (1:3). In the fifth year of King Jehoiachin’s exile he saw visions of God among the exiles by the Kebar River (1:1–2). God calls him “son of man” and sends him to the rebellious house of Israel (2:1–3). His ministry is unusual: he often communicates by acts, not words alone — drawing a siege on a brick, lying on his sides for days, digging through a wall with his baggage, and not even mourning his wife (chs 4, 12, 24)."
    },
    tip: {
      zh: "全書不斷稱他「人子」——意思是「一個人」，提醒讀者：被神差遣的，是一個普通人。",
      en: "The book keeps calling him “son of man” — simply “a human being,” a reminder that the one God sends is an ordinary person."
    },
    related: ["watchman", "wheels", "eaten_scroll", "ezekiel_wife", "exile_baggage", "siege_brick"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "wheels", book: "ezekiel", no: 2, kind: "other", type: "vision", rarity: 4,
    zh: "四活物與輪中套輪", en: "The Living Creatures and the Wheels",
    tag: { zh: "迦巴魯河邊的異象", en: "The Vision by the Kebar River" },
    role: { zh: "以西結蒙召時的異象", en: "Ezekiel’s opening vision" },
    ch: [1, 10],
    passages: ["1:4-28", "10:1-22"],
    moves: [
      { zh: "四個活物", en: "Four Living Creatures", ref: "1:5-10",
        dzh: "四個活物有人的形像，各有四個臉面、四個翅膀：人、獅子、牛、鷹。",
        den: "Four living creatures in human form, each with four faces and four wings: human, lion, ox and eagle." },
      { zh: "輪中套輪、寶座", en: "Wheels Within Wheels", ref: "1:15-16",
        dzh: "活物旁有輪中套輪；穹蒼之上有彷彿藍寶石的寶座，寶座上有彷彿人的形狀。",
        den: "Beside them wheels within wheels; above the expanse a throne like sapphire with a figure like a man upon it." }
    ],
    traits: [
      { k: "strength", zh: "在巴比倫也顯現", en: "Appears even in Babylon" },
      { k: "weakness", zh: "難以用言語形容", en: "Hard to put into words" }
    ],
    lesson: {
      zh: "神的榮耀超過語言：以西結用了一連串「彷彿」「形像」，才勉強描述（1:26-28）；他的反應是俯伏。",
      en: "God’s glory outruns language: Ezekiel piles up “like” and “appearance of” to describe it (1:26–28) — and his response is to fall on his face."
    },
    quote: { ref: "1:28",
      zh: "這就是耶和華榮耀的形像。我一看見就俯伏在地",
      en: "This was the appearance of the likeness of Yahweh’s glory. When I saw it, I fell on my face" },
    keyVerses: ["1:4-6", "1:10", "1:15-16", "1:26-28"],
    intro: {
      zh: "以西結蒙召時，在迦巴魯河邊看見震撼的異象：狂風、大雲、閃爍的火，裡面有四個活物，旁邊有輪中套輪的輪子，上面有寶座和彷彿人的形狀（1:4-28）。他稱這是「耶和華榮耀的形像」。第 10 章再次出現這些形象，並說明這些活物是基路伯（10:20）。",
      en: "At his call Ezekiel sees a stunning vision by the Kebar River: a storm wind, a great cloud and flashing fire, four living creatures, wheels within wheels beside them, and above them a throne with a figure like a man (1:4–28). He calls it “the appearance of the likeness of Yahweh’s glory.” Chapter 10 shows them again and identifies the living creatures as cherubim (10:20)."
    },
    tip: {
      zh: "他的描述充滿「彷彿」「形像」「樣式」——他不是在畫圖，而是在盡力說明一個無法完全形容的場面。",
      en: "His description is full of “like,” “appearance” and “likeness” — he is not drawing a diagram but straining to describe what can’t be fully described."
    },
    related: ["ezekiel", "glory", "measuring_man"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "eaten_scroll", book: "ezekiel", no: 3, kind: "other", type: "faith", rarity: 3,
    zh: "吃下去的書卷", en: "The Scroll He Ate",
    tag: { zh: "口中甜如蜜的哀歌", en: "A Scroll of Lament, Sweet as Honey" },
    role: { zh: "以西結的使命", en: "Ezekiel’s commissioning" },
    ch: [2, 3],
    passages: ["2:8-10", "3:1-3"],
    moves: [
      { zh: "內外都寫著字", en: "Written Inside and Out", ref: "2:9-10",
        dzh: "一隻手伸出，手中有書卷；內外都寫著字，是哀號、歎息、悲痛的話。",
        den: "A hand held out a scroll written on both sides, with words of lament, mourning and woe." },
      { zh: "其甜如蜜", en: "Sweet as Honey", ref: "3:1-3",
        dzh: "神吩咐他吃下書卷、充滿肚腹；他吃了，口中覺得其甜如蜜。",
        den: "God told him to eat the scroll and fill his stomach with it; he ate it, and it was as sweet as honey in his mouth." }
    ],
    traits: [
      { k: "strength", zh: "先領受、再開口", en: "Takes it in before speaking" },
      { k: "weakness", zh: "內容全是哀號", en: "Its contents are all woe" }
    ],
    lesson: {
      zh: "傳講神的話以前，要先領受、消化它；即使內容是哀號，口中也覺得甜，因為那是神的話。",
      en: "Before speaking God’s word, take it in and digest it; even when its contents are lament, it tastes sweet in the mouth, because it is God’s word."
    },
    quote: { ref: "3:3",
      zh: "我就吃了，口中覺得其甜如蜜",
      en: "Then I ate it; and it was as sweet as honey in my mouth." },
    keyVerses: ["2:8-10", "3:1-3"],
    intro: {
      zh: "神差遣以西結以前，先給他一卷書卷：一隻手伸出來，展開書卷，內外都寫著哀號、歎息、悲痛的話（2:9-10）。神吩咐他吃下去，他就吃了，口中甜如蜜（3:1-3）。這是一幅象徵：先知要先把神的話吸收進自己裡面，才能向百姓講說。啟示錄 10:9-10 也有類似的畫面。",
      en: "Before sending Ezekiel, God gives him a scroll: a hand holds it out and unrolls it, written on both sides with words of lament, mourning and woe (2:9–10). God tells him to eat it, and it tastes as sweet as honey (3:1–3). It is a picture: the prophet must take God’s word into himself before he can speak it. Revelation 10:9–10 has a similar scene."
    },
    tip: {
      zh: "3:14 說吃了以後，他「心中甚苦，靈性忿激」——口中甜，不等於心裡輕鬆。",
      en: "3:14 says that afterwards he went “in bitterness, in the heat of my spirit” — sweet in the mouth is not the same as easy in the heart."
    },
    related: ["ezekiel", "watchman", "wheels"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "watchman", book: "ezekiel", no: 4, kind: "person", type: "faith", rarity: 4,
    zh: "守望的人", en: "The Watchman",
    tag: { zh: "聽見警告，就要吹角", en: "Hear the Word, Sound the Warning" },
    role: { zh: "以西結的職分（3、33 章）", en: "Ezekiel’s commission (chapters 3 and 33)" },
    ch: [3, 33],
    passages: ["3:16-21", "33:1-9"],
    moves: [
      { zh: "立你作守望的人", en: "Made a Watchman", ref: "3:17",
        dzh: "「我立你作以色列家守望的人，所以你要聽我口中的話，替我警戒他們。」",
        den: "“I have made you a watchman to the house of Israel. Therefore hear the word from my mouth, and warn them from me.”" },
      { zh: "警戒的責任", en: "The Duty to Warn", ref: "3:18-19",
        dzh: "若不警戒惡人，神要向守望的人討他喪命的罪；若警戒了他仍不轉離，守望的人就救了自己。",
        den: "If the watchman doesn’t warn the wicked, God will require his blood from the watchman; if he warns and the man does not turn, the watchman has saved himself." }
    ],
    traits: [
      { k: "strength", zh: "見危險就出聲", en: "Speaks at the first sign of danger" },
      { k: "weakness", zh: "責任沉重", en: "A heavy responsibility" }
    ],
    lesson: {
      zh: "守望的人不能保證別人肯聽，卻不能不說；責任在於警戒，不在於對方是否回應（3:19）。",
      en: "A watchman can’t make anyone listen, but can’t stay silent; the duty is to warn, not to guarantee the response (3:19)."
    },
    quote: { ref: "3:17",
      zh: "我立你作以色列家守望的人，所以你要聽我口中的話，替我警戒他們",
      en: "I have made you a watchman to the house of Israel. Therefore hear the word from my mouth, and warn them from me." },
    keyVerses: ["3:16-17", "3:18-19", "3:20-21", "33:2-6"],
    intro: {
      zh: "守望的人是城牆上的哨兵：看見刀劍臨到，就吹角警告百姓；聽見角聲而不理會的，罪要歸到自己頭上（33:2-5）。神兩次立以西結作「守望的人」（3:17；33:7），要他聽神的話、警戒百姓；責任在於警戒，不在於人是否肯聽（3:18-21）。",
      en: "A watchman is a sentry on the wall: when he sees the sword coming he blows the trumpet, and whoever hears and ignores it bears his own guilt (33:2–5). God makes Ezekiel a watchman twice (3:17; 33:7), to hear God’s word and warn the people; the duty lies in the warning, not in whether anyone listens (3:18–21)."
    },
    tip: {
      zh: "第 3 章的守望在他蒙召之後；第 33 章再次重申，之後不久就傳來耶路撒冷陷落的消息（33:21）。",
      en: "The watchman charge comes right after his call in chapter 3; it is repeated in chapter 33, shortly before the news of Jerusalem’s fall arrives (33:21)."
    },
    related: ["ezekiel", "eaten_scroll", "shepherds"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "siege_brick", book: "ezekiel", no: 5, kind: "other", type: "vision", rarity: 2,
    zh: "磚上的圍城", en: "The Siege on a Brick",
    tag: { zh: "用磚和躺臥傳話", en: "A Message in Clay and Posture" },
    role: { zh: "以西結的行動預兆", en: "Ezekiel’s sign-act" },
    ch: [4],
    passages: ["4:1-8"],
    moves: [
      { zh: "畫城、圍城", en: "Draw the City, Besiege It", ref: "4:1-3",
        dzh: "拿一塊磚畫上耶路撒冷，造臺築壘、安設撞錘，又放一個鐵鏊當作鐵牆。",
        den: "Take a brick, draw Jerusalem on it, build siege works and battering rams around it, and set an iron pan as an iron wall." },
      { zh: "左右側臥", en: "Lying on His Sides", ref: "4:4-6",
        dzh: "向左側臥三百九十日、向右側臥四十日，一日頂一年，擔當以色列和猶大的罪孽。",
        den: "Lie on his left side 390 days and on his right 40, a day for each year, bearing the guilt of Israel and Judah." }
    ],
    traits: [
      { k: "strength", zh: "預告城的結局", en: "Foretells the city’s end" },
      { k: "weakness", zh: "被繩索捆綁", en: "Bound with cords" }
    ],
    lesson: {
      zh: "有些信息，要用整個人「躺」出來；順服是以西結傳話的方式，也是他的第一個預兆。",
      en: "Some messages have to be lived out lying down; obedience is Ezekiel’s way of speaking — and his first sign."
    },
    quote: { ref: "4:1",
      zh: "你要拿一塊磚，擺在你面前，將一座耶路撒冷城畫在其上",
      en: "take a tile, and lay it before yourself, and portray on it a city, even Jerusalem" },
    keyVerses: ["4:1-3", "4:4-8"],
    intro: {
      zh: "以西結的第一個行動預兆（4:1-8）：用一塊磚畫出耶路撒冷，模擬被圍困；又照神所吩咐，向左右側臥共四百三十日（390＋40），象徵他們的罪孽。被擄的人坐在旁邊，看著他。",
      en: "Ezekiel’s first sign-act (4:1–8): he draws Jerusalem on a brick and stages its siege, then lies on his sides for 430 days in all (390 + 40), representing the people’s guilt, while the exiles sit and watch."
    },
    tip: {
      zh: "4:9-17 接著有定量的飲食（用糞燒烤大麥餅）；以西結抗議自己不曾被玷污，神就改用牛糞（4:12-15）。",
      en: "4:9–17 adds rationed food baked over dung; Ezekiel protests that he has never been defiled, and God lets him use cow dung instead (4:12–15)."
    },
    related: ["ezekiel", "exile_baggage", "ezekiel_wife"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "abominations", book: "ezekiel", no: 6, kind: "other", type: "scheme", rarity: 3,
    zh: "聖殿裡的可憎之事", en: "Abominations in the Temple",
    tag: { zh: "「耶和華看不見我們」", en: "“Yahweh Doesn’t See Us”" },
    role: { zh: "以西結在異象中的所見", en: "What Ezekiel saw in a vision" },
    ch: [8],
    passages: ["8:1-18"],
    moves: [
      { zh: "暗室裡的偶像", en: "Images in the Dark", ref: "8:10-12",
        dzh: "牆上畫滿爬物和走獸；七十個長老各拿香爐，暗中說：「耶和華看不見我們。」",
        den: "Walls covered with crawling things and beasts; seventy elders with censers, saying in secret, “Yahweh doesn’t see us.”" },
      { zh: "哭搭模斯、拜日頭", en: "Weeping for Tammuz, Bowing to the Sun", ref: "8:14-16",
        dzh: "有婦女坐著為搭模斯哭泣；又有約二十五人背向聖殿，面向東方拜日頭。",
        den: "Women sat weeping for Tammuz; about twenty-five men stood with their backs to the temple, bowing east to the sun." }
    ],
    traits: [
      { k: "strength", zh: "表面仍像敬拜", en: "Still looks like worship" },
      { k: "weakness", zh: "以為神看不見", en: "Thinks God can’t see" }
    ],
    lesson: {
      zh: "最隱密的事，神也看見；最危險的想法，就是「耶和華看不見我們」（8:12）。",
      en: "God sees even the most hidden things; the most dangerous thought is “Yahweh doesn’t see us” (8:12)."
    },
    quote: { ref: "8:12",
      zh: "耶和華看不見我們；耶和華已經離棄這地",
      en: "Yahweh doesn’t see us. Yahweh has forsaken the land." },
    keyVerses: ["8:3-6", "8:10-12", "8:14-16"],
    intro: {
      zh: "第六年，以西結坐在家中，神的靈在異象中把他帶到耶路撒冷的聖殿（8:1-3）。他一處一處地看見：惹忌邪的偶像（8:5）、暗室牆上的爬物走獸和七十個長老（8:10-12）、為搭模斯哭泣的婦女（8:14）、背向聖殿拜日頭的人（8:16）。這些，正是耶和華的榮耀要離開聖殿的原因。",
      en: "In the sixth year, as Ezekiel sits at home, the Spirit carries him in a vision to the temple in Jerusalem (8:1–3). One place after another he sees: the idol that provokes jealousy (8:5), crawling things and beasts on the walls with seventy elders (8:10–12), women weeping for Tammuz (8:14), and men with their backs to the temple, bowing to the sun (8:16). These are the reasons the glory of Yahweh is about to leave the temple."
    },
    tip: {
      zh: "搭模斯是美索不達米亞的神明，為祂哭泣是當時異教的儀式——卻發生在耶和華殿的北門口。",
      en: "Tammuz was a Mesopotamian deity, and weeping for him was a pagan rite — here at the north gate of Yahweh’s house."
    },
    related: ["mark_forehead", "glory", "whitewash"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "mark_forehead", book: "ezekiel", no: 7, kind: "person", type: "faith", rarity: 3,
    zh: "額上有記號的人", en: "The Man in Linen",
    tag: { zh: "為歎息哀哭的人畫記號", en: "Marking Those Who Grieve" },
    role: { zh: "異象中穿細麻衣的人", en: "The man in linen with the inkhorn" },
    ch: [9],
    passages: ["9:1-11"],
    moves: [
      { zh: "細麻衣與墨盒子", en: "Linen and Inkhorn", ref: "9:2-4",
        dzh: "六個拿兵器的人和一個穿細麻衣、帶墨盒子的人；他要給歎息哀哭的人額上畫記號。",
        den: "Six men with weapons and one in linen with an inkhorn; he was to mark the foreheads of those who sigh and cry over the city’s abominations." },
      { zh: "有記號的不要挨近", en: "Spare the Marked", ref: "9:5-6",
        dzh: "其餘的人隨後擊殺，只是凡有記號的人不要挨近；審判先從聖殿前的長老開始。",
        den: "The others were to follow and strike, but not to touch anyone with the mark; judgment began with the elders before the temple." }
    ],
    traits: [
      { k: "strength", zh: "分辨誰在哀哭", en: "Knows who grieves over sin" },
      { k: "weakness", zh: "站在審判的場面中", en: "Stands amid the judgment" }
    ],
    lesson: {
      zh: "神記念那些為罪惡歎息哀哭的人：在審判之中，仍有人被「記上記號」（9:4）。",
      en: "God remembers those who sigh and cry over evil: in the midst of judgment some are still marked (9:4)."
    },
    quote: { ref: "9:4",
      zh: "那些因城中所行可憎之事歎息哀哭的人，畫記號在額上",
      en: "set a mark on the foreheads of the men that sigh and that cry over all the abominations that are done within it" },
    keyVerses: ["9:1-2", "9:3-4", "9:5-6"],
    intro: {
      zh: "第 9 章接續第 8 章：神召來六個手拿兵器的人，還有一個穿細麻衣、腰帶墨盒子的人（9:1-2）。這個穿細麻衣的人要走遍耶路撒冷，給那些因城中可憎之事歎息哀哭的人額上畫記號；其餘的人隨後擊殺，只是不挨近有記號的人（9:4-6）。經文很沉重：審判是真實的；同時，神也分辨誰在為罪惡難過。",
      en: "Chapter 9 continues chapter 8: six men with weapons come, and with them one in linen with an inkhorn at his side (9:1–2). He is to go through Jerusalem marking the foreheads of those who sigh and cry over its abominations; the others follow to strike, but not to touch the marked (9:4–6). The text is heavy: the judgment is real, and yet God also distinguishes who grieves over evil."
    },
    tip: {
      zh: "「額上有記號」的畫面，後來也出現在啟示錄（啟 7:3；9:4）。",
      en: "The picture of a mark on the forehead returns in Revelation (Rev 7:3; 9:4)."
    },
    related: ["abominations", "glory", "watchman"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "glory", book: "ezekiel", no: 8, kind: "other", type: "heaven", rarity: 4,
    zh: "耶和華的榮耀", en: "The Glory of Yahweh",
    tag: { zh: "離開，又回來", en: "Leaving — and Coming Back" },
    role: { zh: "榮耀的離開與歸回（10–11；43 章）", en: "The glory’s departure and return (chs 10–11; 43)" },
    ch: [1, 9, 10, 11, 43],
    passages: ["10:18-19", "11:22-23", "43:1-5"],
    moves: [
      { zh: "榮耀離開", en: "The Glory Departs", ref: "10:18-19",
        dzh: "耶和華的榮耀從殿的門檻出去，由基路伯載著，從城中上升，停在城東的山上。",
        den: "Yahweh’s glory left the threshold of the temple, borne by the cherubim, rose from the city and stood on the mountain east of it." },
      { zh: "榮耀歸回", en: "The Glory Returns", ref: "43:1-5",
        dzh: "以色列神的榮光從東而來，聲音如多水的聲音；從東門照入殿中，充滿了殿。",
        den: "The glory of Israel’s God came from the east, its voice like many waters; it entered by the east gate and filled the house." }
    ],
    traits: [
      { k: "strength", zh: "不受地方限制", en: "Not bound to one place" },
      { k: "identity", zh: "神同在的記號", en: "The sign of God’s presence" }
    ],
    lesson: {
      zh: "神的同在不是理所當然；以西結看見祂離開（10–11），也看見祂回來（43）——這是整卷書的骨架。",
      en: "God’s presence is never to be taken for granted; Ezekiel sees it leave (chs 10–11) and return (ch 43) — the skeleton of the whole book."
    },
    quote: { ref: "43:5",
      zh: "耶和華的榮光充滿了殿",
      en: "Yahweh’s glory filled the house." },
    keyVerses: ["1:28", "10:18-19", "11:22-23", "43:2-5"],
    intro: {
      zh: "「耶和華的榮耀」是以西結書的主線。他在迦巴魯河邊第一次看見（1:28）；在第 10–11 章，榮耀從聖殿的門檻離開，停在城東的山上；到了第 43 章，榮耀從東門回到新殿，充滿了殿。",
      en: "“The glory of Yahweh” is the main thread of Ezekiel. He first sees it by the Kebar (1:28); in chapters 10–11 it leaves the temple threshold and stops on the mountain east of the city; in chapter 43 it returns by the east gate to the new temple and fills it."
    },
    tip: {
      zh: "從東邊離開，也從東邊回來（11:23；43:2）——方向本身就是一個提醒。",
      en: "It leaves toward the east and returns from the east (11:23; 43:2) — the direction itself is a reminder."
    },
    related: ["wheels", "abominations", "measuring_man", "temple_river"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "exile_baggage", book: "ezekiel", no: 9, kind: "other", type: "vision", rarity: 2,
    zh: "行李與挖牆", en: "Baggage and the Hole in the Wall",
    tag: { zh: "白天搬、夜裡走的被擄預兆", en: "Packing by Day, Leaving by Night" },
    role: { zh: "以西結的行動預兆", en: "Ezekiel’s sign-act of exile" },
    ch: [12],
    passages: ["12:1-11"],
    moves: [
      { zh: "白日搬出行李", en: "Baggage in Daylight", ref: "12:3-4",
        dzh: "他在白天當眾人眼前帶出像是被擄用的行李，到晚上又像被擄的人一樣親自出去。",
        den: "In daylight, before their eyes, he carried out baggage like an exile’s, and in the evening went out himself like one going into exile." },
      { zh: "挖牆、蒙臉", en: "Through the Wall, Face Covered", ref: "12:5-7",
        dzh: "他在眾人眼前挖通了牆，天黑時把行李搭在肩上帶出去，並蒙著臉看不見地。",
        den: "Before their eyes he dug through the wall and carried the baggage out on his shoulder at dusk, his face covered so he could not see the ground." }
    ],
    traits: [
      { k: "strength", zh: "讓人看見將來的事", en: "Makes what’s coming visible" },
      { k: "weakness", zh: "他們有眼卻看不見", en: "They have eyes but don’t see" }
    ],
    lesson: {
      zh: "有些人要親眼看見，才肯相信；以西結把「被擄」演給他們看，因為他們「有眼睛看不見」（12:2）。",
      en: "Some people believe only what they see; Ezekiel acts out exile for those who “have eyes to see but don’t see” (12:2)."
    },
    quote: { ref: "12:11",
      zh: "我作你們的預兆：我怎樣行，他們所遭遇的也必怎樣",
      en: "I am your sign. As I have done, so will it be done to them." },
    keyVerses: ["12:1-3", "12:4-7", "12:11"],
    intro: {
      zh: "在耶路撒冷淪陷以前，以西結再用行動作預兆（12:1-11）：白天預備好被擄用的行李，當著眾人的面挖通牆壁，天黑時搭在肩頭帶出去，並蒙著臉。他說：「我作你們的預兆」（12:11）——留在耶路撒冷的人也要如此被擄去。",
      en: "Before Jerusalem falls, Ezekiel again acts out the message (12:1–11): he packs an exile’s baggage by day, digs through the wall before everyone’s eyes, and carries it out on his shoulder at dusk with his face covered. “I am your sign,” he says (12:11) — those left in Jerusalem will go into exile the same way."
    },
    tip: {
      zh: "這個預兆是在人們的眼前做的：「在他們眼前」這句話在 12:3-7 出現多次。",
      en: "The sign is done in full view: “before their eyes” recurs through 12:3–7."
    },
    related: ["ezekiel", "siege_brick", "ezekiel_wife"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "whitewash", book: "ezekiel", no: 10, kind: "other", type: "scheme", rarity: 2,
    zh: "抹灰的牆", en: "The Whitewashed Wall",
    tag: { zh: "「平安」的灰漿", en: "Plaster Over the Cracks" },
    role: { zh: "以西結對假先知的比喻", en: "Ezekiel’s picture of false prophets" },
    ch: [13],
    passages: ["13:1-16"],
    moves: [
      { zh: "「平安！」其實沒有平安", en: "“Peace” — and No Peace", ref: "13:10",
        dzh: "先知誘惑百姓說「平安」，其實沒有平安；有人立起牆，他們倒用灰漿抹上。",
        den: "The prophets seduced the people, saying “Peace” when there was no peace; when a wall went up, they plastered it with whitewash." },
      { zh: "暴雨、冰雹、狂風", en: "Rain, Hail and Wind", ref: "13:11-14",
        dzh: "神要降暴雨、大冰雹、狂風，把牆拆平到地；抹牆的人也在其中滅亡。",
        den: "God would send a flood of rain, great hailstones and a storm wind to level the wall — and the plasterers perish with it." }
    ],
    traits: [
      { k: "strength", zh: "表面光鮮", en: "Looks fine on the surface" },
      { k: "weakness", zh: "經不起風雨", en: "Can’t survive a storm" }
    ],
    lesson: {
      zh: "抹灰不能代替修牆；沒有真正的悔改，說再多「平安」，都只是粉飾（13:10, 16）。",
      en: "Plaster is no substitute for repairing the wall; without real repentance, all the “peace” is cosmetic (13:10, 16)."
    },
    quote: { ref: "13:10",
      zh: "他們誘惑我的百姓，說：『平安！』其實沒有平安",
      en: "they have seduced my people, saying, “Peace;” and there is no peace." },
    keyVerses: ["13:1-3", "13:10-12", "13:13-16"],
    intro: {
      zh: "第 13 章是以西結對假先知的指責，與耶利米書互相呼應（耶 6:14）。他用一幅畫面說明：有人立起一堵牆，這些先知卻只用灰漿抹上去，裝出堅固的樣子（13:10）。風雨一來，牆倒了，人就要問：「你們抹的灰在哪裡呢？」（13:12）",
      en: "Chapter 13 is Ezekiel’s charge against the false prophets, echoing Jeremiah (Jer 6:14). His picture: someone builds a wall and these prophets just plaster over it so it looks strong (13:10). When the storm comes and the wall falls, people ask, “Where is the plaster you plastered it with?” (13:12)"
    },
    tip: {
      zh: "和合本把這灰叫做「未泡透的灰」；英文 World English Bible 譯作 whitewash（白灰漿）——都是只作表面功夫。",
      en: "The 和合本calls it “untempered mortar,” the World English Bible “whitewash” — either way, a surface job only."
    },
    related: ["abominations", "ezekiel"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "foundling", book: "ezekiel", no: 11, kind: "other", type: "love", rarity: 3,
    zh: "被棄的女嬰", en: "The Foundling Girl",
    tag: { zh: "耶路撒冷的身世", en: "Jerusalem’s Origin Story" },
    role: { zh: "第 16 章的比喻", en: "The parable of chapter 16" },
    ch: [16],
    passages: ["16:1-14", "16:59-63"],
    moves: [
      { zh: "被扔在田野", en: "Cast Out in the Field", ref: "16:4-5",
        dzh: "她出生時沒有人為她斷臍帶、洗淨、用布裹；因被厭惡而扔在田野，沒有誰的眼可憐她。",
        den: "At birth no one cut her cord, washed or wrapped her; she was thrown into the open field, and no eye pitied her." },
      { zh: "「你仍可存活」", en: "“Live!”", ref: "16:6-8",
        dzh: "神從旁經過，對她說「你仍可存活」，用衣襟遮蓋她，與她結盟，她就歸於祂。",
        den: "Yahweh passed by and said “Live!”, spread his garment over her, made a covenant with her, and she became his." }
    ],
    traits: [
      { k: "strength", zh: "被神拾起", en: "Picked up by God" },
      { k: "weakness", zh: "後來背棄了盟約", en: "Later broke the covenant" }
    ],
    lesson: {
      zh: "神的愛比我們的出身更早；以西結要耶路撒冷記得：她是被拾起來的，不是自己得來的（16:6, 14）。",
      en: "God’s love is older than our origins; Ezekiel wants Jerusalem to remember she was picked up, not self-made (16:6, 14)."
    },
    quote: { ref: "16:6",
      zh: "我從你旁邊經過，見你滾在血中，就對你說：你雖在血中，仍可存活",
      en: "I said to you, ‘Though you are in your blood, live!’" },
    keyVerses: ["16:3-5", "16:6-8", "16:13-14", "16:59-63"],
    intro: {
      zh: "第 16 章是全書最長的比喻之一：耶路撒冷像一個出生就被扔在田野的女嬰，神經過，使她存活、長大、與她結盟，並賜她華美的衣飾（16:4-14）。但她後來倚靠自己的美貌，背棄盟約（16:15 以下）。章末卻說：神要記念幼年時所立的約，與她立定永約（16:60）。本章有不少露骨的比喻和嚴厲的指控，讀的時候請留意這是在比喻不忠。",
      en: "Chapter 16 is one of the book’s longest parables: Jerusalem is like a baby thrown out in a field at birth; God passes by, lets her live and grow, makes a covenant with her and adorns her (16:4–14). She later trusts her own beauty and breaks the covenant (16:15 ff.). Yet the chapter ends with God remembering the covenant of her youth and establishing an everlasting one (16:60). The chapter uses explicit imagery and harsh accusations; keep in mind it is a parable about unfaithfulness."
    },
    tip: {
      zh: "16:3 指出耶路撒冷的出身：「你父親是亞摩利人，你母親是赫人」——一個要她謙卑的提醒。",
      en: "16:3 names Jerusalem’s origins — “your father was an Amorite and your mother a Hittite” — a reminder meant to humble her."
    },
    related: ["ezekiel", "abominations", "glory"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "sour_grapes", book: "ezekiel", no: 12, kind: "other", type: "wisdom", rarity: 3,
    zh: "酸葡萄", en: "The Sour Grapes",
    tag: { zh: "各人為自己的罪負責", en: "Each One Answers for His Own Sin" },
    role: { zh: "一句流行的俗語（18 章）", en: "A popular proverb (chapter 18)" },
    ch: [18],
    passages: ["18:1-4", "18:20-24", "18:30-32"],
    moves: [
      { zh: "「父親吃了酸葡萄」", en: "The Proverb", ref: "18:2-4",
        dzh: "百姓說「父親吃了酸葡萄，兒子的牙酸倒了」；神說不許再用這俗語，犯罪的才必死亡。",
        den: "People said, “The fathers ate sour grapes and the children’s teeth are set on edge”; God said stop — the one who sins is the one who dies." },
      { zh: "回頭而存活", en: "Turn and Live", ref: "18:30-32",
        dzh: "神說：我不喜悅那死人之死；所以你們當回頭，自做一個新心和新靈，而存活。",
        den: "Yahweh said: I have no pleasure in anyone’s death — so turn back, make yourselves a new heart and new spirit, and live." }
    ],
    traits: [
      { k: "strength", zh: "把責任放回各人身上", en: "Puts responsibility on each person" },
      { k: "weakness", zh: "習慣怪罪上一代", en: "The habit of blaming the last generation" }
    ],
    lesson: {
      zh: "不要拿祖先的罪或環境作藉口：神要每一個人回頭而存活（18:20, 32）。",
      en: "Don’t make ancestors or circumstances an excuse: God wants every person to turn and live (18:20, 32)."
    },
    quote: { ref: "18:23",
      zh: "不是喜悅他回頭離開所行的道存活嗎？",
      en: "and not rather that he should return from his way, and live?" },
    keyVerses: ["18:1-4", "18:20-24", "18:30-32"],
    intro: {
      zh: "被擄的人常說一句俗語：「父親吃了酸葡萄，兒子的牙酸倒了」（18:2），意思是：我們受苦，是因為祖先的罪。以西結傳神的話，說不許再用這句話（18:3）：兒子不擔當父親的罪孽，父親也不擔當兒子的（18:20）；惡人若回頭，必存活（18:21-23）。神說：「我不喜悅那死人之死，所以你們當回頭而存活」（18:32）。",
      en: "The exiles had a saying: “The fathers have eaten sour grapes and the children’s teeth are set on edge” (18:2) — we suffer because of our ancestors’ sins. Ezekiel brings God’s word that the proverb must stop (18:3): the son does not bear the father’s guilt, nor the father the son’s (18:20); if the wicked turns back, he will live (18:21–23). “I have no pleasure in the death of him who dies; therefore turn and live” (18:32)."
    },
    tip: {
      zh: "18:31 說「自做一個新心和新靈」，36:26 卻說「我要賜給你們一個新心」——人的回頭與神的更新，是同一個應許的兩面。",
      en: "18:31 says “make yourselves a new heart and a new spirit,” while 36:26 says “I will give you a new heart” — human turning and God’s renewal are two sides of one promise."
    },
    related: ["ezekiel", "new_heart", "watchman"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "ezekiel_wife", book: "ezekiel", no: 13, kind: "person", type: "love", rarity: 3,
    zh: "眼目所喜愛的", en: "The Delight of His Eyes",
    tag: { zh: "不能哭的喪禮", en: "A Funeral Without Weeping" },
    role: { zh: "以西結的妻子（沒有留下名字）", en: "Ezekiel’s wife (unnamed)" },
    ch: [24],
    passages: ["24:15-24"],
    moves: [
      { zh: "忽然取去", en: "Taken in a Stroke", ref: "24:16-18",
        dzh: "神說要把他眼目所喜愛的忽然取去，他卻不可哭泣；早晨他告訴百姓，晚上他的妻就死了。",
        den: "God said he would take the desire of his eyes in a stroke, yet he must not weep; in the morning he told the people, and in the evening his wife died." },
      { zh: "不哀哭，作預兆", en: "No Mourning — a Sign", ref: "24:17-24",
        dzh: "他不辦喪事，頭上仍裹頭巾、腳上仍穿鞋；百姓問原因，他說這是預兆。",
        den: "He held no mourning rites — turban still on his head, sandals on his feet; when the people asked why, he said it was a sign." }
    ],
    traits: [
      { k: "strength", zh: "代價極大的順服", en: "Costly obedience" },
      { k: "weakness", zh: "不能公開哀哭", en: "Could not weep publicly" }
    ],
    lesson: {
      zh: "經文沒有解釋以西結的感受，只記下他照所吩咐的去行（24:18）——先知的順服，有時要付上極大的代價。",
      en: "The text doesn’t explain how Ezekiel felt, only that he did as he was told (24:18) — a prophet’s obedience can cost enormously."
    },
    quote: { ref: "24:16",
      zh: "我要將你眼目所喜愛的忽然取去，你卻不可悲哀哭泣",
      en: "I will take away from you the desire of your eyes with a stroke: yet you shall neither mourn nor weep" },
    keyVerses: ["24:15-18", "24:19-24"],
    intro: {
      zh: "第 24 章，神告訴以西結：祂要把他眼目所喜愛的忽然取去，他卻不可哀哭（24:16-17）。早晨他把這話告訴百姓，晚上他的妻子就死了；次日早晨，他照著吩咐，沒有辦喪事（24:18）。百姓問這是什麼意思，他說：這是給你們的預兆（24:19-24）。經文沒有留下他妻子的名字，也沒有寫他心裡的感受。",
      en: "In chapter 24 God tells Ezekiel he will take “the desire of your eyes” suddenly, and he must not mourn (24:16–17). In the morning he tells the people, and in the evening his wife dies; the next morning he does as commanded and holds no mourning rites (24:18). When the people ask what it means he says it is a sign for them (24:19–24). The text gives neither his wife’s name nor his feelings."
    },
    tip: {
      zh: "24:23 說百姓以後也要「不蒙著嘴唇、不吃弔喪的食物」——痛苦大到連哭都不能。",
      en: "24:23 says the people too will not cover their lips or eat the bread of mourners — grief too great even for weeping."
    },
    related: ["ezekiel", "exile_baggage", "siege_brick"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "tyre_ship", book: "ezekiel", no: 14, kind: "other", type: "power", rarity: 2,
    zh: "泰爾的大船", en: "The Ship of Tyre",
    tag: { zh: "「我是全然美麗的」", en: "“I Am Perfect in Beauty”" },
    role: { zh: "對泰爾的哀歌（26–28 章）", en: "A lament over Tyre (chs 26–28)" },
    ch: [26, 27, 28],
    passages: ["26:2-4", "27:3-9", "27:25-27"],
    moves: [
      { zh: "全然美麗", en: "Perfect in Beauty", ref: "27:5-7",
        dzh: "她用示尼珥的松木做板、黎巴嫩的香柏做桅杆、巴珊的橡木做槳，篷帆是埃及繡花細麻布。",
        den: "Her planks were fir from Senir, her mast a cedar of Lebanon, her oars oaks of Bashan, her sail embroidered Egyptian linen." },
      { zh: "沉在海中", en: "Sunk in the Sea", ref: "27:25-27",
        dzh: "盪槳的把她盪到大水之處，東風在海中將她打破；她的資財和人民都沉在海中。",
        den: "Her rowers brought her into deep waters and the east wind broke her in the heart of the seas; her wealth and people sank." }
    ],
    traits: [
      { k: "strength", zh: "貿易通到許多海島", en: "Trade reaching many islands" },
      { k: "weakness", zh: "驕傲自誇", en: "Pride and boasting" }
    ],
    lesson: {
      zh: "最華麗的船，也有被東風打破的一天；自誇「我是全然美麗的」（27:3），是第 27–28 章反覆指出的問題。",
      en: "Even the grandest ship can be broken by the east wind; boasting “I am perfect in beauty” (27:3) is the problem chapters 27–28 keep naming."
    },
    quote: { ref: "27:3",
      zh: "泰爾啊，你曾說：我是全然美麗的",
      en: "You, Tyre, have said, ‘I am perfect in beauty.’" },
    keyVerses: ["26:2-4", "27:3-7", "27:25-27", "28:2"],
    intro: {
      zh: "泰爾（和合本譯名，也稱推羅）是地中海邊的商業大城，曾為耶路撒冷的敗落拍手稱快（26:2）。以西結用一首哀歌，把她描寫成一艘用最好材料建造的華麗大船（27:3-9），然後說她被東風在海中打破（27:26）。第 28 章再指她的君王心裡高傲，自比為神（28:2）。",
      en: "Tyre was a great Mediterranean trading city that gloated over Jerusalem’s ruin (26:2). In a lament Ezekiel pictures her as a splendid ship built of the finest materials (27:3–9), then broken by the east wind in the heart of the seas (27:26). Chapter 28 adds that her ruler’s heart is proud and he compares himself to a god (28:2)."
    },
    tip: {
      zh: "28:11-19 對「泰爾王」的描寫用了伊甸園的語言，解經者有不同看法——有人看作歷史上的君王，也有人看出更深的象徵。",
      en: "28:11–19 describes the “king of Tyre” in the language of Eden; interpreters differ — some see a historical king, others a deeper symbol."
    },
    related: ["pharaoh_dragon", "ezekiel"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "pharaoh_dragon", book: "ezekiel", no: 15, kind: "other", type: "beast", rarity: 2,
    zh: "河中的大魚", en: "The Great Monster of the Nile",
    tag: { zh: "「這河是我的」", en: "“The Nile Is Mine”" },
    role: { zh: "埃及王法老", en: "Pharaoh, king of Egypt" },
    ch: [29, 32],
    passages: ["29:1-7", "32:1-4"],
    moves: [
      { zh: "「這河是我的」", en: "“My River Is My Own”", ref: "29:3",
        dzh: "神與這臥在自己河中的大魚為敵；他說：這河是我的，是我為自己造的。",
        den: "Yahweh was against the great monster lying in his rivers, who said, “My river is my own, and I have made it for myself.”" },
      { zh: "鉤住腮頰", en: "A Hook in the Jaws", ref: "29:4-5",
        dzh: "神要用鉤子鉤住他的腮頰，連同貼在鱗甲上的魚從河中拉上來，拋在曠野。",
        den: "God would hook his jaws and draw him out of the rivers with the fish clinging to his scales, and throw him in the wilderness." }
    ],
    traits: [
      { k: "strength", zh: "河與國的富足", en: "The Nile’s wealth" },
      { k: "weakness", zh: "不過是蘆葦杖", en: "Only a staff of reed" }
    ],
    lesson: {
      zh: "人若把自己的富足和權力當作自己的作為——「是我為自己造的」——就是在爭搶本來屬神的榮耀（29:3）。",
      en: "To treat wealth and power as self-made — “I made it for myself” — is to grab glory that belongs to God (29:3)."
    },
    quote: { ref: "29:3",
      zh: "我與你這臥在自己河中的大魚為敵。你曾說：這河是我的，是我為自己造的",
      en: "the great monster that lies in the middle of his rivers, that has said, ‘My river is my own, and I have made it for myself.’" },
    keyVerses: ["29:1-5", "29:6-7", "32:1-4"],
    intro: {
      zh: "埃及是猶大倚靠的強鄰。以西結把法老比作河中的大魚（或怪獸），驕傲地說「這河是我的」（29:3），神卻要用鉤子鉤住他的腮頰拉上來（29:4）。埃及曾使以色列倚靠，卻像蘆葦杖一樣折斷，傷了倚靠它的人（29:6-7）。第 32 章是為法老作的哀歌（32:2）。",
      en: "Egypt was the strong neighbor Judah leaned on. Ezekiel pictures Pharaoh as a great fish (or monster) boasting “My river is my own” (29:3), but God will hook his jaws and haul him out (29:4). Egypt has been a staff of reed for Israel — it snapped and wounded those who leaned on it (29:6–7). Chapter 32 is a lament for Pharaoh (32:2)."
    },
    tip: {
      zh: "「大魚」在原文可譯作「大怪獸」（WEB 譯 monster）——在古代近東，鱷魚和海怪常用來象徵混亂與強權。",
      en: "The Hebrew can mean “great monster” (WEB: monster) — in the ancient Near East crocodiles and sea monsters often stood for chaos and brute power."
    },
    related: ["tyre_ship", "ezekiel"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "shepherds", book: "ezekiel", no: 16, kind: "person", type: "love", rarity: 4,
    zh: "牧人與羊", en: "The Shepherds and the Sheep",
    tag: { zh: "耶和華自己作牧人", en: "Yahweh Himself Will Shepherd" },
    role: { zh: "以色列的領袖，與神自己", en: "Israel’s leaders — and God himself" },
    ch: [34],
    passages: ["34:1-16", "34:23-24"],
    moves: [
      { zh: "只知牧養自己", en: "Shepherds Who Feed Themselves", ref: "34:2-4",
        dzh: "他們吃脂油、穿羊毛、宰肥羊，卻不牧養群羊；瘦弱的、有病的、受傷的、失喪的都沒人顧。",
        den: "They ate the fat, wore the wool and slaughtered the fat sheep but did not feed the flock; the weak, sick, injured and lost were uncared for." },
      { zh: "「我必親自尋找」", en: "“I Myself Will Search”", ref: "34:11-16",
        dzh: "神說：我必親自尋找我的羊；失喪的我必尋找，被逐的領回，受傷的纏裹，有病的醫治。",
        den: "Yahweh said: I myself will search for my sheep — the lost I will seek, the scattered bring back, the injured bind up, the sick strengthen." }
    ],
    traits: [
      { k: "strength", zh: "牧人的心腸", en: "A shepherd’s heart" },
      { k: "weakness", zh: "牧人若只顧自己", en: "Shepherds who care only for themselves" }
    ],
    lesson: {
      zh: "領導的標準，是看羊群得到多少照顧，而不是牧人得到多少好處（34:2-4）；最後，神自己要作牧人（34:15）。",
      en: "The test of leadership is how well the flock is cared for, not what the shepherd gets (34:2–4); in the end God himself becomes the shepherd (34:15)."
    },
    quote: { ref: "34:15",
      zh: "我必親自作我羊的牧人，使牠們得以躺臥",
      en: "I myself will be the shepherd of my sheep, and I will cause them to lie down" },
    keyVerses: ["34:2-4", "34:11-13", "34:15-16", "34:23-24"],
    intro: {
      zh: "第 34 章把以色列的領袖比作牧人，責備他們只知牧養自己（34:2-3）。然後神說：祂要親自尋找、聚集、醫治、牧養自己的羊（34:11-16），又要立一個牧人，就是祂的僕人大衛（34:23-24）。約翰福音 10:11 耶穌說「我是好牧人」，常被認為與這一章相呼應。",
      en: "Chapter 34 compares Israel’s leaders to shepherds and rebukes them for feeding only themselves (34:2–3). Then God says he will search for, gather, heal and shepherd his own sheep (34:11–16) and set one shepherd over them, his servant David (34:23–24). Jesus’ words “I am the good shepherd” (John 10:11) are often seen as echoing this chapter."
    },
    tip: {
      zh: "34:15-16 一連串的「我必」——尋找、領回、纏裹、醫治——正好和 34:4 一連串的「你們沒有」互相對照。",
      en: "The string of “I will” in 34:15–16 — seek, bring back, bind up, heal — mirrors the string of “you have not” in 34:4."
    },
    related: ["ezekiel", "watchman", "new_heart"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "new_heart", book: "ezekiel", no: 17, kind: "other", type: "heaven", rarity: 4,
    zh: "新心與新靈", en: "A New Heart and a New Spirit",
    tag: { zh: "把石心換成肉心", en: "A Heart of Flesh for a Heart of Stone" },
    role: { zh: "神對被擄者的應許", en: "God’s promise to the exiles" },
    ch: [36],
    passages: ["36:22-28"],
    moves: [
      { zh: "為我的聖名", en: "For My Holy Name", ref: "36:22-24",
        dzh: "神行這事不是為以色列家，乃是為自己的聖名；祂要從各國收取他們，領他們歸回本地。",
        den: "God acts not for Israel’s sake but for his holy name; he would take them from the nations and bring them back to their land." },
      { zh: "石心換肉心", en: "Stone for Flesh", ref: "36:25-27",
        dzh: "祂要用清水灑他們使他們潔淨，賜新心新靈，除掉石心、賜肉心，又把自己的靈放在他們裡面。",
        den: "He would sprinkle clean water on them, give a new heart and spirit, remove the heart of stone for a heart of flesh, and put his Spirit within them." }
    ],
    traits: [
      { k: "strength", zh: "從裡面更新", en: "Renewal from within" },
      { k: "identity", zh: "神白白的恩典", en: "A gift of God’s grace" }
    ],
    lesson: {
      zh: "18:31 要人「自做新心」，36:26 卻說「我要賜給你們新心」——人的回頭與神的更新，是同一個應許的兩面。",
      en: "18:31 tells people to “make yourselves a new heart,” 36:26 says “I will give you a new heart” — two sides of one promise."
    },
    quote: { ref: "36:26",
      zh: "我也要賜給你們一個新心，將新靈放在你們裡面",
      en: "I will also give you a new heart, and I will put a new spirit within you." },
    keyVerses: ["36:22-24", "36:25-27", "36:28"],
    intro: {
      zh: "被擄的人以為一切都結束了，神卻應許復興（36:24）；而且不只是回到本地，更是從裡面被更新：清水潔淨、新心新靈、除掉石心賜肉心、神的靈放在他們裡面（36:25-27）。新約中，耶穌對尼哥底母說人要「從水和聖靈生」（約 3:5），常被認為與此呼應。",
      en: "The exiles think it is all over, but God promises restoration (36:24) — and not only a return to the land but renewal from within: clean water, a new heart and spirit, the heart of stone replaced by flesh, his Spirit put within them (36:25–27). Jesus’ words to Nicodemus about being born “of water and the Spirit” (John 3:5) are often seen as echoing this."
    },
    tip: {
      zh: "36:27 說神的靈使他們「順從我的律例」——新心的結果，是願意順服。",
      en: "36:27 says God’s Spirit will cause them to walk in his statutes — the result of a new heart is willing obedience."
    },
    related: ["sour_grapes", "dry_bones", "shepherds", "two_sticks"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "dry_bones", book: "ezekiel", no: 18, kind: "other", type: "vision", rarity: 5,
    zh: "枯骨谷", en: "The Valley of Dry Bones",
    tag: { zh: "這些骸骨能復活嗎？", en: "Can These Bones Live?" },
    role: { zh: "以色列復興的異象", en: "A vision of Israel’s restoration" },
    ch: [37],
    passages: ["37:1-14"],
    moves: [
      { zh: "「這些骸骨能復活嗎？」", en: "Can These Bones Live?", ref: "37:1-3",
        dzh: "神把他放在滿是枯骨的平原，問：這些骸骨能復活嗎？他說：「主耶和華啊，你是知道的。」",
        den: "God set him in a valley full of very dry bones and asked, “Can these bones live?” He answered, “Lord Yahweh, you know.”" },
      { zh: "氣息進入", en: "Breath Enters", ref: "37:7-10",
        dzh: "他一說預言，骨與骨聯絡、長筋長肉；氣息從四方來，骸骨便活了，站起來成為極大的軍隊。",
        den: "As he prophesied the bones came together and sinews and flesh formed; breath came from the four winds and they lived, an exceedingly great army." }
    ],
    traits: [
      { k: "strength", zh: "神使死的復活", en: "God makes the dead live" },
      { k: "weakness", zh: "枯乾到「指望失去了」", en: "So dry that “our hope is lost”" }
    ],
    lesson: {
      zh: "被擄的人說「我們的指望失去了」（37:11）；神的回答是開墳墓、賜氣息、帶他們回家——人絕望的地方，是神動工的起點。",
      en: "The exiles say “our hope is lost” (37:11); God answers by opening graves, giving breath and bringing them home — where we despair, God begins."
    },
    quote: { ref: "37:3",
      zh: "人子啊，這些骸骨能復活嗎？",
      en: "Son of man, can these bones live?" },
    keyVerses: ["37:1-3", "37:4-6", "37:7-10", "37:11-14"],
    intro: {
      zh: "枯骨谷是以西結書最著名的異象。神帶以西結到滿是枯骨的平原，問他：這些骸骨能復活嗎？（37:1-3）他奉命向骸骨說預言，骨頭就聯絡起來、長筋長肉；他再向風說預言，氣息進入，骸骨活了，站起來成為極大的軍隊（37:7-10）。神解釋：這些骸骨就是以色列全家，他們說「我們的指望失去了」（37:11）；神要開他們的墳墓，把祂的靈放在他們裡面（37:12-14）。",
      en: "The valley of dry bones is Ezekiel’s best-known vision. God sets him in a plain full of bones and asks, “Can these bones live?” (37:1–3). He prophesies to the bones and they come together with sinews and flesh; he prophesies to the breath and it enters them, and they rise as an exceedingly great army (37:7–10). God explains: these bones are the whole house of Israel, who say “our hope is lost” (37:11); he will open their graves and put his Spirit in them (37:12–14)."
    },
    tip: {
      zh: "「氣息」「風」「靈」在希伯來文是同一個字（ruach）——37:9-10 的氣息，和 37:14 的「我的靈」，是同一個詞。",
      en: "“Breath,” “wind” and “spirit” are one Hebrew word (ruach) — the breath of 37:9–10 and “my Spirit” of 37:14 are the same word."
    },
    related: ["new_heart", "two_sticks", "ezekiel"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "two_sticks", book: "ezekiel", no: 19, kind: "other", type: "power", rarity: 2,
    zh: "兩根木杖", en: "The Two Sticks",
    tag: { zh: "合而為一", en: "Joined Into One" },
    role: { zh: "以西結的行動預兆", en: "Ezekiel’s sign-act of reunion" },
    ch: [37],
    passages: ["37:15-28"],
    moves: [
      { zh: "兩根木杖，接連為一", en: "Two Sticks, One Stick", ref: "37:16-17",
        dzh: "他取兩根木杖，一根為猶大、一根為約瑟（以法蓮），在手中接連成一根。",
        den: "He took two sticks — one for Judah, one for Joseph (Ephraim) — and joined them into one in his hand." },
      { zh: "一國、一王、一牧人", en: "One Nation, One King", ref: "37:22-24",
        dzh: "神要使他們在以色列山上成為一國，不再分為二國；我的僕人大衛作王，眾民歸一個牧人。",
        den: "God would make them one nation on Israel’s mountains, never again two; my servant David king, and all one shepherd." }
    ],
    traits: [
      { k: "strength", zh: "把分裂的重新接上", en: "Rejoins what was divided" },
      { k: "weakness", zh: "原本是兩個敵對的國", en: "Once two rival kingdoms" }
    ],
    lesson: {
      zh: "神的復興，不只是各人回家，也包括被分裂的百姓合而為一（37:22）。",
      en: "God’s restoration is not only people returning home but a divided people made one (37:22)."
    },
    quote: { ref: "37:17",
      zh: "你要使這兩根木杖接連為一，在你手中成為一根",
      en: "join them for yourself to one another into one stick, that they may become one in your hand" },
    keyVerses: ["37:15-17", "37:18-20", "37:21-24"],
    intro: {
      zh: "枯骨谷之後，以西結又用一個行動預兆說明復興：取兩根木杖，一根寫著猶大，一根寫著約瑟（以法蓮），在手中接連成一根（37:16-17）。意思是：分裂了的兩個國，要再合為一國，有一個王、一個牧人（37:22, 24）。",
      en: "After the dry bones Ezekiel acts out restoration again: he takes two sticks, one marked for Judah and one for Joseph (Ephraim), and joins them into one in his hand (37:16–17). The divided kingdoms will become one nation with one king and one shepherd (37:22, 24)."
    },
    tip: {
      zh: "第 37 章前半說「生命」（枯骨復活），後半說「合一」（兩杖為一）——合起來是「復興」的兩個面向。",
      en: "The first half of chapter 37 is about life (dry bones), the second about unity (two sticks) — together two aspects of restoration."
    },
    related: ["dry_bones", "new_heart", "shepherds"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "gog", book: "ezekiel", no: 20, kind: "person", type: "scheme", rarity: 2,
    zh: "歌革", en: "Gog of Magog",
    tag: { zh: "從北方來的大軍", en: "The Army From the North" },
    role: { zh: "瑪各地的歌革，羅施、米設、土巴的王", en: "Gog, prince of Rosh, Meshech and Tubal" },
    ch: [38, 39],
    names: ["歌革"],
    enNames: ["Gog"],
    moves: [
      { zh: "「我與你為敵」", en: "“I Am Against You”", ref: "38:2-4",
        dzh: "神說：歌革啊，我與你為敵；我必鉤住你的腮頰，把你和你的軍隊都帶出來。",
        den: "Yahweh said: Gog, I am against you; I will put hooks in your jaws and bring out you and all your army." },
      { zh: "末後之年", en: "In the Latter Years", ref: "38:8-9",
        dzh: "過了多日，到末後之年，歌革和許多國的民如暴風上來，攻擊已從列國收回的以色列。",
        den: "After many days, in the latter years, Gog and many peoples would come up like a storm against a land restored from the nations." }
    ],
    traits: [
      { k: "strength", zh: "大軍雲集", en: "A vast coalition" },
      { k: "weakness", zh: "神親自為敵", en: "God himself is against him" }
    ],
    lesson: {
      zh: "對這兩章的解釋差異很大；經文本身的重點是：神保護自己的百姓，並要在列國眼前「顯為大、顯為聖」（38:23）。",
      en: "Interpretations of these chapters differ widely; the text itself stresses that God protects his people and will “magnify and sanctify” himself before the nations (38:23)."
    },
    quote: { ref: "38:23",
      zh: "我必顯為大，顯為聖，在多國人的眼前顯現",
      en: "I will magnify myself, and sanctify myself, and I will make myself known in the eyes of many nations." },
    keyVerses: ["38:2-4", "38:8-9", "38:18-23", "39:1-6"],
    intro: {
      zh: "第 38–39 章預言一個叫「歌革」的首領，帶領北方許多國的軍隊，攻擊已經復興的以色列（38:2-9）。神親自與他為敵：大震動、瘟疫、暴雨、大雹、火與硫磺（38:19-22），他的軍隊倒在以色列山上（39:4）。這兩章的解釋差異極大：有人看作歷史性的末後事件，有人看作象徵惡勢力的最後敗亡（啟 20:8 也提到「歌革和瑪各」）。",
      en: "Chapters 38–39 foretell a leader named Gog who brings the armies of many northern nations against restored Israel (38:2–9). God himself opposes him: a great shaking, plague, flooding rain, hailstones, fire and sulfur (38:19–22), and his army falls on Israel’s mountains (39:4). Interpretation differs sharply: some read a literal end-time event, others a symbol of evil’s final defeat (Rev 20:8 also mentions “Gog and Magog”)."
    },
    tip: {
      zh: "「歌革」「瑪各」「羅施」「米設」「土巴」對應什麼，歷來有許多說法；可以多看幾種註釋，不必倉促對號入座。",
      en: "What Gog, Magog, Rosh, Meshech and Tubal correspond to has been debated for centuries; compare several commentaries and don’t rush to match them."
    },
    related: ["ezekiel", "dry_bones", "two_sticks"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "measuring_man", book: "ezekiel", no: 21, kind: "heavenly", type: "heaven", rarity: 3,
    zh: "手拿量度竿的人", en: "The Man With the Measuring Rod",
    tag: { zh: "帶以西結參觀新殿", en: "Guide Through the New Temple" },
    role: { zh: "異象中的嚮導", en: "A guide in the vision" },
    ch: [40, 47],
    passages: ["40:3-5", "47:3-6"],
    moves: [
      { zh: "顏色如銅", en: "Like Bronze", ref: "40:3",
        dzh: "一個人顏色如銅，手拿麻繩和量度的竿，站在門口。",
        den: "A man whose appearance was like bronze, with a line of flax and a measuring reed in his hand, stood in the gateway." },
      { zh: "「你要用眼看」", en: "“Look With Your Eyes”", ref: "40:4",
        dzh: "他對以西結說：凡我所指示你的，你都要用眼看、用耳聽、放在心上。",
        den: "He told Ezekiel: look with your eyes, hear with your ears and set your heart on all that I show you." }
    ],
    traits: [
      { k: "strength", zh: "精準", en: "Precise" },
      { k: "identity", zh: "異象中的嚮導（經文沒說身份）", en: "A guide in the vision (identity not stated)" }
    ],
    lesson: {
      zh: "以西結要「用眼看、用耳聽、放在心上」（40:4）——對神所啟示的，要認真留意。",
      en: "Ezekiel must “look with his eyes, hear with his ears and set his heart” (40:4) — give serious attention to what God reveals."
    },
    quote: { ref: "40:3",
      zh: "見有一人，顏色如銅，手拿麻繩和量度的竿，站在門口",
      en: "there was a man, whose appearance was like the appearance of brass, with a line of flax in his hand, and a measuring reed" },
    keyVerses: ["40:1-3", "40:4-5", "47:3-5"],
    intro: {
      zh: "被擄第二十五年，以西結在異象中被帶到以色列的高山上，看見一個像銅一樣的人，手拿麻繩和量度的竿，站在門口（40:1-3）。他是以西結的嚮導，帶他走遍新殿的每一處，一邊量度、一邊指示（40:4-5）；到第 47 章，他又用準繩量水，帶以西結涉水（47:3-5）。",
      en: "In the twenty-fifth year of the exile Ezekiel is taken in a vision to a high mountain and sees a man who looks like bronze, with a line of flax and a measuring reed, standing in a gateway (40:1–3). He is Ezekiel’s guide through every part of the new temple, measuring and explaining (40:4–5); in chapter 47 he measures the water and leads Ezekiel through it (47:3–5)."
    },
    tip: {
      zh: "40–48 章是全書最長的連續異象；細節繁多，可以先讀 43 章（榮耀歸回）和 47 章（活水），再回頭看量度。",
      en: "Chapters 40–48 are the book’s longest single vision and full of detail; start with chapter 43 (the glory returns) and 47 (the river), then go back to the measurements."
    },
    related: ["glory", "temple_river", "ezekiel"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "temple_river", book: "ezekiel", no: 22, kind: "other", type: "harvest", rarity: 4,
    zh: "殿中流出的河", en: "The River From the Temple",
    tag: { zh: "所到之處，百物都必生活", en: "Everything Lives Where the River Goes" },
    role: { zh: "新殿異象的高峰", en: "The climax of the temple vision" },
    ch: [47, 48],
    passages: ["47:1-12", "48:35"],
    moves: [
      { zh: "水漸漸變深", en: "Ankle, Knee, Waist, River", ref: "47:3-5",
        dzh: "水從殿的門檻下往東流；量一千肘到踝子骨，再到膝、到腰，最後成了不能蹚過的河。",
        den: "Water flowed east from under the temple threshold; each thousand cubits it rose — ankles, knees, waist — until it was a river too deep to cross." },
      { zh: "河水所到之處", en: "Where the River Goes", ref: "47:8-12",
        dzh: "河水流入鹽海使水變甜；兩岸有各類果樹，葉子不枯乾，每月結新果子，因為水是從聖所流出來的。",
        den: "The river heals the salt sea; both banks bear every kind of fruit tree, leaves never withering, new fruit each month, because the water flows from the sanctuary." }
    ],
    traits: [
      { k: "strength", zh: "帶來生命", en: "Brings life" },
      { k: "weakness", zh: "泥濘窪濕之處不得治好", en: "Swamps and marshes are not healed" }
    ],
    lesson: {
      zh: "神的同在不是靜止的：生命從聖所流出，越流越深，使死的地方活過來（47:8-9）。",
      en: "God’s presence is not static: life flows out of the sanctuary, growing deeper, bringing dead places back to life (47:8–9)."
    },
    quote: { ref: "47:9",
      zh: "這河水所到之處，百物都必生活",
      en: "everything will live wherever the river comes" },
    keyVerses: ["47:1-5", "47:8-9", "47:12", "48:35"],
    intro: {
      zh: "新殿異象的高峰在第 47 章：有水從殿的門檻下往東流出，越流越深，成了一條不能蹚過的河（47:1-5）。河水流到哪裡，那裡就有生命：鹽海的水變甜、有極多的魚、兩岸有結果不斷的樹（47:8-12）。全書最後一句說，這城的名字從那日起要稱為「耶和華的所在」（48:35）。啟示錄 22:1-2 也有生命水的河和結果子的樹，可以對照著讀。",
      en: "The climax of the temple vision is chapter 47: water flows east from under the temple threshold, growing deeper until it is a river too deep to cross (47:1–5). Wherever it goes there is life: the salt sea is healed, fish abound, and trees on both banks bear fruit without end (47:8–12). The book’s last line says that from that day the city’s name will be “Yahweh is there” (48:35). Revelation 22:1–2 also has a river of the water of life and fruit-bearing trees — read them side by side."
    },
    tip: {
      zh: "全書以「耶和華的所在」（48:35）作結，和第 10–11 章「榮耀離開」形成首尾呼應。",
      en: "The book ends with “Yahweh is there” (48:35), answering the glory’s departure in chapters 10–11."
    },
    related: ["measuring_man", "glory", "dry_bones"]
  }
);
