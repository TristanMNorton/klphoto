var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

router.get('/portfolio', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});


module.exports = router;
