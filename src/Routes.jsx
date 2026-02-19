import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { UserProvider } from "./Hooks/ValidateLogin";
import { TasksProvider } from "./Hooks/TasksContext";
import MainLayout from "./Pages/main/MainLayout";

// Lazy Loading our pages
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const Reviews = lazy(() => import("./Pages/main/Reviews"));
const Contact = lazy(() => import("./Pages/main/ContactUs"));
const ErrorSection = lazy(() => import("./Pages/main/NotFound"));
const TaskHome = lazy(() => import("./Pages/Tasks/TaskHome"));
const Pricing = lazy(() => import("./Pages/main/Pricing"));
const Features = lazy(() => import("./Pages/main/Feautures"));
const AuthLayout = lazy(() => import("./Pages/Auth/AuthLayout"));

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "feautures",
          element: <Features />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <UserProvider>
          <AuthLayout />
        </UserProvider>
      ),
      children: [
        {
          path: "login",
          Component: Login,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorSection />,
    },
    {
      path: "/tasks",
      element: (
        <TasksProvider>
          <TaskHome />
        </TasksProvider>
      ),
    },
  ];
  const routesModule = createBrowserRouter(routes);
  return <RouterProvider router={routesModule}></RouterProvider>;
};

export default Router;
