import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";
import styles from "./Header.module.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h2>
          Vi<span>do</span>wn
        </h2>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            Blog
          </button>
          <div
            className={`${styles.dropdownContent} ${
              isDropdownOpen ? styles.show : ""
            }`}
          >
            <Link to="/blog/category1">Category 1</Link>
            <Link to="/blog/category2">Category 2</Link>
            <Link to="/blog/category3">Category 3</Link>
          </div>
        </div>
        <Link to="/faqs">Faqs</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <ThemeButton />
    </header>
  );
};

export default Header;
