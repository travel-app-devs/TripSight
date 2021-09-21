import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
// import { apiKey } from '../../../../server/utils/apiKey'
import { useQuery } from '@apollo/client';
import { QUERY_ALLPOSTS } from "../../utils/queries";
import PlaceContext from '../../context/PlaceContext';




function Map({ userPosts }) {
    const containerStyle = {
        // We can change this, just a stand-in
        width: '100%',
        height: '450px'
    };
    const thePlace = useContext(PlaceContext);
    const [ activeMarker, setActiveMarker ] = useState();
    console.log("This Must Be The Place: ", thePlace.place)
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    if (!userPosts) {
        const { data } = useQuery(QUERY_ALLPOSTS);
        const postList = data?.allPosts || [];
        console.log(postList);
        return (
                <GoogleMap
                    center={thePlace.latLng}
                    onClick={() => setActiveMarker(null)}
                    mapContainerStyle={containerStyle}
                    zoom={17}
                >
                    {postList.map(({ _id, title, place, lat, lng }) => {
                        if (!lat || !lng) {
                            thePlace.getPlaceLatLng(place);
                            lat = thePlace.latLng.lat;
                            lng = thePlace.latLng.lat;
                        }
                        return (
                        <Marker
                            key={_id}
                            position={{lat: lat, lng: lng}}
                            onClick={() => handleActiveMarker(_id)}
                        >
                            {activeMarker === _id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <Link to={`/viewpost/${_id}`}>
                                    <div>{title}</div>
                                    </Link>
                                </InfoWindow>
                            ) : null}
                        </Marker>
                        )
                    })}
                </GoogleMap>
        )
    } else {
        return (
                <GoogleMap
                    center={thePlace.latLng}
                    onClick={() => setActiveMarker(null)}
                    mapContainerStyle={containerStyle}
                    zoom={17}
                >
                    {userPosts.map(({ _id, title, place, lat, lng }) => {
                        if (!lat || !lng) {
                            thePlace.getPlaceLatLng(place);
                            lat = thePlace.latLng.lat;
                            lng = thePlace.latLng.lat;
                        }
                        return (
                        <Marker
                            key={_id}
                            position={{lat: lat, lng: lng}}
                            onClick={() => handleActiveMarker(_id)}
                        >
                            {activeMarker === _id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <Link to={`/viewpost/${_id}`}>
                                    <div>{title}</div>
                                    </Link>
                                </InfoWindow>
                            ) : null}
                        </Marker>
                        )
                    })}
                </GoogleMap>
        )
    }
}

export default React.memo(Map)