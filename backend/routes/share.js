const { emailShare, whatsappShare } = require('../controller/share');

const router = require('express').Router();

router.post('/email',emailShare);

router.post('/phone', whatsappShare)

module.exports = router;