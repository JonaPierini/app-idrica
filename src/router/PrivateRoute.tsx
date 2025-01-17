import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../store";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? children : <Navigate to="/login" />;
};
