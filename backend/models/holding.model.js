const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema(
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

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    avgCost: {
      type: Number,
      required: true,
      min: 0,
    },

    ltp: {
      type: Number,
      required: true,
      min: 0,
    },

    prevClose: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

holdingSchema.index({ user: 1, instrument: 1 }, { unique: true });

module.exports = mongoose.model("Holding", holdingSchema);
