import {combineReducers} from "redux";
import {getPostReducer} from "./postsReducer";
import {loadReducer} from "./loadReducer";
import {filterReducer} from "./filterReducer";


export const rootReducer = combineReducers({
    postList: getPostReducer,
    loadingStatus: loadReducer,
    makeFilter: filterReducer
})