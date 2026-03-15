async function login(payload) {
  try {
    const response = await fetch(
      "https://taskmaster-project-hi5d.onrender.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err) {
    throw new Error(err.message || "Something went wrong. Please try again.");
  }
}

async function register(payload) {
  try {
    const response = await fetch(
      "https://taskmaster-project-hi5d.onrender.com/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (err) {
    throw new Error(err.message || "Something went wrong. Please try again.");
  }
}

export { login, register };
