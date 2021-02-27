const Brand = require('../model/brand');
const Author = require('../model/author');


exports.getAddBrand = (req, res, next) => {
    res.render('brand/brand', {
        errorMessage: '',
    });
};


exports.postBrand = (req, res, next) => {
    const getBrand = req.body.brand;
    const brand = new Brand(null, getBrand);
    brand.save()
        .then((user) => {
            res.redirect('/');
        })
        .catch((err) => console.log(err));
};


