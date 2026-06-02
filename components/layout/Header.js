import Link from "next/link";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <img
            src="/image/logo.webp"
            className={styles["site-logo"]}
            alt="AI 工具王網站標誌"
          />
        </Link>
        <nav className={styles["desktop-nav"]}>
          <Link href="/" className={styles.link}>
            首頁
          </Link>
          <Link href="/pricing" className={styles.link} prefetch={false}>
            定價
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
