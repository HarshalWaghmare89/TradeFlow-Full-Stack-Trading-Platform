const Joi = require("joi");

const createPositionSchema = Joi.object({
  product: Joi.string()
    .valid("NRML", "MIS", "CNC")
    .uppercase()
    .trim()
    .required()
    .messages({
      "any.only": "Product must be one of 'NRML', 'MIS', or 'CNC'",
      "string.empty": "Product cannot be empty",
      "any.required": "Product type is required",
    }),

  instrument: Joi.string().uppercase().trim().required().messages({
    "string.base": "Instrument must be text, e.g., 'AAPL' or 'RELIANCE'",
    "string.empty": "Instrument cannot be empty",
    "any.required": "Instrument is required to create a position",
  }),

  exchange: Joi.string()
    .valid("NSE", "BSE", "CDS", "MCX")
    .uppercase()
    .trim()
    .required()
    .messages({
      "any.only": "Exchange must be one of 'NSE', 'BSE', 'CDS', or 'MCX'",
      "string.empty": "Exchange cannot be empty",
      "any.required": "Exchange is required",
    }),

  quantity: Joi.number().min(1).required().messages({
    "number.base": "Quantity must be a number",
    "number.min": "Quantity must be at least 1",
    "any.required": "Quantity is required",
  }),

  ltp: Joi.number().min(0).required().messages({
    "number.base": "Last traded price must be a number",
    "number.min": "Last traded price cannot be negative",
    "any.required": "Last traded price is required to calculate holding value",
  }),

  avgPrice: Joi.number().min(0).required().messages({
    "number.base": "Average price must be a number",
    "number.min": "Average price cannot be negative",
    "any.required": "Average price is required",
  }),
}).unknown(false);

module.exports = { createPositionSchema };
