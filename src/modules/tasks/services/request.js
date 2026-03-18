import { useToken } from "../../auth/store/useToken";
const token = useToken.getState().token;

async function addTask(payload) {
  const res = await fetch(
    "https://taskmaster-project-hi5d.onrender.com/tasks",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json();
  return data;
}

async function deleteTask(id) {
  const res = await fetch(
    `https://taskmaster-project-hi5d.onrender.com/tasks/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data;
}

export { addTask, deleteTask };
