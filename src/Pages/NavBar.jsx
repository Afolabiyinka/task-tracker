import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CheckCheckIcon } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[10vh] bg-[#0D1B2A] flex justify-between px-6 mx-3 my-0 rounded-2xl items-center">
      <span className="flex gap-1 justify-center items-center text-white text-xl font-bold">
        <CheckCheckIcon size={50} color="white" />{" "}
        <Link to="/">TASK MANAGER</Link>
      </span>
      <ul className="md:flex gap-12 font-semibold font-sans text-center text-xl text-white font-antialiased list-none hidden items-center">
        <li className="focus:underline-offset-1 cursor-pointer ">Home</li>
        <li className="focus:underline-offset-1 cursor-pointer ">About</li>
        <li className="focus:underline-offset-1 cursor-pointer ">Reviews</li>
        <li className="focus:underline-offset-1 cursor-pointer ">Contact</li>

        <button className="flex gap-1 px-12 py-2 bg-purple-700 rounded-lg justify-center items-center font-sans font-semibold hover:bg-blue-600 transition-all duration-700 ease-in-out">
          <Link to="/login">Log In </Link>
        </button>
      </ul>
      {/* Mobile NavBar */}
      <button
        className="ease-in-out transition-all grid md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={40} /> : <Menu size={40} />}
      </button>

      {open && (
        <ul className="w-[90%] absolute top-24 left-3 bg-[#0D1B2A] text-white text-2xl flex flex-col gap-6 justify-center p-4  px-6 rounded-2xl shadow-md z-50">
          <li className="focus:underline-offset-1 cursor-pointer ">Home</li>
          <li>About</li>
          <li>Reviews</li>
          <li>Contact</li>
          <button className="flex gap-1 px-12 py-2 bg-purple-700 rounded-lg justify-center items-center font-sans font-semibold hover:bg-blue-600 transition-all duration-700 ease-in-out">
            Log In
          </button>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
