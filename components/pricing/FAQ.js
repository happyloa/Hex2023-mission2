"use client";

import styles from "./FAQ.module.css";

import SingleAccordion from "../ui/SingleAccordion";

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
      "付款方式可以通過網站上提供的宴上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用欸用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。",
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

export default function FAQ() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles["title-wrapper"]}>
          <h2>常見問題</h2>
        </div>
        <div className={styles["faq-wrapper"]}>
          {faqContent.map((item, idx) => (
            <SingleAccordion
              key={idx}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
