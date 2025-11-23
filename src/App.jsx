import { Suspense } from "react";
import FallBackLoader from "./Components/Basic Components/FallBackLoader";
import Footer from "./Pages/Footer";
import Router from "./Routes";

function App() {
  return (
    <>
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
