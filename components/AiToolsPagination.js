import styles from "./AiToolsPagination.module.css";

export default function AiToolsPagination() {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <nav className={styles.pagination}>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={`page-${pageNumber}`}>
            <a href="#">{pageNumber}</a>
          </li>
        ))}
        <li>
          <a href="#">&#11166;</a>{" "}
        </li>
      </ul>
    </nav>
  );
}
