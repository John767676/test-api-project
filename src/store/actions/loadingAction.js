import {LOAD_END, LOAD_START} from "../types/types";


export const loadingActionStart = () => {
    return {
        type: LOAD_START
    }
}

export const loadingActionEnd = () => {
    return {
        type: LOAD_END
    }
}