import style from './style.module.css'
import { Link } from 'react-router-dom'
import PostList from '../../component/postList'
import { useQuery } from '@apollo/client';
import { QUERY_USERPOSTS } from '../../utils/queries';

const ProfileInfo = ({ user, owner }) => {
    console.log('pwner',owner)
    const { loading, data } = useQuery(QUERY_USERPOSTS, { variables: {userId: owner._id }});
    if (loading) {
        return <div>Loading....</div>;
      }
    
    const ownerData = data?.userPosts || {}

    const profile = owner
    console.log('profile', profile)
    console.log('data', ownerData)

    // const profile = {username: 'kt', firstName: 'katie', lastName: 'lastname', bio: 'my name is katie and I like to travel', profilePicLink: 'https://www.dreamstime.com/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-image99680945'}
    return (
        <div className={style.dashContainer}>
            <div className={style.dashHeader}>
                <h1 className={style.welcome}>{owner.username}'s Profile</h1>
                <div>
                    { owner === user._id ? <Link to="/newpost" ><button className={style.button}>Create New Post</button></Link> : null }
                </div>
                <div>
                    { owner === user._id ? <button className={style.button2} >Edit Profile</button> : null }
                </div>
                <div>
                    <img src={owner.profilePicLink} />
                </div>
                <div className={style.lists}>
                    <div className={style.postList}>
                        <h3>{owner.username}'s Posts</h3>
                        <PostList
                            userPosts={ownerData}
                            title={`${user.email}'s Posts`}
                            showTitle={false}
                            showUsername={false}
                            type={true}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo