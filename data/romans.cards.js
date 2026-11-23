// 聖經人物卡 · 羅馬書 (Romans) — book info + cards.
// Verse text comes from data/romans.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/romans.ccb.js (with a placeholder for 14:24-26); `quote.zh` / `quote.en` are excerpts that scripts/validate.js
// checks against the first two. External references (Hab 2:4; Gen 15:6; Ps 14:1-3; Acts 18:2-3; Acts 20:2-3) appear in prose only.
// Flagged rather than decided: how to translate "hilasterion" in 3:25, who the "I" of 7:7-25 is, how "all Israel" in 11:26 is
// read, what "sin entered… all sinned" in 5:12 implies, whether 8:28 is "all things work together" or "God works all things",
// whether Junia (16:7) was a woman and an apostle, and how 13:1-7 applies today.

window.BOOKS.push({
  id: "romans",
  zh: "羅馬書", en: "Romans", abbr: { zh: "羅", en: "Rom" },
  order: 45, section: { zh: "書信", en: "Epistles" },
  chapters: 16,
  fan: ["no_condemnation", "paul_romans", "nothing_separates"],
  summary: {
    zh: "羅馬書是保羅寫給還沒有去過的羅馬教會的長信，他準備往西班牙去，要先使他們認識他所傳的福音（1:1、15:24）。主題在 1:16-17：福音「本是神的大能，要救一切相信的」，「神的義」本於信。第 1-3 章：外邦人和猶太人都在罪裡，「沒有義人，連一個也沒有」（3:10）。第 3-5 章：「如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義」（3:24），亞伯拉罕是榜樣，亞當與基督作對比。第 6-8 章：新生命、與罪的爭戰、聖靈，最後是「那些在基督耶穌裡的就不定罪了」（8:1）和「都不能叫我們與神的愛隔絕」（8:39）。第 9-11 章：以色列的問題與橄欖樹的比喻。第 12-15 章：活祭、彼此相愛、強弱的弟兄。第 16 章：一長串問安的名字。",
    en: "Romans is Paul’s long letter to a church in Rome he has not yet visited, written as he prepares to go on to Spain and wants them to know the gospel he preaches (1:1; 15:24). The theme is 1:16–17: the gospel “is the power of God for salvation for everyone who believes,” and “God’s righteousness” is from faith. Chapters 1–3: Gentiles and Jews alike are under sin, “There is no one righteous; no, not one” (3:10). Chapters 3–5: “being justified freely by his grace through the redemption that is in Christ Jesus” (3:24), with Abraham as the example and Adam contrasted with Christ. Chapters 6–8: new life, the struggle with sin, the Spirit, ending with “no condemnation to those who are in Christ Jesus” (8:1) and “nothing will be able to separate us from God’s love” (8:39). Chapters 9–11: the question of Israel and the olive tree. Chapters 12–15: the living sacrifice, love, the weak and the strong. Chapter 16: a long list of greetings."
  },
  outline: [
    { zh: "保羅的問安；福音的大能；人的罪", en: "Paul’s greeting; the power of the gospel; humanity’s sin" },
    { zh: "神公義的審判；猶太人與律法", en: "God’s righteous judgment; Jews and the law" },
    { zh: "沒有義人；因信稱義；挽回祭", en: "None righteous; justification by faith; the atoning sacrifice" },
    { zh: "亞伯拉罕的信", en: "Abraham’s faith" },
    { zh: "與神相和；亞當與基督", en: "Peace with God; Adam and Christ" },
    { zh: "向罪死，向神活", en: "Dead to sin, alive to God" },
    { zh: "律法與罪；「我真是苦啊」", en: "The law and sin; “What a wretched man I am”" },
    { zh: "不定罪；聖靈與兒子的名分；愛不能隔絕", en: "No condemnation; the Spirit and adoption; love cannot be severed" },
    { zh: "保羅為以色列的憂愁；神的揀選", en: "Paul’s sorrow for Israel; God’s choosing" },
    { zh: "以色列與福音", en: "Israel and the gospel" },
    { zh: "橄欖樹；神的智慧深哉", en: "The olive tree; the depth of God’s wisdom" },
    { zh: "活祭；肢體各有不同；愛與和睦", en: "A living sacrifice; many members; love and peace" },
    { zh: "順服掌權的；愛完全了律法", en: "Governing authorities; love fulfills the law" },
    { zh: "強弱的弟兄；神的國不在乎吃喝", en: "The weak and the strong; the Kingdom not eating and drinking" },
    { zh: "彼此接納；保羅的計劃", en: "Accept one another; Paul’s plans" },
    { zh: "非比；問安的名單；德丟", en: "Phoebe; the list of greetings; Tertius" }
  ],
  notes: {
    zh: "小提示：羅馬書常被視為保羅書信中論述最完整的一卷。保羅在寫這信時多半在哥林多（參徒 20:2-3；羅 16:23 的該猶和以拉都在那裡），由非比送去羅馬（16:1-2）。「因信稱義」的意思，歷代各傳統有許多討論；卡片只呈現經文所說，與有爭議的地方。",
    en: "Good to know: Romans is often seen as the most carefully argued of Paul’s letters. He probably wrote it in Corinth (compare Acts 20:2–3; Gaius and Erastus of 16:23 were there), and Phoebe carried it to Rome (16:1–2). What “justification by faith” means has been much discussed by various traditions; the cards present what the text says and flag the disputed points."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_romans", book: "romans", no: 1, kind: "person", type: "wisdom", rarity: 6,
    zh: "保羅（羅馬書的作者）", en: "Paul, Author of Romans",
    tag: { zh: "奉召為使徒，特派傳神的福音", en: "Called to Be an Apostle, Set Apart for the Gospel" },
    role: { zh: "寫信給還沒有見過的教會", en: "Writes to a church he has not yet met" },
    ch: [1, 15, 16],
    passages: ["1:1-7", "15:14-33", "16:22"],
    moves: [
      { zh: "耶穌基督的僕人", en: "A Servant of Jesus Christ", ref: "1:1",
        dzh: "耶穌基督的僕人保羅，奉召為使徒，特派傳神的福音。",
        den: "Paul, a servant of Jesus Christ, called to be an apostle, set apart for the Good News of God." },
      { zh: "代筆的德丟", en: "Tertius the Scribe", ref: "16:22",
        dzh: "我這代筆寫信的德丟，在主裡面問你們安。",
        den: "I, Tertius, who write the letter, greet you in the Lord." }
    ],
    traits: [
      { k: "strength", zh: "把福音完整地說出來的人", en: "Sets out the gospel as a whole" },
      { k: "identity", zh: "「僕人」「使徒」「特派」三個稱呼", en: "Three titles: “servant,” “apostle,” “set apart”" }
    ],
    lesson: {
      zh: "保羅在這封信的開頭，把自己放在「耶穌基督的僕人」之下（1:1），在結尾讓代筆的德丟插一句問安（16:22）。信的中間，是他一生最完整的一次論述；它的目的是要使羅馬的教會成為他往西班牙去的支持（15:24）。",
      en: "Paul opens the letter placing himself under “a servant of Jesus Christ” (1:1), and at the end lets the scribe Tertius slip in his own greeting (16:22). In the middle is the most complete argument of his career, written to make the church in Rome a support for his journey to Spain (15:24)."
    },
    quote: { ref: "1:1",
      zh: "耶穌基督的僕人保羅，奉召為使徒，特派傳神的福音",
      en: "Paul, a servant of Jesus Christ, called to be an apostle, set apart for the Good News of God" },
    keyVerses: ["1:1", "1:5", "1:15", "1:16", "15:24", "16:1", "16:22"],
    intro: {
      zh: "羅馬書 1:1-7 是一個長長的問安，保羅在這裡說明他所傳的福音，是神藉先知在聖經上所應許的，是關於他兒子耶穌基督的（1:2-4）。他還沒有去過羅馬，卻說「我也願意盡我的力量向你們傳福音」（1:15）。15:22-24 說他計劃往西班牙去，路過時要見他們。16:22 的代筆者德丟，是保羅書信中唯一一位在信裡自己問安的代筆者。",
      en: "Romans 1:1–7 is a long greeting in which Paul states that the gospel he preaches was promised by God through the prophets in the Scriptures and concerns his Son Jesus Christ (1:2–4). He has not been to Rome, yet says, “I am eager to preach the Good News to you also” (1:15). In 15:22–24 he plans to go to Spain and see them on the way. Tertius in 16:22 is the only scribe in Paul’s letters who sends a greeting of his own within the letter."
    },
    tip: {
      zh: "保羅在哪裡寫羅馬書，書信沒有直接說；多半認為在哥林多，這是從 16:23 和使徒行傳 20:2-3 推測的。",
      en: "Where Paul wrote Romans the letter does not say directly; Corinth is the common view, inferred from 16:23 and Acts 20:2–3."
    },
    related: ["power_of_gospel", "righteousness_apart_law", "no_condemnation", "phoebe_and_friends"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "power_of_gospel", book: "romans", no: 2, kind: "other", type: "power", rarity: 5,
    zh: "福音的大能", en: "The Power of the Gospel",
    tag: { zh: "我不以福音為恥", en: "I Am Not Ashamed of the Gospel" },
    role: { zh: "全書的主題（1:16-17）", en: "The theme of the whole letter (1:16–17)" },
    ch: [1],
    passages: ["1:16-17"],
    moves: [
      { zh: "神的大能", en: "The Power of God", ref: "1:16",
        dzh: "我不以福音為恥；這福音本是神的大能，要救一切相信的，先是猶太人，後是希臘人。",
        den: "“I am not ashamed of the Good News… it is the power of God for salvation for everyone who believes; for the Jew first, and also for the Greek.”" },
      { zh: "義人必因信得生", en: "The Righteous Shall Live by Faith", ref: "1:17",
        dzh: "神的義正在這福音上顯明出來；這義是本於信，以至於信。如經上所記：義人必因信得生。",
        den: "In it is revealed God’s righteousness from faith to faith. As it is written, “But the righteous shall live by faith.”" }
    ],
    traits: [
      { k: "strength", zh: "「大能」（dunamis）用在福音上，不是用在人身上", en: "“Power” (dunamis) attaches to the gospel, not to people" },
      { k: "identity", zh: "引用哈巴谷書 2:4", en: "Cites Habakkuk 2:4" }
    ],
    lesson: {
      zh: "「我不以福音為恥」（1:16）是在羅馬帝國的首都說的。福音在這裡不是一套道理，而是「神的大能」；它救的對象是「一切相信的」，次序是「先是猶太人，後是希臘人」。1:17 引用的哈巴谷書 2:4，就是我們在哈巴谷書卡上所見的那一句。",
      en: "“I am not ashamed of the Good News” (1:16) is said in the capital of the Roman empire. The gospel here is not a set of ideas but “the power of God”; it saves “everyone who believes,” in the order “the Jew first, and also the Greek.” Habakkuk 2:4, cited in 1:17, is the line met on the Habakkuk cards."
    },
    quote: { ref: "1:16",
      zh: "這福音本是神的大能，要救一切相信的",
      en: "it is the power of God for salvation for everyone who believes" },
    keyVerses: ["1:14", "1:15", "1:16", "1:17", "1:18"],
    intro: {
      zh: "1:14-15 保羅說自己對希臘人和化外人、聰明人和愚拙人都欠債。接著是 1:16-17：「我不以福音為恥；這福音本是神的大能，要救一切相信的，先是猶太人，後是希臘人。因為神的義正在這福音上顯明出來；這義是本於信，以至於信。」「神的義」是甚麼：神自己的公義、神給人的義的身分，或兩者，是羅馬書最有爭論的詞之一。1:18 轉向「神的忿怒從天上顯明在一切不虔不義的人身上」。",
      en: "In 1:14–15 Paul says he is a debtor to Greeks and barbarians, to wise and to foolish. Then 1:16–17: “For I am not ashamed of the Good News of Christ, because it is the power of God for salvation for everyone who believes; for the Jew first, and also for the Greek. For in it is revealed God’s righteousness from faith to faith.” What “God’s righteousness” is — God’s own justice, the righteous standing God gives, or both — is one of the most debated phrases in Romans. Verse 18 turns to “God’s wrath is revealed from heaven against all ungodliness and unrighteousness of men.”"
    },
    tip: {
      zh: "「神的義」是神自己的公義、給人的義，還是兩者，各傳統有不同強調。",
      en: "Whether “God’s righteousness” is God’s own justice, the righteousness he gives, or both traditions emphasize differently."
    },
    related: ["paul_romans", "no_one_righteous", "righteousness_apart_law", "abraham_faith"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "no_one_righteous", book: "romans", no: 3, kind: "other", type: "scheme", rarity: 3,
    zh: "沒有義人，連一個也沒有", en: "No One Righteous, Not One",
    tag: { zh: "猶太人和希臘人都在罪惡之下", en: "Jews and Greeks Alike Are Under Sin" },
    role: { zh: "人類的處境（1:18-3:20）", en: "The human condition (1:18–3:20)" },
    ch: [1, 2, 3],
    passages: ["1:18-32", "3:9-20"],
    moves: [
      { zh: "都偏離正路", en: "All Turned Away", ref: "3:10-12",
        dzh: "就如經上所記：沒有義人，連一個也沒有；沒有明白的，沒有尋求神的；都是偏離正路，一同變為無用。",
        den: "“There is no one righteous; no, not one. There is no one who understands. There is no one who seeks after God. They have all turned away.”" },
      { zh: "口都被塞住", en: "Every Mouth Stopped", ref: "3:19-20",
        dzh: "律法所說的話，是對律法以下的人說的，叫各人的口都被塞住，普世的人都伏在神的審判之下。",
        den: "“What things the law says, it speaks to those who are under the law, that every mouth may be closed, and all the world may be brought under the judgment of God.”" }
    ],
    traits: [
      { k: "strength", zh: "把「所有人」都說進去，沒有例外", en: "Includes “everyone,” no exceptions" },
      { k: "weakness", zh: "「憑律法行事，沒有一個人能在神面前稱義」（3:20）", en: "“By the works of the law, no flesh will be justified” (3:20)" }
    ],
    lesson: {
      zh: "保羅先寫外邦人的罪（1:18-32），再轉向自以為義的人（2:1），再論猶太人和律法（2:17-3:8），最後把所有人放在一起（3:9-20）。他連用舊約的話（詩 14、53 等）說明：不是少數人的問題。",
      en: "Paul first writes of the Gentiles’ sin (1:18–32), then turns to the self-righteous (2:1), then to Jews and the law (2:17–3:8), and finally puts everyone together (3:9–20). He strings Old Testament sayings (Psalms 14, 53 and others) to show it is not a problem of a few."
    },
    quote: { ref: "3:10",
      zh: "沒有義人，連一個也沒有",
      en: "There is no one righteous; no, not one." },
    keyVerses: ["1:18", "1:21", "2:1", "2:11", "3:9", "3:10", "3:19", "3:20"],
    intro: {
      zh: "「神的忿怒從天上顯明在一切不虔不義的人身上，就是那些行不義阻擋真理的人。」（1:18）接著是外邦世界的圖像（1:19-32）；2:1 轉向評判別人的人：「你這論斷人的人哪，無論你是誰，也無可推諉。」2:11：「因為神不偏待人。」3:9：「我們（猶太人）比他們（外邦人）強嗎？決不是的；因我們已經指證猶太人和希臘人都在罪惡之下。」3:10-18 是一連串舊約的引文。",
      en: "“For God’s wrath is revealed from heaven against all ungodliness and unrighteousness of men, who suppress the truth in unrighteousness” (1:18). Then a picture of the Gentile world (1:19–32); 2:1 turns to the judge of others: “Therefore you are without excuse, O man, whoever you are who judge.” 2:11: “For there is no partiality with God.” 3:9: “What then? Are we better than they? No, in no way! For we previously warned both Jews and Greeks, that they are all under sin.” 3:10–18 is a chain of Old Testament quotations."
    },
    tip: {
      zh: "1:26-27 的經文在現代有許多討論，這張卡不展開；保羅的重點是 2:1 和 3:9：沒有人可以站在審判者的位置。",
      en: "The verses of 1:26–27 have much discussion today and this card does not expand them; Paul’s point is 2:1 and 3:9: no one is in the judge’s seat."
    },
    related: ["power_of_gospel", "righteousness_apart_law", "adam_and_christ", "wretched_man"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "righteousness_apart_law", book: "romans", no: 4, kind: "other", type: "love", rarity: 5,
    zh: "白白地稱義", en: "Justified Freely",
    tag: { zh: "因基督耶穌的救贖", en: "Through the Redemption That Is in Christ Jesus" },
    role: { zh: "全信的中心（3:21-26）", en: "The center of the letter (3:21–26)" },
    ch: [3],
    passages: ["3:21-31"],
    moves: [
      { zh: "世人都犯了罪", en: "All Have Sinned", ref: "3:23",
        dzh: "因為世人都犯了罪，虧缺了神的榮耀。",
        den: "For all have sinned, and fall short of the glory of God." },
      { zh: "蒙恩典，白白稱義", en: "Justified Freely by Grace", ref: "3:24",
        dzh: "如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義。",
        den: "Being justified freely by his grace through the redemption that is in Christ Jesus." }
    ],
    traits: [
      { k: "strength", zh: "神自己「為義，也稱信耶穌的人為義」（3:26）", en: "God himself is “just, and the justifier of him who has faith in Jesus” (3:26)" },
      { k: "identity", zh: "「挽回祭」（hilasterion）的意思有幾種讀法", en: "“Atoning sacrifice” (hilasterion) has several readings" }
    ],
    lesson: {
      zh: "「如今」是轉折：3:21「但如今，神的義在律法以外已經顯明出來」。3:23 說世人都犯了罪，3:24 說「白白地稱義」；「白白」就是沒有代價（對人而言）。3:27 接著問：誇口在哪裡呢？「被排除了」。",
      en: "“But now” is the turn: 3:21 “But now apart from the law, a righteousness of God has been revealed.” 3:23 says all have sinned, 3:24 “justified freely”; “freely” means without cost to the person. 3:27 then asks, “Where then is the boasting?” “It is excluded.”"
    },
    quote: { ref: "3:24",
      zh: "如今卻蒙神的恩典，因基督耶穌的救贖，就白白地稱義",
      en: "being justified freely by his grace through the redemption that is in Christ Jesus" },
    keyVerses: ["3:21", "3:22", "3:23", "3:24", "3:25", "3:26", "3:27", "3:28"],
    intro: {
      zh: "「但如今，神的義在律法以外已經顯明出來，有律法和先知為證。」（3:21）這義是「因信耶穌基督，加給一切相信的人，並沒有分別」（3:22）。3:25：「神設立耶穌作挽回祭，是憑著耶穌的血，藉著人的信，要顯明神的義。」「挽回祭」希臘文是 hilasterion，也可譯作「贖罪蓋」（施恩座）、「贖罪祭」或「息怒祭」，各傳統爭論的是神的忿怒是否被「挽回」，或是罪被「除去」。3:28：「人稱義是因著信，不在乎遵行律法。」",
      en: "“But now apart from the law, a righteousness of God has been revealed, being testified by the law and the prophets” (3:21). It is “through faith in Jesus Christ to all and on all those who believe. For there is no distinction” (3:22). 3:25: “whom God sent to be an atoning sacrifice, through faith in his blood, for a demonstration of his righteousness.” The Greek hilasterion can also be rendered “mercy seat,” “expiation” or “propitiation,” and traditions debate whether wrath is “turned away” or sin “wiped out.” 3:28: “a man is justified by faith apart from the works of the law.”"
    },
    tip: {
      zh: "「挽回祭」可譯為挽回祭、贖罪蓋或除罪的祭，各傳統對神的忿怒是否被挽回有不同強調。",
      en: "Hilasterion may be rendered atoning sacrifice, mercy seat or expiation; traditions emphasize differently whether wrath is turned away."
    },
    related: ["no_one_righteous", "abraham_faith", "peace_with_god", "power_of_gospel"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "abraham_faith", book: "romans", no: 5, kind: "person", type: "faith", rarity: 4,
    zh: "亞伯拉罕的信", en: "Abraham’s Faith",
    tag: { zh: "亞伯拉罕信神，這就算為他的義", en: "Abraham Believed God, and It Was Counted as Righteousness" },
    role: { zh: "稱義的例子（第 4 章）", en: "An example of justification (ch 4)" },
    ch: [4],
    passages: ["4:1-25"],
    moves: [
      { zh: "這就算為他的義", en: "Counted as Righteousness", ref: "4:3",
        dzh: "經上說甚麼呢？說：亞伯拉罕信神，這就算為他的義。",
        den: "What does the Scripture say? “Abraham believed God, and it was accounted to him for righteousness.”" },
      { zh: "滿心相信神所應許的", en: "Fully Assured", ref: "4:20-21",
        dzh: "他仰望神的應許，總沒有因不信心裡起疑惑，反倒因信心裡得堅固，且滿心相信神所應許的必能做成。",
        den: "He didn’t waver through unbelief, but grew strong through faith, fully assured that what God had promised, he was also able to perform." }
    ],
    traits: [
      { k: "strength", zh: "在稱義之前（割禮之前）已經信了（4:10）", en: "Believed before circumcision (4:10)" },
      { k: "identity", zh: "「信的人的父」（4:11、16）", en: "“Father of all who believe” (4:11, 16)" }
    ],
    lesson: {
      zh: "保羅選亞伯拉罕作例子，因為猶太人的祖宗是他：他「算為義」是在創世記 15 章，而割禮在 17 章。所以他是「未受割禮而信的人的父」，也是受割禮之人的父（4:11-12）。",
      en: "Paul chooses Abraham because he is the ancestor of the Jews: he was “counted righteous” in Genesis 15, while circumcision comes in Genesis 17. So he is “the father of all those who believe, though they might be in uncircumcision” and of the circumcised (4:11–12)."
    },
    quote: { ref: "4:3",
      zh: "亞伯拉罕信神，這就算為他的義",
      en: "Abraham believed God, and it was accounted to him for righteousness." },
    keyVerses: ["4:1", "4:3", "4:4", "4:9", "4:11", "4:13", "4:17", "4:20", "4:21", "4:25"],
    intro: {
      zh: "「這樣，我們的祖宗亞伯拉罕，憑著肉體得了甚麼呢？」（4:1）保羅引用創世記 15:6：「亞伯拉罕信神，這就算為他的義。」（4:3）4:4-5 說，做工的人，工價不算恩典，而是該得的；「那不做工的，只信稱罪人為義的神，他的信就算為義」。他也引大衛（詩 32）說「過犯得蒙赦免，罪惡蒙遮掩的人有福了」（4:7）。4:17-21 描寫亞伯拉罕在將近一百歲、撒拉不能生育時仍信神，4:25 說耶穌「為我們的過犯交付，為叫我們稱義復活」。",
      en: "“What then will we say that Abraham, our forefather, has found according to the flesh?” (4:1). Paul cites Genesis 15:6: “Abraham believed God, and it was accounted to him for righteousness” (4:3). 4:4–5 says to the one who works, wages are not a gift but due; “to him who doesn’t work, but believes in him who justifies the ungodly, his faith is accounted for righteousness.” He also cites David (Psalm 32): “Blessed are they whose iniquities are forgiven” (4:7). 4:17–21 describes Abraham, nearly a hundred and Sarah barren, still believing; 4:25 says Jesus “was delivered up for our trespasses, and was raised for our justification.”"
    },
    tip: {
      zh: "雅各書 2:21-24 也引用亞伯拉罕，對「稱義」的用法與這裡略有不同；兩處如何對得上，各傳統有不同說明。",
      en: "James 2:21–24 also cites Abraham, using “justified” slightly differently than here; how the two fit traditions explain differently."
    },
    related: ["righteousness_apart_law", "peace_with_god", "adam_and_christ", "power_of_gospel"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "peace_with_god", book: "romans", no: 6, kind: "other", type: "love", rarity: 5,
    zh: "與神相和", en: "Peace with God",
    tag: { zh: "在我們還作罪人的時候，基督為我們死", en: "While We Were Yet Sinners, Christ Died for Us" },
    role: { zh: "稱義的結果（5:1-11）", en: "The results of justification (5:1–11)" },
    ch: [5],
    passages: ["5:1-11"],
    moves: [
      { zh: "得與神相和", en: "Peace with God", ref: "5:1-2",
        dzh: "我們既因信稱義，就藉著我們的主耶穌基督得與神相和；因信得進入現在所站的這恩典中。",
        den: "Being justified by faith, we have peace with God through our Lord Jesus Christ; through him we have our access by faith into this grace in which we stand." },
      { zh: "還作罪人的時候", en: "While We Were Sinners", ref: "5:8",
        dzh: "惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。",
        den: "God commends his own love toward us, in that while we were yet sinners, Christ died for us." }
    ],
    traits: [
      { k: "strength", zh: "患難生忍耐，忍耐生老練，老練生盼望（5:3-4）", en: "Suffering produces perseverance, character, hope (5:3–4)" },
      { k: "identity", zh: "「神的愛澆灌在我們心裡」（5:5）", en: "“God’s love has been poured out into our hearts” (5:5)" }
    ],
    lesson: {
      zh: "稱義之後不是一個空白，而是三件事：與神相和（5:1）、站在恩典裡（5:2）、在患難中仍有盼望（5:3-5）。5:6-8 比較人的愛：為義人死的少有，為好人死的或有；而基督是在「我們還作罪人的時候」死。",
      en: "Justification is followed not by a blank but by three things: peace with God (5:1), standing in grace (5:2), hope even in suffering (5:3–5). 5:6–8 compares human love: scarcely for a righteous man will one die; for a good man someone might dare; but Christ died “while we were yet sinners.”"
    },
    quote: { ref: "5:8",
      zh: "惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了",
      en: "while we were yet sinners, Christ died for us" },
    keyVerses: ["5:1", "5:2", "5:3", "5:5", "5:6", "5:8", "5:10", "5:11"],
    intro: {
      zh: "第 5 章開始「我們」：我們既因信稱義，就藉著主耶穌基督得與神相和（5:1）。5:3-5 是一個小階梯：患難、忍耐、老練、盼望，而「盼望不至於羞恥，因為所賜給我們的聖靈將神的愛澆灌在我們心裡」。5:10 說「我們作仇敵的時候，且藉著神兒子的死得與神和好」。「和好」「相和」是這段的關鍵詞，在 5:1、10、11 反覆出現。",
      en: "Chapter 5 begins “we”: being justified by faith, we have peace with God through our Lord Jesus Christ (5:1). 5:3–5 is a small staircase: suffering, perseverance, proven character, hope, and “hope doesn’t disappoint us, because God’s love has been poured out into our hearts through the Holy Spirit who was given to us.” 5:10 says “while we were enemies, we were reconciled to God through the death of his Son.” “Peace” and “reconciliation” are the key words, repeated in 5:1, 10, 11."
    },
    tip: {
      zh: "5:1 的「得與神相和」，有些抄本作「讓我們與神相和」（是請求，不是陳述），和合本與 WEB 都作陳述。",
      en: "In 5:1 “we have peace” is read “let us have peace” (an appeal rather than a statement) in some manuscripts; the CUV and WEB both read a statement."
    },
    related: ["righteousness_apart_law", "adam_and_christ", "no_condemnation", "abraham_faith"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "adam_and_christ", book: "romans", no: 7, kind: "other", type: "wisdom", rarity: 4,
    zh: "亞當與基督", en: "Adam and Christ",
    tag: { zh: "罪在哪裡顯多，恩典就更顯多了", en: "Where Sin Abounded, Grace Abounded More" },
    role: { zh: "兩個人，兩條路（5:12-21）", en: "Two men, two paths (5:12–21)" },
    ch: [5],
    passages: ["5:12-21"],
    moves: [
      { zh: "罪從一人入了世界", en: "Sin Through One Man", ref: "5:12",
        dzh: "這就如罪是從一人入了世界，死又是從罪來的；於是死就臨到眾人，因為眾人都犯了罪。",
        den: "As sin entered into the world through one man, and death through sin, so death passed to all men, because all sinned." },
      { zh: "恩典更顯多", en: "Grace Abounded More", ref: "5:20-21",
        dzh: "罪在哪裡顯多，恩典就更顯多了；就如罪作王叫人死，照樣，恩典也藉著義作王，叫人得永生。",
        den: "Where sin abounded, grace abounded more exceedingly; as sin reigned in death, even so grace might reign through righteousness to eternal life." }
    ],
    traits: [
      { k: "strength", zh: "「一人」與「一人」的對照出現十多次", en: "The “one man” / “one man” contrast appears more than ten times" },
      { k: "identity", zh: "「恩賜比過犯更多」（5:15-17）", en: "The gift is greater than the trespass (5:15–17)" }
    ],
    lesson: {
      zh: "保羅用亞當和基督作對比：一人犯罪，死臨到眾人；一人順服，恩典更多地臨到眾人（5:15-19）。「恩典」每次都比「過犯」更大，這是 5:15-17 的重複句式。",
      en: "Paul contrasts Adam and Christ: through one man’s sin death reached all; through one man’s obedience grace reaches many more (5:15–19). Each time “grace” is greater than “trespass” — the pattern repeated in 5:15–17."
    },
    quote: { ref: "5:20",
      zh: "罪在哪裡顯多，恩典就更顯多了",
      en: "where sin abounded, grace abounded more exceedingly" },
    keyVerses: ["5:12", "5:14", "5:15", "5:17", "5:18", "5:19", "5:20", "5:21"],
    intro: {
      zh: "「這就如罪是從一人入了世界，死又是從罪來的；於是死就臨到眾人，因為眾人都犯了罪。」（5:12）這一節的後半「因為眾人都犯了罪」，歷代有不同的讀法，涉及「原罪」是怎樣傳下來的，各傳統有不同理解。5:14 說亞當是「那以後要來之人的預像」。5:18-19：一次的過犯，眾人都被定罪；一次的義行，眾人也被稱義得生命。5:20 是整段的轉折：律法本是外添的，叫過犯顯多。",
      en: "“Therefore as sin entered into the world through one man, and death through sin; and so death passed to all men, because all sinned” (5:12). The last clause, “because all sinned,” has been read differently across history, touching how “original sin” is passed on, and traditions understand it differently. 5:14 says Adam is “a foreshadowing of him who was to come.” 5:18–19: through one trespass all were condemned; through one act of righteousness all are justified to life. 5:20 is the turn: the law came in besides, that the trespass might abound."
    },
    tip: {
      zh: "5:12 的「眾人都犯了罪」與「原罪」的關係，東西方教會有不同的傳統理解。",
      en: "How “all sinned” in 5:12 relates to “original sin” Eastern and Western church traditions understand differently."
    },
    related: ["peace_with_god", "baptized_into_death", "no_one_righteous", "abraham_faith"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "baptized_into_death", book: "romans", no: 8, kind: "other", type: "faith", rarity: 3,
    zh: "向罪死，向神活", en: "Dead to Sin, Alive to God",
    tag: { zh: "叫我們一舉一動有新生的樣式", en: "That We Might Walk in Newness of Life" },
    role: { zh: "新生命（第 6 章）", en: "New life (ch 6)" },
    ch: [6],
    passages: ["6:1-23"],
    moves: [
      { zh: "歸入他的死", en: "Baptized into His Death", ref: "6:3-4",
        dzh: "我們這受洗歸入基督耶穌的人是受洗歸入他的死；和他一同埋葬，叫我們一舉一動有新生的樣式。",
        den: "All who were baptized into Christ Jesus were baptized into his death; we were buried with him, that we also might walk in newness of life." },
      { zh: "罪的工價與神的恩賜", en: "Wages and Gift", ref: "6:23",
        dzh: "罪的工價乃是死；惟有神的恩賜，在我們的主基督耶穌裡，乃是永生。",
        den: "The wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord." }
    ],
    traits: [
      { k: "strength", zh: "「要將肢體獻給神作義的器具」（6:13）", en: "“Present your members to God as instruments of righteousness” (6:13)" },
      { k: "weakness", zh: "「我們可以仍在罪中嗎？」（6:1）", en: "“Shall we continue in sin?” (6:1)" }
    ],
    lesson: {
      zh: "5:20 說恩典更顯多，6:1 就有人問：那麼「我們可以仍在罪中，叫恩典顯多嗎？」保羅回答「斷乎不可」，並用受洗的意象：受洗歸入死，也歸入新生（6:2-4）。結尾是一對對比：工價與恩賜（6:23）。",
      en: "After 5:20 says grace abounded more, 6:1 asks: “Shall we continue in sin, that grace may abound?” Paul answers “May it never be!” and uses baptism: baptized into death, and into new life (6:2–4). It ends with a contrast: wages and gift (6:23)."
    },
    quote: { ref: "6:4",
      zh: "原是叫我們一舉一動有新生的樣式",
      en: "so we also might walk in newness of life" },
    keyVerses: ["6:1", "6:2", "6:3", "6:4", "6:6", "6:11", "6:13", "6:14", "6:23"],
    intro: {
      zh: "「這樣，我們可以說甚麼呢？我們可以仍在罪中，叫恩典顯多嗎？斷乎不可！我們這在罪上死了的人，豈可仍在罪中活著呢？」（6:1-2）受洗歸入基督耶穌，是歸入他的死（6:3）。6:11：「這樣，你們也當看自己向罪是死的，向神在基督耶穌裡卻是活的。」6:14 說「罪必不能作你們的主，因你們不在律法之下，乃在恩典之下」。6:16-22 用奴僕的比喻：你們是順從誰，就作誰的奴僕。",
      en: "“What shall we say then? Shall we continue in sin, that grace may abound? May it never be! We who died to sin, how could we live in it any longer?” (6:1–2). Baptism into Christ Jesus is baptism into his death (6:3). 6:11: “Thus consider yourselves also to be dead to sin, but alive to God in Christ Jesus.” 6:14 says “For sin will not have dominion over you, for you are not under law, but under grace.” 6:16–22 uses a slave metaphor: you are slaves of the one you obey."
    },
    tip: {
      zh: "「受洗歸入他的死」是指水禮的意義，還是更廣的意義，各傳統有不同強調。",
      en: "Whether “baptized into his death” refers to the rite of water baptism or something wider traditions emphasize differently."
    },
    related: ["adam_and_christ", "wretched_man", "no_condemnation", "living_sacrifice"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "wretched_man", book: "romans", no: 9, kind: "person", type: "scheme", rarity: 4,
    zh: "「我真是苦啊！」", en: "“What a Wretched Man I Am!”",
    tag: { zh: "我所願意的，我並不做", en: "I Don’t Practice What I Desire" },
    role: { zh: "律法與內心的掙扎（7:7-25）", en: "The law and the inner struggle (7:7–25)" },
    ch: [7],
    passages: ["7:7-25"],
    moves: [
      { zh: "我所恨惡的，我倒去做", en: "What I Hate, That I Do", ref: "7:15",
        dzh: "我所做的，我自己不明白；我所願意的，我並不做；我所恨惡的，我倒去做。",
        den: "For I don’t know what I am doing. For I don’t practice what I desire to do; but what I hate, that I do." },
      { zh: "感謝神，靠著耶穌", en: "Thanks Be to God Through Jesus", ref: "7:24-25",
        dzh: "我真是苦啊！誰能救我脫離這取死的身體呢？感謝神，靠著我們的主耶穌基督就能脫離了。",
        den: "What a wretched man I am! Who will deliver me out of the body of this death? I thank God through Jesus Christ, our Lord!" }
    ],
    traits: [
      { k: "strength", zh: "律法本身是「聖潔、公義、良善」（7:12）", en: "The law itself is “holy, righteous and good” (7:12)" },
      { k: "weakness", zh: "「我」被罪轄制，行出自己不願意的（7:19）", en: "“I” am held by sin, doing what I don’t want (7:19)" }
    ],
    lesson: {
      zh: "這一段的「我」是誰：是保羅信主以前的自己、信主以後的掙扎，或代表亞當或以色列，各傳統有不同讀法；經文沒有說明。7:25 先有一句感謝，然後 8:1 就是「如今……不定罪了」。",
      en: "Who the “I” of this passage is — Paul before conversion, a struggle after it, or a stand-in for Adam or Israel — traditions read differently; the text does not say. 7:25 first gives a thanks, and then 8:1 follows with “now… no condemnation.”"
    },
    quote: { ref: "7:24",
      zh: "我真是苦啊！誰能救我脫離這取死的身體呢",
      en: "What a wretched man I am! Who will deliver me out of the body of this death?" },
    keyVerses: ["7:7", "7:12", "7:15", "7:18", "7:19", "7:22", "7:23", "7:24", "7:25"],
    intro: {
      zh: "「這樣，我們可以說甚麼呢？律法是罪嗎？斷乎不是！」（7:7）保羅說，若不是律法，他不知道甚麼是貪心（7:7）；罪藉著誡命引誘他（7:11）。7:15-20 是全段的中心：「我所願意的，我並不做；我所恨惡的，我倒去做。……若我去做所不願意做的，就不是我做的，乃是住在我裡頭的罪做的。」7:24 的呼叫之後是 7:25 一句短短的感謝。這一段是否說信徒的處境，是羅馬書最有爭論的段落之一。",
      en: "“What shall we say then? Is the law sin? May it never be!” (7:7). Paul says he would not have known coveting unless the law said so (7:7); sin seized opportunity through the commandment (7:11). 7:15–20 is the center: “For I don’t practice what I desire to do; but what I hate, that I do… if I do what I don’t desire, it is no more I that do it, but sin which dwells in me.” After the cry of 7:24 comes a short thanks in 7:25. Whether this passage describes the believer’s condition is one of the most debated in Romans."
    },
    tip: {
      zh: "7:7-25 的「我」是基督徒、還是未信主的人，是歷來的大爭論，奧古斯丁、改革宗與東方教父的看法各有不同。",
      en: "Whether the “I” of 7:7–25 is a Christian or not yet a believer is a long debate; Augustine, the Reformed tradition and the Eastern fathers differ."
    },
    related: ["baptized_into_death", "no_condemnation", "no_one_righteous", "creation_groans"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "no_condemnation", book: "romans", no: 10, kind: "other", type: "love", rarity: 5,
    zh: "不定罪", en: "No Condemnation",
    tag: { zh: "聖靈與我們的心同證我們是神的兒女", en: "The Spirit Testifies That We Are God’s Children" },
    role: { zh: "聖靈的生命（8:1-17）", en: "Life in the Spirit (8:1–17)" },
    ch: [8],
    passages: ["8:1-17"],
    moves: [
      { zh: "如今不定罪了", en: "Now No Condemnation", ref: "8:1-2",
        dzh: "如今，那些在基督耶穌裡的就不定罪了。因為賜生命聖靈的律，在基督耶穌裡釋放了我。",
        den: "There is therefore now no condemnation to those who are in Christ Jesus. For the law of the Spirit of life in Christ Jesus made me free." },
      { zh: "阿爸！父！", en: "Abba! Father!", ref: "8:15-16",
        dzh: "你們所受的，乃是兒子的心，因此我們呼叫：阿爸！父！聖靈與我們的心同證我們是神的兒女。",
        den: "You received the Spirit of adoption, by whom we cry, “Abba! Father!” The Spirit himself testifies with our spirit that we are children of God." }
    ],
    traits: [
      { k: "strength", zh: "律法所不能行的，神做成了（8:3）", en: "What the law could not do, God did (8:3)" },
      { k: "identity", zh: "「阿爸」是亞蘭語的稱呼，親密", en: "“Abba” is an intimate Aramaic address" }
    ],
    lesson: {
      zh: "第 7 章結束在「誰能救我」，第 8 章開始就是「如今……不定罪」（8:1）。這一章說了「聖靈」二十次以上：他使人得生命（8:2）、使人隨從靈（8:4）、為神的兒女作見證（8:16）。",
      en: "Chapter 7 ends on “who will deliver me,” and chapter 8 begins “now… no condemnation” (8:1). The chapter names “the Spirit” more than twenty times: he gives life (8:2), enables walking by the Spirit (8:4), testifies that we are God’s children (8:16)."
    },
    quote: { ref: "8:1",
      zh: "如今，那些在基督耶穌裡的就不定罪了",
      en: "There is therefore now no condemnation to those who are in Christ Jesus" },
    keyVerses: ["8:1", "8:2", "8:3", "8:4", "8:9", "8:14", "8:15", "8:16", "8:17"],
    intro: {
      zh: "「如今，那些在基督耶穌裡的就不定罪了。」（8:1；和合本以這一句短句開始，WEB 的同一節多了「不隨從肉體，只隨從聖靈」）8:3-4：律法因肉體軟弱，有所不能行的，神就差遣自己的兒子，為要叫律法的義成就在我們這不隨從肉體、只隨從聖靈的人身上。8:14：「凡被神的靈引導的，都是神的兒子。」8:15-17：不是奴僕的心，而是兒子的心；既是兒女，便是後嗣。",
      en: "“There is therefore now no condemnation to those who are in Christ Jesus, who don’t walk according to the flesh, but according to the Spirit” (8:1; the CUV’s shorter line ends at “Christ Jesus,” the rest being in a variant). 8:3–4: what the law could not do because the flesh was weak, God did by sending his own Son, that the law’s righteous requirement might be fulfilled in us who walk by the Spirit. 8:14: “As many as are led by the Spirit of God, these are children of God.” 8:15–17: not a spirit of bondage but of adoption; children, therefore heirs."
    },
    tip: {
      zh: "和合本 8:1 較短，WEB 較長，兩者差別在抄本：有些抄本沒有「不隨從肉體」等字。",
      en: "The CUV 8:1 is shorter and the WEB longer; the difference is in the manuscripts: some lack “who don’t walk according to the flesh.”"
    },
    related: ["wretched_man", "creation_groans", "nothing_separates", "peace_with_god"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "creation_groans", book: "romans", no: 11, kind: "other", type: "harvest", rarity: 4,
    zh: "受造之物一同歎息", en: "Creation Groans",
    tag: { zh: "萬事都互相效力，叫愛神的人得益處", en: "All Things Work Together for Good" },
    role: { zh: "盼望的呻吟（8:18-30）", en: "The groaning of hope (8:18–30)" },
    ch: [8],
    passages: ["8:18-30"],
    moves: [
      { zh: "一同歎息，勞苦", en: "Groaning Together", ref: "8:22",
        dzh: "我們知道，一切受造之物一同歎息，勞苦，直到如今。",
        den: "We know that the whole creation groans and travails in pain together until now." },
      { zh: "萬事互相效力", en: "All Things Work Together", ref: "8:28",
        dzh: "我們曉得萬事都互相效力，叫愛神的人得益處，就是按他旨意被召的人。",
        den: "We know that all things work together for good for those who love God, to those who are called according to his purpose." }
    ],
    traits: [
      { k: "strength", zh: "聖靈用說不出來的歎息替我們禱告（8:26）", en: "The Spirit intercedes with groanings too deep for words (8:26)" },
      { k: "identity", zh: "受造之物、我們、聖靈，三者都在歎息", en: "Creation, we, and the Spirit all groan" }
    ],
    lesson: {
      zh: "「歎息」在這段出現三次：受造之物（8:22）、我們（8:23）、聖靈（8:26）。8:28 常被單獨引用，但它前面是苦難，後面是 8:29-30 的一連串：預知、預定、呼召、稱義、得榮耀。",
      en: "“Groaning” appears three times: creation (8:22), we ourselves (8:23), the Spirit (8:26). 8:28 is often quoted alone, but before it is suffering and after it is the chain of 8:29–30: foreknew, predestined, called, justified, glorified."
    },
    quote: { ref: "8:28",
      zh: "我們曉得萬事都互相效力，叫愛神的人得益處，就是按他旨意被召的人",
      en: "all things work together for good for those who love God" },
    keyVerses: ["8:18", "8:19", "8:20", "8:22", "8:23", "8:26", "8:28", "8:29", "8:30"],
    intro: {
      zh: "「我想，現在的苦楚，若比起將來要顯給我們的榮耀，就不足介意了。」（8:18）受造之物切望等候神的眾子顯出來（8:19），要從敗壞的轄制下得釋放（8:21）。8:26-27：聖靈幫助我們的軟弱，用說不出來的歎息替我們禱告。8:28：「我們曉得萬事都互相效力。」有些抄本作「神使萬事都互相效力」，意思略不同；WEB 作「all things work together」。8:29-30 的「預知、預定」，各傳統（加爾文主義、阿民念主義等）有不同的讀法。",
      en: "“For I consider that the sufferings of this present time are not worth comparing with the glory which will be revealed toward us” (8:18). Creation waits eagerly for the revealing of the children of God (8:19), to be set free from the bondage of corruption (8:21). 8:26–27: the Spirit helps our weakness, interceding with groanings which can’t be uttered. 8:28: “We know that all things work together for good.” Some manuscripts read “God works all things together,” with a slightly different sense. “Foreknew, predestined” in 8:29–30 traditions (Calvinist, Arminian and others) read differently."
    },
    tip: {
      zh: "8:28 的主詞，有些抄本是「神」；「預知」「預定」的關係，各傳統有不同的神學讀法。",
      en: "In some manuscripts the subject of 8:28 is “God”; how “foreknew” and “predestined” relate traditions read theologically in different ways."
    },
    related: ["no_condemnation", "nothing_separates", "wretched_man", "olive_tree"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "nothing_separates", book: "romans", no: 12, kind: "other", type: "love", rarity: 5,
    zh: "誰能使我們與基督的愛隔絕", en: "Nothing Can Separate Us",
    tag: { zh: "神若幫助我們，誰能敵擋我們呢", en: "If God Is for Us, Who Can Be Against Us?" },
    role: { zh: "第 8 章的高峰（8:31-39）", en: "The summit of chapter 8 (8:31–39)" },
    ch: [8],
    passages: ["8:31-39"],
    moves: [
      { zh: "神若幫助我們", en: "If God Is for Us", ref: "8:31-32",
        dzh: "神若幫助我們，誰能敵擋我們呢？神既不愛惜自己的兒子，為我們眾人捨了，豈不也把萬物和他一同白白地賜給我們嗎？",
        den: "If God is for us, who can be against us? He who didn’t spare his own Son, but delivered him up for us all, how would he not also with him freely give us all things?" },
      { zh: "都不能隔絕", en: "Nothing Can Separate", ref: "8:38-39",
        dzh: "無論是死，是生，是天使，是掌權的，是高處的，是低處的，都不能叫我們與神的愛隔絕。",
        den: "Neither death, nor life, nor angels, nor principalities, nor height, nor depth, nor any other created thing, will be able to separate us from God’s love." }
    ],
    traits: [
      { k: "strength", zh: "一連串的問句，答案都是「沒有」", en: "A string of questions, all answered “no one”" },
      { k: "identity", zh: "「這愛是在我們的主基督耶穌裡的」", en: "“Which is in Christ Jesus our Lord”" }
    ],
    lesson: {
      zh: "保羅問了幾個問題：誰能敵擋？誰能控告？誰能定罪？誰能隔絕？（8:31-35）答案都是沒有。他列的清單從「患難、困苦、逼迫、飢餓、赤身、危險、刀劍」（8:35）到「死、生、天使、掌權的」（8:38-39），最後說「都不能」。",
      en: "Paul asks: who can be against us? who will bring a charge? who condemns? who will separate us? (8:31–35). The answer is no one. His list runs from “oppression, anguish, persecution, famine, nakedness, peril, sword” (8:35) to “death, life, angels, principalities” (8:38–39), ending “nothing.”"
    },
    quote: { ref: "8:39",
      zh: "都不能叫我們與神的愛隔絕；這愛是在我們的主基督耶穌裡的",
      en: "will be able to separate us from God’s love, which is in Christ Jesus our Lord" },
    keyVerses: ["8:31", "8:32", "8:33", "8:34", "8:35", "8:37", "8:38", "8:39"],
    intro: {
      zh: "「既是這樣，還有甚麼說的呢？神若幫助我們，誰能敵擋我們呢？」（8:31）接著：誰能控告神的選民？有神稱他們為義了（8:33）。誰能定他們的罪？有基督耶穌已經死了，而且從死裡復活，現今在神的右邊，也替我們祈求（8:34）。8:35：「誰能使我們與基督的愛隔絕呢？難道是患難嗎？是困苦嗎？……」8:36 引用詩篇 44:22「我們為你的緣故終日被殺」。8:37：「然而，靠著愛我們的主，在這一切的事上已經得勝有餘了。」",
      en: "“What then shall we say about these things? If God is for us, who can be against us?” (8:31). Then: who will bring a charge against God’s chosen ones? It is God who justifies (8:33). Who is he who condemns? It is Christ Jesus who died, yes rather, who was raised from the dead, who is at the right hand of God, who also makes intercession for us (8:34). 8:35: “Who will separate us from Christ’s love? Will oppression, or anguish…” 8:36 quotes Psalm 44:22, “For your sake we are killed all day long.” 8:37: “But in all these things, we are more than conquerors through him who loved us.”"
    },
    tip: {
      zh: "「基督的愛」（8:35）與「神的愛」（8:39），指同一份愛；8:39 說這愛是在基督耶穌裡的。",
      en: "“Christ’s love” (8:35) and “God’s love” (8:39) are one love; 8:39 says it is in Christ Jesus."
    },
    related: ["no_condemnation", "creation_groans", "olive_tree", "peace_with_god"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "olive_tree", book: "romans", no: 13, kind: "other", type: "harvest", rarity: 4,
    zh: "橄欖樹與神的智慧深哉", en: "The Olive Tree and the Depth of God’s Wisdom",
    tag: { zh: "不是你托著根，乃是根托著你", en: "It Is Not You Who Support the Root" },
    role: { zh: "以色列的問題（第 9-11 章）", en: "The question of Israel (chs 9–11)" },
    ch: [9, 11],
    passages: ["9:1-5", "11:17-36"],
    moves: [
      { zh: "野橄欖得接在其中", en: "A Wild Olive Grafted In", ref: "11:17-18",
        dzh: "若有幾根枝子被折下來，你這野橄欖得接在其中，一同得著橄欖根的肥汁；不可向舊枝子誇口，不是你托著根，乃是根托著你。",
        den: "Some branches were broken off, and you, a wild olive, were grafted in among them; don’t boast, for it is not you who support the root, but the root supports you." },
      { zh: "深哉，神的智慧", en: "Oh the Depth", ref: "11:33-36",
        dzh: "深哉，神豐富的智慧和知識！他的判斷何其難測！因為萬有都是本於他，倚靠他，歸於他。願榮耀歸給他，直到永遠。阿們！",
        den: "Oh the depth of the riches both of the wisdom and the knowledge of God! For of him, and through him, and to him, are all things. To him be the glory for ever! Amen." }
    ],
    traits: [
      { k: "strength", zh: "保羅為自己的同胞「大有憂愁，心裡時常傷痛」（9:2）", en: "Paul has “great sorrow and unceasing grief” for his own people (9:2)" },
      { k: "identity", zh: "外邦人是野橄欖，接在原有的樹上", en: "Gentiles are the wild olive grafted into the existing tree" }
    ],
    lesson: {
      zh: "這三章從保羅的憂愁開始（9:1-3）：他願意為同胞被棄絕。結論是橄欖樹的比喻（11:17-24）和頌讚（11:33-36）。保羅警告外邦人不要自誇：根是原有的，枝子是被接上的。",
      en: "These three chapters begin with Paul’s sorrow (9:1–3): he would himself be accursed for his people. The conclusion is the olive tree (11:17–24) and a doxology (11:33–36). Paul warns Gentiles not to boast: the root is the original, and the branches are grafted on."
    },
    quote: { ref: "11:18",
      zh: "不是你托著根，乃是根托著你",
      en: "it is not you who support the root, but the root supports you" },
    keyVerses: ["9:1", "9:2", "9:3", "10:1", "11:1", "11:11", "11:17", "11:18", "11:26", "11:33"],
    intro: {
      zh: "「我在基督裡說真話，不是謊言；我的良心被聖靈證明。我是大有憂愁，心裡時常傷痛。」（9:1-2）9-11 章談以色列：9 章是神的揀選，10 章是以色列自己的責任與福音的傳揚，11 章是神沒有棄絕祂的百姓。11:26「這樣，以色列全家都要得救」，「以色列全家」指甚麼，是歷來最大的爭論之一：整個民族、屬靈的以色列，或將來的猶太人，各傳統有不同讀法。11:36 的頌讚結束這三章。",
      en: "“I tell the truth in Christ, I am not lying, my conscience testifying with me in the Holy Spirit, that I have great sorrow and unceasing grief in my heart” (9:1–2). Chapters 9–11 deal with Israel: chapter 9 God’s choosing, chapter 10 Israel’s own responsibility and the preaching of the gospel, chapter 11 God has not rejected his people. In 11:26, “so all Israel will be saved,” what “all Israel” means is one of the largest debates: the whole nation, spiritual Israel, or a future Jewish remnant; traditions read differently. The doxology of 11:36 closes the three chapters."
    },
    tip: {
      zh: "11:26 的「以色列全家」，是整個猶太民族、屬靈的以色列，還是別的意思，各傳統有不同的看法。",
      en: "“All Israel” in 11:26 — the whole Jewish nation, spiritual Israel, or something else — traditions see differently."
    },
    related: ["nothing_separates", "living_sacrifice", "creation_groans", "power_of_gospel"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "living_sacrifice", book: "romans", no: 14, kind: "other", type: "faith", rarity: 5,
    zh: "活祭", en: "A Living Sacrifice",
    tag: { zh: "不要效法這個世界，只要心意更新而變化", en: "Be Transformed by the Renewing of Your Mind" },
    role: { zh: "「所以」之後（第 12 章）", en: "After the “therefore” (ch 12)" },
    ch: [12],
    passages: ["12:1-21"],
    moves: [
      { zh: "獻上身體作活祭", en: "Present Your Bodies", ref: "12:1-2",
        dzh: "所以，弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭；不要效法這個世界，只要心意更新而變化。",
        den: "“Present your bodies a living sacrifice, holy, acceptable to God… Don’t be conformed to this world, but be transformed by the renewing of your mind.”" },
      { zh: "與喜樂的同樂", en: "Rejoice with Those Who Rejoice", ref: "12:15-18",
        dzh: "與喜樂的人要同樂；與哀哭的人要同哭。若是能行，總要盡力與眾人和睦。",
        den: "Rejoice with those who rejoice. Weep with those who weep… If it is possible, as much as it is up to you, be at peace with all men." }
    ],
    traits: [
      { k: "strength", zh: "「所以」把前十一章的教義轉成日常", en: "“Therefore” turns eleven chapters of teaching into daily life" },
      { k: "identity", zh: "「肢體」各有不同的恩賜（12:4-8）", en: "Many members with different gifts (12:4–8)" }
    ],
    lesson: {
      zh: "前十一章說神做了甚麼，第 12 章從「所以」開始，說人要怎樣回應：把身體獻上，心意更新，在教會裡各用恩賜，對外人也要祝福逼迫你們的人（12:14）。「若是能行，總要盡力與眾人和睦」（12:18）。",
      en: "The first eleven chapters say what God has done; chapter 12 begins with “therefore” and says how to respond: present the body, renew the mind, use gifts in the church, and bless those who persecute you (12:14). “If it is possible, as much as it is up to you, be at peace with all men” (12:18)."
    },
    quote: { ref: "12:1",
      zh: "將身體獻上，當作活祭，是聖潔的，是神所喜悅的",
      en: "to present your bodies a living sacrifice, holy, acceptable to God" },
    keyVerses: ["12:1", "12:2", "12:3", "12:4", "12:9", "12:12", "12:15", "12:18", "12:21"],
    intro: {
      zh: "「所以，弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭，是聖潔的，是神所喜悅的；你們如此事奉乃是理所當然的。」（12:1）「理所當然的」，WEB 作「your spiritual service」，原文 logike latreia 兩種譯法都有人採用。12:3-8 說到一個身體，多個肢體，各有恩賜；12:9-21 是一連串簡短的勸勉：愛不可虛假、與哀哭的人同哭、不以惡報惡，「不要為惡所勝，反要以善勝惡」（12:21）。",
      en: "“Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service” (12:1). “Spiritual service” (the CUV’s “理所當然”) renders the Greek logike latreia, which can also be “reasonable worship”; both are used. 12:3–8 speaks of one body with many members, each with gifts; 12:9–21 is a string of short exhortations: love without hypocrisy, weep with those who weep, repay no one evil for evil, “Don’t be overcome by evil, but overcome evil with good” (12:21)."
    },
    tip: {
      zh: "「理所當然」與「屬靈的事奉」是 logike latreia 的兩種譯法，各自強調「合理」或「屬靈」。",
      en: "“Reasonable” and “spiritual” are two renderings of logike latreia, stressing rationality or spirituality."
    },
    related: ["olive_tree", "love_fulfills_law", "weak_and_strong", "baptized_into_death"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "love_fulfills_law", book: "romans", no: 15, kind: "other", type: "love", rarity: 3,
    zh: "愛完全了律法", en: "Love Fulfills the Law",
    tag: { zh: "凡事都不可虧欠人，惟有彼此相愛", en: "Owe No One Anything, Except to Love" },
    role: { zh: "掌權的與鄰舍（第 13 章）", en: "Authorities and neighbors (ch 13)" },
    ch: [13],
    passages: ["13:1-14"],
    moves: [
      { zh: "愛是不加害與人的", en: "Love Doesn’t Harm", ref: "13:8-10",
        dzh: "凡事都不可虧欠人，惟有彼此相愛要常以為虧欠，因為愛人的就完全了律法；愛是不加害與人的。",
        den: "Owe no one anything, except to love one another; for he who loves his neighbor has fulfilled the law. Love doesn’t harm a neighbor." },
      { zh: "天已經亮了", en: "The Night Is Far Spent", ref: "13:11-12",
        dzh: "你們該知道，現今就是該趁早睡醒的時候；黑夜已深，白晝將近，我們就當脫去暗昧的行為，帶上光明的軍裝。",
        den: "It is already time for you to awaken out of sleep. The night is far gone, and the day is near; let’s lay aside the deeds of darkness, and put on the armor of light." }
    ],
    traits: [
      { k: "strength", zh: "「愛」是唯一可以「虧欠」的債（13:8）", en: "Love is the one debt it is right to keep owing (13:8)" },
      { k: "weakness", zh: "13:1-7 的順服與今日處境的關係，是難讀的段落", en: "13:1–7 on submission is a hard passage in today’s settings" }
    ],
    lesson: {
      zh: "13:1-7 論到掌權的，保羅說「在上有權柄的，人人當順服他」；這段在歷史上被用過許多不同的方式。接著是 13:8-10：真正不能還清的債是愛，而愛就完全了律法。",
      en: "13:1–7 speaks of the governing authorities: “Let every soul be in subjection to the higher authorities”; the passage has been used in many different ways in history. Then 13:8–10: the one debt never paid off is love, and love fulfills the law."
    },
    quote: { ref: "13:10",
      zh: "愛是不加害與人的，所以愛就完全了律法",
      en: "Love doesn’t harm a neighbor. Love therefore is the fulfillment of the law." },
    keyVerses: ["13:1", "13:4", "13:7", "13:8", "13:9", "13:10", "13:11", "13:12", "13:14"],
    intro: {
      zh: "「在上有權柄的，人人當順服他，因為沒有權柄不是出於神的；凡掌權的都是神所命的。」（13:1）這段話背景是羅馬帝國之下的教會；它如何應用在不公義的政權，歷來有許多討論，經文本身沒有說明。13:7：「凡人所當得的，就給他；當得糧的，給他上糧；當得稅的，給他納稅；當懼怕的，懼怕他；當恭敬的，恭敬他。」13:8-10 是愛完全了律法，13:11-14 是「黑夜已深，白晝將近」。",
      en: "“Let every soul be in subjection to the higher authorities. For there is no authority except from God, and those who exist are ordained by God” (13:1). The background is the church under the Roman empire; how it applies to unjust governments has been much discussed, and the text itself does not say. 13:7: “Give therefore to everyone what you owe: taxes to whom taxes are due; customs to whom customs; respect to whom respect; honor to whom honor.” 13:8–10 is love fulfilling the law, and 13:11–14 is “the night is far gone, and the day is near.”"
    },
    tip: {
      zh: "13:1-7 如何用在不公義的政權之下，歷來有許多不同的讀法；它的上下文是對一般的公民責任的勸勉。",
      en: "How 13:1–7 applies under unjust regimes has been read in many ways; its context is exhortation about ordinary civic duty."
    },
    related: ["living_sacrifice", "weak_and_strong", "olive_tree", "phoebe_and_friends"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "weak_and_strong", book: "romans", no: 16, kind: "other", type: "wisdom", rarity: 3,
    zh: "強壯的與軟弱的", en: "The Strong and the Weak",
    tag: { zh: "神的國不在乎吃喝", en: "The Kingdom Is Not Eating and Drinking" },
    role: { zh: "彼此接納（14:1-15:13）", en: "Accept one another (14:1–15:13)" },
    ch: [14, 15],
    passages: ["14:1-23", "15:1-13"],
    moves: [
      { zh: "不要辯論所疑惑的事", en: "Not for Disputes", ref: "14:1",
        dzh: "信心軟弱的，你們要接納，但不要辯論所疑惑的事。",
        den: "Now accept one who is weak in faith, but not for disputes over opinions." },
      { zh: "神的國在乎公義、和平、喜樂", en: "Righteousness, Peace, Joy", ref: "14:17",
        dzh: "因為神的國不在乎吃喝，只在乎公義、和平，並聖靈中的喜樂。",
        den: "For God’s Kingdom is not eating and drinking, but righteousness, peace, and joy in the Holy Spirit." }
    ],
    traits: [
      { k: "strength", zh: "「彼此接納，如同基督接納你們一樣」（15:7）", en: "“Accept one another, even as Christ also accepted you” (15:7)" },
      { k: "weakness", zh: "「你為甚麼論斷弟兄呢？」（14:10）", en: "“Why do you judge your brother?” (14:10)" }
    ],
    lesson: {
      zh: "羅馬教會裡，有人只吃素菜、有人重視某些日子；保羅的原則是：各人要在自己的心裡意見堅定（14:5），強壯的不輕看軟弱的，軟弱的不論斷強壯的（14:3），而且不要叫弟兄跌倒（14:13）。",
      en: "In the Roman church some eat only vegetables and some value certain days; Paul’s principle is: let each be fully assured in his own mind (14:5), the strong do not despise the weak and the weak do not judge the strong (14:3), and do not cause a brother to stumble (14:13)."
    },
    quote: { ref: "14:17",
      zh: "神的國不在乎吃喝，只在乎公義、和平，並聖靈中的喜樂",
      en: "God’s Kingdom is not eating and drinking, but righteousness, peace, and joy in the Holy Spirit" },
    keyVerses: ["14:1", "14:3", "14:5", "14:10", "14:13", "14:17", "14:19", "15:1", "15:7", "15:13"],
    intro: {
      zh: "「信心軟弱的，你們要接納，但不要辯論所疑惑的事。」（14:1）有人信自己可以吃一切的物，有軟弱的只吃蔬菜（14:2）。有人看這日比那日強，有人看日日都是一樣（14:5）。「軟弱的」和「強壯的」是誰（猶太基督徒和外邦基督徒、或別的），書中沒有明說。15:1-6 說「我們堅固的人應當擔代不堅固人的軟弱」；15:7 是結論：「彼此接納，如同基督接納你們一樣」；15:13 是結束的祝福。",
      en: "“Now accept one who is weak in faith, but not for disputes over opinions” (14:1). One person believes he may eat anything, while the weak eats only vegetables (14:2). One esteems one day above another, another esteems every day alike (14:5). Who the “weak” and the “strong” are (Jewish and Gentile Christians, or others) the letter does not state. 15:1–6 says “we who are strong ought to bear the weaknesses of the weak”; 15:7 is the conclusion: “accept one another, even as Christ also accepted you”; 15:13 is the closing blessing."
    },
    tip: {
      zh: "「軟弱的」與「強壯的」指哪些人，經文沒有明說；常見的讀法是猶太與外邦信徒對飲食和日子的不同看法。",
      en: "Who the “weak” and the “strong” are the text does not say; a common reading is Jewish and Gentile believers differing on food and days."
    },
    related: ["living_sacrifice", "love_fulfills_law", "phoebe_and_friends", "olive_tree"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "phoebe_and_friends", book: "romans", no: 17, kind: "person", type: "love", rarity: 4,
    zh: "非比與一長串的名字", en: "Phoebe and the List of Names",
    tag: { zh: "她素來幫助許多人，也幫助了我", en: "She Has Been a Helper of Many, and of Myself" },
    role: { zh: "最後一章的問安（第 16 章）", en: "The greetings of the last chapter (ch 16)" },
    ch: [16],
    passages: ["16:1-24"],
    moves: [
      { zh: "我們的姊妹非比", en: "Our Sister Phoebe", ref: "16:1-2",
        dzh: "我對你們舉薦我們的姊妹非比；她是堅革哩教會中的女執事；她素來幫助許多人，也幫助了我。",
        den: "I commend to you Phoebe, our sister, a servant of the assembly at Cenchreae… she herself also has been a helper of many, and of my own self." },
      { zh: "百基拉和亞居拉", en: "Prisca and Aquila", ref: "16:3-5",
        dzh: "問百基拉和亞居拉安。他們在基督耶穌裡與我同工，也為我的命將自己的頸項置之度外；又問在他們家中的教會安。",
        den: "Greet Prisca and Aquila, my fellow workers in Christ Jesus, who for my life laid down their own necks… Greet the assembly that is in their house." }
    ],
    traits: [
      { k: "strength", zh: "名單裡將近三分之一是女性", en: "Nearly a third of the names in the list are women" },
      { k: "identity", zh: "「猶尼亞」是女性，還是男性（16:7）", en: "Whether “Junia” is female or male (16:7)" }
    ],
    lesson: {
      zh: "最後一章不是附錄：保羅用 16:1-16 的名單，把整封信放回具體的人身上。非比是信的送信者；百基拉和亞居拉有家庭教會；16:7 的猶尼亞和安多尼古「在使徒中是有名望的」，「猶尼亞」是不是女性、「在使徒中」的意思是甚麼，各傳統有不同讀法。",
      en: "The last chapter is not an appendix: with the list in 16:1–16 Paul sets the whole letter back on particular people. Phoebe is the letter’s bearer; Prisca and Aquila have a house church; Andronicus and Junia in 16:7 are “notable among the apostles,” and whether Junia is female and what “among the apostles” means traditions read differently."
    },
    quote: { ref: "16:2",
      zh: "她素來幫助許多人，也幫助了我",
      en: "she herself also has been a helper of many, and of my own self" },
    keyVerses: ["16:1", "16:2", "16:3", "16:5", "16:7", "16:16", "16:22", "16:23"],
    intro: {
      zh: "「我對你們舉薦我們的姊妹非比；她是堅革哩教會中的女執事。」（16:1）非比的職分，和合本譯「女執事」，WEB 作 servant（希臘文 diakonos），各傳統對她是否擔任教會職分有不同理解；她多半是送這封信的人。16:3-5 的百基拉和亞居拉，在使徒行傳 18 章與保羅同做帳棚。16:7 的「猶尼亞」，希臘文可讀為女名或男名，歷來都有人讀；16:22 的德丟是代筆者，16:23 有該猶和城裡的管銀庫的以拉都。",
      en: "“I commend to you Phoebe, our sister, who is a servant of the assembly that is at Cenchreae” (16:1). Phoebe’s role, “女執事” in the CUV and “servant” (Greek diakonos) in the WEB, traditions understand differently as to whether she held a church office; she was probably the carrier of the letter. Prisca and Aquila in 16:3–5 are the couple who made tents with Paul in Acts 18. “Junia” in 16:7 can be read as a woman’s or a man’s name and both readings have been held; Tertius in 16:22 is the scribe, and 16:23 has Gaius and Erastus the city treasurer."
    },
    tip: {
      zh: "「猶尼亞」是女性（猶尼亞）還是男性（猶尼亞斯），「在使徒中有名望」是「被使徒稱讚」還是「是使徒之一」，各傳統有不同讀法。",
      en: "Whether “Junia” is female (Junia) or male (Junias), and whether “notable among the apostles” means praised by the apostles or an apostle herself, traditions read differently."
    },
    related: ["paul_romans", "weak_and_strong", "love_fulfills_law", "olive_tree"]
  }

);
