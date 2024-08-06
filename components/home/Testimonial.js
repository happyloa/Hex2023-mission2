import styles from "./Testimonial.module.css";

import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    rating: 5,
    content:
      "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！",
    clientName: "陳小姐",
    clientCompany: "ABC科技有限公司",
    clientImage: "image/avatars/avatar3.webp",
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

export default function Testimonial() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles["card-wrapper"]}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
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
