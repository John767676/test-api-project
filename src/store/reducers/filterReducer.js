import {SET_FILTER} from "../types/types";

const initialState = 'date'

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}