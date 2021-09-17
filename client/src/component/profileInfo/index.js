import style from './style.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PostList from '../../component/postList'
import { useQuery } from '@apollo/client';
import { QUERY_USERPOSTS } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_USERDEV } from '../../utils/mutations'

const ProfileInfo = ({ user, owner }) => {
    const [ proPic, setProPic ] = useState('')
    const [ proBio, setProBio ] = useState('')
    console.log('pwner',owner)
    const [updateUser, { error }] = useMutation(UPDATE_USERDEV, { variables: {userId: owner._id }})
    const { loading, data } = useQuery(QUERY_USERPOSTS, { variables: {userId: owner._id }});
    if (loading) {
        return <div>Loading....</div>;
      }
    
    const ownerData = data?.userPosts || {}

    const profile = owner
    console.log('profile', profile)
    console.log('data', user)

    const handleChangeProPic = (event) => {
        const { name, value } = event.target

        if (name === 'profilePic') {
            setProPic(value);
        } 
    }

    const handleChangeProBio = (event) => {
        const { name, value } = event.target

        if (name === 'profileBio') {
            setProBio(value);
        }
    }

    const handleSaveProfile = async (event) => {
        try {
            const vars = (!proPic.length && !proBio.length) 
                ? {_id: user._id } 
                : ((!proPic.length && proBio.length) 
                ? {_id: user._id, bio: proBio } 
                : ((proPic.length && !proBio.length) 
                ? {_id: user._id, profPicLink: proPic } 
                : {_id: user._id, bio: proBio, profPicLink: proPic }))
            console.log('variables', vars)
            const { data } = await updateUser({
                variables: {...vars}
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className={style.dashContainer}>
            <div className={style.dashHeader}>
                <h1 className={style.welcome}>{owner.username}'s Profile</h1>
                <div >
                    { owner._id === user._id ? <Link to="/newpost" ><button className={style.button}>Create New Post</button></Link> : null }
                </div>
                <div>
                    { owner._id === user._id ? <button className={style.button2} onClick={handleSaveProfile} >Save Profile</button> : null }
                </div>
                <div className={style.profileInfo}>
                    { owner._id === user._id ? <><img className={style.profileImage} src={owner.profPicLink} /><input onChange={handleChangeProPic} name='profilePic' placeholder='update profile link'/></>: <img src={owner.profPicLink} /> }
                    { owner._id === user._id ? (owner.bio.length ? 
                        <><label htmlFor='ownerBio'>Bio</label>
                        <textarea onChange={handleChangeProBio} name='profileBio' id='ownerBio' value={owner.bio}/></> 
                        : <><label htmlFor='ownerBio'>Bio</label>
                        <textarea onChange={handleChangeProBio} name='profileBio' id='ownerBio' placeholder='Enter bio'></textarea></>) 
                        : <p>{owner.bio}</p> }
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