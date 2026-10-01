import Image from "next/image";
import styles from "./ServicesCard.module.css";

export default function ServicesCard({ src, title, description }) {
  return (
    <li className={styles.card}>
      <Image width={80} height={80} unoptimized src={src} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
