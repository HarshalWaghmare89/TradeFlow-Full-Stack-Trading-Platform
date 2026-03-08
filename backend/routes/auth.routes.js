const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { signupSchema, loginSchema } = require("../validators/user.validation");
const validate = require("../middleware/validate");

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);

module.exports = router;
