import { Checkbox, CheckboxIndicator } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { CustomInput } from "../../../Components/custom/Input";
import CustomBtn from "../../../Components/custom/CustomBtn";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { useSignup } from "../hooks/useRegister";
const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Register = () => {
  const { handleSignup, loading, signupData, setSignUpData } = useSignup();

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
          onSubmit={handleSignup}
          variants={slideUpVariants}
        >
          <CustomInput
            icon={User}
            value={signupData.username}
            type="text"
            placeholder={"Username"}
            onChange={(e) =>
              setSignUpData({ ...signupData, username: e.target.value })
            }
          />
          <CustomInput
            icon={Mail}
            value={signupData.email}
            type="email"
            placeholder={"Email"}
            onChange={(e) =>
              setSignUpData({ ...signupData, email: e.target.value })
            }
          />
          <CustomInput
            icon={Lock}
            value={signupData.password}
            type="password"
            placeholder={"Password"}
            onChange={(e) =>
              setSignUpData({ ...signupData, password: e.target.value })
            }
          />
          <motion.div
            className="flex items-center w-full"
            variants={slideUpVariants}
          >
            <label className="flex items-center cursor-pointer">
              <CustomCheckbox />
              Remember Me
            </label>
          </motion.div>
          <CustomBtn
            className={`w-full`}
            loading={loading}
            disabled={loading}
            type="submit"
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
