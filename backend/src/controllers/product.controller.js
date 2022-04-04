const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const Product = require("../models/product.model");

router
  .route("/")
  .post(authenticate, async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({ product, message: `product created.` });
  })
  .get(authenticate, async (req, res) => {
    const products = await Product.find()
      .populate("seller", "name role")
      .select("name price");
    res.status(200).json({ products, message: `getting all products.` });
  });

router
  .route("/:productId")
  .get(authenticate, async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json({ product, message: `getting a single product.` });
  })
  .patch(authenticate, async (req, res) => {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ product, message: `product updated successfull.` });
  })
  .delete(authenticate, async (req, res) => {
    const user = await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json({ user, message: `product deleted successfully.` });
  });

module.exports = router;
