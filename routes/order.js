const { Order } = require("../models/order");
const { authorizeUser } = require("../middleware");
const express = require("express");
const router = express.Router();

router.get("/", authorizeUser, async (req, res) => {
  const query = {
    from: "inventories",
    localField: "item",
    foreignField: "sku",
    as: "description",
    pipeline: [{ $project: { description: 1 } }],
  };
  const order = await Order.aggregate()
    .lookup(query)
    .unwind({ path: "$description" });
  res.send(order);
});

module.exports = router;
