import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css"; // Make sure to import the CSS

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="language-selector">
      <select onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
