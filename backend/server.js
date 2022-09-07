import react from "react";
import express from "express";
import data from "./GRSInventoryData.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

// dotenv.config({ path: "backend/.env" }); // enables fetching of variables in .env file

// console.log("URI: " + process.env.MONGODB_URI);
// const connect = mongoose.connect(
//   // process.env.MONGODB_URI
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ); // fetches the .env mondodb connection variable

// connect
//   .then(() => {
//     console.log("Connected to Database");
//   })
//   .catch((err) => {
//     console.log("error: " + err.message);
//   });
// // you can also install mongodb locally on your machine by going to 'install mongodb community edition
// // there is also a GUI you can install from mongodb known as 'compass'

// const app = express();

// app.use(express.json()); //converts to json
// app.use(express.urlencoded({ extended: true }));
// //now we grab the data from GRSInvetoryData which will be store according to seedRoutes.jsx

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
// }

// app.use("/api/seed", seedRouter); //this grabs the data from the server that holds the data which is located at 'localhost:/api/seed'
// app.use("/api/products", productRouter);
// app.use("/api/users", userRouter);

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message + " <= errorMessageHere" });
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`server at http://localhost:${port}`);
// });

/////////////////////////////////////////////////////////////////////////////////////////
// Tutorial MERN to Heroku
//
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import path from "path";
// dotenv.config({ path: "backend/.env" }); // enables fetching of variables in .env file. this line works if you cmd heroku-start-server in the main dir
dotenv.config(); // use this if you cd into backend/ and yarn run start, etc
// require("dotenv").config({ path: "./.env" });

// console.log("URI: " + process.env.MONGODB_URI);
const connect = mongoose.connect(
  // "mongodb+srv://Lorenzo:Bucuresti!753@grs.1vutv.mongodb.net/GRS?retryWrites=true&w=majority",
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // fetches the .env mondodb connection variable

connect
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("error: " + err.message);
  });
// you can also install mongodb locally on your machine by going to 'install mongodb community edition
// there is also a GUI you can install from mongodb known as 'compass'

const app = express();

app.use(express.json()); //converts to json
app.use(express.urlencoded({ extended: true }));
//now we grab the data from GRSInvetoryData which will be store according to seedRoutes.jsx

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/build")));
//   // app.use(express.static("build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../", "build", "index.html"));
//     console.log(path.join(__dirname, "../", "build", "index.html"));
//     // res.sendFile("germaine-r-s/build/index.html");
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API Running");
//   });
// }

app.use("/api/seed", seedRouter); //this grabs the data from the server that holds the data which is located at 'localhost:/api/seed'
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message + " <= errorMessageHere" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
