import React from 'react';

const Comment = ({text}) => {
    return (
        <div>
            <div className='detail-page__comments' dangerouslySetInnerHTML={{__html:`${text}`}}></div>
        </div>
    );
};

export default Comment;