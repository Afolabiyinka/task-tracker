import { useState, useEffect } from "react";
import TaskCalendar from "./Calendar";
import Greetings from "./Greetings";
import TodoList from "./TodoList";

const TaskHome = () => {
  return (
    <div className="h-fit flex flex-col md:flex-row gap-4 justify-center items-start p-2">
      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <Greetings />
        <TaskCalendar />
      </div>

      <div className="w-[100%] bg-[0x172554] md:w-[70%] flex justify-center">
        <TodoList />
      </div>
    </div>
  );
};

export default TaskHome;
