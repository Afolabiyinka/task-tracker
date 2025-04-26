import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@material-tailwind/react";

const CustomBtn = ({ linkpath, text, click }) => {
  return (
    <div>
      <Link to={linkpath}>
        <Button
          color="secondary"
          size="lg"
          className="bg-purple-600 rounded-lg flex gap-1 font-sans font-semibold  hover:bg-blue-600 transition-transform hover:scale-105 duration-700 ease-in-out"
          onClick={click}
        >
          {text}
          <ArrowRight />
        </Button>
      </Link>
    </div>
  );
};

export default CustomBtn;
