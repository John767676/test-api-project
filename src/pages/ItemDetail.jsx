import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {BiArrowBack} from 'react-icons/bi'
import {BiLinkExternal} from 'react-icons/bi'
import Comment from "../Components/Comment";

const ItemDetail = () => {

    const param = useParams()
    const navigate = useNavigate(-1)
    const [data,setData] = useState({})
    const [comments,setComments] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${param.id}.json`)
            if (res.data.kids) {
                for (let i = 0; i<res.data.kids.length; i++) {
                    let com = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${res.data.kids[i]}.json`)
                    if (!com.data.dead && !com.data.deleted) {
                        setComments(prevState => [com.data,...prevState])
                    }
                }
            }
            setData(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData()
    }, [param.id])

    return (
        <>
            {
                data.time ? (
                    <div className='detail-page'>
                        <button onClick={() => navigate(-1)} className='detail-page__button'><BiArrowBack/></button>
                        <h1 className='detail-page__header'>{data.title}</h1>
                        <a className='detail-page__url' target='_blank' href={data.url}>Link on the article <BiLinkExternal/></a>
                        <div className="detail-page__comment">
                            {
                                comments.length>0 ? comments.map(com => (
                                    <Comment key={com.id} data={com}/>
                                ))
                                    : <h1>No comments found</h1>
                            }
                        </div>
                        <div className="detail-page__attributes">
                            <p className='detail-page__by'>by {data.by}</p>
                            <p className="detail-page__time">{new Date(data.time * 1000).toLocaleTimeString('ua-UA')}</p>
                        </div>
                    </div>
                ) : <h1>Loading</h1>
            }
        </>
    );
};

export default ItemDetail;