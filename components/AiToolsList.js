"use client"; // Next.js 中的特殊指令，指示這個元件是 CSR

import { useState } from "react"; // 引入 useState hook，用於管理本地狀態

import styles from "./AiToolsList.module.css"; // 引入 CSS 模塊樣式表

import AiToolsSearchForm from "./AiToolsSearchForm"; // 引入搜索表單元件
import AiToolsFilter from "./AiToolsFilter"; // 引入篩選元件
import AiToolsCard from "./ui/AiToolsCard"; // 引入 AI 工具卡片元件
import AiToolsPagination from "./AiToolsPagination"; // 引入分頁元件

// 定義一個包含 AI 工具資料的陣列，儲存所有工具的訊息
const toolsData = [
  {
    imgSrc: "image/ai-tools/tool1.webp",
    title: "Chatbot Builder",
    description:
      "建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。",
    modelName: "卡卡",
    tag: "#聊天",
  },
  {
    imgSrc: "image/ai-tools/tool2.webp",
    title: "Image Recognition Platform",
    description: "專業的圖像識別平台，識別圖像、分類、標記等。",
    modelName: "杰杰",
    tag: "#影像辨識",
  },
  {
    imgSrc: "image/ai-tools/tool3.webp",
    title: "Language Translation API",
    description: "專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。",
    modelName: "琪琪",
    tag: "#翻譯",
  },
  {
    imgSrc: "image/ai-tools/tool4.webp",
    title: "Sentiment Analysis API",
    description:
      "自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。",
    modelName: "昊昊",
    tag: "#行銷",
  },
  {
    imgSrc: "image/ai-tools/tool5.webp",
    title: "Fraud Detection Platform",
    description: "預防詐騙活動，適用於銀行、金融、電商等。",
    modelName: "卡卡",
    tag: "#客服",
  },
  {
    imgSrc: "image/ai-tools/tool6.webp",
    title: "Voice Assistant SDK",
    description:
      "通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送訊息等。",
    modelName: "杰杰",
    tag: "#生產力",
  },
];

// 定義並導出 AiToolsList 元件
export default function AiToolsList() {
  // 使用 useState hook 定義 filteredData 狀態，用於儲存篩選後的工具資料，初始值為 toolsData
  const [filteredData, setFilteredData] = useState(toolsData);

  // 處理搜索功能的函數，根據使用者輸入的搜索詞篩選工具
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      // 如果搜索詞為空，顯示所有工具
      setFilteredData(toolsData);
    } else {
      // 否則，篩選標題中包含搜索詞的工具
      const filtered = toolsData.filter((tool) =>
        tool.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // 處理篩選功能的函數，根據選中的標籤篩選工具
  const handleFilter = (tag) => {
    if (tag === "全部") {
      // 如果選擇了 "全部"，顯示所有工具
      setFilteredData(toolsData);
    } else {
      // 否則，根據標籤篩選工具
      const filtered = toolsData.filter((tool) => tool.tag === tag);
      setFilteredData(filtered);
    }
  };

  return (
    <section className={styles.container} id="ai-tools">
      {/* 頁面標題 */}
      <h2 className={styles.heading}>這些超酷的應用，都來自 AI工具王</h2>

      <main className={styles.wrapper}>
        {/* 搜索表單，處理搜索事件 */}
        <AiToolsSearchForm onSearch={handleSearch} />

        {/* 篩選元件，處理篩選事件 */}
        <AiToolsFilter onFilter={handleFilter} />

        {/* 工具卡片列表 */}
        <ul className={styles["card-wrapper"]}>
          {filteredData.length > 0 ? (
            // 有篩選結果時，顯示對應的工具卡片
            filteredData.map((tool, index) => (
              <AiToolsCard
                key={index}
                imgSrc={tool.imgSrc}
                title={tool.title}
                description={tool.description}
                modelName={tool.modelName}
                tag={tool.tag}
              />
            ))
          ) : (
            // 如果沒有篩選結果，顯示提示訊息
            <li className={styles["no-tools"]}>我們目前沒有這個 AI 工具😢</li>
          )}
        </ul>

        {/* 分頁元件 */}
        <AiToolsPagination />
      </main>
    </section>
  );
}
