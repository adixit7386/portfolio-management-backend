const express = require("express");
const createCryptoTransactionsControllers = require("../controllers/createCryptoTransactionsControllers");
const getCryptoTransactionsControllers = require("../controllers/getCryptoTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", createCryptoTransactionsControllers);
router.get("/get", verifyToken, getCryptoTransactionsControllers);

module.exports = router;
