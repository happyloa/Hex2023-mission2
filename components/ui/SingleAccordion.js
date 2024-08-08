"use client";

import { Accordion } from "react-bootstrap-accordion";

import "react-bootstrap-accordion/dist/index.css";

export default function SingleAccordion({ title, content }) {
  if (typeof window !== "undefined") {
    return <Accordion title={title}>{content}</Accordion>;
  }
  return null;
}
