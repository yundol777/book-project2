"use client";
import Link from "next/link";
import styles from "../../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
