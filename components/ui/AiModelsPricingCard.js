import Image from "next/image";
import styles from "./AiModelsPricingCard.module.css";

export default function AiModelsPricingCard({ title, features = [], price, unit }) {
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <footer>
        <h4>
          NT${price}
          <span>／{unit}</span>
        </h4>
        <div className={styles["start-using"]}>
          開始使用
          <Image
            width={24}
            height={24}
            unoptimized
            src="/image/icons/call made.webp"
            alt="開啟使用箭頭"
          />
        </div>
      </footer>
    </li>
  );
}
