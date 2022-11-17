import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    all: [],
    alpha: [],
    stocksReady: [],
    trending: [],
    // category: [],
  },
  reducers: {
    allBook: (state, action) => {
      state.all = action.payload;
    },
    alphaBook: (state, action) => {
      state.alpha = action.payload;
    },
    readyBook: (state, action) => {
      state.stocksReady = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allBook, alphaBook, readyBook } = booksSlice.actions;

export default booksSlice.reducer;
