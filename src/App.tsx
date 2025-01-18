import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router";
import { store } from "./store";
import "./index.css";
import { ThemeProvider } from "./feature";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
