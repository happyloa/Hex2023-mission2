// 匯入樣式表，使用 CSS Modules 來管理樣式，使其具有本地範圍作用，避免與其他樣式發生衝突
import styles from "./OurServices.module.css";

// 匯入 ServicesCard 元件，此元件將被用來顯示每個服務的詳細資訊卡片
import ServicesCard from "../ui/ServicesCard";

// 定義一個包含服務卡片資訊的陣列，每個物件代表一個服務，包括圖標、標題和描述
const servicesCardInfo = [
  {
    Icon: `image/icons/flash on.webp`, // 圖標的路徑，表示該服務的特徵（例如快速）
    title: "快速", // 服務的標題，簡短概述服務的特點
    description:
      "我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。", // 服務的詳細描述
  },
  {
    Icon: `image/icons/auto awesome.webp`,
    title: "靈活",
    description:
      "我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。",
  },
  {
    Icon: `image/icons/library add.webp`,
    title: "擴充",
    description: "我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。",
  },
];

// 定義 OurServices 元件，這是頁面中用來展示公司服務的一個功能區塊
export default function OurServices() {
  return (
    // section 標籤用來包裹整個服務區塊，應用了 container 類別來控制該區塊的整體佈局
    <section className={styles.container}>
      {/* wrapper div 包裹了標題、描述和服務卡片的區域，應用 wrapper 類別來控制內部內容的排列和佈局 */}
      <div className={styles.wrapper}>
        {/* content-wrapper div 包含了標題和段落描述部分，應用了 content-wrapper 類別來進行佈局 */}
        <div className={styles["content-wrapper"]}>
          {/* title-wrapper div 包裹標題，title-wrapper 類別用來控制標題部分的樣式 */}
          <div className={styles["title-wrapper"]}>
            <h2>我們的服務</h2>
          </div>
          {/* paragraph-wrapper div 包裹段落描述，paragraph-wrapper 類別用來控制段落的樣式 */}
          <div className={styles["paragraph-wrapper"]}>
            {/* 段落描述了公司如何利用 AI 技術來幫助客戶更快、更準確地做出決策 */}
            <p>
              我們相信透過 AI 技術，
              <br />
              包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
            </p>
          </div>
        </div>
        {/* 使用 ul 標籤來包裹服務卡片清單，card-wrapper 類別控制這些卡片的排列方式 */}
        <ul className={styles["card-wrapper"]}>
          {/* 使用 map 方法遍歷 servicesCardInfo 陣列，為每個服務渲染一個 ServicesCard 元件 */}
          {servicesCardInfo.map((service, idx) => (
            <ServicesCard
              // key 屬性用來為每個渲染的卡片提供唯一標識符，這對於 React 來說是必要的
              key={idx}
              // 傳遞圖標路徑到 ServicesCard 元件的 src 屬性，這將用於卡片中顯示圖標
              src={service.Icon}
              // 傳遞服務的標題到 ServicesCard 元件的 title 屬性
              title={service.title}
              // 傳遞服務的描述到 ServicesCard 元件的 description 屬性
              description={service.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
