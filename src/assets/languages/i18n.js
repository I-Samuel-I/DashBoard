import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEN from "./en.json"
import LanguageDetector from "i18next-browser-languagedetector"

const savedLanguage = localStorage.getItem("language") || "pt"

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
    },
    lng: savedLanguage,
    fallbackLng: "pt",
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
