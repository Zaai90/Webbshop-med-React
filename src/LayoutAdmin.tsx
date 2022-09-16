import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <AppBar />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
