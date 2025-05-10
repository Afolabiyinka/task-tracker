import React from "react";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Select, Input, Button } from "@material-tailwind/react";
import { Task } from "./Task Components/Task";
import { motion } from "framer-motion";
// import TaskCalendar from "./Task Components/Calendar";

const TodoList = () => {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks === null) return [];
    return JSON.parse(localTasks);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTodo(e) {
    if (taskInput.trim() === "") return;
    e.preventDefault();
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        {
          id: crypto.randomUUID(),
          title: taskInput,
          completed: false,
          priority: priority,
        },
      ];
    });
    setTaskInput("");
  }

  function removeTodo(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  return (
    <div className="w-full md:w-full min-h-[70vh] rounded-xl text-lg md:text-xl flex gap-2 p-2">
      <div className="w-full md:w-full min-h-[60vh] md:min-h-[80vh]  backdrop-blur-sm lg:w-1/2 rounded-2xl text-lg md:text-xl flex flex-col items-center gap-4 p-6 shadow-xl border border-gray-700">
        <h1 className="text-3xl md:text-4xl flex gap-3 items-center font-bold">
          <span>Add a new Task</span>
          <CheckCircle size={28} />
        </h1>

        <form onSubmit={addTodo} className="w-full max-w-md mt-4">
          <div className="flex gap-4 flex-col text-white">
            <div className="flex gap-3 items-center justify-center">
              <Input
                type="text"
                size="lg"
                required
                color="secondary"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="rounded-lg border border-gray-600 shadow-lg pr-0.5 ring-0  placeholder-gray-400 "
                placeholder="Walk the dog 🐕‍🦺"
              />
              <Select
                size="md"
                color="secondary"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <Select.Trigger
                  className="w-32  border border-gray-600 rounded-lg"
                  placeholder="Priority"
                  value={priority}
                />
                <Select.List>
                  <Select.Option>Low</Select.Option>
                  <Select.Option>Medium</Select.Option>
                  <Select.Option>High</Select.Option>
                </Select.List>
              </Select>
            </div>
            <motion.span whileTap={{ scale: 0.97 }}>
              <Button color="secondary" variant="solid">
                Add Task
              </Button>
            </motion.span>
          </div>
        </form>

        <div className=" w-full flex flex-col items-center  justify-center">
          {tasks.length === 0 ? (
            <div className="h-full w-full flex flex-col justify-center font-mono items-center">
              <motion.div
                className="text-center p-12 rounded-xl border border-gray-600"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-center text-3xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  No tasks found
                </motion.h1>
                <p className=" mt-2">Add your first task to get started</p>
              </motion.div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              <h2 className="text-xl  font-semibold pl-2 border-l-4 border-gray-500">
                Your Tasks ({tasks.length})
              </h2>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-2 task-container">
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Task
                      priority={task.priority}
                      title={task.title}
                      completed={task.completed}
                      id={task.id}
                      deleteTask={removeTodo}
                      completeTask={toggleTodo}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/2 hidden lg:flex flex-col items-center justify-center h-[80vh] rounded-2xl  backdrop-blur-sm p-6 border border-gray-700">
        {/* <TaskCalendar /> */}
      </div>
    </div>
  );
};

export default TodoList;
