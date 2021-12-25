const { recordService } = require("../services/index");

const getRecords = async (req, res) => {
  const records = await recordService.getRecords(req.body);
  res.status(200).send({
    code: 0,
    msg: "Success",
    records: records
  });
};

module.exports = {
  getRecords,
};
