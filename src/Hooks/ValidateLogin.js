import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();

export const ValidateLogin = () => useContext(UserContext);

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

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
          console.log(receivedToken);

          toast.success("Login successful 🎉", {
            position: "top-center",
          });

          setTimeout(() => navigate("/tasks"), 1000);
        } else {
          toast.error("Token not found in response.");
        }
      } else {
        setLoading(false);
        toast.error(
          data.message || "Login failed! Please check your credentials."
        );
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
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
