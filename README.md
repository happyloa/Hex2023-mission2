![](https://i.imgur.com/KdyUDTD.png)

# 六角學院 2023 體驗營 | 切版任務作業二 - AI 工具王

此專案為六角學院 2023 軟體工程師體驗營的切版任務作業二之成品

- [線上部署連結](https://hex2023.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/9YP4vKgISeAZWvXy82NQ1Q/2023-%E9%AB%94%E9%A9%97%E7%87%9F?node-id=39-2&t=XxhfzaL2hgw32Rat-0)

## 使用技術

[Next.js 14](https://nextjs.org/)（React 加強版）

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2023-mission2.git
```

套件安裝

```sh
$ cd Hex2023-mission2
$ npm install
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
├── AiToolsList.js                       AI 工具清單元件
├── AiToolsList.module.css               AI 工具清單元件的樣式
├── AiToolsPagination.js                 AI 工具分頁元件
├── AiToolsPagination.module.css         AI 工具分頁元件的樣式
├── AiToolsSearchForm.js                 AI 工具搜尋列元件
└── AiToolsSearchForm.module.css         AI 工具搜尋列元件的樣式
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
    ├── partner-logos                    服務項目圖片
    ├── og-image.webp                    社群媒體縮圖
    └── logo.webp                        網站 Logo
```

## 使用的套件 & 工具

- [react-modal](https://www.npmjs.com/package/react-modal)
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)
- [React Bootstrap Accordion](https://www.npmjs.com/package/react-bootstrap-accordion)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4o](https://openai.com/)
