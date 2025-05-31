import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeFather } from "./Contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { TasksProvider } from "./Hooks/TasksContext";
import { UserProvider } from "./Hooks/ValidateLogin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeFather>
          <TasksProvider>
            <App />
          </TasksProvider>
        </ThemeFather>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
