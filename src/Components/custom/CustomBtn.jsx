import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const CustomBtn = ({
  children,
  className,
  icon: Icon,
  onClick,
  disabled,
  loading,
  type = "button",
}) => {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`p-3 bg-black dark:bg-white text-white dark:text-black flex gap-3 px-10 items-center justify-center rounded-2xl transition-all duration-500 border disabled:cursor-not-allowed disabled:bg-gray-500 ${className}`}
    >
      {loading && <Loader2 className="animate-spin" />}
      <span>{children}</span>
      {Icon && <Icon size={25} className="stroke-[1px]" />}
    </motion.button>
  );
};

export default CustomBtn;
