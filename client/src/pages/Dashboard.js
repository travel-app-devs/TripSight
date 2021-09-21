import React, { useContext, setContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Map from '../component/map';

import DashInfo from '../component/dashInfo'

import { QUERY_USERPOSTS, QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
  const userProfile = Auth.getProfile().data
  console.log('userprofile', userProfile)
  const { loading: userPostsLoading, data: userPosts } = useQuery(QUERY_USERPOSTS, { variables: {userId: userProfile._id }});
  const { loading: userLoading , data: user } = useQuery(QUERY_USER, { variables: {_id: userProfile._id}});

  console.log('query data', user, userPosts)

  if (userPostsLoading || userLoading) {
    return <div>Loading....</div>;
  }
  if (!userProfile?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <Map userPosts={userPosts} />
      <DashInfo user={user.user} userPosts={userPosts.userPosts}/>

      </div>
  );
};

export default Dashboard;