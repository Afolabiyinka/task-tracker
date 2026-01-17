import { Outlet } from "react-router-dom";
import DarkNavbar from "../NavBar";

const MainLayout = () => {
  return (
    <>
      <DarkNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
