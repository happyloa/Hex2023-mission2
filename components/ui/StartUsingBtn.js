import Link from "next/link";

import styles from "./StartUsingBtn.module.css";

export default function StartUsingBtn({ withIcon = false }) {
  return (
    <Link href="/pricing" className={styles.button}>
      開始使用
      {withIcon && (
        <img
          src="/image/icons/call made.webp"
          alt="行動呼籲"
          className={styles.icon}
        />
      )}
    </Link>
  );
}
