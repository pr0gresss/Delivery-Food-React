import { createSlice } from "@reduxjs/toolkit";
import { TTheme } from "@types";
import { getBrowserTheme, getTheme } from "@utils";

const initialState: TTheme = getTheme() || getBrowserTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      console.log(state);
      return (state = state === "dark" ? "light" : "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
