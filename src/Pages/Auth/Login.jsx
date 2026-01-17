import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import CheckboxDemo from "../../Components/Basic Components/CheckBox";
import Loader from "../../Components/Basic Components/Loader";
import { ValidateLogin } from "../../Hooks/ValidateLogin";
import { Toaster } from "sonner";
import useToastMessage from "../../libs/useToastMsg";
import { CustomInput } from "../../Components/Basic Components/Input";

const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const Login = () => {
  const {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,

    showPassword,
    setShowPassword,
  } = ValidateLogin();

  return (
    <motion.div
      className="h-screen flex items-center justify-center text-gray-700 font-sans"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center justify-center "
        variants={slideUpVariants}
      >
        <motion.div
          className="w-fit h-fit max-w-md  rounded-xl shadow-lg p-16 border-[1px]"
          variants={slideUpVariants}
        >
          <motion.h2
            className="text-2xl mb-6 flex gap-2 items-center justify-center"
            variants={slideUpVariants}
          >
            Sign in to your account <User size={32} />
          </motion.h2>

          <motion.form
            className="flex flex-col gap-6"
            onSubmit={handleLogin}
            variants={slideUpVariants}
          >
            <CustomInput
              icon={<Mail />}
              value={email}
              type="email"
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              icon={<Lock />}
              type="password"
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <motion.div
              className="flex items-center justify-between text-sm"
              variants={slideUpVariants}
            >
              <label className="flex items-center cursor-pointer">
                <CheckboxDemo
                  className="mr-2 bg-gray-700"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <a className="text-blue-500 hover:underline" href="#">
                Forgot password?
              </a>
            </motion.div>

            <motion.div variants={slideUpVariants}>
              <Button
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500  font-bold py-3 rounded-md hover:bg-indigo-600 hover:to-blue-700 transition duration-200"
                type="submit"
                variant="solid"
              >
                {loading ? <Loader className="h-[10px] w-[10px]" /> : "Login"}
              </Button>
            </motion.div>

            <p className="text-sm text-center mt-4">
              Don't have an account?
              <Link
                to="/auth/register"
                className="text-blue-500 hover:underline ml-1"
              >
                Sign up
              </Link>
            </p>
          </motion.form>
        </motion.div>
      </motion.div>
      <Toaster position="top-right" />
    </motion.div>
  );
};

export default Login;
