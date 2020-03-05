const express = require("express");
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.newPlant);
router.get('/:id', plantsCtrl.show);
router.get('/:id/edit', plantsCtrl.edit);
router.put('/:id/update', plantsCtrl.update);
router.post('/', plantsCtrl.create);
router.post('/:id/reviews', plantsCtrl.addReview);
router.delete('/:id', plantsCtrl.delete);



module.exports = router;
