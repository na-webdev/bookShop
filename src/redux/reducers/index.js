import { combineReducers } from "redux";
import categoriesReducer from "./main";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
