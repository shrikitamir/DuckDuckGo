import SearchResult from "./SearchResult/SearchResult";
import noResultsImg from '../../../Assets/no-results.png'
import './SearchResults.css'

const SearchResults = (searchResults) => {
  return (
    <div className="search-results-list">
      {searchResults.results ? (
        searchResults.results.length ? (
          searchResults.results.map((result, index) => {
            return <SearchResult key={index} result={result} />;
          })
        ) : (
          <img src={noResultsImg} alt="No results" className="no-results-img" />
        )
      ) : null}
    </div>
  );
};

export default SearchResults;
