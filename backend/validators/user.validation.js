const Joi = require("joi");

//-->> Validation for user signup
const signupSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required().messages({
    "string.base": "First name must be text",
    "string.empty": "First name is required",
    "string.min": "First name must have at least 2 characters",
    "string.max": "First name cannot exceed 50 characters",
    "any.required": "First name is required",
  }),

  lastName: Joi.string().trim().min(2).max(50).required().messages({
    "string.base": "Last name must be text",
    "string.empty": "Last name is required",
    "string.min": "Last name must have at least 2 characters",
    "string.max": "Last name cannot exceed 50 characters",
    "any.required": "Last name is required",
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    "string.base": "Email must be a valid string",
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).max(128).required().messages({
    "string.base": "Password must be text",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password cannot exceed 128 characters",
    "any.required": "Password is required",
  }),
}).unknown(false);

//-->> Validation for user login
const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a valid string",
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required",
    }),

  password: Joi.string().required().messages({
    "string.base": "Password must be text",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
}).unknown(false);

module.exports = { signupSchema, loginSchema };
