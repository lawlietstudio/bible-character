// 聖經人物卡 · 哈巴谷書 (Habakkuk) — book info + cards.
// Verse text comes from data/habakkuk.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/habakkuk.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Rom 1:17; Gal 3:11; Heb 10:37-38; Isa 11:9; Deut 33:2; Ps 18:33, 46:10; 2 Kgs 24:1-2; Jer 25:9; Obad 1:4)
// were checked against the 和合本 text and appear in prose only.
// Flagged rather than decided: the book's date (no king is named), "faith" vs "faithfulness" in 2:4, how 2:2 "that he who
// runs may read it" works, who the "anointed" of 3:13 is, whether 3:11 recalls Joshua 10, CUV "紅海" vs WEB "the sea" in 3:15,
// and the musical terms of 3:1, 3:3, 3:9, 3:13.

window.BOOKS.push({
  id: "habakkuk",
  zh: "哈巴谷書", en: "Habakkuk", abbr: { zh: "哈", en: "Hab" },
  order: 35, section: { zh: "先知書", en: "Prophets" },
  chapters: 3,
  fan: ["righteous_by_faith", "habakkuk", "yet_rejoice"],
  summary: {
    zh: "哈巴谷書是一卷少見的先知書：先知不是向百姓說話，而是和神對話。第 1 章：先知問「要到幾時呢？」（1:2），耶和華回答要興起迦勒底人（1:5-6）；先知再問：你眼目清潔，為何看著惡人吞滅比自己公義的人而不理？（1:13）第 2 章：先知站在守望所等候（2:1），耶和華要他把默示寫在版上，並說「惟義人因信得生」（2:4）；接著是五個「禍哉」（2:6-19），以「耶和華在他的聖殿中，全地都當肅敬靜默」收結（2:20）。第 3 章是先知的禱告，像一首詩歌：求神復興作為（3:2），回顧神的顯現（3:3-15），最後說「雖然無花果樹不發旺……然而，我要因耶和華歡欣」（3:17-18）。",
    en: "Habakkuk is an unusual prophetic book: the prophet does not speak to the people but argues with God. Chapter 1: the prophet asks, “How long?” (1:2), and Yahweh answers that he is raising up the Chaldeans (1:5–6); the prophet asks again: you who have purer eyes than to see evil, why do you keep silent when the wicked swallows up the more righteous? (1:13). Chapter 2: the prophet stands at his watch and waits (2:1), and Yahweh tells him to write the vision on tablets and says, “the righteous will live by his faith” (2:4); five woes follow (2:6–19), and the chapter closes, “Yahweh is in his holy temple. Let all the earth be silent before him!” (2:20). Chapter 3 is the prophet’s prayer, written like a song: he asks Yahweh to renew his work (3:2), recalls his appearances (3:3–15), and ends, “though the fig tree doesn’t flourish… yet I will rejoice in Yahweh” (3:17–18)."
  },
  outline: [
    { zh: "先知的第一個「要到幾時」；迦勒底人；第二個問題", en: "The prophet’s first “How long?”; the Chaldeans; the second question" },
    { zh: "守望所；義人因信得生；五個「禍哉」；全地靜默", en: "The watch post; the righteous live by faith; five woes; let all the earth be silent" },
    { zh: "禱告：復興你的作為；神從提幔而來；然而，我要歡欣", en: "The prayer: renew your work; God came from Teman; yet I will rejoice" }
  ],
  notes: {
    zh: "小提示：全書像一場對話，三章各有一個轉折：1:2-4 呼求 → 1:5-11 回答 → 1:12-2:1 再問 → 2:2-20 回答 → 第 3 章禱告。「義人因信得生」（2:4）在新約被三次引用：羅馬書 1:17、加拉太書 3:11、希伯來書 10:38。書中沒有寫年份；迦勒底人（巴比倫）的興起，是推算時間的主要線索。",
    en: "Good to know: the whole book reads like a conversation, with a turn in each chapter: 1:2–4 complaint → 1:5–11 answer → 1:12–2:1 second question → 2:2–20 answer → chapter 3 prayer. “The righteous will live by faith” (2:4) is quoted three times in the New Testament: Romans 1:17, Galatians 3:11 and Hebrews 10:38. The book gives no date; the rise of the Chaldeans (Babylon) is the main clue for dating it."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "habakkuk", book: "habakkuk", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "哈巴谷", en: "Habakkuk",
    meaning: { zh: "常被解作「擁抱」", en: "Often explained as “embrace”" },
    tag: { zh: "敢向神問「為甚麼」的先知", en: "The Prophet Who Dared Ask God “Why?”" },
    role: { zh: "先知・守望者", en: "Prophet and watchman" },
    ch: [1, 2, 3],
    passages: ["1:1", "2:1", "3:1"],
    moves: [
      { zh: "要到幾時呢？", en: "How Long?", ref: "1:2",
        dzh: "他問耶和華：我呼求你，你不應允，要到幾時呢？",
        den: "He asks Yahweh, “How long will I cry, and you will not hear?”" },
      { zh: "站在守望所", en: "At the Watch Post", ref: "2:1",
        dzh: "他要站在守望所，立在望樓上，看耶和華對他說甚麼話。",
        den: "He will stand at his watch on the ramparts and look out to see what Yahweh will say to him." }
    ],
    traits: [
      { k: "strength", zh: "把苦惱直接說給神聽，然後等候", en: "Brings his anguish straight to God, then waits" },
      { k: "identity", zh: "全書是對話，不是對百姓的宣講", en: "The book is a dialogue, not a sermon to the people" }
    ],
    lesson: {
      zh: "哈巴谷提的不是不敬的問題，而是被記進聖經的禱告：他問「要到幾時」（1:2）、問「為何靜默不語」（1:13），然後站上守望所等候（2:1）。書的結尾不是答案，而是「然而」（3:18）。",
      en: "Habakkuk’s questions are not irreverent; they are prayers kept in Scripture: “How long?” (1:2), “why do you keep silent?” (1:13) — and then he takes up his watch (2:1). The book ends not with an answer but with “yet” (3:18)."
    },
    quote: { ref: "1:2",
      zh: "耶和華啊！我呼求你，你不應允，要到幾時呢",
      en: "Yahweh, how long will I cry, and you will not hear?" },
    keyVerses: ["1:2", "2:1", "3:2", "3:18"],
    intro: {
      zh: "哈巴谷在 1:1 和 3:1 兩次被稱為「先知」，但書裡沒有說他的父親、家鄉，也沒有列出猶大哪一位王在位。全書的結構是一場對話：他呼求（1:2-4），神回答（1:5-11），他再問（1:12-2:1），神再回答（2:2-20），最後他以禱告和詩歌結束（第 3 章）。書中提到迦勒底人（巴比倫）正在興起（1:6），所以書通常被放在猶大面臨巴比倫的時候；列王紀下 24:1-2 記著約雅敬年間，耶和華使迦勒底軍來攻擊猶大。這是推算，書本身沒有寫年份。「哈巴谷」這名字常被解作「擁抱」，來源說法不一。",
      en: "Habakkuk is called “the prophet” in 1:1 and 3:1, but the book gives neither his father nor his hometown, and names no king of Judah. Its shape is a conversation: he cries out (1:2–4), God answers (1:5–11), he asks again (1:12–2:1), God answers again (2:2–20), and he ends in prayer and song (chapter 3). The book speaks of the Chaldeans (Babylon) rising (1:6), so it is usually placed when Judah faced Babylon; 2 Kings 24:1–2 records that in Jehoiakim’s days Yahweh sent bands of the Chaldeans against Judah. That is an inference; the book gives no date. His name is often explained as “embrace,” though the explanations vary."
    },
    tip: {
      zh: "哈巴谷書沒有寫年份；「迦勒底人正在興起」（1:6）是推算年代的主要線索。名字的意思也有不同說法。",
      en: "Habakkuk gives no date; “the Chaldeans are rising” (1:6) is the main clue. The meaning of his name is also explained in more than one way."
    },
    related: ["how_long", "watch_post", "righteous_by_faith", "prayer_revive", "yet_rejoice"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "how_long", book: "habakkuk", no: 2, kind: "other", type: "faith", rarity: 3,
    zh: "要到幾時呢", en: "How Long?",
    tag: { zh: "向神問「為甚麼」的禱告", en: "A Prayer That Asks “Why?”" },
    role: { zh: "第一次呼求（1:2-4）", en: "The first complaint (1:2–4)" },
    ch: [1],
    passages: ["1:2-4"],
    moves: [
      { zh: "你不應允", en: "You Do Not Hear", ref: "1:2",
        dzh: "我呼求你，你不應允；我因強暴哀求你，你還不拯救。",
        den: "I cry out to you “Violence!” and will you not save?" },
      { zh: "公理顛倒", en: "Justice Perverted", ref: "1:3-4",
        dzh: "毀滅和強暴在我面前；律法放鬆，公理顯然顛倒。",
        den: "Destruction and violence are before me; the law is paralyzed, and justice comes out perverted." }
    ],
    traits: [
      { k: "strength", zh: "不裝平靜，把看見的說出來", en: "Does not pretend calm; says what he sees" },
      { k: "weakness", zh: "神的靜默，像是不理", en: "God’s silence feels like not looking" }
    ],
    lesson: {
      zh: "這樣的問法在聖經裡沒有被責備；它被記了下來。先知看見的不公（1:3-4）和他的呼求（1:2），一同成為經文的一部分。",
      en: "This kind of question is not rebuked in Scripture; it is recorded. What the prophet sees of injustice (1:3–4) and his cry (1:2) both become part of the text."
    },
    quote: { ref: "1:3",
      zh: "你為何使我看見罪孽？你為何看著奸惡而不理呢",
      en: "Why do you show me iniquity, and look at perversity?" },
    keyVerses: ["1:2", "1:3", "1:4"],
    intro: {
      zh: "全書的第一段話是一個問句：「耶和華啊！我呼求你，你不應允，要到幾時呢？我因強暴哀求你，你還不拯救。」（1:2）接著是第二個：「你為何使我看見罪孽？你為何看著奸惡而不理呢？」（1:3）他看見的是毀滅、強暴、爭端和相鬥，結果是「律法放鬆，公理也不顯明；惡人圍困義人，所以公理顯然顛倒」（1:4）。「律法放鬆」可以理解為律法沒有人遵守、也沒有人執行。這裡的「惡人」是誰，經文沒有說；通常讀作猶大內部的不義，下一段神的回答才轉向國外的迦勒底人。",
      en: "The book’s first words are a question: “Yahweh, how long will I cry, and you will not hear? I cry out to you ‘Violence!’ and will you not save?” (1:2). Then another: “Why do you show me iniquity, and look at perversity?” (1:3). What he sees is destruction, violence, strife and contention, with the result that “the law is paralyzed, and justice never prevails; for the wicked surround the righteous; therefore justice comes out perverted” (1:4). “The law is paralyzed” can mean that it is neither kept nor enforced. Who “the wicked” are the text does not say; they are usually read as injustice within Judah, before God’s answer turns to the Chaldeans abroad."
    },
    tip: {
      zh: "1:2-4 的「惡人」沒有指名，通常讀作猶大內部的不義。",
      en: "The “wicked” of 1:2–4 are not named; they are usually read as injustice within Judah."
    },
    related: ["habakkuk", "chaldeans", "purer_eyes", "watch_post"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "chaldeans", book: "habakkuk", no: 3, kind: "other", type: "power", rarity: 4,
    zh: "迦勒底人", en: "The Chaldeans",
    tag: { zh: "神所興起，卻以自己的勢力為神", en: "Raised Up by God, Yet Whose Strength Is His God" },
    role: { zh: "神的第一個回答（1:5-11）", en: "God’s first answer (1:5–11)" },
    ch: [1],
    passages: ["1:5-11"],
    moves: [
      { zh: "我必興起迦勒底人", en: "I Raise Up the Chaldeans", ref: "1:6",
        dzh: "耶和華說：我必興起迦勒底人，就是那殘忍暴躁之民。",
        den: "“I raise up the Chaldeans, that bitter and hasty nation.”" },
      { zh: "以自己的勢力為神", en: "Strength as a God", ref: "1:11",
        dzh: "他像風猛然掃過，他以自己的勢力為神，顯為有罪。",
        den: "He sweeps by like the wind; he is guilty, whose strength is his god." }
    ],
    traits: [
      { k: "strength", zh: "馬比豹更快，如鷹抓食（1:8）", en: "Horses swifter than leopards, like an eagle diving (1:8)" },
      { k: "weakness", zh: "把自己的勢力當作神（1:11）", en: "Makes his own strength his god (1:11)" }
    ],
    lesson: {
      zh: "神的回答出人意外：不是除去強暴，而是興起一個更強暴的民（1:5-6）。祂用他們，卻不認同他們：「他以自己的勢力為神，顯為有罪」（1:11）。",
      en: "God’s answer is startling: not to remove violence but to raise up a more violent nation (1:5–6). He uses them without approving them: “He is indeed guilty, whose strength is his god” (1:11)."
    },
    quote: { ref: "1:6",
      zh: "我必興起迦勒底人，就是那殘忍暴躁之民",
      en: "I raise up the Chaldeans, that bitter and hasty nation" },
    keyVerses: ["1:5", "1:6", "1:8", "1:10", "1:11"],
    intro: {
      zh: "耶和華的第一個回答，開頭就是一個令人難以置信的消息：「你們要向列國中觀看，大大驚奇；因為在你們的時候，我行一件事，雖有人告訴你們，你們總是不信。」（1:5）是甚麼事？「我必興起迦勒底人，就是那殘忍暴躁之民，通行遍地，佔據那不屬自己的住處」（1:6）。1:8-10 描寫他們：馬比豹更快，比晚上的豺狼更猛；將擄掠的人聚集多如塵沙；譏誚君王，笑話一切保障，築壘就攻取。耶利米書 25:9 也稱巴比倫王尼布甲尼撒為神的「僕人」，用來攻擊這地；但「僕人」不等於被認同。在 1:11 的結尾，這民族「以自己的勢力為神」，被判為有罪，為下一章的「禍哉」預備了位置。",
      en: "God’s first answer opens with unbelievable news: “Look among the nations, watch, and wonder marvelously; for I am working a work in your days, which you will not believe though it is told you” (1:5). What work? “I raise up the Chaldeans, that bitter and hasty nation, that march through the width of the earth, to possess dwelling places that are not theirs” (1:6). Verses 8–10 describe them: horses swifter than leopards and fiercer than evening wolves; they gather prisoners like sand; they scoff at kings and laugh at every stronghold, building an earthen ramp and taking it. Jeremiah 25:9 also calls Nebuchadnezzar king of Babylon Yahweh’s “servant” against the land; but “servant” does not mean approved. Verse 11 ends by saying this nation’s strength is its god, and it is guilty, which prepares the place for the woes of chapter 2."
    },
    tip: {
      zh: "耶和華說「興起」迦勒底人，並不等於認同他們的所為；1:11 與 2:5-8 都明說他們有罪。",
      en: "That Yahweh “raises up” the Chaldeans does not mean he approves what they do; 1:11 and 2:5–8 both say they are guilty."
    },
    related: ["how_long", "purer_eyes", "woes_plunder", "righteous_by_faith"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "purer_eyes", book: "habakkuk", no: 4, kind: "other", type: "wisdom", rarity: 4,
    zh: "眼目清潔的神", en: "Eyes Too Pure to See Evil",
    tag: { zh: "「你為何靜默不語呢？」", en: "“Why Do You Keep Silent?”" },
    role: { zh: "第二次呼求（1:12-17）", en: "The second complaint (1:12–17)" },
    ch: [1],
    passages: ["1:12-17"],
    moves: [
      { zh: "你眼目清潔", en: "Purer Eyes", ref: "1:12-13",
        dzh: "你眼目清潔，不看邪僻；惡人吞滅比自己公義的，你為何靜默不語呢？",
        den: "You have purer eyes than to see evil; why keep silent when the wicked swallows up the more righteous?" },
      { zh: "向網獻祭", en: "Sacrificing to His Net", ref: "1:15-16",
        dzh: "他用網捕獲列國而歡喜，竟向網獻祭、向網燒香。",
        den: "He catches the nations in his net and rejoices — then sacrifices to his net and burns incense to it." }
    ],
    traits: [
      { k: "strength", zh: "仍稱祂「我的神，我的聖者」（1:12）", en: "Still calls him “my God, my Holy One” (1:12)" },
      { k: "weakness", zh: "看不通神為何用更惡的人", en: "Cannot see why God would use worse people" }
    ],
    lesson: {
      zh: "先知沒有因為問題而離開神：他先承認「耶和華─我的神，我的聖者」（1:12），然後才問更難的問題——為甚麼用比我們更壞的人來懲治（1:13）。",
      en: "The prophet does not leave God because of his question: he first says “Yahweh my God, my Holy One” (1:12), and only then asks the harder thing — why use people worse than us to punish (1:13)?"
    },
    quote: { ref: "1:13",
      zh: "你眼目清潔，不看邪僻，不看奸惡",
      en: "You who have purer eyes than to see evil, and who cannot look on perversity" },
    keyVerses: ["1:12", "1:13", "1:14", "1:15", "1:16", "1:17"],
    intro: {
      zh: "先知聽了回答，並不滿意，也沒有退縮，他再問一次，起點是神的性情：「耶和華─我的神，我的聖者啊，你不是從亙古而有嗎？我們必不致死。耶和華啊，你派定他為要刑罰人；磐石啊，你設立他為要懲治人。」（1:12）接著是尖銳的問題：「你眼目清潔，不看邪僻，不看奸惡；行詭詐的，你為何看著不理呢？」（1:13）他把人比作「海中的魚」，被迦勒底人用鉤、網捕獲（1:14-15）；捕魚的人歡喜快樂，竟「向網獻祭，向網燒香」（1:16）。「向網獻祭」通常被讀作：把成功歸給自己的武力與手段；這是比喻，不是真有一個祭祀網的儀式。1:17 以問句結束：他要屢次倒空網羅、毫不顧惜地殺戮列國嗎？",
      en: "The prophet is not satisfied by the answer, and he does not back away; he asks again, beginning from who God is: “Aren’t you from everlasting, Yahweh my God, my Holy One? We will not die. Yahweh, you have appointed him for judgment. You, Rock, have established him to punish” (1:12). Then the sharp question: “You who have purer eyes than to see evil, and who cannot look on perversity, why do you tolerate those who deal treacherously?” (1:13). He pictures people as “the fish of the sea,” caught by the Chaldeans with hook and net (1:14–15); the fisher rejoices and “sacrifices to his net, and burns incense to his dragnet” (1:16). “Sacrificing to the net” is usually read as crediting one’s success to one’s own weapons and methods; it is a figure, not a literal ritual to a net. Verse 17 ends on a question: will he go on emptying his net and killing nations without mercy?"
    },
    tip: {
      zh: "「向網獻祭」是比喻：把成功歸給自己的力量與手段，並不是字面的祭祀儀式。",
      en: "“Sacrificing to his net” is a figure: crediting success to one’s own power and methods, not a literal ritual."
    },
    related: ["how_long", "chaldeans", "watch_post", "woes_plunder"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "watch_post", book: "habakkuk", no: 5, kind: "other", type: "vision", rarity: 5,
    zh: "守望所上的等候", en: "At the Watch Post",
    tag: { zh: "雖然遲延，還要等候", en: "Though It Takes Time, Wait for It" },
    role: { zh: "神的第二個回答（2:1-3）", en: "God’s second answer (2:1–3)" },
    ch: [2],
    passages: ["2:1-3"],
    moves: [
      { zh: "站在守望所", en: "Standing at the Watch", ref: "2:1",
        dzh: "我要站在守望所，立在望樓上，看耶和華對我說甚麼話。",
        den: "I will stand at my watch on the ramparts and look out to see what he will say to me." },
      { zh: "寫在版上", en: "Write It on Tablets", ref: "2:2-3",
        dzh: "將默示明明地寫在版上；雖然遲延，還要等候，必然臨到。",
        den: "“Write the vision, and make it plain on tablets.” Though it takes time, wait for it." }
    ],
    traits: [
      { k: "strength", zh: "問完就等，不先替神回答", en: "Asks, then waits; does not answer for God" },
      { k: "identity", zh: "2:3 被希伯來書 10:37 引用", en: "2:3 is echoed in Hebrews 10:37" }
    ],
    lesson: {
      zh: "耶和華沒有解釋，祂只說：寫下來，等候；「必然臨到，不再遲延」（2:3）。有些問題的回答是日期，不是理由。",
      en: "Yahweh gives no explanation; he says only: write it down and wait; “it will surely come. It won’t delay” (2:3). Some questions are answered with an appointed time, not a reason."
    },
    quote: { ref: "2:3",
      zh: "雖然遲延，還要等候；因為必然臨到，不再遲延",
      en: "Though it takes time, wait for it; because it will surely come. It won’t delay." },
    keyVerses: ["2:1", "2:2", "2:3"],
    intro: {
      zh: "問完兩輪問題後，哈巴谷說：「我要站在守望所，立在望樓上觀看，看耶和華對我說甚麼話，我可用甚麼話向他訴冤。」（2:1）和合本註說「向他訴冤」也可譯作「回答所疑問的」。耶和華回答他：「將這默示明明地寫在版上，使讀的人容易讀。」（2:2）「容易讀」，和合本註作「隨跑隨讀」：是說字要大而清楚，讓人經過時一眼讀得到，還是說報信的人可以拿著跑，注釋家說法不一。2:3：「因為這默示有一定的日期，快要應驗，並不虛謊。雖然遲延，還要等候；因為必然臨到，不再遲延。」希伯來書 10:37-38 引用了這段話的意思，來勸勉讀者堅忍。",
      en: "After two rounds of questions, Habakkuk says: “I will stand at my watch, and set myself on the ramparts, and will look out to see what he will say to me, and what I will answer concerning my complaint” (2:1). The CUV note says the last phrase can also mean “answer to my questioning.” Yahweh replies: “Write the vision, and make it plain on tablets, that he who runs may read it” (2:2). The CUV note renders the last phrase “read as he runs”: does it mean the letters are large and clear so a passerby can read at a glance, or that a herald can carry it as he runs? Commentators differ. Then 2:3: “For the vision is yet for the appointed time, and it hurries toward the end, and won’t prove false. Though it takes time, wait for it; because it will surely come. It won’t delay.” Hebrews 10:37–38 draws on these words to encourage its readers to endure."
    },
    tip: {
      zh: "2:2 的「使讀的人容易讀」和「隨跑隨讀」，兩種譯法都有人採用，意思略有不同。",
      en: "In 2:2 “that he who runs may read it” can be taken in more than one way; translations and commentators differ."
    },
    related: ["habakkuk", "righteous_by_faith", "how_long", "yet_rejoice"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "righteous_by_faith", book: "habakkuk", no: 6, kind: "other", type: "faith", rarity: 5,
    zh: "義人因信得生", en: "The Righteous Live by Faith",
    tag: { zh: "全書最廣為人知的一句", en: "The Book’s Best-Known Line" },
    role: { zh: "神的回答的中心（2:4）", en: "The center of God’s answer (2:4)" },
    ch: [2],
    passages: ["2:4"],
    moves: [
      { zh: "自高自大", en: "Puffed Up", ref: "2:4",
        dzh: "迦勒底人自高自大，心不正直。",
        den: "His soul is puffed up; it is not upright in him." },
      { zh: "因信得生", en: "Live by Faith", ref: "2:4",
        dzh: "惟義人因信得生。",
        den: "But the righteous will live by his faith." }
    ],
    traits: [
      { k: "strength", zh: "在強權底下仍站得住", en: "Stands even under a conquering power" },
      { k: "identity", zh: "新約三次引用：羅 1:17、加 3:11、來 10:38", en: "Quoted three times in the New Testament: Rom 1:17, Gal 3:11, Heb 10:38" }
    ],
    lesson: {
      zh: "兩個人放在一句話裡：自高的人「心不正直」，義人靠對神的信活著（2:4）。這句話在迦勒底人的壓力下說出，不是在安靜的環境中。",
      en: "Two people sit in one sentence: the puffed-up one whose soul is “not upright,” and the righteous who live by faith (2:4). It was said under Chaldean pressure, not in a quiet setting."
    },
    quote: { ref: "2:4",
      zh: "迦勒底人自高自大，心不正直；惟義人因信得生",
      en: "the righteous will live by his faith" },
    keyVerses: ["2:4"],
    intro: {
      zh: "「迦勒底人自高自大，心不正直；惟義人因信得生。」（2:4）這是全書最常被引用的一句。希伯來文的「信」（emunah）也有「忠信、可靠」的意思，所以有人把「義人因信得生」譯作「義人要靠他的忠信活著」；WEB 譯作「靠他的信」。新約三次引用：羅馬書 1:17「義人必因信得生」，加拉太書 3:11「沒有一個人靠著律法在神面前稱義……因為經上說：義人必因信得生」，希伯來書 10:38「只是義人必因信得生。他若退後，我心裡就不喜歡他」（和合本註：有古卷作「我的義人」）。三處的重點各不相同：羅、加談因信稱義，來談在苦難中堅忍。回到哈巴谷書本身，這句話是對先知問題的回答：在迦勒底人之下的日子，義人要怎樣活？",
      en: "“Behold, his soul is puffed up. It is not upright in him, but the righteous will live by his faith” (2:4). It is the book’s most quoted line. The Hebrew word for faith (emunah) can also mean faithfulness or steadiness, so some render it “the righteous will live by his faithfulness”; the WEB has “by his faith.” The New Testament quotes it three times: Romans 1:17 “the righteous shall live by faith,” Galatians 3:11 “no man is justified by the law before God… for ‘The righteous will live by faith,’” and Hebrews 10:38 “the righteous will live by faith. If he shrinks back, my soul has no pleasure in him” (the CUV note says some manuscripts read “my righteous one”). Each use stresses something different: Romans and Galatians speak of being justified by faith, Hebrews of endurance in suffering. Back in Habakkuk itself, the line answers the prophet’s question: under the Chaldeans, how are the righteous to live?"
    },
    tip: {
      zh: "「信」在希伯來文也有「忠信」之意，「他的信」的「他」是誰，各譯本與注釋書略有不同；新約引用時各有各的重點。",
      en: "The Hebrew word for “faith” can also mean “faithfulness,” and whose faith “his faith” is differs across translations and commentaries; the New Testament uses the line with different emphases."
    },
    related: ["watch_post", "chaldeans", "habakkuk", "yet_rejoice"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "woes_plunder", book: "habakkuk", no: 7, kind: "other", type: "scheme", rarity: 3,
    zh: "掠奪者的禍", en: "Woe to the Plunderer",
    tag: { zh: "你搶掠許多國，各國剩下的民都必搶奪你", en: "You Plundered Many Nations; the Remnant Will Plunder You" },
    role: { zh: "第一、第二個「禍哉」（2:5-11）", en: "The first and second woes (2:5–11)" },
    ch: [2],
    passages: ["2:5-11"],
    moves: [
      { zh: "禍哉！增添不屬自己的財物", en: "Woe to Him Who Increases What Is Not His", ref: "2:6",
        dzh: "禍哉！你增添不屬自己的財物，多多取人的當頭，要到幾時為止呢？",
        den: "“Woe to him who increases that which is not his, and who enriches himself by extortion! How long?”" },
      { zh: "石頭必呼叫", en: "The Stone Will Cry Out", ref: "2:11",
        dzh: "牆裡的石頭必呼叫；房內的棟樑必應聲。",
        den: "The stone will cry out of the wall, and the beam out of the woodwork will answer it." }
    ],
    traits: [
      { k: "strength", zh: "聚集萬國歸自己，如陰間不能知足（2:5）", en: "Gathers all nations to himself, insatiable as Sheol (2:5)" },
      { k: "weakness", zh: "在高處搭窩，也不能免災（2:9）", en: "Sets his nest on high, yet cannot escape (2:9)" }
    ],
    lesson: {
      zh: "五個「禍哉」是被掠奪的列國唱的嘲諷詩（2:6），也是對哈巴谷「要到幾時」的另一個回答：這個「要到幾時為止呢」是對掠奪者問的。",
      en: "The five woes are a taunt-song sung by the plundered nations (2:6), and another answer to Habakkuk’s “How long?” — here “How long?” is asked of the plunderer."
    },
    quote: { ref: "2:6",
      zh: "禍哉！迦勒底人，你增添不屬自己的財物",
      en: "Woe to him who increases that which is not his" },
    keyVerses: ["2:5", "2:6", "2:7", "2:8", "2:9", "2:11"],
    intro: {
      zh: "2:5 描寫迦勒底人：因酒詭詐，狂傲，擴充心欲好像陰間，如死不能知足。2:6 開始一首嘲諷詩，由被他掠奪的列國唱出，每一節以「禍哉」或「有禍了」開頭，全章共五次（2:6、9、12、15、19）。第一個禍是對掠奪者：增添不屬自己的財物，多多取人的當頭。結果是反轉：「咬傷你的豈不忽然起來？」（2:7）「因你搶奪許多的國，……所以各國剩下的民都必搶奪你。」（2:8）第二個禍：為本家積蓄不義之財、在高處搭窩、指望免災的（2:9）；「搭窩」的畫面也見於俄巴底亞書 1:4。2:11 的石頭和棟樑呼叫，是說他蓋的房屋本身成為見證。",
      en: "Verse 5 describes the Chaldean: wine is treacherous, he is haughty, enlarges his desire like Sheol, and like death is never satisfied. From 2:6 a taunt-song begins, sung by the nations he plundered, each unit opening with “Woe,” five times in the chapter (2:6, 9, 12, 15, 19). The first woe is on the plunderer: he increases what is not his and enriches himself by extortion. The result is a reversal: “Won’t your debtors rise up suddenly?” (2:7); “Because you have plundered many nations, all the remnant of the peoples will plunder you” (2:8). The second woe is on one who gains evil profit for his house, sets his nest on high, thinking to be safe (2:9); the “nest” image also appears in Obadiah 1:4. In 2:11 the stone and the beam cry out: the house he built bears witness against him."
    },
    tip: {
      zh: "五個「禍哉」是被掠奪者唱的嘲諷詩；經文沒有說這些話是否曾對迦勒底人宣讀。",
      en: "The five woes are a taunt-song of the plundered; the text does not say whether it was ever pronounced to the Chaldeans."
    },
    related: ["chaldeans", "sea_of_knowledge", "cup_of_wrath", "mute_idols"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "sea_of_knowledge", book: "habakkuk", no: 8, kind: "other", type: "heaven", rarity: 5,
    zh: "水充滿洋海", en: "As the Waters Cover the Sea",
    tag: { zh: "認識耶和華榮耀的知識要充滿遍地", en: "The Earth Filled with the Knowledge of Yahweh’s Glory" },
    role: { zh: "第三個「禍哉」與一句應許（2:12-14）", en: "The third woe and a promise (2:12–14)" },
    ch: [2],
    passages: ["2:12-14"],
    moves: [
      { zh: "以人血建城", en: "A Town Built with Blood", ref: "2:12",
        dzh: "以人血建城、以罪孽立邑的有禍了！",
        den: "Woe to him who builds a town with blood, and establishes a city by iniquity!" },
      { zh: "充滿遍地", en: "Filling the Earth", ref: "2:14",
        dzh: "認識耶和華榮耀的知識要充滿遍地，好像水充滿洋海一般。",
        den: "The earth will be filled with the knowledge of Yahweh’s glory, as the waters cover the sea." }
    ],
    traits: [
      { k: "strength", zh: "把審判的盡頭說成一幅更大的畫面", en: "Shows an even larger picture at the end of judgment" },
      { k: "identity", zh: "賽 11:9 有幾乎相同的句子", en: "Isaiah 11:9 has an almost identical line" }
    ],
    lesson: {
      zh: "2:13 說眾民勞碌得來的被火焚燒，是出於萬軍之耶和華；2:14 說最後充滿遍地的不是帝國，而是對耶和華榮耀的認識。",
      en: "Verse 13 says the peoples’ labor goes to the fire, and that this is Yahweh of Armies’ doing; verse 14 says what finally fills the earth is not an empire but the knowledge of Yahweh’s glory."
    },
    quote: { ref: "2:14",
      zh: "認識耶和華榮耀的知識要充滿遍地，好像水充滿洋海一般",
      en: "For the earth will be filled with the knowledge of Yahweh’s glory" },
    keyVerses: ["2:12", "2:13", "2:14"],
    intro: {
      zh: "第三個「禍哉」是對以人血建城的人（2:12）。2:13 的問句，答案是「是」：眾民所勞碌得來的被火焚燒，列國由勞乏而得的歸於虛空，不都是出於萬軍之耶和華嗎？這一切帝國的建設，最後只是「為火而勞碌」。然後 2:14 的一句話像是突然打開一扇窗：「認識耶和華榮耀的知識要充滿遍地，好像水充滿洋海一般。」以賽亞書 11:9 有幾乎相同的句子：「認識耶和華的知識要充滿遍地，好像水充滿洋海一般」，差別在哈巴谷書多了「榮耀的」。這句話放在審判的中間，是這章提供的盼望：審判的目的，不只是推翻迦勒底，而是讓整個地被認識神所充滿。",
      en: "The third woe is on one who builds a town with blood (2:12). The question in 2:13 expects “yes”: isn’t it of Yahweh of Armies that the peoples labor for the fire, and the nations weary themselves for vanity? All these imperial building projects end in “labor for the fire.” Then 2:14 opens like a window: “For the earth will be filled with the knowledge of Yahweh’s glory, as the waters cover the sea.” Isaiah 11:9 has an almost identical line — “the earth will be full of the knowledge of Yahweh, as the waters cover the sea” — except that Habakkuk adds “glory.” Placed in the middle of judgment, this is the hope the chapter offers: the aim of judgment is not only to overthrow the Chaldeans but that the whole earth be filled with knowing God."
    },
    tip: {
      zh: "哈巴谷書 2:14 與以賽亞書 11:9 用詞幾乎相同，只差「榮耀的」三個字；兩處彼此的關係，經文沒有說明。",
      en: "Habakkuk 2:14 and Isaiah 11:9 are almost the same, differing only by “glory”; the text does not say how the two relate."
    },
    related: ["woes_plunder", "cup_of_wrath", "mute_idols", "from_teman"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "cup_of_wrath", book: "habakkuk", no: 9, kind: "other", type: "power", rarity: 3,
    zh: "耶和華右手的杯", en: "The Cup in Yahweh’s Right Hand",
    tag: { zh: "「你也喝吧」", en: "“You Also Drink”" },
    role: { zh: "第四個「禍哉」（2:15-17）", en: "The fourth woe (2:15–17)" },
    ch: [2],
    passages: ["2:15-17"],
    moves: [
      { zh: "灌醉鄰舍", en: "Making the Neighbor Drunk", ref: "2:15",
        dzh: "有禍了！那灌醉鄰舍，好看他出醜的人。",
        den: "Woe to him who gives his neighbor drink until they are drunk, so that he may gaze at their naked bodies!" },
      { zh: "傳到你那裡", en: "It Comes Around to You", ref: "2:16",
        dzh: "耶和華右手的杯必傳到你那裡；你的榮耀就變為大大地羞辱。",
        den: "The cup of Yahweh’s right hand will come around to you, and disgrace will cover your glory." }
    ],
    traits: [
      { k: "strength", zh: "用酒與強權壓住鄰國", en: "Overpowers neighbors with wine and force" },
      { k: "weakness", zh: "杯最後輪到自己", en: "The cup comes round to him in the end" }
    ],
    lesson: {
      zh: "「你也喝吧」（2:16）是這一章的審判原則：施羞辱的人，要被羞辱。他向黎巴嫩施的強暴，也要遮蓋他（2:17）。",
      en: "“You will also drink” (2:16) is the chapter’s principle of judgment: the one who shames will be shamed. The violence done to Lebanon will overwhelm him (2:17)."
    },
    quote: { ref: "2:16",
      zh: "耶和華右手的杯必傳到你那裡；你的榮耀就變為大大地羞辱",
      en: "The cup of Yahweh’s right hand will come around to you" },
    keyVerses: ["2:15", "2:16", "2:17"],
    intro: {
      zh: "第四個「禍哉」對象是用酒羞辱鄰舍的人：「給人酒喝、又加上毒物、使他喝醉、好看見他下體的有禍了！」（2:15）這是在說征服者對列國的羞辱。2:16 把杯子轉過來：「你也喝吧，顯出是未受割禮的！耶和華右手的杯必傳到你那裡」。「杯」在聖經別處也用來比喻審判。2:17 的「黎巴嫩」與「驚嚇野獸」，可以指砍伐林木、獵殺野獸，也可以指對那地的征服，經文沒有說明；結尾與 2:8 同樣：「因你殺人流血，向國內的城並城中一切居民施行強暴」。",
      en: "The fourth woe is on one who shames a neighbor with wine: “Woe to him who gives his neighbor drink, pouring your inflaming wine until they are drunk, so that you may gaze at their naked bodies!” (2:15). It speaks of a conqueror’s humiliation of nations. Verse 16 turns the cup around: “You will also drink, and be exposed! The cup of Yahweh’s right hand will come around to you.” The “cup” is used elsewhere in the Bible as a figure for judgment. In 2:17 “Lebanon” and “the destruction of the animals” could mean felling forests and killing animals, or the conquest of that land; the text does not say; the verse closes just as 2:8 did: “because of men’s blood, and for the violence done to the land.”"
    },
    tip: {
      zh: "2:17 的「黎巴嫩」與「野獸」，可指砍伐林木、獵殺野獸，也可指對該地的征服；經文沒有說明。",
      en: "“Lebanon” and “the animals” in 2:17 may mean felling forests and hunting, or the conquest of that land; the text does not say."
    },
    related: ["woes_plunder", "mute_idols", "sea_of_knowledge", "chaldeans"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "mute_idols", book: "habakkuk", no: 10, kind: "other", type: "wisdom", rarity: 3,
    zh: "啞巴偶像與聖殿裡的耶和華", en: "Mute Idols, Silent Earth",
    tag: { zh: "全地的人都當肅敬靜默", en: "Let All the Earth Be Silent Before Him" },
    role: { zh: "第五個「禍哉」與第 2 章的結尾（2:18-20）", en: "The fifth woe and the close of chapter 2 (2:18–20)" },
    ch: [2],
    passages: ["2:18-20"],
    moves: [
      { zh: "對木偶說：醒起！", en: "“Awake!” to Wood", ref: "2:19",
        dzh: "對木偶說「醒起」、對啞巴石像說「起來」的人有禍了！",
        den: "Woe to him who says to the wood, ‘Awake!’ or to the mute stone, ‘Arise!’" },
      { zh: "全地肅敬靜默", en: "All the Earth Silent", ref: "2:20",
        dzh: "惟耶和華在他的聖殿中；全地的人都當在他面前肅敬靜默。",
        den: "But Yahweh is in his holy temple. Let all the earth be silent before him!" }
    ],
    traits: [
      { k: "strength", zh: "真神在殿中，不需要人叫醒", en: "The true God is in his temple and needs no waking" },
      { k: "weakness", zh: "偶像「其中毫無氣息」（2:19）", en: "The idol has “no breath at all within it” (2:19)" }
    ],
    lesson: {
      zh: "人對偶像說「醒起」，是人在說話；對真神，人要「靜默」（2:19-20）。偶像是「虛謊的師傅」（2:18），聖殿裡的耶和華才是說話的。",
      en: "To an idol, people must say “Awake!” — the human does the talking; before the true God, the whole earth must be silent (2:19–20). The idol is a “teacher of lies” (2:18), while Yahweh in his temple is the one who speaks."
    },
    quote: { ref: "2:20",
      zh: "惟耶和華在他的聖殿中；全地的人都當在他面前肅敬靜默",
      en: "But Yahweh is in his holy temple. Let all the earth be silent before him!" },
    keyVerses: ["2:18", "2:19", "2:20"],
    intro: {
      zh: "第五個「禍哉」是對拜偶像的人。2:18：雕刻的偶像，人將它刻出來，有甚麼益處呢？鑄造的偶像就是虛謊的師傅，製造者倚靠這啞巴偶像有甚麼益處呢？2:19：對木偶說「醒起」，對啞巴石像說「起來」；它是包裹金銀的，其中毫無氣息。對比是 2:20：「惟耶和華在他的聖殿中；全地的人都當在他面前肅敬靜默。」這一句像是為整個第 2 章蓋上印章：五個禍之後，沒有再辯論，只剩靜默。這句話與詩篇 46:10「你們要休息，要知道我是神」有相近的呼召，但用字不同。",
      en: "The fifth woe is on idolaters. Verse 18: what value does the engraved image have, that its maker has engraved it, the molten image, the teacher of lies, that he who fashions it trusts in it, to make mute idols? Verse 19: woe to him who says to the wood, “Awake!” or to the mute stone, “Arise!” — it is overlaid with gold and silver, and there is no breath at all within it. The contrast is 2:20: “But Yahweh is in his holy temple. Let all the earth be silent before him!” This verse stamps a seal on the whole of chapter 2: after five woes, there is no more arguing, only silence. It has a call similar to Psalm 46:10, “Be still, and know that I am God,” though the wording differs."
    },
    tip: {
      zh: "「他的聖殿」是耶路撒冷的聖殿還是天上的殿，經文沒有說明；2:20 與詩篇 46:10 的呼召相近，用字不同。",
      en: "Whether “his holy temple” is the one in Jerusalem or the heavenly one the text does not say; 2:20 and Psalm 46:10 share a similar call in different words."
    },
    related: ["cup_of_wrath", "woes_plunder", "sea_of_knowledge", "prayer_revive"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "prayer_revive", book: "habakkuk", no: 11, kind: "other", type: "faith", rarity: 3,
    zh: "復興你的作為", en: "Renew Your Work",
    tag: { zh: "在發怒的時候以憐憫為念", en: "In Wrath, Remember Mercy" },
    role: { zh: "第 3 章的禱告（3:1-2）", en: "The prayer of chapter 3 (3:1–2)" },
    ch: [3],
    passages: ["3:1-2"],
    moves: [
      { zh: "復興你的作為", en: "Renew Your Work", ref: "3:2",
        dzh: "耶和華啊，我聽見你的名聲就懼怕；求你在這些年間復興你的作為。",
        den: "Yahweh, I have heard of your fame; I stand in awe of your deeds. Renew your work in the middle of the years." },
      { zh: "以憐憫為念", en: "Remember Mercy", ref: "3:2",
        dzh: "在發怒的時候以憐憫為念。",
        den: "In wrath, you remember mercy." }
    ],
    traits: [
      { k: "strength", zh: "從神過去的作為禱告到現在", en: "Prays from God’s past deeds into the present" },
      { k: "identity", zh: "這是一首要唱的禱告（3:1、19）", en: "A prayer meant to be sung (3:1, 19)" }
    ],
    lesson: {
      zh: "第 3 章的禱告從「聽見」開始：哈巴谷的懼怕，來自記得神過去做過的事；然後他才求「在這些年間」再顯明出來（3:2）。",
      en: "The prayer of chapter 3 begins with “heard”: Habakkuk’s awe comes from remembering what God has done; only then does he ask that it be made known “in the middle of the years” (3:2)."
    },
    quote: { ref: "3:2",
      zh: "在發怒的時候以憐憫為念",
      en: "In wrath, you remember mercy." },
    keyVerses: ["3:1", "3:2"],
    intro: {
      zh: "第 3 章的標題是：「先知哈巴谷的禱告，調用流離歌。」（3:1）這是一首要配上曲調唱出來的禱告，結尾也有音樂的註明：「這歌交與伶長，用絲弦的樂器」（3:19）。3:2 是這禱告的中心：「耶和華啊，我聽見你的名聲（或譯：言語）就懼怕。耶和華啊，求你在這些年間復興你的作為，在這些年間顯明出來；在發怒的時候以憐憫為念。」前兩章裡，他問神為甚麼不作為；這裡他不再質問，而是求神作為。「在這些年間」說了兩次，意思是在眼前這段時間，不是在遙遠的將來。",
      en: "The heading of chapter 3 is: “A prayer of Habakkuk, the prophet, set to victorious music” (3:1). It is a prayer to be sung to a tune, and the closing line has a musical note too: “For the music director, on my stringed instruments” (3:19). Verse 2 is its center: “Yahweh, I have heard of your fame. I stand in awe of your deeds, Yahweh. Renew your work in the middle of the years. In the middle of the years make it known. In wrath, you remember mercy.” In the first two chapters he asked why God did not act; here he no longer cross-examines but asks God to act. “In the middle of the years” is said twice, meaning in the present stretch of time, not in a distant future."
    },
    tip: {
      zh: "3:1 的「流離歌」是音樂用語，意思不確定：和合本與 WEB（“set to victorious music”）譯法不同。「細拉」（3:3、9、13）也是音樂符號，意思不確定。",
      en: "The musical term of 3:1 is uncertain: the CUV gives “流離歌” while the WEB has “set to victorious music.” “Selah” (3:3, 9, 13) is likewise a musical mark of uncertain meaning."
    },
    related: ["habakkuk", "from_teman", "warrior_rides", "yet_rejoice"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "from_teman", book: "habakkuk", no: 12, kind: "other", type: "heaven", rarity: 4,
    zh: "神從提幔而來", en: "God Came from Teman",
    tag: { zh: "他的輝煌如同日光", en: "His Splendor Like the Sunrise" },
    role: { zh: "榮光的顯現（3:3-7）", en: "The appearing of glory (3:3–7)" },
    ch: [3],
    passages: ["3:3-7"],
    moves: [
      { zh: "從提幔、巴蘭山", en: "From Teman and Paran", ref: "3:3",
        dzh: "神從提幔而來，聖者從巴蘭山臨到；他的榮光遮蔽諸天。",
        den: "God came from Teman, the Holy One from Mount Paran; his glory covered the heavens." },
      { zh: "手中的光線", en: "Rays from His Hand", ref: "3:4",
        dzh: "他的輝煌如同日光；從他手裡射出光線，在其中藏著他的能力。",
        den: "His splendor is like the sunrise; rays shine from his hand, where his power is hidden." }
    ],
    traits: [
      { k: "strength", zh: "能力藏在手中的光線裡", en: "His power is hidden in the rays from his hand" },
      { k: "identity", zh: "瘟疫與熱症隨行（3:5）", en: "Plague and pestilence accompany him (3:5)" }
    ],
    lesson: {
      zh: "哈巴谷用古老的地名說神：提幔、巴蘭山（3:3）。申命記 33:2 記著耶和華「從西奈而來，從西珥向他們顯現，從巴蘭山發出光輝」，這是以色列對神「從南方來」的老記憶。",
      en: "Habakkuk speaks of God with ancient place names: Teman and Mount Paran (3:3). Deuteronomy 33:2 says Yahweh “came from Sinai, and rose from Seir… He shone from Mount Paran,” Israel’s old memory of God coming from the south."
    },
    quote: { ref: "3:4",
      zh: "他的輝煌如同日光；從他手裡射出光線，在其中藏著他的能力",
      en: "Rays shine from his hand, where his power is hidden." },
    keyVerses: ["3:3", "3:4", "3:5", "3:6", "3:7"],
    intro: {
      zh: "3:3：「神從提幔而來；聖者從巴蘭山臨到。（細拉）他的榮光遮蔽諸天；頌讚充滿大地。」提幔和巴蘭山在猶大南方，通往西奈的方向；申命記 33:2 有相近的畫面：耶和華從西奈而來，從西珥向他們顯現，從巴蘭山發出光輝。3:4 說他的輝煌如同日光，從他手裡射出光線，能力就藏在其中。3:5 說在他前面有瘟疫，在他腳下有熱症。3:6：「他站立，量了大地（或譯：使地震動），觀看，趕散萬民。」古老的山嶺崩裂，3:7 又說古珊的帳棚遭難，米甸的幔子戰兢。「古珊」是誰，經文沒有說明；米甸則是摩西逃亡之地（出 2:15）與基甸擊敗的民族。",
      en: "Verse 3: “God came from Teman, the Holy One from Mount Paran. Selah. His glory covered the heavens, and his praise filled the earth.” Teman and Mount Paran lie south of Judah, toward Sinai; Deuteronomy 33:2 has a similar picture: Yahweh came from Sinai, rose from Seir, shone from Mount Paran. Verse 4 says his splendor is like the sunrise, with rays from his hand where his power is hidden. Verse 5: plague went before him and pestilence followed his feet. Verse 6: “He stood, and shook the earth (the CUV note: or ‘measured the earth’). He looked, and made the nations tremble.” Ancient mountains crumble; verse 7 adds that the tents of Cushan are in affliction and the dwellings of Midian tremble. Who “Cushan” is the text does not say; Midian was where Moses fled (Exod 2:15) and the people Gideon defeated."
    },
    tip: {
      zh: "3:6 的「量了大地」和「使地震動」是和合本註所列的兩種譯法；「古珊」指誰，經文沒有說明。",
      en: "3:6 can be rendered “measured the earth” or “shook the earth” (the CUV note lists both); who “Cushan” is the text does not say."
    },
    related: ["prayer_revive", "warrior_rides", "sea_of_knowledge", "yet_rejoice"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "warrior_rides", book: "habakkuk", no: 13, kind: "other", type: "power", rarity: 4,
    zh: "乘馬踐踏海", en: "The Warrior Rides the Sea",
    tag: { zh: "你出來要拯救你的百姓", en: "You Went Out for the Salvation of Your People" },
    role: { zh: "神的出戰（3:8-15）", en: "God goes to war (3:8–15)" },
    ch: [3],
    passages: ["3:8-15"],
    moves: [
      { zh: "乘在馬上", en: "Riding His Horses", ref: "3:8",
        dzh: "耶和華啊，你乘在馬上，坐在得勝的車上，豈是向江河發怒氣嗎？",
        den: "Was Yahweh displeased with the rivers, that you rode on your horses, on your chariots of salvation?" },
      { zh: "拯救你的百姓", en: "Saving Your People", ref: "3:13",
        dzh: "你出來要拯救你的百姓，拯救你的受膏者。",
        den: "You went out for the salvation of your people, for the salvation of your anointed." }
    ],
    traits: [
      { k: "strength", zh: "江河、深淵、日月都在祂面前（3:8-11）", en: "Rivers, deep, sun and moon all answer him (3:8–11)" },
      { k: "identity", zh: "「受膏者」可指王或百姓（3:13）", en: "The “anointed” may be the king or the people (3:13)" }
    ],
    lesson: {
      zh: "神的出戰是為了「拯救你的百姓」（3:13）；水、山、日、月都是祂的見證，不是祂的對手。這是對 1:2「你不拯救」的回答。",
      en: "God’s going to war is “for the salvation of your people” (3:13); waters, mountains, sun and moon are his witnesses, not his rivals. It answers 1:2, “will you not save?”"
    },
    quote: { ref: "3:13",
      zh: "你出來要拯救你的百姓，拯救你的受膏者",
      en: "You went out for the salvation of your people, for the salvation of your anointed." },
    keyVerses: ["3:8", "3:10", "3:11", "3:13", "3:15"],
    intro: {
      zh: "3:8-15 把神描寫成一位戰士：乘在馬上，坐在得勝的車上（3:8）；顯露祂的弓（3:9）；山嶺見祂無不戰懼，深淵發聲，洶湧翻騰（3:10）；日月在本宮停住（3:11）；祂發忿恨通行大地，如同打糧（3:12）。有人認為 3:11 讓人想起約書亞記 10:12-13 的日月停住，也有人讀作風暴與閃電的描寫。3:13 是中心：「你出來要拯救你的百姓，拯救你的受膏者」；「受膏者」指王（如大衛的後裔），還是指百姓，說法不一。3:15：「你乘馬踐踏紅海，就是踐踏洶湧的大水」；和合本作「紅海」，WEB 只說「the sea」，原文是「海」，是否特指出埃及的紅海，是讀經者的判斷。",
      en: "Verses 8–15 picture God as a warrior: riding his horses and chariots of salvation (3:8); uncovering his bow (3:9); the mountains see him and are afraid, the deep roars and lifts its hands (3:10); the sun and moon stand still (3:11); he marches through the land in wrath and threshes the nations (3:12). Some think 3:11 recalls the sun and moon standing still in Joshua 10:12–13; others read it as a storm-and-lightning picture. Verse 13 is the center: “You went out for the salvation of your people, for the salvation of your anointed.” Whether “anointed” means the king (such as David’s line) or the people is disputed. Verse 15: “You trampled the sea with your horses, churning mighty waters.” The CUV has “紅海” (Red Sea) where the WEB says only “the sea”; the Hebrew has “sea,” and whether it points specifically to the Exodus is a reader’s judgment."
    },
    tip: {
      zh: "3:15 的「紅海」是和合本的譯法，WEB 只作「the sea」；「受膏者」（3:13）指王或百姓，各解不一。",
      en: "“Red Sea” in 3:15 is the CUV’s wording while the WEB has only “the sea”; the “anointed” of 3:13 is read as the king or the people."
    },
    related: ["from_teman", "prayer_revive", "yet_rejoice", "chaldeans"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "yet_rejoice", book: "habakkuk", no: 14, kind: "other", type: "harvest", rarity: 5,
    zh: "然而，我要因耶和華歡欣", en: "Yet I Will Rejoice",
    tag: { zh: "雖然無花果樹不發旺", en: "Though the Fig Tree Doesn’t Flourish" },
    role: { zh: "全書的結尾（3:16-19）", en: "The close of the book (3:16–19)" },
    ch: [3],
    passages: ["3:16-19"],
    moves: [
      { zh: "安靜等候", en: "Waiting Quietly", ref: "3:16",
        dzh: "我聽見，身體戰兢，骨中朽爛；我只可安靜等候災難之日。",
        den: "I heard, and my body trembled; rottenness enters my bones; I must wait quietly for the day of trouble." },
      { zh: "然而，歡欣", en: "Yet, Rejoicing", ref: "3:17-18",
        dzh: "雖然無花果樹不發旺，田地不出糧食，然而，我要因耶和華歡欣。",
        den: "Though the fig tree doesn’t flourish and the fields yield no food, yet I will rejoice in Yahweh." }
    ],
    traits: [
      { k: "strength", zh: "身體發抖，仍然歡欣——兩樣並存", en: "Trembling and rejoicing, both at once" },
      { k: "identity", zh: "腳快如母鹿的蹄（3:19；詩 18:33）", en: "Feet like a deer’s (3:19; Ps 18:33)" }
    ],
    lesson: {
      zh: "3:17 把一個農家所有的收成列出來：無花果、葡萄、橄欖、田地、羊、牛，一樣一樣都沒有；然後是「然而」。哈巴谷沒有說這些會恢復，他說的是即使不恢復也要歡欣（3:18）。",
      en: "Verse 17 lists every harvest of a farm — fig, vine, olive, field, flock, herd — each one failing; then comes “yet.” Habakkuk does not say they will be restored; he says he will rejoice even if they are not (3:18)."
    },
    quote: { ref: "3:18",
      zh: "然而，我要因耶和華歡欣，因救我的神喜樂",
      en: "yet I will rejoice in Yahweh. I will be joyful in the God of my salvation!" },
    keyVerses: ["3:16", "3:17", "3:18", "3:19"],
    intro: {
      zh: "禱告的結尾回到先知自己：「我聽見耶和華的聲音，身體戰兢，嘴唇發顫，骨中朽爛；我在所立之處戰兢。我只可安靜等候災難之日臨到，犯境之民上來。」（3:16）前面他問「要到幾時」，現在他願意「安靜等候」。然後是全書最有名的一段：「雖然無花果樹不發旺，葡萄樹不結果，橄欖樹也不效力，田地不出糧食，圈中絕了羊，棚內也沒有牛；然而，我要因耶和華歡欣，因救我的神喜樂。」（3:17-18）最後是 3:19：「主耶和華是我的力量；他使我的腳快如母鹿的蹄，又使我穩行在高處。」同一句也出現在詩篇 18:33。「這歌交與伶長，用絲弦的樂器」，說明它是在敬拜中歌唱的。",
      en: "The prayer ends back with the prophet himself: “I heard, and my body trembled. My lips quivered at the voice. Rottenness enters into my bones, and I tremble in my place, because I must wait quietly for the day of trouble, for the coming up of the people who invade us” (3:16). Earlier he asked “How long?”; now he is willing to “wait quietly.” Then comes the book’s best-known passage: “For though the fig tree doesn’t flourish, nor fruit be in the vines; the labor of the olive fails, the fields yield no food; the flocks are cut off from the fold, and there is no herd in the stalls: yet I will rejoice in Yahweh. I will be joyful in the God of my salvation!” (3:17–18). Last is 3:19: “Yahweh, the Lord, is my strength. He makes my feet like deer’s feet, and enables me to go in high places.” The same line appears in Psalm 18:33. “For the music director, on my stringed instruments” shows it was sung in worship."
    },
    tip: {
      zh: "3:17-19 沒有說「災難會過去」；它說的是「然而」：在一切都落空的日子，仍要歡欣。",
      en: "3:17–19 does not say “the trouble will pass”; it says “yet”: to rejoice on the day when everything has failed."
    },
    related: ["habakkuk", "watch_post", "righteous_by_faith", "prayer_revive", "warrior_rides"]
  }

);
