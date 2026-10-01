import Image from "next/image";
import styles from "./AiToolsFilter.module.css";

const filterOptions = [
  { label: "全部", value: "全部" },
  { label: "聊天", value: "#聊天" },
  { label: "影像辨識", value: "#影像辨識" },
  { label: "翻譯", value: "#翻譯" },
  { label: "行銷", value: "#行銷" },
  { label: "客服", value: "#客服" },
  { label: "生產力", value: "#生產力" },
];

export default function AiToolsFilter({ activeTag, sortBy, onFilter, onSort }) {
  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter}>
        篩選
        <Image src="/image/icons/sliders-horizontal.webp" width={16} height={16} alt="" />
      </div>

      <nav className={styles.navigation} aria-label="AI 工具分類">
        <ul>
          {filterOptions.map(({ label, value }) => {
            const isActive = activeTag === value;

            return (
              <li key={value}>
                <button
                  type="button"
                  className={isActive ? styles.active : ""}
                  aria-pressed={isActive}
                  onClick={() => onFilter(value)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <select
        className={styles["dropdown-filter"]}
        aria-label="AI 工具排序"
        value={sortBy}
        onChange={(event) => onSort(event.target.value)}
      >
        <option value="由新到舊">由新到舊</option>
        <option value="由舊到新">由舊到新</option>
      </select>
    </div>
  );
}
