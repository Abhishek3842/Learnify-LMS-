import mongoose, { Document, Model, Schema } from "mongoose";
import { Types } from "mongoose";

// Interface for IOrder with Types.ObjectId for courseId and userId
export interface IOrder extends Document {
  courseId: Types.ObjectId; // Use ObjectId for courseId
  userId: Types.ObjectId;   // Use ObjectId for userId
  payment_info: object;
}

const orderSchema = new Schema<IOrder>({
  courseId: {
    type: Schema.Types.ObjectId, // Use ObjectId for courseId
    required: true,
    ref: "Course", // Reference the Course model
  },
  userId: {
    type: Schema.Types.ObjectId, // Use ObjectId for userId
    required: true,
    ref: "User", // Reference the User model
  },
  payment_info: {
    type: Object,
    // required: true, // Uncomment if payment_info is required
  },
}, { timestamps: true });

const OrderModel: Model<IOrder> = mongoose.model("Order", orderSchema);

export default OrderModel;
