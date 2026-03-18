import { Outlet } from "react-router-dom";
import DarkNavbar from "./pages/NavBar";
import Footer from "./pages/Footer";

const MainLayout = () => {
  return (
    <>
      <DarkNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
