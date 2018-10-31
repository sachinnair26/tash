import { CLICK_DIV } from "./ActionCreators";
const data = {
  result: [],
  success: false
};
export default function clickDivAction(p, sentence) {
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
