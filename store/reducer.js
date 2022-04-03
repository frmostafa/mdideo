import { combineReducers } from "redux";
import mainTemplateReducer from "./mainTemplate";
import authStoreReducer from "./authStore";

export default combineReducers({
    mainTemplate : mainTemplateReducer,
    auth : authStoreReducer
})