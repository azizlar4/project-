//import
import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import cartReducer from "./cart";

const rootReducer = combineReducers({ userReducer, productReducer,cartReducer });

//export
export default rootReducer;
