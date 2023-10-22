import React from 'react';
import MainList from "./Main/MainList";

const Main = ({posts, fetchData}) => {
    return (
        <div className='news'>
            <MainList posts={posts} fetchData={fetchData}/>
        </div>
    );
};

export default Main;