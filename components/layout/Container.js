// 匯入與該元件相關聯的 CSS 樣式表，使用 CSS Modules 來確保樣式在該元件範圍內是局部的，
// 這樣可以避免與其他元件或頁面樣式發生衝突。
import styles from "./Container.module.css";

// 定義一個名為 Container 的 React 元件，該元件接收 children 作為屬性。
// 這是一個功能性元件，用來包裝其他內容，使其在頁面佈局中保持一致的樣式。
export default function Container({ children }) {
  return (
    // 使用 <section> HTML 標籤來包裹整個區域，並應用從 CSS 模組中引入的 .container 樣式。
    // 這樣做的目的是確保該區塊在頁面上的佈局符合設計要求。
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* 
          {children} 是一個特定於 React 的語法，用來渲染父元件傳遞給 Container 的所有子元素。
          這使得 Container 元件具有通用性，能夠包裝和顯示各種內容，而無需知道具體的子元素是什麼。
        */}
        {children}
      </div>
    </section>
  );
}
