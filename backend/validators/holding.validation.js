const Joi = require("joi");

const createHoldingSchema = Joi.object({
  instrument: Joi.string().uppercase().trim().required().messages({
    "string.base": "Instrument must be text, e.g., 'AAPL' or 'RELIANCE'",
    "string.empty": "Instrument cannot be empty",
    "any.required": "Instrument is required to create a holding",
  }),

  quantity: Joi.number().min(1).required().messages({
    "number.base": "Quantity must be a number",
    "number.min": "Quantity must be at least 1",
    "any.required": "Quantity is required to create a holding",
  }),

  avgCost: Joi.number().min(0).required().messages({
    "number.base": "Average cost must be a valid number",
    "number.min": "Average cost cannot be negative",
    "any.required": "Average cost is required to create a holding",
  }),

  ltp: Joi.number().min(0).required().messages({
    "number.base": "Last traded price must be a number",
    "number.min": "Last traded price cannot be negative",
    "any.required": "Last traded price is required to calculate holding value",
  }),

  prevClose: Joi.number().min(0).required().messages({
    "number.base": "Previous close price must be a number",
    "number.min": "Previous close price cannot be negative",
    "any.required": "Previous close price is required for reference",
  }),
}).unknown(false);

module.exports = { createHoldingSchema };
