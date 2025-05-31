import React, { useState, useEffect, useRef } from "react";
import { Trash } from "lucide-react";
import CheckboxDemo from "../../../Components/Basic Components/CheckBox";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export const Task = ({
  title,
  completed,
  priority,
  id,
  completeTask,
  deleteTask,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const taskRef = useRef(null);
  const [taskSize, setTaskSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    if (taskRef.current && showConfetti) {
      const rect = taskRef.current.getBoundingClientRect();
      setTaskSize({
        width: rect.width + 50,
        height: rect.height + 50,
        x: rect.x - 25,
        y: rect.y - 25,
      });
    }
  }, [showConfetti]);

  const handleComplete = (checked) => {
    completeTask(id, checked);
    if (checked) {
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const getPriorityColor = () => {
    if (priority === "High") return "bg-red-100 text-red-600";
    if (priority === "Medium") return "bg-amber-100 text-amber-600";
    return "bg-blue-100 text-blue-800"; // Default to dark blue
  };

  return (
    <div className="relative">
      {showConfetti && (
        <div
          className="absolute pointer-events-none z-50"
          style={{
            position: "fixed",
            left: taskSize.x,
            top: taskSize.y,
            width: taskSize.width,
            height: taskSize.height,
            overflow: "visible",
          }}
        >
          <Confetti
            width={taskSize.width}
            height={taskSize.height}
            recycle={false}
            numberOfPieces={100}
            confettiSource={{
              x: taskSize.width / 2,
              y: taskSize.height / 2,
              w: 0,
              h: 0,
            }}
            colors={["#1e3a8a", "#3b82f6", "#93c5fd", "#ffffff"]}
          />
        </div>
      )}
      <motion.div
        ref={taskRef}
        className="flex justify-between items-center rounded-lg shadow-sm border border-blue-200 py-4 px-4 md:mx-6 my-2   transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex gap-3 items-center overflow-hidden py-1 w-full">
          <CheckboxDemo
            color="secondary"
            checked={completed}
            onChange={(e) => handleComplete(e.target.checked)}
          />
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
            <Typography
              className={`text-wrap font-medium ${
                completed ? "line-through text-gray-500" : "text-inherit"
              }`}
            >
              {title}
            </Typography>
            {priority && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${getPriorityColor()} font-medium inline-block`}
              >
                {priority}
              </span>
            )}
          </div>
        </div>
        <motion.button
          className="p-2 rounded-full hover:bg-blue-200 text-blue-700 hover:text-blue-900 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteTask(id)}
        >
          <Trash size={20} />
        </motion.button>
      </motion.div>
    </div>
  );
};
