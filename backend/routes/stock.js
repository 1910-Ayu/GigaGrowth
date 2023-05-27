const { fetchPrice } = require('../controller/stock');

const router = require('express').Router();

router.post('/fetch', fetchPrice);

module.exports = router;