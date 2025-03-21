import { useState } from "react";
import { UserRound, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast, Slide, ToastContainer } from "react-toastify";
import CustomBtn from "../Components/CustomBtn";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    toast.info("Validating Acoount!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

    let raw = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://taskmaster-project-hi5d.onrender.com/auth/register",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="flex justify-center items-center my-6">
      <form onSubmit={handleRegister}>
        <div className="bg-gray-900 p-8 rounded-lg flex flex-col justify-center items-center gap-1 text-center">
          <h1 className="flex gap-2 text-2xl">
            Create a new account <UserRound size={30} />
          </h1>
          <div className="flex flex-col w-fit h-fit p-4 gap-4">
            <label
              htmlFor="username"
              className="flex gap-1 font-sans font-semibold"
            >
              <Mail /> Username
            </label>
            <span>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="w-[17rem] h-[2.5rem] rounded-md p-2 text-black"
              />
            </span>
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
                placeholder="Email"
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
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-[17rem] h-[2.5rem] rounded-md p-2 text-black"
              />
            </span>
            <span className="flex justify-center items-center">
              <CustomBtn text="Sign In" />
            </span>
            <h1 className="text-xl">
              Already have an Account?{" "}
              <Link to="/auth/login" className="text-blue-700">
                LogIn
              </Link>
            </h1>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
