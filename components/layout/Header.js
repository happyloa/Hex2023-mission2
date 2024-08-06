import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <img src="image/logo.webp" className={styles["site-logo"]} />
        </Link>
        <nav className={styles["desktop-nav"]}>
          <Link href="/">首頁</Link>
          <Link href="/pricing">定價</Link>
        </nav>
      </div>
    </header>
  );
}
