import Image from "next/image";
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
          {Array.from({ length: rating }, (_, index) => index + 1).map((star) => (
            <Image
              width={16}
              height={16}
              unoptimized
              key={star}
              src="/image/icons/star.webp"
              alt="評價星星"
            />
          ))}
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles["client-wrapper"]}>
          <Image width={48} height={48} unoptimized src={clientImage} alt={`${clientName} 頭像`} />
          <div className={styles["client-info"]}>
            <strong>{clientName}</strong>
            <span>{clientCompany}</span>
          </div>
        </div>
      </article>
    </li>
  );
}
