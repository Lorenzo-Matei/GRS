import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModels.js";

// copied from seedRoutes and alterred to product
const productRouter = express.Router(); // creates a object from express.Router

// the '/' is the first address
productRouter.get("/", async (req, res) => {
  const products = await Product.find(); //imports all products
  res.send(products); // sends products to front end
});

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("productCategory"); // finds distinct an unique categories without duplicates
    res.send(categories);
  })
);

//  ///////////////// moved from server.js   //////////////////////

productRouter.get("/slug/:slug", async (req, res) => {
  // backend api that returns information on a product based on the slug of the product
  const product = await Product.findOne({ slug: req.params.slug }); // queries products and looks for the data associated with the slug
  // the slug is the data entered by user in url

  if (product) {
    //if the product is found/exists
    res.send(product); //respond by sending the product to front
  } else {
    res.status(404).send({ message: "product NOT FOUND" }); // otherwise if a error status of (404) exists then send a message to the front
  }
});

productRouter.get("/:id", async (req, res) => {
  // backend api that returns information on a product based on the id of the product
  const product = await Product.findById(req.params.id); // queries products and looks for the data (key) associated with the id

  if (product) {
    //if the product is found/exists
    res.send(product); //respond by sending the product to front
  } else {
    res.status(404).send({ message: "product NOT FOUND" }); // otherwise if a error status of (404) exists then send a message to the front
  }
});
//  /////////////////   //////////////////////

export default productRouter;
