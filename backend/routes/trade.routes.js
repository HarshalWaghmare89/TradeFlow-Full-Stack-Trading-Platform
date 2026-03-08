const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const tradeController = require("../controllers/trade.controller");
const { executeTradeSchema } = require("../validators/trade.validation");
const validate = require("../middleware/validate");

router.post(
  "/execute",
  authenticate,
  validate(executeTradeSchema),
  tradeController.executeTrade,
);

module.exports = router;
