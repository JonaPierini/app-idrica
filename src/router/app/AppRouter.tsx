import { Route, Routes } from "react-router";
import { PublicRoute } from "../public/PublicRoute";
import { PrivateRoute } from "../private/PrivateRoute";
import { HomePage, LoginPage } from "../../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
