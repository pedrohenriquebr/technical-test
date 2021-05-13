import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ptBR, enUS } from "./assets/i18n";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    whitelist: ["en", "pt"],
    resources: {
      pt: {
        translation: ptBR,
      },
      en: {
        translation: enUS,
      },
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
