const express = require("express");
const router = express.Router();
const { recordController } = require("../controllers/index");
const schemas = require("../validations/index")
const validate = require("../middlewares/validate")

router.post("/", validate(schemas.recordValidation), recordController.getRecords);

module.exports = router;
