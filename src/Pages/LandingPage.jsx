import Home from "./main/Home";
import Reviews from "./main/Reviews";
import Form from "./main/ContactUs";
import Features from "./main/Feautures";

const LandingPage = () => {
  return (
    <div className="flex flex-col ">
      <Home />
      <Features />
      <Reviews />
      <Form />
    </div>
  );
};

export default LandingPage;
