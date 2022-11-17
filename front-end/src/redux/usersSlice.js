import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    id: null,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      state.value.id = action.payload.id;
      state.value.username = action.payload.username;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
