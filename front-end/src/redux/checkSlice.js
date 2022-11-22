import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    value: false,
    thisAlpha: "asc",
    default: "all",
    searchOne: "Catalog",
    searchTwo: "Title",
    niceSearch: "",
  },
  reducers: {
    whoLogin: (state, action) => {
      state.value = action.payload;
    },
    checkAlpha: (state, action) => {
      state.thisAlpha = action.payload;
    },
    changeDef: (state, action) => {
      state.default = action.payload;
    },
    changeSearch: (state, action) => {
      state.searchOne = action.payload;
    },
    changeTwo: (state, action) => {
      state.searchTwo = action.payload;
    },
    isSeacrh: (state, action) => {
      state.niceSearch = action.payload;
    },
  },
});

export const {
  whoLogin,
  checkAlpha,
  changeDef,
  changeSearch,
  changeTwo,
  isSeacrh,
} = checkSlice.actions;

export default checkSlice.reducer;
