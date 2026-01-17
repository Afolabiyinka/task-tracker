import whiteScreenShot from "../../Assets/ScreenShots/Screenshot (105).png";
import blackScreenShot from "../../Assets/ScreenShots/Screenshot (106).png";
import CustomBtn from "../../Components/Basic Components/CustomBtn";
import { motion } from "framer-motion";
import { useTheme } from "../../Contexts/ThemeContext";
import { ArrowRightCircle } from "lucide-react";

const Home = () => {
  const { theme } = useTheme();
  const screenshot = theme === "dark" ? blackScreenShot : whiteScreenShot;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full px-4 lg:px-12 py-2 gap-10 relative overflow-hidden">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight"
        >
          Think, plan and track
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-4xl lg:text-5xl text-2xl text-gray-500 dark:text-gray-300 tracking-wide"
        >
          All in one place
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Efficiently manage your tasks and boost productivity
        </motion.p>

        <CustomBtn
          text="Try it now"
          path="/auth/login"
          icon={<ArrowRightCircle />}
        />
      </div>

      {/* Right side: Floating Screenshot */}
      <span className="w-full lg:w-[40%] flex items-center justify-center">
        <motion.img src={screenshot} alt="App Preview" className="" />
      </span>
    </div>
  );
};

export default Home;
