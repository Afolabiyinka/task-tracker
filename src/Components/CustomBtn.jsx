import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CustomBtn = ({ linkpath, text }) => {
  return (
    <div>
      <Link to={linkpath}>
        <button className="bg-purple-700 px-6 py-3 rounded-lg flex gap-1 font-sans font-semibold hover:bg-blue-600 transition-transform hover:scale-105 duration-700 ease-in-out">
          {text}
          <ArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default CustomBtn;
