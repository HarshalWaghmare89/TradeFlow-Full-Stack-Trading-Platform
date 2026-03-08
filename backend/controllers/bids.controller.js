const Bid = require("../models/bid.model");

//--->> Create Bid
exports.createBid = async (req, res) => {
  try {
    const bid = await Bid.create({
      ...req.body,
      user: req.user.id,
    });

    res.json({ success: true, bid });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//--->> Get All Bids for logged-in user
exports.getBids = async (req, res) => {
  try {
    const bids = await Bid.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json({ success: true, bids });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//--->> Delete Bid (optional)
exports.deleteBid = async (req, res) => {
  try {
    const bid = await Bid.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!bid)
      return res.status(404).json({ success: false, message: "Bid not found" });

    res.json({ success: true, message: "Bid deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
