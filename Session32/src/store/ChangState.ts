import { createStore, combineReducers } from "redux";
const CHANGE_COMPANY = "CHANGE_COMPANY";
export const changeCompany = () => ({
  type: CHANGE_COMPANY as typeof CHANGE_COMPANY,
});

function companyReducer(state: string = "Rikkei Academy", action: ReturnType<typeof changeCompany>): string {
  switch (action.type) {
    case CHANGE_COMPANY:
      return "RikkeiSoft";
    default:
      return state;
  }
}
export const store = createStore(
  combineReducers({
    company: companyReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
