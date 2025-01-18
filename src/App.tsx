import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router";
import { store } from "./store";
import { LocaleProvider, ThemeProvider } from "./providers";
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LocaleProvider>
            <AppRouter />
          </LocaleProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
