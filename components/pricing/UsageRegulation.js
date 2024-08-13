// 匯入與該元件相關聯的 CSS 樣式表，使用 CSS Modules 來確保樣式在模塊範圍內是局部的，
// 這樣可以避免與其他元件或頁面樣式發生衝突。
import styles from "./UsageRegulation.module.css";

// 匯入 Container 元件，這是用來包裝和佈局內容的主要容器元件。
// 它提供了頁面區塊的一致性樣式和佈局，使得內容在頁面上的顯示保持一致。
import Container from "../layout/Container";

// 定義一個名為 UsageRegulation 的 React 功能性元件，這個元件用於展示使用規範的區塊。
// 該區塊包含多個使用規範，每個規範都由標題和內容組成，幫助用戶了解並遵守規則。
export default function UsageRegulation() {
  return (
    // 使用 Container 元件來包裝整個使用規範的內容區塊。
    // Container 元件提供了一致的佈局和樣式，使頁面結構保持統一。
    <Container>
      {/* 
        使用 <div> 來包裹標題和規範內容的區域，並應用了 .content-wrapper 類別來控制這部分的佈局。
        這樣可以確保標題和規範內容按照設計需求來顯示。
      */}
      <div className={styles["content-wrapper"]}>
        {/* 
          title-wrapper div 用來包裹 "使用規範" 的標題部分，
          並應用了 .title-wrapper 類別來控制標題的樣式，確保其符合設計規範。
        */}
        <div className={styles["title-wrapper"]}>
          {/* 
            使用 <h2> HTML 標籤來顯示區塊的主標題 "使用規範"。
            標題的樣式由 .heading 類別控制，以確保其在頁面上的顯示效果符合設計規範。
          */}
          <h2>使用規範</h2>
        </div>
        {/* 
          regulations-wrapper div 用來包裹各項使用規範的分組，
          並應用了 .regulations-wrapper 類別來管理這些分組的排列方式。
        */}
        <div className={styles["regulations-wrapper"]}>
          {/* 
            使用 <div> HTML 標籤來包裹每個規範的標題和內容，
            這樣可以將它們作為一個整體來顯示和管理，符合語義化 HTML 的最佳實踐。
          */}
          <div>
            {/* 使用 <h3> HTML 標籤來顯示每個使用規範的標題。
                在這個例子中，顯示的是 "守法"。 */}
            <h3>守法</h3>
            {/* 
              使用 <p> HTML 標籤來顯示每個使用規範的具體內容。
              這裡要求使用者遵守相關的法規和政策，不得進行任何違法違規的活動。
            */}
            <p>請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
          </div>
          <div>
            <h3>資訊安全</h3>
            <p>請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
          </div>
          <div>
            <h3>守密</h3>
            <p>需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
