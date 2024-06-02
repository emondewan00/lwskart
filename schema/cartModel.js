const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for an item in the shopping cart
const CartItemSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

// Schema for the shopping cart
const CartSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
    },
    items: {
      type: [CartItemSchema],
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Cart || mongoose.model("Cart", CartSchema);
