const jwt = require("jsonwebtoken");

module.exports = function newToken(user) {
  return jwt.sign({ user }, process.env.JWT_PRIVATE_KEY);
};
