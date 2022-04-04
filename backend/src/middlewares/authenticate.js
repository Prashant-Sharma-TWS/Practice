const jwt = require("jsonwebtoken");

const getUserByToken = (token) => {
  return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
};

const authenticate = async (req, res, next) => {
  try {
    // 1. get accesstoken from headers
    const { accesstoken } = req.headers;
    // 2. if no accesstoken => send 404
    if (!(accesstoken && accesstoken.startsWith("Bearer "))) {
      return res
        .status(404)
        .json({ status: 404, message: `User is not authenticated.` });
    }
    // 3. if accesstoken => get user by token
    const token = accesstoken.split(" ")[1];
    try {
      const user = getUserByToken(token);

      req.user = user.user;

      return next();
    } catch (e) {
      return res.status(404).json({ status: 404, message: `Token is wrong.` });
    }
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

module.exports = authenticate;
