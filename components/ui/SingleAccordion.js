// 從 "react-bootstrap-accordion" 中匯入 Accordion 組件，用於實現手風琴式的展開/收合功能
import { Accordion } from "react-bootstrap-accordion";

// 匯入外部的 CSS 文件，為此組件提供樣式
import "./SingleAccordion.css";

// 定義 SingleAccordion 元件，接收以下 props：
// title：手風琴的標題，當用戶點擊時可以展開或收合內容
// content：手風琴展開後顯示的內容
export default function SingleAccordion({ title, content }) {
  // 由於這個組件依賴於瀏覽器環境（例如 DOM 操作），所以我們需要確保它在瀏覽器環境中運行
  // 檢查是否在客戶端環境中運行（window 物件只在瀏覽器中可用）
  if (typeof window !== "undefined") {
    // 在瀏覽器環境中，渲染 Accordion 組件
    // title prop 用來設置手風琴的標題，內容則放在手風琴內部
    return <Accordion title={title}>{content}</Accordion>;
  }
  // 如果不在瀏覽器環境中（例如在服務器端渲染），則返回 null，什麼也不渲染
  return null;
}
