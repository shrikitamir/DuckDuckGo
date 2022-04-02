const router = require("express").Router();
const searchController = require("../controllers/search.controller");

router.get("/", searchController.search);
router.post("/", searchController.saveQuery, searchController.search);
router.get("/saved-queries", searchController.returnSavedQueries);

module.exports = router;
