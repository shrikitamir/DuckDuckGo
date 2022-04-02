const express = require("express");
const cors = require("cors");
const app = express();
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
    const morgan = require("morgan");
    app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

const searchRoute = require("./src/routes/search.route");
const PORT = process.env.PORT || 5000;

app.use("/search", searchRoute);
app.get("*", (req, res) => res.status(404).send("Endpoint doesn't exist"));

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
