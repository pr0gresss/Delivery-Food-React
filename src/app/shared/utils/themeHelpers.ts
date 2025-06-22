import { TTheme } from "@types";

export const getBrowserTheme = (): TTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
