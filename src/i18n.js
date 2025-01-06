import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fr, sp } from "./common/langs/index";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      sp: {
        translation: sp,
      },
    },
  });

export default i18n;
