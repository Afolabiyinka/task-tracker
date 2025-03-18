import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TaskHome from "./Pages/Tasks/TaskHome";
function App() {
  return (
    <div className="bg-black py-2  h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskHome />} />
      </Routes>
    </div>
  );
}

export default App;
