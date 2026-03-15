import { set } from "react-hook-form";
import { create } from "zustand";

function getToken() {
  const stored = localStorage.getItem("Tm-token");
  return stored;
}
export const useToken = create((set) => ({
  token: getToken(),
  setToken: (t) => {
    localStorage.setItem("Tm-token", t);
    set({ token: t });
  },
}));
