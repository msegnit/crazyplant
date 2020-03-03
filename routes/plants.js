const express = require("express");
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/new', plantsCtrl.newPlant);
module.exports = router;
