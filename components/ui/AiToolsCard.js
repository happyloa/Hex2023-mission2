// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./AiToolsCard.module.css";

// 定義 AiToolsCard 元件，接收以下 props：
// imgSrc：工具卡片顯示的圖片路徑
// title：工具卡片的標題
// description：工具卡片的描述內容
// modelName：工具使用的 AI 模型名稱
// tag：工具的標籤，通常用來分類或說明用途
export default function AiToolsCard({
  imgSrc,
  title,
  description,
  modelName,
  tag,
}) {
  return (
    // 使用 li 標籤將卡片包裹起來，表示這個元件是列表中的一個項目
    <li className={styles.card}>
      {/* img-wrapper div 包裹圖片部分，用於顯示工具相關的圖像 */}
      <div className={styles["img-wrapper"]}>
        {/* 渲染工具的圖片，並設置圖片的 alt 屬性為工具的標題加上 "圖片" 以利於無障礙訪問 */}
        <img src={imgSrc} alt={title + " 圖片"} />
      </div>
      {/* content-wrapper div 包含工具的標題和描述，同時應用了 card-padding 類別來控制內邊距 */}
      <div className={`${styles["content-wrapper"]} ${styles["card-padding"]}`}>
        {/* h3 標籤用來顯示工具卡片的標題 */}
        <h3>{title}</h3>
        {/* p 標籤用來顯示工具的描述內容 */}
        <p>{description}</p>
      </div>
      {/* ai-model-wrapper div 用來顯示工具所使用的 AI 模型名稱，並且應用了 d-flex 和 card-padding 類別來控制佈局和內邊距 */}
      <div
        className={`${styles["ai-model-wrapper"]} ${styles["d-flex"]} ${styles["card-padding"]}`}>
        {/* h4 標籤顯示 "AI 模型" 的標題 */}
        <h4>AI 模型</h4>
        {/* span 標籤用來顯示具體的模型名稱 */}
        <span>{modelName}</span>
      </div>
      {/* tag-and-share-wrapper div 用來顯示工具的標籤和分享按鈕，應用了 d-flex 和 card-padding 類別來控制佈局和內邊距 */}
      <div
        className={`${styles["tag-and-share-wrapper"]} ${styles["d-flex"]} ${styles["card-padding"]}`}>
        {/* span 標籤用來顯示工具的分類標籤 */}
        <span>{tag}</span>
        {/* 渲染分享圖標的 img 標籤，並設置 alt 屬性為 "分享" */}
        <img src="/image/icons/share.webp" alt="分享" />
      </div>
    </li>
  );
}
