import React from "react";
import Loader from "./Loader";

const LoadingContainer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default LoadingContainer;
