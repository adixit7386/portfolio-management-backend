const mongoose = require("mongoose");

const RealEstateTransactionsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String },
    description: { type: String },
    address: { type: String },
    purchaseValue: { type: String },
    timestamp: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model(
  "RealEstateTransactions",
  RealEstateTransactionsSchema
);
