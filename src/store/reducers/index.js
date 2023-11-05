import {combineReducers} from "redux";
import {getPostReducer} from "./postsReducer";
import {filterReducer} from "./filterReducer";


export const rootReducer = combineReducers({
    postList: getPostReducer,
    makeFilter: filterReducer
})