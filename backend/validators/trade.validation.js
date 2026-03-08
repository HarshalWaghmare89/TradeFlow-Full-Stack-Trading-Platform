const Joi = require("joi");

const executeTradeSchema = Joi.object({
  instrument: Joi.string().required().messages({
    "string.base": "Instrument must be a string",
    "any.required": "Instrument is required",
  }),
  quantity: Joi.number().positive().required().messages({
    "number.base": "Quantity must be a number",
    "number.positive": "Quantity must be greater than 0",
    "any.required": "Quantity is required",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be greater than 0",
    "any.required": "Price is required",
  }),
  mode: Joi.string().valid("BUY", "SELL").required().messages({
    "any.only": "Mode must be either BUY or SELL",
    "any.required": "Mode is required",
  }),
  product: Joi.string().required().messages({
    "string.base": "Product must be a string",
    "any.required": "Product is required",
  }),
  exchange: Joi.string().required().messages({
    "string.base": "Exchange must be a string",
    "any.required": "Exchange is required",
  }),
}).unknown(false);

module.exports = { executeTradeSchema };
