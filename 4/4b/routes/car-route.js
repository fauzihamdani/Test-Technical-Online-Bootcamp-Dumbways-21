

const express = require('express');

const carController = require('../controller/car');

const router = express.Router();


// /admin/products => GET
router.get('/', carController.getCarList);
router.get('/add-car', carController.getAddCar);
router.post('/add-car', carController.postAddCar);
// router.get('/get-article/:carId', carController.getArticle);


module.exports = router;
