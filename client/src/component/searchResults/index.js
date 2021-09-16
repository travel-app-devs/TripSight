import style from "./style.module.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALLPOSTS } from "../../utils/queries";
import SearchField from "../searchField";
import Map from '../map'


const SearchResults = (props) => {
  // const { data } = useQuery(QUERY_ALLPOSTS);
  // const postList = data?.allPosts || [];
  // console.log(postList);
  return (
    <div className={style.searchResultsContainer}>
      <div className={style.searchFieldContainer}>
        <Map latLng={props.latLng} />
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
