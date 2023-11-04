import {LOAD_END, LOAD_START} from "../types/types";

const initialState = {
    loading: false
}

export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_START:
            return {
                ...state,
                loading: true
            }
        case LOAD_END:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}