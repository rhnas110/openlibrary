import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    value: false,
    thisAlpha: "asc",
  },
  reducers: {
    whoLogin: (state, action) => {
      state.value = action.payload;
    },
    checkAlpha: (state, action) => {
      state.thisAlpha = action.payload;
    },
  },
});

export const { whoLogin, checkAlpha } = checkSlice.actions;

export default checkSlice.reducer;
