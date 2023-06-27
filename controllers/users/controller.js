const UserModel = require('../../models/mysql/user-model');

const addSymbol = async (req, res, next) => {
    try {
        const user = new UserModel(req.db);
        await user.addSymbol({userId: req.body.userId, symbol: req.body.symbol});
        console.log("Added symbol!");
        next();
    }
    catch (err) {
        console.log("Failed creaing a user symbol");
        next(err);
    }
    
}

module.exports = { addSymbol };