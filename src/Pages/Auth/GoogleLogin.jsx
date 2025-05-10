import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleBtn = () => {
  const responseMessage = (response) => {
    const token = response.credential;
    const base64Url = token.split(".")[1]; // Extract payload
    const decodedData = JSON.parse(atob(base64Url)); // Decode token

    localStorage.setItem("googleUser", JSON.stringify(decodedData)); // Store in localStorage
    // console.log("Google User Stored:", decodedData);
  };

  const errorMessage = (error) => {
    console.error("Google Login Error:", error);
  };

  return (
    <GoogleOAuthProvider clientId="33915265717-slgkk1llr3kvebm9spnfbvv4te8vhk08.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
        theme="outline"
        size="large"
        shape="pill"
        logo_alignment="center"
        className="w-full mt-4"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
