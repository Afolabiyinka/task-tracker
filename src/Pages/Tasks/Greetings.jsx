import React, { useState, useEffect } from "react";
import { Sun, Moon, CloudSun } from "lucide-react";
import SplitText from "../../Components/Basic Components/SplitText";

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
    <div className="h-[15vh] w-[97%]  md:h-[15vh] md:w-[100%] bg-blue-950 rounded-xl flex font-poppins p-4 justify-center items-center gap-3 mx-auto max-w-lg">
      <div className="flex gap-3 p-3 h-fit w-fit items-center justify-center">
        <Icon
          size={50}
          className="text-white transform-x-12 rotate-x-90 transform-y-12 rotate-y-90"
        />
        <span className="text-center">
          <SplitText
            text={greeting}
            className="text-white text-xl md:text-2xl font-bold text-center"
            delay={60}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText
            text={username}
            className="text-white text-xl md:text-2xl font-bold text-center"
            delay={0.2}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </span>
      </div>
    </div>
  );
};

export default Greetings;
