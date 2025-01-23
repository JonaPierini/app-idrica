import { Outlet } from "react-router";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <NavBar />
      <main className="flex-1 p-6">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};
