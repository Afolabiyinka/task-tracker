import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const storedUser = localStorage.getItem("Tm-token");
  if (storedUser) {
    return <Navigate to={`/tasks`} replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full border">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
