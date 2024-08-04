import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({
  rating,
  content,
  clientName,
  clientCompany,
  clientImage,
}) {
  return (
    <li className={styles.card}>
      <article className={styles.wrapper}>
        <div className={styles["rating-wrapper"]}>
          {Array.from({ length: rating }, (_, index) => (
            <img key={index} src="image/icons/star.webp" />
          ))}
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles["client-wrapper"]}>
          <img src={clientImage} />
          <div className={styles["client-info"]}>
            <strong>{clientName}</strong>
            <span>{clientCompany}</span>
          </div>
        </div>
      </article>
    </li>
  );
}
