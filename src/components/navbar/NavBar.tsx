import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCurrentLocal, toggleMode } from "../../store";
import { Link } from "react-router";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-white dark:text-white">
          {t("app_message")}
        </h1>
        <nav className="mt-2">
          <ul className="flex gap-4">
            <li>
              <Link
                to="/home"
                className="font-semibold text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-400"
              >
                {t("home_message")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-semibold text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-400"
              >
                {t("about_message")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
