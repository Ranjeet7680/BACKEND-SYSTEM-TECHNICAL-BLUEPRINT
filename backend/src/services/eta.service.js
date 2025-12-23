exports.calculateETA = (queueLength, avgTime) => {
  return queueLength * avgTime;
};
