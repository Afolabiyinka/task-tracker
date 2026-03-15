import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { addTask } from "../services/request";
import { queryClient } from "../../../main";

export const useAddTasks = () => {
  const { toastError, toastSuccess, toastLoading, toastWarning } =
    useToastMessage();
  const [taskInputData, setTaskInputData] = useState({
    title: "",
    priority: "low",
    deadline: "",
    completed: false,
  });

  //Add Task
  const {
    mutate,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: (payload) => addTask(payload),
    onSuccess: (data) => {
      toastSuccess(data.message || "Task added succesfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  function handleAddTask(e) {
    e.preventDefault();
    mutate(taskInputData);
  }
  return { handleAddTask, taskInputData, setTaskInputData, loading, error };
};
