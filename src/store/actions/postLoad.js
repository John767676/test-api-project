import axios from "axios";
import {GET_LIST, SET_LOAD} from "../types/types";


export function postLoad() {
    return async dispatch => {
        dispatch({
            type: SET_LOAD,
            payload: false
        })
        const postsList = []
        const res = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
        await Promise.all(res.data.slice(0,100).map(function(el) {
            return  axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`).then(({data}) => postsList.push(data))
        }))
        dispatch({
            type: GET_LIST,
            payload: postsList
        })
    }
}