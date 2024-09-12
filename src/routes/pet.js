
const express = require('express');
const router = express.Router();
const pet_controller = require('../controllers/pet');

router.post('/', pet_controller.createpet);
router.get('/', pet_controller.getpets);
router.get('/:id', pet_controller.getpetById);
router.put('/:id', pet_controller.updatepet);
router.delete('/:id', pet_controller.deletepet);

module.exports = router;