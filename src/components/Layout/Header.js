"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import ThemeButton from "../UI/ThemeButton";
import LanguageSelector from "../LanguageSelector";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <Link to={"/"}>
        <h2>
          Vi<span>do</span>wn
        </h2>
          </Link>
      </div>
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <a href="/blog" onClick={() => setMenuOpen(false)}>
          Blog
        </a>
        <a href="/faqs" onClick={() => setMenuOpen(false)}>
          FAQs
        </a>
        <a href="/about" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
        <div className="flex gap-3 items-center justify-start ">
          <LanguageSelector />
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
