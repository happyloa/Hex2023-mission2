// 從 next/font/google 匯入 Noto_Sans_TC 字型，用於在應用中使用 Noto Sans TC 字體
import { Noto_Sans_TC } from "next/font/google";

// 匯入全域的 CSS 檔案，這些樣式將應用於整個應用
import "./globals.css";
import "./scrollBar.css";

// 使用 Noto_Sans_TC 字型的設定，指定子集為 "latin"，並設定字體的顯示屬性為 "swap"
// "swap" 會確保在字體載入期間使用後備字體，字體載入完成後再進行切換
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

// 匯入應用的 Header 和 Footer 元件，這些元件會出現在每個頁面的頂部和底部
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 設定應用的 metadata，包括標題、描述和 openGraph 資訊，用於 SEO 和社交分享
export const metadata = {
  title: "2023 體驗營切版任務二",
  description: "2023 體驗營切版任務二 by Aaron",
  openGraph: {
    images: [
      {
        url: "image/og-image.webp", // 用於社交媒體分享時顯示的圖片 URL
        width: 1200, // 圖片的寬度
        height: 630, // 圖片的高度
        alt: "2023 體驗營切版任務二", // 圖片的替代文字
      },
    ],
  },
};

// 定義 RootLayout 元件，這是應用的根佈局元件，所有頁面都會被包裹在這個佈局中
export default function RootLayout({ children }) {
  return (
    // 定義 HTML 結構的根元素，設置語言為繁體中文，並應用了 Noto Sans TC 字體的 className
    <html lang="zh-Hant" className={notoSansTC.className}>
      {/* 定義 body 標籤，包裹頁面的主要內容 */}
      <body>
        {/* 包含應用的 Header 元件，出現在頁面頂部 */}
        <Header />
        {/* 渲染子內容，即每個頁面的具體內容 */}
        {children}
        {/* 包含應用的 Footer 元件，出現在頁面底部 */}
        <Footer />
      </body>
    </html>
  );
}
