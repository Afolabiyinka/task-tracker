import React from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/request";
import { useNavigate } from "react-router-dom";
import { useToken } from "../store/useToken";
import useToastMessage from "../../../shared/store/libs/useToastMsg";
export const useLogin = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const { toastError, toastSuccess } = useToastMessage();
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => login(payload),
    onSuccess: (data) => {
      setToken(data.token);
      toastSuccess(data.message);
      navigate("/tasks");
    },
    onError: (error) => {
      toastError(error.message);
    },
  });

  function handleLogin(e) {
    e.preventDefault();
    console.log("clicked");
    mutate(loginData);
  }
  return {
    handleLogin,
    loading: isPending,
    setLoginData,
    loginData,
  };
};
