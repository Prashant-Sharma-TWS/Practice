require("dotenv").config();
const express = require("express");
const cors = require("cors");

// express app
const app = express();

const authController = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

// middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", authController);
app.use("/users", userController);
app.use("/products", productController);

// connecting to mongodb with mongoose
const connect = require("./configs/connect.mongoose");

app.listen(process.env.PORT, async () => {
  await connect();
  console.log("server is live at: ", process.env.PORT);
});
