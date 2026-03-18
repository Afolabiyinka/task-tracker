import Greetings from "./pages/Greetings";
import Tasks from "./pages/Tasks";

const TaskLayout = () => {
  return (
    <div className="h-[100vh] flex flex-col  items-center md:max-w-4xl w-full gap-2  rounded-2xl p-2">
      <Greetings />
      <Tasks />
    </div>
  );
};

export default TaskLayout;
