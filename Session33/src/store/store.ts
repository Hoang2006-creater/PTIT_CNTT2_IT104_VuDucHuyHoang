import { createStore, combineReducers } from "redux";
import { messageReducer } from "../reducers/messageReducer";
import { cartReducer } from "../reducers/cartReducer";
import { productReducer } from "../reducers/productReducer";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  message: messageReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
