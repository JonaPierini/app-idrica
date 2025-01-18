import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: JSON.parse(
    sessionStorage.getItem("isAuthenticated") || "false"
  ),
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      sessionStorage.setItem("isAuthenticated", JSON.stringify(false));
    },
  },
});

// Exportar acciones y reducer
export const { login, logout } = authSlice.actions;
