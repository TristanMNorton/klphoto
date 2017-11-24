var express = require('express');
var router = express.Router();
var tempConst = require('../controllers/tempconst');

router.get('/', tempConst.index);

module.exports = router;