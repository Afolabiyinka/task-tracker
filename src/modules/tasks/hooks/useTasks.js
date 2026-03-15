import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { useQuery } from "@tanstack/react-query";
import { useToken } from "../../auth/store/useToken";

export const useTasks = () => {
  const { toastError, toastSuccess, toastLoading, toastWarning } =
    useToastMessage();

  const token = useToken.getState().token;

  const {
    data: tasks = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://taskmaster-project-hi5d.onrender.com/tasks",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await res.json();
        return data.tasks;
      } catch (err) {
        toastError("Failed to fetch tasks");
      }
    },
  });

  return { error, tasks, loading };
};
