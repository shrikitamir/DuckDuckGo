import { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, addSearchQuery, setSearchQueries } from "./actions";
import { searchRequest, searchAndSaveRequest, getSavedQueries } from "./Search.api.js";

const App = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    (async () => {
      const savedQueries = await getSavedQueries();
      dispatch(setSearchQueries(savedQueries.data));
    })();
  }, [dispatch]);

  const search = async (value, saveToServer, saveToSideBar) => {
    try {
      let searchResponse;
      if (saveToServer) {
        searchResponse = await searchAndSaveRequest(value);
      } else {
        searchResponse = await searchRequest(value);
      }
      dispatch(setSearchResults(searchResponse.data));
      if (saveToSideBar) dispatch(addSearchQuery(value));
    } catch (error) {
      console.log("Error from search", error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar searchFn={search} />
      <div className="main-content-container">
        <Search searchFn={search} searchResults={searchResults} />
      </div>
    </div>
  );
};

export default App;
