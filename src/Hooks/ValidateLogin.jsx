import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../libs/useToastMsg";

const UserContext = createContext();

export const ValidateLogin = () => useContext(UserContext);

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toastError, toastSuccess } = useToastMessage();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };

    try {
      setLoading(true);
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
        const receivedToken = data.token;
        console.log(receivedToken);

        if (receivedToken) {
          localStorage.setItem("Tm-token", receivedToken);
          toastSuccess("Login succesfull");
          setTimeout(() => navigate("/tasks"), 1000);
        } else {
          toastError("Token not found in response");
        }
      } else {
        setLoading(false);
        toastError(
          data.message || "Login failed! Please check your credentials."
        );
      }
    } catch (err) {
      setLoading(false);
      toastError("Something went wrong. Please try again.");
    }
  };

  const value = {
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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
