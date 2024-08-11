// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./PricingTitle.module.css";

// 定義 PricingTitle 元件，這是定價頁面的標題區塊
export default function PricingTitle() {
  return (
    // section 標籤作為定價標題區塊的容器，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹了標題內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* hgroup 標籤將 h1 標題和 p 段落分組，作為標題和副標題的容器 */}
        <hgroup className={styles["content-container"]}>
          {/* h1 標籤顯示主要的定價標題 */}
          <h1>
            用多少，
            <br />
            付多少。
          </h1>
          {/* p 標籤顯示副標題，解釋定價策略的核心理念 */}
          <p>我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</p>
        </hgroup>
      </div>
    </section>
  );
}
