import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./contactus.css";

const Index = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>{t("contactUs")}</h1>
        <p>{t("contactMessage")}</p>
        <form id="contact-form">
          <input type="text" id="name" placeholder={t("yourName")} required />
          <input
            type="email"
            id="email"
            placeholder={t("yourEmail")}
            required
          />
          <textarea
            id="message"
            placeholder={t("yourMessage")}
            rows="5"
            required
          ></textarea>
          <button type="submit">{t("submit")}</button>
        </form>
        <div className="footer">
          <p>&copy; 2025 Vidom Company</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
