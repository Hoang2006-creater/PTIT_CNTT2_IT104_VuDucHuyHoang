import type { CartProduct, Product } from "../type";

type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "DELETE_ITEM"; payload: { id: number } };

const loadFromStorage = (): CartProduct[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (state: CartProduct[]) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState: CartProduct[] = loadFromStorage();

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartProduct[] => {
  let newState = state;

  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existing = state.find((item) => item.id === product.id);

      if (existing) {
        const newQty = existing.quantity + quantity;
        if (newQty > product.stock) {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
          return state;
        }
        newState = state.map((item) =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        if (quantity > product.stock) {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
          return state;
        }
        newState = [...state, { ...product, quantity }];
      }
      break;
    }

    case "UPDATE_QUANTITY": {
      newState = state.map((item) => {
        if (item.id === action.payload.id) {
          const newQty = Math.max(1, action.payload.quantity); 
          if (newQty > item.stock) {
            alert("Số lượng sản phẩm vượt quá số lượng trong kho");
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      });
      break;
    }

    case "DELETE_ITEM":
      newState = state.filter((item) => item.id !== action.payload.id);
      break;

    default:
      return state;
  }

  saveToStorage(newState);
  return newState;
};
