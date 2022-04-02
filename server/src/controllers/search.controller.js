const fs = require("fs");
const axios = require("axios");
const logger = require("../config/winston");
const searchApi = require("../api/search.api");

const generateSingleResult = (result) => {
  return { url: result.FirstURL, text: result.Text };
};

class SearchController {
  async search(req, res) {
    try {
      const query = req.query.q;
      if (!query) return res.status(400).send("No search words provided");
      const requestConfig = {
        method: "get",
        url: searchApi.searchEndpoint(query),
      };
      const response = await axios(requestConfig);
      const responseData = response.data;
      const resultsArray = [];

      responseData.RelatedTopics.forEach((result) => {
        if (result.Topics) {
          result.Topics.forEach((topic) => {
            resultsArray.push(generateSingleResult(topic));
          });
        } else {
          resultsArray.push(generateSingleResult(result));
        }
      });
      res.status(200).send(resultsArray);
    } catch (err) {
      logger.error(err);
      return res.status(500).send("An error has occurred");
    }
  }

  saveQuery(req, res, next) {
    const query = req.query.q;
    const filePath = "./data/queries.txt";
    fs.appendFile(filePath, query + "\n", (err) => {
      if (err) return res.status(500).send("An error has occurred");
      next();
    });
  }

  returnSavedQueries(req, res) {
    const filePath = "./data/queries.txt";
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return res.status(500).send("An error has occurred");
      const queries = data.split("\n");
      queries.pop();
      res.status(200).send(queries);
    });
  }
}

module.exports = new SearchController();
