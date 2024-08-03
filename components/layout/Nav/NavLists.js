import Link from "next/link";

import styles from "./NavLists.module.css";

const navItems = [
  { href: "/", title: "首頁" },
  { href: "/pricing", title: "定價" },
];

export default function NavLists() {
  return (
    <>
      {navItems.map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </>
  );
}
