import React, { useState, useQuery } from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
// import { apiKey } from '../../../../server/utils/apiKey'
import { QUERY_ALLPOSTS } from "../../utils/queries";




function Map(props) {
    const containerStyle = {
        // We can change this, just a stand-in
        width: '400px',
        height: '400px'
    };
    console.log("coordinates: ", props.latLng.lat, props.latLng.lng)
    const { loading, data } = useQuery(QUERY_ALLPOSTS);
    const [ activeMarker, setActiveMarker ] = useState();

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        postList.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    const postList = data?.posts || [{}];
    console.log(postList);
    return (
        <LoadScript
            googleMapsApiKey={"AIzaSyAy6d25XL0PViXcyr-Erl3Gtg7SXYB0jRg"}
        >
            <GoogleMap
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={containerStyle}
            >
                {postList.map(({ _id, title, latitude, longitude }) => (
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
        </LoadScript>
    )
}

export default React.memo(Map)