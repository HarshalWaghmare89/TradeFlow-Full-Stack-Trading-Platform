const Joi = require("joi");

const createBidSchema = Joi.object({
  instrument: Joi.string().uppercase().trim().required().messages({
    "string.base": "Instrument must be text, e.g., 'AAPL' or 'RELIANCE'",
    "string.empty":
      "Instrument cannot be empty. Please provide the name of the instrument",
    "any.required": "Instrument is required to place a bid",
  }),

  eligibleQty: Joi.number().min(1).required().messages({
    "number.base": "Eligible quantity must be a number",
    "number.min": "Eligible quantity must be at least 1",
    "any.required": "Eligible quantity is required to place a bid",
  }),

  lastPrice: Joi.number().min(0).required().messages({
    "number.base": "Last price must be a valid number",
    "number.min": "Last price cannot be negative",
    "any.required": "Last price is required to calculate holding P&L",
  }),

  holdingPrice: Joi.number().min(0).required().messages({
    "number.base": "Holding price must be a valid number",
    "number.min": "Holding price cannot be negative",
    "any.required": "Holding price is required to calculate holding P&L",
  }),
}).unknown(false);

module.exports = { createBidSchema };
