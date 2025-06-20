import { createSlice } from "@reduxjs/toolkit";
import { TTheme } from "@types";
import { getBrowserTheme, getTheme } from "@utils";

const initialState: TTheme = getTheme() ?? getBrowserTheme() ? "dark" : "light";

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
