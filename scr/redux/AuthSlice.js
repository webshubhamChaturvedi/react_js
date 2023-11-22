import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const Authentication = createSlice({
  name: "auth",
  initialState: {
    loginstatue: false,
  },
  reducers: {},
});
export const { regestration } = Authentication.actions;
export default Authentication.reducer;
