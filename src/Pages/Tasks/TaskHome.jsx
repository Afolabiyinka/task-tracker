import React from "react";
import TodoList from "./TodoList";
import Greetings from "./Greetings";
const TaskHome = () => {
  return (
    <div className="flex flex-col gap-2 py-4 px-2 items-center justify-center">
      <Greetings />
      <TodoList />
    </div>
  );
};

export default TaskHome;
