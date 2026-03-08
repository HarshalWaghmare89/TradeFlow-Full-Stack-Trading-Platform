const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const { createOrderSchema } = require("../validators/order.validation");
const ordersController = require("../controllers/orders.controller");

router.post(
  "/",
  authenticate,
  validate(createOrderSchema),
  ordersController.createOrder,
);
router.get("/", authenticate, ordersController.getOrders);

module.exports = router;
