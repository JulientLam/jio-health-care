import { combineReducers } from "redux";
import { cartReducers } from "./cart";
import { categoryReducer } from "./category";

const rootReducer = combineReducers({ categories: categoryReducer, cart: cartReducers });
export default rootReducer;