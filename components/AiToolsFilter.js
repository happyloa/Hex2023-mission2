import { useMemo } from "react";
import styles from "./AiToolsFilter.module.css";

export default function AiToolsFilter({ activeTag, onFilter, onSort }) {
  const filterOptions = useMemo(
    () => [
      { label: "全部", value: "全部" },
      { label: "聊天", value: "#聊天" },
      { label: "影像辨識", value: "#影像辨識" },
      { label: "翻譯", value: "#翻譯" },
      { label: "行銷", value: "#行銷" },
      { label: "客服", value: "#客服" },
      { label: "生產力", value: "#生產力" },
    ],
    []
  );

  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter}>
        篩選
        <img src="/image/icons/sliders-horizontal.webp" alt="篩選圖示" />
      </div>

      <nav className={styles.navigation}>
        <ul>
          {filterOptions.map(({ label, value }) => {
            const isActive = activeTag === value;

            return (
              <li
                key={value}
                className={isActive ? styles.active : ""}
                onClick={() => onFilter(value)}>
                {label}
              </li>
            );
          })}
        </ul>
      </nav>

      <select
        className={styles["dropdown-filter"]}
        onChange={(e) => onSort && onSort(e.target.value)}
      >
        <option value="由新到舊">由新到舊</option>
        <option value="由舊到新">由舊到新</option>
      </select>
    </div>
  );
}
