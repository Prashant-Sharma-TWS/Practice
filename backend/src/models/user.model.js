const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// encrypting password
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 8);
  return next();
});

// encrypting provided password
userSchema.methods.checkPassword = function (providedPassword) {
  return bcrypt.compareSync(providedPassword, this.password);
};

module.exports = mongoose.model("user", userSchema);
