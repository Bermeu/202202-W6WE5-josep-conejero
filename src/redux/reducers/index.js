import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robotsList: robotsReducer,
});

export default rootReducer;
