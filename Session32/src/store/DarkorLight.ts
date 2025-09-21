import { createStore, combineReducers } from "redux";
const TOGGLE_THEME = "TOGGLE_THEME";
export const toggleTheme = () => ({
  type: TOGGLE_THEME as typeof TOGGLE_THEME,
});

function loadTheme(): "light" | "dark" {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light"; 
}

function themeReducer(state: "light" | "dark" = loadTheme(), action: ReturnType<typeof toggleTheme>): "light" | "dark" {
  switch (action.type) {
    case TOGGLE_THEME:
      { const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); 
      return newTheme; }
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({
    theme: themeReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
