const express = require("express");
const router = express.Router();

const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");
const bidsController = require("../controllers/bids.controller");
const bidsSchema = require("../validators/bid.validation");

router.post("/", authenticate, validate(bidsSchema), bidsController.createBid);
router.get("/", authenticate, bidsController.getBids);
router.delete("/:id", authenticate, bidsController.deleteBid);

module.exports = router;
