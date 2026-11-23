// 聖經人物卡 · 約翰福音 (John) — book info + cards.
// Verse text comes from data/john.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/john.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Num 21:8-9; Isa 6:1, 40:3; Ps 23; Ezek 34; Matt 26:6-13; Mark 14:3-9) appear in prose only.
// Flagged rather than decided: who wrote the book (anonymous; tradition says John son of Zebedee, "the disciple whom Jesus
// loved"), whether 7:53-8:11 belongs to the original text, how Jesus's "I AM" (8:58) is to be read, the relation of Mary of
// Bethany's anointing to the other Gospels, and the disciples' exact numbers in chapter 21 (153 fish).

window.BOOKS.push({
  id: "john",
  zh: "約翰福音", en: "John", abbr: { zh: "約", en: "John" },
  order: 43, section: { zh: "福音書", en: "Gospels" },
  chapters: 21,
  fan: ["way_truth_life", "jesus_logos", "mary_at_tomb"],
  summary: {
    zh: "約翰福音和前三本不同，開頭不是家譜或降生，而是「太初有道，道與神同在，道就是神」（1:1），並說「道成了肉身，住在我們中間」（1:14）。前半（1-12 章）記耶穌的七個「神蹟」和許多對話——迦拿的酒、尼哥底母、井旁的婦人、五餅二魚和「生命的糧」、生來瞎眼的人、拉撒路——並有許多「我是」的話：生命的糧、世界的光、好牧人、復活和生命。後半（13-21 章）是最後的晚上和受難：洗腳、新命令、保惠師、葡萄樹、大祭司的禱告，十字架上的「成了」，復活的清早馬利亞聽見自己的名字，多馬說「我的主！我的神！」，最後是加利利湖邊對彼得的三問。書說自己的目的是：「記這些事要叫你們信耶穌是基督，是神的兒子，並且叫你們信了他，就可以因他的名得生命」（20:31）。",
    en: "John differs from the first three Gospels: it opens not with a genealogy or birth but with “In the beginning was the Word, and the Word was with God, and the Word was God” (1:1) and “The Word became flesh, and lived among us” (1:14). The first half (chs 1–12) records Jesus’s seven “signs” and long conversations — the wine at Cana, Nicodemus, the woman at the well, the five loaves and the bread of life, the man born blind, Lazarus — with many “I am” sayings: the bread of life, the light of the world, the good shepherd, the resurrection and the life. The second half (chs 13–21) is the last night and the passion: the foot-washing, the new commandment, the Counselor, the vine, the prayer, “It is finished” on the cross, Mary hearing her name at dawn, Thomas’s “My Lord and my God!”, and finally the three questions to Peter by the lake. The book states its aim: “these are written, that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name” (20:31)."
  },
  outline: [
    { zh: "太初有道；施洗約翰的見證；呼召門徒", en: "In the beginning was the Word; John’s witness; calling the disciples" },
    { zh: "迦拿的婚宴；潔淨聖殿", en: "The wedding at Cana; cleansing the temple" },
    { zh: "尼哥底母；神愛世人", en: "Nicodemus; God so loved the world" },
    { zh: "井旁的撒馬利亞婦人；大臣的兒子", en: "The Samaritan woman at the well; the official’s son" },
    { zh: "畢士大池旁的人；子與父", en: "The man at Bethesda; the Son and the Father" },
    { zh: "五餅二魚；海上行走；生命的糧", en: "Five loaves; walking on the sea; the bread of life" },
    { zh: "住棚節；活水的江河", en: "The Feast of Booths; rivers of living water" },
    { zh: "行淫時被拿的婦人；世界的光；還沒有亞伯拉罕就有了我", en: "The woman caught in adultery; the light of the world; before Abraham, I AM" },
    { zh: "生來瞎眼的人", en: "The man born blind" },
    { zh: "好牧人；羊聽我的聲音", en: "The good shepherd; my sheep hear my voice" },
    { zh: "拉撒路復活；「耶穌哭了」", en: "The raising of Lazarus; “Jesus wept”" },
    { zh: "伯大尼的香膏；進耶路撒冷；一粒麥子", en: "The perfume at Bethany; the entry; a grain of wheat" },
    { zh: "洗門徒的腳；新命令", en: "Washing the disciples’ feet; the new commandment" },
    { zh: "道路、真理、生命；保惠師的應許", en: "The way, the truth and the life; the promise of the Counselor" },
    { zh: "葡萄樹與枝子；彼此相愛", en: "The vine and the branches; love one another" },
    { zh: "聖靈的工作；憂愁要變為喜樂", en: "The work of the Spirit; sorrow turned to joy" },
    { zh: "耶穌的禱告：「使他們合而為一」", en: "Jesus’s prayer: “that they may all be one”" },
    { zh: "被捕；彼拉多：「真理是甚麼呢？」", en: "The arrest; Pilate: “What is truth?”" },
    { zh: "鞭打；十字架；「成了」；母親與愛徒", en: "The scourging; the cross; “It is finished”; the mother and the beloved disciple" },
    { zh: "空墳墓；馬利亞聽見自己的名字；多馬", en: "The empty tomb; Mary hears her name; Thomas" },
    { zh: "加利利湖邊的早飯；彼得的三問", en: "Breakfast by the lake; the three questions to Peter" }
  ],
  notes: {
    zh: "小提示：約翰福音沒有署名，傳統上認為作者是西庇太的兒子約翰，也就是書中「耶穌所愛的那門徒」（13:23；19:26；21:7、20、24）。書中有七個「神蹟」（迦拿、大臣的兒子、畢士大、五餅二魚、海上行走、生來瞎眼的、拉撒路）和七個「我是」的話。許多事蹟只有約翰福音有，卡片多選這些。7:53-8:11 的故事，最早的抄本沒有，多數學者認為是後來加入的；和合本與 WEB 都印出。",
    en: "Good to know: John is anonymous; tradition says its author is John the son of Zebedee, the book’s “disciple whom Jesus loved” (13:23; 19:26; 21:7, 20, 24). It has seven “signs” (Cana, the official’s son, Bethesda, the five loaves, walking on the sea, the man born blind, Lazarus) and seven “I am” sayings. Many events are only in John, and the cards choose these. The story of 7:53–8:11 is absent from the earliest manuscripts and most scholars think it a later insertion; the CUV and WEB both print it."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "jesus_logos", book: "john", no: 1, kind: "person", type: "heaven", rarity: 6,
    zh: "道成了肉身的耶穌", en: "Jesus, the Word Made Flesh",
    meaning: { zh: "「道」（logos）", en: "“The Word” (logos)" },
    tag: { zh: "太初有道，道與神同在，道就是神", en: "In the Beginning Was the Word" },
    role: { zh: "道・獨生子・「我是」", en: "The Word · the one and only Son · “I am”" },
    ch: [1, 8, 20],
    passages: ["1:1", "1:14", "8:58", "20:31"],
    moves: [
      { zh: "太初有道", en: "In the Beginning Was the Word", ref: "1:1",
        dzh: "太初有道，道與神同在，道就是神。",
        den: "In the beginning was the Word, and the Word was with God, and the Word was God." },
      { zh: "道成了肉身", en: "The Word Became Flesh", ref: "1:14",
        dzh: "道成了肉身，住在我們中間，充充滿滿地有恩典有真理。",
        den: "The Word became flesh, and lived among us, full of grace and truth." }
    ],
    traits: [
      { k: "strength", zh: "「我是」的話：糧、光、門、牧人、復活、道路、葡萄樹", en: "The “I am” sayings: bread, light, door, shepherd, resurrection, way, vine" },
      { k: "identity", zh: "全書的目的在 20:31", en: "The book’s aim is stated in 20:31" }
    ],
    lesson: {
      zh: "序言（1:1-18）把整卷書放在創造之前：道與神同在，道就是神；然後「道成了肉身」（1:14）。接著「從來沒有人看見神，只有在父懷裡的獨生子將他表明出來」（1:18）。全書就是這位被「表明」出來的神。",
      en: "The prologue (1:1–18) sets the whole book before creation: the Word was with God and was God; then “the Word became flesh” (1:14). And “No one has seen God at any time. The one and only Son… he has declared him” (1:18). The whole book is the telling of this one who “declares” God."
    },
    quote: { ref: "1:14",
      zh: "道成了肉身，住在我們中間，充充滿滿地有恩典有真理",
      en: "The Word became flesh, and lived among us" },
    keyVerses: ["1:1", "1:12", "1:14", "1:18", "8:58", "20:31"],
    intro: {
      zh: "約翰福音以「道」開始：「太初有道，道與神同在，道就是神」（1:1）。「道」（logos）在希臘思想和猶太思想裡都有分量；約翰說這位道「成了肉身，住在我們中間」（1:14），並且「凡接待他的，就是信他名的人，他就賜他們權柄作神的兒女」（1:12）。書中耶穌說「還沒有亞伯拉罕就有了我」（8:58），原文用的是「我是」，聽的人拿起石頭要打他。全書以 20:31 的目的作結。",
      en: "John begins with the “Word”: “In the beginning was the Word, and the Word was with God, and the Word was God” (1:1). “Word” (logos) carried weight in both Greek and Jewish thought; John says this Word “became flesh, and lived among us” (1:14), and that “as many as received him, to them he gave the right to become God’s children, to those who believe in his name” (1:12). In the book Jesus says, “before Abraham came into existence, I AM” (8:58), using “I am” in the Greek, and those listening pick up stones. The book closes with the purpose of 20:31."
    },
    tip: {
      zh: "「我是」（8:58）是否與出埃及記 3:14 的神名相連，注釋書普遍如此讀，但各自理解不同。",
      en: "Whether “I AM” (8:58) connects to the divine name of Exodus 3:14 is widely read so, but the understanding differs."
    },
    related: ["john_witness", "bread_of_life", "good_shepherd", "way_truth_life", "thomas_doubt"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "john_witness", book: "john", no: 2, kind: "person", type: "faith", rarity: 3,
    zh: "施洗約翰的見證", en: "John’s Witness",
    tag: { zh: "看哪，神的羔羊", en: "Behold, the Lamb of God" },
    role: { zh: "約旦河外的見證（1:19-34）", en: "Witness beyond the Jordan (1:19–34)" },
    ch: [1],
    passages: ["1:19-34"],
    moves: [
      { zh: "神的羔羊", en: "The Lamb of God", ref: "1:29",
        dzh: "次日，約翰看見耶穌來到他那裡，就說：看哪，神的羔羊，除去世人罪孽的！",
        den: "The next day he saw Jesus coming and said, “Behold, the Lamb of God, who takes away the sin of the world!”" },
      { zh: "我不是基督", en: "I Am Not the Christ", ref: "1:19-23",
        dzh: "祭司和利未人來問他是誰；他承認說：我不是基督。我是曠野裡的聲音，預備主的道。",
        den: "Priests and Levites ask who he is; he confesses, “I am not the Christ… I am the voice of one crying in the wilderness.”" }
    ],
    traits: [
      { k: "strength", zh: "只指向別人，不談自己", en: "Points to another and not to himself" },
      { k: "identity", zh: "約翰福音裡他沒有「施洗」的稱號，只叫「約翰」", en: "In John he is simply “John,” not “the Baptist”" }
    ],
    lesson: {
      zh: "約翰福音裡的約翰，工作只有一個：作見證（1:7-8）。他三次說自己不是：不是基督、不是以利亞、不是那先知（1:20-21），然後把人指向耶穌：「看哪，神的羔羊」（1:29）。",
      en: "John in this Gospel has one task: to bear witness (1:7–8). He says three times who he is not — not the Christ, not Elijah, not the prophet (1:20–21) — then points people to Jesus: “Behold, the Lamb of God” (1:29)."
    },
    quote: { ref: "1:29",
      zh: "看哪，神的羔羊，除去世人罪孽的",
      en: "Behold, the Lamb of God, who takes away the sin of the world!" },
    keyVerses: ["1:6", "1:7", "1:19", "1:20", "1:23", "1:29", "1:34"],
    intro: {
      zh: "猶太人從耶路撒冷差祭司和利未人去問約翰：「你是誰？」（1:19）他承認說「我不是基督」；又說不是以利亞，不是那先知（1:20-21）；說「我就是那在曠野裡呼喊的聲音」（1:23）。次日，他看見耶穌，就說「看哪，神的羔羊，除去（和合本註：或譯背負）世人罪孽的！」（1:29）又見證說他看見聖靈如鴿子從天降下，住在耶穌身上（1:32）。第二天他又對兩個門徒說同樣的話，他們就跟隨耶穌（1:35-37）。",
      en: "The Jews send priests and Levites from Jerusalem to ask John, “Who are you?” (1:19). He confesses, “I am not the Christ”; he says he is not Elijah or the prophet (1:20–21); “I am the voice of one crying in the wilderness” (1:23). The next day he sees Jesus and says, “Behold, the Lamb of God, who takes away (the CUV note: or ‘bears’) the sin of the world!” (1:29). He also testifies that he saw the Spirit descend as a dove and remain on Jesus (1:32). The day after he says the same to two of his disciples, and they follow Jesus (1:35–37)."
    },
    tip: {
      zh: "「神的羔羊」指逾越節的羔羊、以賽亞書 53 章受苦的僕人，或別的意思，注釋書有不同讀法。",
      en: "“Lamb of God” may refer to the Passover lamb, the suffering servant of Isaiah 53, or something else; commentaries read it differently."
    },
    related: ["jesus_logos", "nathanael", "wine_at_cana", "good_shepherd"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "nathanael", book: "john", no: 3, kind: "person", type: "wisdom", rarity: 3,
    zh: "拿但業", en: "Nathanael",
    tag: { zh: "拿撒勒還能出甚麼好的嗎？", en: "Can Any Good Thing Come out of Nazareth?" },
    role: { zh: "無花果樹底下的人（1:43-51）", en: "The man under the fig tree (1:43–51)" },
    ch: [1],
    passages: ["1:43-51"],
    moves: [
      { zh: "你來看", en: "Come and See", ref: "1:46",
        dzh: "拿但業對腓力說：拿撒勒還能出甚麼好的嗎？腓力說：你來看！",
        den: "Nathanael said, “Can any good thing come out of Nazareth?” Philip said, “Come and see.”" },
      { zh: "真以色列人", en: "An Israelite Indeed", ref: "1:47-48",
        dzh: "耶穌說：這是個真以色列人，他心裡是沒有詭詐的。你在無花果樹底下，我就看見你了。",
        den: "“Behold, an Israelite indeed, in whom is no deceit!… when you were under the fig tree, I saw you.”" }
    ],
    traits: [
      { k: "strength", zh: "有疑問，也肯去看", en: "Has doubts, and is willing to go and see" },
      { k: "weakness", zh: "對拿撒勒有成見", en: "Prejudiced about Nazareth" }
    ],
    lesson: {
      zh: "拿但業的成見很直白，腓力的回答很簡單：「你來看。」耶穌看見他，說他「是個真以色列人」，並說「我看見你在無花果樹底下」，他就說「拉比，你是神的兒子，你是以色列的王」（1:49）。",
      en: "Nathanael’s prejudice is blunt and Philip’s answer simple: “Come and see.” Jesus sees him and says he is “an Israelite indeed,” and that he saw him under the fig tree; Nathanael answers, “Rabbi, you are the Son of God! You are King of Israel!” (1:49)."
    },
    quote: { ref: "1:47",
      zh: "看哪，這是個真以色列人，他心裡是沒有詭詐的",
      en: "Behold, an Israelite indeed, in whom is no deceit!" },
    keyVerses: ["1:43", "1:45", "1:46", "1:47", "1:48", "1:49", "1:51"],
    intro: {
      zh: "次日，耶穌要往加利利去，遇見腓力，對他說「你來跟從我」（1:43）。腓力找著拿但業，對他說「摩西在律法上所記的，和眾先知所記的那一位，我們遇見了」（1:45）。拿但業說拿撒勒還能出甚麼好的嗎？（1:46）耶穌見他來，就說他是真以色列人。「無花果樹底下」，經文沒有說拿但業在那裡做甚麼，有人讀作在讀經默想。耶穌最後說：你將要看見天開了，神的使者上去下來在人子身上（1:51），讓人想起雅各的夢（創 28:12）。",
      en: "The next day Jesus decides to go to Galilee, finds Philip and says, “Follow me” (1:43). Philip finds Nathanael and says, “We have found him, of whom Moses in the law, and the prophets, wrote” (1:45). Nathanael says, “Can any good thing come out of Nazareth?” (1:46). Jesus sees him coming and calls him an Israelite indeed. What Nathanael was doing “under the fig tree” the text does not say; some read it as reading and meditating on Scripture. Jesus finally says, “you will see heaven opened, and the angels of God ascending and descending on the Son of Man” (1:51), recalling Jacob’s dream (Gen 28:12)."
    },
    tip: {
      zh: "拿但業常被認為就是別的福音書的巴多羅買（拿但業是名，巴多羅買是「巴多羅買的兒子」），這是傳統上的推測，約翰福音沒有說。",
      en: "Nathanael is often identified with the Bartholomew of the other Gospels; that is a traditional guess and John does not say it."
    },
    related: ["john_witness", "jesus_logos", "wine_at_cana", "nicodemus"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "wine_at_cana", book: "john", no: 4, kind: "other", type: "harvest", rarity: 4,
    zh: "迦拿的婚宴", en: "The Wedding at Cana",
    tag: { zh: "你倒把好酒留到如今", en: "You Have Kept the Good Wine Until Now" },
    role: { zh: "第一件神蹟（2:1-11）", en: "The first sign (2:1–11)" },
    ch: [2],
    passages: ["2:1-11"],
    moves: [
      { zh: "他們沒有酒了", en: "They Have No Wine", ref: "2:3-5",
        dzh: "酒用盡了，耶穌的母親對他說：他們沒有酒了。她對用人說：他告訴你們甚麼，你們就做甚麼。",
        den: "When the wine ran out Jesus’s mother said, “They have no wine,” and she told the servants, “Whatever he says to you, do it.”" },
      { zh: "好酒留到如今", en: "The Good Wine Last", ref: "2:10-11",
        dzh: "管筵席的說：人都是先擺上好酒，你倒把好酒留到如今！這是耶穌所行的頭一件神蹟，顯出他的榮耀來。",
        den: "“Everyone serves the good wine first… You have kept the good wine until now!” This was the beginning of his signs, and he revealed his glory." }
    ],
    traits: [
      { k: "strength", zh: "只有用人知道酒是哪裡來的（2:9）", en: "Only the servants know where the wine came from (2:9)" },
      { k: "identity", zh: "「頭一件神蹟」", en: "“The beginning of his signs”" }
    ],
    lesson: {
      zh: "約翰福音不說「神蹟」（miracle），而說「記號」（sign）：這是要指向某種意義。迦拿的酒是第一個記號，顯出他的榮耀，「他的門徒就信他了」（2:11）。",
      en: "John does not say “miracle” but “sign”: something pointing beyond itself. The wine at Cana is the first sign, revealing his glory, and “his disciples believed in him” (2:11)."
    },
    quote: { ref: "2:10",
      zh: "你倒把好酒留到如今",
      en: "You have kept the good wine until now!" },
    keyVerses: ["2:1", "2:3", "2:4", "2:5", "2:6", "2:9", "2:10", "2:11"],
    intro: {
      zh: "第三日，在加利利的迦拿有娶親的筵席，耶穌的母親在那裡，耶穌和他的門徒也被請去赴席（2:1-2）。酒用盡了，他母親對他說「他們沒有酒了」；耶穌說「母親，我與你有甚麼相干？我的時候還沒有到」（2:3-4）。她對用人說「他告訴你們甚麼，你們就做甚麼」（2:5）。有六口石缸，每口可以盛兩三桶水，耶穌叫人把缸倒滿了水，又叫他們舀出來送給管筵席的（2:6-8）。管筵席的嚐了，就不知道這酒是哪裡來的（2:9）。",
      en: "On the third day there is a wedding in Cana of Galilee; Jesus’s mother is there, and Jesus and his disciples are invited (2:1–2). When the wine runs out, his mother says, “They have no wine,” and Jesus says, “Woman, what does that have to do with you and me? My hour has not yet come” (2:3–4). She says to the servants, “Whatever he says to you, do it” (2:5). Six stone water jars, each holding twenty or thirty gallons, are filled with water and then drawn out and taken to the master of the feast (2:6–8). He tastes it and does not know where it came from (2:9)."
    },
    tip: {
      zh: "2:4 的「母親（原文是婦人）」，在當時是客氣的稱呼，並非不敬。",
      en: "“Woman” in 2:4 was a polite form of address then, not disrespectful."
    },
    related: ["nathanael", "nicodemus", "woman_at_well", "jesus_logos"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "nicodemus", book: "john", no: 5, kind: "person", type: "wisdom", rarity: 5,
    zh: "夜裡來的尼哥底母", en: "Nicodemus, Who Came by Night",
    tag: { zh: "神愛世人，甚至將他的獨生子賜給他們", en: "For God So Loved the World" },
    role: { zh: "法利賽人，猶太人的官（3:1-21）", en: "A Pharisee, a ruler of the Jews (3:1–21)" },
    ch: [3],
    passages: ["3:1-21"],
    moves: [
      { zh: "人若不重生", en: "Unless One Is Born Anew", ref: "3:3",
        dzh: "耶穌回答說：我實實在在地告訴你，人若不重生，就不能見神的國。",
        den: "Jesus answered him, “Most certainly, I tell you, unless one is born anew, he can’t see God’s Kingdom.”" },
      { zh: "神愛世人", en: "God So Loved the World", ref: "3:16",
        dzh: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",
        den: "“For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.”" }
    ],
    traits: [
      { k: "strength", zh: "身為官員，肯夜裡來問", en: "A ruler, willing to come by night with his questions" },
      { k: "weakness", zh: "「怎能有這事呢？」（3:9）", en: "“How can these things be?” (3:9)" }
    ],
    lesson: {
      zh: "尼哥底母在夜裡來，後來在 7:50-52 為耶穌說了一句話，在 19:39 與亞利馬太的約瑟一起來埋葬耶穌，帶了沒藥和沉香約有一百斤。他的故事是慢慢走向光的。",
      en: "Nicodemus comes by night, later speaks a word for Jesus in 7:50–52, and in 19:39 comes with Joseph of Arimathea to bury him, bringing myrrh and aloes of about a hundred pounds. His is a story of slowly moving into the light."
    },
    quote: { ref: "3:16",
      zh: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生",
      en: "For God so loved the world, that he gave his one and only Son" },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:14", "3:16", "3:17", "3:21"],
    intro: {
      zh: "有一個法利賽人，名叫尼哥底母，是猶太人的官（3:1）。他夜裡來見耶穌，說「我們知道你是由神那裡來作師傅的」（3:2）。耶穌說「人若不重生，就不能見神的國」（3:3）；「重生」的「重」，原文也可譯作「從上頭」，所以尼哥底母問「豈能再進母腹生出來嗎？」（3:4）耶穌又說「摩西在曠野怎樣舉蛇，人子也必照樣被舉起來」（3:14；參民 21:8-9），然後是 3:16，最常被引用的一節。從 3:16 起是耶穌的話，還是約翰福音作者的解說，注釋書看法不一。",
      en: "A man of the Pharisees named Nicodemus, a ruler of the Jews, comes to Jesus by night and says, “we know that you are a teacher come from God” (3:1–2). Jesus says, “unless one is born anew, he can’t see God’s Kingdom” (3:3); the Greek for “anew” can also mean “from above,” which is why Nicodemus asks, “Can he enter a second time into his mother’s womb?” (3:4). Jesus goes on, “As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up” (3:14; compare Num 21:8–9), and then comes 3:16, the most quoted verse. Whether from 3:16 on it is Jesus’s own speech or the evangelist’s comment commentaries differ."
    },
    tip: {
      zh: "「重生」的「重」，原文可譯「再一次」或「從上頭」，這雙關正是尼哥底母誤會的地方。",
      en: "The Greek behind “anew” can mean “again” or “from above”; the double meaning is exactly where Nicodemus misunderstands."
    },
    related: ["wine_at_cana", "woman_at_well", "bread_of_life", "it_is_finished"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "woman_at_well", book: "john", no: 6, kind: "person", type: "faith", rarity: 5,
    zh: "井旁的撒馬利亞婦人", en: "The Samaritan Woman at the Well",
    tag: { zh: "他所賜的水要成為泉源，直湧到永生", en: "A Spring of Water Welling Up to Eternal Life" },
    role: { zh: "雅各井（4:1-42）", en: "Jacob’s well (4:1–42)" },
    ch: [4],
    passages: ["4:1-42"],
    moves: [
      { zh: "請你給我水喝", en: "Give Me a Drink", ref: "4:6-9",
        dzh: "耶穌因走路困乏，坐在井旁；一個撒馬利亞婦人來打水；他說：請你給我水喝。",
        den: "Jesus, tired from his journey, sat by the well; a woman of Samaria came to draw water; he said, “Give me a drink.”" },
      { zh: "泉源，直湧到永生", en: "A Well Springing Up", ref: "4:14",
        dzh: "我所賜的水要在他裡頭成為泉源，直湧到永生。",
        den: "“The water that I will give him will become in him a well of water springing up to eternal life.”" }
    ],
    traits: [
      { k: "strength", zh: "留下水罐子，跑去告訴全城（4:28-29）", en: "Leaves her water pot and goes to tell the whole town (4:28–29)" },
      { k: "weakness", zh: "在中午獨自來打水；有五個丈夫的過去（4:6、18）", en: "Comes alone at noon; five husbands in her past (4:6, 18)" }
    ],
    lesson: {
      zh: "耶穌打破兩道牆：猶太人和撒馬利亞人，男人和女人（4:9、27）。婦人問他拜神的地方，他說「時候將到，如今就是了，真正拜父的，要用心靈和誠實拜他」（4:23）。她留下水罐子，就去告訴眾人（4:28）。",
      en: "Jesus crosses two walls: Jew and Samaritan, man and woman (4:9, 27). When she asks about the place of worship he says, “the hour comes, and now is, when the true worshippers will worship the Father in spirit and truth” (4:23). She leaves her water pot and goes to tell the people (4:28)."
    },
    quote: { ref: "4:14",
      zh: "我所賜的水要在他裡頭成為泉源，直湧到永生",
      en: "will become in him a well of water springing up to eternal life" },
    keyVerses: ["4:6", "4:7", "4:9", "4:10", "4:14", "4:24", "4:28", "4:29", "4:39", "4:42"],
    intro: {
      zh: "耶穌因走路困乏，就坐在井旁；那時約有午正（4:6）。有一個撒馬利亞的婦人來打水，他說「請你給我水喝」，她驚訝猶太人怎麼向撒馬利亞人要水喝（4:7-9）。耶穌說「你若知道神的恩賜，和對你說給我水喝的是誰，你必早求他，他也必早給了你活水」（4:10）。他說出她有過五個丈夫，現在的也不是她的丈夫（4:17-18）；她說「先生，我看出你是先知」（4:19）。許多撒馬利亞人因這婦人的見證信了他（4:39）。",
      en: "Jesus, tired from his journey, sits down by the well; it was about the sixth hour (4:6). A woman of Samaria comes to draw water; he says, “Give me a drink,” and she wonders how a Jew asks a Samaritan for a drink (4:7–9). Jesus says, “If you knew the gift of God, and who it is who says to you, ‘Give me a drink,’ you would have asked him, and he would have given you living water” (4:10). He tells her she has had five husbands and the one she now has is not her husband (4:17–18); she says, “Sir, I perceive that you are a prophet” (4:19). Many Samaritans believe because of the woman’s testimony (4:39)."
    },
    tip: {
      zh: "她的過去是否被視為「不道德」，經文只陳述事實，沒有評論；有人讀作她的處境更像被休或喪夫。",
      en: "Whether her past is judged “immoral” the text only states and does not comment on; some read her situation as closer to divorce or widowhood."
    },
    related: ["nicodemus", "wine_at_cana", "boy_with_loaves", "bread_of_life"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "boy_with_loaves", book: "john", no: 7, kind: "person", type: "harvest", rarity: 3,
    zh: "帶著五個餅的孩童", en: "The Boy with the Loaves",
    tag: { zh: "只是分給這許多人還算甚麼呢", en: "But What Are These Among So Many?" },
    role: { zh: "餵飽五千人（6:1-15）", en: "Feeding the five thousand (6:1–15)" },
    ch: [6],
    passages: ["6:1-15"],
    moves: [
      { zh: "還算甚麼呢", en: "What Are These?", ref: "6:9",
        dzh: "安得烈說：在這裡有一個孩童，帶著五個大麥餅、兩條魚，只是分給這許多人還算甚麼呢？",
        den: "Andrew: “There is a boy here who has five barley loaves and two fish, but what are these among so many?”" },
      { zh: "撿起零碎", en: "Gather the Fragments", ref: "6:12",
        dzh: "他們吃飽了，耶穌對門徒說：把剩下的零碎收拾起來，免得有糟蹋的。",
        den: "When they were filled, he said to his disciples, “Gather up the broken pieces which are left over, so that nothing gets lost.”" }
    ],
    traits: [
      { k: "strength", zh: "只有約翰福音記這個孩子，和「大麥」餅", en: "Only John mentions the boy and the “barley” loaves" },
      { k: "identity", zh: "孩子沒有名字，也沒有說話", en: "The boy is unnamed and says nothing" }
    ],
    lesson: {
      zh: "在約翰福音裡，是耶穌先問腓力「我們從哪裡買餅叫這些人吃呢？」（6:5），並且「他自己原知道要怎樣行」（6:6）。安得烈找來了孩子的午餐，說「還算甚麼呢？」——卻也是從這個孩子開始。",
      en: "In John it is Jesus who first asks Philip, “Where are we to buy bread, that these may eat?” (6:5), and “he himself knew what he would do” (6:6). Andrew finds the boy’s lunch and says, “What are these?” — yet it begins from this child."
    },
    quote: { ref: "6:9",
      zh: "在這裡有一個孩童，帶著五個大麥餅、兩條魚",
      en: "There is a boy here who has five barley loaves and two fish" },
    keyVerses: ["6:1", "6:5", "6:6", "6:8", "6:9", "6:11", "6:12", "6:13", "6:15"],
    intro: {
      zh: "這事以後，耶穌渡過加利利海，就是提比哩亞海；有一大群人因為看見他在病人身上所行的神蹟，就跟隨他（6:1-2）。耶穌問腓力，要從哪裡買餅（6:5）；腓力說「二十兩銀子的餅，叫他們各人吃一點也是不夠的」（6:7）。安得烈指著孩子說了那句話（6:8-9）。耶穌拿起餅來祝謝，分給眾人；吃飽了，把剩下的零碎裝滿了十二個籃子（6:11-13）。眾人要強逼他作王，他就獨自退到山上去了（6:15）。",
      en: "After these things Jesus goes over the Sea of Galilee, which is the Sea of Tiberias; a great multitude follows him because they saw the signs he did on the sick (6:1–2). He asks Philip where to buy bread (6:5); Philip says, “Two hundred denarii worth of bread is not sufficient for them, that every one of them may receive a little” (6:7). Andrew points to the boy and says what he says (6:8–9). Jesus takes the loaves, gives thanks and distributes; when they are filled the fragments fill twelve baskets (6:11–13). The people intend to take him by force to make him king, and he withdraws to the mountain alone (6:15)."
    },
    tip: {
      zh: "「大麥餅」是窮人吃的；約翰福音特別提到這一點。",
      en: "Barley loaves were the food of the poor; John specifically notes it."
    },
    related: ["bread_of_life", "woman_at_well", "good_shepherd", "jesus_logos"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "bread_of_life", book: "john", no: 8, kind: "other", type: "harvest", rarity: 5,
    zh: "生命的糧", en: "The Bread of Life",
    tag: { zh: "到我這裡來的，必定不餓", en: "He Who Comes to Me Will Not Be Hungry" },
    role: { zh: "迦百農會堂的講論（6:22-71）", en: "The discourse in the Capernaum synagogue (6:22–71)" },
    ch: [6],
    passages: ["6:22-71"],
    moves: [
      { zh: "我就是生命的糧", en: "I Am the Bread of Life", ref: "6:35",
        dzh: "耶穌說：我就是生命的糧。到我這裡來的，必定不餓；信我的，永遠不渴。",
        den: "Jesus said, “I am the bread of life. He who comes to me will not be hungry, and he who believes in me will never be thirsty.”" },
      { zh: "我們還歸從誰呢", en: "To Whom Would We Go?", ref: "6:68-69",
        dzh: "彼得回答：主啊，你有永生之道，我們還歸從誰呢？我們已經信了，又知道你是神的聖者。",
        den: "Peter answered, “Lord, to whom would we go? You have the words of eternal life.”" }
    ],
    traits: [
      { k: "strength", zh: "第一個「我是」的比喻", en: "The first of the “I am” metaphors" },
      { k: "weakness", zh: "「從此，他的門徒中有好些退去了」（6:66）", en: "“Many of his disciples went back” (6:66)" }
    ],
    lesson: {
      zh: "講論一開始眾人要的是更多的餅（6:26-34），耶穌說自己就是糧。這話難懂，「從此，他的門徒中有好些退去了，不再和他同行」（6:66）；耶穌問十二個人要不要也去，彼得說「主啊，你有永生之道，我們還歸從誰呢？」（6:67-68）",
      en: "At the start the crowd wants more bread (6:26–34), and Jesus says he himself is the bread. The saying is hard: “many of his disciples went back, and walked no more with him” (6:66); Jesus asks the twelve if they too want to go, and Peter says, “Lord, to whom would we go? You have the words of eternal life” (6:67–68)."
    },
    quote: { ref: "6:35",
      zh: "我就是生命的糧。到我這裡來的，必定不餓；信我的，永遠不渴",
      en: "I am the bread of life. He who comes to me will not be hungry" },
    keyVerses: ["6:26", "6:31", "6:35", "6:48", "6:51", "6:60", "6:66", "6:68", "6:69"],
    intro: {
      zh: "眾人找到耶穌，問他幾時來到這裡；他說他們找他是因為吃餅得飽（6:25-26）。他們提起摩西在曠野賜嗎哪（6:31）；耶穌說「我就是生命的糧」（6:35）。他又說「我是從天上降下來的活糧，人若吃這糧，就必永遠活著」（6:51），猶太人就彼此爭論；「這話甚難，誰能聽呢？」（6:60）關於 6:51-58 「吃我的肉，喝我的血」，各教會傳統（聖餐的意義，或比喻）有不同讀法。",
      en: "The crowd finds Jesus and asks when he came; he says they seek him because they ate the loaves and were filled (6:25–26). They mention Moses giving manna in the wilderness (6:31); Jesus says, “I am the bread of life” (6:35). He also says, “I am the living bread which came down out of heaven. If anyone eats of this bread, he will live forever” (6:51), and the Jews argue; “This is a hard saying. Who can listen to it?” (6:60). On 6:51–58, “eating my flesh and drinking my blood,” church traditions (the Lord’s Supper, or a figure) read it differently."
    },
    tip: {
      zh: "6:51-58 與聖餐的關係，各教會傳統有不同讀法；經文沒有直接提到最後的晚餐。",
      en: "How 6:51–58 relates to the Lord’s Supper church traditions read differently; the text does not mention the last supper directly."
    },
    related: ["boy_with_loaves", "woman_at_well", "good_shepherd", "jesus_logos"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "woman_caught_adultery", book: "john", no: 9, kind: "person", type: "love", rarity: 5,
    zh: "行淫時被拿的婦人", en: "The Woman Caught in Adultery",
    tag: { zh: "你們中間誰是沒有罪的，誰就可以先拿石頭打她", en: "Let the One Without Sin Throw the First Stone" },
    role: { zh: "聖殿的清早（7:53-8:11）", en: "A morning in the temple (7:53–8:11)" },
    ch: [7, 8],
    passages: ["7:53", "8:1-11"],
    moves: [
      { zh: "先拿石頭打她", en: "The First Stone", ref: "8:7",
        dzh: "他們不住地問他，耶穌就直起腰來，說：你們中間誰是沒有罪的，誰就可以先拿石頭打她。",
        den: "When they continued asking, he looked up: “He who is without sin among you, let him throw the first stone at her.”" },
      { zh: "我也不定你的罪", en: "Neither Do I Condemn You", ref: "8:10-11",
        dzh: "婦人，那些人在哪裡呢？沒有人定你的罪嗎？她說：主啊，沒有。耶穌說：我也不定你的罪。去吧，從此不要再犯罪了！",
        den: "“Woman, where are your accusers? Did no one condemn you?” “No one, Lord.” “Neither do I condemn you. Go your way. From now on, sin no more.”" }
    ],
    traits: [
      { k: "strength", zh: "他彎下腰，在地上寫字，直到他們一個一個走開", en: "He stoops and writes on the ground until they leave one by one" },
      { k: "weakness", zh: "文士和法利賽人拿她來試探耶穌（8:6）", en: "The scribes and Pharisees use her to test Jesus (8:6)" }
    ],
    lesson: {
      zh: "他們把一個女人推到中間，要的是一個能控告耶穌的答案（8:6）。耶穌沒有說她沒有罪，也沒有讓她離開時無事；他說「我也不定你的罪」，然後說「從此不要再犯罪了」。寬恕在前，改變在後。",
      en: "They set a woman in the middle, wanting an answer to accuse Jesus (8:6). Jesus does not say she is not guilty, nor that nothing is asked of her; he says “Neither do I condemn you” and then “sin no more.” Mercy first, then change."
    },
    quote: { ref: "8:7",
      zh: "你們中間誰是沒有罪的，誰就可以先拿石頭打她",
      en: "He who is without sin among you, let him throw the first stone at her." },
    keyVerses: ["8:3", "8:4", "8:6", "8:7", "8:9", "8:10", "8:11"],
    intro: {
      zh: "天亮的時候，耶穌又回到殿裡，眾百姓都到他那裡去，他就坐下教訓他們（8:2）。文士和法利賽人帶來一個行淫時被拿的婦人，叫她站在當中，說摩西的律法吩咐把這樣的婦人用石頭打死，問他怎麼說（8:3-5）。耶穌彎著腰，用指頭在地上畫字（8:6）。他們聽見這話，就從老到少，一個一個地都出去了（8:9）。這段故事，最早的好抄本沒有，多數學者認為是後來加入，但並不質疑這件事的真實性；和合本與 WEB 都印出。",
      en: "At dawn Jesus came again into the temple, and all the people came to him; he sat down and taught them (8:2). The scribes and Pharisees bring a woman caught in adultery, set her in the middle, and say Moses’s law commands such to be stoned; what does he say? (8:3–5). Jesus stoops and writes on the ground with his finger (8:6). Hearing it, they go out one by one, beginning from the oldest (8:9). The earliest good manuscripts lack this story, and most scholars think it a later insertion, though they do not doubt it was a genuine memory; the CUV and WEB both print it."
    },
    tip: {
      zh: "7:53-8:11 不在最早的抄本裡，各抄本放的位置也不同（有的放在路加福音）；他寫的是甚麼，經文沒有說。",
      en: "7:53–8:11 is not in the earliest manuscripts and appears in different places in others (some put it in Luke); what Jesus wrote the text does not say."
    },
    related: ["man_born_blind", "good_shepherd", "nicodemus", "jesus_logos"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "man_born_blind", book: "john", no: 10, kind: "person", type: "vision", rarity: 5,
    zh: "生來瞎眼的人", en: "The Man Born Blind",
    tag: { zh: "從前我是眼瞎的，如今能看見了", en: "Though I Was Blind, Now I See" },
    role: { zh: "西羅亞池與審問（第 9 章）", en: "Siloam and the interrogation (ch 9)" },
    ch: [9],
    passages: ["9:1-41"],
    moves: [
      { zh: "顯出神的作為", en: "The Works of God Revealed", ref: "9:2-3",
        dzh: "門徒問：這人生來是瞎眼的，是誰犯了罪？耶穌說：也不是這人犯了罪，也不是他父母犯了罪，是要顯出神的作為來。",
        den: "“Who sinned, this man or his parents?” Jesus: “Neither… but that the works of God might be revealed in him.”" },
      { zh: "如今能看見了", en: "Now I See", ref: "9:25",
        dzh: "他說：他是個罪人不是，我不知道；有一件事我知道，從前我是眼瞎的，如今能看見了。",
        den: "He answered, “I don’t know if he is a sinner. One thing I do know: that though I was blind, now I see.”" }
    ],
    traits: [
      { k: "strength", zh: "越被審問，越說得清楚（9:25、30-33）", en: "The more he is questioned, the clearer he speaks (9:25, 30–33)" },
      { k: "weakness", zh: "被趕出會堂（9:34）", en: "Driven out of the synagogue (9:34)" }
    ],
    lesson: {
      zh: "這個人在整章裡慢慢看見：他先稱耶穌為「那個人」（9:11），再稱「先知」（9:17），最後說「主啊，我信」並拜他（9:38）。法利賽人看得見，卻越問越瞎（9:40-41）。",
      en: "Across the chapter the man gradually sees: first he calls Jesus “the man” (9:11), then “a prophet” (9:17), finally “Lord, I believe,” and worships him (9:38). The Pharisees can see, yet grow blinder with each question (9:40–41)."
    },
    quote: { ref: "9:25",
      zh: "有一件事我知道，從前我是眼瞎的，如今能看見了",
      en: "One thing I do know: that though I was blind, now I see." },
    keyVerses: ["9:1", "9:2", "9:3", "9:6", "9:7", "9:25", "9:34", "9:38", "9:39"],
    intro: {
      zh: "耶穌過去的時候，看見一個人生來是瞎眼的（9:1）。門徒問是誰犯了罪（9:2）；耶穌說是要在他身上顯出神的作為來（9:3）。他吐唾沫在地上，用唾沫和泥抹在瞎子的眼睛上，對他說「你往西羅亞池子裡去洗」，他去洗了，就看見了回來（9:6-7）。法利賽人審問他，他父母也被問，最後他被趕出會堂（9:13-34）。耶穌找著他，問他信不信人子，他說「主啊，我信」，就拜耶穌（9:35-38）。那天是安息日（9:14）。",
      en: "As Jesus passes by, he sees a man blind from birth (9:1). The disciples ask who sinned (9:2); Jesus says it is that the works of God might be revealed in him (9:3). He spits on the ground, makes mud with the saliva, anoints the blind man’s eyes with it and says, “Go, wash in the pool of Siloam”; he washes and comes back seeing (9:6–7). The Pharisees interrogate him, his parents are questioned, and finally he is driven out of the synagogue (9:13–34). Jesus finds him and asks if he believes in the Son of Man; he says, “Lord, I believe,” and worships him (9:35–38). It was the Sabbath (9:14)."
    },
    tip: {
      zh: "「西羅亞」的意思是「被差遣」（9:7）；約翰福音自己提到這個詞的意思。",
      en: "“Siloam” means “sent” (9:7); John himself gives the meaning of the word."
    },
    related: ["woman_caught_adultery", "good_shepherd", "lazarus_raised", "jesus_logos"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "good_shepherd", book: "john", no: 11, kind: "other", type: "love", rarity: 5,
    zh: "好牧人", en: "The Good Shepherd",
    tag: { zh: "好牧人為羊捨命", en: "The Good Shepherd Lays Down His Life for the Sheep" },
    role: { zh: "羊圈與牧人（10:1-21）", en: "The sheepfold and the shepherd (10:1–21)" },
    ch: [10],
    passages: ["10:1-21"],
    moves: [
      { zh: "來了，是要叫羊得生命", en: "That They May Have Life", ref: "10:10",
        dzh: "盜賊來，無非要偷竊，殺害，毀壞；我來了，是要叫羊得生命，並且得的更豐盛。",
        den: "“The thief only comes to steal, kill, and destroy. I came that they may have life, and may have it abundantly.”" },
      { zh: "我是好牧人", en: "I Am the Good Shepherd", ref: "10:11",
        dzh: "我是好牧人；好牧人為羊捨命。",
        den: "“I am the good shepherd. The good shepherd lays down his life for the sheep.”" }
    ],
    traits: [
      { k: "strength", zh: "認識羊，羊也認識他的聲音（10:14）", en: "Knows his sheep, and they know his voice (10:14)" },
      { k: "identity", zh: "舊約的「牧人」（詩 23；結 34）在這裡成為一個人", en: "The Old Testament’s “shepherd” (Ps 23; Ezek 34) becomes a person here" }
    ],
    lesson: {
      zh: "好牧人和雇工的差別，在於遇見狼的時候：雇工逃跑，因為羊不是他的（10:12-13）；好牧人「為羊捨命」（10:11、15）。「我還有別的羊，不是這圈裡的」（10:16）說到圈外的人。",
      en: "The difference between the good shepherd and the hired hand shows when the wolf comes: the hired hand flees because the sheep aren’t his (10:12–13); the good shepherd “lays down his life for the sheep” (10:11, 15). “I have other sheep, which are not of this fold” (10:16) speaks of those outside."
    },
    quote: { ref: "10:11",
      zh: "我是好牧人；好牧人為羊捨命",
      en: "I am the good shepherd. The good shepherd lays down his life for the sheep." },
    keyVerses: ["10:1", "10:3", "10:7", "10:9", "10:10", "10:11", "10:14", "10:15", "10:16", "10:27"],
    intro: {
      zh: "「我實實在在地告訴你們，人進羊圈，不從門進去，倒從別處爬進去，那人就是賊，就是強盜。」（10:1）牧人從門進去，羊聽他的聲音，他按著名叫自己的羊，把羊領出來（10:2-3）。耶穌說自己是羊的門（10:7、9），又說自己是好牧人（10:11、14）。結 34 章責備以色列的牧人，並說耶和華自己要作牧人；詩篇 23 篇是「耶和華是我的牧者」。10:22-30 的後半，羊聽他的聲音，沒有人能從他手裡把羊奪去（10:27-28）。",
      en: "“Most certainly I tell you, he who doesn’t enter by the door into the sheepfold, but climbs up some other way, the same is a thief and a robber” (10:1). The shepherd enters by the door, the sheep hear his voice, and he calls his own sheep by name and leads them out (10:2–3). Jesus says he is the door of the sheep (10:7, 9) and also the good shepherd (10:11, 14). Ezekiel 34 rebukes Israel’s shepherds and says Yahweh himself will be the shepherd; Psalm 23 is “Yahweh is my shepherd.” In the second half, 10:22–30, the sheep hear his voice, and no one can snatch them out of his hand (10:27–28)."
    },
    tip: {
      zh: "「我還有別的羊，不是這圈裡的」（10:16）指誰，注釋書有幾種讀法，常見的是外邦人。",
      en: "Who the “other sheep” of 10:16 are commentaries read in several ways; a common reading is the Gentiles."
    },
    related: ["man_born_blind", "lazarus_raised", "bread_of_life", "peter_restored"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "lazarus_raised", book: "john", no: 12, kind: "person", type: "faith", rarity: 5,
    zh: "拉撒路復活", en: "The Raising of Lazarus",
    tag: { zh: "復活在我，生命也在我", en: "I Am the Resurrection and the Life" },
    role: { zh: "伯大尼的墳墓（第 11 章）", en: "The tomb at Bethany (ch 11)" },
    ch: [11],
    passages: ["11:1-44"],
    moves: [
      { zh: "復活在我", en: "I Am the Resurrection", ref: "11:25-26",
        dzh: "耶穌對馬大說：復活在我，生命也在我。信我的人雖然死了，也必復活。你信這話嗎？",
        den: "“I am the resurrection and the life. He who believes in me will still live, even if he dies… Do you believe this?”" },
      { zh: "拉撒路出來", en: "Lazarus, Come Out", ref: "11:43-44",
        dzh: "耶穌大聲呼叫說：拉撒路出來！那死人就出來了；耶穌說：解開，叫他走！",
        den: "He cried with a loud voice, “Lazarus, come out!” The dead man came out; Jesus said, “Free him, and let him go.”" }
    ],
    traits: [
      { k: "strength", zh: "「耶穌哭了」（11:35）", en: "“Jesus wept” (11:35)" },
      { k: "weakness", zh: "他聽說拉撒路病了，仍在原處住了兩天（11:6）", en: "Hearing Lazarus is sick, he stays two more days (11:6)" }
    ],
    lesson: {
      zh: "耶穌「素來愛馬大和她妹子並拉撒路」（11:5），卻在原處又住了兩天（11:6）。他到了，馬大說「你若早在這裡，我兄弟必不死」（11:21）。他說了一句最大的話，然後在墳墓前「哭了」，又大聲呼叫（11:35、43）。",
      en: "Jesus “loved Martha, and her sister, and Lazarus” (11:5), yet stays two more days (11:6). When he arrives Martha says, “if you had been here, my brother wouldn’t have died” (11:21). He says the largest word, then at the tomb “wept” and cries out in a loud voice (11:35, 43)."
    },
    quote: { ref: "11:25",
      zh: "復活在我，生命也在我",
      en: "I am the resurrection and the life." },
    keyVerses: ["11:1", "11:3", "11:4", "11:6", "11:21", "11:25", "11:27", "11:35", "11:43", "11:44"],
    intro: {
      zh: "有一個患病的人，名叫拉撒路，住在伯大尼，就是馬利亞和她姊姊馬大的村莊（11:1）。姊妹兩個打發人去見耶穌，說「主啊，你所愛的人病了」（11:3）。耶穌說這病不至於死，是為神的榮耀（11:4）。他到了，拉撒路在墳墓裡已經四天（11:17）。馬大說「主啊，是的，我信你是基督，是神的兒子」（11:27）。耶穌看見馬利亞哭，心裡悲歎，又甚憂愁（11:33），「耶穌哭了」（11:35）。這是約翰福音的第七個，也是最後的「神蹟」。",
      en: "A certain man was sick, Lazarus from Bethany, of the village of Mary and her sister Martha (11:1). The sisters send to Jesus: “Lord, behold, he for whom you have great affection is sick” (11:3). Jesus says this sickness is not to death but for the glory of God (11:4). When he arrives Lazarus has been in the tomb four days (11:17). Martha says, “Yes, Lord. I have come to believe that you are the Christ, God’s Son” (11:27). Jesus sees Mary weeping and groans in spirit and is troubled (11:33); “Jesus wept” (11:35). It is the seventh and last sign in John."
    },
    tip: {
      zh: "「耶穌哭了」只有兩個字（11:35），是全部聖經最短的一節之一，常被引用。",
      en: "“Jesus wept” (11:35) is two words in Chinese and a very short verse, often quoted."
    },
    related: ["perfume_bethany", "good_shepherd", "man_born_blind", "mary_at_tomb"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "perfume_bethany", book: "john", no: 13, kind: "person", type: "love", rarity: 4,
    zh: "伯大尼的馬利亞", en: "Mary of Bethany",
    tag: { zh: "屋裡就滿了膏的香氣", en: "The House Was Filled with the Fragrance" },
    role: { zh: "六天前的晚餐（12:1-8）", en: "The supper six days before the Passover (12:1–8)" },
    ch: [12],
    passages: ["12:1-8"],
    moves: [
      { zh: "極貴的香膏", en: "Costly Ointment", ref: "12:3",
        dzh: "馬利亞拿著一斤極貴的真哪噠香膏，抹耶穌的腳，又用自己頭髮去擦，屋裡就滿了膏的香氣。",
        den: "Mary took a pound of ointment of pure nard, very precious, anointed Jesus’s feet and wiped them with her hair; the house was filled with the fragrance." },
      { zh: "由她吧", en: "Leave Her Alone", ref: "12:7-8",
        dzh: "耶穌說：由她吧！她是為我安葬之日存留的。因為常有窮人和你們同在，只是你們不常有我。",
        den: "Jesus said, “Leave her alone. She has kept this for the day of my burial… you always have the poor with you, but you don’t always have me.”" }
    ],
    traits: [
      { k: "strength", zh: "不計代價的一個動作", en: "A single act with no regard to cost" },
      { k: "weakness", zh: "猶大說可以賣三百銀錢周濟窮人（12:5）", en: "Judas says it could have been sold for three hundred denarii for the poor (12:5)" }
    ],
    lesson: {
      zh: "馬利亞沒有說一句話，也沒有人問她；她拿香膏，抹腳，用頭髮擦（12:3）。猶大提出反對，約翰福音說他「是個賊，又帶著錢囊」（12:6）。耶穌說「由她吧」（12:7）。",
      en: "Mary says nothing and no one asks her; she takes the ointment, anoints his feet and wipes them with her hair (12:3). Judas objects, and John says “he was a thief, and having the money box” (12:6). Jesus says, “Leave her alone” (12:7)."
    },
    quote: { ref: "12:3",
      zh: "拿著一斤極貴的真哪噠香膏，抹耶穌的腳",
      en: "took a pound of ointment of pure nard, very precious, and anointed the feet of Jesus" },
    keyVerses: ["12:1", "12:2", "12:3", "12:4", "12:5", "12:6", "12:7", "12:8"],
    intro: {
      zh: "逾越節前六天，耶穌來到伯大尼，就是他叫拉撒路從死裡復活的地方（12:1）。有人在那裡給耶穌預備筵席；馬大伺候，與耶穌同席的有拉撒路（12:2）。馬利亞拿著一斤極貴的真哪噠香膏，抹耶穌的腳（12:3）。猶大說「這香膏為甚麼不賣三十兩銀子賙濟窮人呢？」（12:5；「三十兩」原文是三百德拿利）。馬太福音 26:6-13、馬可福音 14:3-9 也有一次抹香膏，細節與地點不同，是否同一次，注釋書有不同看法。",
      en: "Six days before the Passover, Jesus comes to Bethany, where he had raised Lazarus from the dead (12:1). A supper is made for him there; Martha serves, and Lazarus is one of those at table with him (12:2). Mary takes a pound of ointment of pure nard, very precious, and anoints Jesus’s feet (12:3). Judas says, “Why wasn’t this ointment sold for three hundred denarii, and given to the poor?” (12:5). Matthew 26:6–13 and Mark 14:3–9 also have an anointing, with different details and place; whether it is the same event commentaries differ."
    },
    tip: {
      zh: "約翰福音說抹的是腳，馬太與馬可說是頭；是否同一件事，注釋書有不同說法。",
      en: "John says the feet, Matthew and Mark the head; whether it is the same event commentaries differ."
    },
    related: ["lazarus_raised", "foot_washing", "mary_at_tomb", "it_is_finished"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "foot_washing", book: "john", no: 14, kind: "other", type: "love", rarity: 5,
    zh: "洗腳", en: "Washing the Disciples’ Feet",
    tag: { zh: "愛他們到底", en: "He Loved Them to the End" },
    role: { zh: "最後的晚上（13:1-35）", en: "The last evening (13:1–35)" },
    ch: [13],
    passages: ["13:1-35"],
    moves: [
      { zh: "洗門徒的腳", en: "Washing Their Feet", ref: "13:5",
        dzh: "隨後把水倒在盆裡，就洗門徒的腳，並用自己所束的手巾擦乾。",
        den: "Then he poured water into the basin and began to wash the disciples’ feet, and to wipe them with the towel that was wrapped around him." },
      { zh: "新命令", en: "A New Commandment", ref: "13:34-35",
        dzh: "我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。",
        den: "“A new commandment I give to you, that you love one another. Just as I have loved you, you also love one another.”" }
    ],
    traits: [
      { k: "strength", zh: "主和夫子，作了奴僕的事（13:14）", en: "Lord and Teacher, doing a servant’s task (13:14)" },
      { k: "weakness", zh: "彼得起先不肯：「你永不能洗我的腳」（13:8）", en: "Peter first refuses: “You will never wash my feet” (13:8)" }
    ],
    lesson: {
      zh: "約翰福音沒有記錄擘餅的話，而是記了洗腳。「他既然愛世間屬自己的人，就愛他們到底。」（13:1）洗腳之後是新命令（13:34）：愛的標準不是自己，而是「我怎樣愛你們」。",
      en: "John does not record the words over the bread but the foot-washing instead. “Having loved his own who were in the world, he loved them to the end” (13:1). After the washing comes the new commandment (13:34): the measure of love is not oneself but “just as I have loved you.”"
    },
    quote: { ref: "13:14",
      zh: "你們也當彼此洗腳",
      en: "you also ought to wash one another’s feet" },
    keyVerses: ["13:1", "13:4", "13:5", "13:8", "13:14", "13:15", "13:34", "13:35"],
    intro: {
      zh: "逾越節以前，耶穌知道自己離世歸父的時候到了。他既然愛世間屬自己的人，就愛他們到底（13:1）。晚飯的時候，他離席站起來，脫了衣服，拿一條手巾束腰，把水倒在盆裡，就洗門徒的腳（13:2-5）。到了西門彼得那裡，彼得說「主啊，你洗我的腳嗎？」（13:6）耶穌說「我若不洗你，你就與我無份」（13:8）。洗完，他說「你們也當彼此洗腳」（13:14），又說「我給你們作了榜樣」（13:15）。",
      en: "Before the Passover, Jesus, knowing that his time had come to depart from this world to the Father, having loved his own, loved them to the end (13:1). During supper he rises from the meal, lays aside his outer garments, takes a towel and wraps it around himself, pours water into a basin and begins to wash the disciples’ feet (13:2–5). When he comes to Simon Peter, Peter says, “Lord, do you wash my feet?” (13:6). Jesus says, “If I don’t wash you, you have no part with me” (13:8). When done he says, “you also ought to wash one another’s feet” (13:14) and “I have given you an example” (13:15)."
    },
    tip: {
      zh: "洗腳在當時是奴僕的工作；有些教會把它當作一項禮儀，也有教會當作服事的榜樣，各傳統看法不同。",
      en: "Foot-washing was a servant’s task then; some churches keep it as an ordinance and others as an example of service; traditions differ."
    },
    related: ["perfume_bethany", "way_truth_life", "vine_and_branches", "peter_restored"]
  },

  // ── 015 ──────────────────────────────────────────────────────────────────
  {
    id: "way_truth_life", book: "john", no: 15, kind: "other", type: "faith", rarity: 5,
    zh: "道路、真理、生命", en: "The Way, the Truth and the Life",
    tag: { zh: "你們心裡不要憂愁", en: "Don’t Let Your Heart Be Troubled" },
    role: { zh: "多馬與腓力的問題（14:1-14）", en: "The questions of Thomas and Philip (14:1–14)" },
    ch: [14],
    passages: ["14:1-14"],
    moves: [
      { zh: "我就是道路", en: "I Am the Way", ref: "14:6",
        dzh: "耶穌說：我就是道路、真理、生命；若不藉著我，沒有人能到父那裡去。",
        den: "Jesus said, “I am the way, the truth, and the life. No one comes to the Father, except through me.”" },
      { zh: "我留下平安給你們", en: "Peace I Leave with You", ref: "14:27",
        dzh: "我留下平安給你們；我將我的平安賜給你們。我所賜的，不像世人所賜的。",
        den: "“Peace I leave with you. My peace I give to you; not as the world gives, give I to you.”" }
    ],
    traits: [
      { k: "strength", zh: "回答的是一個擔心，不是一個理論", en: "Answers a worry, not a theory" },
      { k: "identity", zh: "「我是」的第六個話", en: "The sixth “I am” saying" }
    ],
    lesson: {
      zh: "14:6 是對多馬的問題的回答：「主啊，我們不知道你往哪裡去，怎麼知道那條路呢？」（14:5）路不是一個地點，而是一個人。前一節是「你們心裡不要憂愁」（14:1），後一節是「我留下平安給你們」（14:27）。",
      en: "14:6 answers Thomas’s question, “Lord, we don’t know where you are going. How can we know the way?” (14:5). The way is not a place but a person. The chapter opens “Don’t let your heart be troubled” (14:1) and returns to “Peace I leave with you” (14:27)."
    },
    quote: { ref: "14:6",
      zh: "我就是道路、真理、生命；若不藉著我，沒有人能到父那裡去",
      en: "I am the way, the truth, and the life. No one comes to the Father, except through me." },
    keyVerses: ["14:1", "14:2", "14:3", "14:5", "14:6", "14:9", "14:16", "14:27"],
    intro: {
      zh: "最後的晚餐之後，耶穌對門徒說：「你們心裡不要憂愁；你們信神，也當信我。在我父的家裡有許多住處……我去原是為你們預備地方去。」（14:1-2）多馬問「我們不知道你往哪裡去，怎麼知道那條路呢？」（14:5）耶穌說他就是道路、真理、生命（14:6）。腓力說「求主將父顯給我們看，我們就知足了」；耶穌說「人看見了我，就是看見了父」（14:8-9）。14:6 後一句的「若不藉著我，沒有人能到父那裡去」，各傳統對它的涵義有不同理解。",
      en: "After the last supper Jesus says to the disciples, “Don’t let your heart be troubled. You believe in God. Believe also in me. In my Father’s house are many dwelling places… I am going to prepare a place for you” (14:1–2). Thomas asks, “Lord, we don’t know where you are going. How can we know the way?” (14:5). Jesus says he is the way, the truth and the life (14:6). Philip says, “Lord, show us the Father, and that is enough for us”; Jesus says, “He who has seen me has seen the Father” (14:8–9). Traditions understand the last clause of 14:6, “no one comes to the Father, except through me,” in different ways."
    },
    tip: {
      zh: "「我父的家裡有許多住處」（14:2）的「住處」，也可譯「居所」；它指天堂、或與基督同在，各傳統有不同讀法。",
      en: "“Many dwelling places” (14:2) can be rendered “rooms”; whether it means heaven or being with Christ traditions read differently."
    },
    related: ["the_helper", "vine_and_branches", "foot_washing", "thomas_doubt"]
  },

  // ── 016 ──────────────────────────────────────────────────────────────────
  {
    id: "the_helper", book: "john", no: 16, kind: "heavenly", type: "heaven", rarity: 4,
    zh: "另一位保惠師", en: "Another Counselor",
    tag: { zh: "真理的聖靈，永遠與你們同在", en: "The Spirit of Truth, with You Forever" },
    role: { zh: "聖靈的應許（14:15-31；16:5-15）", en: "The promise of the Spirit (14:15–31; 16:5–15)" },
    ch: [14, 16],
    passages: ["14:15-31", "16:5-15"],
    moves: [
      { zh: "另外一位保惠師", en: "Another Counselor", ref: "14:16-17",
        dzh: "我要求父，父就另外賜給你們一位保惠師，叫他永遠與你們同在，就是真理的聖靈。",
        den: "“I will pray to the Father, and he will give you another Counselor, that he may be with you forever — the Spirit of truth.”" },
      { zh: "我去對你們有益", en: "It Is to Your Advantage", ref: "16:7",
        dzh: "我將真情告訴你們，我去是與你們有益的；我若不去，保惠師就不到你們這裡來。",
        den: "“It is to your advantage that I go away, for if I don’t go away, the Counselor won’t come to you.”" }
    ],
    traits: [
      { k: "strength", zh: "「另外」一位：與耶穌同類的同伴", en: "“Another” — of the same kind as Jesus" },
      { k: "identity", zh: "「保惠師」（parakletos）也可譯「訓慰師」「輔導者」", en: "“Counselor” (parakletos) can also be “Comforter” or “Advocate”" }
    ],
    lesson: {
      zh: "耶穌要離開，門徒的心憂愁（16:6）；他說離開是「有益」的，因為另一位要來（16:7）。「他在你們裡面」（14:17）：原來「與你們同在」的耶穌，將來要以聖靈的方式「在你們裡面」。",
      en: "Jesus is about to leave and the disciples’ hearts are filled with sorrow (16:6); he says the going is “to your advantage,” because another will come (16:7). “He will be in you” (14:17): the Jesus who was “with you” will be “in you” in the way of the Spirit."
    },
    quote: { ref: "14:16",
      zh: "我要求父，父就另外賜給你們一位保惠師，叫他永遠與你們同在",
      en: "he will give you another Counselor, that he may be with you forever" },
    keyVerses: ["14:15", "14:16", "14:17", "14:26", "15:26", "16:7", "16:8", "16:13"],
    intro: {
      zh: "「你們若愛我，就必遵守我的命令。我要求父，父就另外賜給你們一位保惠師，叫他永遠與你們同在，就是真理的聖靈。」（14:15-17）14:26 說保惠師要將一切的事指教你們，並且叫你們想起我對你們所說的一切話；16:13 說他要引導你們明白一切的真理。「保惠師」這個詞是約翰福音的特色，希臘文是 parakletos，各譯本有保惠師、訓慰師、助手、辯護者等不同譯法。",
      en: "“If you love me, keep my commandments. I will pray to the Father, and he will give you another Counselor, that he may be with you forever — the Spirit of truth” (14:15–17). In 14:26 the Counselor will teach you all things and bring to your remembrance all that I said to you; in 16:13 he will guide you into all the truth. “Counselor” is a Johannine word, Greek parakletos, rendered differently as Counselor, Comforter, Helper or Advocate."
    },
    tip: {
      zh: "「保惠師」的譯法各版本不同；它的基本意思是「被叫到身邊來的人」。",
      en: "Versions render “Counselor” differently; its basic sense is “one called alongside.”"
    },
    related: ["way_truth_life", "vine_and_branches", "priestly_prayer", "thomas_doubt"]
  },

  // ── 017 ──────────────────────────────────────────────────────────────────
  {
    id: "vine_and_branches", book: "john", no: 17, kind: "other", type: "harvest", rarity: 5,
    zh: "葡萄樹與枝子", en: "The Vine and the Branches",
    tag: { zh: "離了我，你們就不能做甚麼", en: "Apart from Me You Can Do Nothing" },
    role: { zh: "最後的講論（15:1-17）", en: "The farewell discourse (15:1–17)" },
    ch: [15],
    passages: ["15:1-17"],
    moves: [
      { zh: "我是葡萄樹", en: "I Am the Vine", ref: "15:5",
        dzh: "我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子。",
        den: "“I am the vine. You are the branches. He who remains in me, and I in him, the same bears much fruit.”" },
      { zh: "為朋友捨命", en: "Lay Down His Life for His Friends", ref: "15:12-13",
        dzh: "你們要彼此相愛，像我愛你們一樣；人為朋友捨命，人的愛心沒有比這個大的。",
        den: "“Love one another, even as I have loved you. Greater love has no one than this, that someone lay down his life for his friends.”" }
    ],
    traits: [
      { k: "strength", zh: "「常在」（住在）——十次以上出現", en: "“Remain” — repeated more than ten times" },
      { k: "weakness", zh: "不結果子的枝子被剪去（15:2）", en: "Branches that bear no fruit are taken away (15:2)" }
    ],
    lesson: {
      zh: "舊約常以葡萄樹比喻以色列（賽 5；詩 80）；耶穌說「我是真葡萄樹」（15:1）。重點不是「去結果子」，而是「常在我裡面」（15:4）；結果子是樹的事。",
      en: "The Old Testament often pictures Israel as a vine (Isa 5; Ps 80); Jesus says “I am the true vine” (15:1). The emphasis is not “go bear fruit” but “remain in me” (15:4); fruit-bearing is the vine’s work."
    },
    quote: { ref: "15:5",
      zh: "我是葡萄樹，你們是枝子",
      en: "I am the vine. You are the branches." },
    keyVerses: ["15:1", "15:2", "15:4", "15:5", "15:7", "15:9", "15:12", "15:13", "15:15"],
    intro: {
      zh: "「我是真葡萄樹，我父是栽培的人。」（15:1）凡不結果子的枝子，他就剪去；凡結果子的，他就修剪乾淨，使枝子結果子更多（15:2）。「你們要常在我裡面，我也常在你們裡面。枝子若不常在葡萄樹上，自己就不能結果子，你們若不常在我裡面，也是這樣。」（15:4）15:12-13 是命令：彼此相愛；15:15 他稱門徒為朋友，不再稱為僕人。15:1-8 的剪去和修剪，各傳統對「剪去」的枝子能否再被接上，有不同理解。",
      en: "“I am the true vine, and my Father is the farmer” (15:1). Every branch that doesn’t bear fruit he takes away; every branch that bears fruit he prunes clean, that it may bear more fruit (15:2). “Remain in me, and I in you. As the branch can’t bear fruit by itself, unless it remains in the vine, so neither can you, unless you remain in me” (15:4). Verses 12–13 give the command: love one another; in 15:15 he calls the disciples friends, no longer servants. On 15:1–8, traditions understand differently whether a branch “taken away” can be grafted in again."
    },
    tip: {
      zh: "「剪去」和「修剪」在希臘文是兩個相近的字，也可譯「舉起」和「清理」；各譯本略有不同。",
      en: "“Takes away” and “prunes” are two related Greek words that can also mean “lifts up” and “cleans”; versions differ slightly."
    },
    related: ["way_truth_life", "the_helper", "priestly_prayer", "foot_washing"]
  },

  // ── 018 ──────────────────────────────────────────────────────────────────
  {
    id: "priestly_prayer", book: "john", no: 18, kind: "other", type: "faith", rarity: 4,
    zh: "耶穌的禱告", en: "Jesus’s Prayer",
    tag: { zh: "使他們都合而為一", en: "That They May All Be One" },
    role: { zh: "客西馬尼之前（第 17 章）", en: "Before Gethsemane (ch 17)" },
    ch: [17],
    passages: ["17:1-26"],
    moves: [
      { zh: "這就是永生", en: "This Is Eternal Life", ref: "17:3",
        dzh: "認識你─獨一的真神，並且認識你所差來的耶穌基督，這就是永生。",
        den: "“This is eternal life, that they should know you, the only true God, and him whom you sent, Jesus Christ.”" },
      { zh: "使他們合而為一", en: "That They May Be One", ref: "17:21",
        dzh: "使他們都合而為一。正如你父在我裡面，我在你裡面，使他們也在我們裡面，叫世人可以信你差了我來。",
        den: "“That they may all be one; even as you, Father, are in me, and I in you, that they also may be one in us; that the world may believe that you sent me.”" }
    ],
    traits: [
      { k: "strength", zh: "為門徒，也為「藉他們的話信我的人」（17:20）", en: "For the disciples, and also for “those who believe in me through their word” (17:20)" },
      { k: "identity", zh: "福音書中最長的一篇禱告", en: "The longest prayer in the Gospels" }
    ],
    lesson: {
      zh: "耶穌的禱告分三段：為自己（17:1-5）、為門徒（17:6-19）、為後來信的人（17:20-26）。核心請求是「合而為一」，目的是「叫世人可以信」（17:21）。",
      en: "The prayer has three parts: for himself (17:1–5), for the disciples (17:6–19), for those who will believe (17:20–26). The core request is “that they may all be one,” with the aim “that the world may believe” (17:21)."
    },
    quote: { ref: "17:21",
      zh: "使他們都合而為一",
      en: "that they may all be one" },
    keyVerses: ["17:1", "17:3", "17:6", "17:11", "17:15", "17:17", "17:20", "17:21", "17:26"],
    intro: {
      zh: "耶穌說了這些話，就舉目望天，說「父啊，時候到了，願你榮耀你的兒子，使兒子也榮耀你」（17:1）。接著是為門徒禱告：「我不求你叫他們離開世界，只求你保守他們脫離那惡者」（17:15）；「求你用真理使他們成聖；你的道就是真理」（17:17）。然後他為「藉著他們的話信我的人」禱告（17:20）：願他們都合而為一。後面十八章，就是耶穌過了汲淪溪，進了園子（18:1）。",
      en: "When Jesus has said these things he lifts up his eyes to heaven and says, “Father, the hour has come. Glorify your Son, that your Son may also glorify you” (17:1). Then he prays for his disciples: “I pray not that you would take them from the world, but that you would keep them from the evil one” (17:15); “Sanctify them in your truth. Your word is truth” (17:17). Then he prays for “those who believe in me through their word” (17:20): that they may all be one. The next chapter has Jesus crossing the Kidron and entering a garden (18:1)."
    },
    tip: {
      zh: "「合而為一」的意思（組織上的合一、愛與目的上的合一，或別的）各傳統有不同強調。",
      en: "What “one” means — organizational unity, unity in love and purpose, or something else — traditions emphasize differently."
    },
    related: ["the_helper", "vine_and_branches", "foot_washing", "what_is_truth"]
  },

  // ── 019 ──────────────────────────────────────────────────────────────────
  {
    id: "what_is_truth", book: "john", no: 19, kind: "person", type: "power", rarity: 4,
    zh: "彼拉多：真理是甚麼呢？", en: "Pilate: What Is Truth?",
    tag: { zh: "我的國不屬這世界", en: "My Kingdom Is Not of This World" },
    role: { zh: "總督府內外（18:28-19:16）", en: "In and out of the praetorium (18:28–19:16)" },
    ch: [18],
    passages: ["18:28-40"],
    moves: [
      { zh: "我的國不屬這世界", en: "My Kingdom Is Not of This World", ref: "18:36",
        dzh: "耶穌回答說：我的國不屬這世界；我的國若屬這世界，我的臣僕必要爭戰。",
        den: "Jesus answered, “My Kingdom is not of this world. If my Kingdom were of this world, then my servants would fight.”" },
      { zh: "給真理作見證", en: "To Testify to the Truth", ref: "18:37-38",
        dzh: "我為此而生，也為此來到世間，特為給真理作見證。彼拉多說：真理是甚麼呢？",
        den: "“For this reason I have come into the world, that I should testify to the truth.” Pilate said, “What is truth?”" }
    ],
    traits: [
      { k: "strength", zh: "進進出出，在耶穌與群眾之間來回", en: "Goes in and out between Jesus and the crowd" },
      { k: "weakness", zh: "問了真理，沒有等回答（18:38）", en: "Asks about truth and doesn’t wait for an answer (18:38)" }
    ],
    lesson: {
      zh: "約翰福音把審判寫成一個來回的場景：猶太人不進總督府（18:28），彼拉多出出入入七次。他問「真理是甚麼呢？」，然後「又出來到猶太人那裡」（18:38），沒有等耶穌的回答。",
      en: "John writes the trial as a back-and-forth: the Jews do not enter the praetorium (18:28), and Pilate goes out and in seven times. He asks “What is truth?” and then “went out again to the Jews” (18:38), not waiting for Jesus’s answer."
    },
    quote: { ref: "18:37",
      zh: "我為此而生，也為此來到世間，特為給真理作見證",
      en: "that I should testify to the truth" },
    keyVerses: ["18:28", "18:33", "18:36", "18:37", "18:38", "19:1", "19:9", "19:11", "19:15"],
    intro: {
      zh: "他們帶耶穌從該亞法那裡往衙門（和合本：總督府）去，那時天還早；他們自己卻不進衙門，恐怕染了污穢，不能吃逾越節的筵席（18:28）。彼拉多出來問「你是猶太人的王嗎？」（18:33）耶穌說「我的國不屬這世界」（18:36）；又說自己來是為給真理作見證，凡屬真理的人就聽他的話（18:37）。彼拉多問「真理是甚麼呢？」就出去對猶太人說「我查不出他有甚麼罪來」（18:38）。猶太人要巴拉巴（18:40）。",
      en: "They lead Jesus from Caiaphas to the Praetorium, and it was early; they themselves did not enter, so that they would not be defiled but might eat the Passover (18:28). Pilate comes out and asks, “Are you the King of the Jews?” (18:33). Jesus says, “My Kingdom is not of this world” (18:36), and says he came to testify to the truth, and everyone who is of the truth listens to his voice (18:37). Pilate asks, “What is truth?” and goes out to the Jews and says, “I find no basis for a charge against him” (18:38). The Jews want Barabbas (18:40)."
    },
    tip: {
      zh: "「真理是甚麼呢？」是真誠的問題、諷刺，或是不耐煩，經文沒有說明語氣。",
      en: "Whether “What is truth?” is sincere, ironic or impatient the text does not say."
    },
    related: ["priestly_prayer", "it_is_finished", "good_shepherd", "jesus_logos"]
  },

  // ── 020 ──────────────────────────────────────────────────────────────────
  {
    id: "it_is_finished", book: "john", no: 20, kind: "other", type: "love", rarity: 5,
    zh: "成了", en: "It Is Finished",
    tag: { zh: "看，你的兒子！看，你的母親！", en: "Behold, Your Son! Behold, Your Mother!" },
    role: { zh: "十字架旁（19:17-42）", en: "By the cross (19:17–42)" },
    ch: [19],
    passages: ["19:17-42"],
    moves: [
      { zh: "母親與愛徒", en: "Mother and Disciple", ref: "19:26-27",
        dzh: "耶穌見母親和他所愛的那門徒站在旁邊，就說：母親，看，你的兒子！又對那門徒說：看，你的母親！",
        den: "Jesus saw his mother and the disciple whom he loved standing by, and said, “Woman, behold, your son!” Then to the disciple, “Behold, your mother!”" },
      { zh: "成了", en: "It Is Finished", ref: "19:30",
        dzh: "耶穌嘗了那醋，就說：成了！便低下頭，將靈魂交付神了。",
        den: "When Jesus received the vinegar he said, “It is finished.” He bowed his head, and gave up his spirit." }
    ],
    traits: [
      { k: "strength", zh: "最後的話是「成了」，不是求救", en: "His last word is “It is finished,” not a cry for help" },
      { k: "identity", zh: "只有約翰福音記他把母親託付給愛徒", en: "Only John records him entrusting his mother to the beloved disciple" }
    ],
    lesson: {
      zh: "約翰福音裡的十字架，耶穌始終是主動的：他背著十字架自己走出去（19:17），在十字架上照顧母親（19:26-27），說「成了」（19:30），然後「低下頭，將靈魂交付」。與馬太、馬可記載的「為甚麼離棄我」不同，是約翰的特色。",
      en: "On John’s cross Jesus remains active: he goes out carrying his own cross (19:17), cares for his mother from the cross (19:26–27), says “It is finished” (19:30), then “bowed his head, and gave up his spirit.” Unlike Matthew and Mark’s “why have you forsaken me,” this is John’s distinctive note."
    },
    quote: { ref: "19:30",
      zh: "成了！」便低下頭，將靈魂交付神了",
      en: "It is finished.” He bowed his head, and gave up his spirit." },
    keyVerses: ["19:17", "19:19", "19:25", "19:26", "19:27", "19:28", "19:30", "19:34", "19:38", "19:39"],
    intro: {
      zh: "他們就把耶穌帶去。耶穌背著自己的十字架出來，到了一個地方，名叫髑髏地，希伯來話叫各各他（19:16-17）。站在十字架旁的，有他母親、他母親的姊妹、革羅罷的妻子馬利亞和抹大拉的馬利亞（19:25）。耶穌嘗了那醋，就說「成了！」（19:30）。兵丁中有一個拿槍扎他的肋旁，隨即有血和水流出來（19:34）。亞利馬太的約瑟和尼哥底母把他的身體用細麻布和香料裹好，安放在園子裡的新墳墓裡（19:38-42）。",
      en: "So they took Jesus. He went out, bearing his cross, to the place called “The Place of a Skull,” which is called in Hebrew “Golgotha” (19:16–17). By the cross stood his mother, his mother’s sister, Mary the wife of Clopas, and Mary Magdalene (19:25). When Jesus received the vinegar he said, “It is finished” (19:30). One of the soldiers pierced his side with a spear, and immediately blood and water came out (19:34). Joseph of Arimathea and Nicodemus wrap his body in linen with spices and lay him in a new tomb in the garden (19:38–42)."
    },
    tip: {
      zh: "「成了」（tetelestai）也可譯作「完成了」「付清了」；它的涵義各傳統有不同強調。",
      en: "“It is finished” (tetelestai) can also be “accomplished” or “paid in full”; traditions emphasize its sense differently."
    },
    related: ["what_is_truth", "mary_at_tomb", "nicodemus", "foot_washing"]
  },

  // ── 021 ──────────────────────────────────────────────────────────────────
  {
    id: "mary_at_tomb", book: "john", no: 21, kind: "person", type: "love", rarity: 5,
    zh: "抹大拉的馬利亞", en: "Mary Magdalene at the Tomb",
    tag: { zh: "耶穌說：馬利亞。她就轉過來", en: "Jesus Said, “Mary.” She Turned" },
    role: { zh: "復活清早的園子（20:1-18）", en: "The garden at the resurrection dawn (20:1–18)" },
    ch: [20],
    passages: ["20:1-18"],
    moves: [
      { zh: "耶穌說：馬利亞", en: "“Mary”", ref: "20:16",
        dzh: "耶穌說：馬利亞。馬利亞就轉過來，用希伯來話對他說：拉波尼！",
        den: "Jesus said to her, “Mary.” She turned and said to him, “Rabboni!”" },
      { zh: "告訴我的弟兄", en: "Go to My Brothers", ref: "20:17-18",
        dzh: "耶穌說：你往我弟兄那裡去，告訴他們。抹大拉的馬利亞就去告訴門徒：我已經看見了主。",
        den: "“Go to my brothers, and tell them…” Mary Magdalene went and told the disciples, “I have seen the Lord.”" }
    ],
    traits: [
      { k: "strength", zh: "最早看見空墳墓，最早被叫名字", en: "First at the empty tomb; first called by name" },
      { k: "weakness", zh: "把他當作管園子的（20:15）", en: "Mistakes him for the gardener (20:15)" }
    ],
    lesson: {
      zh: "她在墳墓外哭，兩次被問「你為甚麼哭？」（20:13、15）。認出他，不是因為看見，而是因為被叫了名字：「馬利亞。」（20:16）她成為第一個被差遣去報信的人：「我已經看見了主」（20:18）。",
      en: "She weeps outside the tomb and is asked twice, “Why are you weeping?” (20:13, 15). She recognizes him not by sight but by being called by name: “Mary” (20:16). She becomes the first sent to tell: “I have seen the Lord” (20:18)."
    },
    quote: { ref: "20:16",
      zh: "馬利亞就轉過來，用希伯來話對他說：「拉波尼！」",
      en: "She turned and said to him, “Rabboni!”" },
    keyVerses: ["20:1", "20:2", "20:11", "20:13", "20:15", "20:16", "20:17", "20:18"],
    intro: {
      zh: "七日的頭一日清早，天還黑的時候，抹大拉的馬利亞來到墳墓那裡，看見石頭從墳墓挪開了（20:1）。她跑去告訴西門彼得和耶穌所愛的那門徒；兩人跑去，看見細麻布和裹頭巾（20:2-8）。他們走後，馬利亞站在墳墓外面哭；她彎著腰往裡看，見兩個天使坐在放過耶穌身體的地方（20:11-12）。她轉過身來，看見耶穌站著，卻不知道是耶穌，以為是管園的（20:14-15）。耶穌說「不要摸我，因我還沒有升上去見我的父」（20:17）；「不要摸我」的語氣，注釋書有不同說法。",
      en: "On the first day of the week, early, while it was still dark, Mary Magdalene comes to the tomb and sees the stone taken away (20:1). She runs to tell Simon Peter and the disciple whom Jesus loved; the two run and see the linen cloths and the head cloth (20:2–8). After they leave, Mary stands outside the tomb weeping; she stoops and looks in and sees two angels sitting where Jesus’s body had lain (20:11–12). She turns and sees Jesus standing, but doesn’t know it is Jesus, and thinks he is the gardener (20:14–15). Jesus says, “Don’t hold me, for I haven’t yet ascended to my Father” (20:17); the tone of “don’t hold me” commentaries explain in different ways."
    },
    tip: {
      zh: "「不要摸我」的原文有「不要緊緊抓住我」的意思；為甚麼不許摸，注釋書有不同說法。",
      en: "The Greek of “don’t hold me” carries a sense of “don’t keep clinging to me”; why she must not hold him commentaries explain differently."
    },
    related: ["thomas_doubt", "it_is_finished", "lazarus_raised", "charcoal_breakfast"]
  },

  // ── 022 ──────────────────────────────────────────────────────────────────
  {
    id: "thomas_doubt", book: "john", no: 22, kind: "person", type: "faith", rarity: 5,
    zh: "多馬", en: "Thomas",
    meaning: { zh: "「雙生子」，又稱低土馬", en: "“Twin,” also called Didymus" },
    tag: { zh: "我的主！我的神！", en: "My Lord and My God!" },
    role: { zh: "十二門徒之一（20:24-29）", en: "One of the Twelve (20:24–29)" },
    ch: [11, 14, 20],
    passages: ["11:16", "14:5", "20:24-29"],
    moves: [
      { zh: "我總不信", en: "I Will Not Believe", ref: "20:25",
        dzh: "多馬說：我非看見他手上的釘痕，用指頭探入那釘痕，用手探入他的肋旁，我總不信。",
        den: "Thomas said, “Unless I see in his hands the print of the nails, and put my finger into the print of the nails, and put my hand into his side, I will not believe.”" },
      { zh: "我的主！我的神！", en: "My Lord and My God!", ref: "20:28-29",
        dzh: "多馬說：我的主！我的神！耶穌說：你因看見了我才信；那沒有看見就信的有福了。",
        den: "Thomas answered, “My Lord and my God!” Jesus: “Because you have seen me, you have believed. Blessed are those who have not seen, and have believed.”" }
    ],
    traits: [
      { k: "strength", zh: "誠實：要證據，也承認", en: "Honest: asks for evidence, then confesses" },
      { k: "weakness", zh: "不在場，聽見的人說了也不信（20:24-25）", en: "Absent, and does not believe what he is told (20:24–25)" }
    ],
    lesson: {
      zh: "多馬的三次出現都很直接：「我們也去和他同死吧」（11:16）、「我們不知道你往哪裡去」（14:5）、「我總不信」（20:25）。第八天耶穌再來，沒有責備，只是把手給他看（20:27）；他的認信「我的主！我的神！」是全書最高的一句（20:28）。",
      en: "Thomas’s three appearances are all blunt: “Let’s also go, that we may die with him” (11:16), “we don’t know where you are going” (14:5), “I will not believe” (20:25). On the eighth day Jesus comes again, not rebuking but showing his hands (20:27); Thomas’s confession “My Lord and my God!” is the book’s highest (20:28)."
    },
    quote: { ref: "20:28",
      zh: "我的主！我的神！",
      en: "My Lord and my God!" },
    keyVerses: ["11:16", "14:5", "20:24", "20:25", "20:26", "20:27", "20:28", "20:29"],
    intro: {
      zh: "耶穌來的時候，十二個門徒中的一個，稱為低土馬的多馬沒有和他們同在（20:24）。其他門徒對他說「我們已經看見主了」，他說「我非看見他手上的釘痕，……我總不信」（20:25）。過了八日，門徒又在屋裡，門都關了，耶穌來，站在當中，說「願你們平安」，又對多馬說「伸過你的指頭來，摸我的手；伸出你的手來，探入我的肋旁。不要疑惑，總要信！」（20:26-27）20:29 的「那沒有看見就信的有福了」，是對後來所有讀這卷書的人說的。",
      en: "When Jesus came, Thomas, one of the twelve, called Didymus, was not with them (20:24). The other disciples said to him, “We have seen the Lord,” and he said, “Unless I see in his hands the print of the nails… I will not believe” (20:25). After eight days the disciples were again inside with the doors locked, and Jesus came and stood in the middle and said, “Peace be to you,” and to Thomas, “Reach here your finger, and see my hands. Reach here your hand, and put it into my side. Don’t be unbelieving, but believing” (20:26–27). “Blessed are those who have not seen, and have believed” (20:29) is for all who later read this book."
    },
    tip: {
      zh: "經文沒有說多馬真的把手探入了；他一見耶穌就認信了。",
      en: "The text does not say Thomas actually put his hand in; he confesses as soon as he sees Jesus."
    },
    related: ["mary_at_tomb", "way_truth_life", "charcoal_breakfast", "jesus_logos"]
  },

  // ── 023 ──────────────────────────────────────────────────────────────────
  {
    id: "charcoal_breakfast", book: "john", no: 23, kind: "other", type: "harvest", rarity: 4,
    zh: "湖邊的炭火與早飯", en: "Breakfast on the Beach",
    tag: { zh: "你們來吃早飯", en: "Come and Eat Breakfast" },
    role: { zh: "提比哩亞海邊（21:1-14）", en: "By the Sea of Tiberias (21:1–14)" },
    ch: [21],
    passages: ["21:1-14"],
    moves: [
      { zh: "撒在船的右邊", en: "Cast on the Right Side", ref: "21:4-6",
        dzh: "天將亮的時候，耶穌站在岸上，門徒卻不知道是耶穌；他說：你們把網撒在船的右邊，就必得著。",
        den: "Day had come and Jesus stood on the beach, yet the disciples didn’t know it was Jesus; he said, “Cast the net on the right side of the boat, and you will find some.”" },
      { zh: "來吃早飯", en: "Come and Eat", ref: "21:9-13",
        dzh: "他們上了岸，看見那裡有炭火，上面有魚，又有餅。耶穌說：你們來吃早飯。",
        den: "On land they saw a fire of coals, with fish laid on it, and bread. Jesus said, “Come and eat breakfast.”" }
    ],
    traits: [
      { k: "strength", zh: "復活的主親自預備早飯", en: "The risen Lord himself prepares breakfast" },
      { k: "identity", zh: "一百五十三條魚，網卻沒有破（21:11）", en: "A hundred fifty-three fish, and the net not torn (21:11)" }
    ],
    lesson: {
      zh: "這是約翰福音最溫柔的一幕：復活的耶穌在岸上生了炭火，烤魚，並叫門徒來吃（21:9-12）。「門徒中沒有一個敢問他：『你是誰？』因為知道是主。」（21:12）",
      en: "It is John’s gentlest scene: the risen Jesus has built a charcoal fire on the shore, cooking fish, and calls the disciples to eat (21:9–12). “None of the disciples dared inquire of him, ‘Who are you?’ knowing that it was the Lord” (21:12)."
    },
    quote: { ref: "21:12",
      zh: "耶穌說：「你們來吃早飯。」",
      en: "Jesus said to them, “Come and eat breakfast.”" },
    keyVerses: ["21:1", "21:3", "21:4", "21:6", "21:7", "21:9", "21:11", "21:12", "21:13"],
    intro: {
      zh: "這些事以後，耶穌在提比哩亞海邊又向門徒顯現（21:1）。有西門彼得、稱為低土馬的多馬、加利利迦拿的拿但業、西庇太的兩個兒子，還有兩個門徒，在一處（21:2）。彼得說「我打魚去」，他們也說「我們也和你同去」；那一夜沒有打著甚麼（21:3）。天將亮的時候，耶穌站在岸上；耶穌所愛的那門徒對彼得說「是主！」，彼得就束上外衣，跳在海裡（21:4-7）。網裡有一百五十三條大魚（21:11）。「一百五十三」這個數字的象徵意義，經文沒有說明。",
      en: "After these things Jesus revealed himself again to the disciples at the Sea of Tiberias (21:1). Simon Peter, Thomas called Didymus, Nathanael of Cana in Galilee, the sons of Zebedee, and two others of his disciples were together (21:2). Peter says, “I’m going fishing,” and they say, “We are also coming with you”; that night they caught nothing (21:3). When day is breaking Jesus stands on the beach; the disciple whom Jesus loved says to Peter, “It’s the Lord!” and Peter wraps his coat around him and throws himself into the sea (21:4–7). The net is full of one hundred fifty-three large fish (21:11). What the number 153 symbolizes the text does not say."
    },
    tip: {
      zh: "「一百五十三」是否象徵甚麼，注釋書有許多推測；經文只說了數目，和網沒有破。",
      en: "Whether “153” symbolizes anything commentaries speculate widely; the text gives only the number and that the net was not torn."
    },
    related: ["peter_restored", "thomas_doubt", "mary_at_tomb", "nathanael"]
  },

  // ── 024 ──────────────────────────────────────────────────────────────────
  {
    id: "peter_restored", book: "john", no: 24, kind: "person", type: "love", rarity: 5,
    zh: "彼得三次被問「你愛我嗎」", en: "Peter Asked Three Times",
    tag: { zh: "你餵養我的羊", en: "Feed My Sheep" },
    role: { zh: "全書的最後一幕（21:15-25）", en: "The last scene of the book (21:15–25)" },
    ch: [21],
    passages: ["21:15-25"],
    moves: [
      { zh: "你愛我比這些更深嗎", en: "Do You Love Me More Than These?", ref: "21:15",
        dzh: "吃完了早飯，耶穌對西門彼得說：你愛我比這些更深嗎？彼得說：主啊，是的，你知道我愛你。耶穌說：你餵養我的小羊。",
        den: "After breakfast Jesus said to Simon Peter, “Do you love me more than these?” “Yes, Lord; you know that I have affection for you.” “Feed my lambs.”" },
      { zh: "你是無所不知的", en: "You Know Everything", ref: "21:17",
        dzh: "第三次問他，彼得就憂愁，說：主啊，你是無所不知的；你知道我愛你。耶穌說：你餵養我的羊。",
        den: "The third time Peter was grieved: “Lord, you know everything. You know that I have affection for you.” Jesus said, “Feed my sheep.”" }
    ],
    traits: [
      { k: "strength", zh: "三次不認，換來三次被託付", en: "Three denials answered with three commissions" },
      { k: "weakness", zh: "「彼得因為耶穌第三次說你愛我嗎，就憂愁」（21:17）", en: "“Peter was grieved because he asked him the third time” (21:17)" }
    ],
    lesson: {
      zh: "三次問，對應三次不認（18:17、25、27）；炭火在 18:18 與 21:9 都出現。耶穌沒有責備，也沒有要彼得解釋，只問愛，並託付羊群。然後他說了彼得將來的結局，最後一句是「你跟從我吧」（21:19）。",
      en: "Three questions answer three denials (18:17, 25, 27); a charcoal fire appears at 18:18 and 21:9. Jesus does not rebuke or ask Peter to explain; he asks about love and entrusts the flock. He then says what Peter’s end will be, with the last words “Follow me” (21:19)."
    },
    quote: { ref: "21:17",
      zh: "主啊，你是無所不知的；你知道我愛你",
      en: "Lord, you know everything. You know that I have affection for you." },
    keyVerses: ["21:15", "21:16", "21:17", "21:18", "21:19", "21:20", "21:22", "21:24", "21:25"],
    intro: {
      zh: "他們吃完了早飯，耶穌對西門彼得說：「約翰的兒子西門，你愛我比這些更深嗎？」（21:15）三次問，彼得三次答「主啊，你知道我愛你」；耶穌說「你餵養我的小羊」「你牧養我的羊」「你餵養我的羊」（21:15-17）。希臘文中，耶穌前兩次用的「愛」（agapao）與彼得用的「愛」（phileo）是兩個字，第三次耶穌改用彼得的字；這個變化是否有意，注釋書看法不一。21:24-25 是全書的結尾，說作者是「那門徒」，書上沒有寫的事還有許多。",
      en: "When they had eaten breakfast, Jesus said to Simon Peter, “Simon, son of Jonah, do you love me more than these?” (21:15). Three questions, and three times Peter answers “Lord, you know that I love you”; Jesus says “Feed my lambs,” “Tend my sheep,” “Feed my sheep” (21:15–17). In the Greek the first two times Jesus’s “love” (agapao) and Peter’s “love” (phileo) are different words, and the third time Jesus uses Peter’s word; whether the change is deliberate commentaries disagree. Verses 24–25 close the book, saying the author is “this disciple” and that many other things are not written."
    },
    tip: {
      zh: "「愛」的兩個希臘字（agapao 與 phileo）的差別是否有意，注釋書看法不一；有些認為只是文字的變化。",
      en: "Whether the difference between the two Greek words for “love” is deliberate commentaries disagree; some think it is only stylistic variation."
    },
    related: ["charcoal_breakfast", "good_shepherd", "foot_washing", "thomas_doubt"]
  }

);
