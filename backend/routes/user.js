const {loginUser} = require('../controller/user');

const router = require('express').Router();

router.post('/login', loginUser);

module.exports = router;

