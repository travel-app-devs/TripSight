import style from "./style.module.css";
import SearchField from "../searchField";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import PlaceContext from '../../context/PlaceContext';
//import hero from "../../assets/images/hero-image.png";

const Hero = () => {
  /*
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
  */
 const thePlace = useContext(PlaceContext);
  return (
    <div className={style.heroContainer}>
      <div className={style.heroTextContainer}>
          <div className={style.heroTextSection}>
              <h1 className={style.heroTextBigHeader}>TripSight</h1>
          <div className={style.heroDescriptionContainer}>
              <p className={style.heroTextDescription}>Find travel experiences from real people, or make your own!</p>
              <SearchField />
              <Link to="/results"><input id={style.heroSearchButton} type="submit" value="Search" onClick={() => {
                thePlace.getPlaceLatLng(thePlace.place);
            }} /></Link>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
