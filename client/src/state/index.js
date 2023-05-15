import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

//functions that change the global state
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      /*if state is light then change it to dark
        if dark then change it to light*/
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
