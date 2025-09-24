import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  current: "en" | "vi";
}

const initialState: LanguageState = {
  current: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === "en" ? "vi" : "en";
    },
    setLanguage: (state, action: { payload: "en" | "vi" }) => {
      state.current = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
