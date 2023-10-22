import React, {useState} from 'react';
import axios from "axios";

const Comment = ({data}) => {

    const initialOpen = false

    const [kidComment,setKidComment] = useState([])
    const [onShow,setOnShow] = useState(initialOpen)

    const getCommentReplies = async () => {
        for (let i = 0; i<data.kids.length; i++) {
            const comms = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${data.kids[i]}.json`)
            setKidComment(prevState => [comms.data, ...prevState])
            setOnShow(!onShow)
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
                    onShow ? kidComment.map(com => <Comment key={com.id} data={com}/>): null
                }
            </div>
        </>
    );
};

export default Comment;