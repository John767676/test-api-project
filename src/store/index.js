import {configureStore} from "@reduxjs/toolkit";
import {filterReducer} from "../Features/Filters/filterSlice";
import {postReducer} from "../Features/Posts/postsSlice";

export const store = configureStore({
    reducer: {
        postList: postReducer,
        makeFilter: filterReducer
    },
    devTools: true
})