import React from "react";
import { motion } from "framer-motion";
import { Task } from "../Task Components/Task";

const YourTasks = ({ tasks }) => {
  return (
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
  );
};

export default YourTasks;
