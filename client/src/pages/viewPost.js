import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_USERPOSTS } from '../utils/queries';

const ViewPost = () => {
    const { loading, data } = useQuery(QUERY_USERPOSTS);
    console.log('query data', data)

    const postList = data?.userPosts || [];
    //console.log(postList);

    const { userId: userParam } = useParams();
    console.log(userParam);
    console.log(useParams);

    if (loading) {
        return <div>Loading....</div>;
    }

    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default ViewPost;