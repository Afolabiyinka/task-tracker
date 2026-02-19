import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { ValidateLogin } from "../../Hooks/ValidateLogin";
import { CustomInput } from "../../Components/custom/Input";
import CustomBtn from "../../Components/custom/CustomBtn";
import CustomCheckbox from "../../Components/custom/Checkbox";

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
  } = ValidateLogin();

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center text-gray-700 font-sans"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="p-3 md:p-10" variants={slideUpVariants}>
        <motion.h2
          className="text-2xl tracking-wider capitalize mb-6 flex gap-2 items-center justify-center"
          variants={slideUpVariants}
        >
          Log into your account <User size={32} />
        </motion.h2>

        <motion.form
          className="flex flex-col gap-6 justify-center items-center w-full p-6"
          variants={slideUpVariants}
        >
          <CustomInput
            icon={Mail}
            value={email}
            type="email"
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            icon={Lock}
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.div
            className="flex items-center justify-between text-sm w-full"
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

          <motion.div variants={slideUpVariants} className="w-full">
            <CustomBtn
              className={`w-full`}
              onClick={handleLogin}
              loading={loading}
              disabled={loading}
              children={`Log in`}
            />
          </motion.div>

          <p className="text-lg tracking-wider text-center mt-4">
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
  );
};

export default Login;
