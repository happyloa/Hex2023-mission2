import { useMemo, useState } from "react"; // 引入 useState hook，用於管理本地狀態

import styles from "./AiToolsFilter.module.css"; // 引入 CSS 模塊樣式表

// 定義並導出 AiToolsFilter 元件
export default function AiToolsFilter({ onFilter }) {
  // 定義一個名為 activeTag 的狀態變數，初始值為 "全部"，用於追蹤當前選中的標籤
  const [activeTag, setActiveTag] = useState("全部");

  // 透過 useMemo 將標籤設定集中化，日後若要新增或調整分類只需改動這裡即可
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

  // 處理點擊篩選標籤的函數，參數 tag 是點擊的標籤名稱
  const handleFilterClick = (tag) => {
    setActiveTag(tag); // 更新當前選中的標籤狀態
    onFilter(tag); // 調用父元件傳遞下來的 onFilter 函數，以過濾顯示的工具
  };

  return (
    <div className={styles["filter-container"]}>
      {/* 篩選標題及圖標 */}
      <div className={styles.filter}>
        篩選
        <img src="/image/icons/sliders-horizontal.webp" alt="篩選圖示" />
      </div>

      {/* 篩選標籤導航 */}
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

      {/* 下拉選單，用於選擇排序方式 */}
      <select className={styles["dropdown-filter"]}>
        <option>由新到舊</option>
        <option>由舊到新</option>
      </select>
    </div>
  );
}
