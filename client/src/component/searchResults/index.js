import style from "./style.module.css";
import React, {useContext} from 'react';
import { useQuery } from "@apollo/client";
import LatLngContext from "../../context/LatLngContext";
import SearchField from "../searchField";
import Map from '../map'


const SearchResults = () => {
  const theLatLng = useContext(LatLngContext);
  console.log(theLatLng.latLng)
  const { data } = useQuery(theLatLng.QUERY_PLACEPOSTS, {
    variables: {
      latitude: theLatLng.latLng.lat,
      longitude: theLatLng.latLng.lng
    }
  });
  const postList = data?.placePosts || [];
  console.log(postList);
  return (
    <div className={style.searchResultsContainer}>
      <div className={style.searchFieldContainer}>
        <Map />
        <h1>Search Again</h1>
        <SearchField />
      </div>
      <div className={style.searchContainer}>
        <h1>Search Results</h1>
      </div>
    </div>
  );
};

export default SearchResults;
