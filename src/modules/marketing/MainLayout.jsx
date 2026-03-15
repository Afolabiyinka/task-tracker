import { Outlet } from "react-router-dom";
import DarkNavbar from "./pages/NavBar";

const MainLayout = () => {
  return (
    <>
      <DarkNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
