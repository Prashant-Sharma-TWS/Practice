require("dotenv").config();
const express = require("express");

// express app
const app = express();

const userController = require("./controllers/user.controller");
const { logger } = require("./middlewares/middleware");

// middlewares
app.use(express.json()); // for parsing json body
app.use(express.urlencoded({ extended: true })); // for parsing form body
app.use(logger);

// rendering file on filename route => /gotostatic.html
app.use(express.static("public"));

app.use("/users", userController);

app.listen(process.env.PORT, () => {
  console.log("server is live at: ", process.env.PORT);
});
