import { useDispatch } from "react-redux";
import { login } from "../../store";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <h1 onClick={() => dispatch(login())}>{t("logIn_message")}</h1>
    </div>
  );
};
