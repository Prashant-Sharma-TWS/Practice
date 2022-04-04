const authorise = (permittedRoles) => (req, res, next) => {
  // 1. get the user
  const user = req.user;
  // 2. check if the user has permittedRoles
  let isPermitted = false;
  permittedRoles.forEach((permittedRole) => {
    if (user.role.includes(permittedRole)) isPermitted = true;
  });
  // 3. if user is not authorised => send 404
  if (!isPermitted) {
    return res
      .status(404)
      .json({ status: 404, message: `User is not authorised.` });
  }
  // 4. if user is authorised
  return next();
};

module.exports = authorise;
