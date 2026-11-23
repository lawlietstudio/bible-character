// 聖經人物卡 · 以弗所書 (Ephesians) — book info + cards.
// Verse text comes from data/ephesians.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/ephesians.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two.
// External references (Ps 4:4, 68:18; Gen 2:24; Isa 59:17, 60:1; Acts 20:4; Col 4:7-8; 2 Tim 4:12; Titus 3:12; Philemon) appear in prose only.
// Flagged rather than decided: authorship and the "in Ephesus" reading (1:1), election and predestination (1:4-5), the "powers"
// of 1:21 and 6:12, the antecedent of "this" in 2:8, the "middle wall" (2:14), "one baptism" (4:5), the descent of 4:9,
// the shepherds-and-teachers of 4:11, being "filled with the Spirit" (5:18), headship and submission (5:22-24),
// the household code and slavery (6:5-9), and the source of the hymn in 5:14.

window.BOOKS.push({
  id: "ephesians",
  zh: "以弗所書", en: "Ephesians", abbr: { zh: "弗", en: "Eph" },
  order: 49, section: { zh: "書信", en: "Epistles" },
  chapters: 6,
  fan: ["made_alive_by_grace", "one_new_humanity", "armor_of_god"],
  summary: {
    zh: "以弗所書是保羅在被囚期間寫的一封高遠而溫暖的信（3:1；4:1；6:20）。信中沒有針對某個具體的問題，而是回顧神的整個計畫：在基督裡的福氣（1 章）、從死裡活過來和猶太人與外邦人合成一個新人（2 章）、奧祕和基督愛的長闊高深（3 章）；然後按「行事為人就當與蒙召的恩相稱」（4:1）談合一、新人、光明的生活、被聖靈充滿、家庭，最後以「神的全副軍裝」和推基古的問安作結（4-6 章）。",
    en: "Ephesians is a lofty, warm letter written while Paul was a prisoner (3:1; 4:1; 6:20). It does not address one specific problem but looks back over God’s whole plan: blessing in Christ (ch 1), being made alive from the dead and Jew and Gentile made one new humanity (ch 2), the mystery and the width, length, height and depth of Christ’s love (ch 3); then, on “walk worthily of the calling” (4:1), unity, the new self, life as children of light, being filled with the Spirit, the household, and finally “the whole armor of God” and Tychicus’s greeting (chs 4–6)."
  },
  outline: [
    { zh: "在基督裡的福氣；為他們的禱告", en: "Blessings in Christ; Paul’s prayer for them" },
    { zh: "從死裡活過來；本乎恩也因著信；猶太人與外邦人合成一個新人", en: "Made alive; by grace through faith; Jew and Gentile one new humanity" },
    { zh: "福音的奧祕；基督的愛長闊高深", en: "The mystery of the gospel; the width, length, height and depth of Christ’s love" },
    { zh: "聖靈的合一；各人的恩賜；脫去舊人，穿上新人", en: "The unity of the Spirit; gifts for each; put off the old self, put on the new" },
    { zh: "光明的子女；被聖靈充滿；夫妻", en: "Children of light; filled with the Spirit; husbands and wives" },
    { zh: "兒女、父母、僕人、主人；神的全副軍裝；問安", en: "Children, parents, servants, masters; the armor of God; greetings" }
  ],
  notes: {
    zh: "小提示：以弗所書沒有向個人問安，語氣也比較普遍，所以不少人認為是傳閱的信（「在以弗所」在一些最早的抄本中沒有）。作者是否保羅，傳統認為是，一些學者因文體和與歌羅西書的關係而質疑；這裡按經文自稱的作者呈現（1:1；3:1）。保羅在哪裡被囚，經文沒有說（羅馬、凱撒利亞或以弗所，各有主張）。",
    en: "Good to know: Ephesians has no personal greetings and a more general tone, so many think it was a circular letter (“in Ephesus” is missing in some of the earliest manuscripts). Tradition holds Paul as author, while some scholars question it because of style and its relation to Colossians; this follows the author named in the text (1:1; 3:1). Where Paul was imprisoned the text does not say (Rome, Caesarea or Ephesus have all been argued)."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_to_ephesus", book: "ephesians", no: 1, kind: "person", type: "faith", rarity: 6,
    zh: "被囚寫信的保羅", en: "Paul Writing in Chains",
    tag: { zh: "帶鎖鍊的使者", en: "An Ambassador in Chains" },
    role: { zh: "外邦人的使徒", en: "Apostle to the Gentiles" },
    ch: [1, 3, 4, 6],
    passages: ["1:1-2", "3:1", "4:1", "6:19-20"],
    moves: [
      { zh: "為主被囚的勸你們", en: "The Prisoner in the Lord", ref: "4:1",
        dzh: "我為主被囚的勸你們：既然蒙召，行事為人就當與蒙召的恩相稱。",
        den: "I therefore, the prisoner in the Lord, beg you to walk worthily of the calling with which you were called," },
      { zh: "帶鎖鍊的使者", en: "An Ambassador in Chains", ref: "6:20",
        dzh: "我為這福音的奧祕作了帶鎖鍊的使者，並使我照著當盡的本分放膽講論。",
        den: "For which I am an ambassador in chains; that in it I may speak boldly, as I ought to speak." }
    ],
    traits: [
      { k: "strength", zh: "在囚禁中，仍求人為他代禱，使他「放膽開口」（6:19）", en: "In prison, he asks for prayer that he may speak “with boldness” (6:19)" },
      { k: "weakness", zh: "「我本來比眾聖徒中最小的還小」（3:8）", en: "“The very least of all saints” (3:8)" }
    ],
    lesson: {
      zh: "以弗所書是保羅在鎖鍊中寫的，卻是他語氣最高遠的一封信：先講神的整個計畫（1-3 章），再講「行事為人就當與蒙召的恩相稱」（4-6 章）。沒有具體要糾正的問題，也沒有向個人問安；倒是在末了請讀者為他祈禱，使他仍能放膽講論。",
      en: "Ephesians was written in chains, yet it is Paul’s loftiest letter: first God’s whole plan (chs 1–3), then “walk worthily of the calling” (chs 4–6). It has no specific problem to correct and no personal greetings; instead at the end he asks readers to pray that he may still speak boldly."
    },
    quote: { ref: "6:20",
      zh: "我為這福音的奧祕作了帶鎖鍊的使者",
      en: "I am an ambassador in chains" },
    keyVerses: ["1:1", "1:2", "3:1", "3:8", "4:1", "6:19", "6:20", "6:21"],
    intro: {
      zh: "「奉神旨意，作基督耶穌使徒的保羅，寫信給在以弗所的聖徒，就是在基督耶穌裡有忠心的人。」（1:1）信中三次提到他被囚（3:1；4:1；6:20），由推基古帶去（6:21）。「在以弗所」在一些最早的抄本中沒有，所以有人認為這是一封傳閱各教會的信。保羅是否親筆所寫，學者有不同看法：傳統認為是；一些學者因為文體和與歌羅西書的關係而質疑。",
      en: "“Paul, an apostle of Christ Jesus through the will of God, to the saints who are at Ephesus, and the faithful in Christ Jesus” (1:1). He mentions being a prisoner three times (3:1; 4:1; 6:20), and the letter is carried by Tychicus (6:21). “At Ephesus” is missing in some of the earliest manuscripts, so some think it was a circular letter. Whether Paul wrote it himself scholars see differently: tradition says yes; some question it because of style and its relation to Colossians."
    },
    tip: {
      zh: "「在以弗所」（1:1）在一些最早的抄本中沒有；保羅是否親筆所寫，也有不同看法。這裡按經文自稱的作者呈現。保羅被囚的地點，經文沒有說明。",
      en: "“At Ephesus” (1:1) is missing in some of the earliest manuscripts, and authorship is debated; this follows the author the text names. The place of imprisonment is not stated."
    },
    related: ["blessed_with_every_blessing", "one_new_humanity", "armor_of_god", "tychicus_greeting"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "blessed_with_every_blessing", book: "ephesians", no: 2, kind: "other", type: "heaven", rarity: 5,
    zh: "天上各樣屬靈的福氣", en: "Every Spiritual Blessing",
    tag: { zh: "就如神從創立世界以前，在基督裡揀選了我們", en: "He Chose Us in Him Before the Foundation of the World" },
    role: { zh: "頌讚（1:3-14）", en: "The opening praise (1:3–14)" },
    ch: [1],
    passages: ["1:3-14"],
    moves: [
      { zh: "各樣屬靈的福氣", en: "Every Spiritual Blessing", ref: "1:3",
        dzh: "願頌讚歸與我們主耶穌基督的父神！他在基督裡曾賜給我們天上各樣屬靈的福氣：",
        den: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ;" },
      { zh: "聖靈為印記", en: "Sealed with the Spirit", ref: "1:13",
        dzh: "你們既聽見真理的道，就是那叫你們得救的福音，也信了基督，既然信他，就受了所應許的聖靈為印記。",
        den: "Having heard the word of the truth, the Good News of your salvation, and having believed, you were sealed with the promised Holy Spirit," }
    ],
    traits: [
      { k: "strength", zh: "三次「使他榮耀的恩典得著稱讚」（1:6、12、14）", en: "Three times “to the praise of his glory” (1:6, 12, 14)" },
      { k: "identity", zh: "原文 1:3-14 是一個連續的長句", en: "In Greek, 1:3–14 is one continuous sentence" }
    ],
    lesson: {
      zh: "「在基督裡」是這段的關鍵詞。父揀選、預定我們作兒女（1:3-6）；子用血救贖、赦免（1:7-12）；聖靈作印記和得基業的憑據（1:13-14）。整段的結尾是同一句：「使他的榮耀得著稱讚。」",
      en: "“In Christ” is the key phrase. The Father chose and predestined us as children (1:3–6); the Son redeemed and forgave with his blood (1:7–12); the Spirit seals and is a pledge of inheritance (1:13–14). Each part ends with the same refrain: “to the praise of his glory.”"
    },
    quote: { ref: "1:4",
      zh: "神從創立世界以前，在基督裡揀選了我們",
      en: "he chose us in him before the foundation of the world" },
    keyVerses: ["1:3", "1:4", "1:5", "1:6", "1:7", "1:9", "1:10", "1:11", "1:13", "1:14"],
    intro: {
      zh: "「願頌讚歸與我們主耶穌基督的父神！」（1:3）這是一首頌讚，也是整封信的序曲。1:10 說神的計畫是在日期滿足的時候，使天上、地上一切所有的都在基督裡面同歸於一。1:13-14 說聖靈是所得基業的「憑據」（原文是「質」，押金的意思），直等到神之民被贖。",
      en: "“Blessed be the God and Father of our Lord Jesus Christ” (1:3). It is a hymn of praise and the overture to the whole letter. 1:10 says God’s plan, in the fullness of the times, is to sum up all things in Christ, in heaven and on earth. 1:13–14 says the Spirit is a “pledge” (a down payment) of our inheritance until God’s own possession is redeemed."
    },
    tip: {
      zh: "1:4-5 的「揀選」「預定」，各傳統（如加爾文宗與阿民念宗）有不同解釋：是個人的預定，還是在基督裡群體的揀選。",
      en: "“Chose” and “predestined” in 1:4–5 traditions (such as Calvinist and Arminian) explain differently: individual predestination or a corporate election in Christ."
    },
    related: ["prayer_for_enlightened_eyes", "made_alive_by_grace", "paul_to_ephesus", "mystery_of_christ"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "prayer_for_enlightened_eyes", book: "ephesians", no: 3, kind: "other", type: "vision", rarity: 4,
    zh: "照明心中的眼睛", en: "Eyes of Your Heart Enlightened",
    tag: { zh: "知道他的恩召有何等指望", en: "That You May Know the Hope of His Calling" },
    role: { zh: "保羅的第一個禱告（1:15-23）", en: "Paul’s first prayer (1:15–23)" },
    ch: [1],
    passages: ["1:15-23"],
    moves: [
      { zh: "照明心中的眼睛", en: "Enlightened Eyes", ref: "1:18",
        dzh: "並且照明你們心中的眼睛，使你們知道他的恩召有何等指望，他在聖徒中得的基業有何等豐盛的榮耀",
        den: "Having the eyes of your hearts enlightened, that you may know what is the hope of his calling, and what are the riches of the glory of his inheritance in the saints," },
      { zh: "使他從死裡復活", en: "Raised from the Dead", ref: "1:20",
        dzh: "就是照他在基督身上所運行的大能大力，使他從死裡復活，叫他在天上坐在自己的右邊",
        den: "Which he worked in Christ, when he raised him from the dead, and made him to sit at his right hand in the heavenly places," }
    ],
    traits: [
      { k: "strength", zh: "為他們感謝，也為他們祈求（1:16）", en: "Gives thanks for them and prays for them (1:16)" },
      { k: "identity", zh: "他求的是「知道」，不是環境的改變（1:17-19）", en: "What he asks is to “know,” not for circumstances to change (1:17–19)" }
    ],
    lesson: {
      zh: "保羅禱告的內容很特別：不是求他們的處境改善，而是求他們的眼睛被照明，好知道三件事：恩召的指望、基業的榮耀，和「向我們這信的人所顯的能力是何等浩大」（1:18-19）。這能力的尺度就是使基督從死裡復活，並坐在天上（1:20）。",
      en: "Paul’s prayer is distinctive: not that their situation improves but that their eyes be enlightened to know three things: the hope of the calling, the glory of the inheritance, and “the exceeding greatness of his power toward us who believe” (1:18–19). The measure of that power is raising Christ from the dead and seating him in heaven (1:20)."
    },
    quote: { ref: "1:18",
      zh: "照明你們心中的眼睛",
      en: "the eyes of your hearts enlightened" },
    keyVerses: ["1:15", "1:16", "1:17", "1:18", "1:19", "1:20", "1:21", "1:22", "1:23"],
    intro: {
      zh: "「因此，我既聽見你們信從主耶穌，親愛眾聖徒，就為你們不住地感謝神。」（1:15-16）1:21 說基督「遠超過一切執政的、掌權的、有能的、主治的，和一切有名的」；1:22-23 說神使他「為教會作萬有之首」，而教會「是他的身體」。",
      en: "“For this cause I also, having heard of the faith in the Lord Jesus which is among you, and the love which you have toward all the saints, don’t cease to give thanks for you” (1:15–16). 1:21 says Christ is “far above all rule, and authority, and power, and dominion, and every name that is named”; 1:22–23 says God gave him “to be head over all things for the assembly, which is his body.”"
    },
    tip: {
      zh: "1:21 的「執政的、掌權的、有能的、主治的」指天使與靈界勢力，還是也包括人間政權，注釋書有不同看法。",
      en: "Whether the “rule, authority, power, dominion” of 1:21 means angelic and spiritual powers or also earthly governments commentaries see differently."
    },
    related: ["blessed_with_every_blessing", "width_length_height", "made_alive_by_grace", "armor_of_god"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "made_alive_by_grace", book: "ephesians", no: 4, kind: "other", type: "faith", rarity: 5,
    zh: "因著恩典，藉著信，得救", en: "Made Alive by Grace",
    tag: { zh: "然而，神既有豐富的憐憫", en: "But God, Being Rich in Mercy" },
    role: { zh: "從死到生（2:1-10）", en: "From death to life (2:1–10)" },
    ch: [2],
    passages: ["2:1-10"],
    moves: [
      { zh: "但神有豐富的憐憫", en: "But God, Rich in Mercy", ref: "2:4-5",
        dzh: "然而，神既有豐富的憐憫，因他愛我們的大愛，當我們死在過犯中的時候，便叫我們與基督一同活過來。",
        den: "But God, being rich in mercy, for his great love with which he loved us, even when we were dead through our trespasses, made us alive together with Christ" },
      { zh: "本乎恩，也因著信", en: "By Grace Through Faith", ref: "2:8-9",
        dzh: "你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的；也不是出於行為，免得有人自誇。",
        den: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast." }
    ],
    traits: [
      { k: "strength", zh: "「我們原是他的工作，在基督耶穌裡造成的」（2:10）", en: "“We are his workmanship, created in Christ Jesus” (2:10)" },
      { k: "weakness", zh: "「你們死在過犯罪惡之中」（2:1）", en: "“Dead in transgressions and sins” (2:1)" }
    ],
    lesson: {
      zh: "這段有三個節拍：死（2:1-3）、「然而神」（2:4-7）、得救並為善而造（2:8-10）。救恩是「本乎恩，也因著信」，不是出於自己，免得有人自誇；但接著說，我們是「為要叫我們行善，就是神所預備叫我們行的」（2:10）。善行不是得救的條件，而是得救的目的。",
      en: "The passage has three beats: dead (2:1–3), “But God” (2:4–7), saved and created for good works (2:8–10). Salvation is “by grace through faith,” not of ourselves, so no one boasts; yet we are “created in Christ Jesus for good works, which God prepared before” (2:10). Good works are not the condition of salvation but its purpose."
    },
    quote: { ref: "2:8",
      zh: "你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的",
      en: "by grace you have been saved through faith, and that not of yourselves; it is the gift of God" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9", "2:10"],
    intro: {
      zh: "「你們死在過犯罪惡之中，他叫你們活過來。」（2:1）2:2 提到「空中掌權者的首領」和「悖逆之子」；2:3 說「我們從前也都在他們中間」，連保羅自己也包括在內。2:6：「他又叫我們與基督耶穌一同復活，一同坐在天上。」2:10 的「工作」（workmanship）也可譯為「作品」。",
      en: "“You were made alive when you were dead in transgressions and sins” (2:1). 2:2 mentions “the prince of the power of the air” and “the children of disobedience”; 2:3 says “among whom we also all once lived,” including Paul himself. 2:6: “and raised us up with him, and made us to sit with him in the heavenly places in Christ Jesus.” “Workmanship” (2:10) can also be rendered “masterpiece.”"
    },
    tip: {
      zh: "2:8「這並不是出於自己，乃是神所賜的」中的「這」指甚麼：救恩、恩典，還是信心，注釋書有不同看法（原文代詞是中性）；2:2 的「空中掌權者」也是詮釋的議題。",
      en: "What “that” in 2:8 (“and that not of yourselves”) refers to — salvation, grace or faith — commentaries see differently (the Greek pronoun is neuter); “the prince of the power of the air” (2:2) is also debated."
    },
    related: ["blessed_with_every_blessing", "one_new_humanity", "put_off_old_self", "walk_in_love_light"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "one_new_humanity", book: "ephesians", no: 5, kind: "other", type: "love", rarity: 5,
    zh: "兩下合而為一", en: "One New Humanity",
    tag: { zh: "拆毀了中間隔斷的牆", en: "He Broke Down the Middle Wall of Partition" },
    role: { zh: "猶太人與外邦人（2:11-22）", en: "Jew and Gentile (2:11–22)" },
    ch: [2],
    passages: ["2:11-22"],
    moves: [
      { zh: "拆毀隔斷的牆", en: "The Wall Broken Down", ref: "2:14",
        dzh: "因他使我們和睦，將兩下合而為一，拆毀了中間隔斷的牆；",
        den: "For he is our peace, who made both one, and broke down the middle wall of partition," },
      { zh: "神家裡的人", en: "The Household of God", ref: "2:19",
        dzh: "這樣，你們不再作外人和客旅，是與聖徒同國，是神家裡的人了",
        den: "So then you are no longer strangers and foreigners, but you are fellow citizens with the saints, and of the household of God," }
    ],
    traits: [
      { k: "strength", zh: "「來傳和平的福音給遠處的人，也給近處的人」（2:17）", en: "“Preached peace to you who were far off and to those who were near” (2:17)" },
      { k: "weakness", zh: "外邦人從前「活在世上沒有指望，沒有神」（2:12）", en: "Gentiles were once “having no hope and without God in the world” (2:12)" }
    ],
    lesson: {
      zh: "兩個群體被帶到同一個地方：「你們從前遠離神的人，如今卻在基督耶穌裡，靠著他的血，已經得親近了」（2:13）。基督在十字架上做了兩件事：使兩下合而為一，造成「一個新人」（2:15），又使兩下與神和好（2:16）。結果是一個家、一座殿（2:19-22）。",
      en: "Two groups are brought to the same place: “you who once were far off are made near in the blood of Christ” (2:13). Christ does two things on the cross: he makes the two one, creating “one new man” (2:15), and reconciles both to God (2:16). The result is one household and one temple (2:19–22)."
    },
    quote: { ref: "2:14",
      zh: "將兩下合而為一，拆毀了中間隔斷的牆",
      en: "who made both one, and broke down the middle wall of partition" },
    keyVerses: ["2:11", "2:12", "2:13", "2:14", "2:15", "2:16", "2:17", "2:18", "2:19", "2:20", "2:21", "2:22"],
    intro: {
      zh: "「所以你們應當記念：你們從前按肉體是外邦人。」（2:11）2:12 列出外邦人從前的處境：與基督無關、在以色列國民以外、在所應許的諸約上是局外人。2:14-16 說基督是「我們的和睦」。2:20 說教會「被建造在使徒和先知的根基上，有基督耶穌自己為房角石」，並漸漸成為主的聖殿。",
      en: "“Therefore remember that once you, the Gentiles in the flesh” (2:11). 2:12 lists the Gentiles’ former condition: separate from Christ, alienated from the commonwealth of Israel, strangers from the covenants of promise. 2:14–16 calls Christ “our peace.” 2:20 says the church is “built on the foundation of the apostles and prophets, Christ Jesus himself being the chief cornerstone,” growing into a holy temple in the Lord."
    },
    tip: {
      zh: "「中間隔斷的牆」常被聯想到耶路撒冷聖殿中分隔外邦人院與以色列人院的矮牆，這是常見的推測，經文沒有明說；「廢掉律法的規條」（2:15）指甚麼，注釋書也有不同看法。",
      en: "The “middle wall of partition” is often linked to the low wall in the Jerusalem temple separating the Court of the Gentiles, a common suggestion the text does not state; what “abolished the law of commandments” (2:15) means commentaries also see differently."
    },
    related: ["made_alive_by_grace", "mystery_of_christ", "unity_of_the_spirit", "paul_to_ephesus"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "mystery_of_christ", book: "ephesians", no: 6, kind: "other", type: "vision", rarity: 4,
    zh: "基督的奧祕", en: "The Mystery of Christ",
    tag: { zh: "外邦人得以同為後嗣，同為一體，同蒙應許", en: "Fellow Heirs, Fellow Members, Fellow Partakers" },
    role: { zh: "保羅的職事（3:1-13）", en: "Paul’s ministry (3:1–13)" },
    ch: [3],
    passages: ["3:1-13"],
    moves: [
      { zh: "同為後嗣，同為一體", en: "Fellow Heirs, Fellow Members", ref: "3:6",
        dzh: "這奧祕就是外邦人在基督耶穌裡，藉著福音，得以同為後嗣，同為一體，同蒙應許。",
        den: "That the Gentiles are fellow heirs, and fellow members of the body, and fellow partakers of his promise in Christ Jesus through the Good News," },
      { zh: "神百般的智慧", en: "The Manifold Wisdom of God", ref: "3:10",
        dzh: "為要藉著教會使天上執政的、掌權的，現在得知神百般的智慧。",
        den: "To the intent that now through the assembly the manifold wisdom of God might be made known to the principalities and the powers in the heavenly places," }
    ],
    traits: [
      { k: "strength", zh: "被託付「把基督那測不透的豐富傳給外邦人」（3:8）", en: "Entrusted “to preach to the Gentiles the unsearchable riches of Christ” (3:8)" },
      { k: "weakness", zh: "「為你們外邦人作了基督耶穌被囚的」（3:1）", en: "“The prisoner of Christ Jesus on behalf of you Gentiles” (3:1)" }
    ],
    lesson: {
      zh: "「奧祕」在這裡是「從前隱藏、現在顯明」的事：外邦人與猶太人同為後嗣、同為一體、同蒙應許（3:6）。保羅說他是「最小的還小」，卻蒙恩傳這個消息（3:8）；這奧祕藉著教會，也使天上的執政掌權者得知神百般的智慧（3:10）。他的患難是他們的榮耀（3:13）。",
      en: "“Mystery” here is what was hidden and is now revealed: Gentiles and Jews fellow heirs, one body, sharers of the promise (3:6). Paul says he is “less than the least” yet was graced to announce it (3:8); through the church the manifold wisdom of God is made known even to heavenly rulers and authorities (3:10). His troubles are their glory (3:13)."
    },
    quote: { ref: "3:6",
      zh: "外邦人在基督耶穌裡，藉著福音，得以同為後嗣，同為一體，同蒙應許",
      en: "the Gentiles are fellow heirs, and fellow members of the body, and fellow partakers of his promise" },
    keyVerses: ["3:1", "3:2", "3:3", "3:5", "3:6", "3:7", "3:8", "3:9", "3:10", "3:12", "3:13"],
    intro: {
      zh: "「因此，我－保羅為你們外邦人作了基督耶穌被囚的。」（3:1）這句話在 3:14 才接上；中間是一段插入，說明他所領受的奧祕。3:5 說這奧祕「在以前的世代沒有叫人知道，像如今藉著聖靈啟示他的聖使徒和先知一樣」。3:12：「我們因信耶穌，就在他裡面放膽無懼，篤信不疑地來到神面前。」",
      en: "“For this cause I, Paul, am the prisoner of Christ Jesus on behalf of you Gentiles” (3:1). The sentence resumes in 3:14; in between is a digression explaining the mystery he received. 3:5 says it “in other generations was not made known to the children of men, as it has now been revealed to his holy apostles and prophets in the Spirit.” 3:12: “in whom we have boldness and access in confidence through our faith in him.”"
    },
    tip: {
      zh: "3:5 說這奧祕「在以前的世代沒有叫人知道」，舊約中是否早有預示（如創世記 12:3），與「現在才被啟示」如何對應，各傳統有不同看法；3:10 的「執政的、掌權的」也有不同理解。",
      en: "3:5 says the mystery was not made known in other generations; whether it was foreshadowed earlier (e.g. Genesis 12:3) and how that fits “now revealed” traditions see differently; the “principalities and powers” of 3:10 are also understood differently."
    },
    related: ["one_new_humanity", "width_length_height", "paul_to_ephesus", "prayer_for_enlightened_eyes"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "width_length_height", book: "ephesians", no: 7, kind: "other", type: "love", rarity: 5,
    zh: "基督的愛是何等長闊高深", en: "Width, Length, Height and Depth",
    tag: { zh: "神能照著運行在我們心裡的大力，超過我們所求所想的", en: "Able to Do Far More Than We Ask or Think" },
    role: { zh: "保羅的第二個禱告（3:14-21）", en: "Paul’s second prayer (3:14–21)" },
    ch: [3],
    passages: ["3:14-21"],
    moves: [
      { zh: "長闊高深", en: "Width, Length, Height, Depth", ref: "3:18-19",
        dzh: "能以和眾聖徒一同明白基督的愛是何等長闊高深，並知道這愛是過於人所能測度的",
        den: "May be strengthened to comprehend with all the saints what is the width and length and height and depth, and to know Christ’s love which surpasses knowledge," },
      { zh: "超過我們所求所想的", en: "Beyond All We Ask or Think", ref: "3:20",
        dzh: "神能照著運行在我們心裡的大力充充足足地成就一切，超過我們所求所想的。",
        den: "Now to him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us," }
    ],
    traits: [
      { k: "strength", zh: "「在父面前屈膝」（3:14）", en: "“I bow my knees to the Father” (3:14)" },
      { k: "identity", zh: "「使基督因你們的信，住在你們心裡」（3:17）", en: "“That Christ may dwell in your hearts through faith” (3:17)" }
    ],
    lesson: {
      zh: "這個禱告從內往外：裡面的力量剛強起來（3:16），基督住在心裡，愛心有根有基（3:17），「和眾聖徒一同」明白那愛的長闊高深（3:18），最後被神一切所充滿的充滿（3:19）。明白不是個人的事，是「和眾聖徒一同」。禱告以頌讚結束：神能做的，超過我們所求所想的（3:20）。",
      en: "This prayer moves from the inside out: strengthened within (3:16), Christ dwelling in the heart, rooted and grounded in love (3:17), comprehending “with all the saints” the width and length and height and depth of that love (3:18), and finally filled with all the fullness of God (3:19). Understanding is not private but “with all the saints.” The prayer ends in praise: God can do far beyond what we ask or think (3:20)."
    },
    quote: { ref: "3:19",
      zh: "知道這愛是過於人所能測度的，便叫神一切所充滿的，充滿了你們",
      en: "to know Christ’s love which surpasses knowledge, that you may be filled with all the fullness of God" },
    keyVerses: ["3:14", "3:16", "3:17", "3:18", "3:19", "3:20", "3:21"],
    intro: {
      zh: "「因此，我在父面前屈膝，（天上地上的各家，都是從他得名。）」（3:14-15）保羅求的是「叫你們心裡的力量剛強起來」（3:16），不是環境的改變。3:19 說「知道這愛是過於人所能測度的」，是一個看似矛盾的句子：知道那超過知識的。3:20-21 是一個頌讚，也是前三章的結語。",
      en: "“For this cause, I bow my knees to the Father… from whom every family in heaven and on earth is named” (3:14–15). Paul asks that they be strengthened “in the inward man” (3:16), not for circumstances to change. 3:19, “to know Christ’s love which surpasses knowledge,” is a seemingly paradoxical sentence: to know what surpasses knowledge. 3:20–21 is a doxology and the close of the first three chapters."
    },
    tip: {
      zh: "「長闊高深」是指甚麼的長闊高深（基督的愛、神的奧祕，或十字架的形狀），保羅沒有說明；多數讀為基督的愛。",
      en: "What the “width and length and height and depth” measure (Christ’s love, God’s mystery, or the shape of the cross) Paul does not say; most read it as Christ’s love."
    },
    related: ["prayer_for_enlightened_eyes", "unity_of_the_spirit", "armor_of_god", "blessed_with_every_blessing"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "unity_of_the_spirit", book: "ephesians", no: 8, kind: "other", type: "love", rarity: 4,
    zh: "聖靈所賜合而為一的心", en: "The Unity of the Spirit",
    tag: { zh: "一主，一信，一洗，一神", en: "One Lord, One Faith, One Baptism, One God" },
    role: { zh: "行事為人與蒙召的恩相稱（4:1-6）", en: "Walking worthy of the calling (4:1–6)" },
    ch: [4],
    passages: ["4:1-6"],
    moves: [
      { zh: "謙虛、溫柔、忍耐", en: "Lowliness, Gentleness, Patience", ref: "4:2",
        dzh: "凡事謙虛、溫柔、忍耐，用愛心互相寬容，",
        den: "With all lowliness and humility, with patience, bearing with one another in love;" },
      { zh: "一主，一信，一洗，一神", en: "One Lord, One Faith, One Baptism, One God", ref: "4:5-6",
        dzh: "一主，一信，一洗，一神，就是眾人的父，超乎眾人之上，貫乎眾人之中，也住在眾人之內。",
        den: "One Lord, one faith, one baptism, one God and Father of all, who is over all, and through all, and in us all." }
    ],
    traits: [
      { k: "strength", zh: "「用和平彼此聯絡」（4:3）", en: "“In the bond of peace” (4:3)" },
      { k: "identity", zh: "七個「一」（4:4-6）", en: "Seven “ones” (4:4–6)" }
    ],
    lesson: {
      zh: "前三章講神做了甚麼；從 4:1 起轉入「所以」：行事為人要與蒙召的恩相稱。第一個要求是合一。合一不是由我們造成的，而是聖靈已賜的，我們要「竭力保守」（4:3）；方法是謙虛、溫柔、忍耐、用愛心互相寬容（4:2）。七個「一」說明為甚麼：身體、聖靈、指望、主、信、洗、神，都只有一個。",
      en: "The first three chapters say what God has done; from 4:1 comes the “therefore”: walk worthily of the calling. The first demand is unity. Unity is not made by us but given by the Spirit, and we are to “keep” it (4:3); by lowliness, gentleness, patience and bearing with one another in love (4:2). The seven “ones” say why: one body, Spirit, hope, Lord, faith, baptism, God."
    },
    quote: { ref: "4:3",
      zh: "竭力保守聖靈所賜合而為一的心",
      en: "being eager to keep the unity of the Spirit in the bond of peace" },
    keyVerses: ["4:1", "4:2", "4:3", "4:4", "4:5", "4:6"],
    intro: {
      zh: "「我為主被囚的勸你們：既然蒙召，行事為人就當與蒙召的恩相稱。」（4:1）4:4-6 的七個「一」，常被看作早期教會的信仰告白片段；其中「一洗」指甚麼，各傳統有不同看法（水禮、聖靈的洗，或兩者）。4:6 的「超乎眾人之上，貫乎眾人之中，也住在眾人之內」是對神的三重描述。",
      en: "“I therefore, the prisoner in the Lord, beg you to walk worthily of the calling with which you were called” (4:1). The seven “ones” of 4:4–6 are often seen as a fragment of an early confession; what “one baptism” means traditions see differently (water, Spirit, or both). 4:6, “who is over all, and through all, and in us all,” is a threefold description of God."
    },
    tip: {
      zh: "4:5「一洗」指水禮、聖靈的洗，或兩者，各傳統有不同強調；4:3 的合一是要「保守」的，不是要「製造」的。",
      en: "“One baptism” (4:5) as water, Spirit or both traditions emphasize differently; the unity of 4:3 is to be “kept,” not “made.”"
    },
    related: ["one_new_humanity", "gifts_for_building", "width_length_height", "put_off_old_self"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "gifts_for_building", book: "ephesians", no: 9, kind: "other", type: "harvest", rarity: 3,
    zh: "賜給人的恩賜", en: "Gifts for Building Up the Body",
    tag: { zh: "惟用愛心說誠實話", en: "Speaking the Truth in Love" },
    role: { zh: "各人蒙恩，建立身體（4:7-16）", en: "Each given grace; building up the body (4:7–16)" },
    ch: [4],
    passages: ["4:7-16"],
    moves: [
      { zh: "使徒、先知、傳福音的、牧師和教師", en: "Apostles, Prophets, Evangelists, Shepherds and Teachers", ref: "4:11",
        dzh: "他所賜的，有使徒，有先知，有傳福音的，有牧師和教師，",
        den: "He gave some to be apostles; and some, prophets; and some, evangelists; and some, shepherds and teachers;" },
      { zh: "用愛心說誠實話", en: "Speaking Truth in Love", ref: "4:15",
        dzh: "惟用愛心說誠實話，凡事長進，連於元首基督，",
        den: "But speaking truth in love, we may grow up in all things into him, who is the head, Christ;" }
    ],
    traits: [
      { k: "strength", zh: "「百節各按各職，照著各體的功用彼此相助」（4:16）", en: "“Every joint supplies, according to the working in measure of each individual part” (4:16)" },
      { k: "weakness", zh: "「不再作小孩子，……被一切異教之風搖動」（4:14）", en: "“No longer children… carried about with every wind of doctrine” (4:14)" }
    ],
    lesson: {
      zh: "恩賜不是給少數人的階梯。使徒、先知等「為要成全聖徒，各盡其職，建立基督的身體」（4:12）：恩賜的目的是裝備眾人去服事。目標是合一、長大成人、認識神的兒子（4:13）；方法是「用愛心說誠實話」（4:15），像身體的每一節各按各職，彼此相助，在愛中建立自己（4:16）。",
      en: "Gifts are not a ladder for the few. Apostles, prophets and the rest are given “for the perfecting of the saints, to the work of serving, to the building up of the body of Christ” (4:12): gifts equip everyone for service. The goal is unity, maturity and knowing the Son of God (4:13); the way is “speaking truth in love” (4:15), each joint doing its part so the body builds itself up in love (4:16)."
    },
    quote: { ref: "4:12",
      zh: "為要成全聖徒，各盡其職，建立基督的身體",
      en: "for the perfecting of the saints, to the work of serving, to the building up of the body of Christ" },
    keyVerses: ["4:7", "4:8", "4:11", "4:12", "4:13", "4:14", "4:15", "4:16"],
    intro: {
      zh: "「我們各人蒙恩，都是照基督所量給各人的恩賜。」（4:7）4:8 引用詩篇 68:18：「他升上高天的時候，擄掠了仇敵，將各樣的恩賜賞給人。」4:11 列出五種職分；4:12 說它們的目的。4:13-16 描寫成熟的教會：不再像小孩子被各樣教訓搖動，而是在愛中長進，連於元首基督。",
      en: "“But to each one of us was the grace given according to the measure of the gift of Christ” (4:7). 4:8 quotes Psalm 68:18: “When he ascended on high, he led captivity captive, and gave gifts to men.” 4:11 lists five roles; 4:12 says their purpose. 4:13–16 describes a mature church: no longer tossed by every teaching like children, but growing in love into Christ the head."
    },
    tip: {
      zh: "4:8 引用詩篇 68:18，措辭與希伯來文不完全相同；4:9「降在地下」指道成肉身、降到陰間，或降下聖靈，各傳統有不同讀法；「牧師和教師」是兩種職分還是一種，也有不同看法。",
      en: "4:8 quotes Psalm 68:18 with wording not identical to the Hebrew; “descended into the lower parts of the earth” (4:9) as incarnation, descent to the dead, or the Spirit’s coming traditions read differently; whether “shepherds and teachers” is one office or two is also debated."
    },
    related: ["unity_of_the_spirit", "put_off_old_self", "width_length_height", "armor_of_god"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "put_off_old_self", book: "ephesians", no: 10, kind: "other", type: "wisdom", rarity: 3,
    zh: "脫去舊人，穿上新人", en: "Put Off the Old, Put On the New",
    tag: { zh: "彼此饒恕，正如神在基督裡饒恕了你們一樣", en: "Forgiving Each Other, as God in Christ Forgave You" },
    role: { zh: "新的生活（4:17-32）", en: "The new way of life (4:17–32)" },
    ch: [4],
    passages: ["4:17-32"],
    moves: [
      { zh: "穿上新人", en: "Put On the New Man", ref: "4:24",
        dzh: "並且穿上新人；這新人是照著神的形像造的，有真理的仁義和聖潔。",
        den: "And put on the new man, who in the likeness of God has been created in righteousness and holiness of truth." },
      { zh: "生氣卻不要犯罪", en: "Be Angry, and Don’t Sin", ref: "4:26-27",
        dzh: "生氣卻不要犯罪；不可含怒到日落，也不可給魔鬼留地步。",
        den: "“Be angry, and don’t sin.” Don’t let the sun go down on your wrath, and don’t give place to the devil." }
    ],
    traits: [
      { k: "strength", zh: "「要將你們的心志改換一新」（4:23）", en: "“Be renewed in the spirit of your mind” (4:23)" },
      { k: "weakness", zh: "「不要叫神的聖靈擔憂」（4:30）", en: "“Don’t grieve the Holy Spirit of God” (4:30)" }
    ],
    lesson: {
      zh: "保羅的順序是：先說身份，再說行為。「你們學了基督，卻不是這樣」（4:20），所以脫去舊人（4:22），心志改換一新（4:23），穿上新人（4:24）。然後才是具體的事：說實話、生氣不犯罪、不再偷竊而要勞力、說造就人的話、除去苦毒，最後是饒恕：「正如神在基督裡饒恕了你們一樣」（4:32）。",
      en: "Paul’s order is identity first, then behavior. “You did not learn Christ that way” (4:20), so put away the old man (4:22), be renewed in mind (4:23), put on the new man (4:24). Only then the concrete: speak truth, be angry without sinning, stop stealing and labor instead, speak to build up, put away bitterness, and finally forgive “just as God also in Christ forgave you” (4:32)."
    },
    quote: { ref: "4:32",
      zh: "彼此饒恕，正如神在基督裡饒恕了你們一樣",
      en: "forgiving each other, just as God also in Christ forgave you" },
    keyVerses: ["4:17", "4:20", "4:22", "4:23", "4:24", "4:25", "4:26", "4:28", "4:29", "4:30", "4:32"],
    intro: {
      zh: "「所以我說，且在主裡確實地說，你們行事不要再像外邦人存虛妄的心行事。」（4:17）4:22-24 的「舊人」「新人」是穿脫衣服的圖像。4:25-32 列出幾個具體的例子：棄絕謊言（4:25）、生氣不犯罪（4:26）、不再偷竊（4:28）、造就人的話（4:29）、除去苦毒惱恨（4:31）。4:26 引用詩篇 4:4。",
      en: "“This I say therefore, and testify in the Lord, that you no longer walk as the rest of the Gentiles also walk, in the futility of their mind” (4:17). The “old man” and “new man” of 4:22–24 are images of taking off and putting on clothes. 4:25–32 gives concrete examples: putting away falsehood (4:25), anger without sin (4:26), no more stealing (4:28), words that build up (4:29), putting away bitterness and wrath (4:31). 4:26 quotes Psalm 4:4."
    },
    tip: {
      zh: "「舊人」「新人」是指個人的轉變，還是指亞當與基督兩個群體（參羅馬書 5 章），注釋書有不同強調。",
      en: "Whether “old man” and “new man” means personal change or the two corporate humanities of Adam and Christ (compare Romans 5), commentaries stress differently."
    },
    related: ["made_alive_by_grace", "walk_in_love_light", "unity_of_the_spirit", "gifts_for_building"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "walk_in_love_light", book: "ephesians", no: 11, kind: "other", type: "vision", rarity: 3,
    zh: "光明的子女", en: "Walk as Children of Light",
    tag: { zh: "你這睡著的人當醒過來", en: "Awake, You Who Sleep" },
    role: { zh: "憑愛心行，在光明中（5:1-14）", en: "Walk in love, in the light (5:1–14)" },
    ch: [5],
    passages: ["5:1-14"],
    moves: [
      { zh: "憑愛心行事", en: "Walk in Love", ref: "5:1-2",
        dzh: "所以，你們該效法神，好像蒙慈愛的兒女一樣。也要憑愛心行事，正如基督愛我們，為我們捨了自己",
        den: "Be therefore imitators of God, as beloved children. Walk in love, even as Christ also loved you, and gave himself up for us" },
      { zh: "你這睡著的人當醒過來", en: "Awake, You Who Sleep", ref: "5:14",
        dzh: "所以主說：你這睡著的人當醒過來，從死裡復活！基督就要光照你了。",
        den: "Therefore he says, “Awake, you who sleep, and arise from the dead, and Christ will shine on you.”" }
    ],
    traits: [
      { k: "strength", zh: "「總要察驗何為主所喜悅的事」（5:10）", en: "“Proving what is well pleasing to the Lord” (5:10)" },
      { k: "weakness", zh: "「他們暗中所行的，就是提起來也是可恥的」（5:12）", en: "“The things which are done by them in secret, it is a shame even to speak of” (5:12)" }
    ],
    lesson: {
      zh: "身份是一切的根據：「從前你們是暗昧的，但如今在主裡面是光明的」（5:8）。所以行為像光明的子女，光明所結的果子是「一切良善、公義、誠實」（5:9）；光也有顯明的作用（5:13）。5:14 像是一首早期的詩歌：醒過來吧，基督要光照你。",
      en: "Identity is the ground: “you were once darkness, but are now light in the Lord” (5:8). So live as children of light; light’s fruit is “all goodness and righteousness and truth” (5:9); light also reveals (5:13). 5:14 reads like a line of an early hymn: wake up, Christ will shine on you."
    },
    quote: { ref: "5:8",
      zh: "從前你們是暗昧的，但如今在主裡面是光明的，行事為人就當像光明的子女",
      en: "you were once darkness, but are now light in the Lord. Walk as children of light" },
    keyVerses: ["5:1", "5:2", "5:3", "5:5", "5:8", "5:9", "5:10", "5:11", "5:13", "5:14"],
    intro: {
      zh: "「所以，你們該效法神，好像蒙慈愛的兒女一樣。」（5:1）5:2 說基督為我們捨了自己，「當作馨香的供物和祭物，獻與神」。5:3-7 提醒不要與淫亂、污穢、貪婪同夥；5:8-14 轉到光明。5:14 的「主說」是引用甚麼，經文沒有說明。",
      en: "“Be therefore imitators of God, as beloved children” (5:1). 5:2 says Christ gave himself up for us “an offering and a sacrifice to God for a sweet-smelling fragrance.” 5:3–7 warns against fellowship with sexual immorality, uncleanness and covetousness; 5:8–14 turns to the light. What “he says” in 5:14 quotes the text does not say."
    },
    tip: {
      zh: "5:14「你這睡著的人當醒過來」是引用甚麼，經文只說「主說」；有人認為是早期教會的詩歌或受洗的詞句，也有人認為是對以賽亞書 60:1 的概括，並不確定。",
      en: "What 5:14 (“Awake, you who sleep”) quotes the text says only “he says”; some think an early hymn or baptismal saying, others a summary of Isaiah 60:1; it is uncertain."
    },
    related: ["put_off_old_self", "be_filled_with_spirit", "one_new_humanity", "armor_of_god"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "be_filled_with_spirit", book: "ephesians", no: 12, kind: "other", type: "power", rarity: 3,
    zh: "要被聖靈充滿", en: "Be Filled with the Spirit",
    tag: { zh: "口唱心和地讚美主", en: "Singing and Making Melody in Your Heart" },
    role: { zh: "智慧的生活（5:15-21）", en: "Living wisely (5:15–21)" },
    ch: [5],
    passages: ["5:15-21"],
    moves: [
      { zh: "要被聖靈充滿", en: "Be Filled with the Spirit", ref: "5:18",
        dzh: "不要醉酒，酒能使人放蕩；乃要被聖靈充滿。",
        den: "Don’t be drunken with wine, in which is dissipation, but be filled with the Spirit," },
      { zh: "口唱心和地讚美主", en: "Singing and Making Melody", ref: "5:19",
        dzh: "當用詩章、頌詞、靈歌彼此對說，口唱心和地讚美主。",
        den: "Speaking to one another in psalms, hymns, and spiritual songs; singing, and making melody in your heart to the Lord;" }
    ],
    traits: [
      { k: "strength", zh: "「凡事要奉我們主耶穌基督的名常常感謝父神」（5:20）", en: "“Giving thanks always concerning all things in the name of our Lord Jesus Christ” (5:20)" },
      { k: "weakness", zh: "「現今的世代邪惡」（5:16）", en: "“The days are evil” (5:16)" }
    ],
    lesson: {
      zh: "「不要醉酒……乃要被聖靈充滿」，是一個並列：兩者都能「充滿」一個人，但一個帶來放蕩，一個帶來生命。原文的動詞是持續的命令：「要不斷地被充滿」。充滿的表現不是個人的亢奮，而是在群體中：彼此對說詩歌、常常感謝、彼此順服（5:19-21）。",
      en: "“Don’t be drunken with wine… but be filled with the Spirit” is a contrast: both can “fill” a person, but one brings dissipation and the other life. The Greek verb is a continuing command: “keep being filled.” The evidence is not private ecstasy but life in the community: singing to one another, constant thanks, mutual submission (5:19–21)."
    },
    quote: { ref: "5:18",
      zh: "乃要被聖靈充滿",
      en: "be filled with the Spirit" },
    keyVerses: ["5:15", "5:16", "5:17", "5:18", "5:19", "5:20", "5:21"],
    intro: {
      zh: "「你們要謹慎行事，不要像愚昧人，當像智慧人。要愛惜光陰，因為現今的世代邪惡。」（5:15-16）5:17：「不要作糊塗人，要明白主的旨意如何。」5:19 的「詩章、頌詞、靈歌」是三種歌的名稱，彼此的界線不容易分。5:21 的「彼此順服」連到下一段的家庭生活。",
      en: "“Therefore watch carefully how you walk, not as unwise, but as wise; redeeming the time, because the days are evil” (5:15–16). 5:17: “don’t be foolish, but understand what the will of the Lord is.” The “psalms, hymns, and spiritual songs” of 5:19 are three kinds of songs whose boundaries are hard to draw. 5:21, “subjecting yourselves to one another,” leads into the next section on the household."
    },
    tip: {
      zh: "「被聖靈充滿」與「受聖靈的洗」及「聖靈為印記」（1:13）的關係，各傳統（如五旬節派、改革宗、天主教、東正教）有不同說明；5:21 是上一段的結尾還是下一段的開頭，各譯本的分段不同。",
      en: "How being “filled with the Spirit” relates to baptism in the Spirit and being “sealed” (1:13) traditions (Pentecostal, Reformed, Catholic, Orthodox) explain differently; whether 5:21 ends the previous section or begins the next, versions divide differently."
    },
    related: ["walk_in_love_light", "marriage_christ_church", "width_length_height", "armor_of_god"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "marriage_christ_church", book: "ephesians", no: 13, kind: "other", type: "love", rarity: 4,
    zh: "夫妻與基督和教會", en: "Husbands, Wives, Christ and the Church",
    tag: { zh: "這是極大的奧祕，但我是指著基督和教會說的", en: "This Mystery Is Great — I Speak of Christ and the Church" },
    role: { zh: "家庭生活（5:22-33）", en: "Life in the household (5:22–33)" },
    ch: [5],
    passages: ["5:22-33"],
    moves: [
      { zh: "妻子，當順服", en: "Wives, Be Subject", ref: "5:22-23",
        dzh: "你們作妻子的，當順服自己的丈夫，如同順服主。因為丈夫是妻子的頭，如同基督是教會的頭",
        den: "Wives, be subject to your own husbands, as to the Lord. For the husband is the head of the wife, as Christ also is the head of the assembly," },
      { zh: "丈夫，要愛妻子", en: "Husbands, Love Your Wives", ref: "5:25",
        dzh: "你們作丈夫的，要愛你們的妻子，正如基督愛教會，為教會捨己。",
        den: "Husbands, love your wives, even as Christ also loved the assembly, and gave himself up for it;" }
    ],
    traits: [
      { k: "strength", zh: "對丈夫的要求是「為教會捨己」那樣的愛（5:25）", en: "The demand on husbands is love like Christ’s self-giving for the church (5:25)" },
      { k: "identity", zh: "引用創世記 2:24，說這是「極大的奧祕」，指基督和教會（5:31-32）", en: "Quotes Genesis 2:24 and calls it “a great mystery,” about Christ and the church (5:31–32)" }
    ],
    lesson: {
      zh: "這段從「彼此順服」（5:21）開始，然後分別對妻子和丈夫說話。對妻子是「順服」；對丈夫的話卻長得多，以基督為教會捨己為標準（5:25-27），並以愛自己的身子為例（5:28-29）。在丈夫的權威被視為理所當然的世界裡，這段話的重量落在丈夫身上。最後把夫妻的連合與基督和教會連在一起（5:32）。",
      en: "This passage begins with “subjecting yourselves to one another” (5:21), then speaks to wives and husbands in turn. To wives it says “be subject”; the words to husbands are much longer, with Christ’s self-giving for the church as the standard (5:25–27) and loving one’s own body as the example (5:28–29). In a world that took the husband’s authority for granted, the weight of this passage falls on husbands. It ends by joining marriage to Christ and the church (5:32)."
    },
    quote: { ref: "5:21",
      zh: "又當存敬畏基督的心，彼此順服",
      en: "subjecting yourselves to one another in the fear of Christ" },
    keyVerses: ["5:21", "5:22", "5:23", "5:24", "5:25", "5:26", "5:27", "5:28", "5:31", "5:32", "5:33"],
    intro: {
      zh: "「你們作妻子的，當順服自己的丈夫，如同順服主。」（5:22）原文 5:22 沒有動詞，要從 5:21 的「順服」承接。5:25-27 說基督為教會捨己，要把教會洗淨，獻給自己，成為榮耀的教會。5:31 引用創世記 2:24，5:32 說「這是極大的奧祕，但我是指著基督和教會說的」。5:33 總結：丈夫要愛妻子，妻子要敬重丈夫。",
      en: "“Wives, be subject to your own husbands, as to the Lord” (5:22). The Greek of 5:22 has no verb and takes “subject” from 5:21. 5:25–27 says Christ gave himself for the church to cleanse her and present her to himself in glory. 5:31 quotes Genesis 2:24, and 5:32 says “This mystery is great, but I speak concerning Christ and of the assembly.” 5:33 sums up: husbands love, wives respect."
    },
    tip: {
      zh: "5:22-24 的「順服」與「頭」的意思，各傳統有不同的詮釋：有人讀為丈夫的領導，有人讀為相互順服中的一個面向，有人強調「頭」也可有「源頭」的意思；這裡不選邊。",
      en: "What “subject” and “head” mean in 5:22–24 traditions interpret differently: husband’s leadership, one aspect of mutual submission, or “head” also as “source”; this does not pick a side."
    },
    related: ["be_filled_with_spirit", "children_parents_servants", "one_new_humanity", "walk_in_love_light"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "children_parents_servants", book: "ephesians", no: 14, kind: "other", type: "wisdom", rarity: 3,
    zh: "兒女、父母、僕人、主人", en: "Children, Parents, Servants, Masters",
    tag: { zh: "他並不偏待人", en: "There Is No Partiality with Him" },
    role: { zh: "家中的各種關係（6:1-9）", en: "Relationships in the household (6:1–9)" },
    ch: [6],
    passages: ["6:1-9"],
    moves: [
      { zh: "不要惹兒女的氣", en: "Don’t Provoke Your Children", ref: "6:4",
        dzh: "你們作父親的，不要惹兒女的氣，只要照著主的教訓和警戒養育他們。",
        den: "You fathers, don’t provoke your children to wrath, but nurture them in the discipline and instruction of the Lord." },
      { zh: "主人也是一理", en: "Masters, the Same to Them", ref: "6:9",
        dzh: "你們作主人的，待僕人也是一理，不要威嚇他們。因為知道，他們和你們同有一位主在天上；他並不偏待人。",
        den: "You masters, do the same to them, and give up threatening, knowing that their Master and yours is in heaven, and there is no partiality with him." }
    ],
    traits: [
      { k: "strength", zh: "每一方都被當作對主負責的人來對待（6:1、4、5-9）", en: "Each side is addressed as accountable to the Lord (6:1, 4, 5–9)" },
      { k: "weakness", zh: "對奴隸制度本身沒有直接的評論，這是需要誠實面對的", en: "It makes no direct comment on slavery itself, which must be faced honestly" }
    ],
    lesson: {
      zh: "三組關係，每組都是雙方被說到：兒女與父母、僕人與主人。在當時，有權力的一方被要求的事，是不尋常的：父親不可惹兒女的氣，主人要停止威嚇，因為「他們和你們同有一位主在天上；他並不偏待人」（6:9）。但這段話並沒有說奴隸制度本身是對或是錯，後世的讀法是必須誠實面對的歷史。",
      en: "Three pairs, with both sides addressed in each: children and parents, servants and masters. In that world what was asked of the stronger side was unusual: fathers must not provoke their children, masters must give up threatening, because “their Master and yours is in heaven, and there is no partiality with him” (6:9). But the text does not say whether slavery itself is right or wrong, and how later generations read it is a history to be faced honestly."
    },
    quote: { ref: "6:9",
      zh: "他們和你們同有一位主在天上；他並不偏待人",
      en: "there is no partiality with him" },
    keyVerses: ["6:1", "6:2", "6:4", "6:5", "6:6", "6:7", "6:8", "6:9"],
    intro: {
      zh: "「你們作兒女的，要在主裡聽從父母，這是理所當然的。」（6:1）6:2 引用十誡：「要孝敬父母」，稱這是「第一條帶應許的誡命」。6:5-8 對僕人說話，6:9 對主人說話。「僕人」原文是奴隸（doulos）。保羅在腓利門書中也處理同類的關係。",
      en: "“Children, obey your parents in the Lord, for this is right” (6:1). 6:2 quotes the Ten Commandments: “Honor your father and mother,” calling it “the first commandment with a promise.” 6:5–8 speaks to servants, 6:9 to masters. “Servants” is the Greek for slaves (doulos). Paul deals with the same kind of relationship in Philemon."
    },
    tip: {
      zh: "「僕人」原文是奴隸；這段話對奴隸制度本身沒有直接譴責，也沒有稱許，後世對它的讀法（包括曾被用來為奴隸制度辯護，以及後來的廢奴運動），是需要誠實面對的歷史。",
      en: "“Servants” is the Greek for slaves; this text neither condemns nor endorses slavery directly, and how it was later read (used to defend slavery, and later in the abolition movement) is a history that must be faced honestly."
    },
    related: ["marriage_christ_church", "armor_of_god", "put_off_old_self", "tychicus_greeting"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "armor_of_god", book: "ephesians", no: 15, kind: "other", type: "power", rarity: 5,
    zh: "神所賜的全副軍裝", en: "The Whole Armor of God",
    tag: { zh: "要靠著主，倚賴他的大能大力作剛強的人", en: "Be Strong in the Lord and in the Strength of His Might" },
    role: { zh: "屬靈的爭戰（6:10-20）", en: "The spiritual struggle (6:10–20)" },
    ch: [6],
    passages: ["6:10-20"],
    moves: [
      { zh: "穿戴全副軍裝", en: "Put On the Whole Armor", ref: "6:11",
        dzh: "要穿戴神所賜的全副軍裝，就能抵擋魔鬼的詭計。",
        den: "Put on the whole armor of God, that you may be able to stand against the wiles of the devil." },
      { zh: "信德的盾牌，聖靈的寶劍", en: "Shield of Faith, Sword of the Spirit", ref: "6:16-17",
        dzh: "又拿著信德當作盾牌，可以滅盡那惡者一切的火箭；並戴上救恩的頭盔，拿著聖靈的寶劍，就是神的道",
        den: "Taking up the shield of faith, to quench all the fiery darts of the evil one; and the helmet of salvation, and the sword of the Spirit, which is the word of God;" }
    ],
    traits: [
      { k: "strength", zh: "「成就了一切，還能站立得住」（6:13）", en: "“Having done all, to stand” (6:13)" },
      { k: "weakness", zh: "「磨難的日子」（6:13）", en: "“The evil day” (6:13)" }
    ],
    lesson: {
      zh: "爭戰的力量不在自己：「要靠著主，倚賴他的大能大力」（6:10）；爭戰的對象不是人：「並不是與屬血氣的爭戰」，乃是與靈界的勢力（6:12）；戰場上的姿態是「站立」（6:11、13、14）。軍裝每件都是信仰的內容：真理、公義、平安的福音、信德、救恩、神的道（6:14-17）。之後是禱告：「隨時多方禱告祈求」，也為保羅祈求（6:18-20）。",
      en: "The strength is not our own: “be strong in the Lord, and in the strength of his might” (6:10); the opponent is not people: “not against flesh and blood” but spiritual forces (6:12); the posture is to “stand” (6:11, 13, 14). Each piece of armor is part of the faith: truth, righteousness, the Good News of peace, faith, salvation, the word of God (6:14–17). Then prayer: “praying at all times in the Spirit,” including for Paul (6:18–20)."
    },
    quote: { ref: "6:12",
      zh: "我們並不是與屬血氣的爭戰",
      en: "our wrestling is not against flesh and blood" },
    keyVerses: ["6:10", "6:11", "6:12", "6:13", "6:14", "6:15", "6:16", "6:17", "6:18", "6:19", "6:20"],
    intro: {
      zh: "「我還有末了的話：你們要靠著主，倚賴他的大能大力作剛強的人。」（6:10）6:12 的「爭戰」原文是「摔跤」。軍裝的圖像常被認為取自看守保羅的羅馬士兵（6:20），也與以賽亞書 59:17 相呼應，但經文沒有說明。6:19-20 保羅求人為他祈求，使他能放膽講明福音的奧祕。",
      en: "“Finally, be strong in the Lord, and in the strength of his might” (6:10). “Struggle” in 6:12 is literally “wrestling.” The armor image is often thought to come from the Roman soldiers guarding Paul (6:20) and echoes Isaiah 59:17, but the text does not say. In 6:19–20 Paul asks for prayer that he may boldly make known the mystery of the Good News."
    },
    tip: {
      zh: "「全副軍裝」的圖像是否取自看守保羅的羅馬士兵，及與以賽亞書 59:17 的關係，是常見的推測，經文沒有說明；6:12 的「執政的、掌權的」指哪些靈界勢力，各傳統有不同理解。",
      en: "Whether the armor image comes from the Roman soldiers guarding Paul, and its relation to Isaiah 59:17, are common suggestions the text does not state; which spiritual forces the “principalities and powers” of 6:12 are traditions understand differently."
    },
    related: ["prayer_for_enlightened_eyes", "paul_to_ephesus", "width_length_height", "tychicus_greeting"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "tychicus_greeting", book: "ephesians", no: 16, kind: "person", type: "love", rarity: 3,
    zh: "推基古", en: "Tychicus",
    tag: { zh: "親愛、忠心事奉主的兄弟", en: "The Beloved Brother and Faithful Servant" },
    role: { zh: "帶信與帶安慰的人（6:21-24）", en: "The carrier of the letter and of comfort (6:21–24)" },
    ch: [6],
    names: ["推基古"], enNames: ["Tychicus"],
    moves: [
      { zh: "忠心事奉主的兄弟", en: "A Faithful Servant in the Lord", ref: "6:21",
        dzh: "今有所親愛、忠心事奉主的兄弟推基古，他要把我的事情，並我的景況如何全告訴你們，叫你們知道。",
        den: "Tychicus, the beloved brother and faithful servant in the Lord, will make known to you all things;" },
      { zh: "安慰你們的心", en: "To Comfort Your Hearts", ref: "6:22",
        dzh: "我特意打發他到你們那裡去，好叫你們知道我們的光景，又叫他安慰你們的心。",
        den: "Whom I have sent to you for this very purpose, that you may know our state, and that he may comfort your hearts." }
    ],
    traits: [
      { k: "strength", zh: "帶信，也帶消息，也帶安慰（6:21-22）", en: "Carries the letter, the news and the comfort (6:21–22)" },
      { k: "identity", zh: "也出現在使徒行傳 20:4、歌羅西書 4:7-8、提摩太後書 4:12、提多書 3:12", en: "Also in Acts 20:4, Colossians 4:7–8, 2 Timothy 4:12 and Titus 3:12" }
    ],
    lesson: {
      zh: "保羅在鎖鍊中，不能親自去，所以派推基古去：他帶著這封信，又當面告訴他們保羅的景況，好「安慰你們的心」（6:22）。福音靠著這樣忠心的信差傳開。信的結尾是祝福：願平安、仁愛、信心歸與弟兄們，並願「所有誠心愛我們主耶穌基督的人都蒙恩惠」（6:23-24）。",
      en: "Paul in chains cannot go himself, so he sends Tychicus: he carries the letter and tells them in person how Paul is, to “comfort your hearts” (6:22). The gospel spreads through such faithful messengers. The letter ends with blessing: peace, love with faith to the brothers, and grace “with all those who love our Lord Jesus Christ with incorruptible love” (6:23–24)."
    },
    quote: { ref: "6:21",
      zh: "所親愛、忠心事奉主的兄弟推基古",
      en: "Tychicus, the beloved brother and faithful servant in the Lord" },
    keyVerses: ["6:21", "6:22", "6:23", "6:24"],
    intro: {
      zh: "「今有所親愛、忠心事奉主的兄弟推基古，他要把我的事情，並我的景況如何全告訴你們。」（6:21）推基古是亞細亞人（徒 20:4），也受託帶歌羅西書（西 4:7-8），兩封信有許多相同的句子；提摩太後書 4:12 說保羅打發他往以弗所去。以弗所書與歌羅西書是否同一趟旅程帶去的，經文沒有明說。",
      en: "“But that you also may know my affairs, how I am doing, Tychicus, the beloved brother and faithful servant in the Lord, will make known to you all things” (6:21). Tychicus was from Asia (Acts 20:4) and was also entrusted with Colossians (Col 4:7–8), and the two letters share many phrases; 2 Timothy 4:12 says Paul sent him to Ephesus. Whether Ephesians and Colossians were carried on the same trip the text does not say."
    },
    tip: {
      zh: "推基古也帶歌羅西書，兩封信有許多相同的句子，這是常見的觀察；是否同一趟旅程，書信沒有明說。",
      en: "Tychicus also carried Colossians, and the two letters share many phrases, a common observation; whether it was the same trip the letters do not say."
    },
    related: ["paul_to_ephesus", "armor_of_god", "children_parents_servants", "width_length_height"]
  }

);
