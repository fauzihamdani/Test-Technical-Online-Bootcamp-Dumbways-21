
const Car = require('../model/car');
const Author = require('../model/author');
const Brand = require('../model/brand');


exports.getCarList = (req, res, next) => {
    Car.fetchAll()
        .then(([car, fieldData]) => {

            res.render('car/car-list', {
                cars: car,
                pageTitle: 'Car List',
            });
        }
        )
        .catch(err => console.log(err));
};

exports.getAddCar = (req, res, next) => {
    Brand.fetchAll()
        .then(([brandRows, fieldData]) => {
            res.render('car/add-car', {
                brands: brandRows,
            });

        }
        )
        .catch(err => console.log(err));
};

exports.postAddCar = (req, res, next) => {
    const carName = req.body.carName;
    const brand = req.body.brand;
    const image = req.file;
    const color = req.body.color;
    const description = req.body.description;
    const create_time = new Date().toISOString();
    const update_time = new Date().toISOString();
    const stock = req.body.stock;

    const brandId = parseInt(brand);
    const imageUrl = image.path;

    const car = new Car(null, carName, brand, imageUrl, color, description, create_time, update_time, stock);

    car.save()
        .then(() => {

            res.redirect('/');
        }
        )
        .catch(err => console.log(err));
};


// exports.getArticle = (req, res, next) => {
//     const artikelId = req.params;


//     Artikel.findById(artikelId.artikelId)
//         .then((artikel) => {

//             Category.fetchAll().then(([categoryRows]) => {
//                 res.render('artikel/edit-article', {
//                     artikel: artikel[0],
//                     categories: categoryRows
//                 });
//             });


//         }
//         )
//         .catch(err => console.log(err));

// };


// Artikel.findById(artikelId.artikelId)
// .then((artikel) => {

//     Category.fetchAll().then(([categoryRows]) => {
//         res.render('artikel/edit-article', {
//             artikel: artikel[0],
//             categories: categoryRows
//         });
//     });


// }
// )
// .catch(err => console.log(err));