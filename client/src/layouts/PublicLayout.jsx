import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const PublicLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <main className="public-main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;