import style from './style.module.css'
import { Link } from 'react-router-dom'

const PostList = ({ type, userPosts }) => {
    console.log('posts', userPosts)
    // const userPosts = [{id: 1, title: 'new post 1', textBody: 'textBody'}, {id: 2, title: 'new post 2', textBody: 'textBody'}, {id: 3, title: 'new post 3', textBody: 'textBody'}, {id: 4, title: 'new post 4', textBody: 'textBody'}]
    const posts = type ? userPosts.map(post => {
        var postContent = ''
        if (post.textBody) {
            if (post.textBody.length > 200) {
                postContent = post.textBody.substring(0,200)
            } else {
                postContent = post.textBody
            }
        }
        return(
            <div className={style.postDiv} key={post._id}>
                <Link to={`/posts/${post._id}`}><h3 className={style.postTitle}>{post.title}</h3></Link>
                <p>{postContent}</p>
            </div>
        )}) : userPosts.map(post => {
            return(
                <div className={style.postDiv} key={post._id}>
                    <Link to={`/posts/${post._id}`}><h3 className={style.postTitle}>{post.title}</h3></Link>
                </div>
            )}) 
    return (
        <div>
            {posts}
        </div>
    )
}

export default PostList