import Home from "./Ad Pages/Home";
import Reviews from "./Ad Pages/Reviews";
import Form from "./Ad Pages/ContactUs";
import Features from "./Ad Pages/Feautures";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Home />
      <Features />
      <Reviews />
      <Form />
    </div>
  );
};

export default HomePage;
