class searchEndpoints {
  static searchEndpoint(query) {
    const encodedURI = encodeURI(`${process.env.BASE_URL}?q=${query}&format=json`);
    return encodedURI;
  }
}

module.exports = searchEndpoints;
