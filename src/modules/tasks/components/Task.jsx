import { Tooltip } from "@material-tailwind/react";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { Trash } from "lucide-react";

const Task = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center">
        <CustomCheckbox checked={task.checked} />
        <p
          className={`${task.checked ? "line-through text-gray-500 dark:text-gray-300" : "text-gray-800 dark:text-gray-100"}`}
        >
          {task.title}
        </p>
      </div>

      <div className="flex gap-5 items-center">
        <span
          className={` text-md p-0.5 px-5 rounded-full flex text-white h-fit justify-center items-center ${getPriorityColor(task.priority)}`}
        >
          {task.priority}
        </span>
        <Tooltip>
          <Tooltip.Trigger>
            <span className="h-12 w-12 hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-full">
              <Trash className="stroke-[1px]" />
            </span>
          </Tooltip.Trigger>
          <Tooltip.Content className=""> Delete Task </Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  );
};

export default Task;
