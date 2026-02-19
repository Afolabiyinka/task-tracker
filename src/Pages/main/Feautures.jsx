import { motion } from "framer-motion";
import { Clipboard, CheckCheck, Clock } from "lucide-react";

const Features = () => {
  const LINKS = [
    {
      title: "Managing Deadlines",
      emoji: Clock,
    },
    {
      title: "Keeping Track with assignments",
      emoji: Clipboard,
    },

    {
      title: "Prioritize, organise, execute",
      emoji: CheckCheck,
    },
  ];

  const itemVariants = {
    hidden: { x: -30 },
    visible: {
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        type: "spring",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-6 px-4 h-screen w-full  flex flex-col justify-center items-center shadow-sm">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={titleVariants}
        className="text-3xl md:text-3xl font-bold text-center mb-12"
      >
        Why Choose Our Task Manager?
      </motion.h2>

      <motion.div
        // variants={containerVariants}
        className="w-full md:w-[50%]  flex flex-col gap-5"
      >
        {LINKS.map(({ emoji: Icon, title, color, i }) => (
          <motion.div
            key={title}
            initial={{ x: -40 }}
            animate={{ x: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              // scale: 1.02,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="px-1 border py-4 rounded-2xl  flex gap-4 items-center w-full  transition-all duration-300"
          >
            <div className="p-3 rounded-xl flex items-center justify-center">
              <Icon size={28} color={color} className="stroke-[1px]" />
            </div>
            <p className="font-sans font-medium text-xl md:text-xl">{title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          s
          variants={imageVariants}
          className="w-full md:w-[50%] max-w-2xl h-full bg-inherit"
        >
          <div className="relative rounded-2xl overflow-hidden  flex justify-center  items-center">
            <img
              src={svgAnimation}
              alt="Task manager animation"
              className="h-96 object-cover"
            />
          </div>
        </motion.div> */}
    </div>
  );
};

export default Features;
