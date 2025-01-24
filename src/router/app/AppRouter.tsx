import { Route, Routes } from "react-router";
import { PublicRoute } from "../public/PublicRoute";
import { PrivateRoute } from "../private/PrivateRoute";
import {
  CreatePage,
  DeletePage,
  HomePage,
  LoginPage,
  UpdatePage,
} from "../../pages";
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
                <Route index path="home" element={<HomePage />} />
                <Route path="create" element={<CreatePage />} />
                <Route path="update" element={<UpdatePage />} />
                <Route path="delete" element={<DeletePage />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
