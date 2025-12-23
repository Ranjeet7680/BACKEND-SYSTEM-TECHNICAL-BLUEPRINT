const redis = require("../config/redis");

exports.generateToken = async (req, res) => {
  const tokenId = Date.now();
  await redis.rpush("queue:counter:1", tokenId);
  res.json({ tokenNumber: tokenId });
};

exports.nextToken = async (req, res) => {
  const tokenId = await redis.lpop("queue:counter:1");
  res.json({ tokenId });
};

exports.serveToken = async (req, res) => {
  const lock = await redis.setnx(`serving:${req.body.tokenId}`, 1);
  if (!lock) return res.status(409).json({ msg: "Already served" });
  res.json({ status: "SERVED" });
};

exports.skipToken = async (req, res) => {
  await redis.rpush("queue:counter:1", req.body.tokenId);
  res.json({ status: "SKIPPED" });
};
