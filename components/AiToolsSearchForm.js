import styles from "./AiToolsSearchForm.module.css";

export default function AiToolsSearchForm({ searchTerm, onSearch }) {
  return (
    <input
      type="search"
      aria-label="搜尋 AI 工具"
      className={styles["search-input"]}
      placeholder="輸入關鍵字搜尋"
      value={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
