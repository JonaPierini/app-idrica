import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "../services";
import { authSlice, themeSlice } from "./";

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer, // Reducer de RTK Query
    auth: authSlice.reducer, // Reducer de autenticación
    theme: themeSlice.reducer, // Reducer de theme
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware), // Middleware de RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
