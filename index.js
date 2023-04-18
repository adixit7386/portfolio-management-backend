const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const connect = require("./config/mongodb");
const mongoose = require("mongoose");
const nseStocksRouter = require("./routers/nseStocksRouter");
const cryptoTransactionsRouter = require("./routers/cryptoTransactionsRouter");
const errorHandler = require("./middleware/errorHandler");
const mFundsTransactions = require("./routers/mFundsTransactionsRouter");
const stocksTransactionsReducer = require("./routers/stocksTransactionsRouter");
const realEstateTransactionRouter = require("./routers/realEstateTransactionsRouter");
const fDepositsRouter = require("./routers/fDepositsRouter");
const cors = require("cors");
// const { saveData } = require("./controllers/nseStocks");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongoDB connected successfully ", conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};
connectDB();
// saveData();
app.get("/", (req, res) => {
  res.send("app working fine");
});
app.use("/api/user", userRouter);
app.use("/api/nseStocks", nseStocksRouter);
app.use("/api/crypto", cryptoTransactionsRouter);
app.use("/api/stocks", stocksTransactionsReducer);
app.use("/api/mfunds", mFundsTransactions);
app.use("/api/realestate", realEstateTransactionRouter);
app.use("/api/fdeposits", fDepositsRouter);

app.use(errorHandler);
const port = process.env.APP_PORT || 5000;
// const port = 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
