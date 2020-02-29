const express = require("express");
const router = express.Router();
const plantsCtrl = require("../controllers/plants");

router.get("/", plantsCtrl.index);

module.exports = router;
