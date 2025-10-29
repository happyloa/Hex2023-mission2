// 定價頁面的 metadata 設定，確保分享與 SEO 時呈現正確標題
export const metadata = {
  title: "定價 - 2023 體驗營切版任務二",
};

// 匯入組成定價頁面的主要元件
import PricingTitle from "@/components/pricing/PricingTitle";
import DecoAnimation from "@/components/ui/DecoAnimation";
import AiModelsPricing from "@/components/pricing/AiModelsPricing";
import UsageRegulation from "@/components/pricing/UsageRegulation";
import AiToolsList from "@/components/AiToolsList";
import FAQ from "@/components/pricing/FAQ";

// 定義 Pricing 元件以組裝定價頁面的區塊
export default function Pricing() {
  return (
    <>
      {/* 頁面標題與引導文字 */}
      <PricingTitle />
      {/* 裝飾動畫，與首頁共用，但位置改為左對齊 */}
      <DecoAnimation align="start" />
      {/* 方案定價表 */}
      <AiModelsPricing />
      {/* 使用規範說明 */}
      <UsageRegulation />
      {/* 再次使用 AI 工具清單，提供跨頁一致的互動內容 */}
      <AiToolsList />
      {/* 常見問題區塊 */}
      <FAQ />
    </>
  );
}
