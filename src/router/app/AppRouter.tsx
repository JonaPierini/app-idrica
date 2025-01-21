import { Route, Routes } from "react-router";
import { PublicRoute } from "../public/PublicRoute";
import { PrivateRoute } from "../private/PrivateRoute";
import { AboutPage, HomePage, LoginPage } from "../../pages";
import { Layout } from "../../components";

export const AppRouter = () => {
  return (
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
            <Layout>
              <Routes>
                <Route index path="/home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
