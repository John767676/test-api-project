import {SET_FILTER} from "../types/types";

const initialState = {
    filterBy: 'date'
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.filter
            }
        default:
            return state
    }
}