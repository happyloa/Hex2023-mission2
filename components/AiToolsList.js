"use client"; // Next.js 中的特殊指令，指示這個元件是 CSR

import styles from "./AiToolsList.module.css"; // 引入 CSS 模塊樣式表

import AiToolsSearchForm from "./AiToolsSearchForm"; // 引入搜索表單元件
import AiToolsFilter from "./AiToolsFilter"; // 引入篩選元件
import AiToolsCard from "./ui/AiToolsCard"; // 引入 AI 工具卡片元件
import AiToolsPagination from "./AiToolsPagination"; // 引入分頁元件

import { aiToolsData } from "@/data/aiToolsData"; // 匯入集中管理的工具資料
import { useAiTools } from "@/hooks/useAiTools"; // 匯入共用 hook 處理搜尋與篩選邏輯

// 定義並導出 AiToolsList 元件，預設載入共用的工具資料
// tools prop 允許從外部注入不同的資料來源，便於未來接上 API 或進行 A/B 測試
export default function AiToolsList({ tools = aiToolsData }) {
  // 透過自訂 hook 接收處理好的狀態與事件處理函式
  const { filteredTools, handleSearch, handleFilter } = useAiTools(tools);

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
          {filteredTools.length > 0 ? (
            // 有篩選結果時，顯示對應的工具卡片
            filteredTools.map((tool) => (
              <AiToolsCard
                key={tool.title}
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
