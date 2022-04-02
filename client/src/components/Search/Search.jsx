import SearchBar from "./SearchBar/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";
import SearchResultsPaginate from './SearchResultsPaginate/SearchResultsPaginate';
import { useSelector, useDispatch } from "react-redux";
import { setLoadingTrue, setLoadingFalse } from "../../actions";
import "./Search.css";

const Search = ({ searchFn, searchResults }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);

  const search = async (value, postMethod = false) => {
    if (!value) return;
    dispatch(setLoadingTrue());
    await searchFn(value, postMethod, true);
    dispatch(setLoadingFalse());
  };

  return (
    <div className="search-container">
      <SearchBar search={search} />
      {!isLoading ? (
        searchResults ? (
          <SearchResultsPaginate results={searchResults} itemsPerPage={6} />
        ) : null
      ) : (
        <ClipLoader />
      )}
    </div>
  );
};

export default Search;
