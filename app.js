const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);
app.all("*", (req, res) => {
    res.status(404).send("Route not found");
});

module.exports = {
    app,
};
