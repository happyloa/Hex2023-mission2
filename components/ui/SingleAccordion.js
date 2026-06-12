"use client";

import { useState } from "react";
import "./SingleAccordion.css";

export default function SingleAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && <div className="accordion-body">{content}</div>}
    </div>
  );
}

