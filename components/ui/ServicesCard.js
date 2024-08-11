// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./ServicesCard.module.css";

// 定義 ServicesCard 元件，接收以下 props：
// src：服務卡片顯示的圖標路徑
// title：服務卡片的標題
// description：服務卡片的描述內容
export default function ServicesCard({ src, title, description }) {
  return (
    // 使用 li 標籤將整個服務卡片包裹起來，表示這個元件是列表中的一個項目
    <li className={styles.card}>
      {/* 渲染服務的圖標，並設置圖片的 alt 屬性為服務的標題加上 "icon"，以利於無障礙訪問 */}
      <img src={src} alt={`${title} icon`} />
      {/* h3 標籤用來顯示服務卡片的標題 */}
      <h3>{title}</h3>
      {/* p 標籤用來顯示服務的描述內容 */}
      <p>{description}</p>
    </li>
  );
}
