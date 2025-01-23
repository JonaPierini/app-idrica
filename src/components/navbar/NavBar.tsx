import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCurrentLocal, toggleMode } from "../../store";
import { Link } from "react-router";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <header className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">{t("app_message")}</h1>
        <nav className="mt-2">
          <ul className="flex gap-4">
            <li>
              <Link
                to="/home"
                className="font-semibold hover:text-gray-200 dark:hover:text-gray-400"
              >
                {t("home_message")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-semibold hover:text-gray-200 dark:hover:text-gray-400"
              >
                {t("about_message")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => dispatch(toggleMode())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-400"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={() => dispatch(setCurrentLocal("en"))}>
        CAmbiar Ingles
      </button>
      <button onClick={() => dispatch(setCurrentLocal("es"))}>
        CAmbiar Español
      </button>
    </header>
  );
};
