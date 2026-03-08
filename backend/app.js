require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//----->>  Import routes
const authRoutes = require("./routes/auth.routes");
const ordersRoutes = require("./routes/orders.routes");
const holdingsRoutes = require("./routes/holdings.routes");
const positionsRoutes = require("./routes/positions.routes");
const bidsRoutes = require("./routes/bids.routes");
const fundsRoutes = require("./routes/funds.routes");
const tradeRoutes = require("./routes/trade.routes");

const app = express();

// ---------- Middleware ----------
app.use(cors()); //--->> Allow frontend requests
app.use(helmet()); //--->> Security headers
app.use(morgan("dev")); //--->> HTTP request logging
app.use(express.json()); //--->> Parse JSON body

// ---------- Routes ----------
app.use("/api/auth", authRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/holdings", holdingsRoutes);
app.use("/api/positions", positionsRoutes);
app.use("/api/bids", bidsRoutes);
app.use("/api/funds", fundsRoutes);
app.use("/api/trade", tradeRoutes);

//----->> 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route Not Found" });
});

// ---------- Global Error Handler ----------
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

module.exports = app;
