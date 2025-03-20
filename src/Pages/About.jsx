import React from "react";
import { ReactTyped } from "react-typed"; // Corrected import
import BlurText from "../Components/BlurText";
import taskHomeImage from "../Assets/ToDo Task List.gif";

const About = () => {
  return (
    <div className="h-fit md:flex px-4 justify-center items-center">
      <span className="w-[50%] h-[100%] px-4 py-4">
        <img
          src={taskHomeImage}
          alt="Task management illustration" // Added meaningful alt text
          className="rounded-xl h-[100%] w-[100%]"
        />
      </span>
      <div className="w-[100%] h-[60%] md:w-[50%] md:h-[100%] flex flex-col gap-2 justify-center items-center px-3">
        <span className="flex gap-2">
          <BlurText
            text="Managing"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-5xl text-center my-4"
          />
          <span>
            <ReactTyped
              strings={["Tasks", "Deadlines", "Assignments"]}
              loop
              backSpeed={80}
              typeSpeed={80}
              className="text-5xl text-center my-4"
            />
          </span>
        </span>

        <section className="text-xl font-mono px-10">
          <p>
            Task management: prioritize, organize, execute. Break down projects,
            use tools, meet deadlines. Reduce stress, achieve goals.
          </p>

          <div className="flex gap-4 justify-start items-center mt-4">
            <a
              href="https://play.google.com/store" // Replace with actual URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="w-40 h-auto hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/" // Replace with actual URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-40 h-auto hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
