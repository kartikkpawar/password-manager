import mongoose, { Schema } from "mongoose";

const bankCard = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expMonth: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BankCard = mongoose.model("BankCardSchema", bankCard);
