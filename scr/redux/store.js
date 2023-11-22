import { configureStore } from "@reduxjs/toolkit";
import resturentReducer from "./CounterSlice";
import Authentication from "./AuthSlice";
import CardReducer from "./CardSlice";

const AppStore = configureStore({
  reducer: {
    resturent: resturentReducer,
    auth: Authentication,
    cart: CardReducer,
  },
});
export default AppStore;
