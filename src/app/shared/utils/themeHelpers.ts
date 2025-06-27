import { TTheme } from "@types";

const THEME_KEY = "theme";

export const getTheme = (): TTheme => {
  return localStorage.getItem(THEME_KEY) as TTheme;
};

export const setTheme = (theme: TTheme) => {
  return localStorage.setItem(THEME_KEY, theme);
};

export const getBrowserTheme = (): TTheme => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
