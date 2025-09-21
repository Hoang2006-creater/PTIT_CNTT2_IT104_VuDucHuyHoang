import { createStore, combineReducers } from "redux";


export type User = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};
const initialUsers: User[] = [
  { id: 1, userName: "Nguyen Van A", gender: "Male", dateBirth: "2000-01-01", address: "Hà Nội" },
  { id: 2, userName: "Tran Thi B", gender: "Female", dateBirth: "2001-05-20", address: "TP.HCM" },
  { id: 3, userName: "Le Van C", gender: "Male", dateBirth: "1999-11-11", address: "Đà Nẵng" },
];

function usersReducer(state: User[] = initialUsers): User[] {
  return state;
}

export const store = createStore(
  combineReducers({
    users: usersReducer,
  })
);
export type RootState = ReturnType<typeof store.getState>;
