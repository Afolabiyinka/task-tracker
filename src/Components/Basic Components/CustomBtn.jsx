import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const CustomBtn = ({ path, text, className, icon }) => {
  return (
    <Link
      to={path}
      className={`p-3.5 bg-gradient-to-r  from-indigo-500 to-blue-500  text-white flex gap-3 px-16 hover:to-blue-700  items-center justify-center rounded-[100px]  hover:text-black font-bold dark:text-white${className}`}
    >
      <button>
        <span className="text">{text || "Get Started"}</span>
      </button>
      <span>
        {icon && (
          <span children={icon} size={30} className="stroke-[1px] h-10" />
        )}
      </span>
    </Link>
  );
};

export default CustomBtn;
