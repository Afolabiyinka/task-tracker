import React from "react";
import Form from "../Components/Basic Components/ContactUs";
import SplitText from "../Components/Basic Components/SplitText";
import { Smile } from "lucide-react";
const Contact = () => {
  return (
    <div className="h-[90vh] w-[100%] px-3 flex flex-col justify-center items-center gap-2">
      <SplitText
        text="Help us improve! Share your thoughts with us."
        className="text-3xl font-poppins  text-center"
        delay={10}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <Form />
    </div>
  );
};

export default Contact;
