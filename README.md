![](https://i.imgur.com/KdyUDTD.png)

# 六角學院 2023 體驗營 | 切版任務作業二 - AI 工具王

此專案為六角學院 2023 軟體工程師體驗營的切版任務作業二之成品

這是前端展示網站，提供首頁與定價頁、AI 工具名稱搜尋、分類篩選、排序、行動導覽與 FAQ。工具、模型價格與付款說明皆為展示資料，尚未串接 AI API、帳號或金流；社群名稱為展示文字。

AI 工具每頁顯示 6 筆，資料超過一頁才顯示分頁。排序依資料陣列順序及其反向排列，未使用建立日期。

- [線上部署連結](https://hex2023.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/9YP4vKgISeAZWvXy82NQ1Q/2023-%E9%AB%94%E9%A9%97%E7%87%9F?node-id=39-2&t=XxhfzaL2hgw32Rat-0)

## 使用技術

- [Next.js 16.3.8](https://nextjs.org/) App Router、React / React DOM 19.3.0
- CSS Modules、`next/font` 字型與 `next/image` 圖片
- 原生 `<dialog>` 行動選單，支援焦點管理、Escape 關閉與背景捲動鎖定
- 使用 Next.js 預設 Turbopack 配置，首頁與定價頁在建置時預先產生

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

需要 Node.js 22.18 以上，建議 Node.js 24 LTS。首次建置需要網路下載 Google Fonts 的 Noto Sans TC。

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2023-mission2.git
```

套件安裝

```sh
$ cd Hex2023-mission2
$ npm ci
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

**正式建置與啟動**

```sh
npm run build
npm start
```

**驗證與健檢**

```sh
npm run lint
npm run check:unused
npm audit
npm outdated
npx playwright install chromium
npm run build
npm test
```

Biome 檢查 JavaScript、CSS 與無障礙問題；Knip 檢查未使用的檔案、匯出與套件，使用 `jsconfig.json` 解析路徑別名。兩者皆為開發依賴。

Playwright 在本機正式建置上驗證桌面與手機版的兩個頁面、圖片載入、搜尋／篩選／排序、FAQ 和行動選單。測試使用 `127.0.0.1:3100`，請先完成建置；它不驗證遠端部署。測試產物位於 `test-results/`，不提交到 Git。

## 頁面路徑（Router Link）

位於 `app`

結構說明

```
app
├── pricing                              定價頁面（/pricing）
├── favicon.ico                          網站圖示
├── globals.css                          全域樣式
├── scrollBar.css                        頁面卷軸樣式
├── variables.css                        樣式變數
├── layout.js                            網站整體架構，導覽列與頁尾也在這被引入並使用
└── page.js                              首頁（/）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components
├── home                                 首頁元件庫
├── layout                               導覽列、頁尾以及容器元件
├── pricing                              定價頁面元件庫
├── ui                                   展示性元件庫
├── AiToolsFilter.js                     AI 工具過濾器元件
├── AiToolsFilter.module.css             AI 工具過濾器元件的樣式
├── AiToolsList.js                       AI 工具清單元件（支援注入資料來源）
├── AiToolsList.module.css               AI 工具清單元件的樣式
├── AiToolsPagination.js                 依實際資料筆數顯示的 AI 工具分頁元件
├── AiToolsPagination.module.css         AI 工具分頁元件的樣式
├── AiToolsSearchForm.js                 AI 工具搜尋列元件
└── AiToolsSearchForm.module.css         AI 工具搜尋列元件的樣式
```

## 共用資料（Data）

位於 `data`

```
data
├── aiToolsData.js                       AI 工具清單的預設資料來源
└── navLinks.js                          首頁、定價頁的共用導覽連結
```

## 自訂 Hook

位於 `hooks`

```
hooks
└── useAiTools.js                        AI 工具清單共用的搜尋、篩選、排序與分頁邏輯
```

## 靜態檔案

位於 `public/image`

結構說明

```
public
└── image                                存放圖片
    ├── ai-tools                         AI 工具縮圖
    ├── animation                        用來做動畫的圖案
    ├── avatars                          客戶頭像
    ├── icons                            在網站上使用的各式 icon
    ├── partner-logos                    合作夥伴標誌
    ├── og-image.webp                    社群媒體縮圖
    └── logo.webp                        網站 Logo
```

## 使用的套件 & 工具

- [next@16.3.8](https://www.npmjs.com/package/next)
- [react@19.3.0](https://www.npmjs.com/package/react)
- [react-dom@19.3.0](https://www.npmjs.com/package/react-dom)
- [@biomejs/biome@2.5.15](https://www.npmjs.com/package/@biomejs/biome)（開發依賴）
- [knip@6.39.0](https://www.npmjs.com/package/knip)（開發依賴）
- [@playwright/test@1.63.0](https://www.npmjs.com/package/@playwright/test)（開發依賴）
- `package.json` 使用 `postcss: ^8.5.28` override，維持 Next.js 的 PostCSS 在已修補範圍；升級 Next.js 時重新檢查是否仍需要
- 原生 CSS 跑馬燈動畫

以下為素材製作工具：

- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4o](https://openai.com/)
