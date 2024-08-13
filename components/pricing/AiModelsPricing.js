// 匯入與該元件相關聯的 CSS 樣式表，使用 CSS Modules 來確保樣式在模塊範圍內是局部的，
// 這樣可以避免與其他元件或頁面樣式發生衝突。
import styles from "./AiModelsPricing.module.css";

// 匯入 Container 元件，這是用來包裝和佈局內容的主要容器元件。
// 它提供了頁面區塊的一致性樣式和佈局。
import Container from "../layout/Container";

// 匯入 AiModelsPricingCard 元件，這個元件用來展示每個 AI 模型的定價資訊。
// 每個卡片包括模型名稱、特點、定價和定價單位。
import AiModelsPricingCard from "../ui/AiModelsPricingCard";

// 定義一個陣列 aiModelsInfo，包含了所有 AI 模型的定價資訊。
// 每個物件代表一個 AI 模型，並包括該模型的名稱 (title)、特點 (features)、價格 (price) 和單位 (unit)。
const aiModelsInfo = [
  {
    title: "琪琪", // 模型名稱，表示該 AI 模型的標識。
    features: ["初級", "速度最快"], // 模型特點或功能，描述了該模型的主要特性。
    price: 5, // 模型的定價，數字代表了該模型的費用。
    unit: "1k tokens", // 定價單位，表示定價的計算基礎（每 1000 個 tokens）。
  },
  {
    title: "昊昊", // 模型名稱
    features: ["中級"], // 模型的特點或功能
    price: 5, // 模型的定價
    unit: "1k tokens", // 定價單位
  },
  {
    title: "卡卡", // 模型名稱
    features: ["高級"], // 模型的特點或功能
    price: 5, // 模型的定價
    unit: "1k tokens", // 定價單位
  },
  {
    title: "杰杰", // 模型名稱
    features: ["最高級", "資訊最完善"], // 模型的特點或功能
    price: 5, // 模型的定價
    unit: "1k tokens", // 定價單位
  },
];

// 定義一個名為 AiModelsPricing 的 React 功能性元件，用於展示所有 AI 模型的定價區塊。
// 這些定價資訊將通過 AiModelsPricingCard 元件來渲染和展示，從而幫助用戶了解不同模型的價格和特點。
export default function AiModelsPricing() {
  return (
    // 使用 Container 元件來包裝整個定價內容區塊。
    // Container 元件提供了一致的佈局和樣式，使頁面結構保持統一。
    <Container>
      {/* 
        使用 <h2> HTML 標籤來顯示區塊的主標題 "定價"。
        標題的樣式由 .heading 類別控制，以確保其在頁面上的顯示效果符合設計規範。
      */}
      <h2 className={styles.heading}>定價</h2>
      {/* 
        使用 <ul> HTML 標籤來包裹所有的定價卡片，並應用了 .card-wrapper 類別來管理這些卡片的排列方式。
        這樣可以確保卡片在頁面上按照設計需求來顯示，無論是在桌面還是移動裝置上。
      */}
      <ul className={styles["card-wrapper"]}>
        {/* 
          使用 JavaScript 的 map 方法遍歷 aiModelsInfo 陣列，
          並為每個 AI 模型創建一個 AiModelsPricingCard 元件來渲染該模型的定價資訊。
          每個 AiModelsPricingCard 元件接收 title、features、price 和 unit 作為屬性。
        */}
        {aiModelsInfo.map((data, index) => (
          // key 屬性提供唯一標識符，用於確保 React 能夠正確處理列表中每個卡片的渲染和更新。
          // 使用展開運算符 {...data} 將 aiModelsInfo 陣列中的每個物件屬性傳遞給 AiModelsPricingCard 元件，
          // 這樣可以簡化屬性傳遞的代碼，並確保所有相關資訊都正確地傳遞給子元件。
          <AiModelsPricingCard key={index} {...data} />
        ))}
      </ul>
    </Container>
  );
}
