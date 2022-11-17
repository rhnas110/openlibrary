import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    all: [],
    alpha: [],
    stocksReady: [],
    thisBusiness: [],
    thisKids: [],
    category: [],
    trending: [],
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
    businessBook: (state, action) => {
      state.thisBusiness = action.payload;
    },
    kidsBook: (state, action) => {
      state.thisKids = action.payload;
    },
    // categoryBook: (state, action) => {
    //   state.category = action.payload;
    // },
  },
});

export const { allBook, alphaBook, readyBook, businessBook, kidsBook } =
  booksSlice.actions;

export default booksSlice.reducer;
