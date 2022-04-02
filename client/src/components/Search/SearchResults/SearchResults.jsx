import SearchResult from "./SearchResult/SearchResult";
import noResultsImg from "../../../Assets/no-results.png";
import "./SearchResults.css";

const SearchResults = (searchResults) => {
  const findAndMark = (value) => {
    const regex = RegExp(value, "g"); // "gi" for case insensitive;
    const replacement = "<span class='marked-word'>" + value + "</span>";
    const searchResults = document.querySelectorAll(".search-result");
    searchResults.forEach((result) => {
      const newContent = result.innerText.replace(regex, replacement);
      result.innerHTML = newContent;
    });
  };

  return (
    <div className="search-results-list">
      {searchResults.currentItems ? (
        searchResults.currentItems.length ? (
          <>
          <input className='find-input' type="text" placeholder="Search for keywords..." onChange={(e) => findAndMark(e.target.value)} />
          {searchResults.currentItems.map((result, index) => {
            return <SearchResult key={index} result={result} />;
          })}
            </>
        ) : (
          <img src={noResultsImg} alt="No results" className="no-results-img" />
        )
      ) : null}
    </div>
  );
};

export default SearchResults;
