import {GET_LIST, SET_LOAD} from "../types/types";

const initialState = {
    loading: false,
    posts: [],
}

export const getPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOAD:
            return {
                ...state,
                loading: action.payload
            }
        case GET_LIST:
            return {
            ...state,
            loading: true,
            posts: action.payload
            }
        default:
            return state
    }
}