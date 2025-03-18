import React from "react";
import logo from "../Assets/android-chrome-512x512.png";
import { Menu, CheckCheckIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="h-[10vh] bg-[#0D1B2A] flex justify-between px-24 mx-3 my-0 rounded-2xl items-center">
      <span className="flex gap-1 justify-center items-center text-white text-xl font-bold">
        <CheckCheckIcon size={50} color="white" /> TASK MANAGER
      </span>
      <ul className="md:flex gap-12 font-semibold font-sans text-center text-xl text-white font-antialiased list-none">
        <li className="focus:underline-offset-1 cursor-pointer">Home</li>
        <li>About</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
