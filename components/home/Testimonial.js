// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./Testimonial.module.css";

// 匯入 TestimonialCard 元件，此元件將用來渲染每一個客戶的推薦內容
import TestimonialCard from "../ui/TestimonialCard";

// 定義一個 testimonials 陣列，每個物件表示一個客戶的推薦內容
// 包含以下屬性：rating（評分）、content（推薦內容）、clientName（客戶姓名）、clientCompany（客戶公司）、clientImage（客戶頭像）
const testimonials = [
  {
    rating: 5, // 客戶給出的評分（滿分 5 分）
    content:
      "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！",
    clientName: "陳小姐", // 客戶姓名
    clientCompany: "ABC科技有限公司", // 客戶公司名稱
    clientImage: "image/avatars/avatar3.webp", // 客戶頭像圖片的路徑
  },
  {
    rating: 5,
    content:
      "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！",
    clientName: "劉小姐",
    clientCompany: "XYZ 醫療器材有限公司",
    clientImage: "image/avatars/avatar1.webp",
  },
  {
    rating: 5,
    content:
      "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！",
    clientName: "黃先生",
    clientCompany: "EFG 銀行",
    clientImage: "image/avatars/avatar2.webp",
  },
];

// 定義 Testimonial 元件，用於顯示客戶的推薦內容
export default function Testimonial() {
  return (
    // section 標籤包裹整個推薦內容區塊，應用了 container 類別來控制區塊的佈局
    <section className={styles.container}>
      {/* wrapper div 包裹所有推薦卡片，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* 使用 ul 標籤來包裹推薦卡片清單，card-wrapper 類別用來控制卡片的排列方式 */}
        <ul className={styles["card-wrapper"]}>
          {/* 遍歷 testimonials 陣列，為每個推薦內容渲染一個 TestimonialCard 元件 */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              // key 屬性用來為每個渲染的卡片提供唯一標識符，這對於 React 來說是必要的
              key={index}
              // 傳遞評分、推薦內容、客戶姓名、客戶公司和客戶頭像到 TestimonialCard 元件的對應屬性
              rating={testimonial.rating}
              content={testimonial.content}
              clientName={testimonial.clientName}
              clientCompany={testimonial.clientCompany}
              clientImage={testimonial.clientImage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
