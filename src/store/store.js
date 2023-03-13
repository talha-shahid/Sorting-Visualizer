import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./sortingSlice";

const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});

export default store;
