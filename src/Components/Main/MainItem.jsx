import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BsStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const MainItem = ({id}) => {

    const [dataItem,setDataItem] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(` https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                setDataItem(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        getData()
    }, [])

    return (
        dataItem ? (
            <Link to={`/${id}`}>
                <div className='post__item'>
                    <div className="post__header">
                        <h1>
                            {dataItem.title}
                        </h1>
                    </div>
                    <div className="post_attributes">
                        <div className="post__author">
                            by {dataItem.by}
                        </div>
                        <div className="post__score">
                            <p>
                                rating {dataItem.score} <BsStarFill color='gold' size='20px'/>
                            </p>
                        </div>
                        <div className="post__time">
                            {new Date(dataItem.time * 1000).toLocaleTimeString('ua-UA')}
                        </div>
                    </div>
                </div>
            </Link>
            ) : null
    );
};

export default MainItem;