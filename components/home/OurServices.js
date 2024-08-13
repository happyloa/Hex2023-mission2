// 匯入與該元件相關聯的 CSS 樣式表，使用 CSS Modules 來確保樣式在模塊範圍內是局部的，
// 這樣可以避免與其他元件或頁面樣式發生衝突。
import styles from "./OurServices.module.css";

// 匯入 Container 元件，這是用來包裝和佈局內容的主要容器元件。
// 它提供了頁面區塊的一致性樣式和佈局。
import Container from "../layout/Container";
// 匯入 ServicesCard 元件，這個元件用來展示每個服務的詳細資訊卡片。
// 每個卡片包括一個圖標、標題和描述。
import ServicesCard from "../ui/ServicesCard";

// 定義一個陣列 servicesCardInfo，包含了服務卡片的所有資訊。
// 每個物件代表一個服務，並包括該服務的圖標 (Icon)、標題 (title) 和描述 (description)。
// 這些資訊將被傳遞給 ServicesCard 元件用來渲染服務卡片。
const servicesCardInfo = [
  {
    Icon: `image/icons/flash on.webp`, // 圖標的路徑，用來視覺化該服務的特徵（例如該服務的快速響應）。
    title: "快速", // 服務的標題，簡要概述該服務的主要特點。
    description:
      "我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。", // 服務的詳細描述，介紹該服務的具體優勢。
  },
  {
    Icon: `image/icons/auto awesome.webp`, // 此服務的圖標，表示靈活性。
    title: "靈活", // 服務標題，突出服務的靈活性。
    description:
      "我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。", // 服務描述，介紹該服務的彈性調整能力。
  },
  {
    Icon: `image/icons/library add.webp`, // 服務的圖標，代表該服務的擴展性。
    title: "擴充", // 服務標題，強調服務的擴展能力。
    description: "我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。", // 服務描述，介紹該服務的擴展選項。
  },
];

// 定義一個名為 OurServices 的 React 功能性元件。
// 該元件負責在頁面上展示公司的各項服務，通過服務卡片來說明每個服務的主要特點和優勢。
export default function OurServices() {
  return (
    // 使用 Container 元件包裝整個服務區塊內容。
    // Container 元件提供了統一的佈局和樣式，使頁面結構保持一致性。
    <Container>
      {/* 
        content-wrapper div 包含了標題和段落描述部分。
        使用 content-wrapper 類別來控制該部分的佈局和樣式，確保標題和描述以理想的方式呈現。
      */}
      <div className={styles["content-wrapper"]}>
        {/* 
          title-wrapper div 用來包裹標題 "我們的服務"。
          title-wrapper 類別應用於此區域，以確保標題的樣式符合設計要求，並在頁面上以適當的方式顯示。
        */}
        <div className={styles["title-wrapper"]}>
          <h2>我們的服務</h2>
        </div>
        {/* 
          paragraph-wrapper div 用來包裹和排列描述性段落文字。
          段落文字描述了公司如何利用 AI 技術來幫助客戶更快、更準確地做出決策。
          使用 paragraph-wrapper 類別來確保段落的樣式一致並符合設計規範。
        */}
        <div className={styles["paragraph-wrapper"]}>
          <p>
            我們相信透過 AI 技術，
            <br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </p>
        </div>
      </div>
      {/* 
        使用 ul 標籤來包裹所有的服務卡片，並應用了 card-wrapper 類別來管理卡片的排列方式。
        這樣可以確保卡片在頁面上以預期的方式顯示，無論是在桌面還是移動裝置上。
      */}
      <ul className={styles["card-wrapper"]}>
        {/* 
          使用 JavaScript 的 map 方法遍歷 servicesCardInfo 陣列，
          並為每個服務創建一個 ServicesCard 元件來渲染服務卡片。
          每個 ServicesCard 元件接收對應的圖標、標題和描述作為屬性進行渲染。
        */}
        {servicesCardInfo.map((service, idx) => (
          <ServicesCard
            // key 屬性提供唯一標識符，用於確保 React 能夠正確處理列表中每個卡片的渲染和更新。
            key={idx}
            // 將服務的圖標路徑傳遞給 ServicesCard 元件的 src 屬性，以便在卡片中顯示對應的圖標。
            src={service.Icon}
            // 將服務的標題傳遞給 ServicesCard 元件的 title 屬性，用於在卡片中顯示服務的標題。
            title={service.title}
            // 將服務的描述傳遞給 ServicesCard 元件的 description 屬性，用於在卡片中顯示服務的詳細描述。
            description={service.description}
          />
        ))}
      </ul>
    </Container>
  );
}
