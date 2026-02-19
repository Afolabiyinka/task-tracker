import { Suspense } from "react";
import Footer from "./Pages/Footer";
import Router from "./Routes";
import { Toaster } from "sonner";
import LoadingContainer from "./Components/loader/LoadingContainer";

function App() {
  return (
    <>
      <Suspense fallback={<LoadingContainer />}>
        <Router />
      </Suspense>
      <Toaster position="top-right" />

      <Footer />
    </>
  );
}

export default App;
