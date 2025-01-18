import { useDispatch } from "react-redux";
import { logout } from "../../store";

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! - HomePage</h1>
      <button onClick={() => dispatch(logout())}>Salir</button>
    </div>
  );
};
