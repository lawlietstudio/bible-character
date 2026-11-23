// 聖經人物卡 · 西番雅書 (Zephaniah) — book info + cards.
// Verse text comes from data/zephaniah.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/zephaniah.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (2 Kgs 22:1-2, 23:4-5, 23:12; Joel 2:1-2; Amos 5:18-20; Gen 19:24-25; Jer 1:2; Nah 1:1) were checked against
// the 和合本 text and appear in prose only.
// Flagged rather than decided: whether the Hezekiah of 1:1 is the king, what Malcam is, who the "guests" and "sacrifice" of
// 1:7 are, the "leaping over the threshold" of 1:9, whether the great day is the fall of Jerusalem or a final day, how 3:17
// "默然愛你" is to be read, and the very different readings of 3:18 in the CUV and the WEB.

window.BOOKS.push({
  id: "zephaniah",
  zh: "西番雅書", en: "Zephaniah", abbr: { zh: "番", en: "Zeph" },
  order: 36, section: { zh: "先知書", en: "Prophets" },
  chapters: 3,
  fan: ["great_day", "zephaniah", "sing_over_you"],
  summary: {
    zh: "西番雅書在約西亞王的日子（1:1），以一句最徹底的宣告開始：「我必從地上除滅萬類」（1:2）。第 1 章：先把範圍收窄到猶大和耶路撒冷，指出混合敬拜、說「耶和華必不降福，也不降禍」的人（1:4-6、12），並描寫「耶和華的大日」（1:14-18）。第 2 章：先是一個邀請——尋求耶和華，尋求公義謙卑，或者可以隱藏起來（2:3）；然後是對鄰國的話：非利士、摩押、亞捫、古實、亞述的尼尼微（2:4-15）。第 3 章：先責備悖逆、污穢、欺壓的城（3:1-7），再轉向萬民的潔淨（3:9）、困苦貧寒的餘民（3:12），最後是神自己的歌聲：「他必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼」（3:17）。",
    en: "Zephaniah, in the days of King Josiah (1:1), opens with the most sweeping announcement possible: “I will utterly sweep away everything from the surface of the earth” (1:2). Chapter 1 narrows to Judah and Jerusalem, naming mixed worship and those who say “Yahweh will not do good, neither will he do evil” (1:4–6, 12), and describes the great day of Yahweh (1:14–18). Chapter 2 begins with an invitation — seek Yahweh, seek righteousness, seek humility; perhaps you will be hidden (2:3) — then turns to the neighbors: Philistia, Moab, Ammon, Cush, and Nineveh of Assyria (2:4–15). Chapter 3 rebukes the rebellious, polluted, oppressing city (3:1–7), then turns to the cleansing of the peoples (3:9), an afflicted and poor remnant (3:12), and finally to God’s own song: “He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing” (3:17)."
  },
  outline: [
    { zh: "除滅萬類；混合敬拜；用燈巡查；耶和華的大日", en: "Sweeping away all; mixed worship; searching with lamps; the great day of Yahweh" },
    { zh: "尋求耶和華；非利士、摩押、亞捫；荒涼的尼尼微", en: "Seek Yahweh; Philistia, Moab, Ammon; Nineveh laid waste" },
    { zh: "欺壓的城；清潔的言語；困苦貧寒的餘民；神的歌聲", en: "The oppressing city; purified lips; a poor remnant; God’s song" }
  ],
  notes: {
    zh: "小提示：西番雅書的時代背景是約西亞王的日子（1:1）。列王紀下 23 章記著約西亞怎樣除掉巴力、天上萬象的敬拜，與 1:4-5 說的情形相合；書裡沒有說明它與約西亞改革的先後。2:13-15 說到尼尼微，接著那鴻書與約拿書：三卷書都說到這座城。",
    en: "Good to know: the setting is the days of King Josiah (1:1). 2 Kings 23 records how Josiah removed the worship of Baal and the host of heaven, matching what 1:4–5 describes; the book does not say how it stands in time against Josiah’s reform. 2:13–15 speaks of Nineveh, linking to Nahum and Jonah: three books that speak of that city."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "zephaniah", book: "zephaniah", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "西番雅", en: "Zephaniah",
    meaning: { zh: "常被解作「耶和華隱藏（保護）」", en: "Often explained as “Yahweh has hidden (protected)”" },
    tag: { zh: "家譜追到四代的先知", en: "The Prophet Whose Ancestry Runs Four Generations" },
    role: { zh: "約西亞王日子的先知", en: "Prophet in Josiah’s days" },
    ch: [1, 2, 3],
    passages: ["1:1", "2:3", "3:17"],
    moves: [
      { zh: "約西亞在位的時候", en: "In Josiah’s Days", ref: "1:1",
        dzh: "耶和華的話在猶大王約西亞在位的時候臨到他。",
        den: "Yahweh’s word came to him in the days of Josiah son of Amon, king of Judah." },
      { zh: "尋求公義謙卑", en: "Seek Humility", ref: "2:3",
        dzh: "他呼籲世上的謙卑人：當尋求耶和華，尋求公義謙卑。",
        den: "He calls the humble of the land: seek Yahweh, seek righteousness, seek humility." }
    ],
    traits: [
      { k: "strength", zh: "從最嚴厲說到最溫柔（1:2；3:17）", en: "Speaks from the harshest word to the gentlest (1:2; 3:17)" },
      { k: "identity", zh: "家譜上溯四代，到「希西家」（1:1）", en: "His ancestry runs four generations back to “Hezekiah” (1:1)" }
    ],
    lesson: {
      zh: "西番雅書以「除滅萬類」開始（1:2），以神的歌聲結束（3:17）。他的名字常被解作「耶和華隱藏」，與 2:3 的「或者可以隱藏起來」相呼應。",
      en: "Zephaniah begins with “sweep away everything” (1:2) and ends with God’s song (3:17). His name is often explained as “Yahweh has hidden,” which echoes “you may be hidden” in 2:3."
    },
    quote: { ref: "1:1",
      zh: "希西家的玄孫，亞瑪利雅的曾孫，基大利的孫子，古示的兒子西番雅",
      en: "the son of Cushi, the son of Gedaliah, the son of Amariah, the son of Hezekiah" },
    keyVerses: ["1:1", "1:2", "2:3", "3:17"],
    intro: {
      zh: "別的先知多只列父名，西番雅書卻把他的家譜追到四代：古示、基大利、亞瑪利雅、希西家（1:1）。這位「希西家」是不是猶大王希西家，經文沒有說（和合本譯作「玄孫」，WEB 只作一連串「某某的兒子」）。他的時代是「猶大王亞們的兒子約西亞在位」（1:1），約西亞在位三十一年（王下 22:1）；耶利米書 1:2 說耶利米也是在約西亞的日子蒙召。書中對首領、王子、祭司、先知都有責備（1:8；3:3-4），也有對鄰國的話（2:4-15）。",
      en: "Other prophets usually list only a father’s name, but Zephaniah traces his ancestry four generations: Cushi, Gedaliah, Amariah, Hezekiah (1:1). Whether this Hezekiah is King Hezekiah of Judah the text does not say (the CUV has “great-great-grandson,” the WEB only a chain of “son of”). His time is “the days of Josiah the son of Amon, king of Judah” (1:1); Josiah reigned thirty-one years (2 Kgs 22:1), and Jeremiah 1:2 says Jeremiah was also called in Josiah’s days. The book rebukes princes, the king’s sons, priests and prophets (1:8; 3:3–4), and has words for neighboring nations (2:4–15)."
    },
    tip: {
      zh: "1:1 的「希西家」是否就是猶大王希西家，經文沒有說；名字的意思也只是一種常見的解釋。",
      en: "Whether the “Hezekiah” of 1:1 is the king the text does not say; the meaning of his name is only one common explanation."
    },
    related: ["great_day", "seek_humility", "oppressing_city", "sing_over_you", "sweep_away"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "sweep_away", book: "zephaniah", no: 2, kind: "other", type: "power", rarity: 3,
    zh: "除滅萬類", en: "Sweeping Everything Away",
    tag: { zh: "我必從地上除滅萬類", en: "“I Will Utterly Sweep Away Everything”" },
    role: { zh: "全書最大的一句（1:2-3）", en: "The book’s widest sentence (1:2–3)" },
    ch: [1],
    passages: ["1:2-3"],
    moves: [
      { zh: "從地上除滅", en: "Swept from the Earth", ref: "1:2",
        dzh: "耶和華說：我必從地上除滅萬類。",
        den: "“I will utterly sweep away everything from the surface of the earth,” says Yahweh." },
      { zh: "人、牲畜、鳥、魚", en: "Man, Animal, Bird, Fish", ref: "1:3",
        dzh: "我必除滅人和牲畜，與空中的鳥、海裡的魚，以及絆腳石和惡人。",
        den: "I will sweep away man and animal, the birds of the sky, the fish of the sea, and the heaps of rubble with the wicked." }
    ],
    traits: [
      { k: "strength", zh: "範圍是整個地面", en: "Its scope is the whole surface of the earth" },
      { k: "weakness", zh: "連動物也在其中，經文沒有解釋原因", en: "Animals too are swept up; the text gives no reason" }
    ],
    lesson: {
      zh: "全書的第一句話不是對某一國，而是對整個地面（1:2-3）；但下一節就收窄到猶大和耶路撒冷（1:4）。有學者指出 1:3 的次序（人、牲畜、鳥、魚）與創世記第 1 章相反，像創造的倒轉。",
      en: "The book’s first words are not to one nation but to the whole surface of the earth (1:2–3); the next verse narrows to Judah and Jerusalem (1:4). Some scholars note that 1:3’s order (man, animal, bird, fish) is the reverse of Genesis 1, like creation running backwards."
    },
    quote: { ref: "1:2",
      zh: "我必從地上除滅萬類",
      en: "I will utterly sweep away everything from the surface of the earth" },
    keyVerses: ["1:2", "1:3"],
    intro: {
      zh: "在列出先知的家譜與時代（1:1）之後，書的第一個音是這句：「耶和華說：我必從地上除滅萬類。」（1:2）1:3 逐項說出：人和牲畜，空中的鳥，海裡的魚，以及「絆腳石」和惡人。「除滅」一詞連用三次，像掃地。和合本的「絆腳石」，WEB 作「heaps of rubble」（瓦礫堆），原文字義不容易確定。1:4 馬上把鏡頭拉近：「我必伸手攻擊猶大和耶路撒冷的一切居民。」",
      en: "After the prophet’s ancestry and time (1:1), the book’s first sound is this: “I will utterly sweep away everything from the surface of the earth, says Yahweh” (1:2). Verse 3 lists them one by one: man and animal, the birds of the sky, the fish of the sea, and the “stumbling blocks” with the wicked. “Sweep away” is said three times, like sweeping a floor. The CUV’s “stumbling blocks” is “heaps of rubble” in the WEB; the Hebrew word is hard to pin down. Verse 4 pulls the camera in at once: “I will stretch out my hand against Judah, and against all the inhabitants of Jerusalem.”"
    },
    tip: {
      zh: "1:3 的「絆腳石」（和合本）與「瓦礫堆」（WEB）是同一個字的兩種譯法，原文字義不確定。",
      en: "“Stumbling blocks” (CUV) and “heaps of rubble” (WEB) are two renderings of one uncertain Hebrew word in 1:3."
    },
    related: ["zephaniah", "mixed_worship", "great_day", "silent_before_lord"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "mixed_worship", book: "zephaniah", no: 3, kind: "other", type: "scheme", rarity: 3,
    zh: "兩邊起誓的人", en: "Swearing by Both",
    tag: { zh: "又指著耶和華，又指著瑪勒堪起誓", en: "By Yahweh and Also by Malcam" },
    role: { zh: "猶大的混合敬拜（1:4-6）", en: "Judah’s mixed worship (1:4–6)" },
    ch: [1],
    passages: ["1:4-6"],
    moves: [
      { zh: "剪除所剩下的巴力", en: "Baal’s Remnant Cut Off", ref: "1:4",
        dzh: "我必伸手攻擊猶大和耶路撒冷的居民，剪除所剩下的巴力。",
        den: "I will stretch out my hand against Judah and Jerusalem, and cut off the remnant of Baal from this place." },
      { zh: "房頂上的敬拜", en: "Worship on the Rooftops", ref: "1:5",
        dzh: "有人在房頂上敬拜天上萬象，又指著耶和華，也指著瑪勒堪起誓。",
        den: "Some worship the army of the sky on the housetops, and swear by Yahweh and also by Malcam." }
    ],
    traits: [
      { k: "strength", zh: "仍然敬拜耶和華，沒有公開放棄", en: "Still worship Yahweh; no open abandonment" },
      { k: "weakness", zh: "同時敬拜別的", en: "Worship others at the same time" }
    ],
    lesson: {
      zh: "最難分辨的是混合：他們沒有放棄耶和華，只是同時指著瑪勒堪起誓（1:5）。列王紀下 23:4-5, 12 記約西亞除去為巴力、天上萬象所造的器皿，並拆毀亞哈斯樓頂上的壇，與這裡的描寫相合。",
      en: "The hardest thing to see is the mixture: they have not abandoned Yahweh; they simply also swear by Malcam (1:5). 2 Kings 23:4–5, 12 records Josiah removing the vessels made for Baal and the army of the sky and breaking down the altars on the roof of Ahaz’s upper room, which fits the picture here."
    },
    quote: { ref: "1:5",
      zh: "那些敬拜耶和華指著他起誓，又指著瑪勒堪起誓的",
      en: "those who worship and swear by Yahweh and also swear by Malcam" },
    keyVerses: ["1:4", "1:5", "1:6"],
    intro: {
      zh: "1:4-6 的清單不長，但很具體：「巴力」殘餘的敬拜，「基瑪林」（和合本音譯，指拜偶像的祭司）和他們的名字，在房頂上敬拜天上萬象的人（1:5），又指著耶和華起誓、也指著瑪勒堪起誓的人，以及那些轉去不跟從耶和華的、不尋求不訪問祂的人（1:6）。最後一類人沒有拜甚麼別的，只是不尋求。列王紀下 23:4-5、12 記約西亞做的改革有相同的項目：巴力、天上萬象、屋頂的壇。書中沒有說這些話是在改革之前還是之後說的。",
      en: "The list in 1:4–6 is short but specific: the remnant of Baal, the idolatrous priests (the CUV’s “基瑪林” is a transliteration) and their name, those who worship the army of the sky on the housetops (1:5), those who swear by Yahweh and also by Malcam, and those who have turned back from following Yahweh or have not sought or inquired after him (1:6). The last group worships nothing else; they simply do not seek. 2 Kings 23:4–5, 12 records Josiah’s reform with the same items: Baal, the army of the sky, rooftop altars. The book does not say whether these words came before or after the reform."
    },
    tip: {
      zh: "「瑪勒堪」（Malcam）是誰，注釋書有幾種說法（如亞捫人的神，或讀作「他們的王」），經文沒有說明。",
      en: "Who “Malcam” is, commentaries explain in several ways (for example the Ammonite god, or “their king”); the text does not say."
    },
    related: ["sweep_away", "silent_before_lord", "search_lamps", "zephaniah"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "silent_before_lord", book: "zephaniah", no: 4, kind: "other", type: "power", rarity: 3,
    zh: "在主面前靜默無聲", en: "Be Silent Before the Lord",
    tag: { zh: "耶和華已經預備祭物", en: "Yahweh Has Prepared a Sacrifice" },
    role: { zh: "祭物的日子（1:7-9）", en: "The day of the sacrifice (1:7–9)" },
    ch: [1],
    passages: ["1:7-9"],
    moves: [
      { zh: "靜默無聲", en: "Be Silent", ref: "1:7",
        dzh: "你要在主耶和華面前靜默無聲，因為耶和華的日子快到。",
        den: "Be silent at the presence of the Lord Yahweh, for the day of Yahweh is at hand." },
      { zh: "懲罰首領與王子", en: "Princes Punished", ref: "1:8-9",
        dzh: "那日他必懲罰首領、王子，和一切穿外邦衣服、跳過門檻的。",
        den: "In that day he will punish the princes, the king’s sons, those in foreign clothing and those who leap over the threshold." }
    ],
    traits: [
      { k: "strength", zh: "「靜默」是第一個命令", en: "“Be silent” is the first command" },
      { k: "identity", zh: "「祭物」和「客」是誰，經文沒有說明", en: "Who the “sacrifice” and the “guests” are is not said" }
    ],
    lesson: {
      zh: "「靜默」是這一小段的第一個詞（1:7）：先閉嘴，才聽得見日子的腳步。審判不是從平民，而是從首領、王子、宮廷的風尚開始（1:8）。",
      en: "“Be silent” is the first word of this passage (1:7): shut up first, then hear the day’s footsteps. Judgment starts not with commoners but with princes, the king’s sons and the court’s fashions (1:8)."
    },
    quote: { ref: "1:7",
      zh: "你要在主耶和華面前靜默無聲，因為耶和華的日子快到",
      en: "Be silent at the presence of the Lord Yahweh, for the day of Yahweh is at hand." },
    keyVerses: ["1:7", "1:8", "1:9"],
    intro: {
      zh: "1:7 突然從除滅的畫面轉到禮儀的氣氛：「你要在主耶和華面前靜默無聲，因為耶和華的日子快到。耶和華已經預備祭物，將他的客分別為聖。」祭物是誰、客人是誰，經文沒有說明；一種常見的讀法是：被審判的是祭物，而審判的執行者是被請來的客人，但書沒有點名。1:8 說「懲罰首領和王子，並一切穿外邦衣服的」，1:9 說「一切跳過門檻、將強暴和詭詐得來之物充滿主人房屋的」。「跳過門檻」可能是某種外邦的迷信習慣，也可能是闖進別人家中，經文沒有解釋。",
      en: "Verse 7 turns suddenly from the picture of sweeping to the air of ritual: “Be silent at the presence of the Lord Yahweh, for the day of Yahweh is at hand. For Yahweh has prepared a sacrifice. He has consecrated his guests.” Who the sacrifice is and who the guests are the text does not say; one common reading is that those judged are the sacrifice and the agents of judgment the invited guests, but the book names no one. Verse 8 says he will punish the princes, the king’s sons, and all in foreign clothing; verse 9, all those who leap over the threshold, who fill their master’s house with violence and deceit. “Leaping over the threshold” could be a foreign superstitious custom or breaking into another’s house; the text does not explain."
    },
    tip: {
      zh: "1:7 的「祭物」與「客」、1:9 的「跳過門檻」，經文都沒有解釋，注釋書各有不同讀法。",
      en: "The “sacrifice” and “guests” of 1:7 and the “leaping over the threshold” of 1:9 are not explained in the text; commentaries read them differently."
    },
    related: ["sweep_away", "mixed_worship", "search_lamps", "great_day"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "search_lamps", book: "zephaniah", no: 5, kind: "other", type: "vision", rarity: 4,
    zh: "用燈巡查耶路撒冷", en: "Searching Jerusalem with Lamps",
    tag: { zh: "「耶和華必不降福，也不降禍」", en: "“Yahweh Will Not Do Good, Neither Will He Do Evil”" },
    role: { zh: "城裡的審判（1:10-13）", en: "Judgment inside the city (1:10–13)" },
    ch: [1],
    passages: ["1:10-13"],
    moves: [
      { zh: "魚門的哀聲", en: "A Cry at the Fish Gate", ref: "1:10-11",
        dzh: "魚門有悲哀的聲音，二城有哀號，瑪革提施的居民要哀號。",
        den: "A cry from the Fish Gate, a wailing from the second quarter; wail, you inhabitants of Maktesh." },
      { zh: "用燈巡查", en: "Lamps in the Dark", ref: "1:12",
        dzh: "我必用燈巡查耶路撒冷，懲罰那些說「耶和華必不降福，也不降禍」的。",
        den: "“I will search Jerusalem with lamps,” and punish those who say, “Yahweh will not do good, neither will he do evil.”" }
    ],
    traits: [
      { k: "strength", zh: "燈能把藏在暗處的人照出來", en: "The lamps bring the hidden into the light" },
      { k: "weakness", zh: "心裡說：神不管事", en: "Says in the heart: God does not act" }
    ],
    lesson: {
      zh: "最危險的不是否認神，而是以為祂既不降福也不降禍（1:12）。人的安穩像放在渣滓上沒有攪動的酒，但燈要巡查每一個角落。",
      en: "The most dangerous thing is not denying God but thinking he will neither do good nor evil (1:12). Such ease is like wine left on its dregs, undisturbed, but the lamps will search every corner."
    },
    quote: { ref: "1:12",
      zh: "我必用燈巡查耶路撒冷",
      en: "I will search Jerusalem with lamps" },
    keyVerses: ["1:10", "1:11", "1:12", "1:13"],
    intro: {
      zh: "1:10 從耶路撒冷的地名寫起：魚門、「二城」（城的第二區）、山間，各有哀號和破裂的聲音。「瑪革提施」（1:11）是城裡一個低窪的商業區，「迦南的商民」「搬運銀子的」都被剪除。1:12 是這段的中心：「那時，我必用燈巡查耶路撒冷；我必懲罰那些如酒在渣滓上澄清的」——酒放在渣滓上不攪動，是安穩，也是鬆懈；他們心裡說：「耶和華必不降福，也不降禍。」1:13 說他們的財寶成為掠物，房屋成為荒場；建造房屋，卻不得住在其內；栽種葡萄園，卻不得喝所出的酒。",
      en: "Verse 10 begins with place names in Jerusalem: the Fish Gate, the “second quarter,” the hills, each with a cry or a crash. “Maktesh” (1:11) is a low-lying commercial district; “the people of Canaan” and “those loaded with silver” are cut off. Verse 12 is the center: “I will search Jerusalem with lamps, and I will punish the men who are settled on their dregs” — wine left undisturbed on its dregs is secure and also slack; they say in their heart, “Yahweh will not do good, neither will he do evil.” Verse 13 says their wealth becomes plunder and their houses a desolation; they build houses but won’t live in them, plant vineyards but won’t drink their wine."
    },
    tip: {
      zh: "「如酒在渣滓上澄清」是比喻：長期不被攪動而變得自滿，不是說他們在喝酒。",
      en: "“Settled on their dregs” is a figure: long undisturbed and so complacent, not that they are drinking."
    },
    related: ["mixed_worship", "silent_before_lord", "great_day", "oppressing_city"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "great_day", book: "zephaniah", no: 6, kind: "other", type: "power", rarity: 5,
    zh: "耶和華的大日", en: "The Great Day of Yahweh",
    tag: { zh: "忿怒、急難、黑暗的日子", en: "A Day of Wrath, Distress and Darkness" },
    role: { zh: "書的中心畫面（1:14-18）", en: "The book’s central picture (1:14–18)" },
    ch: [1],
    passages: ["1:14-18"],
    moves: [
      { zh: "臨近而且甚快", en: "Near and Hurrying", ref: "1:14-15",
        dzh: "那日是忿怒的日子，是急難困苦、黑暗幽冥、密雲烏黑的日子。",
        den: "That day is a day of wrath, distress and anguish, darkness and gloom, clouds and blackness." },
      { zh: "金銀不能救", en: "Silver and Gold Cannot Save", ref: "1:18",
        dzh: "他們的金銀不能救他們；他的忿怒如火必燒滅全地。",
        den: "Neither their silver nor their gold will deliver them; the whole land will be devoured by the fire of his jealousy." }
    ],
    traits: [
      { k: "strength", zh: "「臨近，臨近而且甚快」", en: "“Near, and hurries greatly”" },
      { k: "identity", zh: "與珥 2:1-2、摩 5:18-20 同一個「日子」", en: "The same “day” as Joel 2:1–2 and Amos 5:18–20" }
    ],
    lesson: {
      zh: "阿摩司 5:18-20 對想望那日的人說：那日是黑暗，不是光明；約珥 2:1-2 也說「黑暗、幽冥、密雲、烏黑」。西番雅加上一句很具體的話：金銀救不了人（1:18）。",
      en: "Amos 5:18–20 says to those who long for that day: it is darkness, not light; Joel 2:1–2 also has “darkness and gloominess… clouds and thick darkness.” Zephaniah adds a concrete word: silver and gold cannot save (1:18)."
    },
    quote: { ref: "1:15",
      zh: "那日是忿怒的日子，是急難困苦的日子，是荒廢淒涼的日子",
      en: "That day is a day of wrath, a day of distress and anguish, a day of trouble and ruin" },
    keyVerses: ["1:14", "1:15", "1:16", "1:17", "1:18"],
    intro: {
      zh: "「耶和華的大日臨近，臨近而且甚快」（1:14）。接著是一連串的「日子」：忿怒的日子，急難困苦的日子，荒廢淒涼的日子，黑暗幽冥、密雲烏黑的日子，吹角吶喊的日子（1:15-16）。1:17 說人行走如同瞎眼的，血倒出如灰塵，肉拋棄如糞土，這些字句強調人的生命在那日變得多麼輕。1:18 的結論：金銀不能救，忿怒如火燒滅全地。這「日子」是指耶路撒冷近期的傾覆，還是更遠的末日審判，書中兩面的語言都有，注釋家看法不一。",
      en: "“The great day of Yahweh is near. It is near, and hurries greatly” (1:14). Then a string of “days”: a day of wrath, of distress and anguish, of trouble and ruin, of darkness and gloom, of the trumpet and alarm (1:15–16). Verse 17 says people will walk like the blind, their blood poured out like dust and their flesh like dung — words that stress how cheap life becomes on that day. Verse 18 concludes: silver and gold cannot deliver; his jealous wrath devours the whole land. Whether this “day” means the near fall of Jerusalem or a more distant final judgment, the book has language for both, and commentators differ."
    },
    tip: {
      zh: "「大日」是指耶路撒冷的傾覆，還是末日審判，經文兩面的語言都有，各解不一。",
      en: "Whether the “great day” is the fall of Jerusalem or a final judgment, the text uses language fitting both, and readings differ."
    },
    related: ["sweep_away", "silent_before_lord", "search_lamps", "seek_humility"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "seek_humility", book: "zephaniah", no: 7, kind: "other", type: "faith", rarity: 5,
    zh: "尋求耶和華，或者可以隱藏", en: "Seek Yahweh — Perhaps You Will Be Hidden",
    tag: { zh: "尋求公義，尋求謙卑", en: "Seek Righteousness, Seek Humility" },
    role: { zh: "審判中的邀請（2:1-3）", en: "The invitation inside judgment (2:1–3)" },
    ch: [2],
    passages: ["2:1-3"],
    moves: [
      { zh: "你們應當聚集", en: "Gather Together", ref: "2:1-2",
        dzh: "不知羞恥的國民哪，趁耶和華的烈怒未臨到，你們應當聚集！",
        den: "Gather yourselves together, you nation that has no shame, before the day of Yahweh’s anger comes on you." },
      { zh: "尋求公義謙卑", en: "Seek Righteousness and Humility", ref: "2:3",
        dzh: "遵守耶和華典章的謙卑人哪，你們都當尋求耶和華！",
        den: "Seek Yahweh, all you humble of the land, who have kept his ordinances. Seek righteousness. Seek humility." }
    ],
    traits: [
      { k: "strength", zh: "「或者」——不是保證，是邀請", en: "“Perhaps” — an invitation, not a guarantee" },
      { k: "identity", zh: "「隱藏」與書名「耶和華隱藏」呼應", en: "“Hidden” echoes the name “Yahweh has hidden”" }
    ],
    lesson: {
      zh: "審判中間有一個門：尋求耶和華，尋求公義，尋求謙卑，「或者」可以隱藏起來（2:3）。這個「或者」是誠實的：先知沒有替神作保證，只指出方向。",
      en: "There is a door inside the judgment: seek Yahweh, seek righteousness, seek humility; “it may be” that you will be hidden (2:3). The “may be” is honest: the prophet does not give God’s guarantee, only a direction."
    },
    quote: { ref: "2:3",
      zh: "當尋求公義謙卑，或者在耶和華發怒的日子可以隱藏起來",
      en: "Seek righteousness. Seek humility. It may be that you will be hidden" },
    keyVerses: ["2:1", "2:2", "2:3"],
    intro: {
      zh: "第 2 章以一個邀請開始：「不知羞恥的國民哪，你們應當聚集！趁命令沒有發出，日子過去如風前的糠，耶和華的烈怒未臨到你們，……你們應當聚集前來。」（2:1，和合本把 2:1-2 合為一節，2:2 顯示「見上節」）2:3 是這章的核心，也是整卷書的轉折：「世上遵守耶和華典章的謙卑人哪，你們都當尋求耶和華！當尋求公義謙卑，或者在耶和華發怒的日子可以隱藏起來。」「謙卑人」是被叫去尋求的人，而且「遵守耶和華典章」；「或者」說明那日的結果沒有被先知預先保證。",
      en: "Chapter 2 opens with an invitation: “Gather yourselves together, yes, gather together, you nation that has no shame, before the appointed time when the day passes as the chaff, before the fierce anger of Yahweh comes on you” (2:1–2; the CUV merges 2:1–2 into one verse, with 2:2 shown as “見上節”). Verse 3 is the core of the chapter and the book’s turn: “Seek Yahweh, all you humble of the land, who have kept his ordinances. Seek righteousness. Seek humility. It may be that you will be hidden in the day of Yahweh’s anger.” The “humble” are the ones called to seek, and they “have kept his ordinances”; “it may be” shows that the outcome of that day is not guaranteed in advance by the prophet."
    },
    tip: {
      zh: "和合本把 2:1-2 合為一節；2:3 的「或者」，是先知誠實的說法，不是不確定神。",
      en: "The CUV merges 2:1–2; the “may be” of 2:3 is the prophet’s honest wording, not doubt about God."
    },
    related: ["great_day", "humble_remnant", "zephaniah", "pure_lips"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "sea_coast", book: "zephaniah", no: 8, kind: "other", type: "harvest", rarity: 3,
    zh: "沿海之地變為草場", en: "The Coast Becomes Pasture",
    tag: { zh: "非利士的城，成了猶大的羊圈", en: "Philistine Towns Become Judah’s Sheepfolds" },
    role: { zh: "對西邊鄰國的話（2:4-7）", en: "The word to the western neighbor (2:4–7)" },
    ch: [2],
    passages: ["2:4-7"],
    moves: [
      { zh: "迦薩必致見棄", en: "Gaza Forsaken", ref: "2:4",
        dzh: "迦薩必致見棄，亞實基倫必然荒涼，亞實突、以革倫也被拔出根來。",
        den: "Gaza will be forsaken and Ashkelon a desolation; Ashdod will be driven out and Ekron rooted up." },
      { zh: "歸給猶大餘民", en: "For Judah’s Remnant", ref: "2:6-7",
        dzh: "沿海之地要變為草場，為猶大家剩下的人所得。",
        den: "The coast will be pastures, and will be for the remnant of the house of Judah." }
    ],
    traits: [
      { k: "strength", zh: "耶和華必眷顧猶大的餘民（2:7）", en: "Yahweh will visit Judah’s remnant (2:7)" },
      { k: "weakness", zh: "沿海的堅城，成了羊群躺臥之處", en: "Coastal strongholds become places where flocks lie down" }
    ],
    lesson: {
      zh: "舊日的敵人之地，要成為猶大餘民的牧場：牧人的住處和羊群的圈（2:6），晚上躺臥在亞實基倫的房屋中（2:7）。審判的另一面，是羊得到安息的地方。",
      en: "The land of old enemies becomes a pasture for Judah’s remnant: shepherds’ cottages and folds (2:6), lying down in the evening in the houses of Ashkelon (2:7). The other side of judgment is a place where the flock may rest."
    },
    quote: { ref: "2:7",
      zh: "必眷顧他們，使他們被擄的人歸回",
      en: "for Yahweh, their God, will visit them, and restore them" },
    keyVerses: ["2:4", "2:5", "2:6", "2:7"],
    intro: {
      zh: "2:4-7 轉向西邊的非利士：迦薩、亞實基倫、亞實突、以革倫四城都要荒涼或被拔出根來（2:4）。2:5 說「住沿海之地的基利提族有禍了！迦南、非利士人之地啊，耶和華的話與你反對」。接著是出人意外的畫面：「沿海之地要變為草場，其上有牧人的住處和羊群的圈。這地必為猶大家剩下的人所得」（2:6-7）。猶大的餘民在亞實基倫的房屋中躺臥，因為「耶和華─他們的神必眷顧他們」。「基利提族」是與非利士有關的一個族群，確切來歷經文沒有說明。",
      en: "Verses 4–7 turn west to the Philistines: Gaza, Ashkelon, Ashdod and Ekron are all to be desolate or rooted up (2:4). Verse 5 says, “Woe to the inhabitants of the sea coast, the nation of the Cherethites! Yahweh’s word is against you, Canaan, the land of the Philistines.” Then comes an unexpected picture: “The sea coast will be pastures, with cottages for shepherds and folds for flocks. The coast will be for the remnant of the house of Judah” (2:6–7). Judah’s remnant lies down in the houses of Ashkelon, for “Yahweh, their God, will visit them, and restore them.” The “Cherethites” are a people connected with the Philistines; their exact origin the text does not say."
    },
    tip: {
      zh: "「基利提族」是與非利士有關的族群，確切來歷經文沒有說明；2:7 的「使被擄的人歸回」也可譯作「恢復他們的境況」。",
      en: "The “Cherethites” are connected with the Philistines, with no origin given; the “restore” of 2:7 can also be read “restore their fortunes.”"
    },
    related: ["seek_humility", "pride_moab", "ruined_nineveh", "humble_remnant"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "pride_moab", book: "zephaniah", no: 9, kind: "other", type: "scheme", rarity: 3,
    zh: "摩押必像所多瑪", en: "Moab Like Sodom",
    tag: { zh: "驕傲的毀謗，變成鹽坑", en: "Proud Insults Become Salt Pits" },
    role: { zh: "對東邊鄰國的話（2:8-11）", en: "The word to the eastern neighbors (2:8–11)" },
    ch: [2],
    passages: ["2:8-11"],
    moves: [
      { zh: "我聽見了", en: "“I Have Heard”", ref: "2:8",
        dzh: "我聽見摩押人的毀謗和亞捫人的辱罵，就是毀謗我的百姓。",
        den: "I have heard the reproach of Moab and the insults of Ammon, with which they have reproached my people." },
      { zh: "所多瑪與蛾摩拉", en: "Sodom and Gomorrah", ref: "2:9",
        dzh: "摩押必像所多瑪，亞捫必像蛾摩拉，都變為刺草、鹽坑。",
        den: "Moab will be as Sodom and Ammon as Gomorrah, a possession of nettles and salt pits." }
    ],
    traits: [
      { k: "strength", zh: "被辱罵的百姓有一位聽見的神", en: "The mocked people have a God who hears" },
      { k: "weakness", zh: "驕傲，自誇自大（2:10）", en: "Pride and self-magnifying (2:10)" }
    ],
    lesson: {
      zh: "審判的原因寫得很清楚：他們毀謗耶和華的百姓，自誇自大（2:8、10）。而 2:11 的結果出人意外：耶和華叫世上的諸神瘦弱，列國海島的居民各在自己的地方敬拜祂。",
      en: "The reason is plain: they reproached Yahweh’s people and magnified themselves (2:8, 10). The result in 2:11 is surprising: Yahweh famishes all the gods of the land, and the shores of the nations worship him, each from his own place."
    },
    quote: { ref: "2:9",
      zh: "摩押必像所多瑪，亞捫人必像蛾摩拉，都變為刺草、鹽坑、永遠荒廢之地",
      en: "Moab will be as Sodom, and the children of Ammon as Gomorrah" },
    keyVerses: ["2:8", "2:9", "2:10", "2:11"],
    intro: {
      zh: "2:8 的重點是一個動詞：「我聽見」。耶和華聽見摩押人的毀謗、亞捫人的辱罵，就是毀謗祂的百姓，侵犯他們的境界。2:9 以祂的永生起誓：「摩押必像所多瑪，亞捫人必像蛾摩拉」，都變為刺草、鹽坑、永遠荒廢之地；所多瑪與蛾摩拉的毀滅記在創世記 19:24-25。2:10 說原因是驕傲。2:11：「耶和華必向他們顯可畏之威，因他必叫世上的諸神瘦弱。列國海島的居民各在自己的地方敬拜他。」這是第 2 章難得出現的盼望：審判之後，敬拜不再局限於耶路撒冷。",
      en: "The point of 2:8 is one verb: “I have heard.” Yahweh has heard Moab’s reproach and Ammon’s insults, with which they reproached his people and magnified themselves against their border. Verse 9 swears by his life: “Moab will be as Sodom, and the children of Ammon as Gomorrah,” a possession of nettles, salt pits and perpetual desolation; the destruction of Sodom and Gomorrah is in Genesis 19:24–25. Verse 10 gives the reason: pride. Verse 11: “Yahweh will be awesome to them, for he will famish all the gods of the land. Men will worship him, everyone from his place, even all the shores of the nations.” This is a rare hope in chapter 2: after the judgment, worship is no longer tied to Jerusalem."
    },
    tip: {
      zh: "2:11 的「各在自己的地方敬拜他」，說的是列國各自敬拜耶和華，是否包括去耶路撒冷，經文沒有說明。",
      en: "“Everyone from his place” in 2:11 says the nations worship Yahweh each where they are; whether this includes going to Jerusalem the text does not say."
    },
    related: ["sea_coast", "ruined_nineveh", "seek_humility", "pure_lips"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "ruined_nineveh", book: "zephaniah", no: 10, kind: "other", type: "beast", rarity: 4,
    zh: "荒涼的尼尼微", en: "Nineveh Laid Waste",
    tag: { zh: "「惟有我，除我以外再沒有別的」", en: "“I Am, and There Is No One Besides Me”" },
    role: { zh: "對北方強國的話（2:12-15）", en: "The word to the northern power (2:12–15)" },
    ch: [2],
    passages: ["2:12-15"],
    moves: [
      { zh: "毀滅亞述", en: "Assyria Destroyed", ref: "2:13",
        dzh: "耶和華必伸手攻擊北方，毀滅亞述，使尼尼微荒涼，又乾旱如曠野。",
        den: "He will stretch out his hand against the north, destroy Assyria, and make Nineveh a desolation, as dry as the wilderness." },
      { zh: "何竟荒涼！", en: "How She Has Become a Desolation!", ref: "2:15",
        dzh: "她心裡說：惟有我，除我以外再沒有別的；現在何竟荒涼！",
        den: "She said in her heart, “I am, and there is no one besides me.” How she has become a desolation!" }
    ],
    traits: [
      { k: "strength", zh: "素來歡樂安然居住（2:15）", en: "Lived joyfully and securely (2:15)" },
      { k: "weakness", zh: "心裡自以為獨一無二", en: "Says in her heart she is the only one" }
    ],
    lesson: {
      zh: "這是我們的卡片中第三次遇到尼尼微：約拿書裡它悔改，那鴻書裡它被審判，這裡是它荒涼之後的樣子。自稱「除我以外再沒有別的」的城，最後成了野獸躺臥、路人搖手嗤笑之處（2:15）。",
      en: "This is the third time our cards meet Nineveh: in Jonah it repents, in Nahum it is judged, here is the scene after its desolation. The city that said “there is no one besides me” ends as a place for animals to lie down and passersby to hiss and shake their fists (2:15)."
    },
    quote: { ref: "2:15",
      zh: "這是素來歡樂安然居住的城，心裡說：惟有我，除我以外再沒有別的",
      en: "I am, and there is no one besides me." },
    keyVerses: ["2:12", "2:13", "2:14", "2:15"],
    intro: {
      zh: "2:12 只有一句話給古實人：「你們必被我的刀所殺。」2:13 轉向北方：耶和華必伸手攻擊北方，毀滅亞述，使尼尼微荒涼，乾旱如曠野。2:14 畫出廢墟：群畜和走獸臥在其中，鵜鶘和箭豬宿在柱頂上，窗戶內有鳴叫的聲音，門檻毀壞，香柏木露出。2:15 給出原因：這是素來歡樂安然居住的城，心裡說「惟有我，除我以外再沒有別的」。約西亞在位的時間（1:1）與尼尼微陷落的年份（歷史上約主前 612 年）重疊；書本身沒有說這預言何時說出，也沒有描寫陷落的過程。",
      en: "Verse 12 has only one line for the Cushites: “you will be killed by my sword.” Verse 13 turns north: Yahweh will stretch out his hand against the north, destroy Assyria, and make Nineveh a desolation, as dry as the wilderness. Verse 14 paints the ruins: herds and animals lying down in her, pelican and porcupine lodging in the capitals, calls echoing through the windows, desolation in the thresholds, the cedar beams laid bare. Verse 15 gives the reason: this is the joyous city that lived carelessly and said in her heart, “I am, and there is no one besides me.” Josiah’s reign (1:1) overlaps the year Nineveh fell (historically about 612 BC); the book does not say when this was spoken, and does not describe the fall itself."
    },
    tip: {
      zh: "尼尼微陷落的年份（約主前 612 年）是歷史資料；書本身只寫了結局，沒有寫經過。",
      en: "The date of Nineveh’s fall (about 612 BC) comes from outside history; the book gives only the outcome, not the process."
    },
    related: ["pride_moab", "sea_coast", "oppressing_city", "great_day"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "oppressing_city", book: "zephaniah", no: 11, kind: "other", type: "scheme", rarity: 4,
    zh: "悖逆、污穢、欺壓的城", en: "The Rebellious, Polluted City",
    tag: { zh: "首領如獅，審判官如狼", en: "Princes Like Lions, Judges Like Wolves" },
    role: { zh: "耶路撒冷的罪狀（3:1-7）", en: "Jerusalem’s charges (3:1–7)" },
    ch: [3],
    passages: ["3:1-7"],
    moves: [
      { zh: "四個「不」", en: "Four “Nots”", ref: "3:1-2",
        dzh: "這城有禍了：不聽從命令，不領受訓誨，不倚靠耶和華。",
        den: "Woe to her who is rebellious and polluted: she didn’t obey, didn’t receive correction, didn’t trust in Yahweh." },
      { zh: "耶和華在她中間是公義的", en: "Yahweh Within Her Is Righteous", ref: "3:3-5",
        dzh: "首領是咆哮的獅子，審判官是豺狼；耶和華在她中間卻是公義的。",
        den: "Her princes are roaring lions and her judges evening wolves; yet Yahweh within her is righteous." }
    ],
    traits: [
      { k: "strength", zh: "每早晨顯明祂的公義（3:5）", en: "Brings his justice to light every morning (3:5)" },
      { k: "weakness", zh: "不聽、不受教、不倚靠、不親近", en: "Does not listen, learn, trust or draw near" }
    ],
    lesson: {
      zh: "問題不在神是否公義：祂每早晨顯明祂的公義，無日不然；問題是「不義的人不知羞恥」（3:5）。四個「不」（3:2）是這城罪狀的總結。",
      en: "The problem is not whether God is just: he brings his justice to light every morning without fail; the problem is that “the unjust know no shame” (3:5). The four “nots” (3:2) sum up the city’s charge."
    },
    quote: { ref: "3:5",
      zh: "耶和華在她中間是公義的，斷不做非義的事，每早晨顯明他的公義",
      en: "Yahweh, within her, is righteous. He will do no wrong." },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:5", "3:7"],
    intro: {
      zh: "「這悖逆、污穢、欺壓的城有禍了！」（3:1）這城的名字沒有寫出，但接下來說到她的首領、審判官、先知、祭司（3:3-4），又說「耶和華在她中間」（3:5），所以通常讀作耶路撒冷。罪狀有四個「不」（3:2）；官員是獅子和豺狼，一點食物也不留到早晨（3:3）；先知虛浮詭詐，祭司褻瀆聖所，強解律法（3:4）。3:6 說耶和華已除滅列國，是對她的警告；3:7：「你只要敬畏我，領受訓誨」，但他們「從早起來就在一切事上敗壞自己」。",
      en: "“Woe to her who is rebellious and polluted, the oppressing city!” (3:1). The city is not named, but the verses go on to her princes, judges, prophets and priests (3:3–4) and say “Yahweh, within her” (3:5), so she is usually read as Jerusalem. The charges are four “nots” (3:2); the officials are lions and wolves who leave nothing till morning (3:3); the prophets are arrogant and treacherous, the priests profane the sanctuary and do violence to the law (3:4). Verse 6 says Yahweh has cut off nations, as a warning to her; verse 7: “Just fear me. Receive correction,” but they “rose early and corrupted all their doings.”"
    },
    tip: {
      zh: "3:1 沒有指名這城；因為上一章末尾說的是尼尼微，有人讀作尼尼微，但 3:2-5 的內容通常被讀作耶路撒冷。",
      en: "3:1 does not name the city; since the last chapter ended on Nineveh some read it as Nineveh, but 3:2–5 is usually read as Jerusalem."
    },
    related: ["search_lamps", "mixed_worship", "humble_remnant", "ruined_nineveh"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "pure_lips", book: "zephaniah", no: 12, kind: "other", type: "wisdom", rarity: 4,
    zh: "清潔的言語", en: "Purified Lips",
    tag: { zh: "同心合意地事奉我", en: "To Serve Him Shoulder to Shoulder" },
    role: { zh: "等候與萬民的轉變（3:8-10）", en: "Waiting, and the peoples transformed (3:8–10)" },
    ch: [3],
    passages: ["3:8-10"],
    moves: [
      { zh: "你們要等候我", en: "Wait for Me", ref: "3:8",
        dzh: "你們要等候我，直到我興起擄掠的日子。",
        den: "“Therefore wait for me,” says Yahweh, “until the day that I rise up to the prey.”" },
      { zh: "清潔的言語", en: "Purified Lips", ref: "3:9",
        dzh: "那時，我必使萬民用清潔的言語求告我，同心合意地事奉我。",
        den: "Then I will purify the lips of the peoples, that they may all call on Yahweh’s name, to serve him shoulder to shoulder." }
    ],
    traits: [
      { k: "strength", zh: "審判之後不是空無，而是新的言語", en: "After judgment comes not emptiness but new speech" },
      { k: "identity", zh: "「肩並肩」（WEB）、「同心合意」（和合本）", en: "“Shoulder to shoulder” (WEB), “of one heart” (CUV)" }
    ],
    lesson: {
      zh: "審判的終點之一是話語的潔淨：被偶像、起誓和虛謊弄髒的嘴（1:5；3:13），要被潔淨，萬民一起呼求耶和華的名（3:9）。",
      en: "One end of judgment is the cleansing of speech: mouths dirtied by idols, oaths and lies (1:5; 3:13) are purified, and all the peoples call together on Yahweh’s name (3:9)."
    },
    quote: { ref: "3:9",
      zh: "我必使萬民用清潔的言語好求告我",
      en: "I will purify the lips of the peoples, that they may all call on Yahweh’s name" },
    keyVerses: ["3:8", "3:9", "3:10"],
    intro: {
      zh: "3:8 是轉折：「你們要等候我，直到我興起擄掠的日子」；耶和華要聚集列國，傾下忿怒，如火燒滅全地。然後 3:9 出現「那時」：「我必使萬民用清潔的言語好求告我─耶和華的名，同心合意地事奉我。」WEB 作 “shoulder to shoulder”，是說並肩而立。3:10：「祈禱我的，就是我所分散的民（和合本註：原文是女子），必從古實河外來，給我獻供物」，從最遠的地方也有人來。「分散的民」是猶大被散的人，還是別的民族，注釋書看法不一。",
      en: "Verse 8 is the turn: “Therefore wait for me… until the day that I rise up to the prey”; Yahweh will gather the nations and pour out his anger so that all the earth is devoured by fire. Then 3:9 begins “For then”: “I will purify the lips of the peoples, that they may all call on Yahweh’s name, to serve him shoulder to shoulder” (the CUV has “of one heart”). Verse 10: “From beyond the rivers of Cush, my worshipers, even the daughter of my dispersed people, will bring my offering” — from the farthest places too. Whether the “dispersed” are scattered Judahites or other peoples, commentaries differ."
    },
    tip: {
      zh: "3:10 的「分散的民」是猶大被散的人還是別的民族，各解不一；和合本註「原文是女子」。",
      en: "Whether the “dispersed people” of 3:10 are scattered Judahites or other peoples is disputed; the CUV note says the original is “daughter.”"
    },
    related: ["seek_humility", "humble_remnant", "pride_moab", "sing_over_you"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "humble_remnant", book: "zephaniah", no: 13, kind: "other", type: "love", rarity: 4,
    zh: "困苦貧寒的餘民", en: "A Poor and Humble Remnant",
    tag: { zh: "他們必投靠耶和華的名", en: "They Will Take Refuge in Yahweh’s Name" },
    role: { zh: "留下來的人（3:11-13）", en: "Those who are left (3:11–13)" },
    ch: [3],
    passages: ["3:11-13"],
    moves: [
      { zh: "除掉矜誇高傲", en: "The Proud Removed", ref: "3:11-12",
        dzh: "我必除掉矜誇高傲之輩，卻在你中間留下困苦貧寒的民。",
        den: "I will take away your proudly exulting ones, but leave among you an afflicted and poor people." },
      { zh: "無人驚嚇", en: "No One Makes Them Afraid", ref: "3:13",
        dzh: "以色列所剩下的人不作罪孽，不說謊言，吃喝躺臥，無人驚嚇。",
        den: "The remnant of Israel will not do iniquity nor speak lies; they will feed and lie down, and no one will make them afraid." }
    ],
    traits: [
      { k: "strength", zh: "他們的力量是「投靠」", en: "Their strength is taking refuge" },
      { k: "identity", zh: "餘民不是強者，而是「困苦貧寒」", en: "The remnant are not the strong but “afflicted and poor”" }
    ],
    lesson: {
      zh: "神留下的不是最強、最聰明的，而是「困苦貧寒」的民；他們的特點不是有甚麼，而是「投靠耶和華的名」（3:12）。這與 2:3 的「謙卑人」相互呼應。",
      en: "What God leaves is not the strongest or cleverest but “an afflicted and poor people”; their mark is not what they have but that they “take refuge in Yahweh’s name” (3:12). It echoes the “humble” of 2:3."
    },
    quote: { ref: "3:12",
      zh: "我卻要在你中間留下困苦貧寒的民；他們必投靠我",
      en: "I will leave among you an afflicted and poor people" },
    keyVerses: ["3:11", "3:12", "3:13"],
    intro: {
      zh: "3:11：「當那日，你必不因你一切得罪我的事自覺羞愧；因為那時我必從你中間除掉矜誇高傲之輩，你也不再於我的聖山狂傲。」3:12：「我卻要在你中間留下困苦貧寒的民；他們必投靠我─耶和華的名。」3:13 描寫這些人：不作罪孽，不說謊言，口中沒有詭詐的舌頭；「而且吃喝躺臥，無人驚嚇」。這幅「吃喝躺臥」的畫面，與 2:7 羊群在亞實基倫躺臥的畫面相呼應。「餘民」的觀念在先知書中常見；這裡的餘民不是以功勞留下的，而是以投靠。",
      en: "Verse 11: “In that day you will not be disappointed for all your doings, in which you have transgressed against me; for then I will take away out from among you your proudly exulting ones, and you will no more be haughty in my holy mountain.” Verse 12: “But I will leave among you an afflicted and poor people, and they will take refuge in Yahweh’s name.” Verse 13 describes them: they do no iniquity, speak no lies, have no deceitful tongue; “they will feed and lie down, and no one will make them afraid.” The “feed and lie down” picture echoes the flocks lying down in Ashkelon in 2:7. The idea of a “remnant” is common in the prophets; this one is not left because of merit but because they take refuge."
    },
    tip: {
      zh: "3:11 的「必不因……自覺羞愧」，WEB 作 “will not be disappointed”，兩種譯法方向略有不同。",
      en: "In 3:11 the CUV (“will not feel shame”) and the WEB (“will not be disappointed”) differ somewhat in direction."
    },
    related: ["seek_humility", "pure_lips", "sing_over_you", "oppressing_city"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "sing_over_you", book: "zephaniah", no: 14, kind: "heavenly", type: "love", rarity: 5,
    zh: "他必因你歡欣歌唱", en: "He Will Rejoice Over You with Singing",
    tag: { zh: "耶和華在你中間，是施行拯救的主", en: "Yahweh Is Among You, a Mighty One Who Saves" },
    role: { zh: "全書的高峰（3:14-17）", en: "The book’s peak (3:14–17)" },
    ch: [3],
    passages: ["3:14-17"],
    moves: [
      { zh: "應當歌唱", en: "Sing!", ref: "3:14",
        dzh: "錫安的民哪，應當歌唱！以色列啊，應當歡呼！",
        den: "Sing, daughter of Zion! Shout, Israel! Be glad and rejoice with all your heart." },
      { zh: "默然愛你，歡呼", en: "He Rejoices in Song", ref: "3:17",
        dzh: "他必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼。",
        den: "He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing." }
    ],
    traits: [
      { k: "strength", zh: "施行拯救、大有能力的主在你中間", en: "A mighty one who saves is among you" },
      { k: "identity", zh: "歌聲不只來自百姓，也來自神", en: "The singing comes not only from the people but from God" }
    ],
    lesson: {
      zh: "全書以「除滅」開始（1:2），這裡出現的卻是神自己的歌聲：祂因你歡欣喜樂，因你喜樂而歡呼（3:17）。這是整卷書最出人意外的一句。",
      en: "The book began with “sweep away” (1:2); what appears here is God’s own singing: he rejoices over you with joy and with singing (3:17). It is the book’s most unexpected line."
    },
    quote: { ref: "3:17",
      zh: "他在你中間必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼",
      en: "He will rejoice over you with joy. He will calm you in his love." },
    keyVerses: ["3:14", "3:15", "3:16", "3:17"],
    intro: {
      zh: "全書審判的氣氛在這一段突然轉變：「錫安的民哪，應當歌唱！以色列啊，應當歡呼！耶路撒冷的民哪，應當滿心歡喜快樂！」（3:14）理由有三：耶和華已除去刑罰、趕出仇敵（3:15）；以色列的王─耶和華在你中間（3:15）；「不要懼怕……不要手軟」（3:16）。然後是 3:17：「耶和華─你的神是施行拯救、大有能力的主。他在你中間必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼。」「默然愛你」的原文意思不容易確定，和合本與 WEB（“calm you in his love”）譯法不同。",
      en: "The judgment mood of the book turns suddenly: “Sing, daughter of Zion! Shout, Israel! Be glad and rejoice with all your heart, daughter of Jerusalem” (3:14). There are three reasons: Yahweh has taken away your judgments and thrown out your enemy (3:15); the King of Israel, Yahweh, is among you (3:15); “Don’t be afraid… Don’t let your hands be weak” (3:16). Then 3:17: “Yahweh, your God, is among you, a mighty one who will save. He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing.” The Hebrew behind “calm you in his love” is not easy to pin down, and the CUV (“默然愛你,” silently loves you) and the WEB differ."
    },
    tip: {
      zh: "「默然愛你」（和合本）與「使你在他的愛中平靜」（WEB）是對同一個難詞的兩種譯法。",
      en: "“Silently loves you” (CUV) and “calm you in his love” (WEB) are two renderings of one difficult phrase."
    },
    related: ["zephaniah", "humble_remnant", "lame_gathered", "pure_lips"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "lame_gathered", book: "zephaniah", no: 15, kind: "other", type: "love", rarity: 4,
    zh: "瘸腿的被拯救", en: "The Lame Saved, the Scattered Gathered",
    tag: { zh: "使受羞辱的得稱讚，有名聲", en: "Shame Turned to Praise and Honor" },
    role: { zh: "全書的結尾（3:18-20）", en: "The close of the book (3:18–20)" },
    ch: [3],
    passages: ["3:18-20"],
    moves: [
      { zh: "拯救瘸腿的", en: "Saving the Lame", ref: "3:19",
        dzh: "我必拯救你瘸腿的，聚集你被趕出的。",
        den: "I will save those who are lame, and gather those who were driven away." },
      { zh: "稱讚與名聲", en: "Praise and Honor", ref: "3:19-20",
        dzh: "那些在全地受羞辱的，我必使他們得稱讚，有名聲。",
        den: "I will give them praise and honor, whose shame has been in all the earth." }
    ],
    traits: [
      { k: "strength", zh: "把羞辱換成稱讚", en: "Turns shame into praise" },
      { k: "identity", zh: "被擄的人歸回的日子（3:20）", en: "The day the captives return (3:20)" }
    ],
    lesson: {
      zh: "全書以「聚集」收結：被趕散的、瘸腿的、受羞辱的，都被聚集（3:19-20）。從 1:2 的「除滅」，到 3:20 的「聚集」，是整卷書的弧線。",
      en: "The book ends on “gathering”: the driven away, the lame, the shamed are all gathered (3:19–20). From “sweep away” in 1:2 to “gather” in 3:20 is the arc of the whole book."
    },
    quote: { ref: "3:19",
      zh: "拯救你瘸腿的，聚集你被趕出的",
      en: "I will save those who are lame, and gather those who were driven away" },
    keyVerses: ["3:18", "3:19", "3:20"],
    intro: {
      zh: "最後三節是承諾：「那時，我必罰辦一切苦待你的人，又拯救你瘸腿的，聚集你被趕出的。那些在全地受羞辱的，我必使他們得稱讚，有名聲。」（3:19）3:20：「那時，我必領你們進來，聚集你們；我使你們被擄之人歸回的時候，就必使你們在地上的萬民中有名聲，得稱讚。」3:18 的原文難解，兩個譯本差別很大：和合本作「那些屬你、為無大會愁煩、因你擔當羞辱的，我必聚集他們」，WEB 作「我必從你中間除去那些為節期憂愁的；他們對你是重擔和羞辱」。這一節的意思，要看你採用哪種讀法。",
      en: "The last three verses are promises: “At that time I will deal with all those who afflict you, and I will save those who are lame, and gather those who were driven away. I will give them praise and honor, whose shame has been in all the earth” (3:19). Verse 20: “At that time will I bring you in, and at that time will I gather you; for I will give you honor and praise among all the peoples of the earth, when I restore your fortunes before your eyes.” The Hebrew of 3:18 is difficult, and the two translations differ widely: the CUV has “those who belong to you, grieve over the appointed feasts and bear reproach for you — I will gather them,” the WEB has “I will remove those who grieve about the appointed feasts from you; they are a burden and a reproach to you.” The sense depends on which reading you take."
    },
    tip: {
      zh: "3:18 的原文難解：和合本作「我必聚集他們」，WEB 作「我必除去他們」，方向相反，須對照兩個譯本。",
      en: "The Hebrew of 3:18 is difficult: the CUV says “I will gather them,” the WEB “I will remove them” — opposite directions; compare both."
    },
    related: ["sing_over_you", "humble_remnant", "sea_coast", "zephaniah"]
  }

);
