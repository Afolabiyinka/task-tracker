import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { theme, ThemeProvider } from "@material-tailwind/react";

//Importing the navigation
import Navbar from "./Pages/NavBar";
import FallBackLoader from "./Components/Basic Components/FallBackLoader";
import Footer from "./Pages/Footer";
import TaskCalendar from "./Pages/Tasks/Task Components/Calendar";

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

function App() {
  // Hide Navbar on the "/tasks" page
  const location = useLocation();
  const hideNavbarRoutes = ["/tasks"];

  return (
    <ThemeProvider value={theme}>
      <div className=" py-2  h-fit  ">
        {/* Conditionally render Navbar */}
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Suspense
          fallback={
            <FallBackLoader className="h-screen w-screen flex justify-center" />
          }
        >
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
            <Route path="/random" element={<TaskCalendar />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
