import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_POST} from '../utils/queries';

const ViewPost = () => {
    //const { loading, data } = useQuery(QUERY_POST);
    const { loading, data } = useQuery(QUERY_POST, { variables: {_id:"613ec026f588aeebab07fbc8" }});
    console.log('query data', data)

    /*
    const code = "613ec026f588aeebab07fbc8";
    const { _id: code } = useParams();
    console.log(code);
    */

    const userData = data?.Posts || [];
    console.log(userData);


    if (loading) {
        return <div>Loading....</div>;
    }

    return(
        <div>
        
      </div>
    )
}

export default ViewPost;