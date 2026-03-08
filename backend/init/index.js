require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js");

const User = require("../models/user.model.js");
const Orders = require("../models/order.model.js");
const Holdings = require("../models/holding.model.js");
const Positions = require("../models/position.model.js");
const Bids = require("../models/bid.model.js");
const Funds = require("../models/fund.model.js");

const uri = process.env.MONGO_URI;

//---------->>> Connecting DB
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

//-------->>> Insert Query
const storeData = async () => {
  try {
    // await User.create(initData.userdata);

    await Holdings.insertMany(initData.holdingsdata);
    await Positions.insertMany(initData.positionsdata);
    await Bids.insertMany(initData.bidsdata);
    await Orders.insertMany(initData.ordersdata);
    await Funds.insertMany(initData.fundsdata);

    console.log("All data added successfully!");
  } catch (error) {
    console.error("Error inserting data:", error.message);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

connectDB().then(() => storeData());
