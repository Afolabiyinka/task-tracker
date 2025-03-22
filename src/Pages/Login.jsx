import { useState } from "react";
import { UserRound, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CustomBtn from "../Components/CustomBtn";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log("success");
  }

  return (
    <div className="flex justify-center items-center my-6">
      <form onSubmit={handleLogin}>
        <div className="bg-gray-900 p-11 rounded-lg flex flex-col justify-center items-center gap-1 text-center">
          <h1 className="flex gap-2 text-2xl">
            Login into your account <UserRound size={30} />
          </h1>
          <div className="flex flex-col w-fit h-fit p-4 gap-5">
            <label
              htmlFor="email"
              className="flex gap-1 font-sans font-semibold"
            >
              <Mail /> Email
            </label>
            <span>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-[17rem] h-[2.5rem] rounded-md p-2 text-black"
              />
            </span>
            <label
              htmlFor="password"
              className="flex gap-1 font-sans font-semibold"
            >
              <Lock /> Password
            </label>
            <span>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-[17rem] h-[2.5rem] rounded-md p-2 text-black"
              />
            </span>
            <span className="flex justify-center items-center">
              <CustomBtn text="Log In" />
            </span>
            <h1 className="text-xl">
              Dont Have an Account?{" "}
              <Link to="/auth/register" className="text-blue-700">
                SignUp
              </Link>
            </h1>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
