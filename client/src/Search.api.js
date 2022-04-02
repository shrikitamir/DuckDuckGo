import axios from 'axios';

export const searchRequest = (query) => {
    return axios.get(
      `${process.env.REACT_APP_API_PROXY_URL}/search?q=${query}`
    );
}

export const searchAndSaveRequest = (query) => {
  return axios.post(
    `${process.env.REACT_APP_API_PROXY_URL}/search?q=${query}`
  );
};

export const getSavedQueries = () => {
  return axios.get(
    `${process.env.REACT_APP_API_PROXY_URL}/search/saved-queries`
  );
};