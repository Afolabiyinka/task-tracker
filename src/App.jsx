import { Suspense, useEffect } from "react";
import Router from "./Routes";
import { Toaster } from "sonner";
import LoadingContainer from "./Components/loader/LoadingContainer";
import Footer from "./modules/marketing/pages/Footer";
import { useTheme } from "./shared/store/useTheme";
function App() {
  const { theme } = useTheme();
  useEffect(() => {
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.body.classList.remove("light", "dark");
    document.body.classList.add(appliedTheme);
  }, [theme]);
  return (
    <div className="flex justify-center items-center w-full h-full flex-col font-[Montserrat]">
      <Suspense fallback={<LoadingContainer />}>
        <Router />
      </Suspense>
      <Toaster position="top-right" />
      <Footer />
    </div>
  );
}

export default App;
