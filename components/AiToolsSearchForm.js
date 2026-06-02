import { useState } from "react";
import styles from "./AiToolsSearchForm.module.css";

export default function AiToolsSearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      className={styles["search-input"]}
      placeholder="輸入關鍵字搜尋"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}
