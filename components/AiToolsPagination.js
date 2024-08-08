import styles from "./AiToolsPagination.module.css";

export default function AiToolsPagination() {
  return (
    <nav className={styles.pagination}>
      <ul>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">&#11166;</a>
        </li>
      </ul>
    </nav>
  );
}
