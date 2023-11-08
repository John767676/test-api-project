import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const postList = []
        await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
            .then(async ({data}) => (
                await Promise.all(data.slice(0,100).map(el => (
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`)
                        .then(({data}) => postList.push(data))
                )))
            ))
        return postList
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, state => {
                state.loading = true
                }
            )
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = true
                state.error = action.payload
            })
            }
    }
)

export const postReducer = postsSlice.reducer