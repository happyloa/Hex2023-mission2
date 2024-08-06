import styles from "./DecoAnimation.module.css";

export default function DecoAnimation({ align }) {
  // 根據傳入的 align prop 動態設置 wrapper 的樣式
  const wrapperClass = `${styles.wrapper} ${
    align === "start" ? styles["flex-start"] : ""
  } ${align === "end" ? styles["flex-end"] : ""}`;

  return (
    <section className={styles.container}>
      <div className={wrapperClass}>
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
      </div>
    </section>
  );
}
