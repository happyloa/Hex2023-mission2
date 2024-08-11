// 使用 "use client"; 宣告這個元件是用於客戶端渲染
"use client";

// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./FAQ.module.css";

// 匯入 SingleAccordion 元件，用於顯示單個問答項目
import SingleAccordion from "../ui/SingleAccordion";

// 定義一個 faqContent 陣列，包含常見問題的標題和內容
const faqContent = [
  {
    title: "如何選擇適合的 AI 模型？",
    content:
      "選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。",
  },
  {
    title: "租用模型的費用是如何計算的？",
    content:
      "租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、暫用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。",
  },
  {
    title: "如何進行付款？",
    content:
      "付款方式可以通過網站上提供的線上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。",
  },
  {
    title: "租用模型的期限是多久？",
    content:
      "租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。",
  },
  {
    title: "如果在使用的過程中遇到問題，應該怎麼處理？",
    content:
      "如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。",
  },
];

// 定義 FAQ 元件，用於展示常見問題和回答
export default function FAQ() {
  return (
    // section 標籤作為 FAQ 區塊的容器，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹了標題和常見問題內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* title-wrapper div 包裹了標題部分，應用了 title-wrapper 類別來控制標題的樣式 */}
        <div className={styles["title-wrapper"]}>
          {/* h2 標籤顯示區塊的主標題 "常見問題" */}
          <h2>常見問題</h2>
        </div>
        {/* faq-wrapper div 包含了所有的問答項目，應用了 faq-wrapper 類別來控制佈局 */}
        <div className={styles["faq-wrapper"]}>
          {/* 使用 map 方法遍歷 faqContent 陣列，為每個常見問題渲染一個 SingleAccordion 元件 */}
          {faqContent.map((item, idx) => (
            <SingleAccordion
              key={idx} // key 屬性用來為每個渲染的項目提供唯一標識符，這對於 React 來說是必要的
              title={item.title} // 傳遞常見問題的標題到 SingleAccordion 元件的 title 屬性
              content={item.content} // 傳遞常見問題的內容到 SingleAccordion 元件的 content 屬性
            />
          ))}
        </div>
      </div>
    </section>
  );
}
