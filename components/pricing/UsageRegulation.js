import styles from "./UsageRegulation.module.css";

export default function UsageRegulation() {
  return (
    <section className={styles.container}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <h2>使用規範</h2>
        </div>
        <div className={styles["regulations-wrapper"]}>
          <hgroup>
            <h3>守法</h3>
            <p>請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
          </hgroup>
          <hgroup>
            <h3>資訊安全</h3>
            <p>請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
          </hgroup>
          <hgroup>
            <h3>守密</h3>
            <p>需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
          </hgroup>
        </div>
      </div>
    </section>
  );
}
