const mongoose = require("mongoose");

const stocksTransactionsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    symbol: { type: String },
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
  "stocksTransactions",
  stocksTransactionsSchema
);
