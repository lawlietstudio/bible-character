// 聖經人物卡 · 使徒行傳 (Acts) — book info + cards.
// Verse text comes from data/acts.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/acts.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Luke 24:49-53; Luke 1:1-4; Isa 53:7-8; Gen 12:3; Ps 2; Gal 2:1-10; Col 4:14; 2 Tim 4:11) appear in prose only.
// Flagged rather than decided: authorship (tradition says Luke; the "we" passages), the book's date and its open ending, whether
// Acts 15 is the same meeting as Galatians 2, how the "tongues" of Acts 2 and 10 relate, the numbers and dates of Paul's journeys,
// and the textual note on 8:37 (an added verse in some manuscripts, shown in the CUV note).

window.BOOKS.push({
  id: "acts",
  zh: "使徒行傳", en: "Acts", abbr: { zh: "徒", en: "Acts" },
  order: 44, section: { zh: "歷史", en: "History" },
  chapters: 28,
  fan: ["pentecost", "paul", "damascus_road"],
  summary: {
    zh: "使徒行傳是路加福音的續集（1:1-2），記耶穌升天之後，福音怎樣從耶路撒冷傳到羅馬。書的大綱是 1:8：「你們必得著能力，並要在耶路撒冷、猶太全地，和撒馬利亞，直到地極，作我的見證。」第 1-7 章在耶路撒冷：升天、五旬節、早期教會的生活、彼得和約翰、司提反殉道。第 8-12 章向外：腓利和埃提阿伯的太監、掃羅在大馬士革路上遇見主、彼得與哥尼流（外邦人第一次領受聖靈）、安提阿教會。第 13-28 章是保羅的三次旅行和被押往羅馬：耶路撒冷會議（15 章）、腓立比、雅典、哥林多、以弗所、米利都的告別、船難，最後在羅馬「放膽傳講神國的道，並沒有人禁止」（28:31）。書沒有交代保羅受審的結果。",
    en: "Acts is the sequel to Luke (1:1–2), telling how after Jesus’s ascension the Good News spread from Jerusalem to Rome. The outline is 1:8: “you will receive power… You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.” Chapters 1–7 are in Jerusalem: the ascension, Pentecost, early church life, Peter and John, Stephen’s martyrdom. Chapters 8–12 go outward: Philip and the Ethiopian eunuch, Saul meeting the Lord on the Damascus road, Peter and Cornelius (the first Gentiles receiving the Spirit), the church at Antioch. Chapters 13–28 are Paul’s three journeys and his journey to Rome as a prisoner: the Jerusalem council (ch 15), Philippi, Athens, Corinth, Ephesus, the Miletus farewell, the shipwreck, and finally in Rome “preaching God’s Kingdom… without hindrance” (28:31). The book does not tell the outcome of Paul’s trial."
  },
  outline: [
    { zh: "升天；聖靈的應許；補選馬提亞", en: "The ascension; the promise of the Spirit; choosing Matthias" },
    { zh: "五旬節；彼得的講道；最早的教會生活", en: "Pentecost; Peter’s sermon; the first church life" },
    { zh: "美門的瘸子；彼得在所羅門廊下", en: "The lame man at the Beautiful Gate; Peter at Solomon’s Portico" },
    { zh: "公議會前的彼得和約翰；凡物公用；巴拿巴", en: "Peter and John before the council; sharing all things; Barnabas" },
    { zh: "亞拿尼亞與撒菲拉；使徒被捕", en: "Ananias and Sapphira; the apostles arrested" },
    { zh: "選出七個人；司提反被捕", en: "Seven chosen; Stephen arrested" },
    { zh: "司提反的講論與殉道", en: "Stephen’s speech and martyrdom" },
    { zh: "腓利在撒馬利亞；埃提阿伯的太監", en: "Philip in Samaria; the Ethiopian eunuch" },
    { zh: "掃羅在大馬士革路上；亞拿尼亞；大比大", en: "Saul on the Damascus road; Ananias; Tabitha" },
    { zh: "哥尼流和彼得", en: "Cornelius and Peter" },
    { zh: "彼得回耶路撒冷；安提阿教會；稱為「基督徒」", en: "Peter back in Jerusalem; the church at Antioch; called “Christians”" },
    { zh: "彼得被囚；天使領他出來", en: "Peter imprisoned; the angel leads him out" },
    { zh: "巴拿巴和掃羅被差遣；第一次旅行", en: "Barnabas and Saul sent out; the first journey" },
    { zh: "以哥念與路司得拉", en: "Iconium and Lystra" },
    { zh: "耶路撒冷會議", en: "The Jerusalem council" },
    { zh: "馬其頓的異象；呂底亞；腓立比的禁卒", en: "The Macedonian vision; Lydia; the Philippian jailer" },
    { zh: "帖撒羅尼迦與庇哩亞；雅典的亞略巴古", en: "Thessalonica and Berea; the Areopagus in Athens" },
    { zh: "哥林多；百基拉與亞居拉；亞波羅", en: "Corinth; Priscilla and Aquila; Apollos" },
    { zh: "以弗所：施洗約翰的門徒；大有能力的福音", en: "Ephesus: John’s disciples; the Word growing mightily" },
    { zh: "以弗所的騷亂", en: "The riot in Ephesus" },
    { zh: "特羅亞的猶推古；米利都的告別", en: "Eutychus in Troas; the farewell at Miletus" },
    { zh: "往耶路撒冷去；亞迦布的預言", en: "Going up to Jerusalem; Agabus’s prophecy" },
    { zh: "保羅在耶路撒冷對群眾的講論", en: "Paul’s speech to the crowd in Jerusalem" },
    { zh: "保羅在公議會前；密謀", en: "Paul before the council; the plot" },
    { zh: "在腓力斯面前", en: "Before Felix" },
    { zh: "在非斯都和亞基帕面前；上訴凱撒", en: "Before Festus and Agrippa; the appeal to Caesar" },
    { zh: "往羅馬的航程；風暴與船難", en: "The voyage to Rome; storm and shipwreck" },
    { zh: "米利大島；羅馬的寓所；「放膽傳講」", en: "Malta; the house in Rome; “with all boldness”" }
  ],
  notes: {
    zh: "小提示：使徒行傳沒有署名，傳統上認為作者是路加，書中有幾段用「我們」（16:10-17；20:5-21:18；27:1-28:16），表示作者可能在場。書的結尾沒有說保羅的案子如何結束，只說他在羅馬的寓所住了兩年（28:30-31）。保羅在書信中說到的一些事（如加拉太書 2 章的耶路撒冷聚會），與使徒行傳 15 章是否同一件事，注釋書有不同看法。",
    en: "Good to know: Acts is anonymous; tradition says its author is Luke, and the book has “we” sections (16:10–17; 20:5–21:18; 27:1–28:16), suggesting the author may have been present. The book ends without saying how Paul’s case ended, only that he lived two years in his rented house in Rome (28:30–31). Whether some things Paul mentions in his letters (such as the Jerusalem meeting of Galatians 2) are the same event as Acts 15 commentaries differ."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul", book: "acts", no: 1, kind: "person", type: "faith", rarity: 6,
    zh: "保羅（掃羅）", en: "Paul (Saul)",
    meaning: { zh: "希伯來名掃羅，羅馬名保羅", en: "Hebrew name Saul, Roman name Paul" },
    tag: { zh: "從逼迫者成為使者，帶著福音走遍地中海", en: "From Persecutor to Messenger Across the Mediterranean" },
    role: { zh: "外邦人的使徒・帳棚匠", en: "Apostle to the Gentiles · tentmaker" },
    ch: [7, 9, 13, 16, 28],
    passages: ["7:58", "9:1-19", "13:9", "16:25-34", "28:30-31"],
    moves: [
      { zh: "掃羅又名保羅", en: "Saul, Who Is Also Paul", ref: "13:9",
        dzh: "掃羅又名保羅，被聖靈充滿，定睛看著那攔阻福音的人。",
        den: "Saul, who is also called Paul, filled with the Holy Spirit, looked intently at him." },
      { zh: "放膽傳講，沒有人禁止", en: "With All Boldness, Without Hindrance", ref: "28:30-31",
        dzh: "保羅在自己所租的房子裡住了足足兩年，放膽傳講神國的道，並沒有人禁止。",
        den: "Paul stayed two whole years in his own rented house, preaching God’s Kingdom with all boldness, without hindrance." }
    ],
    traits: [
      { k: "strength", zh: "到每一座城，先找會堂，再找人群", en: "In each city goes first to the synagogue, then to the crowds" },
      { k: "weakness", zh: "曾經看守司提反的衣裳，並喜悅他被害（7:58；8:1）", en: "Once held the cloaks at Stephen’s death and approved of it (7:58; 8:1)" }
    ],
    lesson: {
      zh: "掃羅第一次出現，是站在司提反被石頭打死的人群邊上（7:58）；最後一次，是在羅馬「放膽傳講，並沒有人禁止」（28:31）。這兩個畫面中間，是主在大馬士革路上的一句話：「掃羅！掃羅！你為甚麼逼迫我？」（9:4）",
      en: "Saul first appears at the edge of the crowd stoning Stephen (7:58); he last appears in Rome “preaching… with all boldness, without hindrance” (28:31). Between the two pictures is the word from the Lord on the Damascus road: “Saul, Saul, why do you persecute me?” (9:4)."
    },
    quote: { ref: "28:31",
      zh: "放膽傳講神國的道，將主耶穌基督的事教導人，並沒有人禁止",
      en: "preaching God’s Kingdom, and teaching the things concerning the Lord Jesus Christ with all boldness, without hindrance" },
    keyVerses: ["7:58", "9:4", "9:15", "13:2", "16:31", "17:22", "20:24", "28:31"],
    intro: {
      zh: "保羅出現在使徒行傳第 7 章，是「一個少年人名叫掃羅」（7:58）；到第 13 章起，書改稱他為保羅（13:9），他以猶太人的身份生在大數，也是羅馬公民（22:25-28）。他的三次旅行與被押往羅馬，佔了全書後半。他用手藝維生，在哥林多與百基拉、亞居拉同做帳棚（18:3）。書沒有說他的死；使徒行傳結束在他兩年的寓所生活。他寫的書信，在新約後面各卷。",
      en: "Paul first appears in Acts 7 as “a young man named Saul” (7:58); from chapter 13 the book calls him Paul (13:9). He was a Jew born in Tarsus and also a Roman citizen (22:25–28). His three journeys and his voyage to Rome as a prisoner fill the second half of the book. He supports himself by a trade, making tents with Priscilla and Aquila in Corinth (18:3). The book does not tell his death; Acts ends with his two years in the rented house. His letters are the later books of the New Testament."
    },
    tip: {
      zh: "「保羅」是羅馬名，書中沒有說這是在甚麼時候起的；「掃羅」和「保羅」是同一個人。",
      en: "“Paul” is his Roman name; the book does not say when he began to use it; “Saul” and “Paul” are one man."
    },
    related: ["damascus_road", "stephen_martyr", "philippian_jailer", "areopagus", "paul_in_rome"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "ascension_acts", book: "acts", no: 2, kind: "heavenly", type: "heaven", rarity: 4,
    zh: "你們要作我的見證", en: "You Will Be My Witnesses",
    tag: { zh: "你們為甚麼站著望天呢？", en: "Why Do You Stand Looking into the Sky?" },
    role: { zh: "升天（1:1-11）", en: "The ascension (1:1–11)" },
    ch: [1],
    passages: ["1:1-11"],
    moves: [
      { zh: "耶路撒冷到地極", en: "Jerusalem to the Ends of the Earth", ref: "1:8",
        dzh: "聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒馬利亞，直到地極，作我的見證。",
        den: "“You will receive power… You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.”" },
      { zh: "他還要怎樣來", en: "He Will Come in the Same Way", ref: "1:9-11",
        dzh: "他被取上升，有一朵雲彩把他接去；兩個白衣人說：這離開你們被接升天的耶穌，還要怎樣來。",
        den: "He was taken up and a cloud received him; two men in white said, “This Jesus… will come back in the same way as you saw him going into the sky.”" }
    ],
    traits: [
      { k: "strength", zh: "1:8 是全書的大綱", en: "1:8 is the book’s outline" },
      { k: "identity", zh: "與路加福音 24:50-53 相接", en: "Joins Luke 24:50–53" }
    ],
    lesson: {
      zh: "門徒問「主啊，你復興以色列國就在這時候嗎？」（1:6）耶穌沒有回答時間，而是給了一個任務和一個範圍：「作我的見證」，從耶路撒冷到地極（1:7-8）。然後兩個白衣人說：不要站著望天（1:11）。",
      en: "The disciples ask, “Lord, are you now restoring the kingdom to Israel?” (1:6). Jesus does not answer the time but gives a task and a range: “witnesses to me,” from Jerusalem to the ends of the earth (1:7–8). Then two men in white say: do not stand looking into the sky (1:11)."
    },
    quote: { ref: "1:8",
      zh: "並要在耶路撒冷、猶太全地，和撒馬利亞，直到地極，作我的見證",
      en: "You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth." },
    keyVerses: ["1:1", "1:3", "1:4", "1:6", "1:8", "1:9", "1:11"],
    intro: {
      zh: "「提阿非羅啊，我已經作了前書，論到耶穌開頭一切所行所教訓的，直到他藉著聖靈吩咐所揀選的使徒，以後被接上升的日子為止。」（1:1-2）受害之後，他用許多憑據將自己活活地顯給使徒看，四十天之久向他們顯現，講說神國的事（1:3）。他吩咐他們不要離開耶路撒冷，要等候父所應許的（1:4）。1:9 他被取上升，一朵雲彩把他接去。路加福音 24:50-53 也記升天，兩處時間（當天或四十天後）的記載如何接，有不同說法。",
      en: "“The first book I wrote, Theophilus, concerned all that Jesus began both to do and to teach, until the day in which he was received up, after he had given commandment through the Holy Spirit to the apostles whom he had chosen” (1:1–2). After his suffering he showed himself alive to them by many proofs, appearing to them over forty days and speaking of the Kingdom of God (1:3). He charged them not to depart from Jerusalem but to wait for the Father’s promise (1:4). In 1:9 he is taken up and a cloud receives him. Luke 24:50–53 also records the ascension; how the two accounts (that same day, or after forty days) fit has different explanations."
    },
    tip: {
      zh: "「四十天」（1:3）與路加福音 24 章看似在同一天的記載，是否有衝突，各解不一。",
      en: "Whether the “forty days” (1:3) conflicts with Luke 24’s apparently same-day account is explained in different ways."
    },
    related: ["pentecost", "paul", "peters_sermon", "paul_in_rome"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "pentecost", book: "acts", no: 3, kind: "other", type: "power", rarity: 5,
    zh: "五旬節", en: "Pentecost",
    tag: { zh: "舌頭如火焰，分開落在各人頭上", en: "Tongues Like Fire, One Resting on Each" },
    role: { zh: "聖靈降臨（2:1-13）", en: "The coming of the Spirit (2:1–13)" },
    ch: [2],
    passages: ["2:1-13"],
    moves: [
      { zh: "一陣大風", en: "A Rushing Wind", ref: "2:2-3",
        dzh: "忽然，從天上有響聲下來，好像一陣大風吹過，充滿了他們所坐的屋子；又有舌頭如火焰顯現，分開落在各人頭上。",
        den: "Suddenly there came a sound like the rushing of a mighty wind, filling all the house; tongues like fire appeared and one sat on each of them." },
      { zh: "說起別國的話", en: "Speaking Other Languages", ref: "2:4",
        dzh: "他們就都被聖靈充滿，按著聖靈所賜的口才說起別國的話來。",
        den: "They were all filled with the Holy Spirit, and began to speak with other languages, as the Spirit gave them the ability to speak." }
    ],
    traits: [
      { k: "strength", zh: "各國的人聽見自己的鄉談（2:6）", en: "Each nation hears its own language (2:6)" },
      { k: "weakness", zh: "有人譏誚說「他們是新酒灌滿了」（2:13）", en: "Some mock, “They are filled with new wine” (2:13)" }
    ],
    lesson: {
      zh: "聖靈降臨在「眾人」身上，不只十二使徒（2:1、4）；他們說的是「別國的話」，各國來的人聽見自己的鄉談，在述說「神的大作為」（2:6、11）。反應有兩種：希奇，或譏誚。",
      en: "The Spirit comes on “all,” not just the twelve (2:1, 4); they speak “other languages,” and people from many nations hear their own tongues declare “the mighty works of God” (2:6, 11). The reactions are two: amazement or mockery."
    },
    quote: { ref: "2:4",
      zh: "他們就都被聖靈充滿，按著聖靈所賜的口才說起別國的話來",
      en: "They were all filled with the Holy Spirit, and began to speak with other languages" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4", "2:6", "2:7", "2:11", "2:13"],
    intro: {
      zh: "五旬節到了，門徒都聚集在一處（2:1）。「五旬節」是猶太人的節期，在逾越節後五十天，各國的猶太人和歸信者都在耶路撒冷。聖靈降臨，眾人說起別國的話（2:4）；各國來的人聽見，就都驚訝，說「這些說話的不都是加利利人嗎？」（2:7）2:9-11 列出十多個地名和族群。「說方言」和 10:46 哥尼流家的情形、哥林多前書 12-14 章的「方言」，是否同一回事，各傳統有不同理解。",
      en: "When the day of Pentecost has come, the disciples are all together in one place (2:1). Pentecost is a Jewish feast fifty days after Passover, when Jews and proselytes from many nations are in Jerusalem. The Spirit comes and they speak other languages (2:4); people from many nations hear and are amazed: “Aren’t all these who speak Galileans?” (2:7). Verses 9–11 list a dozen places and peoples. Whether this “speaking in tongues” is the same as in Cornelius’s house (10:46) and in 1 Corinthians 12–14, traditions understand differently."
    },
    tip: {
      zh: "2:4 的「別國的話」（有人能聽懂）與哥林多前書的「方言」是否同類，各傳統有不同看法。",
      en: "Whether the “other languages” of 2:4 (understood by hearers) are the same kind as the “tongues” of 1 Corinthians commentaries differ."
    },
    related: ["peters_sermon", "ascension_acts", "shared_life", "cornelius_peter"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "peters_sermon", book: "acts", no: 4, kind: "person", type: "faith", rarity: 4,
    zh: "彼得的講道", en: "Peter’s Sermon",
    tag: { zh: "你們各人要悔改，奉耶穌基督的名受洗", en: "Repent, and Be Baptized in the Name of Jesus Christ" },
    role: { zh: "五旬節的講道（2:14-41）", en: "The Pentecost sermon (2:14–41)" },
    ch: [2],
    passages: ["2:14-41"],
    moves: [
      { zh: "這是先知所說的", en: "This Is What Was Spoken", ref: "2:14-17",
        dzh: "彼得和十一個使徒站起來，高聲說：這正是先知約珥所說的，神的靈要澆灌凡有血氣的。",
        den: "Peter stood up with the eleven and raised his voice: this is what was spoken by the prophet Joel — God’s Spirit poured out on all flesh." },
      { zh: "悔改，受洗", en: "Repent and Be Baptized", ref: "2:38",
        dzh: "彼得說：你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈。",
        den: "Peter said, “Repent, and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit.”" }
    ],
    traits: [
      { k: "strength", zh: "從三個月前在庭院不認主，到站在眾人面前（2:14）", en: "From denying him in a courtyard to standing before the crowd (2:14)" },
      { k: "identity", zh: "用約珥書、詩篇作根據", en: "Argues from Joel and the Psalms" }
    ],
    lesson: {
      zh: "那個三次不認耶穌的彼得，現在站起來，向數千人說話。聽見的人「覺得扎心」，問「弟兄們，我們當怎樣行？」（2:37）。那一天約有三千人受洗（2:41）。",
      en: "The Peter who denied Jesus three times now stands up to speak to thousands. Those who hear are “cut to the heart” and ask, “Brothers, what shall we do?” (2:37). About three thousand are baptized that day (2:41)."
    },
    quote: { ref: "2:38",
      zh: "你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈",
      en: "Repent, and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins" },
    keyVerses: ["2:14", "2:16", "2:22", "2:32", "2:36", "2:37", "2:38", "2:41"],
    intro: {
      zh: "彼得和十一個使徒站起來，高聲說：這些人不是喝醉了，才是巳時（2:14-15）。他引約珥書 2:28-32 說這就是聖靈澆灌（2:16-21），接著說到耶穌的死與復活，並引詩篇 16、110 篇（2:22-36）。「所以以色列全家當確實地知道，你們釘在十字架上的這位耶穌，神已經立他為主，為基督了。」（2:36）聽見的人扎心，彼得說了 2:38，並說這應許是給你們和你們的兒女，並一切在遠方的人（2:39）。",
      en: "Peter stands up with the eleven and raises his voice: these are not drunk, for it is only the third hour (2:14–15). He cites Joel 2:28–32 as the pouring out of the Spirit (2:16–21), then speaks of Jesus’s death and resurrection, citing Psalms 16 and 110 (2:22–36). “Let all the house of Israel therefore know certainly that God has made him both Lord and Christ, this Jesus whom you crucified” (2:36). The hearers are cut to the heart, and Peter says 2:38 and that the promise is for you, your children and all who are far off (2:39)."
    },
    tip: {
      zh: "「奉耶穌基督的名受洗，叫你們的罪得赦」，其中「叫」的含意，各教會傳統有不同讀法。",
      en: "What “for the forgiveness of sins” means in relation to baptism church traditions read differently."
    },
    related: ["pentecost", "lame_man_gate", "boldness_council", "cornelius_peter"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "shared_life", book: "acts", no: 5, kind: "other", type: "love", rarity: 4,
    zh: "凡物公用", en: "All Things in Common",
    tag: { zh: "擘餅、祈禱、彼此交接", en: "Breaking Bread, Prayer, Fellowship" },
    role: { zh: "最早的教會生活（2:42-47）", en: "The first church life (2:42–47)" },
    ch: [2, 4],
    passages: ["2:42-47", "4:32-35"],
    moves: [
      { zh: "恆心遵守", en: "Devoted to", ref: "2:42",
        dzh: "都恆心遵守使徒的教訓，彼此交接，擘餅，祈禱。",
        den: "They continued steadfastly in the apostles’ teaching and fellowship, in the breaking of bread, and prayer." },
      { zh: "照各人所需用的", en: "As Anyone Had Need", ref: "2:44-45",
        dzh: "信的人都在一處，凡物公用，並且賣了田產、家業，照各人所需用的分給各人。",
        den: "All who believed were together and had all things in common; they sold their possessions and goods and distributed them to all, as anyone had need." }
    ],
    traits: [
      { k: "strength", zh: "「得眾民的喜愛」（2:47）", en: "“Having favor with all the people” (2:47)" },
      { k: "identity", zh: "四件事：教訓、交接、擘餅、祈禱", en: "Four things: teaching, fellowship, bread, prayer" }
    ],
    lesson: {
      zh: "他們的分享是自願的，「照各人所需用的」（2:45；4:35），不是強迫。「主將得救的人天天加給他們」（2:47）：教會的增長，與他們的生活連在一起。",
      en: "Their sharing is voluntary, “as anyone had need” (2:45; 4:35), not compelled. “The Lord added to the assembly day by day those who were being saved” (2:47): the church’s growth is tied to their life together."
    },
    quote: { ref: "2:42",
      zh: "都恆心遵守使徒的教訓，彼此交接，擘餅，祈禱",
      en: "They continued steadfastly in the apostles’ teaching and fellowship, in the breaking of bread, and prayer." },
    keyVerses: ["2:42", "2:43", "2:44", "2:45", "2:46", "2:47", "4:32", "4:34"],
    intro: {
      zh: "2:42-47 是對最早的教會生活的一幅概括：恆心遵守使徒的教訓，彼此交接，擘餅，祈禱；使徒行許多奇事神蹟；信的人凡物公用，賣了田產，照各人所需分給各人；天天同心合意在殿裡，在家中擘餅，存著歡喜、誠實的心用飯。4:32-35 又說「信的人都是一心一意」，沒有一個人說他的東西是自己的，也沒有一個缺乏的。這是自願的分享，5:4 說田地賣了，價銀還是由你作主。",
      en: "Acts 2:42–47 is a summary picture of the first church life: continuing in the apostles’ teaching, fellowship, breaking of bread and prayer; many wonders and signs through the apostles; believers having all things in common, selling property and distributing to all as anyone had need; day by day in the temple with one accord and breaking bread at home with gladness and sincerity. 4:32–35 adds that “the multitude of those who believed were of one heart and soul,” none claiming their things as their own, and none lacking. It was voluntary sharing; 5:4 says that after the sale the money was still in your power."
    },
    tip: {
      zh: "「凡物公用」是自願的（5:4）；它與後來的教會生活如何對應，各傳統有不同看法。",
      en: "“All things in common” was voluntary (5:4); how it relates to later church life traditions see differently."
    },
    related: ["barnabas_encourager", "ananias_sapphira", "seven_chosen", "pentecost"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "barnabas_encourager", book: "acts", no: 6, kind: "person", type: "love", rarity: 4,
    zh: "巴拿巴", en: "Barnabas",
    meaning: { zh: "「勸慰子」", en: "“Son of Encouragement”" },
    tag: { zh: "好人，被聖靈充滿，大有信心", en: "A Good Man, Full of the Spirit and of Faith" },
    role: { zh: "塞浦路斯的利未人（4:36-37；9:27；11:22-26）", en: "A Levite of Cyprus (4:36–37; 9:27; 11:22–26)" },
    ch: [4, 9, 11, 13, 15],
    passages: ["4:36-37", "9:26-27", "11:22-26", "13:1-3", "15:36-41"],
    moves: [
      { zh: "他接待了掃羅", en: "He Took Saul", ref: "9:27",
        dzh: "門徒都怕掃羅，惟有巴拿巴接待他，領去見使徒，述說他在大馬士革怎麼放膽傳道。",
        den: "The disciples feared Saul, but Barnabas took him and brought him to the apostles, and declared how he had preached boldly at Damascus." },
      { zh: "好人，大有信心", en: "A Good Man", ref: "11:23-24",
        dzh: "巴拿巴到了安提阿，看見神所賜的恩就歡喜，勸勉眾人立定心志；他原是個好人，被聖靈充滿，大有信心。",
        den: "He was glad to see God’s grace, exhorted them all to remain near to the Lord; he was a good man, full of the Holy Spirit and of faith." }
    ],
    traits: [
      { k: "strength", zh: "先接待掃羅，後去大數找他（9:27；11:25）", en: "First welcomes Saul, later goes to Tarsus to find him (9:27; 11:25)" },
      { k: "weakness", zh: "與保羅為馬可而分手（15:37-39）", en: "Parts from Paul over Mark (15:37–39)" }
    ],
    lesson: {
      zh: "巴拿巴的名字是使徒給他起的「勸慰子」（4:36），他的角色也是如此：賣田地獻上（4:37）、在眾人怕掃羅的時候接待他（9:27）、到安提阿看見神的恩而歡喜（11:23）。後來他和保羅因為馬可分手（15:39），但他仍然帶著馬可走。",
      en: "His name “Son of Encouragement” was given by the apostles (4:36), and his role fits: he sells a field and gives (4:37), welcomes Saul when all feared him (9:27), and rejoices at God’s grace in Antioch (11:23). Later he and Paul part over Mark (15:39), but he takes Mark with him."
    },
    quote: { ref: "9:27",
      zh: "惟有巴拿巴接待他，領去見使徒",
      en: "But Barnabas took him, and brought him to the apostles" },
    keyVerses: ["4:36", "4:37", "9:26", "9:27", "11:22", "11:24", "13:2", "15:39"],
    intro: {
      zh: "「有一個利未人，生在塞浦路斯，名叫約瑟，使徒稱他為巴拿巴（翻出來就是勸慰子）。他有田地，也賣了，把價銀拿來，放在使徒腳前。」（4:36-37）掃羅回到耶路撒冷想與門徒結交，他們都怕他，惟有巴拿巴接待他（9:26-27）。耶路撒冷的教會聽說安提阿有人信主，就差派巴拿巴去（11:22），他又往大數去找掃羅，帶他到安提阿（11:25-26）。聖靈叫教會分派巴拿巴和掃羅出去（13:2）。",
      en: "“Joses, who by the apostles was also called Barnabas (which is, being interpreted, Son of Encouragement), a Levite, a man of Cyprus by race, having a field, sold it, and brought the money and laid it at the apostles’ feet” (4:36–37). When Saul comes to Jerusalem trying to join the disciples, they are all afraid of him, but Barnabas takes him (9:26–27). When the Jerusalem church hears that people in Antioch have believed, they send Barnabas (11:22), and he goes to Tarsus to look for Saul and brings him to Antioch (11:25–26). The Holy Spirit tells the church to separate Barnabas and Saul (13:2)."
    },
    tip: {
      zh: "巴拿巴的「馬可」，傳統上認為是馬可福音的作者；使徒行傳 15:37 只說「稱呼馬可的約翰」。",
      en: "The “Mark” of Barnabas is traditionally the author of Mark’s Gospel; Acts 15:37 says only “John who was called Mark.”"
    },
    related: ["shared_life", "damascus_road", "antioch_church", "jerusalem_council"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "lame_man_gate", book: "acts", no: 7, kind: "person", type: "power", rarity: 4,
    zh: "美門口的瘸子", en: "The Lame Man at the Beautiful Gate",
    tag: { zh: "金銀我都沒有，只把我所有的給你", en: "I Have No Silver or Gold, but What I Have I Give You" },
    role: { zh: "第一件神蹟（3:1-10）", en: "The first sign (3:1–10)" },
    ch: [3],
    passages: ["3:1-10"],
    moves: [
      { zh: "金銀我都沒有", en: "No Silver or Gold", ref: "3:6",
        dzh: "彼得說：金銀我都沒有，只把我所有的給你：我奉拿撒勒人耶穌基督的名，叫你起來行走！",
        den: "Peter said, “I have no silver or gold, but what I have, that I give you. In the name of Jesus Christ of Nazareth, get up and walk!”" },
      { zh: "跳起來，站著走", en: "Leaping, Walking, Praising", ref: "3:7-8",
        dzh: "彼得拉著他的右手，扶他起來，他的腳和踝子骨立刻健壯了；他跳起來，站著，又走，同他們進了殿，走著，跳著，讚美神。",
        den: "He raised him by the right hand; his feet and ankles were strengthened; leaping up, he stood, walked, entered the temple with them and praised God." }
    ],
    traits: [
      { k: "strength", zh: "「定睛看他」：彼得與約翰先看這個人（3:4）", en: "“Looked intently at him”: Peter and John first look at the man (3:4)" },
      { k: "weakness", zh: "四十多歲，生來瘸腿，天天被人抬到門口（3:2；4:22）", en: "Over forty, lame from birth, carried daily to the gate (3:2; 4:22)" }
    ],
    lesson: {
      zh: "他向人討錢，得到的是站起來。彼得沒有說「我沒有東西」就走開，他說「只把我所有的給你」。得醫治的人第一個行動，是「走著，跳著，讚美神」，並進了殿（3:8）。",
      en: "He begs for money and is given the ability to stand. Peter does not say “I have nothing” and walk away; he says “what I have, that I give you.” The healed man’s first act is “walking, leaping, and praising God,” entering the temple (3:8)."
    },
    quote: { ref: "3:6",
      zh: "金銀我都沒有，只把我所有的給你",
      en: "I have no silver or gold, but what I have, that I give you." },
    keyVerses: ["3:1", "3:2", "3:4", "3:6", "3:7", "3:8", "3:10", "3:16"],
    intro: {
      zh: "申初禱告的時候，彼得、約翰上殿去（3:1）。有一個人，生來是瘸腿的，天天被人抬來，放在殿的一個門口，名叫美門，要求進殿的人賙濟（3:2）。彼得、約翰定睛看他，說「你看我們」，他就看著他們，指望得著甚麼（3:4-5）。彼得說了 3:6，拉著他的右手，扶他起來（3:7）。眾人見了，又驚又奇（3:10）。彼得就趁機對百姓講道，說這是神所榮耀的僕人耶穌的名使他健壯（3:12-16）。",
      en: "At the ninth hour, the hour of prayer, Peter and John go up to the temple (3:1). A man lame from birth is carried daily and laid at a gate of the temple called Beautiful to ask alms of those entering (3:2). Peter and John look intently at him and say, “Look at us,” and he gives them his attention, expecting to get something (3:4–5). Peter says 3:6, takes him by the right hand and raises him (3:7). The people are filled with wonder and amazement (3:10). Peter seizes the opportunity to preach, saying it is the name of Jesus, God’s glorified servant, that made him strong (3:12–16)."
    },
    tip: {
      zh: "「美門」是殿的哪一個門，經文沒有說明，歷來有幾種說法。",
      en: "Which of the temple’s gates the “Beautiful” gate was the text does not say, and proposals vary."
    },
    related: ["peters_sermon", "boldness_council", "pentecost", "tabitha"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "boldness_council", book: "acts", no: 8, kind: "other", type: "power", rarity: 3,
    zh: "公議會前的膽量", en: "Boldness Before the Council",
    tag: { zh: "我們所看見所聽見的，不能不說", en: "We Can’t Help Telling What We Saw and Heard" },
    role: { zh: "彼得和約翰被帶到議會（4:1-22）", en: "Peter and John before the council (4:1–22)" },
    ch: [4],
    passages: ["4:1-22"],
    moves: [
      { zh: "別無拯救", en: "No Other Name", ref: "4:12",
        dzh: "除他以外，別無拯救；因為在天下人間，沒有賜下別的名，我們可以靠著得救。",
        den: "“There is salvation in none other, for neither is there any other name under heaven, that is given among men, by which we must be saved!”" },
      { zh: "不能不說", en: "We Can’t Help Telling", ref: "4:19-20",
        dzh: "彼得、約翰說：聽從你們，不聽從神，這在神面前合理不合理，你們自己酌量吧！我們所看見所聽見的，不能不說。",
        den: "“Whether it is right in the sight of God to listen to you rather than to God, judge for yourselves, for we can’t help telling the things which we saw and heard.”" }
    ],
    traits: [
      { k: "strength", zh: "「是沒有學問的小民」，卻有膽量（4:13）", en: "“Unlearned and ordinary men,” yet bold (4:13)" },
      { k: "weakness", zh: "被拘留一夜，受警告（4:3、18）", en: "Held overnight and warned (4:3, 18)" }
    ],
    lesson: {
      zh: "議會的人「見彼得、約翰的膽量，又看出他們原是沒有學問的小民，就希奇，認明他們是跟過耶穌的」（4:13）。那個得醫治的人「站在旁邊」，他們就無話可駁（4:14）。",
      en: "The council “saw the boldness of Peter and John, and had perceived that they were unlearned and ordinary men,” and “they recognized that they had been with Jesus” (4:13). The healed man standing beside them left them “nothing to say against it” (4:14)."
    },
    quote: { ref: "4:20",
      zh: "我們所看見所聽見的，不能不說",
      en: "for we can’t help telling the things which we saw and heard" },
    keyVerses: ["4:1", "4:3", "4:8", "4:12", "4:13", "4:14", "4:19", "4:20", "4:31"],
    intro: {
      zh: "彼得、約翰對百姓說話的時候，祭司們和守殿官並撒都該人忽然來了，因為他們教訓百姓，並傳耶穌復活的事，就把他們拿住，因為天已經晚了，就押到第二天（4:1-3）。次日，官府、長老、文士聚集在耶路撒冷（4:5）。彼得被聖靈充滿，說 4:12。議會的人商議了一下，吩咐他們不可奉耶穌的名講論教訓人（4:18），他們回答 4:19-20。放走之後，眾信徒同聲禱告，所聚集的地方震動，他們就放膽講論神的道（4:23-31）。",
      en: "As Peter and John speak to the people, the priests, the captain of the temple and the Sadducees come, upset that they teach the people and proclaim in Jesus the resurrection, and arrest them, putting them in custody until the next day as it was evening (4:1–3). The next day the rulers, elders and scribes gather in Jerusalem (4:5). Peter, filled with the Holy Spirit, says 4:12. The council confers and orders them not to speak or teach in Jesus’s name (4:18), and they answer 4:19–20. Released, the believers pray with one voice, the place where they are gathered is shaken, and they speak the word of God with boldness (4:23–31)."
    },
    tip: {
      zh: "「別無拯救」是對議會的回答；它的涵義與對別的信仰的態度，各傳統有不同說明。",
      en: "“No other name” is an answer to the council; its meaning and bearing on other faiths traditions explain differently."
    },
    related: ["lame_man_gate", "peters_sermon", "ananias_sapphira", "stephen_martyr"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "ananias_sapphira", book: "acts", no: 9, kind: "person", type: "scheme", rarity: 3,
    zh: "亞拿尼亞與撒菲拉", en: "Ananias and Sapphira",
    tag: { zh: "你不是欺哄人，是欺哄神了", en: "You Haven’t Lied to Men, but to God" },
    role: { zh: "教會裡的欺哄（5:1-11）", en: "Deceit inside the church (5:1–11)" },
    ch: [5],
    passages: ["5:1-11"],
    moves: [
      { zh: "把價銀私自留下幾分", en: "Keeping Back Part", ref: "5:3",
        dzh: "彼得說：亞拿尼亞！為甚麼撒但充滿了你的心，叫你欺哄聖靈，把田地的價銀私自留下幾分呢？",
        den: "Peter said, “Ananias, why has Satan filled your heart to lie to the Holy Spirit, and to keep back part of the price of the land?”" },
      { zh: "你作主", en: "It Was in Your Power", ref: "5:4",
        dzh: "田地還沒有賣，不是你自己的嗎？既賣了，價銀不是你作主嗎？你不是欺哄人，是欺哄神了。",
        den: "“While you kept it, didn’t it remain your own? After it was sold, wasn’t it in your power?… You haven’t lied to men, but to God.”" }
    ],
    traits: [
      { k: "strength", zh: "他們原本可以不捐，或只捐一部分", en: "They could have given nothing, or only part" },
      { k: "weakness", zh: "假裝全捐（5:2）", en: "Pretended to give it all (5:2)" }
    ],
    lesson: {
      zh: "彼得說得很清楚：不是不捐，而是不誠實。地和錢都是他們自己的（5:4）。這件事緊接在巴拿巴真心獻上的事（4:36-37）之後；「全教會和聽見這事的人都甚懼怕」（5:11）。",
      en: "Peter makes it plain: the fault is not in not giving, but in dishonesty. The land and money were their own (5:4). The story follows Barnabas’s sincere gift (4:36–37); “great fear came on the whole assembly, and on all who heard these things” (5:11)."
    },
    quote: { ref: "5:4",
      zh: "你不是欺哄人，是欺哄神了",
      en: "You haven’t lied to men, but to God." },
    keyVerses: ["5:1", "5:2", "5:3", "5:4", "5:5", "5:9", "5:11"],
    intro: {
      zh: "有一個人名叫亞拿尼亞，同他的妻子撒菲拉賣了田產，把價銀私自留下幾分，他的妻子也知道，其餘的幾分拿來放在使徒腳前（5:1-2）。彼得責備他，亞拿尼亞聽見這話，就仆倒，斷了氣；聽見的人都甚懼怕（5:5）。約過了三小時，他的妻子進來，還不知道這事；彼得問她，她說了同樣的謊，也仆倒死了（5:7-10）。這件事讓人難以輕易下結論：經文只記載事實，沒有說他們的最終結局。",
      en: "A man named Ananias, with Sapphira his wife, sold a possession and kept back part of the price, his wife also knowing, and brought a certain part and laid it at the apostles’ feet (5:1–2). Peter rebukes him; hearing this, Ananias falls down and dies; great fear comes on all who hear (5:5). About three hours later his wife comes in, not knowing what had happened; Peter questions her, she repeats the lie and falls down dead (5:7–10). It is a story hard to conclude from lightly: the text records the facts and says nothing about their final end."
    },
    tip: {
      zh: "經文只說他們死了，沒有說他們失去了救恩；這是一個難讀的故事，注釋書有不同的看法。",
      en: "The text says only that they died, not that they lost salvation; it is a hard story, and commentaries differ."
    },
    related: ["shared_life", "barnabas_encourager", "boldness_council", "seven_chosen"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "seven_chosen", book: "acts", no: 10, kind: "other", type: "wisdom", rarity: 3,
    zh: "選出七個人", en: "Seven Chosen",
    tag: { zh: "有好名聲、被聖靈充滿、智慧充足的人", en: "Men of Good Report, Full of the Spirit and of Wisdom" },
    role: { zh: "照顧寡婦（6:1-7）", en: "Caring for the widows (6:1–7)" },
    ch: [6],
    passages: ["6:1-7"],
    moves: [
      { zh: "管理飯食", en: "Serving Tables", ref: "6:2-3",
        dzh: "我們撇下神的道去管理飯食，原是不合宜的。所以弟兄們，當從你們中間選出七個有好名聲、被聖靈充滿、智慧充足的人。",
        den: "“It is not appropriate for us to forsake the word of God and serve tables. Select from among you seven men of good report, full of the Spirit and wisdom.”" },
      { zh: "神的道興旺起來", en: "The Word of God Increased", ref: "6:5-7",
        dzh: "眾人都喜悅這話，就揀選了司提反、腓利、伯羅哥羅、尼迦挪、提門、巴米拿、尼哥拉；神的道興旺起來。",
        den: "The whole multitude chose Stephen, Philip, Prochorus, Nicanor, Timon, Parmenas and Nicolaus; the word of God increased." }
    ],
    traits: [
      { k: "strength", zh: "七個名字全是希臘名，照顧受忽略的希臘語寡婦", en: "All seven have Greek names, serving the neglected Greek-speaking widows" },
      { k: "weakness", zh: "「希臘人」寡婦被忽略（6:1）", en: "The “Hellenist” widows were being neglected (6:1)" }
    ],
    lesson: {
      zh: "教會第一次遇上內部的抱怨：希臘語的寡婦在天天的供給上被忽略了（6:1）。使徒的回答不是自己去做，也不是不管，而是召集眾人，請他們選出人。結果是「神的道興旺起來」（6:7）。",
      en: "The church’s first internal complaint: Greek-speaking widows are being overlooked in the daily distribution (6:1). The apostles’ answer is neither to do it themselves nor to ignore it, but to call the whole body to choose people. The result: “the word of God increased” (6:7)."
    },
    quote: { ref: "6:3",
      zh: "當從你們中間選出七個有好名聲、被聖靈充滿、智慧充足的人",
      en: "select from among you, brothers, seven men of good report, full of the Holy Spirit and of wisdom" },
    keyVerses: ["6:1", "6:2", "6:3", "6:4", "6:5", "6:6", "6:7"],
    intro: {
      zh: "那時，門徒增多，有說希臘話的猶太人向希伯來人發怨言，因為在天天的供給上忽略了他們的寡婦（6:1）。十二使徒叫眾門徒來，說 6:2-4。眾人喜悅這話，就揀選了七個人，叫他們站在使徒面前；使徒禱告了，就按手在他們頭上（6:5-6）。這七個人沒有被稱為「執事」，使徒行傳沒有用這個詞；常被認為是後來教會「執事」職分的起源，這是傳統的讀法。",
      en: "In those days, as the number of the disciples was multiplying, the Hellenists murmured against the Hebrews because their widows were neglected in the daily distribution (6:1). The twelve summon the multitude of disciples and say 6:2–4. The whole multitude is pleased and chooses seven men, who are set before the apostles; after prayer the apostles lay their hands on them (6:5–6). The seven are not called “deacons” — Acts does not use the word; they are often seen as the origin of the church’s office of deacon, which is the traditional reading."
    },
    tip: {
      zh: "這七個人沒有被稱為「執事」；他們的工作（管飯食）與後來司提反和腓利的傳道並不相同。",
      en: "The seven are not called “deacons”; their work (serving tables) differs from Stephen’s and Philip’s later preaching."
    },
    related: ["stephen_martyr", "ethiopian_eunuch", "shared_life", "ananias_sapphira"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "stephen_martyr", book: "acts", no: 11, kind: "person", type: "faith", rarity: 5,
    zh: "司提反", en: "Stephen",
    meaning: { zh: "「冠冕」", en: "“Crown”" },
    tag: { zh: "主啊，不要將這罪歸於他們", en: "Lord, Don’t Hold This Sin Against Them" },
    role: { zh: "第一位為主殉道的人（6:8-8:1）", en: "The first martyr (6:8–8:1)" },
    ch: [6, 7],
    passages: ["6:8-15", "7:54-60"],
    moves: [
      { zh: "看見天開了", en: "The Heavens Opened", ref: "7:55-56",
        dzh: "司提反被聖靈充滿，定睛望天，說：我看見天開了，人子站在神的右邊。",
        den: "Full of the Holy Spirit, he looked up into heaven: “Behold, I see the heavens opened, and the Son of Man standing at the right hand of God!”" },
      { zh: "不要將這罪歸於他們", en: "Don’t Hold This Sin Against Them", ref: "7:59-60",
        dzh: "司提反呼籲主說：求主耶穌接收我的靈魂！又跪下大聲喊著說：主啊，不要將這罪歸於他們！說了這話，就睡了。",
        den: "Stephen called out, “Lord Jesus, receive my spirit!” He kneeled down and cried with a loud voice, “Lord, don’t hold this sin against them!” and fell asleep." }
    ],
    traits: [
      { k: "strength", zh: "「他的面貌像天使」（6:15）", en: "“His face was like the face of an angel” (6:15)" },
      { k: "weakness", zh: "被推出城外，用石頭打死（7:58）", en: "Thrown out of the city and stoned (7:58)" }
    ],
    lesson: {
      zh: "司提反臨死的兩句話，與耶穌在十字架上的話相似：「求主耶穌接收我的靈魂」（路 23:46）和「不要將這罪歸於他們」（路 23:34）。他的死也成為福音從耶路撒冷向外傳開的起點（8:1、4）。",
      en: "Stephen’s two last sayings resemble Jesus’s on the cross: “receive my spirit” (Luke 23:46) and “don’t hold this sin against them” (Luke 23:34). His death also becomes the start of the gospel spreading out of Jerusalem (8:1, 4)."
    },
    quote: { ref: "7:60",
      zh: "主啊，不要將這罪歸於他們",
      en: "Lord, don’t hold this sin against them!" },
    keyVerses: ["6:5", "6:8", "6:15", "7:51", "7:55", "7:56", "7:58", "7:59", "7:60", "8:1"],
    intro: {
      zh: "司提反是七個人之一，「滿有恩惠、能力」，在民間行了大奇事神蹟（6:8）。幾個會堂的人與他辯論，爭不過他的智慧和聖靈，就買通人說他說了謗讟的話（6:9-11）。他在公議會前講了一篇長長的講論，從亞伯拉罕講到所羅門（7:2-50），結尾責備聽的人「常常抗拒聖靈」（7:51）。聽的人心如刀割，咬牙切齒（7:54）。他們把他推到城外，用石頭打死；作見證的人把衣裳放在一個少年人名叫掃羅的腳前（7:58）。「掃羅也喜悅他被害」（8:1）。",
      en: "Stephen, one of the seven, “full of faith and power,” does great wonders and signs among the people (6:8). Men from several synagogues dispute with him, cannot withstand his wisdom and the Spirit, and secretly induce men to say he spoke blasphemous words (6:9–11). Before the council he gives a long speech from Abraham to Solomon (7:2–50), ending by accusing the hearers of “always resisting the Holy Spirit” (7:51). The hearers are cut to the heart and gnash their teeth (7:54). They throw him out of the city and stone him, the witnesses laying their garments at the feet of a young man named Saul (7:58). “Saul was consenting to his death” (8:1)."
    },
    tip: {
      zh: "司提反的講論（第 7 章）為甚麼有那麼長的歷史回顧，注釋書有幾種讀法；他的結語直接面對議會。",
      en: "Why Stephen’s speech (ch 7) has such a long historical review commentaries read in several ways; its conclusion confronts the council directly."
    },
    related: ["seven_chosen", "ethiopian_eunuch", "damascus_road", "paul"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "ethiopian_eunuch", book: "acts", no: 12, kind: "person", type: "wisdom", rarity: 5,
    zh: "埃提阿伯的太監", en: "The Ethiopian Eunuch",
    tag: { zh: "沒有人指教我，怎能明白呢？", en: "How Can I, Unless Someone Explains It to Me?" },
    role: { zh: "迦薩的路上（8:26-40）", en: "On the Gaza road (8:26–40)" },
    ch: [8],
    passages: ["8:26-40"],
    moves: [
      { zh: "你所念的，你明白嗎", en: "Do You Understand What You’re Reading?", ref: "8:30-31",
        dzh: "腓利聽見他念先知以賽亞的書，便問他：你所念的，你明白嗎？他說：沒有人指教我，怎能明白呢？",
        den: "Philip heard him reading Isaiah the prophet and asked, “Do you understand what you are reading?” He said, “How can I, unless someone explains it to me?”" },
      { zh: "這裡有水", en: "Here Is Water", ref: "8:36-38",
        dzh: "到了有水的地方，太監說：看哪，這裡有水，我受洗有甚麼妨礙呢？腓利和太監二人同下水裡去，腓利就給他施洗。",
        den: "They came to water; the eunuch said, “Behold, here is water. What is keeping me from being baptized?” They went down, and Philip baptized him." }
    ],
    traits: [
      { k: "strength", zh: "身為高官，在車上讀經，肯請人指教", en: "A high official who reads in his chariot and asks to be taught" },
      { k: "identity", zh: "女王甘大基的財政官（8:27）", en: "Treasurer of the Candace, queen of the Ethiopians (8:27)" }
    ],
    lesson: {
      zh: "腓利是被天使叫到曠野路上（8:26）；太監在讀的是以賽亞書 53 章（8:32-33）。他問「先知說這話是指著誰呢？」，腓利就「從這經上起，對他傳講耶穌」（8:34-35）。受洗之後「歡歡喜喜地走路」（8:39）。",
      en: "Philip is sent by an angel to a desert road (8:26); the eunuch is reading Isaiah 53 (8:32–33). He asks, “Of whom does the prophet say this?” and Philip, “beginning from this Scripture, preached to him about Jesus” (8:34–35). After baptism he “went on his way rejoicing” (8:39)."
    },
    quote: { ref: "8:31",
      zh: "沒有人指教我，怎能明白呢",
      en: "How can I, unless someone explains it to me?" },
    keyVerses: ["8:26", "8:27", "8:28", "8:30", "8:31", "8:35", "8:36", "8:38", "8:39"],
    intro: {
      zh: "有主的使者對腓利說，起來，向南走，往那從耶路撒冷下迦薩的路上去（8:26）。他就起身去了，不料有一個埃提阿伯人，是女王甘大基的太監，掌管她一切的銀庫，他上耶路撒冷去敬拜，回來的時候，在車上坐著，念先知以賽亞的書（8:27-28）。聖靈對腓利說，你去貼近那車（8:29）。受洗之後，主的靈把腓利提了去，太監不再見他，卻歡歡喜喜地走路（8:39）。8:37 和合本放在括號和註裡（有古卷加），WEB 沒有這節。",
      en: "An angel of the Lord says to Philip, “Arise, and go toward the south to the way that goes down from Jerusalem to Gaza” (8:26). He arises and goes, and behold, an Ethiopian eunuch, a court official of Candace, queen of the Ethiopians, who was over all her treasure, who had come to Jerusalem to worship, is returning, sitting in his chariot and reading Isaiah the prophet (8:27–28). The Spirit says to Philip, “Go near, and join yourself to this chariot” (8:29). After the baptism the Spirit of the Lord catches Philip away, and the eunuch sees him no more, but goes on his way rejoicing (8:39). Verse 37 is in a CUV note (added in some manuscripts) and is not in the WEB."
    },
    tip: {
      zh: "「太監」是宮廷官員的稱呼，不一定都是被閹的人；8:37 在較早的抄本裡沒有。",
      en: "“Eunuch” was a title for court officials and need not always mean a castrated man; 8:37 is absent from earlier manuscripts."
    },
    related: ["seven_chosen", "stephen_martyr", "cornelius_peter", "damascus_road"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "damascus_road", book: "acts", no: 13, kind: "other", type: "power", rarity: 5,
    zh: "大馬士革的路上", en: "The Damascus Road",
    tag: { zh: "掃羅！掃羅！你為甚麼逼迫我？", en: "Saul, Saul, Why Do You Persecute Me?" },
    role: { zh: "掃羅被主遇見（9:1-9）", en: "Saul met by the Lord (9:1–9)" },
    ch: [9],
    passages: ["9:1-9"],
    moves: [
      { zh: "你為甚麼逼迫我", en: "Why Do You Persecute Me?", ref: "9:3-4",
        dzh: "掃羅行路，將到大馬士革，忽然從天上發光四面照著他；他仆倒在地，聽見聲音：掃羅！掃羅！你為甚麼逼迫我？",
        den: "Near Damascus a light from the sky shone around him; he fell on the earth and heard a voice: “Saul, Saul, why do you persecute me?”" },
      { zh: "我就是你所逼迫的耶穌", en: "I Am Jesus", ref: "9:5-6",
        dzh: "他說：主啊！你是誰？主說：我就是你所逼迫的耶穌。起來！進城去，你所當做的事，必有人告訴你。",
        den: "“Who are you, Lord?” “I am Jesus, whom you are persecuting. But rise up, and enter into the city, and you will be told what you must do.”" }
    ],
    traits: [
      { k: "strength", zh: "「我所揀選的器皿」（9:15）", en: "“My chosen vessel” (9:15)" },
      { k: "weakness", zh: "三天不能看見，也不吃不喝（9:9）", en: "Three days blind, neither eating nor drinking (9:9)" }
    ],
    lesson: {
      zh: "耶穌問的不是「你為甚麼逼迫我的門徒」，而是「你為甚麼逼迫我？」（9:4）。從這一句開始，掃羅被帶進城，眼睛瞎了三天（9:8-9），然後有亞拿尼亞來按手。主說他是「我所揀選的器皿」（9:15）。",
      en: "Jesus does not ask “why do you persecute my disciples” but “why do you persecute me?” (9:4). From there Saul is led into the city, blind for three days (9:8–9), and then Ananias comes to lay hands on him. The Lord says he is “my chosen vessel” (9:15)."
    },
    quote: { ref: "9:4",
      zh: "掃羅！掃羅！你為甚麼逼迫我？",
      en: "Saul, Saul, why do you persecute me?" },
    keyVerses: ["9:1", "9:2", "9:3", "9:4", "9:5", "9:6", "9:8", "9:9", "9:15"],
    intro: {
      zh: "掃羅仍然向主的門徒口吐威嚇兇殺的話，去見大祭司，求文書給大馬士革的各會堂，若是找著信奉這道的人，不論男女，都准他捆綁帶到耶路撒冷（9:1-2）。將到大馬士革，忽然有光從天上照著他（9:3）。同行的人站著，說不出話來，聽見聲音，卻看不見人（9:7）。掃羅從地上起來，睜開眼睛，竟不能看見甚麼，同行的人就拉著他的手，領他進了大馬士革（9:8）。他三天不能看見，也不吃也不喝（9:9）。使徒行傳 22 章和 26 章又各講了一次這件事，細節略有不同。",
      en: "Saul, still breathing threats and murder against the disciples of the Lord, goes to the high priest and asks for letters to the synagogues at Damascus so that if he found any belonging to the Way, whether men or women, he might bring them bound to Jerusalem (9:1–2). As he nears Damascus, a light from the sky suddenly shines around him (9:3). His companions stand speechless, hearing a voice but seeing no one (9:7). Saul gets up from the ground and, opening his eyes, sees nothing; they lead him by the hand into Damascus (9:8). For three days he is without sight and neither eats nor drinks (9:9). Acts 22 and 26 tell this event again, with slightly different details."
    },
    tip: {
      zh: "同行的人「聽見聲音，卻看不見人」（9:7）與 22:9「沒有聽明」的細節，注釋書有不同說明。",
      en: "The detail that the companions “heard the voice” (9:7) against “didn’t understand” (22:9) commentaries explain differently."
    },
    related: ["ananias_disciple", "paul", "stephen_martyr", "barnabas_encourager"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "ananias_disciple", book: "acts", no: 14, kind: "person", type: "faith", rarity: 3,
    zh: "亞拿尼亞", en: "Ananias of Damascus",
    tag: { zh: "兄弟掃羅，主打發我來", en: "Brother Saul, the Lord Has Sent Me" },
    role: { zh: "大馬士革的門徒（9:10-19）", en: "A disciple in Damascus (9:10–19)" },
    ch: [9],
    passages: ["9:10-19"],
    moves: [
      { zh: "他是我所揀選的器皿", en: "My Chosen Vessel", ref: "9:15-16",
        dzh: "主對亞拿尼亞說：你只管去！他是我所揀選的器皿，要在外邦人和君王，並以色列人面前宣揚我的名。",
        den: "The Lord said, “Go your way, for he is my chosen vessel to bear my name before the nations and kings, and the children of Israel.”" },
      { zh: "兄弟掃羅", en: "Brother Saul", ref: "9:17-18",
        dzh: "亞拿尼亞把手按在掃羅身上，說：兄弟掃羅，主打發我來；掃羅的眼睛上，好像有鱗立刻掉下來，他就能看見。",
        den: "Ananias laid his hands on him: “Brother Saul, the Lord has sent me”; immediately something like scales fell from his eyes and he received his sight." }
    ],
    traits: [
      { k: "strength", zh: "先提出疑慮，然後順從", en: "Raises his fear first, then obeys" },
      { k: "weakness", zh: "他聽說過掃羅向聖徒所行的惡事（9:13）", en: "He had heard of the evil Saul had done to the saints (9:13)" }
    ],
    lesson: {
      zh: "亞拿尼亞向主說了他的害怕：「主啊，我聽見許多人說，這人在耶路撒冷怎樣苦害你的聖徒」（9:13）；主說「你只管去」（9:15）。他去了，第一句話是「兄弟掃羅」（9:17）。",
      en: "Ananias tells the Lord his fear: “Lord, I have heard from many about this man, how much evil he did to your saints at Jerusalem” (9:13); the Lord says, “Go your way” (9:15). He goes, and his first words are “Brother Saul” (9:17)."
    },
    quote: { ref: "9:17",
      zh: "兄弟掃羅，在你來的路上向你顯現的主，就是耶穌，打發我來",
      en: "Brother Saul, the Lord, who appeared to you on the road by which you came, has sent me" },
    keyVerses: ["9:10", "9:11", "9:13", "9:15", "9:16", "9:17", "9:18", "9:19"],
    intro: {
      zh: "在大馬士革有一個門徒，名叫亞拿尼亞；主在異象中對他說，起來，往直街去，在猶大的家裡找一個大數人，名叫掃羅，他正禱告（9:10-11）。亞拿尼亞回答說他聽見這人的事（9:13-14）。主說去，亞拿尼亞就去了，進入那家，把手按在掃羅身上，叫他看見，又被聖靈充滿（9:17）。掃羅就起來受了洗，吃過飯就健壯了（9:18-19）。使徒行傳 22:12 說亞拿尼亞是個按律法虔誠的人，為住在那裡的一切猶太人所稱讚。",
      en: "In Damascus there is a disciple named Ananias; the Lord says to him in a vision, “Arise, and go to the street which is called Straight, and inquire in the house of Judas for one named Saul, a man of Tarsus. For behold, he prays” (9:10–11). Ananias answers with what he has heard (9:13–14). The Lord says go, and Ananias goes, enters the house, lays his hands on Saul so that he may receive sight and be filled with the Holy Spirit (9:17). Saul arises and is baptized, and after taking food is strengthened (9:18–19). Acts 22:12 says Ananias was a devout man according to the law, well spoken of by all the Jews who lived there."
    },
    tip: {
      zh: "這位亞拿尼亞與 5 章的亞拿尼亞不是同一個人，只是同名。",
      en: "This Ananias is not the Ananias of chapter 5; they only share a name."
    },
    related: ["damascus_road", "paul", "barnabas_encourager", "stephen_martyr"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "tabitha", book: "acts", no: 15, kind: "person", type: "love", rarity: 3,
    zh: "大比大（多加）", en: "Tabitha (Dorcas)",
    meaning: { zh: "「羚羊」", en: "“Gazelle”" },
    tag: { zh: "她廣行善事，多施賙濟", en: "Full of Good Works and Acts of Mercy" },
    role: { zh: "約帕的女門徒（9:36-43）", en: "A woman disciple in Joppa (9:36–43)" },
    ch: [9],
    passages: ["9:36-43"],
    moves: [
      { zh: "廣行善事", en: "Full of Good Works", ref: "9:36",
        dzh: "在約帕有一個女徒，名叫大比大，翻希臘話就是多加；她廣行善事，多施賙濟。",
        den: "At Joppa a disciple named Tabitha, which means Dorcas, was full of good works and acts of mercy which she did." },
      { zh: "大比大，起來", en: "Tabitha, Get Up", ref: "9:40",
        dzh: "彼得叫她們都出去，跪下禱告，轉身對著死人說：大比大，起來！她就睜開眼睛，見了彼得，便坐起來。",
        den: "Peter sent them all out, knelt down and prayed; turning to the body he said, “Tabitha, get up!” She opened her eyes, saw Peter and sat up." }
    ],
    traits: [
      { k: "strength", zh: "寡婦們拿她做的衣服給彼得看（9:39）", en: "The widows show Peter the garments she made (9:39)" },
      { k: "identity", zh: "「女徒」：新約少有的女性門徒稱呼", en: "“Disciple” in the feminine: a rare New Testament form" }
    ],
    lesson: {
      zh: "她的故事裡沒有講道，只有一件件衣服：「眾寡婦都站在彼得旁邊哭，拿多加與她們同在時所做的裡衣外衣給他看」（9:39）。彼得叫她起來，把她「活活地交給」眾聖徒和寡婦（9:41）。",
      en: "There is no preaching in her story, only garments: “All the widows stood by him weeping, and showing the coats and garments which Dorcas had made while she was with them” (9:39). Peter calls her to rise and presents her “alive” to the saints and widows (9:41)."
    },
    quote: { ref: "9:40",
      zh: "大比大，起來！」她就睜開眼睛，見了彼得，便坐起來",
      en: "Tabitha, get up!” She opened her eyes, and when she saw Peter, she sat up." },
    keyVerses: ["9:36", "9:37", "9:38", "9:39", "9:40", "9:41", "9:42"],
    intro: {
      zh: "在約帕有一個女徒，名叫大比大，翻希臘話就是多加（就是羚羊的意思）；她廣行善事，多施賙濟（9:36）。當時她患病而死，有人把她洗了，停在樓上（9:37）。呂大與約帕相近，門徒聽見彼得在那裡，就打發兩個人去，央求他快來（9:38）。彼得到了，被領上樓；他叫她們都出去，跪下禱告，轉身對著死人說「大比大，起來！」（9:40）這件事與耶穌使睚魯的女兒復活（可 5:41）的句式相似。",
      en: "At Joppa there is a disciple named Tabitha, which when translated means Dorcas (a gazelle); she is full of good works and acts of mercy (9:36). In those days she becomes sick and dies, and they wash her and lay her in an upper room (9:37). Since Lydda is near Joppa, the disciples hearing that Peter is there send two men to implore him to come without delay (9:38). Peter comes and is brought to the upper room; he sends them all out, kneels down and prays, and turning to the body says, “Tabitha, get up!” (9:40). The wording resembles Jesus raising Jairus’s daughter (Mark 5:41)."
    },
    tip: {
      zh: "大比大是亞蘭名，多加是希臘名，兩個都是「羚羊」的意思；經文自己寫出了翻譯。",
      en: "Tabitha is Aramaic and Dorcas Greek, both meaning “gazelle”; the text itself gives the translation."
    },
    related: ["lame_man_gate", "cornelius_peter", "peters_sermon", "shared_life"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "cornelius_peter", book: "acts", no: 16, kind: "other", type: "heaven", rarity: 5,
    zh: "彼得與哥尼流", en: "Peter and Cornelius",
    tag: { zh: "神是不偏待人的", en: "God Shows No Favoritism" },
    role: { zh: "福音臨到外邦人（第 10 章）", en: "The gospel reaches the Gentiles (ch 10)" },
    ch: [10],
    passages: ["10:1-48"],
    moves: [
      { zh: "神不偏待人", en: "No Favoritism", ref: "10:34-35",
        dzh: "彼得開口說：我真看出神是不偏待人。各國中那敬畏主、行義的人都為主所悅納。",
        den: "Peter: “Truly I perceive that God doesn’t show favoritism; but in every nation he who fears him and works righteousness is acceptable to him.”" },
      { zh: "聖靈降在外邦人身上", en: "The Spirit on the Gentiles", ref: "10:44-47",
        dzh: "彼得還說這話的時候，聖靈降在一切聽道的人身上。彼得說：這些人既受了聖靈，與我們一樣，誰能禁止用水給他們施洗呢？",
        den: "The Holy Spirit fell on all who heard. Peter: “Can anyone forbid water for baptizing these people? They have received the Holy Spirit just like us.”" }
    ],
    traits: [
      { k: "strength", zh: "兩邊都被異象預備好：哥尼流與彼得", en: "Both sides are prepared by visions: Cornelius and Peter" },
      { k: "weakness", zh: "彼得起初說「斷乎不可」（10:14）", en: "Peter at first says “Not so, Lord” (10:14)" }
    ],
    lesson: {
      zh: "彼得在約帕屋頂上看見異象，聽見三次「神所潔淨的，你不可當作俗物」（10:15）；他到了該撒利亞外邦人哥尼流家，說「我真看出神是不偏待人」（10:34）。聖靈在他還說話時降下，彼得是被這件事推著走的。",
      en: "On the housetop at Joppa Peter sees a vision and hears three times, “What God has cleansed, don’t call unclean” (10:15); at Cornelius’s house in Caesarea he says, “Truly I perceive that God doesn’t show favoritism” (10:34). The Spirit falls while he is still speaking; Peter is pushed along by the event."
    },
    quote: { ref: "10:34",
      zh: "我真看出神是不偏待人",
      en: "Truly I perceive that God doesn’t show favoritism" },
    keyVerses: ["10:1", "10:2", "10:9", "10:15", "10:28", "10:34", "10:35", "10:44", "10:47", "11:18"],
    intro: {
      zh: "在該撒利亞有一個人，名叫哥尼流，是「義大利營」的百夫長；他是個虔誠人，他和全家都敬畏神，多多賙濟百姓，常常禱告神（10:1-2）。他在異象中看見神的使者，吩咐他請約帕的西門彼得來（10:3-6）。第二天彼得在屋頂上禱告，餓了，恍然看見一塊大布從天降下，裡面有各樣走獸、昆蟲、飛鳥（10:9-12）。他說「主啊，這是斷乎不可的」，有聲音說「神所潔淨的，你不可當作俗物」（10:14-15）。他到了哥尼流家，就說「我真看出神是不偏待人」（10:34）。",
      en: "In Caesarea there is a man named Cornelius, a centurion of what was called the Italian Regiment, a devout man who feared God with all his house, gave much alms to the people and prayed always (10:1–2). In a vision he sees an angel of God telling him to send for Simon Peter at Joppa (10:3–6). The next day Peter, on the housetop praying, grows hungry and falls into a trance, seeing a great sheet let down from heaven with all kinds of animals, reptiles and birds (10:9–12). He says, “Not so, Lord,” and a voice says, “What God has cleansed, don’t you call unclean” (10:14–15). When he reaches Cornelius’s house he says, “Truly I perceive that God doesn’t show favoritism” (10:34)."
    },
    tip: {
      zh: "10:9-16 的異象，直接的問題是飲食的潔淨，而 10:28 彼得把它應用在人身上；兩層意思的關係，注釋書有不同說明。",
      en: "The immediate matter of the vision in 10:9–16 is clean and unclean food, while Peter applies it to people in 10:28; how the two levels relate commentaries explain differently."
    },
    related: ["tabitha", "peters_sermon", "antioch_church", "jerusalem_council"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "antioch_church", book: "acts", no: 17, kind: "other", type: "love", rarity: 4,
    zh: "安提阿教會", en: "The Church at Antioch",
    tag: { zh: "門徒稱為基督徒，是從安提阿起首", en: "The Disciples Were First Called Christians in Antioch" },
    role: { zh: "差派的教會（11:19-30；13:1-3）", en: "The sending church (11:19–30; 13:1–3)" },
    ch: [11, 13],
    passages: ["11:19-30", "13:1-3"],
    moves: [
      { zh: "稱為基督徒", en: "Called Christians", ref: "11:26",
        dzh: "他們足有一年的工夫和教會一同聚集，教訓了許多人。門徒稱為「基督徒」是從安提阿起首。",
        den: "For a whole year they were gathered with the assembly and taught many people. The disciples were first called Christians in Antioch." },
      { zh: "為我分派巴拿巴和掃羅", en: "Separate Barnabas and Saul", ref: "13:2-3",
        dzh: "他們事奉主、禁食的時候，聖靈說：要為我分派巴拿巴和掃羅，去做我召他們所做的工。於是禁食禱告，按手在他們頭上，就打發他們去了。",
        den: "The Holy Spirit said, “Separate Barnabas and Saul for me, for the work to which I have called them.” They fasted, prayed, laid hands on them and sent them off." }
    ],
    traits: [
      { k: "strength", zh: "教會領袖來自不同地方：巴拿巴、西面、路求、馬念、掃羅（13:1）", en: "Leaders from different places: Barnabas, Simeon, Lucius, Manaen, Saul (13:1)" },
      { k: "identity", zh: "「基督徒」最初可能是外人給的稱呼", en: "“Christians” may first have been a name given by outsiders" }
    ],
    lesson: {
      zh: "安提阿是因為逼迫而被分散的人（11:19）建立起來的，第一批對希臘人傳福音的是塞浦路斯和古利奈來的人（11:20）。它成為第一個差派宣教士的教會（13:1-3），也在饑荒中送救濟去耶路撒冷（11:27-30）。",
      en: "Antioch was begun by those scattered by persecution (11:19), with men from Cyprus and Cyrene the first to preach to Greeks (11:20). It becomes the first church to send out missionaries (13:1–3) and sends relief to Jerusalem in the famine (11:27–30)."
    },
    quote: { ref: "11:26",
      zh: "門徒稱為「基督徒」是從安提阿起首",
      en: "The disciples were first called Christians in Antioch." },
    keyVerses: ["11:19", "11:20", "11:22", "11:26", "11:27", "11:29", "13:1", "13:2", "13:3"],
    intro: {
      zh: "那些因司提反的事遭患難而四散的人，直走到腓尼基、塞浦路斯、安提阿，只對猶太人講道（11:19）。但其中有塞浦路斯和古利奈人，到了安提阿，也對希臘人傳講主耶穌（11:20）。耶路撒冷的教會差巴拿巴去，他又去大數找掃羅，帶他到安提阿（11:22-26）。「門徒稱為基督徒是從安提阿起首。」（11:26）13:1-3 的名單：巴拿巴、稱為尼結的西面、古利奈人路求、分封之王希律的乳兄馬念，和掃羅。聖靈叫他們差派巴拿巴和掃羅。",
      en: "Those scattered because of the persecution over Stephen travel as far as Phoenicia, Cyprus and Antioch, speaking the word to no one except to Jews (11:19). But some of them, men of Cyprus and Cyrene, come to Antioch and speak also to the Greeks, preaching the Lord Jesus (11:20). The Jerusalem church sends Barnabas, who goes to Tarsus to find Saul and brings him to Antioch (11:22–26). “The disciples were first called Christians in Antioch” (11:26). The list in 13:1–3: Barnabas, Simeon who was called Niger, Lucius of Cyrene, Manaen who had been brought up with Herod the tetrarch, and Saul. The Holy Spirit tells them to send out Barnabas and Saul."
    },
    tip: {
      zh: "「基督徒」這個稱呼是誰起的，經文沒有說（用的是被動語態）；使徒行傳另兩次出現是 26:28 和彼得前書 4:16。",
      en: "Who coined “Christians” the text does not say (the verb is passive); the term appears twice more in Acts 26:28 and 1 Peter 4:16."
    },
    related: ["barnabas_encourager", "cornelius_peter", "jerusalem_council", "paul"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "jerusalem_council", book: "acts", no: 18, kind: "other", type: "wisdom", rarity: 4,
    zh: "耶路撒冷會議", en: "The Jerusalem Council",
    tag: { zh: "我們得救乃是因主耶穌的恩，和他們一樣", en: "We Are Saved Through the Grace of the Lord Jesus, as They Are" },
    role: { zh: "外邦人要不要受割禮（第 15 章）", en: "Must Gentiles be circumcised? (ch 15)" },
    ch: [15],
    passages: ["15:1-35"],
    moves: [
      { zh: "和他們一樣", en: "Just as They Are", ref: "15:8-11",
        dzh: "彼得說：知道人心的神賜聖靈給他們，並不分他們我們。我們得救乃是因主耶穌的恩，和他們一樣。",
        den: "Peter: “God, who knows the heart, gave them the Holy Spirit, just like us… we believe that we are saved through the grace of the Lord Jesus, just as they are.”" },
      { zh: "不可難為外邦人", en: "Don’t Trouble the Gentiles", ref: "15:19-20",
        dzh: "雅各說：據我的意見，不可難為那歸服神的外邦人；只要寫信，吩咐他們禁戒偶像的污穢和姦淫，並勒死的牲畜和血。",
        den: "James: “Don’t trouble the Gentiles who turn to God; just write that they abstain from idols’ pollution, sexual immorality, what is strangled, and blood.”" }
    ],
    traits: [
      { k: "strength", zh: "彼得、巴拿巴、保羅、雅各都發言", en: "Peter, Barnabas, Paul and James all speak" },
      { k: "weakness", zh: "「有幾個人從猶太下來」說不受割禮不能得救（15:1）", en: "“Some men came down from Judea” saying uncircumcised cannot be saved (15:1)" }
    ],
    lesson: {
      zh: "問題很具體：外邦信徒要不要先受割禮、守摩西的律法？（15:1、5）會議聽了見證，也引用了先知的話（15:15-18）；結論寫成信，送回安提阿，信上說「聖靈和我們定意不將別的重擔放在你們身上」（15:28）。",
      en: "The question is concrete: must Gentile believers first be circumcised and keep Moses’s law? (15:1, 5). The council hears testimony and also cites the prophets (15:15–18); the conclusion is written in a letter sent to Antioch, saying, “it seemed good to the Holy Spirit and to us to lay no greater burden on you” (15:28)."
    },
    quote: { ref: "15:11",
      zh: "我們得救乃是因主耶穌的恩，和他們一樣，這是我們所信的",
      en: "But we believe that we are saved through the grace of the Lord Jesus, just as they are." },
    keyVerses: ["15:1", "15:2", "15:5", "15:7", "15:8", "15:9", "15:11", "15:19", "15:20", "15:28"],
    intro: {
      zh: "有幾個人從猶太下來，教訓弟兄們說：「你們若不按摩西的規條受割禮，不能得救。」（15:1）保羅、巴拿巴與他們大大地紛爭辯論，就上耶路撒冷去見使徒和長老（15:2）。會議上彼得說了 15:7-11，巴拿巴和保羅述說神藉他們在外邦人中所行的神蹟奇事（15:12），雅各引用阿摩司書作結論（15:13-18），說了 15:19-20。保羅在加拉太書 2:1-10 也說到一次耶路撒冷聚會，與使徒行傳 15 章是否同一次，注釋書有不同看法。",
      en: "Some men come down from Judea and teach the brothers, “Unless you are circumcised after the custom of Moses, you can’t be saved” (15:1). Paul and Barnabas have no small discord and discussion with them, and go up to Jerusalem to the apostles and elders (15:2). At the council Peter speaks 15:7–11, Barnabas and Paul tell what signs and wonders God had done through them among the Gentiles (15:12), and James quotes Amos in his conclusion (15:13–18) and says 15:19–20. Paul also mentions a Jerusalem meeting in Galatians 2:1–10; whether it is the same as Acts 15 commentaries differ."
    },
    tip: {
      zh: "15:20 的四項禁戒（偶像、姦淫、勒死的牲畜、血）的意思與後來的應用，各傳統有不同理解。",
      en: "The meaning of the four abstentions in 15:20 (idols, sexual immorality, strangled animals, blood) and their later application traditions understand differently."
    },
    related: ["cornelius_peter", "antioch_church", "barnabas_encourager", "paul"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "lydia_philippi", book: "acts", no: 19, kind: "person", type: "harvest", rarity: 4,
    zh: "呂底亞與馬其頓人", en: "Lydia and the Man of Macedonia",
    tag: { zh: "請你過到馬其頓來幫助我們", en: "Come Over into Macedonia and Help Us" },
    role: { zh: "歐洲第一個歸主的家（16:6-15）", en: "The first household in Europe (16:6–15)" },
    ch: [16],
    passages: ["16:6-15"],
    moves: [
      { zh: "馬其頓的異象", en: "The Macedonian Vision", ref: "16:9-10",
        dzh: "夜間有異象現與保羅：有一個馬其頓人站著求他說：請你過到馬其頓來幫助我們。",
        den: "A vision appeared to Paul in the night: a man of Macedonia standing, begging him, “Come over into Macedonia and help us.”" },
      { zh: "主開導她的心", en: "The Lord Opened Her Heart", ref: "16:14",
        dzh: "有一個賣紫色布疋的婦人，名叫呂底亞，素來敬拜神；主就開導她的心，叫她留心聽保羅所講的話。",
        den: "A woman named Lydia, a seller of purple, one who worshiped God, heard us; the Lord opened her heart to listen to the things which were spoken by Paul." }
    ],
    traits: [
      { k: "strength", zh: "經商的婦人，接待宣教士在她家住（16:15）", en: "A businesswoman who hosts the missionaries in her house (16:15)" },
      { k: "identity", zh: "「我們」從這裡開始出現（16:10）", en: "The “we” begins here (16:10)" }
    ],
    lesson: {
      zh: "保羅本來要往別處去，聖靈禁止他們在亞細亞講道，又不許他們往庇推尼去（16:6-7）。夜間的異象，給了他們一個新的方向。第一個回應的，卻是河邊聚集的一群婦女，其中一個是呂底亞（16:13-14）。",
      en: "Paul meant to go elsewhere, but the Spirit forbade them to speak in Asia and did not allow them to go into Bithynia (16:6–7). The night vision gives a new direction. Yet the first to respond are a group of women gathered by a river, one of whom is Lydia (16:13–14)."
    },
    quote: { ref: "16:9",
      zh: "有一個馬其頓人站著求他說：「請你過到馬其頓來幫助我們。」",
      en: "There was a man of Macedonia standing, begging him, and saying, “Come over into Macedonia and help us.”" },
    keyVerses: ["16:6", "16:7", "16:9", "16:10", "16:13", "16:14", "16:15", "16:40"],
    intro: {
      zh: "聖靈既然禁止他們在亞細亞講道，他們就經過弗呂家、加拉太一帶地方（16:6）；到了每西亞的邊界，想往庇推尼去，耶穌的靈卻不許（16:7）。他們就過了每西亞，下到特羅亞（16:8）。夜間，異象現與保羅（16:9）。16:10 起，作者開始用「我們」。到了腓立比，安息日他們出城門，到河邊，坐下對聚集的婦女講道（16:13）。呂底亞和她一家受了洗，請他們住在她家（16:15）。",
      en: "Having been forbidden by the Holy Spirit to speak the word in Asia, they pass through the region of Phrygia and Galatia (16:6); when they reach Mysia they try to go into Bithynia, but the Spirit of Jesus does not allow it (16:7). Passing by Mysia, they come down to Troas (16:8). In the night a vision appears to Paul (16:9). From 16:10 the writer begins to say “we.” At Philippi on the Sabbath they go outside the gate by a riverside and sit down and speak to the women who have come together (16:13). Lydia and her household are baptized, and she asks them to stay at her house (16:15)."
    },
    tip: {
      zh: "「我們」從 16:10 開始，一般被認為是作者路加加入了旅行；經文沒有直接這樣說。",
      en: "The “we” beginning at 16:10 is generally taken to mean the author Luke joined the journey; the text does not say so directly."
    },
    related: ["philippian_jailer", "paul", "areopagus", "priscilla_aquila"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "philippian_jailer", book: "acts", no: 20, kind: "person", type: "faith", rarity: 5,
    zh: "腓立比的禁卒", en: "The Philippian Jailer",
    tag: { zh: "當信主耶穌，你和你一家都必得救", en: "Believe in the Lord Jesus, and You Will Be Saved" },
    role: { zh: "半夜的監牢（16:16-40）", en: "The prison at midnight (16:16–40)" },
    ch: [16],
    passages: ["16:16-40"],
    moves: [
      { zh: "半夜唱詩", en: "Singing at Midnight", ref: "16:25-26",
        dzh: "約在半夜，保羅和西拉禱告，唱詩讚美神，眾囚犯也側耳而聽；忽然地大震動，監門立刻全開，眾囚犯的鎖鍊也都鬆開了。",
        den: "At midnight Paul and Silas prayed and sang hymns while the prisoners listened; a great earthquake opened all the doors and loosened every bond." },
      { zh: "我當怎樣行才可以得救", en: "What Must I Do to Be Saved?", ref: "16:30-31",
        dzh: "禁卒說：二位先生，我當怎樣行才可以得救？他們說：當信主耶穌，你和你一家都必得救。",
        den: "“Sirs, what must I do to be saved?” They said, “Believe in the Lord Jesus Christ, and you will be saved, you and your household.”" }
    ],
    traits: [
      { k: "strength", zh: "保羅叫他不要傷害自己：「我們都在這裡」（16:28）", en: "Paul stops him from harming himself: “we are all here” (16:28)" },
      { k: "weakness", zh: "以為囚犯逃了，就要拔刀自殺（16:27）", en: "Thinking the prisoners had escaped, he draws his sword to kill himself (16:27)" }
    ],
    lesson: {
      zh: "地震之後，沒有一個囚犯逃走；保羅大聲喊說「不要傷害自己，我們都在這裡」（16:28）。禁卒顫抖著問「我當怎樣行才可以得救？」，當夜就為他們洗傷，自己和全家受洗，又擺上飯（16:33-34）。",
      en: "After the earthquake no prisoner escapes; Paul shouts, “Don’t harm yourself, for we are all here!” (16:28). The jailer, trembling, asks, “What must I do to be saved?” and that night washes their wounds, he and his household are baptized, and he sets a meal before them (16:33–34)."
    },
    quote: { ref: "16:31",
      zh: "當信主耶穌，你和你一家都必得救",
      en: "Believe in the Lord Jesus Christ, and you will be saved, you and your household." },
    keyVerses: ["16:16", "16:22", "16:23", "16:25", "16:26", "16:27", "16:28", "16:30", "16:31", "16:33"],
    intro: {
      zh: "保羅治好一個被占卜的鬼附著的使女，她的主人因失了賺錢的指望，就把保羅和西拉拉到市上，官府下令打了他們許多棍，下在監裡，叫禁卒嚴嚴地看守（16:16-24）。禁卒將他們下在內監，兩腳上了木狗（16:24）。約在半夜，他們禱告唱詩（16:25）。地震，監門全開，禁卒以為囚犯逃走，要拔刀自殺（16:26-27）。天亮，官長打發人說釋放他們；保羅說他們是羅馬人，沒有定罪就當眾打了，要官長親自來領出去（16:35-39）。",
      en: "Paul heals a slave girl with a spirit of divination; her masters, seeing their hope of gain gone, drag Paul and Silas to the marketplace, the magistrates have them beaten with many strokes and thrown into prison, charging the jailer to guard them securely (16:16–24). The jailer puts them in the inner prison and fastens their feet in stocks (16:24). About midnight they pray and sing hymns (16:25). An earthquake opens all the doors, and the jailer, supposing the prisoners had escaped, is about to kill himself (16:26–27). At daybreak the magistrates send word to release them; Paul says they are Romans who were beaten publicly without trial, and wants the magistrates to come and bring them out themselves (16:35–39)."
    },
    tip: {
      zh: "「你和你一家都必得救」的意思，與家人是否必須各自相信，各傳統有不同讀法；16:32-34 說全家都聽了道，都歡喜。",
      en: "How “you and your household” relates to each family member believing traditions read differently; 16:32–34 says all in the house heard the word and rejoiced."
    },
    related: ["lydia_philippi", "paul", "areopagus", "ephesus_riot"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "areopagus", book: "acts", no: 21, kind: "other", type: "wisdom", rarity: 5,
    zh: "雅典的亞略巴古", en: "The Areopagus in Athens",
    tag: { zh: "我們生活、動作、存留，都在乎他", en: "In Him We Live, and Move, and Have Our Being" },
    role: { zh: "保羅對哲學家的講論（17:16-34）", en: "Paul’s speech to the philosophers (17:16–34)" },
    ch: [17],
    passages: ["17:16-34"],
    moves: [
      { zh: "未識之神", en: "An Unknown God", ref: "17:22-23",
        dzh: "保羅站在亞略巴古當中，說：我遊行的時候，遇見一座壇，上面寫著「未識之神」。你們所不認識而敬拜的，我現在告訴你們。",
        den: "Paul: “I found an altar with this inscription: ‘TO AN UNKNOWN GOD.’ What therefore you worship in ignorance, this I announce to you.”" },
      { zh: "我們也是他所生的", en: "His Offspring", ref: "17:27-28",
        dzh: "他離我們各人不遠；我們生活、動作、存留，都在乎他。就如你們作詩的有人說：我們也是他所生的。",
        den: "“He is not far from each one of us; for in him we live, and move, and have our being. As some of your own poets have said, ‘For we are also his offspring.’”" }
    ],
    traits: [
      { k: "strength", zh: "從他們的祭壇、詩人說起", en: "Starts from their altar and their poets" },
      { k: "weakness", zh: "講到復活，有人譏誚（17:32）", en: "At the resurrection some mock (17:32)" }
    ],
    lesson: {
      zh: "保羅在雅典「見滿城都是偶像，心裡著急」（17:16），他在市場和會堂與人辯論，被帶到亞略巴古。他不從猶太人的聖經說起，而從雅典人自己的「未識之神」和詩人說起，講到創造、悔改、審判，說到復活就有人譏誚，也有人說「我們再聽你講這個吧」（17:32）。",
      en: "In Athens Paul’s “spirit was provoked within him, seeing the city full of idols” (17:16); he reasons in the marketplace and synagogue and is brought to the Areopagus. He starts not from the Jewish Scriptures but from the Athenians’ own “unknown god” and poets, speaking of creation, repentance and judgment; at the resurrection some mock, others say “We want to hear you again concerning this” (17:32)."
    },
    quote: { ref: "17:28",
      zh: "我們生活、動作、存留，都在乎他",
      en: "‘For in him we live, and move, and have our being.’" },
    keyVerses: ["17:16", "17:17", "17:22", "17:23", "17:24", "17:26", "17:27", "17:28", "17:30", "17:32"],
    intro: {
      zh: "保羅在雅典等候的時候，見滿城都是偶像，就心裡著急（17:16）。他在會堂裡與猶太人和虔誠人辯論，又天天在市場上遇見的人辯論（17:17）。有一些伊壁鳩魯和斯多亞的學士和他爭論（17:18），把他帶到亞略巴古（17:19）。他說「眾位雅典人哪，我看你們凡事很敬畏鬼神」（17:22）。17:28 引用的詩人，是希臘詩人（亞拉圖和克里安提斯一類）的句子。聽見的人有的譏誚，有的要再聽，也有幾個人信了，其中有亞略巴古的官丟尼修和一個名叫大馬哩的婦人（17:32-34）。",
      en: "While Paul waits in Athens, his spirit is provoked within him seeing the city full of idols (17:16). He reasons in the synagogue with the Jews and devout persons, and in the marketplace daily with those he met (17:17). Some Epicurean and Stoic philosophers dispute with him (17:18) and bring him to the Areopagus (17:19). He says, “You men of Athens, I perceive that you are very religious in all things” (17:22). The poets quoted in 17:28 are Greek poets (such as Aratus and Cleanthes). Some hearers mock, some want to hear again, and a few believe, among them Dionysius the Areopagite and a woman named Damaris (17:32–34)."
    },
    tip: {
      zh: "17:28 引的希臘詩句出處（亞拉圖或克里安提斯等），是學者的推測；經文只說「你們作詩的有人說」。",
      en: "The source of the Greek poetry quoted in 17:28 (Aratus or Cleanthes and others) is scholarly inference; the text says only “some of your own poets have said.”"
    },
    related: ["philippian_jailer", "priscilla_aquila", "paul", "ephesus_riot"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "priscilla_aquila", book: "acts", no: 22, kind: "person", type: "wisdom", rarity: 4,
    zh: "百基拉與亞居拉", en: "Priscilla and Aquila",
    tag: { zh: "製造帳棚為業，把神的道講解更加詳細", en: "Tentmakers Who Explained the Way More Accurately" },
    role: { zh: "哥林多和以弗所的夫婦（18:1-3、18-28）", en: "The couple in Corinth and Ephesus (18:1–3, 18–28)" },
    ch: [18],
    passages: ["18:1-3", "18:18-28"],
    moves: [
      { zh: "同業同住", en: "Same Trade, Same House", ref: "18:2-3",
        dzh: "保羅遇見一個猶太人，名叫亞居拉，同妻子百基拉新近從意大利來；他們本是製造帳棚為業，保羅就和他們同住做工。",
        den: "Paul found a Jew named Aquila with his wife Priscilla, recently come from Italy; they were tentmakers by trade, and he lived with them and worked." },
      { zh: "接亞波羅回家", en: "They Took Apollos Aside", ref: "18:26",
        dzh: "亞波羅在會堂裡放膽講道；百基拉、亞居拉聽見，就接他來，將神的道給他講解更加詳細。",
        den: "Apollos began to speak boldly in the synagogue; when Priscilla and Aquila heard him, they took him aside and explained to him the way of God more accurately." }
    ],
    traits: [
      { k: "strength", zh: "夫妻同工，名字常寫「百基拉」在前", en: "A couple working together, with Priscilla’s name often first" },
      { k: "weakness", zh: "因羅馬皇帝下令，被逐離開羅馬（18:2）", en: "Driven from Rome by the emperor’s edict (18:2)" }
    ],
    lesson: {
      zh: "他們的家成了保羅的家、教會的家、也成了一位有學問的傳道人再受教導的地方。亞波羅「最能講解聖經」，卻「只曉得約翰的洗禮」，他們接他來，講解更詳細（18:24-26）；他並沒有被羞辱。",
      en: "Their home becomes Paul’s home, a church’s home, and the place where a learned preacher is taught further. Apollos was “mighty in the Scriptures” yet “knew only the baptism of John”; they take him aside and explain more accurately (18:24–26) — and he is not shamed."
    },
    quote: { ref: "18:26",
      zh: "百基拉、亞居拉聽見，就接他來，將神的道給他講解更加詳細",
      en: "when Priscilla and Aquila heard him, they took him aside, and explained to him the way of God more accurately" },
    keyVerses: ["18:1", "18:2", "18:3", "18:18", "18:19", "18:24", "18:25", "18:26"],
    intro: {
      zh: "這事以後，保羅離了雅典，來到哥林多（18:1）。他遇見一個猶太人，名叫亞居拉，生在本都；因為革老丟命猶太人都離開羅馬，新近帶著妻百基拉，從意大利來（18:2）。他們本是製造帳棚為業，保羅因與他們同業，就和他們同住做工（18:3）。後來他們隨保羅到以弗所，保羅留下他們在那裡（18:18-19）。羅馬書 16:3-5 和哥林多前書 16:19 也提到他們，教會也在他們家裡聚會。",
      en: "After these things Paul departs from Athens and comes to Corinth (18:1). He finds a Jew named Aquila, a man of Pontus by race, who had recently come from Italy with his wife Priscilla, because Claudius had commanded all the Jews to depart from Rome (18:2). They were tentmakers, and because he practiced the same trade Paul lived with them and worked (18:3). Later they sail with Paul to Ephesus, where he leaves them (18:18–19). Romans 16:3–5 and 1 Corinthians 16:19 also mention them, with a church meeting in their house."
    },
    tip: {
      zh: "「革老丟命猶太人都離開羅馬」是歷史上的羅馬皇帝克勞迪烏斯的詔令；經文沒有寫年份。",
      en: "“Claudius had commanded all the Jews to depart from Rome” refers to the Roman emperor Claudius’s edict; the text gives no year."
    },
    related: ["areopagus", "ephesus_riot", "paul", "lydia_philippi"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "ephesus_riot", book: "acts", no: 23, kind: "other", type: "scheme", rarity: 3,
    zh: "以弗所的騷亂", en: "The Riot in Ephesus",
    tag: { zh: "大哉，以弗所人的亞底米啊！", en: "Great Is Artemis of the Ephesians!" },
    role: { zh: "銀匠與劇場（19:23-41）", en: "The silversmiths and the theater (19:23–41)" },
    ch: [19],
    passages: ["19:23-41"],
    moves: [
      { zh: "事業被人藐視", en: "Our Trade in Disrepute", ref: "19:26-27",
        dzh: "銀匠底米丟說：這保羅說人手所做的不是神；不獨我們這事業被人藐視，就是大女神亞底米的廟也要被人輕忽。",
        den: "Demetrius: “This Paul says they are no gods that are made with hands. Our trade may come into disrepute, and Artemis’s temple be counted as nothing.”" },
      { zh: "大哉，亞底米", en: "Great Is Artemis", ref: "19:28",
        dzh: "眾人聽見，就怒氣填胸，喊著說：大哉，以弗所人的亞底米啊！",
        den: "When they heard this they were filled with anger, and cried out, “Great is Artemis of the Ephesians!”" }
    ],
    traits: [
      { k: "strength", zh: "城裡的書記官用一番話平息了騷亂（19:35-41）", en: "The town clerk calms the riot with a speech (19:35–41)" },
      { k: "weakness", zh: "大多數人「不知道是為甚麼聚集」（19:32）", en: "Most did not know why they had come together (19:32)" }
    ],
    lesson: {
      zh: "騷亂的起因是銀匠的生意，用的語言卻是宗教：「大哉，亞底米！」（19:27-28）書記官說的話很有分寸：這些人既沒有偷廟中之物，也沒有毀謗你們的女神；要告狀，有公堂（19:37-38）。",
      en: "The riot starts with the silversmiths’ business but uses religious language: “Great is Artemis!” (19:27–28). The town clerk’s words are measured: these men are neither robbers of temples nor blasphemers of your goddess; if there are complaints, there are courts (19:37–38)."
    },
    quote: { ref: "19:28",
      zh: "大哉，以弗所人的亞底米啊",
      en: "Great is Artemis of the Ephesians!" },
    keyVerses: ["19:23", "19:24", "19:25", "19:26", "19:27", "19:28", "19:29", "19:32", "19:35", "19:41"],
    intro: {
      zh: "那時，因這道起的擾亂不小（19:23）。有一個銀匠，名叫底米丟，是製造亞底米神龕的，使匠人得了不少的生意（19:24）。他聚集他們，說：這保羅不但在以弗所，也幾乎在亞細亞全地，引誘迷惑許多人（19:26）。眾人聽見，就怒氣填胸（19:28），擁到戲園裡去（19:29）。城裡的書記官安撫眾人，說這件事不可駁，也不當輕舉妄動（19:35-36）。他說完了，就叫會眾散去（19:41）。保羅的朋友該猶和亞里達古也被拉進戲園（19:29）。",
      en: "About that time there arises no small disturbance concerning the Way (19:23). A silversmith named Demetrius, who made silver shrines of Artemis, brought no little business to the craftsmen (19:24). He gathers them and says this Paul has persuaded and turned away many people, not only at Ephesus but almost throughout all Asia (19:26). Hearing this, they are filled with anger (19:28) and rush into the theater (19:29). The town clerk quiets the crowd, saying these things cannot be denied and they should do nothing rash (19:35–36). When he had said this he dismissed the assembly (19:41). Paul’s companions Gaius and Aristarchus are dragged into the theater (19:29)."
    },
    tip: {
      zh: "以弗所的亞底米廟是古代世界七大奇蹟之一，這是一般的歷史資料；使徒行傳只說「大女神亞底米的廟」。",
      en: "The temple of Artemis at Ephesus was one of the seven wonders of the ancient world, a general historical note; Acts says only “the temple of the great goddess Artemis.”"
    },
    related: ["priscilla_aquila", "areopagus", "eutychus", "paul"]
  },

  // ── 024 ──────────────────────────────────────────────────────────────────
  {
    id: "eutychus", book: "acts", no: 24, kind: "person", type: "harvest", rarity: 3,
    zh: "猶推古", en: "Eutychus",
    meaning: { zh: "「幸運的」", en: "“Fortunate”" },
    tag: { zh: "他的靈魂還在身上", en: "His Life Is in Him" },
    role: { zh: "特羅亞的夜晚（20:7-12）", en: "The night in Troas (20:7–12)" },
    ch: [20],
    passages: ["20:7-12"],
    moves: [
      { zh: "坐在窗臺上沉睡", en: "Asleep in the Window", ref: "20:9",
        dzh: "有一個少年人，名叫猶推古，坐在窗臺上，困倦沉睡；保羅講了多時，他睡熟了，就從三層樓上掉下去。",
        den: "A young man named Eutychus sat in the window, weighed down with deep sleep; as Paul spoke still longer, he fell down from the third floor." },
      { zh: "你們不要發慌", en: "Don’t Be Troubled", ref: "20:10",
        dzh: "保羅下去，伏在他身上，抱著他，說：你們不要發慌，他的靈魂還在身上。",
        den: "Paul went down, fell upon him and embraced him: “Don’t be troubled, for his life is in him.”" }
    ],
    traits: [
      { k: "strength", zh: "「有人把那童子活活地領來」（20:12）", en: "“They brought the boy in alive” (20:12)" },
      { k: "weakness", zh: "在三層樓的窗臺上睡著", en: "Fell asleep in a third-floor window" }
    ],
    lesson: {
      zh: "這個故事有一種不浮誇的人情味：那一夜聚會的人很多，燈也很多（20:8），保羅講到半夜，少年人睡著了。他掉下去以後，保羅上樓再擘餅、談到天亮（20:11）。「得的安慰不小」（20:12）。",
      en: "The story has an unassuming human warmth: many people in the room, many lamps (20:8), Paul talking until midnight, a young man dozing off. After the fall, Paul goes upstairs, breaks bread again, and talks until daybreak (20:11). “They were greatly comforted” (20:12)."
    },
    quote: { ref: "20:10",
      zh: "你們不要發慌，他的靈魂還在身上",
      en: "Don’t be troubled, for his life is in him." },
    keyVerses: ["20:7", "20:8", "20:9", "20:10", "20:11", "20:12"],
    intro: {
      zh: "七日的頭一日，我們聚會擘餅的時候，保羅因為要次日起行，就和他們講論，直講到半夜（20:7）。我們聚集的那座樓上，有好些燈燭（20:8）。有一個少年人，名叫猶推古，坐在窗臺上，困倦沉睡；保羅講了多時，少年人睡熟了，就從三層樓上掉下去；扶起他來，已經死了（20:9）。保羅下去，伏在他身上，抱著他（20:10）。他是真的死了，還是昏過去，經文說「已經死了」，保羅卻說「他的靈魂還在身上」，兩者的關係，注釋書有不同讀法。",
      en: "On the first day of the week, when the disciples come together to break bread, Paul, intending to depart the next day, talks with them and continues his speech until midnight (20:7). There are many lamps in the upper room where they are gathered (20:8). A young man named Eutychus sits in the window, weighed down with deep sleep; as Paul speaks still longer he falls from the third floor and is taken up dead (20:9). Paul goes down, falls on him and embraces him (20:10). Whether he was truly dead or only unconscious the text says “taken up dead,” while Paul says “his life is in him”; commentaries read the relation differently."
    },
    tip: {
      zh: "「已經死了」與「他的靈魂還在身上」的關係，注釋書有兩種讀法：一是復活的神蹟，一是昏迷而保羅知道他還活著。",
      en: "The relation of “taken up dead” and “his life is in him” has two readings: a resurrection miracle, or unconsciousness with Paul knowing he was alive."
    },
    related: ["ephesus_riot", "miletus_farewell", "tabitha", "paul"]
  },

  // ── 025 ──────────────────────────────────────────────────────────────────
  {
    id: "miletus_farewell", book: "acts", no: 25, kind: "other", type: "love", rarity: 4,
    zh: "米利都的告別", en: "The Farewell at Miletus",
    tag: { zh: "施比受更為有福", en: "It Is More Blessed to Give Than to Receive" },
    role: { zh: "對以弗所長老的話（20:17-38）", en: "Words to the Ephesian elders (20:17–38)" },
    ch: [20],
    passages: ["20:17-38"],
    moves: [
      { zh: "行完我的路程", en: "Finish My Course", ref: "20:24",
        dzh: "我卻不以性命為念，也不看為寶貴，只要行完我的路程，成就我從主耶穌所領受的職事，證明神恩惠的福音。",
        den: "“I don’t count my life of any value, so that I may finish my race and the ministry I received from the Lord Jesus.”" },
      { zh: "施比受更為有福", en: "More Blessed to Give", ref: "20:35",
        dzh: "我凡事給你們作榜樣，叫你們知道應當這樣勞苦，扶助軟弱的人，又當記念主耶穌的話：施比受更為有福。",
        den: "“In all things I gave you an example… remember the words of the Lord Jesus, that he himself said, ‘It is more blessed to give than to receive.’”" }
    ],
    traits: [
      { k: "strength", zh: "只有路加記下這句耶穌的話（20:35）", en: "Only Luke records this saying of Jesus (20:35)" },
      { k: "weakness", zh: "「你們以後不能再見我的面了」（20:25、38）", en: "“You will see my face no more” (20:25, 38)" }
    ],
    lesson: {
      zh: "這是使徒行傳裡保羅唯一一篇對信徒（而不是對外人）說的長話：回顧、勸勉、託付。結尾是跪下一同禱告，眾人痛哭，抱著保羅的頸項，連連與他親嘴（20:36-37）。",
      en: "It is Paul’s only long speech in Acts to believers (not outsiders): review, exhortation, entrusting. It ends with kneeling to pray together, all weeping, embracing Paul and kissing him (20:36–37)."
    },
    quote: { ref: "20:35",
      zh: "施比受更為有福",
      en: "It is more blessed to give than to receive." },
    keyVerses: ["20:17", "20:18", "20:19", "20:22", "20:24", "20:28", "20:31", "20:35", "20:37", "20:38"],
    intro: {
      zh: "保羅從米利都打發人往以弗所去，請教會的長老來（20:17）。他們來了，保羅回顧自己在他們中間的為人：服事主，凡事謙卑，眼中流淚（20:18-19）；現在往耶路撒冷去，聖靈在各城裡向他指證，有捆鎖與患難等待他（20:22-23）。他囑咐他們：「聖靈立你們作全群的監督，你們要為神的教會牧養」（20:28）；又警告兇暴的豺狼要進來（20:29）。說完了，就跪下同他們眾人禱告（20:36）。「施比受更為有福」這句話，福音書裡沒有記載。",
      en: "From Miletus Paul sends to Ephesus and calls for the elders of the assembly (20:17). When they come he reviews how he lived among them: serving the Lord with all humility, with tears (20:18–19); now going to Jerusalem, the Holy Spirit testifies in every city that bonds and afflictions await him (20:22–23). He charges them: “the Holy Spirit has made you overseers, to shepherd the assembly of the Lord” (20:28), and warns that fierce wolves will come in (20:29). When he has said this he kneels down and prays with them all (20:36). The saying “It is more blessed to give than to receive” is not recorded in the Gospels."
    },
    tip: {
      zh: "「施比受更為有福」是福音書以外所記的耶穌的話；保羅怎麼知道它，經文沒有說明。",
      en: "“It is more blessed to give than to receive” is a saying of Jesus recorded outside the Gospels; how Paul knew it the text does not say."
    },
    related: ["eutychus", "ephesus_riot", "paul", "shipwreck_malta"]
  },

  // ── 026 ──────────────────────────────────────────────────────────────────
  {
    id: "shipwreck_malta", book: "acts", no: 26, kind: "other", type: "power", rarity: 4,
    zh: "往羅馬的船難", en: "The Shipwreck on the Way to Rome",
    tag: { zh: "保羅，不要害怕，你必定站在該撒面前", en: "Don’t Be Afraid, Paul. You Must Stand Before Caesar" },
    role: { zh: "風暴與米利大島（第 27 章）", en: "The storm and Malta (ch 27)" },
    ch: [27],
    passages: ["27:1-44"],
    moves: [
      { zh: "天使站在旁邊", en: "An Angel Stood by Me", ref: "27:23-24",
        dzh: "保羅說：神的使者昨夜站在我旁邊，說：保羅，不要害怕，你必定站在該撒面前，並且與你同船的人，神都賜給你了。",
        den: "“An angel stood by me this night, saying, ‘Don’t be afraid, Paul. You must stand before Caesar. God has granted you all who sail with you.’”" },
      { zh: "性命一個也不失喪", en: "No Loss of Life", ref: "27:22",
        dzh: "我還勸你們放心，你們的性命一個也不失喪，惟獨失喪這船。",
        den: "“I exhort you to cheer up, for there will be no loss of life among you, but only of the ship.”" }
    ],
    traits: [
      { k: "strength", zh: "在風暴中，保羅成了船上最鎮定的人", en: "In the storm Paul becomes the calmest man on board" },
      { k: "weakness", zh: "船和貨都失去了（27:22、41）", en: "The ship and cargo are lost (27:22, 41)" }
    ],
    lesson: {
      zh: "船在海上漂了十四天，眾人太久沒有吃東西（27:27、33）。保羅鼓勵他們吃飯，他拿起餅，在眾人面前祝謝，擘開，吃了（27:35）；兩百七十六個人都得救上岸（27:37、44）。「與你同船的人，神都賜給你了。」",
      en: "The ship drifts fourteen days and everyone has gone long without food (27:27, 33). Paul urges them to eat, takes bread, gives thanks before them all, breaks it and eats (27:35); all two hundred seventy-six reach the land safe (27:37, 44). “God has granted you all those who sail with you.”"
    },
    quote: { ref: "27:24",
      zh: "保羅，不要害怕，你必定站在該撒面前，並且與你同船的人，神都賜給你了",
      en: "Don’t be afraid, Paul. You must stand before Caesar." },
    keyVerses: ["27:1", "27:9", "27:14", "27:20", "27:22", "27:23", "27:24", "27:35", "27:44", "28:1"],
    intro: {
      zh: "決定了我們坐船往意大利去，就把保羅和別的囚犯交給御營裡一個百夫長，名叫猶流（27:1）。時間已久，已經過了禁食的日期（和合本：已經過了節期，指贖罪日），航海很危險，保羅就勸他們不要開船（27:9-10）；百夫長卻信從掌舵的和船主，不信保羅的話。後來有一股名叫友拉革羅的大風颳起來（27:14）；十四天之後，船撞在沙灘上，船尾被浪的猛力沖壞（27:41）。他們上了岸，才知道這島名叫米利大（28:1）。",
      en: "When it was decided that they should sail to Italy, they delivered Paul and certain other prisoners to a centurion named Julius of the Augustan Regiment (27:1). Much time had passed, and the fast (the Day of Atonement) was already over, and sailing was dangerous, so Paul advised them not to sail (27:9–10); but the centurion believed the pilot and the owner of the ship rather than Paul. Later a tempestuous wind called Euroclydon beat down (27:14); after fourteen days the ship ran aground on a sandbar and the stern was broken by the violence of the waves (27:41). Brought safely to land they learned the island was called Malta (28:1)."
    },
    tip: {
      zh: "「友拉革羅」是東北方的大風；27:9 的「禁食的日期」指贖罪日，約在九月底十月初。",
      en: "“Euroclydon” is a northeast gale; “the fast” in 27:9 refers to the Day of Atonement, around late September or early October."
    },
    related: ["miletus_farewell", "paul_in_rome", "paul", "damascus_road"]
  },

  // ── 027 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_in_rome", book: "acts", no: 27, kind: "other", type: "heaven", rarity: 5,
    zh: "羅馬的寓所", en: "The House in Rome",
    tag: { zh: "放膽傳講，並沒有人禁止", en: "With All Boldness, Without Hindrance" },
    role: { zh: "全書的結尾（28:16-31）", en: "The close of the book (28:16–31)" },
    ch: [28],
    passages: ["28:16-31"],
    moves: [
      { zh: "和一個看守他的兵另住", en: "Stayed with the Soldier Guarding Him", ref: "28:16",
        dzh: "進了羅馬城，保羅蒙准和一個看守他的兵另住在一處。",
        den: "When we entered into Rome, Paul was allowed to stay by himself with the soldier who guarded him." },
      { zh: "足足兩年", en: "Two Whole Years", ref: "28:30-31",
        dzh: "保羅在自己所租的房子裡住了足足兩年，凡來見他的人，他全都接待，放膽傳講神國的道，並沒有人禁止。",
        den: "Paul stayed two whole years in his own rented house and received all who came to him, preaching God’s Kingdom with all boldness, without hindrance." }
    ],
    traits: [
      { k: "strength", zh: "「凡來見他的人，他全都接待」", en: "“Received all who were coming to him”" },
      { k: "identity", zh: "全書最後一個詞是「沒有人禁止」", en: "The book’s last word is “without hindrance”" }
    ],
    lesson: {
      zh: "使徒行傳結束時，保羅仍然是囚犯，也仍然在傳福音；書沒有說他受審的結果，卻以「放膽傳講神國的道，並沒有人禁止」（28:31）作結。1:8 的「直到地極」，在羅馬看起來已經到了一個新起點。",
      en: "Acts ends with Paul still a prisoner and still proclaiming; the book does not say how his trial turned out but closes with “preaching God’s Kingdom… without hindrance” (28:31). The “ends of the earth” of 1:8 looks, from Rome, like a new starting point."
    },
    quote: { ref: "28:31",
      zh: "放膽傳講神國的道，將主耶穌基督的事教導人，並沒有人禁止",
      en: "with all boldness, without hindrance" },
    keyVerses: ["28:14", "28:15", "28:16", "28:23", "28:24", "28:28", "28:30", "28:31"],
    intro: {
      zh: "進了羅馬城，保羅蒙准和一個看守他的兵另住在一處（28:16）。過了三天，他請猶太人的首領來，向他們說明自己為何被鎖鍊捆著（28:17-20）。他們和保羅約定了日子，就有許多人到他的寓處來；保羅從早到晚，對他們講論，證明神國的道，引摩西的律法和先知的書，以耶穌的事勸勉他們；他所說的話，有信的，有不信的（28:23-24）。28:30-31 是全書的結尾。使徒行傳沒有說保羅後來如何，傳統上有不同的說法，但經文沒有寫。",
      en: "When they enter Rome Paul is allowed to stay by himself with the soldier who guards him (28:16). After three days he calls together the leaders of the Jews and explains why he is bound with this chain (28:17–20). They set a day, and many come to him at his lodging; from morning until evening he explains, testifying about the Kingdom of God and persuading them concerning Jesus from the law of Moses and the prophets; some believe and some do not (28:23–24). 28:30–31 closes the book. Acts does not say what happened to Paul afterward; traditions differ, but the text does not tell."
    },
    tip: {
      zh: "使徒行傳沒有說保羅的案子如何結束；書信（如腓立比書、提摩太後書）的記載，與傳統上關於他死的說法，需要另外對照。",
      en: "Acts does not say how Paul’s case ended; the letters (such as Philippians and 2 Timothy) and traditions about his death must be compared separately."
    },
    related: ["shipwreck_malta", "miletus_farewell", "paul", "ascension_acts"]
  }

);
