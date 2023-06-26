const express = require('express');
const router = express.Router();

const authenticate = (req, res) => {
    res.send("authenticate");
}

const callback = (req, res) => {
    res.send("callback");
}

router.get('/', (req, res) => {
    res.send("Github")
});
router.get('/authenticate', authenticate);
router.get('/callback', callback);

module.exports = router;