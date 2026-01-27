import { useEffect } from "react";
import TodoList from "./Addtask";
import Greetings from "./Greetings";
import { useTasks } from "../../Hooks/TasksContext";
const TaskHome = () => {
  const { fetchTasks } = useTasks();
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="flex flex-col gap-2  items-center justify-center w-full h-screen overflow-y-hidden">
      <Greetings />
      <TodoList />
    </div>
  );
};

export default TaskHome;
