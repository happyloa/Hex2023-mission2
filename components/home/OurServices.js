import styles from "./OurServices.module.css";

import ServicesCard from "../ui/ServicesCard";

const servicesCardInfo = [
  {
    Icon: `image/icons/flash on.webp`,
    title: "快速",
    description:
      "我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。",
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

export default function OurServices() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <h2>我們的服務</h2>
        </div>
        <div className={styles.paragraphWrapper}>
          <p>
            我們相信透過 AI 技術，
            <br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </p>
        </div>
      </div>
      <ul className={styles.cardWrapper}>
        {servicesCardInfo.map((service, idx) => (
          <ServicesCard
            key={idx}
            src={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ul>
    </section>
  );
}
