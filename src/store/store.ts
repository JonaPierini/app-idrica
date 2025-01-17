import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "../services";
import { authSlice } from "./";

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer, // Reducer de RTK Query
    auth: authSlice.reducer, // Reducer de autenticación
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware), // Middleware de RTK Query
});
