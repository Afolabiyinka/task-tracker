import whiteScreenShot from "../../Assets/ScreenShots/Screenshot (105).png";
import blackScreenShot from "../../Assets/ScreenShots/Screenshot (106).png";
import CustomBtn from "../../Components/Basic Components/CustomBtn";
import { motion } from "framer-motion";
import { useTheme } from "../../Contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center h-fit w-fit md:gap-0  px-2 lg:px-6 shadow-sm">
        <div className="w-[100%] h-[100%] lg:w-[50%] lg:h-[80vh] flex flex-col items-center justify-center gap-6  text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-semibold font-sans"
          >
            Achieve your goals!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-xl font-sans tracking-wide text-center"
          >
            Simplify your to-do list, empowering you to turn aspirations into
            reality. Track tasks, prioritize effortlessly, manage deadlines and
            celebrate every milestone. Start achieving today.
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <CustomBtn text="Try it now" linkpath="/auth/login" />
          </motion.span>
        </div>
        <span className=" w-[100%] lg:w-[50%] h-[80vh] rounded-lg flex flex-col items-center justify-center object-cover  px-4 py-4">
          <motion.img
            src={theme === "light" ? whiteScreenShot : blackScreenShot}
            alt="Hero Animation"
            className="bg-inherit h-[100%]  object-cover rounded-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </span>
      </div>
    </>
  );
};

export default Home;
