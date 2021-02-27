const db = require('../util/database');

module.exports = class Category {
    constructor(name) {

        this.name = name;
    }

    save() {
        return db.execute('INSERT INTO categories (name) VALUES (?)',
            [
                this.name
            ]

        );
    }

    // static deleteById(id) { } 

    static fetchAll() {
        return db.execute(`select * from categories;`);
        // return db.execute('SELECT a.name "author"');
    }

    static findById(id) {
        return db.execute('SELECT * FROM categories WHERE categories.id = ?', [id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM categories WHERE categories.id = ?', [id]);
    }

    static update(name, id) {
        return db.execute("UPDATE categories SET name=? WHERE id= ?", [name, id]);
    }
};
