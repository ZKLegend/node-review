const { Inventory } = require("../models/inventory");
const { authorizeUser } = require("../middleware");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.get("/", authorizeUser, async (req, res) => {
  const inventory = await Inventory.find({ instock: { $lt: 100 } });
  res.send(inventory);
});

module.exports = router;
