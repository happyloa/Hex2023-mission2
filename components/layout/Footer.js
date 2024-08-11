// 匯入 Link 組件，用於在 Next.js 中處理頁面間的導航
import Link from "next/link";

// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./Footer.module.css";

// 定義 Footer 元件，這是網站頁面底部的區塊
export default function Footer() {
  return (
    // footer 標籤作為頁面底部的容器，應用了 padding 類別來增加內邊距
    <footer className={styles.padding}>
      {/* 第一個 section 包含了導航鏈接和網站標誌，應用了 container 類別來控制佈局 */}
      <section className={styles.container}>
        {/* nav 標籤定義了頁腳的導航區塊 */}
        <nav className={styles["footer-nav"]}>
          {/* links-wrapper div 包裹導航鏈接，這些連結指向首頁和定價頁面 */}
          <div className={styles["links-wrapper"]}>
            <Link href="/">
              {/* 將 "首頁" 文字包裹在 span 中，應用 link-underlined 類別來控制樣式 */}
              <span className={styles["link-underlined"]}>首頁</span>
            </Link>
            <Link href="/pricing">
              {/* 將 "定價" 文字包裹在 span 中，應用 link-underlined 類別來控制樣式 */}
              <span className={styles["link-underlined"]}>定價</span>
            </Link>
          </div>
          {/* 導航區域的右側是網站標誌，點擊後可返回首頁 */}
          <Link href="/" className={styles["site-logo"]}>
            {/* 使用 img 標籤顯示網站標誌圖片 */}
            <img src="image/logo.webp" />
          </Link>
        </nav>
      </section>
      {/* 第二個 section 包含網站的資訊和社交媒體連結 */}
      <section className={styles["site-infos"]}>
        {/* 顯示網站的版權資訊 */}
        <p>AI工具王 © 2023</p>
        {/* social-links div 包裹了社交媒體的鏈接 */}
        <div className={styles["social-links"]}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        {/* 提供一個返回頁面頂部的鏈接 */}
        <a href="#" className={styles["back-to-top"]}>
          Back to top
          {/* 使用 img 標籤顯示向上的箭頭圖標 */}
          <img src="image/icons/arrow upward.webp" />
        </a>
      </section>
    </footer>
  );
}
