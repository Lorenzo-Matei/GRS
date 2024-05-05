import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
//node version before update 16.13.1
/////////////////////////////////////////////////////////////////////////////////////////
// Tutorial MERN to Heroku
//
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import path from "path";

import emailRouter from "./routes/emailRoutes.js";
// dotenv.config({ path: "backend/.env" }); // enables fetching of variables in .env file. this line works if you cmd heroku-start-server in the main dir
dotenv.config(); // use this if you cd into backend/ and yarn run start, etc
// require("dotenv").config({ path: "./.env" });

// const bodyParser = require("body-parser");
// const cors = require("cors");

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
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
// }

/////////////////////////////////////////////////////////////////
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
app.use("/api/orders", orderRouter);
app.use("/api/email", emailRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "..", "build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message + " <= errorMessageHere" });
});

const port = process.env.PORT || 5000;

// nodeMailer
app.use(bodyParser.json());
app.use(cors());

// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
