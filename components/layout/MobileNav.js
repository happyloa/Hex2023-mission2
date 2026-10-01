"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./MobileNav.module.css";
import SocialLinks from "@/components/ui/SocialLinks";
import { navLinks } from "@/data/navLinks";

export default function MobileNav() {
  const dialogRef = useRef(null);
  const dialogId = useId();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 577px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function openMenu() {
    dialogRef.current.showModal();
    dialogRef.current.querySelector("button").focus();
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current.close();
  }

  return (
    <>
      <button
        type="button"
        className={styles["mobile-nav-button"]}
        onClick={openMenu}
        aria-label="開啟選單"
        aria-expanded={isOpen}
        aria-controls={dialogId}
      >
        <Image src="/image/icons/menu.webp" width={24} height={24} alt="" />
      </button>
      <dialog
        ref={dialogRef}
        id={dialogId}
        className={styles.dialog}
        aria-label="行動導覽"
        onClose={() => setIsOpen(false)}
      >
        <div className={styles["dialog-header"]}>
          <Link href="/" onClick={closeMenu}>
            <Image src="/image/logo.webp" width={147} height={24} alt="AI 工具王網站標誌" />
          </Link>
          <button
            type="button"
            className={styles["close-button"]}
            onClick={closeMenu}
            aria-label="關閉選單"
          >
            <Image src="/image/icons/close.webp" width={24} height={24} alt="" />
          </button>
        </div>
        <nav className={styles["mobile-nav"]}>
          {navLinks.map(({ href, label, prefetch }) => (
            <Link key={href} href={href} onClick={closeMenu} prefetch={prefetch}>
              {label}
            </Link>
          ))}
        </nav>
        <footer className={styles["mobile-nav-footer"]}>
          <p>AI工具王 © 2023</p>
          <SocialLinks className={styles["social-links"]} />
        </footer>
      </dialog>
    </>
  );
}
