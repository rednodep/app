module.exports = (error, req, res, next) => {
    res.status(400);
    res.end();
    console.log("Error occurred: " + error);
    next();
};