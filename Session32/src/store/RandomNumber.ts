import { createStore, combineReducers } from "redux";
const ADD_RANDOM_NUMBER = "ADD_RANDOM_NUMBER";
export const addRandomNumber = (num: number) => ({
  type: ADD_RANDOM_NUMBER as typeof ADD_RANDOM_NUMBER,
  payload: num,
});

function randomNumbersReducer(state: number[] = [], action: ReturnType<typeof addRandomNumber>): number[] {
  switch (action.type) {
    case ADD_RANDOM_NUMBER:
      return [...state, action.payload];
    default:
      return state;
  }
}
export const store = createStore(
  combineReducers({
    randomNumbers: randomNumbersReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
