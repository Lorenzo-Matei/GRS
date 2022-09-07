require('dotenv').config();

// require is a function that imports a file and its functions
 //however within the file being required at the bottom it will specify what functions can be used outside
 // those specified functions are imported by require.
 //now all the functions made available in this module/file are made available in this variable
const mongoose = require('mongoose');
// Cluster username is Lorenzo; Password: GRS-2021Database

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI, 
            {useNewURLParser: true, useUnifiedTopology: true}
            );
        console.log("MongoDB Connection SUCCESS")
    }
    catch(error) {
        console.error("MongoDB Connection FAILED");
        process.exit(1);
    }
}

module.exports = connectDB;