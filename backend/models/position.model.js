const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: String,
      enum: ["NRML", "MIS", "CNC"],
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

    exchange: {
      type: String,
      required: true,
      enum: ["NSE", "BSE", "CDS", "MCX"],
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
    avgPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Position", positionSchema);
