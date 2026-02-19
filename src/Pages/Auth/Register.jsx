import { useEffect, useState } from "react";
import { Checkbox, CheckboxIndicator } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import useToastMessage from "../../libs/useToastMsg";
import { CustomInput } from "../../Components/custom/Input";
import CustomBtn from "../../Components/custom/CustomBtn";
import CustomCheckbox from "../../Components/custom/Checkbox";
const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Register = () => {
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
        },
      );

      const data = await response.json();

      if (response.ok) {
        toastSuccess("Account created.");
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 2000);
      } else {
        setLoading(false);
        toastError(data.message || "Registration failed.");
      }
      if (rememberMe) {
        localStorage.setItem("token", data.token);

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
      className="h-[90vh] flex flex-col p-2 justify-center items-center w-full"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="p-3 md:p-10" variants={slideUpVariants}>
        <motion.h2
          className="text-3xl tracking-wider capitalize font-sans  mb-4 flex gap-2 items-center justify-center"
          variants={slideUpVariants}
        >
          Create a new account
        </motion.h2>

        <motion.form
          className="flex flex-col justify-center items-center gap-4 p-6 text-gray-600 w-full"
          onSubmit={handleRegister}
          variants={slideUpVariants}
        >
          <CustomInput
            icon={User}
            value={username}
            type="text"
            placeholder={"Username"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomInput
            icon={Mail}
            value={email}
            type="email"
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            icon={Lock}
            value={password}
            type="password"
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.div
            className="flex items-center w-full"
            variants={slideUpVariants}
          >
            <label className="flex items-center cursor-pointer">
              <CustomCheckbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </motion.div>
          <CustomBtn
            className={`w-full`}
            onClick={handleRegister}
            loading={loading}
            disabled={loading}
            children={`Create Account`}
          />
          <motion.p
            className=" mt-4 flex gap-1 text-lg tracking-wider text-center"
            variants={slideUpVariants}
          >
            Already have an account?
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </motion.p>
          <motion.div variants={slideUpVariants}></motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
