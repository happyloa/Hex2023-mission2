import styles from "./DecoAnimation.module.css";

export default function DecoAnimation({ align }) {
  // 根據傳入的 align prop 動態設置 container 的樣式
  const containerClass = `${styles.container} ${
    align === "start" ? styles["flex-start"] : ""
  } ${align === "end" ? styles["flex-end"] : ""}`;

  return (
    <section className={containerClass}>
      <img
        src="image/animation/deco.webp"
        className={`${styles.deco1} ${styles["hide-deco"]}`}
      />
      <img
        src="image/animation/deco.webp"
        className={`${styles.deco2} ${styles["hide-deco"]}`}
      />
      <img
        src="image/animation/deco.webp"
        className={`${styles.deco3} ${styles["hide-deco"]}`}
      />
    </section>
  );
}
