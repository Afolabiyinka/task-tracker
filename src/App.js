import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="bg-black py-2  h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
