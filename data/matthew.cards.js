// 聖經人物卡 · 馬太福音 (Matthew) — book info + cards.
// Verse text comes from data/matthew.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/matthew.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Isa 7:14; Hos 11:1; Mic 5:2; Jonah 1-4; Zech 9:9, 11:12-13; Jer 31:31; Ps 22:1) appear in prose only, and were
// checked or are already covered by the matching cards in those books.
// Flagged rather than decided: who wrote the book (anonymous; tradition says Matthew), "virgin" in Isa 7:14, how many Magi
// there were, the "rock" of 16:18, the "least of these" of 25:40, the saints raised in 27:52-53, the "blood on us" of 27:25
// (which has been misused), and the Trinitarian wording of 28:19 (CUV note).

window.BOOKS.push({
  id: "matthew",
  zh: "馬太福音", en: "Matthew", abbr: { zh: "太", en: "Matt" },
  order: 40, section: { zh: "福音書", en: "Gospels" },
  chapters: 28,
  fan: ["beatitudes", "jesus", "great_commission"],
  summary: {
    zh: "馬太福音是新約的第一卷，開頭是「亞伯拉罕的後裔，大衛的子孫，耶穌基督的家譜」（1:1），常引用舊約說「這是要應驗」。全書以五大段教訓為骨架：登山寶訓（5-7 章）、差遣十二門徒（10 章）、天國的比喻（13 章）、教會中的饒恕與生活（18 章）、末後的話（24-25 章）；每段結尾都有「耶穌說完了這些話」一類的話。敘事部分從降生（1-2 章）、受洗與受試探（3-4 章），經過醫治、爭辯、問「你們說我是誰」（16 章），到耶路撒冷的最後一週：潔淨聖殿、最後的晚餐、客西馬尼、受審、十字架（21-27 章），以復活和大使命收結：「天上地下所有的權柄都賜給我了……我就常與你們同在，直到世界的末了」（28:18-20）。",
    en: "Matthew, the first book of the New Testament, opens “The book of the genealogy of Jesus Christ, the son of David, the son of Abraham” (1:1), and often says “this was to fulfill” a word of the Old Testament. The book is framed by five great discourses: the Sermon on the Mount (chs 5–7), the sending of the Twelve (ch 10), the parables of the Kingdom (ch 13), life and forgiveness in the community (ch 18), and the last things (chs 24–25); each ends with a line like “when Jesus had finished these words.” The narrative runs from the birth (chs 1–2), baptism and temptation (chs 3–4), through healings and disputes and the question “Who do you say that I am?” (ch 16), to the final week in Jerusalem — the cleansing of the temple, the last supper, Gethsemane, the trial and the cross (chs 21–27) — and ends with the resurrection and the great commission: “All authority has been given to me in heaven and on earth… I am with you always, even to the end of the age” (28:18–20)."
  },
  outline: [
    { zh: "家譜；約瑟的夢；馬利亞", en: "Genealogy; Joseph’s dream; Mary" },
    { zh: "博士；希律；逃往埃及", en: "The Magi; Herod; the flight to Egypt" },
    { zh: "施洗約翰；耶穌受洗", en: "John the Baptist; Jesus’s baptism" },
    { zh: "曠野受試探；呼召漁夫", en: "Temptation in the wilderness; calling the fishermen" },
    { zh: "登山寶訓：八福；鹽與光", en: "The Sermon on the Mount: the Beatitudes; salt and light" },
    { zh: "主禱文；不要憂慮", en: "The Lord’s Prayer; do not be anxious" },
    { zh: "兩個建造者", en: "The two builders" },
    { zh: "百夫長的信心；平靜風浪", en: "The centurion’s faith; stilling the storm" },
    { zh: "呼召馬太；與稅吏罪人同席", en: "Calling Matthew; eating with tax collectors and sinners" },
    { zh: "差遣十二門徒", en: "The sending of the Twelve" },
    { zh: "到我這裡來，得安息", en: "Come to me and find rest" },
    { zh: "約拿的神蹟", en: "The sign of Jonah" },
    { zh: "撒種的比喻；寶貝與珠子", en: "The parable of the sower; the treasure and the pearl" },
    { zh: "在海面上行走", en: "Walking on the sea" },
    { zh: "迦南婦人", en: "The Canaanite woman" },
    { zh: "彼得的認信", en: "Peter’s confession" },
    { zh: "變像", en: "The transfiguration" },
    { zh: "七十個七次；不肯饒恕的僕人", en: "Seventy times seven; the unforgiving servant" },
    { zh: "（本書沒有為這一章做卡）財主與永生；婚姻與孩童", en: "(No card for this chapter) the rich man and eternal life; marriage and children" },
    { zh: "葡萄園的工人", en: "The workers in the vineyard" },
    { zh: "進耶路撒冷", en: "The entry into Jerusalem" },
    { zh: "最大的誡命", en: "The great commandment" },
    { zh: "對文士和法利賽人的「禍哉」", en: "Woes on the scribes and Pharisees" },
    { zh: "末日的預告與警醒", en: "The last things and watchfulness" },
    { zh: "十個童女；按才幹受託；綿羊與山羊", en: "The ten virgins; the talents; the sheep and the goats" },
    { zh: "最後的晚餐；客西馬尼；猶大；彼得三次不認", en: "The last supper; Gethsemane; Judas; Peter’s denials" },
    { zh: "彼拉多與巴拉巴；十字架；埋葬", en: "Pilate and Barabbas; the cross; the burial" },
    { zh: "空墳墓；大使命", en: "The empty tomb; the great commission" }
  ],
  notes: {
    zh: "小提示：馬太福音沒有署名，傳統上認為作者是稅吏馬太（9:9；10:3）。書中有五大段教訓，各以「耶穌說完了這些話」類似的句子收結（7:28；11:1；13:53；19:1；26:1）。許多事件在馬可福音和路加福音也有記載；這裡的卡片多選馬太獨有或最有特色的場景，如博士、登山寶訓、綿羊與山羊、彼拉多洗手、守墓的兵和大使命。",
    en: "Good to know: Matthew is anonymous; tradition says its author is the tax collector Matthew (9:9; 10:3). The book has five great discourses, each closing with a line like “when Jesus had finished these words” (7:28; 11:1; 13:53; 19:1; 26:1). Many events are also in Mark and Luke; these cards pick scenes that are Matthew’s own or most characteristic: the Magi, the Sermon on the Mount, the sheep and goats, Pilate washing his hands, the guard at the tomb and the great commission."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "jesus", book: "matthew", no: 1, kind: "person", type: "heaven", rarity: 6,
    zh: "耶穌", en: "Jesus",
    meaning: { zh: "「耶和華是拯救」", en: "“Yahweh saves”" },
    tag: { zh: "要將自己的百姓從罪惡裡救出來", en: "He Will Save His People from Their Sins" },
    role: { zh: "基督・以馬內利", en: "The Christ · Immanuel" },
    ch: [1, 16, 28],
    passages: ["1:21", "16:16", "28:18-20"],
    moves: [
      { zh: "你要給他起名叫耶穌", en: "Name Him Jesus", ref: "1:21",
        dzh: "天使說：你要給他起名叫耶穌，因他要將自己的百姓從罪惡裡救出來。",
        den: "The angel says: “You shall call his name Jesus, for it is he who shall save his people from their sins.”" },
      { zh: "天上地下所有的權柄", en: "All Authority", ref: "28:18",
        dzh: "復活之後，他說：天上地下所有的權柄都賜給我了。",
        den: "After the resurrection he says, “All authority has been given to me in heaven and on earth.”" }
    ],
    traits: [
      { k: "strength", zh: "從馬槽到十字架到復活，全書圍繞他", en: "From the manger to the cross to the resurrection, the book centers on him" },
      { k: "identity", zh: "「以馬內利」：神與我們同在（1:23）", en: "“Immanuel”: God with us (1:23)" }
    ],
    lesson: {
      zh: "馬太福音的開頭和結尾互相呼應：開頭說他的名叫「以馬內利」，神與我們同在（1:23）；結尾他說「我就常與你們同在，直到世界的末了」（28:20）。",
      en: "The beginning and end of Matthew answer each other: the beginning calls him “Immanuel,” God with us (1:23); the end has him say, “I am with you always, even to the end of the age” (28:20)."
    },
    quote: { ref: "1:21",
      zh: "因他要將自己的百姓從罪惡裡救出來",
      en: "it is he who shall save his people from their sins" },
    keyVerses: ["1:21", "1:23", "16:16", "28:18-20"],
    intro: {
      zh: "耶穌的名字在希伯來文是「耶和華是拯救」，所以天使說他要「將自己的百姓從罪惡裡救出來」（1:21）。馬太福音稱他為「大衛的子孫」（1:1）、基督（16:16）、神的兒子（3:17；16:16）、以馬內利（1:23），也稱他為教訓的人：登山寶訓的教師，比喻的說話者。",
      en: "In Hebrew the name Jesus means “Yahweh saves,” so the angel says he will “save his people from their sins” (1:21). Matthew calls him son of David (1:1), the Christ (16:16), Son of God (3:17; 16:16) and Immanuel (1:23), and also shows him as teacher: the teacher of the Sermon on the Mount, the teller of parables."
    },
    tip: {
      zh: "這張卡只選了開頭、中段與結尾的三個位置；馬太福音裡關於耶穌的其他場景，在其他卡上。",
      en: "This card picks only three places, the beginning, middle and end; Matthew’s other scenes of Jesus are on the other cards."
    },
    related: ["genealogy", "baptism_of_jesus", "simon_peter", "crucifixion", "great_commission"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "genealogy", book: "matthew", no: 2, kind: "other", type: "wisdom", rarity: 3,
    zh: "耶穌基督的家譜", en: "The Genealogy of Jesus Christ",
    tag: { zh: "三個十四代，四位婦女", en: "Three Fourteens, Four Women" },
    role: { zh: "全書的開頭（1:1-17）", en: "The book’s opening (1:1–17)" },
    ch: [1],
    passages: ["1:1-17"],
    moves: [
      { zh: "亞伯拉罕到大衛", en: "Abraham to David", ref: "1:1-6",
        dzh: "從亞伯拉罕開始，經猶大、他瑪、喇合、路得，到大衛王。",
        den: "Starting with Abraham, through Judah, Tamar, Rahab and Ruth, to David the king." },
      { zh: "三個十四代", en: "Three Fourteens", ref: "1:17",
        dzh: "從亞伯拉罕到大衛十四代，到遷至巴比倫十四代，到基督又十四代。",
        den: "Fourteen generations from Abraham to David, fourteen to the exile in Babylon, fourteen to the Christ." }
    ],
    traits: [
      { k: "strength", zh: "把舊約整段歷史收進一個名字", en: "Gathers the whole Old Testament story into one name" },
      { k: "identity", zh: "他瑪、喇合、路得、烏利亞的妻（1:3、5、6）", en: "Tamar, Rahab, Ruth and Uriah’s wife (1:3, 5, 6)" }
    ],
    lesson: {
      zh: "在男性為主的家譜裡，馬太特意放進四位婦女（1:3、5、6），而且她們的來歷各有不尋常之處；馬利亞是第五位（1:16）。耶穌的家譜裡有外邦人，也有不光彩的故事。",
      en: "In a genealogy centered on men, Matthew deliberately includes four women (1:3, 5, 6), each with an unusual background; Mary is the fifth (1:16). Jesus’s family tree has foreigners and unflattering stories."
    },
    quote: { ref: "1:1",
      zh: "亞伯拉罕的後裔，大衛的子孫",
      en: "the son of David, the son of Abraham" },
    keyVerses: ["1:1", "1:3", "1:5", "1:6", "1:16", "1:17"],
    intro: {
      zh: "「亞伯拉罕的後裔，大衛的子孫，耶穌基督的家譜」（1:1），兩個名字把全書放在應許的脈絡裡。1:3、5、6 提到他瑪、喇合、路得，和「烏利亞的妻子」；路得的故事在路得記，喇合在約書亞記。1:17 說三個「十四代」；各代的名單有省略，所以「十四」是整理過的數字，不是逐代的統計。",
      en: "“The book of the genealogy of Jesus Christ, the son of David, the son of Abraham” (1:1) — two names set the whole book inside the story of the promise. Verses 3, 5 and 6 mention Tamar, Rahab, Ruth and “the wife of Uriah”; Ruth’s story is in the book of Ruth and Rahab’s in Joshua. Verse 17 speaks of three “fourteens”; the lists skip some generations, so “fourteen” is an arranged number rather than a generation-by-generation count."
    },
    tip: {
      zh: "這份名單與路加福音 3 章的家譜不同，兩者如何對得上，注釋書有幾種說法。",
      en: "This list differs from the genealogy in Luke 3, and commentaries offer several ways of relating the two."
    },
    related: ["jesus", "joseph_nazareth", "mary_virgin", "magi"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "joseph_nazareth", book: "matthew", no: 3, kind: "person", type: "faith", rarity: 4,
    zh: "約瑟", en: "Joseph",
    tag: { zh: "不願意羞辱她的義人", en: "The Righteous Man Who Would Not Shame Her" },
    role: { zh: "拿撒勒的木匠・馬利亞的丈夫", en: "Carpenter of Nazareth · Mary’s husband" },
    ch: [1, 2],
    passages: ["1:18-25", "2:13-23"],
    moves: [
      { zh: "義人的決定", en: "A Righteous Decision", ref: "1:19",
        dzh: "她丈夫約瑟是個義人，不願意明明地羞辱她，想要暗暗地把她休了。",
        den: "Joseph her husband, a righteous man, would not make her a public example, and planned to put her away secretly." },
      { zh: "夢中的吩咐", en: "Commanded in a Dream", ref: "2:13-14",
        dzh: "主的使者在夢中說：起來，帶小孩子和他母親逃往埃及；約瑟夜間就起來去了。",
        den: "An angel says in a dream, “Arise, take the child and his mother and flee to Egypt”; Joseph rose by night and went." }
    ],
    traits: [
      { k: "strength", zh: "夢中聽見，醒來就做", en: "Hears in a dream and acts on waking" },
      { k: "identity", zh: "馬太福音裡他沒有說過一句話", en: "He speaks no word in Matthew" }
    ],
    lesson: {
      zh: "約瑟是「義人」（1:19），他在發現馬利亞懷孕時，選擇不羞辱她；後來每次得到夢中的吩咐，他都立刻行動（1:24；2:14、21）。馬太福音沒有記他說過一句話。",
      en: "Joseph is a “righteous man” (1:19); when he learns Mary is pregnant he chooses not to shame her; later he acts at once on each dream (1:24; 2:14, 21). Matthew records no word he speaks."
    },
    quote: { ref: "1:19",
      zh: "約瑟是個義人，不願意明明地羞辱她",
      en: "being a righteous man, and not willing to make her a public example" },
    keyVerses: ["1:19", "1:20", "1:24", "2:13", "2:14"],
    intro: {
      zh: "約瑟和馬利亞已經「許配」，還沒迎娶，馬利亞就懷孕了（1:18）。他想「暗暗地把她休了」（1:19），然後有主的使者在夢中對他說「大衛的子孫約瑟，不要怕」（1:20）。他醒來就把妻子娶過來（1:24）。後來他又在夢中三次接到指示：逃往埃及（2:13）、回以色列（2:19-20）、避往加利利的拿撒勒（2:22-23）。",
      en: "Joseph and Mary were engaged but not yet married when Mary was found pregnant (1:18). He planned to “put her away secretly” (1:19), then an angel of the Lord says to him in a dream, “Joseph, son of David, don’t be afraid” (1:20). On waking he takes his wife (1:24). Later he receives three more dream directions: flee to Egypt (2:13), return to Israel (2:19–20), withdraw to Nazareth in Galilee (2:22–23)."
    },
    tip: {
      zh: "1:25 的「沒有和她同房，等她生了兒子」，和合本註：有古卷作「頭胎的兒子」。",
      en: "In 1:25 “until she had given birth,” the CUV note says some manuscripts read “firstborn son.”"
    },
    related: ["mary_virgin", "magi", "herod_great", "genealogy"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "mary_virgin", book: "matthew", no: 4, kind: "person", type: "love", rarity: 4,
    zh: "馬利亞", en: "Mary",
    tag: { zh: "從聖靈懷了孕", en: "Found with Child by the Holy Spirit" },
    role: { zh: "耶穌的母親", en: "The mother of Jesus" },
    ch: [1, 2],
    passages: ["1:16-25", "2:11"],
    moves: [
      { zh: "從聖靈懷孕", en: "By the Holy Spirit", ref: "1:18",
        dzh: "馬利亞已經許配了約瑟，還沒有迎娶，就從聖靈懷了孕。",
        den: "Mary was engaged to Joseph, and before they came together was found pregnant by the Holy Spirit." },
      { zh: "以馬內利", en: "Immanuel", ref: "1:23",
        dzh: "必有童女懷孕生子；人要稱他的名為以馬內利。",
        den: "“The virgin shall be with child, and shall give birth to a son. They shall call his name Immanuel.”" }
    ],
    traits: [
      { k: "strength", zh: "沒有一句話，卻在故事的中心", en: "Without a word, yet at the center of the story" },
      { k: "identity", zh: "以賽亞書 7:14 的引用", en: "The citation of Isaiah 7:14" }
    ],
    lesson: {
      zh: "馬太福音以約瑟的角度說這件事，馬利亞幾乎沒有說話；她的位置在動詞裡：從聖靈懷了孕（1:18）、生了兒子（1:25）、小孩子和他母親（2:11、13、14、20、21）。",
      en: "Matthew tells the matter from Joseph’s side and Mary hardly speaks; her place is in the verbs: found pregnant by the Holy Spirit (1:18), gave birth to a son (1:25), “the child and his mother” (2:11, 13, 14, 20, 21)."
    },
    quote: { ref: "1:23",
      zh: "必有童女懷孕生子；人要稱他的名為以馬內利",
      en: "the virgin shall be with child, and shall give birth to a son" },
    keyVerses: ["1:18", "1:20", "1:23", "2:11"],
    intro: {
      zh: "1:23 引用以賽亞書 7:14：「必有童女懷孕生子；人要稱他的名為以馬內利。」「童女」在以賽亞書原文用的詞，可以譯作「少女」，譯法有爭議；馬太引用的希臘文譯本明確用「童女」。以馬內利的意思是「神與我們同在」。馬利亞在 2:11 與博士相遇，在 12:46-50 又出現在耶穌的家人中。",
      en: "Verse 23 cites Isaiah 7:14: “Behold, the virgin shall be with child, and shall give birth to a son. They shall call his name Immanuel.” The Hebrew word in Isaiah can be rendered “young woman,” and its translation is debated; the Greek version Matthew cites uses “virgin” plainly. Immanuel means “God with us.” Mary meets the Magi in 2:11 and appears again among Jesus’s family in 12:46–50."
    },
    tip: {
      zh: "以賽亞書 7:14 的「童女／少女」與馬太引用的關係，是一個老問題；兩種譯法在不同傳統中都有人採用。",
      en: "The relation between “virgin / young woman” in Isaiah 7:14 and Matthew’s citation is an old question; both renderings are used in different traditions."
    },
    related: ["joseph_nazareth", "magi", "genealogy", "jesus"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "magi", book: "matthew", no: 5, kind: "person", type: "vision", rarity: 4,
    zh: "東方的博士", en: "The Magi from the East",
    tag: { zh: "看見他的星，特來拜他", en: "We Saw His Star and Have Come to Worship Him" },
    role: { zh: "外邦的智慧人（2:1-12）", en: "Wise men from the nations (2:1–12)" },
    ch: [2],
    passages: ["2:1-12"],
    moves: [
      { zh: "在東方看見他的星", en: "His Star in the East", ref: "2:2",
        dzh: "那生下來作猶太人之王的在哪裡？我們在東方看見他的星，特來拜他。",
        den: "“Where is he who is born King of the Jews? For we saw his star in the east, and have come to worship him.”" },
      { zh: "黃金、乳香、沒藥", en: "Gold, Frankincense, Myrrh", ref: "2:11",
        dzh: "他們進了房子，看見小孩子和他母親馬利亞，就俯伏拜他，獻上黃金、乳香、沒藥。",
        den: "They came into the house, saw the child with Mary his mother, fell down and worshiped him, and offered gold, frankincense and myrrh." }
    ],
    traits: [
      { k: "strength", zh: "從遠方來，帶著問題與禮物", en: "Come from far away with a question and gifts" },
      { k: "identity", zh: "經文沒有說人數、國別或名字", en: "The text gives no number, nation or names" }
    ],
    lesson: {
      zh: "外邦的博士先來問「猶太人之王」在哪裡，猶太的祭司和文士卻知道答案（彌迦書 5:2）而沒有同去（2:4-6）。馬太福音開頭就放了外邦人來拜，結尾也是「使萬民作我的門徒」。",
      en: "Gentile Magi come asking where the “King of the Jews” is, while Jewish priests and scribes know the answer (Micah 5:2) and do not go along (2:4–6). Matthew begins with Gentiles coming to worship and ends with “make disciples of all nations.”"
    },
    quote: { ref: "2:2",
      zh: "那生下來作猶太人之王的在哪裡？我們在東方看見他的星，特來拜他",
      en: "Where is he who is born King of the Jews?" },
    keyVerses: ["2:1", "2:2", "2:9", "2:10", "2:11", "2:12"],
    intro: {
      zh: "「有幾個博士從東方來到耶路撒冷」（2:1）。「博士」（magi）在當時常指研究星象的學者；經文沒有說有三位，三份禮物是「三」的由來。他們依星來到伯利恆，在一座「房子」裡見到「小孩子」（2:11），可見已不是剛出生的嬰孩；他們得到夢中指示，不再回去見希律，從別的路回本國（2:12）。",
      en: "“Wise men from the east came to Jerusalem” (2:1). The “magi” were in that world scholars who studied the stars; the text does not say there were three — the three gifts are where “three” came from. They follow the star to Bethlehem and find the “child” in a “house” (2:11), so he is no longer a newborn; warned in a dream, they do not return to Herod but go home by another way (2:12)."
    },
    tip: {
      zh: "「三位博士」是傳統；經文只說有「幾個」，禮物有三樣。",
      en: "“Three kings” is tradition; the text says only “wise men,” with three gifts."
    },
    related: ["herod_great", "joseph_nazareth", "mary_virgin", "genealogy"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "herod_great", book: "matthew", no: 6, kind: "person", type: "scheme", rarity: 3,
    zh: "希律王", en: "Herod the King",
    tag: { zh: "聽見就心裡不安的王", en: "The King Who Was Troubled" },
    role: { zh: "猶太王（2:1-18）", en: "King of Judea (2:1–18)" },
    ch: [2],
    passages: ["2:1-18"],
    moves: [
      { zh: "心裡不安", en: "Troubled", ref: "2:3-4",
        dzh: "希律王聽見了，就心裡不安；他召齊祭司長和文士，問基督當生在何處。",
        den: "King Herod was troubled; he gathered the chief priests and scribes and asked where the Christ would be born." },
      { zh: "愚弄與大怒", en: "Fooled and Furious", ref: "2:16",
        dzh: "希律見自己被博士愚弄，就大大發怒，差人殺了伯利恆兩歲以裡的男孩。",
        den: "Herod, seeing he had been fooled by the Magi, was furious and sent to kill the boys of Bethlehem two years old and under." }
    ],
    traits: [
      { k: "strength", zh: "手握王權與軍隊", en: "Holds a king’s power and soldiers" },
      { k: "weakness", zh: "一個「新生的王」就使他不安", en: "A “newborn king” was enough to trouble him" }
    ],
    lesson: {
      zh: "「希律王聽見了，就心裡不安；耶路撒冷合城的人也都不安。」（2:3）握權的人最先感到威脅；他假裝要去拜（2:8），實際是要除滅（2:13）。",
      en: "“When King Herod heard it, he was troubled, and all Jerusalem with him” (2:3). Those in power feel threatened first; he pretends he will go and worship (2:8) while intending to destroy (2:13)."
    },
    quote: { ref: "2:3",
      zh: "希律王聽見了，就心裡不安；耶路撒冷合城的人也都不安",
      en: "When King Herod heard it, he was troubled, and all Jerusalem with him." },
    keyVerses: ["2:3", "2:4", "2:8", "2:13", "2:16"],
    intro: {
      zh: "「當希律王的時候，耶穌生在猶太的伯利恆」（2:1）。希律召齊祭司長和文士，他們引用彌迦書 5:2 說基督要生在伯利恆（2:4-6）。博士不回報，希律就殺了伯利恆「凡兩歲以裡的」男孩（2:16）；馬太接著引用耶利米書 31:15 的拉結哭泣（2:17-18）。這裡的希律是一般稱為「希律大王」的那位；書中不提他的死年。",
      en: "“Now when Jesus was born in Bethlehem of Judea in the days of King Herod” (2:1). Herod gathers the chief priests and scribes, who cite Micah 5:2 for Bethlehem (2:4–6). When the Magi do not report back, Herod has the boys of Bethlehem “two years old and under” killed (2:16); Matthew then cites Rachel weeping from Jeremiah 31:15 (2:17–18). This Herod is the one usually called Herod the Great; the book does not give the year of his death."
    },
    tip: {
      zh: "馬太福音以外的史料沒有記載伯利恆殺嬰的事；那是常被討論的問題，但經文本身只這樣記。",
      en: "No source outside Matthew records the killing of the Bethlehem boys; that is a much-discussed point, but the text itself records it this way."
    },
    related: ["magi", "joseph_nazareth", "john_baptist", "mary_virgin"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "john_baptist", book: "matthew", no: 7, kind: "person", type: "faith", rarity: 5,
    zh: "施洗約翰", en: "John the Baptist",
    tag: { zh: "曠野裡的聲音", en: "A Voice in the Wilderness" },
    role: { zh: "預備主道路的人", en: "The one who prepares the way" },
    ch: [3, 11, 14],
    passages: ["3:1-12", "11:2-15", "14:1-12"],
    moves: [
      { zh: "天國近了", en: "The Kingdom Is Near", ref: "3:2",
        dzh: "他在猶太曠野傳道說：天國近了，你們應當悔改！",
        den: "He preaches in the wilderness of Judea: “Repent, for the Kingdom of Heaven is at hand!”" },
      { zh: "預備主的道", en: "Prepare the Way", ref: "3:3",
        dzh: "他就是以賽亞所說：在曠野有人聲喊著說，預備主的道，修直他的路。",
        den: "He is the one Isaiah spoke of: “The voice of one crying in the wilderness, make ready the way of the Lord.”" }
    ],
    traits: [
      { k: "strength", zh: "不遷就聽眾，連法利賽人也直接指責", en: "Does not flatter listeners; even rebukes the Pharisees" },
      { k: "weakness", zh: "在監裡也有疑問（11:2-3）", en: "In prison he has questions (11:2–3)" }
    ],
    lesson: {
      zh: "約翰說「天國近了」，耶穌稍後也說同一句（4:17）。他在牢裡派人問：「那將要來的是你嗎？」（11:3）耶穌稱讚他：婦人所生的，沒有一個比他更大（11:11）。",
      en: "John says “the Kingdom of Heaven is at hand,” and Jesus soon says the same (4:17). In prison he sends to ask, “Are you the one who is to come?” (11:3). Jesus praises him: among those born of women none is greater (11:11)."
    },
    quote: { ref: "3:2",
      zh: "天國近了，你們應當悔改",
      en: "Repent, for the Kingdom of Heaven is at hand!" },
    keyVerses: ["3:1", "3:2", "3:3", "3:11", "11:2", "11:11", "14:10"],
    intro: {
      zh: "約翰穿駱駝毛的衣服，腰束皮帶，吃蝗蟲和野蜜（3:4）。他在約旦河施洗，要人悔改，並對來受洗的法利賽人和撒都該人說「毒蛇的種類」（3:7）。他說後來的那一位要用聖靈與火施洗（3:11）。11:2-6 他在監裡打發門徒問耶穌；11:14 耶穌說他就是那應當來的以利亞。14:1-12 他被希律安提帕殺害。",
      en: "John wore camel’s hair with a leather belt and ate locusts and wild honey (3:4). He baptized in the Jordan and called for repentance, telling the Pharisees and Sadducees who came, “You offspring of vipers” (3:7). He said the one coming after him would baptize with the Holy Spirit and fire (3:11). In 11:2–6 he sends disciples from prison to ask Jesus; in 11:14 Jesus says he is the Elijah who was to come. In 14:1–12 he is killed by Herod Antipas."
    },
    tip: {
      zh: "「以利亞」（11:14）是比喻的說法，約翰自己在約翰福音 1:21 說「我不是」，兩處用意不同。",
      en: "“Elijah” (11:14) is figurative; John himself says “I am not” in John 1:21 — the two statements have different purposes."
    },
    related: ["baptism_of_jesus", "herod_great", "jesus", "temptation_wilderness"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "baptism_of_jesus", book: "matthew", no: 8, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "耶穌受洗", en: "The Baptism of Jesus",
    tag: { zh: "這是我的愛子，我所喜悅的", en: "This Is My Beloved Son" },
    role: { zh: "公開事奉的起點（3:13-17）", en: "The start of his public ministry (3:13–17)" },
    ch: [3],
    passages: ["3:13-17"],
    moves: [
      { zh: "盡諸般的義", en: "To Fulfill All Righteousness", ref: "3:14-15",
        dzh: "約翰想攔住他；耶穌說：你暫且許我，因為我們理當這樣盡諸般的義。",
        den: "John would have hindered him; Jesus says, “Allow it now, for this is the fitting way for us to fulfill all righteousness.”" },
      { zh: "天開了", en: "The Heavens Opened", ref: "3:16-17",
        dzh: "天開了，神的靈彷彿鴿子降下；有聲音說：這是我的愛子，我所喜悅的。",
        den: "The heavens opened, the Spirit descended like a dove, and a voice said, “This is my beloved Son, with whom I am well pleased.”" }
    ],
    traits: [
      { k: "strength", zh: "父、子、靈同時出現", en: "Father, Son and Spirit appear together" },
      { k: "identity", zh: "「愛子」的聲音，下次在變像山上（17:5）", en: "The “beloved Son” voice is heard again on the mountain (17:5)" }
    ],
    lesson: {
      zh: "耶穌沒有罪要悔改，卻來受悔改的洗；他說這是「盡諸般的義」（3:15）。馬太福音裡，這是第一次有聲音從天上宣告他的身分。",
      en: "Jesus has no sin to repent of, yet he comes for a baptism of repentance; he says it is “to fulfill all righteousness” (3:15). It is the first time in Matthew a voice from heaven declares who he is."
    },
    quote: { ref: "3:17",
      zh: "這是我的愛子，我所喜悅的",
      en: "This is my beloved Son, with whom I am well pleased." },
    keyVerses: ["3:13", "3:15", "3:16", "3:17"],
    intro: {
      zh: "耶穌從加利利來到約旦河，要受約翰的洗；約翰說：「我當受你的洗，你反倒上我這裡來嗎？」（3:14）耶穌受洗後，「天忽然為他開了，他就看見神的靈彷彿鴿子降下，落在他身上」，有聲音說「這是我的愛子，我所喜悅的」（3:16-17）。接著他就被聖靈引到曠野受試探（4:1）。",
      en: "Jesus comes from Galilee to the Jordan to be baptized by John; John says, “I need to be baptized by you, and you come to me?” (3:14). After the baptism, “the heavens were opened to him. He saw the Spirit of God descending as a dove,” and a voice says “This is my beloved Son, with whom I am well pleased” (3:16–17). Then he is at once led by the Spirit into the wilderness to be tempted (4:1)."
    },
    tip: {
      zh: "3:15 的「盡諸般的義」，和合本註作「禮」；這句話的意思，注釋書有不同說明。",
      en: "“Fulfill all righteousness” (3:15), the CUV note renders the last word “rite”; commentaries explain the phrase in different ways."
    },
    related: ["john_baptist", "temptation_wilderness", "transfiguration", "jesus"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "temptation_wilderness", book: "matthew", no: 9, kind: "other", type: "faith", rarity: 4,
    zh: "曠野受試探", en: "Tempted in the Wilderness",
    tag: { zh: "經上記著說", en: "It Is Written" },
    role: { zh: "三次試探（4:1-11）", en: "Three tests (4:1–11)" },
    ch: [4],
    passages: ["4:1-11"],
    moves: [
      { zh: "石頭變食物", en: "Stones to Bread", ref: "4:3-4",
        dzh: "魔鬼說：吩咐石頭變食物；耶穌說：人活著不是單靠食物，乃是靠神口裡所出的一切話。",
        den: "The devil: “Command that these stones become bread.” Jesus: “Man shall not live by bread alone.”" },
      { zh: "單要事奉他", en: "Serve Him Only", ref: "4:10",
        dzh: "魔鬼要把萬國給他，只求他俯伏拜；耶穌說：撒但，退去吧！當拜主你的神，單要事奉他。",
        den: "The devil offers all the kingdoms for a bow; Jesus says, “Get behind me, Satan! You shall worship the Lord your God, and you shall serve him only.”" }
    ],
    traits: [
      { k: "strength", zh: "三次都用經文回答", en: "Answers each time with Scripture" },
      { k: "weakness", zh: "禁食四十晝夜，「後來就餓了」（4:2）", en: "After forty days of fasting, “he was hungry afterward” (4:2)" }
    ],
    lesson: {
      zh: "三次試探，耶穌的回答都是「經上記著說」，都引自申命記（4:4、7、10）。魔鬼也引用經文（4:6），所以重點不在有沒有引用，而在怎樣用。",
      en: "In each of the three tests Jesus answers “It is written,” each time from Deuteronomy (4:4, 7, 10). The devil also quotes Scripture (4:6), so the point is not whether one quotes but how."
    },
    quote: { ref: "4:4",
      zh: "人活著，不是單靠食物，乃是靠神口裡所出的一切話",
      en: "Man shall not live by bread alone" },
    keyVerses: ["4:1", "4:2", "4:3", "4:4", "4:7", "4:10", "4:11"],
    intro: {
      zh: "「當時，耶穌被聖靈引到曠野，受魔鬼的試探。」（4:1）三個試探：把石頭變成食物（4:3）、從殿頂跳下去讓天使托住（4:5-6）、俯伏拜魔鬼就得萬國的榮華（4:8-9）。每次的答案都是「經上記著說」，分別引自申命記 8:3、6:16、6:13。「撒但」（4:10）和合本註說就是「抵擋」的意思。最後「魔鬼離了耶穌，有天使來伺候他」（4:11）。",
      en: "“Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil” (4:1). The three tests: turn stones into bread (4:3), throw yourself from the temple pinnacle for the angels to catch you (4:5–6), fall down and worship for the kingdoms of the world (4:8–9). Each answer is “It is written,” from Deuteronomy 8:3, 6:16 and 6:13. “Satan” (4:10), the CUV note says, means “adversary.” At the end “the devil left him, and behold, angels came and served him” (4:11)."
    },
    tip: {
      zh: "三個試探的順序，路加福音 4 章略有不同；兩處都沒有說明為甚麼。",
      en: "Luke 4 gives the three tests in a slightly different order; neither says why."
    },
    related: ["baptism_of_jesus", "fishers_of_men", "jesus", "gethsemane"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "fishers_of_men", book: "matthew", no: 10, kind: "other", type: "harvest", rarity: 3,
    zh: "得人如得魚", en: "Fishers of Men",
    tag: { zh: "他們就立刻捨了網", en: "They Immediately Left Their Nets" },
    role: { zh: "呼召四個漁夫（4:18-22）", en: "The call of four fishermen (4:18–22)" },
    ch: [4],
    passages: ["4:18-22"],
    moves: [
      { zh: "來跟從我", en: "Come After Me", ref: "4:19",
        dzh: "耶穌對彼得和安得烈說：來跟從我，我要叫你們得人如得魚一樣。",
        den: "Jesus says to Peter and Andrew, “Come after me, and I will make you fishers for men.”" },
      { zh: "捨了船，別了父親", en: "Boat and Father Left", ref: "4:21-22",
        dzh: "雅各和約翰同父親西庇太在船上補網；他們立刻捨了船，別了父親，跟從了耶穌。",
        den: "James and John were mending nets with Zebedee their father; they immediately left the boat and their father and followed him." }
    ],
    traits: [
      { k: "strength", zh: "「立刻」出現兩次（4:20、22）", en: "“Immediately” twice (4:20, 22)" },
      { k: "identity", zh: "兩對兄弟：彼得與安得烈；雅各與約翰", en: "Two pairs of brothers: Peter and Andrew; James and John" }
    ],
    lesson: {
      zh: "耶穌叫的是漁夫，用的是漁夫懂得的話：「得人如得魚」（4:19）。他們留下的是網、船和父親（4:20、22）；馬太福音沒有解釋他們為何立刻就走。",
      en: "Jesus calls fishermen in words fishermen understand: “fishers for men” (4:19). They leave nets, boat and father (4:20, 22); Matthew does not explain why they went so quickly."
    },
    quote: { ref: "4:19",
      zh: "來跟從我，我要叫你們得人如得魚一樣",
      en: "Come after me, and I will make you fishers for men." },
    keyVerses: ["4:18", "4:19", "4:20", "4:21", "4:22"],
    intro: {
      zh: "耶穌在加利利海邊行走，看見「那稱呼彼得的西門和他兄弟安得烈，在海裡撒網」（4:18），又看見「西庇太的兒子雅各和他兄弟約翰，同他們的父親西庇太在船上補網」（4:21）。他招呼他們，他們就跟從。這四人之後都在十二使徒的名單裡（10:2）。",
      en: "Walking by the Sea of Galilee, Jesus sees “Simon, who is called Peter, and Andrew, his brother, casting a net into the sea” (4:18), and “James the son of Zebedee, and John his brother, in the boat with Zebedee their father, mending their nets” (4:21). He calls them, and they follow. All four later appear in the list of the Twelve (10:2)."
    },
    tip: {
      zh: "約翰福音 1:35-42 記著這幾位在這之前已經認識耶穌；兩個福音書的記載如何接起來，有不同說法。",
      en: "John 1:35–42 records that some of these men had already met Jesus earlier; how the two accounts fit together has different explanations."
    },
    related: ["simon_peter", "temptation_wilderness", "twelve_sent", "walking_on_water"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "beatitudes", book: "matthew", no: 11, kind: "other", type: "love", rarity: 5,
    zh: "八福", en: "The Beatitudes",
    tag: { zh: "虛心的人有福了", en: "Blessed Are the Poor in Spirit" },
    role: { zh: "登山寶訓的開頭（5:1-12）", en: "The opening of the Sermon on the Mount (5:1–12)" },
    ch: [5],
    passages: ["5:1-12"],
    moves: [
      { zh: "虛心的人", en: "The Poor in Spirit", ref: "5:3",
        dzh: "虛心的人有福了！因為天國是他們的。哀慟的人有福了！因為他們必得安慰。",
        den: "“Blessed are the poor in spirit, for theirs is the Kingdom of Heaven. Blessed are those who mourn, for they shall be comforted.”" },
      { zh: "使人和睦的人", en: "The Peacemakers", ref: "5:9",
        dzh: "使人和睦的人有福了！因為他們必稱為神的兒子。",
        den: "“Blessed are the peacemakers, for they shall be called children of God.”" }
    ],
    traits: [
      { k: "strength", zh: "八個「有福了」，頭尾都是「天國是他們的」", en: "Eight blessings, with “theirs is the Kingdom of Heaven” at both ends" },
      { k: "identity", zh: "登山寶訓的第一段", en: "The first section of the Sermon on the Mount" }
    ],
    lesson: {
      zh: "「有福」說的不是環境好，而是「天國是他們的」「必得安慰」「必得見神」。第一個和第八個的應許相同（5:3、10），把八句話框在一起。",
      en: "“Blessed” does not mean favorable circumstances but “theirs is the Kingdom,” “they shall be comforted,” “they shall see God.” The first and eighth promises are the same (5:3, 10), framing the eight lines."
    },
    quote: { ref: "5:3",
      zh: "虛心的人有福了！因為天國是他們的",
      en: "Blessed are the poor in spirit, for theirs is the Kingdom of Heaven." },
    keyVerses: ["5:1", "5:3", "5:4", "5:5", "5:8", "5:9", "5:10"],
    intro: {
      zh: "耶穌看見許多人，就上了山，坐下，門徒到他跟前，他就開口教訓他們（5:1-2）。八福是：虛心的、哀慟的、溫柔的、飢渴慕義的、憐恤人的、清心的、使人和睦的、為義受逼迫的（5:3-10）。5:11-12 再轉為對門徒說「你們」：人若因我辱罵你們，你們就有福了。「虛心的」，WEB 作 “poor in spirit”；「溫柔的」，WEB 作 “gentle”。",
      en: "Jesus sees the crowds, goes up on the mountain, sits down, and his disciples come to him; he opens his mouth and teaches (5:1–2). The eight: the poor in spirit, those who mourn, the gentle, those who hunger and thirst for righteousness, the merciful, the pure in heart, the peacemakers, those persecuted for righteousness’ sake (5:3–10). Verses 11–12 turn to “you”: blessed are you when people reproach you for my sake. The CUV’s “虛心” is “poor in spirit” in the WEB; “溫柔” is “gentle.”"
    },
    tip: {
      zh: "「虛心的」（和合本）與「poor in spirit」（WEB）的意思，與路加福音 6:20 的「貧窮的人」有不同解釋。",
      en: "How “poor in spirit” (WEB; “虛心” in the CUV) relates to “the poor” in Luke 6:20 has different explanations."
    },
    related: ["salt_and_light", "lords_prayer", "two_builders", "jesus"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "salt_and_light", book: "matthew", no: 12, kind: "other", type: "power", rarity: 3,
    zh: "世上的鹽，世上的光", en: "Salt and Light",
    tag: { zh: "城造在山上是不能隱藏的", en: "A City on a Hill Cannot Be Hidden" },
    role: { zh: "登山寶訓（5:13-16）", en: "The Sermon on the Mount (5:13–16)" },
    ch: [5],
    passages: ["5:13-16"],
    moves: [
      { zh: "你們是世上的鹽", en: "You Are the Salt", ref: "5:13",
        dzh: "你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？",
        den: "“You are the salt of the earth, but if the salt has lost its flavor, with what will it be salted?”" },
      { zh: "你們是世上的光", en: "You Are the Light", ref: "5:14-15",
        dzh: "你們是世上的光。城造在山上不能隱藏；人點燈不放在斗底下，是放在燈臺上。",
        den: "“You are the light of the world. A city on a hill can’t be hidden… nor do you put a lamp under a basket, but on a stand.”" }
    ],
    traits: [
      { k: "strength", zh: "已經是，不是「要成為」", en: "Already “are,” not “should become”" },
      { k: "weakness", zh: "鹽失了味，燈放在斗底下", en: "Salt that loses its taste; a lamp under a basket" }
    ],
    lesson: {
      zh: "耶穌不是說「你們要作鹽、作光」，而是「你們是」（5:13、14）。接著是用途：好行為叫人看見，便將榮耀歸給天父（5:16）。",
      en: "Jesus does not say “become salt and light” but “you are” (5:13, 14). Then the purpose: that people see your good works and glorify your Father in heaven (5:16)."
    },
    quote: { ref: "5:14",
      zh: "你們是世上的光。城造在山上是不能隱藏的",
      en: "You are the light of the world. A city located on a hill can’t be hidden." },
    keyVerses: ["5:13", "5:14", "5:15", "5:16"],
    intro: {
      zh: "八福之後，耶穌用兩個日常的東西說門徒：「你們是世上的鹽」，「你們是世上的光」（5:13-14）。鹽用來調味和保存，失了味就「無用」；光是用來照亮，不放在「斗底下」。「斗」是量穀物的器具。5:16 是結論：「你們的光也當這樣照在人前，叫他們看見你們的好行為，便將榮耀歸給你們在天上的父。」",
      en: "After the Beatitudes Jesus uses two everyday things for his disciples: “You are the salt of the earth,” “You are the light of the world” (5:13–14). Salt seasons and preserves, and “is good for nothing” when it loses its flavor; light is to light up, not to go “under a measuring basket,” the vessel for measuring grain. Verse 16 concludes: “let your light shine before men; that they may see your good works, and glorify your Father who is in heaven.”"
    },
    tip: {
      zh: "「鹽失了味」在當時的實際情形，注釋書有不同說明；這裡的重點是比喻。",
      en: "What “salt that loses its taste” meant in practice is explained differently by commentaries; the point here is the figure."
    },
    related: ["beatitudes", "lords_prayer", "two_builders", "jesus"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "lords_prayer", book: "matthew", no: 13, kind: "other", type: "faith", rarity: 5,
    zh: "主禱文", en: "The Lord’s Prayer",
    tag: { zh: "我們在天上的父", en: "Our Father in Heaven" },
    role: { zh: "登山寶訓（6:5-15）", en: "The Sermon on the Mount (6:5–15)" },
    ch: [6],
    passages: ["6:5-15"],
    moves: [
      { zh: "進你的內屋", en: "Into Your Inner Room", ref: "6:6",
        dzh: "你禱告的時候，要進你的內屋，關上門，禱告你在暗中的父。",
        den: "“When you pray, enter into your inner room, shut your door, and pray to your Father who is in secret.”" },
      { zh: "我們在天上的父", en: "Our Father in Heaven", ref: "6:9-10",
        dzh: "我們在天上的父：願人都尊你的名為聖；願你的國降臨；願你的旨意行在地上。",
        den: "“Our Father in heaven, may your name be kept holy. Let your Kingdom come. Let your will be done, as in heaven, so on earth.”" }
    ],
    traits: [
      { k: "strength", zh: "簡短，卻包括天上與地上的所需", en: "Short, yet covers needs of heaven and of earth" },
      { k: "identity", zh: "用「我們」，不用「我」", en: "“Our,” not “my”" }
    ],
    lesson: {
      zh: "耶穌先說不要像假冒為善的人愛站在街口禱告（6:5），也不要用許多重複話（6:7），然後給一個簡短的樣式（6:9-13）。祈禱的第一個詞是「我們在天上的父」，最後附上一句：你們饒恕人，天父也饒恕你們（6:14）。",
      en: "Jesus first says not to pray like hypocrites on street corners (6:5) or with vain repetition (6:7), then gives a short pattern (6:9–13). Its first word is “Our Father in heaven,” and he adds at the end: if you forgive others, your Father will forgive you (6:14)."
    },
    quote: { ref: "6:9",
      zh: "我們在天上的父：願人都尊你的名為聖",
      en: "Our Father in heaven, may your name be kept holy." },
    keyVerses: ["6:5", "6:6", "6:8", "6:9", "6:10", "6:11", "6:12", "6:13"],
    intro: {
      zh: "主禱文有六項請求：願人都尊你的名為聖；願你的國降臨；願你的旨意行在地上，如同行在天上（前三項關乎神）；我們日用的飲食，今日賜給我們；免我們的債，如同我們免了人的債；不叫我們遇見試探，救我們脫離兇惡（後三項關乎我們）。「兇惡」和合本註作「惡者」。「因為國度、權柄、榮耀，全是你的，直到永遠」一句，和合本註說有古卷沒有。",
      en: "The Lord’s Prayer has six petitions: may your name be kept holy; let your Kingdom come; let your will be done on earth as in heaven (the first three concern God); give us today our daily bread; forgive us our debts as we forgive our debtors; bring us not into temptation, but deliver us from the evil one (the last three concern us). The CUV note gives “the evil one” for “兇惡.” The CUV note on “For yours is the Kingdom, the power, and the glory forever” says some ancient manuscripts lack it."
    },
    tip: {
      zh: "「因為國度、權柄、榮耀……」的結尾，有些古卷沒有；路加福音 11:2-4 的版本較短。",
      en: "The ending “For yours is the Kingdom…” is missing in some manuscripts; Luke 11:2–4 has a shorter version."
    },
    related: ["beatitudes", "birds_and_lilies", "unforgiving_servant", "gethsemane"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "birds_and_lilies", book: "matthew", no: 14, kind: "other", type: "harvest", rarity: 4,
    zh: "天上的飛鳥，野地的百合", en: "Birds and Lilies",
    tag: { zh: "不要為明天憂慮", en: "Don’t Be Anxious for Tomorrow" },
    role: { zh: "登山寶訓（6:25-34）", en: "The Sermon on the Mount (6:25–34)" },
    ch: [6],
    passages: ["6:25-34"],
    moves: [
      { zh: "看那天上的飛鳥", en: "Look at the Birds", ref: "6:26",
        dzh: "那天上的飛鳥，也不種，也不收；你們的天父尚且養活牠，你們不比飛鳥貴重得多嗎？",
        den: "The birds neither sow nor reap; “Your heavenly Father feeds them. Aren’t you of much more value than they?”" },
      { zh: "先求他的國", en: "Seek First His Kingdom", ref: "6:33",
        dzh: "你們要先求他的國和他的義，這些東西都要加給你們了。",
        den: "“But seek first God’s Kingdom, and his righteousness; and all these things will be given to you as well.”" }
    ],
    traits: [
      { k: "strength", zh: "用看得見的鳥和花來說服", en: "Persuades with birds and flowers you can see" },
      { k: "weakness", zh: "「你們這小信的人哪」（6:30）", en: "“You of little faith” (6:30)" }
    ],
    lesson: {
      zh: "耶穌的論證是「何況」：鳥尚且被養活，花尚且被妝飾，「何況你們呢」（6:26、30）。他不是說不用工作，而是說憂慮不會使壽數多加一刻（6:27）；先求神的國，其餘的會「加給」（6:33）。",
      en: "Jesus argues by “how much more”: if birds are fed and flowers clothed, “how much more you” (6:26, 30). He does not say don’t work, but that anxiety cannot add a moment to life (6:27); seek God’s Kingdom first and the rest will be “given” (6:33)."
    },
    quote: { ref: "6:26",
      zh: "你們的天父尚且養活牠",
      en: "Your heavenly Father feeds them." },
    keyVerses: ["6:25", "6:26", "6:28", "6:29", "6:30", "6:33", "6:34"],
    intro: {
      zh: "「所以我告訴你們，不要為生命憂慮吃甚麼，喝甚麼；為身體憂慮穿甚麼。」（6:25）耶穌指著天上的飛鳥（6:26）和野地的百合花（6:28-29）：「就是所羅門極榮華的時候，他所穿戴的，還不如這花一朵呢！」6:32 說這些都是外邦人所求的，天父知道你們需要。6:34 的結論：「不要為明天憂慮，因為明天自有明天的憂慮；一天的難處一天當就夠了。」",
      en: "“Therefore I tell you, don’t be anxious for your life: what you will eat, or what you will drink; nor yet for your body, what you will wear” (6:25). Jesus points to the birds of the sky (6:26) and the lilies of the field (6:28–29): “even Solomon in all his glory was not dressed like one of these.” Verse 32 says the Gentiles seek all these things, and your Father knows you need them. Verse 34 concludes: “Don’t be anxious for tomorrow, for tomorrow will be anxious for itself. Each day’s own evil is sufficient.”"
    },
    tip: {
      zh: "6:27 的「壽數多加一刻」，和合本註作「身量多加一肘」，原文的「一刻／一肘」有兩種讀法。",
      en: "In 6:27 “add one moment to his lifespan” the CUV note gives “add one cubit to his height”; the Greek word can mean either."
    },
    related: ["lords_prayer", "two_builders", "beatitudes", "jesus"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "two_builders", book: "matthew", no: 15, kind: "other", type: "wisdom", rarity: 4,
    zh: "磐石上的房子與沙土上的房子", en: "The Two Builders",
    tag: { zh: "聽見這話就去行的", en: "Whoever Hears and Does" },
    role: { zh: "登山寶訓的結尾（7:24-27）", en: "The close of the Sermon on the Mount (7:24–27)" },
    ch: [7],
    passages: ["7:24-27"],
    moves: [
      { zh: "蓋在磐石上", en: "On the Rock", ref: "7:24-25",
        dzh: "凡聽見我這話就去行的，好比聰明人把房子蓋在磐石上；雨淋水沖，房子總不倒塌。",
        den: "Whoever hears these words and does them is like a wise man who built on the rock; rain and flood came, and it did not fall." },
      { zh: "蓋在沙土上", en: "On the Sand", ref: "7:26-27",
        dzh: "聽見不去行的，好比無知的人把房子蓋在沙土上；風雨一來，房子倒塌，並且倒塌得很大。",
        den: "Whoever hears and doesn’t do them is like a foolish man who built on sand; when the storm came, it fell, and great was its fall." }
    ],
    traits: [
      { k: "strength", zh: "兩座房子外表可以一樣", en: "The two houses might look the same" },
      { k: "weakness", zh: "「聽見不去行」", en: "“Hears and doesn’t do”" }
    ],
    lesson: {
      zh: "兩個人都聽見了，兩座房子也都遇到同樣的風雨；差別只在根基，也就是聽見之後有沒有去行（7:24、26）。登山寶訓的結尾不是新的教訓，而是一個問題：你要怎樣處理你聽見的話。",
      en: "Both men heard, and both houses met the same storm; the difference is the foundation — whether they did what they heard (7:24, 26). The sermon ends not with new teaching but with a question: what will you do with what you heard?"
    },
    quote: { ref: "7:24",
      zh: "凡聽見我這話就去行的，好比一個聰明人，把房子蓋在磐石上",
      en: "a wise man, who built his house on a rock" },
    keyVerses: ["7:7", "7:12", "7:13", "7:21", "7:24", "7:25", "7:26", "7:27", "7:28"],
    intro: {
      zh: "登山寶訓的最後一個比喻：聰明人把房子蓋在磐石上，無知的人蓋在沙土上（7:24-27）。7:28-29 記著：「耶穌說完了這些話，眾人都希奇他的教訓；因為他教訓他們，正像有權柄的人，不像他們的文士。」同一段落還有「所以無論何事，你們願意人怎樣待你們，你們也要怎樣待人」（7:12）和「你們要進窄門」（7:13）。",
      en: "The last parable of the Sermon on the Mount: the wise man builds on the rock and the foolish man on sand (7:24–27). Verses 28–29 record: “When Jesus had finished these words, the multitudes were astonished at his teaching, for he taught them as having authority, and not as their scribes.” Within the same section are “Therefore whatever you desire for men to do to you, you shall also do to them” (7:12) and “Enter in by the narrow gate” (7:13)."
    },
    tip: {
      zh: "「磐石」在這裡指耶穌的話（7:24）；與 16:18 的「磐石」是兩個不同的場合。",
      en: "“Rock” here means Jesus’s words (7:24); it is a different setting from the “rock” of 16:18."
    },
    related: ["beatitudes", "salt_and_light", "birds_and_lilies", "simon_peter"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "centurion_faith", book: "matthew", no: 16, kind: "person", type: "faith", rarity: 4,
    zh: "羅馬的百夫長", en: "The Roman Centurion",
    tag: { zh: "只要你說一句話", en: "Just Say the Word" },
    role: { zh: "以色列中也沒遇見過的信心（8:5-13）", en: "A faith not found even in Israel (8:5–13)" },
    ch: [8],
    passages: ["8:5-13"],
    moves: [
      { zh: "我不敢當", en: "I’m Not Worthy", ref: "8:8",
        dzh: "主啊，你到我舍下，我不敢當；只要你說一句話，我的僕人就必好了。",
        den: "“Lord, I’m not worthy for you to come under my roof. Just say the word, and my servant will be healed.”" },
      { zh: "這麼大的信心", en: "Such Great Faith", ref: "8:10",
        dzh: "耶穌希奇，說：這麼大的信心，就是在以色列中，我也沒有遇見過。",
        den: "Jesus marveled: “I haven’t found so great a faith, not even in Israel.”" }
    ],
    traits: [
      { k: "strength", zh: "懂得「權柄」，所以懂得「一句話」", en: "Understands authority, so understands “just a word”" },
      { k: "identity", zh: "外邦人，也是軍官", en: "A Gentile, and an officer" }
    ],
    lesson: {
      zh: "百夫長為一個僕人求醫治，並說自己不配（8:6、8）。他用軍人的權柄來理解耶穌的話：對這個說去，他就去（8:9）。耶穌稱讚這是以色列中沒有遇見的信心，並說將有許多人從東從西來坐席（8:10-11）。",
      en: "The centurion asks healing for a servant and says he is not worthy (8:6, 8). He understands Jesus’s word through military authority: he says “Go” and one goes (8:9). Jesus calls it a faith not found in Israel and says many will come from east and west to sit at the table (8:10–11)."
    },
    quote: { ref: "8:8",
      zh: "只要你說一句話，我的僕人就必好了",
      en: "Just say the word, and my servant will be healed." },
    keyVerses: ["8:5", "8:6", "8:8", "8:9", "8:10", "8:13"],
    intro: {
      zh: "耶穌進了迦百農，有一個百夫長來求他：「主啊，我的僕人害癱瘓病，躺在家裡，甚是疼苦。」（8:6）耶穌說他要去醫治，百夫長卻說「只要你說一句話，我的僕人就必好了」（8:8）。耶穌對他說：「照你的信心，給你成全了。」那時他的僕人就好了（8:13）。路加福音 7 章也有這個故事，細節不同。",
      en: "When Jesus enters Capernaum a centurion comes to him: “Lord, my servant lies in the house paralyzed, grievously tormented” (8:6). Jesus says he will come and heal him, but the centurion answers, “Just say the word, and my servant will be healed” (8:8). Jesus says, “Let it be done for you as you have believed,” and the servant was healed in that hour (8:13). Luke 7 also has the story, with different details."
    },
    tip: {
      zh: "百夫長是親自來求（馬太），還是託猶太長老來求（路加福音 7），兩個福音書不同。",
      en: "The centurion comes in person (Matthew) or sends Jewish elders (Luke 7); the two Gospels differ."
    },
    related: ["matthew_tax_collector", "canaanite_woman", "walking_on_water", "jesus"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "matthew_tax_collector", book: "matthew", no: 17, kind: "person", type: "scheme", rarity: 4,
    zh: "稅吏馬太", en: "Matthew the Tax Collector",
    tag: { zh: "你跟從我來", en: "Follow Me" },
    role: { zh: "稅吏・十二使徒之一", en: "Tax collector · one of the Twelve" },
    ch: [9, 10],
    passages: ["9:9-13", "10:3"],
    moves: [
      { zh: "他就起來跟從", en: "He Rose and Followed", ref: "9:9",
        dzh: "耶穌看見一個人名叫馬太，坐在稅關上，對他說：你跟從我來。他就起來跟從了耶穌。",
        den: "Jesus sees a man called Matthew sitting at the tax office and says, “Follow me.” He got up and followed him." },
      { zh: "我來本不是召義人", en: "Not the Righteous but Sinners", ref: "9:13",
        dzh: "法利賽人質問為何與稅吏罪人吃飯；耶穌說：我來本不是召義人，乃是召罪人。",
        den: "When Pharisees ask why he eats with tax collectors and sinners, Jesus says, “I came not to call the righteous, but sinners.”" }
    ],
    traits: [
      { k: "strength", zh: "離開稅關，成為十二人之一（10:3）", en: "Leaves the tax office and joins the Twelve (10:3)" },
      { k: "weakness", zh: "稅吏被視為與外邦人同夥", en: "Tax collectors were treated as collaborators" }
    ],
    lesson: {
      zh: "稅吏幫羅馬收稅，被同胞看輕。耶穌叫他，他就起來；然後耶穌在他家（或耶穌的屋裡，9:10）與稅吏罪人同席，並引用何西阿書：「我喜愛憐恤，不喜愛祭祀」（9:13）。",
      en: "A tax collector collects for Rome and is despised by his own people. Jesus calls him and he rises; then at the meal (9:10) with tax collectors and sinners Jesus quotes Hosea: “I desire mercy, and not sacrifice” (9:13)."
    },
    quote: { ref: "9:13",
      zh: "我來本不是召義人，乃是召罪人",
      en: "I came not to call the righteous, but sinners to repentance" },
    keyVerses: ["9:9", "9:10", "9:11", "9:12", "9:13", "10:3"],
    intro: {
      zh: "耶穌「看見一個人名叫馬太，坐在稅關上，就對他說：你跟從我來。他就起來跟從了耶穌。」（9:9）接著是一次聚餐：「有好些稅吏和罪人來，與耶穌和他的門徒一同坐席」（9:10）。法利賽人質問，耶穌說「康健的人用不著醫生，有病的人才用得著」（9:12），又叫他們去揣摩何西阿書 6:6。10:3 的十二使徒名單裡，這人被稱為「稅吏馬太」。馬太福音本身沒有署名，傳統上認為作者就是他。",
      en: "Jesus “saw a man called Matthew sitting at the tax collection office. He said to him, ‘Follow me.’ He got up and followed him” (9:9). Then comes a meal: “many tax collectors and sinners came and sat down with Jesus and his disciples” (9:10). The Pharisees object, and Jesus says, “Those who are healthy have no need for a physician, but those who are sick do” (9:12), telling them to go and learn what Hosea 6:6 means. In the list of the Twelve (10:3) he is called “Matthew the tax collector.” The book itself is unsigned; tradition says he is its author."
    },
    tip: {
      zh: "馬可福音 2:14 與路加福音 5:27 稱這位稅吏為「利未」；是同一人的兩個名字，還是兩個人，有不同說法。",
      en: "Mark 2:14 and Luke 5:27 call this tax collector “Levi”; whether that is a second name for the same man or a different man is debated."
    },
    related: ["fishers_of_men", "twelve_sent", "centurion_faith", "jesus"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "twelve_sent", book: "matthew", no: 18, kind: "other", type: "faith", rarity: 3,
    zh: "差遣十二門徒", en: "The Twelve Sent Out",
    tag: { zh: "如同羊進入狼群", en: "Sheep Among Wolves" },
    role: { zh: "第二大段教訓（第 10 章）", en: "The second discourse (ch 10)" },
    ch: [10],
    passages: ["10:1-16"],
    moves: [
      { zh: "十二使徒的名", en: "The Twelve Named", ref: "10:2-4",
        dzh: "十二使徒：西門彼得、安得烈、雅各、約翰、腓力、巴多羅買、多馬、稅吏馬太……賣耶穌的加略人猶大。",
        den: "The twelve: Simon Peter, Andrew, James, John, Philip, Bartholomew, Thomas, Matthew the tax collector… and Judas Iscariot, who betrayed him." },
      { zh: "靈巧像蛇，馴良像鴿子", en: "Wise as Serpents, Harmless as Doves", ref: "10:16",
        dzh: "我差你們去，如同羊進入狼群；所以你們要靈巧像蛇，馴良像鴿子。",
        den: "“I send you out as sheep among wolves. Therefore be wise as serpents, and harmless as doves.”" }
    ],
    traits: [
      { k: "strength", zh: "名單裡有稅吏、漁夫、奮銳黨的人", en: "The list has a tax collector, fishermen and a Zealot" },
      { k: "weakness", zh: "名單最後是「賣耶穌的加略人猶大」", en: "The list ends with “Judas Iscariot, who betrayed him”" }
    ],
    lesson: {
      zh: "這次差遣只到「以色列家迷失的羊」那裡（10:5-6），並預告逼迫（10:16-23）。第 10 章末後說：「凡在人面前認我的，我在我天上的父面前也必認他」（10:32）。",
      en: "This mission goes only to “the lost sheep of the house of Israel” (10:5–6) and foretells persecution (10:16–23). The chapter ends: “Everyone who confesses me before men, him will I also confess before my Father who is in heaven” (10:32)."
    },
    quote: { ref: "10:16",
      zh: "所以你們要靈巧像蛇，馴良像鴿子",
      en: "be wise as serpents, and harmless as doves" },
    keyVerses: ["10:1", "10:2", "10:5", "10:7", "10:16", "10:32"],
    intro: {
      zh: "耶穌叫了十二個門徒來，給他們趕鬼和醫治的權柄（10:1）。名單分六組成對（10:2-4），首位是彼得，末位是猶大。10:5-6 吩咐：「外邦人的路，你們不要走；撒馬利亞人的城，你們不要進；寧可往以色列家迷失的羊那裡去。」10:7-8 是任務：傳「天國近了」，醫病，潔淨長大痲瘋的，趕鬼，並要「白白地得來，也要白白地捨去」。",
      en: "Jesus calls the twelve disciples and gives them authority to cast out unclean spirits and heal (10:1). The list is in six pairs (10:2–4), Peter first and Judas last. Verses 5–6 charge them: “Don’t go among the Gentiles, and don’t enter into any city of the Samaritans. Rather, go to the lost sheep of the house of Israel.” Verses 7–8 are the task: preach “the Kingdom of Heaven is at hand,” heal the sick, cleanse lepers, cast out demons, and “Freely you received, so freely give.”"
    },
    tip: {
      zh: "10:5-6 的範圍限於以色列；28:19 的大使命則是「萬民」，兩處的差別，是全書的一條線索。",
      en: "The scope of 10:5–6 is limited to Israel, while the great commission of 28:19 is “all nations”; the difference is one thread of the whole book."
    },
    related: ["fishers_of_men", "matthew_tax_collector", "judas_iscariot", "great_commission"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "come_to_me", book: "matthew", no: 19, kind: "other", type: "love", rarity: 5,
    zh: "到我這裡來，得安息", en: "Come to Me and Rest",
    tag: { zh: "我的軛是容易的，我的擔子是輕省的", en: "My Yoke Is Easy, My Burden Light" },
    role: { zh: "給勞苦擔重擔的人（11:25-30）", en: "To the weary and burdened (11:25–30)" },
    ch: [11],
    passages: ["11:25-30"],
    moves: [
      { zh: "凡勞苦擔重擔的人", en: "All Who Labor", ref: "11:28",
        dzh: "凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。",
        den: "“Come to me, all you who labor and are heavily burdened, and I will give you rest.”" },
      { zh: "負我的軛", en: "Take My Yoke", ref: "11:29-30",
        dzh: "我心裡柔和謙卑，你們當負我的軛，學我的樣式；我的軛是容易的，我的擔子是輕省的。",
        den: "“Take my yoke upon you, and learn from me, for I am gentle and humble in heart… my yoke is easy, and my burden is light.”" }
    ],
    traits: [
      { k: "strength", zh: "邀請的條件只有「勞苦擔重擔」", en: "The only condition is being weary and burdened" },
      { k: "identity", zh: "「心裡柔和謙卑」", en: "“Gentle and humble in heart”" }
    ],
    lesson: {
      zh: "「安息」被說了兩次（11:28、29）。耶穌沒有說「卸下一切重擔」，而是換軛：把你自己的負擔換成一副「容易」的軛，與他同負。",
      en: "“Rest” is said twice (11:28, 29). Jesus does not say “lay down every burden” but offers a yoke: swap your burden for an “easy” yoke, carried with him."
    },
    quote: { ref: "11:28",
      zh: "凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息",
      en: "Come to me, all you who labor and are heavily burdened, and I will give you rest." },
    keyVerses: ["11:25", "11:27", "11:28", "11:29", "11:30"],
    intro: {
      zh: "在城邑不悔改的責備之後（11:20-24），耶穌讚美父把這些事向嬰孩顯明（11:25-26），然後說：「凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。我心裡柔和謙卑，你們當負我的軛，學我的樣式；這樣，你們心裡就必得享安息。因為我的軛是容易的，我的擔子是輕省的。」（11:28-30）「軛」是套在牲畜頸上的木架；猶太拉比也用「軛」比喻對律法的順服。",
      en: "After rebuking the unrepentant towns (11:20–24), Jesus praises the Father for revealing these things to infants (11:25–26) and then says: “Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and humble in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light” (11:28–30). A “yoke” is the wooden frame on an animal’s neck; rabbis also used “yoke” for submission to the law."
    },
    tip: {
      zh: "這段只有馬太福音有；「軛」可指跟從耶穌，也可與當時猶太人說的「律法的軛」對照。",
      en: "This passage is found only in Matthew; “yoke” can mean following Jesus and can be compared with the “yoke of the law” in Jewish usage of the time."
    },
    related: ["beatitudes", "sign_of_jonah", "jesus", "lords_prayer"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "sign_of_jonah", book: "matthew", no: 20, kind: "other", type: "vision", rarity: 3,
    zh: "約拿的神蹟", en: "The Sign of Jonah",
    tag: { zh: "在地裡頭三日三夜", en: "Three Days and Three Nights in the Earth" },
    role: { zh: "對求神蹟的回答（12:38-42）", en: "The answer to the demand for a sign (12:38–42)" },
    ch: [12],
    passages: ["12:38-42"],
    moves: [
      { zh: "求神蹟的世代", en: "A Generation Seeking a Sign", ref: "12:39",
        dzh: "一個邪惡淫亂的世代求看神蹟，除了先知約拿的神蹟以外，再沒有神蹟給他們看。",
        den: "“An evil and adulterous generation seeks after a sign, but no sign will be given to it but the sign of Jonah the prophet.”" },
      { zh: "三日三夜", en: "Three Days and Nights", ref: "12:40",
        dzh: "約拿三日三夜在大魚肚腹中，人子也要這樣三日三夜在地裡頭。",
        den: "“As Jonah was three days and three nights in the belly of the whale, so will the Son of Man be three days and three nights in the heart of the earth.”" }
    ],
    traits: [
      { k: "strength", zh: "用舊約的人物作對照", en: "Uses an Old Testament figure as the contrast" },
      { k: "weakness", zh: "文士和法利賽人已經看見許多神蹟（12:38）", en: "The scribes and Pharisees had already seen many signs (12:38)" }
    ],
    lesson: {
      zh: "耶穌指向約拿的兩件事：他在魚肚中三日三夜（12:40），和尼尼微人因他的傳講而悔改（12:41）。結論是「看哪，在這裡有一人比約拿更大」（12:41）。",
      en: "Jesus points to two things in Jonah: his three days and nights in the fish (12:40), and Nineveh’s repentance at his preaching (12:41). The conclusion: “behold, someone greater than Jonah is here” (12:41)."
    },
    quote: { ref: "12:40",
      zh: "約拿三日三夜在大魚肚腹中，人子也要這樣三日三夜在地裡頭",
      en: "as Jonah was three days and three nights in the belly of the whale" },
    keyVerses: ["12:38", "12:39", "12:40", "12:41", "12:42"],
    intro: {
      zh: "有幾個文士和法利賽人對耶穌說：「夫子，我們願意你顯個神蹟給我們看。」（12:38）耶穌回答：邪惡淫亂的世代求神蹟，只有約拿的神蹟（12:39）。約拿在魚腹三日三夜，人子也要在地裡頭三日三夜（12:40）。12:41-42：尼尼微人要在審判時起來定這世代的罪，因為他們聽了約拿所傳的就悔改了；南方的女王也要定這世代的罪，她從地極而來聽所羅門的智慧。「大魚」（12:40），WEB 作 “whale”，希臘文指大的海中生物。",
      en: "Some scribes and Pharisees say to Jesus, “Teacher, we want to see a sign from you” (12:38). He answers that an evil and adulterous generation seeks a sign, and only the sign of Jonah will be given (12:39). Jonah was three days and nights in the fish’s belly, and the Son of Man will be three days and nights in the heart of the earth (12:40). Verses 41–42: the men of Nineveh will rise up at the judgment and condemn this generation, because they repented at Jonah’s preaching; the queen of the south will also condemn it, for she came from the ends of the earth to hear Solomon’s wisdom. “Great fish” (12:40) is “whale” in the WEB, the Greek meaning a large sea creature."
    },
    tip: {
      zh: "「三日三夜」如何與「第三日復活」對得上，是常被討論的問題；古時算日常把一整天的一部分也算作一日。",
      en: "How “three days and three nights” relates to “raised on the third day” is a much-discussed question; in that era part of a day was commonly counted as a day."
    },
    related: ["come_to_me", "sower_parable", "crucifixion", "empty_tomb"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "sower_parable", book: "matthew", no: 21, kind: "other", type: "harvest", rarity: 4,
    zh: "撒種的比喻", en: "The Parable of the Sower",
    tag: { zh: "四種土，三種倍數", en: "Four Soils, Three Yields" },
    role: { zh: "天國比喻的開頭（13:1-23）", en: "The first parable of the Kingdom (13:1–23)" },
    ch: [13],
    passages: ["13:1-23"],
    moves: [
      { zh: "四種土", en: "Four Soils", ref: "13:3-7",
        dzh: "種子落在路旁被鳥吃了，落在石頭地上枯乾，落在荊棘裡被擠住。",
        den: "Seed fell on the path and birds ate it, on rocky ground and withered, among thorns and was choked." },
      { zh: "好土的收成", en: "The Good Soil", ref: "13:8",
        dzh: "又有落在好土裡的，就結實，有一百倍的，有六十倍的，有三十倍的。",
        den: "Others fell on good soil, and yielded fruit: some one hundred times as much, some sixty, and some thirty." }
    ],
    traits: [
      { k: "strength", zh: "收成遠超過撒下的", en: "The harvest far outweighs the sowing" },
      { k: "weakness", zh: "三種土都沒有結果", en: "Three soils bear no fruit" }
    ],
    lesson: {
      zh: "比喻的重點是土，不是種子也不是撒種的：同樣的話，在四種心裡有四種結果（13:18-23）。好土的結實有一百、六十、三十倍（13:8），收成各有不同。",
      en: "The focus is the soil, not the seed or the sower: the same word has four outcomes in four hearts (13:18–23). The good soil yields a hundred, sixty or thirty times (13:8) — the yields differ."
    },
    quote: { ref: "13:8",
      zh: "又有落在好土裡的，就結實，有一百倍的，有六十倍的，有三十倍的",
      en: "Others fell on good soil, and yielded fruit" },
    keyVerses: ["13:1", "13:3", "13:8", "13:11", "13:18", "13:23"],
    intro: {
      zh: "那一天，耶穌從房子裡出來，坐在海邊，因為聚集的人很多，他就上船坐下，眾人站在岸上（13:1-2）。他用比喻教訓許多事（13:3）。門徒問為甚麼用比喻（13:10），耶穌說：「天國的奧祕只叫你們知道，不叫他們知道。」（13:11）後來又為門徒解釋這個比喻（13:18-23）。第 13 章還有稗子、芥菜種、麵酵、寶貝、珠子、網的比喻。",
      en: "That same day Jesus went out of the house and sat by the sea; because large crowds gathered he got into a boat and sat down while the crowd stood on the shore (13:1–2). He taught many things in parables (13:3). The disciples ask why he uses parables (13:10), and he says, “To you it is given to know the mysteries of the Kingdom of Heaven, but it is not given to them” (13:11). Later he explains this parable to the disciples (13:18–23). Chapter 13 also has the tares, mustard seed, yeast, treasure, pearl and net."
    },
    tip: {
      zh: "13:10-17 說明比喻的目的，和以賽亞書 6:9-10 的引用，是常被討論的段落。",
      en: "13:10–17, on the purpose of parables and the citation of Isaiah 6:9–10, is a much-discussed passage."
    },
    related: ["treasure_and_pearl", "sign_of_jonah", "come_to_me", "jesus"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "treasure_and_pearl", book: "matthew", no: 22, kind: "other", type: "harvest", rarity: 3,
    zh: "藏在地裡的寶貝，重價的珠子", en: "The Hidden Treasure and the Pearl",
    tag: { zh: "歡歡喜喜地變賣一切", en: "In His Joy, He Sells All" },
    role: { zh: "天國的比喻（13:44-46）", en: "Parables of the Kingdom (13:44–46)" },
    ch: [13],
    passages: ["13:44-46"],
    moves: [
      { zh: "藏在地裡的寶貝", en: "Treasure in the Field", ref: "13:44",
        dzh: "天國好像寶貝藏在地裡，人遇見了就歡歡喜喜地去變賣一切所有的，買這塊地。",
        den: "The Kingdom is like treasure hidden in a field; a man finds it and in his joy sells all that he has and buys that field." },
      { zh: "重價的珠子", en: "The Pearl of Great Price", ref: "13:45-46",
        dzh: "買賣人尋找好珠子，遇見一顆重價的，就去變賣他一切所有的，買了這顆珠子。",
        den: "A merchant seeking fine pearls, finding one of great price, sells all he has and buys it." }
    ],
    traits: [
      { k: "strength", zh: "「歡歡喜喜」，不是被迫", en: "“In his joy,” not forced" },
      { k: "identity", zh: "一個是意外遇見，一個是尋找而得", en: "One is found by chance, the other by seeking" }
    ],
    lesson: {
      zh: "兩個比喻是一對：一個人偶然遇見寶貝，一個人尋找而遇見珠子；兩人都是變賣一切。變賣不是犧牲的悲壯，而是因為遇見了更大的（13:44「歡歡喜喜」）。",
      en: "The two parables are a pair: one man comes upon treasure, the other finds a pearl by seeking; both sell everything. The selling is not tragic sacrifice but the result of finding something greater (13:44 “in his joy”)."
    },
    quote: { ref: "13:44",
      zh: "歡歡喜喜地去變賣一切所有的，買這塊地",
      en: "In his joy, he goes and sells all that he has, and buys that field." },
    keyVerses: ["13:31", "13:33", "13:44", "13:45", "13:46", "13:47"],
    intro: {
      zh: "「天國好像寶貝藏在地裡，人遇見了就把它藏起來，歡歡喜喜地去變賣一切所有的，買這塊地。天國又好像買賣人尋找好珠子，遇見一顆重價的珠子，就去變賣他一切所有的，買了這顆珠子。」（13:44-46）同一章裡，13:31-33 的芥菜種和麵酵，是天國從小到大的比喻；13:47-50 的網，是分別好壞的比喻。",
      en: "“Again, the Kingdom of Heaven is like treasure hidden in the field, which a man found, and hid. In his joy, he goes and sells all that he has, and buys that field. Again, the Kingdom of Heaven is like a man who is a merchant seeking fine pearls, who having found one pearl of great price, he went and sold all that he had, and bought it” (13:44–46). In the same chapter the mustard seed and yeast (13:31–33) picture the Kingdom growing from small to great; the net (13:47–50) pictures the separating of good from bad."
    },
    tip: {
      zh: "「把它藏起來」（13:44）的人在做法上算不算誠實，不是比喻的重點；比喻說的是價值。",
      en: "Whether the man’s “hiding it” (13:44) was honest is not the point of the parable; it is about value."
    },
    related: ["sower_parable", "come_to_me", "talents", "jesus"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "walking_on_water", book: "matthew", no: 23, kind: "other", type: "faith", rarity: 4,
    zh: "在水面上行走", en: "Walking on the Water",
    tag: { zh: "你這小信的人哪，為甚麼疑惑呢", en: "You of Little Faith, Why Did You Doubt?" },
    role: { zh: "夜裡的風浪（14:22-33）", en: "A night storm (14:22–33)" },
    ch: [14],
    passages: ["14:22-33"],
    moves: [
      { zh: "請叫我走到你那裡去", en: "Command Me to Come", ref: "14:28-29",
        dzh: "彼得說：主，如果是你，請叫我從水面上走到你那裡去。耶穌說：你來吧。",
        den: "Peter says, “Lord, if it is you, command me to come to you on the waters.” He says, “Come!”" },
      { zh: "主啊，救我", en: "Lord, Save Me", ref: "14:30-31",
        dzh: "彼得見風甚大就害怕，喊著說：主啊，救我！耶穌趕緊伸手拉住他。",
        den: "Peter saw the wind, was afraid, and cried out, “Lord, save me!” Immediately Jesus stretched out his hand and took hold of him." }
    ],
    traits: [
      { k: "strength", zh: "彼得是唯一下船的人", en: "Peter is the only one who steps out of the boat" },
      { k: "weakness", zh: "看見風，就害怕（14:30）", en: "Sees the wind and is afraid (14:30)" }
    ],
    lesson: {
      zh: "彼得的話裡有「如果是你」，也有「請叫我」；他在水面上走了幾步，直到看見風。沉下去的時候，他只喊了三個字：「主啊，救我！」耶穌「趕緊」伸手（14:30-31）。",
      en: "Peter’s words include “if it is you” and “command me”; he walks a few steps until he sees the wind. As he sinks he cries three words: “Lord, save me!” Jesus reaches out “immediately” (14:30–31)."
    },
    quote: { ref: "14:31",
      zh: "你這小信的人哪，為甚麼疑惑呢",
      en: "You of little faith, why did you doubt?" },
    keyVerses: ["14:22", "14:25", "14:27", "14:28", "14:29", "14:30", "14:31", "14:33"],
    intro: {
      zh: "耶穌餵飽五千人之後（14:13-21），叫門徒先上船，自己上山禱告（14:22-23）。夜裡船在海中，被浪搖撼，他在夜裡四更天，在海面上走，往門徒那裡去（14:24-25）。門徒以為是鬼怪，耶穌說：「你們放心，是我，不要怕！」（14:27）彼得下船走向他，又因風而沉。他們上了船，風就住了，船上的人拜他，說：「你真是神的兒子了。」（14:33）",
      en: "After feeding the five thousand (14:13–21), Jesus makes the disciples get into the boat while he goes up the mountain to pray (14:22–23). At night the boat is far out and tossed by waves; in the fourth watch of the night he comes to them, walking on the sea (14:24–25). They think it is a ghost, and he says, “Cheer up! It is I! Don’t be afraid” (14:27). Peter steps out toward him and sinks as the wind rises. When they get into the boat the wind ceases, and those in the boat worship him: “You are truly the Son of God” (14:33)."
    },
    tip: {
      zh: "彼得下水走路的記載只有馬太福音有；馬可福音 6 與約翰福音 6 也記耶穌水面行走，但沒有彼得這段。",
      en: "Peter’s walk on the water is found only in Matthew; Mark 6 and John 6 also record Jesus walking on the sea, without the Peter part."
    },
    related: ["simon_peter", "fishers_of_men", "centurion_faith", "peters_denial"]
  },

  // ── 024 ──────────────────────────────────────────────────────────────────
  {
    id: "canaanite_woman", book: "matthew", no: 24, kind: "person", type: "faith", rarity: 3,
    zh: "迦南婦人", en: "The Canaanite Woman",
    tag: { zh: "狗也吃主人桌子上掉下來的碎渣兒", en: "Even the Dogs Eat the Crumbs" },
    role: { zh: "提爾、西頓一帶的外邦母親（15:21-28）", en: "A Gentile mother near Tyre and Sidon (15:21–28)" },
    ch: [15],
    passages: ["15:21-28"],
    moves: [
      { zh: "主啊，可憐我", en: "Lord, Have Mercy", ref: "15:22",
        dzh: "有一個迦南婦人喊著說：主啊，大衛的子孫，可憐我！我女兒被鬼附得甚苦。",
        den: "A Canaanite woman cried out, “Have mercy on me, Lord, son of David! My daughter is severely demon-possessed.”" },
      { zh: "你的信心是大的", en: "Great Is Your Faith", ref: "15:27-28",
        dzh: "婦人說：主啊，不錯；但是狗也吃牠主人桌子上掉下來的碎渣兒。耶穌說：婦人，你的信心是大的！",
        den: "“Yes, Lord, but even the dogs eat the crumbs which fall from their masters’ table.” Jesus answered, “Woman, great is your faith!”" }
    ],
    traits: [
      { k: "strength", zh: "被拒絕了三次，仍然求", en: "Refused three times, still asks" },
      { k: "weakness", zh: "外邦人，也不屬耶穌被差去的對象（15:24）", en: "A Gentile, outside those Jesus says he was sent to (15:24)" }
    ],
    lesson: {
      zh: "耶穌三次的回應都是拒絕或沉默：不回答（15:23）、「我奉差遣不過是到以色列家迷失的羊那裡去」（15:24）、「不好拿兒女的餅丟給狗吃」（15:26）。婦人沒有反駁這個比喻，而是接下去：碎渣兒。結果是耶穌稱讚她的信心（15:28）。",
      en: "Jesus’s three responses are refusal or silence: no answer (15:23), “I wasn’t sent to anyone but the lost sheep of the house of Israel” (15:24), “It is not appropriate to take the children’s bread and throw it to the dogs” (15:26). She does not argue with the image but takes it further: crumbs. Jesus praises her faith (15:28)."
    },
    quote: { ref: "15:28",
      zh: "婦人，你的信心是大的！照你所要的，給你成全了吧",
      en: "Woman, great is your faith! Be it done to you even as you desire." },
    keyVerses: ["15:21", "15:22", "15:24", "15:26", "15:27", "15:28"],
    intro: {
      zh: "耶穌離開那裡，退到推羅、西頓的境內。有一個迦南婦人出來喊說：「主啊，大衛的子孫，可憐我！我女兒被鬼附得甚苦。」（15:22）他一言不答，門徒要他打發她走。他說：「我奉差遣不過是到以色列家迷失的羊那裡去。」（15:24）婦人來拜他，說「主啊，幫助我」；他說「不好拿兒女的餅丟給狗吃」（15:26）。「狗」在這裡用的是指家狗的小稱，語氣與羞辱不同，但這仍是一句難讀的話。",
      en: "Jesus withdrew to the district of Tyre and Sidon. A Canaanite woman came out and cried, “Have mercy on me, Lord, son of David! My daughter is severely demon-possessed” (15:22). He answered her not a word, and the disciples asked him to send her away. He said, “I was not sent to anyone but the lost sheep of the house of Israel” (15:24). She came and worshiped him, saying “Lord, help me”; he said, “It is not appropriate to take the children’s bread and throw it to the dogs” (15:26). The word for “dogs” is the diminutive for household dogs, which softens the tone, but it remains a hard saying."
    },
    tip: {
      zh: "耶穌這番話的語氣，是測試她、說出當時的慣用語，還是別的，注釋書有不同說法。",
      en: "Whether Jesus’s words were a test of her, a repetition of a common idiom, or something else, commentaries differ."
    },
    related: ["centurion_faith", "walking_on_water", "twelve_sent", "great_commission"]
  },

  // ── 025 ──────────────────────────────────────────────────────────────────
  {
    id: "simon_peter", book: "matthew", no: 25, kind: "person", type: "faith", rarity: 5,
    zh: "西門彼得", en: "Simon Peter",
    meaning: { zh: "「彼得」意思是「磐石」", en: "“Peter” means “rock”" },
    tag: { zh: "你是基督，是永生神的兒子", en: "You Are the Christ, the Son of the Living God" },
    role: { zh: "漁夫・十二門徒之首（16:13-20）", en: "Fisherman · first of the Twelve (16:13–20)" },
    ch: [4, 14, 16, 26],
    passages: ["4:18-20", "14:28-31", "16:13-23", "26:69-75"],
    moves: [
      { zh: "你是基督", en: "You Are the Christ", ref: "16:16",
        dzh: "耶穌問：你們說我是誰？西門彼得回答：你是基督，是永生神的兒子。",
        den: "Jesus asks, “Who do you say that I am?” Simon Peter answers, “You are the Christ, the Son of the living God.”" },
      { zh: "你是彼得", en: "You Are Peter", ref: "16:18-19",
        dzh: "耶穌說：你是彼得，我要把我的教會建造在這磐石上；我要把天國的鑰匙給你。",
        den: "Jesus says, “You are Peter, and on this rock I will build my assembly… I will give to you the keys of the Kingdom of Heaven.”" }
    ],
    traits: [
      { k: "strength", zh: "第一個說出「你是基督」", en: "The first to say “You are the Christ”" },
      { k: "weakness", zh: "幾節之後被稱為「撒但」（16:23）", en: "A few verses later he is called “Satan” (16:23)" }
    ],
    lesson: {
      zh: "同一章裡，彼得從「你是基督」得到「你是有福的」（16:16-17），到因為攔阻耶穌受苦而被說「撒但，退我後邊去」（16:22-23）。他的認信是真的，他的理解還沒有跟上。",
      en: "In the same chapter Peter goes from “You are the Christ” and “Blessed are you” (16:16–17) to “Get behind me, Satan” for objecting to Jesus’s suffering (16:22–23). His confession is true; his understanding has not caught up."
    },
    quote: { ref: "16:16",
      zh: "你是基督，是永生神的兒子",
      en: "You are the Christ, the Son of the living God." },
    keyVerses: ["4:18", "14:28", "16:16", "16:17", "16:18", "16:19", "16:23", "26:75"],
    intro: {
      zh: "在凱撒利亞腓立比，耶穌問門徒：「你們說我是誰？」（16:15）彼得回答「你是基督，是永生神的兒子」（16:16）。耶穌說：「你是彼得，我要把我的教會建造在這磐石上；陰間的權柄不能勝過他。我要把天國的鑰匙給你。」（16:18-19）這「磐石」指彼得本人、他的認信，或耶穌自己，各教會傳統有不同讀法；經文沒有進一步解釋。",
      en: "At Caesarea Philippi Jesus asks the disciples, “But who do you say that I am?” (16:15). Peter answers, “You are the Christ, the Son of the living God” (16:16). Jesus says, “You are Peter, and on this rock I will build my assembly, and the gates of Hades will not prevail against it. I will give to you the keys of the Kingdom of Heaven” (16:18–19). Whether the “rock” is Peter himself, his confession or Jesus, church traditions read differently; the text does not explain further."
    },
    tip: {
      zh: "「磐石」是彼得、彼得的認信，還是耶穌，各教會傳統有不同讀法。",
      en: "Whether the “rock” is Peter, his confession or Jesus, church traditions read differently."
    },
    related: ["fishers_of_men", "walking_on_water", "transfiguration", "peters_denial"]
  },

  // ── 026 ──────────────────────────────────────────────────────────────────
  {
    id: "transfiguration", book: "matthew", no: 26, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "變像", en: "The Transfiguration",
    tag: { zh: "你們要聽他", en: "Listen to Him" },
    role: { zh: "高山上的顯現（17:1-13）", en: "A glory on the mountain (17:1–13)" },
    ch: [17],
    passages: ["17:1-13"],
    moves: [
      { zh: "臉面明亮如日頭", en: "Face Like the Sun", ref: "17:2",
        dzh: "他在他們面前變了形像，臉面明亮如日頭，衣裳潔白如光。",
        den: "He was transfigured before them. His face shone like the sun, and his garments became as white as the light." },
      { zh: "你們要聽他", en: "Listen to Him", ref: "17:5",
        dzh: "有一朵光明的雲彩遮蓋他們，有聲音說：這是我的愛子，我所喜悅的。你們要聽他！",
        den: "A bright cloud overshadowed them, and a voice said, “This is my beloved Son, in whom I am well pleased. Listen to him.”" }
    ],
    traits: [
      { k: "strength", zh: "摩西和以利亞同時顯現", en: "Moses and Elijah appear together" },
      { k: "identity", zh: "與受洗時同樣的聲音，多了「你們要聽他」", en: "The same voice as at the baptism, with “Listen to him” added" }
    ],
    lesson: {
      zh: "六天前，耶穌第一次預告要受害和被殺（16:21）；六天後，三個門徒看見他的榮光，聽見父親說「你們要聽他」（17:1、5）。下山時，他吩咐「人子從死人中復活以前，不要把你們所看見的告訴人」（17:9）。",
      en: "Six days earlier Jesus first foretold his suffering and death (16:21); six days later three disciples see his glory and hear the Father say “Listen to him” (17:1, 5). Coming down he orders, “Don’t tell anyone what you saw, until the Son of Man has risen from the dead” (17:9)."
    },
    quote: { ref: "17:5",
      zh: "這是我的愛子，我所喜悅的。你們要聽他",
      en: "This is my beloved Son, in whom I am well pleased. Listen to him." },
    keyVerses: ["17:1", "17:2", "17:3", "17:5", "17:9"],
    intro: {
      zh: "過了六天，耶穌帶著彼得、雅各、約翰，悄悄地上了高山（17:1）。他在他們面前變了形像，臉面明亮如日頭，衣裳潔白如光；摩西和以利亞也向他們顯現，同耶穌說話（17:2-3）。彼得提議搭三座棚；說話之間，光明的雲彩遮蓋他們，有聲音說：「這是我的愛子，我所喜悅的。你們要聽他！」（17:5）門徒俯伏在地，極其害怕；耶穌前來摸他們，說「起來，不要害怕」（17:6-7）。",
      en: "After six days Jesus takes Peter, James and John up a high mountain (17:1). He is transfigured before them, his face shining like the sun and his garments white as light; Moses and Elijah appear and talk with him (17:2–3). Peter proposes building three shelters; while he speaks, a bright cloud overshadows them and a voice says, “This is my beloved Son, in whom I am well pleased. Listen to him” (17:5). The disciples fall on their faces, terrified; Jesus touches them and says, “Get up, and don’t be afraid” (17:6–7)."
    },
    tip: {
      zh: "摩西和以利亞在這裡的象徵（律法與先知），是常見的讀法，經文沒有明說。",
      en: "That Moses and Elijah here stand for the Law and the Prophets is a common reading; the text does not say so."
    },
    related: ["baptism_of_jesus", "simon_peter", "gethsemane", "great_commission"]
  },

  // ── 027 ──────────────────────────────────────────────────────────────────
  {
    id: "unforgiving_servant", book: "matthew", no: 27, kind: "other", type: "wisdom", rarity: 4,
    zh: "不肯饒恕的僕人", en: "The Unforgiving Servant",
    tag: { zh: "不是到七次，乃是到七十個七次", en: "Not Seven Times, but Seventy Times Seven" },
    role: { zh: "第四大段教訓（18:21-35）", en: "The fourth discourse (18:21–35)" },
    ch: [18],
    passages: ["18:21-35"],
    moves: [
      { zh: "七十個七次", en: "Seventy Times Seven", ref: "18:21-22",
        dzh: "彼得問：我當饒恕他幾次？到七次可以嗎？耶穌說：不是到七次，乃是到七十個七次。",
        den: "Peter asks, “Until seven times?” Jesus says, “I don’t tell you until seven times, but, until seventy times seven.”" },
      { zh: "你也當憐恤", en: "Shouldn’t You Have Mercy?", ref: "18:32-33",
        dzh: "主人說：你這惡奴才，我既然饒恕了你，你不應當憐恤你的同伴嗎？",
        den: "The master says, “You wicked servant! Shouldn’t you also have had mercy on your fellow servant, even as I had mercy on you?”" }
    ],
    traits: [
      { k: "strength", zh: "主人先赦免了巨額的債（18:27）", en: "The master first cancels a huge debt (18:27)" },
      { k: "weakness", zh: "被免債的人，不免別人的小債", en: "The forgiven man won’t forgive a small debt" }
    ],
    lesson: {
      zh: "比喻對比兩筆債：一千萬銀子，和十兩銀子（18:24、28；原文是一萬他連得和一百德拿利）。得到大赦的人，卻掐住欠他小債的同伴（18:28）。這與主禱文「免我們的債，如同我們免了人的債」（6:12）相呼應。",
      en: "The parable contrasts two debts: ten thousand talents and a hundred denarii (18:24, 28; the CUV renders them “ten million” and “ten taels of silver”). The man forgiven the huge debt chokes a fellow servant who owes him a little (18:28). It echoes the Lord’s Prayer: “Forgive us our debts, as we also forgive our debtors” (6:12)."
    },
    quote: { ref: "18:22",
      zh: "不是到七次，乃是到七十個七次",
      en: "I don’t tell you until seven times, but, until seventy times seven." },
    keyVerses: ["18:21", "18:22", "18:23", "18:27", "18:28", "18:32", "18:33", "18:35"],
    intro: {
      zh: "彼得進前來問：「主啊，我弟兄得罪我，我當饒恕他幾次呢？到七次可以嗎？」（18:21）耶穌說「到七十個七次」（18:22），接著用比喻說明：天國好像一個王要和僕人算賬，有一個欠「一千萬銀子」（原文是一萬他連得，是一個大得還不清的數目）的僕人，求寬容，王就免了他的債（18:23-27）。這僕人出來，遇見欠他「十兩銀子」（原文是一百德拿利，約一百天的工資）的同伴，就揪著他，掐住他的喉嚨，下在監裡（18:28-30）。",
      en: "Peter comes and asks, “Lord, how often shall my brother sin against me, and I forgive him? Until seven times?” (18:21). Jesus says “until seventy times seven” (18:22) and explains with a parable: the Kingdom is like a king who wants to settle accounts with his servants; one who owes ten thousand talents begs for patience, and the king cancels the debt (18:23–27). That servant goes out, meets a fellow servant who owes him a hundred denarii, grabs and chokes him and puts him in prison (18:28–30)."
    },
    tip: {
      zh: "「七十個七次」是表示「無數次」的說法，不是一個要計算的數字。",
      en: "“Seventy times seven” means “without limit,” not a number to count."
    },
    related: ["lords_prayer", "simon_peter", "vineyard_workers", "ten_virgins"]
  },

  // ── 028 ──────────────────────────────────────────────────────────────────
  {
    id: "vineyard_workers", book: "matthew", no: 28, kind: "other", type: "harvest", rarity: 3,
    zh: "葡萄園的工人", en: "The Workers in the Vineyard",
    tag: { zh: "在後的，將要在前", en: "The Last Will Be First" },
    role: { zh: "天國的比喻（20:1-16）", en: "A parable of the Kingdom (20:1–16)" },
    ch: [20],
    passages: ["20:1-16"],
    moves: [
      { zh: "同樣的工錢", en: "The Same Wage", ref: "20:9-10",
        dzh: "約在酉初雇的人來了，各得一錢銀子；先雇的以為必要多得，誰知也是各得一錢。",
        den: "Those hired about the eleventh hour each received a denarius; those hired first thought they would get more, but each received a denarius too." },
      { zh: "你紅了眼嗎", en: "Is Your Eye Evil?", ref: "20:15",
        dzh: "我的東西難道不可隨我的意思用嗎？因為我作好人，你就紅了眼嗎？",
        den: "“Isn’t it lawful for me to do what I want to with what I own? Or is your eye evil, because I am good?”" }
    ],
    traits: [
      { k: "strength", zh: "主人沒有少給任何一個人", en: "The landowner short-changes no one" },
      { k: "weakness", zh: "先來的人看別人所得而不平", en: "The first hired resent what others receive" }
    ],
    lesson: {
      zh: "主人與早上的工人講好一錢銀子，也給了最後的人一錢；他說「我作好人」（20:15）。比喻的重點不是工資制度，而是恩惠：天國的賞賜是出於主人的善。",
      en: "The landowner agrees a denarius with the early workers and gives the last the same; he says, “I am good” (20:15). The parable is not about wage systems but about grace: the Kingdom’s reward comes from the owner’s goodness."
    },
    quote: { ref: "20:15",
      zh: "因為我作好人，你就紅了眼嗎",
      en: "Or is your eye evil, because I am good?" },
    keyVerses: ["20:1", "20:2", "20:9", "20:10", "20:12", "20:15", "20:16"],
    intro: {
      zh: "天國好像家主清早出去雇工人進葡萄園，講定一天一錢銀子（20:1-2）；又在一天中的其他時辰出去雇人（20:3-7）。晚上算工錢，從最後（酉初）雇的開始，各人得一錢；先來的以為要多得，也是一錢，就埋怨（20:9-12）。家主說：「朋友，我不是虧負你。你與我講定的不是一錢銀子嗎？」（20:13）結語：「這樣，那在後的，將要在前；在前的，將要在後了。」（20:16）",
      en: "The Kingdom is like a landowner who goes out early to hire laborers for his vineyard, agreeing a denarius a day (20:1–2); he goes out again at the third, sixth, ninth and eleventh hours (20:3–7). At evening the pay begins with the last, each receiving a denarius; those first hired expect more, receive a denarius too, and grumble (20:9–12). The owner says, “Friend, I am doing you no wrong. Didn’t you agree with me for a denarius?” (20:13). The close: “So the last will be first, and the first last” (20:16)."
    },
    tip: {
      zh: "20:16 末了「被召的人多，選上的人少」，和合本註說有古卷加了這句。",
      en: "The CUV note on 20:16 says some manuscripts add “many are called, but few are chosen.”"
    },
    related: ["unforgiving_servant", "talents", "treasure_and_pearl", "palm_sunday"]
  },

  // ── 029 ──────────────────────────────────────────────────────────────────
  {
    id: "palm_sunday", book: "matthew", no: 29, kind: "other", type: "power", rarity: 4,
    zh: "進耶路撒冷", en: "The Entry into Jerusalem",
    tag: { zh: "和散那歸於大衛的子孫", en: "Hosanna to the Son of David" },
    role: { zh: "最後一週的開始（21:1-11）", en: "The start of the last week (21:1–11)" },
    ch: [21],
    passages: ["21:1-11"],
    moves: [
      { zh: "你的王來到你這裡", en: "Your King Comes", ref: "21:4-5",
        dzh: "這事成就是要應驗先知的話：你的王來到你這裡，是溫柔的，又騎著驢駒子。",
        den: "This was to fulfill the prophet’s word: “Behold, your King comes to you, humble, and riding on a donkey, on a colt.”" },
      { zh: "和散那", en: "Hosanna", ref: "21:9",
        dzh: "眾人喊著說：和散那歸於大衛的子孫！奉主名來的是應當稱頌的！",
        den: "The crowds shouted, “Hosanna to the son of David! Blessed is he who comes in the name of the Lord!”" }
    ],
    traits: [
      { k: "strength", zh: "撒迦利亞書 9:9 的應驗", en: "The fulfillment of Zechariah 9:9" },
      { k: "identity", zh: "「大衛的子孫」", en: "“Son of David”" }
    ],
    lesson: {
      zh: "耶穌以「溫柔的」王的方式進城：驢駒子，不是戰馬（21:5）。眾人鋪衣服、砍樹枝（21:8），喊「和散那」（21:9）；全城震動，問「這是誰」（21:10）。",
      en: "Jesus enters as a “humble” king: a donkey’s colt, not a warhorse (21:5). The crowd spreads cloaks and cuts branches (21:8) and shouts “Hosanna” (21:9); the whole city is stirred and asks, “Who is this?” (21:10)."
    },
    quote: { ref: "21:9",
      zh: "奉主名來的是應當稱頌的",
      en: "Blessed is he who comes in the name of the Lord!" },
    keyVerses: ["21:1", "21:5", "21:8", "21:9", "21:10", "21:11"],
    intro: {
      zh: "他們快到耶路撒冷，到了橄欖山旁的伯法其，耶穌打發兩個門徒去牽一匹驢和驢駒來（21:1-2）。馬太引用撒迦利亞書 9:9：「要對錫安的居民說：看哪，你的王來到你這裡，是溫柔的，又騎著驢，就是騎著驢駒子。」（21:5；見撒迦利亞書卡「騎著驢的王」）眾人喊著說：「和散那歸於大衛的子孫！奉主名來的是應當稱頌的！高高在上和散那！」（21:9）全城的人問：「這是誰？」眾人說：「這是加利利拿撒勒的先知耶穌。」（21:10-11）",
      en: "As they near Jerusalem and reach Bethphage by the Mount of Olives, Jesus sends two disciples to bring a donkey and a colt (21:1–2). Matthew cites Zechariah 9:9: “Tell the daughter of Zion, behold, your King comes to you, humble, and riding on a donkey, on a colt, the foal of a donkey” (21:5; see the Zechariah card “The King on a Donkey”). The crowd shouts: “Hosanna to the son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!” (21:9). The whole city asks, “Who is this?” and the crowd says, “This is the prophet, Jesus, from Nazareth of Galilee” (21:10–11)."
    },
    tip: {
      zh: "馬太寫「一匹驢和一匹驢駒」（21:2、7），別的福音書只提驢駒；是哪一匹，福音書沒有說明。",
      en: "Matthew writes “a donkey and a colt” (21:2, 7) while other Gospels mention only a colt; which was ridden the Gospels do not say."
    },
    related: ["great_commandment", "woes_pharisees", "last_supper", "jesus"]
  },

  // ── 030 ──────────────────────────────────────────────────────────────────
  {
    id: "great_commandment", book: "matthew", no: 30, kind: "other", type: "love", rarity: 5,
    zh: "最大的誡命", en: "The Great Commandment",
    tag: { zh: "愛主，愛人如己", en: "Love the Lord, Love Your Neighbor" },
    role: { zh: "在聖殿的爭辯（22:34-40）", en: "A dispute in the temple (22:34–40)" },
    ch: [22],
    passages: ["22:34-40"],
    moves: [
      { zh: "第一，且是最大的", en: "The First and Great", ref: "22:37-38",
        dzh: "你要盡心、盡性、盡意愛主你的神。這是誡命中的第一，且是最大的。",
        den: "“You shall love the Lord your God with all your heart, with all your soul, and with all your mind. This is the first and great commandment.”" },
      { zh: "其次也相倣", en: "A Second Like It", ref: "22:39-40",
        dzh: "其次也相倣，就是要愛人如己。這兩條誡命是律法和先知一切道理的總綱。",
        den: "“A second likewise is this, ‘You shall love your neighbor as yourself.’ The whole law and the prophets depend on these two commandments.”" }
    ],
    traits: [
      { k: "strength", zh: "把整部律法收進兩句", en: "Gathers the whole law into two lines" },
      { k: "identity", zh: "引用申命記 6:5 和利未記 19:18", en: "Quotes Deuteronomy 6:5 and Leviticus 19:18" }
    ],
    lesson: {
      zh: "律法師問「律法上的誡命，哪一條是最大的？」（22:36）耶穌答了兩條，並說「律法和先知一切道理」都繫於這兩條（22:40）。愛神和愛人，被放在同一個重量上。",
      en: "A lawyer asks, “Which is the great commandment in the law?” (22:36). Jesus gives two, and says “the whole law and the prophets” hang on them (22:40). Loving God and loving neighbor are given the same weight."
    },
    quote: { ref: "22:37",
      zh: "你要盡心、盡性、盡意愛主",
      en: "You shall love the Lord your God with all your heart" },
    keyVerses: ["22:34", "22:36", "22:37", "22:38", "22:39", "22:40"],
    intro: {
      zh: "法利賽人聽見耶穌堵住了撒都該人的口，就聚集；其中一個律法師要試探耶穌，問他：「夫子，律法上的誡命，哪一條是最大的呢？」（22:35-36）耶穌的回答是：「你要盡心、盡性、盡意愛主─你的神」，其次「要愛人如己」（22:37-39）。前者引自申命記 6:5，後者引自利未記 19:18。同一章前面還有關於納稅給凱撒（22:15-22）和復活的爭辯（22:23-33）。",
      en: "The Pharisees, hearing that Jesus had silenced the Sadducees, gather; one of them, a lawyer, tests him: “Teacher, which is the great commandment in the law?” (22:35–36). Jesus answers: “You shall love the Lord your God with all your heart…” and second, “You shall love your neighbor as yourself” (22:37–39). The first is from Deuteronomy 6:5, the second from Leviticus 19:18. Earlier in the same chapter are the disputes on paying taxes to Caesar (22:15–22) and on the resurrection (22:23–33)."
    },
    tip: {
      zh: "「盡心、盡性、盡意」的三個詞，各譯本與申命記 6:5 的詞略有不同，意思是全人的愛。",
      en: "The three terms “heart, soul, mind” differ slightly from Deuteronomy 6:5 in various translations; the sense is love with the whole person."
    },
    related: ["palm_sunday", "woes_pharisees", "sheep_and_goats", "two_builders"]
  },

  // ── 031 ──────────────────────────────────────────────────────────────────
  {
    id: "woes_pharisees", book: "matthew", no: 31, kind: "other", type: "scheme", rarity: 3,
    zh: "文士和法利賽人有禍了", en: "Woe to the Scribes and Pharisees",
    tag: { zh: "好像粉飾的墳墓", en: "Like Whitened Tombs" },
    role: { zh: "在聖殿的最後一段話（第 23 章）", en: "The last public words in the temple (ch 23)" },
    ch: [23],
    passages: ["23:1-39"],
    moves: [
      { zh: "只說不做", en: "Say but Don’t Do", ref: "23:2-3",
        dzh: "文士和法利賽人坐在摩西的位上；凡他們所吩咐的，你們要謹守，但不要效法他們的行為。",
        den: "The scribes and Pharisees sit in Moses’s seat; do what they say, but don’t do what they do." },
      { zh: "粉飾的墳墓", en: "Whitened Tombs", ref: "23:27",
        dzh: "你們好像粉飾的墳墓，外面好看，裡面卻裝滿了死人的骨頭和一切的污穢。",
        den: "“You are like whitened tombs, which outwardly appear beautiful, but inwardly are full of dead men’s bones.”" }
    ],
    traits: [
      { k: "strength", zh: "他們的教導有根據（23:3）", en: "Their teaching has grounds (23:3)" },
      { k: "weakness", zh: "外面清潔，裡面貪婪放縱（23:25）", en: "Clean outside, greedy within (23:25)" }
    ],
    lesson: {
      zh: "這章沒有讓人學著去指責別人，而是以一個悲嘆結束：「耶路撒冷啊，耶路撒冷啊……我多次願意聚集你的兒女，好像母雞把小雞聚集在翅膀底下，只是你們不願意」（23:37）。",
      en: "This chapter does not end with teaching to accuse others but with a lament: “Jerusalem, Jerusalem… how often I wanted to gather your children together, like a hen gathers her chicks under her wings, and you were not willing” (23:37)."
    },
    quote: { ref: "23:27",
      zh: "你們這假冒為善的文士和法利賽人有禍了！因為你們好像粉飾的墳墓",
      en: "Woe to you, scribes and Pharisees, hypocrites! For you are like whitened tombs" },
    keyVerses: ["23:2", "23:3", "23:12", "23:23", "23:27", "23:37"],
    intro: {
      zh: "耶穌對眾人和門徒說話，先說文士和法利賽人「坐在摩西的位上」，他們所說的要遵守，但不要效法他們的行為，因為他們「能說不能行」（23:2-3）。接著是七次「有禍了」（23:13-36）：關閉天國的門、為人作祈禱而吞吃寡婦的家產、上奉獻卻疏忽公義憐憫（23:23）、洗淨杯盤外面、像粉飾的墳墓。這是對一個群體的責備，並不是對所有法利賽人；馬太福音在別處也寫到法利賽人的好感與疑問。",
      en: "Jesus speaks to the crowds and disciples, first saying the scribes and Pharisees “sat on Moses’ seat,” so do what they say but not what they do, “for they say, and don’t do” (23:2–3). Then seven woes (23:13–36): shutting the Kingdom’s door, devouring widows’ houses while making long prayers, tithing mint while neglecting justice and mercy (23:23), cleaning the outside of cup and platter, being like whitened tombs. It is a rebuke of a group, not of all Pharisees; elsewhere Matthew also records Pharisees’ sympathies and questions."
    },
    tip: {
      zh: "「有禍了」的數目（七次）和「禍」的語氣，是悲嘆還是咒詛，注釋書有不同讀法。",
      en: "The count of the woes (seven) and whether “woe” is lament or curse is read differently by commentaries."
    },
    related: ["great_commandment", "palm_sunday", "ten_virgins", "last_supper"]
  },

  // ── 032 ──────────────────────────────────────────────────────────────────
  {
    id: "ten_virgins", book: "matthew", no: 32, kind: "other", type: "wisdom", rarity: 3,
    zh: "十個童女", en: "The Ten Virgins",
    tag: { zh: "所以你們要警醒", en: "Therefore Stay Awake" },
    role: { zh: "末後的話（25:1-13）", en: "The last discourse (25:1–13)" },
    ch: [25],
    passages: ["25:1-13"],
    moves: [
      { zh: "五個聰明，五個愚拙", en: "Five Wise, Five Foolish", ref: "25:2-4",
        dzh: "五個是愚拙的，拿燈卻不預備油；聰明的拿燈，又預備油在器皿裡。",
        den: "Five were foolish and took lamps but no oil; the wise took oil in their vessels with their lamps." },
      { zh: "門就關了", en: "The Door Was Shut", ref: "25:10-12",
        dzh: "那預備好了的，同他進去坐席，門就關了；其餘的來說：主啊，給我們開門！他卻說：我不認識你們。",
        den: "Those who were ready went in to the marriage feast, and the door was shut; the others came, “Lord, open to us,” but he said, “I don’t know you.”" }
    ],
    traits: [
      { k: "strength", zh: "聰明的童女「預備油」", en: "The wise virgins “took oil”" },
      { k: "weakness", zh: "新郎遲延，十個都打盹睡著（25:5）", en: "The bridegroom is delayed and all ten doze and sleep (25:5)" }
    ],
    lesson: {
      zh: "十個人都睡著了（25:5），差別在睡前有沒有預備油。比喻的結論是「所以你們要警醒，因為那日子，那時辰，你們不知道」（25:13）。",
      en: "All ten fall asleep (25:5); the difference is whether oil was prepared beforehand. The conclusion: “Watch therefore, for you don’t know the day nor the hour” (25:13)."
    },
    quote: { ref: "25:10",
      zh: "那預備好了的，同他進去坐席，門就關了",
      en: "those who were ready went in with him to the marriage feast, and the door was shut" },
    keyVerses: ["25:1", "25:2", "25:4", "25:5", "25:6", "25:10", "25:12", "25:13"],
    intro: {
      zh: "「那時，天國好像十個童女拿著燈，出去迎接新郎。」（25:1）五個愚拙，五個聰明。新郎遲延，她們都打盹睡著了；半夜有人喊「新郎來了，你們出來迎接他」（25:5-6）。愚拙的對聰明的說「分點油給我們」，聰明的說「恐怕不夠你我用的」（25:8-9）。她們去買的時候，新郎到了，門就關了。這個比喻在馬太福音 24 章末論警醒之後，25:14 起接上才幹的比喻。",
      en: "“Then the Kingdom of Heaven will be like ten virgins, who took their lamps, and went out to meet the bridegroom” (25:1). Five were foolish, five wise. The bridegroom is delayed, and they all become drowsy and sleep; at midnight there is a cry, “Behold, the bridegroom! Come out to meet him!” (25:5–6). The foolish say to the wise, “Give us some of your oil,” and the wise answer, “What if there isn’t enough for us and you?” (25:8–9). While they go to buy, the bridegroom comes and the door is shut. The parable follows the chapter 24 discourse on watchfulness and leads into the talents from 25:14."
    },
    tip: {
      zh: "「油」代表甚麼，比喻沒有說明；結論只要求「警醒」。",
      en: "What the “oil” stands for the parable does not say; its conclusion asks only for watchfulness."
    },
    related: ["talents", "sheep_and_goats", "unforgiving_servant", "woes_pharisees"]
  },

  // ── 033 ──────────────────────────────────────────────────────────────────
  {
    id: "talents", book: "matthew", no: 33, kind: "other", type: "harvest", rarity: 3,
    zh: "按才幹受託", en: "The Parable of the Talents",
    tag: { zh: "又良善又忠心的僕人", en: "Good and Faithful Servant" },
    role: { zh: "末後的話（25:14-30）", en: "The last discourse (25:14–30)" },
    ch: [25],
    passages: ["25:14-30"],
    moves: [
      { zh: "照各人的才幹", en: "To Each by His Ability", ref: "25:15",
        dzh: "他按著各人的才幹給他們銀子，一個五千，一個二千，一個一千，就往外國去了。",
        den: "To one he gave five talents, to another two, to another one, to each according to his own ability, and he went on his journey." },
      { zh: "好，你這又良善又忠心的僕人", en: "Well Done", ref: "25:21",
        dzh: "主人說：好，你這又良善又忠心的僕人，你在不多的事上有忠心，我要把許多事派你管理。",
        den: "“Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things.”" }
    ],
    traits: [
      { k: "strength", zh: "每個人都按「才幹」受託，沒有人是零", en: "Each is entrusted “according to ability”; no one gets zero" },
      { k: "weakness", zh: "埋藏在地裡的一千", en: "The one talent buried in the ground" }
    ],
    lesson: {
      zh: "主人獎賞的話，對得五千和得二千的人完全一樣（25:21、23）；受責備的人是因為恐懼而埋藏，他說「我知道你是忍心的人」（25:24-25）。",
      en: "The master’s reward is word for word the same for the five-talent and the two-talent servants (25:21, 23); the one rebuked buried his in fear and says “I knew you were a hard man” (25:24–25)."
    },
    quote: { ref: "25:21",
      zh: "好，你這又良善又忠心的僕人",
      en: "Well done, good and faithful servant." },
    keyVerses: ["25:14", "25:15", "25:16", "25:21", "25:24", "25:25", "25:29"],
    intro: {
      zh: "「天國又好像一個人要往外國去，就叫了僕人來，把他的家業交給他們。」（25:14）他照各人的才幹給一個五千、一個二千、一個一千（和合本以「千」作單位，原文 talent 是大額的重量單位）。得五千的去做買賣，另賺了五千；得二千的另賺二千；得一千的去掘開地，把主人的銀子埋藏了（25:16-18）。許久以後主人回來算賬，前兩個都得稱讚，第三個被稱為「又惡又懶的僕人」（25:26）。",
      en: "“For it is like a man, going into another country, who called his own servants, and entrusted his goods to them” (25:14). To each he gives according to his ability, five, two and one talents (a talent is a large unit of weight). The one with five trades and gains five more; the one with two gains two more; the one with one digs in the ground and hides his master’s money (25:16–18). After a long time the master returns to settle accounts; the first two are commended, and the third is called “wicked and slothful” (25:26)."
    },
    tip: {
      zh: "「才幹」（talent）在這裡本是錢的單位；現在中文英文裡用來指才能，是從這個比喻來的。",
      en: "“Talent” was originally a unit of money here; the modern sense of “ability” in English and Chinese comes from this parable."
    },
    related: ["ten_virgins", "sheep_and_goats", "treasure_and_pearl", "vineyard_workers"]
  },

  // ── 034 ──────────────────────────────────────────────────────────────────
  {
    id: "sheep_and_goats", book: "matthew", no: 34, kind: "other", type: "love", rarity: 5,
    zh: "綿羊與山羊", en: "The Sheep and the Goats",
    tag: { zh: "做在我這弟兄中一個最小的身上", en: "Done to the Least of These" },
    role: { zh: "末後審判的畫面（25:31-46）", en: "A picture of the final judgment (25:31–46)" },
    ch: [25],
    passages: ["25:31-46"],
    moves: [
      { zh: "我餓了，你們給我吃", en: "I Was Hungry", ref: "25:35-36",
        dzh: "我餓了，你們給我吃；渴了，你們給我喝；我作客旅，你們留我住；我病了，你們看顧我。",
        den: "“I was hungry, and you gave me food to eat. I was thirsty, and you gave me drink. I was a stranger, and you took me in… sick, and you visited me.”" },
      { zh: "最小的一個", en: "The Least of These", ref: "25:40",
        dzh: "王要回答說：這些事你們既做在我這弟兄中一個最小的身上，就是做在我身上了。",
        den: "The King will answer, “Because you did it to one of the least of these my brothers, you did it to me.”" }
    ],
    traits: [
      { k: "strength", zh: "兩邊都說「我們甚麼時候看見你」", en: "Both sides ask, “When did we see you?”" },
      { k: "identity", zh: "標準是日常的憐憫", en: "The criterion is everyday mercy" }
    ],
    lesson: {
      zh: "兩邊的人都不知道自己做了（或沒做）甚麼：「主啊，我們甚麼時候看見你餓了……」（25:37、44）。審判的標準是具體的人：餓的、渴的、客旅、赤身的、病的、坐監的。",
      en: "Neither group knows what they did (or didn’t do): “Lord, when did we see you hungry…?” (25:37, 44). The criterion is concrete people: the hungry, thirsty, strangers, naked, sick and imprisoned."
    },
    quote: { ref: "25:40",
      zh: "這些事你們既做在我這弟兄中一個最小的身上，就是做在我身上了",
      en: "because you did it to one of the least of these my brothers, you did it to me" },
    keyVerses: ["25:31", "25:32", "25:35", "25:37", "25:40", "25:45", "25:46"],
    intro: {
      zh: "「當人子在他的榮耀裡，同著眾天使降臨的時候，要坐在他榮耀的寶座上。萬民都要聚集在他面前；他要把他們分別出來，好像牧羊的分別綿羊山羊一樣。」（25:31-32）綿羊在右，山羊在左。右邊的人曾給他吃、給他喝、留他住、給他穿、看顧他、探望他（25:35-36）。「我這弟兄中一個最小的」指誰，有人讀作任何有需要的人，有人讀作耶穌的門徒，注釋書看法不一。",
      en: "“But when the Son of Man comes in his glory, and all the holy angels with him, then he will sit on the throne of his glory. Before him all the nations will be gathered, and he will separate them one from another, as a shepherd separates the sheep from the goats” (25:31–32). Sheep on the right, goats on the left. The right group fed him, gave him drink, took him in, clothed him, cared for him, visited him (25:35–36). Who “the least of these my brothers” are, some read as anyone in need, others as Jesus’s disciples; commentaries differ."
    },
    tip: {
      zh: "「最小的弟兄」指所有有需要的人，還是特指基督徒，各解不一；比喻用意是日常的憐憫。",
      en: "Whether the “least of these my brothers” are anyone in need or specifically Christians is disputed; the parable’s intent is everyday mercy."
    },
    related: ["talents", "ten_virgins", "great_commandment", "jesus"]
  },

  // ── 035 ──────────────────────────────────────────────────────────────────
  {
    id: "last_supper", book: "matthew", no: 35, kind: "other", type: "love", rarity: 5,
    zh: "最後的晚餐", en: "The Last Supper",
    tag: { zh: "這是我立約的血", en: "This Is My Blood of the Covenant" },
    role: { zh: "逾越節的晚餐（26:17-30）", en: "The Passover meal (26:17–30)" },
    ch: [26],
    passages: ["26:17-30"],
    moves: [
      { zh: "這是我的身體", en: "This Is My Body", ref: "26:26",
        dzh: "他們吃的時候，耶穌拿起餅來，祝福，擘開，遞給門徒，說：你們拿著吃，這是我的身體。",
        den: "As they were eating, Jesus took bread, gave thanks, broke it, and gave to the disciples: “Take, eat; this is my body.”" },
      { zh: "立約的血", en: "The Blood of the Covenant", ref: "26:27-28",
        dzh: "又拿起杯來，祝謝了，遞給他們：你們都喝這個；因為這是我立約的血，為多人流出來，使罪得赦。",
        den: "He took the cup, gave thanks, and said, “All of you drink it, for this is my blood of the new covenant, which is poured out for many for the remission of sins.”" }
    ],
    traits: [
      { k: "strength", zh: "逾越節的飯成了新的記念", en: "The Passover meal becomes a new remembrance" },
      { k: "identity", zh: "「新約」呼應耶利米書 31:31", en: "“New covenant” echoes Jeremiah 31:31" }
    ],
    lesson: {
      zh: "耶穌在逾越節的飯桌上把餅和杯與自己連在一起，並預告猶大的出賣（26:21-25）和彼得的不認（26:31-35）。他最後說：「我不再喝這葡萄樹的出產，直到我在我父的國裡同你們喝新的那日子」（26:29）。",
      en: "At the Passover table Jesus connects the bread and cup with himself, and foretells Judas’s betrayal (26:21–25) and Peter’s denial (26:31–35). He closes: “I will not drink of this fruit of the vine from now on, until that day when I drink it anew with you in my Father’s Kingdom” (26:29)."
    },
    quote: { ref: "26:28",
      zh: "因為這是我立約的血，為多人流出來，使罪得赦",
      en: "this is my blood of the new covenant" },
    keyVerses: ["26:17", "26:21", "26:26", "26:27", "26:28", "26:29", "26:30"],
    intro: {
      zh: "除酵節的第一天，門徒問在哪裡預備逾越節的筵席（26:17）；耶穌差他們進城見一個人。晚上，他和十二個門徒坐席（26:20）。吃的時候他說「你們中間有一個人要賣我了」（26:21）。然後他拿起餅，祝福、擘開、遞給門徒：「你們拿著吃，這是我的身體」；又拿起杯：「這是我立約的血，為多人流出來，使罪得赦」（26:26-28）。他們唱了詩，就出來往橄欖山去（26:30）。",
      en: "On the first day of Unleavened Bread the disciples ask where to prepare the Passover (26:17); Jesus sends them into the city to a certain man. In the evening he sits down with the twelve disciples (26:20). While they eat he says, “One of you will betray me” (26:21). Then he takes bread, gives thanks, breaks it and gives it: “Take, eat; this is my body”; then the cup: “this is my blood of the new covenant, which is poured out for many for the remission of sins” (26:26–28). After singing a hymn they go out to the Mount of Olives (26:30)."
    },
    tip: {
      zh: "「這是我的身體」的意思，各教會傳統（實質改變、同在、象徵、紀念）有不同讀法，經文沒有展開。",
      en: "How “this is my body” is read — transubstantiation, real presence, symbol, memorial — differs across church traditions; the text does not expand."
    },
    related: ["gethsemane", "judas_iscariot", "peters_denial", "palm_sunday"]
  },

  // ── 036 ──────────────────────────────────────────────────────────────────
  {
    id: "gethsemane", book: "matthew", no: 36, kind: "other", type: "faith", rarity: 5,
    zh: "客西馬尼", en: "Gethsemane",
    tag: { zh: "不要照我的意思，只要照你的意思", en: "Not What I Desire, but What You Desire" },
    role: { zh: "被捕之前的禱告（26:36-46）", en: "The prayer before the arrest (26:36–46)" },
    ch: [26],
    passages: ["26:36-46"],
    moves: [
      { zh: "我心裡甚是憂愁", en: "My Soul Is Exceedingly Sorrowful", ref: "26:37-38",
        dzh: "他就憂愁起來，極其難過，對他們說：我心裡甚是憂愁，幾乎要死；你們在這裡等候，和我一同儆醒。",
        den: "He began to be sorrowful and very troubled: “My soul is exceedingly sorrowful, even to death. Stay here, and watch with me.”" },
      { zh: "求你叫這杯離開我", en: "Let This Cup Pass", ref: "26:39",
        dzh: "我父啊，倘若可行，求你叫這杯離開我。然而，不要照我的意思，只要照你的意思。",
        den: "“My Father, if it is possible, let this cup pass away from me; nevertheless, not what I desire, but what you desire.”" }
    ],
    traits: [
      { k: "strength", zh: "把真實的感受說給父聽，然後順服", en: "Tells the Father what he really feels, then submits" },
      { k: "weakness", zh: "三個門徒睡著了（26:40、43、45）", en: "Three disciples fall asleep (26:40, 43, 45)" }
    ],
    lesson: {
      zh: "耶穌三次禱告，每次都帶著同一個意思（26:39、42、44），而三個門徒三次睡著。他沒有因此離開；他說「時候到了，人子被賣在罪人手裡了」（26:45），迎著猶大和隊伍走去。",
      en: "Jesus prays three times with the same intent (26:39, 42, 44), and the three disciples sleep three times. He does not leave; he says, “The hour is at hand, and the Son of Man is betrayed into the hands of sinners” (26:45), and goes to meet Judas and the crowd."
    },
    quote: { ref: "26:39",
      zh: "然而，不要照我的意思，只要照你的意思",
      en: "nevertheless, not what I desire, but what you desire" },
    keyVerses: ["26:36", "26:37", "26:38", "26:39", "26:41", "26:42", "26:45"],
    intro: {
      zh: "耶穌同門徒來到一個地方，名叫客西馬尼；他對他們說「你們坐在這裡，等我到那邊去禱告」，只帶彼得和西庇太的兩個兒子往前走（26:36-37）。他就憂愁起來，極其難過（26:37）。他俯伏在地禱告：「我父啊，倘若可行，求你叫這杯離開我。然而，不要照我的意思，只要照你的意思。」（26:39）他回來見門徒睡著，對彼得說：「你們不能和我一同儆醒片時嗎？」（26:40）「心靈固然願意，肉體卻軟弱了。」（26:41）",
      en: "Jesus comes with his disciples to a place called Gethsemane; he says to them, “Sit here, while I go there and pray,” taking only Peter and the two sons of Zebedee further (26:36–37). He begins to be sorrowful and very troubled (26:37). He falls on his face and prays: “My Father, if it is possible, let this cup pass away from me; nevertheless, not what I desire, but what you desire” (26:39). He comes to the disciples and finds them asleep, and says to Peter, “What, couldn’t you watch with me for one hour?” (26:40); “the spirit indeed is willing, but the flesh is weak” (26:41)."
    },
    tip: {
      zh: "「杯」在舊約常指審判或苦難（參 12:2 的「昏醉的杯」，撒迦利亞書卡）；耶穌所指的是甚麼，經文沒有進一步解釋。",
      en: "In the Old Testament a “cup” often stands for judgment or suffering (compare the “cup of reeling” in Zechariah 12:2); what exactly Jesus means the text does not explain."
    },
    related: ["last_supper", "judas_iscariot", "peters_denial", "temptation_wilderness"]
  },

  // ── 037 ──────────────────────────────────────────────────────────────────
  {
    id: "judas_iscariot", book: "matthew", no: 37, kind: "person", type: "scheme", rarity: 4,
    zh: "加略人猶大", en: "Judas Iscariot",
    tag: { zh: "三十塊錢", en: "Thirty Pieces of Silver" },
    role: { zh: "賣耶穌的門徒（26:14-16；27:3-10）", en: "The disciple who betrayed him (26:14–16; 27:3–10)" },
    ch: [10, 26, 27],
    passages: ["10:4", "26:14-16", "26:47-50", "27:3-10"],
    moves: [
      { zh: "你們願意給我多少錢", en: "What Will You Give Me?", ref: "26:14-15",
        dzh: "十二門徒裡有一個稱為加略人猶大的，去見祭司長，說：我把他交給你們，你們願意給我多少錢？",
        den: "Judas Iscariot, one of the twelve, went to the chief priests: “What are you willing to give me, that I should deliver him to you?”" },
      { zh: "我賣了無辜之人的血", en: "I Betrayed Innocent Blood", ref: "27:3-5",
        dzh: "猶大看見耶穌已經定了罪，就後悔，說：我賣了無辜之人的血是有罪了；就把銀錢丟在殿裡，出去吊死了。",
        den: "Judas felt remorse and said, “I have sinned in that I betrayed innocent blood”; he threw down the silver in the sanctuary and hanged himself." }
    ],
    traits: [
      { k: "strength", zh: "與十二人同行，也在最後的晚餐席上（26:20-25）", en: "Walked with the Twelve and sat at the last supper (26:20–25)" },
      { k: "weakness", zh: "三十塊錢賣了他的老師", en: "Sold his teacher for thirty pieces of silver" }
    ],
    lesson: {
      zh: "馬太福音是唯一記猶大後悔的福音書（27:3-5）：他看見耶穌被定罪，就把錢拿回去說「我賣了無辜之人的血是有罪了」；祭司長說「那與我們有甚麼相干？你自己承當吧！」他沒有找到可以承當的地方。",
      en: "Matthew is the only Gospel to record Judas’s remorse (27:3–5): seeing Jesus condemned, he takes the money back, saying “I have sinned in that I betrayed innocent blood”; the chief priests say, “What is that to us? You see to it.” He finds no one to bear it with him."
    },
    quote: { ref: "27:4",
      zh: "我賣了無辜之人的血是有罪了",
      en: "I have sinned in that I betrayed innocent blood." },
    keyVerses: ["10:4", "26:14", "26:15", "26:16", "26:49", "27:3", "27:4", "27:5"],
    intro: {
      zh: "猶大在十二使徒名單中最後出現，稱為「賣耶穌的加略人猶大」（10:4）。26:14-16 他向祭司長講價，得了三十塊錢；撒迦利亞書 11:12-13 也有「三十塊錢」和「丟給窯戶」（見撒迦利亞書卡）。26:47-50 他帶著人到客西馬尼，用親嘴作暗號。27:3-10 祭司長拿那銀錢買了窯戶的一塊田，馬太說這「應了先知耶利米的話」（27:9）。使徒行傳 1:18-19 對猶大之死的記載與馬太不同，兩處如何接起來，有不同說法。",
      en: "Judas appears last in the list of the Twelve, called “Judas Iscariot, who also betrayed him” (10:4). In 26:14–16 he bargains with the chief priests and receives thirty pieces of silver; Zechariah 11:12–13 also has “thirty pieces of silver” and “throw it to the potter” (see the Zechariah card). In 26:47–50 he leads a crowd to Gethsemane and uses a kiss as a sign. In 27:3–10 the chief priests buy the potter’s field with the silver, and Matthew says this “was fulfilled through Jeremiah the prophet” (27:9). Acts 1:18–19 records Judas’s death differently; how the two fit has different explanations."
    },
    tip: {
      zh: "「加略人」的意思（地名「克耳犯」？還是別的），經文沒有說明；馬太福音 27:9 稱引句屬耶利米，見撒迦利亞書卡。",
      en: "What “Iscariot” means (a place name “Kerioth”? something else) the text does not say; Matthew 27:9 attributes the quotation to Jeremiah — see the Zechariah card."
    },
    related: ["last_supper", "gethsemane", "peters_denial", "pilate_barabbas"]
  },

  // ── 038 ──────────────────────────────────────────────────────────────────
  {
    id: "peters_denial", book: "matthew", no: 38, kind: "other", type: "faith", rarity: 3,
    zh: "彼得三次不認主", en: "Peter’s Three Denials",
    tag: { zh: "他就出去痛哭", en: "He Went Out and Wept Bitterly" },
    role: { zh: "大祭司院子裡（26:69-75）", en: "In the high priest’s courtyard (26:69–75)" },
    ch: [26],
    passages: ["26:69-75"],
    moves: [
      { zh: "我不認得那個人", en: "I Don’t Know the Man", ref: "26:74",
        dzh: "彼得就發咒起誓地說：我不認得那個人。立時，雞就叫了。",
        den: "Then he began to curse and swear, “I don’t know the man!” Immediately the rooster crowed." },
      { zh: "出去痛哭", en: "Wept Bitterly", ref: "26:75",
        dzh: "彼得想起耶穌所說的話：雞叫以先，你要三次不認我。他就出去痛哭。",
        den: "Peter remembered Jesus’s word, “Before the rooster crows, you will deny me three times.” He went out and wept bitterly." }
    ],
    traits: [
      { k: "strength", zh: "跟到院子裡，是十一個人中少有的", en: "Followed into the courtyard, which few of the eleven did" },
      { k: "weakness", zh: "三次，一次比一次強烈", en: "Three times, each stronger than the last" }
    ],
    lesson: {
      zh: "26:33-35 彼得說「眾人雖然為你跌倒，我卻永不跌倒」，耶穌預告「今夜雞叫以先，你要三次不認我」。兩節的距離不到一夜；第三次不認之後雞叫了，他想起，出去痛哭（26:75）。",
      en: "In 26:33–35 Peter says, “Even if all will be made to stumble because of you, I will never be made to stumble,” and Jesus foretells “This night, before the rooster crows, you will deny me three times.” The distance is less than a night; after the third denial the rooster crows, he remembers, and goes out weeping (26:75)."
    },
    quote: { ref: "26:75",
      zh: "他就出去痛哭",
      en: "He went out and wept bitterly." },
    keyVerses: ["26:33", "26:34", "26:69", "26:72", "26:74", "26:75"],
    intro: {
      zh: "彼得在外面院子裡坐著，有一個使女來說「你也是同那加利利人耶穌一夥的」，他在眾人面前不承認（26:69-70）；出到門口，又有一個使女對旁邊的人說「這個人也是同拿撒勒人耶穌一夥的」，他就起誓不認（26:71-72）；過了不久，旁邊站著的人說「你真是他們一黨的，你的口音把你露出來了」，他就發咒起誓說「我不認得那個人」，立時雞叫（26:73-74）。耶穌在屋內受審（26:57-68）。",
      en: "Peter sits outside in the courtyard; a maid says, “You were also with Jesus, the Galilean,” and he denies it before them all (26:69–70); at the gateway another maid says to those there, “This man also was with Jesus of Nazareth,” and he denies with an oath (26:71–72); soon those standing by say, “Surely you also are one of them, for your speech makes you known,” and he curses and swears, “I don’t know the man!” and the rooster crows (26:73–74). Inside, Jesus is on trial (26:57–68)."
    },
    tip: {
      zh: "四個福音書的細節略有不同（使女的人數、問的人）；共同點是三次不認和雞叫。",
      en: "The four Gospels differ in details (who asks, how many maids); the common points are three denials and the crowing rooster."
    },
    related: ["simon_peter", "gethsemane", "judas_iscariot", "walking_on_water"]
  },

  // ── 039 ──────────────────────────────────────────────────────────────────
  {
    id: "pilate_barabbas", book: "matthew", no: 39, kind: "person", type: "power", rarity: 4,
    zh: "彼拉多與巴拉巴", en: "Pilate and Barabbas",
    tag: { zh: "流這義人的血，罪不在我", en: "I Am Innocent of the Blood of This Righteous Person" },
    role: { zh: "羅馬巡撫的審判（27:11-26）", en: "The Roman governor’s judgment (27:11–26)" },
    ch: [27],
    passages: ["27:11-26"],
    moves: [
      { zh: "巴拉巴，還是耶穌", en: "Barabbas or Jesus?", ref: "27:16-17",
        dzh: "當時有一個出名的囚犯叫巴拉巴；彼拉多問：你們要我釋放哪一個？是巴拉巴呢？是稱為基督的耶穌呢？",
        den: "There was a notable prisoner called Barabbas; Pilate asks, “Whom do you want me to release to you? Barabbas, or Jesus who is called Christ?”" },
      { zh: "洗手", en: "Washing His Hands", ref: "27:24",
        dzh: "彼拉多拿水在眾人面前洗手，說：流這義人的血，罪不在我，你們承當吧。",
        den: "Pilate took water and washed his hands before the multitude: “I am innocent of the blood of this righteous person. You see to it.”" }
    ],
    traits: [
      { k: "strength", zh: "知道他是因為嫉妒才被解來（27:18）", en: "Knew he was handed over out of envy (27:18)" },
      { k: "weakness", zh: "怕亂子，把決定交給群眾", en: "Fears a riot and hands the decision to the crowd" }
    ],
    lesson: {
      zh: "彼拉多知道是嫉妒（27:18），他的妻子也託人說「你不要理這義人的事」（27:19）；他仍把決定交給群眾，並洗手。洗手不能洗掉他手上的決定。",
      en: "Pilate knows it is envy (27:18), and his wife sends word, “Have nothing to do with that righteous man” (27:19); yet he hands the decision to the crowd and washes his hands. Washing cannot wash off his decision."
    },
    quote: { ref: "27:24",
      zh: "流這義人的血，罪不在我，你們承當吧",
      en: "I am innocent of the blood of this righteous person. You see to it." },
    keyVerses: ["27:11", "27:14", "27:16", "27:18", "27:19", "27:24", "27:25", "27:26"],
    intro: {
      zh: "耶穌站在巡撫面前，彼拉多問他「你是猶太人的王嗎？」耶穌說「你說的是」，其他的控告他都不回答（27:11-14）。節期有釋放一個囚犯的常例，當時有一個出名的囚犯叫巴拉巴（27:15-16）。彼拉多問群眾要哪一個，眾人在祭司長和長老煽動下要巴拉巴（27:20-21）。27:25 眾人說「他的血歸到我們和我們的子孫身上」，這句話在歷史上曾被錯誤地用來攻擊猶太人；經文裡說這話的是當時在彼拉多面前的那群人，不是全體猶太人，也不是後世的子孫。",
      en: "Jesus stands before the governor, and Pilate asks, “Are you the King of the Jews?” Jesus says, “So you say,” and answers none of the other charges (27:11–14). At the feast it was the custom to release a prisoner, and there was a notorious one called Barabbas (27:15–16). Pilate asks the crowd which they want, and stirred up by the chief priests and elders they ask for Barabbas (27:20–21). In 27:25 the people say, “May his blood be on us, and on our children!” — a line that has been wrongly used in history to attack Jews; in the text the speakers are the crowd then before Pilate, not all Jews, nor later descendants."
    },
    tip: {
      zh: "27:25 在歷史上曾被誤用來攻擊猶太人；經文是記載那群人的話，並沒有把責任歸給整個民族或後代。",
      en: "27:25 has been wrongly used to attack Jews; the text reports what that crowd said and does not assign blame to a whole people or later generations."
    },
    related: ["judas_iscariot", "crucifixion", "peters_denial", "gethsemane"]
  },

  // ── 040 ──────────────────────────────────────────────────────────────────
  {
    id: "crucifixion", book: "matthew", no: 40, kind: "other", type: "love", rarity: 5,
    zh: "十字架", en: "The Crucifixion",
    tag: { zh: "這真是神的兒子了", en: "Truly This Was the Son of God" },
    role: { zh: "各各他（27:32-61）", en: "Golgotha (27:32–61)" },
    ch: [27],
    passages: ["27:32-61"],
    moves: [
      { zh: "從午正到申初", en: "Darkness at Noon", ref: "27:45-46",
        dzh: "從午正到申初，遍地都黑暗了。約在申初，耶穌大聲喊著說：以利，以利，拉馬撒巴各他？",
        den: "From the sixth hour until the ninth hour there was darkness over all the land; about the ninth hour Jesus cried out with a loud voice, “Eli, Eli, lama sabachthani?”" },
      { zh: "殿裡的幔子裂開", en: "The Curtain Torn", ref: "27:51-54",
        dzh: "殿裡的幔子從上到下裂為兩半；百夫長看見地震，極其害怕，說：這真是神的兒子了！",
        den: "The veil of the temple was torn in two from top to bottom; the centurion, seeing the earthquake, feared exceedingly: “Truly this was the Son of God.”" }
    ],
    traits: [
      { k: "strength", zh: "第一個認信的是一個羅馬百夫長", en: "The first confession is by a Roman centurion" },
      { k: "weakness", zh: "「我的神，我的神，為甚麼離棄我？」", en: "“My God, my God, why have you forsaken me?”" }
    ],
    lesson: {
      zh: "耶穌的最後一聲喊是詩篇 22:1（27:46）。他死的時候，殿裡的幔子裂開，地震，墳墓也開了（27:51-52），而旁邊看守的百夫長說「這真是神的兒子了」（27:54）。婦女從遠處觀看（27:55-56）。",
      en: "Jesus’s last cry is Psalm 22:1 (27:46). When he dies the temple veil is torn, the earth shakes and tombs open (27:51–52), and the centurion standing by says “Truly this was the Son of God” (27:54). Women look on from a distance (27:55–56)."
    },
    quote: { ref: "27:54",
      zh: "這真是神的兒子了",
      en: "Truly this was the Son of God." },
    keyVerses: ["27:32", "27:35", "27:37", "27:45", "27:46", "27:50", "27:51", "27:54", "27:57"],
    intro: {
      zh: "他們出來，遇見一個古利奈人，名叫西門，就勉強他同去，好背著耶穌的十字架（27:32）。到了各各他，他們把他釘在十字架上，拈鬮分他的衣服（27:33-35）；頭上有一個罪狀：「這是猶太人的王耶穌」（27:37）。27:50 他又大聲喊叫，氣就斷了。27:52-53 記著已睡聖徒的身體有起來的，這是馬太福音獨有的記載，如何理解，有不同說法。亞利馬太人約瑟請求領了身體，安放在自己的新墳墓裡（27:57-60）。",
      en: "As they come out they meet a Cyrenian named Simon and compel him to carry Jesus’s cross (27:32). At Golgotha they crucify him and divide his clothes by casting lots (27:33–35); above his head is the charge: “This is Jesus, the King of the Jews” (27:37). In 27:50 he cries out again with a loud voice and gives up his spirit. Verses 52–53 record that bodies of sleeping saints were raised, a record unique to Matthew, understood in different ways. Joseph of Arimathea asks for the body and lays it in his own new tomb (27:57–60)."
    },
    tip: {
      zh: "27:52-53 的「聖徒起來」只有馬太福音記載，是甚麼事、如何理解，注釋書有不同說法。",
      en: "The “saints raised” in 27:52–53 is recorded only in Matthew; what it was and how to read it commentaries explain differently."
    },
    related: ["pilate_barabbas", "gethsemane", "empty_tomb", "sign_of_jonah"]
  },

  // ── 041 ──────────────────────────────────────────────────────────────────
  {
    id: "empty_tomb", book: "matthew", no: 41, kind: "other", type: "heaven", rarity: 5,
    zh: "空墳墓", en: "The Empty Tomb",
    tag: { zh: "他不在這裡，已經復活了", en: "He Is Not Here; He Has Risen" },
    role: { zh: "第一個復活節的清早（27:62-28:15）", en: "The first Easter dawn (27:62–28:15)" },
    ch: [28],
    passages: ["28:1-15"],
    moves: [
      { zh: "他已經復活了", en: "He Has Risen", ref: "28:5-6",
        dzh: "天使對婦女說：不要害怕！他不在這裡，照他所說的，已經復活了。你們來看安放主的地方。",
        den: "The angel says to the women, “Don’t be afraid… He is not here, for he has risen, just like he said. Come, see the place where the Lord was lying.”" },
      { zh: "用銀錢封口", en: "Silver for Silence", ref: "28:12-15",
        dzh: "祭司長和長老拿許多銀錢給兵丁，叫他們說：夜間我們睡覺的時候，他的門徒把他偷去了。",
        den: "The chief priests and elders gave the soldiers a large sum: “Say, ‘His disciples came by night, and stole him away while we slept.’”" }
    ],
    traits: [
      { k: "strength", zh: "最先看見的是婦女", en: "The first to see are women" },
      { k: "weakness", zh: "守墓的兵被賄賂說謊", en: "The guards are bribed to lie" }
    ],
    lesson: {
      zh: "婦女帶著「又害怕又大大歡喜」（28:8）跑去報信，路上耶穌遇見她們，說「不要害怕」（28:9-10）。同時，祭司長用錢買了另一個說法，「這話就傳說在猶太人中間，直到今日」（28:15）。",
      en: "The women run with “fear and great joy” (28:8) to tell the disciples, and on the way Jesus meets them and says “Don’t be afraid” (28:9–10). Meanwhile the chief priests buy another story, which “is spread abroad among the Jews, and continues until today” (28:15)."
    },
    quote: { ref: "28:6",
      zh: "他不在這裡，照他所說的，已經復活了",
      en: "He is not here, for he has risen, just like he said." },
    keyVerses: ["27:62", "28:1", "28:2", "28:5", "28:6", "28:7", "28:9", "28:15"],
    intro: {
      zh: "安息日過了，七日的頭一日黎明，抹大拉的馬利亞和那個馬利亞來看墳墓（28:1）。忽然地大震動，有主的使者從天上下來，把石頭滾開，坐在上面；他的相貌如閃電，衣裳潔白如雪；看守的人嚇得像死人一般（28:2-4）。天使說「他不在這裡，照他所說的，已經復活了」（28:6），叫她們去告訴門徒他在加利利。馬太福音獨有守墓的兵（27:62-66；28:11-15）。",
      en: "After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary come to see the tomb (28:1). Suddenly there is a great earthquake; an angel of the Lord descends from heaven, rolls away the stone and sits on it; his appearance is like lightning and his clothing white as snow; the guards shake and become like dead men (28:2–4). The angel says “He is not here, for he has risen, just like he said” (28:6) and tells them to tell the disciples he goes before them into Galilee. The guard at the tomb (27:62–66; 28:11–15) is unique to Matthew."
    },
    tip: {
      zh: "四個福音書記載復活清早的細節（誰先到、天使幾位）略有不同；共同點是空墳墓和婦女最先得知。",
      en: "The four Gospels differ in details of the resurrection dawn (who arrived first, how many angels); the common points are the empty tomb and women learning first."
    },
    related: ["crucifixion", "great_commission", "sign_of_jonah", "jesus"]
  },

  // ── 042 ──────────────────────────────────────────────────────────────────
  {
    id: "great_commission", book: "matthew", no: 42, kind: "other", type: "power", rarity: 5,
    zh: "大使命", en: "The Great Commission",
    tag: { zh: "我就常與你們同在，直到世界的末了", en: "I Am With You Always, to the End of the Age" },
    role: { zh: "全書的結尾（28:16-20）", en: "The close of the book (28:16–20)" },
    ch: [28],
    passages: ["28:16-20"],
    moves: [
      { zh: "使萬民作我的門徒", en: "Make Disciples of All Nations", ref: "28:18-19",
        dzh: "天上地下所有的權柄都賜給我了。所以，你們要去，使萬民作我的門徒。",
        den: "“All authority has been given to me in heaven and on earth. Go and make disciples of all nations.”" },
      { zh: "常與你們同在", en: "With You Always", ref: "28:20",
        dzh: "凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。",
        den: "“Teaching them to observe all things that I commanded you. Behold, I am with you always, even to the end of the age.”" }
    ],
    traits: [
      { k: "strength", zh: "全書的第一句應許（1:23）與最後一句相呼應", en: "Answers the first promise (1:23) with the last" },
      { k: "weakness", zh: "「然而還有人疑惑」（28:17）", en: "“But some doubted” (28:17)" }
    ],
    lesson: {
      zh: "十一個門徒在加利利的山上見耶穌，「就拜他，然而還有人疑惑」（28:17），而他還是派遣他們。使命有三個動詞：去、施洗、教訓；背後的根據是「所有的權柄」，後面的保證是「我就常與你們同在」。",
      en: "The eleven see Jesus on a mountain in Galilee, “they worshiped him, but some doubted” (28:17), and he still sends them. The commission has three verbs: go, baptize, teach; behind it is “all authority,” and after it the assurance “I am with you always.”"
    },
    quote: { ref: "28:19",
      zh: "你們要去，使萬民作我的門徒",
      en: "Go and make disciples of all nations" },
    keyVerses: ["28:16", "28:17", "28:18", "28:19", "28:20"],
    intro: {
      zh: "十一個門徒往加利利去，到了耶穌約定的山上；他們見了耶穌就拜他，然而還有人疑惑（28:16-17）。耶穌進前來說：「天上地下所有的權柄都賜給我了。所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗（和合本註：或譯，給他們施洗，歸於父、子、聖靈的名）；凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」（28:18-20）與第 10 章只到「以色列家迷失的羊」相比，這裡是「萬民」。",
      en: "The eleven disciples go to Galilee, to the mountain Jesus had appointed; when they see him they worship him, but some doubted (28:16–17). Jesus comes and says: “All authority has been given to me in heaven and on earth. Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit (the CUV note: or ‘baptizing them into the name…’), teaching them to observe all things that I commanded you. Behold, I am with you always, even to the end of the age” (28:18–20). Compared with chapter 10, which was only to “the lost sheep of the house of Israel,” here it is “all nations.”"
    },
    tip: {
      zh: "「奉父、子、聖靈的名」，和合本註說也可譯「歸於……的名」；「萬民」是各國各族，還是包括猶太人，注釋書有不同說法。",
      en: "“In the name of the Father, Son and Holy Spirit,” the CUV note says can also be “into the name of…”; whether “all nations” includes Jews is read differently by commentaries."
    },
    related: ["empty_tomb", "twelve_sent", "jesus", "canaanite_woman", "magi"]
  }

);
