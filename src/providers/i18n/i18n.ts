import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ES from "../../locales/es-ES.json";
import EN from "../../locales/en-US.json";

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: ES,
    },
    en: {
      translation: EN,
    },
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya maneja el escape de valores
  },
});

export default i18n;
