import React, {useState} from 'react';
import axios from "axios";

const Comment = ({data}) => {

    const initialOpen = false

    const [kidComment,setKidComment] = useState([])
    const [onShow,setOnShow] = useState(initialOpen)

    const getCommentReplies = async () => {
        setOnShow(!onShow)
        if (data.kids.length) {
            data.kids.map(async el => (
                await axios.get(`https://hacker-news.firebaseio.com/v0/item/${el}.json`).then(({data}) => {
                    if (!data.dead && !data.deleted) {
                        setKidComment(prevState => [...prevState, data])
                    }
                })
            ) )
        }
    }

    return (
        <>
            <div className='detail-page__comments'>
                <div dangerouslySetInnerHTML={{__html:`${data.text}`}}></div>
                <div className="detail-page__comments-attributes">
                    <div className='detail-page__comments-by'>by {data.by}</div>
                    {
                        (data.kids && !onShow) ? (
                            <button className="detail-page__comments-replies" onClick={() => getCommentReplies()}>{data.kids.length} replies</button>
                        ) : null
                    }
                    <div className="detail-page__comments-time">{new Date(data.time * 1000).toLocaleTimeString('ua-UA')}</div>
                </div>
                {
                    onShow ? kidComment.map(com => <Comment key={com.id} data={com}/>) : null
                }
            </div>
        </>
    );
};

export default Comment;