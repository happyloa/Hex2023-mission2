// 匯入 Link 組件，用於在 Next.js 中處理頁面間的導航
import Link from "next/link";

// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./Header.module.css";

// 匯入 MobileNav 組件，這是一個針對移動裝置設計的導航元件
import MobileNav from "./MobileNav";

// 定義 Header 元件，這是一個包含網站標誌和導航連結的頁面頂部區塊
export default function Header() {
  return (
    // header 標籤作為網站的標題區塊，應用了 container 類別來控制佈局
    <header className={styles.container}>
      {/* wrapper div 包裹了網站標誌和導航區塊，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* Link 組件用於實現點擊網站標誌後導航到首頁的功能 */}
        <Link href="/">
          {/* img 標籤用於顯示網站的標誌，應用了 site-logo 類別來控制標誌的樣式 */}
          <img src="image/logo.webp" className={styles["site-logo"]} />
        </Link>
        {/* nav 標籤定義了桌面端的主導航區塊，應用了 desktop-nav 類別來控制佈局 */}
        <nav className={styles["desktop-nav"]}>
          {/* 導航連結指向首頁，應用了 link 類別來控制連結的樣式 */}
          <Link href="/" className={styles.link}>
            首頁
          </Link>
          {/* 導航連結指向定價頁面，應用了 link 類別來控制連結的樣式 */}
          <Link href="/pricing" className={styles.link}>
            定價
          </Link>
        </nav>
        {/* 渲染 MobileNav 元件，用於移動裝置上的導航菜單 */}
        <MobileNav />
      </div>
    </header>
  );
}
