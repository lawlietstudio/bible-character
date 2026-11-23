// 聖經人物卡 · 馬可福音 (Mark) — book info + cards.
// Verse text comes from data/mark.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/mark.ccb.js (which has a placeholder for 9:45, a verse the 當代譯本 omits); `quote.zh` / `quote.en` are excerpts that
// scripts/validate.js checks against the first two. External references (Isa 40:3; Ps 22:1; Matt 8:23-27, 9:1-8, 19:13-15;
// Luke 8:26-39) appear in prose only.
// Flagged rather than decided: who wrote the book (anonymous; tradition says John Mark), the date, whether the earliest
// ending was 16:8 (16:9-20 is printed in both texts here), the identity of the "young man" of 14:51-52, and the two-stage
// healing of 8:22-26.

window.BOOKS.push({
  id: "mark",
  zh: "馬可福音", en: "Mark", abbr: { zh: "可", en: "Mark" },
  order: 41, section: { zh: "福音書", en: "Gospels" },
  chapters: 16,
  fan: ["cup_and_ransom", "jesus_son_of_god", "bartimaeus"],
  summary: {
    zh: "馬可福音是四本福音書裡最短的一卷，開頭就說「神的兒子，耶穌基督福音的起頭」（1:1），節奏很快，常說「立刻」。前半（1-8 章）是加利利的工作：趕鬼、醫病、教訓，人們問「這到底是誰」（4:41），到彼得說「你是基督」（8:29）為止；後半（8:31-16 章）轉向耶路撒冷與十字架，耶穌三次預告受難，教導門徒「人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價」（10:45），最後在十字架前，一個羅馬百夫長說「這人真是神的兒子！」（15:39）。全書在婦女「又發抖又驚奇，甚麼也不告訴人，因為她們害怕」（16:8）之後，接上後來附加的長結尾（16:9-20）。",
    en: "Mark is the shortest of the four Gospels and opens, “The beginning of the Good News of Jesus Christ, the Son of God” (1:1), at a fast pace, often saying “immediately.” The first half (chs 1–8) is the Galilean work: casting out demons, healing and teaching, with people asking “Who then is this?” (4:41), up to Peter’s “You are the Christ” (8:29); the second half (8:31–16) turns toward Jerusalem and the cross, Jesus foretelling his passion three times and teaching the disciples that “the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many” (10:45), and at the foot of the cross a Roman centurion says “Truly this man was the Son of God!” (15:39). The book reaches the women who “fled from the tomb, for trembling and astonishment had come on them… for they were afraid” (16:8), followed by the longer ending usually thought to have been added later (16:9–20)."
  },
  outline: [
    { zh: "神的兒子福音的起頭；受洗；呼召漁夫；迦百農的一天", en: "The beginning of the Good News; baptism; calling the fishermen; a day in Capernaum" },
    { zh: "癱子與四個朋友；與稅吏同席；安息日的主", en: "The paralytic and four friends; eating with tax collectors; lord of the Sabbath" },
    { zh: "手枯乾的人；十二使徒；耶穌的家人", en: "The man with the withered hand; the Twelve; Jesus’s family" },
    { zh: "比喻；種子自己生長；平靜風浪", en: "Parables; the seed that grows by itself; stilling the storm" },
    { zh: "群鬼；血漏的婦人；睚魯的女兒", en: "Legion; the woman with the flow of blood; Jairus’s daughter" },
    { zh: "拿撒勒；差遣十二人；約翰之死；五個餅；海上行走", en: "Nazareth; the Twelve sent; John’s death; five loaves; walking on the sea" },
    { zh: "潔淨與污穢；敘利腓尼基婦人；耳聾舌結的人", en: "Clean and unclean; the Syrophoenician woman; the deaf and mute man" },
    { zh: "餵四千人；伯賽大的瞎子；彼得的認信；背起十字架", en: "Feeding the four thousand; the blind man of Bethsaida; Peter’s confession; take up the cross" },
    { zh: "變像；「我信，但我信不足」；誰為大", en: "The transfiguration; “I believe, help my unbelief”; who is greatest" },
    { zh: "孩童；財主；贖價；巴底買", en: "Children; the rich man; the ransom; Bartimaeus" },
    { zh: "進耶路撒冷；無花果樹；潔淨聖殿", en: "Entering Jerusalem; the fig tree; cleansing the temple" },
    { zh: "園戶的比喻；納稅；最大的誡命；寡婦的兩個小錢", en: "The tenants; paying taxes; the great commandment; the widow’s two coins" },
    { zh: "末日的預告；「要警醒」", en: "The last things; “Watch”" },
    { zh: "抹膏；晚餐；客西馬尼；少年人；受審；彼得不認", en: "The anointing; the supper; Gethsemane; the young man; the trial; Peter’s denial" },
    { zh: "彼拉多；西門背十字架；十字架；埋葬", en: "Pilate; Simon carries the cross; the crucifixion; the burial" },
    { zh: "空墳墓；婦女的害怕；長結尾", en: "The empty tomb; the women’s fear; the longer ending" }
  ],
  notes: {
    zh: "小提示：馬可福音沒有署名，傳統上認為作者是約翰馬可（參使徒行傳 12:12），學者常認為它是最早寫成的福音書，但這是推論。早期的好抄本多在 16:8 結束，16:9-20 是否原有，學者看法不一；本站的和合本與 WEB 都印出 9-20 節。馬可福音有幾個獨有的細節：種子自己生長（4:26-29）、伯賽大的瞎子分兩次好（8:22-26）、少年人逃走（14:51-52）、古利奈人西門是亞力山大和魯孚的父親（15:21）。",
    en: "Good to know: Mark is anonymous; tradition says its author is John Mark (compare Acts 12:12), and scholars often take it to be the earliest Gospel, though that is an inference. The best early manuscripts mostly end at 16:8, and whether 16:9–20 was original is debated; both the CUV and WEB printed here include verses 9–20. Mark has several distinctive details: the seed that grows by itself (4:26–29), the Bethsaida blind man healed in two stages (8:22–26), the young man who fled (14:51–52), and Simon of Cyrene as the father of Alexander and Rufus (15:21)."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "jesus_son_of_god", book: "mark", no: 1, kind: "person", type: "heaven", rarity: 6,
    zh: "神的兒子耶穌", en: "Jesus, the Son of God",
    tag: { zh: "福音的起頭，快速行動的人", en: "The Beginning of the Good News, Always on the Move" },
    role: { zh: "基督・人子・神的兒子", en: "The Christ · the Son of Man · the Son of God" },
    ch: [1, 8, 15],
    passages: ["1:1", "1:11", "8:29", "15:39"],
    moves: [
      { zh: "你是我的愛子", en: "You Are My Beloved Son", ref: "1:11",
        dzh: "耶穌受洗時，有聲音從天上來說：你是我的愛子，我喜悅你。",
        den: "At his baptism a voice came out of the sky: “You are my beloved Son, in whom I am well pleased.”" },
      { zh: "這人真是神的兒子", en: "Truly the Son of God", ref: "15:39",
        dzh: "對面站著的百夫長看見耶穌這樣斷氣，就說：這人真是神的兒子！",
        den: "The centurion standing opposite saw how he breathed his last and said, “Truly this man was the Son of God!”" }
    ],
    traits: [
      { k: "strength", zh: "行動多於談話，「立刻」是全書的口頭禪", en: "More action than speech; “immediately” is the book’s catchword" },
      { k: "identity", zh: "全書的第一節與最後的人類認信都稱他「神的兒子」", en: "The first verse and the last human confession both call him “Son of God”" }
    ],
    lesson: {
      zh: "馬可福音的框架是三處宣告：天上的聲音（1:11）、彼得的「你是基督」（8:29）、十字架前羅馬百夫長的「這人真是神的兒子」（15:39）。最後一個認信者是在他死的時候，不是在他行神蹟的時候。",
      en: "Mark is framed by three declarations: the voice from heaven (1:11), Peter’s “You are the Christ” (8:29), and the Roman centurion’s “Truly this man was the Son of God” (15:39). The last confession comes at his death, not at a miracle."
    },
    quote: { ref: "1:1",
      zh: "耶穌基督福音的起頭",
      en: "The beginning of the Good News of Jesus Christ, the Son of God." },
    keyVerses: ["1:1", "1:11", "8:29", "10:45", "15:39"],
    intro: {
      zh: "馬可福音一開頭就是「神的兒子，耶穌基督福音的起頭」（1:1），沒有降生和家譜，直接從約翰施洗和耶穌受洗開始。書中的耶穌常被人群圍繞，有時沒有時間吃飯（3:20；6:31），也常常退到僻靜處禱告（1:35）。他稱自己為「人子」，並說人子來是要服事人，捨命作贖價（10:45）。",
      en: "Mark opens at once with “The beginning of the Good News of Jesus Christ, the Son of God” (1:1), with no birth or genealogy, going straight to John’s baptism and Jesus’s own. In the book Jesus is often surrounded by crowds, sometimes with no time to eat (3:20; 6:31), and often withdraws to a solitary place to pray (1:35). He calls himself “the Son of Man” and says the Son of Man came to serve and give his life as a ransom (10:45)."
    },
    tip: {
      zh: "馬可福音只有 16 章，是四福音裡最短的；這張卡只選了開頭、中間與結尾三個認信的位置。",
      en: "Mark has only 16 chapters, the shortest Gospel; this card picks just the three confession points."
    },
    related: ["busy_day_capernaum", "help_my_unbelief", "cup_and_ransom", "women_afraid"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "busy_day_capernaum", book: "mark", no: 2, kind: "other", type: "power", rarity: 3,
    zh: "迦百農的一天", en: "A Day in Capernaum",
    tag: { zh: "合城的人都聚集在門前", en: "The Whole City Gathered at the Door" },
    role: { zh: "公開工作的第一天（1:21-39）", en: "The first day of public work (1:21–39)" },
    ch: [1],
    passages: ["1:21-39"],
    moves: [
      { zh: "有權柄的教訓", en: "Teaching with Authority", ref: "1:22-25",
        dzh: "眾人希奇他的教訓，正像有權柄的人，不像文士；他斥責會堂裡的污鬼，叫他從人身上出來。",
        den: "The people were astonished at his teaching, as one having authority, not as the scribes; he rebuked the unclean spirit in the synagogue." },
      { zh: "天未亮，到曠野禱告", en: "Prayer Before Dawn", ref: "1:35",
        dzh: "次日早晨，天未亮的時候，耶穌起來，到曠野地方去，在那裡禱告。",
        den: "Early in the morning, while it was still dark, he rose up, went out into a deserted place, and prayed there." }
    ],
    traits: [
      { k: "strength", zh: "從會堂、到家中、到門前，一天不停", en: "From synagogue to house to doorstep, with no pause" },
      { k: "identity", zh: "鬼認識他：「神的聖者」（1:24）", en: "The spirits know him: “the Holy One of God” (1:24)" }
    ],
    lesson: {
      zh: "最忙的一天之後，耶穌選擇在天還黑的時候獨自禱告（1:35）。門徒找到他說「眾人都找你」（1:37），他卻說「我們可以往別處去」（1:38）。",
      en: "After the busiest day, Jesus chooses to pray alone while it is still dark (1:35). The disciples find him: “Everyone is looking for you” (1:37); he says, “Let’s go elsewhere” (1:38)."
    },
    quote: { ref: "1:35",
      zh: "次日早晨，天未亮的時候，耶穌起來，到曠野地方去，在那裡禱告",
      en: "Early in the morning, while it was still dark, he rose up and went out, and departed into a deserted place, and prayed there." },
    keyVerses: ["1:21", "1:22", "1:24", "1:31", "1:32", "1:34", "1:35"],
    intro: {
      zh: "安息日，耶穌在迦百農的會堂教訓人，一個被污鬼附著的人喊著說「我知道你是誰，乃是神的聖者」，耶穌斥責他，他就出來了（1:21-26）。他們出了會堂，進了西門和安得烈的家，西門的岳母正害熱病，耶穌拉著她的手，扶她起來，熱就退了（1:29-31）。天晚日落的時候，合城的人都聚集在門前，他治好了許多人（1:32-34）。",
      en: "On the Sabbath Jesus teaches in the Capernaum synagogue, and a man with an unclean spirit cries out, “I know who you are: the Holy One of God,” and Jesus rebukes it and it comes out (1:21–26). Leaving the synagogue they enter the house of Simon and Andrew; Simon’s mother-in-law has a fever, and Jesus takes her by the hand and lifts her up, and the fever leaves her (1:29–31). At evening, when the sun set, the whole city is gathered at the door, and he heals many (1:32–34)."
    },
    tip: {
      zh: "「不許鬼說話，因為鬼認識他」（1:34）是馬可福音常見的「彌賽亞的祕密」主題之一。",
      en: "“He wouldn’t allow the demons to speak, because they knew him” (1:34) is one thread of Mark’s “messianic secret” theme."
    },
    related: ["jesus_son_of_god", "roof_friends", "lord_of_sabbath", "legion"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "roof_friends", book: "mark", no: 3, kind: "other", type: "faith", rarity: 5,
    zh: "拆了房頂的四個人", en: "The Four Who Opened the Roof",
    tag: { zh: "耶穌見他們的信心", en: "Jesus, Seeing Their Faith" },
    role: { zh: "癱子的醫治（2:1-12）", en: "Healing the paralytic (2:1–12)" },
    ch: [2],
    passages: ["2:1-12"],
    moves: [
      { zh: "拆了房頂，縋下來", en: "Through the Roof", ref: "2:3-4",
        dzh: "有人用四個人抬著一個癱子來；因為人多，就拆了房頂，把癱子連褥子縋下來。",
        den: "Four people carried a paralytic; because of the crowd, they removed the roof and let down the mat he was lying on." },
      { zh: "小子，你的罪赦了", en: "Your Sins Are Forgiven", ref: "2:5",
        dzh: "耶穌見他們的信心，就對癱子說：小子，你的罪赦了。",
        den: "Jesus, seeing their faith, said to the paralytic, “Son, your sins are forgiven you.”" }
    ],
    traits: [
      { k: "strength", zh: "四個朋友不肯讓人群擋住", en: "Four friends who would not let the crowd stop them" },
      { k: "identity", zh: "癱子自己沒有說一句話", en: "The paralytic himself says nothing" }
    ],
    lesson: {
      zh: "癱子一句話也沒說，是他的朋友把他帶來，拆了別人的房頂。耶穌「見他們的信心」（2:5）。然後他先說的是赦罪，文士在心裡議論，他才叫癱子起來（2:5-11）。",
      en: "The paralytic says nothing; his friends bring him and tear open someone’s roof. Jesus “saw their faith” (2:5). He speaks forgiveness first; the scribes reason in their hearts, and only then does he tell the man to rise (2:5–11)."
    },
    quote: { ref: "2:5",
      zh: "耶穌見他們的信心，就對癱子說：「小子，你的罪赦了。」",
      en: "Jesus, seeing their faith, said to the paralytic, “Son, your sins are forgiven you.”" },
    keyVerses: ["2:1", "2:3", "2:4", "2:5", "2:7", "2:11", "2:12"],
    intro: {
      zh: "耶穌回到迦百農，在房子裡傳道，人多到門口也擠滿了（2:1-2）。有人用四個人抬著一個癱子來，進不去，就拆了房頂，把癱子縋下來（2:3-4）。耶穌說他的罪赦了；有幾個文士心裡說「他說僭妄的話了，除了神以外，誰能赦罪呢？」（2:6-7）耶穌就對癱子說：「我吩咐你，起來！拿你的褥子回家去吧。」（2:11）那人立刻拿起褥子，眾人都驚奇，歸榮耀與神（2:12）。馬太福音 9:1-8 也有這個故事，但沒有拆房頂的細節。",
      en: "Jesus returns to Capernaum and speaks in a house so crowded that even the doorway is full (2:1–2). Four people carry a paralytic; they cannot get in, so they remove the roof and lower the mat (2:3–4). Jesus says his sins are forgiven; some scribes reason in their hearts, “Why does this man speak blasphemies like this? Who can forgive sins but God alone?” (2:6–7). Jesus says to the paralytic, “I tell you, arise, take up your mat, and go to your house” (2:11). He immediately takes up the mat and the people are amazed and glorify God (2:12). Matthew 9:1–8 also has the story, without the roof."
    },
    tip: {
      zh: "當時巴勒斯坦的房頂多是平的、用木梁和泥土蓋成，從外面可以爬上去、拆開。",
      en: "Roofs in Palestine then were usually flat, built of beams and earth, reached from outside and possible to open."
    },
    related: ["busy_day_capernaum", "lord_of_sabbath", "hem_of_garment", "bartimaeus"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "lord_of_sabbath", book: "mark", no: 4, kind: "other", type: "wisdom", rarity: 3,
    zh: "安息日的主", en: "The Lord of the Sabbath",
    tag: { zh: "安息日是為人設立的", en: "The Sabbath Was Made for Man" },
    role: { zh: "安息日的爭論（2:23-3:6）", en: "Sabbath controversies (2:23–3:6)" },
    ch: [2, 3],
    passages: ["2:23-28", "3:1-6"],
    moves: [
      { zh: "為人設立的", en: "Made for Man", ref: "2:27-28",
        dzh: "安息日是為人設立的，人不是為安息日設立的；所以，人子也是安息日的主。",
        den: "“The Sabbath was made for man, not man for the Sabbath. Therefore the Son of Man is lord even of the Sabbath.”" },
      { zh: "救命還是害命", en: "To Save a Life or to Kill", ref: "3:4-5",
        dzh: "耶穌問：在安息日行善行惡，救命害命，哪樣是可以的呢？他們都不作聲。",
        den: "“Is it lawful on the Sabbath day to do good, or to do harm? To save a life, or to kill?” But they were silent." }
    ],
    traits: [
      { k: "strength", zh: "用一個問題把兩邊的立場都攤開", en: "A single question lays both positions bare" },
      { k: "weakness", zh: "他們「都不作聲」（3:4）", en: "They “were silent” (3:4)" }
    ],
    lesson: {
      zh: "兩個安息日的爭論：門徒掐麥穗（2:23-26）和手枯乾的人（3:1-5）。耶穌的回答先說安息日的目的（2:27），再把問題變成「救命還是害命」（3:4）。3:5 說他「怒目周圍看他們，憂愁他們的心剛硬」。",
      en: "Two Sabbath disputes: the disciples plucking grain (2:23–26) and the man with the withered hand (3:1–5). Jesus first states the Sabbath’s purpose (2:27), then turns the question into “save a life or kill” (3:4). 3:5 says he “looked around at them with anger, being grieved at the hardening of their hearts.”"
    },
    quote: { ref: "2:27",
      zh: "安息日是為人設立的，人不是為安息日設立的",
      en: "The Sabbath was made for man, not man for the Sabbath." },
    keyVerses: ["2:23", "2:27", "2:28", "3:1", "3:4", "3:5", "3:6"],
    intro: {
      zh: "安息日，耶穌和門徒從麥地經過，門徒掐麥穗，法利賽人說這不可以（2:23-24）。耶穌引用大衛的例子（2:25-26），然後說了「安息日是為人設立的」（2:27）。又一個安息日，會堂裡有一個手枯乾的人，有人窺探耶穌會不會醫治（3:1-2）。耶穌叫那人站起來，問眾人「救命害命，哪樣是可以的呢？」他們不作聲，耶穌就醫好那人（3:3-5）。法利賽人出去，同希律一黨的人商議怎樣可以除滅耶穌（3:6）。",
      en: "On a Sabbath Jesus and his disciples pass through grain fields, the disciples pluck heads of grain, and the Pharisees say this is not lawful (2:23–24). Jesus cites the example of David (2:25–26) and then says “The Sabbath was made for man” (2:27). On another Sabbath there is a man with a withered hand in the synagogue, and some watch to see if Jesus will heal (3:1–2). Jesus has the man stand and asks “to save a life or to kill?”; they are silent, and Jesus heals the man (3:3–5). The Pharisees go out and with the Herodians plot how to destroy Jesus (3:6)."
    },
    tip: {
      zh: "「人子」在這裡指耶穌自己，也可譯作「人」（參 2:27-28）；兩種讀法都有人採用。",
      en: "“Son of Man” here refers to Jesus himself, though it can also be read as “man” generally (compare 2:27–28); both readings are held."
    },
    related: ["roof_friends", "jesus_family", "busy_day_capernaum", "jesus_son_of_god"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "jesus_family", book: "mark", no: 5, kind: "other", type: "love", rarity: 3,
    zh: "誰是我的母親，誰是我的弟兄", en: "Who Are My Mother and My Brothers?",
    tag: { zh: "凡遵行神旨意的人", en: "Whoever Does the Will of God" },
    role: { zh: "家人在門外（3:20-35）", en: "Family outside the door (3:20–35)" },
    ch: [3],
    passages: ["3:20-35"],
    moves: [
      { zh: "誰是我的母親", en: "Who Is My Mother?", ref: "3:33-34",
        dzh: "耶穌回答：誰是我的母親？誰是我的弟兄？就四面觀看那周圍坐著的人。",
        den: "He answered, “Who are my mother and my brothers?” and looked around at those who sat around him." },
      { zh: "遵行神旨意的人", en: "Those Who Do God’s Will", ref: "3:35",
        dzh: "凡遵行神旨意的人就是我的弟兄姊妹和母親了。",
        den: "“For whoever does the will of God, the same is my brother, and my sister, and mother.”" }
    ],
    traits: [
      { k: "strength", zh: "把「家人」重新定義", en: "Redefines “family”" },
      { k: "identity", zh: "「四面觀看」周圍坐著的人", en: "“Looking around” at those seated around him" }
    ],
    lesson: {
      zh: "這段嵌在另一段爭論之中：親屬說「他癲狂了」（3:21），文士說「他是靠鬼王趕鬼」（3:22）。耶穌的回答不是否認家人，而是指向「周圍坐著的人」：遵行神旨意的人，都是家人。",
      en: "This passage is sandwiched in another dispute: relatives say “He is insane” (3:21) and scribes say “He has Beelzebul” (3:22). Jesus’s answer does not deny his family but points to “those who sat around him”: whoever does God’s will is family."
    },
    quote: { ref: "3:35",
      zh: "凡遵行神旨意的人就是我的弟兄姊妹和母親了",
      en: "For whoever does the will of God, the same is my brother, and my sister, and mother." },
    keyVerses: ["3:20", "3:21", "3:31", "3:33", "3:34", "3:35"],
    intro: {
      zh: "耶穌進了一個屋子，眾人又聚集，甚至他和門徒連飯也顧不得吃（3:20）。他的親屬聽見，就出來要拉住他，因為他們說他癲狂了（3:21）。後來他的母親和弟兄來了，站在外邊，打發人去叫他（3:31）。眾人對耶穌說，你的母親和你的弟兄在外邊找你；他回答「誰是我的母親？誰是我的弟兄？」（3:32-33），然後說了這段話。馬可福音這裡的記載比馬太福音 12:46-50 更顯出家人的不解。",
      en: "Jesus goes into a house and the crowd gathers again, so that they cannot even eat (3:20). His relatives hear and come to seize him, for they say, “He is insane” (3:21). Later his mother and brothers come, stand outside and send in to call him (3:31). He is told his mother and brothers are outside looking for him; he answers “Who are my mother and my brothers?” (3:32–33) and then says this. Mark shows the family’s incomprehension more sharply than Matthew 12:46–50."
    },
    tip: {
      zh: "「弟兄」是耶穌的親兄弟、堂表兄弟，還是別的親屬，各教會傳統有不同看法。",
      en: "Whether the “brothers” are Jesus’s full brothers, cousins or other relatives, church traditions differ."
    },
    related: ["lord_of_sabbath", "seed_grows", "storm_cushion", "jesus_son_of_god"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "seed_grows", book: "mark", no: 6, kind: "other", type: "harvest", rarity: 3,
    zh: "自己生長的種子", en: "The Seed That Grows by Itself",
    tag: { zh: "那人卻不曉得如何這樣", en: "Though He Doesn’t Know How" },
    role: { zh: "馬可獨有的比喻（4:26-29）", en: "A parable only Mark has (4:26–29)" },
    ch: [4],
    passages: ["4:26-34"],
    moves: [
      { zh: "那人卻不曉得", en: "He Doesn’t Know How", ref: "4:27",
        dzh: "黑夜睡覺，白日起來，這種就發芽漸長，那人卻不曉得如何這樣。",
        den: "He sleeps and rises night and day, and the seed springs up and grows, though he doesn’t know how." },
      { zh: "先發苗，後長穗", en: "First the Blade, Then the Ear", ref: "4:28-29",
        dzh: "先發苗，後長穗，再後穗上結成飽滿的子粒；穀既熟了，就用鐮刀去割。",
        den: "First the blade, then the ear, then the full grain in the ear; when it is ripe, he puts in the sickle." }
    ],
    traits: [
      { k: "strength", zh: "生長是土地自己的事（4:28 「出於自然」）", en: "Growth is the earth’s own doing (4:28 “by itself”)" },
      { k: "identity", zh: "只有馬可福音有這個比喻", en: "Only Mark has this parable" }
    ],
    lesson: {
      zh: "撒種的人撒了就去睡覺，「那人卻不曉得如何這樣」（4:27）；種子的生長按先後順序進行（4:28）。收成之前，農夫的工作很少；收成之時，他立刻動手（4:29）。",
      en: "The sower sows and goes about his sleeping and rising, “though he doesn’t know how” (4:27); the growth follows its order (4:28). Before harvest the farmer’s work is small; when harvest comes, he acts immediately (4:29)."
    },
    quote: { ref: "4:27",
      zh: "黑夜睡覺，白日起來，這種就發芽漸長，那人卻不曉得如何這樣",
      en: "and should sleep and rise night and day, and the seed should spring up and grow, though he doesn’t know how." },
    keyVerses: ["4:26", "4:27", "4:28", "4:29", "4:30", "4:31", "4:32"],
    intro: {
      zh: "馬可福音第 4 章的比喻有撒種（4:1-20）、燈臺（4:21-23）、量器（4:24-25），然後是這個只在馬可福音出現的比喻：「神的國如同人把種撒在地上。黑夜睡覺，白日起來，這種就發芽漸長，那人卻不曉得如何這樣。」（4:26-27）4:30-32 接著是芥菜種：極小，長起來卻比各樣的菜都大，空中的飛鳥能宿在它的蔭下。4:33-34 說耶穌用許多這樣的比喻對眾人講道，沒有人時才給門徒講解。",
      en: "The parables of Mark 4 include the sower (4:1–20), the lamp (4:21–23), the measure (4:24–25), and then this parable found only in Mark: “God’s Kingdom is as if a man should cast seed on the earth, and should sleep and rise night and day, and the seed should spring up and grow, though he doesn’t know how” (4:26–27). Verses 30–32 follow with the mustard seed: the smallest, yet it grows greater than all herbs, so that the birds can lodge under its shade. Verses 33–34 say Jesus spoke many such parables to the crowd and explained them privately to the disciples."
    },
    tip: {
      zh: "這個比喻的重點，是強調神的國自己生長，還是強調收成的時機，注釋書有不同說法。",
      en: "Whether the point is that God’s Kingdom grows by itself or that the harvest has its time, commentaries differ."
    },
    related: ["storm_cushion", "jesus_family", "five_loaves_mark", "jesus_son_of_god"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "storm_cushion", book: "mark", no: 7, kind: "other", type: "power", rarity: 4,
    zh: "船尾的枕頭", en: "The Cushion in the Stern",
    tag: { zh: "夫子！我們喪命，你不顧嗎？", en: "Teacher, Don’t You Care That We Are Dying?" },
    role: { zh: "海上的風浪（4:35-41）", en: "The storm at sea (4:35–41)" },
    ch: [4],
    passages: ["4:35-41"],
    moves: [
      { zh: "你不顧嗎", en: "Don’t You Care?", ref: "4:38",
        dzh: "耶穌在船尾上，枕著枕頭睡覺；門徒叫醒了他說：夫子！我們喪命，你不顧嗎？",
        den: "He was in the stern, asleep on the cushion; they woke him: “Teacher, don’t you care that we are dying?”" },
      { zh: "住了吧！靜了吧！", en: "Peace! Be Still!", ref: "4:39",
        dzh: "耶穌醒了，斥責風，向海說：住了吧！靜了吧！風就止住，大大地平靜了。",
        den: "He awoke, rebuked the wind, and said to the sea, “Peace! Be still!” and there was a great calm." }
    ],
    traits: [
      { k: "strength", zh: "睡在風浪中的人，一句話使風浪平靜", en: "The sleeper in the storm calms it with a word" },
      { k: "weakness", zh: "門徒的問題是「你不顧嗎」", en: "The disciples’ question is “don’t you care?”" }
    ],
    lesson: {
      zh: "門徒的問題不是「你能不能」，而是「你不顧嗎？」（4:38）。風浪平靜之後，耶穌的問題也不是風浪，而是「為甚麼膽怯？你們還沒有信心嗎？」（4:40）。門徒反而「大大地懼怕」：「這到底是誰？」（4:41）",
      en: "The disciples’ question is not “can you?” but “don’t you care?” (4:38). After the calm, Jesus’s question is not about the storm but “Why are you so afraid? Do you still have no faith?” (4:40). The disciples are then “greatly afraid”: “Who then is this?” (4:41)."
    },
    quote: { ref: "4:38",
      zh: "夫子！我們喪命，你不顧嗎",
      en: "Teacher, don’t you care that we are dying?" },
    keyVerses: ["4:35", "4:37", "4:38", "4:39", "4:40", "4:41"],
    intro: {
      zh: "那天晚上，耶穌對門徒說「我們渡到那邊去吧」（4:35）。他們離開眾人，把他帶上船，同行的還有別的船（4:36）。忽然起了暴風，波浪打入船內，甚至船要滿了水（4:37）。耶穌在船尾上枕著枕頭睡覺。馬太福音 8:23-27 也記這件事，但沒有「枕頭」和「你不顧嗎」這兩個細節。馬可福音的結尾是門徒彼此說：「這到底是誰，連風和海也聽從他了。」（4:41）",
      en: "That evening Jesus says to the disciples, “Let’s go over to the other side” (4:35). Leaving the crowd, they take him in the boat as he was, and other boats go with them (4:36). A great windstorm arises and the waves beat into the boat so that it is already filling (4:37). Jesus is in the stern, asleep on a cushion. Matthew 8:23–27 also records this, without the “cushion” and “don’t you care” details. Mark ends it with the disciples saying, “Who then is this, that even the wind and the sea obey him?” (4:41)."
    },
    tip: {
      zh: "「枕頭」可指船夫的皮墊或枕頭；這個細節只有馬可福音有。",
      en: "The “cushion” may be a boatman’s leather pad or pillow; the detail is only in Mark."
    },
    related: ["seed_grows", "legion", "jesus_family", "hem_of_garment"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "legion", book: "mark", no: 8, kind: "person", type: "beast", rarity: 4,
    zh: "名叫「群」的人", en: "The Man Called Legion",
    tag: { zh: "回家去，告訴他們主為你做了何等大的事", en: "Go Home and Tell What the Lord Has Done" },
    role: { zh: "格拉森人的地方（5:1-20）", en: "The country of the Gerasenes (5:1–20)" },
    ch: [5],
    passages: ["5:1-20"],
    moves: [
      { zh: "我名叫「群」", en: "My Name Is Legion", ref: "5:9",
        dzh: "耶穌問他：你名叫甚麼？回答說：我名叫「群」，因為我們多的緣故。",
        den: "Jesus asked, “What is your name?” “My name is Legion, for we are many.”" },
      { zh: "將主為你所做的告訴他們", en: "Tell What the Lord Has Done", ref: "5:19",
        dzh: "耶穌不許他同去，卻說：你回家去，到你的親屬那裡，將主為你所做的是何等大的事都告訴他們。",
        den: "He didn’t allow him but said, “Go to your house, to your friends, and tell them what great things the Lord has done for you.”" }
    ],
    traits: [
      { k: "strength", zh: "從墳塋到「坐著、穿上衣服、心裡明白」（5:15）", en: "From the tombs to “sitting, clothed, in his right mind” (5:15)" },
      { k: "weakness", zh: "沒有人能制伏他，他用石頭砍自己（5:3-5）", en: "No one could subdue him; he cut himself with stones (5:3–5)" }
    ],
    lesson: {
      zh: "醫治之後，鎮上的人看見他坐著、穿上衣服、心裡明白，竟然「害怕」，求耶穌離開（5:15-17）。那人求同去，耶穌卻叫他回家作見證，他就在低加坡里傳開（5:18-20）。",
      en: "After the healing the townspeople see him sitting, clothed and in his right mind, and are “afraid,” asking Jesus to leave (5:15–17). The man asks to go with him, but Jesus sends him home as a witness, and he proclaims it in the Decapolis (5:18–20)."
    },
    quote: { ref: "5:9",
      zh: "我名叫『群』，因為我們多的緣故",
      en: "My name is Legion, for we are many." },
    keyVerses: ["5:1", "5:2", "5:5", "5:9", "5:13", "5:15", "5:19", "5:20"],
    intro: {
      zh: "耶穌渡到海那邊格拉森人的地方，一下船就有一個被污鬼附著的人從墳塋裡出來迎著他（5:1-2）。這人沒有人能捆住，晝夜在墳塋和山中喊叫，用石頭砍自己（5:3-5）。污鬼求耶穌打發他們進豬群，約有兩千，闖下山崖淹死在海裡（5:12-13）。放豬的跑去告訴城裡的人，眾人來看，就害怕（5:14-15）。「群」（Legion）是羅馬軍團的名稱，約有六千人；這裡是說鬼多。路加福音 8:26-39 也有這個故事。",
      en: "Jesus crosses to the country of the Gerasenes, and as he gets out of the boat a man with an unclean spirit comes out of the tombs to meet him (5:1–2). No one could bind him; night and day he cried out among the tombs and in the mountains, cutting himself with stones (5:3–5). The spirits beg to be sent into the swine, about two thousand, which rush down the steep bank into the sea and drown (5:12–13). The herdsmen flee and tell the town, and the people come and are afraid (5:14–15). “Legion” was the name of a Roman unit of several thousand; here it means the spirits were many. Luke 8:26–39 also tells the story."
    },
    tip: {
      zh: "「格拉森」的位置，各福音書的抄本略有不同（加大拉、格拉森、格迦撒）；馬可福音這裡用「格拉森人的地方」。",
      en: "The location (Gadarenes, Gerasenes, Gergesenes) differs among manuscripts of the Gospels; Mark here has “the country of the Gerasenes.”"
    },
    related: ["storm_cushion", "hem_of_garment", "busy_day_capernaum", "help_my_unbelief"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "hem_of_garment", book: "mark", no: 9, kind: "person", type: "faith", rarity: 4,
    zh: "摸耶穌衣裳的婦人", en: "The Woman Who Touched His Clothes",
    tag: { zh: "女兒，你的信救了你", en: "Daughter, Your Faith Has Made You Well" },
    role: { zh: "十二年的血漏（5:25-34）", en: "Twelve years of bleeding (5:25–34)" },
    ch: [5],
    passages: ["5:25-34"],
    moves: [
      { zh: "我只摸他的衣裳", en: "If I Just Touch His Clothes", ref: "5:28-29",
        dzh: "她想：我只摸他的衣裳，就必痊癒。於是她血漏的源頭立刻乾了。",
        den: "She said, “If I just touch his clothes, I will be made well,” and immediately the flow of her blood was dried up." },
      { zh: "女兒，你的信救了你", en: "Daughter, Your Faith", ref: "5:34",
        dzh: "耶穌對她說：女兒，你的信救了你，平平安安地回去吧！",
        den: "He said to her, “Daughter, your faith has made you well. Go in peace.”" }
    ],
    traits: [
      { k: "strength", zh: "混在人群中，只想悄悄摸一下", en: "In the crowd, wanting only to touch him quietly" },
      { k: "weakness", zh: "十二年，花盡一切，病反而重了（5:26）", en: "Twelve years, all her money spent, only worse (5:26)" }
    ],
    lesson: {
      zh: "耶穌「覺得有能力從自己身上出去」（5:30），回頭問「誰摸我的衣裳？」；婦人戰戰兢兢，把實情都告訴了他（5:33）。他稱她為「女兒」，使她不只身體痊癒，也當眾得到接納。",
      en: "Jesus “perceived in himself that the power had gone out from him” (5:30) and turns to ask, “Who touched my clothes?”; the woman, trembling, tells him the whole truth (5:33). He calls her “Daughter,” so that she is not only healed but publicly received."
    },
    quote: { ref: "5:34",
      zh: "女兒，你的信救了你，平平安安地回去吧",
      en: "Daughter, your faith has made you well. Go in peace" },
    keyVerses: ["5:25", "5:26", "5:28", "5:29", "5:30", "5:33", "5:34"],
    intro: {
      zh: "耶穌去睚魯家的路上，有許多人擁擠他（5:24）。有一個患了十二年血漏的婦人，在好些醫生手裡受了許多的苦，花盡了她所有的，一點也不見好，病勢反倒更重了（5:25-26）。她聽見耶穌的事，就從後面來，在眾人中間摸他的衣裳（5:27）。耶穌回頭問是誰，她就來，俯伏，將實情告訴他（5:33）。按當時的規定，血漏使人在儀式上不潔，所以她不敢公開出來。",
      en: "On the way to Jairus’s house the crowd presses on Jesus (5:24). A woman who had had a flow of blood for twelve years, who had suffered much under many physicians and spent all she had without any help but rather grew worse (5:25–26), heard of Jesus, came behind him in the crowd and touched his clothes (5:27). Jesus turns to ask who, and she comes, falls down and tells him the whole truth (5:33). Under the rules of the time such bleeding made a person ritually unclean, which is why she did not dare come forward openly."
    },
    tip: {
      zh: "她的「不潔」依利未記的規定，這裡沒有細說；馬可福音強調的是她的信和耶穌稱她為「女兒」。",
      en: "Her “uncleanness” under the Levitical rules is not detailed here; Mark stresses her faith and Jesus calling her “daughter.”"
    },
    related: ["jairus_daughter", "roof_friends", "bartimaeus", "legion"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "jairus_daughter", book: "mark", no: 10, kind: "person", type: "love", rarity: 4,
    zh: "睚魯的女兒", en: "Jairus’s Daughter",
    tag: { zh: "不要怕，只要信", en: "Don’t Be Afraid, Only Believe" },
    role: { zh: "管會堂的睚魯（5:21-24、35-43）", en: "The synagogue ruler Jairus (5:21–24, 35–43)" },
    ch: [5],
    passages: ["5:21-24", "5:35-43"],
    moves: [
      { zh: "不要怕，只要信", en: "Only Believe", ref: "5:35-36",
        dzh: "有人來說「你的女兒死了，何必還勞動先生呢？」耶穌對睚魯說：不要怕，只要信！",
        den: "Some came: “Your daughter is dead. Why bother the Teacher?” Jesus said to Jairus, “Don’t be afraid, only believe.”" },
      { zh: "大利大，古米", en: "Talitha Cumi", ref: "5:41-42",
        dzh: "耶穌拉著孩子的手，說：大利大，古米！（閨女，我吩咐你起來！）那閨女立時起來走。",
        den: "Taking the child by the hand he said, “Talitha cumi!” (“Girl, I tell you, get up!”); immediately the girl rose and walked." }
    ],
    traits: [
      { k: "strength", zh: "「睡著了，不是死了」（5:39）", en: "“Not dead but sleeping” (5:39)" },
      { k: "identity", zh: "閨女十二歲（5:42）", en: "The girl is twelve years old (5:42)" }
    ],
    lesson: {
      zh: "睚魯去求耶穌的時候，女兒「快要死了」；在途中被血漏婦人耽擱，人就來報女兒死了（5:35）。耶穌對他說「不要怕，只要信」，並把哭嚷的人攆出去，只帶孩子的父母和三個門徒進去（5:36-40）。",
      en: "When Jairus goes to Jesus, his daughter is “at the point of death”; delayed by the woman with the flow of blood, the news comes that she is dead (5:35). Jesus says “Don’t be afraid, only believe,” puts out the weeping crowd, and takes only the child’s parents and three disciples in (5:36–40)."
    },
    quote: { ref: "5:36",
      zh: "不要怕，只要信",
      en: "Don’t be afraid, only believe" },
    keyVerses: ["5:22", "5:23", "5:35", "5:36", "5:39", "5:41", "5:42"],
    intro: {
      zh: "有一個管會堂的人，名叫睚魯，俯伏在耶穌腳前，再三地求他：「我的小女兒快要死了，求你去按手在她身上，使她痊癒，得以活了。」（5:22-23）耶穌就和他同去。到了他家，那裡有人亂嚷，大大地哭泣哀號（5:38）。耶穌說「孩子不是死了，是睡著了」，他們就嗤笑他（5:39-40）。他拉著孩子的手，用亞蘭語說「大利大，古米」，那閨女立時起來走；耶穌吩咐給她東西吃（5:41-43）。",
      en: "A synagogue ruler named Jairus falls at Jesus’s feet and begs, “My little daughter is at the point of death. Please come and lay your hands on her, that she may be made well, and live” (5:22–23). Jesus goes with him. At the house there is a commotion, with people weeping and wailing loudly (5:38). Jesus says, “The child is not dead, but sleeping,” and they laugh at him (5:39–40). He takes the child by the hand, says in Aramaic “Talitha cumi,” and the girl rises and walks; he tells them to give her something to eat (5:41–43)."
    },
    tip: {
      zh: "「睡著了」是說她要被喚醒，還是說她並未真的死，經文的上下文（5:35、40）更像前者。",
      en: "“Sleeping” is read as meaning she will be awakened, or that she was not truly dead; the context (5:35, 40) reads more like the former."
    },
    related: ["hem_of_garment", "legion", "storm_cushion", "help_my_unbelief"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "five_loaves_mark", book: "mark", no: 11, kind: "other", type: "harvest", rarity: 4,
    zh: "草地上的五千人", en: "Five Thousand on the Grass",
    tag: { zh: "如同羊沒有牧人一般", en: "Like Sheep Without a Shepherd" },
    role: { zh: "餵飽眾人（6:30-44）", en: "Feeding the crowd (6:30–44)" },
    ch: [6],
    passages: ["6:30-44"],
    moves: [
      { zh: "憐憫他們", en: "Compassion", ref: "6:34",
        dzh: "耶穌見有許多的人，就憐憫他們，因為他們如同羊沒有牧人一般，於是教訓他們許多道理。",
        den: "He had compassion on them because they were like sheep without a shepherd, and he began to teach them many things." },
      { zh: "五個餅，兩條魚", en: "Five Loaves, Two Fish", ref: "6:41-42",
        dzh: "耶穌拿著這五個餅，兩條魚，望著天祝福，擘開餅，遞給門徒，擺在眾人面前；他們都吃，並且吃飽了。",
        den: "He took the five loaves and the two fish, looked up to heaven, blessed and broke the loaves; they all ate and were filled." }
    ],
    traits: [
      { k: "strength", zh: "先教訓，再餵飽", en: "First teaches, then feeds" },
      { k: "identity", zh: "「一排一排」坐在青草地上（6:39-40）", en: "Seated “in groups” on the green grass (6:39–40)" }
    ],
    lesson: {
      zh: "耶穌本來要帶門徒退到僻靜處歇息（6:31），群眾卻先趕到了；他「就憐憫他們」（6:34）。吃飯時他叫門徒「你們給他們吃吧」（6:37），他們先看自己的缺乏，而他從他們手中的五個餅開始。",
      en: "Jesus meant to take the disciples to a quiet place to rest (6:31), but the crowd arrived first; he “had compassion on them” (6:34). At mealtime he says, “You give them something to eat” (6:37); they see only their lack, and he starts from the five loaves in their hands."
    },
    quote: { ref: "6:34",
      zh: "就憐憫他們，因為他們如同羊沒有牧人一般",
      en: "he had compassion on them, because they were like sheep without a shepherd" },
    keyVerses: ["6:30", "6:31", "6:34", "6:37", "6:39", "6:41", "6:42", "6:43"],
    intro: {
      zh: "使徒回來向耶穌報告所做的事，耶穌說「你們來，同我暗暗地到曠野地方去歇一歇」（6:30-31）。眾人卻認出他們，從各城步行趕在前頭（6:33）。耶穌出來見許多人，就憐憫他們（6:34）。天晚了，門徒要他打發眾人去買吃的，他說「你們給他們吃吧」（6:35-37）。他吩咐眾人一排一排地坐在青草地上，有一百一排的，有五十一排的（6:39-40）。這是四福音共有的少數事蹟之一。",
      en: "The apostles return and report, and Jesus says, “Come away into a deserted place and rest awhile” (6:30–31). But the crowds recognize them and hurry on foot ahead from all the cities (6:33). Jesus comes out, sees a great multitude and has compassion on them (6:34). When it is late the disciples want to send the crowd away to buy food; he says “You give them something to eat” (6:35–37). He has the people sit in groups on the green grass, in hundreds and in fifties (6:39–40). It is one of the few events recorded in all four Gospels."
    },
    tip: {
      zh: "「五千」是男人的數目（馬太福音 14:21 說除了婦女孩子）；馬可福音沒有說婦女孩子。",
      en: "“Five thousand” counts the men (Matthew 14:21 says besides women and children); Mark does not mention women and children."
    },
    related: ["seed_grows", "bethsaida_blind", "jesus_son_of_god", "busy_day_capernaum"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "bethsaida_blind", book: "mark", no: 12, kind: "other", type: "vision", rarity: 4,
    zh: "伯賽大的瞎子", en: "The Blind Man of Bethsaida",
    tag: { zh: "我看見人了，他們好像樹木行走", en: "I See Men Like Trees Walking" },
    role: { zh: "分兩次醫好（8:22-26）", en: "Healed in two stages (8:22–26)" },
    ch: [8],
    passages: ["8:22-26"],
    moves: [
      { zh: "你看見甚麼了", en: "Do You See Anything?", ref: "8:23-24",
        dzh: "耶穌拉著瞎子的手，領他到村外，吐唾沫在他眼睛上，問：你看見甚麼了？他說：我看見人了；他們好像樹木，並且行走。",
        den: "Jesus took him out of the village, spat on his eyes and asked if he saw anything; he said, “I see men; for I see them like trees walking.”" },
      { zh: "樣樣都看得清楚了", en: "He Saw Everyone Clearly", ref: "8:25",
        dzh: "隨後又按手在他眼睛上，他定睛一看，就復了原，樣樣都看得清楚了。",
        den: "Again he laid his hands on his eyes; he looked intently, and was restored, and saw everyone clearly." }
    ],
    traits: [
      { k: "strength", zh: "耶穌第二次再按手，直到看清楚", en: "Jesus lays hands on him a second time until he sees clearly" },
      { k: "identity", zh: "全書中唯一分兩次的醫治", en: "The only two-stage healing in the book" }
    ],
    lesson: {
      zh: "這是馬可福音裡唯一一次醫治需要兩個階段，放在 8:22-26，緊接著門徒的「還不明白」（8:17-21）和彼得的認信（8:27-30）。有人把這看作門徒漸漸看清楚的一個預兆，經文本身沒有這樣說。",
      en: "This is the only healing in Mark needing two stages, set at 8:22–26 between the disciples’ “still don’t understand” (8:17–21) and Peter’s confession (8:27–30). Some read it as a sign of the disciples gradually seeing clearly; the text itself does not say so."
    },
    quote: { ref: "8:24",
      zh: "我看見人了；他們好像樹木，並且行走",
      en: "I see men; for I see them like trees walking." },
    keyVerses: ["8:22", "8:23", "8:24", "8:25", "8:26"],
    intro: {
      zh: "他們來到伯賽大，有人帶一個瞎子來，求耶穌摸他（8:22）。耶穌拉著瞎子的手，領他到村外，吐唾沫在他眼睛上，按手在他身上，問他說：「你看見甚麼了？」（8:23）他說：「我看見人了；他們好像樹木，並且行走。」（8:24）耶穌再按手，他就看清楚了；耶穌打發他回家，說「不要進村子」（8:25-26）。這個故事只有馬可福音有，並且是前後兩部分的轉折點，後面就是彼得的認信（8:29）。",
      en: "They come to Bethsaida, and some bring a blind man and beg Jesus to touch him (8:22). Jesus takes the blind man by the hand and leads him out of the village; spitting on his eyes and laying hands on him, he asks, “Do you see anything?” (8:23). He says, “I see men; for I see them like trees walking” (8:24). Jesus lays hands on him again, and he sees clearly; Jesus sends him home, saying “Don’t enter into the village” (8:25–26). The story is only in Mark, and sits at the hinge of the book, with Peter’s confession (8:29) next."
    },
    tip: {
      zh: "耶穌為甚麼分兩次醫治，經文沒有解釋；與 10:46-52 的巴底買一起看，兩個瞎子的故事把 8-10 章夾在中間。",
      en: "Why Jesus heals in two stages the text does not explain; read with Bartimaeus (10:46–52), the two blind-man stories bracket chapters 8–10."
    },
    related: ["take_up_cross", "bartimaeus", "five_loaves_mark", "help_my_unbelief"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "take_up_cross", book: "mark", no: 13, kind: "other", type: "faith", rarity: 4,
    zh: "背起他的十字架", en: "Take Up His Cross",
    tag: { zh: "賺得全世界，賠上自己的生命", en: "Gain the Whole World, Lose Your Life" },
    role: { zh: "第一次預告受難之後（8:27-38）", en: "After the first passion prediction (8:27–38)" },
    ch: [8],
    passages: ["8:27-38"],
    moves: [
      { zh: "你是基督", en: "You Are the Christ", ref: "8:29",
        dzh: "耶穌問：你們說我是誰？彼得回答說：你是基督。",
        den: "He asked, “But who do you say that I am?” Peter answered, “You are the Christ.”" },
      { zh: "捨己，背十字架", en: "Deny Himself, Take Up His Cross", ref: "8:34-36",
        dzh: "若有人要跟從我，就當捨己，背起他的十字架來跟從我。人就是賺得全世界，賠上自己的生命，有甚麼益處呢？",
        den: "“Let him deny himself, and take up his cross, and follow me.” What does it profit a man to gain the whole world and forfeit his life?" }
    ],
    traits: [
      { k: "strength", zh: "彼得說對了，卻還沒懂「基督」要走的路", en: "Peter is right, yet does not yet grasp the road the Christ must walk" },
      { k: "weakness", zh: "彼得攔阻他，被斥為「撒但」（8:32-33）", en: "Peter rebukes him and is called “Satan” (8:32–33)" }
    ],
    lesson: {
      zh: "彼得的認信之後，耶穌馬上說「人子必須受許多的苦」（8:31），彼得攔阻，耶穌斥責他。然後耶穌對眾人和門徒說跟從的條件：捨己，背十字架（8:34）。「基督」的意思要被重新理解。",
      en: "After Peter’s confession Jesus at once says the Son of Man must suffer many things (8:31); Peter objects and Jesus rebukes him. Then he tells the crowd and disciples the terms of following: deny himself, take up the cross (8:34). What “Christ” means has to be relearned."
    },
    quote: { ref: "8:34",
      zh: "若有人要跟從我，就當捨己，背起他的十字架來跟從我",
      en: "Whoever wants to come after me, let him deny himself, and take up his cross, and follow me." },
    keyVerses: ["8:27", "8:29", "8:31", "8:33", "8:34", "8:35", "8:36", "8:38"],
    intro: {
      zh: "在凱撒利亞腓立比的村莊，耶穌問門徒：「人說我是誰？」又問：「你們說我是誰？」彼得回答：「你是基督。」（8:27-29）耶穌囑咐他們不要告訴人，並開始教訓他們說，人子必須受許多的苦，被棄絕，被殺，過三天復活（8:30-31）。彼得拉著他，勸他；耶穌轉過來，看著門徒，責備彼得說「撒但，退我後邊去吧」（8:32-33）。接著是 8:34-38。8:35 的「生命」，和合本註作「靈魂」。",
      en: "In the villages of Caesarea Philippi Jesus asks the disciples, “Who do men say that I am?” and then “But who do you say that I am?” Peter answers, “You are the Christ” (8:27–29). He charges them to tell no one and begins to teach that the Son of Man must suffer many things, be rejected, killed, and after three days rise (8:30–31). Peter takes him aside and rebukes him; Jesus turns, looks at the disciples and rebukes Peter, “Get behind me, Satan!” (8:32–33). Then comes 8:34–38. In 8:35 the CUV note gives “soul” for “life.”"
    },
    tip: {
      zh: "8:35 的「生命」，和合本註作「靈魂」，原文同一個字，兩種譯法都有。",
      en: "The word in 8:35 is one Greek word rendered “life” or “soul”; both are used."
    },
    related: ["bethsaida_blind", "help_my_unbelief", "cup_and_ransom", "jesus_son_of_god"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "help_my_unbelief", book: "mark", no: 14, kind: "person", type: "faith", rarity: 5,
    zh: "我信，但我信不足", en: "I Believe; Help My Unbelief",
    tag: { zh: "你若能信，在信的人，凡事都能", en: "All Things Are Possible to Him Who Believes" },
    role: { zh: "山下的孩子與父親（9:14-29）", en: "The boy and his father below the mountain (9:14–29)" },
    ch: [9],
    passages: ["9:14-29"],
    moves: [
      { zh: "你若能做甚麼", en: "If You Can Do Anything", ref: "9:22-23",
        dzh: "父親說：你若能做甚麼，求你憐憫我們，幫助我們。耶穌說：你若能信，在信的人，凡事都能。",
        den: "The father: “If you can do anything, have compassion on us and help us.” Jesus: “If you can believe, all things are possible to him who believes.”" },
      { zh: "我信，求你幫助", en: "I Believe — Help", ref: "9:24",
        dzh: "孩子的父親立時喊著說：我信！但我信不足，求主幫助。",
        den: "Immediately the father of the child cried out with tears, “I believe. Help my unbelief!”" }
    ],
    traits: [
      { k: "strength", zh: "誠實：「我信」和「我信不足」放在同一口氣裡", en: "Honesty: “I believe” and “help my unbelief” in one breath" },
      { k: "weakness", zh: "「你的門徒不能」（9:18）", en: "“Your disciples could not” (9:18)" }
    ],
    lesson: {
      zh: "父親的第一句是「你若能做甚麼」，耶穌把「若能」還給他：「你若能信，在信的人，凡事都能」（9:23）。他的回答不是自信，而是承認：「我信！但我信不足，求主幫助。」（9:24）",
      en: "The father’s first line is “if you can do anything”; Jesus hands the “if” back: “If you can believe, all things are possible” (9:23). His answer is not confidence but confession: “I believe. Help my unbelief!” (9:24)."
    },
    quote: { ref: "9:24",
      zh: "我信！但我信不足，求主幫助",
      en: "I believe. Help my unbelief!" },
    keyVerses: ["9:14", "9:17", "9:19", "9:22", "9:23", "9:24", "9:26", "9:27"],
    intro: {
      zh: "耶穌從變像山下來，看見有許多人圍著門徒，文士和他們辯論（9:14）。一個人說，他帶了兒子來，被啞巴鬼附著，鬼把他摔倒，口中流沫，咬牙切齒；他請過門徒趕鬼，他們卻不能（9:17-18）。耶穌嘆息：「不信的世代啊，我在你們這裡要到幾時呢？」（9:19）孩子被帶來，立刻抽瘋（9:20）。父親說「你若能做甚麼，求你憐憫我們」（9:22）。耶穌斥責污鬼，鬼出來了，孩子好像死了，耶穌拉著他的手，扶他起來（9:25-27）。",
      en: "Coming down from the mountain, Jesus sees a great crowd around the disciples and scribes arguing with them (9:14). A man says he brought his son who has a mute spirit that throws him down, he foams and grinds his teeth; he asked the disciples to cast it out and they could not (9:17–18). Jesus sighs, “Faithless generation, how long shall I be with you?” (9:19). The boy is brought and immediately convulses (9:20). The father says, “If you can do anything, have compassion on us” (9:22). Jesus rebukes the spirit and it comes out; the boy seems like a corpse, and Jesus takes him by the hand and raises him (9:25–27)."
    },
    tip: {
      zh: "9:24 和合本註說有古卷作「立時流淚地喊著說」；WEB 也有 “with tears”。",
      en: "The CUV note on 9:24 says some manuscripts read “cried out with tears”; the WEB also has “with tears.”"
    },
    related: ["take_up_cross", "legion", "jairus_daughter", "children_welcome"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "children_welcome", book: "mark", no: 15, kind: "other", type: "love", rarity: 4,
    zh: "讓小孩子到我這裡來", en: "Let the Little Children Come",
    tag: { zh: "凡要承受神國的，若不像小孩子，斷不能進去", en: "Receive the Kingdom Like a Little Child" },
    role: { zh: "對孩童的接納（10:13-16）", en: "Welcoming the children (10:13–16)" },
    ch: [10],
    passages: ["10:13-16"],
    moves: [
      { zh: "不要禁止他們", en: "Don’t Forbid Them", ref: "10:14",
        dzh: "耶穌看見就惱怒，對門徒說：讓小孩子到我這裡來，不要禁止他們；因為在神國的，正是這樣的人。",
        den: "Jesus was moved with indignation and said, “Allow the little children to come to me! Don’t forbid them, for God’s Kingdom belongs to such as these.”" },
      { zh: "抱著他們，祝福", en: "Took Them in His Arms", ref: "10:16",
        dzh: "於是抱著小孩子，給他們按手，為他們祝福。",
        den: "He took them in his arms, and blessed them, laying his hands on them." }
    ],
    traits: [
      { k: "strength", zh: "馬可福音有「惱怒」和「抱著」兩個細節", en: "Mark adds the details “indignation” and “in his arms”" },
      { k: "weakness", zh: "門徒責備帶孩子來的人（10:13）", en: "The disciples scold those bringing the children (10:13)" }
    ],
    lesson: {
      zh: "門徒責備帶孩子來的人，耶穌「惱怒」（10:14）；他說神國是屬於這樣的人，並且說承受神國要像孩子一樣（10:15）。孩子在當時沒有地位；耶穌把他們抱起來，按手祝福（10:16）。",
      en: "The disciples scold those bringing the children, and Jesus is “moved with indignation” (10:14); he says the Kingdom belongs to such as these and must be received like a child (10:15). Children then had no status; Jesus takes them in his arms and blesses them (10:16)."
    },
    quote: { ref: "10:14",
      zh: "讓小孩子到我這裡來，不要禁止他們；因為在神國的，正是這樣的人",
      en: "Allow the little children to come to me! Don’t forbid them, for God’s Kingdom belongs to such as these." },
    keyVerses: ["10:13", "10:14", "10:15", "10:16"],
    intro: {
      zh: "有人帶著小孩子來見耶穌，要他摸他們，門徒就責備那些人（10:13）。耶穌看見就惱怒，說：「讓小孩子到我這裡來，不要禁止他們；因為在神國的，正是這樣的人。我實在告訴你們，凡要承受神國的，若不像小孩子，斷不能進去。」（10:14-15）於是他抱著小孩子，給他們按手，為他們祝福（10:16）。馬太福音 19:13-15 也有這件事，但沒有「惱怒」和「抱著」。9:33-37 也有一個孩子站在中間的畫面。",
      en: "People bring little children to Jesus to touch them, and the disciples rebuke them (10:13). Jesus, seeing it, was moved with indignation and said, “Allow the little children to come to me! Don’t forbid them, for God’s Kingdom belongs to such as these. Most certainly I tell you, whoever will not receive God’s Kingdom like a little child, he will in no way enter into it” (10:14–15). He took them in his arms, and blessed them, laying his hands on them (10:16). Matthew 19:13–15 has it too, without “indignation” and “in his arms.” In 9:33–37 there is also a picture of a child set in the midst."
    },
    tip: {
      zh: "「像小孩子」是指謙卑、依靠、接受恩賜，還是別的特點，經文沒有展開。",
      en: "Whether “like a child” means humility, dependence, receiving a gift or something else the text does not expand."
    },
    related: ["rich_man_loved", "cup_and_ransom", "help_my_unbelief", "bartimaeus"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "rich_man_loved", book: "mark", no: 16, kind: "person", type: "wisdom", rarity: 4,
    zh: "耶穌看著他，就愛他", en: "Jesus Looked at Him and Loved Him",
    tag: { zh: "你還缺少一件", en: "One Thing You Lack" },
    role: { zh: "財主的問題（10:17-31）", en: "The rich man’s question (10:17–31)" },
    ch: [10],
    passages: ["10:17-31"],
    moves: [
      { zh: "耶穌就愛他", en: "Jesus Loved Him", ref: "10:21",
        dzh: "耶穌看著他，就愛他，對他說：你還缺少一件：去變賣你所有的，分給窮人，你要來跟從我。",
        den: "Jesus looking at him loved him, and said, “One thing you lack. Go, sell whatever you have, and give to the poor… and come, follow me.”" },
      { zh: "憂憂愁愁地走了", en: "He Went Away Sorrowful", ref: "10:22",
        dzh: "他聽見這話，臉上就變了色，憂憂愁愁地走了，因為他的產業很多。",
        den: "His face fell at that saying, and he went away sorrowful, for he had great possessions." }
    ],
    traits: [
      { k: "strength", zh: "從小遵守誡命，認真求問永生", en: "Kept the commandments from youth; asks earnestly about eternal life" },
      { k: "weakness", zh: "產業很多，捨不得", en: "Great possessions; cannot let go" }
    ],
    lesson: {
      zh: "只有馬可福音說耶穌看著他就「愛他」（10:21）。這份愛沒有降低要求，也沒有換來順服；那人憂愁地走了。耶穌接著說「富足的人進神的國是何等的難哉」（10:23）。",
      en: "Only Mark says Jesus looked at him and “loved him” (10:21). That love does not lower the demand and does not win obedience; the man goes away sorrowful. Jesus then says, “How hard it is for those who have riches to enter into God’s Kingdom” (10:23)."
    },
    quote: { ref: "10:21",
      zh: "耶穌看著他，就愛他，對他說：「你還缺少一件",
      en: "Jesus looking at him loved him, and said to him, “One thing you lack." },
    keyVerses: ["10:17", "10:19", "10:21", "10:22", "10:23", "10:25", "10:27", "10:29"],
    intro: {
      zh: "耶穌出來行路的時候，有一個人跑來，跪在他面前問：「良善的夫子，我當做甚麼事才可以承受永生？」（10:17）耶穌引了十誡的後半；那人說「這一切我從小都遵守了」（10:19-20）。耶穌看著他，就愛他（10:21）。他聽見要變賣一切，就憂憂愁愁地走了。耶穌對門徒說「駱駝穿過針的眼，比財主進神的國還容易呢」（10:25）；彼得說「我們已經撇下所有的跟從你了」，耶穌應許他們必得百倍（10:28-30）。",
      en: "As Jesus goes out on the road a man runs up, kneels and asks, “Good Teacher, what shall I do that I may inherit eternal life?” (10:17). Jesus cites the second half of the Ten Commandments; the man says, “I have observed all these things from my youth” (10:19–20). Jesus looks at him and loves him (10:21). Hearing he must sell all, he goes away sorrowful. Jesus tells the disciples, “It is easier for a camel to go through a needle’s eye than for a rich man to enter into God’s Kingdom” (10:25); Peter says, “Behold, we have left all, and have followed you,” and Jesus promises them a hundredfold (10:28–30)."
    },
    tip: {
      zh: "「針的眼」是甚麼（真的針孔，或城門名）有不同說法；比喻的重點是「不可能」。",
      en: "What the “needle’s eye” is (a literal needle or a gate by that name) has different explanations; the figure’s point is “impossible.”"
    },
    related: ["children_welcome", "cup_and_ransom", "widows_coins", "take_up_cross"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "cup_and_ransom", book: "mark", no: 17, kind: "other", type: "power", rarity: 5,
    zh: "贖價", en: "A Ransom for Many",
    tag: { zh: "人子來，不是要受人的服事，乃是要服事人", en: "The Son of Man Came Not to Be Served but to Serve" },
    role: { zh: "雅各、約翰的請求（10:32-45）", en: "The request of James and John (10:32–45)" },
    ch: [10],
    passages: ["10:32-45"],
    moves: [
      { zh: "誰願為大", en: "Whoever Wants to Be Great", ref: "10:43-44",
        dzh: "在你們中間，誰願為大，就必作你們的用人；誰願為首，就必作眾人的僕人。",
        den: "“Whoever wants to become great among you shall be your servant; whoever wants to become first among you shall be bondservant of all.”" },
      { zh: "捨命作贖價", en: "Give His Life as a Ransom", ref: "10:45",
        dzh: "人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價。",
        den: "“The Son of Man also came not to be served, but to serve, and to give his life as a ransom for many.”" }
    ],
    traits: [
      { k: "strength", zh: "全書的關鍵句，在第 10 章末", en: "The book’s key line, at the end of chapter 10" },
      { k: "weakness", zh: "雅各約翰要求坐左右（10:37）", en: "James and John ask for the seats at his right and left (10:37)" }
    ],
    lesson: {
      zh: "耶穌第三次預告受難（10:32-34）之後，雅各和約翰緊接著求坐位（10:35-37），其餘十個人惱怒（10:41）。耶穌用「服事」回答所有人，並以自己為例：「捨命作多人的贖價」（10:45）。",
      en: "Right after the third passion prediction (10:32–34), James and John ask for seats (10:35–37), and the other ten are indignant (10:41). Jesus answers all of them with “serve” and uses himself as the example: “to give his life as a ransom for many” (10:45)."
    },
    quote: { ref: "10:45",
      zh: "人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價",
      en: "For the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many." },
    keyVerses: ["10:32", "10:35", "10:37", "10:38", "10:42", "10:43", "10:44", "10:45"],
    intro: {
      zh: "他們在上耶路撒冷的路上，耶穌在前頭走，門徒希奇，跟從的人也害怕（10:32）。耶穌第三次預告：人子要被交給祭司長和文士，被定死罪，交給外邦人，被戲弄、吐唾沫、鞭打、殺害，過三天要復活（10:33-34）。西庇太的兒子雅各、約翰來求：願你坐榮耀的時候，我們一個坐在你右邊，一個坐在你左邊（10:35-37）。耶穌問他們能不能喝他所喝的杯（10:38）。10:42-45 是對所有門徒的教訓。",
      en: "On the road up to Jerusalem Jesus is walking ahead, and the disciples are amazed and those following are afraid (10:32). He foretells a third time that the Son of Man will be delivered to the chief priests and scribes, condemned to death, delivered to the Gentiles, mocked, spit on, scourged and killed, and rise after three days (10:33–34). James and John the sons of Zebedee ask that they may sit one on his right and one on his left in his glory (10:35–37). Jesus asks if they can drink the cup he drinks (10:38). Verses 42–45 are the teaching for all the disciples."
    },
    tip: {
      zh: "「贖價」（lytron）在這裡的意思，與以賽亞書 53 章的關係，各神學傳統有不同讀法。",
      en: "What “ransom” means here and how it relates to Isaiah 53 theological traditions read differently."
    },
    related: ["take_up_cross", "rich_man_loved", "bartimaeus", "children_welcome"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "bartimaeus", book: "mark", no: 18, kind: "person", type: "faith", rarity: 5,
    zh: "討飯的瞎子巴底買", en: "Bartimaeus the Blind Beggar",
    meaning: { zh: "「底買的兒子」", en: "“Son of Timaeus”" },
    tag: { zh: "丟下衣服，跳起來", en: "He Threw Off His Cloak and Sprang Up" },
    role: { zh: "耶利哥路旁（10:46-52）", en: "By the Jericho road (10:46–52)" },
    ch: [10],
    passages: ["10:46-52"],
    moves: [
      { zh: "大衛的子孫啊，可憐我", en: "Son of David, Have Mercy", ref: "10:47-48",
        dzh: "他聽見是拿撒勒的耶穌，就喊著說：大衛的子孫耶穌啊！可憐我吧！許多人責備他，他卻越發大聲喊。",
        den: "He cried out, “Jesus, you son of David, have mercy on me!”; many rebuked him, but he cried out all the more." },
      { zh: "要我為你做甚麼", en: "What Do You Want?", ref: "10:49-52",
        dzh: "瞎子就丟下衣服，跳起來，走到耶穌那裡。耶穌說：要我為你做甚麼？瞎子說：拉波尼，我要能看見。",
        den: "He, casting away his cloak, sprang up and came to Jesus. “What do you want me to do for you?” “Rabboni, that I may see again.”" }
    ],
    traits: [
      { k: "strength", zh: "被人叫他安靜，他卻越發大聲", en: "Told to be quiet, he cries louder" },
      { k: "identity", zh: "全書唯一被點名的受醫治者（10:46）", en: "The only healed person named in the book (10:46)" }
    ],
    lesson: {
      zh: "巴底買稱耶穌為「大衛的子孫」，人們叫他安靜；耶穌卻「站住」，說「叫過他來」（10:49）。他丟下衣服，那是一個討飯人唯一的家當，跳起來，然後「在路上跟隨耶穌」（10:50、52）。",
      en: "Bartimaeus calls Jesus “son of David,” the crowd tells him to hush; Jesus “stood still” and says “Call him” (10:49). He throws off his cloak — a beggar’s only possession — springs up, and then “followed Jesus on the way” (10:50, 52)."
    },
    quote: { ref: "10:52",
      zh: "你去吧！你的信救了你了。」瞎子立刻看見了，就在路上跟隨耶穌",
      en: "Your faith has made you well.” Immediately he received his sight, and followed Jesus on the way." },
    keyVerses: ["10:46", "10:47", "10:48", "10:49", "10:50", "10:51", "10:52"],
    intro: {
      zh: "到了耶利哥；耶穌同門徒並許多人出耶利哥的時候，有一個討飯的瞎子，是底買的兒子巴底買，坐在路旁（10:46）。他聽見是拿撒勒的耶穌，就喊「大衛的子孫耶穌啊！可憐我吧！」（10:47）耶穌站住，叫他過來；那些人對他說「放心，起來！他叫你啦」（10:49）。耶穌問他要甚麼，他說「拉波尼，我要能看見」；耶穌說「你的信救了你了」，他立刻看見，在路上跟隨耶穌（10:51-52）。他是馬可福音中這種醫治裡唯一被點名的人。",
      en: "They come to Jericho; as Jesus goes out of Jericho with his disciples and a great multitude, a blind beggar, Bartimaeus, the son of Timaeus, sits by the road (10:46). Hearing it is Jesus of Nazareth, he cries out, “Jesus, you son of David, have mercy on me!” (10:47). Jesus stands still and calls him; those around say, “Cheer up! Get up. He is calling you!” (10:49). Jesus asks what he wants, he says, “Rabboni, that I may see again”; Jesus says, “Your faith has made you well,” and he immediately sees and follows Jesus on the way (10:51–52). He is the only person named in a healing of this kind in Mark."
    },
    tip: {
      zh: "「巴」是亞蘭語「兒子」；「巴底買」就是「底買的兒子」，馬可福音自己在句中已經翻出來（10:46）。",
      en: "“Bar” is Aramaic for “son”; “Bartimaeus” is “son of Timaeus,” which Mark himself explains in the sentence (10:46)."
    },
    related: ["bethsaida_blind", "cup_and_ransom", "roof_friends", "widows_coins"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "widows_coins", book: "mark", no: 19, kind: "person", type: "love", rarity: 5,
    zh: "窮寡婦的兩個小錢", en: "The Widow’s Two Coins",
    tag: { zh: "她把她一切養生的都投上了", en: "She Put In All She Had to Live On" },
    role: { zh: "聖殿的銀庫旁（12:41-44）", en: "At the temple treasury (12:41–44)" },
    ch: [12],
    passages: ["12:41-44"],
    moves: [
      { zh: "兩個小錢", en: "Two Small Coins", ref: "12:41-42",
        dzh: "耶穌對銀庫坐著，看眾人怎樣投錢；有好些財主投了許多，有一個窮寡婦來，投了兩個小錢。",
        den: "Jesus sat opposite the treasury and saw how people gave; many rich people gave much, and a poor widow came and gave two small coins." },
      { zh: "比眾人所投的更多", en: "More Than All of Them", ref: "12:43-44",
        dzh: "他們都是自己有餘，但這寡婦是自己不足，把她一切養生的都投上了。",
        den: "“They all gave out of their abundance, but she, out of her poverty, gave all that she had to live on.”" }
    ],
    traits: [
      { k: "strength", zh: "耶穌專心看她，他的門徒卻沒留意", en: "Jesus watches her; the disciples would have missed her" },
      { k: "identity", zh: "全書沒有記她說過一句話", en: "The book records no word she says" }
    ],
    lesson: {
      zh: "耶穌的衡量不是看投了多少，而是看剩下多少：別人是「自己有餘」，她是「自己不足」（12:44）。這段緊接在耶穌責備文士「吞吃寡婦的家產」（12:40）之後。",
      en: "Jesus’s measure is not how much was put in but how much was left: others gave “out of their abundance,” she “out of her poverty” (12:44). The passage follows right after his rebuke of scribes who “devour widows’ houses” (12:40)."
    },
    quote: { ref: "12:44",
      zh: "但這寡婦是自己不足，把她一切養生的都投上了",
      en: "but she, out of her poverty, gave all that she had to live on" },
    keyVerses: ["12:40", "12:41", "12:42", "12:43", "12:44"],
    intro: {
      zh: "耶穌對銀庫坐著，看眾人怎樣投錢入庫（12:41）。有好些財主往裡投了若干的錢。有一個窮寡婦來，往裡投了兩個小錢，就是一個大錢（12:42）。耶穌叫門徒來，說「我實在告訴你們，這窮寡婦投入庫裡的，比眾人所投的更多」（12:43）。這幕在聖殿被毀的預告（13:1-2）之前出現，是耶穌離開聖殿之前最後的一個畫面。",
      en: "Jesus sits opposite the treasury and watches how people put money into it (12:41). Many rich put in much. A poor widow comes and puts in two small coins, which equal a quadrans (12:42). Jesus calls his disciples and says, “Most certainly I tell you, this poor widow gave more than all those who are giving into the treasury” (12:43). The scene comes just before the prediction of the temple’s destruction (13:1–2), the last picture of Jesus in the temple."
    },
    tip: {
      zh: "「兩個小錢，就是一個大錢」：當時最小的銅幣（lepta）和羅馬的小額錢幣（quadrans）。",
      en: "“Two small coins, which equal a quadrans”: the smallest Jewish coins (lepta) and a small Roman coin (quadrans)."
    },
    related: ["rich_man_loved", "cup_and_ransom", "watch_olivet", "bartimaeus"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "watch_olivet", book: "mark", no: 20, kind: "other", type: "vision", rarity: 3,
    zh: "你們要警醒", en: "Watch",
    tag: { zh: "我對你們所說的話，也是對眾人說：要警醒", en: "What I Tell You, I Tell All: Watch" },
    role: { zh: "橄欖山上的預告（第 13 章）", en: "The discourse on the Mount of Olives (ch 13)" },
    ch: [13],
    passages: ["13:1-37"],
    moves: [
      { zh: "沒有人知道那日子", en: "No One Knows the Day", ref: "13:32-33",
        dzh: "那日子，那時辰，沒有人知道，連天上的使者也不知道，子也不知道，惟有父知道。",
        den: "“But of that day or that hour no one knows, not even the angels in heaven, nor the Son, but only the Father.”" },
      { zh: "要警醒", en: "Watch", ref: "13:35-37",
        dzh: "你們要警醒；因為你們不知道家主甚麼時候來。我對你們所說的話，也是對眾人說：要警醒！",
        den: "“Watch therefore, for you don’t know when the lord of the house is coming… What I tell you, I tell all: Watch.”" }
    ],
    traits: [
      { k: "strength", zh: "結論只有一個字：「警醒」", en: "The conclusion is one word: “Watch”" },
      { k: "identity", zh: "對四個門徒私下說的（13:3）", en: "Spoken privately to four disciples (13:3)" }
    ],
    lesson: {
      zh: "第 13 章最長的一篇教訓，結尾不是時間表，而是「沒有人知道」（13:32）和「要警醒」（13:33、35、37）。耶穌連自己也說「子也不知道」。",
      en: "The longest discourse in the book ends not with a timetable but “no one knows” (13:32) and “watch” (13:33, 35, 37). Jesus even says “not even the Son.”"
    },
    quote: { ref: "13:37",
      zh: "我對你們所說的話，也是對眾人說：要警醒",
      en: "What I tell you, I tell all: Watch." },
    keyVerses: ["13:1", "13:2", "13:3", "13:7", "13:32", "13:33", "13:35", "13:37"],
    intro: {
      zh: "耶穌從聖殿出來，門徒讚歎殿的石頭和建築；耶穌說「將來在這裡沒有一塊石頭留在石頭上，不被拆毀的」（13:1-2）。他在橄欖山上對著殿坐著，彼得、雅各、約翰、安得烈私下問他這些事幾時成就（13:3-4）。他說到假基督、戰爭、地震、逼迫、「毀壞可憎的」（13:5-23），人子駕雲降臨（13:26），無花果樹的比喻（13:28-29），最後以家主離開本家的比喻和「要警醒」作結（13:34-37）。如何分別這章裡「聖殿被毀」與「人子降臨」的部分，解經者看法不一。",
      en: "As Jesus comes out of the temple the disciples marvel at the stones and buildings; Jesus says, “There will not be left here one stone on another, which will not be thrown down” (13:1–2). Sitting on the Mount of Olives facing the temple, Peter, James, John and Andrew ask him privately when these things will be (13:3–4). He speaks of false christs, wars, earthquakes, persecution and “the abomination of desolation” (13:5–23), the Son of Man coming in clouds (13:26), the fig tree parable (13:28–29), and ends with the parable of the lord who leaves home and the call “Watch” (13:34–37). How to separate the temple’s destruction from the Son of Man’s coming in this chapter interpreters differ."
    },
    tip: {
      zh: "「毀壞可憎的」（13:14）與但以理書的關係，和這章的「那日子」指甚麼，解經者有不同讀法。",
      en: "The “abomination of desolation” (13:14) and its relation to Daniel, and what “that day” means, are read differently by interpreters."
    },
    related: ["widows_coins", "women_afraid", "take_up_cross", "jesus_son_of_god"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "simon_cyrene", book: "mark", no: 21, kind: "person", type: "harvest", rarity: 3,
    zh: "古利奈人西門", en: "Simon of Cyrene",
    tag: { zh: "亞力山大和魯孚的父親", en: "Father of Alexander and Rufus" },
    role: { zh: "被勉強背十字架的人（15:21）", en: "Compelled to carry the cross (15:21)" },
    ch: [15],
    passages: ["15:21"],
    moves: [
      { zh: "從鄉下來", en: "Coming from the Country", ref: "15:21",
        dzh: "有一個古利奈人西門，從鄉下來，經過那地方，他們就勉強他同去，好背著耶穌的十字架。",
        den: "They compelled one passing by, coming from the country, Simon of Cyrene, to go with them, that he might bear his cross." },
      { zh: "他的兩個兒子", en: "His Two Sons", ref: "15:21",
        dzh: "他是亞力山大和魯孚的父親。馬可福音特別寫出這兩個名字。",
        den: "He was the father of Alexander and Rufus — names Mark specifically records." }
    ],
    traits: [
      { k: "strength", zh: "被勉強而背，卻成了全書中第一個背十字架的人", en: "Compelled, yet the first in the book to carry a cross" },
      { k: "identity", zh: "兩個兒子的名字，像是讀者認得的人", en: "His sons’ names suggest people readers knew" }
    ],
    lesson: {
      zh: "耶穌在 8:34 說過「背起他的十字架來跟從我」；到了 15:21，字面上背十字架的是一個路過的人，而且是被勉強的。馬可特別寫出他的兒子，似乎是因為讀者認得這個家。",
      en: "Jesus said in 8:34, “take up his cross, and follow me”; at 15:21 the one who literally carries it is a passerby, and compelled. Mark names his sons, apparently because his readers knew the family."
    },
    quote: { ref: "15:21",
      zh: "有一個古利奈人西門，就是亞力山大和魯孚的父親，從鄉下來",
      en: "Simon of Cyrene, the father of Alexander and Rufus" },
    keyVerses: ["15:20", "15:21", "15:22"],
    intro: {
      zh: "兵丁戲弄耶穌以後，給他脫了紫色袍，仍穿上他自己的衣服，帶他出去要釘十字架（15:20）。有一個古利奈人西門，是亞力山大和魯孚的父親，從鄉下來，經過那地方，他們就勉強他同去，好背著耶穌的十字架（15:21）。古利奈在北非，今利比亞，那裡有大批猶太人。馬太福音 27:32 和路加福音 23:26 也記西門，但只有馬可福音提到他的兩個兒子。羅馬書 16:13 有一個「魯孚」，是否同一人，經文沒有說明。",
      en: "After the soldiers mock Jesus they strip off the purple robe, put his own clothes on him and lead him out to crucify him (15:20). They compel a passerby, Simon of Cyrene, the father of Alexander and Rufus, coming from the country, to carry his cross (15:21). Cyrene was in North Africa, in today’s Libya, with a large Jewish community. Matthew 27:32 and Luke 23:26 also mention Simon, but only Mark names his two sons. Romans 16:13 has a “Rufus”; whether he is the same man the text does not say."
    },
    tip: {
      zh: "羅馬書 16:13 的魯孚是不是這位西門的兒子，只是一個常見的推測。",
      en: "That the Rufus of Romans 16:13 is this Simon’s son is only a common guess."
    },
    related: ["take_up_cross", "women_afraid", "cup_and_ransom", "jesus_son_of_god"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "women_afraid", book: "mark", no: 22, kind: "other", type: "heaven", rarity: 5,
    zh: "空墳墓前的婦女", en: "The Women at the Empty Tomb",
    tag: { zh: "她們害怕", en: "For They Were Afraid" },
    role: { zh: "全書的結尾（16:1-8）", en: "The close of the book (16:1–8)" },
    ch: [16],
    passages: ["16:1-20"],
    moves: [
      { zh: "他已經復活了", en: "He Has Risen", ref: "16:6-7",
        dzh: "那少年人說：他已經復活了，不在這裡；去告訴他的門徒和彼得，他在你們以先往加利利去。",
        den: "He said, “He has risen. He is not here… go, tell his disciples and Peter, ‘He goes before you into Galilee.’”" },
      { zh: "又發抖又驚奇", en: "Trembling and Astonished", ref: "16:8",
        dzh: "她們就出來，從墳墓那裡逃跑，又發抖又驚奇，甚麼也不告訴人，因為她們害怕。",
        den: "They went out and fled from the tomb, for trembling and astonishment had come on them; they said nothing to anyone, for they were afraid." }
    ],
    traits: [
      { k: "strength", zh: "「和彼得」：給失敗的彼得留了位置（16:7）", en: "“And Peter”: leaves a place for Peter after his failure (16:7)" },
      { k: "weakness", zh: "最早的抄本在「她們害怕」處結束", en: "The earliest manuscripts end at “they were afraid”" }
    ],
    lesson: {
      zh: "馬可福音以「她們害怕」（16:8）收結，是福音書中最突然的結尾；然而天使的話已經交代了復活與去加利利，而且特別點名「和彼得」（16:7）。結尾像一個沒有說完的邀請。",
      en: "Mark ends with “they were afraid” (16:8), the most abrupt ending of the Gospels; yet the angel’s words have already told of the resurrection and the going to Galilee, with Peter named in particular (16:7). The ending reads like an invitation left open."
    },
    quote: { ref: "16:6",
      zh: "他已經復活了，不在這裡",
      en: "He has risen. He is not here." },
    keyVerses: ["16:1", "16:2", "16:5", "16:6", "16:7", "16:8"],
    intro: {
      zh: "安息日過了，抹大拉的馬利亞和雅各的母親馬利亞並撒羅米，買了香膏要去抹耶穌（16:1）。七日的頭一日清早，太陽剛出來，她們來到墳墓（16:2）。她們進了墳墓，看見一個少年人坐在右邊，穿著白袍，就大大地驚恐（16:5）。他說「不要驚恐……他已經復活了，不在這裡」（16:6）。多數學者認為最早的抄本到 16:8 為止；16:9-20 的長結尾是否原有，看法不一，現代譯本多在這裡加註；本站使用的和合本與 WEB 都印出了 9-20 節。",
      en: "When the Sabbath was past, Mary Magdalene, Mary the mother of James and Salome bought spices to anoint Jesus (16:1). Very early on the first day of the week, when the sun had risen, they come to the tomb (16:2). Entering, they see a young man sitting on the right side, dressed in a white robe, and are amazed (16:5). He says, “Don’t be amazed… He has risen. He is not here” (16:6). Most scholars hold that the earliest manuscripts end at 16:8; whether the longer ending 16:9–20 was original is disputed, and modern translations usually add a note there; the CUV and WEB used on this site both print verses 9–20."
    },
    tip: {
      zh: "16:9-20 是否馬可原有，學者看法不一；婦女「甚麼也不告訴人」，與後面長結尾的記載並列時，常被討論。",
      en: "Whether 16:9–20 was Mark’s own scholars disagree; the women’s “said nothing to anyone,” set against the longer ending, is often discussed."
    },
    related: ["simon_cyrene", "watch_olivet", "jesus_son_of_god", "bartimaeus"]
  }

);
