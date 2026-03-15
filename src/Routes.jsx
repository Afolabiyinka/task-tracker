import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./modules/marketing/MainLayout";

// Lazy Loading our pages
const LandingPage = lazy(() => import("./modules/marketing/pages/LandingPage"));
const Login = lazy(() => import("./modules/auth/pages/Login"));
const Register = lazy(() => import("./modules/auth/pages/Register"));
const Reviews = lazy(() => import("./modules/marketing/pages/Reviews"));
const Contact = lazy(() => import("./modules/marketing/pages/ContactUs"));
const ErrorSection = lazy(() => import("./modules/marketing/pages/NotFound"));
const Tasks = lazy(() => import("./modules/tasks/TaskLayout"));
const Pricing = lazy(() => import("./modules/marketing/pages/Pricing"));
const Features = lazy(() => import("./modules/marketing/pages/Feautures"));
const AuthLayout = lazy(() => import("./modules/auth/AuthLayout"));

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
      element: <AuthLayout />,
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
      element: <Tasks />,
    },
  ];
  const routesModule = createBrowserRouter(routes);
  return <RouterProvider router={routesModule}></RouterProvider>;
};

export default Router;
