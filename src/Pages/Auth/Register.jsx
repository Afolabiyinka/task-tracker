import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import CheckboxDemo from "../../Components/Basic Components/CheckBox";
import { Link } from "react-router-dom";
import { User, Eye, EyeOff, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Loader from "../../Components/Basic Components/Loader";
import useToastMessage from "../../libs/useToastMsg";
import { Toaster } from "sonner";
const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toastError, toastSuccess } = useToastMessage();

  useEffect(() => {}, []);

  async function handleRegister(e) {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      setLoading(true);
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
        localStorage.setItem("username", username);
        toastSuccess("Resgistered succesfully");
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 2000);
      } else {
        setLoading(false);
        toastError(data.message || "Registration failed.");
      }
      if (rememberMe) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        sessionStorage.setItem("token", data.token);
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
        localStorage.setItem("rememberMe", "false");
      }
    } catch (err) {
      setLoading(false);
      toastError("Something went wrong. Please try again.");
      console.error("Error:", err);
    }
  }

  return (
    <motion.div
      className="h-[90vh] flex items-center justify-center p-6"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-3xl rounded-lg shadow-md p-6 md:p-6 mx-1.5 border-[2px]"
        variants={slideUpVariants}
      >
        <motion.h2
          className="text-2xl font-sans  mb-4 flex gap-2 items-center justify-center"
          variants={slideUpVariants}
        >
          Create a new account
        </motion.h2>
        <motion.form
          className="flex flex-col gap-4 p-8 text-gray-600 w-fit"
          onSubmit={handleRegister}
          variants={slideUpVariants}
        >
          <motion.div className="relative">
            <User
              className="absolute inset-y-0 right-3 top-3 z-50 "
              size={27}
            />
            <Input
              placeholder="Username"
              className="w-full  rounded-md p-5  focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color="secondary"
              variant="solid"
            />
          </motion.div>
          <motion.div className="relative w-full">
            <Mail className="absolute inset-y-0 right-3 top-3 z-50" size={27} />
            <Input
              placeholder="Email address"
              className=" rounded-md p-5  focus:outline-none focus:ring-2 focus:ring-blue-500 pr-[6rem]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variants={slideUpVariants}
              color="secondary"
              variant="solid"
            />
          </motion.div>
          <motion.div className="relative w-full" variants={slideUpVariants}>
            <Input
              placeholder="Password"
              className="w-full rounded-md p-5  focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="secondary"
              variant="solid"
            />
            <button
              type="button"
              className=" absolute inset-y-0 right-3 top-0.5 z-50"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={27} /> : <Eye size={27} />}
            </button>
          </motion.div>
          <motion.div className="flex items-center" variants={slideUpVariants}>
            <label className="flex items-center cursor-pointer">
              <CheckboxDemo
                className="mr-2 bg-gray-700"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </motion.div>
          <Button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 font-bold py-2 px-4 rounded-md mt-4"
            type="submit"
          >
            {loading ? <Loader /> : "Join Now"}
          </Button>
          <motion.p className=" mt-4 flex gap-1" variants={slideUpVariants}>
            Already have an account?
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </motion.p>
          <motion.div variants={slideUpVariants}></motion.div>
        </motion.form>
      </motion.div>
      <Toaster position="top-right" />
    </motion.div>
  );
};

export default Register;
