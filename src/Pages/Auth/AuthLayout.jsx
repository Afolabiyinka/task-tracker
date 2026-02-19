import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";

const AuthLayout = () => {
  useEffect(() => {
    const storedUser = localStorage.getItem("Tm-token");
    if (storedUser) {
      return <Navigate to={`/tasks`} replace />;
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
