import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";

export default i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
