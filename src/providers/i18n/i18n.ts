import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ES from "../../locales/es-ES.json";
import EN from "../../locales/en-US.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: ES,
    },
    en: {
      translation: EN,
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
