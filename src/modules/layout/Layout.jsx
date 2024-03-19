import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../header/Header.jsx"));
const Footer = lazy(() => import("../footer/Footer.jsx"));

const Layout = () => {
  return (
    <div>
      <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
