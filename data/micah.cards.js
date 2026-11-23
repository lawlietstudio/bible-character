// 聖經人物卡 · 彌迦書 (Micah) — book info + cards.
// Verse text comes from data/micah.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/micah.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Jer 26:17-19; Isa 2:2-4; Joel 3:10; Matt 2:4-6, 10:34-36; John 7:42; Exod 15:20, 34:6-7; Num 22:4-6; Josh 3:1,
// 4:19; 1 Kgs 16:25-33; Amos 1:3, 8:1; Jonah 2:3, 4:2) were checked against the 和合本 text and appear in prose only.
// Flagged rather than decided: who "you" is in 1:2 "from his holy temple" (heavenly or Jerusalem), the Babylon of 4:10,
// how 5:2 is read (the New Testament reads it of Jesus; the original setting is a besieged Jerusalem), who "I" is in 7:1-10
// (Micah or personified Zion), and which way 2:6-11 divides between speakers.

window.BOOKS.push({
  id: "micah",
  zh: "彌迦書", en: "Micah", abbr: { zh: "彌", en: "Mic" },
  order: 33, section: { zh: "先知書", en: "Prophets" },
  chapters: 7,
  fan: ["what_lord_requires", "micah", "god_like_you"],
  summary: {
    zh: "彌迦書有七章，像三輪的庭訊，每一輪都以「聽」開始（1:2；3:1；6:1）。摩利沙人彌迦在猶大王約坦、亞哈斯、希西家在位的日子，論撒馬利亞和耶路撒冷（1:1）。第 1-3 章：耶和華從殿中見證，撒馬利亞要變為亂堆，連猶大的首領、祭司和先知也為錢欺壓百姓，錫安要被耕種像一塊田（3:12）。第 4-5 章：末後的日子耶和華殿的山必堅立，萬民把刀打成犁頭（4:1-4）；從小城伯利恆要出一位掌權者（5:2）。第 6-7 章：耶和華與百姓爭辯，說「世人哪，耶和華已指示你何為善」——行公義，好憐憫，與神同行（6:8）；全書以「有何神像你，赦免罪孽」收結（7:18）。",
    en: "Micah’s seven chapters read like three rounds of a courtroom hearing, each opening with “Hear” (1:2; 3:1; 6:1). Micah of Moresheth speaks in the days of Jotham, Ahaz and Hezekiah, concerning Samaria and Jerusalem (1:1). Chapters 1–3: Yahweh witnesses from his temple, Samaria becomes a rubble heap, and even Judah’s leaders, priests and prophets crush the people for money, so that Zion will be plowed like a field (3:12). Chapters 4–5: in the latter days the mountain of Yahweh’s house is established and the nations beat swords into plowshares (4:1–4); from small Bethlehem will come a ruler (5:2). Chapters 6–7: Yahweh argues his case with his people — “He has shown you, O man, what is good” — to act justly, love mercy and walk humbly with God (6:8); and the book ends, “Who is a God like you, who pardons iniquity?” (7:18)."
  },
  outline: [
    { zh: "耶和華從殿中見證；撒馬利亞變亂堆；沿路的哀歌", en: "Yahweh witnesses from his temple; Samaria a rubble heap; laments along the road" },
    { zh: "床上圖謀的人；說「平安」的先知；雅各剩下的人", en: "Those who plot in bed; the prophets who say “Peace”; the remnant of Jacob" },
    { zh: "首領、祭司、先知為錢行事；錫安被耕種像田", en: "Rulers, priests and prophets for pay; Zion plowed like a field" },
    { zh: "末後的日子；產難與解救；錫安得勝", en: "The latter days; labor pains and rescue; Zion threshes" },
    { zh: "伯利恆的掌權者；餘剩之民；除去馬匹和偶像", en: "The ruler from Bethlehem; the remnant; horses and idols removed" },
    { zh: "耶和華的訟案；行公義，好憐憫；詭詐的天平", en: "Yahweh’s lawsuit; act justly, love mercy; dishonest scales" },
    { zh: "彌迦的哀歌；仰望耶和華；有何神像你", en: "Micah’s lament; “I will look to Yahweh”; “Who is a God like you?”" }
  ],
  notes: {
    zh: "小提示：彌迦書的結構像三次「聽啊」：1-3 章審判、4-5 章盼望、6-7 章爭辯與赦免，每一輪都是先責備、再安慰。4:1-3 和以賽亞書 2:2-4 幾乎相同，誰引用誰，學者看法不一。耶利米書 26:17-19 記得，後來有長老引用 3:12 為耶利米辯護。",
    en: "Good to know: the book moves in three “Hear” rounds — judgment (chs 1–3), hope (chs 4–5), lawsuit and pardon (chs 6–7) — and each round rebukes first, then comforts. Micah 4:1–3 is almost identical to Isaiah 2:2–4, and scholars differ on who quoted whom. Jeremiah 26:17–19 records elders later quoting 3:12 in Jeremiah’s defense."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "micah", book: "micah", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "彌迦", en: "Micah",
    meaning: { zh: "「誰像耶和華？」", en: "“Who is like Yahweh?”" },
    tag: { zh: "鄉下來的先知，為被欺壓的人說話", en: "The Country Prophet Who Spoke for the Oppressed" },
    role: { zh: "摩利沙人・先知", en: "Prophet from Moresheth" },
    ch: [1, 3, 7],
    passages: ["1:1", "3:8", "7:7-9"],
    moves: [
      { zh: "摩利沙人彌迦", en: "Micah of Moresheth", ref: "1:1",
        dzh: "他在約坦、亞哈斯、希西家作王的日子得默示，論撒馬利亞和耶路撒冷。",
        den: "He receives Yahweh’s word in the days of Jotham, Ahaz and Hezekiah, concerning Samaria and Jerusalem." },
      { zh: "藉耶和華的靈", en: "By Yahweh’s Spirit", ref: "3:8",
        dzh: "他說：我藉耶和華的靈，滿有力量、公平、才能，向雅各說明他的過犯。",
        den: "“I am full of power by Yahweh’s Spirit, and of judgment, and of might, to declare to Jacob his disobedience.”" }
    ],
    traits: [
      { k: "strength", zh: "替被欺壓的人說話", en: "Speaks up for the oppressed" },
      { k: "identity", zh: "名字問「誰像耶和華」", en: "His name asks, “Who is like Yahweh?”" }
    ],
    lesson: {
      zh: "彌迦來自鄉間的摩利沙（1:1），卻敢向京城的首領、祭司和先知說話（3:8-11）；他的名字「誰像耶和華」，在全書最後一問「有何神像你」得到回應（7:18）。",
      en: "Micah comes from the countryside village of Moresheth (1:1) yet dares to speak to the capital’s rulers, priests and prophets (3:8–11); his name, “Who is like Yahweh?”, is answered by the book’s last question, “Who is a God like you?” (7:18)."
    },
    quote: { ref: "3:8",
      zh: "我藉耶和華的靈，滿有力量、公平、才能",
      en: "I am full of power by Yahweh’s Spirit, and of judgment, and of might" },
    keyVerses: ["1:1", "3:8", "7:7"],
    intro: {
      zh: "彌迦是摩利沙人（1:1）。摩利沙通常被認為就是 1:14 的摩利設‧迦特，在猶大西南的低地，離京城耶路撒冷有一段距離。他在猶大王約坦、亞哈斯、希西家在位的日子得耶和華的默示，論撒馬利亞和耶路撒冷（1:1）——也就是北國和南國的首都。他的書常提到城裡的不公：貪圖田地房屋（2:2）、首領為賄賂行審判（3:11）、詭詐的天平（6:11）。耶利米書 26:17-19 記得，後來有長老引用彌迦在希西家日子說的話（彌 3:12），為耶利米辯護。",
      en: "Micah is from Moresheth (1:1), usually identified with the Moresheth Gath of 1:14, in the lowland southwest of Judah, some way from the capital. He receives Yahweh’s word in the days of Jotham, Ahaz and Hezekiah, concerning Samaria and Jerusalem (1:1) — the capitals of the northern and southern kingdoms. His book keeps returning to injustice in the cities: coveting fields and houses (2:2), leaders judging for bribes (3:11), dishonest scales (6:11). Jeremiah 26:17–19 records elders later quoting what Micah said in Hezekiah’s days (Mic 3:12) to defend Jeremiah."
    },
    tip: {
      zh: "彌迦書 4:1-3 和以賽亞書 2:2-4 幾乎相同，誰引用誰，或兩者同引自一個來源，學者看法不一。",
      en: "Micah 4:1–3 and Isaiah 2:2–4 are almost identical; scholars differ on whether one quoted the other or both drew on a common source."
    },
    related: ["lord_descends", "rulers_butchers", "zion_field", "what_lord_requires", "god_like_you"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "lord_descends", book: "micah", no: 2, kind: "other", type: "power", rarity: 3,
    zh: "耶和華降臨作見證", en: "Yahweh Comes Down",
    tag: { zh: "山如蠟化，撒馬利亞變亂堆", en: "Mountains Melt, Samaria Becomes Rubble" },
    role: { zh: "開場的審判（1:2-9）", en: "The opening judgment (1:2–9)" },
    ch: [1],
    passages: ["1:2-9"],
    moves: [
      { zh: "出了他的居所", en: "Out of His Place", ref: "1:3-4",
        dzh: "耶和華降臨步行地的高處，眾山消化，諸谷崩裂，如蠟化在火中。",
        den: "Yahweh comes down and treads the high places; the mountains melt and the valleys split, like wax before fire." },
      { zh: "撒馬利亞變為亂堆", en: "Samaria a Rubble Heap", ref: "1:6-7",
        dzh: "我必使撒馬利亞變為田野的亂堆，她一切雕刻的偶像必被打碎。",
        den: "“I will make Samaria like a rubble heap of the field,” and all her idols will be beaten to pieces." }
    ],
    traits: [
      { k: "strength", zh: "連大山都在祂腳下消化", en: "Even mountains melt under him" },
      { k: "weakness", zh: "罪過的根在兩座首都", en: "The sin is rooted in both capitals" }
    ],
    lesson: {
      zh: "審判從首都開始：雅各的罪過在撒馬利亞，猶大的邱壇在耶路撒冷（1:5）；耶和華要作見證的對象，是萬民（1:2）。",
      en: "Judgment begins in the capitals: Jacob’s transgression is Samaria, Judah’s high places are Jerusalem (1:5); and the witness is borne against all peoples (1:2)."
    },
    quote: { ref: "1:3",
      zh: "耶和華出了他的居所，降臨步行地的高處",
      en: "Yahweh comes out of his place, and will come down and tread on the high places" },
    keyVerses: ["1:2", "1:3-4", "1:5", "1:6-7"],
    intro: {
      zh: "第 1 章用天地的審判開場：萬民和大地都要聽，因為主耶和華要從聖殿見證他們的不是（1:2）。祂「出了他的居所，降臨步行地的高處」，眾山在祂以下消化，如蠟化在火中（1:3-4）。這一切「因雅各的罪過，以色列家的罪惡」；罪過在哪裡呢？「豈不是在撒馬利亞嗎？」猶大的邱壇「豈不是在耶路撒冷嗎？」（1:5）撒馬利亞要變為田野的亂堆，偶像被打碎（1:6-7），傷痕還延及猶大和耶路撒冷的城門（1:9）。",
      en: "Chapter 1 opens with a judgment of heaven and earth: all peoples and the earth must listen, for the Lord Yahweh will bear witness against them from his holy temple (1:2). He “comes out of his place” and treads the high places of the earth; the mountains melt under him like wax before fire (1:3–4). All this is “for the disobedience of Jacob”; where is it? “Isn’t it Samaria?” And Judah’s high places — “aren’t they Jerusalem?” (1:5). Samaria becomes a rubble heap and her idols are smashed (1:6–7), and the wound reaches even the gate of Jerusalem (1:9)."
    },
    tip: {
      zh: "1:2 的「從他的聖殿」，有人讀作天上的殿，有人讀作耶路撒冷的聖殿，經文沒有說明。",
      en: "Whether “from his holy temple” in 1:2 means the heavenly temple or the one in Jerusalem the text does not say."
    },
    related: ["micah", "town_laments", "paid_prophets", "covenant_lawsuit"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "town_laments", book: "micah", no: 3, kind: "other", type: "vision", rarity: 2,
    zh: "沿路的哀歌", en: "Laments Along the Road",
    tag: { zh: "從迦特到亞杜蘭，一城接一城", en: "From Gath to Adullam, Town After Town" },
    role: { zh: "彌迦的哀號（1:8-16）", en: "Micah’s wailing (1:8–16)" },
    ch: [1],
    passages: ["1:8-16"],
    moves: [
      { zh: "哀號如野狗", en: "Howling Like Jackals", ref: "1:8",
        dzh: "他說要大聲哀號，赤腳露體而行，呼號如野狗，哀鳴如鴕鳥。",
        den: "He says he will lament and wail, go stripped and naked, and howl like the jackals." },
      { zh: "不要在迦特報告", en: "Don’t Tell It in Gath", ref: "1:10-13",
        dzh: "他一路點名：迦特、沙斐、撒南、拉吉……災禍已臨到耶路撒冷的城門。",
        den: "He names town after town — Gath, Shaphir, Zaanan, Lachish — as evil comes down to Jerusalem’s gate." }
    ],
    traits: [
      { k: "strength", zh: "親身哀哭，不只宣告", en: "Mourns in person, not just announces" },
      { k: "identity", zh: "十一個地名串成一首歌", en: "A song strung on eleven town names" }
    ],
    lesson: {
      zh: "先知把災難說成自己的哀號：他沒有站在審判的旁邊，而是和城鎮一起哭（1:8、10）。",
      en: "The prophet turns the disaster into his own lament: he does not stand beside the judgment but weeps with the towns (1:8, 10)."
    },
    quote: { ref: "1:8",
      zh: "因此我必大聲哀號，赤腳露體而行",
      en: "For this I will lament and wail; I will go stripped and naked" },
    keyVerses: ["1:8-9", "1:10-12", "1:13-16"],
    intro: {
      zh: "從 1:8 起，先知自己出聲：因此我必大聲哀號，赤腳露體而行，呼號如野狗，哀鳴如鴕鳥。因為撒馬利亞的傷痕無法醫治，延及猶大和耶路撒冷我民的城門（1:9）。接著是一連串點名的哀歌：不要在迦特報告這事；我在伯‧亞弗拉滾於灰塵之中；沙斐、撒南、瑪律、拉吉、瑪利沙的居民……（1:10-15）；最後是「剪除你的頭髮」，因為兒女被擄去（1:16）。學者指出，這段許多地名與後面的話發音相近，形成雙關，例如伯‧亞弗拉與「灰塵」（1:10）、亞革悉與「詭詐」（1:14）、瑪利沙與「奪取」（1:15）。",
      en: "From 1:8 the prophet speaks for himself: for this I will lament and wail, go stripped and naked, howl like the jackals and moan like the owls. For her wound is incurable and has reached the gate of my people, even Jerusalem (1:9). Then comes a lament that names town after town: don’t tell it in Gath; at Beth Ophrah I have rolled in the dust; the inhabitants of Shaphir, Zaanan, Maroth, Lachish, Mareshah… (1:10–15); and finally “shave your heads,” for the children have gone into captivity (1:16). Scholars note that many of the town names sound like the words that follow, making wordplay — for instance Beth Ophrah and “dust” (1:10), Achzib and “deceitful” (1:14), Mareshah and “bring a possessor” (1:15)."
    },
    tip: {
      zh: "這段的地名多在猶大的西南低地，也就是彌迦家鄉（摩利設‧迦特，1:14）一帶。",
      en: "Many of these towns lie in the southwestern lowland of Judah — the area of Micah’s own home (Moresheth Gath, 1:14)."
    },
    related: ["micah", "lord_descends", "zion_field"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "land_grabbers", book: "micah", no: 4, kind: "person", type: "scheme", rarity: 3,
    zh: "床上圖謀的人", en: "Those Who Plot in Bed",
    tag: { zh: "天一發亮就行出來", en: "At Daybreak They Carry It Out" },
    role: { zh: "貪圖田地房屋的人（2:1-5）", en: "Those who covet fields and houses (2:1–5)" },
    ch: [2],
    passages: ["2:1-5"],
    moves: [
      { zh: "禍哉", en: "Woe", ref: "2:1",
        dzh: "他們在床上圖謀罪孽；天一發亮，因手有能力就行出來了。",
        den: "“Woe to those who devise iniquity and work evil on their beds!” At daylight they do it, because it is in their power." },
      { zh: "貪圖就佔據", en: "Covet, Then Seize", ref: "2:2",
        dzh: "貪圖田地就佔據，貪圖房屋便奪取，欺壓人，霸佔人的產業。",
        den: "They covet fields and seize them, houses and take them, and oppress a man and his house, even a man and his heritage." }
    ],
    traits: [
      { k: "strength", zh: "手有能力，說做就做", en: "Power in hand, so they act" },
      { k: "weakness", zh: "貪圖別人的產業", en: "Covets other people’s inheritance" }
    ],
    lesson: {
      zh: "不義從計劃開始：在床上想好，天亮就做（2:1）；耶和華回答說，祂也在「籌劃」災禍（2:3）——「圖謀」與「籌劃」，原文是同一個字。",
      en: "Injustice starts as a plan: devised in bed, done at daybreak (2:1); Yahweh answers that he is “planning” a disaster (2:3) — the “devise” and the “plan” are the same Hebrew word."
    },
    quote: { ref: "2:2",
      zh: "貪圖田地就佔據，貪圖房屋便奪取",
      en: "They covet fields, and seize them; and houses, and take them away" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4-5"],
    intro: {
      zh: "第 2 章開頭的「禍哉」，罵的是一群在床上圖謀罪孽的人（2:1）。他們貪圖田地就佔據，貪圖房屋便奪取，欺壓人，霸佔人的房屋和產業（2:2）。在以色列，土地是按家族分配的產業（2:5「拈鬮拉準繩」就是分地的畫面），所以這是在奪取別人的家業和生計。耶和華回答：我也籌劃災禍降與這族，你們不能昂首而行（2:3）；到那日，被奪的人要唱起哀歌：「耶和華將我們的分轉歸別人」（2:4）；這樣的人在耶和華的會中將不再有分地的份（2:5）。",
      en: "The “Woe” that opens chapter 2 is aimed at people who devise iniquity on their beds (2:1). They covet fields and seize them, houses and take them, oppressing a man and his house, even a man and his heritage (2:2). In Israel land was an allotted family inheritance (the “line by lot” of 2:5 is a land-distribution picture), so this is taking people’s homes and livelihood. Yahweh answers: I am planning a disaster against this clan; you will not walk haughtily (2:3); in that day the dispossessed will take up a lament, “My people’s possession is divided up” (2:4); and these people will have no one to apportion land for them in Yahweh’s assembly (2:5)."
    },
    tip: {
      zh: "2:6 的「他們」，和合本註明「或譯：假先知」，說話的人從這裡轉換，下一張卡就是這一段。",
      en: "In 2:6 the 和合本 notes that “they” can be read “the false prophets”; the speakers change from here, which is the next card."
    },
    related: ["paid_prophets", "rulers_butchers", "false_scales", "lord_descends"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "rulers_butchers", book: "micah", no: 5, kind: "person", type: "scheme", rarity: 4,
    zh: "雅各的首領", en: "The Rulers of Jacob",
    tag: { zh: "為賄賂行審判，卻說耶和華在我們中間", en: "Judging for Bribes, Yet “Isn’t Yahweh Among Us?”" },
    role: { zh: "首領、祭司、先知（3:1-4、9-11）", en: "Rulers, priests, prophets (3:1–4, 9–11)" },
    ch: [3],
    passages: ["3:1-4", "3:9-11"],
    moves: [
      { zh: "你們不當知道公平嗎？", en: "Isn’t It for You to Know Justice?", ref: "3:1-3",
        dzh: "首領本該知道公平，卻惡善好惡，像從人身上剝皮、從骨頭上剔肉。",
        den: "The heads of Jacob should know justice, yet they hate the good and love the evil, treating people like meat for the pot." },
      { zh: "三種人都為錢", en: "All Three for Money", ref: "3:11",
        dzh: "首領為賄賂行審判，祭司為雇價施訓誨，先知為銀錢行占卜。",
        den: "Her leaders judge for bribes, her priests teach for a price, her prophets tell fortunes for money — yet they say, “Isn’t Yahweh among us?”" }
    ],
    traits: [
      { k: "weakness", zh: "以人血建立錫安", en: "Build Zion with blood" },
      { k: "identity", zh: "仍倚賴耶和華的名", en: "Still lean on Yahweh’s name" }
    ],
    lesson: {
      zh: "宗教的外表不能代替公平：他們說「耶和華不是在我們中間嗎？」（3:11），行事卻厭惡公平、屈枉正直（3:9）。",
      en: "A religious front is no substitute for justice: they say “Isn’t Yahweh among us?” (3:11) while they abhor justice and pervert equity (3:9)."
    },
    quote: { ref: "3:11",
      zh: "首領為賄賂行審判；祭司為雇價施訓誨；先知為銀錢行占卜",
      en: "Her leaders judge for bribes, and her priests teach for a price" },
    keyVerses: ["3:1-3", "3:4", "3:9-10", "3:11"],
    intro: {
      zh: "第 3 章對「雅各的首領，以色列家的官長」說話：你們不當知道公平嗎？（3:1）他們卻惡善好惡，像從人身上剝皮、從人骨頭上剔肉（3:2-3）——這是比喻，把壓榨百姓說成像把人當肉來處理。到了遭災的時候，他們哀求耶和華，祂卻不應允（3:4）。3:9-11 再數他們的罪：厭惡公平，屈枉正直，以人血和罪孽建立錫安；首領為賄賂行審判，祭司為雇價施訓誨，先知為銀錢行占卜。他們卻倚賴耶和華，說：「耶和華不是在我們中間嗎？災禍必不臨到我們。」（3:11）",
      en: "Chapter 3 speaks to “the heads of Jacob and rulers of the house of Israel”: isn’t it for you to know justice? (3:1). Yet they hate the good, love the evil, and tear skin and flesh from the bones (3:2–3) — a picture of crushing the people as if they were meat for the pot. When trouble comes they cry to Yahweh, but he does not answer (3:4). Verses 9–11 count their sins: they abhor justice, pervert equity, build Zion with blood and Jerusalem with iniquity; leaders judge for bribes, priests teach for a price, prophets tell fortunes for money. Yet they lean on Yahweh and say, “Isn’t Yahweh among us? No disaster will come on us” (3:11)."
    },
    tip: {
      zh: "3:2-3 的剝皮、吃肉是比喻；3:4 說他們求告時耶和華「掩面」，與 3:7 先見和占卜的人「摀著嘴唇，因為神不應允他們」相呼應。",
      en: "The skinning and eating of 3:2–3 is a figure of speech; the hidden face of 3:4 echoes 3:7, where seers and diviners cover their lips “for there is no answer from God.”"
    },
    related: ["paid_prophets", "land_grabbers", "zion_field", "micah"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "paid_prophets", book: "micah", no: 6, kind: "person", type: "scheme", rarity: 3,
    zh: "說「平安」的先知", en: "Prophets Who Say “Peace”",
    tag: { zh: "有東西吃就說平安", en: "“Peace!” — for Whoever Feeds Them" },
    role: { zh: "使我民走差路的先知（2:6-11；3:5-7）", en: "Prophets who lead the people astray (2:6–11; 3:5–7)" },
    ch: [2, 3],
    passages: ["2:6-11", "3:5-7"],
    moves: [
      { zh: "不可說預言", en: "“Don’t Prophesy!”", ref: "2:6-7",
        dzh: "有人說「不可說預言」；耶和華回答：我的話豈不是與行動正直的人有益嗎？",
        den: "People say, “Don’t prophesy!” Yahweh answers that his words do good to the one who walks uprightly." },
      { zh: "牙齒有所嚼的，就說平安", en: "Peace for Whoever Feeds Them", ref: "3:5",
        dzh: "有東西供給他們吃，他們就呼喊平安；不供給的，他們就預備攻擊他。",
        den: "For those who feed their teeth they proclaim “Peace!”; against whoever doesn’t provide for them they prepare war." }
    ],
    traits: [
      { k: "weakness", zh: "信息隨著餵養而變", en: "Their message follows their meal" },
      { k: "identity", zh: "最合民意的先知（2:11）", en: "The prophet people would prefer (2:11)" }
    ],
    lesson: {
      zh: "有人餵養就說平安，沒有就預備攻擊（3:5）——真假之別，不在說得多好聽，而在是不是照著耶和華的靈說公平（3:8）。",
      en: "They say “Peace!” for whoever feeds them and prepare war on whoever doesn’t (3:5) — true and false prophets are told apart not by how pleasant they sound but by speaking justice by Yahweh’s Spirit (3:8)."
    },
    quote: { ref: "3:5",
      zh: "他們牙齒有所嚼的，他們就呼喊說：平安了",
      en: "for those who feed their teeth, they proclaim, “Peace!”" },
    keyVerses: ["2:6-7", "2:11", "3:5", "3:6-8"],
    intro: {
      zh: "2:6 有人對彌迦說：不可說預言；他們不願意聽彌迦這類的話。2:11 說，若有人心存虛假，用謊言說「我要向你們預言得清酒和濃酒」，那人就必作這民的先知——一個說人愛聽的話的人。3:5 把話說得更白：論到使我民走差路的先知，有東西可嚼，就呼喊「平安了」，沒有供給的，就預備攻擊他。耶和華說，他們要遭遇黑夜，不見異象，神也不應允（3:6-7）。相對地，彌迦說自己「藉耶和華的靈，滿有力量、公平、才能」（3:8）。",
      en: "In 2:6 people tell Micah, “Don’t prophesy!”; they do not want his kind of message. Verse 2:11 says that if a man walking in a spirit of falsehood lies, “I will prophesy to you of wine and strong drink,” he would be this people’s prophet — someone who says what they like to hear. Verse 3:5 puts it more bluntly: the prophets who lead my people astray proclaim “Peace!” for those who feed their teeth, and prepare war against whoever doesn’t provide for them. Yahweh says night will come over them, with no vision and no answer from God (3:6–7). In contrast Micah says he is “full of power by Yahweh’s Spirit, and of judgment, and of might” (3:8)."
    },
    tip: {
      zh: "2:6-11 說話的人不易分辨：誰在說「不可說預言」、誰在回應，和合本與 WEB 的斷法不同，解釋也不一。",
      en: "It is hard to tell who is speaking in 2:6–11 — who says “Don’t prophesy” and who answers; the 和合本 and WEB divide it differently and interpreters differ."
    },
    related: ["rulers_butchers", "land_grabbers", "micah"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "zion_field", book: "micah", no: 7, kind: "other", type: "power", rarity: 4,
    zh: "被耕種的錫安", en: "Zion Plowed Like a Field",
    tag: { zh: "聖殿的山變成叢林", en: "The Temple Mount Becomes a Wooded Height" },
    role: { zh: "第 3 章的結論（3:12）", en: "The verdict of chapter 3 (3:12)" },
    ch: [3],
    passages: ["3:11-12"],
    moves: [
      { zh: "耶和華不是在我們中間嗎？", en: "“Isn’t Yahweh Among Us?”", ref: "3:11",
        dzh: "首領、祭司、先知都為錢行事，卻說：耶和華不是在我們中間嗎？災禍必不臨到。",
        den: "Leaders, priests and prophets all work for pay, yet say, “Isn’t Yahweh among us? No disaster will come on us.”" },
      { zh: "錫安必被耕種", en: "Zion Plowed", ref: "3:12",
        dzh: "因你們的緣故，錫安必被耕種像一塊田，耶路撒冷必變為亂堆。",
        den: "Because of you, Zion will be plowed like a field, and Jerusalem will become heaps of rubble." }
    ],
    traits: [
      { k: "strength", zh: "一句話，成了後世的引文", en: "One sentence, quoted generations later" },
      { k: "weakness", zh: "以為聖殿保證平安", en: "Thought the temple guaranteed safety" }
    ],
    lesson: {
      zh: "聖殿不是護身符：說「耶和華不是在我們中間嗎」的人，聽見的是聖殿的山也要被耕種（3:11-12）。耶利米書 26:18-19 記得，希西家聽了這話，敬畏耶和華，神就後悔，不降所說的災。",
      en: "The temple is no amulet: those who say “Isn’t Yahweh among us?” hear that the temple mountain will be plowed (3:11–12). Jeremiah 26:18–19 recalls that Hezekiah feared Yahweh, and Yahweh relented of the disaster."
    },
    quote: { ref: "3:12",
      zh: "錫安必被耕種像一塊田",
      en: "Zion for your sake will be plowed like a field" },
    keyVerses: ["3:11", "3:12"],
    intro: {
      zh: "3:12 是第 1-3 章的結論：「因你們的緣故，錫安必被耕種像一塊田，耶路撒冷必變為亂堆；這殿的山必像叢林的高處。」說這話的對象，正是自以為有耶和華同在、災禍必不臨到的首領（3:11）。後來，耶利米說類似的話時，國中的長老引用這節為他辯護（耶 26:17-19）：猶大王希西家和猶大眾人豈是把彌迦治死呢？希西家豈不是敬畏耶和華、懇求他的恩嗎？耶和華就後悔，不把自己所說的災禍降與他們。",
      en: "Verse 3:12 is the conclusion of chapters 1–3: “Therefore Zion for your sake will be plowed like a field, and Jerusalem will become heaps of rubble, and the mountain of the temple like the high places of a forest.” It is aimed at the leaders who think Yahweh’s presence rules out disaster (3:11). Later, when Jeremiah spoke in similar terms, elders of the land quoted this verse in his defense (Jer 26:17–19): did Hezekiah and Judah put Micah to death? Didn’t Hezekiah fear Yahweh and seek his favor, so that Yahweh relented of the disaster he had spoken?"
    },
    tip: {
      zh: "3:12 緊接著 4:1：同一座「殿的山」，3:12 被耕種成田，4:1 卻「必堅立，超乎諸山」。",
      en: "3:12 is followed immediately by 4:1: the same “mountain of the temple” is plowed as a field in 3:12 and “established… above the hills” in 4:1."
    },
    related: ["rulers_butchers", "mountain_peace", "micah"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "mountain_peace", book: "micah", no: 8, kind: "other", type: "vision", rarity: 4,
    zh: "耶和華殿的山", en: "The Mountain of Yahweh’s House",
    tag: { zh: "刀打成犁頭，各坐葡萄樹下", en: "Swords Into Plowshares, Each Under His Vine" },
    role: { zh: "末後的日子（4:1-5）", en: "The latter days (4:1–5)" },
    ch: [4],
    passages: ["4:1-5"],
    moves: [
      { zh: "萬民流歸這山", en: "The Nations Stream In", ref: "4:1-2",
        dzh: "末後的日子，耶和華殿的山高舉過於萬嶺，許多國的民說：來吧，我們登耶和華的山。",
        den: "In the latter days the mountain of Yahweh’s temple is exalted, and many nations say, “Come, let us go up to the mountain of Yahweh.”" },
      { zh: "刀打成犁頭", en: "Swords Into Plowshares", ref: "4:3-4",
        dzh: "他們將刀打成犁頭，不再學習戰事；人人坐在自己的葡萄樹和無花果樹下。",
        den: "They beat their swords into plowshares and learn war no more; everyone sits under his own vine and fig tree, unafraid." }
    ],
    traits: [
      { k: "strength", zh: "萬民來向祂學習", en: "The nations come to be taught" },
      { k: "identity", zh: "與以賽亞書 2 章幾乎相同", en: "Almost identical to Isaiah 2" }
    ],
    lesson: {
      zh: "和平是「教訓」帶來的：萬民上山，是為了「主必將他的道教訓我們，我們也要行他的路」（4:2）；4:5 又補上一句：我們要永永遠遠奉耶和華的名而行。",
      en: "Peace comes through teaching: the nations go up so that “he will teach us of his ways, and we will walk in his paths” (4:2); and 4:5 adds, “we will walk in the name of Yahweh our God forever.”"
    },
    quote: { ref: "4:3",
      zh: "他們要將刀打成犁頭，把槍打成鐮刀",
      en: "They will beat their swords into plowshares, and their spears into pruning hooks" },
    keyVerses: ["4:1-2", "4:3", "4:4-5"],
    intro: {
      zh: "4:1-5 的畫面與以賽亞書 2:2-4 幾乎相同：末後的日子，耶和華殿的山必堅立，超乎諸山；萬民都要流歸這山，說：來吧，我們登耶和華的山……主必將他的道教訓我們（4:1-2）。祂在多國的民中施行審判，他們要將刀打成犁頭，把槍打成鐮刀，不再學習戰事（4:3）。人人坐在自己葡萄樹下和無花果樹下，無人驚嚇（4:4）。4:5 是這段在以賽亞書 2:2-4 沒有對應的一節：萬民各奉己神的名而行，我們卻永永遠遠奉耶和華的名而行。約珥書 3:10 則把這句話倒過來說：將犁頭打成刀劍。",
      en: "The picture of 4:1–5 is almost the same as Isaiah 2:2–4: in the latter days the mountain of Yahweh’s temple is established above the mountains; peoples stream to it, saying, “Come, let us go up to the mountain of Yahweh… he will teach us of his ways” (4:1–2). He judges between many peoples, and they beat their swords into plowshares and their spears into pruning hooks, learning war no more (4:3). Everyone sits under his own vine and fig tree, and no one makes them afraid (4:4). Verse 4:5 has no counterpart in Isaiah 2:2–4: all the nations walk in the name of their gods, but “we” will walk in the name of Yahweh our God forever. Joel 3:10 says the same thing in reverse: beat your plowshares into swords."
    },
    tip: {
      zh: "「各人坐在自己葡萄樹和無花果樹下」的畫面，也見於列王紀上 4:25 所羅門的太平日子的描述。",
      en: "The picture of each person under his own vine and fig tree is also used of the peace of Solomon’s days in 1 Kings 4:25."
    },
    related: ["zion_field", "zion_labor", "bethlehem", "micah"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "zion_labor", book: "micah", no: 9, kind: "other", type: "power", rarity: 3,
    zh: "產難與解救", en: "Labor Pains and Rescue",
    tag: { zh: "出城，到巴比倫去，在那裡被救贖", en: "Out of the City, to Babylon — and Redeemed There" },
    role: { zh: "錫安的苦與勝（4:9-13）", en: "Zion’s pain and victory (4:9–13)" },
    ch: [4],
    passages: ["4:9-13"],
    moves: [
      { zh: "疼痛彷彿產難的婦人", en: "Pain Like a Woman in Labor", ref: "4:9-10",
        dzh: "錫安要疼痛如產難的婦人：出城、住田野、到巴比倫去，在那裡耶和華必救贖她。",
        den: "Daughter Zion will writhe like a woman in labor: out of the city, into the field, even to Babylon — and there Yahweh will redeem her." },
      { zh: "起來踹穀吧", en: "Arise and Thresh", ref: "4:12-13",
        dzh: "列國被聚集如禾捆到禾場；錫安的角成為鐵，蹄成為銅，要踹穀。",
        den: "The nations are gathered like sheaves to the threshing floor; Zion’s horn becomes iron and her hoofs bronze, and she threshes." }
    ],
    traits: [
      { k: "strength", zh: "從痛苦走向被救贖", en: "From pain to redemption" },
      { k: "identity", zh: "「錫安的女子」", en: "“Daughter of Zion”" }
    ],
    lesson: {
      zh: "神的救贖不繞過苦難：錫安要出城、住田野、到巴比倫去，而「在那裡」（兩次）耶和華要救贖她（4:10）；列國的圍攻，也在祂的籌劃之內（4:12）。",
      en: "God’s redemption does not bypass suffering: Zion must go out of the city, live in the field and come even to Babylon, and “there” (twice) Yahweh will redeem her (4:10); the nations’ siege is within his counsel (4:12)."
    },
    quote: { ref: "4:10",
      zh: "在那裡耶和華必救贖你脫離仇敵的手",
      en: "There Yahweh will redeem you from the hand of your enemies" },
    keyVerses: ["4:9-10", "4:11-12", "4:13"],
    intro: {
      zh: "4:9-10 把耶路撒冷的處境比作產難的婦人：疼痛抓住你，彷彿產難的婦人。耶和華說，你必從城裡出來，住在田野，到巴比倫去；「在那裡要蒙解救；在那裡耶和華必救贖你脫離仇敵的手」（4:10）。彌迦的時代，亞述才是主要的強權，這裡卻提到巴比倫，學者的解釋不一：有人讀作預言日後的被擄，也有人認為這些話是在被擄時代加入的。4:11-13 說許多國聚集攻擊錫安，卻不知道耶和華的意念：祂聚集他們，像把禾捆聚到禾場（4:12）。",
      en: "Verses 4:9–10 compare Jerusalem’s plight to a woman in labor. Yahweh says you will go out of the city, live in the field, and come even to Babylon; “there you will be rescued. There Yahweh will redeem you from the hand of your enemies” (4:10). In Micah’s day Assyria, not Babylon, was the great power, so interpreters differ: some read this as a prophecy of the later exile, others think these words were added in the exile. Verses 4:11–13 describe many nations assembling against Zion, not knowing Yahweh’s thoughts: he has gathered them like sheaves to the threshing floor (4:12)."
    },
    tip: {
      zh: "和合本 4:8、10、13 都在「錫安的民」旁註明「原文是女子」：原文是擬人的稱呼，「錫安的女子」。",
      en: "In 4:8, 10 and 13 the 和合本 notes “原文是女子” beside “Zion’s people”: the Hebrew is the personified “daughter of Zion.”"
    },
    related: ["mountain_peace", "zion_field", "bethlehem", "remnant_dew_lion"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "bethlehem", book: "micah", no: 10, kind: "person", type: "heaven", rarity: 5,
    zh: "伯利恆的掌權者", en: "The Ruler From Bethlehem",
    tag: { zh: "你在猶大諸城中為小", en: "Small Among the Clans of Judah" },
    role: { zh: "牧養的君王（5:1-6）", en: "The shepherd-ruler (5:1–6)" },
    ch: [5],
    passages: ["5:1-6"],
    moves: [
      { zh: "伯利恆的以法他啊", en: "Bethlehem Ephrathah", ref: "5:2",
        dzh: "你在猶大諸城中為小，將來必有一位從你那裡出來，在以色列中為我作掌權的。",
        den: "Though small among the clans of Judah, out of Bethlehem Ephrathah one will come out to me to be ruler in Israel." },
      { zh: "牧養他的羊群", en: "He Will Shepherd", ref: "5:4-5",
        dzh: "他倚靠耶和華的大能牧養他的羊群，日見尊大，直到地極；這位必作我們的平安。",
        den: "He will shepherd in Yahweh’s strength, be great to the ends of the earth, and be our peace." }
    ],
    traits: [
      { k: "strength", zh: "根源從亙古，從太初就有", en: "His origins are from of old" },
      { k: "identity", zh: "新約引用這節（太 2:5-6）", en: "Quoted in Matthew 2:5–6" }
    ],
    lesson: {
      zh: "神常從渺小處開始：伯利恆「在猶大諸城中為小」，掌權者卻從那裡出來（5:2）；他的工作是牧養，帶來平安（5:4-5）。",
      en: "God often begins small: Bethlehem is “small among the clans of Judah,” yet the ruler comes from there (5:2); his work is shepherding and bringing peace (5:4–5)."
    },
    quote: { ref: "5:2",
      zh: "伯利恆的以法他啊，你在猶大諸城中為小",
      en: "But you, Bethlehem Ephrathah, being small among the clans of Judah" },
    keyVerses: ["5:1", "5:2", "5:3", "5:4-5"],
    intro: {
      zh: "5:1 描寫耶路撒冷被圍困，仇敵要用杖擊打以色列審判者的臉。接著 5:2 是一句盼望：伯利恆的以法他啊，你在猶大諸城中為小，將來必有一位從你那裡出來，在以色列中為我作掌權的；「他的根源從亙古，從太初就有」。5:3 說，這要等到「生產的婦人生下子來」；5:4 他要倚靠耶和華的大能牧養他的羊群，直到地極；5:5 「這位必作我們的平安」。馬太福音 2:4-6 記載，祭司長和文士回答希律「基督當生在何處」時，引用了這一段，答案是伯利恆；約翰福音 7:42 也提到基督要從伯利恆出來。基督教傳統依新約把這節讀為指向耶穌；經文原來的處境（亞述的威脅，5:1、5-6）和這位掌權者的身分，解經者另有不同的讀法，本站標明解釋不一，不替你決定。",
      en: "Verse 5:1 pictures Jerusalem besieged, with the judge of Israel struck on the cheek. Then 5:2 offers hope: Bethlehem Ephrathah, small among the clans of Judah, out of you will come one to be ruler in Israel, “whose goings out are from of old, from ancient times.” Verse 5:3 says this waits until “she who is in labor gives birth”; in 5:4 he shepherds in Yahweh’s strength to the ends of the earth; in 5:5 “he will be our peace.” Matthew 2:4–6 records the chief priests and scribes quoting this passage when Herod asks where the Christ would be born — Bethlehem; John 7:42 also says the Christ comes from Bethlehem. Christian tradition, following the New Testament, reads this verse of Jesus; the original setting (the Assyrian threat, 5:1, 5–6) and the ruler’s identity are read differently by other interpreters, so we flag it as debated and do not choose for you."
    },
    tip: {
      zh: "5:5 的「七個牧者，八個首領」是希伯來詩常見的數字並行（參阿摩司書 1:3 的「三番四次」），常被讀作「足夠的領袖」，不必逐字數。",
      en: "“Seven shepherds, eight leaders” in 5:5 is Hebrew poetry’s usual number parallelism (compare Amos 1:3, “three transgressions… yes, four”), often read as “enough leaders” rather than a literal count."
    },
    related: ["zion_labor", "remnant_dew_lion", "mountain_peace", "micah"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "remnant_dew_lion", book: "micah", no: 11, kind: "other", type: "beast", rarity: 3,
    zh: "餘剩之民：露水與獅子", en: "The Remnant: Dew and Lion",
    tag: { zh: "不仗賴人力，也不等候世人之功", en: "Not Waiting on Human Strength" },
    role: { zh: "雅各餘剩的人（5:7-15）", en: "The remnant of Jacob (5:7–15)" },
    ch: [5],
    passages: ["5:7-15"],
    moves: [
      { zh: "如露水，如獅子", en: "Like Dew, Like a Lion", ref: "5:7-8",
        dzh: "雅各餘剩的人在多國中，如耶和華降下的露水，又如林間百獸中的獅子。",
        den: "The remnant of Jacob among the nations will be like dew from Yahweh, and like a lion among the animals of the forest." },
      { zh: "剪除馬匹和偶像", en: "Horses and Idols Cut Off", ref: "5:10-14",
        dzh: "到那日，耶和華從他們中間剪除馬匹、車輛、邪術和雕刻的偶像。",
        den: "In that day Yahweh cuts off their horses and chariots, their witchcraft and their carved images from among them." }
    ],
    traits: [
      { k: "strength", zh: "兩個相反的畫面：柔和與威猛", en: "Two opposite pictures: gentle and fierce" },
      { k: "weakness", zh: "倚靠馬匹、城邑和偶像", en: "Leaning on horses, fortresses and idols" }
    ],
    lesson: {
      zh: "餘剩之民的力量不來自自己：像露水「不仗賴人力」（5:7），所以耶和華要先除去他們倚靠的馬匹、保障和偶像（5:10-14）。",
      en: "The remnant’s strength does not come from itself: like dew it does not “wait for man” (5:7), so Yahweh first removes the horses, strongholds and idols they lean on (5:10–14)."
    },
    quote: { ref: "5:7",
      zh: "雅各餘剩的人必在多國的民中，如從耶和華那裡降下的露水",
      en: "The remnant of Jacob will be among many peoples, like dew from Yahweh" },
    keyVerses: ["5:7", "5:8-9", "5:10-14"],
    intro: {
      zh: "「餘剩之民」是先知書常見的詞。5:7 說雅各餘剩的人在多國的民中，如從耶和華那裡降下的露水，又如甘霖降在草上，「不仗賴人力，也不等候世人之功」。5:8 又說他們如林間百獸中的獅子。兩個畫面相反：露水柔和無聲，獅子威猛；經文並列這兩個畫面，沒有說哪一個才是重點。到那日，耶和華要從他們中間剪除馬匹和車輛、除滅城邑和保障、除掉邪術占卜和一切偶像（5:10-14）；5:15 說祂也要向那不聽從的列國施報。",
      en: "“The remnant” is a favorite prophetic word. Verse 5:7 says the remnant of Jacob among many peoples will be like dew from Yahweh, like showers on the grass, “that don’t wait for man.” Verse 5:8 says they will be like a lion among the animals of the forest. The two pictures are opposites — dew is gentle and silent, a lion fierce; the text sets them side by side without saying which matters more. In that day Yahweh will cut off their horses and chariots, tear down their strongholds, and destroy witchcraft, soothsayers and every idol (5:10–14); verse 5:15 says he will also take vengeance on the nations that did not listen."
    },
    tip: {
      zh: "「餘剩之民」在彌迦書出現多次（2:12；4:7；5:7-8；7:18），像一條線把書的各部分串起來。",
      en: "“The remnant” recurs through the book (2:12; 4:7; 5:7–8; 7:18), a thread tying its parts together."
    },
    related: ["bethlehem", "zion_labor", "fallen_shall_rise", "god_like_you"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "covenant_lawsuit", book: "micah", no: 12, kind: "other", type: "wisdom", rarity: 4,
    zh: "耶和華的訟案", en: "Yahweh’s Lawsuit",
    tag: { zh: "我的百姓啊，我向你做了甚麼呢？", en: "“My People, What Have I Done to You?”" },
    role: { zh: "第 6 章的開場（6:1-5）", en: "The opening of chapter 6 (6:1–5)" },
    ch: [6],
    passages: ["6:1-5"],
    moves: [
      { zh: "向山嶺爭辯", en: "Plead Before the Mountains", ref: "6:1-2",
        dzh: "耶和華要與百姓爭辯，叫山嶺和地永久的根基來聽。",
        den: "Yahweh has a controversy with his people, and calls the mountains and the enduring foundations of the earth to hear it." },
      { zh: "我向你做了甚麼呢？", en: "What Have I Done to You?", ref: "6:3-5",
        dzh: "祂問：我在甚麼事上使你厭煩？接著提起出埃及，和摩西、亞倫、米利暗。",
        den: "He asks how he has burdened them, then recalls the Exodus and the Moses, Aaron and Miriam he sent before them." }
    ],
    traits: [
      { k: "strength", zh: "用施恩的歷史來對質", en: "Argues from a history of rescue" },
      { k: "identity", zh: "山嶺作陪審團", en: "The mountains as jury" }
    ],
    lesson: {
      zh: "神的控告以「我向你做了甚麼」開始：祂先數算自己的救贖（出埃及、摩西、亞倫、米利暗），好使百姓「知道耶和華公義的作為」（6:3-5）。",
      en: "God’s charge opens with “what have I done to you?”: he first recounts his own rescues (Egypt, Moses, Aaron, Miriam) so that the people “may know the righteous acts of Yahweh” (6:3–5)."
    },
    quote: { ref: "6:3",
      zh: "我的百姓啊，我向你做了甚麼呢",
      en: "My people, what have I done to you" },
    keyVerses: ["6:1-2", "6:3", "6:4", "6:5"],
    intro: {
      zh: "第 6 章像一場審判的庭訊：耶和華叫以色列「向山嶺爭辯」，使岡陵聽（6:1）；山嶺和地永久的根基是聽眾，因為耶和華要與祂的百姓爭辯（6:2）。祂先問的不是百姓的罪，而是：「我的百姓啊，我向你做了甚麼呢？我在甚麼事上使你厭煩？」（6:3）再回顧出埃及，並提到祂差遣在百姓前面行的三人：摩西、亞倫和米利暗（6:4；米利暗見出 15:20）。6:5 又要他們追念摩押王巴勒所設的謀、比珥的兒子巴蘭的回答（民 22 章起），並從什亭到吉甲所遇見的事（書 3:1；4:19），好使他們知道耶和華公義的作為。",
      en: "Chapter 6 reads like a trial: Yahweh tells Israel to “plead your case before the mountains” and let the hills hear (6:1); the mountains and the enduring foundations of the earth are the audience, for Yahweh has a controversy with his people (6:2). He does not begin with their sins but with a question: “My people, what have I done to you? How have I burdened you? Answer me!” (6:3). Then he recalls the Exodus and names the three he sent before them: Moses, Aaron and Miriam (6:4; for Miriam see Exod 15:20). Verse 6:5 tells them to remember what Balak king of Moab devised and what Balaam son of Beor answered (Num 22 ff.), and what happened from Shittim to Gilgal (Josh 3:1; 4:19), so that they may know Yahweh’s righteous acts."
    },
    tip: {
      zh: "6:4 把米利暗與摩西、亞倫並列為領袖（出 15:20 稱她為「女先知」）。",
      en: "Verse 6:4 lists Miriam alongside Moses and Aaron as a leader (Exod 15:20 calls her “the prophetess”)."
    },
    related: ["what_lord_requires", "lord_descends", "false_scales", "micah"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "what_lord_requires", book: "micah", no: 13, kind: "other", type: "love", rarity: 5,
    zh: "耶和華向你所要的", en: "What Yahweh Requires",
    tag: { zh: "行公義，好憐憫，存謙卑的心", en: "Act Justly, Love Mercy, Walk Humbly" },
    role: { zh: "全書最有名的一節（6:6-8）", en: "The book’s most famous verse (6:6–8)" },
    ch: [6],
    passages: ["6:6-8"],
    moves: [
      { zh: "當獻上甚麼呢？", en: "What Shall I Bring?", ref: "6:6-7",
        dzh: "要獻一歲的牛犢嗎？千千的公羊、萬萬的油河，甚至我的長子嗎？",
        den: "Burnt offerings, calves a year old? Thousands of rams, tens of thousands of rivers of oil — even my firstborn?" },
      { zh: "何為善", en: "What Is Good", ref: "6:8",
        dzh: "耶和華已指示你何為善：只要你行公義，好憐憫，與你的神同行。",
        den: "He has shown you what is good: to act justly, to love mercy, and to walk humbly with your God." }
    ],
    traits: [
      { k: "strength", zh: "三件事，說得清楚", en: "Three things, plainly said" },
      { k: "identity", zh: "回答一連串越來越誇張的獻祭問句", en: "The answer to ever-bigger offering questions" }
    ],
    lesson: {
      zh: "神要的不是獻祭越來越多，而是一種生活：行公義、好憐憫、存謙卑的心，與神同行（6:8）；前後文的詭詐天平和暴力（6:10-12），讓「行公義」成了很具體的事。",
      en: "God wants not ever more offerings but a way of life — to act justly, love mercy and walk humbly with him (6:8); the dishonest scales and violence just after (6:10–12) make “act justly” very concrete."
    },
    quote: { ref: "6:8",
      zh: "只要你行公義，好憐憫，存謙卑的心，與你的神同行",
      en: "to act justly, to love mercy, and to walk humbly with your God" },
    keyVerses: ["6:6-7", "6:8"],
    intro: {
      zh: "6:6-7 是一連串越來越誇張的問題：我朝見耶和華，當獻上甚麼呢？一歲的牛犢？千千的公羊、萬萬的油河？甚至我的長子？6:8 一句話回答：「世人哪，耶和華已指示你何為善。他向你所要的是甚麼呢？只要你行公義，好憐憫，存謙卑的心，與你的神同行。」這一節常被稱為先知書教導的總結。",
      en: "Verses 6:6–7 pile up ever larger questions: how shall I come before Yahweh? Burnt offerings, calves a year old? Thousands of rams, tens of thousands of rivers of oil? My own firstborn? Verse 6:8 answers in one line: “He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?” This verse is often called a summary of the prophets’ teaching."
    },
    tip: {
      zh: "6:8 的「憐憫」和 7:18 神「喜愛施恩」，WEB 分別譯作 “mercy” 和 “loving kindness”，原文是同一個字（慈愛）：人要好憐憫，是因為神就是這樣的神。",
      en: "The “mercy” of 6:8 and the “loving kindness” God delights in at 7:18 are the same Hebrew word (chesed): we are to love mercy because God is that kind of God."
    },
    related: ["covenant_lawsuit", "false_scales", "god_like_you", "micah"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "false_scales", book: "micah", no: 14, kind: "other", type: "scheme", rarity: 3,
    zh: "詭詐的天平", en: "Dishonest Scales",
    tag: { zh: "吃卻吃不飽，撒種卻不得收割", en: "Eating Without Being Satisfied, Sowing Without Reaping" },
    role: { zh: "城裡的罪與報（6:9-16）", en: "The city’s sins and sentence (6:9–16)" },
    ch: [6],
    passages: ["6:9-16"],
    moves: [
      { zh: "不公道的天平", en: "Unjust Scales", ref: "6:10-12",
        dzh: "惡人家中有非義之財和可惡的小升斗；城裡的富戶滿行強暴，舌頭是詭詐的。",
        den: "Wicked houses hold treasures of wickedness and a short ephah; the rich are full of violence, and their tongues are deceitful." },
      { zh: "撒種，卻不得收割", en: "Sow, But Not Reap", ref: "6:14-15",
        dzh: "你要吃卻吃不飽，撒種卻不得收割，踹橄欖卻不得油抹身。",
        den: "“You shall eat, but not be satisfied… You will sow, but won’t reap. You will tread the olives, but won’t anoint yourself with oil.”" }
    ],
    traits: [
      { k: "weakness", zh: "不公道的天平和詭詐的法碼", en: "Dishonest scales and deceitful weights" },
      { k: "identity", zh: "效法暗利和亞哈家", en: "Imitates Omri and Ahab’s house" }
    ],
    lesson: {
      zh: "神責備的不只是偶像，也是日常交易：不公道的天平和詭詐的法碼（6:11），與效法暗利、亞哈家的惡規（6:16）一同受審判；報應也是日常的：吃不飽、收不到（6:14-15）。",
      en: "God rebukes not only idolatry but everyday trade: unjust scales and deceitful weights (6:11) are judged with the following of Omri’s and Ahab’s statutes (6:16); and the sentence is everyday too — not satisfied, nothing reaped (6:14–15)."
    },
    quote: { ref: "6:11",
      zh: "我若用不公道的天平和囊中詭詐的法碼，豈可算為清潔呢",
      en: "Shall I be pure with dishonest scales, and with a bag of deceitful weights" },
    keyVerses: ["6:9", "6:10-12", "6:13-15", "6:16"],
    intro: {
      zh: "耶和華向這城呼叫（6:9）。祂指出的罪很日常：惡人家中有非義之財和可惡的小升斗（6:10）；不公道的天平和囊中詭詐的法碼（6:11）；城裡的富戶滿行強暴，居民說謊言，舌頭是詭詐的（6:12）。所以耶和華擊打他們：吃不飽、存不住、撒種不得收割（6:13-15）。根源是「你守暗利的惡規，行亞哈家一切所行的」（6:16）。暗利是以色列北國的王，他的兒子亞哈娶了耶洗別，在撒馬利亞建巴力的廟（王上 16:25-33）。",
      en: "Yahweh’s voice calls to the city (6:9). The sins he names are everyday ones: treasures of wickedness and a short ephah in wicked houses (6:10); dishonest scales and a bag of deceitful weights (6:11); the rich full of violence, residents who lie, deceitful tongues (6:12). So he strikes: eating without being satisfied, storing without saving, sowing without reaping (6:13–15). The root is that “the statutes of Omri are kept, and all the works of Ahab’s house” (6:16). Omri was a king of the northern kingdom; his son Ahab married Jezebel and built a temple to Baal in Samaria (1 Kgs 16:25–33)."
    },
    tip: {
      zh: "「小升斗」在 WEB 作 “short ephah”：以法是容量單位，量器縮水，買的人就吃虧。",
      en: "The “short ephah” (WEB; 和合本 “小升斗”): an ephah is a dry measure, and a shrunken measure shortchanges the buyer."
    },
    related: ["what_lord_requires", "covenant_lawsuit", "land_grabbers", "lord_descends"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "no_one_upright", book: "micah", no: 15, kind: "other", type: "harvest", rarity: 3,
    zh: "地上虔誠人滅盡", en: "No One Upright Is Left",
    tag: { zh: "我心羨慕初熟的無花果", en: "“My Soul Desires the Early Fig”" },
    role: { zh: "彌迦的哀歌（7:1-6）", en: "Micah’s lament (7:1–6)" },
    ch: [7],
    passages: ["7:1-6"],
    moves: [
      { zh: "沒有一掛可吃的", en: "No Cluster to Eat", ref: "7:1",
        dzh: "哀哉！我像夏天的果子已被收盡，沒有一掛可吃的；我心羨慕初熟的無花果。",
        den: "“Misery is mine!” Like one after the harvest — no cluster of grapes to eat; his soul desires the early fig." },
      { zh: "仇敵就是自己家裡的人", en: "Enemies in His Own House", ref: "7:5-6",
        dzh: "不要倚賴鄰舍，不要信靠密友；兒子藐視父親，人的仇敵就是自己家裡的人。",
        den: "Don’t trust a neighbor or put confidence in a friend; sons dishonor fathers, and a man’s enemies are the men of his own house." }
    ],
    traits: [
      { k: "strength", zh: "說出真實的悲傷", en: "Says the grief out loud" },
      { k: "weakness", zh: "連最好的也像蒺藜", en: "Even the best are like a brier" }
    ],
    lesson: {
      zh: "彌迦沒有假裝一切都好：他承認虔誠人滅盡、連親人也不可信（7:2、5-6），然後在 7:7 轉身，仰望耶和華。",
      en: "Micah does not pretend all is well: he admits the godly are gone and even family cannot be trusted (7:2, 5–6) — and then turns in 7:7 to look to Yahweh."
    },
    quote: { ref: "7:2",
      zh: "地上虔誠人滅盡；世間沒有正直人",
      en: "The godly man has perished out of the earth, and there is no one upright among men" },
    keyVerses: ["7:1", "7:2-3", "7:4", "7:5-6"],
    intro: {
      zh: "第 7 章是彌迦的哀歌。他像採果子的人，夏天的果子已被收盡，沒有一掛葡萄可吃，只想吃初熟的無花果（7:1）：他尋找忠心的人，卻找不到。地上虔誠人滅盡，各人埋伏要流血、用網羅獵取弟兄（7:2）；官長和審判官要賄賂（7:3）；最好的不過是蒺藜（7:4）。連最親近的人也不可信：兒子藐視父親，媳婦抗拒婆婆，人的仇敵就是自己家裡的人（7:5-6）。馬太福音 10:35-36 也用了相近的話，說到跟從耶穌會使家人生疏。",
      en: "Chapter 7 is Micah’s lament. He is like someone gathering summer fruit after the harvest, with no cluster of grapes to eat, longing for the early fig (7:1): he looks for the faithful and finds none. The godly have perished from the earth, and everyone lies in wait for blood and hunts his brother with a net (7:2); the ruler and judge ask for a bribe (7:3); the best of them is like a brier (7:4). Even the closest people cannot be trusted: son dishonors father, daughter-in-law rises against mother-in-law, a man’s enemies are in his own house (7:5–6). Matthew 10:35–36 uses similar words of the division that following Jesus brings."
    },
    tip: {
      zh: "7:1 和阿摩司書 8:1-2 都用「夏天的果子」做畫面：這裡是果子已被收盡，阿摩司那裡是結局將到。",
      en: "Both 7:1 and Amos 8:1–2 use the picture of summer fruit: here the fruit has all been gathered, in Amos it signals the end has come."
    },
    related: ["fallen_shall_rise", "rulers_butchers", "false_scales", "micah"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "fallen_shall_rise", book: "micah", no: 16, kind: "other", type: "faith", rarity: 4,
    zh: "我雖跌倒，卻要起來", en: "Though I Fall, I Will Rise",
    tag: { zh: "耶和華卻作我的光", en: "Yahweh Will Be a Light to Me" },
    role: { zh: "彌迦的盼望（7:7-10）", en: "Micah’s hope (7:7–10)" },
    ch: [7],
    passages: ["7:7-10"],
    moves: [
      { zh: "我要仰望耶和華", en: "I Will Look to Yahweh", ref: "7:7",
        dzh: "至於我，我要仰望耶和華，要等候那救我的神；我的神必應允我。",
        den: "“But as for me, I will look to Yahweh. I will wait for the God of my salvation. My God will hear me.”" },
      { zh: "忍受，直等祂伸冤", en: "Bear It Until He Pleads", ref: "7:9",
        dzh: "我要忍受耶和華的惱怒，因我得罪了他，直等他為我辨屈，領我到光明中。",
        den: "He will bear Yahweh’s indignation, because he has sinned, until Yahweh pleads his case and brings him out to the light." }
    ],
    traits: [
      { k: "strength", zh: "在黑暗中仍等候", en: "Waits even in darkness" },
      { k: "identity", zh: "承認「我得罪了他」", en: "Admits “I have sinned against him”" }
    ],
    lesson: {
      zh: "盼望不是否認黑暗：「我雖坐在黑暗裡，耶和華卻作我的光」（7:8）；同時承認自己也有罪，並等候神為他辨屈（7:9）。",
      en: "Hope is not denying the dark: “When I sit in darkness, Yahweh will be a light to me” (7:8); he also admits his own sin and waits for God to plead his case (7:9)."
    },
    quote: { ref: "7:8",
      zh: "我雖跌倒，卻要起來；我雖坐在黑暗裡，耶和華卻作我的光",
      en: "When I fall, I will arise. When I sit in darkness, Yahweh will be a light to me" },
    keyVerses: ["7:7", "7:8", "7:9", "7:10"],
    intro: {
      zh: "「至於我，我要仰望耶和華，要等候那救我的神」（7:7）——在 7:1-6 的黑暗之後，彌迦轉身說話。他對仇敵說：不要向我誇耀；我雖跌倒，卻要起來；我雖坐在黑暗裡，耶和華卻作我的光（7:8）。他承認：我要忍受耶和華的惱怒，因我得罪了他，直等他為我辨屈，為我伸冤（7:9）。仇敵曾說「耶和華─你神在哪裡」，要被羞愧遮蓋（7:10）。",
      en: "“But as for me, I will look to Yahweh. I will wait for the God of my salvation” (7:7) — after the darkness of 7:1–6, Micah turns. To the enemy he says: don’t rejoice over me; when I fall, I will arise; when I sit in darkness, Yahweh will be a light to me (7:8). He admits: I will bear Yahweh’s indignation, because I have sinned against him, until he pleads my case and executes judgment for me (7:9). The enemy who said “Where is Yahweh your God?” will be covered with shame (7:10)."
    },
    tip: {
      zh: "7:1-10 的「我」是彌迦，還是擬人的錫安／以色列？解釋不一；7:1 的和合本註也寫著「或譯：以色列」。",
      en: "Whether the “I” of 7:1–10 is Micah or personified Zion/Israel is debated; the 和合本 note at 7:1 reads “or: Israel.”"
    },
    related: ["no_one_upright", "god_like_you", "remnant_dew_lion", "micah"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "god_like_you", book: "micah", no: 17, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "有何神像你", en: "Who Is a God Like You?",
    tag: { zh: "將我們的罪投於深海", en: "Cast All Our Sins Into the Depths of the Sea" },
    role: { zh: "全書的結尾（7:18-20）", en: "The book’s ending (7:18–20)" },
    ch: [7],
    passages: ["7:18-20"],
    moves: [
      { zh: "赦免罪孽，喜愛施恩", en: "Pardons Iniquity", ref: "7:18",
        dzh: "有何神像你，赦免罪孽，饒恕餘民的罪過，不永遠懷怒，喜愛施恩？",
        den: "“Who is a God like you, who pardons iniquity… He doesn’t retain his anger forever, because he delights in loving kindness.”" },
      { zh: "投於深海", en: "Into the Depths of the Sea", ref: "7:19",
        dzh: "祂必再憐憫我們，將我們的罪孽踏在腳下，又將一切罪投於深海。",
        den: "He will again have compassion on us, tread our iniquities under foot, and cast all our sins into the depths of the sea." }
    ],
    traits: [
      { k: "strength", zh: "不永遠懷怒，喜愛施恩", en: "Not angry forever; delights in loving kindness" },
      { k: "identity", zh: "彌迦名字「誰像耶和華」的回答", en: "The answer to Micah’s name, “Who is like Yahweh?”" }
    ],
    lesson: {
      zh: "全書以赦免作結：審判再重，最後一問卻是「有何神像你」；神把罪投於深海，並按古時的起誓，向雅各發誠實，向亞伯拉罕施慈愛（7:18-20）。",
      en: "The book ends in pardon: however heavy the judgment, the last question is “Who is a God like you?”; God casts sins into the sea and, as he swore to the fathers, gives truth to Jacob and mercy to Abraham (7:18–20)."
    },
    quote: { ref: "7:18",
      zh: "有何神像你，赦免罪孽，饒恕你產業之餘民的罪過",
      en: "Who is a God like you, who pardons iniquity" },
    keyVerses: ["7:18", "7:19", "7:20"],
    intro: {
      zh: "彌迦的名字意思是「誰像耶和華」，而全書最後一段，就是這個問題的回答：「神啊，有何神像你，赦免罪孽，饒恕你產業之餘民的罪過，不永遠懷怒，喜愛施恩？」（7:18）祂必再憐憫我們，將我們的罪孽踏在腳下，又將我們的一切罪投於深海（7:19）。「你必按古時起誓應許我們列祖的話，向雅各發誠實，向亞伯拉罕施慈愛」（7:20）。這些話和出埃及記 34:6-7、約拿書 4:2 所宣告的神的性情很接近。",
      en: "Micah’s name means “Who is like Yahweh?”, and the book’s final passage answers that question: “Who is a God like you, who pardons iniquity, and passes over the disobedience of the remnant of his heritage? He doesn’t retain his anger forever, because he delights in loving kindness” (7:18). He will again have compassion on us, tread our iniquities under foot, and cast all our sins into the depths of the sea (7:19). “You will give truth to Jacob, and mercy to Abraham, as you have sworn to our fathers from the days of old” (7:20). These words are close to what Exodus 34:6–7 and Jonah 4:2 declare about God’s character."
    },
    tip: {
      zh: "約拿書 2:3 說約拿被投下「海的深處」；這裡被投進深海的，是我們的罪。",
      en: "Jonah 2:3 says Jonah was thrown into “the heart of the seas”; here what is cast into the depths of the sea is our sins."
    },
    related: ["fallen_shall_rise", "what_lord_requires", "remnant_dew_lion", "bethlehem", "micah"]
  }

);
