"use client";
import Link from "next/link";
import { useState } from "react";

import Modal from "react-modal";

import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <img
        src={isOpen ? "/image/icons/close.webp" : "/image/icons/menu.webp"}
        alt={isOpen ? "關閉選單" : "開啟選單"}
        className={styles["mobile-nav-button"]}
        onClick={toggleModal}
      />
      <Modal
        overlayClassName={{
          base: styles["nav-overlay"],
          afterOpen: styles["nav-overlay-after-open"],
          beforeClose: styles["nav-overlay-before-close"],
        }}
        closeTimeoutMS={300}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
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
        <nav className={styles["mobile-nav"]}>
          <Link href="/">首頁</Link>
          <Link href="/pricing">定價</Link>
        </nav>
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
