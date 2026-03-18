import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { useQuery } from "@tanstack/react-query";
import { useToken } from "../../auth/store/useToken";

export const useTasks = () => {
  const { toastError } = useToastMessage();

  const token = useToken.getState().token;

  const {
    data: tasks = [],
    isLoading: loading,
    error,
    refetch,
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

        if (!data.ok) {
        }
        return data.tasks;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return { error, tasks, loading, refetch };
};
