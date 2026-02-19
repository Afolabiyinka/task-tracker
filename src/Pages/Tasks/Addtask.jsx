import { CheckCircle, ClipboardX } from "lucide-react";
import { Select } from "@material-tailwind/react";
import { Task } from "./Task Components/Task";
import { motion } from "framer-motion";
import { useTasks } from "../../Hooks/TasksContext";
import Loader from "../../Components/loader/Loader";
import CustomBtn from "../../Components/custom/CustomBtn";
import { CustomInput } from "../../Components/custom/Input";
import NoTasks from "./pages/NoTasks";

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
    <div className="w-full min-h-[70vh] max-w-3xl rounded-xl text-lg md:text-xl flex shadow p-1  justify-center items-center overflow-y-scroll">
      <div className="w-full rounded-lg   text-lg md:text-xl flex flex-col  items-center gap-4 p-3 ">
        <h1 className="text-3xl md:text-5xl f font-semibold tracking-wider">
          <span>Add a new Task</span>
        </h1>

        <form onSubmit={addTodo} className="w-full">
          <div className="flex gap-4 flex-col  w-full">
            <div className="flex gap-3 items-center justify-center  w-full">
              <CustomInput
                className={`w-full`}
                icon={CheckCircle}
                type="text"
                placeholder="Walk the dog 🐕‍🦺"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
              <Select size="lg" value={priority}>
                <Select.Trigger
                  placeholder="Priority"
                  className="w-52 rounded-xl border"
                />
                <Select.List className="w-40 border  rounded-lg">
                  <Select.Option
                    onChange={() => setPriority("low")}
                    value="low"
                  >
                    Low
                  </Select.Option>
                  <Select.Option
                    onChange={() => setPriority("medium")}
                    value="medium"
                  >
                    Medium
                  </Select.Option>
                  <Select.Option
                    onChange={() => setPriority("high")}
                    value="high"
                  >
                    High
                  </Select.Option>
                </Select.List>
              </Select>
            </div>
            <motion.span whileTap={{ scale: 0.97 }}>
              <CustomBtn children={`Add Task`} className={`w-full`} />
            </motion.span>
          </div>
        </form>

        <div className="w-full  h-full flex flex-col items-center justify-center">
          {tasks.length === 0 ? (
            <NoTasks />
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
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
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
    </div>
  );
};

export default TodoList;
