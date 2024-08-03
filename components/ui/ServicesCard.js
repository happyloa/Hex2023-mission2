import styles from "./ServicesCard.module.css";

export default function ServicesCard({ src, title, description }) {
  return (
    <li className={styles.card}>
      <img src={src} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
