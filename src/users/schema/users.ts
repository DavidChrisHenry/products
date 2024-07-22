/** @format */

import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  country: string;
  avatarURL: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  avatarURL: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
