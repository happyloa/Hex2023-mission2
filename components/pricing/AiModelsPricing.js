import styles from "./AiModelsPricing.module.css";

import AiModelsPricingCard from "../ui/AiModelsPricingCard";

const aiModelsInfo = [
  {
    title: "琪琪",
    features: ["初級", "速度最快"],
    price: 5,
    unit: "1k tokens",
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

export default function AiModelsPricing() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>定價</h2>
        <ul className={styles["card-wrapper"]}>
          {aiModelsInfo.map((data, index) => (
            <AiModelsPricingCard key={index} {...data} />
          ))}
        </ul>
      </div>
    </section>
  );
}
