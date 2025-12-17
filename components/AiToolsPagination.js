// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./AiToolsPagination.module.css";

// 定義 AiToolsPagination 元件，這是一個簡單的分頁元件
export default function AiToolsPagination() {
  // 透過陣列集中管理頁碼，未來若接上 API 可以改為由資料驅動
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    // nav 標籤作為分頁區塊的容器，應用了 pagination 類別來控制佈局
    <nav className={styles.pagination}>
      {/* 使用 ul 標籤包裹所有分頁連結 */}
      <ul>
        {/* 渲染每個分頁連結，這裡假設分頁的頁碼為 1 到 5 */}
        {pageNumbers.map((pageNumber) => (
          <li key={`page-${pageNumber}`}>
            {/* 使用 a 標籤作為分頁按鈕，點擊時可能會導航到對應的頁面 */}
            <a href="#">{pageNumber}</a>
          </li>
        ))}
        {/* 使用一個特殊的符號作為 "下一頁" 的連結 */}
        <li>
          <a href="#">&#11166;</a>{" "}
        </li>
      </ul>
    </nav>
  );
}
