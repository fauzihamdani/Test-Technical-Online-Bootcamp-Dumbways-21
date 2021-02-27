const express = require('express');

const categoryController = require('../controller/category');

const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/addcategory', categoryController.getAddCategory);
router.post('/postcategory', categoryController.postCategory);
router.post('/update-category', categoryController.getUpdate);
router.post('/delete-category', categoryController.deleteCategory);
router.post('/updated-category', categoryController.updatedCategory);




module.exports = router;
