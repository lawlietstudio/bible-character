// 聖經人物卡 · 路加福音 (Luke) — book info + cards.
// Verse text comes from data/luke.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/luke.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Acts 1:1-2; Col 4:14; 2 Tim 4:11; Phlm 1:24; Isa 61:1-2; Matt 6:9-13) appear in prose only.
// Flagged rather than decided: who wrote the book (anonymous; tradition says Luke the physician), who Theophilus was, the date
// of Quirinius's census, whether the Samaritan story is a parable or a real event, whether the rich man and Lazarus is a
// parable, and the textual note on Luke 17:36 (missing in the WEB).

window.BOOKS.push({
  id: "luke",
  zh: "路加福音", en: "Luke", abbr: { zh: "路", en: "Luke" },
  order: 42, section: { zh: "福音書", en: "Gospels" },
  chapters: 24,
  fan: ["good_samaritan", "luke_physician", "prodigal_son"],
  summary: {
    zh: "路加福音是四本福音書裡最長的一卷，開頭是一封給提阿非羅的序言：「這些事我既從起頭都詳細考察了，就定意要按著次序寫給你」（1:3）。前兩章是路加獨有的降生記載：撒迦利亞與伊利沙伯、天使向馬利亞報喜、馬利亞的頌歌、牧羊人與天使、西面和亞拿、十二歲的耶穌在殿裡。接著是加利利的事奉，路加特別記載對窮人、女人、外族人和罪人的關懷：拿因城的寡婦、浪子、好撒馬利亞人、撒該、悔改的賊人。最後一段是以馬忤斯的路上，復活的主為門徒講解聖經，然後升天（24 章）。這卷書有續集：使徒行傳。",
    en: "Luke is the longest of the four Gospels and opens with a preface to Theophilus: “it seemed good to me also, having traced the course of all things accurately from the first, to write to you in order” (1:3). Chapters 1–2 are Luke’s own account of the birth: Zechariah and Elizabeth, the angel’s announcement to Mary, Mary’s song, the shepherds and angels, Simeon and Anna, the twelve-year-old Jesus in the temple. Then the Galilean ministry, in which Luke notes his care for the poor, women, outsiders and sinners: the widow of Nain, the prodigal son, the good Samaritan, Zacchaeus, the repentant criminal. The last section is the road to Emmaus, where the risen Lord opens the Scriptures to the disciples, and then the ascension (ch 24). The book has a sequel: Acts."
  },
  outline: [
    { zh: "序言；撒迦利亞；天使報喜；馬利亞的頌歌；約翰出生", en: "Preface; Zechariah; the annunciation; Mary’s song; John’s birth" },
    { zh: "牧羊人與天使；西面與亞拿；十二歲在殿裡", en: "The shepherds and angels; Simeon and Anna; twelve years old in the temple" },
    { zh: "約翰的傳道；耶穌受洗；家譜", en: "John’s preaching; Jesus’s baptism; the genealogy" },
    { zh: "曠野受試探；拿撒勒會堂", en: "Temptation in the wilderness; the Nazareth synagogue" },
    { zh: "打魚的奇蹟；癱子；呼召利未", en: "The catch of fish; the paralytic; calling Levi" },
    { zh: "平地的教訓；愛仇敵", en: "The sermon on the plain; loving enemies" },
    { zh: "百夫長；拿因城的寡婦；犯罪的女人的香膏", en: "The centurion; the widow of Nain; the sinful woman’s perfume" },
    { zh: "撒種的比喻；平靜風浪；睚魯的女兒", en: "The parable of the sower; stilling the storm; Jairus’s daughter" },
    { zh: "差遣十二人；五餅二魚；彼得的認信；變像", en: "The Twelve sent; five loaves; Peter’s confession; the transfiguration" },
    { zh: "差遣七十人；好撒馬利亞人；馬大與馬利亞", en: "The seventy sent; the good Samaritan; Martha and Mary" },
    { zh: "主禱文；半夜求餅的朋友；責備法利賽人", en: "The Lord’s Prayer; the friend at midnight; rebuking the Pharisees" },
    { zh: "糊塗的財主；不要憂慮；警醒", en: "The rich fool; do not be anxious; be ready" },
    { zh: "悔改；無花果樹；窄門；為耶路撒冷嘆息", en: "Repent; the fig tree; the narrow door; lament for Jerusalem" },
    { zh: "大筵席；作門徒的代價", en: "The great banquet; the cost of discipleship" },
    { zh: "失羊、失錢、浪子", en: "The lost sheep, the lost coin, the prodigal son" },
    { zh: "不義的管家；財主與拉撒路", en: "The dishonest manager; the rich man and Lazarus" },
    { zh: "十個長大痲瘋的；神的國就在你們中間", en: "Ten lepers; the Kingdom of God is among you" },
    { zh: "不倦的寡婦；法利賽人與稅吏；孩童", en: "The persistent widow; the Pharisee and the tax collector; children" },
    { zh: "撒該；銀子的比喻；進耶路撒冷；為城哀哭", en: "Zacchaeus; the pounds; the entry; weeping over the city" },
    { zh: "潔淨聖殿；園戶的比喻；寡婦的兩個小錢", en: "Cleansing the temple; the tenants; the widow’s two coins" },
    { zh: "末日的預告", en: "The last things" },
    { zh: "最後的晚餐；客西馬尼；彼得的不認", en: "The last supper; Gethsemane; Peter’s denial" },
    { zh: "受審；十字架；樂園的應許；埋葬", en: "The trial; the cross; the promise of paradise; the burial" },
    { zh: "空墳墓；以馬忤斯；升天", en: "The empty tomb; Emmaus; the ascension" }
  ],
  notes: {
    zh: "小提示：路加福音沒有署名，傳統上認為作者是路加，保羅稱他為「親愛的醫生」（西 4:14），他也是使徒行傳的作者（徒 1:1-2 提到「前書」與提阿非羅）。路加福音有許多獨有的記載，如浪子、好撒馬利亞人、撒該、以馬忤斯，卡片多選這些場景，以免與馬太福音、馬可福音重複。",
    en: "Good to know: Luke is anonymous; tradition says its author is Luke, whom Paul calls “the beloved physician” (Col 4:14), and who also wrote Acts (Acts 1:1–2 mentions the “former book” and Theophilus). Luke has many accounts of its own — the prodigal son, the good Samaritan, Zacchaeus, Emmaus — and the cards mostly choose these to avoid repeating Matthew and Mark."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "luke_physician", book: "luke", no: 1, kind: "person", type: "wisdom", rarity: 6,
    zh: "路加", en: "Luke",
    tag: { zh: "詳細考察，按著次序寫給你", en: "Traced Accurately and Wrote in Order" },
    role: { zh: "醫生・福音書與使徒行傳的作者（傳統）", en: "Physician · author of the Gospel and Acts (tradition)" },
    ch: [1],
    passages: ["1:1-4"],
    moves: [
      { zh: "從起頭詳細考察", en: "Traced from the First", ref: "1:3",
        dzh: "這些事我既從起頭都詳細考察了，就定意要按著次序寫給你。",
        den: "Having traced the course of all things accurately from the first, it seemed good to write to you in order." },
      { zh: "使你知道是確實的", en: "That You May Know the Certainty", ref: "1:4",
        dzh: "寫給提阿非羅大人，使你知道所學之道都是確實的。",
        den: "He writes to the most excellent Theophilus, that he might know the certainty of the things he was taught." }
    ],
    traits: [
      { k: "strength", zh: "重視考察與次序", en: "Values investigation and order" },
      { k: "identity", zh: "福音書和使徒行傳是同一位作者（徒 1:1）", en: "Gospel and Acts share an author (Acts 1:1)" }
    ],
    lesson: {
      zh: "路加福音是少有的幾卷在開頭說明自己怎樣寫成的書：許多人已經提筆作書（1:1），有親眼看見的人傳下來（1:2），他自己又詳細考察，按著次序寫（1:3）。他沒有說自己是目擊者。",
      en: "Luke is one of the few books to say at the start how it was made: many had already undertaken to write (1:1), eyewitnesses passed things on (1:2), and he himself traced it accurately and wrote in order (1:3). He does not claim to be an eyewitness."
    },
    quote: { ref: "1:3",
      zh: "這些事我既從起頭都詳細考察了，就定意要按著次序寫給你",
      en: "having traced the course of all things accurately from the first" },
    keyVerses: ["1:1", "1:2", "1:3", "1:4"],
    intro: {
      zh: "書的開頭是一個古典希臘文的長句，寫給「提阿非羅大人」（1:1-4）；提阿非羅是誰，經文沒有說（有人說是一位官員或贊助人，名字意思是「愛神的人」）。作者沒有署名，傳統上認為是路加。保羅在歌羅西書 4:14 稱「親愛的醫生路加」，在提摩太後書 4:11 說「獨有路加在我這裡」，腓利門書 1:24 也把他列為同工。使徒行傳 1:1 開頭也是對提阿非羅說的，說這是「前書」之後的續集。",
      en: "The book opens with a long, classical-Greek sentence to “most excellent Theophilus” (1:1–4); who Theophilus was the text does not say (some think an official or patron; the name means “lover of God”). The author does not sign; tradition says he is Luke. Paul calls him “Luke, the beloved physician” (Col 4:14), says “Only Luke is with me” (2 Tim 4:11), and lists him among his fellow workers (Phlm 1:24). Acts 1:1 also begins to Theophilus, saying it follows the “former book.”"
    },
    tip: {
      zh: "作者是路加，是傳統的說法；福音書本身沒有署名，使徒行傳也沒有。",
      en: "Luke as author is the traditional view; neither the Gospel nor Acts names him."
    },
    related: ["priest_zechariah", "annunciation", "emmaus_road", "ascension_commission"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "priest_zechariah", book: "luke", no: 2, kind: "person", type: "faith", rarity: 3,
    zh: "祭司撒迦利亞", en: "Zechariah the Priest",
    tag: { zh: "你的祈禱已經被聽見了", en: "Your Prayer Has Been Heard" },
    role: { zh: "施洗約翰的父親（1:5-25、57-80）", en: "John the Baptist’s father (1:5–25, 57–80)" },
    ch: [1],
    passages: ["1:5-25", "1:57-80"],
    moves: [
      { zh: "天使在香壇旁", en: "The Angel at the Incense Altar", ref: "1:13",
        dzh: "天使對他說：撒迦利亞，不要害怕，因為你的祈禱已經被聽見了。你要給他起名叫約翰。",
        den: "The angel said, “Don’t be afraid, Zacharias, because your request has been heard… you shall call his name John.”" },
      { zh: "他的名字是約翰", en: "His Name Is John", ref: "1:63-64",
        dzh: "他要了一塊寫字的板，寫上：他的名字是約翰。撒迦利亞的口立時開了，就稱頌神。",
        den: "He asked for a writing tablet and wrote, “His name is John.” His mouth was opened at once, and he blessed God." }
    ],
    traits: [
      { k: "strength", zh: "夫婦二人在神面前都是義人（1:6）", en: "Both righteous before God (1:6)" },
      { k: "weakness", zh: "不信天使的話，成了啞巴（1:18-20）", en: "Doubts the angel’s word and is struck mute (1:18–20)" }
    ],
    lesson: {
      zh: "撒迦利亞和伊利沙伯年紀老邁，沒有孩子（1:7）。他問天使「我憑著甚麼可知道這事呢？」（1:18）就不能說話，直到孩子出生，他寫下名字。他再開口的第一件事是稱頌神（1:64）。",
      en: "Zechariah and Elizabeth are old and childless (1:7). He asks the angel “How will I know this?” (1:18) and cannot speak until the child is born and he writes the name. The first thing he does when his mouth opens is bless God (1:64)."
    },
    quote: { ref: "1:13",
      zh: "撒迦利亞，不要害怕，因為你的祈禱已經被聽見了",
      en: "Don’t be afraid, Zacharias, because your request has been heard" },
    keyVerses: ["1:5", "1:6", "1:7", "1:13", "1:18", "1:20", "1:63", "1:64"],
    intro: {
      zh: "「當猶太王希律的時候，亞比雅班裡有一個祭司，名叫撒迦利亞；他妻子是亞倫的後人，名叫伊利沙伯。」（1:5）輪到他進聖所燒香，天使加百列在香壇的右邊向他顯現，說他妻子要生一個兒子，要起名叫約翰（1:8-13）。這孩子要「將以色列人中的許多人轉向主」（1:16）。撒迦利亞不信，就不能說話（1:20）。八日後行割禮，眾人要叫他撒迦利亞，伊利沙伯說「不可！要叫他約翰」（1:59-60）。",
      en: "“In the days of Herod, King of Judea, there was a certain priest named Zacharias, of the priestly division of Abijah. He had a wife of the daughters of Aaron, and her name was Elizabeth” (1:5). When his turn comes to burn incense in the sanctuary, the angel Gabriel appears at the right of the altar and says his wife will bear a son to be named John (1:8–13). He will “turn many of the children of Israel to the Lord their God” (1:16). Zechariah doubts and is struck mute (1:20). On the eighth day, at the circumcision, they want to name him Zechariah; Elizabeth says, “No; but he will be called John” (1:59–60)."
    },
    tip: {
      zh: "同名的先知撒迦利亞（撒迦利亞書）是另一個人；路加福音的撒迦利亞是祭司。",
      en: "The prophet Zechariah (of the book) is another man; Luke’s Zechariah is a priest."
    },
    related: ["luke_physician", "annunciation", "magnificat", "shepherds_angels"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "annunciation", book: "luke", no: 3, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "天使報喜", en: "The Annunciation",
    tag: { zh: "我是主的使女，情願照你的話成就", en: "Behold, the Servant of the Lord" },
    role: { zh: "加百列與馬利亞（1:26-38）", en: "Gabriel and Mary (1:26–38)" },
    ch: [1],
    passages: ["1:26-38"],
    moves: [
      { zh: "你蒙恩了", en: "You Have Found Favor", ref: "1:30-31",
        dzh: "天使說：馬利亞，不要怕！你在神面前已經蒙恩了。你要懷孕生子，可以給他起名叫耶穌。",
        den: "“Don’t be afraid, Mary, for you have found favor with God. You will conceive and give birth to a son, and will call his name ‘Jesus.’”" },
      { zh: "照你的話成就", en: "Let It Be Done to Me", ref: "1:38",
        dzh: "馬利亞說：我是主的使女，情願照你的話成就在我身上。天使就離開她去了。",
        den: "Mary said, “Behold, the servant of the Lord; let it be done to me according to your word.” The angel departed from her." }
    ],
    traits: [
      { k: "strength", zh: "她問問題，也接受答案", en: "She asks a question, and accepts the answer" },
      { k: "identity", zh: "路加福音獨有的記載", en: "Found only in Luke" }
    ],
    lesson: {
      zh: "馬利亞也問了「怎麼有這事呢？」（1:34），和撒迦利亞的問法相似，但天使沒有責備她，而是回答聖靈要臨到她（1:35）。她的回答是全書第一個「情願」。",
      en: "Mary also asks “How can this be?” (1:34), much as Zechariah did, but the angel does not rebuke her and answers that the Holy Spirit will come on her (1:35). Her reply is the book’s first “let it be.”"
    },
    quote: { ref: "1:38",
      zh: "我是主的使女，情願照你的話成就在我身上",
      en: "Behold, the servant of the Lord; let it be done to me according to your word." },
    keyVerses: ["1:26", "1:28", "1:30", "1:31", "1:32", "1:33", "1:35", "1:38"],
    intro: {
      zh: "第六個月，天使加百列奉神的差遣，往加利利的一座城，名叫拿撒勒，到一個童女那裡，是已經許配給大衛家的一個人，名叫約瑟；童女的名字叫馬利亞（1:26-27）。天使說她要懷孕生子，起名叫耶穌；他要為大，稱為至高者的兒子；主神要把他祖大衛的位給他，作雅各家的王直到永遠（1:31-33）。馬利亞問「我沒有出嫁，怎麼有這事呢？」天使說「聖靈要臨到你身上，至高者的能力要蔭庇你」（1:34-35）。",
      en: "In the sixth month the angel Gabriel is sent from God to a city of Galilee named Nazareth, to a virgin pledged to a man named Joseph, of the house of David; the virgin’s name is Mary (1:26–27). The angel says she will conceive and bear a son named Jesus; he will be great and be called the Son of the Most High; the Lord God will give him the throne of his father David, and he will reign over the house of Jacob forever (1:31–33). Mary asks, “How can this be, seeing I am a virgin?” The angel says, “The Holy Spirit will come on you, and the power of the Most High will overshadow you” (1:34–35)."
    },
    tip: {
      zh: "馬太福音 1:18-25 從約瑟的角度說同一件事；路加福音從馬利亞的角度。",
      en: "Matthew 1:18–25 tells the same event from Joseph’s side; Luke tells it from Mary’s."
    },
    related: ["priest_zechariah", "magnificat", "shepherds_angels", "boy_in_temple"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "magnificat", book: "luke", no: 4, kind: "other", type: "love", rarity: 5,
    zh: "馬利亞的頌歌", en: "Mary’s Song",
    tag: { zh: "我心尊主為大", en: "My Soul Magnifies the Lord" },
    role: { zh: "探訪伊利沙伯（1:39-56）", en: "The visit to Elizabeth (1:39–56)" },
    ch: [1],
    passages: ["1:39-56"],
    moves: [
      { zh: "我心尊主為大", en: "My Soul Magnifies the Lord", ref: "1:46-47",
        dzh: "馬利亞說：我心尊主為大；我靈以神我的救主為樂。",
        den: "Mary said, “My soul magnifies the Lord. My spirit has rejoiced in God my Savior.”" },
      { zh: "萬代要稱我有福", en: "All Generations Will Call Me Blessed", ref: "1:48-49",
        dzh: "因為他顧念他使女的卑微；從今以後，萬代要稱我有福；那有權能的，為我成就了大事。",
        den: "“He has looked at the humble state of his servant. From now on, all generations will call me blessed. He who is mighty has done great things for me.”" }
    ],
    traits: [
      { k: "strength", zh: "用舊約的語言唱出新的事", en: "Sings a new event in the language of the Old Testament" },
      { k: "identity", zh: "與哈拿的禱告（撒上 2）相呼應", en: "Echoes Hannah’s prayer (1 Samuel 2)" }
    ],
    lesson: {
      zh: "馬利亞的頌歌從自己的卑微（1:48）說到神對全民的作為：他叫有權有勢的失位，叫卑賤的升高；叫飢餓的得飽美食，叫富足的空手回去（1:52-53）。",
      en: "Mary’s song moves from her own humble state (1:48) to what God does for all: he puts down the mighty and exalts the lowly; he fills the hungry with good things and sends the rich away empty (1:52–53)."
    },
    quote: { ref: "1:46",
      zh: "我心尊主為大",
      en: "My soul magnifies the Lord." },
    keyVerses: ["1:39", "1:41", "1:42", "1:46", "1:47", "1:48", "1:52", "1:53", "1:55"],
    intro: {
      zh: "馬利亞起身，急忙往山地裡去，進了猶大的一座城，問伊利沙伯安（1:39-40）。伊利沙伯一聽馬利亞問安，所懷的胎就在腹裡跳動，她被聖靈充滿，大聲說「你在婦女中是有福的」（1:41-42）。馬利亞就唱出：「我心尊主為大；我靈以神我的救主為樂」（1:46-47）。頌歌的拉丁文起首字是 Magnificat，所以常稱為「馬利亞的頌歌」。馬利亞和伊利沙伯同住約三個月，然後回家（1:56）。",
      en: "Mary arises and goes with haste into the hill country to a city of Judah and greets Elizabeth (1:39–40). When Elizabeth hears Mary’s greeting the baby leaps in her womb, and she is filled with the Holy Spirit and cries out, “Blessed are you among women” (1:41–42). Mary then sings: “My soul magnifies the Lord. My spirit has rejoiced in God my Savior” (1:46–47). The song’s Latin first word is Magnificat, hence its common name. Mary stays about three months and returns home (1:56)."
    },
    tip: {
      zh: "這首頌歌是馬利亞所唱，還是（古抄本中少數）說是伊利沙伯所唱，是一個老問題；多數抄本作「馬利亞」。",
      en: "Whether Mary or (in a few ancient copies) Elizabeth sings the song is an old question; most manuscripts say “Mary.”"
    },
    related: ["annunciation", "priest_zechariah", "shepherds_angels", "simeon_anna"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "shepherds_angels", book: "luke", no: 5, kind: "other", type: "heaven", rarity: 5,
    zh: "牧羊人與天使", en: "Shepherds and Angels",
    tag: { zh: "為你們生了救主，就是主基督", en: "Born to You a Savior, Who Is Christ the Lord" },
    role: { zh: "伯利恆的夜晚（2:1-20）", en: "The night at Bethlehem (2:1–20)" },
    ch: [2],
    passages: ["2:1-20"],
    moves: [
      { zh: "大喜的信息", en: "Good News of Great Joy", ref: "2:10-11",
        dzh: "天使說：不要懼怕！我報給你們大喜的信息，是關乎萬民的；今天在大衛的城裡，為你們生了救主。",
        den: "“Don’t be afraid, for behold, I bring you good news of great joy which will be to all the people. For there is born to you today, in David’s city, a Savior.”" },
      { zh: "包著布，臥在馬槽裡", en: "Wrapped in Cloths, in a Manger", ref: "2:12",
        dzh: "你們要看見一個嬰孩，包著布，臥在馬槽裡，那就是記號了。",
        den: "“This is the sign to you: you will find a baby wrapped in strips of cloth, lying in a feeding trough.”" }
    ],
    traits: [
      { k: "strength", zh: "第一批聽見的是夜裡看羊的人", en: "The first to hear are men watching sheep at night" },
      { k: "identity", zh: "「救主，就是主基督」", en: "“A Savior, who is Christ the Lord”" }
    ],
    lesson: {
      zh: "天使的信息是給「萬民」的（2:10），報給夜裡看守羊群的人，記號是一個臥在馬槽裡的嬰孩（2:12）。牧羊人急忙去，「就將天使指著這孩子所說的話傳開了」（2:16-17）。",
      en: "The angel’s message is “to all the people” (2:10), given to men keeping watch over flocks by night, and the sign is a baby lying in a feeding trough (2:12). The shepherds go with haste and “made known widely the saying which was spoken to them about this child” (2:16–17)."
    },
    quote: { ref: "2:11",
      zh: "因今天在大衛的城裡，為你們生了救主，就是主基督",
      en: "there is born to you today, in David’s city, a Savior, who is Christ the Lord" },
    keyVerses: ["2:1", "2:4", "2:7", "2:8", "2:10", "2:11", "2:12", "2:14", "2:20"],
    intro: {
      zh: "那時，凱撒奧古斯都有旨意下來，叫天下人民都報名上冊（2:1）。約瑟和馬利亞上伯利恆去報名，馬利亞生了頭胎的兒子，用布包起來，放在馬槽裡，因為客店裡沒有地方（2:4-7）。在那地方有牧羊的人，夜間輪流看守羊群，主的使者站在他們旁邊，主的榮光四面照著他們（2:8-9）。忽然有一大隊天兵讚美神：「在至高之處榮耀歸與神！在地上平安歸與他所喜悅的人！」（2:13-14）",
      en: "In those days a decree went out from Caesar Augustus that all the world should be registered (2:1). Joseph and Mary go to Bethlehem to be registered; Mary gives birth to her firstborn son, wraps him in strips of cloth and lays him in a feeding trough, because there was no room in the inn (2:4–7). In that country there are shepherds keeping watch over their flock by night; an angel of the Lord stands by them and the glory of the Lord shines around them (2:8–9). Suddenly a multitude of the heavenly army praise God: “Glory to God in the highest, on earth peace, good will toward men” (2:13–14)."
    },
    tip: {
      zh: "2:14 的「喜悅的人」，和合本註說有古卷作「喜悅歸與人」；兩種讀法意思略有不同。",
      en: "In 2:14 “those with whom he is pleased,” the CUV note says some manuscripts read “good will toward men”; the two readings differ a little."
    },
    related: ["annunciation", "magnificat", "simeon_anna", "boy_in_temple"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "simeon_anna", book: "luke", no: 6, kind: "person", type: "vision", rarity: 4,
    zh: "西面與亞拿", en: "Simeon and Anna",
    tag: { zh: "我的眼睛已經看見你的救恩", en: "My Eyes Have Seen Your Salvation" },
    role: { zh: "殿裡的兩位老人（2:25-38）", en: "Two old people in the temple (2:25–38)" },
    ch: [2],
    passages: ["2:25-38"],
    moves: [
      { zh: "照亮外邦人的光", en: "A Light to the Nations", ref: "2:29-32",
        dzh: "西面抱著孩子說：主啊，如今可以釋放僕人安然去世；我的眼睛已經看見你的救恩，是照亮外邦人的光。",
        den: "Simeon, holding the child: “Now you are releasing your servant, Master, in peace; my eyes have seen your salvation, a light for revelation to the nations.”" },
      { zh: "女先知亞拿", en: "Anna the Prophetess", ref: "2:36-38",
        dzh: "有女先知亞拿，年紀已經老邁，常在殿裡，禁食祈求，晝夜侍奉神；她就稱謝神，對一切盼望耶路撒冷得救贖的人講說這孩子。",
        den: "Anna the prophetess, very old, never left the temple; she gave thanks to God and spoke of the child to all who looked for redemption." }
    ],
    traits: [
      { k: "strength", zh: "等候多年，認出一個嬰孩", en: "Waited many years and recognized a baby" },
      { k: "identity", zh: "西面稱他為「外邦人的光」", en: "Simeon calls him “a light to the Gentiles”" }
    ],
    lesson: {
      zh: "西面「素來敬虔，等候以色列的安慰者」（2:25），聖靈應許他必看見主所立的基督才會死（2:26）。亞拿八十四歲，寡居多年，常在殿裡（2:36-37）。兩人都是老人，都在殿裡等候，都認出了嬰孩。",
      en: "Simeon was “righteous and devout, looking for the consolation of Israel” (2:25), and the Spirit had promised he would not die before seeing the Lord’s Christ (2:26). Anna was eighty-four, a widow for many years, always in the temple (2:36–37). Both are old, both waiting in the temple, both recognize the child."
    },
    quote: { ref: "2:32",
      zh: "是照亮外邦人的光，又是你民以色列的榮耀",
      en: "a light for revelation to the nations, and the glory of your people Israel" },
    keyVerses: ["2:25", "2:26", "2:28", "2:29", "2:30", "2:32", "2:36", "2:38"],
    intro: {
      zh: "耶穌滿了八日，要行割禮，就起名叫耶穌（2:21）；滿了潔淨的日子，父母帶他上耶路撒冷，要把他獻與主（2:22）。在耶路撒冷有一個人，名叫西面，是公義虔誠的（2:25）。他受了聖靈的感動進入聖殿，抱著孩子稱頌神（2:27-28）。他也對馬利亞說這孩子「是要被毀謗的」，「叫許多人心中的思念顯露出來」（2:34-35）。又有女先知亞拿，是亞設支派法內力的女兒，嫁後七年就寡居，現在已經八十四歲（2:36-37）。",
      en: "When eight days were fulfilled for circumcising him, he was named Jesus (2:21); when the days of purification were over, his parents took him up to Jerusalem to present him to the Lord (2:22). In Jerusalem there was a man named Simeon, righteous and devout (2:25). Moved by the Spirit he came into the temple and, taking the child in his arms, blessed God (2:27–28). He also told Mary that the child is “a sign which is spoken against,” so “that the thoughts of many hearts may be revealed” (2:34–35). There was also the prophetess Anna, a daughter of Phanuel of the tribe of Asher, widowed after seven years of marriage and now eighty-four (2:36–37)."
    },
    tip: {
      zh: "亞拿「八十四歲」，也可讀作「寡居了八十四年」，原文有兩種讀法。",
      en: "Anna “eighty-four” can also be read as “a widow for eighty-four years”; the Greek allows both."
    },
    related: ["shepherds_angels", "boy_in_temple", "magnificat", "priest_zechariah"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "boy_in_temple", book: "luke", no: 7, kind: "other", type: "wisdom", rarity: 3,
    zh: "十二歲的耶穌", en: "Jesus at Twelve",
    tag: { zh: "我應當以我父的事為念", en: "I Must Be in My Father’s House" },
    role: { zh: "殿裡的男孩（2:41-52）", en: "The boy in the temple (2:41–52)" },
    ch: [2],
    passages: ["2:41-52"],
    moves: [
      { zh: "坐在教師中間", en: "Among the Teachers", ref: "2:46",
        dzh: "過了三天，就遇見他在殿裡，坐在教師中間，一面聽，一面問。",
        den: "After three days they found him in the temple, sitting among the teachers, both listening to them and asking them questions." },
      { zh: "豈不知我應當以我父的事為念", en: "My Father’s Business", ref: "2:49",
        dzh: "耶穌說：為甚麼找我呢？豈不知我應當以我父的事為念嗎？",
        den: "He said to them, “Why were you looking for me? Didn’t you know that I must be in my Father’s house?”" }
    ],
    traits: [
      { k: "strength", zh: "「一面聽，一面問」", en: "“Both listening and asking questions”" },
      { k: "identity", zh: "福音書中他童年唯一的一個故事", en: "The only story of his boyhood in the Gospels" }
    ],
    lesson: {
      zh: "全書中他童年唯一的一個故事，結尾是平淡的：「他就同他們下去，回到拿撒勒，並且順從他們」（2:51），而「耶穌的智慧和身量，並神和人喜愛他的心，都一齊增長」（2:52）。",
      en: "The only story of his boyhood ends quietly: “He went down with them, and came to Nazareth; and he was subject to them” (2:51), and “Jesus increased in wisdom and stature, and in favor with God and men” (2:52)."
    },
    quote: { ref: "2:49",
      zh: "為甚麼找我呢？豈不知我應當以我父的事為念嗎",
      en: "Why were you looking for me? Didn’t you know that I must be in my Father’s house?" },
    keyVerses: ["2:41", "2:42", "2:43", "2:46", "2:47", "2:49", "2:51", "2:52"],
    intro: {
      zh: "耶穌十二歲，父母照節期的規矩上耶路撒冷去（2:42）。守滿了節期回去，孩童耶穌仍舊在耶路撒冷；父母以為他在同行的人中間，走了一天的路程才找他（2:43-44）。找不著，回耶路撒冷去找，過了三天，才遇見他在殿裡（2:45-46）。眾人聽見他的聰明和對答，都稀奇（2:47）。他父母看見就希奇；母親說「我兒，為甚麼向我們這樣行呢？」（2:48）他的回答（2:49）是福音書中耶穌第一次說話。「以我父的事為念」，和合本註作「在我父的家裡」。",
      en: "When Jesus is twelve his parents go up to Jerusalem according to the custom of the feast (2:42). As they return after the feast, the boy Jesus stays behind in Jerusalem; his parents, supposing him in the company, go a day’s journey before looking for him (2:43–44). Not finding him they return to Jerusalem to search, and after three days find him in the temple (2:45–46). All who hear him are amazed at his understanding and answers (2:47). His parents are astonished; his mother says, “Son, why have you treated us this way?” (2:48). His reply (2:49) is the first thing Jesus says in the Gospels. “My Father’s business” is “in my Father’s house” in the CUV note."
    },
    tip: {
      zh: "「以我父的事為念」還是「在我父的家裡」，和合本註列出兩種譯法，兩種都有人採用。",
      en: "“My Father’s business” or “in my Father’s house”: the CUV note lists both renderings, and both are used."
    },
    related: ["simeon_anna", "annunciation", "nazareth_synagogue", "shepherds_angels"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "nazareth_synagogue", book: "luke", no: 8, kind: "other", type: "power", rarity: 4,
    zh: "拿撒勒的會堂", en: "The Synagogue at Nazareth",
    tag: { zh: "今天這經應驗在你們耳中了", en: "Today This Scripture Has Been Fulfilled" },
    role: { zh: "第一次公開講道（4:16-30）", en: "The first public sermon (4:16–30)" },
    ch: [4],
    passages: ["4:16-30"],
    moves: [
      { zh: "主的靈在我身上", en: "The Spirit of the Lord Is on Me", ref: "4:18",
        dzh: "主的靈在我身上，因為他用膏膏我，叫我傳福音給貧窮的人；差遣我報告被擄的得釋放。",
        den: "“The Spirit of the Lord is on me, because he has anointed me to preach good news to the poor… to proclaim release to the captives.”" },
      { zh: "沒有先知在家鄉被悅納", en: "No Prophet Accepted at Home", ref: "4:24",
        dzh: "耶穌說：我實在告訴你們，沒有先知在自己家鄉被人悅納的。",
        den: "He said, “Most certainly I tell you, no prophet is acceptable in his own country.”" }
    ],
    traits: [
      { k: "strength", zh: "用以賽亞書 61 章作自己事工的宣言", en: "Uses Isaiah 61 as the manifesto of his ministry" },
      { k: "weakness", zh: "鄉人從稱讚到要把他推下山崖（4:22、29）", en: "From praise to wanting to throw him down the cliff (4:22, 29)" }
    ],
    lesson: {
      zh: "耶穌念的是以賽亞書 61:1-2，念到「報告神悅納人的禧年」就停（4:19-20），並說「今天這經應驗在你們耳中了」（4:21）。眾人先是稱讚，後來聽見他舉外邦人的例子（寡婦與乃縵，4:25-27），全會堂的人就怒氣滿胸（4:28）。",
      en: "Jesus reads Isaiah 61:1–2 and stops at “the acceptable year of the Lord” (4:19–20), saying, “Today, this Scripture has been fulfilled in your hearing” (4:21). The people first praise him; when he cites Gentile examples (the widow and Naaman, 4:25–27) everyone in the synagogue is filled with wrath (4:28)."
    },
    quote: { ref: "4:18",
      zh: "主的靈在我身上，因為他用膏膏我，叫我傳福音給貧窮的人",
      en: "The Spirit of the Lord is on me, because he has anointed me to preach good news to the poor." },
    keyVerses: ["4:16", "4:17", "4:18", "4:19", "4:21", "4:22", "4:24", "4:28", "4:30"],
    intro: {
      zh: "耶穌來到拿撒勒，就是他長大的地方。在安息日，照他平常的規矩進了會堂，站起來要念聖經（4:16）。有人把先知以賽亞的書交給他，他找到一處（4:17），念出「主的靈在我身上……」的一段（4:18-19）。他把書卷起來，交還執事，就坐下，會堂裡的人都定睛看他（4:20）。他說「今天這經應驗在你們耳中了」（4:21）。後來眾人把他趕出城，要把他推下山崖，他卻從他們中間直行，過去了（4:29-30）。",
      en: "Jesus comes to Nazareth, where he was brought up. On the Sabbath day, as was his custom, he goes into the synagogue and stands up to read (4:16). The scroll of Isaiah the prophet is handed to him, and he finds a place (4:17) and reads “The Spirit of the Lord is on me…” (4:18–19). He rolls up the scroll, gives it to the attendant and sits down, and the eyes of all in the synagogue are fixed on him (4:20). He says, “Today, this Scripture has been fulfilled in your hearing” (4:21). Later they drive him out of the city and want to throw him off the cliff, but he passes through the midst of them and goes on (4:29–30)."
    },
    tip: {
      zh: "馬太福音 13:53-58 與馬可福音 6:1-6 也記拿撒勒被拒絕，但時間和細節與路加的位置不同。",
      en: "Matthew 13:53–58 and Mark 6:1–6 also record the rejection at Nazareth, with timing and details that differ from Luke’s placement."
    },
    related: ["boy_in_temple", "catch_of_fish", "widow_nain", "good_samaritan"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "catch_of_fish", book: "luke", no: 9, kind: "other", type: "faith", rarity: 4,
    zh: "打魚的奇蹟", en: "The Catch of Fish",
    tag: { zh: "主啊，離開我，我是個罪人", en: "Depart from Me, for I Am a Sinful Man" },
    role: { zh: "彼得被呼召（5:1-11）", en: "Peter’s call (5:1–11)" },
    ch: [5],
    passages: ["5:1-11"],
    moves: [
      { zh: "撒下網", en: "Let Down Your Nets", ref: "5:4-5",
        dzh: "耶穌對西門說：把船開到水深之處，下網打魚。西門說：夫子，我們整夜勞力，並沒有打著甚麼；但依你的話，我就下網。",
        den: "He said to Simon, “Put out into the deep, and let down your nets.” Simon: “Master, we worked all night and caught nothing; but at your word I will let down the net.”" },
      { zh: "離開我，我是個罪人", en: "Depart from Me", ref: "5:8",
        dzh: "西門彼得看見，就俯伏在耶穌膝前，說：主啊，離開我，我是個罪人！",
        den: "Simon Peter fell down at Jesus’s knees, saying, “Depart from me, for I am a sinful man, Lord.”" }
    ],
    traits: [
      { k: "strength", zh: "「依你的話」——專業漁夫肯聽木匠的話", en: "“At your word” — a professional fisherman listens to a carpenter’s son" },
      { k: "weakness", zh: "看見奇蹟，反而覺得自己不配", en: "Seeing the miracle, he feels unworthy" }
    ],
    lesson: {
      zh: "路加福音把呼召漁夫放在打魚的奇蹟之後：先有「依你的話」（5:5）和網幾乎裂開（5:6），然後有彼得的「主啊，離開我」（5:8），然後耶穌說「不要怕，從今以後，你要得人了」（5:10）。他們就「撇下所有的，跟從了耶穌」（5:11）。",
      en: "Luke places the call after the catch: first “at your word” (5:5) and the nets nearly breaking (5:6), then Peter’s “Depart from me” (5:8), then Jesus’s “Don’t be afraid. From now on you will be catching people” (5:10). They “left everything, and followed him” (5:11)."
    },
    quote: { ref: "5:8",
      zh: "主啊，離開我，我是個罪人",
      en: "Depart from me, for I am a sinful man, Lord." },
    keyVerses: ["5:1", "5:3", "5:4", "5:5", "5:6", "5:8", "5:10", "5:11"],
    intro: {
      zh: "耶穌站在革尼撒勒湖邊，眾人擁擠他，要聽神的道；他看見有兩隻船灣在湖邊，打魚的人下了船洗網，他就上了西門的船，請他撐開，離岸不遠，就坐下，從船上教訓眾人（5:1-3）。講完了，對西門說要下網；西門依他的話下了網，圈住許多魚，網險些裂開（5:4-6）。他們招呼另一隻船上的同伴來幫忙；西門彼得看見就俯伏，說「主啊，離開我，我是個罪人」（5:7-8）。",
      en: "Jesus stands by the Lake of Gennesaret, the crowd pressing on him to hear the word of God; he sees two boats at the shore, the fishermen washing their nets, steps into Simon’s boat and asks him to put out a little, then sits down and teaches the crowds from the boat (5:1–3). When he finishes he tells Simon to let down his nets; Simon does so at his word and they enclose a great number of fish, so that the net begins to break (5:4–6). They signal their partners in the other boat to help; Simon Peter, seeing it, falls down and says, “Depart from me, for I am a sinful man, Lord” (5:7–8)."
    },
    tip: {
      zh: "約翰福音 21:1-14 也有一次打魚的奇蹟，但發生在復活之後；兩次是否同一事，注釋書看法不一。",
      en: "John 21:1–14 also has a catch of fish, after the resurrection; whether the two are the same event commentaries differ."
    },
    related: ["nazareth_synagogue", "widow_nain", "perfume_feet", "zacchaeus"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "widow_nain", book: "luke", no: 10, kind: "person", type: "love", rarity: 3,
    zh: "拿因城的寡婦", en: "The Widow of Nain",
    tag: { zh: "主看見那寡婦，就憐憫她", en: "When the Lord Saw Her, He Had Compassion" },
    role: { zh: "獨生子的出殯（7:11-17）", en: "An only son’s funeral (7:11–17)" },
    ch: [7],
    passages: ["7:11-17"],
    moves: [
      { zh: "不要哭", en: "Don’t Cry", ref: "7:12-13",
        dzh: "將近城門，有一個死人被抬出來，是他母親獨生的兒子；主看見那寡婦，就憐憫她，對她說：不要哭！",
        den: "Near the gate a dead man was carried out, the only son of his mother; when the Lord saw her he had compassion on her and said, “Don’t cry.”" },
      { zh: "少年人，我吩咐你起來", en: "Young Man, Arise", ref: "7:14-15",
        dzh: "耶穌按著抬的槓，說：少年人，我吩咐你起來！那死人就坐起，開口說話，耶穌便把他交給他母親。",
        den: "He touched the bier: “Young man, I tell you, arise!” The dead man sat up and began to speak, and Jesus gave him to his mother." }
    ],
    traits: [
      { k: "strength", zh: "沒有人求他，他主動走近", en: "No one asked him; he came forward on his own" },
      { k: "weakness", zh: "寡婦失去獨生子，也失去生活的依靠", en: "A widow losing her only son loses her support" }
    ],
    lesson: {
      zh: "這個故事裡沒有人請求耶穌；他「看見那寡婦，就憐憫她」（7:13）。他先碰那抬槓，是按律法會使人不潔的事（參民 19:16），然後吩咐死人起來，再把他「交給他母親」（7:15）。",
      en: "No one asks Jesus in this story; he “saw her” and “had compassion on her” (7:13). He touches the bier, an act that under the law would make one unclean (compare Num 19:16), then commands the dead man to rise and “gave him to his mother” (7:15)."
    },
    quote: { ref: "7:13",
      zh: "主看見那寡婦，就憐憫她，對她說：「不要哭！」",
      en: "When the Lord saw her, he had compassion on her, and said to her, “Don’t cry.”" },
    keyVerses: ["7:11", "7:12", "7:13", "7:14", "7:15", "7:16", "7:17"],
    intro: {
      zh: "過了不多時（和合本註：有古卷作「次日」），耶穌往一座城去，這城名叫拿因，他的門徒和極多的人與他同行（7:11）。將近城門，有一個死人被抬出來，這人是他母親獨生的兒子；他母親又是寡婦（7:12）。耶穌按著抬的槓說「少年人，我吩咐你起來！」（7:14）眾人都懼怕，歸榮耀與神，說「有大先知在我們中間興起來了」，又說「神眷顧了他的百姓」（7:16）。這個神蹟只有路加福音有，讓人想起以利亞使撒勒法寡婦的兒子復活（王上 17 章）。",
      en: "Soon afterwards (the CUV note: some manuscripts read “the next day”) Jesus goes to a city called Nain, with many of his disciples and a great crowd (7:11). Near the gate a dead man is carried out, the only son of his mother, who was a widow (7:12). Jesus touches the bier and says, “Young man, I tell you, arise!” (7:14). Fear seizes all, and they glorify God, saying, “A great prophet has arisen among us,” and “God has visited his people” (7:16). The miracle is only in Luke, and recalls Elijah raising the widow of Zarephath’s son (1 Kings 17)."
    },
    tip: {
      zh: "這件事只有路加福音有；與以利亞（王上 17）的相似，是常被指出的呼應，經文沒有明說。",
      en: "This event is only in Luke; the resemblance to Elijah (1 Kings 17) is often noted but not stated in the text."
    },
    related: ["perfume_feet", "catch_of_fish", "nazareth_synagogue", "good_samaritan"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "perfume_feet", book: "luke", no: 11, kind: "person", type: "love", rarity: 5,
    zh: "為耶穌抹香膏的女人", en: "The Woman Who Anointed His Feet",
    tag: { zh: "她許多的罪都赦免了，因為她的愛多", en: "Her Many Sins Are Forgiven, for She Loved Much" },
    role: { zh: "法利賽人西門的家（7:36-50）", en: "In Simon the Pharisee’s house (7:36–50)" },
    ch: [7],
    passages: ["7:36-50"],
    moves: [
      { zh: "眼淚、頭髮、香膏", en: "Tears, Hair, Perfume", ref: "7:37-38",
        dzh: "有一個女人，是個罪人，拿著盛香膏的玉瓶，站在耶穌背後，挨著他的腳哭，眼淚溼了他的腳，用頭髮擦乾，又把香膏抹上。",
        den: "A woman who was a sinner stood behind him at his feet weeping, wet them with her tears, wiped them with her hair, and anointed them." },
      { zh: "她的愛多", en: "She Loved Much", ref: "7:47",
        dzh: "耶穌對西門說：她許多的罪都赦免了，因為她的愛多；但那赦免少的，他的愛就少。",
        den: "“Her sins, which are many, are forgiven, for she loved much. But to whom little is forgiven, the same loves little.”" }
    ],
    traits: [
      { k: "strength", zh: "不說一句話，只用行動", en: "Says nothing, only acts" },
      { k: "weakness", zh: "是城裡有名的罪人，在法利賽人家中", en: "A known sinner of the city, in a Pharisee’s house" }
    ],
    lesson: {
      zh: "耶穌用一個小比喻回答心裡的議論：兩個欠債的人，一個欠五百，一個欠五十，債主都免了（7:41-42）。然後他把西門沒做的和那女人做的一一對照：水、親嘴、油（7:44-46）。",
      en: "Jesus answers the unspoken thought with a small parable: two debtors, one owing five hundred and one fifty, both forgiven (7:41–42). Then he sets what Simon did not do against what the woman did: water, a kiss, oil (7:44–46)."
    },
    quote: { ref: "7:47",
      zh: "她許多的罪都赦免了，因為她的愛多",
      en: "her sins, which are many, are forgiven, for she loved much" },
    keyVerses: ["7:36", "7:37", "7:38", "7:39", "7:41", "7:44", "7:47", "7:48", "7:50"],
    intro: {
      zh: "有一個法利賽人請耶穌和他吃飯；耶穌就到法利賽人家裡去坐席（7:36）。那城裡有一個女人，是個罪人，知道耶穌在那裡坐席，就拿著盛香膏的玉瓶，站在耶穌背後，挨著他的腳哭（7:37-38）。請耶穌的法利賽人心裡說：「這人若是先知，必知道摸他的是誰，是個怎樣的女人。」（7:39）耶穌對那女人說：「你的罪赦免了。」（7:48）又說：「你的信救了你，平平安安地回去吧。」（7:50）她是甚麼罪，經文沒有說。",
      en: "A Pharisee asks Jesus to eat with him, and he goes into the Pharisee’s house and sits at the table (7:36). A woman in the city who was a sinner, knowing he was eating there, brings an alabaster jar of ointment and stands behind him at his feet weeping (7:37–38). The Pharisee says to himself, “This man, if he were a prophet, would have perceived who and what kind of woman this is who touches him” (7:39). Jesus says to her, “Your sins are forgiven” (7:48) and “Your faith has saved you. Go in peace” (7:50). What her sin was the text does not say."
    },
    tip: {
      zh: "她是否就是別處（約 12 章）給耶穌抹油的馬利亞，福音書沒有說明；路加這裡沒有給她名字。",
      en: "Whether she is the Mary who anoints Jesus elsewhere (John 12) the Gospels do not say; Luke gives her no name here."
    },
    related: ["widow_nain", "martha_and_mary", "zacchaeus", "two_men_pray"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "good_samaritan", book: "luke", no: 12, kind: "person", type: "love", rarity: 5,
    zh: "好撒馬利亞人", en: "The Good Samaritan",
    tag: { zh: "你去照樣行吧", en: "Go and Do Likewise" },
    role: { zh: "「誰是我的鄰舍」（10:25-37）", en: "“Who Is My Neighbor?” (10:25–37)" },
    ch: [10],
    passages: ["10:25-37"],
    moves: [
      { zh: "動了慈心", en: "Moved with Compassion", ref: "10:33-34",
        dzh: "有一個撒馬利亞人行路來到那裡，看見他就動了慈心，上前用油和酒倒在他的傷處，包裹好了，扶他騎上自己的牲口。",
        den: "A Samaritan came where he was; seeing him, he was moved with compassion, bound up his wounds, pouring on oil and wine, and set him on his own animal." },
      { zh: "你去照樣行吧", en: "Go and Do Likewise", ref: "10:36-37",
        dzh: "耶穌問：這三個人哪一個是落在強盜手中的鄰舍呢？他說：是憐憫他的。耶穌說：你去照樣行吧。",
        den: "“Which of these three seemed to be a neighbor?” “He who showed mercy.” Jesus said, “Go and do likewise.”" }
    ],
    traits: [
      { k: "strength", zh: "撒馬利亞人在當時被猶太人輕看", en: "A Samaritan, despised by Jews of the time" },
      { k: "weakness", zh: "祭司和利未人都從另一邊過去了", en: "A priest and a Levite passed by on the other side" }
    ],
    lesson: {
      zh: "律法師問「誰是我的鄰舍呢？」（10:29）；耶穌把問題轉過來：「這三個人哪一個是落在強盜手中的鄰舍呢？」（10:36）不是「誰值得我幫助」，而是「我要成為誰的鄰舍」。",
      en: "The lawyer asks “Who is my neighbor?” (10:29); Jesus turns the question around: “Which of these three seemed to be a neighbor to him who fell among the robbers?” (10:36). Not “who deserves my help” but “whose neighbor will I be.”"
    },
    quote: { ref: "10:37",
      zh: "你去照樣行吧",
      en: "Go and do likewise." },
    keyVerses: ["10:25", "10:27", "10:29", "10:30", "10:33", "10:34", "10:36", "10:37"],
    intro: {
      zh: "一個律法師起來試探耶穌：「夫子！我該做甚麼才可以承受永生？」耶穌問他律法上怎麼寫，他引了申命記 6:5 和利未記 19:18（10:25-28）。「誰是我的鄰舍呢？」耶穌用一個比喻回答：一個人從耶路撒冷下耶利哥去，落在強盜手中，被剝去衣裳，打個半死（10:30）。祭司和利未人看見，都從另一邊過去了（10:31-32）；撒馬利亞人看見就動了慈心，照顧他，並拿二錢銀子交給店主（10:33-35）。這是路加福音獨有的故事。",
      en: "A lawyer stands up to test Jesus: “Teacher, what shall I do to inherit eternal life?” Jesus asks what the law says, and he cites Deuteronomy 6:5 and Leviticus 19:18 (10:25–28). “Who is my neighbor?” Jesus answers with a story: a man going down from Jerusalem to Jericho falls among robbers, who strip him and beat him half dead (10:30). A priest and a Levite see him and pass by on the other side (10:31–32); a Samaritan sees him and is moved with compassion, cares for him and gives two denarii to the innkeeper (10:33–35). It is a story only Luke tells."
    },
    tip: {
      zh: "這是比喻還是真實的事，經文只說「有一個人」，傳統上讀作比喻。",
      en: "Whether this is a parable or a real event the text says only “a certain man”; it is traditionally read as a parable."
    },
    related: ["martha_and_mary", "prodigal_son", "ten_lepers", "nazareth_synagogue"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "martha_and_mary", book: "luke", no: 13, kind: "person", type: "wisdom", rarity: 4,
    zh: "馬大與馬利亞", en: "Martha and Mary",
    tag: { zh: "不可少的只有一件", en: "One Thing Is Needed" },
    role: { zh: "伯大尼的家（10:38-42）", en: "The home at Bethany (10:38–42)" },
    ch: [10],
    passages: ["10:38-42"],
    moves: [
      { zh: "坐在主腳前聽道", en: "At the Lord’s Feet", ref: "10:39",
        dzh: "她有一個妹子名叫馬利亞，在耶穌腳前坐著聽他的道。",
        den: "She had a sister called Mary, who also sat at Jesus’s feet and heard his word." },
      { zh: "只有一件", en: "Only One Thing", ref: "10:41-42",
        dzh: "耶穌說：馬大！馬大！你為許多的事思慮煩擾，但是不可少的只有一件；馬利亞已經選擇那上好的福分。",
        den: "“Martha, Martha, you are anxious and troubled about many things, but one thing is needed. Mary has chosen the good part.”" }
    ],
    traits: [
      { k: "strength", zh: "馬大接待耶穌（10:38）", en: "Martha welcomes Jesus (10:38)" },
      { k: "weakness", zh: "「思慮煩擾」，並責怪妹妹", en: "“Anxious and troubled,” and blames her sister" }
    ],
    lesson: {
      zh: "耶穌沒有說馬大的服事不好；他說「馬大！馬大！」叫兩次她的名字（10:41），然後說她為許多的事煩擾。他稱讚馬利亞的是聽道，那是「不能奪去的」福分（10:42）。",
      en: "Jesus does not say Martha’s serving is wrong; he says her name twice, “Martha, Martha” (10:41), and says she is troubled about many things. What he commends in Mary is listening, the good part “which will not be taken away” (10:42)."
    },
    quote: { ref: "10:42",
      zh: "但是不可少的只有一件；馬利亞已經選擇那上好的福分，是不能奪去的",
      en: "but one thing is needed. Mary has chosen the good part, which will not be taken away from her." },
    keyVerses: ["10:38", "10:39", "10:40", "10:41", "10:42"],
    intro: {
      zh: "他們走路的時候，耶穌進了一個村子，有一個女人名叫馬大，接他到自己家裡（10:38）。她有一個妹子名叫馬利亞，在耶穌腳前坐著聽他的道（10:39）。馬大伺候的事多，心裡忙亂，就進前來說：「主啊，我的妹子留下我一個人伺候，你不在意嗎？請吩咐她來幫助我。」（10:40）路加福音沒有說這村子的名字；約翰福音 11:1 說馬大和馬利亞是伯大尼人，拉撒路的姊妹。",
      en: "As they go, Jesus enters a village, and a woman named Martha welcomes him into her house (10:38). She has a sister called Mary, who sits at Jesus’s feet and hears his word (10:39). Martha is distracted with much serving and comes up: “Lord, don’t you care that my sister left me to serve alone? Ask her therefore to help me” (10:40). Luke does not name the village; John 11:1 says Martha and Mary are from Bethany, sisters of Lazarus."
    },
    tip: {
      zh: "「只有一件」的版本，古抄本有「少數幾樣，或只要一樣」等不同寫法；意思大致相近。",
      en: "Ancient manuscripts vary in “one thing is needed” (“few things, or only one”); the sense is close."
    },
    related: ["good_samaritan", "perfume_feet", "rich_fool", "prodigal_son"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "rich_fool", book: "luke", no: 14, kind: "person", type: "scheme", rarity: 3,
    zh: "無知的財主", en: "The Rich Fool",
    tag: { zh: "今夜必要你的靈魂", en: "Tonight Your Soul Is Required" },
    role: { zh: "對貪心的警告（12:13-21）", en: "A warning against greed (12:13–21)" },
    ch: [12],
    passages: ["12:13-21"],
    moves: [
      { zh: "謹慎自守，免去貪心", en: "Beware of Greed", ref: "12:15",
        dzh: "你們要謹慎自守，免去一切的貪心，因為人的生命不在乎家道豐富。",
        den: "“Take heed, and beware of covetousness, for a man’s life doesn’t consist of the abundance of the things which he possesses.”" },
      { zh: "無知的人哪", en: "You Foolish One", ref: "12:20",
        dzh: "神卻對他說：無知的人哪，今夜必要你的靈魂；你所預備的要歸誰呢？",
        den: "“But God said to him, ‘You foolish one, tonight your soul is required of you. The things which you have prepared — whose will they be?’”" }
    ],
    traits: [
      { k: "strength", zh: "田產豐盛，計畫周全", en: "Rich harvest, careful planning" },
      { k: "weakness", zh: "他的話裡只有「我」和「我的」", en: "His speech contains only “I” and “my”" }
    ],
    lesson: {
      zh: "財主自言自語：「我要怎麼辦呢？……我要拆了糧倉，另蓋更大的」（12:17-18）。短短幾句話裡，「我」和「我的」說了十多次。神的話只有一句：「無知的人哪，今夜必要你的靈魂。」（12:20）",
      en: "The rich man talks to himself: “What shall I do?… I will pull down my barns, and build bigger ones” (12:17–18). In a few sentences “I” and “my” are repeated over a dozen times. God’s word is a single line: “You foolish one, tonight your soul is required of you” (12:20)."
    },
    quote: { ref: "12:21",
      zh: "凡為自己積財，在神面前卻不富足的，也是這樣",
      en: "So is he who lays up treasure for himself, and is not rich toward God." },
    keyVerses: ["12:13", "12:14", "12:15", "12:16", "12:18", "12:20", "12:21"],
    intro: {
      zh: "眾人中有一個人對耶穌說：「夫子！請你吩咐我的兄長和我分開家業。」（12:13）耶穌不肯作斷事的官，卻對眾人說要免去一切的貪心（12:14-15）。然後用比喻：有一個財主田產豐盛，心裡思想，沒有地方收藏，就拆了倉另蓋更大的，對自己的靈魂說「你有許多好處積存，可作多年的用度，只管安安逸逸地吃喝快樂吧」（12:16-19）。神卻說「無知的人哪，今夜必要你的靈魂」（12:20）。",
      en: "Someone in the crowd says to Jesus, “Teacher, tell my brother to divide the inheritance with me” (12:13). Jesus refuses to be a judge but tells the crowd to beware of all covetousness (12:14–15). Then a parable: a rich man’s ground produces abundantly, he thinks he has nowhere to store it, pulls down his barns to build bigger ones, and says to his soul, “you have many goods laid up for many years; take your ease, eat, drink, be merry” (12:16–19). But God says, “You foolish one, tonight your soul is required of you” (12:20)."
    },
    tip: {
      zh: "「靈魂」（12:20）也可譯作「生命」（參 8:35 的同一個字），兩種譯法都有人採用。",
      en: "“Soul” (12:20) can also be rendered “life,” as with the same word at 8:35 in Mark; both are used."
    },
    related: ["martha_and_mary", "rich_man_lazarus", "prodigal_son", "zacchaeus"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "lost_sheep_coin", book: "luke", no: 15, kind: "other", type: "harvest", rarity: 4,
    zh: "失羊與失錢", en: "The Lost Sheep and the Lost Coin",
    tag: { zh: "一個罪人悔改，在天上也要這樣歡喜", en: "Joy in Heaven over One Sinner Who Repents" },
    role: { zh: "第 15 章的前兩個比喻（15:1-10）", en: "The first two parables of chapter 15 (15:1–10)" },
    ch: [15],
    passages: ["15:1-10"],
    moves: [
      { zh: "我失去的羊已經找著了", en: "I Have Found My Sheep", ref: "15:6",
        dzh: "牧人請朋友鄰舍來，說：我失去的羊已經找著了，你們和我一同歡喜吧！",
        den: "He calls together friends and neighbors: “Rejoice with me, for I have found my sheep which was lost!”" },
      { zh: "天上也要這樣歡喜", en: "Joy in Heaven", ref: "15:7",
        dzh: "一個罪人悔改，在天上也要這樣為他歡喜，較比為九十九個不用悔改的義人歡喜更大。",
        den: "“There will be more joy in heaven over one sinner who repents, than over ninety-nine righteous people who need no repentance.”" }
    ],
    traits: [
      { k: "strength", zh: "尋找的是主動的一方", en: "The seeker is the active one" },
      { k: "identity", zh: "兩個比喻，對象是男女各一", en: "Two parables, one of a man and one of a woman" }
    ],
    lesson: {
      zh: "稅吏和罪人都挨近耶穌聽道，法利賽人和文士私下議論「這個人接待罪人，又同他們吃飯」（15:1-2）。耶穌用三個「失而復得」的比喻回答，前兩個結尾都是請人一起歡喜（15:6、9）。",
      en: "Tax collectors and sinners draw near to hear Jesus, and the Pharisees and scribes murmur, “This man welcomes sinners, and eats with them” (15:1–2). Jesus answers with three “lost and found” parables; the first two end by calling others to rejoice together (15:6, 9)."
    },
    quote: { ref: "15:7",
      zh: "一個罪人悔改，在天上也要這樣為他歡喜",
      en: "there will be more joy in heaven over one sinner who repents" },
    keyVerses: ["15:1", "15:2", "15:4", "15:5", "15:6", "15:7", "15:8", "15:9", "15:10"],
    intro: {
      zh: "眾稅吏和罪人都挨近耶穌要聽他講道；法利賽人和文士私下議論說「這個人接待罪人，又同他們吃飯」（15:1-2）。耶穌就用比喻說：「你們中間誰有一百隻羊失去一隻，不撇下這九十九隻在曠野，去找那失去的羊，直到找著呢？」（15:4）找著了，就歡歡喜喜地扛在肩上（15:5）。又有一個婦人有十塊錢，若失落一塊，不點上燈，打掃屋子，細細地找，直到找著嗎？（15:8）",
      en: "All the tax collectors and sinners draw near to hear Jesus; the Pharisees and scribes murmur, “This man welcomes sinners, and eats with them” (15:1–2). He tells them a parable: “Which of you men, if you had one hundred sheep, and lost one of them, wouldn’t leave the ninety-nine in the wilderness, and go after the one that is lost, until he finds it?” (15:4). Finding it, he lays it on his shoulders, rejoicing (15:5). Or what woman, having ten drachma coins, if she loses one, doesn’t light a lamp, sweep the house and seek diligently until she finds it? (15:8)."
    },
    tip: {
      zh: "「十塊錢」（drachma）約是一個工人一天的工資；婦人的十塊錢可能是她的嫁妝或積蓄，經文沒有說。",
      en: "A “drachma” was about a day’s wage; the woman’s ten may have been her dowry or savings, which the text does not say."
    },
    related: ["prodigal_son", "good_samaritan", "zacchaeus", "ten_lepers"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "prodigal_son", book: "luke", no: 16, kind: "person", type: "love", rarity: 5,
    zh: "浪子與父親", en: "The Prodigal Son and His Father",
    tag: { zh: "他父親看見，就動了慈心，跑去", en: "His Father Saw Him, Had Compassion, and Ran" },
    role: { zh: "第三個「失而復得」的比喻（15:11-32）", en: "The third “lost and found” parable (15:11–32)" },
    ch: [15],
    passages: ["15:11-32"],
    moves: [
      { zh: "父親跑去抱他", en: "The Father Ran", ref: "15:20",
        dzh: "小兒子起來，往父親那裡去。相離還遠，他父親看見，就動了慈心，跑去抱著他的頸項，連連與他親嘴。",
        den: "He arose and came to his father. While he was still far off his father saw him, was moved with compassion, and ran, fell on his neck and kissed him." },
      { zh: "死而復活，失而又得", en: "Dead and Alive Again", ref: "15:24",
        dzh: "因為我這個兒子是死而復活，失而又得的。他們就快樂起來。",
        den: "“For this, my son, was dead, and is alive again. He was lost, and is found.” They began to celebrate." }
    ],
    traits: [
      { k: "strength", zh: "父親在他還遠的時候就看見", en: "The father sees him while he is still far off" },
      { k: "weakness", zh: "大兒子在田裡，生氣不肯進去（15:28）", en: "The elder son, in the field, is angry and won’t go in (15:28)" }
    ],
    lesson: {
      zh: "故事有兩個兒子，沒有結局：大兒子「生氣，不肯進去」，父親出來勸他（15:28），說「兒啊！你常和我同在，我一切所有的都是你的」（15:31）。他進去了沒有，經文沒有說。",
      en: "The story has two sons and no ending: the elder son is “angry, and would not go in,” and the father comes out and pleads with him (15:28), saying “Son, you are always with me, and all that is mine is yours” (15:31). Whether he goes in the text does not say."
    },
    quote: { ref: "15:20",
      zh: "他父親看見，就動了慈心，跑去抱著他的頸項",
      en: "his father saw him, and was moved with compassion, and ran" },
    keyVerses: ["15:11", "15:12", "15:13", "15:17", "15:20", "15:22", "15:24", "15:28", "15:31", "15:32"],
    intro: {
      zh: "「一個人有兩個兒子。小兒子對父親說：父親，請你把我應得的家業分給我。」（15:11-12）他往遠方去，浪費資財；遇著大饑荒，窮苦起來，去給人放豬（15:13-15）。「他醒悟過來」（15:17），決定回去說「我得罪了天，又得罪了你」（15:18）。父親看見他，就跑去抱著他，叫人拿出上好的袍子給他穿，把戒指戴在他指頭上，把鞋穿在他腳上，宰肥牛犢（15:20-23）。大兒子從田裡回來，聽見作樂，生氣（15:25-28）。",
      en: "“A certain man had two sons. The younger of them said to his father, ‘Father, give me my share of your property’” (15:11–12). He goes to a far country and wastes his money; when a great famine comes he is in need and feeds pigs (15:13–15). “But when he came to himself” (15:17), he decides to go back and say, “I have sinned against heaven, and in your sight” (15:18). His father sees him and runs to embrace him, and has the best robe put on him, a ring on his finger and sandals on his feet, and kills the fattened calf (15:20–23). The elder son, coming from the field, hears the celebration and is angry (15:25–28)."
    },
    tip: {
      zh: "「浪子」不是路加福音的用語；比喻的重點，是父親的跑和兩個兒子的對照。",
      en: "“Prodigal” is not Luke’s word; the parable’s weight is on the father’s running and the contrast of the two sons."
    },
    related: ["lost_sheep_coin", "good_samaritan", "rich_man_lazarus", "zacchaeus"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "rich_man_lazarus", book: "luke", no: 17, kind: "person", type: "scheme", rarity: 4,
    zh: "財主與拉撒路", en: "The Rich Man and Lazarus",
    tag: { zh: "在你我之間，有深淵限定", en: "A Great Gulf Fixed Between Us" },
    role: { zh: "兩個人的結局（16:19-31）", en: "Two destinies (16:19–31)" },
    ch: [16],
    passages: ["16:19-31"],
    moves: [
      { zh: "門口的討飯人", en: "The Beggar at the Gate", ref: "16:19-21",
        dzh: "有一個財主穿著紫色袍和細麻布衣服，天天奢華宴樂；有一個討飯的名叫拉撒路，被放在財主門口，狗來舔他的瘡。",
        den: "A rich man dressed in purple and fine linen feasted sumptuously every day; a beggar named Lazarus was laid at his gate, and dogs licked his sores." },
      { zh: "深淵", en: "The Great Gulf", ref: "16:25-26",
        dzh: "亞伯拉罕說：你生前享過福，拉撒路也受過苦；在你我之間，有深淵限定，不能過來。",
        den: "Abraham: “You received your good things, and Lazarus bad things… between us and you there is a great gulf fixed.”" }
    ],
    traits: [
      { k: "strength", zh: "只有拉撒路在故事裡有名字", en: "Only Lazarus has a name in the story" },
      { k: "weakness", zh: "財主天天看見門口的人，卻沒有行動", en: "The rich man saw the man at his gate every day and did nothing" }
    ],
    lesson: {
      zh: "財主的罪不是他寫在比喻裡的任何一樁惡行，而是門口有一個人，他天天經過。最後亞伯拉罕說：「他們有摩西和先知的話可以聽從」（16:29）；連死人從死裡復活也不能叫他們聽（16:31）。",
      en: "The rich man’s fault is not any act of wickedness written into the parable but a man at his gate whom he passes every day. Abraham says in the end, “They have Moses and the prophets; let them listen to them” (16:29); even one rising from the dead would not persuade them (16:31)."
    },
    quote: { ref: "16:26",
      zh: "在你我之間，有深淵限定",
      en: "between us and you there is a great gulf fixed" },
    keyVerses: ["16:19", "16:20", "16:22", "16:25", "16:26", "16:29", "16:31"],
    intro: {
      zh: "「有一個財主穿著紫色袍和細麻布衣服，天天奢華宴樂。又有一個討飯的，名叫拉撒路，渾身生瘡，被人放在財主門口，要得財主桌子上掉下來的零碎充飢；並且狗來舔他的瘡。」（16:19-21）後來討飯的死了，被天使帶去放在亞伯拉罕的懷裡；財主也死了，埋葬了，在陰間受痛苦（16:22-23）。他求亞伯拉罕差拉撒路蘸水滴在他舌頭上，不得；又求差拉撒路去警告他的五個弟兄，也不得（16:24-31）。這是比喻，還是真實事件，經文沒有說明；傳統上多讀作比喻。",
      en: "“Now there was a certain rich man, and he was clothed in purple and fine linen, living in luxury every day. A certain beggar, named Lazarus, was taken to his gate, full of sores, and desiring to be fed with the crumbs that fell from the rich man’s table. Yes, even the dogs came and licked his sores” (16:19–21). The beggar dies and is carried by angels to Abraham’s bosom; the rich man also dies and is buried, and in Hades is in torment (16:22–23). He begs Abraham to send Lazarus with a drop of water, in vain; then to send Lazarus to warn his five brothers, in vain (16:24–31). Whether this is a parable or a real event the text does not say; it is traditionally read as a parable."
    },
    tip: {
      zh: "「亞伯拉罕的懷裡」和「陰間」的畫面，與當時猶太人對死後的想像有關，不是對死後世界的完整說明。",
      en: "The pictures of “Abraham’s bosom” and “Hades” reflect Jewish imagery of the time and are not a full account of the afterlife."
    },
    related: ["rich_fool", "prodigal_son", "zacchaeus", "ten_lepers"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "ten_lepers", book: "luke", no: 18, kind: "other", type: "faith", rarity: 3,
    zh: "十個長大痲瘋的", en: "The Ten Lepers",
    tag: { zh: "那九個在哪裡呢？", en: "Where Are the Nine?" },
    role: { zh: "只有一個回來（17:11-19）", en: "Only one returns (17:11–19)" },
    ch: [17],
    passages: ["17:11-19"],
    moves: [
      { zh: "遠遠地站著", en: "Standing at a Distance", ref: "17:12-14",
        dzh: "十個長大痲瘋的人遠遠地站著，高聲說：耶穌，夫子，可憐我們吧！耶穌叫他們去給祭司察看；去的時候就潔淨了。",
        den: "Ten lepers stood at a distance and called, “Jesus, Master, have mercy on us!” He told them to show themselves to the priests; as they went, they were cleansed." },
      { zh: "那九個在哪裡呢", en: "Where Are the Nine?", ref: "17:17-18",
        dzh: "耶穌說：潔淨了的不是十個人嗎？那九個在哪裡呢？除了這外族人，再沒有別人回來歸榮耀與神嗎？",
        den: "“Weren’t the ten cleansed? But where are the nine? Were there none found who returned to give glory to God, except this stranger?”" }
    ],
    traits: [
      { k: "strength", zh: "回來的那個人是撒馬利亞人（17:16）", en: "The one who returns is a Samaritan (17:16)" },
      { k: "weakness", zh: "九個人得了潔淨，沒有回來", en: "Nine were cleansed and did not return" }
    ],
    lesson: {
      zh: "十個人都因為去的路上才得潔淨，是一種「走著走著就好了」的信。回來的只有一個，而且是外族人（17:15-16）；耶穌對他說「起來，走吧。你的信救了你了」（17:19）。",
      en: "All ten were cleansed on the way, a faith that “got well while going.” Only one comes back, and he is a foreigner (17:15–16); Jesus says to him, “Get up, and go your way. Your faith has healed you” (17:19)."
    },
    quote: { ref: "17:17",
      zh: "潔淨了的不是十個人嗎？那九個在哪裡呢",
      en: "Weren’t the ten cleansed? But where are the nine?" },
    keyVerses: ["17:11", "17:12", "17:13", "17:14", "17:15", "17:16", "17:17", "17:19"],
    intro: {
      zh: "耶穌往耶路撒冷去，經過撒馬利亞和加利利的邊界（17:11）。進入一個村子，有十個長大痲瘋的人迎面而來，遠遠地站著，高聲說「耶穌，夫子，可憐我們吧！」（17:12-13）耶穌看見，就對他們說「你們去，把身體給祭司察看」；他們去的時候就潔淨了（17:14）。內中有一個見自己已經好了，就回來，大聲歸榮耀與神，又俯伏在耶穌腳前感謝他；他是撒馬利亞人（17:15-16）。",
      en: "On the way to Jerusalem, Jesus passes along the borders of Samaria and Galilee (17:11). Entering a village, ten lepers meet him, standing at a distance and calling, “Jesus, Master, have mercy on us!” (17:12–13). Seeing them he says, “Go and show yourselves to the priests”; as they go they are cleansed (17:14). One of them, seeing he is healed, turns back, glorifying God with a loud voice, and falls on his face at Jesus’s feet giving thanks; and he was a Samaritan (17:15–16)."
    },
    tip: {
      zh: "「潔淨」與「得救／痊癒」在 17:19 用的是不同的字：九個人得了潔淨，只有一個人得到「救了你了」。",
      en: "“Cleansed” and “made well/saved” in 17:19 are different words: nine were cleansed; only one hears “your faith has saved you.”"
    },
    related: ["good_samaritan", "rich_man_lazarus", "persistent_widow", "zacchaeus"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "persistent_widow", book: "luke", no: 19, kind: "person", type: "faith", rarity: 3,
    zh: "不倦的寡婦", en: "The Persistent Widow",
    tag: { zh: "要人常常禱告，不可灰心", en: "Always Pray, and Don’t Give Up" },
    role: { zh: "不義的官與寡婦（18:1-8）", en: "The unjust judge and the widow (18:1–8)" },
    ch: [18],
    passages: ["18:1-8"],
    moves: [
      { zh: "常常禱告，不可灰心", en: "Always Pray", ref: "18:1",
        dzh: "耶穌設一個比喻，是要人常常禱告，不可灰心。",
        den: "He also spoke a parable to them that they must always pray, and not give up." },
      { zh: "豈不給他們伸冤嗎", en: "Won’t God Avenge?", ref: "18:7-8",
        dzh: "神的選民晝夜呼籲他，他豈不終久給他們伸冤嗎？然而，人子來的時候，遇得見世上有信德嗎？",
        den: "“Won’t God avenge his chosen ones, who are crying out to him day and night?… when the Son of Man comes, will he find faith on the earth?”" }
    ],
    traits: [
      { k: "strength", zh: "沒有權勢，只有不放棄", en: "No power, only not giving up" },
      { k: "weakness", zh: "法官「不懼怕神，也不尊重世人」（18:2）", en: "The judge “didn’t fear God, and didn’t respect man” (18:2)" }
    ],
    lesson: {
      zh: "這個比喻是「何況」式的：連不義的官也因為寡婦煩擾而給她伸冤，何況神（18:6-7）。最後的問題不是官怎樣，而是「人子來的時候，遇得見世上有信德嗎？」（18:8）",
      en: "It is a “how much more” parable: even an unjust judge gives a widow justice because she keeps bothering him, how much more God (18:6–7). The last question is not about the judge but “when the Son of Man comes, will he find faith on the earth?” (18:8)."
    },
    quote: { ref: "18:1",
      zh: "耶穌設一個比喻，是要人常常禱告，不可灰心",
      en: "He also spoke a parable to them that they must always pray, and not give up" },
    keyVerses: ["18:1", "18:2", "18:3", "18:5", "18:7", "18:8"],
    intro: {
      zh: "耶穌設一個比喻，是要人常常禱告，不可灰心（18:1）。他說：某城裡有一個官，不懼怕神，也不尊重世人；那城裡有一個寡婦，常到他那裡，說「我有一個對頭，求你給我伸冤」（18:2-3）。他多時不肯，後來心裡說：「我雖不懼怕神，也不尊重世人，只因這寡婦煩擾我，我就給她伸冤吧，免得她常來纏磨我。」（18:4-5）主說：「你們聽這不義之官所說的話。」（18:6）",
      en: "He also spoke a parable to them that they must always pray, and not give up (18:1). He said: in a certain city there was a judge who did not fear God and did not respect man; a widow in that city kept coming to him, saying, “Defend me from my adversary” (18:2–3). For a while he wouldn’t, but afterward he said, “Though I neither fear God, nor respect man, yet because this widow bothers me, I will defend her, or else she will wear me out by her continual coming” (18:4–5). The Lord said, “Listen to what the unrighteous judge says” (18:6)."
    },
    tip: {
      zh: "18:7 的「忍了多時」，可指神對選民的忍耐，也可指祂對他們的遲延；原文兩種讀法都有人採用。",
      en: "In 18:7 “he exercises patience with them” may be read as God’s patience or his delay; both readings are used."
    },
    related: ["two_men_pray", "ten_lepers", "zacchaeus", "good_samaritan"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "two_men_pray", book: "luke", no: 20, kind: "other", type: "faith", rarity: 4,
    zh: "法利賽人與稅吏", en: "The Pharisee and the Tax Collector",
    tag: { zh: "神啊，開恩可憐我這個罪人", en: "God, Be Merciful to Me, a Sinner" },
    role: { zh: "兩個人上殿禱告（18:9-14）", en: "Two men went up to pray (18:9–14)" },
    ch: [18],
    passages: ["18:9-14"],
    moves: [
      { zh: "法利賽人的禱告", en: "The Pharisee’s Prayer", ref: "18:11-12",
        dzh: "法利賽人站著，自言自語地禱告說：神啊，我感謝你，我不像別人；我一個禮拜禁食兩次，凡我所得的，都捐上十分之一。",
        den: "The Pharisee stood and prayed to himself: “God, I thank you, that I am not like other men… I fast twice a week; I give tithes of all that I get.”" },
      { zh: "稅吏的禱告", en: "The Tax Collector’s Prayer", ref: "18:13",
        dzh: "那稅吏遠遠地站著，連舉目望天也不敢，只捶著胸說：神啊，開恩可憐我這個罪人！",
        den: "The tax collector, standing far away, wouldn’t lift up his eyes to heaven, but beat his breast, saying, “God, be merciful to me, a sinner!”" }
    ],
    traits: [
      { k: "strength", zh: "稅吏的禱告只有一句話", en: "The tax collector’s prayer is one line" },
      { k: "weakness", zh: "法利賽人把禱告變成了比較", en: "The Pharisee turns prayer into comparison" }
    ],
    lesson: {
      zh: "兩個人的禱告，一個長，一個短；一個說自己，一個說神。耶穌說「這人回家去比那人倒算為義了」（18:14），並以「凡自高的，必降為卑；自卑的，必升為高」作結。",
      en: "The two prayers: one long, one short; one about himself, one about God. Jesus says, “this man went down to his house justified rather than the other” (18:14), ending with “everyone who exalts himself will be humbled, but he who humbles himself will be exalted.”"
    },
    quote: { ref: "18:13",
      zh: "神啊，開恩可憐我這個罪人",
      en: "God, be merciful to me, a sinner!" },
    keyVerses: ["18:9", "18:10", "18:11", "18:12", "18:13", "18:14"],
    intro: {
      zh: "耶穌向那些仗著自己是義人，藐視別人的，設了一個比喻（18:9）：「有兩個人上殿裡去禱告：一個是法利賽人，一個是稅吏。」（18:10）法利賽人感謝神，他不像別人勒索、不義、姦淫，也不像這個稅吏（18:11）。稅吏「遠遠地站著，連舉目望天也不敢，只捶著胸」（18:13）。法利賽人所說的禁食和奉獻，本身都是好事；比喻的重點在他的態度，不在這些行為。",
      en: "Jesus tells a parable to some who trusted in themselves that they were righteous and despised others (18:9): “Two men went up into the temple to pray: one was a Pharisee, and the other was a tax collector” (18:10). The Pharisee thanks God that he is not like other men, extortioners, unrighteous, adulterers, or even this tax collector (18:11). The tax collector “standing far away, wouldn’t even lift up his eyes to heaven, but beat his breast” (18:13). The Pharisee’s fasting and giving are in themselves good; the parable’s weight is on his attitude, not these acts."
    },
    tip: {
      zh: "「算為義」是被神接納的意思；稅吏回家去，沒有說他做了甚麼補償。",
      en: "“Justified” means accepted by God; it does not say the tax collector did anything to make amends."
    },
    related: ["persistent_widow", "zacchaeus", "perfume_feet", "prodigal_son"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "zacchaeus", book: "luke", no: 21, kind: "person", type: "harvest", rarity: 5,
    zh: "撒該", en: "Zacchaeus",
    meaning: { zh: "「潔淨的」或「純潔」", en: "“Pure” or “innocent”" },
    tag: { zh: "撒該，快下來！今天我必住在你家裡", en: "Zacchaeus, Hurry and Come Down" },
    role: { zh: "耶利哥的稅吏長（19:1-10）", en: "Chief tax collector of Jericho (19:1–10)" },
    ch: [19],
    passages: ["19:1-10"],
    moves: [
      { zh: "爬上桑樹", en: "Up the Sycamore", ref: "19:3-5",
        dzh: "他的身量矮小，就跑到前頭，爬上桑樹要看耶穌；耶穌抬頭一看，說：撒該，快下來！今天我必住在你家裡。",
        den: "Too short to see, he ran ahead and climbed a sycamore; Jesus looked up: “Zacchaeus, hurry and come down, for today I must stay at your house.”" },
      { zh: "四倍償還", en: "Four Times as Much", ref: "19:8-10",
        dzh: "撒該說：我把所有的一半給窮人；我若訛詐了誰，就還他四倍。耶穌說：人子來，為要尋找、拯救失喪的人。",
        den: "“Half of my goods I give to the poor… I restore four times as much.” Jesus: “The Son of Man came to seek and to save that which was lost.”" }
    ],
    traits: [
      { k: "strength", zh: "放下身段，爬上樹，又歡歡喜喜地接待（19:6）", en: "Drops his dignity, climbs a tree, receives Jesus joyfully (19:6)" },
      { k: "weakness", zh: "稅吏長，富足，被眾人看為罪人（19:2、7）", en: "Chief tax collector, rich, seen as a sinner (19:2, 7)" }
    ],
    lesson: {
      zh: "撒該要「看看耶穌是怎樣的人」（19:3），耶穌卻先叫他的名字。眾人議論，他卻站著說出自己的決定（19:7-8）。耶穌說「今天救恩到了這家」（19:9）；這句話放在他說出補償之後。",
      en: "Zacchaeus wants to see “who Jesus was” (19:3), but Jesus first calls him by name. The crowd murmurs, and he stands and states his own decision (19:7–8). Jesus says, “Today, salvation has come to this house” (19:9), after Zacchaeus has said what he will do."
    },
    quote: { ref: "19:10",
      zh: "人子來，為要尋找、拯救失喪的人",
      en: "the Son of Man came to seek and to save that which was lost" },
    keyVerses: ["19:1", "19:2", "19:3", "19:4", "19:5", "19:6", "19:7", "19:8", "19:9", "19:10"],
    intro: {
      zh: "耶穌進了耶利哥，正經過的時候，有一個人名叫撒該，作稅吏長，是個財主（19:1-2）。他要看耶穌是怎樣的人，只因人多，他的身量又矮，不得看見，就跑到前頭，爬上桑樹（19:3-4）。耶穌到了那裡，抬頭一看，說「撒該，快下來！今天我必住在你家裡」（19:5）。他急忙下來，歡歡喜喜地接待耶穌（19:6）。眾人私下議論「他竟到罪人家裡去住宿」（19:7）。撒該說出自己要把所有的一半給窮人，若訛詐了誰，就還他四倍（19:8）。",
      en: "Jesus enters Jericho and is passing through, and a man named Zacchaeus, a chief tax collector and rich, is there (19:1–2). He wants to see who Jesus is, but because of the crowd and his short height he cannot, so he runs ahead and climbs a sycamore tree (19:3–4). When Jesus comes to the place he looks up and says, “Zacchaeus, hurry and come down, for today I must stay at your house” (19:5). He hurries down and receives him joyfully (19:6). The people murmur, “He has gone in to lodge with a man who is a sinner” (19:7). Zacchaeus stands and says he gives half his goods to the poor and, if he has wrongfully taken anything, restores four times as much (19:8)."
    },
    tip: {
      zh: "「四倍償還」比律法所要求的更多（參出 22:1）；撒該說出的是「我若訛詐了誰」，不是承認已經做了。",
      en: "“Four times as much” exceeds what the law asks (compare Exod 22:1); Zacchaeus says “if I have wrongfully exacted,” not that he admits he has."
    },
    related: ["two_men_pray", "perfume_feet", "weeping_over_jerusalem", "prodigal_son"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "weeping_over_jerusalem", book: "luke", no: 22, kind: "other", type: "vision", rarity: 3,
    zh: "為耶路撒冷哀哭", en: "Weeping over Jerusalem",
    tag: { zh: "耶穌快到耶路撒冷，看見城，就為它哀哭", en: "He Saw the City and Wept over It" },
    role: { zh: "從橄欖山下來（19:41-44）", en: "Coming down the Mount of Olives (19:41–44)" },
    ch: [19],
    passages: ["19:37-44"],
    moves: [
      { zh: "看見城，就哀哭", en: "He Saw the City and Wept", ref: "19:41-42",
        dzh: "耶穌快到耶路撒冷，看見城，就為它哀哭，說：巴不得你在這日子知道關係你平安的事。",
        den: "When he came near, he saw the city and wept over it, saying, “If you had known, in this your day, the things which belong to your peace!”" },
      { zh: "你不知道眷顧你的時候", en: "You Didn’t Know the Time", ref: "19:44",
        dzh: "因你不知道眷顧你的時候。",
        den: "“Because you didn’t know the time of your visitation.”" }
    ],
    traits: [
      { k: "strength", zh: "哀哭，不是譏刺", en: "Weeps, does not mock" },
      { k: "identity", zh: "與馬太福音 23:37 的嘆息相呼應", en: "Echoes the lament of Matthew 23:37" }
    ],
    lesson: {
      zh: "別人在歡呼（19:37-38），耶穌在哀哭。他看見的不是眼前的歡迎，而是這城將要遇到的事（19:43-44）。「你不知道眷顧你的時候」，是全段的重心。",
      en: "Others are rejoicing (19:37–38) while Jesus weeps. What he sees is not the welcome before him but what will come on the city (19:43–44). “You didn’t know the time of your visitation” is the center of the passage."
    },
    quote: { ref: "19:41",
      zh: "耶穌快到耶路撒冷，看見城，就為它哀哭",
      en: "he saw the city and wept over it" },
    keyVerses: ["19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:44"],
    intro: {
      zh: "耶穌快到橄欖山下坡的地方，眾門徒因所見過的一切異能，都歡歡喜喜地大聲讚美神，說「奉主名來的王是應當稱頌的」（19:37-38）。有幾個法利賽人要他責備門徒；他說「若是他們不作聲，這些石頭必要呼叫起來」（19:39-40）。然後是 19:41：看見城，就為它哀哭，說「巴不得你在這日子知道關係你平安的事」（19:42）；日子將到，仇敵要築起土壘，四面圍困（19:43）。這些話的應驗，有人讀作主後 70 年耶路撒冷的毀滅。",
      en: "As he comes near the descent of the Mount of Olives, the whole multitude of the disciples begin to rejoice and praise God with a loud voice for all the mighty works they had seen, saying, “Blessed is the King who comes in the name of the Lord” (19:37–38). Some Pharisees ask him to rebuke the disciples; he says, “If these were silent, the stones would cry out” (19:39–40). Then 19:41: seeing the city, he weeps over it, saying, “If you, even you, had known today the things which belong to your peace!” (19:42); days will come when enemies build a barricade and surround it (19:43). Many read the fulfillment as the destruction of Jerusalem in AD 70."
    },
    tip: {
      zh: "19:43-44 所說的，常被讀作主後 70 年耶路撒冷被毀；這是歷史上的對應，經文沒有寫年份。",
      en: "19:43–44 is often read as the destruction of Jerusalem in AD 70; that is a historical correspondence, and the text gives no year."
    },
    related: ["zacchaeus", "paradise_criminal", "ascension_commission", "nazareth_synagogue"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "paradise_criminal", book: "luke", no: 23, kind: "person", type: "heaven", rarity: 5,
    zh: "樂園裡的犯人", en: "The Criminal in Paradise",
    tag: { zh: "今日你要同我在樂園裡了", en: "Today You Will Be with Me in Paradise" },
    role: { zh: "十字架上的兩個犯人（23:32-43）", en: "The two criminals on the crosses (23:32–43)" },
    ch: [23],
    passages: ["23:32-43"],
    moves: [
      { zh: "父啊，赦免他們", en: "Father, Forgive Them", ref: "23:34",
        dzh: "耶穌說：父啊！赦免他們；因為他們所做的，他們不曉得。",
        den: "Jesus said, “Father, forgive them, for they don’t know what they are doing.”" },
      { zh: "求你記念我", en: "Remember Me", ref: "23:42-43",
        dzh: "犯人說：耶穌啊，你得國降臨的時候，求你記念我！耶穌說：我實在告訴你，今日你要同我在樂園裡了。",
        den: "“Lord, remember me when you come into your Kingdom.” “Assuredly I tell you, today you will be with me in Paradise.”" }
    ],
    traits: [
      { k: "strength", zh: "在最後的時刻說出最短的禱告", en: "The shortest prayer, at the last hour" },
      { k: "identity", zh: "只有路加福音記這個犯人", en: "Only Luke records this criminal’s turning" }
    ],
    lesson: {
      zh: "兩個犯人同釘，一個譏誚，一個承認「我們是應該的」，並說「這人沒有做過一件不好的事」（23:41）。他只求「記念我」，得到的卻是「今日」和「同我」（23:43）。",
      en: "Two criminals hang beside him; one mocks, the other admits “we have received the due reward of our deeds” and says “this man has done nothing wrong” (23:41). He asks only “remember me,” and receives “today” and “with me” (23:43)."
    },
    quote: { ref: "23:43",
      zh: "我實在告訴你，今日你要同我在樂園裡了",
      en: "today you will be with me in Paradise" },
    keyVerses: ["23:32", "23:33", "23:34", "23:39", "23:40", "23:41", "23:42", "23:43"],
    intro: {
      zh: "又有兩個犯人，同耶穌帶去處死（23:32）。到了一個地方，名叫髑髏地，就把耶穌釘在十字架上，又釘了兩個犯人，一個在左邊，一個在右邊（23:33）。耶穌說「父啊！赦免他們」（23:34）。所釘的兩個犯人，有一個譏誚他；一個責備那個犯人，說「你既是一樣受刑的，還不怕神嗎？」（23:39-40）他對耶穌說「耶穌啊，你得國降臨的時候，求你記念我！」（23:42）「樂園」這個詞在新約只出現三次（路 23:43；林後 12:4；啟 2:7）。",
      en: "Two others, criminals, are led away with Jesus to be put to death (23:32). When they come to the place called “The Skull,” they crucify him and the criminals, one on the right and one on the left (23:33). Jesus says, “Father, forgive them” (23:34). One of the criminals who is hanged rails at him; the other rebukes him: “Don’t you even fear God, seeing you are in the same condemnation?” (23:39–40). He says to Jesus, “Lord, remember me when you come into your Kingdom” (23:42). The word “Paradise” appears only three times in the New Testament (Luke 23:43; 2 Cor 12:4; Rev 2:7)."
    },
    tip: {
      zh: "23:34 「父啊，赦免他們」，有些古抄本沒有這句，各譯本有的加註；和合本與 WEB 都保留。",
      en: "Some ancient manuscripts lack 23:34, “Father, forgive them,” and some translations note it; the CUV and WEB both retain it."
    },
    related: ["weeping_over_jerusalem", "emmaus_road", "zacchaeus", "ascension_commission"]
  },

  // ── 024 ──────────────────────────────────────────────────────────────────
  {
    id: "emmaus_road", book: "luke", no: 24, kind: "other", type: "faith", rarity: 5,
    zh: "以馬忤斯的路上", en: "The Road to Emmaus",
    tag: { zh: "我們的心豈不是火熱的嗎", en: "Weren’t Our Hearts Burning Within Us?" },
    role: { zh: "復活日的下午（24:13-35）", en: "The afternoon of the resurrection (24:13–35)" },
    ch: [24],
    passages: ["24:13-35"],
    moves: [
      { zh: "給我們講解聖經", en: "He Opened the Scriptures", ref: "24:25-27",
        dzh: "他對他們說：基督這樣受害，又進入他的榮耀，豈不是應當的嗎？於是從摩西和眾先知起，凡經上所指著自己的話，都給他們講解明白了。",
        den: "“Didn’t the Christ have to suffer and enter into his glory?” Beginning from Moses and all the prophets, he explained the Scriptures concerning himself." },
      { zh: "擘餅的時候認出他", en: "Known in the Breaking of Bread", ref: "24:30-32",
        dzh: "耶穌拿起餅來，祝謝了，擘開，遞給他們。他們的眼睛明亮了，這才認出他來；忽然耶穌不見了。",
        den: "He took the bread, gave thanks, broke it and gave it to them; their eyes were opened and they recognized him, and he vanished out of their sight." }
    ],
    traits: [
      { k: "strength", zh: "與他們同行，聽他們把失望說完", en: "Walks with them and lets them finish telling their disappointment" },
      { k: "weakness", zh: "「他們的眼睛被蒙蔽了，不認識他」（24:16）", en: "“Their eyes were kept from recognizing him” (24:16)" }
    ],
    lesson: {
      zh: "兩個門徒說「我們素來所盼望的，就是他要贖以色列民」（24:21），他們失望了；耶穌先聽，後講解聖經，最後在餐桌上擘餅。他們回頭說「他和我們說話，給我們講解聖經的時候，我們的心豈不是火熱的嗎？」（24:32）",
      en: "The two disciples say “we were hoping that it was he who would redeem Israel” (24:21), and they are disappointed; Jesus first listens, then explains the Scriptures, and at last breaks bread at table. They say, “Weren’t our hearts burning within us, while he spoke to us along the way, and while he opened the Scriptures to us?” (24:32)."
    },
    quote: { ref: "24:32",
      zh: "在路上，他和我們說話，給我們講解聖經的時候，我們的心豈不是火熱的嗎",
      en: "Weren’t our hearts burning within us, while he spoke to us along the way" },
    keyVerses: ["24:13", "24:15", "24:16", "24:21", "24:25", "24:27", "24:30", "24:31", "24:32"],
    intro: {
      zh: "就在那一天，門徒中有兩個人往一個村子去，名叫以馬忤斯，離耶路撒冷約有二十五里（24:13）。他們彼此談論這一切所發生的事。談論相問的時候，耶穌親自就近他們，和他們同行；只是他們的眼睛被蒙蔽了，不認識他（24:14-16）。其中一個名叫革流巴（24:18）；另一個沒有說名字。到了村子，他們強留他同住，坐席的時候，他拿起餅來祝謝，擘開（24:29-30）。他們立刻起身，回耶路撒冷，對十一個門徒說「主果然復活，已經現給西門看了」（24:33-34）。",
      en: "That very day two of them are going to a village named Emmaus, about seven miles from Jerusalem (24:13). They talk with each other about all that had happened. While they talk and discuss, Jesus himself comes near and walks with them; but their eyes are kept from recognizing him (24:14–16). One of them is named Cleopas (24:18); the other is not named. At the village they urge him to stay, and when he sits at table he takes the bread, gives thanks and breaks it (24:29–30). They rise at once and return to Jerusalem, telling the eleven, “The Lord is risen indeed, and has appeared to Simon” (24:33–34)."
    },
    tip: {
      zh: "以馬忤斯的確切位置，注釋書有幾個說法；路加福音只說離耶路撒冷「二十五里」（約 11 公里）。",
      en: "The exact site of Emmaus has several proposals; Luke gives only “seven miles” (about 11 km) from Jerusalem."
    },
    related: ["paradise_criminal", "ascension_commission", "luke_physician", "weeping_over_jerusalem"]
  },

  // ── 025 ──────────────────────────────────────────────────────────────────
  {
    id: "ascension_commission", book: "luke", no: 25, kind: "heavenly", type: "heaven", rarity: 4,
    zh: "開心竅與升天", en: "Opened Minds and the Ascension",
    tag: { zh: "你們要在城裡等候，直到領受從上頭來的能力", en: "Wait in the City Until You Are Clothed with Power" },
    role: { zh: "全書的結尾（24:36-53）", en: "The close of the book (24:36–53)" },
    ch: [24],
    passages: ["24:36-53"],
    moves: [
      { zh: "開他們的心竅", en: "Opened Their Minds", ref: "24:44-45",
        dzh: "摩西的律法、先知的書，和詩篇上所記的，凡指著我的話都必須應驗。於是耶穌開他們的心竅，使他們能明白聖經。",
        den: "“All things written in the law of Moses, the prophets and the psalms concerning me must be fulfilled.” Then he opened their minds to understand the Scriptures." },
      { zh: "被帶到天上去", en: "Carried Up into Heaven", ref: "24:50-51",
        dzh: "耶穌領他們到伯大尼的對面，舉手給他們祝福；正祝福的時候，他就離開他們，被帶到天上去了。",
        den: "He led them out as far as Bethany and lifted up his hands and blessed them; while he blessed them, he withdrew from them and was carried up into heaven." }
    ],
    traits: [
      { k: "strength", zh: "以祝福作結：最後的姿勢是舉手", en: "Ends in blessing: his last gesture is raised hands" },
      { k: "identity", zh: "與使徒行傳 1 章相接", en: "Joins to Acts 1" }
    ],
    lesson: {
      zh: "全書以一個祝福收結：他舉手祝福，正祝福的時候就被帶到天上（24:50-51）。門徒的反應是「拜他，大大地歡喜，回耶路撒冷去，常在殿裡稱頌神」（24:52-53）。書從殿裡開始（1:8），也在殿裡結束。",
      en: "The book ends with a blessing: he lifts up his hands, and while he blesses them he is carried up into heaven (24:50–51). The disciples’ response is that they “worshiped him, and returned to Jerusalem with great joy, and were continually in the temple, praising and blessing God” (24:52–53). The book began in the temple (1:8) and ends in it."
    },
    quote: { ref: "24:49",
      zh: "你們要在城裡等候，直到你們領受從上頭來的能力",
      en: "wait in the city of Jerusalem until you are clothed with power from on high" },
    keyVerses: ["24:36", "24:44", "24:45", "24:46", "24:47", "24:48", "24:49", "24:50", "24:51", "24:53"],
    intro: {
      zh: "兩個門徒正說這話的時候，耶穌親自站在他們當中，說「願你們平安」（24:36）。他們驚慌害怕，他給他們看手和腳，並且在他們面前吃了一片烤魚（24:37-43）。他對他們說「摩西的律法、先知的書，和詩篇上所記的，凡指著我的話都必須應驗」（24:44），並開他們的心竅，使他們能明白聖經（24:45）。他說：悔改、赦罪的道要從耶路撒冷起傳到萬邦；你們就是這些事的見證（24:47-48）。這段話與使徒行傳 1:1-11 相接，兩處對升天的細節記載略有不同。",
      en: "While the two are speaking, Jesus himself stands among them and says, “Peace be to you” (24:36). They are startled and afraid; he shows them his hands and feet and eats a piece of broiled fish before them (24:37–43). He says to them, “all things which are written in the law of Moses, the prophets, and the psalms, concerning me must be fulfilled” (24:44), and opens their minds to understand the Scriptures (24:45). He says repentance and remission of sins should be preached in his name to all the nations, beginning at Jerusalem; “You are witnesses of these things” (24:47–48). This joins to Acts 1:1–11, where the details of the ascension are told a little differently."
    },
    tip: {
      zh: "路加福音把升天放在復活當天的傍晚；使徒行傳 1:3 說復活後「四十天」，兩處如何接起來，有不同說法。",
      en: "Luke’s Gospel seems to put the ascension on the evening of the resurrection day, while Acts 1:3 speaks of “forty days”; how they fit together has different explanations."
    },
    related: ["emmaus_road", "paradise_criminal", "luke_physician", "nazareth_synagogue"]
  },

  // ── 026 ──────────────────────────────────────────────────────────────────
  {
    id: "seventy_sent", book: "luke", no: 26, kind: "other", type: "faith", rarity: 3,
    zh: "差遣七十個人", en: "The Seventy Sent Out",
    tag: { zh: "要因你們的名記錄在天上歡喜", en: "Rejoice That Your Names Are Written in Heaven" },
    role: { zh: "兩個兩個地出去（10:1-24）", en: "Sent two by two (10:1–24)" },
    ch: [10],
    passages: ["10:1-24"],
    moves: [
      { zh: "要收的莊稼多", en: "The Harvest Is Plentiful", ref: "10:1-2",
        dzh: "主設立七十個人，差遣他們兩個兩個地在他前面往各城去，說：要收的莊稼多，做工的人少。",
        den: "The Lord appointed seventy others and sent them two by two before his face into every city, saying, “The harvest is indeed plentiful, but the laborers are few.”" },
      { zh: "名記錄在天上", en: "Names Written in Heaven", ref: "10:20",
        dzh: "不要因鬼服了你們就歡喜，要因你們的名記錄在天上歡喜。",
        den: "“Don’t rejoice in this, that the spirits are subject to you, but rejoice that your names are written in heaven.”" }
    ],
    traits: [
      { k: "strength", zh: "兩個兩個，彼此作伴", en: "Two by two, company for each other" },
      { k: "identity", zh: "只有路加福音有這次差遣", en: "Only Luke has this mission" }
    ],
    lesson: {
      zh: "七十個人歡歡喜喜地回來，說「因你的名，就是鬼也服了我們」（10:17）。耶穌分享他的異象：「我曾看見撒但從天上墜落，像閃電一樣」（10:18），然後把他們的喜樂放到更穩的地方：名字記錄在天上（10:20）。",
      en: "The seventy return with joy: “Lord, even the demons are subject to us in your name” (10:17). Jesus shares his vision: “I saw Satan having fallen like lightning from heaven” (10:18), then puts their joy on firmer ground: names written in heaven (10:20)."
    },
    quote: { ref: "10:20",
      zh: "要因你們的名記錄在天上歡喜",
      en: "rejoice that your names are written in heaven" },
    keyVerses: ["10:1", "10:2", "10:3", "10:9", "10:17", "10:18", "10:20", "10:21"],
    intro: {
      zh: "這事以後，主又設立七十個人（和合本作七十個；有古卷作七十二個），差遣他們兩個兩個地在他前面，往自己所要到的各城各地方去（10:1）。吩咐他們不要帶錢囊、口袋、鞋，也不要在路上問人的安（10:4）。進了家，先說「願這一家平安」（10:5）；他們的使命是醫病，並說「神的國臨近你們了」（10:9）。他們回來後，耶穌被聖靈感動歡樂，說「父啊，天地的主，我感謝你」（10:21）。",
      en: "After these things the Lord appoints seventy others (some manuscripts read seventy-two) and sends them two by two ahead of him into every city and place where he is about to go (10:1). He tells them to carry no purse, bag or sandals, and to greet no one on the road (10:4). Entering a house they first say, “Peace be to this house” (10:5); their task is to heal and say, “The Kingdom of God has come near to you” (10:9). When they return, Jesus rejoices in the Holy Spirit and says, “I thank you, Father, Lord of heaven and earth” (10:21)."
    },
    tip: {
      zh: "「七十」或「七十二」，古抄本有兩種寫法；和合本註與 WEB 的處理略有不同。",
      en: "“Seventy” or “seventy-two” appears in different manuscripts; the CUV note and the WEB treat it a little differently."
    },
    related: ["good_samaritan", "martha_and_mary", "catch_of_fish", "luke_physician"]
  }

);
