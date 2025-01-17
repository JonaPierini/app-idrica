import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store";
import { BrowserRouter } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};
