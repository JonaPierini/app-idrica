import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../store";

interface PublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return !isAuthenticated ? children : <Navigate to="/home" />;
};
