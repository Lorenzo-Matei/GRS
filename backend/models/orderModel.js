import mongoose from "mongoose";

const EMPTY_STRING = "";

//new mongoose.Schema() - creates a new mongoose.schema OBJECT
// a schema is essentially the collection within the GRS database
const orderSchema = new mongoose.Schema( // mongoose.schema takes 2 parameters
  // first parameters is the fields of the schema
  {
    // shcemas use 'key : value'  syntax
    // type: is the datatype that the field will be interpreted as
    // required: is whether the field can be left blank
    // unique: is whether any other instance has the same string. Cant have duplicates across all data
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        onlinePrice: { type: Number, required: true },
        storeSKU: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
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
const Order = mongoose.model("Order", orderSchema); //collection will be in all lowercase fyi

export default Order;
