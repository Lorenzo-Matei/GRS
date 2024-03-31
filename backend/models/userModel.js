import mongoose from "mongoose";

const EMPTY_STRING = "";

//new mongoose.Schema() - creates a new mongoose.schema OBJECT
// a schema is essentially the collection within the GRS database
const userSchema = new mongoose.Schema( // mongoose.schema takes 2 parameters
  // first parameters is the fields of the schema
  {
    // shcemas use 'key : value'  syntax
    // type: is the datatype that the field will be interpreted as
    // required: is whether the field can be left blank
    // unique: is whether any other instance has the same string. Cant have duplicates across all data
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: { type: String, required: true },
    businessName: { type: String, required: false },
    address: { type: String, Required: false },
    city: { type: String, required: false },
    postalCode: { type: String, Required: false },
    country: { type: String, Required: false },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
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
const User = mongoose.model("User", userSchema); //collection will be in all lowercase fyi

export default User;
