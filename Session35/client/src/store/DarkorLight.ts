import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/DarkorLightSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Các type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
