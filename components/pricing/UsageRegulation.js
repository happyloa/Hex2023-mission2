// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./UsageRegulation.module.css";

// 定義 UsageRegulation 元件，這是用於展示使用規範的區塊
export default function UsageRegulation() {
  return (
    // section 標籤作為使用規範區塊的容器，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹了所有內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* content-wrapper div 包含標題和規範內容的區域，應用了 content-wrapper 類別來控制佈局 */}
        <div className={styles["content-wrapper"]}>
          {/* title-wrapper div 包裹標題部分，應用了 title-wrapper 類別來控制標題的樣式 */}
          <div className={styles["title-wrapper"]}>
            {/* h2 標籤顯示區塊的主標題 "使用規範" */}
            <h2>使用規範</h2>
          </div>
          {/* regulations-wrapper div 包含各項使用規範的分組，應用了 regulations-wrapper 類別來控制佈局 */}
          <div className={styles["regulations-wrapper"]}>
            {/* hgroup 分組用於展示每個規範的標題和內容 */}
            <hgroup>
              {/* h3 標籤顯示規範標題 "守法" */}
              <h3>守法</h3>
              {/* p 標籤顯示具體的規範內容，要求使用者遵守法規和政策 */}
              <p>請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
            </hgroup>
            <hgroup>
              <h3>資訊安全</h3>
              <p>請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
            </hgroup>
            <hgroup>
              <h3>守密</h3>
              <p>需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
            </hgroup>
          </div>
        </div>
      </div>
    </section>
  );
}
