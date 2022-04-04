module.exports = {
  logger: function (req, res, next) {
    console.log("logger: ", req.originalUrl);
    next();
  },
};
