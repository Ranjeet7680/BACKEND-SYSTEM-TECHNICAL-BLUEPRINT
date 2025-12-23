const jwt = require("jsonwebtoken");

module.exports = (role) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  const data = jwt.verify(token, process.env.JWT_SECRET);
  if (role && data.role !== role) return res.sendStatus(403);
  req.user = data;
  next();
};
