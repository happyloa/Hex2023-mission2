// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./CTA.module.css";

// 匯入 StartUsingBtn 元件，這是一個包含按鈕的元件，用於行動呼籲（Call to Action）
import StartUsingBtn from "../ui/StartUsingBtn";

// 定義 CTA 元件，這是一個簡單的行動呼籲區塊
export default function CTA() {
  return (
    // section 標籤包裹整個 CTA 區塊，應用了 container 類別來控制區塊的佈局
    <section className={styles.container}>
      {/* wrapper div 包裹標題和按鈕，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* h2 標籤顯示 CTA 區塊的主要訊息或標題 */}
        <h2 className={styles.heading}>
          {/* 使用 br 標籤和樣式類別來控制換行，以便在不同裝置上更好地呈現文字 */}
          現在就來建立
          <br className={styles["responsive-break"]} />
          屬於你的服務吧
        </h2>
        {/* 渲染一個帶有圖標的 StartUsingBtn 元件，這個按鈕引導用戶開始使用服務 */}
        <StartUsingBtn withIcon />
      </div>
    </section>
  );
}
