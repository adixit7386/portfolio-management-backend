const express = require("express");
const createStocksTransactionsControllers = require("../controllers/createStocksTransactionsControllers");
const getStocksTransactionsControllers = require("../controllers/getStocksTransactionsControllers");
const createMultipleStocksTransactionsControllers = require("../controllers/createMultipleStocksTransactionsControllers.js");
const updateStocksTransactionsControllers = require("../controllers/updateStocksTransactionsControllers");
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
