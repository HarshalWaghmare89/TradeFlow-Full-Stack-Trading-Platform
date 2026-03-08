const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const fundsController = require("../controllers/funds.controller");
const validate = require("../middleware/validate");
const { createFundsSchema } = require("../validators/fund.validation");

router.post(
  "/",
  authenticate,
  validate(createFundsSchema),
  fundsController.updateFunds,
);
router.get("/", authenticate, fundsController.getFunds);

module.exports = router;
