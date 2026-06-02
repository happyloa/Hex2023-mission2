import { useMemo, useState } from "react";
import styles from "./AiToolsFilter.module.css";

export default function AiToolsFilter({ onFilter }) {
  const [activeTag, setActiveTag] = useState("全部");

  // 集中管理篩選標籤設定
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

  const handleFilterClick = (tag) => {
    setActiveTag(tag);
    onFilter(tag);
  };

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
                onClick={() => handleFilterClick(value)}>
                {label}
              </li>
            );
          })}
        </ul>
      </nav>

      <select className={styles["dropdown-filter"]}>
        <option>由新到舊</option>
        <option>由舊到新</option>
      </select>
    </div>
  );
}
