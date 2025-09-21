import { createStore, combineReducers } from "redux";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
export const increment = () => ({
  type: INCREMENT as typeof INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT,
});
function counterReducer(state: number = 0, action: ReturnType<typeof increment> | ReturnType<typeof decrement>): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
export const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
