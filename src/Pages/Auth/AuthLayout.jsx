import { Outlet } from "react-router-dom";
import logo from "../../Assets/favicon-32x32.png";

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="border w-full p-2 flex justify-center items-center">
        <img src={logo} height={50} width={50} />
        <p>Task Manager</p>
      </span>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
