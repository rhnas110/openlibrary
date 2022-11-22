import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    NIM: "",
    username: "",
  },
};

export const usersSlice = createSlice({
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
export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
