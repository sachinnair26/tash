import { combineReducers } from "redux";
import reducer from "./reducer";
import reducer1 from "./reducer1";
const rootReducer = combineReducers({
  value: reducer,
  clickVal: reducer1
});
export default rootReducer;
