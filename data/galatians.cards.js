// 聖經人物卡 · 加拉太書 (Galatians) — book info + cards.
// Verse text comes from data/galatians.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/galatians.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two.
// External references (Gen 12, 15, 16, 21; Deut 21:23, 27:26; Isa 54:1; Hab 2:4; Acts 9, 11, 15; Rom 7–8; 2 Cor 11) appear in prose only.
// Flagged rather than decided: North vs South Galatia, the visit of 2:1, where Paul's words to Peter end (2:14/2:21),
// "faith in Christ" vs "the faithfulness of Christ" (2:16), "works of the law", the "angels and mediator" of 3:19-20,
// the "elemental principles" (4:3, 9), the Hagar allegory, "fallen from grace" (5:4), the flesh/Spirit conflict (5:17),
// "God's Israel" (6:16) and the "marks" (6:17).

window.BOOKS.push({
  id: "galatians",
  zh: "加拉太書", en: "Galatians", abbr: { zh: "加", en: "Gal" },
  order: 48, section: { zh: "書信", en: "Epistles" },
  chapters: 6,
  fan: ["all_one_in_christ", "crucified_with_christ", "walk_by_the_spirit"],
  summary: {
    zh: "加拉太書是保羅寫給「加拉太的各教會」的一封緊迫的信。有人進來，要外邦信徒受割禮、守律法才算屬於神的子民，保羅認為這是「另一個福音」（1:6-9），所以信一開頭就沒有感謝，直接說「我希奇」。他先說自己的福音是從基督啟示來的，也與耶路撒冷的使徒相交（1-2 章）；再用亞伯拉罕、應許和律法的關係說明因信稱義（3-4 章）；最後說自由不是放縱，而是「用愛心互相服事」，並以聖靈的果子與肉體的情慾對比（5-6 章），以誇十字架作結（6:14）。",
    en: "Galatians is Paul’s urgent letter to “the assemblies of Galatia.” Some had come in telling Gentile believers they must be circumcised and keep the law to belong to God’s people; Paul calls this “a different good news” (1:6–9), so the letter begins with no thanksgiving but “I marvel.” He first says his gospel came by revelation of Christ and was recognized by the Jerusalem apostles (chs 1–2); then argues justification by faith from Abraham, promise and law (chs 3–4); and finally says freedom is not license but “through love be servants to one another,” setting the fruit of the Spirit against the desires of the flesh (chs 5–6), ending with boasting in the cross (6:14)."
  },
  outline: [
    { zh: "沒有別的福音；保羅蒙召出於啟示", en: "No other gospel; Paul’s call by revelation" },
    { zh: "耶路撒冷的相交；在安提阿抵擋彼得；與基督同釘十字架", en: "Fellowship at Jerusalem; opposing Peter at Antioch; crucified with Christ" },
    { zh: "因信稱義；亞伯拉罕的福；律法是師傅；在基督裡都成為一", en: "Justified by faith; Abraham’s blessing; the law as tutor; all one in Christ" },
    { zh: "從奴僕到兒子；基督成形在你們心裡；兩個約的比方", en: "From slave to son; Christ formed in you; the allegory of two covenants" },
    { zh: "站立得穩；聖靈與肉體；聖靈的果子", en: "Stand firm; Spirit and flesh; the fruit of the Spirit" },
    { zh: "擔當重擔；種與收；只誇十字架", en: "Bearing burdens; sowing and reaping; boasting only in the cross" }
  ],
  notes: {
    zh: "小提示：加拉太書的語氣是保羅書信中最激烈的之一，因為他認為福音的核心被動搖了。信中的幾個問題，學者有不同看法：加拉太指北部還是南部，寫作年代，2:1 的探訪是使徒行傳的哪一次，以及「行律法」「因信基督」等詞的意思。這裡在每張卡上標明，而不選邊。",
    en: "Good to know: Galatians is among Paul’s most heated letters, because he thinks the heart of the gospel is being shaken. Scholars see several questions differently: whether Galatia means the north or the south, the date, which visit of Acts is 2:1, and what “works of the law” and “faith in Christ” mean. The cards flag these rather than choose."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_to_galatia", book: "galatians", no: 1, kind: "person", type: "power", rarity: 6,
    zh: "寫給加拉太眾教會的保羅", en: "Paul Writing to the Galatian Churches",
    tag: { zh: "一封沒有感謝的信", en: "A Letter with No Thanksgiving" },
    role: { zh: "外邦人的使徒", en: "Apostle to the Gentiles" },
    ch: [1, 6],
    passages: ["1:1-5", "1:10", "6:18"],
    moves: [
      { zh: "不是由於人，乃是藉著耶穌基督", en: "Not from Men, but Through Jesus Christ", ref: "1:1",
        dzh: "作使徒的保羅（不是由於人，也不是藉著人，乃是藉著耶穌基督，與叫他從死裡復活的父神）",
        den: "Paul, an apostle (not from men, nor through man, but through Jesus Christ, and God the Father, who raised him from the dead)," },
      { zh: "要得人的心，還是神的心", en: "Seeking the Favor of Men or of God", ref: "1:10",
        dzh: "我現在是要得人的心呢？還是要得神的心呢？我豈是討人的喜歡嗎？",
        den: "For am I now seeking the favor of men, or of God? Or am I striving to please men?" }
    ],
    traits: [
      { k: "strength", zh: "短短五節問安，已把福音的核心說出來：基督為我們的罪捨己（1:4）", en: "Five verses of greeting already state the gospel’s core: Christ gave himself for our sins (1:4)" },
      { k: "weakness", zh: "少有的一封：問安之後沒有感謝，直接說「我希奇」（1:6）", en: "A rare letter: after the greeting no thanksgiving, straight to “I marvel” (1:6)" }
    ],
    lesson: {
      zh: "這封信的問題是：外邦信徒要不要受割禮、守猶太人的律法，才算神的子民（2:3；5:2；6:12）。保羅的立場是：基督已經為我們的罪捨己（1:4），在基督裡，人與神的關係不再靠這些外在的記號。他說這是「福音的真理」的問題（2:5、14），所以語氣特別緊迫。",
      en: "The question of this letter: must Gentile believers be circumcised and keep the Jewish law to be God’s people (2:3; 5:2; 6:12)? Paul’s position: Christ gave himself for our sins (1:4), and in Christ one’s standing with God no longer depends on these outward marks. He calls it a matter of “the truth of the Good News” (2:5, 14), hence the urgency."
    },
    quote: { ref: "1:4",
      zh: "基督照我們父神的旨意，為我們的罪捨己，要救我們脫離這罪惡的世代",
      en: "who gave himself for our sins, that he might deliver us out of this present evil age" },
    keyVerses: ["1:1", "1:2", "1:3", "1:4", "1:6", "1:10", "2:5", "6:18"],
    intro: {
      zh: "「作使徒的保羅（不是由於人，也不是藉著人，乃是藉著耶穌基督，與叫他從死裡復活的父神）和一切與我同在的眾弟兄，寫信給加拉太的各教會。」（1:1-2）加拉太指哪裡（小亞細亞中部的北加拉太，或是包括彼西底的安提阿、以哥念、路司得、特庇在內的南部省份），寫信的時間，以及 2:1 的探訪對應使徒行傳的哪一次，學者有不同看法。",
      en: "“Paul, an apostle (not from men, nor through man, but through Jesus Christ, and God the Father, who raised him from the dead), and all the brothers who are with me, to the assemblies of Galatia” (1:1–2). Where Galatia was (the north of central Asia Minor, or a southern province including Antioch of Pisidia, Iconium, Lystra and Derbe), when it was written, and which visit of Acts 2:1 matches, scholars see differently."
    },
    tip: {
      zh: "加拉太的地理（北或南）、寫作年代，以及 2:1 對應使徒行傳 11 章或 15 章，各有不同主張；這裡不選邊。",
      en: "North or South Galatia, the date, and whether 2:1 matches Acts 11 or 15 are all argued; this does not pick a side."
    },
    related: ["another_gospel", "crucified_with_christ", "all_one_in_christ", "glory_in_the_cross"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "another_gospel", book: "galatians", no: 2, kind: "other", type: "scheme", rarity: 3,
    zh: "另一個福音", en: "A Different Good News",
    tag: { zh: "那並不是福音", en: "There Isn’t Another Good News" },
    role: { zh: "全信的緣由（1:6-10）", en: "The reason for the letter (1:6–10)" },
    ch: [1],
    passages: ["1:6-10"],
    moves: [
      { zh: "這麼快離開", en: "So Quickly Deserting", ref: "1:6",
        dzh: "我希奇你們這麼快離開那藉著基督之恩召你們的，去從別的福音。",
        den: "I marvel that you are so quickly deserting him who called you in the grace of Christ to a different “good news”;" },
      { zh: "與所傳的不同", en: "Other Than What We Preached", ref: "1:8",
        dzh: "但無論是我們，是天上來的使者，若傳福音給你們，與我們所傳給你們的不同，他就應當被咒詛。",
        den: "But even though we, or an angel from heaven, should preach to you any “good news” other than that which we preached to you, let him be cursed." }
    ],
    traits: [
      { k: "strength", zh: "他連自己和天使也不例外（1:8）", en: "He includes himself and even an angel (1:8)" },
      { k: "weakness", zh: "「這麼快」就離開了（1:6）", en: "They left “so quickly” (1:6)" }
    ],
    lesson: {
      zh: "保羅說「那並不是福音」（1:7）：他們聽到的不是福音的另一個版本，而是更改了基督的福音。「被咒詛」的話說了兩次（1:8-9），顯出事情的分量。但他也自問：「我現在是要得人的心呢？還是要得神的心呢？」（1:10）",
      en: "Paul says “there isn’t another good news” (1:7): what they heard is not another version of the gospel but a perversion of the gospel of Christ. The “let him be cursed” is said twice (1:8–9), showing the weight. But he also asks: “am I now seeking the favor of men, or of God?” (1:10)."
    },
    quote: { ref: "1:6",
      zh: "我希奇你們這麼快離開那藉著基督之恩召你們的，去從別的福音",
      en: "I marvel that you are so quickly deserting him who called you in the grace of Christ" },
    keyVerses: ["1:6", "1:7", "1:8", "1:9", "1:10"],
    intro: {
      zh: "「我希奇你們這麼快離開那藉著基督之恩召你們的，去從別的福音。」（1:6）接著的是「那並不是福音，不過有些人攪擾你們，要把基督的福音更改了」（1:7）。「咒詛」原文是 anathema，是把人交給神審判的意思。「攪擾你們的」是誰，書信沒有指名；從 2:4、5:2、6:12 的描述看，他們要求外邦信徒受割禮。",
      en: "“I marvel that you are so quickly deserting him who called you in the grace of Christ to a different ‘good news’” (1:6). Next: “there isn’t another ‘good news.’ Only there are some who trouble you, and want to pervert the Good News of Christ” (1:7). “Cursed” is anathema, meaning handed over to God’s judgment. Who “trouble you” the letter does not name; from 2:4, 5:2 and 6:12 they are pressing Gentile believers to be circumcised."
    },
    tip: {
      zh: "攪擾的人是誰，只能從保羅的回應去推測：一般認為是要求外邦信徒受割禮的猶太基督徒教師，但他們自己的完整立場，我們並沒有第一手的文字。",
      en: "Who the troublers were can be reconstructed only from Paul’s replies: usually Jewish-Christian teachers requiring circumcision, but we have no first-hand text of their own position."
    },
    related: ["paul_to_galatia", "foolish_galatians", "stand_firm_in_freedom", "opposing_peter"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "called_by_revelation", book: "galatians", no: 3, kind: "person", type: "vision", rarity: 4,
    zh: "從耶穌基督啟示來的", en: "Called by Revelation",
    tag: { zh: "既然樂意將他兒子啟示在我心裡", en: "God Was Pleased to Reveal His Son in Me" },
    role: { zh: "保羅的蒙召與早年（1:11-24）", en: "Paul’s call and early years (1:11–24)" },
    ch: [1],
    passages: ["1:11-24"],
    moves: [
      { zh: "不是從人領受的", en: "Not Received from Man", ref: "1:12",
        dzh: "因為我不是從人領受的，也不是人教導我的，乃是從耶穌基督啟示來的。",
        den: "For neither did I receive it from man, nor was I taught it, but it came to me through revelation of Jesus Christ." },
      { zh: "將他兒子啟示在我心裡", en: "To Reveal His Son in Me", ref: "1:15-16",
        dzh: "然而，那把我從母腹裡分別出來、又施恩召我的神，既然樂意將他兒子啟示在我心裡，叫我把他傳在外邦人中",
        den: "Who separated me from my mother’s womb, and called me through his grace, to reveal his Son in me, that I might preach him among the Gentiles" }
    ],
    traits: [
      { k: "strength", zh: "三年後才上耶路撒冷見磯法，同住十五天（1:18）", en: "After three years he went up to Jerusalem to visit Cephas, staying fifteen days (1:18)" },
      { k: "weakness", zh: "從前「極力逼迫殘害神的教會」（1:13）", en: "Formerly “beyond measure I persecuted the assembly of God” (1:13)" }
    ],
    lesson: {
      zh: "保羅強調他的福音不是從人那裡來的，不是為了高抬自己，而是說明這信息的來源是基督自己（1:12）。但他也不是與耶路撒冷切斷：他去見過磯法和主的兄弟雅各（1:18-19），而猶太的教會聽見他的事，也「歸榮耀給神」（1:24）。",
      en: "Paul stresses that his gospel did not come from man, not to exalt himself but to say its source is Christ himself (1:12). But he does not cut himself off from Jerusalem: he visited Cephas and James the Lord’s brother (1:18–19), and the assemblies of Judea, hearing of him, “glorified God in me” (1:24)."
    },
    quote: { ref: "1:12",
      zh: "我不是從人領受的，也不是人教導我的，乃是從耶穌基督啟示來的",
      en: "neither did I receive it from man, nor was I taught it, but it came to me through revelation of Jesus Christ" },
    keyVerses: ["1:11", "1:12", "1:13", "1:14", "1:15", "1:16", "1:17", "1:18", "1:19", "1:23", "1:24"],
    intro: {
      zh: "「弟兄們，我告訴你們，我素來所傳的福音不是出於人的意思。」（1:11）1:13-14 說他從前在猶太教中，為祖宗的遺傳更加熱心，極力逼迫神的教會。1:17 說他沒有去耶路撒冷，「惟獨往阿拉伯去，後又回到大馬士革」；1:18 說「過了三年」，才上去見磯法；1:21 說以後去了敘利亞和基利家。這封信沒有提到大馬士革路上的細節（參使徒行傳 9 章），只說是「啟示」。",
      en: "“But I make known to you, brothers, concerning the Good News which was preached by me, that it is not according to man” (1:11). 1:13–14 says he was in the Jews’ religion, more exceedingly zealous for the traditions of his fathers, and persecuted the assembly of God. 1:17 says he did not go up to Jerusalem “but I went away into Arabia. Then I returned to Damascus”; 1:18 says “after three years” he went up to visit Peter; 1:21 says he then went to Syria and Cilicia. This letter gives none of the Damascus-road details (compare Acts 9), only “revelation.”"
    },
    tip: {
      zh: "「過了三年」從何時算起（蒙召或離開阿拉伯），以及這與使徒行傳 9 章的細節如何對上，有不同看法；保羅在這裡只說他的福音來自啟示。",
      en: "From when the “three years” count (the call, or leaving Arabia) and how this fits the details of Acts 9 are read differently; Paul here says only that his gospel came by revelation."
    },
    related: ["paul_to_galatia", "right_hand_fellowship", "another_gospel", "crucified_with_christ"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "right_hand_fellowship", book: "galatians", no: 4, kind: "other", type: "love", rarity: 3,
    zh: "右手行相交之禮", en: "The Right Hand of Fellowship",
    tag: { zh: "只是願意我們記念窮人", en: "Only: Remember the Poor" },
    role: { zh: "耶路撒冷的會面（2:1-10）", en: "The meeting at Jerusalem (2:1–10)" },
    ch: [2],
    passages: ["2:1-10"],
    moves: [
      { zh: "沒有勉強提多受割禮", en: "Titus Not Compelled", ref: "2:3",
        dzh: "但與我同去的提多，雖是希臘人，也沒有勉強他受割禮；",
        den: "But not even Titus, who was with me, being a Greek, was compelled to be circumcised." },
      { zh: "用右手行相交之禮", en: "The Right Hand of Fellowship", ref: "2:9",
        dzh: "那稱為教會柱石的雅各、磯法、約翰，就向我和巴拿巴用右手行相交之禮，叫我們往外邦人那裡去，他們往受割禮的人那裡去。",
        den: "James, Cephas and John, reputed pillars, gave Barnabas and me the right hand of fellowship: we to the Gentiles, they to the circumcision." }
    ],
    traits: [
      { k: "strength", zh: "只要求「記念窮人」，這也是保羅本來熱心的（2:10）", en: "They asked only to “remember the poor,” which Paul was already eager to do (2:10)" },
      { k: "weakness", zh: "有「偷著引進來的假弟兄」窺探他們的自由（2:4）", en: "“False brothers secretly brought in” to spy out their liberty (2:4)" }
    ],
    lesson: {
      zh: "提多是希臘人，保羅帶著他上耶路撒冷，沒有勉強他受割禮；這是福音「真理」的問題（2:4-5）。「有名望的」並沒有在福音上加增他甚麼（2:6），反而認出各人的使命：保羅向外邦人，彼得向受割禮的人（2:7-9），一同「相交」。",
      en: "Titus was a Greek, and Paul took him to Jerusalem without compelling circumcision: a matter of “the truth of the Good News” (2:4–5). Those “reputed to be important” added nothing to him (2:6), but recognized each one’s mission: Paul to the Gentiles, Peter to the circumcision (2:7–9), in fellowship."
    },
    quote: { ref: "2:9",
      zh: "向我和巴拿巴用右手行相交之禮",
      en: "gave to me and Barnabas the right hand of fellowship" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4", "2:5", "2:6", "2:7", "2:9", "2:10"],
    intro: {
      zh: "「過了十四年，我同巴拿巴又上耶路撒冷去，並帶著提多同去。」（2:1）他說是「奉啟示上去的」（2:2），私下向有名望的人陳說他在外邦人中所傳的福音。2:6：「神不以外貌取人。」2:9 的「柱石」是雅各（主的兄弟）、磯法和約翰。這裡的分工（外邦人／受割禮的人）是一個大致的描述，不是地理的劃分。",
      en: "“Then after a period of fourteen years I went up again to Jerusalem with Barnabas, taking Titus also with me” (2:1). He says he went “by revelation” (2:2) and laid before the respected ones, privately, the Good News he preaches among the Gentiles. 2:6: “God doesn’t show partiality to man.” The “pillars” of 2:9 are James (the Lord’s brother), Cephas and John. The division (Gentiles / circumcision) is a rough description of emphasis, not a geographic split."
    },
    tip: {
      zh: "2:1 的探訪對應使徒行傳的哪一次（徒 11:30 的救濟之行，或徒 15 章的會議），學者有不同主張，也影響加拉太書的寫作年代。",
      en: "Which visit of Acts 2:1 matches (the famine visit of Acts 11:30, or the council of Acts 15) scholars argue differently, and it affects the date of the letter."
    },
    related: ["opposing_peter", "called_by_revelation", "paul_to_galatia", "all_one_in_christ"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "opposing_peter", book: "galatians", no: 5, kind: "person", type: "scheme", rarity: 4,
    zh: "在安提阿抵擋彼得", en: "Opposing Peter at Antioch",
    tag: { zh: "與福音的真理不合", en: "Not in Step with the Truth of the Gospel" },
    role: { zh: "桌邊的衝突（2:11-14）", en: "A conflict at the table (2:11–14)" },
    ch: [2],
    passages: ["2:11-14"],
    moves: [
      { zh: "當面抵擋他", en: "Resisted to His Face", ref: "2:11",
        dzh: "後來，磯法到了安提阿；因他有可責之處，我就當面抵擋他。",
        den: "But when Peter came to Antioch, I resisted him to his face, because he stood condemned." },
      { zh: "因怕奉割禮的人", en: "Fearing the Circumcision Party", ref: "2:12",
        dzh: "從雅各那裡來的人未到以先，他和外邦人一同吃飯，及至他們來到，他因怕奉割禮的人，就退去與外邦人隔開了。",
        den: "For before some people came from James, he ate with the Gentiles. But when they came, he drew back and separated himself, fearing those who were of the circumcision." }
    ],
    traits: [
      { k: "strength", zh: "保羅不是爭自己的面子，而是為「福音的真理」（2:14）", en: "Paul contends not for himself but for “the truth of the Good News” (2:14)" },
      { k: "weakness", zh: "「甚至連巴拿巴也隨夥裝假」（2:13）", en: "“Even Barnabas was carried away with their hypocrisy” (2:13)" }
    ],
    lesson: {
      zh: "彼得的問題不是教義，而是行為：他因為怕人，在餐桌上退去，把外邦信徒隔開（2:12）。保羅看出這與福音的真理不合（2:14）。同一張桌子吃飯，本身就是福音的表現。保羅沒有記下彼得的回應，這事怎樣收場，書信沒有說。",
      en: "Peter’s problem was not doctrine but conduct: out of fear he drew back at the table and separated from the Gentile believers (2:12). Paul saw it as not in step with the truth of the Good News (2:14). Eating at the same table was itself an expression of the gospel. Paul does not record Peter’s reply, and the letter does not say how it ended."
    },
    quote: { ref: "2:11",
      zh: "磯法到了安提阿；因他有可責之處，我就當面抵擋他",
      en: "when Peter came to Antioch, I resisted him to his face" },
    keyVerses: ["2:11", "2:12", "2:13", "2:14"],
    intro: {
      zh: "「後來，磯法到了安提阿；因他有可責之處，我就當面抵擋他。」（2:11）「從雅各那裡來的人」是誰、他們為甚麼使彼得害怕，書信沒有說明（「奉割禮的人」2:12）。2:14 保羅在眾人面前對彼得說：「你既是猶太人，若隨外邦人行事，不隨猶太人行事，怎麼還勉強外邦人隨猶太人呢？」",
      en: "“But when Peter came to Antioch, I resisted him to his face, because he stood condemned” (2:11). Who “some people… from James” were and why they made Peter afraid the letter does not explain (“those who were of the circumcision,” 2:12). In 2:14 Paul says to Peter before them all: “If you, being a Jew, live as the Gentiles do, and not as the Jews do, why do you compel the Gentiles to live as the Jews do?”"
    },
    tip: {
      zh: "保羅對彼得說的話，在哪裡結束：和合本把引號收在 2:14，有的譯本讓引號延續到 2:21；2:15-21 是對彼得說的，還是保羅對加拉太人的陳述，解經家看法不同。",
      en: "Where Paul’s words to Peter end: the 和合本 closes the quotation at 2:14, while other versions run it to 2:21; whether 2:15–21 is spoken to Peter or Paul’s statement to the Galatians interpreters see differently."
    },
    related: ["crucified_with_christ", "right_hand_fellowship", "all_one_in_christ", "another_gospel"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "crucified_with_christ", book: "galatians", no: 6, kind: "other", type: "faith", rarity: 5,
    zh: "與基督同釘十字架", en: "Crucified with Christ",
    tag: { zh: "現在活著的不再是我，乃是基督在我裡面活著", en: "It Is No Longer I That Live, but Christ Lives in Me" },
    role: { zh: "因信稱義的核心（2:15-21）", en: "The heart of justification by faith (2:15–21)" },
    ch: [2],
    passages: ["2:15-21"],
    moves: [
      { zh: "因信基督稱義", en: "Justified by Faith in Christ", ref: "2:16",
        dzh: "人稱義不是因行律法，乃是因信耶穌基督",
        den: "A man is not justified by the works of the law but through faith in Jesus Christ" },
      { zh: "基督在我裡面活著", en: "Christ Lives in Me", ref: "2:20",
        dzh: "我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著。",
        den: "I have been crucified with Christ, and it is no longer I that live, but Christ lives in me." }
    ],
    traits: [
      { k: "strength", zh: "「他是愛我，為我捨己」（2:20）", en: "“Who loved me, and gave himself up for me” (2:20)" },
      { k: "identity", zh: "與基督的連合：死了，又在他裡面活著（2:19-20）", en: "Union with Christ: dying, and living in him (2:19–20)" }
    ],
    lesson: {
      zh: "這幾節是整封信的核心：人稱義，不是因行律法，而是因信基督（2:16）。保羅不是說律法是壞的，而是說他「因律法，就向律法死了，叫我可以向神活著」（2:19）。他現在的生命是「因信神的兒子而活；他是愛我，為我捨己」（2:20）。若義是藉著律法，基督就是徒然死了（2:21）。",
      en: "These verses are the letter’s core: a person is justified not by works of the law but through faith in Christ (2:16). Paul does not say the law is bad, but that “through the law, died to the law, that I might live to God” (2:19). His life now is lived “by faith in the Son of God, who loved me, and gave himself up for me” (2:20). If righteousness comes through the law, Christ died for nothing (2:21)."
    },
    quote: { ref: "2:20",
      zh: "我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著",
      en: "I have been crucified with Christ, and it is no longer I that live, but Christ lives in me." },
    keyVerses: ["2:15", "2:16", "2:17", "2:18", "2:19", "2:20", "2:21"],
    intro: {
      zh: "「我們這生來的猶太人，不是外邦的罪人；既知道人稱義不是因行律法，乃是因信耶穌基督」（2:15-16）。「稱義」是被神宣告為義。2:17 提出一個反對：求在基督裡稱義，卻仍是罪人，那基督是叫人犯罪的嗎？保羅說「斷乎不是！」2:20 的「我已經與基督同釘十字架」，是保羅書信中最個人化的一句。",
      en: "“We, being Jews by nature, and not Gentile sinners, yet knowing that a man is not justified by the works of the law but through faith in Jesus Christ” (2:15–16). “Justified” means declared righteous by God. 2:17 raises an objection: if seeking to be justified in Christ we are found sinners, is Christ a servant of sin? Paul: “Certainly not!” “I have been crucified with Christ” (2:20) is one of the most personal lines in Paul’s letters."
    },
    tip: {
      zh: "2:16「信耶穌基督」原文可譯為「信基督」或「基督的信實」，學者有不同主張；「行律法」指全部律法的行為，還是指割禮、潔食、安息日這類劃分界線的行為，也有不同看法。",
      en: "“Faith in Jesus Christ” (2:16) can also be rendered “the faithfulness of Jesus Christ,” and scholars argue both; “works of the law” as all law-keeping or as boundary-marking practices (circumcision, food laws, Sabbath) is also debated."
    },
    related: ["opposing_peter", "glory_in_the_cross", "abraham_believed", "walk_by_the_spirit"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "foolish_galatians", book: "galatians", no: 7, kind: "other", type: "wisdom", rarity: 3,
    zh: "無知的加拉太人", en: "Foolish Galatians",
    tag: { zh: "你們既靠聖靈入門，如今還靠肉身成全嗎？", en: "Having Begun in the Spirit, Now Completed in the Flesh?" },
    role: { zh: "訴諸他們自己的經歷（3:1-5）", en: "Appealing to their own experience (3:1–5)" },
    ch: [3],
    passages: ["3:1-5"],
    moves: [
      { zh: "活畫在你們眼前", en: "Portrayed Before Your Eyes", ref: "3:1",
        dzh: "無知的加拉太人哪，耶穌基督釘十字架，已經活畫在你們眼前，誰又迷惑了你們呢？",
        den: "Foolish Galatians, who has bewitched you not to obey the truth, before whose eyes Jesus Christ was openly portrayed among you as crucified?" },
      { zh: "靠聖靈入門", en: "Begun in the Spirit", ref: "3:3",
        dzh: "你們既靠聖靈入門，如今還靠肉身成全嗎？你們是這樣的無知嗎？",
        den: "Are you so foolish? Having begun in the Spirit, are you now completed in the flesh?" }
    ],
    traits: [
      { k: "strength", zh: "他問的是他們自己的經驗（3:2、5）", en: "He asks about their own experience (3:2, 5)" },
      { k: "weakness", zh: "「你們受苦如此之多，都是徒然的嗎？」（3:4）", en: "“Did you suffer so many things in vain?” (3:4)" }
    ],
    lesson: {
      zh: "保羅沒有先講論證，而是問問題：你們受了聖靈，是因行律法，還是因聽信福音？（3:2）基督徒的生命，開始和繼續是同一個方式：因信。若他們靠聖靈開始，就不能靠自己的努力來完成（3:3）。",
      en: "Paul does not start with argument but with questions: did you receive the Spirit by works of the law, or by hearing of faith? (3:2). The Christian life begins and continues the same way: by faith. If they began in the Spirit, they cannot complete it by their own effort (3:3)."
    },
    quote: { ref: "3:2",
      zh: "你們受了聖靈，是因行律法呢？是因聽信福音呢",
      en: "Did you receive the Spirit by the works of the law, or by hearing of faith?" },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:5"],
    intro: {
      zh: "「無知的加拉太人哪，耶穌基督釘十字架，已經活畫在你們眼前，誰又迷惑了你們呢？」（3:1）「迷惑」原文有「用邪眼迷住」的意思。3:5：「那賜給你們聖靈，又在你們中間行異能的，是因你們行律法呢？是因你們聽信福音呢？」「受苦」（3:4）可能指逼迫，也可能指他們經歷的許多事。",
      en: "“Foolish Galatians, who has bewitched you not to obey the truth, before whose eyes Jesus Christ was openly portrayed among you as crucified?” (3:1). “Bewitched” carries the sense of casting an evil eye. 3:5: “He therefore who supplies the Spirit to you, and does miracles among you, does he do it by the works of the law, or by hearing of faith?” “Suffer” (3:4) may mean persecution or the many things they experienced."
    },
    tip: {
      zh: "3:4 的「受苦」原文可譯為「受苦」或「經歷」；是指他們受的逼迫，還是指他們所領受的恩惠，譯本不同。",
      en: "“Suffered” (3:4) can be rendered “suffered” or “experienced”: whether it means persecution they endured or blessings they received, versions differ."
    },
    related: ["abraham_believed", "another_gospel", "walk_by_the_spirit", "paul_to_galatia"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "abraham_believed", book: "galatians", no: 8, kind: "person", type: "faith", rarity: 4,
    zh: "亞伯拉罕信神", en: "Abraham Believed God",
    tag: { zh: "萬國都必因你得福", en: "In You All the Nations Will Be Blessed" },
    role: { zh: "信心的祖宗（3:6-14）", en: "The father of faith (3:6–14)" },
    ch: [3],
    passages: ["3:6-14"],
    moves: [
      { zh: "萬國都必因你得福", en: "All the Nations Blessed", ref: "3:8",
        dzh: "聖經既然預先看明，神要叫外邦人因信稱義，就早已傳福音給亞伯拉罕，說：「萬國都必因你得福。」",
        den: "The Scripture, foreseeing that God would justify the Gentiles by faith, preached the Good News beforehand to Abraham: “In you all the nations will be blessed.”" },
      { zh: "贖出我們脫離咒詛", en: "Redeemed from the Curse", ref: "3:13",
        dzh: "就贖出我們脫離律法的咒詛；因為經上記著：「凡掛在木頭上都是被咒詛的。」",
        den: "Christ redeemed us from the curse of the law, having become a curse for us. For it is written, “Cursed is everyone who hangs on a tree,”" }
    ],
    traits: [
      { k: "strength", zh: "「那以信為本的人，就是亞伯拉罕的子孫」（3:7）", en: "“Those who are of faith, the same are children of Abraham” (3:7)" },
      { k: "weakness", zh: "「凡以行律法為本的，都是被咒詛的」（3:10）", en: "“As many as are of the works of the law are under a curse” (3:10)" }
    ],
    lesson: {
      zh: "保羅回到創世記：亞伯拉罕「信神，這就算為他的義」（3:6），而且神早已預先對他說「萬國都必因你得福」（3:8）。所以外邦人不需要先成為猶太人才能得福。基督「為我們成了咒詛」（3:13），好叫亞伯拉罕的福臨到外邦人，並使我們「因信得著所應許的聖靈」（3:14）。",
      en: "Paul returns to Genesis: Abraham “believed God, and it was counted to him for righteousness” (3:6), and God long beforehand said “In you all the nations will be blessed” (3:8). So Gentiles need not first become Jews to be blessed. Christ “became a curse for us” (3:13) so that Abraham’s blessing might come to the Gentiles and that we might “receive the promise of the Spirit through faith” (3:14)."
    },
    quote: { ref: "3:6",
      zh: "亞伯拉罕信神，這就算為他的義",
      en: "believed God, and it was counted to him for righteousness" },
    keyVerses: ["3:6", "3:7", "3:8", "3:9", "3:10", "3:11", "3:12", "3:13", "3:14"],
    intro: {
      zh: "3:6-14 一連引用舊約：創世記 15:6（亞伯拉罕信神）、創世記 12:3（萬國得福）、申命記 27:26（不照律法行的被咒詛，3:10）、哈巴谷書 2:4（義人必因信得生，3:11）、利未記 18:5（行這些事的就必因此活著，3:12）、申命記 21:23（凡掛在木頭上的被咒詛，3:13）。保羅用這些經文把「律法下的咒詛」和基督的死連在一起。",
      en: "3:6–14 strings Old Testament citations: Genesis 15:6 (Abraham believed God), Genesis 12:3 (nations blessed), Deuteronomy 27:26 (cursed who does not keep the law, 3:10), Habakkuk 2:4 (the righteous live by faith, 3:11), Leviticus 18:5 (the one who does them will live, 3:12), Deuteronomy 21:23 (cursed who hangs on a tree, 3:13). Paul uses them to link “the curse of the law” with Christ’s death."
    },
    tip: {
      zh: "3:10 的「被咒詛」如何理解，有不同讀法：有人認為是說沒有人能完全遵行律法，有人認為是指以色列在律法之下所經歷的被擄與咒詛；這裡不選邊。",
      en: "How “under a curse” (3:10) is read varies: that no one keeps the law fully, or that it refers to Israel’s experience of exile and curse under the law; this does not pick."
    },
    related: ["crucified_with_christ", "tutor_to_christ", "all_one_in_christ", "foolish_galatians"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "tutor_to_christ", book: "galatians", no: 9, kind: "other", type: "wisdom", rarity: 4,
    zh: "訓蒙的師傅", en: "The Law as Tutor",
    tag: { zh: "引我們到基督那裡", en: "To Bring Us to Christ" },
    role: { zh: "應許、律法與基督（3:15-25）", en: "Promise, law and Christ (3:15–25)" },
    ch: [3],
    passages: ["3:15-25"],
    moves: [
      { zh: "憑著應許", en: "By Promise", ref: "3:18",
        dzh: "因為承受產業，若本乎律法，就不本乎應許；但神是憑著應許把產業賜給亞伯拉罕。",
        den: "For if the inheritance is of the law, it is no more of promise; but God has granted it to Abraham by promise." },
      { zh: "律法是師傅", en: "The Law Our Tutor", ref: "3:24",
        dzh: "這樣，律法是我們訓蒙的師傅，引我們到基督那裡，使我們因信稱義。",
        den: "So that the law has become our tutor to bring us to Christ, that we might be justified by faith." }
    ],
    traits: [
      { k: "strength", zh: "律法並不與神的應許反對（3:21）", en: "The law is not against the promises of God (3:21)" },
      { k: "identity", zh: "「師傅」是希臘羅馬家庭中看管孩子、帶他去學校的人（3:24）", en: "The “tutor” was the household attendant who supervised a child and took him to school (3:24)" }
    ],
    lesson: {
      zh: "保羅按時間排：應許先給亞伯拉罕，四百三十年後才有律法，所以律法不能廢掉應許（3:17）。律法是「為過犯添上的」（3:19），看守我們，直到信心來到（3:23）；信心來了，我們「就不在師傅的手下了」（3:25）。律法不是敵人，也不是終點。",
      en: "Paul follows the timeline: the promise came first to Abraham, and the law only 430 years later, so it cannot annul the promise (3:17). The law was “added because of transgressions” (3:19), keeping us in custody until faith came (3:23); now that faith has come, “we are no longer under a tutor” (3:25). The law is neither the enemy nor the end."
    },
    quote: { ref: "3:24",
      zh: "律法是我們訓蒙的師傅，引我們到基督那裡",
      en: "the law has become our tutor to bring us to Christ" },
    keyVerses: ["3:15", "3:16", "3:17", "3:18", "3:19", "3:21", "3:22", "3:23", "3:24", "3:25"],
    intro: {
      zh: "「弟兄們，我且照著人的常話說：雖然是人的文約，若已經立定了，就沒有能廢棄或加增的。」（3:15）3:16 說應許是對亞伯拉罕「和他子孫」說的，「子孫」是單數，指基督。3:19：「律法是為甚麼有的呢？原是為過犯添上的……並且是藉天使經中保之手設立的。」3:22 說「聖經把眾人都圈在罪裡，使所應許的福因信耶穌基督，歸給那信的人」。",
      en: "“Brothers, speaking of human terms, though it is only a man’s covenant, yet when it has been confirmed, no one makes it void, or adds to it” (3:15). 3:16 says the promises were spoken to Abraham “and to his offspring,” in the singular, which is Christ. 3:19: “Then why is there the law? It was added because of transgressions… ordained through angels by the hand of a mediator.” 3:22 says the Scriptures imprisoned all under sin, “that the promise by faith in Jesus Christ might be given to those who believe.”"
    },
    tip: {
      zh: "3:19-20「藉天使經中保之手設立」「中保本不是為一面作的」是新約最難解的經文之一，有很多種解釋；「師傅」也可譯為「監護人」「導師」，強調管教還是引導，各譯本不同。",
      en: "3:19–20 (“through angels by the hand of a mediator… a mediator is not between one”) is among the New Testament’s hardest texts, with many explanations; “tutor” can also be “guardian” or “custodian,” stressing discipline or guidance, as versions differ."
    },
    related: ["abraham_believed", "all_one_in_christ", "abba_father", "hagar_and_sarah"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "all_one_in_christ", book: "galatians", no: 10, kind: "other", type: "love", rarity: 5,
    zh: "在基督耶穌裡都成為一了", en: "All One in Christ Jesus",
    tag: { zh: "披戴基督", en: "Clothed with Christ" },
    role: { zh: "神的兒女，亞伯拉罕的後裔（3:26-29）", en: "Children of God, Abraham’s offspring (3:26–29)" },
    ch: [3],
    passages: ["3:26-29"],
    moves: [
      { zh: "披戴基督", en: "Put On Christ", ref: "3:26-27",
        dzh: "你們因信基督耶穌都是神的兒子。你們受洗歸入基督的都是披戴基督了。",
        den: "For you are all children of God, through faith in Christ Jesus. For as many of you as were baptized into Christ have put on Christ." },
      { zh: "都成為一了", en: "All One", ref: "3:28",
        dzh: "並不分猶太人、希臘人，自主的、為奴的，或男或女，因為你們在基督耶穌裡都成為一了。",
        den: "There is neither Jew nor Greek, there is neither slave nor free man, there is neither male nor female; for you are all one in Christ Jesus." }
    ],
    traits: [
      { k: "strength", zh: "三組在古代世界最深的分別，都不再決定誰屬於神（3:28）", en: "Three of the ancient world’s deepest divisions no longer decide who belongs to God (3:28)" },
      { k: "identity", zh: "「披戴基督」像穿上一件新衣（3:27）", en: "“Put on Christ” like putting on a new garment (3:27)" }
    ],
    lesson: {
      zh: "猶太人與希臘人（民族）、為奴的與自主的（社會）、男與女（性別），是古代世界最基本的分別。保羅說，在基督裡，這些不再決定一個人在神面前的地位：「你們在基督耶穌裡都成為一了。」這不是說差異消失，而是說它們不再成為誰高誰低、誰屬於誰不屬於的根據。",
      en: "Jew and Greek (ethnic), slave and free (social), male and female (sexual) were the ancient world’s basic divisions. Paul says that in Christ these no longer decide anyone’s standing before God: “you are all one in Christ Jesus.” This does not mean differences vanish, but that they are no longer the ground for who ranks higher or who belongs."
    },
    quote: { ref: "3:28",
      zh: "你們在基督耶穌裡都成為一了",
      en: "you are all one in Christ Jesus" },
    keyVerses: ["3:26", "3:27", "3:28", "3:29"],
    intro: {
      zh: "「所以，你們因信基督耶穌都是神的兒子。」（3:26）3:27「受洗歸入基督的都是披戴基督了」，3:28 三組「並不分」，3:29：「你們既屬乎基督，就是亞伯拉罕的後裔，是照著應許承受產業的了。」這段回答了前文的問題：誰是亞伯拉罕的子孫？不是靠血統或割禮，而是「屬乎基督」。",
      en: "“For you are all children of God, through faith in Christ Jesus” (3:26). 3:27, “as many of you as were baptized into Christ have put on Christ”; 3:28, the three “neither… nor”; 3:29: “If you are Christ’s, then you are Abraham’s offspring and heirs according to promise.” The passage answers the question running through the chapter: who are Abraham’s children? Not by descent or circumcision, but by belonging to Christ."
    },
    tip: {
      zh: "3:28「不分男女」如何落實在教會的事奉與婚姻上，各傳統有不同看法（參哥林多前書 11、14 章）；多數傳統都同意，在得救的地位上沒有分別。",
      en: "How “neither male nor female” (3:28) is worked out in church ministry and marriage traditions see differently (compare 1 Corinthians 11, 14); most agree there is no distinction in standing for salvation."
    },
    related: ["abba_father", "tutor_to_christ", "stand_firm_in_freedom", "walk_by_the_spirit"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "abba_father", book: "galatians", no: 11, kind: "other", type: "heaven", rarity: 5,
    zh: "阿爸！父！", en: "Abba, Father",
    tag: { zh: "你不是奴僕，乃是兒子了", en: "No Longer a Slave, but a Son" },
    role: { zh: "從奴僕到兒子（4:1-7）", en: "From slave to son (4:1–7)" },
    ch: [4],
    passages: ["4:1-7"],
    moves: [
      { zh: "時候滿足", en: "The Fullness of Time", ref: "4:4-5",
        dzh: "及至時候滿足，神就差遣他的兒子，為女子所生，且生在律法以下，要把律法以下的人贖出來，叫我們得著兒子的名分。",
        den: "When the fullness of time came, God sent his Son, born to a woman, born under the law, to redeem those under the law, that we might receive adoption as children." },
      { zh: "呼叫「阿爸！父！」", en: "Crying “Abba, Father!”", ref: "4:6",
        dzh: "你們既為兒子，神就差他兒子的靈進入你們的心，呼叫：「阿爸！父！」",
        den: "Because you are children, God sent out the Spirit of his Son into your hearts, crying, “Abba, Father!”" }
    ],
    traits: [
      { k: "strength", zh: "「既是兒子，就靠著神為後嗣」（4:7）", en: "“If a son, then an heir of God through Christ” (4:7)" },
      { k: "weakness", zh: "為孩童的時候「與奴僕毫無分別」（4:1）", en: "As a child, “no different from a bondservant” (4:1)" }
    ],
    lesson: {
      zh: "保羅用一個家庭的比方：繼承人還是孩童時，與奴僕沒有分別，要等父親預定的時候（4:1-2）。基督來了，在「時候滿足」時，贖出律法以下的人，使我們得著兒子的名分。證據是：神差他兒子的靈進入我們的心，叫我們呼叫「阿爸！父！」——一個孩子對父親親暱的稱呼。",
      en: "Paul uses a household image: while the heir is a child he is no different from a slave, until the day appointed by the father (4:1–2). Christ came “when the fullness of the time came,” redeeming those under the law so we might receive adoption. The evidence: God sent the Spirit of his Son into our hearts, crying “Abba, Father!” — a child’s intimate word for a father."
    },
    quote: { ref: "4:7",
      zh: "從此以後，你不是奴僕，乃是兒子了；既是兒子，就靠著神為後嗣",
      en: "you are no longer a bondservant, but a son; and if a son, then an heir of God through Christ" },
    keyVerses: ["4:1", "4:3", "4:4", "4:5", "4:6", "4:7"],
    intro: {
      zh: "「我說那承受產業的，雖然是全業的主人，但為孩童的時候卻與奴僕毫無分別。」（4:1）4:3 說我們為孩童的時候「受管於世俗小學之下」，4:4-5 說「及至時候滿足，神就差遣他的兒子」，「叫我們得著兒子的名分」（兒子的名分，adoption）。「阿爸」是亞蘭語「父親」，羅馬書 8:15 也有同樣的呼叫。4:7 結論是奴僕變成兒子，兒子成為後嗣。",
      en: "“But I say that so long as the heir is a child, he is no different from a bondservant, though he is lord of all” (4:1). 4:3 says that as children we were held in bondage “under the elemental principles of the world”; 4:4–5, “when the fullness of the time came, God sent out his Son… that we might receive the adoption of children.” “Abba” is Aramaic for “father,” and Romans 8:15 has the same cry. 4:7 concludes: slave becomes son, and son an heir."
    },
    tip: {
      zh: "4:3、9 的「世俗小學」（stoicheia）指甚麼，有多種看法：世界的基本原理、元素、靈界勢力，或猶太與外邦的宗教體系，各譯本的譯法不同。",
      en: "What the “elemental principles” (stoicheia) of 4:3, 9 are is read many ways: the world’s basic principles, elements, spiritual powers, or Jewish and pagan religious systems; versions translate differently."
    },
    related: ["tutor_to_christ", "all_one_in_christ", "paul_in_labor", "hagar_and_sarah"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_in_labor", book: "galatians", no: 12, kind: "person", type: "love", rarity: 3,
    zh: "我再受生產之苦", en: "Paul in Labor for the Galatians",
    tag: { zh: "直等到基督成形在你們心裡", en: "Until Christ Is Formed in You" },
    role: { zh: "保羅的懇求（4:8-20）", en: "Paul’s personal appeal (4:8–20)" },
    ch: [4],
    passages: ["4:8-20"],
    moves: [
      { zh: "剜出眼睛給我", en: "Plucked Out Your Eyes", ref: "4:15",
        dzh: "你們當日所誇的福氣在哪裡呢？那時你們若能行，就是把自己的眼睛剜出來給我，也都情願。",
        den: "What was the blessing you enjoyed? For I testify to you that, if possible, you would have plucked out your eyes and given them to me." },
      { zh: "再受生產之苦", en: "In Travail Again", ref: "4:19",
        dzh: "我小子啊，我為你們再受生產之苦，直等到基督成形在你們心裡。",
        den: "My little children, of whom I am again in travail until Christ is formed in you—" }
    ],
    traits: [
      { k: "strength", zh: "「我巴不得現今在你們那裡，改換口氣」（4:20）", en: "“I could wish to be present with you now, and to change my tone” (4:20)" },
      { k: "weakness", zh: "他第一次傳福音是「因為身體有疾病」（4:13）", en: "He first preached to them “because of weakness in the flesh” (4:13)" }
    ],
    lesson: {
      zh: "論證到這裡，保羅突然轉成個人的語氣：你們還記得嗎？我在軟弱中來到你們那裡，你們把我當作神的使者接待（4:13-14）。「我將真理告訴你們，就成了你們的仇敵嗎？」（4:16）他的目的不是贏得辯論，而是「基督成形在你們心裡」（4:19）——像母親生產的痛苦。",
      en: "At this point in the argument Paul suddenly turns personal: do you remember? I came to you in weakness and you received me as an angel of God (4:13–14). “Have I become your enemy by telling you the truth?” (4:16). His aim is not winning a debate but “Christ… formed in you” (4:19) — the pain of a mother in labor."
    },
    quote: { ref: "4:19",
      zh: "我為你們再受生產之苦，直等到基督成形在你們心裡",
      en: "of whom I am again in travail until Christ is formed in you" },
    keyVerses: ["4:9", "4:10", "4:11", "4:12", "4:13", "4:14", "4:15", "4:16", "4:17", "4:19", "4:20"],
    intro: {
      zh: "4:9-10：「怎麼還要歸回那懦弱無用的小學，情願再給他作奴僕呢？你們謹守日子、月份、節期、年份。」4:12：「弟兄們，我勸你們要像我一樣，因為我也像你們一樣。」4:17 說那些人「熱心待你們，卻不是好意，是要離間你們」。4:19 他稱他們「我小子」，用生產的苦楚比喻自己的掛念。",
      en: "4:9–10: “why do you turn back again to the weak and miserable elemental principles, to which you desire to be in bondage all over again? You observe days, months, seasons, and years.” 4:12: “I beg you, brothers, become as I am, for I also have become as you are.” 4:17 says those people “zealously seek you in no good way… they desire to alienate you.” In 4:19 he calls them “my little children” and likens his concern to the pangs of labor."
    },
    tip: {
      zh: "「身體有疾病」（4:13）是甚麼病，經文沒有說；「剜出眼睛」（4:15）是否暗示眼疾，與 6:11 的「大字」是否有關，都只是推測。",
      en: "What “weakness in the flesh” (4:13) was the text does not say; whether “plucked out your eyes” (4:15) hints at an eye problem, and any link with the “large letters” of 6:11, is speculation."
    },
    related: ["abba_father", "foolish_galatians", "hagar_and_sarah", "glory_in_the_cross"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "hagar_and_sarah", book: "galatians", no: 13, kind: "person", type: "vision", rarity: 3,
    zh: "兩個婦人，兩個約", en: "Hagar and Sarah, Two Covenants",
    tag: { zh: "我們不是使女的兒女，乃是自主婦人的兒女", en: "We Are Children of the Free Woman" },
    role: { zh: "以撒與以實瑪利的比方（4:21-31）", en: "The allegory of Isaac and Ishmael (4:21–31)" },
    ch: [4],
    passages: ["4:21-31"],
    moves: [
      { zh: "這都是比方", en: "An Allegory", ref: "4:24",
        dzh: "這都是比方：那兩個婦人就是兩約。一約是出於西奈山，生子為奴，乃是夏甲。",
        den: "These things contain an allegory, for these are two covenants. One is from Mount Sinai, bearing children to bondage, which is Hagar." },
      { zh: "憑著應許作兒女", en: "Children of Promise", ref: "4:28",
        dzh: "弟兄們，我們是憑著應許作兒女，如同以撒一樣。",
        den: "Now we, brothers, as Isaac was, are children of promise." }
    ],
    traits: [
      { k: "strength", zh: "引用以賽亞書 54:1，說「不生養的，你要歡樂」（4:27）", en: "Quotes Isaiah 54:1, “Rejoice, you barren who don’t bear” (4:27)" },
      { k: "identity", zh: "「那在上的耶路撒冷是自主的，她是我們的母」（4:26）", en: "“The Jerusalem that is above is free, which is the mother of us all” (4:26)" }
    ],
    lesson: {
      zh: "保羅用創世記 16、21 章的故事作「比方」：夏甲的兒子是「按著血氣生的」，撒拉的兒子是「憑著應許生的」。他把兩個婦人當作兩個約，兩座城：生子為奴的現在的耶路撒冷，與自主的在上的耶路撒冷。重點是兩種生命的來源：血氣，或應許。",
      en: "Paul uses the stories of Genesis 16 and 21 as an “allegory”: Hagar’s son was “born according to the flesh,” Sarah’s “through promise.” He takes the two women as two covenants and two cities: the present Jerusalem in bondage, and the Jerusalem above that is free. The point is the two sources of life: flesh, or promise."
    },
    quote: { ref: "4:31",
      zh: "我們不是使女的兒女，乃是自主婦人的兒女了",
      en: "we are not children of a servant, but of the free woman" },
    keyVerses: ["4:21", "4:22", "4:23", "4:24", "4:25", "4:26", "4:27", "4:28", "4:30", "4:31"],
    intro: {
      zh: "「你們這願意在律法以下的人，請告訴我，你們豈沒有聽見律法嗎？」（4:21）4:24-26 把夏甲與西奈山、現在的耶路撒冷連在一起，把撒拉與「在上的耶路撒冷」連在一起。4:29 說「按著血氣生的逼迫了那按著聖靈生的，現在也是這樣」。4:30 引用創世記 21:10：「把使女和她兒子趕出去！」這一段是加拉太書最難讀的部分之一。",
      en: "“Tell me, you that desire to be under the law, don’t you listen to the law?” (4:21). 4:24–26 links Hagar with Mount Sinai and the present Jerusalem, and Sarah with “the Jerusalem that is above.” 4:29 says “he who was born according to the flesh persecuted him who was born according to the Spirit, so also it is now.” 4:30 quotes Genesis 21:10: “Throw out the servant and her son.” This is one of the hardest sections of Galatians."
    },
    tip: {
      zh: "保羅自己說這是「比方」（allegory，4:24）；把夏甲與現在的耶路撒冷相連，常被誤用來批評猶太人，多數注釋書強調它的重點是「憑應許」與「憑血氣」的對比，不是種族。",
      en: "Paul himself says it is an “allegory” (4:24); linking Hagar with the present Jerusalem has often been misused against Jews, and most commentaries stress its point is the contrast of “promise” and “flesh,” not ethnicity."
    },
    related: ["abba_father", "stand_firm_in_freedom", "abraham_believed", "paul_in_labor"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "stand_firm_in_freedom", book: "galatians", no: 14, kind: "other", type: "power", rarity: 4,
    zh: "站立得穩，不要再被奴僕的軛挾制", en: "Stand Firm in Freedom",
    tag: { zh: "惟獨使人生發仁愛的信心才有功效", en: "Faith Working Through Love" },
    role: { zh: "自由與愛（5:1-15）", en: "Freedom and love (5:1–15)" },
    ch: [5],
    passages: ["5:1-15"],
    moves: [
      { zh: "站立得穩", en: "Stand Firm", ref: "5:1",
        dzh: "基督釋放了我們，叫我們得以自由。所以要站立得穩，不要再被奴僕的軛挾制。",
        den: "Stand firm therefore in the liberty by which Christ has made us free, and don’t be entangled again with a yoke of bondage." },
      { zh: "用愛心互相服事", en: "Through Love, Serve One Another", ref: "5:13",
        dzh: "你們蒙召是要得自由，只是不可將你們的自由當作放縱情慾的機會，總要用愛心互相服事。",
        den: "You, brothers, were called for freedom. Only don’t use your freedom for gain to the flesh, but through love be servants to one another." }
    ],
    traits: [
      { k: "strength", zh: "「全律法都包在『愛人如己』這一句話之內了」（5:14）", en: "“The whole law is fulfilled in one word: ‘You shall love your neighbor as yourself’” (5:14)" },
      { k: "weakness", zh: "「若相咬相吞，只怕要彼此消滅了」（5:15）", en: "“If you bite and devour one another, be careful that you don’t consume one another” (5:15)" }
    ],
    lesson: {
      zh: "自由有兩面：一面是不再回到奴僕的軛下（5:1-12，割禮的問題）；另一面是不把自由當作放縱的機會（5:13-15）。連結兩面的是愛：在基督耶穌裡「惟獨使人生發仁愛的信心才有功效」（5:6）；愛人如己，就是律法的總綱（5:14）。",
      en: "Freedom has two sides: not going back under the yoke of bondage (5:1–12, the circumcision question), and not using freedom as an occasion for license (5:13–15). Love joins them: in Christ “faith working through love” is what counts (5:6); loving your neighbor as yourself sums up the law (5:14)."
    },
    quote: { ref: "5:6",
      zh: "在基督耶穌裡，受割禮不受割禮全無功效，惟獨使人生發仁愛的信心才有功效",
      en: "neither circumcision amounts to anything, nor uncircumcision, but faith working through love" },
    keyVerses: ["5:1", "5:2", "5:3", "5:4", "5:5", "5:6", "5:9", "5:11", "5:13", "5:14", "5:15"],
    intro: {
      zh: "「基督釋放了我們，叫我們得以自由。」（5:1）5:2-4：若受割禮，基督就與你們無益，「你們這要靠律法稱義的，是與基督隔絕，從恩典中墜落了」。5:7：「你們向來跑得好，有誰攔阻你們？」5:9：「一點麵酵能使全團都發起來。」5:11 說若他仍傳割禮，為甚麼還受逼迫。5:12 是他對攪擾者帶諷刺的話。",
      en: "“Stand firm therefore in the liberty by which Christ has made us free” (5:1). 5:2–4: if you receive circumcision, Christ will profit you nothing; “You are alienated from Christ, you who desire to be justified by the law. You have fallen away from grace.” 5:7: “You were running well! Who interfered with you?” 5:9: “A little yeast grows through the whole lump.” 5:11 asks why he is still persecuted if he still preaches circumcision. 5:12 is a sharp, ironic word about the troublers."
    },
    tip: {
      zh: "5:4「從恩典中墜落」是否說信徒可能失去救恩，各傳統有不同解釋；5:12「把自己割絕了」字面也有「閹割」的意思，是保羅的諷刺，各譯本措辭不同。",
      en: "Whether “fallen away from grace” (5:4) means believers can lose salvation traditions explain differently; “cut themselves off” (5:12) can literally mean castration, as irony, and versions word it differently."
    },
    related: ["walk_by_the_spirit", "glory_in_the_cross", "all_one_in_christ", "another_gospel"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "walk_by_the_spirit", book: "galatians", no: 15, kind: "other", type: "harvest", rarity: 5,
    zh: "聖靈所結的果子", en: "The Fruit of the Spirit",
    tag: { zh: "我們若是靠聖靈得生，就當靠聖靈行事", en: "If We Live by the Spirit, Let’s Walk by the Spirit" },
    role: { zh: "聖靈與肉體（5:16-26）", en: "Spirit and flesh (5:16–26)" },
    ch: [5],
    passages: ["5:16-26"],
    moves: [
      { zh: "順著聖靈而行", en: "Walk by the Spirit", ref: "5:16",
        dzh: "我說，你們當順著聖靈而行，就不放縱肉體的情慾了。",
        den: "But I say, walk by the Spirit, and you won’t fulfill the lust of the flesh." },
      { zh: "聖靈所結的果子", en: "The Fruit of the Spirit", ref: "5:22-23",
        dzh: "聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。",
        den: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control." }
    ],
    traits: [
      { k: "strength", zh: "「這樣的事沒有律法禁止」（5:23）", en: "“Against such things there is no law” (5:23)" },
      { k: "weakness", zh: "「情慾的事都是顯而易見的」（5:19）", en: "“The deeds of the flesh are obvious” (5:19)" }
    ],
    lesson: {
      zh: "保羅把兩串名單並列：情慾的事（複數，5:19-21）與聖靈的果子（單數，5:22-23）。前者是人各行其是的後果，後者是一棵樹結的一個果子。聖靈與情慾相爭（5:17），但「你們若被聖靈引導，就不在律法以下」（5:18）。信徒已經「把肉體……同釘在十字架上了」（5:24），就當靠聖靈行事。",
      en: "Paul sets two lists side by side: the deeds of the flesh (plural, 5:19–21) and the fruit of the Spirit (singular, 5:22–23). The first is the result of everyone going their own way, the second one fruit of one tree. The Spirit and flesh are in conflict (5:17), but “if you are led by the Spirit, you are not under the law” (5:18). Those who belong to Christ “have crucified the flesh” (5:24), so walk by the Spirit."
    },
    quote: { ref: "5:22",
      zh: "聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實",
      en: "the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith" },
    keyVerses: ["5:16", "5:17", "5:18", "5:19", "5:21", "5:22", "5:23", "5:24", "5:25", "5:26"],
    intro: {
      zh: "「我說，你們當順著聖靈而行，就不放縱肉體的情慾了。」（5:16）5:19-21 列出情慾的事：姦淫、污穢、邪蕩、拜偶像、邪術、仇恨、爭競、嫉妒、結黨、醉酒、荒宴等類，「行這樣事的人必不能承受神的國」。5:22-23 的九樣，是「聖靈所結的果子」，原文「果子」是單數。5:21 的「凶殺」二字，有的古卷有，有的沒有。",
      en: "“But I say, walk by the Spirit, and you won’t fulfill the lust of the flesh” (5:16). 5:19–21 lists the deeds of the flesh: adultery, sexual immorality, idolatry, sorcery, hatred, strife, jealousies, rivalries, drunkenness, orgies and things like these; “those who practice such things will not inherit God’s Kingdom.” The nine of 5:22–23 are “the fruit of the Spirit,” with “fruit” singular in Greek. “Murders” in 5:21 appears in some ancient manuscripts and not others."
    },
    tip: {
      zh: "「肉體」（sarx）在保羅書信中不只是身體，而是人離開神的生命方式；5:17「使你們不能做所願意做的」是指信徒內在的掙扎，還是指聖靈抵擋肉體，與羅馬書 7 章的關係，有不同讀法。",
      en: "“Flesh” (sarx) in Paul is not only the body but life lived apart from God; whether 5:17 (“that you may not do the things that you desire”) describes believers’ inner struggle or the Spirit restraining the flesh, and its relation to Romans 7, are read differently."
    },
    related: ["stand_firm_in_freedom", "bear_burdens", "crucified_with_christ", "abba_father"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "bear_burdens", book: "galatians", no: 16, kind: "other", type: "love", rarity: 4,
    zh: "互相擔當重擔", en: "Bear One Another’s Burdens",
    tag: { zh: "我們行善，不可喪志", en: "Let Us Not Be Weary in Doing Good" },
    role: { zh: "教會中的生活（6:1-10）", en: "Life in the community (6:1–10)" },
    ch: [6],
    passages: ["6:1-10"],
    moves: [
      { zh: "互相擔當重擔", en: "Bear One Another’s Burdens", ref: "6:2",
        dzh: "你們各人的重擔要互相擔當，如此，就完全了基督的律法。",
        den: "Bear one another’s burdens, and so fulfill the law of Christ." },
      { zh: "人種的是甚麼，收的也是甚麼", en: "Whatever a Man Sows", ref: "6:7",
        dzh: "不要自欺，神是輕慢不得的。人種的是甚麼，收的也是甚麼。",
        den: "Don’t be deceived. God is not mocked, for whatever a man sows, that he will also reap." }
    ],
    traits: [
      { k: "strength", zh: "「用溫柔的心把他挽回過來」（6:1）", en: "“Restore such a one in a spirit of gentleness” (6:1)" },
      { k: "weakness", zh: "「又當自己小心，恐怕也被引誘」（6:1）", en: "“Looking to yourself so that you also aren’t tempted” (6:1)" }
    ],
    lesson: {
      zh: "自由與聖靈的生命，最後落在日常：有人被過犯所勝，要用溫柔的心挽回他，也要小心自己（6:1）；重擔要互相擔當（6:2）；各人要察驗自己的行為，不與別人比較（6:4）；順著聖靈撒種的，必從聖靈收永生（6:8）；「有了機會就當向眾人行善，向信徒一家的人更當這樣」（6:10）。",
      en: "Freedom and life in the Spirit land finally in the daily: when someone is caught in a fault, restore him gently and watch yourself (6:1); bear one another’s burdens (6:2); examine your own work without comparing (6:4); whoever sows to the Spirit will reap eternal life (6:8); “as we have opportunity, let’s do what is good toward all men, and especially toward those who are of the household of the faith” (6:10)."
    },
    quote: { ref: "6:9",
      zh: "我們行善，不可喪志；若不灰心，到了時候就要收成",
      en: "Let us not be weary in doing good, for we will reap in due season, if we don’t give up" },
    keyVerses: ["6:1", "6:2", "6:3", "6:4", "6:5", "6:6", "6:7", "6:8", "6:9", "6:10"],
    intro: {
      zh: "「弟兄們，若有人偶然被過犯所勝，你們屬靈的人就當用溫柔的心把他挽回過來。」（6:1）6:2 說「如此，就完全了基督的律法」，與 5:14 的「全律法都包在愛人如己」相呼應。6:6 說在道理上受教的，要供給施教的人。6:7 的「神是輕慢不得的」是對自欺的警告。",
      en: "“Brothers, even if a man is caught in some fault, you who are spiritual must restore such a one in a spirit of gentleness” (6:1). 6:2, “and so fulfill the law of Christ,” echoes 5:14. 6:6 says the one taught should share with the one who teaches. 6:7, “God is not mocked,” is a warning against self-deception."
    },
    tip: {
      zh: "6:2「各人的重擔要互相擔當」與 6:5「各人必擔當自己的擔子」看來矛盾，原文兩處用字不同（重擔與擔子）；一般讀為：壓垮人的重負要互相幫忙，各人日常的本分要自己負責。「基督的律法」指甚麼，也有不同讀法。",
      en: "6:2 (“bear one another’s burdens”) and 6:5 (“each man will bear his own burden”) seem to conflict, but the Greek uses two different words (heavy load, and pack); usually read as crushing loads are shared, daily responsibilities one’s own. What “the law of Christ” is is also read differently."
    },
    related: ["walk_by_the_spirit", "glory_in_the_cross", "stand_firm_in_freedom", "paul_in_labor"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "glory_in_the_cross", book: "galatians", no: 17, kind: "other", type: "power", rarity: 5,
    zh: "只誇主耶穌基督的十字架", en: "Boasting Only in the Cross",
    tag: { zh: "要緊的就是作新造的人", en: "What Matters Is a New Creation" },
    role: { zh: "親筆的結尾（6:11-18）", en: "The closing in his own hand (6:11–18)" },
    ch: [6],
    passages: ["6:11-18"],
    moves: [
      { zh: "新造的人", en: "A New Creation", ref: "6:15",
        dzh: "受割禮不受割禮都無關緊要，要緊的就是作新造的人。",
        den: "For in Christ Jesus neither is circumcision anything, nor uncircumcision, but a new creation." },
      { zh: "耶穌的印記", en: "The Marks of Jesus", ref: "6:17",
        dzh: "從今以後，人都不要攪擾我，因為我身上帶著耶穌的印記。",
        den: "From now on, let no one cause me any trouble, for I bear the marks of the Lord Jesus branded on my body." }
    ],
    traits: [
      { k: "strength", zh: "「請看我親手寫給你們的字是何等的大呢！」（6:11）", en: "“See with what large letters I write to you with my own hand” (6:11)" },
      { k: "identity", zh: "「願平安、憐憫加給……神的以色列民」（6:16）", en: "“Peace and mercy be on… God’s Israel” (6:16)" }
    ],
    lesson: {
      zh: "保羅親筆寫結尾，用大字把重點再說一次。對手誇的是外貌和別人的肉體（6:12-13），怕為十字架受逼迫；他卻說：「我斷不以別的誇口，只誇我們主耶穌基督的十字架」（6:14），因為「要緊的就是作新造的人」（6:15）。他身上帶著耶穌的印記（6:17），信以恩惠作結。",
      en: "Paul writes the ending in his own hand, restating the point in large letters. His opponents boast of outward appearance and others’ flesh (6:12–13), afraid of persecution for the cross; but he says “far be it from me to boast, except in the cross of our Lord Jesus Christ” (6:14), because “what matters is a new creation” (6:15). He bears the marks of Jesus on his body (6:17), and the letter closes with grace."
    },
    quote: { ref: "6:14",
      zh: "我斷不以別的誇口，只誇我們主耶穌基督的十字架",
      en: "far be it from me to boast, except in the cross of our Lord Jesus Christ" },
    keyVerses: ["6:11", "6:12", "6:13", "6:14", "6:15", "6:16", "6:17", "6:18"],
    intro: {
      zh: "「請看我親手寫給你們的字是何等的大呢！」（6:11）保羅通常口述，由別人代筆，這裡自己提筆。6:14：「因這十字架，就我而論，世界已經釘在十字架上；就世界而論，我已經釘在十字架上。」6:16：「凡照此理而行的，願平安、憐憫加給他們，和神的以色列民。」6:17：「我身上帶著耶穌的印記。」",
      en: "“See with what large letters I write to you with my own hand” (6:11). Paul normally dictated to a scribe; here he takes the pen himself. 6:14: “through which the world has been crucified to me, and I to the world.” 6:16: “As many as walk by this rule, peace and mercy be on them, and on God’s Israel.” 6:17: “I bear the marks of the Lord Jesus branded on my body.”"
    },
    tip: {
      zh: "6:16「神的以色列民」指教會（包括外邦信徒）、信主的猶太人，或整個以色列，各傳統有不同讀法；6:17 的「印記」多數注釋書讀為保羅因傳福音受的傷痕（參林後 11:23-25）。",
      en: "“God’s Israel” (6:16) as the church (including Gentile believers), Jewish believers, or all Israel traditions read differently; the “marks” (6:17) most commentaries read as scars from Paul’s sufferings for the gospel (compare 2 Corinthians 11:23–25)."
    },
    related: ["crucified_with_christ", "stand_firm_in_freedom", "paul_to_galatia", "bear_burdens"]
  }

);
