import { useState, useContext, createContext } from "react";
import useToastMessage from "../libs/useToastMsg";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export function TasksProvider({ children }) {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const { toastError, toastSuccess, toastLoading, toastWarning } =
    useToastMessage();

  const token = () => localStorage.getItem("Tm-token");

  async function fetchTasks() {
    if (!token()) {
      // window.location.href = "/auth/login";
      toastError("Login required");
    }

    setLoading(true);
    toastLoading("Fetching tasks...");

    try {
      const response = await fetch(
        "https://taskmaster-project-hi5d.onrender.com/tasks",
        {
          headers: { Authorization: `Bearer ${token()}` },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks(data.tasks);
        toastSuccess("Tasks loaded");
      } else {
        toastError(data.message || "Failed to load tasks");
      }
    } catch (err) {
      console.error(err);
      toastError("Network error while fetching tasks");
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(e) {
    e.preventDefault();

    if (!taskInput.trim()) {
      toastWarning("Task input cannot be empty");
      return;
    }

    const newTask = {
      title: taskInput,
      priority,
      completed: false,
    };

    if (!token()) return toastError("Login required");

    toastLoading("Adding task...");

    try {
      const response = await fetch(
        "https://taskmaster-project-hi5d.onrender.com/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
          },
          body: JSON.stringify(newTask),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks((prev) => [...prev, data.task]);
        setTaskInput("");
        toastSuccess("Task added");
      } else {
        toastError(data.message || "Failed to add task");
      }
    } catch (err) {
      console.error("Error adding task:", err);
      toastError("Network error while adding task");
    }
  }

  async function removeTodo(id) {
    if (!token()) return toastError("Login required");

    toastLoading("Deleting task...");

    try {
      const response = await fetch(
        `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token()}` },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks((prev) => prev.filter((task) => task._id !== id));
        toastSuccess("Task deleted");
      } else {
        toastError(data.message || "Failed to delete task");
      }
    } catch (err) {
      console.error("Error deleting task:", err);
      toastError("Network error while deleting task");
    }
  }

  async function toggleTodo(id, completed) {
    if (!token()) return toastError("Login required");

    try {
      const response = await fetch(
        `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
          },
          body: JSON.stringify({ completed }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks((prev) =>
          prev.map((task) => (task._id === id ? { ...task, completed } : task))
        );
      } else {
        toastError(data.message || "Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toastError("Network error while updating task");
    }
  }

  const value = {
    taskInput,
    setTaskInput,
    priority,
    setPriority,
    tasks,
    loading,
    addTodo,
    removeTodo,
    toggleTodo,
    fetchTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
