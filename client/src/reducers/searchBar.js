const searchBarReducer = (state = '', action) => {
  switch (action.type) {
    case "SET_SEARCH_BAR_VALUE":
      return action.payload;
    default:
      return state;
  }
};

export default searchBarReducer;
