const mongoose = require("mongoose");
const express = require("express");
const app = express();

const inventory = require("./routes/inventory");
const userLogin = require("./routes/user");
const order = require("./routes/order");

mongoose
  .connect("mongodb://localhost:27017/web63-final")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/inventory", inventory);
app.use("/api/login", userLogin);
app.use("/api/order", order);

app.listen(3000, () => {
  console.log("App is running at 3000");
});
