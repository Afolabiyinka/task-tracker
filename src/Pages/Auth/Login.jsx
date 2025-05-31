import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { User, Eye, EyeOff, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleBtn from "./GoogleLogin";
import CheckboxDemo from "../../Components/Basic Components/CheckBox";
import Loader from "../../Components/Basic Components/Loader";
import { useTheme } from "../../Contexts/ThemeContext";
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

  return (
    <motion.div
      className="h-screen flex items-center justify-center b"
      initial="hidden"
      animate="visible"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        className="flex flex-col items-center justify-center "
        variants={slideUpVariants}
      >
        <motion.div
          className="w-full max-w-md  rounded-xl shadow-lg p-6 border-[1px]"
          variants={slideUpVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 flex gap-2 items-center justify-center"
            variants={slideUpVariants}
          >
            Sign in to your account <User size={32} />
          </motion.h2>

          <motion.form
            className="space-y-5"
            onSubmit={handleLogin}
            variants={slideUpVariants}
          >
            <motion.div className="relative" variants={slideUpVariants}>
              <Mail className="absolute inset-y-0 right-3 top-3 " size={27} />
              <Input
                placeholder="Email address"
                color="secondary"
                variant="solid"
                className="w-full border-[1px] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div className="relative" variants={slideUpVariants}>
              <Input
                placeholder="Password"
                className="w-full  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
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
              <p className="text-blue-500 hover:underline">Forgot password?</p>
            </motion.div>

            <motion.div variants={slideUpVariants}>
              <Button
                className="w-full bg-gradient-to-r from-indigo-500 to-  blue-500  font-bold py-3 rounded-md hover:bg-indigo-600 transition duration-200"
                type="submit"
                variant="solid"
              >
                {loading ? <Loader className="h-[10px] w-[10px]" /> : "Login"}
              </Button>
            </motion.div>

            <motion.div variants={slideUpVariants} className="mt-3">
              <GoogleBtn />
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
    </motion.div>
  );
};

export default Login;
