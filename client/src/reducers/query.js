const initialState = [];

const searchQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH_QUERY":
      if (state[state.length - 1] === action.payload) return state;
      return [...state, action.payload];
    case "SET_SEARCH_QUERIES":
      return action.payload;
    default:
      return state;
  }
};

export default searchQueryReducer;