const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
});

const Order = mongoose.model("order", orderSchema);

module.exports = { Order };
