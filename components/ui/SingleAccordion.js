import { Accordion } from "react-bootstrap-accordion";
import "./SingleAccordion.css";

export default function SingleAccordion({ title, content }) {
  // 檢查是否在客戶端瀏覽器環境中執行（該套件依賴 DOM 操作）
  if (typeof window !== "undefined") {
    return <Accordion title={title}>{content}</Accordion>;
  }
  return null;
}
