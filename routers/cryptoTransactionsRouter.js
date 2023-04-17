const express = require("express");
const createCryptoTransactionsControllers = require("../controllers/crypto/createCryptoTransactionsControllers");
const getCryptoTransactionsControllers = require("../controllers/crypto/getCryptoTransactionsControllers");
const createMultipleCryptoTransactionsControllers = require("../controllers/crypto/createMultipleCryptoTransactionsControllers.js");
const updateCryptoTransactionsControllers = require("../controllers/crypto/updateCryptoTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createCryptoTransactionsControllers);
router.get("/get", verifyToken, getCryptoTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleCryptoTransactionsControllers
);
router.put("/update", verifyToken, updateCryptoTransactionsControllers);

module.exports = router;
