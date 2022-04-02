import './SearchResult.css'

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <a href={result.url} target="_blank" rel="noreferrer">{result.text}</a>
    </div>
  );
};

export default SearchResult;