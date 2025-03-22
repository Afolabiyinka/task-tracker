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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch(
        "https://taskmaster-project-hi5d.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration Successful!", { position: "top-center" });
        setTimeout(() => {
          window.location.href = "/auth/login"; // Redirect to login
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed.", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
      console.error("Error:", err);
    }
  }

  return (
    <motion.div
      className="h-[90vh] flex items-center justify-center"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6"
        variants={slideUpVariants}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-200 mb-4 flex gap-2 items-center justify-center"
          variants={slideUpVariants}
        >
          Create a new account <User size={40} />
        </motion.h2>
        <motion.form
          className="flex flex-col"
          onSubmit={handleRegister}
          variants={slideUpVariants}
        >
          <motion.input
            placeholder="Username"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variants={slideUpVariants}
          />
          <motion.input
            placeholder="Email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variants={slideUpVariants}
          />
          <motion.div className="relative" variants={slideUpVariants}>
            <motion.input
              placeholder="Password"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 w-full pr-10"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variants={slideUpVariants}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
            </button>
          </motion.div>
          <motion.div className="flex items-center" variants={slideUpVariants}>
            <Checkbox id="checkbox-link" className="mr-2 bg-gray-700" />
            <Typography
              as="label"
              htmlFor="checkbox-link"
              className="text-white"
            >
              Remember Me
            </Typography>
          </motion.div>
          <motion.p
            className="text-white mt-4 flex gap-1"
            variants={slideUpVariants}
          >
            Already have an account?
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </motion.p>
          <motion.div variants={slideUpVariants}>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
              type="submit"
            >
              Join Now
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default Register;
