const Joi = require("joi")

module.exports = Joi.object().keys({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref("startDate")).required(),
  minCount: Joi.number().required().strict(),
  maxCount: Joi.number().required().strict(),
})

