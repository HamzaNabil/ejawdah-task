import { combineReducers } from "redux";
import langReducer from "./langReducer";

const reducer = combineReducers({
  language: langReducer,
});

export default reducer;
