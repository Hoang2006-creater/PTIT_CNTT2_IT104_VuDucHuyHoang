type MessageAction =
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "CLEAR_MESSAGE" };

const initialState = "";

export const messageReducer = (
  state = initialState,
  action: MessageAction
): string => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    case "CLEAR_MESSAGE":
      return "";
    default:
      return state;
  }
};
