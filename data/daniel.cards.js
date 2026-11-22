// 聖經人物卡 · 但以理書 (Daniel) — book info + cards.
// Verse text is NOT written here: refs ("6:10", "3:16-18") are resolved at runtime from data/daniel.text.js
// (和合本 + World English Bible, both public domain). `quote.zh` / `quote.en` are excerpts, machine-checked by
// scripts/validate.js — run it after every edit. A ref prefixed with a book id ("ezra:1:1-4") points outside
// this book: it is shown as a label only, no verse text is looked up.

window.BOOKS.push(
  {
    id: "daniel",
    zh: "但以理書", en: "Daniel", abbr: { zh: "但", en: "Dan" },
    chapters: 12,
    order: 27, section: { zh: "先知書", en: "Prophets" },
    fan: ["nebuchadnezzar", "daniel", "gabriel"],
    summary: {
      zh: "神的百姓被擄到巴比倫，但以理和三位朋友在異國朝廷中持守信仰。前六章是故事，後六章是異象——整卷書都在說：神掌管列國，也看顧在異鄉堅守信仰的人。",
      en: "God’s people are exiled to Babylon, and Daniel and his three friends hold fast to their faith in a foreign court. Chapters 1–6 are stories, chapters 7–12 are visions — and the whole book says one thing: God rules over the nations and watches over those who stay faithful in a strange land."
    },
    outline: [
      { zh: "但以理與三友在巴比倫宮廷", en: "Daniel and his friends in Babylon’s court" },
      { zh: "尼布甲尼撒的夢：大像", en: "Nebuchadnezzar’s dream of the statue" },
      { zh: "金像與烈火的窯", en: "The golden image and the fiery furnace" },
      { zh: "王的夢與被降卑", en: "The king’s tree dream and his humbling" },
      { zh: "伯沙撒的宴會與牆上的字", en: "Belshazzar’s feast and the writing on the wall" },
      { zh: "獅子坑", en: "The lions’ den" },
      { zh: "四獸與亙古常在者", en: "Four beasts and the Ancient of Days" },
      { zh: "公綿羊與公山羊", en: "The ram and the goat" },
      { zh: "但以理的禱告與七十個七", en: "Daniel’s prayer and the seventy sevens" },
      { zh: "天使顯現與屬靈爭戰", en: "The heavenly messenger and the unseen conflict" },
      { zh: "列王的爭戰", en: "Wars of the kings" },
      { zh: "末後的日子", en: "The time of the end" }
    ],
    notes: {
      zh: "小提示：但以理書 2:4 下至 7:28 是用亞蘭文寫成，其餘部分是希伯來文。",
      en: "Good to know: Daniel 2:4b–7:28 was written in Aramaic; the rest is in Hebrew."
    }
  }
);

