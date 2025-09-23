import { createStore, combineReducers } from "redux";
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
