"use client";

import { useState } from "react";

import styles from "./AiToolsList.module.css";

import AiToolsSearchForm from "./AiToolsSearchForm";
import AiToolsCard from "./ui/AiToolsCard";
import AiToolsPagination from "./AiToolsPagination";

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
      "通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。",
    modelName: "杰杰",
    tag: "#生產力",
  },
];

export default function AiToolsList() {
  const [filteredData, setFilteredData] = useState(toolsData);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredData(toolsData);
    } else {
      const filtered = toolsData.filter((tool) =>
        tool.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>這些超酷的應用，都來自 AI工具王</h2>
      <main className={styles.wrapper}>
        <AiToolsSearchForm onSearch={handleSearch} />
        <ul className={styles["card-wrapper"]}>
          {filteredData.map((tool, index) => (
            <AiToolsCard
              key={index}
              imgSrc={tool.imgSrc}
              title={tool.title}
              description={tool.description}
              modelName={tool.modelName}
              tag={tool.tag}
            />
          ))}
        </ul>
        <AiToolsPagination />
      </main>
    </section>
  );
}
