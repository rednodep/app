const express = require('express');
const router = express.Router();

const dashboard = (req, res) => {
    res.send("dashboard");
}

const logout = (req, res) => {
    res.send("dashboard");
}

const addSymbol = (req, res) => {
    res.send("dashboard");
}

router.get('/welcome', (req, res) => {
    res.send("Welcome")
});

router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol', addSymbol);

module.exports = router;