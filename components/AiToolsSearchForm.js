import styles from "./AiToolsSearchForm.module.css";

export default function AiToolsSearchForm() {
  return (
    <form>
      <input
        type="text"
        className={styles["search-input"]}
        placeholder="輸入關鍵字搜尋"
      />
    </form>
  );
}
