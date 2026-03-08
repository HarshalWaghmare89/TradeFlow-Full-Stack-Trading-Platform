const Fund = require("../models/fund.model");

//--->> Get user funds
exports.getFunds = async (req, res) => {
  try {
    const userId = req.user.id;

    let fund = await Fund.findOne({ user: userId });

    if (!fund) {
      fund = new Fund({
        user: userId,
        equity: { availableCash: 0 },
        commodity: { availableCash: 0 },
      });

      await fund.save();
    }

    return res.json({ success: true, funds: [fund] });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

//--->> Update funds: add or withdraw
exports.updateFunds = async (req, res) => {
  try {
    const userId = req.user.id;
    const { equity, commodity } = req.body;

    let fund = await Fund.findOne({ user: userId });

    if (!fund) {
      fund = new Fund({ user: userId });
    }

    // ======== Handle Equity ========
    if (equity?.availableCash !== undefined) {
      const newEquityCash = equity.availableCash;

      if (newEquityCash < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Insufficient equity funds" });
      }

      fund.equity.availableCash = newEquityCash;
    }

    // ======== Handle Commodity ========
    if (commodity?.availableCash !== undefined) {
      const newCommodityCash = commodity.availableCash;

      if (newCommodityCash < 0) {
        return res
          .status(400)
          .json({ success: false, message: "Insufficient commodity funds" });
      }

      fund.commodity.availableCash = newCommodityCash;
    }

    await fund.save();

    return res.json({ success: true, fund });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
