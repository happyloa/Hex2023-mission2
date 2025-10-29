// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./OurClients.module.css";

// 引入 React Fast Marquee 套件，這是一個用於創建平滑滾動效果的組件
import Marquee from "react-fast-marquee";

// 定義 OurClients 元件，用於展示合作夥伴的標誌
export default function OurClients() {
  return (
    // section 標籤包裹整個客戶展示區塊，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹所有內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* h2 標籤顯示區塊的標題 "來自合作夥伴"，應用了 heading 類別來設置標題的樣式 */}
        <h2 className={styles.heading}>來自合作夥伴</h2>
        {/* 使用 Marquee 組件創建第一個橫向滾動的標誌展示區域 */}
        <Marquee className={styles.marquee1}>
          {/* 渲染合作夥伴的標誌圖片，這些圖片將在 Marquee 組件內平滑滾動 */}
          <img src="/image/partner-logos/enterprise.webp" alt="合作夥伴 Enterprise" />
          <img src="/image/partner-logos/enterprise1.webp" alt="合作夥伴 Enterprise 1" />
          <img src="/image/partner-logos/enterprise2.webp" alt="合作夥伴 Enterprise 2" />
          <img src="/image/partner-logos/enterprise3.webp" alt="合作夥伴 Enterprise 3" />
          <img src="/image/partner-logos/enterprise4.webp" alt="合作夥伴 Enterprise 4" />
          <img src="/image/partner-logos/enterprise5.webp" alt="合作夥伴 Enterprise 5" />
        </Marquee>
        {/* 使用 Marquee 組件創建第二個反向滾動的標誌展示區域 */}
        <Marquee direction="right">
          {/* 渲染另一組合作夥伴的標誌圖片，這些圖片將在 Marquee 組件內反向滾動 */}
          <img src="/image/partner-logos/enterprise6.webp" alt="合作夥伴 Enterprise 6" />
          <img src="/image/partner-logos/enterprise7.webp" alt="合作夥伴 Enterprise 7" />
          <img src="/image/partner-logos/enterprise8.webp" alt="合作夥伴 Enterprise 8" />
          <img src="/image/partner-logos/enterprise9.webp" alt="合作夥伴 Enterprise 9" />
          <img src="/image/partner-logos/enterprise11.webp" alt="合作夥伴 Enterprise 11" />
          <img src="/image/partner-logos/enterprise12.webp" alt="合作夥伴 Enterprise 12" />
        </Marquee>
      </div>
    </section>
  );
}
