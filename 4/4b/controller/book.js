
const Book = require('../model/book');
const Category = require('../model/category');
// const Author = require('../model/author');
// const Brand = require('../model/brand');


exports.getBookList = (req, res, next) => {
    Book.fetchAll()
        .then(([books, fieldData]) => {
            console.log(books);
            res.render('book/book-list', {
                books: books,
                pageTitle: 'Book List',
            });
        }
        )
        .catch(err => console.log(err));
};

exports.getAddBook = (req, res, next) => {
    Category.fetchAll()
        .then(([categoryRows, fieldData]) => {
            res.render('book/add-book', {
                categories: categoryRows,
            });

        }
        )
        .catch(err => console.log(err));
};

exports.postAddBook = (req, res, next) => {
    const bookName = req.body.bookName;
    const bookStock = req.body.bookStock;
    const image = req.file;
    const bookDescription = req.body.bookDescription;
    const categoryId = req.body.category;

    const brandId = parseInt(brand);
    const imageUrl = image.path;

    const book = new Book(null, bookName, bookStock, imageUrl, bookDescription, categoryId);

    book.save()
        .then(() => {

            res.redirect('/');
        }
        )
        .catch(err => console.log(err));
};


// // exports.getArticle = (req, res, next) => {
// //     const artikelId = req.params;


// //     Artikel.findById(artikelId.artikelId)
// //         .then((artikel) => {

// //             Category.fetchAll().then(([categoryRows]) => {
// //                 res.render('artikel/edit-article', {
// //                     artikel: artikel[0],
// //                     categories: categoryRows
// //                 });
// //             });


// //         }
// //         )
// //         .catch(err => console.log(err));

// // };


// // Artikel.findById(artikelId.artikelId)
// // .then((artikel) => {

// //     Category.fetchAll().then(([categoryRows]) => {
// //         res.render('artikel/edit-article', {
// //             artikel: artikel[0],
// //             categories: categoryRows
// //         });
// //     });


// // }
// // )
// // .catch(err => console.log(err));