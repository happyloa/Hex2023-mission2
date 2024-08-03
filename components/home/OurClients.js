import styles from "./OurClients.module.css";

// 引入 React Fast Marquee 套件
import Marquee from "react-fast-marquee";

export default function OurClients() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>來自合作夥伴</h2>
      <Marquee className={styles.marquee1}>
        <img src="image/partner-logos/enterprise.webp" />
        <img src="image/partner-logos/enterprise1.webp" />
        <img src="image/partner-logos/enterprise2.webp" />
        <img src="image/partner-logos/enterprise3.webp" />
        <img src="image/partner-logos/enterprise4.webp" />
        <img src="image/partner-logos/enterprise5.webp" />
      </Marquee>
      <Marquee direction="right">
        <img src="image/partner-logos/enterprise6.webp" />
        <img src="image/partner-logos/enterprise7.webp" />
        <img src="image/partner-logos/enterprise8.webp" />
        <img src="image/partner-logos/enterprise9.webp" />
        <img src="image/partner-logos/enterprise11.webp" />
        <img src="image/partner-logos/enterprise12.webp" />
      </Marquee>
    </section>
  );
}
