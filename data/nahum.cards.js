// 聖經人物卡 · 那鴻書 (Nahum) — book info + cards.
// Verse text comes from data/nahum.text.js (和合本 + World English Bible, both public domain) and the 當代譯本 layer in
// data/nahum.ccb.js; `quote.zh` / `quote.en` are excerpts that scripts/validate.js checks against the first two. External
// references (Exod 34:6-7; Isa 52:7; Rom 10:15; Jonah 1:2, 3:5-10, 4:2, 4:11; Gen 10:11-12; Zeph 2:13-15; 2 Kgs 19:35-37;
// Jer 46:25; Joel 1:4) were checked against the 和合本 text and appear in prose only.
// Flagged rather than decided: the book's date (the text only shows that No-Amon has fallen and Nineveh has not), where
// Elkosh was, who "he who dashes in pieces" is (2:1), who the "one" of 1:11 is, the wording of 2:7, and the "prostitute"
// figure of 3:4 (CUV note: the original says "sells").

window.BOOKS.push({
  id: "nahum",
  zh: "那鴻書", en: "Nahum", abbr: { zh: "鴻", en: "Nah" },
  order: 34, section: { zh: "先知書", en: "Prophets" },
  chapters: 3,
  fan: ["slow_to_anger", "nahum", "feet_on_mountains"],
  summary: {
    zh: "那鴻書只有三章，整卷是對一座城說的話：尼尼微（1:1）。第 1 章像頌詞，也像判詞：耶和華是忌邪施報的神，不輕易發怒，卻萬不以有罪的為無罪（1:2-3）；祂本為善，是投靠者的保障（1:7）；對尼尼微祂要折斷軛、除滅偶像（1:12-14），對猶大卻是好消息——報信之人的腳登山（1:15）。第 2 章寫攻城：打碎邦國的上來，河閘開放，宮殿沖沒（2:1-6），獅子的洞變為空虛（2:11-13）。第 3 章再數城的罪狀：流人血的城（3:1），並以挪亞們的陷落為前車之鑑（3:8-10），最後以一個問句收結（3:19）。書中沒有寫作年份；3:8 把挪亞們的陷落當作過去的事，而尼尼微還沒有傾覆。",
    en: "Nahum has three chapters, and all of it is addressed to one city: Nineveh (1:1). Chapter 1 reads like a hymn and a verdict together: Yahweh is a jealous God who avenges, slow to anger yet who will by no means leave the guilty unpunished (1:2–3); he is good, a stronghold for those who take refuge in him (1:7); for Nineveh he will break the yoke and cut off the idols (1:12–14), but for Judah it is good news — the feet of the messenger on the mountains (1:15). Chapter 2 pictures the assault: he who dashes in pieces comes up, the river gates are opened, the palace dissolves (2:1–6), and the lions’ den is empty (2:11–13). Chapter 3 lists the city’s crimes again — the bloody city (3:1) — and holds up the fall of No-Amon as a warning (3:8–10), ending on a question (3:19). The book gives no date; 3:8 treats No-Amon’s fall as past while Nineveh has not yet fallen."
  },
  outline: [
    { zh: "忌邪施報的神；耶和華本為善；折斷軛；報好信的腳", en: "The jealous, avenging God; Yahweh is good; the yoke broken; the feet of the messenger" },
    { zh: "打碎邦國的上來；河閘開放；獅子的洞在哪裡", en: "He who dashes in pieces; the river gates open; where is the lions’ den?" },
    { zh: "流人血的城；挪亞們的前例；無花果與蝗蟲；牧人睡了", en: "The bloody city; the lesson of No-Amon; figs and locusts; the shepherds sleep" }
  ],
  notes: {
    zh: "小提示：約拿書裡的尼尼微悔改而蒙憐憫（拿 3:5-10），那鴻書裡同一座城被審判；兩卷書都用了「不輕易發怒」的話（拿 4:2；鴻 1:3），兩卷之間隔了多久，經文沒有說。另外，英文與中文聖經的 1:15，在希伯來文聖經裡是 2:1，所以不同版本的章節會差一節。",
    en: "Good to know: in Jonah, Nineveh repents and is spared (Jonah 3:5–10); in Nahum the same city is judged. Both books use the words “slow to anger” (Jonah 4:2; Nahum 1:3), and the text does not say how much time lies between them. Also, English and Chinese 1:15 is 2:1 in the Hebrew Bible, so chapter and verse numbers may shift by one in some editions."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "nahum", book: "nahum", no: 1, kind: "person", type: "vision", rarity: 6,
    zh: "那鴻", en: "Nahum",
    meaning: { zh: "「安慰」", en: "“Comfort”" },
    tag: { zh: "對尼尼微的判詞，對猶大的安慰", en: "A Verdict for Nineveh, Comfort for Judah" },
    role: { zh: "伊勒歌斯人・先知", en: "Elkoshite prophet" },
    ch: [1, 3],
    passages: ["1:1", "1:15", "3:19"],
    moves: [
      { zh: "伊勒歌斯人那鴻", en: "Nahum the Elkoshite", ref: "1:1",
        dzh: "他所得的默示專論尼尼微，書名就是「論尼尼微的默示」。",
        den: "His vision is about Nineveh alone; the book opens, “A revelation about Nineveh.”" },
      { zh: "向猶大報信", en: "Good News for Judah", ref: "1:15",
        dzh: "他向猶大報信：可以守節期、還所許的願，因為惡人已滅絕。",
        den: "He tells Judah to keep its feasts and perform its vows, for the wicked one is cut off." }
    ],
    traits: [
      { k: "strength", zh: "把審判說成對受苦者的安慰", en: "Turns a judgment into comfort for the oppressed" },
      { k: "identity", zh: "名字的意思是「安慰」", en: "His name means “comfort”" }
    ],
    lesson: {
      zh: "那鴻的名字意思是「安慰」；整卷書是對尼尼微的審判，對猶大卻是好消息（1:12-13、15）。審判和安慰，在這卷書裡是同一件事的兩面。",
      en: "Nahum’s name means “comfort”; the whole book is a judgment on Nineveh, yet good news for Judah (1:12–13, 15). Judgment and comfort are two sides of the same event here."
    },
    quote: { ref: "1:1",
      zh: "論尼尼微的默示，就是伊勒歌斯人那鴻所得的默示",
      en: "A revelation about Nineveh. The book of the vision of Nahum the Elkoshite." },
    keyVerses: ["1:1", "1:15", "3:19"],
    intro: {
      zh: "那鴻書的第一句就交代了對象：「論尼尼微的默示」，作者是「伊勒歌斯人那鴻」（1:1）。伊勒歌斯在哪裡，經文沒有說，後世有多種說法（猶大境內、加利利，或亞述境內的地方），都沒有定論。書中也沒有列出猶大哪一位王在位。學者多從兩個線索推算時間：3:8 把挪亞們（底比斯）的陷落當作已經發生的事，歷史上這發生在主前 663 年左右；尼尼微在書中仍未傾覆，歷史上它在主前 612 年被攻陷。所以書通常被放在這兩個年份之間；這是推算，不是經文自己的話。那鴻的名字在希伯來文有「安慰」的意思，與書中對猶大的話相合：「我雖然使你受苦，卻不再使你受苦」（1:12）。",
      en: "The first line of the book names its subject and its author: “A revelation about Nineveh,” the vision of “Nahum the Elkoshite” (1:1). Where Elkosh was the text does not say; later traditions offer several places (in Judah, in Galilee, or in Assyrian territory) and none is settled. The book also lists no king of Judah. Scholars usually date it from two clues: 3:8 treats the fall of No-Amon (Thebes) as already past, which history places around 663 BC, while Nineveh has not yet fallen, which history places in 612 BC. So the book is commonly set between those years; that is an inference, not the text’s own statement. Nahum’s name means “comfort” in Hebrew, which fits the word to Judah: “Though I have afflicted you, I will afflict you no more” (1:12)."
    },
    tip: {
      zh: "那鴻書的年代是推算出來的：3:8 提到挪亞們已被攻陷，而尼尼微仍未傾覆。伊勒歌斯的位置則不確定。",
      en: "The book’s date is inferred: 3:8 speaks of No-Amon as already fallen while Nineveh still stands. The location of Elkosh is uncertain."
    },
    related: ["slow_to_anger", "yoke_broken", "feet_on_mountains", "no_amon", "no_healing"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "slow_to_anger", book: "nahum", no: 2, kind: "other", type: "power", rarity: 5,
    zh: "忌邪施報的神", en: "The Jealous God Who Avenges",
    tag: { zh: "不輕易發怒，卻萬不以有罪的為無罪", en: "Slow to Anger, Yet Never Clearing the Guilty" },
    role: { zh: "開場的頌詞（1:2-6）", en: "The opening hymn (1:2–6)" },
    ch: [1],
    passages: ["1:2-6"],
    moves: [
      { zh: "忌邪施報", en: "Jealous and Avenging", ref: "1:2",
        dzh: "耶和華是忌邪施報的神，向他的敵人施報，向他的仇敵懷怒。",
        den: "Yahweh is a jealous God who avenges; he takes vengeance on his adversaries." },
      { zh: "不輕易發怒", en: "Slow to Anger", ref: "1:3",
        dzh: "他不輕易發怒，大有能力，萬不以有罪的為無罪。",
        den: "He is slow to anger and great in power, and will by no means leave the guilty unpunished." }
    ],
    traits: [
      { k: "strength", zh: "風暴、大海、群山都在他面前", en: "Storm, sea and mountains all answer to him" },
      { k: "weakness", zh: "只讀這幾節，會漏掉 1:7", en: "Read alone, these verses miss 1:7" }
    ],
    lesson: {
      zh: "「不輕易發怒」與「萬不以有罪的為無罪」在同一節裡並排（1:3）：耐心不是放縱。同樣的話在出埃及記 34:6-7 和約拿書 4:2 也有。",
      en: "“Slow to anger” and “will by no means leave the guilty unpunished” stand side by side in one verse (1:3): patience is not permissiveness. The same words appear in Exodus 34:6–7 and Jonah 4:2."
    },
    quote: { ref: "1:3",
      zh: "耶和華不輕易發怒，大有能力，萬不以有罪的為無罪",
      en: "slow to anger, and great in power, and will by no means leave the guilty unpunished" },
    keyVerses: ["1:2", "1:3", "1:5", "1:6"],
    intro: {
      zh: "1:1 之後，書的第一個描寫是對耶和華的：「忌邪施報的神」，「施報大有忿怒」（1:2）。「忌邪」是說祂要求獨一的忠誠，不容別的對象與祂並列；「施報」是說祂親自處理不義，而不是留給人。1:3 把兩件事放在一起：「不輕易發怒，大有能力，萬不以有罪的為無罪」。這和出埃及記 34:6-7 耶和華向摩西宣告自己的話同出一源：「有憐憫有恩典的神，不輕易發怒，……萬不以有罪的為無罪」；約拿也在禱告裡引過它（拿 4:2）。那鴻把這段話用在尼尼微面前。接著是風暴的畫面：祂乘旋風和暴風而來，雲彩為祂腳下的塵土（1:3）；斥責海，使海乾了（1:4）；大山震動，小山消化（1:5）。然後是一個問句：「他發忿恨，誰能立得住呢？」（1:6）",
      en: "After 1:1, the book’s first description is of Yahweh: “a jealous God” who “avenges” and is “full of wrath” (1:2). “Jealous” means he claims exclusive loyalty and tolerates no rival; “avenges” means he himself deals with injustice rather than leaving it to people. Verse 3 sets two things together: “slow to anger, and great in power, and will by no means leave the guilty unpunished.” These come from the same words Yahweh spoke of himself to Moses in Exodus 34:6–7 — “a merciful and gracious God, slow to anger… who will by no means clear the guilty” — which Jonah also quoted in prayer (Jonah 4:2). Nahum sets them in front of Nineveh. Then comes the storm: he comes in the whirlwind, the clouds the dust of his feet (1:3); he rebukes the sea and dries it up (1:4); the mountains quake and the hills melt (1:5). Then a question: “Who can stand before his indignation?” (1:6)."
    },
    tip: {
      zh: "有學者認為 1:2-8 的開頭是一首殘缺的字母詩（每行頭一個字母依希伯來字母順序），中文譯文看不出來。這是學術上的看法，經文沒有說明。",
      en: "Some scholars think 1:2–8 begins as a partly preserved alphabetic poem (successive lines starting with successive Hebrew letters); it cannot be seen in translation. That is a scholarly proposal, not something the text says."
    },
    related: ["yahweh_good", "nahum", "nineveh_plot", "bloody_city"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "yahweh_good", book: "nahum", no: 3, kind: "heavenly", type: "love", rarity: 5,
    zh: "耶和華本為善", en: "Yahweh Is Good",
    tag: { zh: "患難日子的保障", en: "A Stronghold in the Day of Trouble" },
    role: { zh: "風暴中的一句話（1:7-8）", en: "A line in the middle of the storm (1:7–8)" },
    ch: [1],
    passages: ["1:7-8"],
    moves: [
      { zh: "患難中的保障", en: "A Stronghold", ref: "1:7",
        dzh: "耶和華本為善，在患難的日子為人的保障，認得投靠他的人。",
        den: "Yahweh is good, a stronghold in the day of trouble; he knows those who take refuge in him." },
      { zh: "漲溢的洪水", en: "An Overflowing Flood", ref: "1:8",
        dzh: "但他必以漲溢的洪水淹沒尼尼微，又驅逐仇敵進入黑暗。",
        den: "But with an overflowing flood he will make a full end of her place, and pursue his enemies into darkness." }
    ],
    traits: [
      { k: "strength", zh: "認得每一個投靠他的人", en: "Knows each one who takes refuge in him" },
      { k: "identity", zh: "善與審判寫在相鄰的兩節", en: "Goodness and judgment sit in neighboring verses" }
    ],
    lesson: {
      zh: "同一位神，對投靠的人是保障，對與祂為敵的人是洪水；那鴻不把「善」和「審判」分開（1:7-8）。",
      en: "The same God is a stronghold to those who take refuge in him and a flood to his enemies; Nahum never separates his goodness from his judgment (1:7–8)."
    },
    quote: { ref: "1:7",
      zh: "耶和華本為善，在患難的日子為人的保障，並且認得那些投靠他的人",
      en: "a stronghold in the day of trouble; and he knows those who take refuge in him" },
    keyVerses: ["1:7", "1:8"],
    intro: {
      zh: "在六節風暴一般的描寫之後，1:7 忽然放低聲音：「耶和華本為善，在患難的日子為人的保障，並且認得那些投靠他的人。」「認得」在聖經裡常有熟識、看顧的意思，不只是知道名字。但下一節立刻接上：「但他必以漲溢的洪水淹沒尼尼微，又驅逐仇敵進入黑暗」（1:8）。1:7 的善沒有取消 1:2 的施報；兩者放在一起，才是這卷書對神的完整描述。洪水的畫面日後在 2:6 重現：「河閘開放，宮殿沖沒」。",
      en: "After six verses of storm, 1:7 lowers its voice: “Yahweh is good, a stronghold in the day of trouble; and he knows those who take refuge in him.” “Knows” in the Bible often carries the sense of being acquainted with and watching over, not just knowing a name. But the next verse follows at once: “with an overflowing flood, he will make a full end of her place, and will pursue his enemies into darkness” (1:8). The goodness of 1:7 does not cancel the vengeance of 1:2; set together, they make the book’s whole picture of God. The flood returns in 2:6: “The gates of the rivers are opened, and the palace is dissolved.”"
    },
    tip: {
      zh: "「漲溢的洪水」是字面的水災，還是審判的比喻？2:6 的「河閘開放」可以兩樣都對得上，經文沒有說明，你所在教會的解經可作參考。",
      en: "Is the “overflowing flood” literal water or a figure for judgment? 2:6, “the gates of the rivers are opened,” fits either; the text does not decide."
    },
    related: ["slow_to_anger", "nineveh_plot", "river_gates", "yoke_broken"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "nineveh_plot", book: "nahum", no: 4, kind: "person", type: "scheme", rarity: 3,
    zh: "設計攻擊耶和華的城", en: "The City That Plots Against Yahweh",
    tag: { zh: "勢力充足，人數繁多，仍被剪除", en: "Full Strength, Many in Number — Still Cut Down" },
    role: { zh: "尼尼微的圖謀（1:9-11）", en: "Nineveh’s scheming (1:9–11)" },
    ch: [1],
    passages: ["1:9-11"],
    moves: [
      { zh: "設何謀攻擊耶和華", en: "A Plot Against Yahweh", ref: "1:9",
        dzh: "尼尼微人哪，設何謀攻擊耶和華呢？他必將你們滅絕淨盡。",
        den: "“What do you plot against Yahweh?” He will make a full end; affliction won’t rise up a second time." },
      { zh: "荊棘與碎秸", en: "Thorns and Stubble", ref: "1:10",
        dzh: "你們像叢雜的荊棘，像喝醉了的人，又如枯乾的碎秸全然燒滅。",
        den: "Entangled like thorns and drunk with their drink, they are consumed like dry stubble." }
    ],
    traits: [
      { k: "strength", zh: "勢力充足，人數繁多（1:12）", en: "In full strength and many (1:12)" },
      { k: "weakness", zh: "與耶和華為敵", en: "Set against Yahweh himself" }
    ],
    lesson: {
      zh: "「勢力充足，人數繁多，也被剪除」（1:12）：人的計謀再多，也算不進耶和華的決定裡。",
      en: "“Though they be in full strength, and likewise many, even so they will be cut down” (1:12): human schemes, however many, are not weighed in Yahweh’s decision."
    },
    quote: { ref: "1:9",
      zh: "尼尼微人哪，設何謀攻擊耶和華呢？他必將你們滅絕淨盡",
      en: "What do you plot against Yahweh? He will make a full end." },
    keyVerses: ["1:9", "1:10", "1:11", "1:12"],
    intro: {
      zh: "第 1 章的中段從頌詞轉回尼尼微：「尼尼微人哪，設何謀攻擊耶和華呢？」（1:9）他們的計謀不只是對猶大，而是對耶和華本身。「災難不再興起」可有兩種讀法：審判一次就徹底，不用再來第二次；或是亞述不能再給猶大帶來災難。1:10 的畫面是荊棘、醉漢、枯乾的碎秸，三樣都是一點火就燒光的東西。1:11「有一人從你那裡出來，圖謀邪惡，設惡計攻擊耶和華」，指的是誰，經文沒有點名；有人讀作亞述王，如西拿基立（參王下 19:35-37），有人讀作一個泛指的人。1:12 說他們「勢力充足，人數繁多」，仍被剪除。",
      en: "The middle of chapter 1 turns from the hymn back to Nineveh: “What do you plot against Yahweh?” (1:9). The plotting is not only against Judah but against Yahweh himself. “Affliction won’t rise up the second time” can be read two ways: the judgment will be complete, so there will be no second round; or Assyria will not again bring affliction on Judah. The pictures in 1:10 — thorns, a drunk, dry stubble — are all things a single spark destroys. In 1:11, “one gone out of you, who devises evil against Yahweh,” the text names no one; some read it as an Assyrian king such as Sennacherib (compare 2 Kings 19:35–37), others as a general figure. Verse 12 says they are “in full strength, and likewise many,” yet will be cut down."
    },
    tip: {
      zh: "1:9 的「災難不再興起」和 1:11 的「有一人」，各有不同讀法，經文沒有點明。",
      en: "“Affliction won’t rise up the second time” (1:9) and “one gone out of you” (1:11) both have more than one reading; the text does not say which."
    },
    related: ["slow_to_anger", "yahweh_good", "yoke_broken", "dasher"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "yoke_broken", book: "nahum", no: 5, kind: "other", type: "faith", rarity: 4,
    zh: "折斷的軛", en: "The Broken Yoke",
    tag: { zh: "「我雖然使你受苦，卻不再使你受苦」", en: "“I Will Afflict You No More”" },
    role: { zh: "對猶大的應許（1:12-14）", en: "A promise to Judah (1:12–14)" },
    ch: [1],
    passages: ["1:12-14"],
    moves: [
      { zh: "不再使你受苦", en: "No More Affliction", ref: "1:12",
        dzh: "猶大啊，我雖然使你受苦，卻不再使你受苦。",
        den: "“Though I have afflicted you, I will afflict you no more.”" },
      { zh: "折斷軛，扭開繩索", en: "Yoke Broken, Bonds Burst", ref: "1:13",
        dzh: "現在我必從你頸項上折斷他的軛，扭開他的繩索。",
        den: "“Now will I break his yoke from off you, and will burst your bonds apart.”" }
    ],
    traits: [
      { k: "strength", zh: "苦難有終點", en: "Affliction has an end" },
      { k: "identity", zh: "同一段話裡，對猶大說「你」，對尼尼微說「你」", en: "One passage addresses both Judah and Nineveh as “you”" }
    ],
    lesson: {
      zh: "對猶大，尼尼微的倒下不是新聞，是釋放：「折斷他的軛，扭開他的繩索」（1:13）。連使猶大受苦的，神也承認是祂（1:12）。",
      en: "For Judah the fall of Nineveh is not mere news but release: “break his yoke… burst your bonds” (1:13). Yahweh even owns that it was he who afflicted Judah (1:12)."
    },
    quote: { ref: "1:13",
      zh: "我必從你頸項上折斷他的軛，扭開他的繩索",
      en: "will I break his yoke from off you, and will burst your bonds apart" },
    keyVerses: ["1:12", "1:13", "1:14"],
    intro: {
      zh: "1:12-13 是對猶大說的：「猶大啊，我雖然使你受苦，卻不再使你受苦。現在我必從你頸項上折斷他的軛，扭開他的繩索。」這話承認了兩件事：猶大的苦是耶和華容許的（參賽 10:5-6，亞述是祂怒氣的棍），而這苦有止境。「他的軛」是亞述加在猶大身上的轄制。1:14 轉過來對尼尼微說：「你名下的人必不留後；我必從你神的廟中除滅雕刻的偶像和鑄造的偶像。」王下 19:36-37 記著，亞述王西拿基立回到尼尼微，後來在他的神尼斯洛的廟裡被自己的兒子殺死；那鴻書的這句話，和那個「神廟」的場景很能互相呼應，但書本身沒有指明是哪一件事。1:12 的原文難解，各譯本的譯法略有出入。",
      en: "Verses 12–13 speak to Judah: “Though I have afflicted you, I will afflict you no more. Now will I break his yoke from off you, and will burst your bonds apart.” That admits two things: Judah’s suffering was allowed by Yahweh (compare Isaiah 10:5–6, where Assyria is the rod of his anger), and it has a limit. “His yoke” is the rule Assyria laid on Judah. Verse 14 turns to Nineveh: “No more descendants will bear your name. Out of the house of your gods, will I cut off the engraved image and the molten image.” 2 Kings 19:36–37 records that Sennacherib king of Assyria went back to Nineveh and was later struck down by his sons in the house of Nisroch his god; the temple scene echoes Nahum’s words, but the book itself does not name any event. The Hebrew of 1:12 is difficult, and translations differ slightly."
    },
    tip: {
      zh: "1:12 的原文難解，和合本與 WEB 的語氣略有差別，讀時可以兩個版本對照。",
      en: "The Hebrew of 1:12 is difficult, and the CUV and WEB differ a little in tone; it helps to read both."
    },
    related: ["nahum", "nineveh_plot", "feet_on_mountains", "slow_to_anger"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "feet_on_mountains", book: "nahum", no: 6, kind: "other", type: "heaven", rarity: 5,
    zh: "山上報信的腳", en: "Feet on the Mountains",
    tag: { zh: "守你的節期，還你所許的願", en: "Keep Your Feasts, Perform Your Vows" },
    role: { zh: "第 1 章的結尾（1:15）", en: "The close of chapter 1 (1:15)" },
    ch: [1],
    passages: ["1:15"],
    moves: [
      { zh: "報好信傳平安", en: "Good News, Peace", ref: "1:15",
        dzh: "看哪，有報好信傳平安之人的腳登山！",
        den: "Behold, on the mountains the feet of him who brings good news, who publishes peace!" },
      { zh: "守節期，還許願", en: "Feasts and Vows", ref: "1:15",
        dzh: "猶大啊，可以守你的節期，還你所許的願吧！",
        den: "“Keep your feasts, Judah! Perform your vows.”" }
    ],
    traits: [
      { k: "strength", zh: "把審判的結果說成好消息", en: "Calls the outcome of judgment good news" },
      { k: "identity", zh: "同一幅畫也在以賽亞書 52:7", en: "The same picture appears in Isaiah 52:7" }
    ],
    lesson: {
      zh: "好消息是具體的：那惡人「不再從你中間經過」，所以可以重新守節期、還願了（1:15）。得釋放的第一個反應，是回去敬拜。",
      en: "The good news is concrete: the wicked one “will no more pass through you,” so the feasts and vows can resume (1:15). The first response to release is to go back to worship."
    },
    quote: { ref: "1:15",
      zh: "有報好信傳平安之人的腳登山",
      en: "on the mountains the feet of him who brings good news, who publishes peace" },
    keyVerses: ["1:15"],
    intro: {
      zh: "第 1 章以一幅畫收結：「看哪，有報好信傳平安之人的腳登山，說：猶大啊，可以守你的節期，還你所許的願吧！因為那惡人不再從你中間經過，他已滅絕淨盡了。」（1:15）報信的人從山上跑來，是古時傳戰報的樣子。節期和許的願，在亞述轄制之下被打斷，現在可以重新守。以賽亞書 52:7 有幾乎相同的句子：「那報佳音，傳平安，報好信，傳救恩的，對錫安說：你的神作王了！這人的腳登山何等佳美！」羅馬書 10:15 引用的就是以賽亞書這一句。兩處用詞相近，彼此的關係，學者看法不一。",
      en: "Chapter 1 closes on a picture: “Behold, on the mountains the feet of him who brings good news, who publishes peace! Keep your feasts, Judah! Perform your vows, for the wicked one will no more pass through you. He is utterly cut off” (1:15). A runner coming over the mountains with news was how battle reports used to arrive. Feasts and vows interrupted under Assyrian rule can now be kept again. Isaiah 52:7 has almost the same words: “How beautiful on the mountains are the feet of him who brings good news, who publishes peace… who says to Zion, ‘Your God reigns!’” and Romans 10:15 quotes the Isaiah verse. The wording is close; how the two passages relate, scholars differ."
    },
    tip: {
      zh: "那鴻 1:15 與以賽亞書 52:7 用詞相近；希伯來文聖經把這節算作 2:1，所以不同版本的節數會差一節。",
      en: "Nahum 1:15 and Isaiah 52:7 use similar words; the Hebrew Bible numbers this verse 2:1, so verse numbers can differ by one."
    },
    related: ["nahum", "yoke_broken", "slow_to_anger", "dasher"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "dasher", book: "nahum", no: 7, kind: "other", type: "power", rarity: 4,
    zh: "打碎邦國的上來了", en: "He Who Dashes in Pieces",
    tag: { zh: "「看守保障！」——卻守不住", en: "“Keep the Fortress!” — And It Cannot Be Kept" },
    role: { zh: "第一幅攻城圖（2:1-4）", en: "The first picture of the assault (2:1–4)" },
    ch: [2],
    passages: ["2:1-4"],
    moves: [
      { zh: "看守保障", en: "Keep the Fortress", ref: "2:1",
        dzh: "那打碎邦國的上來攻擊你。你要看守保障，謹防道路！",
        den: "He who dashes in pieces has come up against you. Keep the fortress! Watch the way!" },
      { zh: "紅盾牌，火一般的戰車", en: "Red Shields, Chariots Like Fire", ref: "2:3-4",
        dzh: "勇士的盾牌是紅的，精兵穿朱紅衣服，戰車上的鋼鐵閃爍如火。",
        den: "The shields of his mighty men are red, the valiant in scarlet; the chariots flash with steel." }
    ],
    traits: [
      { k: "strength", zh: "戰車如火把，飛跑如閃電", en: "Chariots like torches, running like lightning" },
      { k: "weakness", zh: "命令守城的聲音，本身是嘲諷", en: "The order to defend is itself a taunt" }
    ],
    lesson: {
      zh: "對一座以城牆自豪的城，命令只有一句：「看守保障」。這句是嘲諷，也是無法執行的命令（參 3:14）。",
      en: "To a city proud of its walls the only order is “Keep the fortress!” — a taunt, and an order that cannot be carried out (compare 3:14)."
    },
    quote: { ref: "2:1",
      zh: "那打碎邦國的上來攻擊你。你要看守保障，謹防道路",
      en: "He who dashes in pieces has come up against you. Keep the fortress! Watch the way!" },
    keyVerses: ["2:1", "2:2", "2:3", "2:4"],
    intro: {
      zh: "第 2 章用一連串快速的畫面描寫攻城：「那打碎邦國的上來攻擊你」（2:1），接著是諷刺的命令：看守保障，謹防道路，使腰強壯，大大勉力。2:3-4 是攻城軍的樣子：盾牌是紅的，精兵穿朱紅衣服，戰車上的鋼鐵閃爍如火，在街上和寬闊處急行，形狀如火把，飛跑如閃電。經文沒有說這攻城的是誰；歷史上尼尼微在主前 612 年被巴比倫與瑪代的聯軍攻陷，這是歷史資料，不是那鴻書自己所說。和合本把 2:2 放在括號裡：「耶和華復興雅各的榮華，好像以色列的榮華一樣；因為使地空虛的，已經使雅各和以色列空虛」，像是插入的一句安慰，說明耶和華為什麼要處理尼尼微。",
      en: "Chapter 2 describes the assault in rapid pictures: “He who dashes in pieces has come up against you” (2:1), followed by a mocking order: keep the fortress, watch the way, strengthen your waist, fortify your power mightily. Verses 3–4 show the attacking force: shields red, the valiant in scarlet, chariots flashing with steel, rushing through the streets and wide ways, looking like torches and running like lightning. The text does not say who the attacker is; history records that Nineveh fell in 612 BC to a coalition of Babylonians and Medes, but that comes from outside sources, not from Nahum. The CUV puts 2:2 in parentheses — “Yahweh restores the excellency of Jacob, as the excellency of Israel; for the destroyers have destroyed them” — like an inserted word of comfort explaining why Yahweh deals with Nineveh."
    },
    tip: {
      zh: "「打碎邦國的」是誰，2:1 沒有指名。書中的畫面（紅盾牌、鋼鐵戰車）是描寫，不是對單一戰役的記錄。",
      en: "2:1 does not name “he who dashes in pieces.” The scenes (red shields, steel chariots) are description, not a record of a single battle."
    },
    related: ["river_gates", "lions_den", "fortress_figs", "nineveh_plot"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "river_gates", book: "nahum", no: 8, kind: "other", type: "vision", rarity: 4,
    zh: "河閘開放", en: "The River Gates Open",
    tag: { zh: "喊「站住」，卻無人回顧", en: "“Stop! Stop!” — and No One Looks Back" },
    role: { zh: "城破的一刻（2:5-10）", en: "The moment the city breaks (2:5–10)" },
    ch: [2],
    passages: ["2:5-10"],
    moves: [
      { zh: "河閘開放，宮殿沖沒", en: "Gates Open, Palace Dissolves", ref: "2:6",
        dzh: "河閘開放，宮殿沖沒。宮女搥胸，哀鳴如鴿。",
        den: "“The gates of the rivers are opened, and the palace is dissolved”; her servants moan like doves." },
      { zh: "站住！站住！", en: "“Stop! Stop!”", ref: "2:8",
        dzh: "居民都逃跑，雖有人喊「站住」，卻無人回顧。",
        den: "The people flee; “Stop! Stop!” they cry, but no one looks back." }
    ],
    traits: [
      { k: "strength", zh: "金銀寶器多得無數（2:9）", en: "Silver, gold and treasures without end (2:9)" },
      { k: "weakness", zh: "人心消化，雙膝相碰", en: "Hearts melt, knees knock" }
    ],
    lesson: {
      zh: "城的富足沒有擋住城的崩塌：「金銀無窮，華美的寶器無數」（2:9），只成了別人搶掠的對象，而居民在逃命時沒有一個回頭（2:8）。",
      en: "The city’s wealth did not hold the city together: “no end of the store” of silver, gold and fine furnishings (2:9) became only plunder for others, and in flight no one turns back (2:8)."
    },
    quote: { ref: "2:8",
      zh: "雖有人呼喊說：站住！站住！卻無人回顧",
      en: "“Stop! Stop!” they cry, but no one looks back." },
    keyVerses: ["2:5", "2:6", "2:7", "2:8", "2:9", "2:10"],
    intro: {
      zh: "2:5 的王「招聚他的貴冑」，他們步行絆跌，急忙上城牆，預備擋牌——防守是慌亂的。然後是 2:6：「河閘開放，宮殿沖沒。」尼尼微靠著河，水本是它的保障，現在成了入口。有人把這句與古代關於河水衝垮城牆的記載連起來，也有人讀作比喻；經文沒有交代細節（見「耶和華本為善」卡）。2:7 和合本譯為「王后蒙羞，被人擄去；宮女搥胸，哀鳴如鴿。此乃命定之事」，WEB 只說「她被揭露，被擄去」，沒有點明是王后，這節的字義各譯本略有不同。2:8 把尼尼微比作一個聚水的池子，居民卻都逃跑。2:9 是對掠奪者的邀請：「你們搶掠金銀吧！」2:10 以四個詞收結：空虛、荒涼，人心消化，雙膝相碰。",
      en: "In 2:5 the king “summons his picked troops”; they stumble on their way and dash to the wall — the defense is frantic. Then 2:6: “The gates of the rivers are opened, and the palace is dissolved.” Nineveh lay by rivers; the water that was its protection becomes its entrance. Some tie this line to ancient accounts of a river flood breaking a wall; others read it as a figure; the text gives no detail (see the card “Yahweh Is Good”). In 2:7 the CUV reads “the queen is disgraced and led away… this is decreed,” while the WEB says only “she is uncovered, she is carried away,” without naming a queen; translations differ on that verse. Verse 8 compares Nineveh to a pool of water, yet the people flee. Verse 9 invites the looters: “Take the plunder of silver!” Verse 10 closes with four words: empty, void, waste — hearts melt, knees knock."
    },
    tip: {
      zh: "2:7 的字義各譯本不同；「河閘開放」是字面還是比喻，經文沒有說明。",
      en: "Translations differ on 2:7; whether “the gates of the rivers” is literal or a figure the text does not say."
    },
    related: ["dasher", "lions_den", "yahweh_good", "no_amon"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "lions_den", book: "nahum", no: 9, kind: "other", type: "beast", rarity: 3,
    zh: "獅子的洞在哪裡", en: "Where Is the Lions’ Den?",
    tag: { zh: "「我與你為敵」", en: "“I Am Against You”" },
    role: { zh: "對強暴的諷刺詩（2:11-13）", en: "A taunt over violence (2:11–13)" },
    ch: [2],
    passages: ["2:11-13"],
    moves: [
      { zh: "獅子的洞在哪裡？", en: "Where Is the Den?", ref: "2:11",
        dzh: "獅子的洞和少壯獅子餵養之處在哪裡呢？",
        den: "Where is the den of the lions, and the feeding place of the young lions?" },
      { zh: "我與你為敵", en: "I Am Against You", ref: "2:13",
        dzh: "萬軍之耶和華說：我與你為敵，必焚燒你的車輛。",
        den: "“Behold, I am against you,” says Yahweh of Armies; “I will burn her chariots in the smoke.”" }
    ],
    traits: [
      { k: "strength", zh: "獅子曾為子女撕碎許多食物（2:12）", en: "The lion once tore enough prey for his cubs (2:12)" },
      { k: "weakness", zh: "使者的聲音將不再聽見", en: "His messengers’ voice will no longer be heard" }
    ],
    lesson: {
      zh: "那鴻用一個問句為尼尼微送行：「在哪裡呢？」（2:11）強暴曾是這城的家業（2:12），而耶和華的「我與你為敵」（2:13）是祂第一次對尼尼微直接說話。",
      en: "Nahum sees Nineveh off with a question: “Where is it?” (2:11). Violence had been the city’s livelihood (2:12), and Yahweh’s “I am against you” (2:13) is his first direct word to the city."
    },
    quote: { ref: "2:13",
      zh: "我與你為敵，必將你的車輛焚燒成煙，刀劍也必吞滅你的少壯獅子",
      en: "I will burn her chariots in the smoke, and the sword will devour your young lions" },
    keyVerses: ["2:11", "2:12", "2:13"],
    intro: {
      zh: "第 2 章的最後三節把尼尼微比作獅子：公獅為小獅撕碎許多食物，為母獅掐死活物，洞穴裡充滿撕碎的獵物（2:12）。亞述王宮的石雕常刻王獵獅的場面，獅子在那裡是王權的象徵；這是歷史背景，那鴻書沒有提到。那鴻問：「獅子的洞和少壯獅子餵養之處在哪裡呢？……無人驚嚇之地在哪裡呢？」（2:11）這是一個問句，答案在 2:13：「我與你為敵」，戰車焚燒成煙，刀劍吞滅少壯獅子，所撕碎的要被除滅，「你使者的聲音必不再聽見」。「使者」可指傳令官或使節，經文沒有指明是誰。這句話在 3:5 又重複一次。",
      en: "The last three verses of chapter 2 turn Nineveh into a lion: the lion tears enough for his cubs, strangles for his lionesses, and fills his dens with prey (2:12). Assyrian palace reliefs often showed the king hunting lions, so the lion was an image of royal power; that is historical background, not in Nahum. Nahum asks: “Where is the den of the lions, and the feeding place of the young lions… and no one made them afraid?” (2:11). The answer comes in 2:13: “I am against you” — the chariots burned to smoke, the young lions devoured by the sword, the prey cut off, and “the voice of your messengers will no longer be heard.” “Messengers” could be heralds or envoys; the text does not say which. The line “I am against you” returns in 3:5."
    },
    tip: {
      zh: "亞述王宮的獵獅雕刻是歷史背景，不是那鴻書所寫；「使者」指誰，經文沒有說明。",
      en: "The royal lion-hunt reliefs are historical background, not in Nahum; the text does not say who the “messengers” are."
    },
    related: ["dasher", "river_gates", "bloody_city", "no_healing"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "bloody_city", book: "nahum", no: 10, kind: "other", type: "scheme", rarity: 4,
    zh: "流人血的城", en: "The Bloody City",
    tag: { zh: "充滿謊詐和強暴", en: "Full of Lies and Robbery" },
    role: { zh: "第 3 章的罪狀（3:1-7）", en: "The charges of chapter 3 (3:1–7)" },
    ch: [3],
    passages: ["3:1-7"],
    moves: [
      { zh: "禍哉！流人血的城", en: "Woe to the Bloody City", ref: "3:1",
        dzh: "禍哉！這流人血的城，充滿謊詐和強暴，搶奪的事總不止息。",
        den: "Woe to the bloody city! It is all full of lies and robbery; the prey doesn’t depart." },
      { zh: "我與你為敵", en: "I Am Against You", ref: "3:4-5",
        dzh: "她用淫行和邪術出賣列國；耶和華說：我與你為敵。",
        den: "She sells nations through prostitution and witchcraft; “I am against you,” says Yahweh of Armies." }
    ],
    traits: [
      { k: "strength", zh: "鞭聲、車輪、馬匹，轟轟作響", en: "Whip, wheels and horses in full roar" },
      { k: "weakness", zh: "「有誰為你悲傷呢？」（3:7）", en: "“Who will mourn for her?” (3:7)" }
    ],
    lesson: {
      zh: "第 3 章不再用比喻開頭，而是直接點名罪：血、謊詐、強暴、搶奪（3:1）。這是這座城的名聲，連約拿書裡神所看見的「惡」（拿 1:2）也在其中。",
      en: "Chapter 3 begins not with a figure but with a naming of the charges: blood, lies, violence, robbery (3:1). This is the city’s reputation, and it includes the “wickedness” Yahweh saw in Jonah 1:2."
    },
    quote: { ref: "3:1",
      zh: "禍哉！這流人血的城，充滿謊詐和強暴",
      en: "Woe to the bloody city! It is all full of lies and robbery." },
    keyVerses: ["3:1", "3:2", "3:3", "3:4", "3:5", "3:7"],
    intro: {
      zh: "「禍哉！這流人血的城，充滿謊詐和強暴──搶奪的事總不止息。」（3:1）3:2-3 用聲音寫戰爭：鞭聲響亮，車輪轟轟，馬匹踢跳，刀劍發光，槍矛閃爍，屍首成了大堆（3:3）。3:4 把城比作一個「美貌的妓女」，慣行邪術，用淫行和邪術「誘惑」列國；和合本的註說「原文是賣」，意思是這座城把別的國家和民族當作貨物來利用。這是比喻，不是在寫某一個人。3:5 再一次說：「我與你為敵」，宣告當眾羞辱她；3:7 問：「有誰為你悲傷呢？」沒有人為尼尼微哭，是因為所有人都受過它的傷害。約拿書 3:5-10 曾記載同一座城聽見警告就悔改；那鴻書裡沒有這樣的記載，書也沒有說明兩者相隔多久。",
      en: "“Woe to the bloody city! It is all full of lies and robbery. The prey doesn’t depart” (3:1). Verses 2–3 write war in sound: the whip, the rattling wheels, prancing horses, flashing swords, glittering spears, a great heap of corpses (3:3). Verse 4 calls the city an “alluring prostitute,” a “mistress of witchcraft,” who “sells nations through her prostitution and families through her witchcraft”; the CUV note says the original is “sells,” meaning the city treats other nations and peoples as goods to be used. It is a figure, not a description of one person. Verse 5 says again, “I am against you,” and announces public shame; verse 7 asks, “Who will mourn for her?” No one mourns Nineveh because everyone has been hurt by it. In Jonah 3:5–10 the same city hears a warning and repents; Nahum records nothing like that, and the book does not say how much time lies between them."
    },
    tip: {
      zh: "3:4 的「妓女」是比喻（和合本註：原文是「賣」），說的是用淫行和邪術把列國當貨物；不是在描寫某一個人。",
      en: "The “prostitute” of 3:4 is a figure (the CUV note says the original is “sells”): a city that uses nations as goods through seduction and sorcery, not a description of one person."
    },
    related: ["lions_den", "no_amon", "no_healing", "slow_to_anger"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "no_amon", book: "nahum", no: 11, kind: "other", type: "wisdom", rarity: 4,
    zh: "挪亞們的前車之鑑", en: "The Lesson of No-Amon",
    tag: { zh: "「你豈比挪亞們強呢？」", en: "“Are You Better Than No-Amon?”" },
    role: { zh: "埃及古城的下場（3:8-11）", en: "The fate of an Egyptian city (3:8–11)" },
    ch: [3],
    passages: ["3:8-11"],
    moves: [
      { zh: "你豈比挪亞們強？", en: "Are You Better?", ref: "3:8",
        dzh: "挪亞們坐落在眾河之間，周圍有水，有海作她的濠溝。",
        den: "No-Amon sat among the rivers, with water around her; her rampart was the sea." },
      { zh: "她被擄去", en: "She Went into Captivity", ref: "3:10",
        dzh: "但她被遷移，被擄去；她所有的大人都被鍊子鎖著。",
        den: "Yet she was carried away; all her great men were bound in chains." }
    ],
    traits: [
      { k: "strength", zh: "有水為牆，有古實、埃及為力量", en: "Water for walls; Cush and Egypt for strength" },
      { k: "weakness", zh: "仍被擄去", en: "Yet taken captive" }
    ],
    lesson: {
      zh: "沒有一座城的水、牆、盟友可以擔保不被攻陷（3:8-10）；那鴻問尼尼微的，是一個無法回答「是」的問題：你豈比挪亞們強？",
      en: "No city’s water, walls or allies can guarantee it will not fall (3:8–10); Nahum asks Nineveh a question that cannot be answered “yes”: are you better than No-Amon?"
    },
    quote: { ref: "3:8",
      zh: "你豈比挪亞們強呢？挪亞們坐落在眾河之間，周圍有水",
      en: "Are you better than No-Amon, who was situated among the rivers" },
    keyVerses: ["3:8", "3:9", "3:10", "3:11"],
    intro: {
      zh: "「挪亞們」（No-Amon）是埃及的底比斯。那鴻對尼尼微說：「你豈比挪亞們強呢？」她坐落在尼羅河的水道之間，「周圍有水；海（和合本註：指尼羅河）作她的濠溝，又作她的城牆」（3:8）；古實和埃及是她無窮的力量，弗人和路比族是她的幫手（3:9）。可是「她被遷移，被擄去」，嬰孩在街口被摔死，人為尊貴人拈鬮，大人都被鍊子鎖著（3:10）。那鴻接著說：「你也必喝醉，必被埋藏，並因仇敵的緣故尋求避難所」（3:11）。耶利米書 46:25 也提到「挪的亞捫」。歷史上亞述在主前 663 年左右攻陷底比斯，這是學者用來推算那鴻書年代的一條線索（見「那鴻」卡）。",
      en: "“No-Amon” is the Egyptian city of Thebes. Nahum says to Nineveh, “Are you better than No-Amon?” She was set among the Nile’s channels, “who had the waters around her; whose rampart was the sea” (3:8; the CUV note says “the sea” means the Nile); Cush and Egypt were her boundless strength, Put and Libya her helpers (3:9). Yet “she was carried away. She went into captivity,” her children were dashed in pieces at the head of the streets, lots were cast for her honored men, all her great men bound in chains (3:10). Nahum goes on: “You also will be drunken. You will be hidden. You also will seek a stronghold because of the enemy” (3:11). Jeremiah 46:25 also mentions “Amon of No.” History puts Assyria’s capture of Thebes around 663 BC, one of the clues scholars use to date the book (see the card “Nahum”)."
    },
    tip: {
      zh: "「挪亞們」即底比斯（和合本在耶 46:25 作「挪的亞捫」）。她的陷落用作前例，說明再堅固的城也會被攻破。",
      en: "“No-Amon” is Thebes (Jeremiah 46:25 has “Amon of No”). Her fall is used as a precedent: no city, however secure, is beyond being taken."
    },
    related: ["bloody_city", "fortress_figs", "river_gates", "nahum"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "fortress_figs", book: "nahum", no: 12, kind: "other", type: "harvest", rarity: 3,
    zh: "初熟的無花果", en: "First-Ripe Figs",
    tag: { zh: "「打水預備受困」——也沒有用", en: "“Draw Water for the Siege” — to No Use" },
    role: { zh: "保障一搖就落（3:12-14）", en: "Fortresses fall at a shake (3:12–14)" },
    ch: [3],
    passages: ["3:12-14"],
    moves: [
      { zh: "一搖撼就落", en: "Shaken, They Fall", ref: "3:12",
        dzh: "你一切保障像初熟的無花果，一搖撼就落在想吃的人口中。",
        den: "All your fortresses are like first-ripe figs: shaken, they fall into the eater’s mouth." },
      { zh: "預備受困", en: "Preparing for the Siege", ref: "3:14",
        dzh: "你要打水預備受困，踹土和泥，修補磚窯！",
        den: "Draw water for the siege! Strengthen your fortresses; tread the mortar, make the brick kiln strong." }
    ],
    traits: [
      { k: "strength", zh: "每樣防守的準備都有", en: "Every defensive preparation is made" },
      { k: "weakness", zh: "門閂被火焚燒", en: "The bars are consumed by fire" }
    ],
    lesson: {
      zh: "3:14 的命令是諷刺：打水、堅固保障、修補磚窯，每樣都做了，結論仍是 3:13 的「門閂被火焚燒」。",
      en: "The commands of 3:14 are ironic: drawing water, strengthening fortresses, repairing the kiln — everything is done, and the conclusion is still 3:13: “the fire has devoured your bars.”"
    },
    quote: { ref: "3:12",
      zh: "你一切保障必像無花果樹上初熟的無花果，若一搖撼就落在想吃之人的口中",
      en: "All your fortresses will be like fig trees with the first-ripe figs" },
    keyVerses: ["3:12", "3:13", "3:14"],
    intro: {
      zh: "3:12 的比喻很輕：你一切保障像無花果樹上初熟的無花果，若一搖撼就落在想吃之人的口中。初熟的果子最容易落下。3:13 的描寫很重：「你地上的人民如同婦女；你國中的關口向仇敵敞開；你的門閂被火焚燒」。「如同婦女」是古代描寫兵士嚇得失去戰力的說法，用在審判詩句裡，不是在評論婦女。然後 3:14 忽然變成命令：打水預備受困，堅固保障，踹土和泥，修補磚窯。這些都是守城最實際的準備，那鴻故意列出來，好讓人看見：預備得再周全，也擋不住。",
      en: "The picture in 3:12 is light: all your fortresses are like fig trees with first-ripe figs; if they are shaken, they fall into the mouth of the eater. First-ripe fruit falls the easiest. Verse 13 is heavy: “your troops among you are women. The gates of your land are set wide open to your enemies. The fire has devoured your bars.” “Are women” is an ancient way of saying soldiers have lost their nerve, used here in a judgment poem; it is not a comment on women. Then 3:14 turns into commands: draw water for the siege, strengthen the fortresses, tread the mortar, make the brick kiln strong. These are the most practical preparations for defending a city, and Nahum lists them on purpose to show that however thorough the preparation, it cannot hold."
    },
    tip: {
      zh: "「如同婦女」是古代形容兵士嚇得無力作戰的說法，不是在說婦女軟弱。",
      en: "“Are women” is an ancient idiom for soldiers who have lost their nerve; it is not a statement about women."
    },
    related: ["no_amon", "dasher", "locust_swarm", "river_gates"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "locust_swarm", book: "nahum", no: 13, kind: "other", type: "beast", rarity: 3,
    zh: "天涼落、日出飛的蝗蟲", en: "Locusts at Sunrise",
    tag: { zh: "人數再多，也留不住", en: "However Many, Gone by Morning" },
    role: { zh: "商賈與首領（3:15-17）", en: "Merchants and officials (3:15–17)" },
    ch: [3],
    passages: ["3:15-17"],
    moves: [
      { zh: "多如蝗蟲", en: "Many as Locusts", ref: "3:15",
        dzh: "任你加增人數多如蝻子、多如蝗蟲吧！火與刀仍必吞滅你。",
        den: "“Multiply like grasshoppers, multiply like locusts” — fire and sword will still devour you." },
      { zh: "日頭一出便都飛去", en: "Gone When the Sun Appears", ref: "3:17",
        dzh: "你的首領多如蝗蟲，天涼時落在籬笆上，日頭一出便都飛去。",
        den: "Your officials are like locusts that settle on the walls on a cold day, but when the sun appears, they flee away." }
    ],
    traits: [
      { k: "strength", zh: "商賈多過天上的星（3:16）", en: "Merchants more than the stars (3:16)" },
      { k: "weakness", zh: "人不知道牠們落在何處", en: "No one knows where they went" }
    ],
    lesson: {
      zh: "那鴻用蝗蟲說兩件事：人多得像蝗蟲（3:15-16），也像蝗蟲一樣不可靠，天一暖就全部飛散（3:17）。人數與地位，在災難那天沒有用處。",
      en: "Nahum uses locusts for two things: numbers as vast as locusts (3:15–16), and the same unreliability — when the sun warms them they all scatter (3:17). Numbers and rank are no use on the day of disaster."
    },
    quote: { ref: "3:17",
      zh: "天涼的時候齊落在籬笆上，日頭一出便都飛去",
      en: "which settle on the walls on a cold day, but when the sun appears, they flee away" },
    keyVerses: ["3:15", "3:16", "3:17"],
    intro: {
      zh: "3:15 對城說：火必燒滅你，刀必殺戮你，吞滅你如同蝻子；然後是反話：「任你加增人數多如蝻子，多如蝗蟲吧！」3:16 說她的商賈多過天上的星；「蝻子吃盡而去」。3:17 再用蝗蟲說她的首領和軍長：像成群的螞蚱，天涼的時候落在籬笆上，日頭一出便都飛去，人不知道落在何處。這裡的蝻子、蝗蟲、螞蚱，和約珥書 1:4 蝗災的幾個名稱相同，但那鴻用的是比喻，約珥書寫的是（或象徵）一場蝗災，兩者不要混為一談。",
      en: "Verse 15 says the fire will devour the city and the sword cut her off, “devour you like the grasshopper”; then comes the ironic command: “Multiply like grasshoppers. Multiply like the locust.” Verse 16 says her merchants outnumber the stars of the skies; “the grasshopper strips, and flees away.” Verse 17 uses locusts again for her guards and officials: like swarms that settle on the walls on a cold day, but when the sun appears, they flee away, and their place is not known. The grasshopper, locust and swarming locust here share names with the insects of Joel 1:4, but Nahum is using a figure while Joel describes (or symbolizes) an actual plague; the two should not be run together."
    },
    tip: {
      zh: "那鴻書與約珥書 1:4 都用了蝻子、蝗蟲等詞，但一個是比喻，一個寫蝗災，用意不同。",
      en: "Nahum and Joel 1:4 both use “grasshopper” and “locust,” but one is a figure and the other describes a plague; the purpose differs."
    },
    related: ["fortress_figs", "no_healing", "bloody_city", "dasher"]
  },

  // ── 014 ──────────────────────────────────────────────────────────────────
  {
    id: "no_healing", book: "nahum", no: 14, kind: "other", type: "power", rarity: 5,
    zh: "無法醫治的傷", en: "A Wound With No Healing",
    tag: { zh: "「你所行的惡誰沒有時常遭遇呢？」", en: "“Who Hasn’t Felt Your Endless Cruelty?”" },
    role: { zh: "全書的最後一問（3:18-19）", en: "The book’s last question (3:18–19)" },
    ch: [3],
    passages: ["3:18-19"],
    moves: [
      { zh: "牧人睡覺", en: "The Shepherds Slumber", ref: "3:18",
        dzh: "亞述王啊，你的牧人睡覺，人民散在山間，無人招聚。",
        den: "Your shepherds slumber, king of Assyria; your people are scattered on the mountains, and no one gathers them." },
      { zh: "無法醫治", en: "No Healing", ref: "3:19",
        dzh: "你的損傷無法醫治；凡聽你信息的，都因此向你拍掌。",
        den: "There is no healing your wound; all who hear the report of you clap their hands over you." }
    ],
    traits: [
      { k: "strength", zh: "全書以一個問句收結", en: "The book ends on a question" },
      { k: "weakness", zh: "沒有牧人，也沒有醫治", en: "No shepherd, and no healing" }
    ],
    lesson: {
      zh: "最後一句是問句，不是宣告：「你所行的惡誰沒有時常遭遇呢？」（3:19）亞述的結局，是被它傷害過的人聽見消息而拍掌。約拿書也以神的一個問題結尾（拿 4:11）。",
      en: "The last line is a question, not a pronouncement: “who hasn’t felt your endless cruelty?” (3:19). Assyria’s end is that everyone it hurt hears the news and claps. Jonah also ends on a question from God (Jonah 4:11)."
    },
    quote: { ref: "3:19",
      zh: "你所行的惡誰沒有時常遭遇呢",
      en: "who hasn’t felt your endless cruelty?" },
    keyVerses: ["3:18", "3:19"],
    intro: {
      zh: "那鴻書的最後兩節直接對亞述王說話：「亞述王啊，你的牧人睡覺；你的貴冑安歇；你的人民散在山間，無人招聚。」（3:18）「牧人」是古代對王和官長的稱呼，牧人睡了，羊就散了。3:19：「你的損傷無法醫治；你的傷痕極其重大。凡聽你信息的必都因此向你拍掌。你所行的惡誰沒有時常遭遇呢？」這個問句，沒有人回答，也不需要回答：因為所有被亞述傷害過的人，都已經在拍掌。約拿書也以一個神的問句結束（拿 4:11），不過約拿書的問句是問約拿，那鴻書的問句是對尼尼微說的，兩卷書的結尾方向相反。",
      en: "The last two verses speak straight to the king of Assyria: “Your shepherds slumber, king of Assyria. Your nobles lie down. Your people are scattered on the mountains, and there is no one to gather them” (3:18). “Shepherd” was an ancient title for kings and officials; when the shepherds sleep, the flock scatters. Then 3:19: “There is no healing your wound, for your injury is fatal. All who hear the report of you clap their hands over you; for who hasn’t felt your endless cruelty?” No one answers the question, and none is needed: everyone Assyria hurt is already clapping. Jonah also ends on a question from God (Jonah 4:11), but Jonah’s question is put to Jonah, while Nahum’s is addressed to Nineveh; the two endings point in opposite directions."
    },
    tip: {
      zh: "那鴻書最後沒有寫尼尼微如何傾覆，只寫了結局後的反應：牧人睡了，人民散了，聽見的人拍掌。",
      en: "Nahum does not narrate Nineveh’s fall; it ends with the reaction: the shepherds asleep, the people scattered, those who hear the news clapping."
    },
    related: ["nahum", "bloody_city", "locust_swarm", "lions_den"]
  }

);
