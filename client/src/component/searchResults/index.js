import style from "./style.module.css";
import React, { useContext } from 'react';
import { useQuery } from "@apollo/client";
import PlaceContext from "../../context/PlaceContext";
import SearchField from "../searchField";
import Map from '../map'
import { Link } from "react-router-dom";



const SearchResults = () => {
  const thePlace = useContext(PlaceContext);
  console.log("This Must Be The Place.place in searchResults:", thePlace.place)
  const { data } = useQuery(thePlace.QUERY_PLACEPOSTS, {
    variables: {
      place: thePlace.place
    }
  });
  const postList = data?.placePosts || [];
  console.log("postList in searchResults:", postList);
  return (
    <div className={style.searchResultsContainer}>
      <div className={style.searchFieldContainer}>
        <Map />
        <h1>Search Again</h1>
        <SearchField />
      </div>
      <div className={style.searchContainer}>
        <h1>Search Results in {thePlace.place}</h1>
        {postList.map(({ _id, title, place }) => (
          <Link to={`/viewpost/${_id}`} key={_id}>
                  <div>
                    <h3>{title}</h3>
                    </div>
                </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
