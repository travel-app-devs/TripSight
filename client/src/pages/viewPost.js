import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_POSTTWO} from '../utils/queries';

const ViewPost = () => {

    const code = useParams().postId;
 
    console.log(useParams());
    const { data } = useQuery(QUERY_POSTTWO, { variables: {_id: code }});
    console.log(QUERY_POSTTWO);

    console.log('query data', data)

    const userData = data?.post || [];
    console.log(userData);



    return(
        <div>

      </div>
    )
}

export default ViewPost;