module.exports = (error, req, res, next) => {
    // TODO: check if the error contains an HttpError with a status, otherwise it will only return 400
    res.status(400);
    res.end();
    console.log("Error occurred: " + error);
    next();
};