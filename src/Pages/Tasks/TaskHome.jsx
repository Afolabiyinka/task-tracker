import React from "react";
import TaskCalendar from "./Calendar";
import Greetings from "./Greetings";
import TodoList from "./TodoList";

const TaskHome = () => {
  return (
    <div className="h-[90vh] flex  gap-2 justify-center items-center px-4 py-10">
      <TodoList />
      <div className="h-[90vh] w-[50%] flex flex-col gap-3">
        <Greetings />
        <TaskCalendar />
      </div>
    </div>
  );
};

export default TaskHome;
