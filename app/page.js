// 首頁的 metadata，供 Next.js 建立對 SEO 友善的標題與相關資訊
export const metadata = {
  title: "首頁 - 2023 體驗營切版任務二",
};

// 匯入首頁會用到的所有展示性元件
import HomeTitle from "@/components/home/HomeTitle";
import DecoAnimation from "@/components/ui/DecoAnimation";
import OurServices from "@/components/home/OurServices";
import OurClients from "@/components/home/OurClients";
import Testimonial from "@/components/home/Testimonial";
import AiToolsList from "@/components/AiToolsList";
import CTA from "@/components/home/CTA";

// 定義 Home 元件以組合首頁的各個區塊
export default function Home() {
  return (
    <>
      {/* 英雄區塊：標題與主要的 CTA */}
      <HomeTitle />
      {/* 裝飾用動畫，搭配 align props 控制位置 */}
      <DecoAnimation align="end" />
      {/* 產品服務說明區塊 */}
      <OurServices />
      {/* 合作夥伴走馬燈 */}
      <OurClients />
      {/* 客戶回饋 */}
      <Testimonial />
      {/* AI 工具清單，提供互動式搜尋與篩選 */}
      <AiToolsList />
      {/* 置底行動呼籲 */}
      <CTA />
    </>
  );
}
