import searchReducer from "./searchResults";
import searchQueryReducer from "./query";
import searchBarReducer from "./searchBar";
import loadingReducer from './loading'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchResults: searchReducer,
  searchQuery: searchQueryReducer,
  searchBar: searchBarReducer,
  loading: loadingReducer
});

export default allReducers;
