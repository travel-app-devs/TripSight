import style from './style.module.css'
import { Link } from 'react-router-dom'

const PostList = ({ type, userPosts }) => {
    console.log('posts', userPosts)
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
                <Link to={`/viewpost/${post._id}`}><h3 className={style.postTitle}>{post.title}</h3></Link>
                <p>{postContent}</p>
            </div>
        )}) : userPosts.map(post => {
            return(
                <div className={style.postDiv} key={post._id}>
                    <h3 className={style.postTitle}><Link className={style.postTitle} to={`/viewPost/${post._id}`}>{post.title}</Link></h3>
                </div>
            )}) 
    return (
        <div>
            {!posts.length ? <p>No Posts Yet</p> : posts}
        </div>
    )
}

export default PostList