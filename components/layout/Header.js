import Link from "next/link";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav";
import { navLinks } from "@/data/navLinks";

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
          {navLinks.map(({ href, label, prefetch }) => (
            <Link key={href} href={href} className={styles.link} prefetch={prefetch}>
              {label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
