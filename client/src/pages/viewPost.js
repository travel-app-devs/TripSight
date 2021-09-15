import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_USERPOSTS } from '../utils/queries';

const ViewPost = () => {
    const { loading, data } = useQuery(QUERY_USERPOSTS);
    console.log('query data', data)

    const userData = data?.userPosts || [];
    console.log(userData);

    const { userId: userParam } = useParams();
    console.log(userParam);

    if (loading) {
        return <div>Loading....</div>;
    }

    return(
        <div>
            {
        userData.filter((data) => data._id === userParam)
        .map((data) => (
            <h2>Title: {data.title}</h2>
        ))}
      </div>
    )
}

export default ViewPost;