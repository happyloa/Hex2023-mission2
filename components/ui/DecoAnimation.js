// 匯入樣式表，使用 CSS Modules 管理樣式，以確保樣式具有本地範圍作用
import styles from "./DecoAnimation.module.css";

// 定義 DecoAnimation 元件，接收一個名為 align 的 prop，用於控制動畫的對齊方式
export default function DecoAnimation({ align }) {
  // 根據傳入的 align prop 動態設置 wrapper 的樣式類別
  // 如果 align 為 "start"，則添加 flex-start 樣式類別
  // 如果 align 為 "end"，則添加 flex-end 樣式類別
  const wrapperClass = `${styles.wrapper} ${
    align === "start" ? styles["flex-start"] : ""
  } ${align === "end" ? styles["flex-end"] : ""}`;

  return (
    // section 標籤作為動畫區塊的容器，應用了 container 類別來控制整體佈局
    <section className={styles.container}>
      {/* 動態設置的 wrapperClass 決定了 div 內部內容的對齊方式 */}
      <div className={wrapperClass}>
        {/* 這三個 img 標籤分別渲染了相同的裝飾動畫圖片 */}
        {/* deco1、deco2 和 deco3 樣式類別分別控制這些圖片的具體位置或動畫效果 */}
        {/* hide-deco 類別用於初始隱藏圖案 */}
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
