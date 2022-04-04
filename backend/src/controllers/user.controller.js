const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: `Got all the user`, users });
});

router
  .route("/:userId")
  .get(async (req, res) => {
    const user = req.user;
    res.status(200).json({ user, message: `getting a single user.` });
  })
  .patch(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    res.status(200).json({ user, message: `user updated successfull.` });
  })
  .delete(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({ user, message: `user deleted successfully.` });
  });

//  param middleware
router.param("userId", async (req, res, next, userId) => {
  // finding the user
  const user = await User.findById(userId);
  req.user = user;
  next();
});

module.exports = router;
