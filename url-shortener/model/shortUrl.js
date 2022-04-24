const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: {
    type: String,
    required: true,
    default: `http://localhost:8000/${shortId.generate()}`,
  },
});

module.exports = mongoose.model("shorturl", shortUrlSchema);
