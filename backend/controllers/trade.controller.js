const mongoose = require("mongoose");
const Order = require("../models/order.model");
const Holding = require("../models/holding.model");
const Position = require("../models/position.model");
const Bid = require("../models/bid.model");

exports.executeTrade = async (req, res) => {
  const { instrument, quantity, price, mode, product, exchange } = req.body;
  const userId = req.user.id;

  // ---- Validation ----
  if (
    !instrument ||
    !mode ||
    !product ||
    !exchange ||
    isNaN(quantity) ||
    isNaN(price) ||
    quantity <= 0 ||
    price <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required and must be positive numbers",
    });
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // ---- Create Order ----
    const [order] = await Order.create(
      [
        {
          user: userId,
          instrument,
          quantity,
          price,
          ltp: price,
          type: mode,
          product,
          status: "COMPLETE",
          exchange,
        },
      ],
      { session },
    );

    // ================= BUY =================
    if (mode === "BUY") {
      // ---- Update or create Holding ----
      const holding = await Holding.findOneAndUpdate(
        { user: userId, instrument },
        {
          $inc: { quantity },
          $set: { ltp: price },
          $setOnInsert: { avgCost: price, prevClose: price },
        },
        { session, new: true, upsert: true },
      );

      //--->> Recalculate avgCost for existing holding
      if (holding.quantity !== quantity) {
        // existing holding
        holding.avgCost =
          (holding.avgCost * (holding.quantity - quantity) + price * quantity) /
          holding.quantity;
        await holding.save({ session });
      }

      // ---- Update or create Position ----
      const position = await Position.findOneAndUpdate(
        { user: userId, instrument },
        {
          $inc: { quantity },
          $set: { ltp: price, product, exchange },
          $setOnInsert: { avgPrice: price, realizedPnl: 0 },
        },
        { session, new: true, upsert: true },
      );

      //--->> Recalculate avgPrice for existing position
      if (position.quantity !== quantity) {
        position.avgPrice =
          (position.avgPrice * (position.quantity - quantity) +
            price * quantity) /
          position.quantity;
        await position.save({ session });
      }

      // ---- Create Bid ----
      const [bid] = await Bid.create(
        [
          {
            user: userId,
            instrument,
            eligibleQty: quantity,
            lastPrice: price,
            holdingPrice: holding.avgCost,
          },
        ],
        { session },
      );

      await session.commitTransaction();
      return res.json({ success: true, order, holding, position, bid });
    }

    // ================= SELL =================
    if (mode === "SELL") {
      let remainingQty = quantity;

      const holding = await Holding.findOne(
        { user: userId, instrument },
        null,
        { session },
      );
      if (!holding || holding.quantity < quantity) {
        await session.abortTransaction();
        return res
          .status(400)
          .json({ success: false, message: "Insufficient holdings to sell" });
      }

      const realizedPnl = (price - holding.avgCost) * quantity;
      const holdingRemaining = holding.quantity - quantity;

      // ---- Update or delete Holding ----
      if (holdingRemaining <= 0) {
        await holding.deleteOne({ session });
      } else {
        await Holding.findByIdAndUpdate(
          holding._id,
          { $inc: { quantity: -quantity }, $set: { ltp: price } },
          { session },
        );
      }

      // ---- Update or delete Position ----
      const position = await Position.findOne(
        { user: userId, instrument },
        null,
        { session },
      );
      if (position) {
        const posRemaining = position.quantity - quantity;
        if (posRemaining <= 0) {
          //-->> Save final realized P&L before deleting
          await Position.findByIdAndDelete(position._id, { session });
        } else {
          await Position.findByIdAndUpdate(
            position._id,
            {
              $inc: { quantity: -quantity, realizedPnl },
              $set: { ltp: price },
            },
            { session },
          );
        }
      }

      // ---- Reduce Bids ----
      const bids = await Bid.find({ user: userId, instrument }, null, {
        session,
      });
      for (const bid of bids) {
        if (remainingQty <= 0) break;

        if (bid.eligibleQty <= remainingQty) {
          remainingQty -= bid.eligibleQty;
          await bid.deleteOne({ session });
        } else {
          bid.eligibleQty -= remainingQty;
          await bid.save({ session });
          remainingQty = 0;
        }
      }

      const updatedBids = await Bid.find({ user: userId, instrument }, null, {
        session,
      });

      await session.commitTransaction();
      return res.json({
        success: true,
        order,
        holding: holdingRemaining > 0 ? holding : null,
        position: position && position.quantity > 0 ? position : null,
        bids: updatedBids,
      });
    }
  } catch (err) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    return res.status(500).json({ success: false, message: err.message });
  } finally {
    session.endSession();
  }
};
