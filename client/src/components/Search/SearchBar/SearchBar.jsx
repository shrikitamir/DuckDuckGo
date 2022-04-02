import { FaSistrix } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setSearchBarValue } from "../../../actions";

import "./SearchBar.css";

const SearchBar = ({ search }) => {
  const dispatch = useDispatch();
  const searchBarValue = useSelector((state) => state.searchBar);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search(searchBarValue, false);
      }}
    >
      <div className="search">
        <input
          type="text"
          value={searchBarValue}
          onChange={(e) => dispatch(setSearchBarValue(e.target.value))}
          className="search-term"
          placeholder="What are you looking for?"
        />
        <button
          onClick={() => {
            search(searchBarValue, false);
          }}
          type="submit"
          className="search-button get-button"
        >
          GET <FaSistrix />
        </button>
        <button
          onClick={() => {
            search(searchBarValue, true);
          }}
          type="submit"
          className="search-button post-button"
        >
          POST <FaSistrix />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
