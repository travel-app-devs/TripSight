import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import DashInfo from '../component/dashInfo'
import PostList from '../component/postList'
import { QUERY_THISUSERPOSTS } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
  const userProfile = Auth.getProfile().data
  console.log('userprofile', userProfile)
  const { userId: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_THISUSERPOSTS);
  console.log('query data', data)

  const user = data?.users || [];

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
      <DashInfo user={userProfile}/>

      </div>
  );
};

export default Dashboard;