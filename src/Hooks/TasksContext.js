import { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-toastify";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export function TasksProvider({ children }) {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      const token = localStorage.getItem("Tm-token");

      try {
        setLoading(true);
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
          console.log(data);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch tasks", {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    }

    // fetchTasks();
  }, []);

  async function addTodo(e) {
    if (taskInput.trim() === "") return;
    e.preventDefault();

    const newTask = {
      title: taskInput,
      priority: priority,
      completed: false,
    };

    const token = localStorage.getItem("Tm-token");

    try {
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
      // setTasks((currentTasks) => [...currentTasks, data]);

      if (response.ok) {
        setTasks((currentTasks) => [...currentTasks, data]);
        console.log(data);
        setTaskInput("");
      } else {
        console.error(
          "Failed to add task:",
          data.message || response.statusText
        );
      }
    } catch (err) {
      console.log("Error adding task:", err);
    }
  }

  async function removeTodo(id) {
    const token = localStorage.getItem("Tm-token");

    if (!token) {
      console.error("No authentication token found");
      toast.error("Authentication required", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true); // Show loading state while deleting

      const response = await fetch(
        `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setTasks((currentTasks) =>
          currentTasks.filter((task) => task.id !== id)
        );
        toast.success("Task deleted successfully", {
          position: "top-center",
        });
      } else {
        let errorMessage = "Failed to delete task";

        try {
          const errorData = await response.json();
          errorMessage = errorData.message || response.statusText;
        } catch (parseError) {
          // If response isn't valid JSON
          errorMessage = response.statusText;
        }

        console.error("Failed to delete task:", errorMessage);
        toast.error(errorMessage, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Network error while deleting task", {
        position: "top-center",
      });
    } finally {
      setLoading(false); // Always hide loading state when done
    }
  }

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
        setTasks((currentTasks) =>
          currentTasks.map((task) =>
            task.id === id ? { ...task, completed } : task
          )
        );
      } else {
        const errorData = await response.json();
        console.error("Failed to update task:", errorData.message);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  const value = {
    addTodo,
    removeTodo,
    toggleTodo,
    taskInput,
    setTaskInput,
    priority,
    setPriority,
    tasks,
    setTasks,
    loading,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
