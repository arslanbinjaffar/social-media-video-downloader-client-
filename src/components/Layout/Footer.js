import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import gitLogo from "../../assets/icons8-github-logo-48.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>{t("links")}</h4>
          <Link to="/privacy-policy" className={styles.footerLink}>
            {t("privacy_policy")}
          </Link>
          <Link to="/terms-and-conditions" className={styles.footerLink}>
            {t("terms_and_conditions")}
          </Link>
        </div>

        {/* Column 2: Disclaimer */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>{t("disclaimer")}</h4>
          <p className={styles.disclaimerText}>
            {t("disclaimer_text")}
            <br />
            {t("disclaimer_note")}
          </p>
        </div>

        {/* Column 3: Social Links */}
        {/* <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>{t("follow_us")}</h4>
          <a
            href="https://github.com/arslan-jaffar"
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitLogo} alt="GitHub" width={30} height={30} />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
