const express = require("express");
const createStocksTransactionsControllers = require("../controllers/stocks/createStocksTransactionsControllers");
const getStocksTransactionsControllers = require("../controllers/stocks/getStocksTransactionsControllers");
const createMultipleStocksTransactionsControllers = require("../controllers/stocks/createMultipleStocksTransactionsControllers.js");
const updateStocksTransactionsControllers = require("../controllers/stocks/updateStocksTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createStocksTransactionsControllers);
router.get("/get", verifyToken, getStocksTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleStocksTransactionsControllers
);
router.put("/update", verifyToken, updateStocksTransactionsControllers);

module.exports = router;
