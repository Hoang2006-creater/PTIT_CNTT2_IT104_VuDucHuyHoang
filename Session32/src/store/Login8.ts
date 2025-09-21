import { createStore } from "redux";
export type UserState = {
  email: string | null;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  email: null,
  isLoggedIn: false,
};
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = (email: string) => ({
  type: LOGIN as typeof LOGIN,
  payload: email,
});

export const logout = () => ({
  type: LOGOUT as typeof LOGOUT,
});
type AuthAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>;

const authReducer = (
  state: UserState = initialState,
  action: AuthAction
): UserState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, email: action.payload, isLoggedIn: true };
    case LOGOUT:
      return { ...state, email: null, isLoggedIn: false };
    default:
      return state;
  }
};
export const store = createStore(authReducer);
export type RootState = ReturnType<typeof authReducer>;
