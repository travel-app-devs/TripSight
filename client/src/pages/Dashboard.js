import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import DashInfo from '../component/dashInfo'

import { QUERY_USERPOSTS } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
  const userProfile = Auth.getProfile().data
  console.log('userprofile', userProfile)
  const { loading, data } = useQuery(QUERY_USERPOSTS, { variables: {userId: userProfile._id }});
  console.log('query data', data)

  if (loading) {
    return <div>Loading....</div>;
  }


  return (
    <div>
      <DashInfo user={userProfile} />

      </div>
  );
};

export default Dashboard;