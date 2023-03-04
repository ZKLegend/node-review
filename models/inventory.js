const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  sku: String,
  description: String,
  instock: Number,
});

const Inventory = mongoose.model("inventory", inventorySchema);

module.exports = { Inventory };
