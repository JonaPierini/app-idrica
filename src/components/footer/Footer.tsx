import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-blue-600 text-white text-center p-3">
      <p className="text-m  text-white dark:text-white cursor-pointer hover:underline">
        {t("copyright_message")}
      </p>
    </footer>
  );
};
