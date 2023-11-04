import axios from "axios";
import {GET_LIST} from "../types/types";
import {loadingActionEnd, loadingActionStart} from "./loadingAction";

export function postLoad() {
    return async dispatch => {
        const postsList = []
        dispatch(loadingActionStart())
        const res = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
        await Promise.all(res.data.slice(0,100).map(function(el) {
            return  axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`).then(res => postsList.push(res.data))
        }))
        dispatch({
            type: GET_LIST,
            payload: postsList
        })
        dispatch(loadingActionEnd())
    }
}