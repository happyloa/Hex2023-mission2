"use client";

import { useState } from "react";
import styles from "./SingleAccordion.module.css";

export default function SingleAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["accordion-item"]}>
      <button
        className={`${styles["accordion-button"]} ${isOpen ? styles.open : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && <div className={styles["accordion-body"]}>{content}</div>}
    </div>
  );
}
