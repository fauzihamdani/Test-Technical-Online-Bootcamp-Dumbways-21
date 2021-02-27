const db = require('../util/database');

module.exports = class Artikel {
    constructor(id, book_name, book_stock, book_image, book_description, category_id) {

        this.id = id;
        this.book_name = book_name;
        this.book_stock = book_stock;
        this.book_image = book_image;
        this.book_description = book_description;
        this.category_id = category_id;
    }

    save() {
        return db.execute(
            'INSERT INTO artikel ( book_name, book_stock, book_image, book_description, category_id) VALUES (?,?,?,?,?)',
            [
                // this.id ,
                this.book_name,
                this.book_stock,
                this.book_image,
                this.book_description,
                this.category_id,

            ]

        );
    }

    // static deleteById(id) { }

    static fetchAll() {

        // select * from cars inner join brand on cars.brand_id = brand.brand_id ;

        return db.execute(`select * from books inner join categories on books.category_id = categories.id ;
        `);
    }

    // static findById(id) {
    //     return db.execute('SELECT * FROM artikel inner join author on artikel.author_id = author.id inner join category on artikel.category_id = category.id WHERE artikel.id_artikel = ?', [id]);
    // }
};
