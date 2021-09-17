import style from './style.module.css';
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import LatLngContext from '../../context/LatLngContext';
import { get } from 'lodash';
import Autocomplete from "react-google-autocomplete";



const SearchField = () => {
    const [address, setAddress] = useState("");
    const theLatLng = useContext(LatLngContext)

    return (
        <div className={style.heroForm}>
            <input id={style.heroSearchForm} type="text" placeholder="Where is your next destination?" value={address} onChange={handleChange} />
            <Autocomplete
                onPlaceSelected={(place) => {
                    console.log(setAddress(place));
                }}
            />;
            <Link to="/results"><input id={style.heroSearchButton} type="submit" value="Search" onClick={() => { theLatLng.getPlaceLatLng(address) }} /></Link>
        </div>
    )
}

export default SearchField;