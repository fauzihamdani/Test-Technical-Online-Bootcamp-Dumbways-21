const Category = require('../model/category');


exports.getAddCategory = (req, res, next) => {
    Category.fetchAll()
        .then(([categoryRows, fieldData]) => {
            res.render('category/category', {
                errorMessage: '',
                categories: categoryRows
            });
        }).catch(err => console.log(err));

};


exports.postCategory = (req, res, next) => {
    const getCategory = req.body.category;
    console.log(getCategory);
    const category = new Category(getCategory);
    category.save()
        .then(() => {
            res.redirect('/addcategory');
        })
        .catch((err) => console.log(err));
};


exports.getUpdate = (req, res, next) => {
    const categoryId = req.body.categoryId;


    Category.findById(categoryId)
        .then((categoryRes) => {
            res.render('category/update-category', {
                category: categoryRes[0][0]
            });
        }
        )
        .catch(err => console.log(err));

};

exports.deleteCategory = (req, res, next) => {
    const categoryId = req.body.categoryId;


    Category.delete(categoryId)
        .then(() => {
            res.redirect('/addcategory');
        }
        )
        .catch(err => console.log(err));

};

exports.updatedCategory = (req, res, next) => {
    const categoryId = req.body.categoryId;
    const getCategoryName = req.body.category;


    Category.update(getCategoryName, categoryId)
        .then(() => {
            res.render('category/addcategory');
        }
        )
        .catch(err => console.log(err));

};
