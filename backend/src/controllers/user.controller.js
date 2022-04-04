const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: `Got all the user`, users });
});

router
  .route("/:userId")
  .get(async (req, res) => {
    console.log(req.user);
    const users = await User.find();
    res.status(200).json({ users });
  })
  .patch(async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users });
  })
  .delete(async (req, res) => {
    const users = await User.findByIdAndDelete();
    res.status(200).json({ users });
  });

//  param middleware
router.param("userId", async (req, res, next, userId) => {
  // finding the user
  const user = await User.findById(userId);
  req.user = user;

  console.log("param middleware");

  next();
});

module.exports = router;
