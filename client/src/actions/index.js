export const setSearchResults = (state) => {
  return {
    type: "SET_SEARCH_RESULTS",
    payload: state,
  };
};

export const addSearchQuery = (state) => {
  return {
    type: "ADD_SEARCH_QUERY",
    payload: state,
  };
};

export const setSearchQueries = (state) => {
  return {
    type: "SET_SEARCH_QUERIES",
    payload: state,
  };
};

export const setSearchBarValue = (state) => {
  return {
    type: "SET_SEARCH_BAR_VALUE",
    payload: state,
  }
}

export const setLoadingTrue = () => {
  return {
    type: "SET_LOADING_TRUE",
  }
}

export const setLoadingFalse = () => {
  return {
    type: "SET_LOADING_FALSE",
  };
};