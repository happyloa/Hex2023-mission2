import styles from "./AiToolsCard.module.css";

export default function AiToolsCard({
  imgSrc,
  title,
  description,
  modelName,
  tag,
}) {
  return (
    <li className={styles.card}>
      <div className={styles["img-wrapper"]}>
        <img src={imgSrc} alt={title + " 圖片"} />
      </div>
      <div className={`${styles["content-wrapper"]} ${styles["card-padding"]}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        className={`${styles["ai-model-wrapper"]} ${styles["d-flex"]} ${styles["card-padding"]}`}>
        <h4>AI 模型</h4>
        <span>{modelName}</span>
      </div>
      <div
        className={`${styles["tag-and-share-wrapper"]} ${styles["d-flex"]} ${styles["card-padding"]}`}>
        <span>{tag}</span>
        <img src="image/icons/share.webp" alt="分享" />
      </div>
    </li>
  );
}
