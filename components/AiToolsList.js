"use client";

import styles from "./AiToolsList.module.css";

import AiToolsSearchForm from "./AiToolsSearchForm";
import AiToolsFilter from "./AiToolsFilter";
import AiToolsCard from "./ui/AiToolsCard";
import AiToolsPagination from "./AiToolsPagination";

import { aiToolsData } from "@/data/aiToolsData";
import { useAiTools } from "@/hooks/useAiTools";

export default function AiToolsList({ tools = aiToolsData }) {
  const { filteredTools, activeTag, handleSearch, handleFilter, handleSort } = useAiTools(tools);

  return (
    <section className={styles.container} id="ai-tools">
      <h2 className={styles.heading}>這些超酷的應用，都來自 AI工具王</h2>

      <main className={styles.wrapper}>
        <AiToolsSearchForm onSearch={handleSearch} />
        <AiToolsFilter activeTag={activeTag} onFilter={handleFilter} onSort={handleSort} />

        <ul className={styles["card-wrapper"]}>
          {filteredTools.length > 0 ? (
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
            <li className={styles["no-tools"]}>我們目前沒有這個 AI 工具😢</li>
          )}
        </ul>

        <AiToolsPagination />
      </main>
    </section>
  );
}
