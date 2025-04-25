import React from "react";
import { Sun, Moon, CloudSun } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

const Greetings = ({ tasks }) => {
  const timeNow = new Date().getHours();
  let greeting, Icon;

  if (timeNow >= 5 && timeNow < 12) {
    greeting = "Good Morning";
    Icon = Sun;
  } else if (timeNow >= 12 && timeNow < 18) {
    greeting = "Good Afternoon";
    Icon = CloudSun;
  } else {
    greeting = "Good Evening";
    Icon = Moon;
  }

  // Show task count if available
  const taskCount = tasks?.length || 0;
  const taskText = taskCount === 1 ? "task" : "tasks";

  return (
    <div className="w-full rounded-xl shadow-lg p-6 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icon size={36} className="text-yellow-300" />
          <h1 className="text-2xl md:text-3xl font-bold">{greeting}</h1>
        </div>

        {taskCount > 0 && (
          <div className="bg-blue-800/50 py-2 px-4 rounded-full">
            <span className="font-medium">
              {taskCount} {taskText} today
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 italic border-l-4 border-blue-400 pl-4">
        <p className="text-sm md:text-base">
          "Productivity is never an accident. It is always the result of a
          commitment to excellence."
        </p>
      </div>
      <div className=" absolute right-1 top-10">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Greetings;
