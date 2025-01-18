import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useSelector((state: RootState) => state.local.locale);

  // Cambiar el idioma en i18next cuando el estado cambie
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
