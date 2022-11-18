import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice";
import checkSlice from "./checkSlice";
import usersSlice from "./usersSlice";

export default configureStore({
  reducer: {
    booksSlice,
    checkSlice,
    usersSlice,
  },
});
