import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode") || "false"),
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
    },
  },
});
export const { toggleMode } = themeSlice.actions;
