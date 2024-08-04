import styles from "./AiModelsPricingCard.module.css";

export default function AiModelsPricingCard({
  title,
  features = [],
  price,
  unit,
}) {
  return (
    <li className={styles.card}>
      <main className={styles.wrapper}>
        <h3>{title}</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </main>
      <footer>
        <h4>
          NT${price}
          <span>／{unit}</span>
        </h4>
        <div className={styles["start-using"]}>
          開始使用
          <img src="image/icons/call made.webp" />
        </div>
      </footer>
    </li>
  );
}
