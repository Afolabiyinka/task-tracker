import Home from "./Home";
import Features from "./Feautures";
import Reviews from "./Reviews";
import Form from "./ContactUs";

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
