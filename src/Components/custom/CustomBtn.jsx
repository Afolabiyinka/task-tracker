import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const CustomBtn = ({
  children,
  className,
  icon: Icon,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <motion.button
      // whileHover={{ y: -7 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`p-3 bg-gradient-to-r bg-black  text-white flex gap-3  px-10   items-center justify-center rounded-2xl  transition-all duration-500 ${disabled ? "" : "hover:gap-4"}  hover:shadow border disabled:cursor-not-allowed disabled:bg-gray-500 ${className}`}
    >
      <span>{loading && <Loader2 className="animate-spin" />}</span>
      <span className="">{children}</span>
      {Icon && <Icon size={25} className="stroke-[1px]" />}
    </motion.button>
  );
};

export default CustomBtn;
