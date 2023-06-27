const Joi = require('joi');

const addSymbolValidator = Joi.object({
    userId: Joi.number().required().positive(),
    symbol: Joi.string().required().alphanum().min(3).max(5)
});

module.exports = { addSymbolValidator };