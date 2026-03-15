import {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  Select,
  SelectTrigger,
  SelectOption,
  SelectList,
} from "@material-tailwind/react";
import CustomBtn from "../../../Components/custom/CustomBtn";
import { CustomInput } from "../../../Components/custom/Input";
import { CheckSquare, Plus } from "lucide-react";
import { useAddTasks } from "../hooks/useAddTasks";

const AddTask = () => {
  const { error, handleAddTask, loading, setTaskInputData, taskInputData } =
    useAddTasks();
  return (
    <Dialog>
      <DialogTrigger as={CustomBtn}> Add task</DialogTrigger>
      <DialogOverlay>
        <DialogContent className="sm:max-w-md">
          <form className="space-y-4" onSubmit={handleAddTask}>
            <h2 className=" mb-4">Add a new task</h2>
            <div className="flex items-center gap-2">
              <CustomInput
                value={taskInputData.title}
                onChange={(e) =>
                  setTaskInputData({
                    ...taskInputData,
                    title: e.target.value,
                  })
                }
                icon={CheckSquare}
                placeholder="Walk the dog 🐕‍🦺"
                className={`w-full`}
              />
              <Select
                placement="left"
                value={taskInputData.priority}
                onValueChange={(value) =>
                  setTaskInputData({ ...taskInputData, priority: value })
                }
              >
                <SelectTrigger className="w-40 h-full" placeholder="Priority" />
                <SelectList>
                  <SelectOption value="high">High</SelectOption>
                  <SelectOption value="medium">Medium</SelectOption>
                  <SelectOption value="low">Low</SelectOption>
                </SelectList>
              </Select>
            </div>
            <CustomBtn
              className=""
              icon={Plus}
              type="submit"
              disabled={loading}
            >
              Add Task
            </CustomBtn>
          </form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default AddTask;
