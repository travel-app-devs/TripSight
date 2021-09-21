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
  userDataContext.setUserData(Auth.getProfile().data)
  console.log('userprofile', userDataContext.userData)
  postsDataContext.setUserPosts(useQuery(QUERY_USERPOSTS, { variables: {userId: userDataContext.userData._id }}));
  userDataContext.setUserData(useQuery(QUERY_USER, { variables: {_id: userDataContext.userData._id}}));

  console.log('query data', user, userPosts)

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