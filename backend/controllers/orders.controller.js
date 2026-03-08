const Order = require("../models/order.model");

//--->> create
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, user: req.user.id });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//---->> get
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
