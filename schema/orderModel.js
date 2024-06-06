import productModel from "./productModel";
import userModel from "./userModel";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItems = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: productModel,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const orderSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userModel,
      required: true,
    },
    email: {
      type: String,
    },
    items: {
      type: [orderItems],
      require: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const OrderModel =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

export default OrderModel;
