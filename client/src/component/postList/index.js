import style from './style.module.css'

const PostList = ({ type }) => {
    
    const userPosts = [{id: 1, title: 'new post 1', textBody: 'textBody'}, {id: 2, title: 'new post 2', textBody: 'textBody'}, {id: 3, title: 'new post 3', textBody: 'textBody'}, {id: 4, title: 'new post 4', textBody: 'textBody'}]
    const posts = type ? userPosts.map((post, id) => {
        var postContent = ''
        if (post.textBody.length > 200) {
            postContent = post.textBody.substring(0,200)
        } else {
            postContent = post.textBody
        }
        return(
            <div className={style.postDiv} key={post.id}>
                <h3 className={style.postTitle}>{post.title}</h3>
                <p>{postContent}</p>
            </div>
        )}) : userPosts.map((post, id) => {
            var postContent = ''
            if (post.textBody.length > 200) {
                postContent = post.textBody.substring(0,200)
            } else {
                postContent = post.textBody
            }
            return(
                <div className={style.postDiv} key={post.id}>
                    <h3 className={style.postTitle}>{post.title}</h3>
                </div>
            )}) 
    return (
        <div>
            {posts}
        </div>
    )
}

export default PostList