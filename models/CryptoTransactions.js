const mongoose = require("mongoose");

const cryptoTransactionsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    currency: { type: String },
    quantity: { type: String },
    orderValue: { type: String },
    timestamp: { type: Date },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model(
  "cryptoTransactions",
  cryptoTransactionsSchema
);
