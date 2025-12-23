const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const token = jwt.sign(
    { id: "userId", role: "ADMIN" },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
  res.json({ token });
};
