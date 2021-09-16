import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_POST} from '../utils/queries';

const ViewPost = () => {
    const { loading, data } = useQuery(QUERY_POST);
    console.log('query data', data)

    const userData = data?.Posts || [];
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