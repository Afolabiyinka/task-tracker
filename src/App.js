import { Suspense } from "react";
import { useLocation } from "react-router-dom";

//Importing the navigation
import Navbar from "./Pages/NavBar";
import FallBackLoader from "./Components/Basic Components/FallBackLoader";
import Footer from "./Pages/Footer";
import Router from "./Routes";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/tasks"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Suspense
        fallback={
          <FallBackLoader className="h-screen w-screen flex justify-center" />
        }
      >
        <Router />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
