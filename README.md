![](https://i.imgur.com/KdyUDTD.png)

# 六角學院 2023 體驗營｜AI 工具王

切版任務作業二，使用 Next.js App Router 與 React 製作首頁（`/`）及定價頁（`/pricing`）。

- [線上網站](https://hex2023.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/9YP4vKgISeAZWvXy82NQ1Q/2023-%E9%AB%94%E9%A9%97%E7%87%9F?node-id=39-2&t=XxhfzaL2hgw32Rat-0)

## 功能與限制

支援 AI 工具名稱搜尋、分類篩選、排序、FAQ 展開收合，以及可用 Escape 關閉的行動導覽。行動選單使用原生 `<dialog>`，開啟時管理焦點並鎖定背景捲動。

工具每頁顯示 6 筆，資料超過一頁才顯示分頁。排序使用資料陣列的原始順序或反向順序，沒有依建立日期排序。

本站為前端展示，工具、模型價格、付款說明與社群名稱皆為展示資料，尚未串接 AI API、帳號或金流。

## 本機開發

需要 Node.js 22.18 以上，建議使用 Node.js 26 LTS。建置時需連線下載 Google Fonts 的 Noto Sans TC。

```sh
git clone https://github.com/happyloa/Hex2023-mission2.git
cd Hex2023-mission2
npm ci
npm run dev
```

開啟 <http://localhost:3000/>。

正式建置與啟動：

```sh
npm run build
npm start
```

使用 Next.js 預設 Turbopack；首頁與定價頁在建置時預先產生。樣式使用 CSS Modules，字型與圖片分別使用 `next/font`、`next/image`，跑馬燈以原生 CSS 動畫實作。

## 驗證

```sh
npm audit
npm outdated
npx playwright install chromium
npm run build
npm test
```

Playwright 以 Chromium 測試桌面與手機尺寸下的兩個頁面、圖片載入、搜尋／篩選／排序、FAQ 與行動導覽。

測試會啟動 `127.0.0.1:3100` 的本機正式版本，執行前須先建置，不會驗證遠端部署。測試產物放在 `test-results/`，已由 Git 忽略。

## 專案結構

| 路徑                  | 內容                                                   |
| --------------------- | ------------------------------------------------------ |
| `app/`                | 首頁、定價頁、根佈局、metadata 與全域樣式              |
| `components/`         | 工具清單、搜尋、篩選、分頁及各頁面元件；樣式與元件並列 |
| `components/layout/`  | 共用導覽、行動選單、頁尾與容器                         |
| `components/ui/`      | 卡片、FAQ 手風琴及其他展示元件                         |
| `data/`               | AI 工具展示資料與共用導覽連結                          |
| `hooks/useAiTools.js` | 工具搜尋、篩選、排序與分頁邏輯；清單元件可注入資料來源 |
| `public/image/`       | 工具縮圖、動畫圖案、頭像、圖示、合作夥伴標誌與社群縮圖 |
| `tests/site.spec.js`  | Playwright 瀏覽器測試                                  |

## 依賴維護

主要依賴為 [Next.js](https://www.npmjs.com/package/next)、[React](https://www.npmjs.com/package/react) 與 [React DOM](https://www.npmjs.com/package/react-dom)；開發工具為 [Playwright](https://www.npmjs.com/package/@playwright/test)。版本範圍以 `package.json` 為準，實際安裝版本由 `package-lock.json` 鎖定。

素材製作工具：[TinyPNG](https://tinypng.com/)、[ChatGPT 4o](https://openai.com/)。
