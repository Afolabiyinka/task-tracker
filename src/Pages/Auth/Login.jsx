import { useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { User, Eye, EyeOff, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleBtn from "./GoogleLogin";
import CheckboxDemo from "../../Components/Basic Components/CheckBox";
import Loader from "../../Components/Basic Components/Loader";
import { ValidateLogin } from "../../Hooks/ValidateLogin";

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

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("Tm-token");
    if (storedUser) {
      toast.success("Loggin In 🎉", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/tasks");
      }, 2000);
    }
  });

  return (
    <motion.div
      className="h-screen flex items-center justify-center text-gray-700 font-sans"
      initial="hidden"
      animate="visible"
    >
      <ToastContainer position="top-right" autoClose={3000} />
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
            <motion.div className="relative" variants={slideUpVariants}>
              <Mail
                className="absolute inset-y-0 right-3 top-3 z-50"
                size={27}
              />
              <Input
                placeholder="Email address"
                color="secondary"
                variant="solid"
                className=" border-[1px] rounded-xl p-5  px-8focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div className="relative" variants={slideUpVariants}>
              <Input
                placeholder="Password"
                className="w-full  rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-14"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="secondary"
                variant="solid"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </motion.div>
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
              <a className="text-blue-500 hover:underline">Forgot password?</a>
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
      <ToastContainer />
    </motion.div>
  );
};

export default Login;
