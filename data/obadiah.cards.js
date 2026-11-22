// 聖經人物卡 · 俄巴底亞書 (Obadiah) — book info + cards.
// Verse text comes from data/obadiah.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Gen 25:24-26, 25:30, 27:41, 33:4, 36:1,
// 36:8, 36:11; Num 20:14; Deut 23:7; Job 2:11; 1 Kgs 17:9, 18:3; Ps 137:7; Jer 49:7-16; Lam 4:21-22; Ezek 35:5;
// Joel 2:32, 3:14; Amos 1:11-12, 9:12; Mal 1:2-3) were checked against the 和合本 text and appear in prose only.
// The book is undated and does not name the "day of disaster" in vv. 11-14, nor the "saviors" of v. 21; the cards say so
// rather than choose.

window.BOOKS.push({
  id: "obadiah",
  zh: "俄巴底亞書", en: "Obadiah", abbr: { zh: "俄", en: "Obad" },
  order: 31, section: { zh: "先知書", en: "Prophets" },
  chapters: 1,
  fan: ["edom_pride", "obadiah", "kingdom_yahweh"],
  summary: {
    zh: "俄巴底亞書只有一章 21 節，是舊約最短的一卷，專論以東。以東是以掃的後代，是以色列的「兄弟之國」。書中先指出以東的驕傲：住在高處，以為沒有人能把他們拉下來（1-4）；他們會被搜盡，被盟友出賣，連智慧人和勇士也站不住（5-9）。接著是控告：雅各遭難的日子，以東站在一旁，甚至趁火打劫（10-14）。耶和華的日子臨近萬國，報應必歸到頭上（15-16）；錫安山必有逃脫的人，雅各家得回地業（17-20）；全書以「國度就歸耶和華了」收結（21）。",
    en: "Obadiah is a single chapter of 21 verses — the shortest book in the Old Testament — and it is about Edom. Edom descended from Esau and was Israel’s “brother nation.” The book first names Edom’s pride: living on the heights, sure that no one can bring them down (vv. 1–4); they will be ransacked, betrayed by their allies, and neither their wise men nor their warriors will stand (vv. 5–9). Then comes the charge: on the day of Jacob’s disaster, Edom stood aside and even joined in the looting (vv. 10–14). The day of Yahweh is near all nations and deeds return on the doer’s head (vv. 15–16); there will be survivors on Mount Zion and Jacob’s house will regain its land (vv. 17–20); the book ends, “the kingdom will be Yahweh’s” (v. 21)."
  },
  outline: [
    { zh: "以東的驕傲與審判；站在一旁的罪；耶和華的日子；錫安的得救，國度歸耶和華", en: "Edom’s pride and judgment; the sin of standing aside; the day of Yahweh; Zion delivered and the kingdom Yahweh’s" }
  ],
  notes: {
    zh: "小提示：全書只有一章，分三段最好讀——以東的驕傲和被審判（1-9）、以東的罪狀（10-14）、耶和華的日子和錫安的盼望（15-21）。書中沒有標明年代，11-14 節的「遭難的日子」常被聯想到巴比倫攻陷耶路撒冷（主前 586 年），也有人認為是更早的一次。",
    en: "Good to know: with only one chapter, three parts make it easy to read — Edom’s pride and judgment (vv. 1–9), Edom’s charges (vv. 10–14), and the day of Yahweh and Zion’s hope (vv. 15–21). The book is undated; the “day of disaster” in vv. 11–14 is often linked with Babylon’s capture of Jerusalem (586 BC), but some place it earlier."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "obadiah", book: "obadiah", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "俄巴底亞", en: "Obadiah",
    meaning: { zh: "「耶和華的僕人」", en: "“Servant of Yahweh”" },
    tag: { zh: "一章二十一節的先知", en: "The Prophet of One Short Chapter" },
    role: { zh: "先知・舊約最短一卷的作者", en: "Prophet of the shortest book in the OT" },
    ch: [1],
    names: ["俄巴底亞"],
    enNames: ["Obadiah"],
    moves: [
      { zh: "得了耶和華的默示", en: "He Received the Vision", ref: "1:1",
        dzh: "他從耶和華那裡聽見信息：使者被差往列國，呼召他們起來攻打以東。",
        den: "He hears news from Yahweh: an envoy has been sent among the nations to rise up against Edom." },
      { zh: "宣告耶和華的日子", en: "Announcing Yahweh’s Day", ref: "1:15",
        dzh: "他宣告耶和華降罰的日子臨近萬國：你怎樣行，也必照樣向你行。",
        den: "He announces that Yahweh’s day is near all the nations: as you have done, it will be done to you." }
    ],
    traits: [
      { k: "strength", zh: "短短一卷，說得又清楚又重", en: "Says it short, clear and hard" },
      { k: "identity", zh: "只留下名字，沒有身世", en: "A name with no biography" }
    ],
    lesson: {
      zh: "有些罪不是動手，而是站在一旁（1:11）；而這卷書最後的話，是「國度就歸耶和華了」（1:21）。",
      en: "Some sins are not committed by striking but by standing aside (v. 11); and the book’s last word is “the kingdom will be Yahweh’s” (v. 21)."
    },
    quote: { ref: "1:1",
      zh: "我從耶和華那裡聽見信息，並有使者被差往列國去",
      en: "We have heard news from Yahweh, and an ambassador is sent among the nations" },
    keyVerses: ["1:1", "1:15", "1:21"],
    intro: {
      zh: "俄巴底亞的名字意思是「耶和華的僕人」。全書的開頭只有一句交代：「俄巴底亞得了耶和華的默示」（1:1），沒有說他的父親、家鄉和年代。舊約有好幾位叫俄巴底（亞）的人，例如王上 18:3 亞哈王的家宰（和合本譯作「俄巴底」），但經文沒有說這位先知是誰。他的書只有一章 21 節，專論以東：以東的驕傲和落井下石（1-14），耶和華的日子臨近萬國（15-16），以及錫安的得救和國度歸耶和華（17-21）。",
      en: "Obadiah’s name means “servant of Yahweh.” The book opens with a single line of introduction — “The vision of Obadiah” (v. 1) — and gives no father, hometown or date. The Old Testament has several men with this name, for example Ahab’s palace manager in 1 Kings 18:3, but the text does not say which one, if any, this prophet is. His book is one chapter of 21 verses on Edom: Edom’s pride and gloating (vv. 1–14), the day of Yahweh near all nations (vv. 15–16), and Zion’s deliverance with the kingdom Yahweh’s (vv. 17–21)."
    },
    tip: {
      zh: "俄巴底亞書 1-5 節和耶利米書 49:14-16、49:9 幾乎平行（「我使你在列國中為最小」「大鷹高高搭窩」），哪一卷在先，學者看法不一。另外，1 節的「我」在 WEB 作 “We”。",
      en: "Obadiah 1–5 runs almost parallel to Jeremiah 49:14–16 and 49:9 (“I have made you small among the nations,” the eagle’s nest); scholars differ on which came first. Also, the “I” of verse 1 in the 和合本 reads “We” in the WEB."
    },
    related: ["edom_pride", "stood_aside", "deeds_return", "escapees_zion", "kingdom_yahweh"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "edom_pride", book: "obadiah", no: 2, kind: "person", type: "power", rarity: 3,
    zh: "以東", en: "Edom",
    tag: { zh: "住在山穴裡的驕傲", en: "Pride in the Rock Clefts" },
    role: { zh: "以掃後代的國", en: "The nation descended from Esau" },
    ch: [1],
    passages: ["1:1-4"],
    moves: [
      { zh: "狂傲自欺", en: "Deceived by Pride", ref: "1:3",
        dzh: "住在山穴中、居所在高處的以東，心裡說：誰能將我拉下地去呢？",
        den: "Living in the rock clefts on the heights, Edom says in his heart: “Who will bring me down to the ground?”" },
      { zh: "從那裡拉下你來", en: "I Will Bring You Down", ref: "1:4",
        dzh: "你雖如大鷹高飛，在星宿之間搭窩，我必從那裡拉下你來。",
        den: "Though you mount up like the eagle, and your nest is set among the stars, I will bring you down from there." }
    ],
    traits: [
      { k: "strength", zh: "天然的堡壘，居高臨下", en: "A natural fortress on the heights" },
      { k: "weakness", zh: "把高處當成安全", en: "Mistakes height for safety" }
    ],
    lesson: {
      zh: "高處不等於安全：以東以為山勢險要就沒有人能動搖，神卻說「我必從那裡拉下你來」（1:3-4）。",
      en: "Height is not safety: Edom trusted its mountain strongholds, but God says, “I will bring you down from there” (vv. 3–4)."
    },
    quote: { ref: "1:4",
      zh: "你雖如大鷹高飛，在星宿之間搭窩，我必從那裡拉下你來",
      en: "though your nest is set among the stars, I will bring you down from there" },
    keyVerses: ["1:1-2", "1:3-4", "1:8-9"],
    intro: {
      zh: "以東是以掃的後代（創 36:1「以掃就是以東」），住在西珥山地（創 36:8）。俄巴底亞一開始就宣告：耶和華要使以東「在列國中為最小的，被人大大藐視」（1:2）。原因是驕傲：他們住在山穴中、居所在高處，心裡說「誰能將我拉下地去呢？」（1:3），以為天然的險要就是安全。神回答：就算你像大鷹在星宿之間搭窩，我也必從那裡拉下你來（1:4）。",
      en: "Edom descended from Esau (Esau is Edom, Gen 36:1) and lived in the hill country of Seir (Gen 36:8). Obadiah opens by announcing that Yahweh will make Edom “small among the nations… greatly despised” (v. 2). The reason is pride: they dwell in the clefts of the rock, high up, and say in their heart, “Who will bring me down to the ground?” (v. 3) — trusting natural defenses as safety. God answers: even if you set your nest among the stars like an eagle, I will bring you down from there (v. 4)."
    },
    tip: {
      zh: "民數記 20:14-21 記載，摩西差人對以東王說「你的弟兄以色列人這樣說」，請求借路，卻被拒絕——兩國的冷淡由來已久。耶利米書 49:16 也有幾乎相同的「大鷹高高搭窩」。",
      en: "In Numbers 20:14–21 Moses’ messengers say to Edom’s king, “Thus says your brother Israel,” and ask to pass through, and are refused — the coolness between the two goes back a long way. Jeremiah 49:16 has almost the same “eagle’s nest” line."
    },
    related: ["esau_jacob", "ransacked", "teman_wise", "stood_aside"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "esau_jacob", book: "obadiah", no: 3, kind: "person", type: "love", rarity: 3,
    zh: "以掃與雅各", en: "Esau and Jacob",
    tag: { zh: "兄弟之間的舊帳", en: "Brothers With an Old Quarrel" },
    role: { zh: "以東與以色列的祖先", en: "Ancestors of Edom and of Israel" },
    ch: [1],
    names: ["以掃", "雅各"],
    enNames: ["Esau", "Jacob"],
    moves: [
      { zh: "向兄弟行強暴", en: "Violence to a Brother", ref: "1:10",
        dzh: "因你向兄弟雅各行強暴，羞愧必遮蓋你，你也必永遠斷絕。",
        den: "For the violence done to your brother Jacob, shame will cover you, and you will be cut off forever." },
      { zh: "你兄弟遭難的日子", en: "Your Brother’s Day of Disaster", ref: "1:12",
        dzh: "你兄弟遭難的日子，你不當瞪眼看著；猶大人被滅的日子，你不當歡樂。",
        den: "On your brother’s day of disaster you should not have looked down on him, nor rejoiced over Judah’s destruction." }
    ],
    traits: [
      { k: "strength", zh: "同胎所生，血緣最近", en: "Twins — the closest kin" },
      { k: "weakness", zh: "舊怨變成落井下石", en: "An old grudge turned to gloating" }
    ],
    lesson: {
      zh: "神責備以東，是因為他們對「兄弟」這樣做（1:10、12）：越是至親，在人遭難時冷眼旁觀就越是過錯。",
      en: "God rebukes Edom precisely because they did this to a “brother” (vv. 10, 12): the closer the kin, the heavier the fault of looking on coldly in their disaster."
    },
    quote: { ref: "1:10",
      zh: "因你向兄弟雅各行強暴，羞愧必遮蓋你，你也必永遠斷絕",
      en: "For the violence done to your brother Jacob, shame will cover you, and you will be cut off forever." },
    keyVerses: ["1:6", "1:10", "1:12", "1:18"],
    intro: {
      zh: "以掃和雅各是雙生子（創 25:24-26）。以掃又叫以東（創 25:30；36:1），所以「以東」和「雅各（以色列）」是兄弟之國，申命記 23:7 也吩咐：「不可憎惡以東人，因為他是你的弟兄。」兄弟之間有舊怨：以掃因父親給雅各的祝福，怨恨他，一度想殺他（創 27:41），後來兩人卻在路上相擁而哭（創 33:4）。俄巴底亞書指責以東「向兄弟雅各行強暴」（1:10），在兄弟遭難時袖手旁觀（1:11-14）。",
      en: "Esau and Jacob were twins (Gen 25:24–26). Esau is also called Edom (Gen 25:30; 36:1), so Edom and Jacob (Israel) are brother nations, and Deuteronomy 23:7 says, “You shall not abhor an Edomite; for he is your brother.” The brothers had an old quarrel: Esau hated Jacob over the blessing and once meant to kill him (Gen 27:41), yet later they embraced and wept on the road (Gen 33:4). Obadiah charges Edom with “violence done to your brother Jacob” (v. 10) and with looking on when he was in disaster (vv. 11–14)."
    },
    tip: {
      zh: "別的先知書也翻出這段兄弟舊事：阿摩司書 1:11 說以東「拿刀追趕兄弟」，瑪拉基書 1:2-3 問「以掃不是雅各的哥哥嗎？」",
      en: "Other prophets also recall the brothers: Amos 1:11 says Edom “pursued his brother with the sword,” and Malachi 1:2–3 asks, “Wasn’t Esau Jacob’s brother?”"
    },
    related: ["edom_pride", "stood_aside", "jacob_fire"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "ransacked", book: "obadiah", no: 4, kind: "other", type: "vision", rarity: 2,
    zh: "被搜盡的以掃", en: "Esau Ransacked",
    tag: { zh: "連強盜都會留一點，這次一點不留", en: "Even Thieves Leave Something — This Time, Nothing" },
    role: { zh: "第 5-6 節的警告", en: "The warning of vv. 5–6" },
    ch: [1],
    passages: ["1:5-6"],
    moves: [
      { zh: "尋常的劫掠", en: "An Ordinary Robbery", ref: "1:5",
        dzh: "盜賊若來，不過偷到夠了；摘葡萄的若來，也會剩下些葡萄。",
        den: "Thieves would only steal until they had enough, and grape pickers would leave some gleaning grapes." },
      { zh: "隱密處被搜尋", en: "Hidden Treasures Searched Out", ref: "1:6",
        dzh: "以掃的隱密處何竟被搜尋？他隱藏的寶物何竟被查出？",
        den: "How Esau will be ransacked! How his hidden treasures are sought out!" }
    ],
    traits: [
      { k: "strength", zh: "把財寶藏在隱密處", en: "Treasures hidden away" },
      { k: "weakness", zh: "這次被搜得一乾二淨", en: "This time searched out completely" }
    ],
    lesson: {
      zh: "人以為藏得穩妥的，在審判的日子也會被搜出來：一般的劫掠總會留下一點，這次卻是徹底的（1:5-6）。",
      en: "What people think is safely hidden can be found in the day of judgment: ordinary robbers leave something behind, but this time it is thorough (vv. 5–6)."
    },
    quote: { ref: "1:6",
      zh: "以掃的隱密處何竟被搜尋？他隱藏的寶物何竟被查出",
      en: "How Esau will be ransacked! How his hidden treasures are sought out!" },
    keyVerses: ["1:5", "1:6"],
    intro: {
      zh: "第 5-6 節用兩個日常的畫面：盜賊夜間來，只會偷到「夠了」為止；摘葡萄的來，也會剩下些葡萄（1:5）。這是尋常的劫掠，總會留下一點。可是對以東不是這樣：以掃的隱密處被搜尋，隱藏的寶物被查出（1:6）。第 5 節中間夾著一句感嘆——和合本作「你何竟被剪除」，WEB 作 “oh, what disaster awaits you”。",
      en: "Verses 5–6 use two everyday pictures: thieves who come by night steal only until they have enough, and grape pickers leave some grapes behind (v. 5). That is ordinary robbery, which always leaves something. Edom’s case is different: Esau’s hidden places are searched and his hidden treasures found (v. 6). Verse 5 has an exclamation in the middle — “how you have been cut off” (你何竟被剪除) in the 和合本, “oh, what disaster awaits you” in the WEB."
    },
    tip: {
      zh: "耶利米書 49:9 有幾乎相同的比喻，只是兩句次序對調：先說摘葡萄的，後說盜賊。",
      en: "Jeremiah 49:9 has almost the same comparison with the two lines in the opposite order: grape gatherers first, then thieves."
    },
    related: ["edom_pride", "false_friends", "teman_wise"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "false_friends", book: "obadiah", no: 5, kind: "person", type: "scheme", rarity: 2,
    zh: "盟友的背叛", en: "Allies Who Betrayed",
    tag: { zh: "同桌吃飯的，設下網羅", en: "Friends Who Eat Your Bread Lay a Snare" },
    role: { zh: "以東的盟友與朋友", en: "Edom’s allies and friends" },
    ch: [1],
    passages: ["1:7"],
    moves: [
      { zh: "送你上路", en: "They Sent You on Your Way", ref: "1:7",
        dzh: "與你結盟的都送你上路，直到交界；與你和好的欺騙你，且勝過你。",
        den: "All your allies brought you on your way, even to the border; those at peace with you deceived you and prevailed against you." },
      { zh: "同桌設網羅", en: "A Snare From Your Table", ref: "1:7",
        dzh: "與你一同吃飯的設下網羅陷害你；在你心裡毫無聰明。",
        den: "Friends who eat your bread lay a snare under you. There is no understanding in him." }
    ],
    traits: [
      { k: "strength", zh: "盟約與交情，看似最穩", en: "Treaties and shared meals look safest" },
      { k: "weakness", zh: "最信靠的人先翻臉", en: "The ones trusted most turn first" }
    ],
    lesson: {
      zh: "以東最倚靠的盟約和交情，在這一節裡成了網羅（1:7）：人的靠山再穩，也比不上神的日子。",
      en: "The treaties and friendships Edom leaned on most became a snare (v. 7): no human backing outlasts the day of God."
    },
    quote: { ref: "1:7",
      zh: "與你一同吃飯的設下網羅陷害你",
      en: "Friends who eat your bread lay a snare under you" },
    keyVerses: ["1:7"],
    intro: {
      zh: "第 7 節連用幾個畫面，寫以東最信靠的人：與他結盟的、與他和好的、與他同桌吃飯的。他們起初「送你上路，直到交界」，後來卻「欺騙你，且勝過你」，還設下網羅。經文沒有說這些盟友是誰，也沒有說這是哪一年的事。",
      en: "Verse 7 piles up pictures of the people Edom trusted most: those in alliance, those at peace, those who share his table. At first they bring him “on your way, even to the border,” then they “deceive you, and prevail against you” and lay a snare. The text does not say who these allies were or when this happened."
    },
    tip: {
      zh: "7 節的最後一句，和合本作「在你心裡毫無聰明」，WEB 作 “There is no understanding in him”；緊接著 8-9 節就說到以東的智慧人。",
      en: "The last line of verse 7 reads “in your heart no understanding” in the 和合本 and “There is no understanding in him” in the WEB; verses 8–9 go straight on to Edom’s wise men."
    },
    related: ["ransacked", "teman_wise", "stood_aside"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "teman_wise", book: "obadiah", no: 6, kind: "person", type: "wisdom", rarity: 3,
    zh: "提幔與智慧人", en: "Teman and the Wise",
    tag: { zh: "以智慧聞名的地方，智慧也要除滅", en: "Famed for Wisdom — Even That Will Go" },
    role: { zh: "以東的智慧人與勇士", en: "Edom’s wise men and warriors" },
    ch: [1],
    passages: ["1:8-9"],
    moves: [
      { zh: "除滅智慧人", en: "The Wise Destroyed", ref: "1:8",
        dzh: "耶和華說：到那日，我豈不從以東除滅智慧人、從以掃山除滅聰明人？",
        den: "“Won’t I in that day,” says Yahweh, “destroy the wise men out of Edom, and understanding out of the mountain of Esau?”" },
      { zh: "勇士必驚惶", en: "The Warriors Dismayed", ref: "1:9",
        dzh: "提幔哪，你的勇士必驚惶，甚至以掃山的人都被殺戮剪除。",
        den: "Your mighty men, Teman, will be dismayed, so that everyone is cut off from Esau’s mountain by slaughter." }
    ],
    traits: [
      { k: "strength", zh: "智慧與勇力兼備的名聲", en: "A name for both wisdom and might" },
      { k: "weakness", zh: "智慧和勇力都擋不住那日", en: "Neither could stop that day" }
    ],
    lesson: {
      zh: "智慧和武力是以東的兩大倚靠，8-9 節兩樣都點名：智慧人被除滅，勇士也驚惶——人的聰明和力量，在神的日子面前都站不住。",
      en: "Wisdom and arms were Edom’s two great supports, and verses 8–9 name both: the wise are destroyed and the warriors dismayed — human wit and strength cannot stand before God’s day."
    },
    quote: { ref: "1:8",
      zh: "到那日，我豈不從以東除滅智慧人？從以掃山除滅聰明人",
      en: "destroy the wise men out of Edom, and understanding out of the mountain of Esau" },
    keyVerses: ["1:8", "1:9"],
    intro: {
      zh: "提幔是以掃孫子的名字（以利法的兒子，創 36:11），也用來指以東的一個地區（耶 49:7 說「提幔中」；摩 1:12 說要降火在提幔）。約伯的朋友以利法被稱為「提幔人」（伯 2:11），耶利米書 49:7 也問：「提幔中再沒有智慧嗎？」——可見以東以智慧出名。俄巴底亞說：到那日，耶和華要從以東除滅智慧人（1:8），連提幔的勇士也驚惶（1:9）。",
      en: "Teman is the name of Esau’s grandson (a son of Eliphaz, Gen 36:11) and was also used for a region of Edom (Jer 49:7 says “in Teman”; Amos 1:12 sends fire on Teman). Job’s friend Eliphaz is called “the Temanite” (Job 2:11), and Jeremiah 49:7 asks, “Is wisdom no more in Teman?” — Edom was known for wisdom. Obadiah says that in that day Yahweh will destroy the wise out of Edom (v. 8), and even Teman’s warriors will be dismayed (v. 9)."
    },
    tip: {
      zh: "「到那日」（1:8）把這一段和 15 節的「耶和華降罰的日子」連起來，是全書的線索。",
      en: "“In that day” (v. 8) links this passage to “the day of Yahweh” in verse 15 — one of the book’s threads."
    },
    related: ["edom_pride", "ransacked", "false_friends"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "stood_aside", book: "obadiah", no: 7, kind: "other", type: "scheme", rarity: 4,
    zh: "站在一旁的日子", en: "The Day You Stood Aside",
    tag: { zh: "先是袖手旁觀，再伸手趁火", en: "First Looking On, Then Reaching In" },
    role: { zh: "以東的罪狀（11-14 節）", en: "Edom’s charge (vv. 11–14)" },
    ch: [1],
    passages: ["1:11-14"],
    moves: [
      { zh: "像與他們同夥", en: "Like One of Them", ref: "1:11",
        dzh: "外人擄掠雅各的財物、為耶路撒冷拈鬮的日子，你竟站在一旁，像與他們同夥。",
        den: "When strangers carried off Jacob’s wealth and cast lots for Jerusalem, you stood on the other side — even you were like one of them." },
      { zh: "八個「不當」", en: "Eight “Don’ts”", ref: "1:12-14",
        dzh: "連說八個「不當」：不當瞪眼看、不當歡樂、不當進城搶財物、不當堵住逃脫的人。",
        den: "Eight times “you should not have”: looked down, rejoiced, entered the gate, seized wealth, cut off the fugitives." }
    ],
    traits: [
      { k: "weakness", zh: "袖手旁觀，甚至趁火打劫", en: "Stood by, then joined the looting" },
      { k: "identity", zh: "像敵人一樣的兄弟", en: "A brother who acted like the enemy" }
    ],
    lesson: {
      zh: "經文把「站在一旁」算作與擄掠的人同夥（1:11）：在兄弟遭難時不出手，不是中立。",
      en: "The text counts “standing on the other side” as being like those who plundered (v. 11): in a brother’s disaster, doing nothing is not neutrality."
    },
    quote: { ref: "1:11",
      zh: "你竟站在一旁，像與他們同夥",
      en: "even you were like one of them" },
    keyVerses: ["1:11", "1:12", "1:13", "1:14"],
    intro: {
      zh: "第 11-14 節是對以東的控訴，句式一變：先說「當…的日子，你竟站在一旁」（11），再連說八個「不當」（12-14）——不當瞪眼看著、不當因猶大人被滅而歡樂、不當說狂傲的話；不當進城門、不當搶財物；不當站在岔路口剪除逃脫的、不當把剩下的人交付仇敵。經文沒有說這是哪一次的災難：常見的看法是主前 586 年巴比倫攻陷耶路撒冷（參詩 137:7；哀 4:21；結 35:5），也有人認為是更早的一次（如代下 21:16-17）。",
      en: "Verses 11–14 are the charge against Edom, and the sentence pattern changes: first “in the day that you stood on the other side” (v. 11), then eight “you should not have” lines (vv. 12–14) — looking down, rejoicing over Judah’s destruction, speaking proudly; entering the gate, seizing wealth; standing at the crossroads to cut off fugitives, delivering up survivors. The text does not say which disaster this was: a common view is Babylon’s capture of Jerusalem in 586 BC (compare Ps 137:7; Lam 4:21; Ezek 35:5), while others point to an earlier one (such as 2 Chr 21:16–17)."
    },
    tip: {
      zh: "詩篇 137:7 記下以東人在耶路撒冷遭難那日說的話：「拆毀！拆毀！直拆到根基！」",
      en: "Psalm 137:7 records what the Edomites said on the day Jerusalem fell: “Raze it! Raze it even to its foundation!”"
    },
    related: ["esau_jacob", "edom_pride", "false_friends", "deeds_return"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "deeds_return", book: "obadiah", no: 8, kind: "other", type: "power", rarity: 3,
    zh: "報應歸到頭上", en: "Your Deeds Return",
    tag: { zh: "你怎樣行，也必照樣向你行", en: "As You Have Done, It Will Be Done to You" },
    role: { zh: "耶和華的日子（15-16 節）", en: "The day of Yahweh (vv. 15–16)" },
    ch: [1],
    passages: ["1:15-16"],
    moves: [
      { zh: "耶和華降罰的日子", en: "The Day of Yahweh", ref: "1:15",
        dzh: "耶和華降罰的日子臨近萬國：你怎樣行，他也必照樣向你行。",
        den: "Yahweh’s day is near all the nations: as you have done, it will be done to you." },
      { zh: "喝苦杯", en: "Drinking the Cup", ref: "1:16",
        dzh: "你們在我聖山怎樣喝了苦杯，萬國也必照樣常常地喝，直到歸於無有。",
        den: "As you drank on my holy mountain, so all the nations will drink continually, until they are as though they had not been." }
    ],
    traits: [
      { k: "strength", zh: "標準一致：行怎樣，報怎樣", en: "One standard: what you did comes back" },
      { k: "identity", zh: "從以東擴大到萬國", en: "From Edom out to all nations" }
    ],
    lesson: {
      zh: "審判的標準前後一致：以東怎樣對待別人，就怎樣被對待；而且不只以東，是萬國（1:15-16）。",
      en: "The standard is consistent: Edom is treated as it treated others — and not only Edom, but all nations (vv. 15–16)."
    },
    quote: { ref: "1:15",
      zh: "你怎樣行，他也必照樣向你行；你的報應必歸到你頭上",
      en: "As you have done, it will be done to you. Your deeds will return upon your own head." },
    keyVerses: ["1:15", "1:16"],
    intro: {
      zh: "到了第 15 節，焦點由以東擴大到「萬國」：「耶和華降罰的日子臨近萬國」。報應的原則很簡單：「你怎樣行，他也必照樣向你行；你的報應必歸到你頭上」（1:15）。第 16 節用「苦杯」作比喻：在聖山喝了苦杯的，萬國也要照樣常常地喝。「喝苦杯」也見於哀歌 4:21（苦杯要傳到以東），「耶和華的日子臨近」也見於約珥書 3:14，讀完前面的書再讀這裡會覺得熟悉。",
      en: "By verse 15 the focus widens from Edom to “all the nations”: “the day of Yahweh is near all the nations.” The principle is simple: “As you have done, it will be done to you; your deeds will return upon your own head” (v. 15). Verse 16 uses the picture of a cup: as the cup was drunk on the holy mountain, so all the nations will drink it continually. The cup also appears in Lamentations 4:21 (it will pass to Edom), and “the day of Yahweh is near” in Joel 3:14, so the earlier books make these lines feel familiar."
    },
    tip: {
      zh: "16 節的「你們」是誰，解釋不一：和合本明說是「你們猶大人」喝了苦杯；WEB 只寫 “you”，有人讀作以東人在聖山上狂飲慶祝，再受報應。",
      en: "Who “you” is in verse 16 is debated: the 和合本 says “you Judahites” drank the cup, while the WEB has only “you,” which some read as Edom reveling on the holy mountain and then repaid."
    },
    related: ["stood_aside", "escapees_zion", "kingdom_yahweh"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "escapees_zion", book: "obadiah", no: 9, kind: "other", type: "faith", rarity: 3,
    zh: "錫安山上的逃脫者", en: "Survivors on Mount Zion",
    tag: { zh: "那山也必成聖", en: "The Mountain Will Be Holy" },
    role: { zh: "轉向盼望（17 節）", en: "The turn to hope (v. 17)" },
    ch: [1],
    passages: ["1:17"],
    moves: [
      { zh: "必有逃脫的人", en: "There Will Be Survivors", ref: "1:17",
        dzh: "在錫安山必有逃脫的人；那山也必成聖。",
        den: "On Mount Zion there will be those who escape, and it will be holy." },
      { zh: "得回原有的產業", en: "Regaining the Inheritance", ref: "1:17",
        dzh: "雅各家必得原有的產業；下一節就說以掃家「必無餘剩的」。",
        den: "The house of Jacob will possess their possessions; the next verse says nothing will remain of the house of Esau." }
    ],
    traits: [
      { k: "strength", zh: "有逃脫的人，有成聖的山", en: "Survivors and a holy mountain" },
      { k: "identity", zh: "從審判轉向盼望的一節", en: "The verse where judgment turns to hope" }
    ],
    lesson: {
      zh: "審判的書卷在這裡轉身：在錫安山有逃脫的人（1:17）。約珥書 2:32 也有一句幾乎相同的應許。",
      en: "The book turns here: there are survivors on Mount Zion (v. 17). Joel 2:32 has an almost identical promise."
    },
    quote: { ref: "1:17",
      zh: "在錫安山必有逃脫的人，那山也必成聖",
      en: "in Mount Zion, there will be those who escape, and it will be holy" },
    keyVerses: ["1:17"],
    intro: {
      zh: "第 17 節是全書的轉折。前面說的是以東的審判和萬國的報應；到了這裡，焦點轉到錫安山：「在錫安山必有逃脫的人，那山也必成聖；雅各家必得原有的產業。」「逃脫的人」是在災難中存留的人。約珥書 2:32 有幾乎一樣的話（「在錫安山，耶路撒冷必有逃脫的人」），兩卷都屬十二小先知書，可以對照著讀。",
      en: "Verse 17 is the turning point. Until now the book has spoken of Edom’s judgment and the nations’ recompense; here the focus turns to Mount Zion: “In Mount Zion there will be those who escape, and it will be holy. The house of Jacob will possess their possessions.” “Those who escape” are the ones who survive the disaster. Joel 2:32 has almost the same words (“in Mount Zion and in Jerusalem there will be those who escape”), and both books are among the Twelve, so they read well side by side."
    },
    tip: {
      zh: "14 節說不當「剪除他們中間逃脫的」，17 節卻說錫安山必有「逃脫的人」——和合本在這兩節用了同樣的字眼，結局卻相反。",
      en: "Verse 14 says not to “cut off those of his who escape,” yet verse 17 promises there will be those who “escape” on Mount Zion — the same word in two verses, with opposite outcomes."
    },
    related: ["stood_aside", "jacob_fire", "kingdom_yahweh"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "jacob_fire", book: "obadiah", no: 10, kind: "other", type: "harvest", rarity: 3,
    zh: "火與碎秸", en: "Fire and Stubble",
    tag: { zh: "雅各家得地，以掃家無餘剩", en: "Jacob Possesses; Esau Has Nothing Left" },
    role: { zh: "復興的版圖（18-20 節）", en: "The restored map (vv. 18–20)" },
    ch: [1],
    passages: ["1:18-20"],
    moves: [
      { zh: "大火與碎秸", en: "Fire and Stubble", ref: "1:18",
        dzh: "雅各家必成為大火，約瑟家必為火焰；以掃家必如碎秸，被燒著吞滅。",
        den: "Jacob’s house will be a fire, Joseph’s house a flame, and Esau’s house stubble — burned up, with none remaining." },
      { zh: "被擄的人得地", en: "The Exiles Take the Land", ref: "1:19-20",
        dzh: "南地的人得以掃山，高原的人得非利士地，被擄的人得地直到撒勒法。",
        den: "The South takes Esau’s mountain, the lowland takes Philistia, and the exiles possess land as far as Zarephath." }
    ],
    traits: [
      { k: "strength", zh: "被擄的人回來得地", en: "The exiles return and possess" },
      { k: "identity", zh: "地圖從以掃山到撒勒法", en: "A map from Esau’s mountain to Zarephath" }
    ],
    lesson: {
      zh: "審判和恢復都寫得很具體：以掃家無餘剩，雅各家和被擄的人要得回地業（1:18-20）。",
      en: "Both judgment and restoration are concrete: nothing remains of Esau’s house, while Jacob’s house and the exiles regain their land (vv. 18–20)."
    },
    quote: { ref: "1:18",
      zh: "雅各家必成為大火；約瑟家必為火焰；以掃家必如碎秸",
      en: "The house of Jacob will be a fire, the house of Joseph a flame, and the house of Esau for stubble" },
    keyVerses: ["1:18", "1:19", "1:20"],
    intro: {
      zh: "第 18 節用火燒碎秸的畫面：雅各家是大火，約瑟家是火焰，以掃家如碎秸，被燒著吞滅，「以掃家必無餘剩的」。接著 19-20 節是一幅恢復後的地圖：南地的人得以掃山，高原的人得非利士地，也得以法蓮地和撒馬利亞地，便雅憫人得基列；被擄的以色列人得地直到撒勒法（西頓的撒勒法，見王上 17:9），被擄的耶路撒冷人得南地的城邑。「約瑟家」「以法蓮」「撒馬利亞」通常被理解為北國以色列，可見這盼望包括整個以色列。「西法拉」在哪裡，今天不能確定。",
      en: "Verse 18 pictures fire among stubble: the house of Jacob a fire, the house of Joseph a flame, the house of Esau stubble that is burned up — “not any remaining to the house of Esau.” Verses 19–20 then draw a map of restoration: those of the South take Esau’s mountain, those of the lowland take Philistia, they take the fields of Ephraim and Samaria, Benjamin takes Gilead; the Israelite exiles possess land as far as Zarephath (the Sidonian Zarephath of 1 Kings 17:9), and the Jerusalem exiles the cities of the Negev. “Joseph,” “Ephraim” and “Samaria” are usually understood as the northern kingdom, so the hope takes in all Israel. Where “Sepharad” was cannot now be said for sure."
    },
    tip: {
      zh: "阿摩司書 9:12 也說「使以色列人得以東所餘剩的」，可與 19 節的「得以掃山」對照。",
      en: "Amos 9:12 also says Israel will possess “the remnant of Edom,” which you can set beside verse 19, “possess the mountain of Esau.”"
    },
    related: ["esau_jacob", "escapees_zion", "kingdom_yahweh"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "kingdom_yahweh", book: "obadiah", no: 11, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "國度歸耶和華", en: "The Kingdom Is Yahweh’s",
    tag: { zh: "拯救者上到錫安山", en: "Saviors Go Up to Mount Zion" },
    role: { zh: "全書的結語（21 節）", en: "The book’s last word (v. 21)" },
    ch: [1],
    passages: ["1:21"],
    moves: [
      { zh: "拯救者上到錫安山", en: "Saviors Go Up to Zion", ref: "1:21",
        dzh: "必有拯救者上到錫安山，審判以掃山。",
        den: "Saviors will go up on Mount Zion to judge the mountains of Esau." },
      { zh: "國度就歸耶和華了", en: "The Kingdom Will Be Yahweh’s", ref: "1:21",
        dzh: "全書以這一句收結：國度就歸耶和華了。",
        den: "The book closes on this line: the kingdom will be Yahweh’s." }
    ],
    traits: [
      { k: "strength", zh: "最後的話由神來說", en: "God has the last word" },
      { k: "identity", zh: "「拯救者」是誰，解釋不一", en: "Who the “saviors” are is debated" }
    ],
    lesson: {
      zh: "驕傲的、背叛的、袖手旁觀的，都不是最後的話；最後的話是「國度就歸耶和華了」（1:21）。",
      en: "The proud, the betrayers and the bystanders do not get the last word; the last word is “the kingdom will be Yahweh’s” (v. 21)."
    },
    quote: { ref: "1:21",
      zh: "國度就歸耶和華了",
      en: "the kingdom will be Yahweh’s" },
    keyVerses: ["1:21"],
    intro: {
      zh: "全書以第 21 節作結：「必有拯救者上到錫安山，審判以掃山；國度就歸耶和華了。」「拯救者」（WEB 作複數 “Saviors”）是誰，解釋不一：有人讀作像古時士師那樣興起拯救以色列的人，有人讀作彌賽亞，也有人讀作回到錫安的被擄之民。經文沒有說出名字，只說了結果：審判以掃山，國度歸耶和華。",
      en: "The book ends with verse 21: “Saviors will go up on Mount Zion to judge the mountains of Esau, and the kingdom will be Yahweh’s.” Who the “saviors” are (plural in the WEB) is debated: some read them as deliverers raised up like the judges of old, some as the Messiah, others as the exiles returning to Zion. The text names no one; it states only the outcome — Esau’s mountain judged, the kingdom Yahweh’s."
    },
    tip: {
      zh: "全書由 1 節的「論以東說」開始，到 21 節的「審判以掃山」和「國度就歸耶和華了」結束，頭尾相扣。",
      en: "The book begins with “concerning Edom” (v. 1) and ends with Esau’s mountain judged and “the kingdom will be Yahweh’s” (v. 21) — beginning and end are locked together."
    },
    related: ["deeds_return", "escapees_zion", "jacob_fire", "obadiah"]
  }

);
