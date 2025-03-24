import React, { useState, useEffect } from "react";
import { Sun, Moon, CloudSun } from "lucide-react";

const Greetings = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username"); // Fetch username from localStorage
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  let timeNow = new Date().getHours();
  let greeting, Icon;

  if (timeNow >= 5 && timeNow < 12) {
    greeting = "Good Morning";
    Icon = Sun;
  } else if (timeNow >= 12 && timeNow < 18) {
    greeting = "Good Afternoon";
    Icon = CloudSun;
  } else {
    greeting = "Good Evening";
    Icon = Moon;
  }

  return (
    <div className="h-[30vh] w-full bg-blue-950 rounded-xl flex font-poppins p-4 justify-center gap-3">
      <div className="flex gap-3 p-3 h-fit w-fit items-center justify-center">
        <Icon size={50} className="text-white" />
        <h1 className="text-white text-2xl font-bold">
          {greeting} {username}
        </h1>
      </div>
    </div>
  );
};

export default Greetings;
