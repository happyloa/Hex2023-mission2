import { Noto_Sans_TC } from "next/font/google";

import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "2023 體驗營切版任務二",
  description: "2023 體驗營切版任務二 by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={notoSansTC.className}>
      <body>{children}</body>
    </html>
  );
}
