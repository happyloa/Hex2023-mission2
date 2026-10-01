import styles from "./AiToolsPagination.module.css";

export default function AiToolsPagination({ currentPage, pageCount, onPageChange }) {
  if (pageCount <= 1) return null;
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="AI 工具分頁">
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={`page-${pageNumber}`}>
            <button
              type="button"
              aria-label={`第 ${pageNumber} 頁`}
              aria-current={currentPage === pageNumber ? "page" : undefined}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label="下一頁"
            disabled={currentPage === pageCount}
            onClick={() => onPageChange(currentPage + 1)}
          >
            &#11166;
          </button>
        </li>
      </ul>
    </nav>
  );
}
