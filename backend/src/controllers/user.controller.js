const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json(`getting user`);
  })
  .post((req, res) => {
    res.status(200).json(`posting user`);
  });

router
  .route("/:userId")
  .get((req, res) => {
    res.status(200).json(`getting user by id ${req.params.userId}`);
  })
  .patch((req, res) => {
    res.status(200).json(`updating user by id ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.status(200).json(`deleting user by id ${req.params.userId}`);
  });

//  param middleware => saves from writing code again & again
router.param("userId", (req, res, next, userId) => {
  console.log(`using the param middleware for user ${userId}`);

  const users = ["first user", "second user", "third user"];
  req.users = users[userId - 1];
  console.log(req.users);
  next();
});

module.exports = router;
