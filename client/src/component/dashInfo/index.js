import style from './style.module.css'
import { Link } from 'react-router-dom'
import PostList from '../../component/postList'
const DashInfo = ({ user }) => {
    return (
        <div className={style.dashContainer}>
            <div className={style.dashHeader}>
                <h1 className={style.welcome}>Welcome, <span id={style.username}>{user.username}</span></h1>
                <div className={style.button}>
                    <Link to="/newpost" ><button >Create New Post</button></Link>
                </div>
                <div className={style.lists}>
                    <div className={style.postList}>
                        <PostList
                            posts={user.posts}
                            title={`${user.email}'s Posts`}
                            showTitle={false}
                            showUsername={false}
                        />
                    </div>
                    <div className={style.favorites}>
                        <PostList
                            posts={user.posts}
                            title={`${user.email}'s Posts`}
                            showTitle={false}
                            showUsername={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashInfo