// 聖經人物卡 · 哥林多後書 (2 Corinthians) — book info + cards.
// Verse text comes from data/2corinthians.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/2corinthians.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two.
// External references (Acts 18:3; Exod 34; Deut 19:15, 22:10, 25:3; Isa 49:8) appear in prose only.
// Flagged rather than decided: the order of Paul's visits and letters, whether chapters 10–13 (and 6:14–7:1) belong to the same
// letter, the "affliction in Asia" (1:8), "led in triumph" (2:14), the "mirror" of 3:18, the "tent" and "naked" of 5:1–4,
// "made him to be sin" (5:21), the "unbelievers" of 6:14, the "thorn in the flesh" (12:7), and the "third heaven" (12:2).

window.BOOKS.push({
  id: "2corinthians",
  zh: "哥林多後書", en: "2 Corinthians", abbr: { zh: "林後", en: "2 Cor" },
  order: 47, section: { zh: "書信", en: "Epistles" },
  chapters: 13,
  fan: ["treasure_in_clay", "paul_writes_again", "thorn_in_the_flesh"],
  summary: {
    zh: "哥林多後書是保羅最個人的一封信，寫在他離開以弗所、到了馬其頓之後（7:5）。他和哥林多教會的關係經過了緊張：他去過一次帶來憂愁（2:1），寫過一封「多多流淚」的信（2:4），提多帶回了教會悔改的好消息（7:6-7）。信的前半（1-7 章）談安慰、新約的職事和和好的職分，其中有「瓦器裡的寶貝」（4:7）和「新造的人」（5:17）；中間（8-9 章）是為耶路撒冷聖徒的捐款；後半（10-13 章）語氣一轉，回應反對他的人，說「我甚麼時候軟弱，甚麼時候就剛強了」（12:10），以「願主耶穌基督的恩惠」的祝福作結（13:14）。",
    en: "2 Corinthians is Paul’s most personal letter, written after he left Ephesus and reached Macedonia (7:5). His relationship with the Corinthian church had been strained: he had made a visit that brought sorrow (2:1), written a letter “with many tears” (2:4), and Titus had now brought good news of their repentance (7:6–7). The first part (chs 1–7) is about comfort, the ministry of the new covenant and reconciliation, with “treasure in clay vessels” (4:7) and “a new creation” (5:17); the middle (chs 8–9) is the collection for the saints in Jerusalem; the last part (chs 10–13) changes tone to answer those opposing him, “when I am weak, then am I strong” (12:10), and ends with “The grace of the Lord Jesus Christ” (13:14)."
  },
  outline: [
    { zh: "各樣安慰的神；保羅在亞細亞的患難；旅行計畫的改變", en: "The God of all comfort; Paul’s affliction in Asia; the change in travel plans" },
    { zh: "含淚寫的信；饒恕；基督的香氣", en: "The letter with many tears; forgiveness; the aroma of Christ" },
    { zh: "基督的信；新約的職事；摩西的帕子", en: "A letter of Christ; the ministry of the new covenant; Moses’ veil" },
    { zh: "寶貝放在瓦器裡", en: "Treasure in clay vessels" },
    { zh: "帳棚與房屋；基督的愛；新造的人；和好的職分", en: "Tent and building; the love of Christ; a new creation; the ministry of reconciliation" },
    { zh: "現在正是拯救的日子；似乎……卻是；不要同負一軛", en: "Now is the day of salvation; “as… yet”; do not be unequally yoked" },
    { zh: "提多帶來的安慰；依著神意思的憂愁", en: "The comfort Titus brought; godly sorrow" },
    { zh: "馬其頓教會的捐助；主成了貧窮", en: "The Macedonians’ gift; the Lord became poor" },
    { zh: "樂意捐的人；少種的少收；說不盡的恩賜", en: "The cheerful giver; sowing sparingly and bountifully; the unspeakable gift" },
    { zh: "不憑血氣爭戰；保羅的自誇以主為界", en: "Not waging war by the flesh; boasting in the Lord" },
    { zh: "愚妄人的話；假使徒；苦難的清單；筐子縋下", en: "The fool’s speech; false apostles; the list of sufferings; the basket" },
    { zh: "第三層天；肉體上的刺；我的恩典夠你用的", en: "The third heaven; the thorn in the flesh; “My grace is sufficient”" },
    { zh: "第三次要去；省察自己；最後的祝福", en: "The third visit; examine yourselves; the final blessing" }
  ],
  notes: {
    zh: "小提示：哥林多後書是保羅書信中最讓人看到他個人情感的一封：絕望、眼淚、軟弱、憤怒、喜樂都在裡面。信的次序（探訪、信件、提多的消息）、1–9 章與 10–13 章是否同一封信，學者有不同的重建；這裡按現有的次序呈現，只在經文有明說的地方說明前後關係。",
    en: "Good to know: 2 Corinthians shows Paul’s personal feelings more than any other letter: despair, tears, weakness, anger and joy are all there. Scholars reconstruct the order of visits, letters and Titus’s news in different ways, and differ on whether chapters 1–9 and 10–13 were one letter; this presents the letter in its present order and speaks of the sequence only where the text says so."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "paul_writes_again", book: "2corinthians", no: 1, kind: "person", type: "love", rarity: 6,
    zh: "從馬其頓寫信的保羅", en: "Paul Writing from Macedonia",
    tag: { zh: "又擔心，又安慰", en: "Anxious, and Comforted" },
    role: { zh: "哥林多教會的創立者與牧者", en: "Founder and pastor of the Corinthian church" },
    ch: [1, 2, 7, 13],
    passages: ["1:1-2", "7:5-7", "13:11-14"],
    moves: [
      { zh: "外有爭戰，內有懼怕", en: "Fightings Outside, Fear Inside", ref: "7:5",
        dzh: "周圍遭患難，外有爭戰，內有懼怕。",
        den: "We were afflicted on every side. Fightings were outside. Fear was inside." },
      { zh: "要作完全人", en: "Be Perfected", ref: "13:11",
        dzh: "願弟兄們都喜樂。要作完全人；要受安慰；要同心合意；要彼此和睦。",
        den: "Finally, brothers, rejoice. Be perfected, be comforted, be of the same mind, live in peace." }
    ],
    traits: [
      { k: "strength", zh: "與提摩太同署名，也寫給「亞該亞遍處的眾聖徒」（1:1）", en: "Co-signed with Timothy and addressed also to “all the saints in the whole of Achaia” (1:1)" },
      { k: "weakness", zh: "到了馬其頓，「身體也不得安寧」（7:5）", en: "Even in Macedonia, “our flesh had no relief” (7:5)" }
    ],
    lesson: {
      zh: "這封信的保羅不像一位站在高處的使徒，更像一位擔心孩子的父親：他不安、流淚，直到提多帶回好消息（7:6-7）。他把這一切寫出來，因為他相信安慰不是用來藏的，而是要傳給別人的（1:4）。",
      en: "In this letter Paul is less a lofty apostle than a father anxious about his children: restless, in tears, until Titus brings good news (7:6–7). He writes it all out because he believes comfort is not for hiding but for passing on (1:4)."
    },
    quote: { ref: "7:6",
      zh: "那安慰喪氣之人的神藉著提多來安慰了我們",
      en: "he who comforts the lowly, God, comforted us by the coming of Titus" },
    keyVerses: ["1:1", "1:3", "2:1", "2:4", "7:5", "7:6", "7:7", "13:11", "13:14"],
    intro: {
      zh: "保羅在以弗所寫了哥林多前書之後，與哥林多教會的關係並不平順。從這封信可以看出：他曾去過一次，帶來了憂愁（2:1）；寫過一封「多多流淚」的信（2:4）；在特羅亞沒有見到提多，心裡不安，就往馬其頓去（2:12-13）；提多終於帶來教會悔改的消息（7:6-7）。這些事的先後和細節，書信沒有一一交代，學者的重建略有不同。信末（13:1）他說「這是我第三次要到你們那裡去」。",
      en: "After writing 1 Corinthians from Ephesus, Paul’s relationship with the Corinthian church was not smooth. The letter shows: he had made a visit that brought sorrow (2:1); had written a letter “with many tears” (2:4); at Troas, not finding Titus, he was uneasy and went on to Macedonia (2:12–13); and Titus finally brought news of their repentance (7:6–7). The order and details are not spelled out, and scholars reconstruct them a little differently. At the end (13:1) he says, “This is the third time I am coming to you.”"
    },
    tip: {
      zh: "這封信是否原為一封，還是由幾封信合成（特別是 10–13 章與 6:14–7:1），學者有不同看法；也有人認為全信本是一體。",
      en: "Whether this was originally one letter or several joined (especially chapters 10–13 and 6:14–7:1) scholars see differently; others hold it was one letter throughout."
    },
    related: ["god_of_all_comfort", "tearful_letter", "godly_sorrow", "examine_yourselves"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "god_of_all_comfort", book: "2corinthians", no: 2, kind: "other", type: "love", rarity: 5,
    zh: "各樣安慰的神", en: "The God of All Comfort",
    tag: { zh: "你們既是同受苦楚，也必同得安慰", en: "Partners in Suffering, Partners in Comfort" },
    role: { zh: "全信的開頭（1:3-11）", en: "The letter’s opening praise (1:3–11)" },
    ch: [1],
    passages: ["1:3-11"],
    moves: [
      { zh: "用所受的安慰去安慰人", en: "Comfort Passed On", ref: "1:4",
        dzh: "我們在一切患難中，他就安慰我們，叫我們能用神所賜的安慰去安慰那遭各樣患難的人。",
        den: "He comforts us in all our affliction, that we may be able to comfort those in any affliction, through the comfort with which we are comforted by God." },
      { zh: "只靠叫死人復活的神", en: "The God Who Raises the Dead", ref: "1:9",
        dzh: "自己心裡也斷定是必死的，叫我們不靠自己，只靠叫死人復活的神。",
        den: "We ourselves have had the sentence of death within ourselves, that we should not trust in ourselves, but in God who raises the dead." }
    ],
    traits: [
      { k: "strength", zh: "安慰是可以傳遞的：神安慰我們，我們也能安慰別人（1:4）", en: "Comfort can be passed on: God comforts us so we can comfort others (1:4)" },
      { k: "weakness", zh: "「被壓太重，力不能勝，甚至連活命的指望都絕了」（1:8）", en: "“Weighed down exceedingly, beyond our power, so much that we despaired even of life” (1:8)" }
    ],
    lesson: {
      zh: "保羅沒有一開口就解釋、辯護，而是先頌讚。他說自己在亞細亞幾乎絕望，是為了叫他們「不靠自己，只靠叫死人復活的神」（1:9）。受過安慰的人，成了安慰別人的人，這是「同受苦楚，同得安慰」（1:7）。",
      en: "Paul does not open with explanations or defence, but with praise. He says he nearly despaired in Asia so that he would “not trust in ourselves, but in God who raises the dead” (1:9). Those who have been comforted become comforters; this is sharing in “the sufferings… so also… the comfort” (1:7)."
    },
    quote: { ref: "1:4",
      zh: "叫我們能用神所賜的安慰去安慰那遭各樣患難的人",
      en: "that we may be able to comfort those who are in any affliction" },
    keyVerses: ["1:3", "1:4", "1:5", "1:6", "1:7", "1:8", "1:9", "1:10", "1:20", "1:22"],
    intro: {
      zh: "「願頌讚歸與我們的主耶穌基督的父神，就是發慈悲的父，賜各樣安慰的神。」（1:3）他說基督的苦楚多多地臨到我們，我們靠基督也多得安慰（1:5）。1:8-10 提到他們「在亞細亞遭遇苦難」，被壓太重。1:12-24 接著為旅行計畫的改變作說明，並說神的應許在基督「都是是的」（1:20），又用印印了我們，賜聖靈作憑據（1:22）。",
      en: "“Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort” (1:3). The sufferings of Christ abound to us, and so our comfort abounds through Christ (1:5). 1:8–10 speaks of the “affliction which happened to us in Asia,” so heavy a weight. 1:12–24 then explains a change in his travel plans, and says God’s promises are “Yes” in Christ (1:20), and that God sealed us and gave the Spirit as a down payment (1:22)."
    },
    tip: {
      zh: "「在亞細亞遭遇的苦難」（1:8）是甚麼事，經文沒有說明；有人聯想到以弗所的騷亂（徒 19 章），也有人想到疾病或別的危險。",
      en: "What the “affliction in Asia” (1:8) was the text does not say; some think of the riot at Ephesus (Acts 19), others of illness or other danger."
    },
    related: ["paul_writes_again", "treasure_in_clay", "godly_sorrow", "thorn_in_the_flesh"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "tearful_letter", book: "2corinthians", no: 3, kind: "other", type: "love", rarity: 3,
    zh: "含淚寫的信", en: "The Letter with Many Tears",
    tag: { zh: "不是叫你們憂愁，乃是叫你們知道我格外地疼愛你們", en: "Written That You Might Know My Love" },
    role: { zh: "責備與饒恕（2:1-11）", en: "Rebuke and forgiveness (2:1–11)" },
    ch: [2],
    passages: ["2:1-13"],
    moves: [
      { zh: "多多流淚的信", en: "A Letter Written in Tears", ref: "2:4",
        dzh: "我先前心裡難過痛苦，多多地流淚，寫信給你們，不是叫你們憂愁，乃是叫你們知道我格外地疼愛你們。",
        den: "Out of much affliction and anguish of heart I wrote to you with many tears, not to make you sorry, but that you might know the love I have so abundantly for you." },
      { zh: "赦免他，安慰他", en: "Forgive and Comfort", ref: "2:7",
        dzh: "倒不如赦免他，安慰他，免得他憂愁太過，甚至沉淪了。",
        den: "So that on the contrary you should rather forgive him and comfort him, lest by any means such a one should be swallowed up with his excessive sorrow." }
    ],
    traits: [
      { k: "strength", zh: "「我也深信，你們眾人都以我的快樂為自己的快樂」（2:3）", en: "“Confidence in you all, that my joy would be shared by all of you” (2:3)" },
      { k: "identity", zh: "被責罰的是誰，書信沒有說（2:5-8）", en: "Who was disciplined, the letter does not say (2:5–8)" }
    ],
    lesson: {
      zh: "責備是為了愛（2:4），責罰是為了回轉，不是為了毀滅一個人。所以保羅說：這樣的人「受了眾人的責罰也就夠了」（2:6），要向他顯出「堅定不移的愛心」（2:8），免得他「憂愁太過，甚至沉淪了」。",
      en: "Rebuke is for love (2:4), and discipline is for restoration, not to destroy a person. So Paul says, “This punishment which was inflicted by the many is sufficient” (2:6); show him “your love” (2:8), lest he be “swallowed up with his excessive sorrow.”"
    },
    quote: { ref: "2:7",
      zh: "倒不如赦免他，安慰他，免得他憂愁太過，甚至沉淪了",
      en: "you should rather forgive him and comfort him" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4", "2:5", "2:6", "2:7", "2:8", "2:10", "2:11"],
    intro: {
      zh: "「我自己定了主意再到你們那裡去，必須大家沒有憂愁。」（2:1）保羅說他曾「多多流淚」寫信（2:4），那信是為了試驗他們是否順從（2:9）。2:5-11 說到有一個人叫人憂愁；教會已經責罰他，現在保羅說該赦免、安慰他，「免得撒但趁著機會勝過我們」（2:11）。2:12-13 說在特羅亞有門為他開了，卻因為沒有遇見提多，心裡不安，就往馬其頓去了。",
      en: "“But I determined this for myself, that I would not come to you again in sorrow” (2:1). Paul says he wrote “with many tears” (2:4), and that the letter was to test whether they were obedient (2:9). 2:5–11 speaks of someone who caused sorrow; the church has disciplined him and now Paul says to forgive and comfort him, “that no advantage may be gained over us by Satan” (2:11). 2:12–13 says a door was opened for him at Troas, but because he did not find Titus he had no peace of mind and went on to Macedonia."
    },
    tip: {
      zh: "「叫人憂愁的」是誰，是否就是哥林多前書第 5 章的那位，或是攻擊保羅的人，注釋書意見不一；「含淚的信」是否就是哥林多前書，也有不同看法。",
      en: "Who “caused sorrow,” whether he is the man of 1 Corinthians 5 or one who attacked Paul, commentaries differ; whether the “tearful letter” is 1 Corinthians is also debated."
    },
    related: ["godly_sorrow", "paul_writes_again", "aroma_of_christ", "new_creation"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "aroma_of_christ", book: "2corinthians", no: 4, kind: "other", type: "power", rarity: 3,
    zh: "基督的香氣", en: "The Aroma of Christ",
    tag: { zh: "這事誰能當得起呢？", en: "Who Is Sufficient for These Things?" },
    role: { zh: "服事的得勝與重擔（2:14-17）", en: "The triumph and weight of ministry (2:14–17)" },
    ch: [2],
    passages: ["2:14-17"],
    moves: [
      { zh: "常率領我們誇勝", en: "Always Leads Us in Triumph", ref: "2:14",
        dzh: "感謝神！常率領我們在基督裡誇勝，並藉著我們在各處顯揚那因認識基督而有的香氣。",
        den: "Now thanks be to God, who always leads us in triumph in Christ, and reveals through us the sweet aroma of his knowledge in every place." },
      { zh: "死的香氣，活的香氣", en: "From Death to Death, from Life to Life", ref: "2:16",
        dzh: "在這等人，就作了死的香氣叫他死；在那等人，就作了活的香氣叫他活。這事誰能當得起呢？",
        den: "To the one a stench from death to death; to the other a sweet aroma from life to life. Who is sufficient for these things?" }
    ],
    traits: [
      { k: "strength", zh: "「不像那許多人，為利混亂神的道」（2:17）", en: "“Not as so many, peddling the word of God” (2:17)" },
      { k: "weakness", zh: "「這事誰能當得起呢？」（2:16）", en: "“Who is sufficient for these things?” (2:16)" }
    ],
    lesson: {
      zh: "同一個香氣，對不同的人卻有不同的結果：在得救的人是生命的香氣，在滅亡的人是死的香氣（2:15-16）。保羅沒有說這是他自己的功勞，也沒有說自己有資格；他的答案在下一章：「我們所能承擔的，乃是出於神」（3:5）。",
      en: "The same aroma has different results for different people: life to those being saved, death to those perishing (2:15–16). Paul does not claim credit or sufficiency; his answer comes in the next chapter: “our sufficiency is from God” (3:5)."
    },
    quote: { ref: "2:15",
      zh: "我們在神面前，無論在得救的人身上或滅亡的人身上，都有基督馨香之氣",
      en: "we are a sweet aroma of Christ to God, in those who are saved, and in those who perish" },
    keyVerses: ["2:12", "2:13", "2:14", "2:15", "2:16", "2:17"],
    intro: {
      zh: "2:14 突然轉向感謝：「感謝神！常率領我們在基督裡誇勝。」這句話引入了信中對服事的長篇說明（2:14–7:4）。「率領我們誇勝」的圖像，常被讀為羅馬凱旋遊行（遊行中有焚香、有被帶著走的俘虜），保羅是被基督帶領的人；但原文的動詞，譯本也有譯為「使我們得勝」，所以讀法不同。「馨香之氣」則是舊約祭祀中獻給神的香氣的圖像。",
      en: "2:14 turns abruptly to thanks: “Now thanks be to God, who always leads us in triumph in Christ.” The sentence opens a long account of ministry (2:14–7:4). The image of “leading in triumph” is often read as a Roman triumphal procession (with incense and captives led along), Paul as one led by Christ; but versions also render the verb “causes us to triumph,” so readings differ. The “aroma” echoes the sweet smell of Old Testament offerings to God."
    },
    tip: {
      zh: "「率領我們在基督裡誇勝」可譯為「帶著我們遊行」，也可譯為「使我們得勝」，各譯本的處理不同。",
      en: "“Leads us in triumph” can be rendered “leads us in procession” or “causes us to triumph”; versions handle it differently."
    },
    related: ["letter_of_christ", "tearful_letter", "paul_writes_again", "new_creation"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "letter_of_christ", book: "2corinthians", no: 5, kind: "other", type: "faith", rarity: 3,
    zh: "基督的信", en: "A Letter of Christ",
    tag: { zh: "寫在心版上", en: "Written on Tablets of Hearts" },
    role: { zh: "新約的職事（3:1-6）", en: "Ministers of the new covenant (3:1–6)" },
    ch: [3],
    passages: ["3:1-6"],
    moves: [
      { zh: "寫在心版上", en: "Written on Hearts", ref: "3:3",
        dzh: "不是用墨寫的，乃是用永生神的靈寫的；不是寫在石版上，乃是寫在心版上。",
        den: "Written not with ink, but with the Spirit of the living God; not in tablets of stone, but in tablets that are hearts of flesh." },
      { zh: "字句叫人死，精意叫人活", en: "The Letter Kills, the Spirit Gives Life", ref: "3:6",
        dzh: "不是憑著字句，乃是憑著精意；因為那字句是叫人死，精意是叫人活。",
        den: "Not of the letter, but of the Spirit. For the letter kills, but the Spirit gives life." }
    ],
    traits: [
      { k: "strength", zh: "「我們所能承擔的，乃是出於神」（3:5）", en: "“Our sufficiency is from God” (3:5)" },
      { k: "identity", zh: "當時四處旅行的人常帶薦信（3:1）", en: "Travelling people commonly carried letters of recommendation (3:1)" }
    ],
    lesson: {
      zh: "有人問保羅有沒有薦信（3:1）。他的回答是：哥林多人自己就是他的薦信，「寫在我們的心裡，被眾人所知道所念誦的」（3:2）。這信的作者是基督，用的不是墨，是聖靈；寫的地方不是石版，是人的心。",
      en: "Some ask whether Paul has letters of recommendation (3:1). His answer: the Corinthians themselves are his letter, “written in our hearts, known and read by all men” (3:2). The letter’s author is Christ; the writing is not ink but the Spirit; the place is not stone tablets but human hearts."
    },
    quote: { ref: "3:3",
      zh: "不是寫在石版上，乃是寫在心版上",
      en: "not in tablets of stone, but in tablets that are hearts of flesh" },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:5", "3:6"],
    intro: {
      zh: "「我們豈又是舉薦自己嗎？豈像別人，用人薦信給你們，或是請你們薦信給我們嗎？」（3:1）3:3 的「石版」與「心版」，呼應出埃及記的石版，也呼應先知所說「把我的律法寫在他們心上」（耶利米書 31:33）。3:6 的「新約的執事」是保羅對自己職事的說法。「字句」與「精意」不是說律法本身是壞的；保羅在羅馬書 7:12 說律法是聖的。",
      en: "“Are we beginning again to commend ourselves? Or do we need, as do some, letters of commendation to you or from you?” (3:1). The “tablets of stone” and “tablets of hearts” in 3:3 echo the tablets of Exodus and the prophet’s “I will write it on their heart” (Jeremiah 31:33). “Servants of a new covenant” in 3:6 is Paul’s way of speaking of his ministry. “Letter” and “Spirit” do not say the law itself is bad; Paul says in Romans 7:12 that the law is holy."
    },
    tip: {
      zh: "「精意」在和合本旁註作「聖靈」；「字句」與「精意」的對比如何理解，各傳統有不同說明，但多數強調這不是在貶低律法本身。",
      en: "The 和合本 margin gives “Spirit” for “spirit”; how the letter–Spirit contrast is understood traditions explain differently, though most stress it does not belittle the law itself."
    },
    related: ["unveiled_faces", "aroma_of_christ", "treasure_in_clay", "new_creation"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "unveiled_faces", book: "2corinthians", no: 6, kind: "other", type: "vision", rarity: 5,
    zh: "敞著臉看見主的榮光", en: "Unveiled Faces",
    tag: { zh: "榮上加榮", en: "From Glory to Glory" },
    role: { zh: "摩西的帕子與新約的榮光（3:7-18）", en: "Moses’ veil and the glory of the new covenant (3:7–18)" },
    ch: [3],
    passages: ["3:7-18"],
    moves: [
      { zh: "帕子除去了", en: "The Veil Is Taken Away", ref: "3:16-17",
        dzh: "但他們的心幾時歸向主，帕子就幾時除去了。主就是那靈；主的靈在哪裡，那裡就得以自由。",
        den: "But whenever one turns to the Lord, the veil is taken away. Now the Lord is the Spirit and where the Spirit of the Lord is, there is liberty." },
      { zh: "榮上加榮", en: "From Glory to Glory", ref: "3:18",
        dzh: "我們眾人既然敞著臉得以看見主的榮光，好像從鏡子裡返照，就變成主的形狀，榮上加榮。",
        den: "But we all, with unveiled face seeing the glory of the Lord as in a mirror, are transformed into the same image from glory to glory." }
    ],
    traits: [
      { k: "strength", zh: "我們眾人都敞著臉，不只摩西一人（3:18）", en: "All of us, not only Moses, with unveiled face (3:18)" },
      { k: "weakness", zh: "摩西的榮光「是漸漸退去的」（3:7）", en: "The glory on Moses’ face “was passing away” (3:7)" }
    ],
    lesson: {
      zh: "保羅把摩西下西乃山、臉上發光的情景（出埃及記 34 章），和今天的信徒放在一起比較：那榮光是漸漸退去的，而聖靈的職事「榮光就越發大了」（3:9）。看著主的人，被改變成主的形狀，而且是一步一步地（3:18）。",
      en: "Paul sets Moses coming down from Sinai with a shining face (Exodus 34) beside believers today: that glory was passing away, while the ministry of the Spirit “exceeds much more in glory” (3:9). Those who look at the Lord are transformed into his image, step by step (3:18)."
    },
    quote: { ref: "3:18",
      zh: "就變成主的形狀，榮上加榮",
      en: "are transformed into the same image from glory to glory" },
    keyVerses: ["3:7", "3:8", "3:9", "3:11", "3:12", "3:13", "3:14", "3:16", "3:17", "3:18"],
    intro: {
      zh: "「那用字刻在石頭上屬死的職事尚且有榮光，甚至以色列人因摩西面上的榮光，不能定睛看他的臉。」（3:7）3:13 說摩西把帕子蒙在臉上，叫以色列人不能定睛看到那將廢者的結局。3:14-15 說帕子「直到今日」還在讀舊約的人心上；3:16「他們的心幾時歸向主，帕子就幾時除去了」。3:18 的「從鏡子裡返照」，原文動詞可譯為「看著」或「反映」。",
      en: "“But if the service of death, written engraved on stones, came with glory, so that the children of Israel could not look steadfastly on the face of Moses for the glory of his face…” (3:7). 3:13 says Moses put a veil on his face so that Israel would not look steadfastly on the end of what was passing away. 3:14–15 says the veil remains “to this day” on the hearts of those who read the old covenant; 3:16, “whenever one turns to the Lord, the veil is taken away.” The verb in 3:18, “as in a mirror,” can be rendered “beholding” or “reflecting.”"
    },
    tip: {
      zh: "3:18 的原文動詞可譯為「看著」，也可譯為「反映」；「主就是那靈」（3:17）與聖靈和基督的關係，各傳統有不同解釋。",
      en: "The verb in 3:18 can mean “beholding” or “reflecting”; the relation of “the Lord is the Spirit” (3:17) to Christ and the Spirit traditions explain differently."
    },
    related: ["letter_of_christ", "treasure_in_clay", "new_creation", "earthly_tent"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "treasure_in_clay", book: "2corinthians", no: 7, kind: "other", type: "power", rarity: 5,
    zh: "瓦器裡的寶貝", en: "Treasure in Clay Vessels",
    tag: { zh: "要顯明這莫大的能力是出於神", en: "The Power Is of God, Not from Us" },
    role: { zh: "服事者的軟弱與能力（第 4 章）", en: "The minister’s weakness and God’s power (ch 4)" },
    ch: [4],
    passages: ["4:1-15"],
    moves: [
      { zh: "瓦器裡的寶貝", en: "Treasure in Clay Vessels", ref: "4:7",
        dzh: "我們有這寶貝放在瓦器裡，要顯明這莫大的能力是出於神，不是出於我們。",
        den: "But we have this treasure in clay vessels, that the exceeding greatness of the power may be of God, and not from ourselves." },
      { zh: "卻不被困住", en: "Yet Not Crushed", ref: "4:8-9",
        dzh: "我們四面受敵，卻不被困住；心裡作難，卻不至失望；遭逼迫，卻不被丟棄；打倒了，卻不至死亡。",
        den: "We are pressed on every side, yet not crushed; perplexed, yet not to despair; pursued, yet not forsaken; struck down, yet not destroyed;" }
    ],
    traits: [
      { k: "strength", zh: "「我們不喪膽」（4:1、16）", en: "“We don’t faint” (4:1, 16)" },
      { k: "weakness", zh: "「身上常帶著耶穌的死」（4:10）", en: "“Always carrying in the body the putting to death of the Lord Jesus” (4:10)" }
    ],
    lesson: {
      zh: "寶貝是福音（4:4-6），瓦器是服事者自己。瓦器裂了，光反而從裂縫透出來。保羅用四組「卻不」說明：他確實受壓、作難、被逼、被打倒，但每一次都沒有走到盡頭（4:8-9），因為能力「是出於神，不是出於我們」。",
      en: "The treasure is the gospel (4:4–6); the clay vessel is the minister himself. When the vessel cracks, light shines out of the cracks. Paul uses four “yet not” pairs: he is pressed, perplexed, pursued and struck down, but each time not to the end (4:8–9), for the power is “of God, and not from ourselves.”"
    },
    quote: { ref: "4:7",
      zh: "我們有這寶貝放在瓦器裡，要顯明這莫大的能力是出於神，不是出於我們",
      en: "we have this treasure in clay vessels, that the exceeding greatness of the power may be of God, and not from ourselves" },
    keyVerses: ["4:1", "4:4", "4:5", "4:6", "4:7", "4:8", "4:9", "4:10", "4:15"],
    intro: {
      zh: "「我們既然蒙憐憫，受了這職分，就不喪膽。」（4:1）4:5：「我們原不是傳自己，乃是傳基督耶穌為主。」4:6 把創世記的「要有光」用在信主的心上：「那吩咐光從黑暗裡照出來的神，已經照在我們心裡。」4:10-12 說身上帶著耶穌的死，是為了使耶穌的生也顯明在我們身上；「這樣看來，死是在我們身上發動，生卻在你們身上發動」。4:13 引用詩篇 116:10：「我信，所以我說話。」",
      en: "“Therefore seeing we have this ministry, even as we obtained mercy, we don’t faint” (4:1). 4:5: “we don’t preach ourselves, but Christ Jesus as Lord.” 4:6 takes Genesis’s “let there be light” to the believing heart: “God, who said, ‘Light will shine out of darkness,’ has shone in our hearts.” 4:10–12 says carrying Jesus’ death in the body is so Jesus’ life may be revealed in our body; “So then death works in us, but life in you.” 4:13 quotes Psalm 116:10: “I believed, and therefore I spoke.”"
    },
    tip: {
      zh: "「瓦器」是當時日用的便宜陶器；經文沒有明說「寶貝」專指甚麼，一般按 4:4-6 讀為福音，或「神榮耀的光」。",
      en: "“Clay vessels” were everyday cheap pottery; the text does not say exactly what the “treasure” is, and 4:4–6 leads most to read it as the gospel, or “the light of the knowledge of the glory of God.”"
    },
    related: ["god_of_all_comfort", "thorn_in_the_flesh", "earthly_tent", "as_dying_yet_alive"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "earthly_tent", book: "2corinthians", no: 8, kind: "other", type: "heaven", rarity: 4,
    zh: "地上的帳棚與天上的房屋", en: "The Earthly Tent",
    tag: { zh: "不是顧念所見的，乃是顧念所不見的", en: "Not the Seen, but the Unseen" },
    role: { zh: "內心日日更新（4:16–5:10）", en: "Inward renewal day by day (4:16–5:10)" },
    ch: [4, 5],
    passages: ["4:16-18", "5:1-10"],
    moves: [
      { zh: "內心一天新似一天", en: "Renewed Day by Day", ref: "4:16",
        dzh: "我們不喪膽。外體雖然毀壞，內心卻一天新似一天。",
        den: "Therefore we don’t faint, but though our outward man is decaying, yet our inward man is renewed day by day." },
      { zh: "不是人手所造的房屋", en: "A House Not Made with Hands", ref: "5:1",
        dzh: "我們這地上的帳棚若拆毀了，必得神所造，不是人手所造，在天上永存的房屋。",
        den: "If the earthly house of our tent is dissolved, we have a building from God, a house not made with hands, eternal, in the heavens." }
    ],
    traits: [
      { k: "strength", zh: "「我們行事為人是憑著信心，不是憑著眼見」（5:7）", en: "“We walk by faith, not by sight” (5:7)" },
      { k: "weakness", zh: "「在這帳棚裡歎息勞苦」（5:4）", en: "“We who are in this tent do groan, being burdened” (5:4)" }
    ],
    lesson: {
      zh: "保羅說這話時，自己是一個做帳棚的人（徒 18:3）。身體像帳棚：會舊，會拆。但他不因此喪膽，因為「這至暫至輕的苦楚，要為我們成就極重無比、永遠的榮耀」（4:17）。5:9-10 的結論也很實際：不論在世或離世，目標是「得主的喜悅」，並且要在基督臺前顯露出來。",
      en: "Paul writes this as a tentmaker (Acts 18:3). The body is like a tent: it wears out and is taken down. Yet he does not lose heart, because “our light affliction, which is for the moment, works for us… an eternal weight of glory” (4:17). The conclusion in 5:9–10 is practical: whether at home or absent, the aim is “to be well pleasing to him,” and all must be revealed before Christ’s judgment seat."
    },
    quote: { ref: "4:18",
      zh: "所見的是暫時的，所不見的是永遠的",
      en: "the things which are seen are temporal, but the things which are not seen are eternal" },
    keyVerses: ["4:16", "4:17", "4:18", "5:1", "5:2", "5:4", "5:6", "5:7", "5:8", "5:9", "5:10"],
    intro: {
      zh: "「所以，我們不喪膽。外體雖然毀壞，內心卻一天新似一天。」（4:16）5:1-4 用帳棚、房屋、穿上衣服來說身體的死和未來的身體；5:6-8 說「離開身體與主同住」。5:3-4 的「赤身」、「脫下」與「穿上」指甚麼（死後的中間狀態，或復活的身體），解經家意見不一。5:10 說「我們眾人必要在基督臺前顯露出來」，各人按所行的受報。",
      en: "“Therefore we don’t faint, but though our outward man is decaying, yet our inward man is renewed day by day” (4:16). 5:1–4 uses tent, building and clothing to speak of the body’s death and a future body; 5:6–8 speaks of being “at home with the Lord.” What the “naked,” “unclothed” and “clothed” of 5:3–4 mean (the intermediate state after death, or the resurrection body) interpreters do not agree. 5:10 says “we must all be revealed before the judgment seat of Christ,” each to receive according to what he has done."
    },
    tip: {
      zh: "5:3-4 的「赤身」「脫下」「穿上」指死後的中間狀態，還是復活的身體，注釋書意見不一。",
      en: "Whether “naked,” “unclothed” and “clothed” (5:3–4) mean the intermediate state after death or the resurrection body, commentaries differ."
    },
    related: ["treasure_in_clay", "new_creation", "god_of_all_comfort", "examine_yourselves"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "new_creation", book: "2corinthians", no: 9, kind: "other", type: "faith", rarity: 5,
    zh: "新造的人與和好的職分", en: "A New Creation",
    tag: { zh: "我們替基督求你們與神和好", en: "We Beg You on Behalf of Christ: Be Reconciled" },
    role: { zh: "基督的使者（5:11-21）", en: "Ambassadors for Christ (5:11–21)" },
    ch: [5],
    passages: ["5:11-21"],
    moves: [
      { zh: "新造的人", en: "A New Creation", ref: "5:17",
        dzh: "若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。",
        den: "Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new." },
      { zh: "和好的道理", en: "The Word of Reconciliation", ref: "5:19",
        dzh: "這就是神在基督裡，叫世人與自己和好，不將他們的過犯歸到他們身上，並且將這和好的道理託付了我們。",
        den: "God was in Christ reconciling the world to himself, not reckoning to them their trespasses, and having committed to us the word of reconciliation." }
    ],
    traits: [
      { k: "strength", zh: "「基督的愛激勵我們」（5:14）", en: "“The love of Christ constrains us” (5:14)" },
      { k: "identity", zh: "「我們作基督的使者」（5:20）", en: "“We are therefore ambassadors on behalf of Christ” (5:20)" }
    ],
    lesson: {
      zh: "和好是神的作為：「一切都是出於神」（5:18）。然後這個消息被「託付」給我們，使我們成為使者，替基督勸人與神和好（5:20）。新造的人不是改良，而是「舊事已過，都變成新的了」；他們從此「不再為自己活」（5:15）。",
      en: "Reconciliation is God’s act: “all things are of God” (5:18). Then the message is “committed” to us, making us ambassadors who plead on behalf of Christ for people to be reconciled to God (5:20). The new creation is not an improvement but “the old things have passed away… all things have become new,” and those who live “should no longer live to themselves” (5:15)."
    },
    quote: { ref: "5:17",
      zh: "若有人在基督裡，他就是新造的人，舊事已過，都變成新的了",
      en: "if anyone is in Christ, he is a new creation. The old things have passed away." },
    keyVerses: ["5:14", "5:15", "5:16", "5:17", "5:18", "5:19", "5:20", "5:21"],
    intro: {
      zh: "「原來基督的愛激勵我們；因我們想，一人既替眾人死，眾人就都死了。」（5:14）5:16：「所以，我們從今以後，不憑著外貌認人了。」5:18-19 把「和好」放在中心：神藉著基督使我們與他和好，又把勸人和好的職分賜給我們。5:21：「神使那無罪的，替我們成為罪，好叫我們在他裡面成為神的義。」",
      en: "“For the love of Christ constrains us; because we judge thus, that one died for all, therefore all died” (5:14). 5:16: “Therefore we know no one after the flesh from now on.” 5:18–19 puts “reconciliation” at the center: God reconciled us to himself through Christ and gave us the ministry of reconciliation. 5:21: “For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.”"
    },
    tip: {
      zh: "5:21「替我們成為罪」與「成為神的義」的意思，各傳統（代替、代表、同在基督裡等）有不同的說明；「新造的人」原文也可譯為「新的創造」。",
      en: "What “made to be sin on our behalf” and “become the righteousness of God” (5:21) mean traditions explain differently (substitution, representation, being in Christ); “new creation” in the Greek can also be rendered “a new creation” without “man.”"
    },
    related: ["aroma_of_christ", "unveiled_faces", "as_dying_yet_alive", "earthly_tent"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "as_dying_yet_alive", book: "2corinthians", no: 10, kind: "other", type: "faith", rarity: 4,
    zh: "似乎貧窮，卻叫許多人富足", en: "As Poor, Yet Making Many Rich",
    tag: { zh: "現在正是拯救的日子", en: "Now Is the Day of Salvation" },
    role: { zh: "神的同工的憑據（6:1-13）", en: "The credentials of God’s servants (6:1–13)" },
    ch: [6],
    passages: ["6:1-13"],
    moves: [
      { zh: "現在正是拯救的日子", en: "Now Is the Day of Salvation", ref: "6:2",
        dzh: "看哪，現在正是悅納的時候！現在正是拯救的日子；",
        den: "Behold, now is the acceptable time. Behold, now is the day of salvation." },
      { zh: "似乎……卻是", en: "As… Yet", ref: "6:10",
        dzh: "似乎憂愁，卻是常常快樂的；似乎貧窮，卻是叫許多人富足的；似乎一無所有，卻是樣樣都有的。",
        den: "As sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, and yet possessing all things." }
    ],
    traits: [
      { k: "strength", zh: "「我們凡事都不叫人有妨礙」（6:3）", en: "“We give no occasion of stumbling in anything” (6:3)" },
      { k: "weakness", zh: "「鞭打、監禁、擾亂、勤勞、警醒、不食」（6:5）", en: "“Beatings, imprisonments, riots, labors, watchings, fastings” (6:5)" }
    ],
    lesson: {
      zh: "保羅證明自己是神的用人，用的不是成就的清單，而是一串苦難（6:4-5）、品格（6:6-7）和矛盾（6:8-10）。那些「似乎……卻是」的句子，說的是從外面看不出來的真相。6:11-13 是他的心聲：「口是張開的，心是寬宏的。」",
      en: "Paul proves himself a servant of God not with a list of successes but with a string of hardships (6:4–5), virtues (6:6–7) and paradoxes (6:8–10). The “as… yet” sentences describe truths invisible from the outside. 6:11–13 is his heart: “Our mouth is open to you… Our heart is enlarged.”"
    },
    quote: { ref: "6:10",
      zh: "似乎貧窮，卻是叫許多人富足的",
      en: "as poor, yet making many rich" },
    keyVerses: ["6:1", "6:2", "6:3", "6:4", "6:8", "6:9", "6:10", "6:11", "6:13"],
    intro: {
      zh: "「我們與神同工的，也勸你們不可徒受他的恩典。」（6:1）6:2 引用以賽亞書 49:8，說「現在」正是拯救的日子。6:4-10 的清單，是信中最有名的自我描述之一，帶有「在……中」與「用……」的節奏：在許多的忍耐中、在鞭打中、在廉潔中、在榮耀與羞辱中。保羅說自己「似乎不為人所知，卻是人所共知的；似乎要死，卻是活著的」（6:9）。",
      en: "“Working together, we entreat also that you do not receive the grace of God in vain” (6:1). 6:2 quotes Isaiah 49:8 and says “now” is the day of salvation. 6:4–10 is one of the letter’s best-known self-descriptions, with a rhythm of “in… by…”: in great endurance, in beatings, in pureness, by glory and dishonor. Paul says of himself, “as unknown, and yet well known; as dying, and behold, we live” (6:9)."
    },
    tip: {
      zh: "6:2 是引用以賽亞書 49:8，保羅把「悅納的時候」說成「現在」，指他們所處的時代。",
      en: "6:2 quotes Isaiah 49:8; Paul makes “the acceptable time” “now,” meaning the time they live in."
    },
    related: ["new_creation", "treasure_in_clay", "fools_speech", "macedonian_gift"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "unequally_yoked", book: "2corinthians", no: 11, kind: "other", type: "wisdom", rarity: 3,
    zh: "不要同負一軛", en: "Do Not Be Unequally Yoked",
    tag: { zh: "我們是永生神的殿", en: "We Are the Temple of the Living God" },
    role: { zh: "分別為聖（6:14–7:1）", en: "A call to separation (6:14–7:1)" },
    ch: [6, 7],
    passages: ["6:14-18", "7:1"],
    moves: [
      { zh: "不要同負一軛", en: "Not Unequally Yoked", ref: "6:14",
        dzh: "你們和不信的原不相配，不要同負一軛。義和不義有甚麼相交呢？光明和黑暗有甚麼相通呢？",
        den: "Don’t be unequally yoked with unbelievers, for what fellowship have righteousness and iniquity? Or what fellowship has light with darkness?" },
      { zh: "我要作你們的父", en: "I Will Be a Father to You", ref: "6:18",
        dzh: "我要作你們的父；你們要作我的兒女。這是全能的主說的。",
        den: "“I will be to you a Father. You will be to me sons and daughters,” says the Lord Almighty." }
    ],
    traits: [
      { k: "strength", zh: "串連多處舊約經文，從「我要在他們中間居住」到「我要作你們的父」", en: "Chains Old Testament texts, from “I will dwell in them” to “I will be to you a Father”" },
      { k: "identity", zh: "「軛」的圖像，常被認為與申命記 22:10 不可牛驢同耕有關", en: "The “yoke” image is often linked to Deuteronomy 22:10, not plowing with ox and donkey together" }
    ],
    lesson: {
      zh: "這段的重點是「我們是永生神的殿」（6:16）：既是神的殿，就不能與偶像同處。哥林多人身處偶像崇拜的城市，這是切身的問題。但保羅在哥林多前書 5:10 也說，不是要離開世界。「不信的」指哪些關係（婚姻、生意、拜偶像的宴席，還是別的），經文沒有一一說明。",
      en: "The point of this passage is “we are a temple of the living God” (6:16): as God’s temple they cannot share space with idols. For Corinthians in an idol-worshipping city this was a personal matter. But Paul also says in 1 Corinthians 5:10 that it does not mean leaving the world. Which relationships “unbelievers” covers (marriage, business, idol-temple feasts, or others) the text does not itemize."
    },
    quote: { ref: "6:14",
      zh: "你們和不信的原不相配，不要同負一軛",
      en: "Don’t be unequally yoked with unbelievers" },
    keyVerses: ["6:14", "6:15", "6:16", "6:17", "6:18", "7:1"],
    intro: {
      zh: "「你們和不信的原不相配，不要同負一軛。」（6:14）接著是五個問句：義和不義、光明和黑暗、基督和彼列、信的和不信的、神的殿和偶像。6:16-18 串連幾處舊約經文，說「我要在他們中間居住」「你們務要從他們中間出來」。7:1：「我們既有這等應許，就當潔淨自己，除去身體、靈魂一切的污穢，敬畏神，得以成聖。」",
      en: "“Don’t be unequally yoked with unbelievers” (6:14). Five questions follow: righteousness and iniquity, light and darkness, Christ and Belial, a believer and an unbeliever, God’s temple and idols. 6:16–18 chains several Old Testament passages: “I will dwell in them,” “Come out from among them.” 7:1: “Having therefore these promises, beloved, let us cleanse ourselves from all defilement of flesh and spirit, perfecting holiness in the fear of God.”"
    },
    tip: {
      zh: "6:14–7:1 與前後文的關係，學者有不同看法：有人認為是保羅早先的文字或另外的片段，也有人認為本來就屬於這裡；它是否專指婚姻，也有不同應用。",
      en: "How 6:14–7:1 relates to its context scholars see differently: some think it an earlier or separate fragment, others that it belongs here; whether it applies specifically to marriage is applied in different ways."
    },
    related: ["godly_sorrow", "as_dying_yet_alive", "weapons_of_warfare", "letter_of_christ"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "godly_sorrow", book: "2corinthians", no: 12, kind: "other", type: "love", rarity: 4,
    zh: "依著神意思的憂愁", en: "Godly Sorrow",
    tag: { zh: "生出沒有後悔的懊悔來", en: "Repentance Without Regret" },
    role: { zh: "提多帶回的好消息（7:2-16）", en: "Titus’s good news (7:2–16)" },
    ch: [7],
    passages: ["7:2-16"],
    moves: [
      { zh: "沒有後悔的懊悔", en: "Repentance Without Regret", ref: "7:10",
        dzh: "因為依著神的意思憂愁，就生出沒有後悔的懊悔來，以致得救；但世俗的憂愁是叫人死。",
        den: "For godly sorrow produces repentance to salvation, which brings no regret. But the sorrow of the world produces death." },
      { zh: "何等的殷勤", en: "What Earnest Care", ref: "7:11",
        dzh: "你看，你們依著神的意思憂愁，從此就生出何等的殷勤、自訴、自恨、恐懼、想念、熱心、責罰。",
        den: "For behold, this same thing, that you were made sorry in a godly way, what earnest care it worked in you." }
    ],
    traits: [
      { k: "strength", zh: "「我如今歡喜，能在凡事上為你們放心」（7:16）", en: "“I rejoice that in everything I am confident concerning you” (7:16)" },
      { k: "weakness", zh: "他曾對自己寫的信「懊悔」，又「不懊悔」（7:8）", en: "He “regretted” his letter, and “does not regret” it (7:8)" }
    ],
    lesson: {
      zh: "保羅的歡喜，不是因為他們憂愁，而是因為他們「從憂愁中生出懊悔來」（7:9）。憂愁本身不是目標；方向才是：依著神的意思的憂愁，帶來殷勤、潔淨與和好；世俗的憂愁只留下自憐與死亡。提多帶回這個消息，保羅就說「我們得了安慰」（7:13）。",
      en: "Paul’s joy is not that they were made sorry but that they “were made sorry to repentance” (7:9). Sorrow is not the aim; its direction is: sorrow in God’s way brings earnestness, cleansing and reconciliation; the sorrow of the world leaves only self-pity and death. When Titus brings this news, Paul says, “we have been comforted” (7:13)."
    },
    quote: { ref: "7:10",
      zh: "依著神的意思憂愁，就生出沒有後悔的懊悔來，以致得救",
      en: "godly sorrow produces repentance to salvation, which brings no regret" },
    keyVerses: ["7:2", "7:4", "7:5", "7:6", "7:8", "7:9", "7:10", "7:11", "7:13", "7:16"],
    intro: {
      zh: "「你們要心地寬大收納我們。」（7:2）7:5-7 回到馬其頓的情景：外有爭戰，內有懼怕，神藉提多來安慰。7:8-9：他曾因那封信後悔，如今卻不後悔。7:11 列出哥林多人的反應：殷勤、自訴、自恨、恐懼、想念、熱心、責罰。7:12 說他寫那封信，「不是為那虧負人的，也不是為那受人虧負的」，是為了表明他們對他的熱心。",
      en: "“Open your hearts to us” (7:2). 7:5–7 returns to the scene in Macedonia: fightings outside, fear inside, and God comforting through Titus. 7:8–9: he regretted that letter, but no longer. 7:11 lists the Corinthians’ response: earnest care, defense, indignation, fear, longing, zeal, vengeance. 7:12 says he wrote “not for his cause that did the wrong, nor for his cause that suffered the wrong,” but that their earnest care for him might be revealed."
    },
    tip: {
      zh: "7:12 的「虧負人的」「受人虧負的」是誰，是否與 2:5-11 同一件事，書信沒有說明，注釋書意見不一。",
      en: "Who “did the wrong” and “suffered the wrong” in 7:12 is, and whether it is the same matter as 2:5–11, the letter does not say; commentaries differ."
    },
    related: ["tearful_letter", "paul_writes_again", "god_of_all_comfort", "unequally_yoked"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "macedonian_gift", book: "2corinthians", no: 13, kind: "other", type: "harvest", rarity: 4,
    zh: "馬其頓人的捐助", en: "The Macedonians’ Gift",
    tag: { zh: "他本來富足，卻為你們成了貧窮", en: "Though He Was Rich, Yet He Became Poor" },
    role: { zh: "為耶路撒冷聖徒的捐項（第 8 章）", en: "The collection for the saints in Jerusalem (ch 8)" },
    ch: [8],
    passages: ["8:1-24"],
    moves: [
      { zh: "在極窮之間，樂捐的厚恩", en: "Deep Poverty, Rich Generosity", ref: "8:2",
        dzh: "就是他們在患難中受大試煉的時候，仍有滿足的快樂，在極窮之間還格外顯出他們樂捐的厚恩。",
        den: "How that in much proof of affliction the abundance of their joy and their deep poverty abounded to the riches of their generosity." },
      { zh: "他成了貧窮", en: "He Became Poor", ref: "8:9",
        dzh: "你們知道我們主耶穌基督的恩典：他本來富足，卻為你們成了貧窮，叫你們因他的貧窮，可以成為富足。",
        den: "For you know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that you through his poverty might become rich." }
    ],
    traits: [
      { k: "strength", zh: "「先把自己獻給主」（8:5）", en: "“First they gave their own selves to the Lord” (8:5)" },
      { k: "weakness", zh: "哥林多人「已經有一年了」，卻還沒辦成（8:10-11）", en: "The Corinthians began “a year ago” but had not finished (8:10–11)" }
    ],
    lesson: {
      zh: "保羅用馬其頓教會作例子：他們自己很窮，卻求保羅准他們有份（8:2-4）。然後他把動機放回基督：「他本來富足，卻為你們成了貧窮」（8:9）。8:12-15 說捐的標準是「照他所有的，並不是照他所無的」，目標是「均平」；8:21 說他們也留心在人面前行光明的事。",
      en: "Paul uses the Macedonian churches as an example: they were poor themselves, yet begged to have a share (8:2–4). Then he puts the motive back in Christ: “though he was rich, yet for your sakes he became poor” (8:9). 8:12–15 says the standard is “according to what you have, not according to what you don’t have,” and the aim “equality”; 8:21 says they also take care to do what is honorable in the sight of men."
    },
    quote: { ref: "8:9",
      zh: "他本來富足，卻為你們成了貧窮，叫你們因他的貧窮，可以成為富足",
      en: "though he was rich, yet for your sakes he became poor, that you through his poverty might become rich" },
    keyVerses: ["8:1", "8:2", "8:3", "8:5", "8:7", "8:9", "8:12", "8:14", "8:15", "8:21"],
    intro: {
      zh: "「弟兄們，我把神賜給馬其頓眾教會的恩告訴你們。」（8:1）這捐款是為耶路撒冷貧窮的聖徒（參哥林多前書 16:1-3）。馬其頓人「按著力量，而且也過了力量」捐助（8:3）；提多被請來完成這事（8:6、16-17）。8:15 引用嗎哪的故事：「多收的也沒有餘；少收的也沒有缺。」8:18-24 說有弟兄同行，是為了錢的事處理得「光明」。",
      en: "“Moreover, brothers, we make known to you the grace of God which has been given in the assemblies of Macedonia” (8:1). The collection is for the poor saints in Jerusalem (compare 1 Corinthians 16:1–3). The Macedonians gave “according to their power… yes and beyond their power” (8:3); Titus is asked to complete it (8:6, 16–17). 8:15 quotes the manna story: “He who gathered much had nothing left over, and he who gathered little had no lack.” 8:18–24 says brothers travel along so the handling of the money is above reproach."
    },
    tip: {
      zh: "8:9「成了貧窮」指道成肉身、釘十字架，或兩者，各傳統有不同強調。",
      en: "“Became poor” (8:9) points to the incarnation, the cross, or both, with different emphases in different traditions."
    },
    related: ["cheerful_giver", "as_dying_yet_alive", "godly_sorrow", "examine_yourselves"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "cheerful_giver", book: "2corinthians", no: 14, kind: "other", type: "harvest", rarity: 4,
    zh: "樂意捐的人", en: "The Cheerful Giver",
    tag: { zh: "感謝神，因他有說不盡的恩賜", en: "Thanks Be to God for His Unspeakable Gift" },
    role: { zh: "捐款與感謝（第 9 章）", en: "Giving and thanksgiving (ch 9)" },
    ch: [9],
    passages: ["9:1-15"],
    moves: [
      { zh: "少種的少收，多種的多收", en: "Sparingly or Bountifully", ref: "9:6",
        dzh: "「少種的少收，多種的多收」，這話是真的。",
        den: "He who sows sparingly will also reap sparingly. He who sows bountifully will also reap bountifully." },
      { zh: "捐得樂意的人", en: "God Loves a Cheerful Giver", ref: "9:7",
        dzh: "各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。",
        den: "Let each man give according as he has determined in his heart; not grudgingly, or under compulsion; for God loves a cheerful giver." }
    ],
    traits: [
      { k: "strength", zh: "「神能將各樣的恩惠多多地加給你們」（9:8）", en: "“God is able to make all grace abound to you” (9:8)" },
      { k: "identity", zh: "結果是許多人「感謝神」（9:11-13）", en: "The result is many “thanks to God” (9:11–13)" }
    ],
    lesson: {
      zh: "捐錢在保羅眼中是「心意」的事：各人「隨本心所酌定的」，不勉強，不作難（9:7）。它也是一個圈：神賜種子（9:10），人施捨，聖徒得供給，許多人因此感謝神（9:12）。這章的結尾是「感謝神，因他有說不盡的恩賜！」（9:15）",
      en: "Giving, for Paul, is a matter of the heart: each as he has “determined in his heart,” not grudgingly or under compulsion (9:7). It is also a circle: God supplies the seed (9:10), people give, the saints are supplied, and many give thanks to God (9:12). The chapter ends “thanks be to God for his unspeakable gift!” (9:15)."
    },
    quote: { ref: "9:7",
      zh: "捐得樂意的人是神所喜愛的",
      en: "God loves a cheerful giver" },
    keyVerses: ["9:1", "9:5", "9:6", "9:7", "9:8", "9:9", "9:10", "9:11", "9:12", "9:15"],
    intro: {
      zh: "「論到供給聖徒的事，我不必寫信給你們。」（9:1）保羅誇讚過哥林多人的熱心（9:2），現在派弟兄先去，免得他們沒有預備好。9:6-7 的「撒種」比喻，之後說神會增添他們「仁義的果子」（9:10）。9:9 引用詩篇 112:9。「說不盡的恩賜」（9:15）指甚麼，經文沒有解釋：多數讀為基督，也有人讀為神使這捐助成就的恩典。",
      en: "“It is indeed unnecessary for me to write to you concerning the service to the saints” (9:1). Paul had boasted of the Corinthians’ eagerness (9:2) and now sends brothers ahead so they will be ready. After the sowing image of 9:6–7 God will increase “the fruits of your righteousness” (9:10). 9:9 quotes Psalm 112:9. What the “unspeakable gift” of 9:15 is the text does not explain: most read it as Christ, others as God’s grace that carries out this giving."
    },
    tip: {
      zh: "「多種的多收」在上下文是說神供給人行善所需，使感謝增多（9:8-12），不是說捐多少就換回多少財物。林後 8 與 9 章是同一封信的部分還是原本分開，學者有不同看法。",
      en: "“Sowing bountifully” in context means God supplying what is needed for good works and increasing thanksgiving (9:8–12), not that gifts are exchanged for a matching return. Whether chapters 8 and 9 were originally one letter scholars see differently."
    },
    related: ["macedonian_gift", "as_dying_yet_alive", "examine_yourselves", "new_creation"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "weapons_of_warfare", book: "2corinthians", no: 15, kind: "other", type: "power", rarity: 3,
    zh: "爭戰的兵器", en: "The Weapons of Our Warfare",
    tag: { zh: "誇口的，當指著主誇口", en: "Let the One Who Boasts Boast in the Lord" },
    role: { zh: "對質疑者的回應（第 10 章）", en: "Answering his critics (ch 10)" },
    ch: [10],
    passages: ["10:1-18"],
    moves: [
      { zh: "不是屬血氣的兵器", en: "Not Weapons of the Flesh", ref: "10:4",
        dzh: "我們爭戰的兵器本不是屬血氣的，乃是在神面前有能力，可以攻破堅固的營壘。",
        den: "For the weapons of our warfare are not of the flesh, but mighty before God to the throwing down of strongholds," },
      { zh: "當指著主誇口", en: "Boast in the Lord", ref: "10:17-18",
        dzh: "但誇口的，當指著主誇口。因為蒙悅納的，不是自己稱許的，乃是主所稱許的。",
        den: "But “he who boasts, let him boast in the Lord.” For it isn’t he who commends himself who is approved, but whom the Lord commends." }
    ],
    traits: [
      { k: "strength", zh: "「藉著基督的溫柔、和平勸你們」（10:1）", en: "“I entreat you by the humility and gentleness of Christ” (10:1)" },
      { k: "weakness", zh: "別人說他「氣貌不揚，言語粗俗」（10:10）", en: "They say “his bodily presence is weak, and his speech is despised” (10:10)" }
    ],
    lesson: {
      zh: "有人說保羅「信上又沉重又厲害，及至見面卻是氣貌不揚」（10:10）。他的回答不是辯護外貌，而是說他的爭戰不在血氣：他攻破的是「各樣自高之事」，要使人的心意都順服基督（10:5）。他的標準不是自薦，而是「主所稱許的」（10:18）。",
      en: "Some say Paul’s “letters are weighty and strong, but his bodily presence is weak” (10:10). His answer does not defend his appearance but says his warfare is not of the flesh: he tears down “every high thing that is exalted against the knowledge of God,” bringing every thought to obey Christ (10:5). His standard is not self-commendation but “whom the Lord commends” (10:18)."
    },
    quote: { ref: "10:5",
      zh: "將人所有的心意奪回，使他都順服基督",
      en: "bringing every thought into captivity to the obedience of Christ" },
    keyVerses: ["10:1", "10:3", "10:4", "10:5", "10:7", "10:10", "10:12", "10:17", "10:18"],
    intro: {
      zh: "「我－保羅，就是與你們見面的時候是謙卑的，不在你們那裡的時候向你們是勇敢的，如今親自藉著基督的溫柔、和平勸你們。」（10:1）10:3-6 用軍事的比喻：兵器、營壘、計謀、心意，但爭戰的對象是各樣攔阻人認識神的思想，而不是人。10:12：他不敢與那些「自薦的人」比較。10:13-16 說他的範圍是神量給他的。信的語氣從這章起轉得嚴厲，直到信末。",
      en: "“Now I Paul, myself, entreat you by the humility and gentleness of Christ; I who in your presence am lowly among you, but being absent am bold toward you” (10:1). 10:3–6 uses a military image: weapons, strongholds, imaginations, thoughts, but the target is every thought that hinders the knowledge of God, not people. 10:12: he dares not compare himself with “those who commend themselves.” 10:13–16 says his sphere is what God measured out to him. The tone of the letter turns sharper from this chapter to the end."
    },
    tip: {
      zh: "第 10–13 章的語氣與 1–9 章不同，學者有不同解釋：有人認為是另一封（或較晚）的信，也有人認為是同一封信中，保羅轉向仍然抗拒他的那一小部分人。",
      en: "Chapters 10–13 differ in tone from 1–9, and scholars explain it differently: some think another (or later) letter, others that within one letter Paul turns to the minority still resisting him."
    },
    related: ["fools_speech", "thorn_in_the_flesh", "examine_yourselves", "unequally_yoked"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "fools_speech", book: "2corinthians", no: 16, kind: "other", type: "scheme", rarity: 4,
    zh: "愚妄人的話", en: "The Fool’s Speech",
    tag: { zh: "我若必須自誇，就誇那關乎我軟弱的事", en: "If I Must Boast, I Will Boast of My Weakness" },
    role: { zh: "假使徒與保羅的苦難（第 11 章）", en: "False apostles and Paul’s sufferings (ch 11)" },
    ch: [11],
    passages: ["11:1-33"],
    moves: [
      { zh: "我更是", en: "I Am More So", ref: "11:23",
        dzh: "我比他們多受勞苦，多下監牢，受鞭打是過重的，冒死是屢次有的。",
        den: "In labors more abundantly, in prisons more abundantly, in stripes above measure, in deaths often." },
      { zh: "從窗戶縋下去", en: "Let Down in a Basket", ref: "11:33",
        dzh: "我就從窗戶中，在筐子裡，從城牆上被人縋下去，脫離了他的手。",
        den: "Through a window I was let down in a basket by the wall, and escaped his hands." }
    ],
    traits: [
      { k: "strength", zh: "他的「自誇」清單是苦難，不是成就（11:23-29）", en: "His “boasting” list is of sufferings, not achievements (11:23–29)" },
      { k: "weakness", zh: "他自己稱這是「愚妄」（11:1）", en: "He himself calls it “foolishness” (11:1)" }
    ],
    lesson: {
      zh: "有人在哥林多以資歷、口才和神蹟自誇。保羅說：你們既然容讓愚妄人，就容讓我「愚妄」一下（11:1）。他的清單不是勝利，而是鞭打、船壞、危險、飢渴，以及「為眾教會掛心的事，天天壓在我身上」（11:28）。所以他的結論是：「我若必須自誇，就誇那關乎我軟弱的事便了」（11:30）。",
      en: "Some in Corinth boast of credentials, eloquence and signs. Paul says: since you put up with fools, put up with me in “a little foolishness” (11:1). His list is not of victories but of beatings, shipwrecks, dangers, hunger and thirst, and “that which presses on me daily: anxiety for all the assemblies” (11:28). His conclusion: “If I must boast, I will boast of the things that concern my weakness” (11:30)."
    },
    quote: { ref: "11:30",
      zh: "我若必須自誇，就誇那關乎我軟弱的事便了",
      en: "If I must boast, I will boast of the things that concern my weakness." },
    keyVerses: ["11:1", "11:2", "11:3", "11:4", "11:5", "11:13", "11:14", "11:23", "11:24", "11:25", "11:28", "11:30", "11:33"],
    intro: {
      zh: "「但願你們寬容我這一點愚妄。」（11:1）他為教會起「神那樣的憤恨」，要把她如貞潔的童女獻給基督（11:2），又怕他們像夏娃一樣被蛇誘惑（11:3）。11:13-15：那些是「假使徒」，就像撒但「裝作光明的天使」。11:24「被猶太人鞭打五次，每次四十減去一下」，呼應申命記 25:3 的四十下之限。11:32-33 說他在大馬士革被人從城牆上用筐子縋下去。",
      en: "“I wish that you would bear with me in a little foolishness” (11:1). He is jealous for the church “with a godly jealousy,” to present her as a pure virgin to Christ (11:2), and fears they will be deceived as Eve was by the serpent (11:3). 11:13–15: such are “false apostles,” as Satan “masquerades as an angel of light.” 11:24, “Five times from the Jews I received forty stripes minus one,” reflects the limit of forty in Deuteronomy 25:3. 11:32–33 tells of being let down in a basket through a window in the wall at Damascus."
    },
    tip: {
      zh: "「最大的使徒」（11:5、12:11）是指耶路撒冷的使徒，還是哥林多的反對者自稱的，書信沒有說得很清楚，解經家意見不一。",
      en: "Whether the “very best apostles” (11:5, 12:11) are the Jerusalem apostles or what Paul’s opponents in Corinth called themselves the letter does not say clearly; interpreters differ."
    },
    related: ["thorn_in_the_flesh", "weapons_of_warfare", "as_dying_yet_alive", "examine_yourselves"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "thorn_in_the_flesh", book: "2corinthians", no: 17, kind: "other", type: "vision", rarity: 5,
    zh: "肉體上的刺", en: "A Thorn in the Flesh",
    tag: { zh: "我的恩典夠你用的", en: "My Grace Is Sufficient for You" },
    role: { zh: "異象與軟弱（12:1-10）", en: "Visions and weakness (12:1–10)" },
    ch: [12],
    passages: ["12:1-13"],
    moves: [
      { zh: "三次求過主", en: "I Begged the Lord Three Times", ref: "12:8",
        dzh: "為這事，我三次求過主，叫這刺離開我。",
        den: "Concerning this thing, I begged the Lord three times that it might depart from me." },
      { zh: "我的恩典夠你用的", en: "My Grace Is Sufficient", ref: "12:9",
        dzh: "他對我說：「我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」",
        den: "He has said to me, “My grace is sufficient for you, for my power is made perfect in weakness.”" }
    ],
    traits: [
      { k: "strength", zh: "「我甚麼時候軟弱，甚麼時候就剛強了」（12:10）", en: "“When I am weak, then am I strong” (12:10)" },
      { k: "weakness", zh: "「有一根刺加在我肉體上」（12:7）", en: "“There was given to me a thorn in the flesh” (12:7)" }
    ],
    lesson: {
      zh: "保羅先說了一個「十四年前」的異象：一個在基督裡的人被提到第三層天，聽見人不可說的言語（12:2-4）。但他刻意用第三人稱，也不誇口。接著他說的不是異象的榮耀，而是一根刺，三次祈求，得到的回答是「不」，和「我的恩典夠你用的」。",
      en: "Paul first tells of a vision “fourteen years ago”: a man in Christ caught up into the third heaven, hearing unspeakable words (12:2–4). But he deliberately uses the third person and does not boast. What he then tells is not the glory of the vision but a thorn, three prayers, and an answer of “no” with “My grace is sufficient for you.”"
    },
    quote: { ref: "12:10",
      zh: "我甚麼時候軟弱，甚麼時候就剛強了",
      en: "when I am weak, then am I strong" },
    keyVerses: ["12:1", "12:2", "12:4", "12:5", "12:7", "12:8", "12:9", "12:10", "12:12"],
    intro: {
      zh: "「我自誇固然無益，但我是不得已的。如今我要說到主的顯現和啟示。」（12:1）12:7：「又恐怕我因所得的啟示甚大，就過於自高，所以有一根刺加在我肉體上，就是撒但的差役要攻擊我。」12:9：「他對我說：我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」12:11-12 他說自己沒有一件事在「最大的使徒」以下，使徒的憑據也在他們中間顯出來。",
      en: "“It is doubtless not profitable for me to boast. For I will come to visions and revelations of the Lord” (12:1). 12:7: “By reason of the exceeding greatness of the revelations, that I should not be exalted excessively, there was given to me a thorn in the flesh, a messenger of Satan to torment me.” 12:9: “He has said to me, ‘My grace is sufficient for you, for my power is made perfect in weakness.’” 12:11–12 he says he was in nothing inferior to the very best apostles and the signs of an apostle were worked among them."
    },
    tip: {
      zh: "「肉體上的刺」是甚麼，經文沒有說：古今有疾病（如眼疾、瘧疾）、反對他的人、試探等多種說法；「第三層天」與「樂園」是否同一件事，也有不同看法。",
      en: "What the “thorn in the flesh” was the text does not say: illness (eye trouble, malaria), opponents, temptation and more have been proposed; whether the “third heaven” and “Paradise” are one event is also debated."
    },
    related: ["fools_speech", "treasure_in_clay", "god_of_all_comfort", "examine_yourselves"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "examine_yourselves", book: "2corinthians", no: 18, kind: "other", type: "faith", rarity: 3,
    zh: "自己省察", en: "Examine Yourselves",
    tag: { zh: "願主耶穌基督的恩惠、神的慈愛、聖靈的感動，常與你們同在", en: "Grace, Love and Fellowship Be with You All" },
    role: { zh: "最後的話（12:14–13:14）", en: "The final words (12:14–13:14)" },
    ch: [12, 13],
    passages: ["12:14-21", "13:1-14"],
    moves: [
      { zh: "自己省察", en: "Test Yourselves", ref: "13:5",
        dzh: "你們總要自己省察有信心沒有，也要自己試驗。",
        den: "Examine your own selves, whether you are in the faith. Test your own selves." },
      { zh: "最後的祝福", en: "The Closing Blessing", ref: "13:14",
        dzh: "願主耶穌基督的恩惠、神的慈愛、聖靈的感動常與你們眾人同在！",
        den: "The grace of the Lord Jesus Christ, God’s love, and the fellowship of the Holy Spirit, be with you all." }
    ],
    traits: [
      { k: "strength", zh: "「這權柄原是為造就人，並不是為敗壞人」（13:10）", en: "“The authority which the Lord gave me for building up, and not for tearing down” (13:10)" },
      { k: "weakness", zh: "「我若再來，必不寬容」（13:2）", en: "“If I come again, I will not spare” (13:2)" }
    ],
    lesson: {
      zh: "信的最後一章帶著警告：第三次要去，要憑「兩三個人的口作見證」（13:1）。但保羅把質疑反問回去：你們要自己省察有信心沒有（13:5）。他的目的是「造就人，並不是敗壞人」（13:10），也說「我們軟弱，你們剛強，我們也歡喜」（13:9）。信以三一的祝福作結。",
      en: "The last chapter carries a warning: a third visit, on “the mouth of two or three witnesses” (13:1). But Paul turns the questioning back: examine yourselves whether you are in the faith (13:5). His aim is “building up, and not tearing down” (13:10), and “we rejoice when we are weak and you are strong” (13:9). The letter ends with a three-part blessing."
    },
    quote: { ref: "13:14",
      zh: "願主耶穌基督的恩惠、神的慈愛、聖靈的感動常與你們眾人同在",
      en: "The grace of the Lord Jesus Christ, God’s love, and the fellowship of the Holy Spirit, be with you all" },
    keyVerses: ["12:14", "12:15", "13:1", "13:2", "13:4", "13:5", "13:9", "13:10", "13:11", "13:14"],
    intro: {
      zh: "「這是我第三次要到你們那裡去。『憑兩三個人的口作見證，句句都要定準。』」（13:1）引自申命記 19:15。13:4：「他因軟弱被釘在十字架上，卻因神的大能仍然活著。我們也是這樣同他軟弱。」13:5 的「可棄絕的」，原文有「通不過試驗」的意思。13:11 的末了的話：「願弟兄們都喜樂。要作完全人；要受安慰；要同心合意；要彼此和睦。」13:14 是新約書信中父、子、聖靈並列的著名祝福。",
      en: "“This is the third time I am coming to you. ‘At the mouth of two or three witnesses shall every word be established’” (13:1), from Deuteronomy 19:15. 13:4: “For he was crucified through weakness, yet he lives through the power of God. For we also are weak in him.” “Disqualified” in 13:5 carries the sense of failing the test. 13:11, the last words: “Finally, brothers, rejoice. Be perfected, be comforted, be of the same mind, live in peace.” 13:14 is the well-known blessing naming Father, Son and Holy Spirit together in the New Testament letters."
    },
    tip: {
      zh: "13:14 的「感動」原文是 koinonia，可譯為「感動」「交通」或「同在、共享」；這節常被視為三一論的早期線索，各傳統的讀法略有不同。",
      en: "“Fellowship” in 13:14 is koinonia, which can be rendered “communion,” “sharing” or “fellowship”; the verse is often seen as an early trace of Trinitarian faith, read a little differently in different traditions."
    },
    related: ["thorn_in_the_flesh", "paul_writes_again", "weapons_of_warfare", "cheerful_giver"]
  }

);
