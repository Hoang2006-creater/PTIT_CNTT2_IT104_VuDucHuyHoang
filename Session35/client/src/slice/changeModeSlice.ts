import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  mode: "list" | "grid";
}

const initialState: ViewState = {
  mode: "list",
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
  },
});

export const { toggleView } = viewSlice.actions;
export default viewSlice.reducer;
