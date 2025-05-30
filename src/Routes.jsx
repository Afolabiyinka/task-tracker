import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

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

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/tasks" element={<TaskHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feautures" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<ErrorSection />} />
        {/* <Route path="/random" element={<TaskCalendar />} />/ */}
      </Routes>
    </>
  );
};

export default Router;
