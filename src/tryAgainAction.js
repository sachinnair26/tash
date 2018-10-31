import { TRY_AGAIN } from "./ActionCreators";
const data = {
  result: [],
  success: false
};
export default function tryAgainAction() {
  data.result = [];
  return {
    type: TRY_AGAIN,
    payload: data
  };
}
