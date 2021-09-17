import style from './style.module.css';
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import PlaceContext from '../../context/PlaceContext';
import { get } from 'lodash';


const SearchField = () => {
    const [address, setAddress] = useState("");
    const thePlace = useContext(PlaceContext)
    const handleChange = (event) => {
        event.preventDefault()
        let addressInput = event.target.value;
        setAddress(addressInput);
      }

    return(
        <div className={style.heroForm}>
            <input id={style.heroSearchForm} type="text" placeholder="Where is your next destination?" value={address} onChange={handleChange}/>
            <Link to="/results"><input id={style.heroSearchButton} type="submit" value="Search" onClick={() => {
                thePlace.setPlace(address)
                thePlace.getPlaceLatLng(address)
                }}/></Link>
        </div>
    )
}

export default SearchField;