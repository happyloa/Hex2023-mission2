import styles from "./OurClients.module.css";

// 跑馬燈合作夥伴標誌設定
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

export default function OurClients() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>來自合作夥伴</h2>
        {/* 使用 CSS 動畫讓合作夥伴標誌水平捲動 */}
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
