import { combineReducers } from "redux";
import authReducer from "./authReducer";
import noteReducer from "./noteReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	note: noteReducer,
	errors: errorReducer,
});

export default rootReducer;
