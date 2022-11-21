import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    NIM: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.NIM = action.payload.NIM;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.NIM = "";
      state.value.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
