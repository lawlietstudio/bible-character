# 聖經人物卡 · Bible Character Cards

用「人物卡」認識聖經：中英對照、圖文並茂、Pokémon TCG Pocket 風格的收集卡。

| 部 | 書卷 | 卡數 | 章／節 |
|---|---|---|---|
| 正典第 8 卷 | 路得記 Ruth | 12 | 4 章／85 節 |
| 正典第 24 卷 | 耶利米書 Jeremiah | 23 | 52 章／1,364 節 |
| 正典第 25 卷 | 耶利米哀歌 Lamentations | 12 | 5 章／154 節 |
| 正典第 26 卷 | 以西結書 Ezekiel | 22 | 48 章／1,273 節 |
| 正典第 27 卷 | 但以理書 Daniel | 19 | 12 章／357 節 |
| 正典第 28 卷 | 何西阿書 Hosea | 16 | 14 章／197 節 |
| 正典第 29 卷 | 約珥書 Joel | 13 | 3 章／73 節 |
| 正典第 30 卷 | 阿摩司書 Amos | 16 | 9 章／146 節 |
| 正典第 31 卷 | 俄巴底亞書 Obadiah | 11 | 1 章／21 節 |
| 正典第 32 卷 | 約拿書 Jonah | 12 | 4 章／48 節 |
| 正典第 33 卷 | 彌迦書 Micah | 17 | 7 章／105 節 |
| 正典第 34 卷 | 那鴻書 Nahum | 14 | 3 章／47 節 |
| 正典第 35 卷 | 哈巴谷書 Habakkuk | 14 | 3 章／56 節 |
| 正典第 36 卷 | 西番雅書 Zephaniah | 15 | 3 章／53 節 |
| 正典第 37 卷 | 哈該書 Haggai | 11 | 2 章／38 節 |
| 正典第 38 卷 | 撒迦利亞書 Zechariah | 24 | 14 章／211 節 |
| 正典第 39 卷 | 瑪拉基書 Malachi | 12 | 4 章／55 節 |
| 正典第 40 卷 | 馬太福音 Matthew | 42 | 28 章／1,071 節 |
| 正典第 41 卷 | 馬可福音 Mark | 22 | 16 章／678 節 |
| 正典第 42 卷 | 路加福音 Luke | 26 | 24 章／1,151 節 |
| 正典第 43 卷 | 約翰福音 John | 24 | 21 章／879 節 |
| 正典第 44 卷 | 使徒行傳 Acts | 27 | 28 章／1,007 節 |
| 正典第 45 卷 | 羅馬書 Romans | 17 | 16 章／436 節 |
| 正典第 46 卷 | 哥林多前書 1 Corinthians | 17 | 16 章／437 節 |
| 正典第 47 卷 | 哥林多後書 2 Corinthians | 18 | 13 章／257 節 |

做書的次序：從耶利米書起，跟著正典次序往下做（耶利米書 ✔ → 耶利米哀歌 ✔ → 以西結書 ✔ → 何西阿書 ✔ → 約珥書 ✔ → 阿摩司書 ✔ → 俄巴底亞書 ✔ → 約拿書 ✔ → 彌迦書 ✔ → 那鴻書 ✔ → 哈巴谷書 ✔ → 西番雅書 ✔ → 哈該書 ✔ → 撒迦利亞書 ✔ → 瑪拉基書 ✔ → 馬太福音 ✔ → 馬可福音 ✔ → 路加福音 ✔ → 約翰福音 ✔ → 使徒行傳 ✔ → 羅馬書 ✔ → 哥林多前書 ✔ → 哥林多後書 ✔ → 加拉太書 → …；但以理書、路得記已完成會跳過）。

**線上版：<https://lawlietstudio.github.io/bible-character/>**（GitHub Pages，每次 push 到 `main` 自動更新）

## 開啟

純靜態網站，不需要安裝或編譯。

```powershell
# 方法 1：直接雙擊 index.html（需要網絡才會載入 Google Fonts，沒有網絡會改用系統字體）
# 方法 2：開本機伺服器
python -m http.server 5173
# 然後開 http://localhost:5173
```

## 功能

