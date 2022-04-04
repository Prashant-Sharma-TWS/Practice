const router = require("express").Router();
const User = require("../models/user.model");
const newToken = require("../configs/jwt");

router.post("/register", async (req, res) => {
  try {
    // 1. check if user is registered or not
    let user = await User.exists({ email: req.body.email });
    // 2. if registered => send 404
    if (user) {
      return res
        .status(404)
        .json({ status: 404, message: `Email is registered.` });
    }
    // 3. if not => create user
    user = await User.create(req.body);
    return res
      .status(201)
      .json({ token: newToken(user), message: `User created.` });
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // 1. check if user is registered or not
    const user = await User.findOne({ email: req.body.email });
    // 2. if not registered => send 404
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: `Email is wrong or register first.` });
    }
    // 3. if registered => check if password is matching
    const isMatching = user.checkPassword(req.body.password);
    // 4. if not matching => send 404
    if (!isMatching) {
      return res
        .status(404)
        .json({ status: 404, message: `Password is wrong.` });
    }
    // 5. if matching => send a token
    return res
      .status(201)
      .json({ token: newToken(user), message: `Login successfull.` });
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
});

module.exports = router;
