import styles from "./PricingTitle.module.css";

export default function PricingTitle() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <hgroup className={styles["content-container"]}>
          <h1>
            用多少，
            <br />
            付多少。
          </h1>
          <p>我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</p>
        </hgroup>
      </div>
    </section>
  );
}
