import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(logger));
export default store;
