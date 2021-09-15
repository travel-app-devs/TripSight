import style from "./style.module.css";
import { useQuery } from "@apollo/client";
import { QUERY_PLACEPOSTS } from "../../utils/queries";
import SearchField from "../searchField";
import axios from 'axios';

const SearchResults = (props) => {
  const { loading, data } = useQuery(QUERY_PLACEPOSTS);

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
