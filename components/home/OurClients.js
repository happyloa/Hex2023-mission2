// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./OurClients.module.css";

// 定義兩排要顯示的合作夥伴標誌，之後會透過 CSS 動畫讓它們水平捲動
const marqueeRows = [
  {
    id: "marquee-a",
    logos: [
      { src: "/image/partner-logos/enterprise.webp", alt: "合作夥伴 Enterprise" },
      { src: "/image/partner-logos/enterprise1.webp", alt: "合作夥伴 Enterprise 1" },
      { src: "/image/partner-logos/enterprise2.webp", alt: "合作夥伴 Enterprise 2" },
      { src: "/image/partner-logos/enterprise3.webp", alt: "合作夥伴 Enterprise 3" },
      { src: "/image/partner-logos/enterprise4.webp", alt: "合作夥伴 Enterprise 4" },
      { src: "/image/partner-logos/enterprise5.webp", alt: "合作夥伴 Enterprise 5" },
    ],
  },
  {
    id: "marquee-b",
    logos: [
      { src: "/image/partner-logos/enterprise6.webp", alt: "合作夥伴 Enterprise 6" },
      { src: "/image/partner-logos/enterprise7.webp", alt: "合作夥伴 Enterprise 7" },
      { src: "/image/partner-logos/enterprise8.webp", alt: "合作夥伴 Enterprise 8" },
      { src: "/image/partner-logos/enterprise9.webp", alt: "合作夥伴 Enterprise 9" },
      { src: "/image/partner-logos/enterprise11.webp", alt: "合作夥伴 Enterprise 11" },
      { src: "/image/partner-logos/enterprise12.webp", alt: "合作夥伴 Enterprise 12" },
    ],
    reverse: true,
  },
];

// 定義 OurClients 元件，用於展示合作夥伴的標誌
export default function OurClients() {
  return (
    // section 標籤包裹整個客戶展示區塊，應用了 container 類別來控制佈局
    <section className={styles.container}>
      {/* wrapper div 包裹所有內容，應用了 wrapper 類別來控制內部元素的排列 */}
      <div className={styles.wrapper}>
        {/* h2 標籤顯示區塊的標題 "來自合作夥伴"，應用了 heading 類別來設置標題的樣式 */}
        <h2 className={styles.heading}>來自合作夥伴</h2>
        {/* 使用純 CSS 動畫打造兩條水平滑動的合作夥伴標誌跑馬燈 */}
        {marqueeRows.map(({ id, logos, reverse }) => {
          const trackClassName = `${styles.track} ${reverse ? styles["track-reverse"] : ""}`;
          const marqueeClassName = `${styles.marquee} ${reverse ? styles["marquee-reverse"] : styles.marquee1}`;

          return (
            <div key={id} className={marqueeClassName}>
              <div className={trackClassName}>
                {[...logos, ...logos].map((logo, index) => {
                  const isDuplicate = index >= logos.length;
                  return (
                    <img
                      key={`${id}-${index}`}
                      src={logo.src}
                      alt={isDuplicate ? "" : logo.alt}
                      aria-hidden={isDuplicate ? true : undefined}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
