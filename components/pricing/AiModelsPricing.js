// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./AiModelsPricing.module.css";

// 匯入 AiModelsPricingCard 元件，用於展示每個 AI 模型的定價資訊
import AiModelsPricingCard from "../ui/AiModelsPricingCard";

// 定義一個 aiModelsInfo 陣列，包含每個 AI 模型的定價資訊
const aiModelsInfo = [
  {
    title: "琪琪", // 模型名稱
    features: ["初級", "速度最快"], // 模型特點或功能
    price: 5, // 定價
    unit: "1k tokens", // 定價單位
  },
  {
    title: "昊昊",
    features: ["中級"],
    price: 5,
    unit: "1k tokens",
  },
  {
    title: "卡卡",
    features: ["高級"],
    price: 5,
    unit: "1k tokens",
  },
  {
    title: "杰杰",
    features: ["最高級", "資訊最完善"],
    price: 5,
    unit: "1k tokens",
  },
];

// 定義 AiModelsPricing 元件，用於展示所有 AI 模型的定價區塊
export default function AiModelsPricing() {
  return (
    // section 標籤作為定價區塊的容器，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹了標題和定價卡片內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* h2 標籤顯示區塊的主標題 "定價" */}
        <h2 className={styles.heading}>定價</h2>
        {/* 使用 ul 標籤來包裹所有的定價卡片，card-wrapper 類別用來控制卡片的排列方式 */}
        <ul className={styles["card-wrapper"]}>
          {/* 使用 map 方法遍歷 aiModelsInfo 陣列，為每個模型渲染一個 AiModelsPricingCard 元件 */}
          {aiModelsInfo.map((data, index) => (
            // 使用展開運算符將每個模型的屬性傳遞給 AiModelsPricingCard 元件
            <AiModelsPricingCard key={index} {...data} />
          ))}
        </ul>
      </div>
    </section>
  );
}
