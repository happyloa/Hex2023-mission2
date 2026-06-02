import styles from "./Container.module.css";

export default function Container({ children }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  );
}
