const express = require("express");
const getStocksControllers = require("../controllers/getStocksControllers");
const router = express.Router();
router.get("/find", getStocksControllers);

module.exports = router;
