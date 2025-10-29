// 使用 "use client"; 宣告這個元件是用於客戶端渲染
"use client";

// 匯入 Link 組件，用於在 Next.js 中處理頁面間的導航
import Link from "next/link";

// 匯入 useState Hook，用於在元件中管理狀態
import { useState } from "react";

// 匯入 react-modal 庫，用於在頁面上顯示模態框
import Modal from "react-modal";

// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./MobileNav.module.css";

// 定義 MobileNav 元件，這是一個移動設備上的導航元件
export default function MobileNav() {
  // 使用 useState Hook 來管理模態框是否打開的狀態，預設為關閉狀態 (false)
  const [isOpen, setIsOpen] = useState(false);

  // 定義一個函數來切換模態框的開啟和關閉狀態
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // 定義一個函數來關閉模態框
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* 用於切換模態框的按鈕，根據模態框的狀態顯示不同的圖標和 alt 文字 */}
      <img
        src={isOpen ? "/image/icons/close.webp" : "/image/icons/menu.webp"}
        alt={isOpen ? "關閉選單" : "開啟選單"}
        className={styles["mobile-nav-button"]}
        onClick={toggleModal}
      />
      {/* 使用 Modal 組件來顯示模態框，當 isOpen 為 true 時模態框打開 */}
      <Modal
        // 設置模態框的覆蓋層樣式，根據不同狀態應用不同的樣式
        overlayClassName={{
          base: styles["nav-overlay"],
          afterOpen: styles["nav-overlay-after-open"],
          beforeClose: styles["nav-overlay-before-close"],
        }}
        // 設定模態框關閉時的動畫過渡時間
        closeTimeoutMS={300}
        // 設置模態框是否開啟的狀態
        isOpen={isOpen}
        // 設置模態框的關閉條件
        onRequestClose={toggleModal}
        // 禁用 ariaHideApp 屬性以避免無障礙功能的衝突
        ariaHideApp={false}
        // 自定義模態框的樣式
        style={{
          content: {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            border: "0",
            backgroundColor: "#020202",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 12px",
          },
        }}>
        {/* 定義模態框內的導航區塊 */}
        <nav className={styles["mobile-nav"]}>
          {/* 當用戶點擊導航鏈接時，會觸發 closeModal 函數關閉模態框 */}
          <Link href="/" onClick={closeModal}>
            首頁
          </Link>
          <Link href="/pricing" onClick={closeModal} prefetch={false}>
            定價
          </Link>
        </nav>
        {/* 模態框底部的頁腳區域，顯示版權信息和社交媒體鏈接 */}
        <footer className={styles["mobile-nav-footer"]}>
          <p>AI工具王 © 2023</p>
          <div className={styles["social-links"]}>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </footer>
      </Modal>
    </>
  );
}
