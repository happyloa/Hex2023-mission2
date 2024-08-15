import { useState } from "react"; // 引入 useState hook，用於管理本地狀態

import styles from "./AiToolsFilter.module.css"; // 引入 CSS 模塊樣式表

// 定義並導出 AiToolsFilter 元件
export default function AiToolsFilter({ onFilter }) {
  // 定義一個名為 activeTag 的狀態變數，初始值為 "全部"，用於追蹤當前選中的標籤
  const [activeTag, setActiveTag] = useState("全部");

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
        <img src="image/icons/sliders-horizontal.webp" />
      </div>

      {/* 篩選標籤導航 */}
      <nav className={styles.navigation}>
        <ul>
          {/* 點擊 "全部" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "全部" ? styles.active : ""}
            onClick={() => handleFilterClick("全部")}>
            全部
          </li>

          {/* 點擊 "聊天" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#聊天" ? styles.active : ""}
            onClick={() => handleFilterClick("#聊天")}>
            聊天
          </li>

          {/* 點擊 "影像辨識" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#影像辨識" ? styles.active : ""}
            onClick={() => handleFilterClick("#影像辨識")}>
            影像辨識
          </li>

          {/* 點擊 "翻譯" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#翻譯" ? styles.active : ""}
            onClick={() => handleFilterClick("#翻譯")}>
            翻譯
          </li>

          {/* 點擊 "行銷" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#行銷" ? styles.active : ""}
            onClick={() => handleFilterClick("#行銷")}>
            行銷
          </li>

          {/* 點擊 "客服" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#客服" ? styles.active : ""}
            onClick={() => handleFilterClick("#客服")}>
            客服
          </li>

          {/* 點擊 "生產力" 標籤，若當前選中則套用 active 樣式 */}
          <li
            className={activeTag === "#生產力" ? styles.active : ""}
            onClick={() => handleFilterClick("#生產力")}>
            生產力
          </li>
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
