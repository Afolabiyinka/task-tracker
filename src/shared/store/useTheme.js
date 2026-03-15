import { create } from "zustand";

function getTheme() {
  const stored = localStorage.getItem("theme");
  return stored ? JSON.parse(stored) : "light";
}

export const useTheme = create((set) => ({
  theme: getTheme(),
  setTheme: (theme) => {
    set({ theme: theme });
    localStorage.setItem("theme", JSON.stringify(theme));
  },
}));
