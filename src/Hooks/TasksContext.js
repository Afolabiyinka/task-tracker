import { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-toastify";
import { useTheme } from "../Contexts/ThemeContext";

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
  const { theme } = useTheme();

  useEffect(() => {
    setLoading(true);
    async function fetchTasks() {
      const token = localStorage.getItem("Tm-token");

      try {
        const response = await fetch(
          "https://taskmaster-project-hi5d.onrender.com/tasks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setTasks(data.tasks);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Failed to fetch tasks", {
          position: "top-center",
          // theme: theme,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  // Add a new task
  async function addTodo(e) {
    e.preventDefault();

    if (taskInput.trim() === "") {
      toast.warn("Task input cannot be empty", {
        position: "top-center",
      });
      return;
    }

    const newTask = {
      title: taskInput,
      priority,
      completed: false,
    };

    const token = localStorage.getItem("Tm-token");

    try {
      // setLoading(true);
      const response = await fetch(
        "https://taskmaster-project-hi5d.onrender.com/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newTask),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks((prevTasks) => [...prevTasks, data.task]);
        setTaskInput("");
        toast.success("Task added!", { position: "top-center", theme: theme });
      } else {
        toast.error(data.message || "Failed to add task", {
          position: "top-center",
          theme: theme,
        });
      }
    } catch (err) {
      console.log("Error adding task:", err);
      toast.error("Network error while adding task", {
        position: "top-center",
        theme: theme,
      });
    }
  }

  // Delete a task
  async function removeTodo(id) {
    const token = localStorage.getItem("Tm-token");

    if (!token) {
      toast.error("Authentication required", {
        position: "top-center",
      });
      return;
    }

    // setLoading(true);

    try {
      const response = await fetch(
        `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTasks((prev) => prev.filter((task) => task._id !== id));
        toast.success("Task deleted successfully", {
          position: "top-center",
        });
      } else {
        toast.error(data.message || "Failed to delete task", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Network error while deleting task", {
        position: "top-center",
      });
    } finally {
      // setLoading(false);
    }
  }

  // Toggle task completed
  async function toggleTodo(id, completed) {
    const token = localStorage.getItem("Tm-token");

    try {
      const response = await fetch(
        `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ completed }),
        }
      );

      if (response.ok) {
        setTasks((prev) =>
          prev.map((task) => (task._id === id ? { ...task, completed } : task))
        );
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to update task", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Network error while updating task", {
        position: "top-center",
      });
    }
  }

  const value = {
    taskInput,
    setTaskInput,
    priority,
    setPriority,
    tasks,
    setTasks,
    loading,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
