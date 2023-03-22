const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

router.route("/").get(warehouseController.index); // get all warehouses

module.exports = router;
