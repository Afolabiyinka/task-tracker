import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { register } from "../services/request";
import { useToken } from "../store/useToken";

export const useSignup = () => {
  const [signupData, setSignUpData] = React.useState({
    email: "",
    password: "",
    username: "",
    confirmedPassword: "",
  });

  const { setToken } = useToken();

  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastMessage();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => register(payload),
    onSuccess: (data) => {
      setToken(data.token);
      toastSuccess(data.message);
      navigate("/tasks");
    },
    onError: (err) => {
      toastError(err.message);
    },
  });

  function handleSignup(e) {
    e.preventDefault();
    mutate(signupData);
  }

  return {
    signupData,
    setSignUpData,
    handleSignup,
    loading: isPending,
  };
};
