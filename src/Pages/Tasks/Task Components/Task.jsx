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
  const [taskSize, setTaskSize] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  // Track element size for confetti
  useEffect(() => {
    if (taskRef.current && showConfetti) {
      const rect = taskRef.current.getBoundingClientRect();
      setTaskSize({
        width: rect.width,
        height: rect.height,
        x: rect.left,
        y: rect.top,
      });
    }
  }, [showConfetti]);

  const handleComplete = (checked) => {
    completeTask(id, checked);
    if (checked) setShowConfetti(true);
  };

  // Hide confetti after 3 seconds
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const getPriorityColor = () => {
    if (priority === "High") return "bg-red-100 text-red-600";
    if (priority === "Medium") return "bg-amber-100 text-amber-600";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <div className="relative w-full">
      {/* CONFETTI */}
      {showConfetti && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            left: taskSize.x,
            top: taskSize.y,
            width: taskSize.width,
            height: taskSize.height,
          }}
        >
          <Confetti
            width={taskSize.width}
            height={taskSize.height}
            numberOfPieces={120}
            recycle={false}
          />
        </div>
      )}

      {/* TASK CARD */}
      <motion.div
        ref={taskRef}
        className="flex w-full justify-between items-start gap-3 rounded-lg shadow-sm 
        border border-blue-200 py-3 px-3 my-2 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex gap-3 items-start w-full">
          {/* Checkbox */}
          <CheckboxDemo
            color="secondary"
            checked={completed}
            onChange={(e) => handleComplete(e.target.checked)}
          />

          <div className="flex flex-col gap-1 w-full min-w-0">
            <Typography
              className={`break-words text-sm md:text-base font-medium ${
                completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {title}
            </Typography>

            {priority && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${getPriorityColor()} font-medium w-fit`}
              >
                {priority}
              </span>
            )}
          </div>
        </div>

        <motion.button
          className="p-2 rounded-full hover:bg-blue-200 text-blue-700 hover:text-blue-900"
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
