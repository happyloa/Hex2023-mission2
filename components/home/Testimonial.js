// 匯入與該元件相關聯的 CSS 樣式表，使用 CSS Modules 來確保樣式在模塊範圍內是局部的，
// 這樣可以避免與其他元件或頁面樣式發生衝突。
import styles from "./Testimonial.module.css";

// 匯入 Container 元件，這個元件將作為主要的內容容器來包裝推薦內容。
// 它提供了統一的佈局和樣式，使頁面結構保持一致性。
import Container from "../layout/Container";

// 匯入 TestimonialCard 元件，該元件用於渲染每個客戶的推薦內容。
// 每個 TestimonialCard 元件會顯示客戶的評分、推薦內容、姓名、公司和頭像。
import TestimonialCard from "../ui/TestimonialCard";

// 定義一個 testimonials 陣列，這個陣列包含了多個物件，每個物件代表一個客戶的推薦內容。
// 每個推薦內容包括以下屬性：rating（評分）、content（推薦內容）、clientName（客戶姓名）、
// clientCompany（客戶公司名稱）以及 clientImage（客戶頭像）。
const testimonials = [
  {
    rating: 5, // 客戶給出的評分，使用整數來表示（滿分為 5 分）。
    content:
      "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！", // 客戶的推薦內容，描述他們對服務的滿意度。
    clientName: "陳小姐", // 提供推薦的客戶姓名。
    clientCompany: "ABC科技有限公司", // 客戶所屬公司的名稱。
    clientImage: "image/avatars/avatar3.webp", // 客戶頭像圖片的相對路徑，用於在推薦卡片中顯示客戶的頭像。
  },
  {
    rating: 5, // 這位客戶同樣給出了 5 星評分。
    content:
      "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！", // 這位客戶的推薦內容，強調了 AI 技術對其公司業務的幫助。
    clientName: "劉小姐", // 客戶姓名。
    clientCompany: "XYZ 醫療器材有限公司", // 客戶公司名稱。
    clientImage: "image/avatars/avatar1.webp", // 客戶頭像圖片的相對路徑。
  },
  {
    rating: 5, // 這位客戶也給出了滿分評分。
    content:
      "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！", // 客戶推薦內容，說明了 AI 模型在銀行風險控制和客戶服務中的應用。
    clientName: "黃先生", // 客戶姓名。
    clientCompany: "EFG 銀行", // 客戶公司名稱。
    clientImage: "image/avatars/avatar2.webp", // 客戶頭像圖片的相對路徑。
  },
];

// 定義一個名為 Testimonial 的 React 功能性元件，用於顯示多個客戶的推薦內容。
// 這些推薦內容將通過 TestimonialCard 元件來渲染和展示，從而提高公司的信譽和吸引力。
export default function Testimonial() {
  return (
    // 使用 Container 元件來包裝整個推薦內容區塊。
    // Container 元件提供了一致的佈局和樣式，使頁面結構保持統一。
    <Container>
      {/* 
        使用 <ul> HTML 標籤來包裹所有的推薦卡片，並應用了 .card-wrapper 類別來管理這些卡片的排列方式。
        這樣可以確保卡片在頁面上按照設計需求來顯示，無論是在桌面還是移動裝置上。
      */}
      <ul className={styles["card-wrapper"]}>
        {/* 
          使用 JavaScript 的 map 方法遍歷 testimonials 陣列，
          並為每個推薦內容創建一個 TestimonialCard 元件來渲染該內容。
          每個 TestimonialCard 元件接收評分、推薦內容、客戶姓名、客戶公司和客戶頭像作為屬性。
        */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            // key 屬性提供唯一標識符，用於確保 React 能夠正確處理列表中每個卡片的渲染和更新。
            key={index}
            // 傳遞評分、推薦內容、客戶姓名、客戶公司和客戶頭像到 TestimonialCard 元件的對應屬性，
            // 這些屬性將用於在卡片中顯示對應的資訊。
            rating={testimonial.rating}
            content={testimonial.content}
            clientName={testimonial.clientName}
            clientCompany={testimonial.clientCompany}
            clientImage={testimonial.clientImage}
          />
        ))}
      </ul>
    </Container>
  );
}
