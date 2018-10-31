import { CLICK_DIV, TRY_AGAIN } from "./ActionCreators";
const data = {
  result: [],
  success: false
};
export function clickDivAction(p, sentence) {
  data.result.push(p);

  if (data.result.join(" ").length === sentence.length) {
    if (data.result.join(" ") === sentence) {
      data.success = true;
    } else {
      data.success = false;
    }
  }

  return {
    type: CLICK_DIV,
    payload: data
  };
}
export function tryAgainAction() {
  data.result = [];
  return {
    type: TRY_AGAIN,
    payload: data
  };
}
