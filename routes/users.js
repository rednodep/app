const express = require('express');
const router = express.Router();

const { addSymbol } = require('../controllers/users/controller');
const { addSymbolValidator } = require('../controllers/users/validators');
const joi = require('../middlewares/joi');
const { getConnection } = require('../middlewares/db-connect');

const dashboard = (req, res) => {
    res.send("dashboard");
}

const logout = (req, res) => {
    res.send("dashboard");
}

router.use(getConnection);

router.get('/welcome', (req, res) => {
    res.send("Welcome")
});

router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol', joi(addSymbolValidator), addSymbol);

module.exports = router;