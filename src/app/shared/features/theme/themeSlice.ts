import { createSlice } from "@reduxjs/toolkit";
import { TTheme } from "@types";
import { getBrowserTheme, getLocalValue, THEME_KEY } from "@utils";

const initialState = getLocalValue<TTheme>(THEME_KEY) || getBrowserTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      return (state = state === "dark" ? "light" : "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
