import mongoose, { Schema } from "mongoose";

const accountPasswordSchema = new Schema(
  {
    website: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AccountPassword = mongoose.model(
  "AccountPasswordSchema",
  accountPasswordSchema
);
