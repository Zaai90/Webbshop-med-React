import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <AppBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
