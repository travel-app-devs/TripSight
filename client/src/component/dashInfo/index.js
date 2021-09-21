import style from './style.module.css'
import { Link } from 'react-router-dom'
import PostList from '../../component/postList'
const DashInfo = ({ userData, userPosts }) => {
    return (
        <div className={style.dashContainer}>
            <div className={style.dashHeader}>
                <h1 className={style.welcome}>Welcome, <Link to={`/profile/${userData._id}`}><span id={style.username}>{userData.username}</span></Link></h1>
                <div className={style.button}>
                    <Link to="/newpost" ><button >Create New Post</button></Link>
                </div>
                <div className={style.lists}>
                    <div className={style.postList}>
                        <h3>Your Posts</h3>
                        <PostList
                            userPosts={userPosts}
                            title={`${userData.email}'s Posts`}
                            showTitle={false}
                            showUsername={false}
                            type={true}
                        />
                    </div>
                    <div className={style.favorites}>
                        <h3>Your Favorites</h3>
                        <PostList
                            userPosts={userData.favorites}
                            title={`${userData.email}'s Posts`}
                            showTitle={false}
                            showUsername={false}
                            type={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashInfo