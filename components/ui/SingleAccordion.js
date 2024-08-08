import { Accordion } from "react-bootstrap-accordion";

import "./SingleAccordion.css";

export default function SingleAccordion({ title, content }) {
  if (typeof window !== "undefined") {
    return <Accordion title={title}>{content}</Accordion>;
  }
  return null;
}
