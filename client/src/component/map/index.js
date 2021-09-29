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
    const { data } = useQuery(QUERY_ALLPOSTS);
    const [ activeMarker, setActiveMarker ] = useState();
    const thePlace = useContext(PlaceContext);
    console.log("This Must Be The Place: ", thePlace.place)
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    function geoFindMe() {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            thePlace.setLatLng({
                lat: latitude,
                lng: longitude
            });
            console.log(thePlace.latLng)
        }

        function error() {
            alert('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    const postList = userPosts?.userPosts || data?.allPosts || [];
    thePlace.setPlace(
        userPosts.userPosts[0]?.place
        || geoFindMe()
        || 'Tokyo'
    )
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
}

export default React.memo(Map)