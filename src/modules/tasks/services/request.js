import { useToken } from "../../auth/store/useToken";

async function addTask(payload) {
  const token = useToken.getState().token;

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

export { addTask };
