import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.padding}>
      <section className={styles.container}>
        <nav className={styles["footer-nav"]}>
          <div className={styles["links-wrapper"]}>
            <Link href="/">
              <span className={styles["link-underlined"]}>首頁</span>
            </Link>
            <Link href="/pricing" prefetch={false}>
              <span className={styles["link-underlined"]}>定價</span>
            </Link>
          </div>
          <Link href="/" className={styles["site-logo"]}>
            <img src="/image/logo.webp" alt="AI 工具王網站標誌" />
          </Link>
        </nav>
      </section>
      <section className={styles["site-infos"]}>
        <p>AI工具王 © 2023</p>
        <div className={styles["social-links"]}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <a href="#" className={styles["back-to-top"]}>
          Back to top
          <img src="/image/icons/arrow upward.webp" alt="回到頁面頂部箭頭" />
        </a>
      </section>
    </footer>
  );
}