- **書卷切換**：頁首的 📖 下拉選單，按「歷史書／先知書…」分組、依正典次序排列；網站記得你上次看的書卷。網址：`#cards/<書>`、`#read/<書>/<章>`、`#card/<卡id>`
- **按需載入**：每卷的經文（`data/<書>.text.js`）只在你第一次進入那卷書時才載入，所以書卷再多也不會拖慢首頁
- **長篇書卷**（超過 16 章，如耶利米書 52 章）：章節地圖改為緊湊的數字格（數字旁是該章的卡數），讀經頁改用「← 章節下拉選單 →」跳章
- **中文譯本**：經文除了《和合本》，每節下面還有一行白話意譯的《當代譯本》（Biblica 開放版），好讀得多；設定裡可選「和合本＋當代／只看和合本／只看當代譯本」。朗讀時除非選「只看和合本」，都讀當代譯本。當代譯本是自由度較大的意譯，細讀時請對照和合本
- 卡牌牆：按類別、章節地圖、關鍵字篩選；可按書中次序、稀有度、出場節數排序
- 卡面：屬性、出場節數、兩項關鍵事蹟（附經文出處）、強項／弱點、金句、稀有度（◆ → ★ → ♛）；滑鼠移上去有 3D 傾斜與閃卡效果
- 詳情視窗：簡介、關鍵事蹟、**經文中英對照**、教訓、讀經小貼士、相關人物（← → 鍵切換，Esc 關閉）
- 讀經頁：逐章中英對照，經文裡的人名可點開對應的卡
- 語言切換：中英／中文／EN；「我已認識這位」收集進度存在瀏覽器（localStorage），按書卷分開計算
- **設定**（頁首 `Aa 設定`）
  - 文字大小：小／標準／大／特大，套用於經文、簡介、詳情視窗和讀經頁（卡面文字固定，要看大字請點開卡片）
  - 朗讀（Text-to-speech，用瀏覽器內建的 Web Speech API，不需要網絡服務）：
    讀經頁可「朗讀本章」或按每節旁的 ▶ 由該節開始；詳情視窗可朗讀簡介／事蹟／經文／教訓，或整張卡。
    底部播放列有上一段／暫停／下一段／速度／停止，正在讀的段落會高亮並自動捲動。
    可選朗讀語言（跟隨顯示／中英輪流／只讀中文／只讀英文）、速度，以及中文、英文各自的語音（可揀 zh-HK 廣東話）。
  - 所有設定存在瀏覽器（localStorage）

## 專案結構

```
index.html              頁面外殼
css/style.css           全部樣式（卡面用 cqw 容器單位，所以卡可以任意縮放）
js/app.js               渲染、篩選、詳情視窗、讀經頁、路由、書卷切換、設定面板、朗讀內容的組裝
js/tts.js               朗讀引擎（排隊、切句、暫停／上下段、揀語音；與聖經內容無關）
data/common.js          共用：屬性（TYPES）、類別（KINDS）
data/<書>.cards.js      ★ 該書的資料與全部人物卡內容（中英）
data/<書>.text.js       該書經文全文（和合本＋WEB，由腳本產生，勿手改；按需載入，不用寫進 index.html）
data/<書>.ccb.js        該書《當代譯本》白話意譯（Biblica 開放版，CC BY-SA 4.0，由 fetch_ccb.py 產生，勿手改；隨經文一起按需載入，缺少時網站照常運作）
assets/art/<書>/        網頁用插畫（WebP）
art/raw/<書>/           Codex 生成的原圖（PNG，約 3 MB 一張）
scripts/                見下
```

## 工作流程

```powershell
# 1. 抓經文（和合本繁體 + World English Bible，皆公有領域）
python scripts/fetch_verses.py ruth
node scripts/show.js ruth 1:1-22          # 把經文印出來細讀（寫卡之前先讀！）
python scripts/fetch_ccb.py ruth          # 白話意譯：當代譯本開放版（--all 全部書卷）；會核對節數是否和和合本一致

# 2. 寫／改人物卡內容：data/<書>.cards.js
#    經文引用只寫章節（如 "6:10"、"3:16-18"），網頁會自動帶出中英經文；
#    quote 是經文的摘錄，必須與原文一字不差。

# 3. 驗證：引用是否存在、金句是否真的出自該節、圖是否齊全、卡面文字會不會太長
node scripts/validate.js                  # 全部書卷；加書卷 id 只驗一卷

# 4. 生成插畫（用 Codex CLI 內建的 image_gen）：prompt 在 scripts/art_prompts.json
$env:CODEX_EXE = "C:\Program Files\WindowsApps\OpenAI.Codex_<版本>\app\resources\codex.exe"
python scripts/gen_art.py --book ruth --jobs 4   # 該書還沒有圖的卡
python scripts/gen_art.py ruth --force           # 重新生成單張（參數是卡 id）
python scripts/optimize_art.py                   # PNG → WebP
```

> `codex.exe` 在 Microsoft Store 版 Codex 的安裝目錄裡；`Get-AppxPackage OpenAI.Codex` 可查出路徑。
> 找不到時 `gen_art.py` 會提示設定 `CODEX_EXE`。

## 畫風

目前全部卡牌使用「**90 年代復古賽璐珞**」日系畫風（2026-11-22 從 7 種日系畫風中選定）。共用畫風的提示在 `scripts/art_prompts.json` 的 `common`，之後新書卷會自動沿用。

`variants` 存放其他可替換的畫風：`anime_film`、`watercolor`、`gacha`、`chibi`、`manga_mono`、`ukiyoe`，以及原本的歐美插畫風 `painterly`（66 張已全部備份）。

