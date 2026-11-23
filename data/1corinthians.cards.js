// 聖經人物卡 · 哥林多前書 (1 Corinthians) — book info + cards.
// Verse text comes from data/1corinthians.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/1corinthians.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two.
// External references (Acts 18:1-18; Rom 16:23; Isa 64:4; Ps 44:22) appear in prose only.
// Flagged rather than decided: "deliver to Satan" (5:5), the sin lists of 6:9-11, the details of 11:2-16 (head coverings,
// "angels"), "unworthily" in 11:27, "baptized into one body" in 12:13, what "the perfect" is in 13:10, 14:34-35, baptism for
// the dead (15:29), and whether "Maranatha" means "Our Lord, come" or "Our Lord has come".

window.BOOKS.push({
  id: "1corinthians",
  zh: "哥林多前書", en: "1 Corinthians", abbr: { zh: "林前", en: "1 Cor" },
  order: 46, section: { zh: "書信", en: "Epistles" },
  chapters: 16,
  fan: ["love_is_patient", "paul_to_corinth", "resurrection_chapter"],
  summary: {
    zh: "哥林多前書是保羅在以弗所寫給他所建立的哥林多教會的信，回應他聽到的消息（革來氏家的人，1:11）和教會寫給他的問題（7:1）。哥林多是一座繁華的港口城市，教會裡有分黨、有淫亂、有訴訟、有祭偶像之物的爭論、有聚餐時富人和窮人的分別、有屬靈恩賜的驕傲。保羅一件一件地回應：十字架的道理是神的智慧（1-4 章）；教會的潔淨和身體（5-6 章）；婚姻與獨身（7 章）；知識與愛心，偶像之物（8-10 章）；聚會、主的晚餐、恩賜（11-14 章，包括 13 章的愛）；基督的復活與我們的復活（15 章）；為聖徒的捐款與問安（16 章）。",
    en: "1 Corinthians is Paul’s letter from Ephesus to the church he founded in Corinth, answering what he heard (from Chloe’s people, 1:11) and what they wrote to him (7:1). Corinth was a bustling port city, and the church had factions, immorality, lawsuits, disputes over meat sacrificed to idols, rich and poor divided at the shared meal, and pride in spiritual gifts. Paul answers point by point: the word of the cross is God’s wisdom (chs 1–4); purity and the body (chs 5–6); marriage and singleness (ch 7); knowledge and love, and idol meat (chs 8–10); worship, the Lord’s Supper and gifts (chs 11–14, including the love of ch 13); the resurrection of Christ and ours (ch 15); the collection for the saints and greetings (ch 16)."
  },
  outline: [
    { zh: "分黨；十字架的道理；神的智慧與人的智慧", en: "Factions; the word of the cross; God’s wisdom and human wisdom" },
    { zh: "聖靈參透神深奧的事", en: "The Spirit searches the deep things of God" },
    { zh: "栽種與澆灌；根基；神的殿", en: "Planting and watering; the foundation; God’s temple" },
    { zh: "基督的執事，神奧祕事的管家", en: "Servants of Christ and stewards of God’s mysteries" },
    { zh: "教會中的淫亂；一點麵酵", en: "Immorality in the church; a little yeast" },
    { zh: "弟兄告弟兄；身子是聖靈的殿", en: "Lawsuits among believers; the body a temple of the Spirit" },
    { zh: "婚姻、獨身與各人所領受的恩賜", en: "Marriage, singleness and each one’s gift" },
    { zh: "祭偶像之物；知識與愛心", en: "Food sacrificed to idols; knowledge and love" },
    { zh: "使徒的權利；向甚麼人作甚麼人；賽跑", en: "An apostle’s rights; all things to all people; the race" },
    { zh: "曠野的警戒；神信實，給你們開一條出路", en: "Warnings from the wilderness; God is faithful and provides a way out" },
    { zh: "聚會中的規矩；主的晚餐", en: "Order in worship; the Lord’s Supper" },
    { zh: "恩賜；一個身體，許多肢體", en: "Gifts; one body, many members" },
    { zh: "愛的篇章", en: "The chapter of love" },
    { zh: "先知講道與方言；聚會要有次序", en: "Prophecy and tongues; order in the assembly" },
    { zh: "基督復活；我們的復活；得勝", en: "Christ’s resurrection; our resurrection; victory" },
    { zh: "為聖徒的捐項；問安；「主必要來」", en: "The collection for the saints; greetings; “Come, Lord”" }
  ],
  notes: {
    zh: "小提示：哥林多前書讀起來像一封「回信」：保羅常說「論到……」（7:1、25；8:1；12:1；16:1），回應教會的問題。哥林多教會是保羅在第二次旅行時建立的（徒 18:1-18），保羅在以弗所寫這信（16:8）。書信的歷史背景和幾處較難的經文（如 11:2-16、14:34-35），詮釋書有許多不同的看法。",
    en: "Good to know: 1 Corinthians reads like a reply: Paul often says “Now concerning…” (7:1, 25; 8:1; 12:1; 16:1), answering the church’s questions. The Corinthian church was founded on Paul’s second journey (Acts 18:1–18), and Paul writes from Ephesus (16:8). The historical background and several harder passages (such as 11:2–16 and 14:34–35) have many different readings among commentaries."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_to_corinth", book: "1corinthians", no: 1, kind: "person", type: "wisdom", rarity: 6,
    zh: "寫信給哥林多的保羅", en: "Paul Writing to Corinth",
    tag: { zh: "一封回答問題的信", en: "A Letter That Answers Questions" },
    role: { zh: "哥林多教會的創立者", en: "Founder of the Corinthian church" },
    ch: [1, 16],
    passages: ["1:1-9", "16:21-24"],
    moves: [
      { zh: "蒙召作使徒", en: "Called to Be an Apostle", ref: "1:1",
        dzh: "奉神旨意，蒙召作耶穌基督使徒的保羅，同兄弟所提尼。",
        den: "Paul, called to be an apostle of Jesus Christ through the will of God, and our brother Sosthenes." },
      { zh: "凡事憑愛心", en: "Done in Love", ref: "16:14",
        dzh: "凡你們所做的都要憑愛心而做。",
        den: "Let all that you do be done in love." }
    ],
    traits: [
      { k: "strength", zh: "針對具體問題，一個一個回答", en: "Answers concrete problems one by one" },
      { k: "identity", zh: "與所提尼同署名；在以弗所寫（16:8）", en: "Co-signed with Sosthenes; written from Ephesus (16:8)" }
    ],
    lesson: {
      zh: "保羅對這間問題很多的教會，開頭仍先說感謝：「我常為你們感謝我的神，因神的恩典賜給你們」（1:4）；結尾又說「願我的愛在基督耶穌裡，與你們眾人同在」（16:24）。責備在中間，兩端都是愛。",
      en: "To this troubled church Paul begins with thanks — “I always thank my God concerning you, for the grace of God which was given you” (1:4) — and ends “My love be with you all in Christ Jesus” (16:24). The rebukes are in the middle; both ends are love."
    },
    quote: { ref: "1:1",
      zh: "奉神旨意，蒙召作耶穌基督使徒的保羅，同兄弟所提尼",
      en: "Paul, called to be an apostle of Jesus Christ through the will of God, and our brother Sosthenes" },
    keyVerses: ["1:1", "1:4", "1:10", "7:1", "16:8", "16:14", "16:24"],
    intro: {
      zh: "保羅在第二次旅行時在哥林多住了一年半（徒 18:11），之後在以弗所寫這信。他聽到革來氏家的人說教會有紛爭（1:11），又接到教會的問題（7:1）。所提尼可能就是使徒行傳 18:17 被打的管會堂的人，但經文沒有說明。信中有些地方難讀，如 5:5、11:2-16、14:34-35；保羅在 7:12 也分別說「這是我說的，不是主說的」。",
      en: "On his second journey Paul stayed in Corinth a year and a half (Acts 18:11) and later wrote this letter from Ephesus. He heard of strife in the church from Chloe’s people (1:11) and received the church’s questions (7:1). Sosthenes may be the synagogue ruler beaten in Acts 18:17, but the text does not say. Some passages are hard, such as 5:5, 11:2–16, 14:34–35; in 7:12 Paul even distinguishes “I say, not the Lord.”"
    },
    tip: {
      zh: "所提尼是否就是使徒行傳 18:17 的那位，經文沒有說明；信中的「哥林多後書」是另一封，兩封之間還有失傳的信件（參林前 5:9）。",
      en: "Whether Sosthenes is the man of Acts 18:17 the text does not say; 2 Corinthians is another letter, and there was an earlier lost letter between (compare 1 Cor 5:9)."
    },
    related: ["i_follow_paul", "word_of_the_cross", "love_is_patient", "resurrection_chapter"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "i_follow_paul", book: "1corinthians", no: 2, kind: "other", type: "scheme", rarity: 3,
    zh: "「我是屬保羅的」", en: "“I Follow Paul”",
    tag: { zh: "基督是分開的嗎？", en: "Is Christ Divided?" },
    role: { zh: "教會的分黨（1:10-17）", en: "Factions in the church (1:10–17)" },
    ch: [1],
    passages: ["1:10-17"],
    moves: [
      { zh: "不可分黨", en: "No Divisions", ref: "1:10",
        dzh: "弟兄們，我勸你們都說一樣的話。你們中間也不可分黨，只要一心一意，彼此相合。",
        den: "I beg you, brothers, that you all speak the same thing, and that there be no divisions among you, but that you be perfected together in the same mind." },
      { zh: "基督是分開的嗎", en: "Is Christ Divided?", ref: "1:12-13",
        dzh: "你們各人說：我是屬保羅的，我是屬亞波羅的，我是屬磯法的，我是屬基督的。基督是分開的嗎？",
        den: "Each one says, “I follow Paul,” “I follow Apollos,” “I follow Cephas,” “I follow Christ.” Is Christ divided?" }
    ],
    traits: [
      { k: "strength", zh: "保羅連自己的名字也不放在前面", en: "Paul puts not even his own name first" },
      { k: "weakness", zh: "「我是屬基督的」也成了一個黨派", en: "Even “I follow Christ” becomes a party slogan" }
    ],
    lesson: {
      zh: "分黨是以人為中心：各人誇耀自己跟隨的那位。保羅的回應是三個問句：基督是分開的嗎？保羅為你們釘十字架嗎？你們是奉保羅的名受洗嗎？（1:13）",
      en: "Factions center on people: each boasts of the one he follows. Paul answers with three questions: Is Christ divided? Was Paul crucified for you? Were you baptized into Paul’s name? (1:13)."
    },
    quote: { ref: "1:10",
      zh: "你們中間也不可分黨，只要一心一意，彼此相合",
      en: "that there be no divisions among you" },
    keyVerses: ["1:10", "1:11", "1:12", "1:13", "1:14", "1:17"],
    intro: {
      zh: "「弟兄們，我藉我們主耶穌基督的名勸你們都說一樣的話。」（1:10）革來氏家的人對保羅說，哥林多人中間有紛爭（1:11）。1:12 列出四個口號：屬保羅、屬亞波羅、屬磯法（彼得）、屬基督。保羅說「我感謝神，除了基利司布並該猶，我沒有給你們一個人施洗」（1:14）；他的使命是傳福音（1:17）。保羅書信沒有說這四個黨的具體分歧，所以他們是怎樣的黨派，學者有許多推測。",
      en: "“Now I beg you, brothers, through the name of our Lord, Jesus Christ, that you all speak the same thing” (1:10). Chloe’s people tell Paul there are quarrels among the Corinthians (1:11). 1:12 lists four slogans: of Paul, of Apollos, of Cephas (Peter), of Christ. Paul says, “I thank God that I baptized none of you, except Crispus and Gaius” (1:14); his mission is to preach the Good News (1:17). The letter does not say what exactly divided the four groups, so what kind of parties they were has many scholarly guesses."
    },
    tip: {
      zh: "四個黨派的實際分歧是甚麼，書信沒有說明；「屬基督的」是另一個黨，還是保羅的諷刺，也有不同讀法。",
      en: "The actual differences among the four groups are not stated; whether “of Christ” is another party or Paul’s irony is read differently."
    },
    related: ["paul_to_corinth", "word_of_the_cross", "master_builder", "stewards_servants"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "word_of_the_cross", book: "1corinthians", no: 3, kind: "other", type: "power", rarity: 5,
    zh: "十字架的道理", en: "The Word of the Cross",
    tag: { zh: "在我們得救的人，卻為神的大能", en: "To Us Who Are Saved, the Power of God" },
    role: { zh: "神的愚拙與人的智慧（1:18-31）", en: "God’s foolishness and human wisdom (1:18–31)" },
    ch: [1],
    passages: ["1:18-31"],
    moves: [
      { zh: "愚拙，卻是大能", en: "Foolishness, Yet Power", ref: "1:18",
        dzh: "十字架的道理，在那滅亡的人為愚拙；在我們得救的人，卻為神的大能。",
        den: "The word of the cross is foolishness to those who are dying, but to us who are saved it is the power of God." },
      { zh: "神揀選了愚拙的", en: "God Chose the Foolish", ref: "1:27-29",
        dzh: "神揀選了世上愚拙的、軟弱的、卑賤的，使一切有血氣的，在神面前一個也不能自誇。",
        den: "God chose the foolish, weak and lowly things of the world, that no flesh should boast before God." }
    ],
    traits: [
      { k: "strength", zh: "猶太人要神蹟，希臘人求智慧，我們卻傳釘十字架的基督（1:22-23）", en: "Jews ask for signs, Greeks seek wisdom; we preach Christ crucified (1:22–23)" },
      { k: "weakness", zh: "「在猶太人為絆腳石，在外邦人為愚拙」（1:23）", en: "“To Jews a stumbling block, to Gentiles foolishness” (1:23)" }
    ],
    lesson: {
      zh: "保羅叫哥林多人看自己：「蒙召的，按著肉體有智慧的不多，有能力的不多，有尊貴的也不多」（1:26）。教會的組成本身就是一個證據：神用的是人看為軟弱的。所以「自誇的，當指著主誇口」（1:31）。",
      en: "Paul has the Corinthians look at themselves: “not many wise according to the flesh, not many mighty, not many noble are called” (1:26). The church’s makeup is itself evidence: God uses what people see as weak. So “he who boasts, let him boast in the Lord” (1:31)."
    },
    quote: { ref: "1:18",
      zh: "在我們得救的人，卻為神的大能",
      en: "to us who are saved it is the power of God" },
    keyVerses: ["1:18", "1:22", "1:23", "1:24", "1:25", "1:26", "1:27", "1:29", "1:31"],
    intro: {
      zh: "「因為十字架的道理，在那滅亡的人為愚拙；在我們得救的人，卻為神的大能。」（1:18）1:19 引用以賽亞書 29:14：「我要滅絕智慧人的智慧。」1:22-24：猶太人要神蹟，希臘人求智慧，但我們傳釘十字架的基督；在蒙召的，無論是猶太人、希臘人，基督總為神的能力，神的智慧。1:25：「神的愚拙總比人智慧，神的軟弱總比人強壯。」這是保羅對哥林多人好高騖遠的回答。",
      en: "“For the word of the cross is foolishness to those who are dying, but to us who are saved it is the power of God” (1:18). 1:19 cites Isaiah 29:14: “I will destroy the wisdom of the wise.” 1:22–24: Jews ask for signs and Greeks seek after wisdom, but we preach Christ crucified; to those who are called, Jews and Greeks, Christ is the power of God and the wisdom of God. 1:25: “the foolishness of God is wiser than men, and the weakness of God is stronger than men.” It is Paul’s answer to Corinth’s aspiring pride."
    },
    tip: {
      zh: "「十字架的道理」不是在說十字架本身是愚拙，而是說人眼中的愚拙。",
      en: "“The word of the cross” does not say the cross itself is foolish but that it looks foolish in human eyes."
    },
    related: ["i_follow_paul", "spirit_searches", "master_builder", "resurrection_chapter"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "spirit_searches", book: "1corinthians", no: 4, kind: "other", type: "vision", rarity: 3,
    zh: "聖靈參透神深奧的事", en: "The Spirit Searches the Deep Things",
    tag: { zh: "眼睛未曾看見，耳朵未曾聽見", en: "What No Eye Has Seen, No Ear Heard" },
    role: { zh: "神的智慧（第 2 章）", en: "God’s wisdom (ch 2)" },
    ch: [2],
    passages: ["2:1-16"],
    moves: [
      { zh: "未曾想到的", en: "Not Entered the Heart", ref: "2:9",
        dzh: "神為愛他的人所預備的是眼睛未曾看見，耳朵未曾聽見，人心也未曾想到的。",
        den: "“Things which an eye didn’t see, and an ear didn’t hear, which didn’t enter into the heart of man, these God has prepared for those who love him.”" },
      { zh: "聖靈參透萬事", en: "The Spirit Searches All Things", ref: "2:10",
        dzh: "只有神藉著聖靈向我們顯明了，因為聖靈參透萬事，就是神深奧的事也參透了。",
        den: "To us, God revealed them through the Spirit. For the Spirit searches all things, yes, the deep things of God." }
    ],
    traits: [
      { k: "strength", zh: "「我們卻是有基督的心」（2:16）", en: "“We have Christ’s mind” (2:16)" },
      { k: "weakness", zh: "保羅來到時「又軟弱，又懼怕，又甚戰兢」（2:3）", en: "Paul came “in weakness, in fear, and in much trembling” (2:3)" }
    ],
    lesson: {
      zh: "保羅在哥林多沒有用「智慧委婉的言語」，只傳「耶穌基督並他釘十字架」（2:1-2）。他說有一種智慧，是「在完全的人中」講的（2:6），而理解它的方法不是聰明，而是聖靈（2:10-13）。",
      en: "In Corinth Paul did not use “persuasive words of human wisdom” but preached “Jesus Christ, and him crucified” (2:1–2). There is a wisdom spoken “among the perfect” (2:6), and the way to understand it is not cleverness but the Spirit (2:10–13)."
    },
    quote: { ref: "2:10",
      zh: "只有神藉著聖靈向我們顯明了，因為聖靈參透萬事，就是神深奧的事也參透了",
      en: "God revealed them through the Spirit. For the Spirit searches all things, yes, the deep things of God." },
    keyVerses: ["2:1", "2:2", "2:3", "2:4", "2:9", "2:10", "2:12", "2:14", "2:16"],
    intro: {
      zh: "「弟兄們，從前我到你們那裡去，並沒有用高言大智對你們宣傳神的奧祕。」（2:1）他來到時又軟弱，又懼怕，又甚戰兢（2:3），他的言語不是用智慧委婉的言語，乃是用聖靈和大能的明證（2:4）。2:9 的「眼睛未曾看見，耳朵未曾聽見」引自以賽亞書 64:4，保羅接著說「只有神藉著聖靈向我們顯明了」。2:14 說「屬血氣的人不領會神聖靈的事」，「屬血氣的」是甚麼人，各版本略有不同。",
      en: "“When I came to you, brothers, I didn’t come with excellence of speech or of wisdom, proclaiming to you the testimony of God” (2:1). He came “in weakness, in fear, and in much trembling” (2:3), his speech not with persuasive words of wisdom but in demonstration of the Spirit and of power (2:4). 2:9, “things which an eye didn’t see, and an ear didn’t hear,” draws on Isaiah 64:4, and Paul goes on, “to us, God revealed them through the Spirit.” 2:14 says “the natural man doesn’t receive the things of God’s Spirit”; who the “natural” (Greek psychikos) person is versions render a little differently."
    },
    tip: {
      zh: "2:9 引自以賽亞書 64:4，措辭與希伯來文不完全相同。",
      en: "2:9 draws on Isaiah 64:4, with wording not identical to the Hebrew."
    },
    related: ["word_of_the_cross", "i_follow_paul", "master_builder", "stewards_servants"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "master_builder", book: "1corinthians", no: 5, kind: "other", type: "harvest", rarity: 3,
    zh: "栽種與澆灌", en: "Planting and Watering",
    tag: { zh: "惟有神叫他生長", en: "But God Gave the Increase" },
    role: { zh: "教會是神的田地、神的殿（第 3 章）", en: "The church as God’s field and temple (ch 3)" },
    ch: [3],
    passages: ["3:1-23"],
    moves: [
      { zh: "惟有神叫他生長", en: "God Gives the Increase", ref: "3:6-7",
        dzh: "我栽種了，亞波羅澆灌了，惟有神叫他生長。可見栽種的，算不得甚麼，澆灌的，也算不得甚麼。",
        den: "I planted. Apollos watered. But God gave the increase. So neither he who plants is anything, nor he who waters, but God who gives the increase." },
      { zh: "那已經立好的根基", en: "The Foundation Already Laid", ref: "3:11",
        dzh: "因為那已經立好的根基就是耶穌基督，此外沒有人能立別的根基。",
        den: "For no one can lay any other foundation than that which has been laid, which is Jesus Christ." }
    ],
    traits: [
      { k: "strength", zh: "「我們是神的同工」（3:9）", en: "“We are God’s fellow workers” (3:9)" },
      { k: "weakness", zh: "以屬肉體的態度，互相嫉妒紛爭（3:3）", en: "Behaving like people of the flesh, with jealousy and strife (3:3)" }
    ],
    lesson: {
      zh: "保羅把分黨放回農夫與建築的比喻：栽種的和澆灌的都只是同工（3:5-9）；各人蓋的東西要被火試驗（3:12-15）；「你們就是神的殿」（3:16）。所以「不可拿人誇口」（3:21）。",
      en: "Paul puts the factions back into the images of farming and building: the planter and the waterer are only fellow workers (3:5–9); each one’s building will be tested by fire (3:12–15); “you are the temple of God” (3:16). So “let no one boast in men” (3:21)."
    },
    quote: { ref: "3:6",
      zh: "我栽種了，亞波羅澆灌了，惟有神叫他生長",
      en: "I planted. Apollos watered. But God gave the increase." },
    keyVerses: ["3:1", "3:3", "3:5", "3:6", "3:9", "3:10", "3:11", "3:13", "3:16", "3:21"],
    intro: {
      zh: "「弟兄們，我從前對你們說話，不能把你們當作屬靈的，只得把你們當作屬肉體的，在基督裡作嬰孩的。」（3:1）3:5-9 說亞波羅和保羅是「執事」，各人照主所賜的，「我栽種了，亞波羅澆灌了，惟有神叫他生長」。3:10-15：根基是耶穌基督，各人要謹慎怎樣在上面建造；3:15 說有人被火燒盡了，他自己雖然得救，卻像從火裡經過的一樣。這節的意思，各傳統（包括煉獄的教義）有不同讀法。",
      en: "“Brothers, I couldn’t speak to you as to spiritual, but as to fleshly, as to babies in Christ” (3:1). 3:5–9 says Apollos and Paul are “servants,” each as the Lord gave, “I planted. Apollos watered. But God gave the increase.” 3:10–15: the foundation is Jesus Christ, and each must take care how he builds on it; 3:15 says if someone’s work is burned up he himself will be saved, but as through fire. The meaning of that verse traditions (including the doctrine of purgatory) read differently."
    },
    tip: {
      zh: "3:15 「像從火裡經過」的意思，各傳統有不同讀法，包括與煉獄教義的關係。",
      en: "“As through fire” (3:15) traditions read differently, including its bearing on the doctrine of purgatory."
    },
    related: ["i_follow_paul", "stewards_servants", "word_of_the_cross", "spirit_searches"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "stewards_servants", book: "1corinthians", no: 6, kind: "other", type: "wisdom", rarity: 3,
    zh: "神奧祕事的管家", en: "Stewards of God’s Mysteries",
    tag: { zh: "所求於管家的，是要他有忠心", en: "Stewards Must Be Found Faithful" },
    role: { zh: "使徒與審判（第 4 章）", en: "Apostles and judgment (ch 4)" },
    ch: [4],
    passages: ["4:1-21"],
    moves: [
      { zh: "要有忠心", en: "Found Faithful", ref: "4:1-2",
        dzh: "人應當以我們為基督的執事，為神奧祕事的管家。所求於管家的，是要他有忠心。",
        den: "Let a man think of us as Christ’s servants, and stewards of God’s mysteries. It is required of stewards, that they be found faithful." },
      { zh: "世界的渣滓", en: "The Scum of the World", ref: "4:9-13",
        dzh: "神把我們使徒明明列在末後，好像定了死罪的囚犯；我們成了一臺戲給世人看；我們為基督的緣故算是愚拙的。",
        den: "God has displayed us, the apostles, last of all, like men sentenced to death; we are made a spectacle to the world; we are fools for Christ’s sake." }
    ],
    traits: [
      { k: "strength", zh: "「我被你們論斷，或被別人論斷，我都以為極小」（4:3）", en: "“It is a very small thing that I should be judged by you” (4:3)" },
      { k: "weakness", zh: "哥林多人「已經飽足了」「已經富足了」（4:8）", en: "The Corinthians “already filled,” “already rich” (4:8)" }
    ],
    lesson: {
      zh: "保羅對自己的標準只有一個：忠心（4:2）。他不被人評價動搖，也不自己論斷自己（4:3-4），因為判斷他的是主。比起哥林多人的自滿，使徒是「好像定了死罪的囚犯」（4:9）。",
      en: "Paul’s standard for himself is one thing: faithfulness (4:2). He is not moved by others’ evaluations and does not even judge himself (4:3–4), because the one who judges him is the Lord. Against the Corinthians’ self-satisfaction the apostles are “like men sentenced to death” (4:9)."
    },
    quote: { ref: "4:2",
      zh: "所求於管家的，是要他有忠心",
      en: "it is required of stewards, that they be found faithful" },
    keyVerses: ["4:1", "4:2", "4:3", "4:4", "4:6", "4:8", "4:9", "4:20"],
    intro: {
      zh: "「人應當以我們為基督的執事，為神奧祕事的管家。所求於管家的，是要他有忠心。」（4:1-2）保羅說「我被你們論斷，或被別人論斷，我都以為極小；連我自己也不論斷自己」（4:3）。4:8 帶著諷刺：「你們已經飽足了！已經豐富了！不用我們，自己就作王了。」4:14-15 說他寫這些話，是勸戒他的「親愛的兒女」；「你們在基督裡有成千的師傅，爸爸卻不多」。",
      en: "“So let a man think of us as Christ’s servants, and stewards of God’s mysteries. Here, moreover, it is required of stewards, that they be found faithful” (4:1–2). Paul says, “it is a very small thing that I should be judged by you, or by man’s judgment. Yes, I don’t judge my own self” (4:3). 4:8 is ironic: “You are already filled, you have already become rich, you have come to reign without us.” 4:14–15 says he writes to admonish “my beloved children”; “though you have ten thousand tutors in Christ, yet not many fathers.”"
    },
    tip: {
      zh: "4:8 的「作王」是諷刺語氣，意思是哥林多人自以為已經到了終點。",
      en: "“Reigning” in 4:8 is ironic: the Corinthians think they have already arrived."
    },
    related: ["master_builder", "i_follow_paul", "word_of_the_cross", "all_things_to_all"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "little_yeast", book: "1corinthians", no: 7, kind: "other", type: "scheme", rarity: 3,
    zh: "一點麵酵", en: "A Little Yeast",
    tag: { zh: "你們這自誇是不好的", en: "Your Boasting Is Not Good" },
    role: { zh: "教會中的淫亂（第 5 章）", en: "Immorality in the church (ch 5)" },
    ch: [5],
    passages: ["5:1-13"],
    moves: [
      { zh: "一點麵酵", en: "A Little Yeast", ref: "5:6",
        dzh: "你們這自誇是不好的。豈不知一點麵酵能使全團發起來嗎？",
        den: "Your boasting is not good. Don’t you know that a little yeast leavens the whole lump?" },
      { zh: "我們逾越節的羔羊", en: "Our Passover Lamb", ref: "5:7-8",
        dzh: "應當把舊酵除淨，好使你們成為新團；因為我們逾越節的羔羊基督已經被殺獻祭了。",
        den: "Purge out the old yeast, that you may be a new lump… For indeed Christ, our Passover, has been sacrificed in our place." }
    ],
    traits: [
      { k: "strength", zh: "用逾越節的意象說教會的潔淨", en: "Uses the Passover image for the church’s purity" },
      { k: "weakness", zh: "他們反而自誇（5:2、6）", en: "They are proud instead of grieving (5:2, 6)" }
    ],
    lesson: {
      zh: "有人與繼母同居（5:1），教會卻自高自大，沒有為此哀痛（5:2）。保羅的比喻是麵酵：一點能使全團發起來。他說的不是對外邦世界的審判，而是教會內部（5:9-13）。這一章的處分方式，是難讀的段落。",
      en: "A man is living with his father’s wife (5:1), and the church is arrogant and has not mourned (5:2). Paul’s image is yeast: a little leavens the whole lump. He speaks not of judging the outside world but of the church’s inside (5:9–13). The disciplinary measure in this chapter is a hard passage."
    },
    quote: { ref: "5:6",
      zh: "豈不知一點麵酵能使全團發起來嗎",
      en: "Don’t you know that a little yeast leavens the whole lump?" },
    keyVerses: ["5:1", "5:2", "5:5", "5:6", "5:7", "5:8", "5:9", "5:12", "5:13"],
    intro: {
      zh: "「風聞在你們中間有淫亂的事，這樣的淫亂連外邦人中也沒有，就是有人收了他的繼母。」（5:1）保羅說教會不但不為此憂愁，反倒自高自大（5:2），要把這人「交給撒但，敗壞他的肉體，使他的靈魂在主耶穌的日子可以得救」（5:5）。「交給撒但」的意思，各傳統有不同讀法（逐出教會，或是別的）。5:7-8 引逾越節的意象，勸他們守節不用舊酵。5:12-13：教會內部的事，要在教會內處理。",
      en: "“It is actually reported that there is sexual immorality among you, and such sexual immorality as is not even named among the Gentiles, that one has his father’s wife” (5:1). Paul says the church is not mourning but arrogant (5:2), and that this man should be handed “over to Satan for the destruction of the flesh, that the spirit may be saved in the day of the Lord Jesus” (5:5). What “handed over to Satan” means traditions read differently (expulsion, or something else). 5:7–8 uses the Passover image and urges keeping the feast without old yeast. 5:12–13: matters inside the church are to be handled inside the church."
    },
    tip: {
      zh: "5:5「交給撒但」的意思，各傳統有不同讀法；它的目的是「使他的靈魂可以得救」。",
      en: "What “deliver to Satan” (5:5) means traditions read differently; its stated aim is “that the spirit may be saved.”"
    },
    related: ["body_a_temple", "the_lords_supper", "i_follow_paul", "stewards_servants"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "body_a_temple", book: "1corinthians", no: 8, kind: "other", type: "faith", rarity: 3,
    zh: "身子是聖靈的殿", en: "Your Body Is a Temple",
    tag: { zh: "你們是重價買來的", en: "You Were Bought with a Price" },
    role: { zh: "身體與自由（第 6 章）", en: "Body and freedom (ch 6)" },
    ch: [6],
    passages: ["6:12-20"],
    moves: [
      { zh: "身子是聖靈的殿", en: "A Temple of the Holy Spirit", ref: "6:19",
        dzh: "豈不知你們的身子就是聖靈的殿嗎？這聖靈是從神而來，住在你們裡頭的；並且你們不是自己的人。",
        den: "Don’t you know that your body is a temple of the Holy Spirit who is in you, whom you have from God? You are not your own." },
      { zh: "重價買來的", en: "Bought with a Price", ref: "6:20",
        dzh: "因為你們是重價買來的。所以，要在你們的身子上榮耀神。",
        den: "You were bought with a price. Therefore glorify God in your body." }
    ],
    traits: [
      { k: "strength", zh: "「凡事我都可行，但不都有益處」（6:12）", en: "“All things are lawful for me, but not all things are expedient” (6:12)" },
      { k: "weakness", zh: "「凡事我都可行」成了放縱的口號", en: "“All things are lawful” became a slogan for license" }
    ],
    lesson: {
      zh: "哥林多人用「凡事我都可行」為自己辯護，保羅回答：「但不都有益處」，「我不願受任何事的轄制」（6:12）。身體不是屬於淫亂，而是屬於主（6:13）；你們「不是自己的人，是重價買來的」（6:19-20）。",
      en: "The Corinthians justify themselves with “All things are lawful for me,” and Paul answers: “but not all things are expedient… I will not be brought under the power of any” (6:12). The body is not for sexual immorality but for the Lord (6:13); “you are not your own… you were bought with a price” (6:19–20)."
    },
    quote: { ref: "6:20",
      zh: "你們是重價買來的。所以，要在你們的身子上榮耀神",
      en: "you were bought with a price. Therefore glorify God in your body" },
    keyVerses: ["6:9", "6:11", "6:12", "6:13", "6:15", "6:18", "6:19", "6:20"],
    intro: {
      zh: "6:1-8 先責備弟兄告弟兄；6:9-11 列出不義的人，並說「你們中間也有人從前是這樣；但如今你們奉主耶穌基督的名，並藉著我們神的靈，已經洗淨，成聖，稱義了」（6:11）。6:12-20 論身體：基督徒的身子是基督的肢體（6:15），與妓女連合就是一體（6:16），所以要逃避淫行（6:18）。6:9-10 的名單中有些字詞（如「親男色的」）的翻譯與意思，現代有許多討論，這裡不展開。",
      en: "6:1–8 first rebukes believers going to law against one another; 6:9–11 lists the unrighteous and says, “Such were some of you. But you were washed. But you were sanctified. But you were justified in the name of the Lord Jesus, and in the Spirit of our God” (6:11). 6:12–20 is about the body: believers’ bodies are members of Christ (6:15), joining with a prostitute makes one body (6:16), so “flee sexual immorality” (6:18). Some words in the list of 6:9–10 have much modern discussion about their translation and meaning; this card does not expand them."
    },
    tip: {
      zh: "6:9-10 的名單中部分用詞，現代譯本的翻譯與詮釋各有不同；它們放在「你們中間也有人從前是這樣」之下（6:11）。",
      en: "Some terms in the list of 6:9–10 are translated and interpreted differently in modern versions; they stand under “such were some of you” (6:11)."
    },
    related: ["little_yeast", "married_and_single", "the_lords_supper", "food_offered_idols"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "married_and_single", book: "1corinthians", no: 9, kind: "other", type: "love", rarity: 3,
    zh: "婚姻與獨身", en: "Marriage and Singleness",
    tag: { zh: "各人領受神的恩賜，一個是這樣，一個是那樣", en: "Each Has His Own Gift from God" },
    role: { zh: "回答教會的問題（第 7 章）", en: "Answering the church’s questions (ch 7)" },
    ch: [7],
    passages: ["7:1-40"],
    moves: [
      { zh: "各人有自己的恩賜", en: "Each His Own Gift", ref: "7:7",
        dzh: "我願意眾人像我一樣；只是各人領受神的恩賜，一個是這樣，一個是那樣。",
        den: "I wish that all men were like me. However each man has his own gift from God, one of this kind, and another of that kind." },
      { zh: "各人要守住所蒙召的", en: "Remain in Your Calling", ref: "7:17",
        dzh: "只要照主所分給各人的，和神所召各人的，就怎樣行。",
        den: "Only as the Lord has distributed to each man, as God has called each, so let him walk." }
    ],
    traits: [
      { k: "strength", zh: "丈夫與妻子的權柄是相互的（7:3-4）", en: "Husband and wife have mutual authority (7:3–4)" },
      { k: "weakness", zh: "「這是我說的，不是主說的」（7:12）", en: "“I say, not the Lord” (7:12)" }
    ],
    lesson: {
      zh: "這一章是保羅少有的、明說「這是主說的」（7:10）和「這是我說的」（7:12）的地方。他對已婚、未婚、寡婦、與不信的配偶同住的人，都有話說；而貫穿的原則是 7:17：各人照所蒙召的行。",
      en: "This chapter is one of the few places where Paul says plainly “not I, but the Lord” (7:10) and “I, not the Lord” (7:12). He has words for the married, unmarried, widows and those with unbelieving spouses; the principle running through is 7:17: each walks as God has called."
    },
    quote: { ref: "7:7",
      zh: "只是各人領受神的恩賜，一個是這樣，一個是那樣",
      en: "each man has his own gift from God, one of this kind, and another of that kind" },
    keyVerses: ["7:1", "7:2", "7:3", "7:7", "7:10", "7:12", "7:17", "7:29", "7:32", "7:35"],
    intro: {
      zh: "「論到你們信上所問的事，我說男不近女倒好。」（7:1）7:2-5 說夫妻的責任是彼此的。7:8-9 對未婚的和寡婦。7:10-11 論離婚；7:12-16 論和不信的配偶同住。7:25-35 論未婚的女子，保羅考慮的是「現今的艱難」（7:26）。7:36-38 的「女兒」是誰、經文是在說父親和女兒，還是未婚夫婦，各版本譯法不同。這一章的細節要看當時的處境（「現今的艱難」）；它不是一般性的婚姻神學全部。",
      en: "“Now concerning the things about which you wrote to me: It is good for a man not to touch a woman” (7:1). 7:2–5 says the duties of husband and wife are mutual. 7:8–9 speaks to the unmarried and widows. 7:10–11 is on divorce; 7:12–16 on living with an unbelieving spouse. 7:25–35 on the unmarried, with Paul’s thought on “the present distress” (7:26). 7:36–38 — whether it is about a father and daughter or an engaged couple versions translate differently. The details of this chapter depend on their situation (“the present distress”); it is not the whole of a general theology of marriage."
    },
    tip: {
      zh: "7:36-38 是說父親與女兒，還是說未婚夫婦，各版本的譯法不同；「現今的艱難」（7:26）是理解這一章的背景。",
      en: "Whether 7:36–38 is about a father and daughter or an engaged couple versions translate differently; “the present distress” (7:26) is the background for this chapter."
    },
    related: ["body_a_temple", "food_offered_idols", "all_things_to_all", "love_is_patient"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "food_offered_idols", book: "1corinthians", no: 10, kind: "other", type: "wisdom", rarity: 3,
    zh: "祭偶像之物", en: "Food Sacrificed to Idols",
    tag: { zh: "知識叫人自高自大，惟有愛心能造就人", en: "Knowledge Puffs Up, but Love Builds Up" },
    role: { zh: "知識與愛心（第 8 章）", en: "Knowledge and love (ch 8)" },
    ch: [8],
    passages: ["8:1-13"],
    moves: [
      { zh: "知識與愛心", en: "Knowledge and Love", ref: "8:1",
        dzh: "論到祭偶像之物，我們曉得我們都有知識。但知識是叫人自高自大，惟有愛心能造就人。",
        den: "Concerning things sacrificed to idols: we know that we all have knowledge. Knowledge puffs up, but love builds up." },
      { zh: "叫弟兄跌倒", en: "Causing a Brother to Stumble", ref: "8:9-13",
        dzh: "你們要謹慎，恐怕你們這權利竟成了軟弱人的絆腳石。所以，食物若叫我弟兄跌倒，我就永遠不吃肉，免得叫我弟兄跌倒。",
        den: "Beware lest your liberty become a stumbling block to the weak. If food makes my brother stumble, I will never eat meat again." }
    ],
    traits: [
      { k: "strength", zh: "偶像「在世上算不得甚麼」（8:4）", en: "“An idol is nothing in the world” (8:4)" },
      { k: "weakness", zh: "有人良心軟弱，仍然把它當作祭偶像的（8:7）", en: "Some with a weak conscience still treat it as sacrificed to an idol (8:7)" }
    ],
    lesson: {
      zh: "保羅先肯定「知識」：偶像算不得甚麼，只有一位神（8:4-6）。但這知識不是人人都有（8:7）。結論不是「所以你有權利」，而是「所以我自己放棄權利」（8:13）：愛比知識更能造就人。",
      en: "Paul first affirms “knowledge”: an idol is nothing; there is only one God (8:4–6). But not everyone has this knowledge (8:7). The conclusion is not “so you have the right” but “so I give up my right” (8:13): love builds up more than knowledge."
    },
    quote: { ref: "8:1",
      zh: "知識是叫人自高自大，惟有愛心能造就人",
      en: "Knowledge puffs up, but love builds up." },
    keyVerses: ["8:1", "8:2", "8:4", "8:6", "8:7", "8:9", "8:11", "8:13", "10:25", "10:31"],
    intro: {
      zh: "「論到祭偶像之物，我們曉得我們都有知識。」（8:1）哥林多的市場裡常賣經過偶像廟的祭肉，宴席也常在廟裡。保羅同意偶像算不得甚麼（8:4），也說「食物不能叫我們更近神」（8:8）。但他說，若有軟弱的人看見你在偶像廟裡坐席，他的良心也因而被「造就」去吃（8:10）。10:23-33 回到這個題目，說「無論做甚麼，都要為榮耀神而行」（10:31）。",
      en: "“Now concerning things sacrificed to idols: We know that we all have knowledge” (8:1). Corinth’s markets often sold meat from idol temples, and feasts were often in the temples. Paul agrees an idol is nothing (8:4) and that “food will not commend us to God” (8:8). But if a weak person sees you sitting at table in an idol’s temple, his conscience is “emboldened” to eat (8:10). 10:23–33 returns to the subject and says, “whether you eat or drink, or whatever you do, do all to the glory of God” (10:31)."
    },
    tip: {
      zh: "8:10「被造就」是帶諷刺意味的用字，意思是被「壯了膽」去做他心裡不安的事。",
      en: "“Emboldened” (literally “built up”) in 8:10 has an ironic edge: encouraged to do what he is uneasy about."
    },
    related: ["all_things_to_all", "body_a_temple", "the_lords_supper", "love_is_patient"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "all_things_to_all", book: "1corinthians", no: 11, kind: "other", type: "power", rarity: 4,
    zh: "向甚麼樣的人，就作甚麼樣的人", en: "All Things to All People",
    tag: { zh: "你們也當這樣跑，好叫你們得著獎賞", en: "Run That You May Win" },
    role: { zh: "使徒的自由與賽跑（第 9 章）", en: "The apostle’s freedom and the race (ch 9)" },
    ch: [9],
    passages: ["9:1-27"],
    moves: [
      { zh: "作甚麼樣的人", en: "All Things to All Men", ref: "9:22",
        dzh: "向軟弱的人，我就作軟弱的人。向甚麼樣的人，我就作甚麼樣的人。無論如何，總要救些人。",
        den: "To the weak I became as weak. I have become all things to all men, that I may by all means save some." },
      { zh: "在場上賽跑", en: "Run in the Race", ref: "9:24",
        dzh: "豈不知在場上賽跑的都跑，但得獎賞的只有一人？你們也當這樣跑，好叫你們得著獎賞。",
        den: "Don’t you know that those who run in a race all run, but one receives the prize? Run like that, that you may win." }
    ],
    traits: [
      { k: "strength", zh: "放棄自己的權利，為叫人得福音", en: "Gives up his rights so that people may gain the gospel" },
      { k: "weakness", zh: "怕自己「自己反被棄絕」（9:27）", en: "Afraid that “after I have preached to others, I myself should be rejected” (9:27)" }
    ],
    lesson: {
      zh: "保羅用自己作例子：他有權利靠福音養生，卻不用這權利（9:12、15），向猶太人、無律法的人、軟弱的人，都作他們的樣式（9:20-22）。目標是「總要救些人」。9:24-27 的賽跑比喻接著說：要有節制，向著標竿。",
      en: "Paul uses himself as the example: he has the right to be supported by the gospel but does not use it (9:12, 15); to Jews, to those without law, to the weak, he adapts (9:20–22). The aim is “that I may by all means save some.” The race image of 9:24–27 follows: exercise self-control and run toward the goal."
    },
    quote: { ref: "9:22",
      zh: "向甚麼樣的人，我就作甚麼樣的人。無論如何，總要救些人",
      en: "I have become all things to all men, that I may by all means save some." },
    keyVerses: ["9:1", "9:12", "9:15", "9:19", "9:20", "9:22", "9:23", "9:24", "9:25", "9:27"],
    intro: {
      zh: "「我不是自由的嗎？我不是使徒嗎？」（9:1）他有權利吃喝、帶著信主的妻子、不做工（9:4-6），卻沒有用這些權利（9:12）。9:19：「我雖是自由的，無人轄制，然而我甘心作眾人的僕人，為要多得人。」他向猶太人作猶太人，向律法以下的人作律法以下的人（9:20）。這不是說他沒有原則；他說「我不是沒有神的律法，乃是在基督的律法之下」（9:21）。9:25 說所有競賽的人都要節制。",
      en: "“Am I not free? Am I not an apostle?” (9:1). He has the right to eat and drink, to take a believing wife, not to work (9:4–6), yet has not used these rights (9:12). 9:19: “For though I was free from all, I brought myself under bondage to all, that I might gain the more.” To the Jews he became as a Jew, to those under the law as under the law (9:20). This does not mean he has no principles; he says he is “not without law toward God, but under law toward Christ” (9:21). 9:25 says everyone who strives in the games exercises self-control."
    },
    tip: {
      zh: "「向甚麼樣的人，就作甚麼樣的人」不是說隨波逐流；9:21 說他仍在「基督的律法之下」。",
      en: "“All things to all people” does not mean going along with the crowd; 9:21 says he is still “under law toward Christ.”"
    },
    related: ["food_offered_idols", "stewards_servants", "love_is_patient", "resurrection_chapter"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "the_lords_supper", book: "1corinthians", no: 12, kind: "other", type: "love", rarity: 5,
    zh: "主的晚餐", en: "The Lord’s Supper",
    tag: { zh: "你們每逢吃這餅，喝這杯，是表明主的死，直等到他來", en: "You Proclaim the Lord’s Death Until He Comes" },
    role: { zh: "聚餐中的失序（11:17-34）", en: "Disorder at the shared meal (11:17–34)" },
    ch: [11],
    passages: ["11:17-34"],
    moves: [
      { zh: "我從主領受的", en: "I Received from the Lord", ref: "11:23-24",
        dzh: "我當日傳給你們的，原是從主領受的：主耶穌被賣的那一夜，拿起餅來，祝謝了，就擘開，說：這是我的身體，為你們捨的。",
        den: "I received from the Lord what I delivered to you: the night he was betrayed, Jesus took bread, gave thanks, broke it and said, “This is my body, which is for you.”" },
      { zh: "表明主的死", en: "Proclaim the Lord’s Death", ref: "11:25-26",
        dzh: "這杯是用我的血所立的新約；你們每逢吃這餅，喝這杯，是表明主的死，直等到他來。",
        den: "“This cup is the new covenant in my blood.” As often as you eat this bread and drink this cup, you proclaim the Lord’s death until he comes." }
    ],
    traits: [
      { k: "strength", zh: "新約中最早寫下的晚餐記載（約主後 50 年代）", en: "The earliest written account of the supper in the New Testament" },
      { k: "weakness", zh: "有的人先吃，有的人飢餓，有的人喝醉（11:21）", en: "Some eat ahead, some are hungry, some drunk (11:21)" }
    ],
    lesson: {
      zh: "哥林多的問題是在一起吃飯的時候，富人先吃，窮人飢餓（11:21-22）。保羅提醒他們這餐的來歷：「我當日傳給你們的，原是從主領受的」（11:23）；然後說「人應當自己省察，然後吃這餅，喝這杯」（11:28）。",
      en: "Corinth’s problem is that at the shared meal the rich eat first and the poor go hungry (11:21–22). Paul reminds them of the meal’s origin: “I received from the Lord that which I delivered to you” (11:23); then “let a man examine himself, and so let him eat of the bread, and drink of the cup” (11:28)."
    },
    quote: { ref: "11:26",
      zh: "你們每逢吃這餅，喝這杯，是表明主的死，直等到他來",
      en: "as often as you eat this bread and drink this cup, you proclaim the Lord’s death until he comes" },
    keyVerses: ["11:17", "11:20", "11:21", "11:22", "11:23", "11:24", "11:25", "11:26", "11:28", "11:29"],
    intro: {
      zh: "「你們聚會不是受益，乃是招損。」（11:17）11:20 說「這樣，你們聚在一處，並不是吃主的晚餐」；21-22 說各人先吃自己的，有飢餓的，有喝醉的，這是羞辱「那沒有的人」。11:23-26 是新約最早的晚餐記載，比福音書更早寫成。11:27-29 說「不按理」吃喝的有罪，「不按理」（unworthily）是甚麼，各傳統有不同理解：多數認為指不分辨身子（教會）、輕視弟兄的態度。",
      en: "“But in giving you this instruction I don’t praise you, that you come together not for the better but for the worse” (11:17). 11:20 says “it is not the Lord’s supper that you eat”; verses 21–22 say each takes his own supper first, one is hungry and another drunken, shaming those who have nothing. 11:23–26 is the earliest written account of the supper in the New Testament, earlier than the Gospels. 11:27–29 says whoever eats “unworthily” is guilty; what “unworthily” means traditions understand differently, many linking it to not discerning the body (the church) and despising others."
    },
    tip: {
      zh: "11:27 的「不按理」，與 11:29 的「不分辨主的身體」，各傳統有不同理解：個人的罪，或對弟兄的態度。",
      en: "“Unworthily” (11:27) and “not discerning the body” (11:29) traditions understand differently: personal sin or an attitude toward others."
    },
    related: ["one_body_many_members", "little_yeast", "food_offered_idols", "love_is_patient"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "one_body_many_members", book: "1corinthians", no: 13, kind: "other", type: "harvest", rarity: 5,
    zh: "一個身體，許多肢體", en: "One Body, Many Members",
    tag: { zh: "你們就是基督的身子，並且各自作肢體", en: "You Are the Body of Christ, Members Individually" },
    role: { zh: "屬靈的恩賜（第 12 章）", en: "Spiritual gifts (ch 12)" },
    ch: [12],
    passages: ["12:1-31"],
    moves: [
      { zh: "恩賜有分別，聖靈是一位", en: "Varieties, One Spirit", ref: "12:4-6",
        dzh: "恩賜原有分別，聖靈卻是一位。職事也有分別，主卻是一位。功用也有分別，神卻是一位。",
        den: "There are various kinds of gifts, but the same Spirit; various kinds of service, and the same Lord; various kinds of workings, but the same God." },
      { zh: "一個肢體受苦", en: "When One Member Suffers", ref: "12:26-27",
        dzh: "若一個肢體受苦，所有的肢體就一同受苦；若一個肢體得榮耀，所有的肢體就一同快樂。",
        den: "When one member suffers, all the members suffer with it; when one member is honored, all the members rejoice with it." }
    ],
    traits: [
      { k: "strength", zh: "「神配搭這身子，把加倍的體面給那有缺欠的」（12:24）", en: "“God composed the body, giving more abundant honor to the part which lacked” (12:24)" },
      { k: "identity", zh: "猶太人、希臘人、為奴的、自主的，都在一個身子裡（12:13）", en: "Jews, Greeks, slaves and free — all in one body (12:13)" }
    ],
    lesson: {
      zh: "哥林多教會因恩賜而驕傲、輕看彼此。保羅的圖像是身體：眼不能對手說「我用不著你」（12:21），較弱的肢體反倒是必須的（12:22）。三個「一位」：聖靈、主、神（12:4-6），各種恩賜的來源只有一個。",
      en: "The Corinthian church is proud of gifts and despises one another. Paul’s image is the body: the eye can’t say to the hand “I have no need for you” (12:21); the weaker members are necessary (12:22). Three “sames”: Spirit, Lord, God (12:4–6): the gifts have one source."
    },
    quote: { ref: "12:12",
      zh: "身子是一個，卻有許多肢體；而且肢體雖多，仍是一個身子；基督也是這樣",
      en: "as the body is one, and has many members" },
    keyVerses: ["12:1", "12:4", "12:7", "12:11", "12:12", "12:13", "12:21", "12:22", "12:26", "12:27"],
    intro: {
      zh: "「弟兄們，論到屬靈的恩賜，我不願意你們不明白。」（12:1）12:8-10 列出恩賜：智慧的言語、知識的言語、信心、醫病、行異能、先知、辨別諸靈、說方言、翻方言；12:28-30 的名單略有不同。12:12-13：身子是一個，肢體有許多；我們都從一位聖靈受洗，成了一個身體。12:31 的「你們要切切地求那更大的恩賜」，之後便是 13 章的愛。12:13「受洗」，指水禮或聖靈的洗，各傳統有不同看法。",
      en: "“Now concerning spiritual things, brothers, I don’t want you to be ignorant” (12:1). 12:8–10 lists gifts: the word of wisdom, the word of knowledge, faith, healing, miracles, prophecy, discerning of spirits, tongues, interpretation; the list of 12:28–30 differs slightly. 12:12–13: the body is one and has many members; in one Spirit we were all baptized into one body. 12:31, “earnestly desire the better gifts,” leads to the chapter of love in 13. “Baptized” in 12:13, water or Spirit baptism, traditions see differently."
    },
    tip: {
      zh: "12:13 的「受洗」是水禮、聖靈的洗，或兩者，各傳統有不同強調。",
      en: "“Baptized” in 12:13 — water baptism, baptism in the Spirit or both — traditions emphasize differently."
    },
    related: ["love_is_patient", "order_in_worship", "the_lords_supper", "i_follow_paul"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "love_is_patient", book: "1corinthians", no: 14, kind: "other", type: "love", rarity: 5,
    zh: "愛是恆久忍耐", en: "Love Is Patient",
    tag: { zh: "信，望，愛，其中最大的是愛", en: "Faith, Hope, Love — the Greatest Is Love" },
    role: { zh: "愛的篇章（第 13 章）", en: "The chapter of love (ch 13)" },
    ch: [13],
    passages: ["13:1-13"],
    moves: [
      { zh: "愛是恆久忍耐", en: "Love Is Patient", ref: "13:4-7",
        dzh: "愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂；不求自己的益處，不輕易發怒，不計算人的惡。",
        den: "Love is patient and kind; love doesn’t envy, doesn’t brag, is not proud, doesn’t seek its own way, is not provoked, takes no account of evil." },
      { zh: "常存的有三樣", en: "Three Remain", ref: "13:13",
        dzh: "如今常存的有信，有望，有愛這三樣，其中最大的是愛。",
        den: "But now faith, hope, and love remain — these three. The greatest of these is love." }
    ],
    traits: [
      { k: "strength", zh: "夾在恩賜（12、14 章）中間，說恩賜的用處", en: "Set between the chapters on gifts (12, 14) to say what gifts are for" },
      { k: "identity", zh: "「愛」原文是 agape；常被讀在婚禮上，原本卻是對教會說的", en: "“Love” (agape), often read at weddings, was written to a church" }
    ],
    lesson: {
      zh: "這一章不是獨立的詩，而是對哥林多人的回答：你們誇口說方言、有知識、有信心，「卻沒有愛，我就算不得甚麼」（13:1-3）。愛的特質多是動詞：忍耐、恩慈、包容、相信、盼望、忍耐（13:4-7）。",
      en: "This chapter is not a free-standing poem but an answer to the Corinthians: you boast of tongues, knowledge, faith, “but don’t have love, I am nothing” (13:1–3). Love’s qualities are mostly verbs: patient, kind, bearing, believing, hoping, enduring (13:4–7)."
    },
    quote: { ref: "13:13",
      zh: "如今常存的有信，有望，有愛這三樣，其中最大的是愛",
      en: "But now faith, hope, and love remain—these three. The greatest of these is love." },
    keyVerses: ["13:1", "13:2", "13:3", "13:4", "13:7", "13:8", "13:10", "13:12", "13:13"],
    intro: {
      zh: "「我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼，響的鈸一般。」（13:1）13:4-7 說愛是甚麼、不是甚麼。13:8：「愛是永不止息。先知講道之能終必歸於無有；說方言之能終必停止；知識也終必歸於無有。」13:10 的「那完全的」（和合本譯「等那完全的來到」），是指基督再來、新約的完成，或別的，各傳統有不同讀法。13:12 說我們如今對著鏡子觀看，模糊不清，到那時就要面對面了。",
      en: "“If I speak with the languages of men and of angels, but don’t have love, I have become sounding brass, or a clanging cymbal” (13:1). 13:4–7 says what love is and is not. 13:8: “Love never fails. But where there are prophecies, they will be done away with. Where there are various languages, they will cease. Where there is knowledge, it will be done away with.” “That which is perfect” (13:10) is read as the return of Christ, the completion of the New Testament, or something else, by different traditions. 13:12 says now we see in a mirror, dimly, but then face to face."
    },
    tip: {
      zh: "13:10 的「那完全的」指甚麼，各傳統有不同讀法；13:12 的「鏡子」在當時（哥林多的銅鏡）看到的是模糊的影像。",
      en: "What “the perfect” of 13:10 means traditions read differently; the “mirror” of 13:12 was a polished bronze mirror (Corinth was famous for them) that gave a dim image."
    },
    related: ["one_body_many_members", "order_in_worship", "food_offered_idols", "resurrection_chapter"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "order_in_worship", book: "1corinthians", no: 15, kind: "other", type: "wisdom", rarity: 3,
    zh: "聚會要有次序", en: "Order in the Assembly",
    tag: { zh: "神不是叫人混亂，乃是叫人安靜", en: "God Is Not a God of Confusion, but of Peace" },
    role: { zh: "方言與先知講道（第 14 章）", en: "Tongues and prophecy (ch 14)" },
    ch: [14],
    passages: ["14:1-40"],
    moves: [
      { zh: "寧可說五句明白的話", en: "Five Words with Understanding", ref: "14:19",
        dzh: "但在教會中，寧可用悟性說五句教導人的話，強如說萬句方言。",
        den: "In the assembly I would rather speak five words with my understanding, that I might instruct others also, than ten thousand words in another language." },
      { zh: "規規矩矩，按著次序", en: "Decently and in Order", ref: "14:40",
        dzh: "凡事都要規規矩矩地按著次序行。",
        den: "Let all things be done decently and in order." }
    ],
    traits: [
      { k: "strength", zh: "目標是「造就教會」（14:12、26）", en: "The goal is “building up the assembly” (14:12, 26)" },
      { k: "weakness", zh: "14:34-35 論婦女的話，是難讀的段落", en: "14:34–35 on women is a hard passage" }
    ],
    lesson: {
      zh: "這一章的標準不是恩賜的多少，而是「是否造就」：方言若沒有人翻，只有自己得益（14:4、13）；先知講道使外人也聽得見「神真是在你們中間」（14:25）。連保羅也說自己說方言比眾人都多（14:18），但在教會中情願說明白的話。",
      en: "The measure in this chapter is not how many gifts but whether they “build up”: tongues without interpretation benefit only oneself (14:4, 13); prophecy lets an outsider hear that “God is among you indeed” (14:25). Even Paul says he speaks in tongues more than all of them (14:18) but in church prefers intelligible words."
    },
    quote: { ref: "14:40",
      zh: "凡事都要規規矩矩地按著次序行",
      en: "Let all things be done decently and in order." },
    keyVerses: ["14:1", "14:3", "14:4", "14:12", "14:19", "14:25", "14:26", "14:33", "14:40"],
    intro: {
      zh: "「你們要追求愛，也要切切地求屬靈的恩賜，其中更要羨慕的是作先知講道。」（14:1）說方言的是對神說話，不是對人（14:2）；作先知講道的是造就、安慰、勸勉人（14:3）。14:26：「弟兄們，這卻怎麼樣呢？你們聚會的時候，各人或有詩歌，或有教訓，或有啟示，或有方言，或有翻出來的話，凡事都當造就人。」14:34-35 論婦女在聚會中的話，在哥林多書信中是最有爭論的段落之一（也與 11:5 對照），這裡不展開。",
      en: "“Follow after love, and earnestly desire spiritual gifts, but especially that you may prophesy” (14:1). One who speaks in a tongue speaks to God, not to people (14:2); one who prophesies builds up, encourages and comforts (14:3). 14:26: “What is it then, brothers? When you come together, each one of you has a psalm, has a teaching, has a revelation, has a tongue, has an interpretation. Let all things be done to build each other up.” 14:34–35 on women’s speaking in the assembly is among the most debated passages of the Corinthian letters (also compared with 11:5) and is not expanded here."
    },
    tip: {
      zh: "14:34-35 與 11:5 如何對得上，以及這兩節是否為後來所加，注釋書有許多不同的看法。",
      en: "How 14:34–35 fits with 11:5 and whether those verses were a later addition commentaries see in many ways."
    },
    related: ["one_body_many_members", "love_is_patient", "the_lords_supper", "paul_to_corinth"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "resurrection_chapter", book: "1corinthians", no: 16, kind: "other", type: "heaven", rarity: 5,
    zh: "基督復活與我們的復活", en: "Christ’s Resurrection and Ours",
    tag: { zh: "基督已經從死裡復活，成為睡了之人初熟的果子", en: "Christ Is Raised, the First Fruits of Those Who Sleep" },
    role: { zh: "全信的高峰（第 15 章）", en: "The summit of the letter (ch 15)" },
    ch: [15],
    passages: ["15:1-58"],
    moves: [
      { zh: "我所領受又傳給你們的", en: "What I Also Received", ref: "15:3-4",
        dzh: "第一，就是基督照聖經所說，為我們的罪死了，而且埋葬了；又照聖經所說，第三天復活了。",
        den: "First of all, that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures." },
      { zh: "死啊，你的毒鉤在哪裡", en: "Death, Where Is Your Sting?", ref: "15:55-57",
        dzh: "死啊！你得勝的權勢在哪裡？死啊！你的毒鉤在哪裡？感謝神，使我們藉著我們的主耶穌基督得勝。",
        den: "“Death, where is your sting?” … But thanks be to God, who gives us the victory through our Lord Jesus Christ." }
    ],
    traits: [
      { k: "strength", zh: "復活的見證者名單：磯法、十二使徒、五百多人、雅各、保羅（15:5-8）", en: "A list of witnesses: Cephas, the twelve, five hundred, James, Paul (15:5–8)" },
      { k: "identity", zh: "「初熟的果子」（15:20、23）", en: "“First fruits” (15:20, 23)" }
    ],
    lesson: {
      zh: "哥林多人中有人說沒有死人復活（15:12）。保羅的回答是：若死人沒有復活，基督也沒有復活，我們的信就是徒然（15:13-14）。然後「但基督已經從死裡復活，成為睡了之人初熟的果子」（15:20）。結尾不是理論，而是「務要堅固，不可搖動，常常竭力多做主工」（15:58）。",
      en: "Some in Corinth say there is no resurrection of the dead (15:12). Paul answers: if the dead are not raised, Christ is not raised, and our faith is vain (15:13–14). Then “But now Christ has been raised from the dead. He became the first fruits of those who are asleep” (15:20). The end is not theory but “be steadfast, immovable, always abounding in the Lord’s work” (15:58)."
    },
    quote: { ref: "15:20",
      zh: "基督已經從死裡復活，成為睡了之人初熟的果子",
      en: "Christ has been raised from the dead. He became the first fruits of those who are asleep." },
    keyVerses: ["15:3", "15:4", "15:5", "15:8", "15:12", "15:14", "15:20", "15:22", "15:51", "15:55", "15:58"],
    intro: {
      zh: "15:3-8 是新約中最早的復活信條式的記載：基督為我們的罪死了，埋葬了，第三天復活，顯給磯法、十二使徒、五百多弟兄、雅各、眾使徒、末了顯給保羅。15:22：「在亞當裡眾人都死了，照樣，在基督裡眾人也都要復活。」15:35-49 說復活的身體像種子；15:51-52「我們不是都要睡覺，乃是都要改變，就在一霎時，眨眼的工夫，號筒末次吹響的時候」。15:29 的「為死人受洗」是難解的經文，各版本有許多不同的說法。",
      en: "15:3–8 is the earliest creed-like account of the resurrection in the New Testament: Christ died for our sins, was buried, was raised on the third day, and appeared to Cephas, the twelve, over five hundred brothers, James, all the apostles, and last of all to Paul. 15:22: “For as in Adam all die, so also in Christ shall all be made alive.” 15:35–49 compares the resurrection body to a seed; 15:51–52, “We will not all sleep, but we will all be changed, in a moment, in the twinkling of an eye, at the last trumpet.” “Baptized for the dead” (15:29) is a puzzling text with many proposals."
    },
    tip: {
      zh: "15:29「為死人受洗」是新約難解的經文之一，有十幾種不同的解釋；它的重點是「若死人不復活」的論證。",
      en: "“Baptized for the dead” (15:29) is one of the New Testament’s puzzling texts with a dozen explanations; its point is the argument “if the dead are not raised.”"
    },
    related: ["love_is_patient", "the_lords_supper", "collection_for_saints", "paul_to_corinth"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "collection_for_saints", book: "1corinthians", no: 17, kind: "other", type: "harvest", rarity: 3,
    zh: "為聖徒的捐項與問安", en: "The Collection and Greetings",
    tag: { zh: "主必要來！", en: "Come, Lord!" },
    role: { zh: "全信的結尾（第 16 章）", en: "The close of the letter (ch 16)" },
    ch: [16],
    passages: ["16:1-24"],
    moves: [
      { zh: "每逢七日的第一日", en: "On the First Day of the Week", ref: "16:1-2",
        dzh: "論到為聖徒捐錢，每逢七日的第一日，各人要按著自己的進項抽出來留著，免得我來的時候現湊。",
        den: "Concerning the collection for the saints, on the first day of every week let each one of you save, as he may prosper, so that no collections are made when I come." },
      { zh: "務要警醒，要剛強", en: "Watch, Stand Firm", ref: "16:13-14",
        dzh: "你們務要警醒，在真道上站立得穩，要作大丈夫，要剛強。凡你們所做的都要憑愛心而做。",
        den: "Watch! Stand firm in the faith! Be courageous! Be strong! Let all that you do be done in love." }
    ],
    traits: [
      { k: "strength", zh: "把「大事」（復活）之後的「小事」（捐項、旅行）也寫得清楚", en: "After the “big thing” (the resurrection) he writes clearly of small matters (the collection, travel plans)" },
      { k: "identity", zh: "「瑪拉拿他」（亞蘭語）：16:22「主必要來」", en: "“Maranatha” (Aramaic): “Come, Lord” (16:22)" }
    ],
    lesson: {
      zh: "最後一章讀起來很平常：捐項、行程、提摩太、亞波羅、司提反家的人，和各教會的問安（16:19-20）。保羅又親筆寫下「願恩惠歸與你們」（16:21-23）。信的最後一句是「願我的愛在基督耶穌裡，與你們眾人同在」（16:24）。",
      en: "The last chapter reads very ordinary: the collection, travel plans, Timothy, Apollos, the household of Stephanas, and greetings from the churches (16:19–20). Paul writes a greeting in his own hand (16:21–23). The letter’s last line is “My love be with you all in Christ Jesus” (16:24)."
    },
    quote: { ref: "16:14",
      zh: "凡你們所做的都要憑愛心而做",
      en: "Let all that you do be done in love." },
    keyVerses: ["16:1", "16:2", "16:8", "16:13", "16:14", "16:15", "16:19", "16:22", "16:24"],
    intro: {
      zh: "「論到為聖徒捐錢，我怎樣吩咐加拉太的各教會，你們也當怎樣行。」（16:1）捐項是給耶路撒冷貧窮的聖徒（16:3）。保羅預備住在以弗所到五旬節（16:8），又說「因為有大門為我開了，也有許多敵人」（16:9）。16:15-18 提到司提反一家是「亞該亞初結的果子」，以及司提反、福徒拿都、亞該古的到來。16:22 的「主必要來」（Maranatha），亞蘭語可讀「我們的主，求你來」或「我們的主已經來了」。",
      en: "“Now concerning the collection for the saints, as I commanded the assemblies of Galatia, you do likewise” (16:1). The collection is for the poor saints in Jerusalem (16:3). Paul plans to stay at Ephesus until Pentecost (16:8), “for a great and effective door has opened to me, and there are many adversaries” (16:9). 16:15–18 mentions the household of Stephanas as “the first fruits of Achaia,” and the coming of Stephanas, Fortunatus and Achaicus. “Come, Lord!” in 16:22 (Maranatha) in Aramaic can be read “Our Lord, come” or “Our Lord has come.”"
    },
    tip: {
      zh: "「瑪拉拿他」的亞蘭文可以有兩種斷法：「我們的主，求你來」或「我們的主已經來了」。",
      en: "The Aramaic “Maranatha” can be divided two ways: “Our Lord, come” or “Our Lord has come.”"
    },
    related: ["resurrection_chapter", "paul_to_corinth", "love_is_patient", "stewards_servants"]
  }

);
