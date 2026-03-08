const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const { createHoldingSchema } = require("../validators/holding.validation");
const holdingsController = require("../controllers/holdings.controller");

router.post(
  "/",
  authenticate,
  validate(createHoldingSchema),
  holdingsController.createHolding,
);
router.get("/", authenticate, holdingsController.getHoldings);

module.exports = router;
