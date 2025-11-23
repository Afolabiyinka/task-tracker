import React, { useEffect } from "react";
import TodoList from "./TodoList";
import Greetings from "./Greetings";
import { useTasks } from "../../Hooks/TasksContext";
const TaskHome = () => {
  const { fetchTasks } = useTasks();
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="flex flex-col gap-2  p-1 md:p-3 items-center justify-center w-full h-[100vh]">
      <Greetings />
      <TodoList />
    </div>
  );
};

export default TaskHome;
