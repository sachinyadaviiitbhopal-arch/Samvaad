import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("streammeet-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("streammeet-theme", theme);
    set({ theme });
  },
}));
