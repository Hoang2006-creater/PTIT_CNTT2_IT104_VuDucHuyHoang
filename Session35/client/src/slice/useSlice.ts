import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice} from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  favorite: boolean;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    { id: 1, name: "Nguyễn Văn A", favorite: false },
    { id: 2, name: "Nguyễn Văn B", favorite: false },
    { id: 3, name: "Nguyễn Văn C", favorite: false },
    { id: 4, name: "Nguyễn Văn D", favorite: false },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});

export const { toggleFavorite } = userSlice.actions;
export default userSlice.reducer;
