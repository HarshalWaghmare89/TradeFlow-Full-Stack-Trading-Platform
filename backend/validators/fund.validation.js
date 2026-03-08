const Joi = require("joi");

//-->> Segment validation (used for both equity and commodity)
const segmentSchema = Joi.object({
  openingBalance: Joi.number().min(0).messages({
    "number.base": "Opening balance must be a number",
    "number.min": "Opening balance cannot be negative",
  }),
  availableCash: Joi.number().min(0).messages({
    "number.base": "Available cash must be a number",
    "number.min": "Available cash cannot be negative",
  }),
  payin: Joi.number().min(0).messages({
    "number.base": "Payin (deposit) must be a number",
    "number.min": "Payin cannot be negative",
  }),
  payout: Joi.number().min(0).messages({
    "number.base": "Payout (withdrawal) must be a number",
    "number.min": "Payout cannot be negative",
  }),
  spanMargin: Joi.number().min(0).messages({
    "number.base": "SPAN margin must be a number",
    "number.min": "SPAN margin cannot be negative",
  }),
  deliveryMargin: Joi.number().min(0).messages({
    "number.base": "Delivery margin must be a number",
    "number.min": "Delivery margin cannot be negative",
  }),
  exposure: Joi.number().min(0).messages({
    "number.base": "Exposure must be a number",
    "number.min": "Exposure cannot be negative",
  }),
  optionsPremium: Joi.number().min(0).messages({
    "number.base": "Options premium must be a number",
    "number.min": "Options premium cannot be negative",
  }),
  collateralLiquidFunds: Joi.number().min(0).messages({
    "number.base": "Collateral (liquid funds) must be a number",
    "number.min": "Collateral (liquid funds) cannot be negative",
  }),
  collateralEquity: Joi.number().min(0).messages({
    "number.base": "Collateral (equity) must be a number",
    "number.min": "Collateral (equity) cannot be negative",
  }),
}).unknown(false);

//--->> Main validation schema for Funds
const createFundsSchema = Joi.object({
  equity: segmentSchema.messages({
    "object.base": "Equity segment must be an object with financial details",
  }),

  commodity: segmentSchema.messages({
    "object.base": "Commodity segment must be an object with financial details",
  }),
}).unknown(false);

module.exports = { createFundsSchema };
