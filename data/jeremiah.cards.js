// 聖經人物卡 · 耶利米書 (Jeremiah) — book info + cards.
// Verse text comes from data/jeremiah.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Matt 2:17-18, Matt 21:13, Luke 22:20,
// Heb 8:8-12, 2 Kgs 22–23, Lev 25…) were checked against the 和合本 text and appear in prose only.

window.BOOKS.push({
  id: "jeremiah",
  zh: "耶利米書", en: "Jeremiah", abbr: { zh: "耶", en: "Jer" },
  order: 24, section: { zh: "先知書", en: "Prophets" },
  chapters: 52,
  fan: ["scroll", "jeremiah", "new_covenant"],
  summary: {
    zh: "耶利米在猶大亡國前後的四十多年間，頂著眾人的反對，一再警告百姓回頭，說出不受歡迎的真話，也把「新約」的應許傳給後世。書中有講章、行動預言、他的哀訴，也有被囚、被燒書卷、耶路撒冷淪陷的故事——內容並非按時間順序排列。",
    en: "For some forty years around the fall of Judah, Jeremiah warned a people who would not listen, spoke unwelcome truth, and handed down the promise of a new covenant. The book mixes sermons, acted-out prophecies, his own laments, and stories of imprisonment, a burned scroll and the fall of Jerusalem — and it is not arranged in time order."
  },
  outline: [
    { zh: "耶利米蒙召", en: "Jeremiah’s call" },
    { zh: "以色列離棄活水的泉源", en: "Israel forsakes the fountain of living water" },
    { zh: "背道的以色列，回來吧", en: "Faithless Israel, return" },
    { zh: "來自北方的災禍", en: "Disaster from the north" },
    { zh: "找不到一個行公義的人", en: "Not one who does justice" },
    { zh: "「平安了！平安了！」其實沒有平安", en: "“Peace, peace” — but there is no peace" },
    { zh: "聖殿講章：不要倚靠虛謊的話", en: "The temple sermon: don’t trust lying words" },
    { zh: "基列沒有乳香嗎？", en: "Is there no balm in Gilead?" },
    { zh: "但願我的頭為水", en: "Oh, that my head were waters" },
    { zh: "耶和華與列邦的偶像", en: "Yahweh and the idols of the nations" },
    { zh: "被破壞的約", en: "The broken covenant" },
    { zh: "惡人為何亨通？", en: "Why do the wicked prosper?" },
    { zh: "腐爛的麻布帶", en: "The ruined linen belt" },
    { zh: "旱災與假先知", en: "Drought and false prophets" },
    { zh: "耶利米的哀訴", en: "Jeremiah’s lament" },
    { zh: "不娶妻、不赴筵席", en: "No wife, no feasting" },
    { zh: "倚靠人與倚靠耶和華", en: "Trusting man or trusting Yahweh" },
    { zh: "窯匠與泥", en: "The potter and the clay" },
    { zh: "打碎窯匠的瓦瓶", en: "The broken jar" },
    { zh: "巴施戶珥與耶利米的苦訴", en: "Pashhur and Jeremiah’s complaint" },
    { zh: "西底家求問耶和華", en: "Zedekiah inquires of Yahweh" },
    { zh: "論猶大的諸王", en: "Judgment on Judah’s kings" },
    { zh: "義苗與假先知", en: "The righteous Branch and the false prophets" },
    { zh: "兩筐無花果", en: "Two baskets of figs" },
    { zh: "七十年的警告", en: "The seventy-year warning" },
    { zh: "聖殿講章之後被審", en: "On trial after the temple sermon" },
    { zh: "軛", en: "The yoke" },
    { zh: "哈拿尼雅折斷軛", en: "Hananiah breaks the yoke" },
    { zh: "寫給被擄者的信", en: "The letter to the exiles" },
    { zh: "復興的應許", en: "The promise of restoration" },
    { zh: "新約", en: "The new covenant" },
    { zh: "圍城中買田", en: "Buying a field during the siege" },
    { zh: "醫治、復興與義苗", en: "Healing, restoration and the righteous Branch" },
    { zh: "釋放奴僕又反悔", en: "Slaves freed — then taken back" },
    { zh: "利甲人的忠心", en: "The faithfulness of the Rechabites" },
    { zh: "書卷被焚", en: "The scroll is burned" },
    { zh: "耶利米下監", en: "Jeremiah imprisoned" },
    { zh: "水牢", en: "The cistern" },
    { zh: "耶路撒冷淪陷", en: "The fall of Jerusalem" },
    { zh: "基大利作省長", en: "Gedaliah made governor" },
    { zh: "以實瑪利殺基大利", en: "Ishmael murders Gedaliah" },
    { zh: "該不該去埃及？", en: "Should we go to Egypt?" },
    { zh: "被帶往埃及", en: "Taken to Egypt" },
    { zh: "埃及的猶大人", en: "The Judeans in Egypt" },
    { zh: "給巴錄的話", en: "A word for Baruch" },
    { zh: "論埃及", en: "Against Egypt" },
    { zh: "論非利士", en: "Against Philistia" },
    { zh: "論摩押", en: "Against Moab" },
    { zh: "論亞捫、以東等國", en: "Against Ammon, Edom and others" },
    { zh: "論巴比倫（上）", en: "Against Babylon (1)" },
    { zh: "論巴比倫（下）", en: "Against Babylon (2)" },
    { zh: "耶路撒冷的結局", en: "The end of Jerusalem" }
  ],
  notes: {
    zh: "小提示：耶利米書不是按時間順序排列的（例如第 36 章的事發生在第 21 章之前）。先抓住幾幅「畫面」——杏樹枝、窯匠、軛、書卷、水牢、買田——會容易得多。",
    en: "Good to know: Jeremiah is not in time order (chapter 36 happens before chapter 21, for example). It helps to hold on to a few “pictures” first — the almond branch, the potter, the yoke, the scroll, the cistern, the field."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "jeremiah", book: "jeremiah", no: 1, kind: "person", type: "faith", rarity: 6,
    zh: "耶利米", en: "Jeremiah",
    tag: { zh: "流淚的先知", en: "The Weeping Prophet" },
    role: { zh: "亞拿突祭司之子・先知", en: "Priest’s son from Anathoth · Prophet" },
    ch: Array.from({ length: 52 }, (_, i) => i + 1),
    names: ["耶利米"],
    enNames: ["Jeremiah"],
    moves: [
      { zh: "「我是年幼的」", en: "“I Am Only a Youth”", ref: "1:6-8",
        dzh: "蒙召時他說自己年幼、不知怎樣說；耶和華說：「不要懼怕，因為我與你同在。」",
        den: "At his call he said he was too young to speak; Yahweh answered, “Don’t be afraid… for I am with you.”" },
      { zh: "骨中的火", en: "Fire in His Bones", ref: "20:9",
        dzh: "他想不再提耶和華的名，心裡卻像有火燒在骨中，含忍不住。",
        den: "He vowed to speak no more in Yahweh’s name, but a burning fire shut up in his bones made it impossible to hold in." }
    ],
    traits: [
      { k: "strength", zh: "說真話不退縮", en: "Tells the truth, never backs down" },
      { k: "weakness", zh: "常被人排斥", en: "Often rejected" }
    ],
    lesson: {
      zh: "說真話常常孤單又痛苦，但神的話像火一樣，叫他無法沉默；神也應許：「我與你同在」（1:8）。",
      en: "Speaking truth is often lonely and painful, yet God’s word burned in him and he could not stay silent; and God promised, “I am with you” (1:8)."
    },
    quote: { ref: "1:5",
      zh: "我未將你造在腹中，我已曉得你",
      en: "Before I formed you in the womb, I knew you." },
    keyVerses: ["1:5-8", "1:9-10", "15:16", "20:9"],
    intro: {
      zh: "耶利米是亞拿突祭司家的兒子（1:1），在約西亞十三年蒙召，年紀還輕（1:2, 6）。他的事奉歷經約西亞、約雅敬、西底家三位王，直到耶路撒冷淪陷（1:2-3），之後被人帶到埃及（43:5-7）。他常被稱為「流淚的先知」，因為他為百姓的災難哀哭（9:1），自己也一再被排斥、囚禁；耶和華甚至吩咐他不可娶妻生兒女（16:2）。",
      en: "Jeremiah was the son of a priest from Anathoth (1:1), called in the thirteenth year of Josiah while still young (1:2, 6). His ministry spanned the reigns of Josiah, Jehoiakim and Zedekiah, up to the fall of Jerusalem (1:2–3), and afterwards he was taken to Egypt (43:5–7). He is called the “weeping prophet” because he mourned over his people’s disaster (9:1) while being rejected and imprisoned himself; Yahweh even told him not to marry or have children (16:2)."
    },
    tip: {
      zh: "耶利米書不是按時間順序排列的；先抓住幾幅畫面（杏樹枝、窯匠、軛、書卷、水牢、買田），再回頭讀細節。",
      en: "Jeremiah is not in time order; grab a few pictures first (the almond branch, potter, yoke, scroll, cistern, field), then go back for the details."
    },
    related: ["baruch", "josiah", "jehoiakim", "zedekiah", "hananiah", "ebed_melech", "potter", "scroll"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "josiah", book: "jeremiah", no: 2, kind: "person", type: "power", rarity: 3,
    zh: "約西亞", en: "Josiah",
    tag: { zh: "為窮人伸冤的好王", en: "The Good King Who Defended the Poor" },
    role: { zh: "猶大王", en: "King of Judah" },
    ch: [1, 3, 22, 25],
    passages: ["1:2", "3:6", "22:15-16", "25:3"],
    moves: [
      { zh: "蒙召的年代", en: "The Year of the Call", ref: "1:2",
        dzh: "耶利米在約西亞在位十三年蒙召；這位王的日子，是這卷書的起點。",
        den: "Jeremiah was called in Josiah’s thirteenth year — the book begins in this king’s reign." },
      { zh: "好王的標準", en: "What a Good King Does", ref: "22:15-16",
        dzh: "「他為困苦和窮乏人伸冤……認識我不在乎此嗎？」公平公義，就是認識神。",
        den: "“He judged the cause of the poor and needy… Wasn’t this to know me?” Justice is what it means to know God." }
    ],
    traits: [
      { k: "strength", zh: "公平公義", en: "Justice and righteousness" },
      { k: "weakness", zh: "兒子們走偏了", en: "His sons went astray" }
    ],
    lesson: {
      zh: "神怎樣看一個人「認識祂」？這裡的答案是：看他怎樣對待困苦窮乏的人。",
      en: "How does God measure whether we know him? Here the answer is: by how we treat the poor and needy."
    },
    quote: { ref: "22:16",
      zh: "他為困苦和窮乏人伸冤，那時就得了福樂。認識我不在乎此嗎？",
      en: "He judged the cause of the poor and needy; so it was well, then. Wasn’t this to know me?" },
    keyVerses: ["1:2", "22:15-16", "25:3"],
    intro: {
      zh: "約西亞是猶大的王，耶利米在他在位十三年蒙召（1:2）。耶利米書沒有詳述他的改革（可參王下 22–23 章），卻在 22:15-16 把他當作好王的標準，用來對照他兒子約雅敬的不義。",
      en: "Josiah was king of Judah, and Jeremiah was called in his thirteenth year (1:2). Jeremiah does not describe his reforms (see 2 Kings 22–23), but 22:15–16 holds him up as the standard of a good king, in contrast to the injustice of his son Jehoiakim."
    },
    tip: {
      zh: "留意稱謂：「約西亞的兒子」常用來指約雅敬或西底家（如 22:18；37:1），不要與約西亞本人混淆。",
      en: "Watch the titles: “son of Josiah” usually means Jehoiakim or Zedekiah (e.g., 22:18; 37:1), not Josiah himself."
    },
    related: ["jeremiah", "jehoiakim", "zedekiah"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "almond_pot", book: "jeremiah", no: 3, kind: "other", type: "vision", rarity: 2,
    zh: "杏樹枝與燒開的鍋", en: "The Almond Branch and the Boiling Pot",
    tag: { zh: "蒙召後的兩個異象", en: "Two Visions After His Call" },
    role: { zh: "耶利米的第一批異象", en: "Jeremiah’s first visions" },
    ch: [1],
    passages: ["1:11-16"],
    moves: [
      { zh: "杏樹枝", en: "The Almond Branch", ref: "1:11-12",
        dzh: "他看見一根杏樹枝；耶和華說：我留意保守我的話，使它成就。",
        den: "He saw a branch of an almond tree; Yahweh said he was watching over his word to make it happen." },
      { zh: "燒開的鍋", en: "The Boiling Pot", ref: "1:13-15",
        dzh: "又看見一個燒開的鍋從北而傾：災禍要從北方臨到猶大的居民。",
        den: "Then a boiling pot tilting from the north: disaster would pour out from the north on Judah’s people." }
    ],
    traits: [
      { k: "strength", zh: "言出必成", en: "His word is carried out" },
      { k: "weakness", zh: "災禍從北方來", en: "Danger from the north" }
    ],
    lesson: {
      zh: "神「留意保守」祂的話——無論是警告還是應許，都必成就。",
      en: "God “watches over” his word — whether warning or promise, it will be carried out."
    },
    quote: { ref: "1:12",
      zh: "你看得不錯；因為我留意保守我的話，使得成就",
      en: "You have seen well; for I watch over my word to perform it." },
    keyVerses: ["1:11-12", "1:13-16"],
    intro: {
      zh: "耶利米蒙召後，立刻看見兩個異象（1:11-16）。「杏樹」（希伯來文 shaqed）和「留意」（shoqed）發音相近，神藉此說明祂必看守自己的話，使它成就；燒開的鍋從北方傾倒，預告災禍要從北方來到猶大。",
      en: "Right after his call Jeremiah sees two visions (1:11–16). The Hebrew words for “almond tree” (shaqed) and “watching” (shoqed) sound alike — a wordplay showing that God watches over his word to fulfil it; the boiling pot tipping from the north announces disaster coming to Judah from that direction."
    },
    tip: {
      zh: "「北方」是全書反覆出現的警告（4:6；6:1；25:9），讀到的時候可以回想這個異象。",
      en: "“The north” is a recurring warning in the book (4:6; 6:1; 25:9) — recall this vision when you meet it."
    },
    related: ["jeremiah", "scroll"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "false_prophets", book: "jeremiah", no: 4, kind: "person", type: "scheme", rarity: 2,
    zh: "說「平安了」的先知們", en: "The “Peace, Peace” Prophets",
    tag: { zh: "只報喜、不報憂的先知", en: "Prophets Who Only Brought Good News" },
    role: { zh: "假先知與祭司", en: "False prophets and priests" },
    ch: [2, 5, 6, 14, 23],
    passages: ["6:13-14", "14:13-15", "23:16-17", "23:21-22"],
    moves: [
      { zh: "「平安了！平安了！」", en: "“Peace, Peace!”", ref: "6:14",
        dzh: "他們輕輕忽忽地醫治百姓的損傷，說：「平安了！平安了！」其實沒有平安。",
        den: "They treated the people’s wound lightly, saying, “Peace, peace!” when there was no peace." },
      { zh: "「我沒有打發他們」", en: "“I Did Not Send Them”", ref: "23:21",
        dzh: "神說他沒有差遣這些先知，也沒有對他們說話，他們卻自己奔跑、自己預言。",
        den: "God said he had not sent these prophets or spoken to them, yet they ran and prophesied on their own." }
    ],
    traits: [
      { k: "strength", zh: "人人愛聽", en: "Everyone loves to listen" },
      { k: "weakness", zh: "現實：刀劍與饑荒", en: "Reality: sword and famine" }
    ],
    lesson: {
      zh: "動聽的話不一定是神的話；真先知常說不受歡迎的話，假先知常說人愛聽的話（參 5:31）。",
      en: "Pleasant words are not necessarily God’s words; true prophets often say what is unwelcome, false ones what people love to hear (compare 5:31)."
    },
    quote: { ref: "6:14",
      zh: "他們輕輕忽忽地醫治我百姓的損傷，說：平安了！平安了！其實沒有平安。",
      en: "They have healed also the hurt of my people superficially, saying, ‘Peace, peace!’ when there is no peace." },
    keyVerses: ["5:31", "6:13-14", "14:13-15", "23:16-17", "23:21-22"],
    intro: {
      zh: "耶利米書反覆提到一群先知與祭司：他們說「平安了」，說這地不會有刀劍饑荒（6:14；14:13-15）。耶和華說他沒有差遣他們（14:14；23:21），也點出他們的特徵：所說的異象出於自己的心，不是出於耶和華的口（23:16）。第 28 章的哈拿尼雅是其中最具體的一個例子。",
      en: "Jeremiah keeps coming back to a group of prophets and priests who say “peace” and promise there will be no sword or famine (6:14; 14:13–15). Yahweh says he did not send them (14:14; 23:21) and names their mark: they speak visions from their own hearts, not from Yahweh’s mouth (23:16). Hananiah in chapter 28 is the most concrete example."
    },
    tip: {
      zh: "「平安了！平安了！」在 6:14 和 8:11 幾乎一字不差地出現兩次，是耶利米批評假先知的招牌句。",
      en: "“Peace, peace” appears almost word for word twice (6:14; 8:11) — Jeremiah’s signature charge against false prophets."
    },
    related: ["hananiah", "jeremiah", "pashhur", "yoke"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "temple_sermon", book: "jeremiah", no: 5, kind: "other", type: "faith", rarity: 3,
    zh: "聖殿講章", en: "The Temple Sermon",
    tag: { zh: "「這是耶和華的殿」不夠", en: "“This Is Yahweh’s Temple” Is Not Enough" },
    role: { zh: "耶路撒冷聖殿的門口", en: "At the gate of the temple" },
    ch: [7, 26],
    passages: ["7:1-15", "26:1-9"],
    moves: [
      { zh: "「不要倚靠虛謊的話」", en: "“Don’t Trust Lying Words”", ref: "7:4",
        dzh: "他站在殿門口說：不要靠「這是耶和華的殿」這句話，要改正行為、施行公平。",
        den: "Standing at the temple gate he said: don’t rely on “this is Yahweh’s temple” — change your ways and practice justice." },
      { zh: "「看為賊窩嗎？」", en: "A Den of Robbers?", ref: "7:11",
        dzh: "他們偷盜、殺害、起假誓，卻來殿中敬拜；耶和華問：這殿豈可看為賊窩？",
        den: "They stole, murdered and swore falsely, yet came to worship; Yahweh asked: has this house become a den of robbers?" }
    ],
    traits: [
      { k: "strength", zh: "直指要害", en: "Goes straight to the heart" },
      { k: "weakness", zh: "激怒了眾人", en: "Enraged the crowd" }
    ],
    lesson: {
      zh: "宗教場所不是護身符；敬拜若不連著公義和誠實，就是虛謊的倚靠。",
      en: "A holy place is not a lucky charm; worship cut off from justice and honesty is a false refuge."
    },
    quote: { ref: "7:11",
      zh: "這稱為我名下的殿在你們眼中豈可看為賊窩嗎？",
      en: "Has this house, which is called by my name, become a den of robbers in your eyes?" },
    keyVerses: ["7:1-4", "7:8-11", "7:12-15", "26:7-9"],
    intro: {
      zh: "第 7 章是耶利米最著名的講章，在聖殿門口對進殿敬拜的人說。第 26 章記載事後的結果：祭司、先知和眾民抓住他，說「你必要死！」（26:8）。耶穌後來在聖殿說「你們倒使它成為賊窩了」（太 21:13），與這章遙相呼應。",
      en: "Chapter 7 is Jeremiah’s best-known sermon, preached at the temple gate to those entering to worship. Chapter 26 records the aftermath: the priests, prophets and people seize him and say, “You shall die!” (26:8). Jesus’ words in the temple, “you have made it a den of robbers” (Matt 21:13), echo this passage."
    },
    tip: {
      zh: "示羅（7:12, 14）是以色列早期敬拜神的地方；耶利米用它的下場來警告耶路撒冷。",
      en: "Shiloh (7:12, 14) was an early place of worship in Israel; Jeremiah uses what happened to it as a warning to Jerusalem."
    },
    related: ["jeremiah", "pashhur", "false_prophets"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "potter", book: "jeremiah", no: 6, kind: "other", type: "wisdom", rarity: 4,
    zh: "窯匠與泥", en: "The Potter and the Clay",
    tag: { zh: "在窯匠手中被重新塑造", en: "Remade in the Potter’s Hands" },
    role: { zh: "窯匠的家・一堂實物課", en: "A visit to the potter’s house" },
    ch: [18],
    passages: ["18:1-12"],
    moves: [
      { zh: "做壞了的器皿", en: "A Spoiled Vessel", ref: "18:3-4",
        dzh: "窯匠用泥做的器皿在他手中做壞了，他又用這泥另做別的器皿。",
        den: "The vessel the potter was making spoiled in his hands, so he made the clay again into another vessel." },
      { zh: "回頭的機會", en: "A Door Still Open", ref: "18:7-10",
        dzh: "任何一國若轉意離開惡，神就後悔不降災禍；若行惡，也後悔不賜福。",
        den: "If a nation turns from evil, God relents of the disaster; if it does evil, he relents of the good he promised." }
    ],
    traits: [
      { k: "strength", zh: "耐心重新塑造", en: "Patiently remakes" },
      { k: "weakness", zh: "泥若不肯被塑造", en: "Clay that won’t be shaped" }
    ],
    lesson: {
      zh: "神的警告是邀請人回頭，不是定死的判決；祂的計劃會因人回頭而改變（18:8）。",
      en: "God’s warning is an invitation to turn back, not a fixed sentence; his plans change when people turn (18:8)."
    },
    quote: { ref: "18:6",
      zh: "泥在窯匠的手中怎樣，你們在我的手中也怎樣",
      en: "as the clay in the potter’s hand, so are you in my hand, house of Israel" },
    keyVerses: ["18:1-4", "18:5-6", "18:7-10", "18:11-12"],
    intro: {
      zh: "耶和華叫耶利米下到窯匠家（18:2），看窯匠把做壞了的泥重新做成別的器皿。這是對以色列的比喻：神有主權，也有耐心；若他們回頭，祂的計劃會隨之改變（18:7-10）。但百姓的回答卻是：「這是枉然」（18:12）。",
      en: "Yahweh sent Jeremiah down to the potter’s house (18:2) to watch the potter remake spoiled clay into another vessel. It is a picture of Israel: God is sovereign and patient, and his plans change if they turn back (18:7–10). But the people answer, “It’s no use” (18:12)."
    },
    tip: {
      zh: "下一章（19 章）是同一主題的另一面：窯匠的瓦瓶被打碎，不能再修復（19:10-11）——兩章對照著讀。",
      en: "The next chapter shows the other side: the potter’s jar is smashed beyond repair (19:10–11) — read the two together."
    },
    related: ["jeremiah", "new_covenant", "figs"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "pashhur", book: "jeremiah", no: 7, kind: "person", type: "scheme", rarity: 2,
    zh: "巴施戶珥", en: "Pashhur",
    alt: { zh: "瑪歌珥‧米撒畢（四面驚嚇）", en: "Magor-missabib (“terror on every side”)", ref: "20:3" },
    tag: { zh: "把先知枷起來的總管", en: "The Officer Who Put the Prophet in Stocks" },
    role: { zh: "殿的總管・祭司（音麥的兒子）", en: "Priest and chief officer of the temple" },
    ch: [20],
    passages: ["20:1-6"],
    moves: [
      { zh: "枷在高門", en: "Locked in the Stocks", ref: "20:1-2",
        dzh: "他是殿的總管，聽見耶利米的預言就打他，把他枷在便雅憫高門。",
        den: "As chief officer of the temple he heard Jeremiah’s prophecy, beat him and put him in the stocks at the Upper Gate of Benjamin." },
      { zh: "新名字：四面驚嚇", en: "A New Name", ref: "20:3-6",
        dzh: "耶利米說：耶和華叫你的名為「瑪歌珥‧米撒畢」；你要被擄到巴比倫。",
        den: "Jeremiah said: Yahweh calls you “Magor-missabib” (terror on every side), and you will be carried off to Babylon." }
    ],
    traits: [
      { k: "strength", zh: "手握實權", en: "Held real authority" },
      { k: "weakness", zh: "聽不進逆耳的話", en: "Couldn’t bear to listen" }
    ],
    lesson: {
      zh: "權力能把人枷起來，卻鎖不住神的話；第二天一獲釋放，耶利米立刻再開口（20:3）。",
      en: "Power can lock a person in stocks but not God’s word; the next day, as soon as he was released, Jeremiah spoke again (20:3)."
    },
    quote: { ref: "20:2",
      zh: "他就打先知耶利米，用耶和華殿裡便雅憫高門內的枷，將他枷在那裡",
      en: "Pashhur struck Jeremiah the prophet, and put him in the stocks that were in the upper gate of Benjamin" },
    keyVerses: ["20:1-2", "20:3-6"],
    intro: {
      zh: "巴施戶珥是音麥的兒子，作耶和華殿的總管（20:1）。他聽見耶利米預言災禍，就打他，把他枷在聖殿的高門。這是耶利米受迫害的一個具體事件；隨後耶利米向神傾訴苦悶，說出那句「骨中的火」（20:9）。",
      en: "Pashhur, son of Immer, was chief officer of Yahweh’s house (20:1). When he heard Jeremiah prophesy disaster he beat him and put him in the stocks at the temple’s upper gate. It is one concrete episode of persecution; right after it Jeremiah pours out his anguish to God, including the “fire in my bones” (20:9)."
    },
    tip: {
      zh: "耶利米書裡不止一位巴施戶珥：20:1 是音麥的兒子；21:1 和 38:1 是瑪基雅的兒子（和合本在 38:1 拼作「巴示戶珥」）。",
      en: "There is more than one Pashhur in Jeremiah: 20:1 is the son of Immer; 21:1 and 38:1 are the son of Malchijah (the 和合本 spells him 巴示戶珥 in 38:1)."
    },
    related: ["jeremiah", "temple_sermon", "false_prophets"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "jehoiakim", book: "jeremiah", no: 8, kind: "person", type: "power", rarity: 4,
    zh: "約雅敬", en: "Jehoiakim",
    tag: { zh: "燒掉書卷的王", en: "The King Who Burned the Scroll" },
    role: { zh: "猶大王（約西亞的兒子）", en: "King of Judah, son of Josiah" },
    ch: [1, 22, 24, 25, 26, 27, 28, 35, 36, 37, 45, 46, 52],
    names: ["約雅敬"],
    enNames: ["Jehoiakim"],
    moves: [
      { zh: "不義的宮殿", en: "A Palace Built on Injustice", ref: "22:13-17",
        dzh: "他不給工人工價，為自己蓋香柏木樓房；眼和心只顧貪婪，流無辜人的血。",
        den: "He built himself a cedar palace without paying his workers; his eyes and heart were set on greed and shedding innocent blood." },
      { zh: "割破、燒掉", en: "Cut It and Burn It", ref: "36:23",
        dzh: "猶底念了三四篇，他就用刀把書卷割破，扔在火盆中，直到全卷燒盡。",
        den: "After Jehudi read three or four columns he cut the scroll with a knife and threw it in the brazier until it was all burned." }
    ],
    traits: [
      { k: "strength", zh: "手握王權", en: "Royal power" },
      { k: "weakness", zh: "不懼怕、不悔改", en: "No fear, no repentance" }
    ],
    lesson: {
      zh: "燒得掉書卷，燒不掉書卷裡的話；神吩咐再寫一卷，還添了許多話（36:28, 32）。",
      en: "A scroll can be burned, but not the words in it; God told Jeremiah to write another, with many more words added (36:28, 32)."
    },
    quote: { ref: "36:23",
      zh: "王就用文士的刀將書卷割破，扔在火盆中，直到全卷在火中燒盡了",
      en: "the king cut it with the penknife, and cast it into the fire that was in the brazier, until all the scroll was consumed" },
    keyVerses: ["22:13-17", "26:20-23", "36:23-26", "36:30-31"],
    intro: {
      zh: "約雅敬是約西亞的兒子，猶大王。耶利米書對他的評價很差：他不義地建宮殿（22:13-19）；殺了說同樣預言的先知烏利亞（26:20-23）；又把耶利米的書卷燒掉（36:23）。耶和華說他的屍首要被拋棄，後裔中沒有人坐在大衛的寶座上（36:30）。",
      en: "Jehoiakim, a son of Josiah, was king of Judah. Jeremiah judges him harshly: he built his palace unjustly (22:13–19), killed the prophet Uriah who prophesied the same things (26:20–23), and burned Jeremiah’s scroll (36:23). Yahweh says his body will be thrown out and none of his line will sit on David’s throne (36:30)."
    },
    tip: {
      zh: "26:20-23 烏利亞的故事用括號插入，點出當時有多危險；26:24 說亞希甘保護了耶利米。",
      en: "Uriah’s story in 26:20–23 is set in brackets to show how dangerous it was; 26:24 adds that Ahikam protected Jeremiah."
    },
    related: ["josiah", "jeremiah", "scroll", "baruch", "zedekiah"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "figs", book: "jeremiah", no: 9, kind: "other", type: "harvest", rarity: 2,
    zh: "兩筐無花果", en: "Two Baskets of Figs",
    tag: { zh: "好無花果與壞無花果", en: "Good Figs and Bad Figs" },
    role: { zh: "聖殿前的異象", en: "A vision before the temple" },
    ch: [24],
    passages: ["24:1-10"],
    moves: [
      { zh: "極好與極壞", en: "Very Good, Very Bad", ref: "24:1-3",
        dzh: "聖殿前放著兩筐無花果：一筐極好，像初熟的；一筐壞得不可吃。",
        den: "Before the temple stood two baskets of figs: one very good, like first-ripe figs; the other so bad they couldn’t be eaten." },
      { zh: "被擄的人像好無花果", en: "The Exiles Are the Good Figs", ref: "24:5-7",
        dzh: "被擄到巴比倫的人像好無花果：神要看顧他們、領他們歸回，賜他們認識祂的心。",
        den: "The exiles in Babylon are the good figs: God will watch over them, bring them back and give them a heart to know him." }
    ],
    traits: [
      { k: "strength", zh: "被擄的人有盼望", en: "The exiles have hope" },
      { k: "weakness", zh: "留在城裡的人", en: "Those who stayed in the city" }
    ],
    lesson: {
      zh: "以為安全的，不一定安全；看似被丟棄的，神仍有計劃（24:5-7）。",
      en: "What looks safe may not be, and what looks abandoned is still part of God’s plan (24:5–7)."
    },
    quote: { ref: "24:7",
      zh: "我要賜他們認識我的心，知道我是耶和華。他們要作我的子民，我要作他們的神",
      en: "I will give them a heart to know me, that I am Yahweh. They will be my people, and I will be their God" },
    keyVerses: ["24:1-3", "24:4-7", "24:8-10"],
    intro: {
      zh: "耶哥尼雅和猶大的首領、工匠被擄到巴比倫之後（24:1），耶和華在聖殿前給耶利米看兩筐無花果。出乎人意料的是：好無花果代表已被擄的人，壞無花果代表留在耶路撒冷的西底家和餘民（24:5, 8）。",
      en: "After Jeconiah and Judah’s leaders and craftsmen had been carried off to Babylon (24:1), Yahweh shows Jeremiah two baskets of figs before the temple. The surprise: the good figs are the exiles, and the bad figs are Zedekiah and the remnant still in Jerusalem (24:5, 8)."
    },
    tip: {
      zh: "這和一般人的想法相反：留在家鄉的人以為自己蒙福，被擄的人以為被棄——耶利米把角色倒轉過來。",
      en: "It reverses the usual view: those left at home thought themselves blessed and the exiles abandoned — Jeremiah turns it around."
    },
    related: ["letter_exiles", "zedekiah", "jeremiah"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "yoke", book: "jeremiah", no: 10, kind: "other", type: "power", rarity: 3,
    zh: "木軛", en: "The Wooden Yoke",
    tag: { zh: "耶利米頸上的記號", en: "The Sign on Jeremiah’s Neck" },
    role: { zh: "耶利米的行動預言", en: "An acted-out prophecy" },
    ch: [27, 28],
    passages: ["27:2-8", "28:10-14"],
    moves: [
      { zh: "繩索與軛", en: "Cords and a Yoke", ref: "27:2-3",
        dzh: "耶和華吩咐他做繩索與軛，加在自己頸上，又送給以東、摩押、亞捫、泰爾、西頓的王。",
        den: "Yahweh told him to make bonds and bars, wear them on his neck, and send them to the kings of Edom, Moab, Ammon, Tyre and Sidon." },
      { zh: "服事巴比倫王", en: "Serve Babylon", ref: "27:6-8",
        dzh: "神把這些地交給「我僕人」巴比倫王；不肯服事的，必遭刀劍、饑荒、瘟疫。",
        den: "God gave these lands to “my servant” the king of Babylon; any nation refusing to serve him would face sword, famine and plague." }
    ],
    traits: [
      { k: "strength", zh: "一目了然的比喻", en: "A message you can see" },
      { k: "weakness", zh: "戴著很難堪", en: "Humiliating to wear" }
    ],
    lesson: {
      zh: "聽神的話，有時意味著接受自己不願面對的現實。",
      en: "Listening to God sometimes means accepting a reality we would rather not face."
    },
    quote: { ref: "27:2",
      zh: "你做繩索與軛，加在自己的頸項上",
      en: "Make bonds and bars, and put them on your neck." },
    keyVerses: ["27:2-3", "27:6-8", "28:10-14"],
    intro: {
      zh: "耶利米把木軛架在自己頸上（27:2），向來訪的鄰國使臣表明：巴比倫的統治是神容許的，應該服事（27:6-8）。這個信息極不受歡迎；在第 28 章，哈拿尼雅公開把軛折斷。",
      en: "Jeremiah put a wooden yoke on his own neck (27:2) to show visiting envoys that Babylon’s rule was permitted by God and should be served (27:6–8). The message was deeply unpopular; in chapter 28 Hananiah publicly breaks the yoke."
    },
    tip: {
      zh: "和合本 27:1 有註「約雅敬是西底家的別名」；從 27:3 可見這是西底家年間的事。",
      en: "The 和合本 footnote on 27:1 says “Jehoiakim is another name for Zedekiah”; 27:3 shows that this belongs to Zedekiah’s reign."
    },
    related: ["hananiah", "jeremiah", "false_prophets", "zedekiah"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "hananiah", book: "jeremiah", no: 11, kind: "person", type: "scheme", rarity: 3,
    zh: "哈拿尼雅", en: "Hananiah",
    tag: { zh: "折斷木軛的先知", en: "The Prophet Who Broke the Yoke" },
    role: { zh: "基遍人・押朔的兒子", en: "A prophet from Gibeon, son of Azzur" },
    ch: [28],
    passages: ["28:1-17"],
    moves: [
      { zh: "「二年之內」", en: "“Within Two Years”", ref: "28:1-4",
        dzh: "他在聖殿當著眾人說：二年之內，神要折斷巴比倫的軛，使被擄的人和器皿都回來。",
        den: "In the temple he declared that within two years God would break Babylon’s yoke and bring back the exiles and the temple vessels." },
      { zh: "折斷木軛", en: "Breaking the Yoke", ref: "28:10-11",
        dzh: "他取下耶利米頸上的軛折斷，說：二年之內，列國頸上的軛也要這樣折斷。",
        den: "He took the yoke off Jeremiah’s neck and broke it, saying the yoke on all the nations would be broken the same way within two years." }
    ],
    traits: [
      { k: "strength", zh: "說得動聽", en: "Persuasive and popular" },
      { k: "weakness", zh: "耶和華沒有差遣他", en: "Yahweh had not sent him" }
    ],
    lesson: {
      zh: "耶利米先說「阿們」，再用「話語是否成就」來檢驗（28:6, 9）——對動聽的預言，要有耐心，也要有分辨。",
      en: "Jeremiah first said “Amen,” then tested the word by whether it came true (28:6, 9) — with pleasant prophecies we need patience and discernment."
    },
    quote: { ref: "28:13",
      zh: "你折斷木軛，卻換了鐵軛！",
      en: "You have broken the bars of wood, but you have made in their place bars of iron." },
    keyVerses: ["28:1-4", "28:5-9", "28:10-14", "28:15-17"],
    intro: {
      zh: "哈拿尼雅是基遍人押朔的兒子，在西底家第四年當著祭司和眾民說預言（28:1）；他說的正是人們愛聽的話。耶利米沒有立刻反駁，先說「阿們」；後來神的話臨到他：哈拿尼雅折斷的是木軛，換來的卻是鐵軛（28:13）。哈拿尼雅那年七月就死了（28:17）。",
      en: "Hananiah, son of Azzur from Gibeon, prophesied before the priests and people in Zedekiah’s fourth year (28:1), saying just what people wanted to hear. Jeremiah did not answer at once but said “Amen”; later Yahweh’s word came: Hananiah had broken a wooden yoke but caused an iron one to replace it (28:13). Hananiah died that same year, in the seventh month (28:17)."
    },
    tip: {
      zh: "28:9 是辨別預言的一個準則：預言平安的，要看話語是否成就。",
      en: "28:9 gives one test for prophecy: a prophet who predicts peace is known by whether the word comes true."
    },
    related: ["false_prophets", "yoke", "jeremiah"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "letter_exiles", book: "jeremiah", no: 12, kind: "other", type: "wisdom", rarity: 4,
    zh: "寫給被擄者的信", en: "The Letter to the Exiles",
    tag: { zh: "為所住的城求平安", en: "Seek the Peace of the City" },
    role: { zh: "耶利米寄給巴比倫的被擄者", en: "Jeremiah’s letter to Babylon" },
    ch: [29],
    passages: ["29:1-14"],
    moves: [
      { zh: "安居樂業", en: "Build, Plant, Marry", ref: "29:5-6",
        dzh: "要蓋房屋、栽種田園、娶妻生子，在那裡生養眾多。",
        den: "Build houses, plant gardens, marry and have children — increase there and don’t decrease." },
      { zh: "為城求平安", en: "Seek the Peace of the City", ref: "29:7",
        dzh: "「你們要為那城求平安，為那城禱告耶和華；因為那城得平安，你們也隨著得平安。」",
        den: "“Seek the peace of the city… and pray to Yahweh for it; for in its peace you will have peace.”" }
    ],
    traits: [
      { k: "strength", zh: "帶來盼望", en: "Brings hope" },
      { k: "weakness", zh: "不是人人想聽", en: "Not what exiles wanted to hear" }
    ],
    lesson: {
      zh: "在不是自己選擇的地方，也可以好好生活、為鄰舍禱告；盼望在「七十年滿了」之後（29:10-11），不是明天。",
      en: "Even in a place we did not choose we can live well and pray for our neighbours; the hope comes after “seventy years” (29:10–11), not tomorrow."
    },
    quote: { ref: "29:11",
      zh: "賜平安的意念，不是降災禍的意念，要叫你們末後有指望",
      en: "thoughts of peace, and not of evil, to give you hope and a future." },
    keyVerses: ["29:1-3", "29:4-7", "29:8-9", "29:10-14"],
    intro: {
      zh: "第一批被擄的人已到了巴比倫，耶利米寄信給他們（29:1），由以利亞薩和基瑪利帶去（29:3）。信的內容出人意料：不要急著回家，要蓋房子、種田、娶妻生子，還要為那座城禱告（29:5-7）。七十年滿了，神才要眷顧他們（29:10）。",
      en: "The first exiles have reached Babylon, and Jeremiah sends them a letter (29:1) carried by Elasah and Gemariah (29:3). Its content is surprising: don’t rush home — build houses, plant gardens, marry and have children, and pray for the city (29:5–7). Only when seventy years are complete will God visit them (29:10)."
    },
    tip: {
      zh: "29:11 常被單獨引用；放回上下文：前一節是「七十年」，後一節是「呼求、尋求」（29:10, 12-13）。",
      en: "29:11 is often quoted alone; in context the verse before is about “seventy years” and the verses after about calling and seeking (29:10, 12–13)."
    },
    related: ["figs", "jeremiah", "false_prophets"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "rachel", book: "jeremiah", no: 13, kind: "other", type: "love", rarity: 3,
    zh: "拉瑪的哭聲", en: "Rachel Weeping at Ramah",
    tag: { zh: "不肯受安慰的母親", en: "The Mother Who Refused Comfort" },
    role: { zh: "拉結為兒女哭泣", en: "Rachel weeping for her children" },
    ch: [31],
    passages: ["31:15-17"],
    moves: [
      { zh: "號咷痛哭", en: "A Voice Heard in Ramah", ref: "31:15",
        dzh: "在拉瑪聽見號咷痛哭的聲音：是拉結哭她的兒女，不肯受安慰，因為他們都不在了。",
        den: "A voice in Ramah: Rachel weeping for her children, refusing to be comforted, because they are no more." },
      { zh: "「你末後必有指望」", en: "A Future", ref: "31:16-17",
        dzh: "耶和華說：止住哀哭，你的兒女必從敵國歸回；你末後必有指望。",
        den: "Yahweh answered: stop weeping — your children will return from the enemy’s land, and you have hope for your future." }
    ],
    traits: [
      { k: "strength", zh: "道出全民族的悲傷", en: "Speaks a whole people’s grief" },
      { k: "weakness", zh: "不肯受安慰", en: "Refuses comfort" }
    ],
    lesson: {
      zh: "神不要人假裝不痛，卻在哭聲中給出指望：「你末後必有指望」。",
      en: "God does not ask us to pretend we aren’t hurting, but gives hope within the weeping: “there is hope for your future.”"
    },
    quote: { ref: "31:15",
      zh: "在拉瑪聽見號咷痛哭的聲音，是拉結哭她兒女，不肯受安慰，因為他們都不在了",
      en: "A voice is heard in Ramah, lamentation and bitter weeping, Rachel weeping for her children." },
    keyVerses: ["31:15", "31:16-17"],
    intro: {
      zh: "拉瑪是被擄的人被集合起來的地方（參 40:1）。耶利米用先祖母拉結的哭聲，代表整個民族為失去兒女而哀哭（31:15）；但緊接著，神吩咐她止住哭泣，因為孩子們必回來（31:16-17）。馬太福音 2:17-18 引用這節，描寫伯利恆嬰孩被殺時的哀哭。",
      en: "Ramah was where the captives were gathered (compare 40:1). Jeremiah lets Rachel, the ancestral mother, weep for a whole people who have lost their children (31:15); but at once God tells her to stop weeping, because the children will return (31:16–17). Matthew 2:17–18 quotes this verse for the weeping when the infants of Bethlehem were killed."
    },
    tip: {
      zh: "第 30–33 章常被稱為「安慰書」；31 章的中心是拉結的哭聲，接著就是新約（31:31-34）。",
      en: "Chapters 30–33 are often called the “Book of Consolation”; in chapter 31 Rachel’s weeping is followed by the new covenant (31:31–34)."
    },
    related: ["new_covenant", "jeremiah", "letter_exiles"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "new_covenant", book: "jeremiah", no: 14, kind: "other", type: "heaven", rarity: 5,
    zh: "新約", en: "The New Covenant",
    tag: { zh: "寫在心上的律法", en: "The Law Written on the Heart" },
    role: { zh: "「安慰書」的高峰", en: "The summit of the “Book of Consolation”" },
    ch: [31],
    passages: ["31:31-34"],
    moves: [
      { zh: "另立新約", en: "A New Covenant", ref: "31:31-32",
        dzh: "日子將到，神要與以色列家和猶大家另立新約，不像領他們出埃及時所立的約——他們背了那約。",
        den: "The days are coming when God will make a new covenant with Israel and Judah, unlike the one made when he brought them out of Egypt — they broke that one." },
      { zh: "寫在心上", en: "Written on Their Hearts", ref: "31:33-34",
        dzh: "神要把律法放在他們裡面、寫在心上；人人都認識祂，祂要赦免罪孽，不再記念。",
        den: "God will put his law within them and write it on their hearts; all will know him, and he will forgive their sin and remember it no more." }
    ],
    traits: [
      { k: "strength", zh: "從裡面改變人", en: "Changes people from within" },
      { k: "identity", zh: "神與百姓的新關係", en: "A new relationship with God" }
    ],
    lesson: {
      zh: "神不只要人「照規矩做」，更要從裡面改變人的心：叫人認識祂、被赦免。",
      en: "God wants more than rule-keeping: he changes the heart from within, so people know him and are forgiven."
    },
    quote: { ref: "31:33",
      zh: "我要將我的律法放在他們裡面，寫在他們心上",
      en: "I will put my law in their inward parts, and I will write it in their heart." },
    keyVerses: ["31:3", "31:31-32", "31:33", "31:34"],
    intro: {
      zh: "新約是耶利米書的高峰，也是舊約最重要的應許之一（31:31-34）：神要與百姓另立新約，把律法寫在他們心上，人人都認識祂，罪也得赦免。新約聖經多次引用：路加福音 22:20 記耶穌在最後的晚餐說「這杯是用我血所立的新約」；希伯來書 8:8-12 整段引用這幾節。",
      en: "The new covenant is the summit of Jeremiah and one of the most important promises of the Old Testament (31:31–34): God will make a new covenant, write his law on their hearts, let everyone know him, and forgive their sin. The New Testament quotes it often: at the Last Supper Jesus says, “This cup is the new covenant in my blood” (Luke 22:20), and Hebrews 8:8–12 quotes the passage in full."
    },
    tip: {
      zh: "舊約沒有被廢掉，而是被更新：31:32 說明問題不在律法，而在百姓「背了我的約」。",
      en: "The old covenant is renewed, not discarded: 31:32 locates the problem not in the law but in the people who “broke my covenant.”"
    },
    related: ["rachel", "potter", "anathoth_field", "jeremiah"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "anathoth_field", book: "jeremiah", no: 15, kind: "other", type: "harvest", rarity: 2,
    zh: "亞拿突的田", en: "The Field at Anathoth",
    tag: { zh: "在圍城中買田", en: "Buying a Field in the Middle of a Siege" },
    role: { zh: "耶利米在護衛兵院中買田", en: "Jeremiah’s purchase in the court of the guard" },
    ch: [32],
    passages: ["32:6-15", "32:42-44"],
    moves: [
      { zh: "照贖回之理", en: "Redeeming the Family Field", ref: "32:7-9",
        dzh: "叔叔的兒子哈拿篾求他買下亞拿突的田，他就平了十七舍客勒銀子給他。",
        den: "His uncle’s son Hanamel asked him to buy the field at Anathoth, and he weighed out seventeen shekels of silver." },
      { zh: "契放在瓦器裡", en: "The Deed in a Jar", ref: "32:11-15",
        dzh: "他在眾人面前把買契交給巴錄，吩咐放在瓦器裡，可以存留多日。",
        den: "Before witnesses he gave the deeds to Baruch and told him to put them in a clay jar to last many days." }
    ],
    traits: [
      { k: "strength", zh: "在絕望中信靠", en: "Hope in the face of ruin" },
      { k: "weakness", zh: "田在敵人手中", en: "The land was in enemy hands" }
    ],
    lesson: {
      zh: "買田不是投資眼光，而是信心的行動：神說「將來在這地必有人再買房屋、田地」，他就先買下來（32:15）。",
      en: "Buying the field was not investment savvy but an act of faith: God said fields would be bought again in the land, so he bought one first (32:15)."
    },
    quote: { ref: "32:15",
      zh: "將來在這地必有人再買房屋、田地，和葡萄園",
      en: "Houses and fields and vineyards will yet again be bought in this land." },
    keyVerses: ["32:6-9", "32:10-12", "32:14-15", "32:42-44"],
    intro: {
      zh: "耶路撒冷被巴比倫圍困，耶利米自己被關在護衛兵的院中。他叔叔的兒子哈拿篾來求他買下亞拿突的田（32:7-9）。城快要失陷了，他卻照著贖回的規矩買下來，當眾簽契，吩咐把契好好存起來（32:14）——因為神說：日後必有人再置買田地（32:15, 43-44）。",
      en: "Jerusalem is besieged and Jeremiah is confined in the court of the guard. His uncle’s son Hanamel asks him to buy the family field at Anathoth (32:7–9). The city is about to fall, yet he buys it by the rules of redemption, signs the deed publicly and has it preserved (32:14) — because God says fields will be bought again in the land (32:15, 43–44)."
    },
    tip: {
      zh: "亞拿突是耶利米的家鄉（1:1）；11:21 說亞拿突人曾想要害他——這一次，家鄉的親人卻成了這個信心行動的一部分。",
      en: "Anathoth was Jeremiah’s hometown (1:1), and 11:21 says its people once sought his life — this time a family member becomes part of an act of faith."
    },
    related: ["baruch", "jeremiah", "new_covenant"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "baruch", book: "jeremiah", no: 16, kind: "person", type: "wisdom", rarity: 4,
    zh: "巴錄", en: "Baruch",
    meaning: { zh: "「蒙福的」", en: "“Blessed”" },
    tag: { zh: "寫下先知的話的書記", en: "The Scribe Who Wrote Down the Prophet’s Words" },
    role: { zh: "文士・耶利米的助手", en: "Scribe · Jeremiah’s assistant" },
    ch: [32, 36, 43, 45],
    names: ["巴錄"],
    enNames: ["Baruch"],
    moves: [
      { zh: "口述、書寫", en: "Writing From His Mouth", ref: "36:4",
        dzh: "他照耶利米口述，把耶和華的一切話寫在書卷上，又到殿裡念給百姓聽。",
        den: "He wrote all Yahweh’s words on a scroll as Jeremiah dictated, then read it aloud to the people at the temple." },
      { zh: "「不要圖謀大事」", en: "Don’t Seek Great Things", ref: "45:2-5",
        dzh: "他哀歎勞苦不得安歇；耶和華說：不要為自己圖謀大事；但無論往哪裡去，你的命必得保全。",
        den: "He groaned that he was worn out; Yahweh said: don’t seek great things for yourself — but wherever you go, you will escape with your life." }
    ],
    traits: [
      { k: "strength", zh: "忠心可靠", en: "Loyal and dependable" },
      { k: "weakness", zh: "被指控挑唆", en: "Accused of stirring things up" }
    ],
    lesson: {
      zh: "有些人沒有講台，只是忠心地寫下、傳遞神的話；我們讀到耶利米書，有他的一份。",
      en: "Some people have no platform; they simply write down and pass on God’s word faithfully — and we read Jeremiah thanks in part to him."
    },
    quote: { ref: "36:4",
      zh: "巴錄就從耶利米口中，將耶和華對耶利米所說的一切話寫在書卷上",
      en: "Baruch wrote from the mouth of Jeremiah all Yahweh’s words, which he had spoken to him, on a scroll of a book." },
    keyVerses: ["36:4", "36:5-8", "43:2-3", "45:2-5"],
    intro: {
      zh: "巴錄是尼利亞的兒子，是文士，也是耶利米最親近的助手。他寫下耶利米口述的話（36:4）；耶利米被拘管時，他代表先知在殿裡念給百姓聽（36:5-8）；他經手亞拿突田的買契（32:12-14）；被人指控挑唆耶利米（43:3），最後也一同被帶到埃及（43:6）。第 45 章是耶和華對他個人說的一番話。",
      en: "Baruch, son of Neriah, was a scribe and Jeremiah’s closest assistant. He wrote down what Jeremiah dictated (36:4); when Jeremiah was barred from the temple he read the words aloud there (36:5–8); he took charge of the deed for the field at Anathoth (32:12–14); he was accused of inciting Jeremiah (43:3) and was taken to Egypt with him (43:6). Chapter 45 is a personal word from Yahweh to him."
    },
    tip: {
      zh: "書卷被燒後，耶利米又口述、巴錄再寫一卷，還「添了許多相彷的話」（36:32）——耶利米書的形成，和這種口述與書寫的合作有關。",
      en: "After the scroll was burned, Jeremiah dictated and Baruch wrote another, with “many similar words” added (36:32) — the making of Jeremiah has to do with this kind of dictation and writing."
    },
    related: ["jeremiah", "scroll", "jehoiakim", "anathoth_field"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "rechabites", book: "jeremiah", no: 17, kind: "person", type: "faith", rarity: 2,
    zh: "利甲人", en: "The Rechabites",
    tag: { zh: "不喝酒、住帳棚的忠心家族", en: "The Family That Kept Its Word" },
    role: { zh: "約拿達的後裔", en: "Descendants of Jonadab son of Rechab" },
    ch: [35],
    passages: ["35:1-19"],
    moves: [
      { zh: "「我們不喝酒」", en: "“We Will Drink No Wine”", ref: "35:5-6",
        dzh: "耶利米在殿裡擺上盛酒的碗和杯，利甲人卻說：先祖約拿達吩咐我們永不喝酒。",
        den: "Jeremiah set bowls and cups of wine before them in the temple, but they said: our ancestor Jonadab told us never to drink wine." },
      { zh: "守先祖的命", en: "Obeying an Ancestor", ref: "35:7-10",
        dzh: "他們不蓋房、不種田、不栽葡萄園，一生住帳棚，聽從先祖的話。",
        den: "They built no houses, sowed no fields, planted no vineyards, but lived in tents all their lives, obeying their ancestor." }
    ],
    traits: [
      { k: "strength", zh: "一代一代守約", en: "Faithful across generations" },
      { k: "weakness", zh: "被戰火逼進城裡", en: "Driven into the city by war" }
    ],
    lesson: {
      zh: "耶利米用利甲人對照猶大人：連對先祖的吩咐都能守住，為何不聽神的話？（35:14-16）",
      en: "Jeremiah sets the Rechabites against Judah: they kept even an ancestor’s command — why will Judah not heed God’s word? (35:14–16)"
    },
    quote: { ref: "35:6",
      zh: "我們不喝酒；因為我們先祖利甲的兒子約拿達曾吩咐我們",
      en: "We will drink no wine; for Jonadab the son of Rechab, our father, commanded us" },
    keyVerses: ["35:2", "35:5-7", "35:12-16", "35:18-19"],
    intro: {
      zh: "利甲人是約拿達的後裔，世代遵守先祖的吩咐：不喝酒、不蓋房、不種田，只住帳棚。因為巴比倫軍隊上來，他們才暫時進到耶路撒冷（35:11）。耶利米把酒擺在他們面前，目的是讓猶大人看見：這個家族的順服，與猶大人的不聽從形成何等的對比。",
      en: "The Rechabites were descendants of Jonadab, who for generations kept their ancestor’s commands: no wine, no houses, no fields, only tents. They had come into Jerusalem only because of the Babylonian army (35:11). Jeremiah set wine before them to show Judah the contrast between this family’s obedience and Judah’s refusal to listen."
    },
    tip: {
      zh: "35:19 給利甲人的應許是「永不缺人侍立在我面前」——順服的家族，神也記念。",
      en: "The promise to the Rechabites in 35:19 is that they will never lack a man to stand before Yahweh — God remembers an obedient family."
    },
    related: ["jeremiah", "jehoiakim"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "scroll", book: "jeremiah", no: 18, kind: "other", type: "wisdom", rarity: 4,
    zh: "被燒又重寫的書卷", en: "The Burned and Rewritten Scroll",
    tag: { zh: "燒不掉的話", en: "The Word That Could Not Be Burned" },
    role: { zh: "耶利米預言的書卷", en: "A scroll of Jeremiah’s prophecies" },
    ch: [36],
    passages: ["36:1-32"],
    moves: [
      { zh: "寫下所有的話", en: "Write Every Word", ref: "36:2-3",
        dzh: "耶和華吩咐他把從約西亞時代到如今的一切話寫在書卷上，或者猶大人聽了會回頭。",
        den: "Yahweh told him to write on a scroll everything he had said since Josiah’s time, in case Judah would hear and turn back." },
      { zh: "再寫一卷", en: "Write It Again", ref: "36:27-32",
        dzh: "王燒了書卷之後，耶和華吩咐再寫一卷；巴錄又寫一遍，還添了許多相彷的話。",
        den: "After the king burned it, Yahweh said to write another; Baruch wrote it again, and many similar words were added." }
    ],
    traits: [
      { k: "strength", zh: "燒不盡", en: "Cannot be destroyed" },
      { k: "weakness", zh: "遇上不聽的王", en: "Met a king who wouldn’t listen" }
    ],
    lesson: {
      zh: "神的話可以被拒絕、被燒毀，卻不會被消滅（36:28, 32）。",
      en: "God’s word can be rejected and burned, but it cannot be destroyed (36:28, 32)."
    },
    quote: { ref: "36:32",
      zh: "另外又添了許多相彷的話",
      en: "and many similar words were added to them." },
    keyVerses: ["36:2-4", "36:21-24", "36:27-28", "36:32"],
    intro: {
      zh: "約雅敬第四年（36:1），耶和華吩咐耶利米把多年所說的話寫成書卷。巴錄在殿裡念給百姓聽；王聽了三四篇就割破書卷、扔進火盆（36:21-23）。王下令捉拿巴錄和耶利米，耶和華卻將他們隱藏（36:26）。神吩咐再寫一卷，還添了許多話（36:28, 32）。",
      en: "In Jehoiakim’s fourth year (36:1) Yahweh tells Jeremiah to write his messages on a scroll. Baruch reads it to the people at the temple; the king, after three or four columns, slices the scroll and throws it into the brazier (36:21–23). He orders Baruch and Jeremiah seized, but Yahweh hides them (36:26). God has another scroll written, with many more words added (36:28, 32)."
    },
    tip: {
      zh: "這一章是耶利米書如何成書的線索：口述、書寫、公開宣讀、被燒、重寫、增補。",
      en: "This chapter is a clue to how Jeremiah came to be: dictation, writing, public reading, burning, rewriting, expansion."
    },
    related: ["baruch", "jehoiakim", "jeremiah"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "zedekiah", book: "jeremiah", no: 19, kind: "person", type: "power", rarity: 4,
    zh: "西底家", en: "Zedekiah",
    tag: { zh: "想聽又不敢聽的末代王", en: "The King Who Wanted to Hear but Dared Not Obey" },
    role: { zh: "猶大末代君王", en: "Last king of Judah" },
    ch: [1, 21, 24, 27, 28, 29, 32, 34, 36, 37, 38, 39, 44, 49, 51, 52],
    names: ["西底家"],
    enNames: ["Zedekiah"],
    moves: [
      { zh: "私下問先知", en: "Asking in Secret", ref: "38:14-19",
        dzh: "他在聖殿第三門私下問耶利米；耶利米勸他歸降巴比倫，他卻說怕被戲弄。",
        den: "At the temple’s third entrance he questioned Jeremiah in secret; Jeremiah urged him to surrender, but he said he feared being mocked." },
      { zh: "兩面為難", en: "Torn Between Voices", ref: "38:5",
        dzh: "官長要殺耶利米，他說：「他在你們手中，無論何事，王也不能與你們反對。」",
        den: "When the officials wanted Jeremiah dead he said: “he is in your hand; for the king can’t do anything to oppose you.”" }
    ],
    traits: [
      { k: "strength", zh: "肯聽先知說話", en: "Willing to hear the prophet" },
      { k: "weakness", zh: "懼怕官長和同胞", en: "Afraid of his officials and people" }
    ],
    lesson: {
      zh: "他知道該怎麼做，卻因為怕人而不去做；最後城破被擄（39:4-7）。",
      en: "He knew what to do but feared people more than he obeyed; in the end the city fell and he was captured (39:4–7)."
    },
    quote: { ref: "38:5",
      zh: "他在你們手中，無論何事，王也不能與你們反對",
      en: "Behold, he is in your hand; for the king can’t do anything to oppose you." },
    keyVerses: ["37:1-3", "37:17-21", "38:14-18", "39:4-7"],
    intro: {
      zh: "西底家是尼布甲尼撒立在猶大的末代君王（37:1）。他和臣僕都不聽耶利米所傳的話（37:2），卻又常私下求問、請他代禱（37:3, 17）。耶利米勸他歸降巴比倫，他說怕被戲弄（38:17-19）。最後城被攻破，他的眾子被殺，自己被剜眼、鎖著帶到巴比倫（39:4-7）。",
      en: "Zedekiah was the last king of Judah, set on the throne by Nebuchadnezzar (37:1). He and his servants did not heed Jeremiah’s words (37:2), yet kept asking him in secret and begging for prayer (37:3, 17). Jeremiah urged him to surrender to Babylon, but he feared mockery (38:17–19). In the end the city fell, his sons were killed, and he was blinded and taken in bronze chains to Babylon (39:4–7)."
    },
    tip: {
      zh: "37:3、37:17、38:14 三次，他都私下求問耶利米，卻始終沒有照著做。",
      en: "In 37:3, 37:17 and 38:14 he keeps seeking Jeremiah out in private — and never does what he is told."
    },
    related: ["jeremiah", "cistern", "ebed_melech", "jehoiakim", "josiah", "nebuzaradan"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "cistern", book: "jeremiah", no: 20, kind: "other", type: "scheme", rarity: 3,
    zh: "水牢", en: "The Cistern",
    tag: { zh: "陷在淤泥中的先知", en: "The Prophet Sunk in the Mud" },
    role: { zh: "護衛兵院中的牢獄", en: "The dungeon in the court of the guard" },
    ch: [38],
    passages: ["38:1-13"],
    moves: [
      { zh: "下在牢獄裡", en: "Lowered into the Dungeon", ref: "38:6",
        dzh: "官長用繩子把耶利米縋進牢獄；裡面沒有水，只有淤泥，他陷在淤泥中。",
        den: "The officials let Jeremiah down by ropes into the dungeon; there was no water, only mire, and he sank in the mire." },
      { zh: "被拉上來", en: "Pulled Up", ref: "38:10-13",
        dzh: "古實人以伯‧米勒帶三十人，用繩子縋下碎布和破衣，把耶利米拉了上來。",
        den: "Ebed-Melech took thirty men and let down rags and worn clothes on ropes, and they pulled Jeremiah up." }
    ],
    traits: [
      { k: "strength", zh: "仍然活著", en: "Still alive" },
      { k: "weakness", zh: "飢餓與淤泥", en: "Hunger and mud" }
    ],
    lesson: {
      zh: "最黑暗的地方，也有人被神預備來拉你上來；而且往往是你意想不到的人。",
      en: "Even in the darkest place someone is prepared to pull you up — often the last person you would expect."
    },
    quote: { ref: "38:6",
      zh: "牢獄裡沒有水，只有淤泥，耶利米就陷在淤泥中",
      en: "In the dungeon there was no water, but mire; and Jeremiah sank in the mire." },
    keyVerses: ["38:1-4", "38:6", "38:7-9", "38:10-13"],
    intro: {
      zh: "耶利米勸百姓歸降巴比倫（38:2-3），官長們說他使兵丁的手發軟，要治死他（38:4）。王不攔阻，他們就把他縋進一個沒有水、只有淤泥的牢獄（38:5-6）。這是他一生最低的處境之一。",
      en: "Jeremiah urged people to surrender to Babylon (38:2–3), and the officials said he was weakening the soldiers’ hands and demanded his death (38:4). The king did not stop them, so they lowered him into a dungeon with no water, only mire (38:5–6) — one of the lowest points of his life."
    },
    tip: {
      zh: "38:6 的「牢獄」，原文字面是「坑」（常被理解為蓄水池）；因為沒有水，才會有淤泥。",
      en: "The “dungeon” of 38:6 is literally a “pit” (often understood as a cistern); with no water left, there was only mud."
    },
    related: ["ebed_melech", "zedekiah", "jeremiah"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "ebed_melech", book: "jeremiah", no: 21, kind: "person", type: "love", rarity: 3,
    zh: "古實人以伯‧米勒", en: "Ebed-Melech the Cushite",
    meaning: { zh: "「王的僕人」", en: "“Servant of the king”" },
    tag: { zh: "為先知挺身而出的外邦太監", en: "The Foreign Court Official Who Spoke Up" },
    role: { zh: "王宮的太監・古實人", en: "A Cushite court official" },
    ch: [38, 39],
    names: ["以伯‧米勒"],
    enNames: ["Ebed-melech"],
    moves: [
      { zh: "向王進言", en: "He Spoke Up", ref: "38:7-9",
        dzh: "他聽說耶利米被下在牢獄，就從王宮出來向王說：他在那裡必因飢餓而死。",
        den: "Hearing that Jeremiah was in the dungeon, he left the palace and told the king he would die of hunger there." },
      { zh: "「因你倚靠我」", en: "“Because You Trusted Me”", ref: "39:15-18",
        dzh: "耶和華應許在城破之日搭救他，「因你倚靠我」。",
        den: "Yahweh promised to rescue him when the city fell — “because you have put your trust in me.”" }
    ],
    traits: [
      { k: "strength", zh: "勇敢又細心", en: "Brave and thoughtful" },
      { k: "weakness", zh: "外邦人、地位低", en: "An outsider with little standing" }
    ],
    lesson: {
      zh: "行動的人，有時不是「自己人」；他用一點碎布和繩子，救了一位先知，神也記在心上。",
      en: "The one who acts is sometimes not “one of us”; with a few rags and a rope he saved a prophet, and God took note."
    },
    quote: { ref: "39:18",
      zh: "你不致倒在刀下，卻要以自己的命為掠物，因你倚靠我",
      en: "you will escape with your life; because you have put your trust in me" },
    keyVerses: ["38:7-9", "38:10-13", "39:15-18"],
    intro: {
      zh: "以伯‧米勒是古實人（約在今日非洲東北部努比亞一帶），在王宮作太監。耶利米被下在牢獄，他挺身向王進言，又帶三十人用繩子和碎布救起耶利米（38:7-13）。神後來應許在城破之日保守他，因為他倚靠耶和華（39:15-18）。",
      en: "Ebed-Melech was a Cushite (from the region of Nubia, in north-east Africa) and a court official in the palace. When Jeremiah was thrown into the dungeon he spoke up to the king and led thirty men to pull Jeremiah up with ropes and rags (38:7–13). God later promised to protect him when the city fell, because he trusted in Yahweh (39:15–18)."
    },
    tip: {
      zh: "留意他的細心：他想到在繩子上墊碎布，免得弄傷耶利米的腋下（38:12）。",
      en: "Notice his thoughtfulness: he thinks of padding the ropes with rags so Jeremiah’s armpits are not hurt (38:12)."
    },
    related: ["cistern", "zedekiah", "jeremiah"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "nebuzaradan", book: "jeremiah", no: 22, kind: "person", type: "power", rarity: 1,
    zh: "尼布撒拉旦", en: "Nebuzaradan",
    tag: { zh: "釋放先知的巴比倫護衛長", en: "The Babylonian Captain Who Freed the Prophet" },
    role: { zh: "巴比倫王的護衛長", en: "Captain of the Babylonian guard" },
    ch: [39, 40, 41, 43, 52],
    names: ["尼布撒拉旦"],
    enNames: ["Nebuzaradan"],
    moves: [
      { zh: "奉王命善待他", en: "Orders to Treat Him Well", ref: "39:11-14",
        dzh: "尼布甲尼撒囑咐他好好看待耶利米，他就把耶利米從護衛兵院中提出來。",
        den: "Nebuchadnezzar ordered him to look after Jeremiah well, so he had Jeremiah taken out of the court of the guard." },
      { zh: "解開鍊子", en: "Unchaining Jeremiah", ref: "40:1-5",
        dzh: "他在拉瑪說：「現在我解開你手上的鍊子」，又送他糧食和禮物。",
        den: "At Ramah he said, “I release you today from the chains,” and gave him provisions and a gift." }
    ],
    traits: [
      { k: "strength", zh: "軍令分明", en: "Disciplined" },
      { k: "weakness", zh: "毀了耶路撒冷的人", en: "He led Jerusalem’s destruction" }
    ],
    lesson: {
      zh: "連一位外邦軍官，也說這場災禍是因為百姓「得罪耶和華，沒有聽從他的話」（40:3）。",
      en: "Even a foreign officer says the disaster came because the people “sinned against Yahweh and didn’t obey his voice” (40:3)."
    },
    quote: { ref: "40:4",
      zh: "現在我解開你手上的鍊子",
      en: "Now, behold, I release you today from the chains which are on your hand." },
    keyVerses: ["39:11-14", "40:1-3", "40:4-5"],
    intro: {
      zh: "尼布撒拉旦是巴比倫王的護衛長，耶路撒冷陷落後，他進城焚燒聖殿和王宮、拆毀城牆（52:12-14），也負責處理被擄的人。尼布甲尼撒特別吩咐要善待耶利米（39:11-12）；他在拉瑪解開耶利米的鍊子，讓他選擇：同往巴比倫，或留在本地（40:1-5）。",
      en: "Nebuzaradan was captain of the guard to the king of Babylon. After Jerusalem fell he burned the temple and palace and had the walls torn down (52:12–14), and handled the captives. Nebuchadnezzar gave special orders to treat Jeremiah well (39:11–12); at Ramah he unlocked Jeremiah’s chains and let him choose between going to Babylon or staying (40:1–5)."
    },
    tip: {
      zh: "他在 40:2-3 的話很有意思：一位外邦軍官，用耶利米自己傳的信息來解釋這場災禍。",
      en: "His words in 40:2–3 are striking: a foreign officer explains the disaster with the very message Jeremiah had preached."
    },
    related: ["jeremiah", "gedaliah", "zedekiah"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "gedaliah", book: "jeremiah", no: 23, kind: "person", type: "wisdom", rarity: 2,
    zh: "基大利", en: "Gedaliah",
    tag: { zh: "被暗殺的省長", en: "The Governor Who Was Murdered" },
    role: { zh: "巴比倫所立的猶大省長", en: "Governor appointed over Judah" },
    ch: [39, 40, 41],
    passages: ["39:14", "40:5-12", "41:1-3"],
    moves: [
      { zh: "米斯巴的新省長", en: "Governor at Mizpah", ref: "40:9-10",
        dzh: "他勸歸回的人不要怕服事迦勒底人，住在這地，積蓄酒、油和夏天的果子。",
        den: "He urged the returning Judeans not to fear serving the Chaldeans: stay in the land and gather wine, summer fruit and oil." },
      { zh: "同席被殺", en: "Murdered at the Table", ref: "41:1-3",
        dzh: "七月間，以實瑪利帶十個人來米斯巴，一同吃飯之後，用刀殺了基大利。",
        den: "In the seventh month Ishmael came to Mizpah with ten men and, after sharing a meal with Gedaliah, killed him with the sword." }
    ],
    traits: [
      { k: "strength", zh: "安定人心", en: "Steadied the people" },
      { k: "weakness", zh: "不信警告", en: "Didn’t believe the warning" }
    ],
    lesson: {
      zh: "好的領導不能只有善意，也要留心警告；約哈難警告過他，他卻不信（40:14-16）。",
      en: "Good leadership needs more than good will: Johanan warned him and he would not believe it (40:14–16)."
    },
    quote: { ref: "40:10",
      zh: "你們當積蓄酒、油，和夏天的果子，收在器皿裡",
      en: "gather wine and summer fruits and oil, and put them in your vessels" },
    keyVerses: ["40:5-6", "40:9-10", "40:11-12", "41:1-3"],
    intro: {
      zh: "耶路撒冷陷落後，巴比倫王立亞希甘的兒子基大利作猶大的省長，駐在米斯巴（40:5-7）。許多逃散的猶大人回到那裡，積蓄了許多酒和夏天的果子（40:12）。但七月間，王室後裔以實瑪利帶人殺了基大利（41:1-3），重建的盼望一下子破滅了。",
      en: "After Jerusalem fell, the king of Babylon appointed Gedaliah, son of Ahikam, governor of Judah, based at Mizpah (40:5–7). Many scattered Judeans returned and gathered much wine and summer fruit (40:12). But in the seventh month Ishmael, of the royal family, killed Gedaliah (41:1–3), and the hope of rebuilding collapsed."
    },
    tip: {
      zh: "基大利是亞希甘的兒子、沙番的孫子（40:5）；這個家族在 26:24 保護過耶利米，在 29:3 也有人為耶利米送信。",
      en: "Gedaliah was a son of Ahikam and grandson of Shaphan (40:5); this family protected Jeremiah in 26:24, and a son of Shaphan carried his letter in 29:3."
    },
    related: ["nebuzaradan", "jeremiah", "zedekiah"]
  }
);
