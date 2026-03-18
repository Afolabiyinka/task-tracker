import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../services/request";
import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { queryClient } from "../../../main";

export const useDeleteTask = ({ id }) => {
  const { toastSuccess, toastError, toastLoading } = useToastMessage();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteTask(id),
    onSuccess: (data) => {
      toastSuccess(data.message || "Task Deleted");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (data) => {
      toastError(data.message || "Something went wrong");
    },
    onMutate: () => {
      toastLoading("Deleting");
    },
  });

  function handleDelete() {
    mutate(id);
  }

  return { handleDelete };
};
