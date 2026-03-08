const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema(
  {
    openingBalance: { type: Number, default: 0 },
    availableCash: { type: Number, default: 0 },
    payin: { type: Number, default: 0 },
    payout: { type: Number, default: 0 },

    spanMargin: { type: Number, default: 0 },
    deliveryMargin: { type: Number, default: 0 },
    exposure: { type: Number, default: 0 },
    optionsPremium: { type: Number, default: 0 },

    collateralLiquidFunds: { type: Number, default: 0 },
    collateralEquity: { type: Number, default: 0 },
  },
  { _id: false },
);

const fundSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    equity: { type: segmentSchema, default: () => ({}) },
    commodity: { type: segmentSchema, default: () => ({}) },
  },
  { timestamps: true },
);

//-->> each user can have only single funds document
fundSchema.index({ user: 1 }, { unique: true });

module.exports = mongoose.model("Funds", fundSchema);
