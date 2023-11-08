import React from 'react';
import MainItem from "./MainItem";
import {AiOutlineReload} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../Features/Posts/postsSlice";
import {setFilter} from "../../Features/Filters/filterSlice";

const MainList = () => {

    const dispatch = useDispatch()

    const loading = useSelector(state => state.postList.loading)
    const filter = useSelector(state => state.makeFilter)
    const posts = useSelector(state => (
        state.postList.posts ?
        (filter === 'date')   ?
            state.postList.posts.slice().sort((a,b) => b.time - a.time) :
            state.postList.posts.slice().sort((a,b) => b.score - a.score) : null
    ))

    const handleClick = () => {
        dispatch(getPosts())
    }

    return (
        <div className="post__main">
            <div className="post__mainBlock">
                <h1 className='post__mainHeader'>Latest news</h1>
                <div className="post__selector-container">
                    <select onChange={e => dispatch(setFilter(e.target.value))} className='post__select'>
                        <option value="date" selected={filter === 'date' ? 'date' : null}>sort by date</option>
                        <option value="score" selected={filter === 'score' ? 'score' : null}>sort by rating</option>
                    </select>
                </div>
                <button
                        className={loading ? 'post__reload rotate' : 'post__reload'}
                        disabled={!!loading}
                        onClick={handleClick}
                        title='Reload'
                >
                    <AiOutlineReload size='35px'/>
                </button>
            </div>
            <div className='posts__list'>
                {
                    (posts === null || posts.length === 0) ? <h1>Loading</h1> : posts.map(el => {
                        return <MainItem key={el.id} post={el}/>
                    })
                }
            </div>
        </div>
    );
};

export default MainList;