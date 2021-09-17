import React, { useState, useContext } from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
// import { apiKey } from '../../../../server/utils/apiKey'
import { useQuery } from '@apollo/client';
import { QUERY_ALLPOSTS } from "../../utils/queries";
import LatLngContext from '../../context/LatLngContext';




function Map() {
    const containerStyle = {
        // We can change this, just a stand-in
        width: '600px',
        height: '400px'
    };
    console.log(QUERY_ALLPOSTS)
    const { data } = useQuery(QUERY_ALLPOSTS);
    const [ activeMarker, setActiveMarker ] = useState();
    const incLatLng = useContext(LatLngContext);
    console.log("coordinates: ", incLatLng)
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds(incLatLng.latLng);
        postList.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    const postList = data?.allPosts || [];
    console.log(postList);
    return (
            <GoogleMap
                onLoad={handleOnLoad}
                center={incLatLng.latLng}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={containerStyle}
            >
                {postList.map(({ _id, title, latitude, longitude, _id }) => (
                    <Marker
                        key={_id}
                        position={{lat: latitude, lng: longitude}}
                        onClick={() => handleActiveMarker(_id)}
                    >
                        {activeMarker === _id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div>{title}</div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
            </GoogleMap>
    )
}

export default React.memo(Map)