import express from "express";
import dotenv from "dotenv";
import Order from "../models/orderModel.js";
import { sendEmail } from "../utils/sendEmail.js";
import emailTemplates from "../email/emailTemplates.js";
import bodyParser from "body-parser";
import cors from "cors";

const emailRouter = express.Router();
emailRouter.use(bodyParser.json());
// const corsOptions = {
//   origin: "http://localhost:5000", // Replace with your React app's URL
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
emailRouter.use(cors());

emailRouter.post("/sendOrderConfirmation", async (req, res) => {
  const data = req.body.order;
  //   const newOrder = new Order({
  //     orderItems: data.order.orderItems.map((x) => ({ ...x, product: x._id })),
  //     shippingAddress: data.shippingAddress,
  //     paymentMethod: data.paymentMethod,
  //     itemsPrice: data.itemsPrice,
  //     shippingPrice: data.shippingPrice,
  //     taxPrice: data.taxPrice,
  //     totalPrice: data.totalPrice,
  //     user: data._id,
  //   });

  try {
    console.log("data passed into api: ", data);
    // console.log("emailRoutes data: ", newOrder);

    const send_to = process.env.EMAIL_USER;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = process.env.EMAIL_USER;
    const subject = "Order Confirmation";
    const message = emailTemplates.orderConfirmation(data);

    await sendEmail(subject, message, send_to, sent_from, reply_to);

    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default emailRouter;
