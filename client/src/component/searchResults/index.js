import style from "./style.module.css";
import { useQuery } from "@apollo/client";
import { QUERY_PLACEPOSTS } from "../../utils/queries";
import SearchField from "../searchField";
import axios from 'axios';

const SearchResults = (props) => {
  const { loading, data } = useQuery(QUERY_PLACEPOSTS);
  const config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6897%2C139.6922&radius=15000&key=AIzaSyAy6d25XL0PViXcyr-Erl3Gtg7SXYB0jRg`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  const postList = data?.posts || [];
  console.log(postList);

  return (
    <div className={style.searchResultsContainer}>
      <div className={style.searchFieldContainer}>
        <h1>Search Again</h1>
        <SearchField />
      </div>
      <div className={style.searchContainer}>
        <h1>Search Results</h1>

        <div className={style.searchResultsSection}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {postList.map((post) => {
                return (
                  <div className={style.searchSection}>
                    <div>
                      <h3 className={style.searchTitle}>{post.title}</h3>
                    </div>
                    <div>
                      <p>{post._id}</p>
                    </div>
                    <div>
                      <button>Read More Here</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
