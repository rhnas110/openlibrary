import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: [],
  },
  reducers: {
    allBooks: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allBooks } = booksSlice.actions;

export default booksSlice.reducer;
