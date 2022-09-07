import mongoose from "mongoose";

const EMPTY_STRING = "";

//new mongoose.Schema() - creates a new mongoose.schema OBJECT
// a schema is essentially the collection within the GRS database
const productSchema = new mongoose.Schema( // mongoose.schema takes 2 parameters
  // first parameters is the fields of the schema
  {
    // shcemas use 'key : value'  syntax
    // type: is the datatype that the field will be interpreted as
    // required: is whether the field can be left blank
    // unique: is whether any other instance has the same string. Cant have duplicates across all data

    id: { type: Number, required: true, unique: true },
    productCategory: { type: String, required: true },
    productSubCategory: { type: String, required: true },
    productMicroCategory: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    }, //should be true
    linkedItemName: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    }, //

    manufacturer: { type: String, required: true, unique: false },
    distributor: { type: String, required: true, unique: false },

    productBrand: { type: String, required: true, unique: false },
    productName: { type: String, required: true, unique: false },
    modelVariant: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    }, // should be true for required

    slug: {
      type: String,
      required: false,
      unique: true,
      default: () => productBrand + productName + modelVariant + storeSKU,
    }, // should be true for required

    storeSKU: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    vendorSKU: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    linkedSKU: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    itemSerial: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    inStock: {
      type: Number,
      required: false,
      unique: false,
      // default: EMPTY_STRING,
    },

    itemWeight: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    dimensions: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    freightClass: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    component1: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    duration1: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    component2: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    duration2: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    partsAndLabour: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    general: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    shortDescription: [
      { type: String, required: false, unique: false, default: EMPTY_STRING },
    ],

    gasType: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    phase: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    voltage: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    BTU: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    amps: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    additionalInfo: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    clearance: {
      type: Boolean,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    returnable: {
      type: Boolean,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    onWebsite: {
      type: Boolean,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    currency: {
      type: String,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    instorePrice: [
      { type: Number, required: false, unique: false, default: EMPTY_STRING },
    ],
    onlinePrice: [
      { type: Number, required: false, unique: false, default: EMPTY_STRING },
    ],
    cost: [
      { type: Number, required: false, unique: false, default: EMPTY_STRING },
    ],
    autoQuotesPrice: [
      { type: Number, required: false, unique: false, default: EMPTY_STRING },
    ],
    shippingPrice: [
      { type: Number, required: false, unique: false, default: EMPTY_STRING },
    ],

    marginPercentage: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    discountPercentage: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    marginDollar: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    discountDollar: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    commissionPercentage: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },
    fixedCommission: {
      type: Number,
      required: false,
      unique: false,
      default: EMPTY_STRING,
    },

    images: [
      { type: String, required: false, unique: false, default: EMPTY_STRING },
    ],

    // priceListedOnWebsite: { type: Boolean, required: true, unique: false },
  },
  //second parameter is the options. The option to add fields when something is added
  {
    timestamps: true, // automatically 2 new fields will be added to the first parameter
    //the 1st field added will be 'created at: date/time' and 2nd field  is 'updated at: date/time '
  }
);

// now to create a model based on the schema above:
// 1st param is the name of the model ('collection' in mongodb)
// 2nd param is the schema to be used in this model
const Product = mongoose.model("ProductTest", productSchema); //collection will be in all lowercase fyi
export default Product;
