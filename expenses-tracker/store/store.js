import { configureStore } from "@reduxjs/toolkit";
import expesesReducer from "./expenses";

export const store = configureStore({
  reducer: {
    expesesReducer,
  },
});
