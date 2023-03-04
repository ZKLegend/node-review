const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(400).send("Invalid Username");
    return;
  }
  if (req.body.password != user.password) {
    res.status(400).send("Invalid Password");
    return;
  }
  let token = jwt.sign(
    { _id: user._id, username: user.username },
    "privateKey"
  );
  res.send({ token, message: "Login Success" });
});

module.exports = router;
