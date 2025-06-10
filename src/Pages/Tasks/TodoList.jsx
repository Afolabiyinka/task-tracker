import React from "react";
import { CheckCircle } from "lucide-react";
import { Input, Button, Select } from "@material-tailwind/react";
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
    <div className="w-full md:w-full min-h-[70vh] rounded-xl text-lg md:text-xl flex gap-2 p-2">
      <div className="w-full md:w-full min-h-[60vh] md:min-h-[80vh] lg:w-1/2 rounded-2xl text-lg md:text-xl flex flex-col items-center gap-4 p-6 shadow-xl border border-gray-700 backdrop-blur-sm">
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
              <Button color="primary" variant="solid" type="submit">
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
                <p className="mt-2">Add your first task to get started</p>
              </motion.div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full justify-center">
              <h2 className="text-xl font-semibold pl-2 border-l-4 border-gray-500">
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

      {/* Optional Calendar / Right Section */}
      <div className="w-1/2 hidden lg:flex flex-col items-center justify-center h-[80vh] rounded-2xl backdrop-blur-sm p-6 border border-gray-700">
        {/* <TaskCalendar /> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TodoList;
