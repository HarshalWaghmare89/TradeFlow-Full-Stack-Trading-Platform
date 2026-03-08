const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const { createPositionSchema } = require("../validators/position.validation");
const positionsController = require("../controllers/positions.controller");

router.post(
  "/",
  authenticate,
  validate(createPositionSchema),
  positionsController.createPosition,
);
router.get("/", authenticate, positionsController.getPositions);

module.exports = router;
