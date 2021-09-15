import style from './style.module.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const SearchField = ({ getPlaceLatLng }) => {
    const [address, setAddress] = useState("");
    const handleChange = (event) => {
        event.preventDefault()
        let addressInput = event.target.value;
        setAddress(addressInput);
      }

    return(
        <div className={style.heroForm}>
            <input id={style.heroSearchForm} type="text" placeholder="Where is your next destination?" value={address} onChange={handleChange}/>
            <Link to="/results"><input id={style.heroSearchButton} type="submit" value="Search" onClick={() => {getPlaceLatLng(address)}}/></Link>
        </div>
    )
}

export default SearchField;