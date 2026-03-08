const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
      uppercase: true,
      trim: true,
    },

    instrument: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    product: {
      type: String,
      enum: ["NRML", "MIS", "CNC"],
      required: true,
      uppercase: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    ltp: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["OPEN", "REJECTED", "CANCELLED", "COMPLETE"],
      default: "OPEN",
      uppercase: true,
      trim: true,
    },

    exchange: {
      type: String,
      enum: ["NSE", "BSE", "CDS", "MCX"],
      required: true,
      uppercase: true,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
