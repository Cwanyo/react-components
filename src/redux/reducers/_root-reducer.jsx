import { combineReducers } from "redux";

import UIReducer from "./ui-reducer";

const rootReducer = combineReducers({
  UI: UIReducer
});

export default rootReducer;
