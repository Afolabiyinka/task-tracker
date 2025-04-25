import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeFather } from "./Contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeFather>
        <App />
      </ThemeFather>
    </BrowserRouter>
  </React.StrictMode>
);
