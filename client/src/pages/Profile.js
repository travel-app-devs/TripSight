import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfileInfo from '../component/profileInfo'
import PostList from '../component/postList'
import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const userProfile = Auth.getProfile().data
  console.log('userprofile', userProfile)
  const { userId: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_USER, { variables: {_id: userParam}});
  console.log('query data', data)

  const user = data?.user || {};

  // redirect to personal Dashboard page if username is yours
  const postButton = (Auth.loggedIn() && Auth.getProfile().data._id === userParam) ? 
    <Link to="/newpost" ><button >Create New Post</button></Link> : null
  

  if (loading) {
    return <div>Loading....</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or login!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <ProfileInfo user={userProfile} owner={user}/>

      </div>
  );
};

export default Profile;