const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order');

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrder);
router.put('/:id', OrderController.EditOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;