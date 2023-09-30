import express, { query } from "express";
import expressAsyncHandler from "express-async-handler";
import { NON_EXECUTABLE_FILE_MODE } from "patch-package/dist/patch/parse.js";
import { toast } from "react-toastify";
import Product from "../models/productModels.js";

// copied from seedRoutes and alterred to product
const productRouter = express.Router(); // creates a object from express.Router

// the '/' is the first address
productRouter.get("/", async (req, res) => {
  const products = await Product.find(); //imports all products
  res.send(products); // sends products to front end
});

////////////////////////////////  new version  ///////////////////////////////////////////////////
/////////////////////////// 2nd version of category or search Router ////////////////////////
const PAGE_SIZE = 8;
productRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE; //this evalutes how many pages of products in total there are
    const page = query.page || 1;
    const productCategory = query.category || "";
    const productSubCategory = query.subCategory || "";
    const productMicroCategory = query.microCategory || "";

    const productBrand = query.brands || "";
    const gasType = query.gasType || "";
    const phase = query.phase || "";
    const voltage = query.voltage || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all" //if query exists and query !== all
        ? {
            $text: {
              $search: searchQuery,
              $caseSensitive: false,
            },

            score: { $meta: "textScore" },
          }
        : {}; //otherwise pass an empty object

    const categoryFilter =
      productCategory && productCategory !== "all" ? { productCategory } : {};
    console.log("category Filter: ", categoryFilter);

    const subCategoryFilter =
      productSubCategory && productSubCategory !== "all"
        ? { productSubCategory }
        : {};
    console.log("subcategory Filter: ", productSubCategory);

    const microCategoryFilter =
      productMicroCategory && productMicroCategory !== "all"
        ? { productMicroCategory }
        : {};
    console.log("microCategory Filter: ", productMicroCategory);

    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    const priceFilter =
      price && price !== "all"
        ? {
            price: {
              // 1-50
              $gte: Number(price.split("-")[0]), // gte = greater than or equal to (would be 1)
              $lte: Number(price.split("-")[1]), // lte = less than or equal (would be 50)
            },
          }
        : {};
    const brandsFilter =
      productBrand && productBrand !== "all" ? { productBrand } : {};

    const gasTypeFilter = gasType && gasType !== "all" ? { gasType } : {};

    const phaseFilter = phase && phase !== "all" ? { phase } : {};

    const voltageFilter = voltage && voltage !== "all" ? { voltage } : {};

    const sortOrder =
      order === "relevant"
        ? { score: { $meta: "textScore" } }
        : order === "featured"
        ? { featured: -1 }
        : order === "ascendingPrice"
        ? { price: 1 }
        : order === "descendingPrice"
        ? { price: -1 }
        : // : order === "topRated"
        // ? { rating: -1 }
        order === "newest"
        ? { createdAt: -1 }
        : {};

    // console.log("...category filter => ", ...categoryFilter);
    const products = await Product.find({
      //this will query the products based on the filter settings.
      ...queryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...microCategoryFilter,
      ...priceFilter,
      ...brandsFilter,
      ...gasTypeFilter,
      ...phaseFilter,
      ...voltageFilter,
      // ...ratingFilter,
    })
      // applying Pagination to Product.find
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...subCategoryFilter,
      ...microCategoryFilter,
      ...priceFilter,
      // ...ratingFilter,
      ...brandsFilter,
      ...gasTypeFilter,
      ...phaseFilter,
      ...voltageFilter,
    });

    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    }); // sends products to front end
  })
);

