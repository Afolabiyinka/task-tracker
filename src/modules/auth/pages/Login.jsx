import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { CustomInput } from "../../../Components/custom/Input";
import CustomBtn from "../../../Components/custom/CustomBtn";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { useLogin } from "../hooks/useLogin";

const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const Login = () => {
  const { handleLogin, loading, loginData, setLoginData } = useLogin();
  return (
    <motion.div
      className="h-full w-full flex items-center justify-center text-gray-700 font-sans"
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
          onSubmit={handleLogin}
          variants={slideUpVariants}
        >
          <CustomInput
            icon={Mail}
            value={loginData.email}
            type="email"
            placeholder={"Email"}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <CustomInput
            icon={Lock}
            type="password"
            placeholder={"Password"}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <motion.div
            className="flex items-center justify-between text-sm w-full"
            variants={slideUpVariants}
          >
            <label className="flex items-center cursor-pointer">
              <CustomCheckbox />
              Remember Me
            </label>
          </motion.div>

          <motion.div variants={slideUpVariants} className="w-full">
            <CustomBtn
              className="w-full"
              loading={loading}
              type="submit"
              disabled={loading}
            >
              Log in
            </CustomBtn>
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
