import styles from "./CTA.module.css";

import StartUsingBtn from "../ui/StartUsingBtn";

export default function CTA() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        現在就來建立
        <br className={styles["responsive-break"]} />
        屬於你的服務吧
      </h2>
      <StartUsingBtn withIcon />
    </section>
  );
}
