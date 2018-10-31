import { TRY_AGAIN, CLICK_DIV } from "./ActionCreators";

const initialState = {
  clickVal: []
};
export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case CLICK_DIV:
      return {
        ...state,
        clickVal: action.payload
      };
    case TRY_AGAIN:
      return {
        ...state,
        clickVal: action.payload
      };

    default:
      return state;
  }
}
