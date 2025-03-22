import React from "react";
import { ReactTyped } from "react-typed"; // Corrected import
import BlurText from "../Components/Basic Components/BlurText";
import taskHomeImage from "../Assets/ToDo Task List.gif";

const About = () => {
  return (
    <div className="h-fit flex flex-col md:flex-row px-4 py-6 justify-center items-center gap-6">
      {/* Image Section */}
      <span className="w-full md:w-1/2 px-4 py-4">
        <img
          src={taskHomeImage}
          alt="Task management illustration"
          className="rounded-xl w-full h-auto"
        />
      </span>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center px-3">
        {/* Animated Text */}
        <span className="flex flex-col md:flex-row gap-2 text-center">
          <BlurText
            text="Managing"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-5xl font-bold my-2"
          />
          <span>
            <ReactTyped
              strings={["Tasks", "Deadlines", "Assignments"]}
              loop
              backSpeed={80}
              typeSpeed={80}
              className="text-3xl md:text-5xl font-bold my-2"
            />
          </span>
        </span>

        {/* Description */}
        <section className="text-base md:text-lg lg:text-xl font-mono px-4 md:px-10 text-center md:text-left">
          <p>
            Task management: prioritize, organize, execute. Break down projects,
            use tools, meet deadlines. Reduce stress, achieve goals.
          </p>
        </section>

        {/* App Store Badges */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center mt-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="w-40 h-auto hover:scale-105 transition-transform max-w-full"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="w-40 h-auto hover:scale-105 transition-transform max-w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
