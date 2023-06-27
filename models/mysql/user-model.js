class UserModel {
    constructor (db) {
        this.db = db;
    }

    async addSymbol({userId, symbol}) {
        this.db.execute(`
        insert into users_symbols (user_id, symbol) values (?, ?)`,
        [
            userId,
            symbol
        ]);
        
    }
};

module.exports = UserModel;