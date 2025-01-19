import { configureStore } from "@reduxjs/toolkit";
import { jsonApi } from "../services";
import { authSlice, themeSlice, localSlice } from "./";

export const store = configureStore({
  reducer: {
    [jsonApi.reducerPath]: jsonApi.reducer, // Reducer de RTK Query
    auth: authSlice.reducer, // Reducer de autenticación
    theme: themeSlice.reducer, // Reducer de theme
    local: localSlice.reducer, // Reducer de lang
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonApi.middleware), // Middleware de RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
