import React from "react";
import { CheckCircle, ClipboardX, Frown } from "lucide-react";
import { Input, Button, Select, Alert } from "@material-tailwind/react";
import { Task } from "./Task Components/Task";
import { motion } from "framer-motion";
import { useTasks } from "../../Hooks/TasksContext";
import Loader from "../../Components/Basic Components/Loader";
import { ToastContainer } from "react-toastify";
// import TaskCalendar from "./Task Components/Calendar";

const TodoList = () => {
  const {
    addTodo,
    removeTodo,
    toggleTodo,
    taskInput,
    setTaskInput,
    priority,
    setPriority,
    tasks,
    loading,
  } = useTasks();

  return (
    <div className="w-full md:w-[50%] min-h-[70vh] rounded-xl text-lg md:text-xl flex shadow p-1  ">
      <div className="w-full min-h-[60vh] md:min-h-[80vh] rounded-2xl  text-lg md:text-xl flex flex-col  items-center gap-4 p-4 ">
        <h1 className="text-3xl md:text-4xl flex gap-3 items-center font-bold">
          <span>Add a new Task</span>
          <CheckCircle size={28} />
        </h1>

        <form onSubmit={addTodo} className="w-full max-w-md ">
          <div className="flex gap-4 flex-col text-white">
            <div className="flex gap-3 items-center justify-center">
              <Input
                type="text"
                size="lg"
                required
                color="secondary"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="rounded-lg border border-gray-600 shadow-lg pr-0.5 ring-0 placeholder-gray-400"
                placeholder="Walk the dog 🐕‍🦺"
              />
              <Select
                size="sm"
                value={priority}
                onChange={(value) => setPriority(value)}
              >
                <Select.Trigger placeholder="Priority" className="w-36 p-2.5" />
                <Select.List className="w-32 border border-gray-600 rounded-lg">
                  <Select.Option value="low">Low</Select.Option>
                  <Select.Option value="medium">Medium</Select.Option>
                  <Select.Option value="high">High</Select.Option>
                </Select.List>
              </Select>
            </div>
            <motion.span whileTap={{ scale: 0.97 }}>
              <Button color="secondary" variant="solid" type="submit">
                Add Task
              </Button>
            </motion.span>
          </div>
        </form>

        <div className="w-full flex flex-col items-center justify-center">
          {tasks.length === 0 ? (
            <div className="h-full w-full flex flex-col justify-center font-mono items-center">
              <motion.div
                className="text-center p-12 rounded-xl border border-gray-600"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center items-center animate-bounce">
                  <ClipboardX size={50} />
                </div>
                <p className="mt-2">Add your first task to get started</p>
              </motion.div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full justify-center">
              <h2 className="text-xl font-semibold pl-2 border-l-4 border-blue-500 rounded">
                Your Tasks ({tasks.length})
              </h2>
              {loading ? (
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-2 task-container">
                  {tasks.map((task) => (
                    <motion.div
                      key={task._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Task
                        priority={task.priority}
                        title={task.title}
                        completed={task.completed}
                        id={task._id}
                        deleteTask={() => removeTodo(task._id)}
                        completeTask={toggleTodo}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default TodoList;
