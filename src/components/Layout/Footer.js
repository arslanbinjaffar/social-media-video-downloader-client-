import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import gitLogo from "../../assets/icons8-github-logo-48.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Links</h4>
          <Link to="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className={styles.footerLink}>
            Terms and Conditions
          </Link>
        </div>

        {/* Column 2: Disclaimer */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Disclaimer</h4>
          <p className={styles.disclaimerText}>
            The information provided on this website is for general
            informational purposes only.
          </p>
        </div>

        {/* Column 3: Social Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Follow Us</h4>
          <a
            href="https://github.com/arslan-jaffar"
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitLogo} alt="GitHub" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
