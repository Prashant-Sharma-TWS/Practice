const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./model/shortUrl");

const app = express();
app.use(express.urlencoded({ extended: false })); // for getting access to parameters

mongoose.connect("mongodb://localhost/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  console.log(shortUrls);
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shorturl", async (req, res) => {
  // make a short-url
  // if made redirect to home
  // else send a 500
  try {
    await ShortUrl.create({ full: req.body.fullURL });
    res.status(201).redirect("/");
  } catch (e) {
    res.status(500).send({ status: 500, message: e.message });
  }
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({
    short: `http://localhost:8000/${req.params.shortUrl}`,
  });
  if (!shortUrl) return res.sendStatus(404);
  res.redirect(shortUrl.full);
});

app.listen(8000, () => {
  console.log("server is live at 8000");
});
