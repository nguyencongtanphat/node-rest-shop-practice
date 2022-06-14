const express = require('express');
const router = express.Router();
const products = require('../Controllers/products')
const error = require('../Controllers/site')
const upload =  require('../config/multer')
//[GET]/ ALL PRODUCTS
router.get('/', products.productsGetAll, error.errorHandler)

//[POST]/ CREATE PRODUCT
router.post('/', upload.single('productImage'),products.productCreate , error.errorHandler)

/////-----detail-----

//[GET]/ DETAIL PRODUCTS
router.get('/:id', products.productsGetDetail, error.errorHandler)

//[PATCH]/ UPDATE PRODUCT
router.patch('/:id', products.productUpdate)

//[DELETE]/ DELETE PRODUCT
router.delete('/:id', products.productDelete)

module.exports = router