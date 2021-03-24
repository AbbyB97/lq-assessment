import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import quizReducer from "./quizReducer";
export default combineReducers({
  simpleReducer,
  quizReducer,
});
