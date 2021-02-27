const express = require('express');

const brandController = require('../controller/brand');

const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/addbrand', brandController.getAddBrand);
router.post('/postbrand', brandController.postBrand);





module.exports = router;
