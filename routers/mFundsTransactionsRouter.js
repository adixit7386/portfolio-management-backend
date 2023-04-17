const express = require("express");
const createMFundsTransactionsControllers = require("../controllers/createMFundsTransactionsControllers");
const getMFundsTransactionsControllers = require("../controllers/getMFundsTransactionsControllers");
const createMultipleMFundsTransactionsControllers = require("../controllers/createMultipleMFundsTransactionsControllers.js");
const updateMFundsTransactionsControllers = require("../controllers/updateMFundsTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createMFundsTransactionsControllers);
router.get("/get", verifyToken, getMFundsTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleMFundsTransactionsControllers
);
router.put("/update", verifyToken, updateMFundsTransactionsControllers);

module.exports = router;
