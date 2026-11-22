// 聖經人物卡 · 路得記 (Ruth) — book info + cards.
// Verse text comes from data/ruth.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Lev 19:9-10, Deut 23:3, Matt 1:5…)
// were checked against the 和合本 text and appear in prose only.

window.BOOKS.push({
  id: "ruth",
  zh: "路得記", en: "Ruth", abbr: { zh: "得", en: "Ruth" },
  chapters: 4,
  order: 8, section: { zh: "歷史書", en: "History" },
  fan: ["boaz", "ruth", "naomi"],
  summary: {
    zh: "士師時代遇上饑荒，拿俄米一家到摩押寄居，丈夫和兩個兒子相繼去世。她帶著摩押媳婦路得回到伯利恆，路得在大麥田裡遇見波阿斯——一位守信、慈愛的親屬。短短四章，講的是忠心、慈愛，和神在平凡日子裡暗暗的看顧。",
    en: "In the days of the judges a famine drives Naomi’s family to Moab, where her husband and both sons die. She returns to Bethlehem with her Moabite daughter-in-law Ruth, who meets Boaz, a kind and faithful kinsman, in a barley field. In four short chapters: loyalty, kindness, and God’s quiet care in ordinary days."
  },
  outline: [
    { zh: "拿俄米與路得從摩押歸回", en: "Naomi and Ruth return from Moab" },
    { zh: "路得在波阿斯的田裡拾穗", en: "Ruth gleans in Boaz’s field" },
    { zh: "打穀場上的請求", en: "The request at the threshing floor" },
    { zh: "贖回、婚姻與新的家", en: "Redemption, marriage and a new family" }
  ],
  notes: {
    zh: "小提示：路得記的關鍵詞是「慈愛」（希伯來文 hesed）——忠誠、委身、不離不棄的恩待。留意 1:8、2:20、3:10。",
    en: "Good to know: the key word of Ruth is hesed — loyal, committed kindness. Watch for it in 1:8, 2:20 and 3:10."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "elimelech", book: "ruth", no: 1, kind: "person", type: "harvest", rarity: 1,
    zh: "以利米勒", en: "Elimelech",
    meaning: { zh: "「我的神是王」", en: "“My God is king”" },
    tag: { zh: "離開「糧食之家」的人", en: "The Man Who Left the House of Bread" },
    role: { zh: "伯利恆的以法他人", en: "An Ephrathite of Bethlehem" },
    ch: [1, 2, 4],
    names: ["以利米勒"],
    enNames: ["Elimelech"],
    moves: [
      { zh: "因饑荒離鄉", en: "Leaving in the Famine", ref: "1:1-2",
        dzh: "士師時代遭遇饑荒，他帶著妻子和兩個兒子，從伯利恆往摩押地寄居。",
        den: "In a famine in the days of the judges he took his wife and two sons from Bethlehem to live in Moab." },
      { zh: "沒有回家", en: "He Never Came Home", ref: "1:3",
        dzh: "他死在摩押，剩下拿俄米和兩個兒子；他的產業後來由波阿斯贖回。",
        den: "He died in Moab, leaving Naomi and their sons; Boaz later redeemed his property." }
    ],
    traits: [
      { k: "strength", zh: "帶領全家求生", en: "Providing for his family" },
      { k: "weakness", zh: "糧食之家鬧饑荒", en: "Famine in the house of bread" }
    ],
    lesson: {
      zh: "經文沒有責備他在饑荒中的決定，只記下後來的事。神的看顧，在失去之後仍然繼續。",
      en: "The text doesn’t blame him for leaving in a famine — it simply records what followed. God’s care continued even through the losses."
    },
    quote: { ref: "1:1",
      zh: "當士師秉政的時候，國中遭遇饑荒。",
      en: "In the days when the judges judged, there was a famine in the land." },
    keyVerses: ["1:1-2", "1:3", "4:9"],
    intro: {
      zh: "以利米勒的名字意思是「我的神是王」。他是猶大伯利恆的以法他人，在士師時代的饑荒中帶著妻兒到摩押地寄居，沒有再回來（1:1-3）。他一家的遭遇，是整個故事的起點。",
      en: "Elimelech’s name means “my God is king.” An Ephrathite from Bethlehem in Judah, he took his family to live in Moab during a famine in the days of the judges and never returned (1:1–3). What happened to his family is where the whole story begins."
    },
    tip: {
      zh: "伯利恆的意思是「糧食之家」——在饑荒中離開糧食之家，和故事結尾（拿俄米歸回、得著孫兒）形成對照。",
      en: "Bethlehem means “house of bread” — leaving it in a famine contrasts with the ending, where Naomi returns and gains a grandson."
    },
    related: ["naomi", "mahlon_chilion", "boaz"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "naomi", book: "ruth", no: 2, kind: "person", type: "faith", rarity: 4,
    zh: "拿俄米", en: "Naomi",
    alt: { zh: "瑪拉", en: "Mara", ref: "1:20" },
    meaning: { zh: "「甜」（瑪拉是「苦」）", en: "“Pleasant” (Mara means “bitter”)" },
    tag: { zh: "由苦轉甜的婆婆", en: "From Bitter Back to Sweet" },
    role: { zh: "以利米勒的妻・路得的婆婆", en: "Elimelech’s widow · Ruth’s mother-in-law" },
    ch: [1, 2, 3, 4],
    names: ["拿俄米", "瑪拉"],
    enNames: ["Naomi", "Mara"],
    moves: [
      { zh: "「叫我瑪拉」", en: "“Call Me Mara”", ref: "1:20-21",
        dzh: "回到伯利恆，她對婦女說：「我滿滿地出去，耶和華使我空空地回來。」",
        den: "Back in Bethlehem she told the women: “I went out full, and Yahweh has brought me home again empty.”" },
      { zh: "為路得籌劃", en: "A Plan for Ruth", ref: "3:1-4",
        dzh: "她要為路得尋求「安身之處」，吩咐她夜裡到打穀場去見波阿斯。",
        den: "She wanted to find “rest” for Ruth and told her what to do at Boaz’s threshing floor." }
    ],
    traits: [
      { k: "strength", zh: "懂得人情世故", en: "Wise in people’s ways" },
      { k: "weakness", zh: "悲痛中自覺「空空」", en: "Felt “empty” in her grief" }
    ],
    lesson: {
      zh: "可以誠實地向神說出心裡的苦；故事的結局是：神沒有撇下她，她又得著安慰和孫兒。",
      en: "You can be honest with God about your grief; the story ends with God not abandoning her — she receives comfort and a grandson."
    },
    quote: { ref: "1:21",
      zh: "我滿滿地出去，耶和華使我空空地回來。",
      en: "I went out full, and Yahweh has brought me home again empty." },
    keyVerses: ["1:20-21", "2:20", "3:1-4", "4:14-16"],
    intro: {
      zh: "拿俄米的名字意思是「甜」。她在摩押失去丈夫和兩個兒子，只剩下摩押媳婦路得，回到伯利恆時，要大家叫她「瑪拉」（苦）。但故事沒有停在苦裡：她為路得籌劃將來，最後把孫兒抱在懷中（4:16）。",
      en: "Naomi’s name means “pleasant.” She lost her husband and both sons in Moab and came home to Bethlehem with only her Moabite daughter-in-law Ruth, asking to be called Mara (“bitter”). But the story doesn’t end in bitterness: she plans Ruth’s future and finally holds her grandson in her arms (4:16)."
    },
    tip: {
      zh: "2:20 是她語氣的轉捩點：聽見波阿斯的名字，她開始稱頌耶和華的「恩」。",
      en: "2:20 is the turning point in her tone: hearing Boaz’s name, she begins to praise Yahweh’s kindness."
    },
    related: ["ruth", "boaz", "elimelech", "orpah", "bethlehem_women", "obed"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "mahlon_chilion", book: "ruth", no: 3, kind: "person", type: "harvest", rarity: 1,
    zh: "瑪倫與基連", en: "Mahlon & Chilion",
    tag: { zh: "沒有回家的兩兄弟", en: "The Brothers Who Never Came Home" },
    role: { zh: "拿俄米的兩個兒子", en: "Naomi’s two sons" },
    ch: [1, 4],
    names: ["瑪倫", "基連"],
    enNames: ["Mahlon", "Chilion"],
    moves: [
      { zh: "娶摩押女子", en: "Marrying in Moab", ref: "1:4",
        dzh: "兩人在摩押娶了俄珥巴和路得，在那裡住了約有十年。",
        den: "In Moab they married Orpah and Ruth, and the family lived there about ten years." },
      { zh: "雙雙去世", en: "Both Died", ref: "1:5",
        dzh: "瑪倫和基連也死了，拿俄米沒有丈夫，也沒有兒子。",
        den: "Mahlon and Chilion also died, leaving Naomi with no husband and no sons." }
    ],
    traits: [
      { k: "strength", zh: "成家立室", en: "Started their own homes" },
      { k: "weakness", zh: "沒有留下後代", en: "Left no heirs" }
    ],
    lesson: {
      zh: "有些人物在經文裡只佔一兩節，他們的離世卻是故事的轉折點——把路得帶向伯利恆。",
      en: "Some characters get only a verse or two, yet their loss is what sets the story moving and brings Ruth to Bethlehem."
    },
    quote: { ref: "4:10",
      zh: "好在死人的產業上存留他的名",
      en: "to raise up the name of the dead on his inheritance" },
    keyVerses: ["1:2", "1:4-5", "4:9-10"],
    intro: {
      zh: "瑪倫和基連是以利米勒的兩個兒子，隨父母到了摩押，各娶了摩押女子：路得是瑪倫的妻子（4:10），可知俄珥巴是基連的妻子。約十年後兩人相繼去世，拿俄米剩下兩位寡婦兒媳。",
      en: "Mahlon and Chilion were Elimelech’s sons, who went with their parents to Moab and married Moabite women: Ruth was Mahlon’s wife (4:10), which makes Orpah Chilion’s. About ten years later both men died, leaving Naomi with two widowed daughters-in-law."
    },
    tip: {
      zh: "他們的名字在 4:9–10 再次出現：波阿斯買下他們名下的產業，為死人「存留名字」。",
      en: "Their names return in 4:9–10, where Boaz acquires what was theirs so that the name of the dead is not cut off."
    },
    related: ["elimelech", "naomi", "orpah", "ruth"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "orpah", book: "ruth", no: 4, kind: "person", type: "love", rarity: 2,
    zh: "俄珥巴", en: "Orpah",
    tag: { zh: "含淚轉身回去的媳婦", en: "The Daughter-in-Law Who Turned Back" },
    role: { zh: "摩押女子・拿俄米的兒媳", en: "Moabite widow · Naomi’s daughter-in-law" },
    ch: [1],
    names: ["俄珥巴"],
    enNames: ["Orpah"],
    moves: [
      { zh: "願意同行", en: "Ready to Go Along", ref: "1:10",
        dzh: "拿俄米勸她們回娘家，她和路得放聲痛哭，說：「我們必與你一同回你本國去。」",
        den: "When Naomi urged them to go home, she wept and said, “we will return with you to your people.”" },
      { zh: "含淚道別", en: "A Tearful Goodbye", ref: "1:14-15",
        dzh: "她再次痛哭，與婆婆親嘴而別，回自己的本國和她所拜的神那裡去了。",
        den: "She wept again, kissed her mother-in-law goodbye and went back to her own people and her god." }
    ],
    traits: [
      { k: "strength", zh: "有情有義", en: "Warm-hearted" },
      { k: "weakness", zh: "在岔路口轉身", en: "Turned back at the crossroads" }
    ],
    lesson: {
      zh: "經文沒有責備俄珥巴；她照婆婆的勸告回去。但路得的選擇讓人看見：真正的委身，是明知前路未卜仍然留下。",
      en: "The text doesn’t blame Orpah — she did what Naomi urged. But Ruth’s choice shows what costly commitment looks like: staying when the road ahead is unknown."
    },
    quote: { ref: "1:14",
      zh: "俄珥巴與婆婆親嘴而別，只是路得捨不得拿俄米",
      en: "Orpah kissed her mother-in-law, but Ruth joined with her." },
    keyVerses: ["1:8-9", "1:10-12", "1:14-15"],
    intro: {
      zh: "俄珥巴是摩押女子，嫁給拿俄米的一個兒子。丈夫去世後，她一度決定與婆婆同回猶大，但在拿俄米再三勸說下，含淚道別回去（1:14-15）。她的故事很短，卻使路得的堅持更加鮮明。",
      en: "Orpah was a Moabite woman married to one of Naomi’s sons. After his death she first set out to go back to Judah with her mother-in-law, but after Naomi urged her again and again she said a tearful goodbye and turned back (1:14–15). Her story is short, but it makes Ruth’s resolve stand out."
    },
    tip: {
      zh: "拿俄米的祝福（1:8-9）也包括俄珥巴——她是帶著祝福離開的，不是帶著責備。",
      en: "Naomi’s blessing in 1:8–9 includes Orpah too — she leaves with a blessing, not a rebuke."
    },
    related: ["ruth", "naomi", "mahlon_chilion"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "ruth", book: "ruth", no: 5, kind: "person", type: "love", rarity: 6,
    zh: "路得", en: "Ruth",
    tag: { zh: "不離不棄的摩押女子", en: "The Moabite Who Would Not Leave" },
    role: { zh: "摩押女子・拿俄米的兒媳", en: "Moabite widow · Naomi’s daughter-in-law" },
    ch: [1, 2, 3, 4],
    names: ["路得"],
    enNames: ["Ruth"],
    moves: [
      { zh: "「你的神就是我的神」", en: "“Your God Is My God”", ref: "1:16-17",
        dzh: "「你往哪裡去，我也往那裡去……你的國就是我的國，你的神就是我的神。」",
        den: "“where you go, I will go… Your people will be my people, and your God my God.”" },
      { zh: "田間拾穗", en: "Gleaning in the Field", ref: "2:2-3",
        dzh: "為了養活婆婆，她到田裡跟著收割的人拾取麥穗，恰巧來到波阿斯的田。",
        den: "To feed her mother-in-law she went to glean behind the reapers, and “happened” to reach Boaz’s field." }
    ],
    traits: [
      { k: "strength", zh: "忠心與勤勞", en: "Loyal and hardworking" },
      { k: "weakness", zh: "外邦人的身份", en: "A foreigner in a strange land" }
    ],
    lesson: {
      zh: "忠心往往不是轟轟烈烈，而是日復一日地照顧身邊的人；神看見，也必賞賜（2:12）。",
      en: "Faithfulness is often not dramatic but daily care for the person beside you; God sees it and repays it (2:12)."
    },
    quote: { ref: "1:16",
      zh: "你往哪裡去，我也往那裡去；你在哪裡住宿，我也在那裡住宿",
      en: "where you go, I will go; and where you stay, I will stay." },
    keyVerses: ["1:16-17", "2:10-12", "3:11", "4:13"],
    intro: {
      zh: "路得是摩押女子，嫁給拿俄米的兒子瑪倫（4:10）。丈夫去世後，她選擇不回娘家，跟著婆婆來到陌生的伯利恆，在田裡拾穗養活兩人。她後來嫁給波阿斯，成為俄備得的母親，也是大衛王的曾祖母（4:13-17, 22）；馬太福音的族譜也提到她（太 1:5）。",
      en: "Ruth was a Moabite woman married to Naomi’s son Mahlon (4:10). After his death she refused to go back to her family, came with Naomi to unfamiliar Bethlehem, and gleaned in the fields to feed them both. She later married Boaz and became the mother of Obed — King David’s great-grandmother (4:13–17, 22) — and she appears in Matthew’s genealogy (Matt 1:5)."
    },
    tip: {
      zh: "路得是摩押人（申 23:3 對摩押人有限制），卻被接納進以色列，還列在耶穌的族譜裡（太 1:5）——這是全書最令人意外的地方。",
      en: "Ruth was a Moabite (Deut 23:3 restricts Moabites), yet she is welcomed into Israel and named in Jesus’ genealogy (Matt 1:5) — the book’s great surprise."
    },
    related: ["naomi", "boaz", "orpah", "gleaning", "threshing_floor", "obed"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "bethlehem_women", book: "ruth", no: 6, kind: "person", type: "love", rarity: 1,
    zh: "伯利恆的婦人們", en: "The Women of Bethlehem",
    tag: { zh: "先驚訝、後祝福的鄰舍", en: "Neighbours Who Went From Shock to Blessing" },
    role: { zh: "伯利恆的鄰舍婦女", en: "The townswomen of Bethlehem" },
    ch: [1, 4],
    passages: ["1:19", "4:14-17"],
    moves: [
      { zh: "「這是拿俄米嗎？」", en: "“Is This Naomi?”", ref: "1:19",
        dzh: "拿俄米和路得一到伯利恆，合城驚動，婦女們說：「這是拿俄米嗎？」",
        den: "When Naomi and Ruth arrived, the whole town was stirred, and the women asked, “Is this Naomi?”" },
      { zh: "為孩子起名", en: "Naming the Child", ref: "4:14-17",
        dzh: "她們稱頌耶和華，說路得「比有七個兒子還好」，並給孩子起名叫俄備得。",
        den: "They blessed Yahweh, said Ruth is “better to you than seven sons,” and named the child Obed." }
    ],
    traits: [
      { k: "strength", zh: "同哭同樂", en: "Weeping and rejoicing together" },
      { k: "weakness", zh: "消息傳得很快", en: "News travels fast" }
    ],
    lesson: {
      zh: "一個肯陪伴的群體，是神恩待的見證：她們看過拿俄米的苦，也看見她的福。",
      en: "A community that stays beside you is a witness to God’s kindness: they saw Naomi’s bitterness and they saw her blessing."
    },
    quote: { ref: "4:14",
      zh: "耶和華是應當稱頌的！因為今日沒有撇下你，使你無至近的親屬。",
      en: "Blessed be Yahweh, who has not left you today without a near kinsman." },
    keyVerses: ["1:19", "4:14-17"],
    intro: {
      zh: "經文兩次提到伯利恆的婦女：拿俄米歸來時，她們驚訝地問「這是拿俄米嗎？」（1:19）；孩子出生時，她們稱頌耶和華，並給孩子起名叫俄備得（4:14-17）。她們像一個合唱團，見證了故事由苦到甜。",
      en: "The text mentions the women of Bethlehem twice: when Naomi comes back they ask in astonishment, “Is this Naomi?” (1:19); when the child is born they bless Yahweh and give him the name Obed (4:14–17). Like a chorus, they witness the story turning from bitter to sweet."
    },
    tip: {
      zh: "留意 4:17：是鄰舍的婦人給孩子起名，並說「拿俄米得孩子了！」——她們把這孩子看作拿俄米的福分。",
      en: "Notice 4:17: it is the neighbour women who name the child, saying “A son is born to Naomi” — they see him as Naomi’s blessing."
    },
    related: ["naomi", "ruth", "obed"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "boaz", book: "ruth", no: 7, kind: "person", type: "love", rarity: 5,
    zh: "波阿斯", en: "Boaz",
    tag: { zh: "慈愛的贖回者", en: "The Kind Redeemer" },
    role: { zh: "以利米勒的親族・大財主", en: "Wealthy kinsman of Elimelech" },
    ch: [2, 3, 4],
    names: ["波阿斯"],
    enNames: ["Boaz"],
    moves: [
      { zh: "田間的恩待", en: "Kindness in the Field", ref: "2:8-9",
        dzh: "他請路得留在自己的田裡，吩咐僕人不可欺負她，渴了可以喝僕人打來的水。",
        den: "He asked Ruth to stay in his field, told his men not to touch her, and let her drink from their water." },
      { zh: "盡親屬的本分", en: "Doing the Kinsman’s Duty", ref: "4:9-10",
        dzh: "他在城門長老面前買下以利米勒的產業，也娶路得為妻，為死人存留名字。",
        den: "At the gate before the elders he bought Elimelech’s property and took Ruth as his wife, to preserve the dead man’s name." }
    ],
    traits: [
      { k: "strength", zh: "慷慨、守信", en: "Generous and faithful" },
      { k: "weakness", zh: "還有更近的親屬排在前面", en: "A nearer kinsman stood ahead of him" }
    ],
    lesson: {
      zh: "他的恩待，讓路得實實在在經歷到「投靠在以色列神翅膀下」的意思（2:12）。",
      en: "His kindness let Ruth experience what it means to take refuge “under the wings” of the God of Israel (2:12)."
    },
    quote: { ref: "2:12",
      zh: "願耶和華照你所行的賞賜你",
      en: "May Yahweh repay your work" },
    keyVerses: ["2:4", "2:8-9", "2:11-12", "3:10-13", "4:9-10"],
    intro: {
      zh: "波阿斯是以利米勒的親族，是個大財主（2:1）。他在田間恩待陌生的外邦女子路得，又在她求「遮蓋」時，答應盡「至近的親屬」的本分。他先在城門與那位更近的親屬處理手續，然後娶了路得，成為俄備得的父親、大衛的曾祖父（4:21-22）。",
      en: "Boaz was a relative of Elimelech and a man of great wealth (2:1). He was kind to the foreign woman Ruth in his field, and when she asked him to “spread his garment” over her he promised to do the duty of a near kinsman. After settling matters at the gate with the nearer kinsman he married Ruth, becoming the father of Obed and great-grandfather of David (4:21–22)."
    },
    tip: {
      zh: "「至近的親屬」（希伯來文 go’el，贖回者）要在族人窮乏時贖回田產（參利 25:25）、延續死者的名；路得記把這個制度活生生地演出來。",
      en: "The “near kinsman” (Hebrew go’el, redeemer) was to buy back family land when a relative fell into poverty (compare Lev 25:25) and preserve the dead man’s name; Ruth shows the system in action."
    },
    related: ["ruth", "naomi", "overseer", "gleaning", "threshing_floor", "kinsman", "obed"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "gleaning", book: "ruth", no: 8, kind: "other", type: "harvest", rarity: 2,
    zh: "拾穗的大麥田", en: "The Barley Field",
    tag: { zh: "留給窮人和寄居者的麥穗", en: "Grain Left for the Poor and the Stranger" },
    role: { zh: "波阿斯在伯利恆的田", en: "Boaz’s field at Bethlehem" },
    ch: [2],
    passages: ["2:2-3", "2:7", "2:14-17", "2:23"],
    moves: [
      { zh: "拾取遺落的麥穗", en: "Gleaning Behind the Reapers", ref: "2:2-3",
        dzh: "窮人可以拾取收割後遺落的麥穗（參利 19:9-10），路得就這樣開始了。",
        den: "The poor could gather what the reapers left behind (compare Lev 19:9–10) — and that is how Ruth began." },
      { zh: "吃飽還有餘剩", en: "Eating Her Fill", ref: "2:14-17",
        dzh: "波阿斯請她同吃，又吩咐僕人從捆裡抽些留給她；到晚上她打了約一伊法大麥。",
        den: "Boaz shared his meal with her and had his men pull out extra grain; by evening she had about an ephah of barley." }
    ],
    traits: [
      { k: "strength", zh: "豐收的供應", en: "Abundant provision" },
      { k: "weakness", zh: "要彎腰一整天", en: "Back-breaking all-day work" }
    ],
    lesson: {
      zh: "神的供應常常藏在平凡的日子裡：一塊田、一份勤勞、一個願意恩待人的人。",
      en: "God’s provision often hides in ordinary days: a field, honest work, and someone willing to be kind."
    },
    quote: { ref: "2:3",
      zh: "她恰巧到了以利米勒本族的人波阿斯那塊田裡",
      en: "she happened to come to the portion of the field belonging to Boaz" },
    keyVerses: ["2:2-3", "2:7", "2:14-17", "2:23"],
    intro: {
      zh: "這是路得記最有畫面的一幕：大麥收割的季節，路得跟在收割的人後面拾取遺落的麥穗。利未記 19:9-10 規定，田主不可割盡田角、也不可拾取所遺落的，要留給窮人和寄居的；路得這位寄居的外邦寡婦，正是這條規定要照顧的人。",
      en: "This is the most visual scene in Ruth: in barley-harvest season, Ruth follows the reapers and gathers what they leave behind. Leviticus 19:9–10 tells landowners not to reap to the very edges or gather the gleanings, but to leave them for the poor and the stranger — and Ruth, a foreign widow, is exactly who that law looks after."
    },
    tip: {
      zh: "全書只有兩處明說耶和華親自作為（1:6 賜糧食；4:13 使路得懷孕），其餘都藏在平凡事件背後——「恰巧」（2:3）就是一例。",
      en: "Only twice does the text say outright that Yahweh acts (1:6 giving bread; 4:13 enabling Ruth to conceive); the rest is hidden in ordinary events — the “happened to” of 2:3 is one."
    },
    related: ["ruth", "boaz", "overseer"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "overseer", book: "ruth", no: 9, kind: "person", type: "wisdom", rarity: 1,
    zh: "監管收割的僕人", en: "The Reapers’ Foreman",
    tag: { zh: "給路得好評的監工", en: "The Foreman Who Spoke Well of Ruth" },
    role: { zh: "波阿斯的僕人", en: "Boaz’s servant over the reapers" },
    ch: [2],
    passages: ["2:5-7"],
    moves: [
      { zh: "「那是誰家的女子？」", en: "“Whose Young Woman Is This?”", ref: "2:5-6",
        dzh: "波阿斯一問，他就說出她的來歷：是跟隨拿俄米從摩押回來的摩押女子。",
        den: "When Boaz asked, he told her story at once: the Moabite woman who came back with Naomi from Moab." },
      { zh: "勤奮的好評", en: "A Good Report", ref: "2:7",
        dzh: "他說她從早晨拾取到現在，除了在屋子裡坐一會兒，常在這裡。",
        den: "He reported that she had worked from morning until now, resting only a little in the shelter." }
    ],
    traits: [
      { k: "strength", zh: "觀察入微", en: "Observant" },
      { k: "weakness", zh: "名字沒有被記下", en: "His name isn’t recorded" }
    ],
    lesson: {
      zh: "一句誠實、準確的話，可以改變別人的處境：他只是報告事實，卻成了路得蒙恩的開端。",
      en: "One honest, accurate word can change someone’s situation: he simply reported the facts, and it opened the door to Ruth’s favor."
    },
    quote: { ref: "2:7",
      zh: "請你容我跟著收割的人拾取打捆剩下的麥穗",
      en: "Please let me glean and gather after the reapers among the sheaves." },
    keyVerses: ["2:5-7"],
    intro: {
      zh: "他在經文裡只出現三節（2:5-7），沒有名字，只稱為「監管收割的僕人」。他回答波阿斯，說明路得的來歷，也證實她請求允許才拾穗、整天勤勞。這份簡短而誠實的報告，成了波阿斯留意路得的第一步。",
      en: "He appears in just three verses (2:5–7), unnamed, known only as the servant set over the reapers. He answers Boaz, explains who Ruth is, and confirms that she asked permission to glean and has worked all day. This short, honest report is the first step in Boaz noticing Ruth."
    },
    tip: {
      zh: "留意他轉述路得的話：「請你容我……」（2:7）——路得是先徵得同意才拾穗，顯出她的謙卑。",
      en: "Note that he quotes Ruth’s request — “Please let me…” (2:7): she asked permission before gleaning, which shows her humility."
    },
    related: ["boaz", "ruth", "gleaning"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "threshing_floor", book: "ruth", no: 10, kind: "other", type: "harvest", rarity: 3,
    zh: "打穀場上的夜晚", en: "The Night at the Threshing Floor",
    tag: { zh: "半夜的請求", en: "A Midnight Request" },
    role: { zh: "伯利恆的打穀場", en: "Bethlehem’s threshing floor" },
    ch: [3],
    passages: ["3:2-15"],
    moves: [
      { zh: "拿俄米的計劃", en: "Naomi’s Plan", ref: "3:2-4",
        dzh: "她吩咐路得沐浴抹膏、換上衣服，等波阿斯睡了，去他腳邊躺臥，聽他吩咐。",
        den: "She told Ruth to wash, anoint herself and dress, then once Boaz was asleep to lie at his feet and wait for his instructions." },
      { zh: "「用你的衣襟遮蓋我」", en: "“Spread Your Garment”", ref: "3:9",
        dzh: "路得說：「求你用你的衣襟遮蓋我，因為你是我一個至近的親屬。」",
        den: "Ruth said: “spread the corner of your garment over your servant; for you are a near kinsman.”" }
    ],
    traits: [
      { k: "strength", zh: "信任與順服", en: "Trust and obedience" },
      { k: "weakness", zh: "容易被誤會", en: "Easily misunderstood" }
    ],
    lesson: {
      zh: "在關鍵時刻，路得選擇信任和順服，波阿斯選擇尊重與守約——雙方都以端正的方式處理。",
      en: "At the crucial moment Ruth chose trust and obedience and Boaz chose respect and integrity — both acted honorably."
    },
    quote: { ref: "3:9",
      zh: "求你用你的衣襟遮蓋我，因為你是我一個至近的親屬",
      en: "spread the corner of your garment over your servant; for you are a near kinsman." },
    keyVerses: ["3:3-4", "3:9-11", "3:12-13", "3:14-15"],
    intro: {
      zh: "第 3 章是全書的轉折。拿俄米知道波阿斯是至近的親屬，吩咐路得夜裡到打穀場去向他提出請求。路得在半夜請他用「衣襟遮蓋」她，也就是請他盡贖回者的本分、娶她為妻。波阿斯答應，只是還有一位更近的親屬要先處理（3:12-13）。",
      en: "Chapter 3 is the turning point. Naomi knows Boaz is a near kinsman and sends Ruth to the threshing floor at night to make a request of him. At midnight Ruth asks him to “spread his garment” over her — that is, to act as redeemer and marry her. Boaz agrees, but a nearer kinsman must be dealt with first (3:12–13)."
    },
    tip: {
      zh: "這一幕的文化細節，解經者有不同看法；不少人認為是請求波阿斯盡贖回者本分、娶她為妻的象徵性舉動。經文強調的是：波阿斯稱她「賢德」（3:11），又讓她天亮前離開，保護她的名聲（3:14）。",
      en: "Interpreters differ on the cultural details of this scene; many see it as a symbolic request that Boaz act as redeemer and marry her. The text stresses that Boaz calls her “worthy” (3:11) and sends her off before dawn to protect her reputation (3:14)."
    },
    related: ["ruth", "boaz", "naomi", "kinsman"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "kinsman", book: "ruth", no: 11, kind: "person", type: "power", rarity: 2,
    zh: "那位更近的親屬", en: "The Nearer Kinsman",
    tag: { zh: "脫下鞋子的人", en: "The Man Who Took Off His Sandal" },
    role: { zh: "以利米勒的親屬（沒有名字）", en: "Elimelech’s relative (unnamed)" },
    ch: [3, 4],
    passages: ["3:12-13", "4:1-8"],
    moves: [
      { zh: "「我肯贖」", en: "“I Will Redeem It”", ref: "4:3-4",
        dzh: "波阿斯在城門請他先決定要不要買下拿俄米要賣的地；他一口答應：「我肯贖。」",
        den: "At the gate Boaz gave him first right to buy the land Naomi was selling, and he answered, “I will redeem it.”" },
      { zh: "「我不能贖了」", en: "“I Can’t Redeem It”", ref: "4:5-8",
        dzh: "聽到還要娶路得，他怕有礙自己的產業，就把贖回的權利讓給波阿斯，脫鞋為證。",
        den: "Hearing he must also take Ruth, he feared for his own inheritance, gave his right to Boaz, and took off his shoe as the sign." }
    ],
    traits: [
      { k: "strength", zh: "精於計算", en: "Careful with his money" },
      { k: "weakness", zh: "怕損失自己的產業", en: "Afraid to risk his own inheritance" }
    ],
    lesson: {
      zh: "他不肯為死者存留名字，自己的名字也沒有被記下——慷慨往往要付代價，也往往被記念。",
      en: "He would not preserve the dead man’s name, and his own name is not recorded — generosity often costs something, and is often remembered."
    },
    quote: { ref: "4:6",
      zh: "這樣我就不能贖了，恐怕於我的產業有礙",
      en: "I can’t redeem it for myself, lest I endanger my own inheritance." },
    keyVerses: ["3:12-13", "4:1-4", "4:5-8"],
    intro: {
      zh: "波阿斯說過有一位「比我更近」的親屬（3:12），他在第 4 章出現。他先答應買地，一聽到還要娶路得、為死人存留名字，就退出了。經文只稱他「某人」，沒有留下名字。",
      en: "Boaz said there was a kinsman “nearer than I” (3:12), and he appears in chapter 4. He first agrees to buy the land, but as soon as he hears he must also marry Ruth and preserve the dead man’s name, he withdraws. The text calls him only “friend” (literally “so-and-so”) and gives no name."
    },
    tip: {
      zh: "4:7 解釋了當時的習俗：把鞋脫下來遞給對方，是確認交易的憑據。",
      en: "4:7 explains the custom: handing over a sandal was the way to confirm a transaction."
    },
    related: ["boaz", "ruth", "elimelech"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "obed", book: "ruth", no: 12, kind: "person", type: "power", rarity: 3,
    zh: "俄備得", en: "Obed",
    meaning: { zh: "「僕人」（或「事奉者」）", en: "“Servant” (or “one who serves”)" },
    tag: { zh: "大衛王的祖父", en: "David’s Grandfather" },
    role: { zh: "路得與波阿斯的兒子", en: "Son of Ruth and Boaz" },
    ch: [4],
    names: ["俄備得"],
    enNames: ["Obed"],
    moves: [
      { zh: "提起精神的孩子", en: "A Restorer of Life", ref: "4:14-15",
        dzh: "婦人們說他必「提起你的精神，奉養你的老」，因為路得「比有七個兒子還好」。",
        den: "The women said he would be “a restorer of life” and sustain Naomi in her old age, since Ruth was “better to you than seven sons.”" },
      { zh: "通向大衛的族譜", en: "The Line to David", ref: "4:17",
        dzh: "俄備得生耶西，耶西生大衛——結尾把一個小家庭連到以色列的王。",
        den: "Obed became the father of Jesse, and Jesse of David — the ending links one small family to Israel’s king." }
    ],
    traits: [
      { k: "strength", zh: "帶來盼望", en: "Brings hope" },
      { k: "weakness", zh: "還只是個嬰兒", en: "Still just a baby" }
    ],
    lesson: {
      zh: "一個平凡家庭裡的嬰孩，成了神更大計劃的一環；平凡日子裡的忠心不會白費。",
      en: "A baby in an ordinary family becomes part of God’s larger plan; faithfulness in ordinary days is never wasted."
    },
    quote: { ref: "4:17",
      zh: "這俄備得是耶西的父，耶西是大衛的父。",
      en: "He is the father of Jesse, the father of David." },
    keyVerses: ["4:13", "4:14-16", "4:17", "4:21-22"],
    intro: {
      zh: "俄備得是路得和波阿斯的兒子。鄰舍的婦人給他起名，稱他是拿俄米的福分（4:14-17）。他的名字出現在書末的族譜：他是耶西的父親，耶西是大衛王的父親（4:17, 22）；馬太福音耶穌的族譜也列了這幾位（太 1:5-6）。",
      en: "Obed was the son of Ruth and Boaz. The neighbour women named him and called him Naomi’s blessing (4:14–17). His name appears in the genealogy at the end: he is the father of Jesse, who is the father of King David (4:17, 22); Matthew’s genealogy of Jesus lists the same names (Matt 1:5–6)."
    },
    tip: {
      zh: "4:18-22 的族譜從法勒斯開始（4:12 的祝福提到他瑪所生的法勒斯），到大衛共十個名字。",
      en: "The genealogy in 4:18–22 starts with Perez (named in the blessing of 4:12) and runs to David — ten names in all."
    },
    related: ["ruth", "boaz", "naomi", "bethlehem_women"]
  }
);