```powershell
python scripts/gen_art.py daniel --variant all        # 一個角色，所有畫風（比較用）
python scripts/gen_art.py --book ruth --variant gacha # 某卷書改用某畫風
python scripts/optimize_art.py                        # 輸出到 assets/art-variants/<畫風>/<書>/<卡>.webp
```

- 比較頁：開 `styles.html`（同一角色、各畫風並排；每個都有「看成卡片」）
- 預覽整個網站：在網址加 `?style=<畫風>`，例如 `index.html?style=painterly` 看回原本畫風；沒有該畫風圖片的卡會自動沿用目前畫風
- 要換掉預設畫風：用 `--variant` 重畫全部卡，再把新畫風的圖換成 `assets/art/`、舊的備份成另一個 variant（做法參考本次的換畫風腳本思路：搬資料夾 + 對調 `common` 與 `variants`）
- `art/raw-variants/painterly/`（約 200 MB 原圖）只是備份，不需要可以刪除；網站用的是 `assets/` 下的 WebP

## 加入新書卷

1. `scripts/fetch_verses.py` 的 `BOOKS` 加上該書（FHL 簡稱、bible-api 名稱、章數），執行並讀一遍經文；`scripts/fetch_ccb.py` 的 `BOOKS` 也加上該書（ebible.org 的 USFM 代號，如 JON、MIC、NAM）並執行，取得當代譯本（`validate.js` 會檢查它和和合本逐節對得上）
2. 新增 `data/<書>.cards.js`：`window.BOOKS.push({ id, zh, en, abbr, order（正典第幾卷）, section:{zh,en}（歷史書／先知書…）, chapters, fan:[3 個卡 id], summary, outline（每章一個標題）, notes })` 和 `window.CARDS.push(...)`（卡 id 在所有書卷之間不可重複；`no` 從 1 起連號）
3. `scripts/art_prompts.json` 的 `books` 加該書的 `setting`（年代、地方的畫風）和每張卡的 `scenes`，生成插畫
4. `index.html` 加一個 `<script src="data/<書>.cards.js">`（經文檔不用加，會按需載入）
5. 需要新的卡片屬性顏色時：`data/common.js` 的 `TYPES` 加一項，`css/style.css` 加對應的 `[data-type="…"]` 顏色
6. `node scripts/validate.js`，再用瀏覽器看一遍（尤其是卡面文字有沒有擠出來）
7. `git add -A && git commit && git push`：GitHub Actions 會自動驗證並部署（見下）

## 部署（CI/CD）

`.github/workflows/pages.yml`：push 到 `main` 時先跑 `node scripts/validate.js`（經文引用、金句、圖片、卡片連結），**通過才**把網站部署到 GitHub Pages；Pull Request 只跑驗證、不部署。部署時只會帶上瀏覽器需要的檔案（`index.html`、`styles.html`、`css/`、`js/`、`data/`、`assets/`）。

- 原圖 `art/raw/`、`art/raw-variants/`（約 630 MB）和生成記錄 `art/logs/` 在 `.gitignore` 裡，不會上傳；要重新優化圖片就得在本機重新生成。
- 第一次設定時 Pages 的來源要選「GitHub Actions」（`gh api -X POST repos/<帳號>/<repo>/pages -f build_type=workflow`）。

## 關於朗讀

- 可用的語音取決於你的瀏覽器和作業系統（Windows 10/11 通常內建國語、粵語 zh-HK、台灣話和英文語音；Edge 另有更自然的「Online / Natural」語音）。沒有粵語時，設定面板會提示，可到系統設定新增語言語音。
- 聲音是即時合成的，不會上傳任何內容。

## 版權與說明

- 中文經文：《和合本》（CUV），來源信望愛站 <https://bible.fhl.net>；英文經文：World English Bible，來源 <https://bible-api.com>。兩者皆屬公有領域。
- 白話意譯：《聖經，當代譯本開放資源》（Open Chinese Contemporary Bible, Traditional Script），版權所有 © 1979, 2005, 2007, 2012, 2023 Biblica, Inc.，依 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) 授權，來源 <https://ebible.org/cmncbt/>，原作品在 www.biblica.com 和 open.bible 可以免費使用。本站只把它按節拆開，並移除小標題、註腳符號和詩體換行，用字沒有改動；`data/*.ccb.js` 因此同樣以 CC BY-SA 4.0 分享，每個檔案開頭都有授權聲明（`validate.js` 會檢查聲明還在）。
  - 為什麼不用《現代中文譯本》或《新普及譯本》？它們也是好讀的意譯，但版權屬於出版機構，沒有開放授權；本站是公開網站，不能直接放進去。想用的話，需要先向版權持有人取得許可。
- 插畫全部由 AI 生成，是想像而非歷史圖像（尤其面容與服飾）。
- 人物簡介與「強項／弱點／教訓」是輔助讀經的整理；有不同解釋之處已標明，請以經文為準。
