import { STRING_MANI, CLICK_DIV } from "./ActionCreators";

const initialState = {
  value: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STRING_MANI:
      return {
        ...state,
        value: action.result
      };

    default:
      return state;
  }
}
