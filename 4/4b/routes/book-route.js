

const express = require('express');

const bookController = require('../controller/book');

const router = express.Router();


// // /admin/products => GET
router.get('/', bookController.getBookList);
router.get('/add-book', bookController.getAddBook);
// router.post('/add-car', carController.postAddCar);
// // router.get('/get-article/:carId', carController.getArticle);


module.exports = router;
