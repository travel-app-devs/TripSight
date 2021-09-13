import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../component/postList'
import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal Dashboard page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome, {userParam ? `${user.username}'s` : 'user'}.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <PostList
            posts={user.posts}
            title={`${user.username}'s Posts`}
            showTitle={false}
            showUsername={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;