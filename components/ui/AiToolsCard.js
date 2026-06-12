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
        <button
          type="button"
          aria-label="分享"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex", alignItems: "center" }}
          onClick={(e) => {
            e.stopPropagation(); // 阻止事件冒泡到卡片點擊
            if (navigator.share) {
              navigator.share({
                title: title,
                text: description,
                url: window.location.href,
              }).catch(() => {});
            } else {
              alert("您的瀏覽器不支援直接分享功能！");
            }
          }}
        >
          <img src="/image/icons/share.webp" alt="" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
