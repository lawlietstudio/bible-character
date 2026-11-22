// 聖經人物卡 · 約珥書 (Joel) — book info + cards.
// Verse text comes from data/joel.text.js (和合本 + World English Bible, both public domain); `quote.zh` / `quote.en`
// are excerpts that scripts/validate.js checks against it. External references (Acts 2:16-21, Rom 10:13, Isa 2:4,
// 2:12, Amos 5:18, Mic 4:3, Jonah 4:2, Exod 34:6, Ezek 47, Rev 22:1-2) were checked against the 和合本 text and appear
// in prose only. The book is undated, and whether the locusts of chapters 1–2 are literal, an army, or both is debated;
// the cards say so rather than choose.

window.BOOKS.push({
  id: "joel",
  zh: "約珥書", en: "Joel", abbr: { zh: "珥", en: "Joel" },
  order: 29, section: { zh: "先知書", en: "Prophets" },
  chapters: 3,
  fan: ["locusts", "joel", "spirit_poured"],
  summary: {
    zh: "約珥書只有三章，卻很濃縮。一場蝗災毀盡田地，連獻給神的素祭和奠祭也斷絕了（1 章）；約珥把它當作「耶和華的日子」的警號，呼籲全民禁食、撕裂心腸歸向神（2:1-17）。神回應：補還那些年所吃的，並應許把祂的靈澆灌凡有血氣的（2:18-32，使徒行傳 2 章引用）。最後是萬民在約沙法谷受審，以及從耶和華殿中流出的泉源（3 章）。",
    en: "Joel has only three chapters but a lot in them. A locust plague strips the land, and even the grain and drink offerings to God are cut off (ch 1); Joel treats it as a warning of “the day of Yahweh” and calls everyone to fast and tear their hearts, not their garments, and return (2:1–17). God answers: he will restore the years the locust ate and pour out his Spirit on all flesh (2:18–32, quoted in Acts 2). The book ends with the nations judged in the valley of Jehoshaphat and a fountain flowing from Yahweh’s house (ch 3)."
  },
  outline: [
    { zh: "蝗災與哀號：耶和華的日子臨近", en: "The locust plague and lament: the day of Yahweh is near" },
    { zh: "撕裂心腸歸向神；神的回應與澆灌的靈", en: "Tear your heart and return; God’s answer and the outpoured Spirit" },
    { zh: "萬民在約沙法谷受審；從殿中流出的泉源", en: "The nations judged in the valley of Jehoshaphat; the fountain from the temple" }
  ],
  notes: {
    zh: "小提示：約珥書沒有標明年代，也沒有說蝗災發生在哪一年。蝗蟲、軍隊、「耶和華的日子」三個畫面常常疊在一起（尤其是第 2 章），不必急著分清哪一句只指哪一件事。",
    en: "Good to know: the book gives no date and does not say which year the plague came. The images of locusts, an army and “the day of Yahweh” overlap (especially in chapter 2), so don’t rush to decide which line refers to only one of them."
  }
});

