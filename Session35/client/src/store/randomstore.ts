import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "../slice/randomSlice"

export const store = configureStore({
  reducer: {
    random: randomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;