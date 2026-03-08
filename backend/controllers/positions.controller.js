const Position = require("../models/position.model");

//--->> create
exports.createPosition = async (req, res) => {
  try {
    const position = await Position.create({ ...req.body, user: req.user.id });
    res.json({ success: true, position });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//--->> get
exports.getPositions = async (req, res) => {
  try {
    const positions = await Position.find({ user: req.user.id });
    res.json({ success: true, positions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
