//import
import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import cartReducer from "./cart";
import paymentReducer from "./payment";

const rootReducer = combineReducers({ userReducer, productReducer,cartReducer,paymentReducer });
//export
export default rootReducer;
