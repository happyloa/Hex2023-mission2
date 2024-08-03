export const metadata = {
  title: "首頁 - 2023 體驗營切版任務二",
};

import HomeTitle from "@/components/home/HomeTitle";
import DecoAnimation from "@/components/ui/DecoAnimation";
import OurServices from "@/components/home/OurServices";
import OurClients from "@/components/home/OurClients";

export default function Home() {
  return (
    <>
      <HomeTitle />
      <DecoAnimation align="end" />
      <OurServices />
      <OurClients />
    </>
  );
}
