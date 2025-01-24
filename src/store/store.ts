import { configureStore } from "@reduxjs/toolkit";

import { authSlice, themeSlice, localSlice } from "./";
import { postApi } from "../services";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    local: localSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
