import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

//importing our stuff
import DarkNavbar from "./Pages/Ad Pages/NavBar";
import FooterDemo from "./Pages/Ad Pages/Footer";
import { Loader } from "lucide-react";

// Lazy Loading our pages
const Home = lazy(() => import("./Pages/Ad Pages/Home"));
const About = lazy(() => import("./Pages/Ad Pages/About"));
const Login = lazy(() => import("./Pages/Ad Pages/Login"));
const Register = lazy(() => import("./Pages/Ad Pages/Register"));
const Reviews = lazy(() => import("./Pages/Ad Pages/Reviews"));
const Contact = lazy(() => import("./Pages/Ad Pages/Contact"));
const ErrorSection = lazy(() => import("./Pages/Ad Pages/NotFound"));
const TaskHome = lazy(() => import("./Pages/Tasks/TaskHome"));

function App() {
  // Hide Navbar on the "/tasks" page
  const location = useLocation();
  const hideNavbarRoutes = ["/tasks"];

  return (
    <ThemeProvider>
      <div className="bg-black py-2 text-white h-[100%] w-[100%]">
        {/* Conditionally render Navbar */}
        {!hideNavbarRoutes.includes(location.pathname) && <DarkNavbar />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/tasks" element={<TaskHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorSection />} />
          </Routes>
        </Suspense>

        <FooterDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
