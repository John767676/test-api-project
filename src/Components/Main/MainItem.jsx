import {BsStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const MainItem = ({post}) => {

    return (
        post ?
            (
            <Link to={`/${post.id}`}>
                <div className='post__item'>
                    <div className="post__header">
                        <h1>
                            {post.title}
                        </h1>
                    </div>
                    <div className="post_attributes">
                        <div className="post__author">
                            by {post.by}
                        </div>
                        <div className="post__score">
                            <p>
                                rating {post.score} <BsStarFill color='gold' size='20px'/>
                            </p>
                        </div>
                        <div className="post__time">
                            {new Date(post.time * 1000).toLocaleTimeString('ua-UA')}
                        </div>
                    </div>
                </div>
            </Link>
            ) : null
    );
};

export default MainItem;