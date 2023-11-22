import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RES_LIST } from "../utils/constant";
export const fetchApiDataAsync = createAsyncThunk(
  "auth/fetchApiData",
  async () => {
    const response = await fetch(`${RES_LIST}`);
    const data = await response.json();
    return data;
  }
);
//Api fetching by redux

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    Apiitem: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
    resdata: (state) => {
      state.Apiitem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiDataAsync.fulfilled, (state, action) => {
      state.Apiitem = action.payload;
    });
  },
});
export const { addItem, removeItem, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
