import express from "express";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    // this catches the error inside async function
    // if an error occurs you can then handle it in the server.js

    const user = await User.findOne({ email: req.body.email }); //return the doc based on email
    if (user) {
      //if user exists
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //checks password with the account
        //first param (req.body.password) is the password entere by user
        // second password is the one in db

        //if the info checks out then all the info is sent back to the user
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user), // passes only the info listed in generateToken object instead or all user info
        });
        return; //this stop the script running after having sent the data
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
export default userRouter;
