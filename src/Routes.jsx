import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { UserProvider } from "./Hooks/ValidateLogin";
import { TasksProvider } from "./Hooks/TasksContext";
import MainLayout from "./Pages/Ad Pages/MainLayout";

// Lazy Loading our pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const About = lazy(() => import("./Pages/Ad Pages/About"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const Reviews = lazy(() => import("./Pages/Ad Pages/Reviews"));
const Contact = lazy(() => import("./Pages/Ad Pages/ContactUs"));
const ErrorSection = lazy(() => import("./Pages/Ad Pages/NotFound"));
const TaskHome = lazy(() => import("./Pages/Tasks/TaskHome"));
const Pricing = lazy(() => import("./Pages/Ad Pages/Pricing"));
const Features = lazy(() => import("./Pages/Ad Pages/Feautures"));
const AuthLayout = lazy(() => import("./Pages/Auth/AuthLayout"));

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
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
