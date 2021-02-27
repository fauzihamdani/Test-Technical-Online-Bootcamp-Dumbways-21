const db = require('../util/database');

module.exports = class Auth {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        return db.execute(
            'INSERT INTO brand (brand_name) VALUES (?)',
            [
                this.name
            ]
        );
    }

    static fetchAll() {
        return db.execute(`select * from brand ;
        `);
        // return db.execute('SELECT a.name "author"');
    }

    // static findByOne(email) {
    //     return db.execute('SELECT * FROM author WHERE author.email = ?', [email]);
    // }

    // static findById(id) {
    //     return db.execute('SELECT * FROM author WHERE author.id = ?', [id]);
    // }

    // static findToLoggedIn(email) {
    //     return db.execute('SELECT COUNT(*) FROM author WHERE author.email = ?', [data]);
    // }

    // static addBrand(email, password) {
    //     return db.execute('SELECT * FROM author WHERE email = ? AND password = ?', [email, password]);
    // }
};

// SELECT COUNT(*) FROM author WHERE author.email = ?;

// SELECT * FROM author WHERE author.email = ?