import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type localStore = {
  locale: "es" | "en";
};

const initialState: localStore = {
  locale: "es",
};

export const localSlice = createSlice({
  name: "locale",
  initialState: initialState,
  reducers: {
    setCurrentLocal: (state, action: PayloadAction<"es" | "en">) => {
      state.locale = action.payload;
    },
  },
});

// Exportar acciones y reducer
export const { setCurrentLocal } = localSlice.actions;
