import express from "express";
import Product from "../models/productModels.js";
import data from "../GRSInventoryData.js";
import userData from "../GRSUserData.js";
import User from "../models/userModel.js";
// import mongoose from "mongoose";

const seedRouter = express.Router(); // creates a object from express.Router
// 1st param is path
// 2nd param is async funtion that is defined in param
seedRouter.get("/", async (req, res) => {
  // first we need to remove previous records of products and create a blank object
  await Product.deleteMany({}); // empty object '{}' means return all models within Product
  // all products will come from productData.jsx
  const createdProducts = await Product.insertMany(data.testProducts);
  // first we need to remove previous records of products and create a blank object

  await User.deleteMany({}); // empty object '{}' means return all models within Product
  const createdUsers = await User.insertMany(userData.users);

  res.send({ createdProducts, createdUsers }); //this sends products to the front end
});

export default seedRouter;
