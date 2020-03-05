const express = require("express");
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.newPlant);
router.post('/', plantsCtrl.create);
router.get('/:id', plantsCtrl.show);
router.delete('/:id', plantsCtrl.delete);


module.exports = router;
