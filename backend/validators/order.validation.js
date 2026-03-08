const Joi = require("joi");

const createOrderSchema = Joi.object({
  type: Joi.string()
    .valid("BUY", "SELL")
    .uppercase()
    .trim()
    .required()
    .messages({
      "any.only": "Order type must be either 'BUY' or 'SELL'",
      "string.empty": "Order type cannot be empty",
      "any.required": "Order type is required",
    }),

  instrument: Joi.string().uppercase().trim().required().messages({
    "string.base": "Instrument must be text, e.g., 'AAPL' or 'RELIANCE'",
    "string.empty": "Instrument cannot be empty",
    "any.required": "Instrument is required to create an order",
  }),

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

  quantity: Joi.number().min(1).required().messages({
    "number.base": "Quantity must be a number",
    "number.min": "Quantity must be at least 1",
    "any.required": "Quantity is required",
  }),

  ltp: Joi.number().min(0).required().messages({
    "number.base": "Last traded price (LTP) must be a number",
    "number.min": "LTP cannot be negative",
    "any.required": "LTP is required to calculate order value",
  }),

  price: Joi.number().min(0).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price cannot be negative",
    "any.required": "Price is required to place an order",
  }),

  status: Joi.string()
    .valid("OPEN", "REJECTED", "CANCELLED", "COMPLETE")
    .uppercase()
    .trim()
    .optional()
    .messages({
      "any.only":
        "Status must be one of 'OPEN', 'COMPLETE', 'CANCELLED', or 'REJECTED'",
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
}).unknown(false);

module.exports = { createOrderSchema };
