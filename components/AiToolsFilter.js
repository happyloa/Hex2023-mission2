import { useState } from "react";

import styles from "./AiToolsFilter.module.css";

export default function AiToolsFilter({ onFilter }) {
  const [activeTag, setActiveTag] = useState("全部");

  const handleFilterClick = (tag) => {
    setActiveTag(tag); // 更新當前選中的標籤
    onFilter(tag); // 觸發篩選
  };

  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter}>
        篩選
        <img src="image/icons/sliders-horizontal.webp" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li
            className={activeTag === "全部" ? styles.active : ""}
            onClick={() => handleFilterClick("全部")}>
            全部
          </li>
          <li
            className={activeTag === "#聊天" ? styles.active : ""}
            onClick={() => handleFilterClick("#聊天")}>
            聊天
          </li>
          <li
            className={activeTag === "#影像辨識" ? styles.active : ""}
            onClick={() => handleFilterClick("#影像辨識")}>
            影像辨識
          </li>
          <li
            className={activeTag === "#翻譯" ? styles.active : ""}
            onClick={() => handleFilterClick("#翻譯")}>
            翻譯
          </li>
          <li
            className={activeTag === "#行銷" ? styles.active : ""}
            onClick={() => handleFilterClick("#行銷")}>
            行銷
          </li>
          <li
            className={activeTag === "#客服" ? styles.active : ""}
            onClick={() => handleFilterClick("#客服")}>
            客服
          </li>
          <li
            className={activeTag === "#生產力" ? styles.active : ""}
            onClick={() => handleFilterClick("#生產力")}>
            生產力
          </li>
        </ul>
      </nav>
      <select className={styles["dropdown-filter"]}>
        <option>由新到舊</option>
        <option>由舊到新</option>
      </select>
    </div>
  );
}
