import { Typography } from "@material-tailwind/react";
import { Flag } from "lucide-react";
import { motion } from "framer-motion";
import CustomBtn from "../../Components/Basic Components/CustomBtn";

function ErrorSection() {
  return (
    <div className="h-screen mx-auto flex flex-col items-center justify-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
        <Flag className="w-20 h-20 mx-auto text-red-500" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-6 !text-3xl font-bold !leading-snug md:!text-4xl"
        >
          Error 404 <br /> Page not Found!
        </Typography>
        <Typography className="mt-4 mb-10 text-lg text-gray-500 md:max-w-md">
          Don&apos;t worry, our team is already on it. Please refresh the page
          or try again later.
        </Typography>
        <span className="flex flex-col items-center justify-center">
          <CustomBtn text={`Back Home`} path="/" />
        </span>
      </motion.div>
    </div>
  );
}

export default ErrorSection;
