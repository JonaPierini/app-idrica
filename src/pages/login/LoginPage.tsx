import { useDispatch } from "react-redux";
import { login, setCurrentLocal } from "../../store";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t("logIn_message")}</h1>
        <button onClick={() => dispatch(setCurrentLocal("en"))}>
          CAmbiar Ingles
        </button>
        <button onClick={() => dispatch(setCurrentLocal("es"))}>
          CAmbiar Español
        </button>
      </div>
    </>
  );
};
