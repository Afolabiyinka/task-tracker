import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clipboard, CheckCheck, Clock } from "lucide-react";
import svgAnimation from "../../Assets/undraw_to-do-list_eoia.svg";

const Features = () => {
  // Create a ref for the section title
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Create a ref for the features list
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Create a ref for the image
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 px-4">
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={titleVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Why Choose Our Task Manager?
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <motion.div
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full md:w-[45%] flex flex-col gap-5"
        >
          {LINKS.map(({ emoji: Icon, title, color }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="px-6 py-4 rounded-2xl flex gap-4 items-center border-none shadow-none transition-all duration-300"
            >
              <div className="p-3 rounded-xl flex items-center justify-center">
                <Icon size={28} color={color} />
              </div>
              <Typography className="font-sans font-medium text-2xl md:text-2xl">
                {title}
              </Typography>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-full md:w-[50%] max-w-lg h-full"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center  items-center">
            <img
              src={svgAnimation}
              alt="Task manager animation"
              className="h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
