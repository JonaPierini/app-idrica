import { configureStore } from "@reduxjs/toolkit";
import { jsonApi } from "../services";
import { authSlice, themeSlice, localSlice } from "./";

export const store = configureStore({
  reducer: {
    [jsonApi.reducerPath]: jsonApi.reducer,
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    local: localSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
