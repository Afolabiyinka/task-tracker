import { motion } from "framer-motion";
import { Input } from "@material-tailwind/react";

export const CustomInput = ({ icon, type, placeholder, onChange, value }) => {
  return (
    <motion.div
      className="relative"
      //  variants={slideUpVariants}
    >
      <span className="absolute inset-y-0 right-3 top-3 z-50">{icon}</span>
      <Input
        placeholder={placeholder}
        color="secondary"
        variant="solid"
        className=" border-[1px] rounded-xl p-5  px-8focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        value={value}
        onChange={onChange}
      />
    </motion.div>
  );
};
