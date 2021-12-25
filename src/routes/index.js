const express = require("express");
const recordRoute = require("./record");
const router = express.Router();

router.use("/records", recordRoute);

module.exports = router;
