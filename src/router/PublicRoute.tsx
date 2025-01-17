import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PublicRoute = ({ children }: any) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  return !isAuthenticated ? children : <Navigate to="/marvel" />;
};
