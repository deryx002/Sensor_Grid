import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const PublicLayout = () => {
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