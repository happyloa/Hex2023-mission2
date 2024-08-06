import styles from "./HomeTitle.module.css";

import StartUsingBtn from "../ui/StartUsingBtn";

export default function HomeTitle() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務
          <br className={styles["responsive-break"]} />
          更聰明
        </h1>
        <StartUsingBtn />
      </div>
    </section>
  );
}
