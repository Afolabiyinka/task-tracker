import { motion } from "framer-motion";

export const CustomInput = ({
  icon: Icon,
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <motion.div
      className={`relative w-[21rem] h-[3.5rem] flex  gap-3 items-center justify-center pl-2 border-[1px] rounded-2xl overflow-hidden  focus:ring-2 focus:ring-blue-500  ${className} `}
    >
      <Icon size={35} className={`stroke-[1px]`} />
      <input
        placeholder={placeholder}
        className="h-full w-full p-1 bg-inherit text-inherit focus:border-0 focus:outline-none"
        type={type}
        value={value}
        onChange={onChange}
      />
    </motion.div>
  );
};
