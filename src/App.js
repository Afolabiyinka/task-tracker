import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Pages/NavBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TaskHome from "./Pages/Tasks/TaskHome";
import Reviews from "./Pages/Reviews";
function App() {
  return (
    <div className="bg-black py-2 text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/tasks" element={<TaskHome />} />
      </Routes>
    </div>
  );
}

export default App;