window.CARDS.push(

  // ── 001 ──────────────────────────────────────────────────────────────────
  {
    id: "joel", book: "joel", no: 1, kind: "person", type: "faith", rarity: 6,
    zh: "約珥", en: "Joel",
    meaning: { zh: "「耶和華是神」", en: "“Yahweh is God”" },
    tag: { zh: "看見蝗災，呼籲歸向神", en: "He Saw the Locusts and Called for Return" },
    role: { zh: "毘土珥的兒子・先知", en: "Prophet, son of Pethuel" },
    ch: [1, 2],
    passages: ["1:1-3", "1:13-14", "2:1", "2:15-17"],
    moves: [
      { zh: "老年人哪，當聽", en: "Hear This, You Elders", ref: "1:2-3",
        dzh: "他先叫老年人和國中居民留心聽：這樣的事曾有過嗎？要傳給子孫。",
        den: "He first calls the elders and all the land to listen: has this ever happened? Tell it to your children and their children." },
      { zh: "在錫安吹角", en: "Blow the Trumpet in Zion", ref: "2:1",
        dzh: "他呼籲在錫安吹角、分定禁食的日子、宣告嚴肅會，招聚眾民歸向神。",
        den: "He calls for the trumpet in Zion, a fast and a solemn assembly, gathering the whole people to turn to God." }
    ],
    traits: [
      { k: "strength", zh: "把災難變成歸向神的呼召", en: "Turns disaster into a call to return" },
      { k: "identity", zh: "只留下父名，沒有年代", en: "Known by his father’s name — no date" }
    ],
    lesson: {
      zh: "災難可以是一個提醒：約珥看見蝗災，不只哀嘆，更呼籲全民歸向神（1:14；2:12）。",
      en: "A disaster can be a wake-up call: Joel does not only lament the plague but summons everyone to return to God (1:14; 2:12)."
    },
    quote: { ref: "1:3",
      zh: "你們要將這事傳與子，子傳與孫，孫傳與後代",
      en: "Tell your children about it, and have your children tell their children, and their children, another generation." },
    keyVerses: ["1:1-3", "1:14", "2:1", "2:12-13"],
    intro: {
      zh: "約珥是毘土珥的兒子（1:1）。經文沒有說明他的年代和家世，只留下這個名字和一場蝗災。他先對老年人和國中居民說話：「在你們的日子，或你們列祖的日子，曾有這樣的事嗎？」（1:2），並要他們把這事傳給後代（1:3）。他呼籲祭司、長老和居民禁食、哀求（1:13-14；2:15-17），又宣告耶和華的日子臨近（1:15；2:1）。全書短短三章，從災難、悔改，一直寫到復興與審判。",
      en: "Joel is the son of Pethuel (1:1). The text gives no date or family background — only this name and a locust plague. He first addresses the elders and everyone in the land: “Has this ever happened in your days, or in the days of your fathers?” (1:2), and tells them to pass it on to later generations (1:3). He calls priests, elders and people to fast and cry out (1:13–14; 2:15–17) and announces that the day of Yahweh is near (1:15; 2:1). In just three chapters the book runs from disaster through repentance to restoration and judgment."
    },
    tip: {
      zh: "約珥書沒有標明年代，學者對寫作時間有不同看法；先專注在書中的畫面——蝗災、吹角、澆灌的靈——就不會迷路。",
      en: "The book is undated and scholars differ on when it was written; focus first on its pictures — the locusts, the trumpet, the outpoured Spirit — and you won’t get lost."
    },
    related: ["locusts", "mourning_priests", "rend_heart", "spirit_poured", "day_of_lord"]
  },

  // ── 002 ──────────────────────────────────────────────────────────────────
  {
    id: "locusts", book: "joel", no: 2, kind: "other", type: "beast", rarity: 3,
    zh: "蝗災", en: "The Locust Plague",
    tag: { zh: "四種蟲，一層一層吃盡", en: "Four Kinds of Locusts, Eating Layer by Layer" },
    role: { zh: "第 1 章的災難", en: "The disaster of chapter 1" },
    ch: [1],
    passages: ["1:4-12"],
    moves: [
      { zh: "層層吃盡", en: "Eaten Layer by Layer", ref: "1:4",
        dzh: "剪蟲剩下的，蝗蟲來吃；蝗蟲剩下的，蝻子來吃；蝻子剩下的，螞蚱來吃。",
        den: "What one kind of locust left, the next ate — four kinds, one after another, until nothing remained." },
      { zh: "葡萄樹與無花果樹", en: "Vine and Fig Tree", ref: "1:7-12",
        dzh: "牠毀壞葡萄樹，剝了無花果樹的皮；五穀毀壞，新酒乾竭，眾人的喜樂盡都消滅。",
        den: "It wrecked the vine and stripped the fig tree bare; grain, wine and oil failed, and joy withered away." }
    ],
    traits: [
      { k: "strength", zh: "又強盛又無數", en: "Mighty and beyond counting" },
      { k: "identity", zh: "也是神的「大軍隊」", en: "Also God’s “great army”" }
    ],
    lesson: {
      zh: "約珥把一場看得見的災難當作警鐘：最日常的收成，也可能一夕之間消失，叫人回頭尋求神（1:14）。",
      en: "Joel treats a very visible disaster as an alarm bell: even the most ordinary harvest can vanish, and that should turn people back to God (1:14)."
    },
    quote: { ref: "1:4",
      zh: "剪蟲剩下的，蝗蟲來吃；蝗蟲剩下的，蝻子來吃",
      en: "What the swarming locust has left, the great locust has eaten." },
    keyVerses: ["1:4", "1:6-7", "1:10-12", "1:18-20"],
    intro: {
      zh: "第 1 章用一場蝗災開頭：「剪蟲剩下的，蝗蟲來吃；蝗蟲剩下的，蝻子來吃；蝻子剩下的，螞蚱來吃」（1:4）——四種蟲，一批接一批。牠們像一隊又強盛又無數的民，牙齒如獅子（1:6），毀壞葡萄樹和無花果樹（1:7），使五穀、新酒和油都缺乏（1:10），連田野的走獸也因溪水乾涸而喘息（1:20）。全書最後會說，這些蟲也是神所「打發」的大軍隊（2:25）。",
      en: "Chapter 1 opens with a plague: “What the swarming locust has left, the great locust has eaten. What the great locust has left, the grasshopper has eaten. What the grasshopper has left, the caterpillar has eaten” (1:4) — four kinds, wave after wave. They are like a strong and countless nation with the teeth of a lion (1:6); they ruin the vine and the fig tree (1:7), leaving grain, new wine and oil short (1:10), and even the animals of the field pant because the streams have dried up (1:20). Later God calls these insects his “great army,” which he sent among them (2:25)."
    },
    tip: {
      zh: "這四個名稱，有人認為是四種不同的蝗蟲，也有人認為是蝗蟲成長的不同階段；各譯本的譯名也不一致（和合本：剪蟲、蝗蟲、蝻子、螞蚱；WEB：swarming locust、great locust、grasshopper、caterpillar）。",
      en: "Some read the four names as four species of locust, others as stages of one insect’s growth; translations differ too (和合本: 剪蟲、蝗蟲、蝻子、螞蚱; WEB: swarming locust, great locust, grasshopper, caterpillar)."
    },
    related: ["locust_army", "mourning_priests", "restored_years", "joel"]
  },

  // ── 003 ──────────────────────────────────────────────────────────────────
  {
    id: "mourning_priests", book: "joel", no: 3, kind: "person", type: "faith", rarity: 2,
    zh: "披麻布的祭司", en: "The Priests in Sackcloth",
    tag: { zh: "素祭和奠祭中斷了", en: "The Offerings Have Stopped" },
    role: { zh: "事奉耶和華的祭司與長老", en: "Priests and elders who serve Yahweh" },
    ch: [1, 2],
    passages: ["1:8-9", "1:13-14", "2:15-17"],
    moves: [
      { zh: "腰束麻布痛哭", en: "Wail in Sackcloth", ref: "1:13",
        dzh: "祭司要穿上麻布痛哭，披著麻布過夜，因為素祭和奠祭從神的殿中斷絕了。",
        den: "The priests are to mourn in sackcloth and spend the night in it, because the meal and drink offerings are withheld from God’s house." },
      { zh: "在廊子和祭壇中間哭泣", en: "Weeping Between Porch and Altar", ref: "2:17",
        dzh: "他們要為百姓禱告：求你顧惜你的百姓；為何容列國說「他們的神在哪裡」呢？",
        den: "They are to pray: “Spare your people, Yahweh… Why should they say among the peoples, ‘Where is their God?’”" }
    ],
    traits: [
      { k: "strength", zh: "先哀哭，再求神顧惜", en: "Weep first, then plead for mercy" },
      { k: "identity", zh: "替百姓站在祭壇前", en: "Stand at the altar for the people" }
    ],
    lesson: {
      zh: "當日常的敬拜也被災難切斷，領袖要先站出來哀哭禱告，帶領百姓歸向神（1:13-14；2:17）。",
      en: "When even regular worship is cut off by disaster, leaders are to step forward first in lament and prayer, leading the people back to God (1:13–14; 2:17)."
    },
    quote: { ref: "2:17",
      zh: "耶和華啊，求你顧惜你的百姓，不要使你的產業受羞辱",
      en: "Spare your people, Yahweh, and don’t give your heritage to reproach" },
    keyVerses: ["1:9", "1:13-14", "2:15-17"],
    intro: {
      zh: "蝗災使田地的收成斷絕，也使「素祭和奠祭從耶和華的殿中斷絕」（1:9）；事奉耶和華的祭司都悲哀。約珥叫祭司腰束麻布痛哭、披上麻布過夜（1:13），並招聚長老和國中一切居民到殿中向耶和華哀求（1:14）。到了第 2 章，祭司要「在廊子和祭壇中間哭泣」，為百姓禱告（2:17）。",
      en: "The plague ends the harvest and with it the offerings: “the meal offering and the drink offering are cut off from Yahweh’s house,” and the priests mourn (1:9). Joel tells the priests to put on sackcloth, wail and spend the night in it (1:13), and to gather the elders and all the inhabitants to the house of Yahweh to cry out to him (1:14). In chapter 2 the priests are to “weep between the porch and the altar” and pray for the people (2:17)."
    },
    tip: {
      zh: "1:9-10 把「素祭和奠祭中斷」和「五穀毀壞，新酒乾竭，油也缺乏」連在一起說，可見這場災害連敬拜也被牽動。",
      en: "1:9–10 puts “the offerings are cut off” next to “the grain is destroyed, the new wine dried up, the oil failed” — the plague touched worship as well as farming."
    },
    related: ["joel", "locusts", "rend_heart"]
  },

  // ── 004 ──────────────────────────────────────────────────────────────────
  {
    id: "day_of_lord", book: "joel", no: 4, kind: "other", type: "vision", rarity: 4,
    zh: "耶和華的日子", en: "The Day of Yahweh",
    tag: { zh: "大而可畏的日子", en: "The Great and Terrible Day" },
    role: { zh: "貫穿全書的主題", en: "The book’s unifying theme" },
    ch: [1, 2, 3],
    passages: ["1:15", "2:1-2", "2:10-11", "2:31", "3:14-15"],
    moves: [
      { zh: "日子臨近了", en: "The Day Is Near", ref: "1:15",
        dzh: "「哀哉！耶和華的日子臨近了。這日來到，好像毀滅從全能者來到。」",
        den: "“Alas for the day! For the day of Yahweh is at hand, and it will come as destruction from the Almighty.”" },
      { zh: "誰能當得起呢？", en: "Who Can Endure It?", ref: "2:10-11",
        dzh: "那日大而可畏，「誰能當得起呢？」——日月昏暗，星宿無光。",
        den: "The day is great and very awesome — “who can endure it?” — with sun, moon and stars darkened." }
    ],
    traits: [
      { k: "identity", zh: "審判與拯救在同一天", en: "Judgment and rescue on the same day" },
      { k: "strength", zh: "對百姓是避難所（3:16）", en: "A refuge for his people (3:16)" }
    ],
    lesson: {
      zh: "「耶和華的日子」可怕，卻不是無路可逃：求告耶和華名的必得救（2:32），祂也要作百姓的避難所（3:16）。",
      en: "The day of Yahweh is terrible but not without a way out: whoever calls on his name will be saved (2:32), and he will be a refuge to his people (3:16)."
    },
    quote: { ref: "2:11",
      zh: "耶和華的日子大而可畏，誰能當得起呢",
      en: "for the day of Yahweh is great and very awesome, and who can endure it?" },
    keyVerses: ["1:15", "2:1-2", "2:10-11", "2:31-32", "3:14-16"],
    intro: {
      zh: "「耶和華的日子」是約珥書的主線，在書中多次出現（1:15；2:1, 11, 31；3:14）。起初它像蝗災那樣臨近：「哀哉！耶和華的日子臨近了」（1:15）；後來更大——日月昏暗、星宿無光（2:10；3:15），「大而可畏，誰能當得起呢？」（2:11）。同一個日子，對仇敵是審判（3:12），對求告祂的人卻有逃脫之路（2:32），耶和華也要作祂百姓的避難所（3:16）。",
      en: "“The day of Yahweh” is Joel’s main thread and returns again and again (1:15; 2:1, 11, 31; 3:14). It first draws near like the plague: “Alas for the day! For the day of Yahweh is at hand” (1:15); later it grows larger — sun, moon and stars darkened (2:10; 3:15), “great and very awesome, and who can endure it?” (2:11). The same day is judgment for the nations (3:12), yet a way of escape for those who call on him (2:32), and Yahweh will be a refuge for his people (3:16)."
    },
    tip: {
      zh: "「耶和華的日子」不只約珥提過：以賽亞書 2:12 說是降罰驕傲者的日子，阿摩司書 5:18 則警告那些想望這日子的人。",
      en: "Joel is not the only prophet to speak of this day: Isaiah 2:12 calls it a day against the proud, and Amos 5:18 warns those who long for it."
    },
    related: ["locust_army", "call_on_name", "valley_decision", "joel"]
  },

  // ── 005 ──────────────────────────────────────────────────────────────────
  {
    id: "locust_army", book: "joel", no: 5, kind: "other", type: "power", rarity: 3,
    zh: "蝗蟲如軍隊", en: "The Locust Army",
    tag: { zh: "如馬，如勇士，如盜賊", en: "Like Horses, Like Warriors, Like Thieves" },
    role: { zh: "第 2 章的蝗蟲大軍", en: "The locust host of chapter 2" },
    ch: [2],
    passages: ["2:1-11"],
    moves: [
      { zh: "如伊甸園，如曠野", en: "Eden Before, Wilderness After", ref: "2:3",
        dzh: "牠們前面如火燒滅，後面如火焰燒盡；未到以前地如伊甸園，過去以後成了荒涼的曠野。",
        den: "Fire devours before them and a flame burns behind; the land is like Eden before them and a desolate wilderness after." },
      { zh: "如勇士，如盜賊", en: "Like Warriors, Like Thieves", ref: "2:7-9",
        dzh: "牠們如勇士奔跑，像戰士爬城，不亂隊伍；蹦上城，進入窗戶如同盜賊。",
        den: "They run like warriors and scale the wall like soldiers, never breaking rank; they leap on the city and enter the windows like thieves." }
    ],
    traits: [
      { k: "strength", zh: "整齊如軍隊，不偏左右", en: "Orderly as an army, never swerving" },
      { k: "identity", zh: "是蝗蟲，還是軍隊？", en: "Locusts — or an army?" }
    ],
    lesson: {
      zh: "這一幕讓人看見：災害的背後，有一位在祂軍旅前發聲的主——牠們是「遵行祂命」的，不是亂來（2:11）。",
      en: "The scene shows that behind the disaster stands the one who “thunders his voice before his army”; these forces obey his command and do not simply rampage (2:11)."
    },
    quote: { ref: "2:3",
      zh: "未到以前，地如伊甸園；過去以後，成了荒涼的曠野",
      en: "The land is as the garden of Eden before them, and behind them, a desolate wilderness." },
    keyVerses: ["2:2-3", "2:4-5", "2:7-9", "2:11"],
    intro: {
      zh: "2:1-11 再描寫那一隊「又大又強」的蝗蟲（2:2）：形狀如馬，奔跑如馬兵（2:4），聲音如車輛、如火焰燒碎秸（2:5），不亂隊伍、不偏左右（2:7-8），蹦上城、進入窗戶如同盜賊（2:9）。耶和華在祂的軍旅前發聲（2:11）。這段是在說真實的蝗蟲，還是已經轉向一支入侵的軍隊（2:20 提到「北方來的軍隊」），解經者有不同看法；經文的語言刻意讓兩者重疊。",
      en: "Chapter 2:1–11 describes the locusts again as a “great and strong” host (2:2): shaped like horses and running like war-horses (2:4), sounding like chariots and a flame devouring stubble (2:5), never breaking rank or swerving (2:7–8), leaping on the city and entering the windows like thieves (2:9). Yahweh thunders his voice before his army (2:11). Whether the passage still speaks of real locusts or has turned to an invading army (2:20 mentions “the northern army”) is debated; the language seems to let both overlap."
    },
    tip: {
      zh: "和合本在 1:6 和 2:2 的「一隊蝗蟲」旁注「原文是民」——蝗蟲被叫作「民」，像一個國家。",
      en: "In 1:6 and 2:2 the 和合本 notes that “a swarm of locusts” is literally “a people” — the locusts are called a nation."
    },
    related: ["locusts", "day_of_lord", "rend_heart"]
  },

  // ── 006 ──────────────────────────────────────────────────────────────────
  {
    id: "rend_heart", book: "joel", no: 6, kind: "other", type: "love", rarity: 4,
    zh: "撕裂心腸", en: "Tear Your Heart",
    tag: { zh: "一心歸向我", en: "Return to Me With All Your Heart" },
    role: { zh: "約珥書的轉捩點", en: "The turning point of Joel" },
    ch: [2],
    passages: ["2:12-17"],
    moves: [
      { zh: "雖然如此，一心歸向我", en: "Even Now, Return", ref: "2:12",
        dzh: "耶和華說：雖然如此，你們應當禁食、哭泣、悲哀，一心歸向我。",
        den: "“Yet even now,” says Yahweh, “turn to me with all your heart, with fasting, weeping and mourning.”" },
      { zh: "不撕裂衣服", en: "Not Your Garments", ref: "2:13",
        dzh: "要撕裂心腸，不撕裂衣服；因為他有恩典、有憐憫，不輕易發怒，有豐盛的慈愛。",
        den: "Tear your heart, not your garments, for he is gracious and merciful, slow to anger, abundant in loving kindness." }
    ],
    traits: [
      { k: "strength", zh: "神的品格就是回頭的理由", en: "God’s character is the reason to return" },
      { k: "identity", zh: "沒有保證的盼望：「也未可知」", en: "Hope without guarantee: “who knows?”" }
    ],
    lesson: {
      zh: "真正的悔改在心，不在外表；而且正因為神「有恩典、有憐憫，不輕易發怒」，人才敢回頭（2:13）。",
      en: "Real repentance is of the heart, not the outward show — and people dare to return precisely because God is “gracious and merciful, slow to anger” (2:13)."
    },
    quote: { ref: "2:13",
      zh: "你們要撕裂心腸，不撕裂衣服",
      en: "Tear your heart, and not your garments" },
    keyVerses: ["2:12-13", "2:14", "2:15-17"],
    intro: {
      zh: "在蝗災與「耶和華的日子」的警告（2:1-11）之後，約珥書出現轉折：「雖然如此，你們應當禁食、哭泣、悲哀，一心歸向我」（2:12）。「撕裂心腸，不撕裂衣服」（2:13）——按當時的習慣，人在悲痛或悔罪時會撕裂衣服，神要的卻是內心的改變。歸回的理由是神的品格：「有恩典，有憐憫，不輕易發怒，有豐盛的慈愛，並且後悔不降所說的災」（2:13）。「或者他轉意後悔……也未可知」（2:14）。於是全民被招聚：新郎新婦、老者孩童都要來（2:15-16），祭司在廊子和祭壇中間哭泣禱告（2:17）。",
      en: "After the plague and the warning of the day of Yahweh (2:1–11), the book turns: “Yet even now… turn to me with all your heart, and with fasting, and with weeping, and with mourning” (2:12). “Tear your heart, and not your garments” (2:13) — in that world people tore their clothes in grief or repentance, but God wants an inward change. The reason to return is God’s character: “gracious and merciful, slow to anger, and abundant in loving kindness, and relents from sending calamity” (2:13). “Who knows? He may turn and relent” (2:14). So the whole people is summoned — bridegroom and bride, elders and children (2:15–16) — and the priests weep between the porch and the altar (2:17)."
    },
    tip: {
      zh: "「有恩典，有憐憫，不輕易發怒，有豐盛的慈愛」與出埃及記 34:6 相近；約拿在抱怨中也引用過它（拿 4:2）。",
      en: "“Gracious, merciful, slow to anger, abundant in loving kindness” echoes Exodus 34:6; Jonah quotes it too, in complaint (Jonah 4:2)."
    },
    related: ["mourning_priests", "joel", "early_rain", "day_of_lord"]
  },

  // ── 007 ──────────────────────────────────────────────────────────────────
  {
    id: "early_rain", book: "joel", no: 7, kind: "other", type: "harvest", rarity: 2,
    zh: "合宜的雨", en: "Rain in Due Measure",
    tag: { zh: "禾場必滿了麥子", en: "The Threshing Floors Will Be Full" },
    role: { zh: "神回應之後的第一批祝福", en: "The first blessings after God answers" },
    ch: [2],
    passages: ["2:18-24"],
    moves: [
      { zh: "為自己的地發熱心", en: "Jealous for His Land", ref: "2:18-19",
        dzh: "耶和華為自己的地發熱心，憐恤百姓：我必賜給你們五穀、新酒和油，使你們飽足。",
        den: "Yahweh is jealous for his land and has pity on his people: “I will send you grain, new wine and oil, and you will be satisfied.”" },
      { zh: "秋雨與春雨", en: "Former and Latter Rain", ref: "2:23-24",
        dzh: "他賜給你們合宜的秋雨和春雨；禾場必滿了麥子，酒醡與油醡新酒和油盈溢。",
        den: "He gives you the rain in due measure, former and latter; the threshing floors will be full of wheat and the vats will overflow." }
    ],
    traits: [
      { k: "strength", zh: "連地土也被告知「不要懼怕」", en: "Even the land is told “don’t be afraid”" },
      { k: "identity", zh: "從哀號轉為歡呼", en: "From wailing to rejoicing" }
    ],
    lesson: {
      zh: "神回應悔改，是從雨水、收成這些最實際的事開始（2:19, 23-24）。",
      en: "God answers repentance by starting with the most practical things — rain and harvest (2:19, 23–24)."
    },
    quote: { ref: "2:23",
      zh: "他賜給你們合宜的秋雨，為你們降下甘霖",
      en: "he gives you the former rain in just measure, and he causes the rain to come down for you" },
    keyVerses: ["2:18-19", "2:21-23", "2:24"],
    intro: {
      zh: "神回應百姓的悔改，是從這句開始：「耶和華就為自己的地發熱心，憐恤他的百姓」（2:18）。祂應許賜五穀、新酒和油（2:19），要使北方來的軍隊遠離（2:20），並叫地土、田野的走獸都不要懼怕、要歡喜（2:21-22）。「他賜給你們合宜的秋雨，為你們降下甘霖，就是秋雨、春雨，和先前一樣」（2:23）；禾場必滿，酒醡與油醡盈溢（2:24）。",
      en: "God’s answer to the people’s repentance begins here: “Then Yahweh was jealous for his land, and had pity on his people” (2:18). He promises grain, new wine and oil (2:19), will drive away the northern army (2:20), and tells the land and the animals not to be afraid but to rejoice (2:21–22). “He gives you the former rain in just measure, and he causes the rain to come down for you, the former rain and the latter rain, as before” (2:23); the threshing floors will be full and the vats overflow (2:24)."
    },
    tip: {
      zh: "和合本把 2:23 的雨寫作「秋雨、春雨」，WEB 則寫 former rain 和 latter rain（先前的雨和後來的雨）；在以色列，秋雨使乾土可耕，春雨使莊稼成熟。",
      en: "The 和合本 renders 2:23’s rains as “autumn and spring rain,” the WEB as the former and latter rain; in Israel the autumn rains make the dry ground workable and the spring rains ripen the crops."
    },
    related: ["restored_years", "rend_heart", "fountain"]
  },

  // ── 008 ──────────────────────────────────────────────────────────────────
  {
    id: "restored_years", book: "joel", no: 8, kind: "other", type: "harvest", rarity: 4,
    zh: "補還那些年所吃的", en: "The Years the Locust Ate",
    tag: { zh: "「我要補還你們」", en: "“I Will Restore to You”" },
    role: { zh: "神的補還與醫治", en: "God’s making good" },
    ch: [2],
    passages: ["2:25-27"],
    moves: [
      { zh: "我要補還你們", en: "I Will Restore to You", ref: "2:25",
        dzh: "「我打發到你們中間的大軍隊……那些年所吃的，我要補還你們。」",
        den: "“I will restore to you the years that the swarming locust has eaten… my great army, which I sent among you.”" },
      { zh: "必多吃而得飽足", en: "Plenty to Eat", ref: "2:26-27",
        dzh: "你們必多吃而得飽足，讚美神的名；也必知道神在以色列中間。",
        den: "You will have plenty to eat and be satisfied, praise the name of Yahweh, and know that he is among Israel." }
    ],
    traits: [
      { k: "strength", zh: "失去的年日也能補還", en: "Even lost years can be made good" },
      { k: "identity", zh: "蝗蟲也是「我的大軍隊」", en: "The locusts were “my great army”" }
    ],
    lesson: {
      zh: "神不只止住災害，連「那些年」的損失也應許補還；補還的目的，是讓人知道祂在他們中間（2:26-27）。",
      en: "God does not only stop the damage but promises to make good the lost years — so that people know he is among them (2:26–27)."
    },
    quote: { ref: "2:25",
      zh: "那些年所吃的，我要補還你們",
      en: "I will restore to you the years that the swarming locust has eaten" },
    keyVerses: ["2:25", "2:26", "2:27"],
    intro: {
      zh: "「我打發到你們中間的大軍隊，就是蝗蟲、蝻子、螞蚱、剪蟲，那些年所吃的，我要補還你們」（2:25）——這句話連蝗蟲也稱為神「打發」的大軍隊，並應許補還失去的年日。接著說：「你們必多吃而得飽足，就讚美為你們行奇妙事之耶和華──你們神的名。我的百姓必永遠不致羞愧」（2:26），並且「你們必知道我是在以色列中間」（2:27）。",
      en: "“I will restore to you the years that the swarming locust has eaten, the great locust, the grasshopper, and the caterpillar, my great army, which I sent among you” (2:25) — even the locusts are called God’s army, and the lost years are promised back. Then: “You will have plenty to eat, and be satisfied, and will praise the name of Yahweh, your God, who has dealt wondrously with you; and my people will never again be disappointed” (2:26), and “You will know that I am among Israel” (2:27)."
    },
    tip: {
      zh: "這是對當時百姓的應許；讀的時候可以看見神補還的心意，但不必把它直接變成「每一件失去的事都必補回」的保證。",
      en: "This is a promise to the people of Joel’s day; you can see God’s heart to restore without turning it into a guarantee that every loss will be made good."
    },
    related: ["locusts", "early_rain", "spirit_poured"]
  },

  // ── 009 ──────────────────────────────────────────────────────────────────
  {
    id: "spirit_poured", book: "joel", no: 9, kind: "heavenly", type: "heaven", rarity: 5,
    zh: "靈澆灌凡有血氣的", en: "The Spirit Poured on All Flesh",
    tag: { zh: "兒女說預言，老年人做異夢", en: "Sons and Daughters Prophesy, Old Men Dream" },
    role: { zh: "約珥書最著名的應許", en: "Joel’s best-known promise" },
    ch: [2],
    passages: ["2:28-29"],
    moves: [
      { zh: "澆灌凡有血氣的", en: "On All Flesh", ref: "2:28",
        dzh: "神說：「以後，我要將我的靈澆灌凡有血氣的。」你們的兒女要說預言。",
        den: "God says: “Afterward I will pour out my Spirit on all flesh,” and your sons and daughters will prophesy." },
      { zh: "老年人做異夢，少年人見異象", en: "Dreams and Visions", ref: "2:28-29",
        dzh: "老年人要做異夢，少年人要見異象；連僕人和使女，神也要澆灌祂的靈。",
        den: "Old men will dream dreams and young men see visions — and God will pour out his Spirit even on servants and handmaids." }
    ],
    traits: [
      { k: "strength", zh: "不分老少、男女、尊卑", en: "No age, sex or rank left out" },
      { k: "identity", zh: "給「以後」的應許", en: "A promise for “afterward”" }
    ],
    lesson: {
      zh: "神的靈不再只臨到少數人，而是「凡有血氣的」；每個年紀、每種身份都包括在內（2:28-29）。",
      en: "God’s Spirit is no longer for a few but for “all flesh”; every age and every station is included (2:28–29)."
    },
    quote: { ref: "2:28",
      zh: "我要將我的靈澆灌凡有血氣的",
      en: "I will pour out my Spirit on all flesh" },
    keyVerses: ["2:28", "2:29", "2:30-32"],
    intro: {
      zh: "在雨水和收成的應許之後，神說：「以後，我要將我的靈澆灌凡有血氣的。你們的兒女要說預言；你們的老年人要做異夢，少年人要見異象」（2:28）；「在那些日子，我要將我的靈澆灌我的僕人和使女」（2:29）。使徒行傳 2:16-21 引用了 2:28-32，稱「這正是先知約珥所說的」。",
      en: "After the promises of rain and harvest God says: “It will happen afterward, that I will pour out my Spirit on all flesh; and your sons and your daughters will prophesy. Your old men will dream dreams. Your young men will see visions” (2:28), and “on the servants and on the handmaids in those days, I will pour out my Spirit” (2:29). Acts 2:16–21 quotes 2:28–32 and says, “this is what was spoken through the prophet Joel.”"
    },
    tip: {
      zh: "約珥書 2:28 寫「以後」；使徒行傳 2:17 引用時寫作「在末後的日子」。",
      en: "Joel 2:28 says “afterward”; Acts 2:17 quotes it as “in the last days.”"
    },
    related: ["call_on_name", "restored_years", "joel", "fountain"]
  },

  // ── 010 ──────────────────────────────────────────────────────────────────
  {
    id: "call_on_name", book: "joel", no: 10, kind: "other", type: "faith", rarity: 3,
    zh: "凡求告耶和華名的", en: "Whoever Calls on Yahweh’s Name",
    tag: { zh: "天上地下的奇事，與逃脫的路", en: "Signs in Heaven and Earth — and a Way of Escape" },
    role: { zh: "耶和華日子之前的徵兆", en: "Signs before the day of Yahweh" },
    ch: [2],
    passages: ["2:30-32"],
    moves: [
      { zh: "天上地下的奇事", en: "Wonders in Heaven and Earth", ref: "2:30-31",
        dzh: "天上地下要顯出奇事：有血、有火、有煙柱；日頭變黑暗，月亮變為血。",
        den: "Wonders in the heavens and the earth — blood, fire and pillars of smoke; the sun turned to darkness, the moon to blood." },
      { zh: "求告的必得救", en: "Whoever Calls Is Saved", ref: "2:32",
        dzh: "凡求告耶和華名的就必得救；在錫安山、耶路撒冷必有逃脫的人。",
        den: "Whoever calls on Yahweh’s name shall be saved; on Mount Zion and in Jerusalem there will be those who escape." }
    ],
    traits: [
      { k: "strength", zh: "出路向每個求告的人敞開", en: "A way open to everyone who calls" },
      { k: "identity", zh: "「耶和華所召的」", en: "“Those whom Yahweh calls”" }
    ],
    lesson: {
      zh: "在最可畏的日子來到之前，神已經預備了出路：「凡求告耶和華名的就必得救」（2:32）。",
      en: "Before the most terrible day arrives God has already prepared a way out: “whoever will call on Yahweh’s name shall be saved” (2:32)."
    },
    quote: { ref: "2:32",
      zh: "凡求告耶和華名的就必得救",
      en: "whoever will call on Yahweh’s name shall be saved" },
    keyVerses: ["2:30-31", "2:32"],
    intro: {
      zh: "在澆灌聖靈的應許之後，經文轉到「耶和華大而可畏的日子」之前的徵兆：天上地下的奇事——血、火、煙柱（2:30），日頭變黑暗，月亮變為血（2:31）。但這段的重點是一條出路：「凡求告耶和華名的就必得救」（2:32）。保羅在羅馬書 10:13 引用這句（「凡求告主名的就必得救」），使徒行傳 2:21 也引用了。",
      en: "After the promise of the outpoured Spirit the text turns to the signs before “the great and terrible day of Yahweh”: wonders in heaven and earth — blood, fire and pillars of smoke (2:30), the sun darkened, the moon turned to blood (2:31). But the point of the passage is a way out: “whoever will call on Yahweh’s name shall be saved” (2:32). Paul quotes this in Romans 10:13 (“everyone who calls on the name of the Lord will be saved”), and Acts 2:21 does too."
    },
    tip: {
      zh: "2:32 的結尾把兩件事放在一起：人「求告」，也有「耶和華所召的」——得救既是人的回應，也是神的呼召。",
      en: "The end of 2:32 sets two things side by side: people “call,” and there are those “whom Yahweh calls” — salvation is both a human response and a divine summons."
    },
    related: ["day_of_lord", "spirit_poured", "valley_decision"]
  },

  // ── 011 ──────────────────────────────────────────────────────────────────
  {
    id: "valley_decision", book: "joel", no: 11, kind: "other", type: "power", rarity: 3,
    zh: "約沙法谷・斷定谷", en: "The Valley of Jehoshaphat / Decision",
    tag: { zh: "萬民被聚集受審", en: "The Nations Gathered for Judgment" },
    role: { zh: "約珥書的終局審判", en: "Joel’s final judgment scene" },
    ch: [3],
    passages: ["3:1-3", "3:9-14"],
    moves: [
      { zh: "帶他們下到約沙法谷", en: "Down to the Valley of Jehoshaphat", ref: "3:2",
        dzh: "神要聚集萬民，在約沙法谷審判他們，因為他們分散了祂的百姓、分取了祂的地土。",
        den: "God will gather all nations to the valley of Jehoshaphat and judge them there for scattering his people and dividing his land." },
      { zh: "斷定谷", en: "The Valley of Decision", ref: "3:13-14",
        dzh: "「開鐮吧！莊稼熟了；踐踏吧！酒醡滿了。」許多人在斷定谷，因為耶和華的日子臨近。",
        den: "“Put in the sickle, for the harvest is ripe; tread, for the winepress is full.” Multitudes fill the valley of decision, for the day of Yahweh is near." }
    ],
    traits: [
      { k: "identity", zh: "同一個審判之地的兩個名字？", en: "Two names for one place of judgment?" },
      { k: "weakness", zh: "欺壓神的百姓（3:2-3）", en: "Oppressing God’s people (3:2–3)" }
    ],
    lesson: {
      zh: "審判的根據，是列國怎樣對待神的百姓和祂的地土（3:2-3）；「斷定谷」是神作出判決的地方。",
      en: "The grounds of judgment are how the nations treated God’s people and land (3:2–3); the “valley of decision” is where God gives his verdict."
    },
    quote: { ref: "3:2",
      zh: "我要聚集萬民，帶他們下到約沙法谷，在那裡施行審判",
      en: "I will gather all nations, and will bring them down into the valley of Jehoshaphat" },
    keyVerses: ["3:1-3", "3:12", "3:13-14"],
    intro: {
      zh: "第 3 章一開始，神說：「到那日，我使猶大和耶路撒冷被擄之人歸回的時候，我要聚集萬民，帶他們下到約沙法谷，在那裡施行審判」（3:1-2），因為他們分散了神的百姓，又分取祂的地土（3:2）。後來又說：「萬民都當興起，上到約沙法谷；因為我必坐在那裡，審判四圍的列國」（3:12）；「開鐮吧！因為莊稼熟了；踐踏吧！因為酒醡滿了」（3:13）；「許多許多的人在斷定谷」（3:14）。「約沙法」的意思是「耶和華審判」。這個谷的位置和所指，歷來有不同解釋，有人視為象徵性的名字。",
      en: "Chapter 3 begins: “In that day, when I restore the fortunes of Judah and Jerusalem, I will gather all nations, and will bring them down into the valley of Jehoshaphat; and I will execute judgment on them there” (3:1–2), for they scattered God’s people and divided his land (3:2). Later: “Let the nations arouse themselves, and come up to the valley of Jehoshaphat; for there will I sit to judge all the surrounding nations” (3:12); “Put in the sickle; for the harvest is ripe… tread, for the wine press is full” (3:13); “Multitudes, multitudes in the valley of decision!” (3:14). “Jehoshaphat” means “Yahweh judges.” Where this valley is, and what it refers to, has been read in different ways; some take the name as symbolic."
    },
    tip: {
      zh: "「約沙法谷」（3:2, 12）和「斷定谷」（3:14）很可能是同一個審判之地的兩個名字。",
      en: "“The valley of Jehoshaphat” (3:2, 12) and “the valley of decision” (3:14) are quite likely two names for the same place of judgment."
    },
    related: ["day_of_lord", "plowshares", "call_on_name"]
  },

  // ── 012 ──────────────────────────────────────────────────────────────────
  {
    id: "plowshares", book: "joel", no: 12, kind: "other", type: "scheme", rarity: 2,
    zh: "犁頭打成刀劍", en: "Beat Plowshares Into Swords",
    tag: { zh: "把和平的話倒過來", en: "Peace Turned Upside Down" },
    role: { zh: "向列國發出的挑戰", en: "A challenge to the nations" },
    ch: [3],
    passages: ["3:9-11"],
    moves: [
      { zh: "預備打仗", en: "Prepare for War", ref: "3:9-10",
        dzh: "要在萬民中宣告：預備打仗！把犁頭打成刀劍，把鐮刀打成戈矛。",
        den: "Proclaim among the nations: prepare for war! Beat your plowshares into swords and your pruning hooks into spears." },
      { zh: "軟弱的要說：我有勇力", en: "“I Am Strong”", ref: "3:10-11",
        dzh: "連軟弱的也要說「我有勇力」；列國速速聚集，先知禱告：求你使你的大能者降臨。",
        den: "Even the weak must say, “I am strong”; the nations hurry together — and the prophet prays: “Cause your mighty ones to come down there, Yahweh.”" }
    ],
    traits: [
      { k: "identity", zh: "把和平的話倒過來", en: "The peace-saying reversed" },
      { k: "weakness", zh: "軟弱的也得硬說自己強", en: "Even the weak must claim strength" }
    ],
    lesson: {
      zh: "這句話與以賽亞書 2:4、彌迦書 4:3 的「將刀打成犁頭」正好相反：戰爭是審判的前奏，而和平仍是神的最終盼望。",
      en: "This line is the reverse of Isaiah 2:4 and Micah 4:3, “beat swords into plowshares”: war is the prelude to judgment, while peace remains God’s final hope."
    },
    quote: { ref: "3:10",
      zh: "要將犁頭打成刀劍，將鐮刀打成戈矛",
      en: "Beat your plowshares into swords, and your pruning hooks into spears." },
    keyVerses: ["3:9-10", "3:11-12"],
    intro: {
      zh: "3:9-11 是向列國發出的邀請——更像是挑戰：「要預備打仗；激動勇士，使一切戰士上前來」（3:9）。「要將犁頭打成刀劍，將鐮刀打成戈矛；軟弱的要說：我有勇力」（3:10）。這句話與以賽亞書 2:4、彌迦書 4:3 的「將刀打成犁頭，把槍打成鐮刀」正好相反：那裡是和平的盼望，這裡是列國備戰、被召到審判之地。在這之後約珥禱告：「耶和華啊，求你使你的大能者降臨」（3:11）。",
      en: "Joel 3:9–11 is an invitation to the nations — more like a challenge: “Prepare for war! Stir up the mighty men. Let all the soldiers draw near” (3:9). “Beat your plowshares into swords, and your pruning hooks into spears. Let the weak say, ‘I am strong’” (3:10). It is the exact reverse of Isaiah 2:4 and Micah 4:3, “beat swords into plowshares, and spears into pruning hooks”: there it is the hope of peace, here the nations arm themselves and are summoned to judgment. Joel then prays, “Cause your mighty ones to come down there, Yahweh” (3:11)."
    },
    tip: {
      zh: "把約珥書 3:10、以賽亞書 2:4 和彌迦書 4:3 放在一起讀，會看見同一組意象怎樣在不同的處境裡反方向使用。",
      en: "Read Joel 3:10, Isaiah 2:4 and Micah 4:3 together and see how the same images are turned in opposite directions in different settings."
    },
    related: ["valley_decision", "day_of_lord", "fountain"]
  },

  // ── 013 ──────────────────────────────────────────────────────────────────
  {
    id: "fountain", book: "joel", no: 13, kind: "other", type: "heaven", rarity: 3,
    zh: "從殿中流出的泉源", en: "The Fountain From Yahweh’s House",
    tag: { zh: "大山滴甜酒，小山流奶子", en: "Mountains Dripping Sweet Wine" },
    role: { zh: "約珥書的結尾", en: "The close of the book" },
    ch: [3],
    passages: ["3:16-21"],
    moves: [
      { zh: "耶和華作避難所", en: "A Refuge for His People", ref: "3:16-17",
        dzh: "耶和華從錫安吼叫，天地震動；祂卻要作百姓的避難所，並住在錫安。",
        den: "Yahweh roars from Zion and heaven and earth shake — yet he is a refuge to his people, dwelling in Zion." },
      { zh: "泉源流出來", en: "A Fountain Flows", ref: "3:18",
        dzh: "大山滴甜酒，小山流奶子；泉源從耶和華的殿中流出，滋潤什亭谷。",
        den: "The mountains drop sweet wine, the hills flow with milk, and a fountain flows from Yahweh’s house to water the valley of Shittim." }
    ],
    traits: [
      { k: "strength", zh: "耶和華住在其中", en: "Yahweh dwells there" },
      { k: "identity", zh: "生命從殿中流出", en: "Life flows out of the house" }
    ],
    lesson: {
      zh: "約珥書以耶和華的同在作結：祂是避難所，祂的殿流出生命；「耶和華住在錫安」（3:17, 21）。",
      en: "Joel ends with the presence of Yahweh: he is a refuge and life flows from his house — “Yahweh dwells in Zion” (3:17, 21)."
    },
    quote: { ref: "3:18",
      zh: "必有泉源從耶和華的殿中流出來",
      en: "a fountain will flow out from Yahweh’s house" },
    keyVerses: ["3:16-17", "3:18", "3:20-21"],
    intro: {
      zh: "最後一段，在審判之後出現盼望。耶和華「必從錫安吼叫」，天地震動，「卻要作他百姓的避難所」（3:16）。祂要住在錫安，耶路撒冷必成為聖（3:17）。「到那日，大山要滴甜酒；小山要流奶子；猶大溪河都有水流。必有泉源從耶和華的殿中流出來，滋潤什亭谷」（3:18）。埃及和以東要荒涼（3:19），但猶大必存到永遠（3:20）；全書最後一句是「因為耶和華住在錫安」（3:21）。",
      en: "The last section brings hope after judgment. Yahweh “will roar from Zion,” the heavens and earth shake, “but Yahweh will be a refuge to his people” (3:16). He dwells in Zion and Jerusalem will be holy (3:17). “In that day… the mountains will drop down sweet wine, the hills will flow with milk, all the brooks of Judah will flow with waters, and a fountain will flow out from Yahweh’s house, and will water the valley of Shittim” (3:18). Egypt and Edom will be desolate (3:19), but Judah will be inhabited forever (3:20); the book’s last line is “for Yahweh dwells in Zion” (3:21)."
    },
    tip: {
      zh: "以西結書 47:1-12 和啟示錄 22:1-2 也有水從殿或寶座流出的畫面，可以與約珥書 3:18 對照閱讀。",
      en: "Ezekiel 47:1–12 and Revelation 22:1–2 also picture water flowing from the temple or the throne; compare them with Joel 3:18."
    },
    related: ["early_rain", "spirit_poured", "plowshares", "joel"]
  }

);
