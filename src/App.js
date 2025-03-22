import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import DarkNavbar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TaskHome from "./Pages/Tasks/TaskHome";
import Reviews from "./Pages/Reviews";
import ErrorSection from "./Pages/NotFound";
import FooterDemo from "./Pages/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-black py-2 text-white">
        <DarkNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/tasks" element={<TaskHome />} />
          <Route path="*" element={<ErrorSection />} />
        </Routes>
        <FooterDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
