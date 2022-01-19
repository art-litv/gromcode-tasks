import { createContext } from "react";

export const themes = {
  light: { color: "#000000", backgroundColor: "#eeeeee" },
  dark: { color: "#ffffff", backgroundColor: "#222222" },
};

export const ThemeContext = createContext();
