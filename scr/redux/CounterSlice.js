import { createSlice } from "@reduxjs/toolkit";

export const resturentSlice = createSlice({
  name: "resturent",
  initialState: {
    value: 0,
    logintext: "Login",
    countbytwo: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    getvalue: (state) => {
      state.countbytwo += 2;
    },
    loginHeaderText: (state) => {
      state.logintext = state.logintext === "Login" ? "Logout" : "Login";
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  getvalue,
  loginHeaderText,
} = resturentSlice.actions;

export default resturentSlice.reducer;
