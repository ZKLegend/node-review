const jwt = require("jsonwebtoken");

const authorizeUser = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send("Unauthorized");
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "privateKey");
    if (decoded) {
      next();
    }
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

exports.authorizeUser = authorizeUser;
