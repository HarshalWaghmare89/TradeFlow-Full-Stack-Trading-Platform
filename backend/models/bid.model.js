const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    instrument: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    eligibleQty: {
      type: Number,
      required: true,
      min: 1,
    },
    lastPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    holdingPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    auctionNo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//--->> Auto-generate auction number before validation
bidSchema.pre("validate", function () {
  if (!this.auctionNo) {
    const randomNo = Math.floor(1000 + Math.random() * 9000); //-->> Random 4-digit number
    this.auctionNo = `#${randomNo}`;
  }
});

//--->> Virtual for Holding P&L
bidSchema.virtual("holdingPL").get(function () {
  return Number(
    ((this.lastPrice - this.holdingPrice) * this.eligibleQty).toFixed(2),
  );
});

module.exports = mongoose.model("Bid", bidSchema);
