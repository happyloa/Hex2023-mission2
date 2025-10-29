// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./AiModelsPricingCard.module.css";

// 定義 AiModelsPricingCard 元件，接收以下 props：
// title：定價卡片的標題
// features：此模型或方案的特點或功能列表，預設為空陣列
// price：此模型或方案的價格
// unit：價格的計價單位
export default function AiModelsPricingCard({
  title,
  features = [],
  price,
  unit,
}) {
  return (
    // 使用 li 標籤將整個定價卡片包裹起來，表示這個元件是列表中的一個項目
    <li className={styles.card}>
      {/* main 標籤用來包裹卡片的主要內容區域 */}
      <main className={styles.wrapper}>
        {/* h3 標籤顯示定價卡片的標題，例如 AI 模型的名稱 */}
        <h3>{title}</h3>
        {/* 使用 ul 標籤來包裹模型的功能列表 */}
        <ul>
          {/* 遍歷 features 陣列，渲染每個功能項目 */}
          {features.map((feature, index) => (
            // 使用 index 作為 key 屬性，確保每個列表項有唯一標識符
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </main>
      {/* footer 標籤用來包裹卡片的底部區域，通常顯示價格和行動按鈕 */}
      <footer>
        {/* h4 標籤顯示定價，NT$ 後跟隨價格和單位，例如 NT$100／月 */}
        <h4>
          NT${price}
          {/* span 標籤顯示計價的單位 */}
          <span>／{unit}</span>
        </h4>
        {/* start-using div 包含一個行動按鈕，當用戶點擊後，可能引導其開始使用此服務 */}
        <div className={styles["start-using"]}>
          {/* 按鈕文本 "開始使用" */}
          開始使用
          {/* 圖標表示行動呼籲 */}
          <img src="/image/icons/call made.webp" alt="開啟使用箭頭" />
        </div>
      </footer>
    </li>
  );
}
