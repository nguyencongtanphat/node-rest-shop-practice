const express = require('express');
const router = express.Router();
const orders = require('../Controllers/orders')
const error = require('../Controllers/site')
//[GET]/ ALL ORDERS
router.get('/', orders.ordersGetAll, error.errorHandler)

//[POST]/ CREATE ORDER
router.post('/', orders.orderCreate, error.errorHandler)

/////-----detail-----

//[GET]/ DETAIL ORDER
router.get('/:id', orders.ordersGetDetail, error.errorHandler)

//[DELETE]/ DELETE PRODUCT
router.delete('/:id', orders.orderDelete, error.errorHandler)

module.exports = router