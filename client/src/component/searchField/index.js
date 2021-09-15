import style from './style.module.css';
import React, { useState } from 'react';

const SearchField = () => {
    const [address, setAddress] = useState("");
    const [latLng, setLatLng] = useState({
      lat: 0.0000,
      lng: 0.0000
    })
    const getPlaceLatLng = (address) => {
      let latitude, longitude, placeId;
      new window.google.maps.Geocoder().geocode(
        { address: `${address}` },
        function (results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            placeId = results[0].place_id;
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            setLatLng({
              lat: latitude,
              lng: longitude
            })
            return console.log("coordinates: ", latLng.lat, latLng.lng)
          } else {
            alert(
              "Geocode was not successful for the following reason: " + status
            );
          }
        }
      );
    };
    const handleChange = (event) => {
        event.preventDefault()
        let addressInput = event.target.value;
        setAddress(addressInput);
      }

    return(
        <div className={style.heroForm}>
            <input id={style.heroSearchForm} type="text" placeholder="Where is your next destination?" value={address} onChange={handleChange}/>
            <input id={style.heroSearchButton} type="submit" value="Search" onClick={() => {getPlaceLatLng(address)}}/>
        </div>
    )
}

export default SearchField;