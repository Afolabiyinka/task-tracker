import React from "react";
import TodoList from "./TodoList";
import Greetings from "./Greetings";
const TaskHome = () => {
  return (
    <div className="flex flex-col gap-2  p-1 md:p-3 items-center justify-center w-full h-[100vh]">
      <Greetings />
      <TodoList />
    </div>
  );
};

export default TaskHome;
