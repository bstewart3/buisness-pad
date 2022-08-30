import { combineReducers } from "redux";
import authReducer from "./authReducer";
import buisnessReducer from "./buisnessReducer";


export default combineReducers({
    auth: authReducer, 
    buisnesses: buisnessReducer
});