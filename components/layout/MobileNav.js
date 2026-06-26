"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import styles from "./MobileNav.module.css";
import SocialLinks from "@/components/ui/SocialLinks";
import { navLinks } from "@/data/navLinks";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={styles["mobile-nav-button"]}
        onClick={toggleModal}
        aria-label={isOpen ? "關閉選單" : "開啟選單"}
      >
        <img
          src={isOpen ? "/image/icons/close.webp" : "/image/icons/menu.webp"}
          alt=""
          aria-hidden="true"
        />
      </button>
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
          {navLinks.map(({ href, label, prefetch }) => (
            <Link key={href} href={href} onClick={closeModal} prefetch={prefetch}>
              {label}
            </Link>
          ))}
        </nav>
        <footer className={styles["mobile-nav-footer"]}>
          <p>AI工具王 © 2023</p>
          <SocialLinks className={styles["social-links"]} />
        </footer>
      </Modal>
    </>
  );
}
