import React from "react";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTasks";
import LoadingContainer from "../../../Components/loader/LoadingContainer";

const Tasks = () => {
  const { error, loading, tasks } = useTasks();

  let tasksText = tasks.length === 1 ? "task" : "tasks";

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (loading) {
    return <LoadingContainer />;
  }

  return (
    <div className="w-full h-full rounded-2xl overflow-y-scroll p-1">
      <div className="flex md:flex-row flex-col w-full justify-between md:items-center p-1 gap-1 mb-3">
        <h1 className="font-bold text-2xl md:ml-5">
          You have ( {tasks.length} ) {tasksText} pending
        </h1>
        <AddTask />
      </div>
      <div className="h-full w-full p-2 space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tasks yet! Add one above.
          </p>
        ) : (
          tasks?.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Tasks;
