import { TTheme } from "@types";

const THEME_KEY = "theme";

export const getTheme = () => {
  return localStorage.getItem(THEME_KEY);
};

export const setTheme = (theme: TTheme) => {
  return localStorage.setItem(THEME_KEY, theme);
};

export const getBrowserTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
