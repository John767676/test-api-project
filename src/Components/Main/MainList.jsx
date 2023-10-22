import React, {useState} from 'react';
import MainItem from "./MainItem";
import {AiOutlineReload} from 'react-icons/ai'

const MainList = ({posts = {}, fetchData}) => {

    const [loading,setLoading] = useState(false)

    const handleClick = () => {
        fetchData()
        setLoading(true)
    }

    return (
        <div className="post__main">
            <div className="post__mainBlock">
                <h1 className='post__mainHeader'>Latest news</h1>
                <button
                        className={loading ? 'post__reload rotate' : 'post__reload'}
                        onClick={handleClick}
                        title='Reload'
                        onAnimationEnd={() => setLoading(false)}
                >
                    <AiOutlineReload size='35px'/>
                </button>
            </div>
            <div className='posts__list'>
                {
                    posts.length === 0 ? <h1>Loading</h1> : posts.map(el => {
                        return <MainItem key={el} id={el}/>
                    })
                }
            </div>
        </div>
    );
};

export default MainList;