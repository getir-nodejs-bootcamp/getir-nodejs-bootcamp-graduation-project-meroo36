const Record = require("../models/Record");

const getRecords = async (body) => {

  const { startDate, endDate, minCount, maxCount } = body

  let records = await Record.aggregate([
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: {
          $sum: "$counts"
        },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lt: new Date(endDate),
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
  ]);


  return records;
};

module.exports = {
  getRecords,
};
