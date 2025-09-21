import { createStore, combineReducers } from "redux";
const REGISTER = "REGISTER";
export const register = (email: string, password: string) => ({
  type: REGISTER as typeof REGISTER,
  payload: { email, password },
});
interface UserState {
  email: string;
  password: string;
}

const initialUser: UserState = {
  email: "",
  password: "",
};

function userReducer(state: UserState = initialUser, action: ReturnType<typeof register>): UserState {
  switch (action.type) {
    case REGISTER:
      return { ...action.payload };
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({
    user: userReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