// 稀有度: 1–4 = ◆, 5 = ★, 6 = ♛
window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "daniel", book: "daniel", no: 1, kind: "person", type: "wisdom", rarity: 6,
    zh: "但以理", en: "Daniel",
    alt: { zh: "伯提沙撒", en: "Belteshazzar", ref: "1:7" },
    meaning: { zh: "神是我的審判者", en: "“God is my judge”" },
    tag: { zh: "禱告不間斷的智者", en: "The Sage Who Never Stopped Praying" },
    role: { zh: "先知・巴比倫官員", en: "Prophet · Court official" },
    ch: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    names: ["但以理", "伯提沙撒"],
    enNames: ["Daniel", "Belteshazzar"],
    moves: [
      { zh: "立志不玷污", en: "Resolved to Stay Pure", ref: "1:8",
        dzh: "拒絕吃王的膳、喝王的酒；十天吃素菜喝清水的試驗，顯出神的看顧。",
        den: "He refused the king’s food and wine; a ten-day test of vegetables and water showed God’s care." },
      { zh: "窗前禱告", en: "Window Prayer", ref: "6:10",
        dzh: "禁令已經簽署，他仍一日三次朝耶路撒冷跪下禱告，與素常一樣。",
        den: "Even after the decree was signed, he knelt toward Jerusalem three times a day, just as before." }
    ],
    traits: [
      { k: "strength", zh: "禱告與智慧", en: "Prayer & wisdom" },
      { k: "weakness", zh: "眼紅的同僚", en: "Jealous colleagues" }
    ],
    lesson: {
      zh: "高壓之下，仍照常活出信仰——這份忠心，是從「不玷污自己」的小決定開始的。",
      en: "Keep living out your faith under pressure — faithfulness starts with small decisions to stay pure."
    },
    quote: { ref: "1:8",
      zh: "但以理卻立志不以王的膳和王所飲的酒玷污自己",
      en: "But Daniel purposed in his heart that he would not defile himself" },
    keyVerses: ["1:8", "2:20-22", "6:10", "12:3"],
    intro: {
      zh: "但以理是被擄到巴比倫的猶大貴族少年，後來在尼布甲尼撒、伯沙撒、大利烏和古列的朝廷中事奉。他以解夢的智慧聞名，更以在重壓下仍禱告、不妥協的信心見稱。書中既記他的事蹟（1–6 章），也記他所見的異象（7–12 章）。",
      en: "Daniel was a young Judean noble carried off to Babylon, and he went on to serve in the courts of Nebuchadnezzar, Belshazzar, Darius and Cyrus. He is known for his wisdom in interpreting dreams, and even more for praying and refusing to compromise under pressure. The book records his stories (chapters 1–6) and his visions (chapters 7–12)."
    },
    tip: {
      zh: "先讀 1–6 章的故事，再讀 7–12 章的異象，會容易得多。",
      en: "Read the stories in chapters 1–6 first, then the visions in 7–12 — it makes the second half much easier."
    },
    related: ["shadrach", "meshach", "abednego", "nebuchadnezzar", "belshazzar", "darius", "lions", "gabriel"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "ashpenaz", book: "daniel", no: 2, kind: "person", type: "power", rarity: 1,
    zh: "亞施毘拿", en: "Ashpenaz",
    tag: { zh: "夾在中間的太監長", en: "The Official Caught in the Middle" },
    role: { zh: "巴比倫宮廷太監長", en: "Master of the court eunuchs" },
    ch: [1],
    names: ["亞施毘拿", "太監長"],
    enNames: ["Ashpenaz"],
    moves: [
      { zh: "選拔少年", en: "Handpicking the Youths", ref: "1:3-5",
        dzh: "奉王命從以色列貴冑中挑選少年，教他們迦勒底的文字言語，養他們三年。",
        den: "At the king’s order he chose young Israelite nobles to be trained in Chaldean language and learning for three years." },
      { zh: "為難的善意", en: "A Kind Heart, a Risky Request", ref: "1:9-10",
        dzh: "他對但以理有憐憫，卻懼怕君王：「你們就使我的頭在王那裡難保。」",
        den: "He felt compassion for Daniel but feared the king: “you would endanger my head with the king.”" }
    ],
    traits: [
      { k: "strength", zh: "體恤人", en: "Compassion" },
      { k: "weakness", zh: "懼怕君王", en: "Fear of the king" }
    ],
    lesson: {
      zh: "即使是夾在中間的小人物，神也能使他的心軟化，成全祂僕人的路。",
      en: "Even an official caught in the middle can have his heart softened by God, clearing the way for his servants."
    },
    quote: { ref: "1:9",
      zh: "神使但以理在太監長眼前蒙恩惠，受憐憫。",
      en: "Now God made Daniel find kindness and compassion in the sight of the prince of the eunuchs." },
    keyVerses: ["1:3-5", "1:7", "1:9-10"],
    intro: {
      zh: "亞施毘拿是尼布甲尼撒手下的太監長，負責挑選並訓練被擄的以色列少年，也給但以理四人改了巴比倫名字（1:7）。他對但以理既憐憫又害怕；後來由他所派的守衛答應了十天的試驗（1:11-16）。",
      en: "Ashpenaz was the master of Nebuchadnezzar’s eunuchs, in charge of selecting and training the exiled Israelite youths — and of renaming Daniel and his three friends (1:7). He felt both compassion and fear toward Daniel; in the end the guard he had appointed agreed to the ten-day test (1:11–16)."
    },
    tip: {
      zh: "留意 1:7 的改名：把四人改成巴比倫名字，是要他們融入新文化的一步。",
      en: "Note the renaming in 1:7 — giving the four Babylonian names was part of absorbing them into the new culture."
    },
    related: ["daniel", "nebuchadnezzar", "shadrach"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "nebuchadnezzar", book: "daniel", no: 3, kind: "person", type: "power", rarity: 4,
    zh: "尼布甲尼撒", en: "Nebuchadnezzar",
    tag: { zh: "被降卑的大帝", en: "The Emperor Brought Low" },
    role: { zh: "巴比倫王", en: "King of Babylon" },
    ch: [1, 2, 3, 4, 5],
    names: ["尼布甲尼撒"],
    enNames: ["Nebuchadnezzar"],
    moves: [
      { zh: "大像之夢", en: "The Dream of the Statue", ref: "2:47",
        dzh: "夢見大像，所有術士都解不了，直到但以理顯明奧祕；王承認這是「萬神之神」。",
        den: "His dream baffled every wise man until Daniel revealed it; the king admitted Daniel’s God is “the God of gods.”" },
      { zh: "狂妄的自誇", en: "The Proud Boast", ref: "4:30-33",
        dzh: "他誇耀自己建造的大巴比倫，話未說完，就被趕出人群，吃草如牛。",
        den: "He boasted of the great Babylon he had built — and before the words were finished he was driven out to eat grass like an ox." }
    ],
    traits: [
      { k: "strength", zh: "帝國的權勢", en: "Imperial power" },
      { k: "weakness", zh: "驕傲", en: "Pride" }
    ],
    lesson: {
      zh: "至高者在人的國中掌權；那行動驕傲的，祂能降為卑。",
      en: "The Most High rules in the kingdom of men; those who walk in pride, he is able to bring low."
    },
    quote: { ref: "4:37",
      zh: "那行動驕傲的，他能降為卑。",
      en: "those who walk in pride he is able to abase." },
    keyVerses: ["1:1-2", "2:47", "3:28-29", "4:30-32", "4:34-37"],
    intro: {
      zh: "尼布甲尼撒是新巴比倫帝國最偉大的君王，他圍困耶路撒冷，帶走猶大的貴族少年（1:1-4）。書中前四章都有他的故事：夢見大像、設立金像、被降卑到過野獸般的生活，最後舉目望天，稱頌至高者。",
      en: "Nebuchadnezzar was the greatest king of the Neo-Babylonian empire; he besieged Jerusalem and carried off Judah’s young nobles (1:1–4). He appears throughout the first four chapters: the dream of the statue, the golden image, years of living like a wild animal — and finally lifting his eyes to heaven to praise the Most High."
    },
    tip: {
      zh: "第 4 章以君王的公告開頭和結尾（4:1-3；4:34-37），是一篇「王的見證」。",
      en: "Chapter 4 opens and closes with the king’s own proclamation (4:1–3; 4:34–37) — it is a royal testimony."
    },
    related: ["daniel", "statue", "shadrach", "meshach", "abednego", "belshazzar"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "statue", book: "daniel", no: 4, kind: "other", type: "vision", rarity: 3,
    zh: "金頭泥腳的大像", en: "The Great Statue",
    tag: { zh: "頭是精金、腳是鐵泥", en: "Gold Head, Feet of Iron and Clay" },
    role: { zh: "尼布甲尼撒的夢", en: "The king’s dream" },
    ch: [2],
    passages: ["2:31-45"],
    moves: [
      { zh: "金、銀、銅、鐵、泥", en: "Gold to Clay", ref: "2:32-33",
        dzh: "頭是精金，胸膛膀臂是銀，肚腹和腰是銅，腿是鐵，腳是半鐵半泥。",
        den: "A head of fine gold, chest and arms of silver, belly and thighs of bronze, legs of iron, feet part iron and part clay." },
      { zh: "非人手鑿出的石頭", en: "The Stone Cut Without Hands", ref: "2:34-35",
        dzh: "一塊石頭打碎大像的腳，變成大山充滿天下；神必另立永不敗壞的國。",
        den: "A stone shatters the feet and grows into a mountain filling the earth: God will set up a kingdom that never ends." }
    ],
    traits: [
      { k: "strength", zh: "光耀奪目", en: "Dazzling" },
      { k: "weakness", zh: "鐵泥混雜的腳", en: "Feet of iron & clay" }
    ],
    lesson: {
      zh: "人間的帝國再輝煌，也有終結的一天；神的國永不敗壞。",
      en: "However dazzling, human empires pass away; God’s kingdom will never be destroyed."
    },
    quote: { ref: "2:44",
      zh: "天上的神必另立一國，永不敗壞",
      en: "the God of heaven will set up a kingdom which will never be destroyed" },
    keyVerses: ["2:31-35", "2:36-38", "2:44-45"],
    intro: {
      zh: "這是尼布甲尼撒夢見的巨像。但以理解釋：金頭代表巴比倫王（2:37-38），之後會有別的國度相繼興起（2:39-43）。至於銀、銅、鐵各指哪些國，解經者有不同看法；但整段的重點很清楚：人的國度會更替，神的國度必存到永遠（2:44）。",
      en: "This is the colossus Nebuchadnezzar saw in his dream. Daniel explains that the golden head is the king of Babylon (2:37–38), and that other kingdoms will rise after it (2:39–43). Interpreters differ on which kingdoms the silver, bronze and iron stand for — but the main point is plain: human kingdoms come and go, while God’s kingdom lasts forever (2:44)."
    },
    tip: {
      zh: "把這章和第 7 章的「四獸」放在一起讀：同樣是列國興衰，一個是大像，一個是野獸。",
      en: "Read this beside chapter 7’s four beasts: the same rise and fall of kingdoms, seen once as a statue, once as beasts."
    },
    related: ["nebuchadnezzar", "daniel", "four_beasts"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "shadrach", book: "daniel", no: 5, kind: "person", type: "faith", rarity: 3,
    zh: "沙得拉", en: "Shadrach",
    alt: { zh: "哈拿尼雅", en: "Hananiah", ref: "1:6-7" },
    meaning: { zh: "（哈拿尼雅）耶和華施恩", en: "(Hananiah) “The LORD has been gracious”" },
    tag: { zh: "眾人下拜時仍站立的人", en: "The One Who Stood When Everyone Bowed" },
    role: { zh: "但以理的朋友・省官員", en: "Daniel’s friend · Provincial official" },
    ch: [1, 2, 3],
    names: ["沙得拉", "哈拿尼雅"],
    enNames: ["Shadrach", "Hananiah"],
    moves: [
      { zh: "不拜金像", en: "Standing While All Bow", ref: "3:12",
        dzh: "樂聲一響，眾人都俯伏敬拜金像；他和兩位朋友卻不拜，被人告發。",
        den: "When the music sounded everyone bowed to the golden image — but he and his two friends did not, and were reported." },
      { zh: "「即或不然」", en: "“But If Not”", ref: "3:17-18",
        dzh: "「我們的神能救我們……即或不然，我們決不事奉你的神。」信心不取決於結果。",
        den: "“Our God is able to deliver us… but if not, we will not serve your gods.” His faith did not depend on the outcome." }
    ],
    traits: [
      { k: "strength", zh: "信念堅定", en: "Firm conviction" },
      { k: "weakness", zh: "寡不敵眾", en: "Outnumbered" }
    ],
    lesson: {
      zh: "信靠神，不是因為祂必定照我們的意思行，而是因為祂配得我們的忠心——「即或不然」。",
      en: "We trust God not because he will do what we want, but because he deserves our faithfulness — “but if not.”"
    },
    quote: { ref: "3:18",
      zh: "即或不然，王啊，你當知道我們決不事奉你的神",
      en: "But if not, let it be known to you, O king, that we will not serve your gods" },
    keyVerses: ["1:6-7", "2:49", "3:12", "3:16-18", "3:28-30"],
    intro: {
      zh: "沙得拉是但以理的三位朋友之一，原名哈拿尼雅，意思是「耶和華施恩」。他和但以理一同被擄、受訓，後來因但以理的請求，被派管理巴比倫省的事務（2:49）。在杜拉平原，他與米煞、亞伯尼歌拒絕向金像下拜，被扔進烈火的窯。",
      en: "Shadrach was one of Daniel’s three friends; his Hebrew name Hananiah means “the LORD has been gracious.” Taken into exile and trained with Daniel, he was later put in charge of the province’s affairs at Daniel’s request (2:49). On the plain of Dura he, Meshach and Abednego refused to bow to the golden image and were thrown into the furnace."
    },
    tip: {
      zh: "三人的名字總是一起出現，卻各有重點——讀第 3 章時，可以一邊讀、一邊對照三張卡。",
      en: "The three names always appear together, yet each card has its own focus — read chapter 3 with all three cards open."
    },
    related: ["meshach", "abednego", "daniel", "nebuchadnezzar", "fourth_man"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "meshach", book: "daniel", no: 6, kind: "person", type: "faith", rarity: 3,
    zh: "米煞", en: "Meshach",
    alt: { zh: "米沙利", en: "Mishael", ref: "1:6-7" },
    tag: { zh: "在火窯口前面不改色的人", en: "Unshaken at the Furnace Door" },
    role: { zh: "但以理的朋友・省官員", en: "Daniel’s friend · Provincial official" },
    ch: [1, 2, 3],
    names: ["米煞", "米沙利"],
    enNames: ["Meshach", "Mishael"],
    moves: [
      { zh: "熱七倍的火窯", en: "Seven Times Hotter", ref: "3:19-22",
        dzh: "王大怒，吩咐把窯燒熱七倍；連抬他們的壯士也被火焰燒死。",
        den: "The furious king had the furnace heated seven times hotter; even the soldiers who carried them in were killed by the flames." },
      { zh: "繩索解開了", en: "Bound In, Loose Within", ref: "3:23-25",
        dzh: "三人被捆著落入火中，王卻看見他們「沒有捆綁，在火中遊行，也沒有受傷」。",
        den: "Three bound men fell into the fire, yet the king saw them “loose, walking in the middle of the fire” and unharmed." }
    ],
    traits: [
      { k: "strength", zh: "臨危不亂", en: "Calm under fire" },
      { k: "weakness", zh: "火（但火無力傷他）", en: "Fire (…which had no power over him)" }
    ],
    lesson: {
      zh: "神不一定讓我們避開火窯，卻會在火中與我們同在。（參：賽 43:2）",
      en: "God may not keep us out of the furnace, but he is with us in the fire. (Compare Isa 43:2.)"
    },
    quote: { ref: "3:17",
      zh: "我們所事奉的神能將我們從烈火的窯中救出來",
      en: "our God whom we serve is able to deliver us from the burning fiery furnace" },
    keyVerses: ["3:16-18", "3:19-23", "3:24-25"],
    intro: {
      zh: "米煞原名米沙利，和沙得拉、亞伯尼歌一起，是但以理的三位朋友。尼布甲尼撒下令把窯燒熱七倍，又叫軍中壯士把他們捆起來扔進去（3:19-20）——結果死的是抬人的壯士，被扔進去的人卻在火中行走。",
      en: "Meshach, whose Hebrew name was Mishael, was one of Daniel’s three friends with Shadrach and Abednego. Nebuchadnezzar had the furnace heated seven times hotter and ordered strong soldiers to bind them and throw them in (3:19–20) — yet it was the soldiers who died, while the men who were thrown in walked about in the fire."
    },
    tip: {
      zh: "3:16-18 是三人對王的回答，節奏很有力，建議大聲讀一次。",
      en: "Verses 3:16–18 are the three friends’ answer to the king — try reading them out loud."
    },
    related: ["shadrach", "abednego", "fourth_man", "nebuchadnezzar"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "abednego", book: "daniel", no: 7, kind: "person", type: "faith", rarity: 3,
    zh: "亞伯尼歌", en: "Abednego",
    alt: { zh: "亞撒利雅", en: "Azariah", ref: "1:6-7" },
    meaning: { zh: "（亞撒利雅）耶和華幫助", en: "(Azariah) “The LORD has helped”" },
    tag: { zh: "毫髮無傷的僕人", en: "Not a Hair Singed" },
    role: { zh: "但以理的朋友・省官員", en: "Daniel’s friend · Provincial official" },
    ch: [1, 2, 3],
    names: ["亞伯尼歌", "亞撒利雅"],
    enNames: ["Abednego", "Azariah"],
    moves: [
      { zh: "連火燎的氣味都沒有", en: "Not Even the Smell of Smoke", ref: "3:27",
        dzh: "眾官聚集查看：火無力傷他們，頭髮沒燒焦，衣裳沒變色，也沒有火燎的氣味。",
        den: "The officials gathered to look: the fire had no power over them — no singed hair, no changed clothes, not even the smell of fire." },
      { zh: "王的稱頌", en: "The King Praises God", ref: "3:28-29",
        dzh: "尼布甲尼撒稱頌他們的神，並下令：沒有別神能這樣施行拯救。",
        den: "Nebuchadnezzar blessed their God and decreed that no one may speak against him: no other god can rescue like this." }
    ],
    traits: [
      { k: "strength", zh: "完全信靠神", en: "Total trust in God" },
      { k: "weakness", zh: "名字很難唸", en: "Hard to pronounce" }
    ],
    lesson: {
      zh: "被神拯救的見證，連不信的君王也不得不開口稱頌。",
      en: "A rescue by God is a testimony so strong that even an unbelieving king is moved to praise him."
    },
    quote: { ref: "3:27",
      zh: "見火無力傷他們的身體，頭髮也沒有燒焦",
      en: "the fire had no power on their bodies. The hair of their head wasn’t singed." },
    keyVerses: ["1:6-7", "3:26-27", "3:28-30"],
    intro: {
      zh: "亞伯尼歌原名亞撒利雅，意思是「耶和華幫助」。第 3 章的結局由他的卡來看最清楚：三人從火中出來，所有官員都看見火沒有傷他們；王不但稱頌他們的神，還下令提升他們（3:30）。",
      en: "Abednego’s Hebrew name Azariah means “the LORD has helped.” His card shows the end of chapter 3: the three come out of the fire, every official sees that it did not harm them, and the king not only praises their God but promotes them (3:30)."
    },
    tip: {
      zh: "留意 3:28 的「差遣使者」，和 3:25「第四個人」互相呼應。",
      en: "Note “sent his angel” in 3:28 — it echoes the “fourth man” of 3:25."
    },
    related: ["shadrach", "meshach", "fourth_man", "nebuchadnezzar"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "fourth_man", book: "daniel", no: 8, kind: "heavenly", type: "heaven", rarity: 4,
    zh: "火窯中的第四位", en: "The Fourth Man in the Fire",
    tag: { zh: "在火中同行的那一位", en: "The One Who Walked With Them" },
    role: { zh: "神秘的天上使者", en: "A mysterious heavenly figure" },
    ch: [3],
    passages: ["3:24-28"],
    moves: [
      { zh: "火中同行", en: "Walking in the Fire", ref: "3:25",
        dzh: "王看見第四個人在火中遊行，「相貌好像神子」。",
        den: "The king saw a fourth figure walking in the fire whose appearance “is like a son of the gods.”" },
      { zh: "差遣使者", en: "God Sent His Angel", ref: "3:28",
        dzh: "事後王稱頌：神「差遣使者救護倚靠他的僕人」。",
        den: "Afterwards the king blessed the God who “has sent his angel, and delivered his servants.”" }
    ],
    traits: [
      { k: "strength", zh: "與僕人同在", en: "Present with his servants" },
      { k: "identity", zh: "天使或神子？眾說紛紜", en: "Angel or “son of the gods”? Views differ" }
    ],
    lesson: {
      zh: "神親自臨到受苦的僕人當中。祂不一定讓我們不進火窯，卻會在火中同行。（參：賽 43:2）",
      en: "God draws near to his suffering servants. He may not spare us the furnace, but he walks with us in it. (Compare Isa 43:2.)"
    },
    quote: { ref: "3:25",
      zh: "我見有四個人，並沒有捆綁，在火中遊行，也沒有受傷",
      en: "I see four men loose, walking in the middle of the fire, and they are unharmed." },
    keyVerses: ["3:24-25", "3:26-28"],
    intro: {
      zh: "尼布甲尼撒親眼看見火窯中有第四個人，與三位朋友一同行走。經文說他「相貌好像神子」（原文可譯作「諸神之子」，是外邦君王的說法），王後來又說神「差遣使者」救了他們（3:28）。這位的身份有不同解釋：有人認為是天使，也有人認為是基督在道成肉身以前的顯現。無論如何，重點是：神親自臨到受苦的僕人當中。",
      en: "Nebuchadnezzar saw with his own eyes a fourth figure walking with the three friends in the furnace. The text says his appearance “is like a son of the gods” (the pagan king’s phrase), and the king later says God “sent his angel” (3:28). Interpreters differ: some see an angel, others a pre-incarnate appearance of Christ. Either way, the point stands: God himself comes to his suffering servants."
    },
    tip: {
      zh: "這張卡的插畫是畫家的想像；經文只說「相貌好像神子」，沒有更多描述。",
      en: "The artwork is an artist’s impression; the text only says “like a son of the gods” and gives no further description."
    },
    related: ["shadrach", "meshach", "abednego", "nebuchadnezzar", "gabriel"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "belshazzar", book: "daniel", no: 9, kind: "person", type: "power", rarity: 3,
    zh: "伯沙撒", en: "Belshazzar",
    tag: { zh: "牆上有字的末代君王", en: "The King Who Saw the Writing" },
    role: { zh: "巴比倫（迦勒底）王", en: "King of Babylon (Chaldea)" },
    ch: [5, 7, 8],
    names: ["伯沙撒"],
    enNames: ["Belshazzar"],
    moves: [
      { zh: "聖殿器皿的酒宴", en: "A Feast with Temple Vessels", ref: "5:2-4",
        dzh: "他用耶路撒冷聖殿的金銀器皿與大臣妃嬪飲酒，又讚美金、銀、銅、鐵、木、石的神。",
        den: "He drank from Jerusalem’s temple vessels with his nobles and wives, praising gods of gold, silver and stone." },
      { zh: "牆上的字", en: "The Writing on the Wall", ref: "5:25-28",
        dzh: "牆上現出手指寫字；但以理解說：國期已盡，你被稱在天平裡，國歸瑪代人和波斯人。",
        den: "A hand wrote on the wall: your kingdom is numbered, you are weighed and found wanting, and it goes to the Medes and Persians." }
    ],
    traits: [
      { k: "strength", zh: "盛大的宴樂", en: "Lavish banquets" },
      { k: "weakness", zh: "明知故犯的驕傲", en: "Pride despite knowing better" }
    ],
    lesson: {
      zh: "尼布甲尼撒的下場就在眼前，他卻不肯自卑（5:22）；結局就在當夜來到（5:30）。",
      en: "Nebuchadnezzar’s fate was right there to learn from, yet he would not humble himself (5:22) — and the end came that very night (5:30)."
    },
    quote: { ref: "5:27",
      zh: "你被稱在天平裡，顯出你的虧欠。",
      en: "you are weighed in the balances, and are found wanting." },
    keyVerses: ["5:2-4", "5:22-23", "5:25-28", "5:30-31"],
    intro: {
      zh: "伯沙撒是巴比倫末代君王；經文稱尼布甲尼撒為他的「父」（原文也可指祖先）。他在大宴會上用聖殿的器皿飲酒，結果當夜被殺，國歸了米底亞人大利烏（5:30-31）。伯沙撒也在第 7、8 章的異象中作為時間的記號出現（7:1；8:1）。",
      en: "Belshazzar was Babylon’s last king; the text calls Nebuchadnezzar his “father” (the word can also mean ancestor). He drank from the temple vessels at a great banquet, was killed that same night, and the kingdom passed to Darius the Mede (5:30–31). He also serves as a date marker for the visions of chapters 7 and 8 (7:1; 8:1)."
    },
    tip: {
      zh: "「彌尼、彌尼、提客勒、烏法珥新」：5:26-28 是但以理的解釋，「烏法珥新」和「毘勒斯」同義。",
      en: "“MENE, MENE, TEKEL, UPHARSIN”: Daniel’s interpretation is in 5:26–28, and “Upharsin” is the same word as “Peres.”"
    },
    related: ["daniel", "queen", "darius", "nebuchadnezzar"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "queen", book: "daniel", no: 10, kind: "person", type: "wisdom", rarity: 1,
    zh: "太后", en: "The Queen Mother",
    tag: { zh: "危機中的冷靜推薦人", en: "The Calm Voice in the Crisis" },
    role: { zh: "巴比倫太后（或譯：皇后）", en: "Queen (mother) of Babylon" },
    ch: [5],
    passages: ["5:10-12"],
    moves: [
      { zh: "臨危不亂", en: "Steady Amid Panic", ref: "5:10",
        dzh: "王和大臣驚慌失措時，她走進宴宮說：「願王萬歲！你心意不要驚惶。」",
        den: "While the king and his lords panicked, she came into the banquet hall: “don’t let your thoughts trouble you.”" },
      { zh: "她記得但以理", en: "She Remembered Daniel", ref: "5:11-12",
        dzh: "她想起尼布甲尼撒時代那位有聖神的靈、能解夢釋謎的人，推薦王召但以理。",
        den: "She recalled the man from Nebuchadnezzar’s day who had “the spirit of the holy gods” and could interpret dreams, and urged the king to call Daniel." }
    ],
    traits: [
      { k: "strength", zh: "好記性", en: "A long memory" },
      { k: "weakness", zh: "名字沒有被記下來", en: "Her name isn’t recorded" }
    ],
    lesson: {
      zh: "在眾人慌亂的時候，一個記得過去的人，往往能指出出路。",
      en: "When everyone else is in a panic, someone who remembers the past can point the way forward."
    },
    quote: { ref: "5:12",
      zh: "現在可以召他來，他必解明這意思",
      en: "Now let Daniel be called, and he will show the interpretation." },
    keyVerses: ["5:10-12"],
    intro: {
      zh: "經文只稱她為「太后」（有些譯本作「皇后」），沒有留下名字，她的身份是伯沙撒的母親、祖母，還是尼布甲尼撒的妻子，解經者有不同推測。她不在宴席上（5:23 的「皇后、妃嬪」是另一些人），而是聽見王和大臣的話才進入宴宮（5:10）。",
      en: "The text calls her only “the queen” (many translations say queen mother) and does not give her name; interpreters guess whether she was Belshazzar’s mother, grandmother, or Nebuchadnezzar’s widow. She was not at the feast (the “wives” of 5:23 were others) — she came in because of what the king and his lords were saying (5:10)."
    },
    tip: {
      zh: "和合本 5:10 的註解說「或譯：皇后」，所以不同譯本會有不同稱呼。",
      en: "The 和合本 footnote on 5:10 says “or: queen,” so different translations use different titles."
    },
    related: ["belshazzar", "daniel", "nebuchadnezzar"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "darius", book: "daniel", no: 11, kind: "person", type: "power", rarity: 2,
    zh: "大利烏", en: "Darius the Mede",
    tag: { zh: "被自己的法令綑住的君王", en: "The King Bound by His Own Law" },
    role: { zh: "瑪代人君王", en: "King, a Mede" },
    ch: [5, 6, 9, 11],
    names: ["大利烏"],
    enNames: ["Darius"],
    moves: [
      { zh: "不能更改的律", en: "A Law That Cannot Change", ref: "6:14-15",
        dzh: "他簽了禁令才發現中了圈套；一心要救但以理，卻因「瑪代和波斯人的例」無法更改。",
        den: "He signed, then saw the trap; he worked until sundown to save Daniel, but a Medo-Persian law could not be changed." },
      { zh: "黎明的呼喚", en: "The Dawn Cry", ref: "6:18-20",
        dzh: "他終夜禁食，天一亮就急忙跑到坑邊，哀聲問：「你所常事奉的神能救你嗎？」",
        den: "He fasted all night and ran to the den at dawn, crying out: “is your God… able to deliver you from the lions?”" }
    ],
    traits: [
      { k: "strength", zh: "敬重智慧人", en: "Respects wise men" },
      { k: "weakness", zh: "容易被人利用", en: "Easily manipulated" }
    ],
    lesson: {
      zh: "一紙法令困得住君王，卻困不住神的僕人；連君王最後也宣告：神的國永不敗壞。",
      en: "A decree can trap a king but not God’s servant; in the end even the king declares that God’s kingdom will never be destroyed."
    },
    quote: { ref: "6:26",
      zh: "他是永遠長存的活神，他的國永不敗壞",
      en: "he is the living God, and steadfast forever. His kingdom is that which will not be destroyed." },
    keyVerses: ["5:31", "6:14-15", "6:18-20", "6:26-27"],
    intro: {
      zh: "大利烏是接收迦勒底（巴比倫）國的瑪代人，當時六十二歲（5:31）。他立一百二十個總督、三個總長，但以理是其中一位總長（6:1-2）。大利烏究竟對應歷史上的哪一位君王，學者討論甚多，意見不一。",
      en: "Darius was the Mede who received the Chaldean (Babylonian) kingdom at about sixty-two years old (5:31). He set up 120 satraps and three presidents, and Daniel was one of the three (6:1–2). Scholars have long debated which historical king Darius the Mede corresponds to, and there is no consensus."
    },
    tip: {
      zh: "和合本在 5:31 稱他「米底亞人大利烏」，在第 6 章用「瑪代」（如 6:8），兩者是同一族群。",
      en: "The 和合本 says “米底亞人” in 5:31 and “瑪代” in chapter 6 (e.g., 6:8) — both translate the same word, “Mede.”"
    },
    related: ["daniel", "conspirators", "lions", "belshazzar", "cyrus"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "conspirators", book: "daniel", no: 12, kind: "person", type: "scheme", rarity: 1,
    zh: "眾總長與總督", en: "The Jealous Officials",
    tag: { zh: "自挖陷阱的人", en: "Diggers of Their Own Pit" },
    role: { zh: "波斯朝廷的總長、總督", en: "Presidents & satraps of the realm" },
    ch: [6],
    passages: ["6:4-9", "6:24"],
    moves: [
      { zh: "找不到把柄", en: "No Grounds for Complaint", ref: "6:4-5",
        dzh: "他們找不到但以理的錯，便說：「除非在他神的律法中就尋不著。」",
        den: "They could find no fault in Daniel and said: “unless we find it against him concerning the law of his God.”" },
      { zh: "三十日禁令", en: "The 30-Day Decree", ref: "6:6-9",
        dzh: "他們慫恿王下令：三十日內向王以外的神或人求什麼，就扔進獅子坑。",
        den: "They urged the king to decree that for thirty days anyone who prayed to any god or man except the king would be thrown to the lions." }
    ],
    traits: [
      { k: "strength", zh: "人多勢眾", en: "Strength in numbers" },
      { k: "weakness", zh: "獅子", en: "Lions" }
    ],
    lesson: {
      zh: "設計陷害別人的，往往自己先跌進坑裡（6:24）。",
      en: "Those who set a trap for others often fall into it themselves (6:24)."
    },
    quote: { ref: "6:5",
      zh: "我們要找參這但以理的把柄，除非在他神的律法中就尋不著。",
      en: "We won’t find any occasion against this Daniel, unless we find it against him concerning the law of his God." },
    keyVerses: ["6:3-5", "6:6-9", "6:24"],
    intro: {
      zh: "但以理超乎其他的總長和總督，大利烏甚至想立他治理通國（6:3），於是眾人心生嫉妒，要找他的把柄。他們找不到他的錯誤過失（6:4），就利用他每日禱告的信仰，設下三十日禁令的圈套。",
      en: "Daniel stood out above the other presidents and satraps, and Darius even thought of putting him over the whole realm (6:3) — so they grew jealous and looked for dirt. Finding no fault in him (6:4), they used his daily prayer against him and set the trap of the thirty-day decree."
    },
    tip: {
      zh: "6:4 的「忠心辦事，毫無錯誤過失」是敵人也無法否認的見證。",
      en: "“He was faithful… no error or fault” (6:4) is a testimony even his enemies could not deny."
    },
    related: ["daniel", "darius", "lions"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "lions", book: "daniel", no: 13, kind: "other", type: "beast", rarity: 2,
    zh: "獅子坑的獅子", en: "The Lions of the Den",
    tag: { zh: "被封住口的猛獸", en: "The Silenced Predators" },
    role: { zh: "獅子坑裡的猛獸", en: "Beasts of the lions’ den" },
    ch: [6],
    passages: ["6:7", "6:12", "6:16-17", "6:19-24", "6:27"],
    moves: [
      { zh: "真正的猛獸", en: "Real Predators", ref: "6:24",
        dzh: "這些獅子並不溫馴：控告者還沒到坑底，就被牠們咬碎了骨頭。",
        den: "These lions were no pets: Daniel’s accusers were mauled before they even reached the bottom of the den." },
      { zh: "封住的口", en: "Mouths Shut", ref: "6:22",
        dzh: "神差遣使者封住獅子的口，但以理身上毫無傷損。",
        den: "God sent his angel and shut the lions’ mouths, and Daniel was found without any harm." }
    ],
    traits: [
      { k: "strength", zh: "利爪尖牙", en: "Fangs & claws" },
      { k: "weakness", zh: "神的使者", en: "An angel of God" }
    ],
    lesson: {
      zh: "最危險的猛獸，也在神的手中；祂能「救了但以理脫離獅子的口」（6:27）。",
      en: "Even the most dangerous beasts are in God’s hand; he “has delivered Daniel from the power of the lions” (6:27)."
    },
    quote: { ref: "6:22",
      zh: "我的神差遣使者，封住獅子的口，叫獅子不傷我",
      en: "My God has sent his angel, and has shut the lions’ mouths, and they have not hurt me" },
    keyVerses: ["6:16-17", "6:19-23", "6:24", "6:26-27"],
    intro: {
      zh: "在古代近東，獅子是王權的象徵，連巴比倫的伊什塔爾門上也有牠們的形象。獅子坑本是君王處置人的工具，但在這一章，它成了神顯明誰才是真正掌權者的舞台。經文特別記下坑口封了石頭和印（6:17），好讓人知道這不是巧合。",
      en: "In the ancient Near East the lion was a symbol of royal power — lions even decorate Babylon’s Ishtar Gate. The den was a tool a king used to deal with people, but here it becomes the stage on which God shows who really rules. The text records that the mouth of the den was sealed with a stone and signets (6:17), so that no one could call it a coincidence."
    },
    tip: {
      zh: "留意 6:24：控告者被丟下去，獅子卻立即撲過去——證明牠們不是不餓或不兇。",
      en: "Notice 6:24: when the accusers are thrown in, the lions pounce at once — proof that they were neither tame nor full."
    },
    related: ["daniel", "darius", "conspirators"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "cyrus", book: "daniel", no: 14, kind: "person", type: "power", rarity: 2,
    zh: "古列", en: "Cyrus",
    alt: { zh: "居魯士（常見的現代譯名）", en: "Cyrus the Great" },
    tag: { zh: "釋放被擄者的波斯王", en: "The Persian King Who Let Them Go" },
    role: { zh: "波斯王", en: "King of Persia" },
    ch: [1, 6, 10],
    names: ["古列"],
    enNames: ["Cyrus"],
    moves: [
      { zh: "見證列國興替", en: "Daniel Outlasted Empires", ref: "1:21",
        dzh: "「到古列王元年，但以理還在。」從被擄到波斯時代，他一路看著列國更替。",
        den: "“Daniel continued even to the first year of king Cyrus.” From exile to the Persian era, he watched empires change." },
      { zh: "釋放被擄的百姓", en: "Let Them Go Home", ref: "ezra:1:1-4",
        dzh: "元年頒詔，准猶大人回耶路撒冷重建聖殿（以斯拉記，在但以理書以外）。",
        den: "His first-year decree let the Jews return and rebuild the temple (Ezra — outside the book of Daniel)." }
    ],
    traits: [
      { k: "strength", zh: "被神興起", en: "Raised up by God" },
      { k: "weakness", zh: "在本書戲份極少", en: "Barely appears in Daniel" }
    ],
    lesson: {
      zh: "神可以使用不認識祂的君王，成就祂的計劃。（參：賽 45:1）",
      en: "God can use a king who does not know him to carry out his plan. (Compare Isa 45:1.)"
    },
    quote: { ref: "6:28",
      zh: "當大利烏王在位的時候和波斯王古列在位的時候，大享亨通",
      en: "this Daniel prospered in the reign of Darius, and in the reign of Cyrus the Persian." },
    keyVerses: ["1:21", "6:28", "10:1"],
    intro: {
      zh: "古列（歷史上的居魯士大帝）是波斯帝國的奠基者。在但以理書中他只有三次出現（1:21；6:28；10:1），用來標示但以理事奉的年代，一直到「波斯王古列第三年」。聖經其他地方也提到他：以斯拉記 1:1-4 記他下詔准猶大人回鄉；以賽亞書 44:28 和 45:1 稱他為神所用的「牧人」和「所膏的」。",
      en: "Cyrus (Cyrus the Great in history) founded the Persian empire. In Daniel he appears only three times (1:21; 6:28; 10:1), marking how long Daniel served — right up to “the third year of Cyrus king of Persia.” He is mentioned elsewhere too: Ezra 1:1–4 records his decree letting the Jews return home, and Isaiah 44:28 and 45:1 call him God’s “shepherd” and “anointed.”"
    },
    tip: {
      zh: "和合本全本聖經都譯作「古列」，不少現代譯本和歷史書則稱他「居魯士」——是同一位。",
      en: "The 和合本 says “古列” everywhere in the Bible, while many modern translations and history books say “居魯士” — it is the same man."
    },
    related: ["daniel", "darius", "belshazzar"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "four_beasts", book: "daniel", no: 15, kind: "other", type: "vision", rarity: 3,
    zh: "四大獸", en: "The Four Beasts",
    tag: { zh: "從海中上來的四大獸", en: "Four Great Beasts from the Sea" },
    role: { zh: "但以理的異象", en: "Daniel’s vision" },
    ch: [7],
    passages: ["7:2-8", "7:11-12", "7:17-27"],
    moves: [
      { zh: "海中的四獸", en: "Four Beasts, Four Winds", ref: "7:3-7",
        dzh: "像獅子有鷹翅、如熊口啣三根肋骨、如豹有四翅四頭，第四獸有鐵牙和十角。",
        den: "A winged lion, a bear gripping three ribs, a four-headed four-winged leopard, and a terrifying beast with iron teeth and ten horns." },
      { zh: "聖民得國", en: "The Saints Receive the Kingdom", ref: "7:17-18",
        dzh: "這四獸是四王將要興起；然而至高者的聖民，必要得國，直到永遠。",
        den: "The four beasts are four kings who will arise; yet the saints of the Most High will receive the kingdom forever." }
    ],
    traits: [
      { k: "strength", zh: "令人畏懼", en: "Terrifying" },
      { k: "weakness", zh: "終必被審判", en: "Judged in the end" }
    ],
    lesson: {
      zh: "野獸般的權勢看似不可一世，卻有時限；最終得國的，是至高者的聖民。",
      en: "Beastly power may look unstoppable, but it has an expiry date; in the end the saints of the Most High receive the kingdom."
    },
    quote: { ref: "7:18",
      zh: "至高者的聖民，必要得國享受，直到永永遠遠",
      en: "the saints of the Most High will receive the kingdom, and possess the kingdom forever, even forever and ever." },
    keyVerses: ["7:2-8", "7:11-12", "7:17-18", "7:26-27"],
    intro: {
      zh: "第 7 章是全書的轉捩點：前六章是故事，從這裡開始是但以理本人所見的異象。四獸常和第 2 章的大像對照；傳統上常解為巴比倫、瑪代波斯、希臘、羅馬等帝國，但也有其他解釋，值得多讀幾種看法。",
      en: "Chapter 7 is the turning point of the book: the first six chapters are stories, and from here on we have visions Daniel himself saw. The four beasts are often paired with the statue of chapter 2; traditionally they are read as Babylon, Medo-Persia, Greece and Rome, though other interpretations exist and are worth comparing."
    },
    tip: {
      zh: "7:1 說這是「伯沙撒元年」的夢——時間上其實早於第 5、6 章。",
      en: "7:1 dates this dream to “the first year of Belshazzar” — earlier in time than chapters 5 and 6."
    },
    related: ["statue", "ancient_of_days", "daniel", "ram_goat"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "ancient_of_days", book: "daniel", no: 16, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "亙古常在者", en: "The Ancient of Days",
    tag: { zh: "坐在火焰寶座上審判的至高者", en: "The Judge on the Throne of Fire" },
    role: { zh: "異象中的神", en: "God, seen in Daniel’s vision" },
    ch: [7],
    names: ["亙古常在者"],
    enNames: ["ancient of days"],
    moves: [
      { zh: "烈火的寶座", en: "The Throne of Flames", ref: "7:9-10",
        dzh: "衣服潔白如雪，頭髮如純淨的羊毛；寶座乃火焰，其輪乃烈火。",
        den: "His clothing white as snow, the hair of his head like pure wool; his throne fiery flames, its wheels burning fire." },
      { zh: "案卷展開", en: "The Books Are Opened", ref: "7:10",
        dzh: "千千事奉祂，萬萬侍立在祂面前；祂坐著要行審判，案卷都展開了。",
        den: "Thousands upon thousands served him and ten thousand times ten thousand stood before him; the judgment was set and the books were opened." }
    ],
    traits: [
      { k: "strength", zh: "永恆的主權", en: "Eternal sovereignty" },
      { k: "identity", zh: "神自己", en: "God himself" }
    ],
    lesson: {
      zh: "無論世上的君王怎樣掌權，最後坐在寶座上的是神：祂審判，也把國度賜給祂所定的人。",
      en: "However earthly kings rule, the one who finally sits on the throne is God: he judges, and gives the kingdom to whom he chooses."
    },
    quote: { ref: "7:9",
      zh: "他的衣服潔白如雪，頭髮如純淨的羊毛",
      en: "His clothing was white as snow, and the hair of his head like pure wool." },
    keyVerses: ["7:9-10", "7:13-14", "7:22"],
    intro: {
      zh: "「亙古常在者」是第 7 章對神的稱呼，字面意思是「日子老邁的」，表示祂永恆。這幅異象強調祂的威嚴與審判，接著又有「一位像人子的」被領到祂面前，得了永遠的權柄、榮耀和國度（7:13-14）。新約中耶穌多次以「人子」自稱，並引用這段經文（例如太 26:64）。",
      en: "“Ancient of Days” is chapter 7’s name for God; the phrase literally means “advanced in days” and points to his eternity. The vision stresses his majesty and judgment, and then “one like a son of man” is brought before him and given everlasting dominion, glory and a kingdom (7:13–14). In the New Testament Jesus often calls himself the “Son of Man” and alludes to this passage (e.g., Matt 26:64)."
    },
    tip: {
      zh: "這張卡的插畫刻意不畫祂的面容，只以光與火表現——因為經文只描述衣服、頭髮和寶座。",
      en: "The artwork deliberately leaves out his face and shows only light and fire — the text describes only his clothing, his hair and his throne."
    },
    related: ["four_beasts", "daniel", "michael"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "ram_goat", book: "daniel", no: 17, kind: "other", type: "vision", rarity: 2,
    zh: "公綿羊與公山羊", en: "The Ram and the Goat",
    tag: { zh: "雙角的羊與腳不沾塵的山羊", en: "Two Horns Against the Swift One-Horned Goat" },
    role: { zh: "但以理的異象", en: "Daniel’s vision" },
    ch: [8],
    passages: ["8:3-8", "8:20-21"],
    moves: [
      { zh: "雙角的公綿羊", en: "The Two-Horned Ram", ref: "8:3-4",
        dzh: "站在河邊，兩角高聳，往西、往北、往南牴觸，沒有野獸能在牠面前站立。",
        den: "It stood by the river with two high horns, charging west, north and south; no beast could stand before it." },
      { zh: "腳不沾塵的山羊", en: "The Goat That Never Touched the Ground", ref: "8:5-8",
        dzh: "山羊從西疾奔而來，折斷綿羊的雙角；正強盛時，大角折斷，長出四個角。",
        den: "A goat raced in from the west and broke the ram’s horns; at its peak its great horn snapped and four grew in its place." }
    ],
    traits: [
      { k: "strength", zh: "腳不沾塵的速度", en: "Blazing speed" },
      { k: "weakness", zh: "強盛時大角折斷", en: "Horn broken at its peak" }
    ],
    lesson: {
      zh: "再強盛的帝國也有時限；歷史不是失控的，而是在神的手中。",
      en: "No empire stays strong forever; history is not out of control but in God’s hands."
    },
    quote: { ref: "8:20",
      zh: "你所看見雙角的公綿羊，就是瑪代和波斯王",
      en: "The ram which you saw, that had the two horns, they are the kings of Media and Persia." },
    keyVerses: ["8:3-4", "8:5-8", "8:20-21"],
    intro: {
      zh: "這個異象連同天使加百列的解釋，說得很清楚：雙角的公綿羊是瑪代和波斯王，公山羊是希臘王，兩眼當中的大角是頭一王（8:20-21）。大角折斷後長出四個角，之後的內容在 8:9 以下繼續。",
      en: "This vision, together with the angel Gabriel’s explanation, is unusually clear: the two-horned ram is the kings of Media and Persia, the goat is the king of Greece, and the great horn between its eyes is the first king (8:20–21). After the great horn breaks, four horns grow in its place, and the vision continues from 8:9."
    },
    tip: {
      zh: "從第 8 章開始，原文回到希伯來文；而 8:16 是全卷首次出現天使的名字（加百列）。",
      en: "From chapter 8 the original returns to Hebrew; and 8:16 is where an angel’s name (Gabriel) first appears in the book."
    },
    related: ["gabriel", "four_beasts", "daniel"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "gabriel", book: "daniel", no: 18, kind: "heavenly", type: "heaven", rarity: 3,
    zh: "加百列", en: "Gabriel",
    meaning: { zh: "名字常解作「神的大能者」", en: "Name often read as “God’s mighty one”" },
    tag: { zh: "為禱告飛來的使者", en: "The Messenger Who Flew Swiftly" },
    role: { zh: "天使・傳達異象的使者", en: "Angel · Revealer of visions" },
    ch: [8, 9],
    names: ["加百列"],
    enNames: ["Gabriel"],
    moves: [
      { zh: "使人明白異象", en: "Make This Man Understand", ref: "8:16-17",
        dzh: "有聲音吩咐：「加百列啊，要使此人明白這異象。」他一來，但以理就驚慌俯伏。",
        den: "A voice commanded: “Gabriel, make this man understand the vision.” When he came, Daniel fell on his face in fear." },
      { zh: "迅速飛來", en: "Flying Swiftly", ref: "9:21-23",
        dzh: "約在獻晚祭的時候，他迅速飛來：「你初懇求的時候，就發出命令。」",
        den: "At the evening offering he came flying swiftly: “At the beginning of your petitions the commandment went out.”" }
    ],
    traits: [
      { k: "strength", zh: "解明異象", en: "Explaining visions" },
      { k: "weakness", zh: "令人嚇得俯伏", en: "Makes people fall on their faces" }
    ],
    lesson: {
      zh: "禱告蒙垂聽，往往比我們想像的更快——「你初懇求的時候，就發出命令」。",
      en: "God hears prayer faster than we imagine — “At the beginning of your petitions the commandment went out.”"
    },
    quote: { ref: "9:23",
      zh: "你初懇求的時候，就發出命令，我來告訴你，因你大蒙眷愛",
      en: "At the beginning of your petitions the commandment went out, and I have come to tell you; for you are greatly beloved." },
    keyVerses: ["8:15-17", "9:20-23"],
    intro: {
      zh: "加百列是聖經中有名字的天使之一（另一位是米迦勒）。在但以理書他兩次出現：解釋第 8 章的異象，以及在但以理禱告時迅速飛來（9:21）。新約中他也向撒迦利亞和馬利亞報喜訊（路 1:19, 26）。",
      en: "Gabriel is one of only two angels named in the Bible (the other is Michael). In Daniel he appears twice: explaining the vision of chapter 8 and flying swiftly to Daniel while he was praying (9:21). In the New Testament he also brings good news to Zechariah and to Mary (Luke 1:19, 26)."
    },
    tip: {
      zh: "9 章先有但以理的禱告（9:3-19），然後才是加百列的到來——讀的時候先看禱告，再看天使。",
      en: "Daniel’s prayer (9:3–19) comes first, and then Gabriel arrives — read the prayer first, then the angel."
    },
    related: ["daniel", "michael", "ram_goat", "fourth_man"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "michael", book: "daniel", no: 19, kind: "heavenly", type: "heaven", rarity: 3,
    zh: "米迦勒", en: "Michael",
    meaning: { zh: "「誰像神？」", en: "“Who is like God?”" },
    tag: { zh: "保衛神子民的天使長", en: "The Archangel Who Stands Guard" },
    role: { zh: "天使長・大君", en: "Archangel · Great Prince" },
    ch: [10, 11, 12],
    names: ["米迦勒"],
    enNames: ["Michael"],
    moves: [
      { zh: "前來幫助", en: "He Came to Help", ref: "10:13",
        dzh: "波斯國的魔君攔阻天使二十一日，大君之一米迦勒來幫助他。",
        den: "The prince of Persia withstood the messenger for twenty-one days — then Michael, one of the chief princes, came to help." },
      { zh: "為你本國之民站起來", en: "He Will Stand Up", ref: "12:1",
        dzh: "在大艱難的時候，米迦勒必站起來；凡名錄在冊上的，必得拯救。",
        den: "At the time of trouble Michael will stand up; everyone whose name is written in the book will be delivered." }
    ],
    traits: [
      { k: "strength", zh: "護衛神的子民", en: "Guarding God’s people" },
      { k: "identity", zh: "天使長・大君", en: "Archangel · Great Prince" }
    ],
    lesson: {
      zh: "看得見的世界背後，有看不見的爭戰與幫助；禱告「已蒙應允」（10:12），只是答案的路上可能有爭戰。",
      en: "Behind the visible world there are unseen battles and unseen help; Daniel’s words “were heard” from the first day (10:12) — even if the answer had a fight on the way."
    },
    quote: { ref: "12:1",
      zh: "保佑你本國之民的天使長米迦勒必站起來",
      en: "Michael will stand up, the great prince who stands for the children of your people" },
    keyVerses: ["10:12-13", "10:20-21", "12:1-3"],
    intro: {
      zh: "米迦勒的名字意思是「誰像神？」，在但以理書被稱為「大君」「天使長」，是守護神子民的天使。第 10 章記載一場看不見的屬靈爭戰：天使被波斯國的魔君攔阻，米迦勒來幫助他。新約的猶大書 9 節和啟示錄 12:7 也提到他。",
      en: "Michael’s name means “Who is like God?” In Daniel he is called “the great prince” and archangel, a guardian of God’s people. Chapter 10 describes an unseen conflict: a messenger is held up by the prince of Persia until Michael comes to help. He also appears in Jude 9 and Revelation 12:7."
    },
    tip: {
      zh: "10:12-13 說明：禱告第一日就蒙應允，只是答案遲了二十一天才到——可以和自己的禱告經驗對照。",
      en: "10:12–13 shows a prayer heard on the first day, with the answer arriving twenty-one days later — compare it with your own experience of prayer."
    },
    related: ["gabriel", "daniel", "ancient_of_days"]
  }
);
