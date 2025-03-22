import React, { useState } from "react";
import { Checkbox, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { User, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = { email, password };

    try {
      const response = await fetch(
        "https://taskmaster-project-hi5d.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userCredentials),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful 🎉", { position: "top-center" });
        localStorage.setItem("token", data.token);

        setTimeout(() => {
          window.location.href = "/tasks"; // Redirect after successful login
        }, 2000);
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <motion.div
      className="h-[90vh] flex items-center justify-center"
      initial="hidden"
      animate="visible"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        className="flex flex-col items-center justify-center h-screen dark"
        variants={slideUpVariants}
      >
        <motion.div
          className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6"
          variants={slideUpVariants}
        >
          <motion.h2
            className="text-2xl font-bold font-mono text-gray-200 mb-4 flex gap-2 items-center justify-center"
            variants={slideUpVariants}
          >
            Sign in to your account <User size={40} />
          </motion.h2>
          <motion.form
            className="flex flex-col"
            onSubmit={handleLogin}
            variants={slideUpVariants}
          >
            <motion.input
              placeholder="Email address"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variants={slideUpVariants}
            />
            <motion.div className="relative" variants={slideUpVariants}>
              <motion.input
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full pr-10"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variants={slideUpVariants}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
              </button>
            </motion.div>
            <motion.div
              className="flex items-center justify-between flex-wrap"
              variants={slideUpVariants}
            >
              <label className="cursor-pointer flex" htmlFor="remember-me">
                <Checkbox id="checkbox-link" className="mr-2 bg-gray-700" />
                <Typography className="cursor-pointer text-white">
                  Remember Me
                </Typography>
              </label>
              <a className="text-blue-500 hover:underline" href="#">
                Forgot password?
              </a>
              <p className="text-white mt-4 flex gap-1">
                Don't have an account?
                <Link
                  to="/auth/register"
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </motion.div>
            <motion.div variants={slideUpVariants}>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600"
                type="submit"
              >
                Login
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
