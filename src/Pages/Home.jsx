import React from "react";
import { Link } from "react-router-dom";
import SplitText from "../Components/SplitText";
import BlurText from "../Components/BlurText";
import { ArrowRight } from "lucide-react";
import heroAnimation from "../Assets/download.gif";
const Home = () => {
  return (
    <div className="md:flex h-fit  bg-black text-white ">
      <div className="w-[100%] h-[10%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-center gap-7 my-14">
        <BlurText
          text="Achieve your goals!"
          delay={50}
          animateBy="words"
          direction="top"
          className="text-5xl text-center my-4"
        />

        <SplitText
          text="Simplify your to-do list, empowering you to turn aspirations into reality. Track tasks, prioritize effortlessly, and celebrate every milestone. Start achieving today."
          className="text-2xl font-semibold font-mono"
          delay={3}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <span>
          <button className="bg-purple-700 px-6 py-3 rounded-lg flex gap-1 font-sans font-semibold hover:bg-blue-600 transition-all duration-700 ease-in-out ">
            <Link to="/login" className="flex gap-1">
              Get Started <ArrowRight />
            </Link>
          </button>
        </span>
      </div>
      <span className="w-[50%] h-[100%] object-fill px-4 py-4">
        <img src={heroAnimation} alt="" className="rounded-xl" />
      </span>
    </div>
  );
};

export default Home;
