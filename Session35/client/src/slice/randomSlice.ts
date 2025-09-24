import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    generateRandomList(state, action: PayloadAction<number>) {
      const length = action.payload; 
      state.numbers = Array.from({ length }, () =>
        Math.floor(Math.random() * 100) 
      );
    }
  },
});

export const { generateRandomList } = randomSlice.actions;
export default randomSlice.reducer;
