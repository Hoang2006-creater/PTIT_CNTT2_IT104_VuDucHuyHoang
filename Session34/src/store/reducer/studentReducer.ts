import type { Student } from "../../utils/types";

export type StudentAction =
  | { type: "ADD_STUDENT"; payload: Student }
  | { type: "REMOVE_STUDENT"; payload: string } 
  | { type: "UPDATE_STUDENT"; payload: Student }
  | { type: "SEARCH_STUDENT"; payload: string }
  | { type: "RESET_SEARCH" };

const initialState: Student[] = [
  { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

export const studentReducer = (
  state: Student[] = initialState,
  action: StudentAction
): Student[] => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "REMOVE_STUDENT":
      return state.filter((s) => s.id !== action.payload);
    case "UPDATE_STUDENT":
      return state.map((s) =>
        s.id === action.payload.id ? action.payload : s
      );
    case "SEARCH_STUDENT":
      return state.filter((s) =>
        s.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    case "RESET_SEARCH":
      return initialState;
    default:
      return state;
  }
};