//////////////////////////  1st version of categoryRoute  (working) /////////////////////////////////////////
productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categoriesDictObj = {};
    const categories = await Product.find().distinct("productCategory"); // finds distinct and unique categories without duplicates

    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const subCategories = await Product.find({
        // find all unique subcategories without duplicates
        productCategory: category,
      }).distinct("productSubCategory");

      const subCategoriesDictObj = {}; // creates object of sub categories
      for (
        let subCatIndex = 0;
        subCatIndex < subCategories.length;
        subCatIndex++
      ) {
        const subCategory = subCategories[subCatIndex];
        // const microCategories = …;

        subCategoriesDictObj[subCategory] = { label: subCategory };
      }
      categoriesDictObj[category] = { label: category };
      categoriesDictObj[category]["nodes"] = subCategoriesDictObj;
    }

    console.log("\nfull dictionary: \n", categoriesDictObj);

    res.send(categoriesDictObj);
  })
);
//////////////////////////  End of 1st version of categoryRoute  /////////////////////////////////////////
//////////////////////////  tree menu version of categoryRoute  () /////////////////////////////////////////
productRouter.get(
  "/categories2",
  expressAsyncHandler(async (req, res) => {
    const categoriesDictObj = { All: { label: "All", nodes: {} } };
    const categories = await Product.find().distinct("productCategory"); // finds distinct and unique categories without duplicates

    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const subCategories = await Product.find({
        // find all unique subcategories without duplicates
        productCategory: category,
      }).distinct("productSubCategory");

      const subCategoriesDictObj = {}; // creates object of sub categories
      for (
        let subCatIndex = 0;
        subCatIndex < subCategories.length;
        subCatIndex++
      ) {
        const subCategory = subCategories[subCatIndex];
        const microCategories = await Product.find({
          // productCategory: category,
          productSubCategory: subCategory,
        }).distinct("productMicroCategory");

        subCategoriesDictObj[subCategory] = { label: subCategory };

        const microCategoriesDict = {};
        for (
          let microCatIndex = 0;
          microCatIndex < microCategories.length;
          microCatIndex++
        ) {
          const microCategory = microCategories[microCatIndex];
          microCategoriesDict[microCategory] = { label: microCategory };
        }

        subCategoriesDictObj[subCategory]["nodes"] = microCategoriesDict;
      }
      categoriesDictObj[category] = { label: category };
      categoriesDictObj[category]["nodes"] = subCategoriesDictObj;
    }

    console.log("\nfull categories2 dictionary: \n", categoriesDictObj);

    //    query and organize V1:
    ////////////////////////////////////

    // let categoriesDictObj = {};

    // for (var index = 0; index < categories.length; index++) {
    //   let category = categories[index];
    //   console.log("category: ", category);

    //   const subCategories = await Product.find({
    //     productCategory: category,
    //   }).distinct("productSubCategory");

    //   console.log(category + "- subcategories: ", subCategories);

    //   categoriesDict[category] = {};
    //   console.log("\ndictionary with categories: \n", categoriesDict);
    //   console.log("\n");

    //   // categoriesDictObj = { category };

    //   for (
    //     var subCatIndex = 0;
    //     subCatIndex < subCategories.length;
    //     subCatIndex++
    //   ) {
    //     let subCategory = subCategories[subCatIndex];

    //     const microCategories = await Product.find({
    //       productMicroCategory: subCategory,
    //     }).distinct("productMicroCategory");

    //     console.log(subCategory + "- microCategories: ", microCategories);

    //     if (microCategories.length > 0) {
    //       pass;
    //     }

    //     categoriesDictObj = {
    //       ...categoriesDictObj,
    //       [category]: {
    //         ...categoriesDictObj[category],
    //         [subCategory]: subCatIndex,
    //       },
    //     };
    //   }
    //   // categoriesDictObj[category] = null;
    // }

    res.send(categoriesDictObj);
  })
);
//////////////////////////  End of 1st version of categoryRoute  /////////////////////////////////////////

productRouter.get(
  "/brands",
  expressAsyncHandler(async (req, res) => {
    const brands = await Product.find().distinct("productBrand"); // finds distinct and unique categories without duplicates
    // console.log("Brands: ", brands);
    res.send(brands);
  })
);

productRouter.get(
  "/gasType",
  expressAsyncHandler(async (req, res) => {
    const gasType = await Product.find().distinct("gasType"); // finds distinct and unique categories without duplicates
    // console.log("gasType: ", gasType);
    res.send(gasType);
  })
);

productRouter.get(
  "/phase",
  expressAsyncHandler(async (req, res) => {
    const phase = await Product.find().distinct("phase"); // finds distinct and unique categories without duplicates
    // console.log("phase: ", phase);
    res.send(phase);
  })
);

productRouter.get(
  "/voltage",
  expressAsyncHandler(async (req, res) => {
    const voltage = await Product.find().distinct("voltage"); // finds distinct and unique categories without duplicates
    // console.log("voltage: ", voltage);
    res.send(voltage);
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
