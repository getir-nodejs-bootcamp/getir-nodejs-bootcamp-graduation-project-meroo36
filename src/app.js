const express = require("express");
const app = express();
const loader = require("./loaders/index")
const bodyParser = require("body-parser");
const routes = require("./routes/index");


loader(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);
app.all("*", (req, res) => {
    res.status(404).send("Route not found");
});

module.exports = {
    app,
};
