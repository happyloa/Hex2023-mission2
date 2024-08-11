// 匯入模組的樣式表，這樣可以使用樣式物件中的類別名稱來應用樣式
import styles from "./HomeTitle.module.css";

// 匯入 StartUsingBtn 元件，這個按鈕將在此元件的下方被渲染
import StartUsingBtn from "../ui/StartUsingBtn";

// 定義 HomeTitle 元件，這是預設匯出的函式型元件
export default function HomeTitle() {
  return (
    // 包含整個 HomeTitle 元件內容的 section 標籤，應用了外部樣式中的 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 主要是為了包裹標題和按鈕，並應用了樣式中的 wrapper 類別來控制內部元素的排列和佈局 */}
      <div className={styles.wrapper}>
        {/* h1 標籤定義了頁面的主要標題，應用了樣式中的 title 類別來設定標題的外觀 */}
        <h1 className={styles.title}>
          {/* 此處使用 <br /> 來分行，以控制標題在不同裝置上的顯示方式 */}
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務
          <br className={styles["responsive-break"]} />
          更聰明
        </h1>
        {/* 渲染 StartUsingBtn 元件，這是一個按鈕，可能會引導使用者進一步操作 */}
        <StartUsingBtn />
      </div>
    </section>
  );
}
