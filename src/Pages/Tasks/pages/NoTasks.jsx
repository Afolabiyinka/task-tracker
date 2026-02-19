import { ClipboardX } from "lucide-react";
import { motion } from "framer-motion";
const NoTasks = () => {
  return (
    <motion.div
      className="text-center w-full p-2 h-full flex flex-col  rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center animate-bounce">
        <ClipboardX size={80} className="stroke-[1px]" />
      </div>
      <p className="mt-2">Add your first task to get started</p>
    </motion.div>
  );
};

export default NoTasks;
