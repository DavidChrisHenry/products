/** @format */

import { Schema, model, Document } from "mongoose";

export interface IUserProduct extends Document {
  userId: string;
  productId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const userProductSchema = new Schema<IUserProduct>(
  {
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    status: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

const UserProduct = model<IUserProduct>(
  "UserProductJunction",
  userProductSchema
);

export default UserProduct;
