export const metadata = {
  title: "定價 - 2023 體驗營切版任務二",
};

import PricingTitle from "@/components/pricing/PricingTitle";
import DecoAnimation from "@/components/ui/DecoAnimation";
import AiModelsPricing from "@/components/pricing/AiModelsPricing";
import UsageRegulation from "@/components/pricing/UsageRegulation";
import AiToolsList from "@/components/AiToolsList";

export default function Pricing() {
  return (
    <>
      <PricingTitle />
      <DecoAnimation align="start" />
      <AiModelsPricing />
      <UsageRegulation />
      <AiToolsList />
    </>
  );
}
