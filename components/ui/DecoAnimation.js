import Image from "next/image";
import styles from "./DecoAnimation.module.css";

export default function DecoAnimation({ align }) {
  const wrapperClass = `${styles.wrapper} ${
    align === "start" ? styles["flex-start"] : ""
  } ${align === "end" ? styles["flex-end"] : ""}`;

  return (
    <section className={styles.container}>
      <div className={wrapperClass}>
        <Image
          width={180}
          height={180}
          unoptimized
          src="/image/animation/deco.webp"
          className={`${styles.deco1} ${styles["hide-deco"]}`}
          alt="裝飾圖樣"
        />
        <Image
          width={180}
          height={180}
          unoptimized
          src="/image/animation/deco.webp"
          className={`${styles.deco2} ${styles["hide-deco"]}`}
          alt="裝飾圖樣"
        />
        <Image
          width={180}
          height={180}
          unoptimized
          src="/image/animation/deco.webp"
          className={`${styles.deco3} ${styles["hide-deco"]}`}
          alt="裝飾圖樣"
        />
      </div>
    </section>
  );
}
