import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";
import mongoose from "mongoose";

// @desc Fetch all products
// @route Get /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc Fetch single product
// @route Get /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //if id incorrect
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(404);
      throw new Error("Product Id invalid");
    }

    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ nessage: "Product not found" });
      throw new Error("Product not found");
    }
  })
);

export default router;
