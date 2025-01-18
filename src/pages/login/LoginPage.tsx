import { useDispatch } from "react-redux";
import { login } from "../../store";

export const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(login())}>Ingresar</button>
      </div>
    </>
  );
};
