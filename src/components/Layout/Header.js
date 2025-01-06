import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";
import styles from "./Header.module.css";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h2>
          Vi<span>do</span>wn
        </h2>
      </Link>
      <nav className={styles.nav}>
        <Link to="/blog">{t("blog")}</Link>
        <Link to="/faqs">{t("faqs")}</Link>
        <Link to="/about">{t("about_us")}</Link>
        <Link to="/contact">{t("contact_us")}</Link>
      </nav>
      <div className="flex gap-3 items-center justify-start ">
        <LanguageSelector />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
