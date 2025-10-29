// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./TestimonialCard.module.css";

// 定義 TestimonialCard 元件，接收以下 props：
// rating：評分數量，表示客戶給出的星星數
// content：客戶的評價內容
// clientName：客戶的姓名
// clientCompany：客戶所屬公司名稱
// clientImage：客戶的頭像圖片
export default function TestimonialCard({
  rating,
  content,
  clientName,
  clientCompany,
  clientImage,
}) {
  return (
    // 將整個元件包裹在 li 標籤內，這表示這個元件將作為列表中的一個項目
    <li className={styles.card}>
      {/* 使用 article 標籤來包裹客戶評價卡片的所有內容 */}
      <article className={styles.wrapper}>
        {/* rating-wrapper div 包含了星級評分區塊 */}
        <div className={styles["rating-wrapper"]}>
          {/* 根據傳入的 rating 值生成相應數量的星星圖標 */}
          {Array.from({ length: rating }, (_, index) => (
            // 使用 index 作為每個 img 標籤的 key 屬性，確保每個星星圖標有唯一標識符
            <img
              key={index}
              src="image/icons/star.webp"
              alt="評價星星"
            />
          ))}
        </div>
        {/* 渲染客戶的評價內容 */}
        <p className={styles.content}>{content}</p>
        {/* client-wrapper div 包含了客戶的頭像和基本資訊 */}
        <div className={styles["client-wrapper"]}>
          {/* 渲染客戶的頭像 */}
          <img src={clientImage} alt={`${clientName} 頭像`} />
          {/* client-info div 包含了客戶的姓名和公司資訊 */}
          <div className={styles["client-info"]}>
            {/* strong 標籤用來加粗顯示客戶的姓名 */}
            <strong>{clientName}</strong>
            {/* span 標籤用來顯示客戶的公司名稱 */}
            <span>{clientCompany}</span>
          </div>
        </div>
      </article>
    </li>
  );
}
