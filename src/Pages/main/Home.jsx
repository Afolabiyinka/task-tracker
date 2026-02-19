import whiteScreenShot from "../../Assets/ScreenShots/Screenshot (105).png";
import blackScreenShot from "../../Assets/ScreenShots/Screenshot (106).png";
import CustomBtn from "../../Components/custom/CustomBtn";
import { motion } from "framer-motion";
import { useTheme } from "../../Contexts/ThemeContext";
import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const screenshot = theme === "dark" ? blackScreenShot : whiteScreenShot;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full px-4 lg:px-12 py-2 gap-10 relative overflow-hidden">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight capitalize"
        >
          Think, plan and track
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-4xl lg:text-5xl text-2xl text-gray-800  dark:text-gray-300 tracking-wide capitalize"
        >
          All in one place
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400 capitalize"
        >
          Efficiently manage your tasks and boost productivity
        </motion.p>

        <CustomBtn
          children="Try it now"
          onClick={() => navigate("/auth/login")}
          icon={ArrowRightCircle}
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
