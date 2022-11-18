import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    NIM: null,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      state.value.NIM = action.payload.NIM;
      state.value.username = action.payload.username;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
