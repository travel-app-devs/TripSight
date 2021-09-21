import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Map from '../component/map';
import UserContext from '../context/UserContext';
import PostsContext from '../context/PostsContext';
import DashInfo from '../component/dashInfo'

import { QUERY_USERPOSTS, QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
  const userDataContext = useContext(UserContext);
  const postsDataContext = useContext(PostsContext);
  const userProfile = Auth.getProfile().data
  const { loading: userPostsLoading, data: userPosts } = useQuery(QUERY_USERPOSTS, { variables: {userId: userProfile._id }});
  const { loading: userLoading , data: user } = useQuery(QUERY_USER, { variables: {_id: userProfile._id}});  
  if (!userPostsLoading && !userLoading)
    postsDataContext.setUserPosts(userPosts);
    userDataContext.setUserData(userProfile);

  console.log('query data', userDataContext.userData, userPosts)

 if (!userDataContext.userData?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <Map userPosts={postsDataContext.userPosts} />
      <DashInfo user={userDataContext.userData} userPosts={postsDataContext.userPosts}/>

      </div>
  );
};

export default Dashboard;