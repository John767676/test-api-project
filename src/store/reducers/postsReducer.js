import {GET_LIST} from "../types/types";

const initialState = {
    loading: false,
    posts: [],
}

export const getPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
            ...state,
            posts: action.payload,
            loading: true
            }
        default:
            return state
    }
}