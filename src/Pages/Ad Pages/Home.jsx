import React from "react";
import SplitText from "../../Components/Basic Components/SplitText";
import BlurText from "../../Components/Basic Components/BlurText";
import heroAnimation from "../../Assets/ToDo Task List.gif";
import CustomBtn from "../../Components/Basic Components/CustomBtn";

const Home = () => {
  return (
    <div className="md:flex h-fit  bg-black text-white ">
      <div className="w-[100%] h-[10%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-center gap-7 my-14">
        <SplitText
          text="Achieve your goals!"
          className="text-5xl text-center my-4 font-poppins"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <SplitText
          text="Simplify your to-do list, empowering you to turn aspirations into reality. Track tasks, prioritize effortlessly, and celebrate every milestone. Start achieving today."
          className="text-2xl font-poppins"
          delay={2}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <span>
          {" "}
          <CustomBtn text="Get Started" linkpath="/auth/login" />
        </span>
      </div>
      <span className="w-[50%] h-[100%] object-fill px-4 py-4">
        <img src={heroAnimation} alt="" className="rounded-xl" />
      </span>
    </div>
  );
};

export default Home;
