import { Noto_Sans_TC } from "next/font/google";

import "./globals.css";
import "./scrollBar.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "2023 體驗營切版任務二",
  description: "2023 體驗營切版任務二 by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={notoSansTC.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
