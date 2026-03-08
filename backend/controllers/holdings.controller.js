const Holding = require("../models/holding.model");

//--->> create
exports.createHolding = async (req, res) => {
  try {
    const holding = await Holding.create({ ...req.body, user: req.user.id });
    res.json({ success: true, holding });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//--->> get
exports.getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({ user: req.user.id });
    res.json({ success: true, holdings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
